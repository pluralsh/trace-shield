package handlers

import (
	"context"
	"encoding/json"
	"net/http"
	"strings"

	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	px "github.com/ory/x/pointerx"
	"github.com/pluralsh/trace-shield/consts"
	"github.com/pluralsh/trace-shield/utils"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type PolicyRequest struct {
	Subject             string `json:"subject"`
	IsOAuth2Client      bool   `json:"isOAuth2Client"`
	RequestedPermission string `json:"requestedPermission"`
	permission          consts.ObservabilityTenantPermission
	relation            consts.ObservabilityTenantRelation
}

func (h *Handler) ObservabilityTenantPolicyCheck(w http.ResponseWriter, r *http.Request) {
	log := h.Log.WithName("ObservabilityTenantPolicyCheck")

	p := &PolicyRequest{}

	// Try to decode the request body into the struct. If there is an error,
	// respond to the client with the error message and a 400 status code.
	err := json.NewDecoder(r.Body).Decode(p)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}

	json, _ := json.Marshal(p)
	log.Info("Post", "body", string(json)) // TODO: remove debug log query since it leaks tokens

	permission, err := consts.ParseObservabilityTenantPermission(p.RequestedPermission)
	if err != nil {
		http.Error(w, err.Error(), http.StatusForbidden)
		return
	}
	p.permission = permission

	relation, err := p.permission.GetRelation()
	if err != nil {
		http.Error(w, err.Error(), http.StatusForbidden)
		return
	}
	p.relation = relation

	tenantHeader := r.Header.Get(consts.TenantHeader)

	if tenantHeader != "" {
		// If the tenant header is already set, we will check the permission directly against the tenant
		// This is to allow the user to access the tenant they are already in

		hasAccess, err := h.C.KetoClient.Check(r.Context(), p.GetRelationTuple(tenantHeader))
		if err != nil {
			log.Error(err, "Failed to check if subject has access to the tenant")
			http.Error(w, err.Error(), http.StatusForbidden)
			return
		}

		if hasAccess {
			log.Info("Subject accessing tenant", "subject", p.Subject, "tenant", tenantHeader, "permission", p.permission)
			return
		} else {
			log.Info("Subject does not have access to tenant", "subject", p.Subject, "tenant", tenantHeader, "permission", p.permission)
			http.Error(w, "Subject does not have access to tenant", http.StatusForbidden)
			return
		}
	}

	tenants := []string{}

	if !p.IsOAuth2Client {
		orgAdminTuple := &rts.RelationTuple{
			Namespace: consts.OrganizationNamespace.String(),
			Object:    consts.MainOrganizationName,
			Relation:  consts.OrganizationPermissionAdmin.String(),
			Subject: rts.NewSubjectSet(
				consts.UserNamespace.String(),
				p.Subject,
				"",
			),
		}

		isOrgAdmin, err := h.C.KetoClient.Check(r.Context(), orgAdminTuple)
		if err != nil {
			log.Error(err, "Failed to check if user is org admin")
		}

		if isOrgAdmin {
			gottenTenants, err := h.C.ControllerClient.ObservabilityV1alpha1().Tenants().List(r.Context(), metav1.ListOptions{})
			if err != nil {
				log.Error(err, "Failed to list observability tenants")
			}

			for _, tenant := range gottenTenants.Items {
				tenants = append(tenants, tenant.Name)
			}
		} else {
			// get all the groups a user is a member of
			groups, err := h.getUserGroups(p.Subject)
			if err != nil {
				log.Error(err, "Failed to get user groups")
			}

			// get all the tenants a user has permissions for via group membership
			for _, group := range groups {
				groupTenants, err := h.getGroupTenants(group)
				if err != nil {
					log.Error(err, "Failed to get group tenants", "group", group)
				}
				tenants = append(tenants, groupTenants...)
			}
		}

	}
	// get all the tenants a client has permissions for
	clientTenants, err := h.getDirectTenants(p)
	if err != nil {
		log.Error(err, "Failed to get client tenants")
	}
	tenants = append(tenants, clientTenants...)

	if len(tenants) == 0 {
		http.Error(w, "No tenants that can be accessed", http.StatusForbidden)
		return
	} else {
		if p.IsOAuth2Client && len(tenants) > 1 {
			http.Error(w, "OAuth2 clients can only have access to one tenant. Please contact your administrator to resolve the issue.", http.StatusForbidden)
			return
		}
		w.Header().Set(consts.TenantHeader, strings.Join(utils.DedupeList(tenants), "|"))
		return
	}
}

func (p *PolicyRequest) GetRelationQuery() *rts.RelationQuery {
	ss := &rts.Subject{}
	if p.IsOAuth2Client {
		ss = rts.NewSubjectSet(
			consts.OAuth2ClientNamespace.String(),
			p.Subject,
			"",
		)
	} else {
		ss = rts.NewSubjectSet(
			consts.UserNamespace.String(),
			p.Subject,
			"",
		)
	}

	return &rts.RelationQuery{
		Namespace: px.Ptr(consts.ObservabilityTenantNamespace.String()),
		Relation:  px.Ptr(p.relation.String()),
		Subject:   ss,
	}
}

func (p *PolicyRequest) GetRelationTuple(tenantId string) *rts.RelationTuple {
	ss := &rts.Subject{}
	if p.IsOAuth2Client {
		ss = rts.NewSubjectSet(
			consts.OAuth2ClientNamespace.String(),
			p.Subject,
			"",
		)
	} else {
		ss = rts.NewSubjectSet(
			consts.UserNamespace.String(),
			p.Subject,
			"",
		)
	}

	return &rts.RelationTuple{
		Namespace: consts.ObservabilityTenantNamespace.String(),
		Object:    tenantId,
		Relation:  p.permission.String(),
		Subject:   ss,
	}
}

// Get the ObservabilityTenants a user has permissions for
func (h *Handler) getDirectTenants(p *PolicyRequest) ([]string, error) {
	query := p.GetRelationQuery()
	respTuples, err := h.C.KetoClient.QueryAllTuples(context.Background(), query, 100)
	if err != nil {
		return []string{}, err
	}

	output := []string{}
	for _, tuple := range respTuples {
		// likely unnecessary but just in case
		if tuple.Namespace == consts.ObservabilityTenantNamespace.String() && tuple.Object != "" {
			output = append(output, tuple.Object)
		}
	}

	return output, nil
}

// Get the ObservabilityTenants a group has permissions for
func (h *Handler) getGroupPolicyTenants(p *PolicyRequest, group string) ([]string, error) {
	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.ObservabilityTenantNamespace.String()),
		Relation:  px.Ptr(p.relation.String()),
		Subject:   rts.NewSubjectSet(consts.GroupNamespace.String(), group, consts.GroupRelationMembers.String()),
	}
	respTuples, err := h.C.KetoClient.QueryAllTuples(context.Background(), &query, 100)
	if err != nil {
		return []string{}, err
	}

	output := []string{}
	for _, tuple := range respTuples {
		// likely unnecessary but just in case
		if tuple.Namespace == consts.ObservabilityTenantNamespace.String() && tuple.Object != "" {
			output = append(output, tuple.Object)
		}
	}

	return output, nil
}

func (p *PolicyRequest) processRequest(subject string) error {
	// log := h.Log.WithName("getUserTenants")
	permission, err := consts.ParseObservabilityTenantPermission(p.RequestedPermission)
	if err != nil {
		return err
	}
	p.permission = permission

	relation, err := p.permission.GetRelation()
	if err != nil {
		return err
	}
	p.relation = relation

	if p.IsOAuth2Client {
	}

	return nil
}

func (p *PolicyRequest) processOAuth2Client() error {

	return nil
}

package handlers

import (
	"context"
	"net/http"

	"github.com/go-chi/render"
	"github.com/pluralsh/trace-shield/consts"
	"github.com/pluralsh/trace-shield/utils"

	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	px "github.com/ory/x/pointerx"
)

// Get all the ObservabilityTenants has permissions for based on direct bindings and group memberships
func (h *Handler) getUserTenants(subject string) ([]string, error) {
	// get all the groups a user is a member of
	groups, err := h.getUserGroups(subject)
	if err != nil {
		return []string{}, err
	}

	// get all the tenants a user has permissions for
	tenants, err := h.getUserDirectTenants(subject)
	if err != nil {
		return []string{}, err
	}

	// get all the tenants a user has permissions for via group membership
	for _, group := range groups {
		groupTenants, err := h.getGroupTenants(group)
		if err != nil {
			return []string{}, err
		}
		tenants = append(tenants, groupTenants...)
	}

	// get all the tenants a user has permissions for via organization admin permissions
	orgs, err := h.isOrgAdmin(subject)
	if err != nil {
		return []string{}, err
	}
	for _, org := range orgs {
		orgTenants, err := h.getOrgTenants(org)
		if err != nil {
			return []string{}, err
		}
		tenants = append(tenants, orgTenants...)
	}

	return utils.DedupeList(tenants), nil
}

// Check in which organizations a user is an admin
func (h *Handler) isOrgAdmin(subject string) ([]string, error) {
	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.OrganizationNamespace.String()),
		Relation:  px.Ptr(consts.OrganizationRelationAdmins.String()),
		Subject:   rts.NewSubjectSet(consts.UserNamespace.String(), subject, ""),
	}
	respTuples, err := h.C.KetoClient.QueryAllTuples(context.Background(), &query, 100)
	if err != nil {
		return []string{}, err
	}

	output := []string{}
	for _, tuple := range respTuples {
		// likely unnecessary but just in case
		if tuple.Namespace == consts.OrganizationNamespace.String() && tuple.Relation == consts.OrganizationRelationAdmins.String() && tuple.Object != "" {
			output = append(output, tuple.Object)
		}
	}

	return output, nil
}

// Get all the ObservabilityTenants that belong to an organization
func (h *Handler) getOrgTenants(org string) ([]string, error) {
	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.ObservabilityTenantNamespace.String()),
		Subject:   rts.NewSubjectSet("Organization", org, ""),
	}
	respTuples, err := h.C.KetoClient.QueryAllTuples(context.Background(), &query, 100)
	if err != nil {
		return []string{}, err
	}

	output := []string{}
	for _, tuple := range respTuples {
		// likely unnecessary but just in case
		if tuple.Namespace == consts.ObservabilityTenantNamespace.String() && tuple.Relation == "organizations" && tuple.Object != "" {
			output = append(output, tuple.Object)
		}
	}

	return output, nil
}

// Get the groups a user is a member of
func (h *Handler) getUserGroups(subject string) ([]string, error) {
	query := rts.RelationQuery{
		Namespace: px.Ptr("Group"),
		Relation:  px.Ptr("members"),
		Subject:   rts.NewSubjectSet("User", subject, ""),
	}
	respTuples, err := h.C.KetoClient.QueryAllTuples(context.Background(), &query, 100)
	if err != nil {
		return []string{}, err
	}

	output := []string{}
	for _, tuple := range respTuples {
		// likely unnecessary but just in case
		if tuple.Namespace == "Group" && tuple.Relation == "members" && tuple.Object != "" {
			output = append(output, tuple.Object)
		}
	}

	return output, nil
}

// Get the ObservabilityTenants a user has permissions for
func (h *Handler) getUserDirectTenants(subject string) ([]string, error) {
	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.ObservabilityTenantNamespace.String()),
		Subject:   rts.NewSubjectSet("User", subject, ""),
	}
	respTuples, err := h.C.KetoClient.QueryAllTuples(context.Background(), &query, 100)
	if err != nil {
		return []string{}, err
	}

	output := []string{}
	for _, tuple := range respTuples {
		// likely unnecessary but just in case
		if tuple.Namespace == "ObservabilityTenant" && tuple.Object != "" {
			output = append(output, tuple.Object)
		}
	}

	return output, nil
}

// Get the ObservabilityTenants a group has permissions for
func (h *Handler) getGroupTenants(group string) ([]string, error) {
	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.ObservabilityTenantNamespace.String()),
		Subject:   rts.NewSubjectSet("Group", group, "members"),
	}
	respTuples, err := h.C.KetoClient.QueryAllTuples(context.Background(), &query, 100)
	if err != nil {
		return []string{}, err
	}

	output := []string{}
	for _, tuple := range respTuples {
		// likely unnecessary but just in case
		if tuple.Namespace == "ObservabilityTenant" && tuple.Object != "" {
			output = append(output, tuple.Object)
		}
	}

	return output, nil
}

func ErrInvalidRequest(err error) render.Renderer {
	return &ErrResponse{
		Err:            err,
		HTTPStatusCode: 400,
		StatusText:     "Invalid request.",
		ErrorText:      err.Error(),
	}
}

func ErrFailedToGetAdmins(err error) render.Renderer {
	return &ErrResponse{
		Err:            err,
		HTTPStatusCode: 400,
		StatusText:     "Failed to get organization admins.",
		ErrorText:      err.Error(),
	}
}

func ErrFailedToSetInitialAdmin(err error) render.Renderer {
	return &ErrResponse{
		Err:            err,
		HTTPStatusCode: 400,
		StatusText:     "Failed to set initial organization admin.",
		ErrorText:      err.Error(),
	}
}

type ErrResponse struct {
	Err            error `json:"-"` // low-level runtime error
	HTTPStatusCode int   `json:"-"` // http response status code

	StatusText string `json:"status"`          // user-level status message
	AppCode    int64  `json:"code,omitempty"`  // application-specific error code
	ErrorText  string `json:"error,omitempty"` // application-level error message, for debugging
}

func (e *ErrResponse) Render(w http.ResponseWriter, r *http.Request) error {
	render.Status(r, e.HTTPStatusCode)
	return nil
}

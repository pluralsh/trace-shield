package clients

import (
	"context"
	"fmt"

	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	observabilityv1alpha1 "github.com/pluralsh/trace-shield-controller/api/observability/v1alpha1"
	"github.com/pluralsh/trace-shield/consts"
	"github.com/pluralsh/trace-shield/graph/model"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

type ObservabilityTenantRelation struct {
	Type     consts.ObservabilityTenantRelation
	Bindings *model.ObservabilityTenantPermissionBindingsInput
}

func (c *ClientWrapper) CreateObservabilityTenant(ctx context.Context, id string, name *string, admins *model.ObservabilityTenantPermissionBindingsInput, metricsReaders *model.ObservabilityTenantPermissionBindingsInput, metricsWriters *model.ObservabilityTenantPermissionBindingsInput, metricsDeleters *model.ObservabilityTenantPermissionBindingsInput, metricsRulesReaders *model.ObservabilityTenantPermissionBindingsInput, metricsRulesWriters *model.ObservabilityTenantPermissionBindingsInput, metricsRulesDeleters *model.ObservabilityTenantPermissionBindingsInput, metricsAlertsReaders *model.ObservabilityTenantPermissionBindingsInput, metricsAlertsWriters *model.ObservabilityTenantPermissionBindingsInput, logsReaders *model.ObservabilityTenantPermissionBindingsInput, logsWriters *model.ObservabilityTenantPermissionBindingsInput, logsDeleters *model.ObservabilityTenantPermissionBindingsInput, logsRulesReaders *model.ObservabilityTenantPermissionBindingsInput, logsRulesWriters *model.ObservabilityTenantPermissionBindingsInput, logsRulesDeleters *model.ObservabilityTenantPermissionBindingsInput, tracesReaders *model.ObservabilityTenantPermissionBindingsInput, tracesWriters *model.ObservabilityTenantPermissionBindingsInput, limits *model.ObservabilityTenantLimitsInput) (*model.ObservabilityTenant, error) {
	log := c.Log.WithName("CreateObservabilityTenant").WithValues("Name", name)

	var mimirLimits *observabilityv1alpha1.MimirLimits

	if limits != nil && limits.Mimir != nil {
		tmpMimirLimits := observabilityv1alpha1.MimirLimits(*limits.Mimir)
		mimirLimits = &tmpMimirLimits
	}

	tenantStruct := &observabilityv1alpha1.Tenant{
		ObjectMeta: metav1.ObjectMeta{
			Name: id,
		},
		Spec: observabilityv1alpha1.TenantSpec{
			Limits: &observabilityv1alpha1.LimitSpec{
				Mimir: mimirLimits,
			},
		},
	}

	if name != nil {
		tenantStruct.Spec.DisplayName = *name
	}

	var tenantRelations []ObservabilityTenantRelation

	if admins != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationAdmins,
			Bindings: admins,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsReaders,
			Bindings: metricsReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsWriters,
			Bindings: metricsWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsDeleters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsDeleters,
			Bindings: metricsDeleters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsRulesReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsRulesReaders,
			Bindings: metricsRulesReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsRulesWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsRulesWriters,
			Bindings: metricsRulesWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsRulesDeleters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsRulesDeleters,
			Bindings: metricsRulesDeleters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsAlertsReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsAlertsReaders,
			Bindings: metricsAlertsReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsAlertsWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsAlertsWriters,
			Bindings: metricsAlertsWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsReaders,
			Bindings: logsReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsWriters,
			Bindings: logsWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsDeleters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsDeleters,
			Bindings: logsDeleters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsRulesReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsRulesReaders,
			Bindings: logsRulesReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsRulesWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsRulesWriters,
			Bindings: logsRulesWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsRulesDeleters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsRulesDeleters,
			Bindings: logsRulesDeleters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if tracesReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationTracesReaders,
			Bindings: tracesReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if tracesWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationTracesWriters,
			Bindings: tracesWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}

	tenant, err := c.ControllerClient.ObservabilityV1alpha1().Tenants().Create(ctx, tenantStruct, metav1.CreateOptions{})
	if err != nil {
		log.Error(err, "Failed to create observability tenant")
		return nil, err
	}

	if err := c.MutateObservabilityTenantInKeto(ctx, id, tenantRelations); err != nil {
		log.Error(err, "Failed to mutate observability tenant in keto")
		return nil, err
	}

	return &model.ObservabilityTenant{
		ID: tenant.Name,
		Limits: &model.ObservabilityTenantLimits{
			Mimir: tenant.Spec.Limits.Mimir,
		},
	}, nil
}

func (c *ClientWrapper) UpdateObservabilityTenant(ctx context.Context, id string, name *string, admins *model.ObservabilityTenantPermissionBindingsInput, metricsReaders *model.ObservabilityTenantPermissionBindingsInput, metricsWriters *model.ObservabilityTenantPermissionBindingsInput, metricsDeleters *model.ObservabilityTenantPermissionBindingsInput, metricsRulesReaders *model.ObservabilityTenantPermissionBindingsInput, metricsRulesWriters *model.ObservabilityTenantPermissionBindingsInput, metricsRulesDeleters *model.ObservabilityTenantPermissionBindingsInput, metricsAlertsReaders *model.ObservabilityTenantPermissionBindingsInput, metricsAlertsWriters *model.ObservabilityTenantPermissionBindingsInput, logsReaders *model.ObservabilityTenantPermissionBindingsInput, logsWriters *model.ObservabilityTenantPermissionBindingsInput, logsDeleters *model.ObservabilityTenantPermissionBindingsInput, logsRulesReaders *model.ObservabilityTenantPermissionBindingsInput, logsRulesWriters *model.ObservabilityTenantPermissionBindingsInput, logsRulesDeleters *model.ObservabilityTenantPermissionBindingsInput, tracesReaders *model.ObservabilityTenantPermissionBindingsInput, tracesWriters *model.ObservabilityTenantPermissionBindingsInput, limits *model.ObservabilityTenantLimitsInput) (*model.ObservabilityTenant, error) {
	log := c.Log.WithName("UpdateObservabilityTenant").WithValues("Name", name)

	var mimirLimits *observabilityv1alpha1.MimirLimits

	if limits != nil && limits.Mimir != nil {
		tmpMimirLimits := observabilityv1alpha1.MimirLimits(*limits.Mimir)
		mimirLimits = &tmpMimirLimits
	}

	existingTenant, err := c.ControllerClient.ObservabilityV1alpha1().Tenants().Get(ctx, id, metav1.GetOptions{})
	if err != nil {
		log.Error(err, "Failed to get observability tenant")
		return nil, err
	}

	tenantStruct := &observabilityv1alpha1.Tenant{
		ObjectMeta: metav1.ObjectMeta{
			Name:            id,
			ResourceVersion: existingTenant.GetResourceVersion(),
		},
		Spec: observabilityv1alpha1.TenantSpec{
			Limits: &observabilityv1alpha1.LimitSpec{
				Mimir: mimirLimits,
			},
		},
	}

	if name != nil {
		tenantStruct.Spec.DisplayName = *name
	}

	var tenantRelations []ObservabilityTenantRelation

	if admins != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationAdmins,
			Bindings: admins,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsReaders,
			Bindings: metricsReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsWriters,
			Bindings: metricsWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsDeleters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsDeleters,
			Bindings: metricsDeleters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsRulesReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsRulesReaders,
			Bindings: metricsRulesReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsRulesWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsRulesWriters,
			Bindings: metricsRulesWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsRulesDeleters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsRulesDeleters,
			Bindings: metricsRulesDeleters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsAlertsReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsAlertsReaders,
			Bindings: metricsAlertsReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if metricsAlertsWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationMetricsAlertsWriters,
			Bindings: metricsAlertsWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsReaders,
			Bindings: logsReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsWriters,
			Bindings: logsWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsDeleters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsDeleters,
			Bindings: logsDeleters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsRulesReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsRulesReaders,
			Bindings: logsRulesReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsRulesWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsRulesWriters,
			Bindings: logsRulesWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if logsRulesDeleters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationLogsRulesDeleters,
			Bindings: logsRulesDeleters,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if tracesReaders != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationTracesReaders,
			Bindings: tracesReaders,
		}
		tenantRelations = append(tenantRelations, relation)
	}
	if tracesWriters != nil {
		relation := ObservabilityTenantRelation{
			Type:     consts.ObservabilityTenantRelationTracesWriters,
			Bindings: tracesWriters,
		}
		tenantRelations = append(tenantRelations, relation)
	}

	tenant, err := c.ControllerClient.ObservabilityV1alpha1().Tenants().Update(ctx, tenantStruct, metav1.UpdateOptions{})
	if err != nil {
		log.Error(err, "Failed to update observability tenant")
		return nil, err
	}

	if err := c.MutateObservabilityTenantInKeto(ctx, id, tenantRelations); err != nil {
		log.Error(err, "Failed to mutate observability tenant in keto")
		return nil, err
	}

	return &model.ObservabilityTenant{
		ID: tenant.Name,
		Limits: &model.ObservabilityTenantLimits{
			Mimir: tenant.Spec.Limits.Mimir,
		},
	}, nil
}

func (c *ClientWrapper) MutateObservabilityTenantInKeto(ctx context.Context, id string, tenantRelations []ObservabilityTenantRelation) error {
	log := c.Log.WithName("ObservabilityTenant").WithValues("ID", id)

	toAdd := make([]*rts.RelationTuple, 0)
	toRemove := make([]*rts.RelationTuple, 0)

	for _, relation := range tenantRelations {
		add, remove, err := c.OsTenantChangeset(ctx, id, relation.Bindings, relation.Type)
		if err != nil {
			log.Error(err, "Failed to get observability tenant changeset")
			return err
		}

		toAdd = append(toAdd, add...)
		toRemove = append(toRemove, remove...)
	}

	return c.KetoClient.TransactTuples(ctx, toAdd, toRemove)
}

// function that determines which users or groups to add or remove from the observability tenant of an oauth2 client
func (c *ClientWrapper) OsTenantChangeset(ctx context.Context, id string, bindings *model.ObservabilityTenantPermissionBindingsInput, relation consts.ObservabilityTenantRelation) (toAdd []*rts.RelationTuple, toRemove []*rts.RelationTuple, err error) {

	currentUsers, currentGroups, currentClients, err := c.ExpandTenantRelation(ctx, id, relation)
	if err != nil {
		return nil, nil, fmt.Errorf("failed to get current viewers: %w", err)
	}

	if bindings != nil {
		for _, userId := range bindings.Users {
			if !userIdInListOfUsers(currentUsers, userId) {
				user := &model.User{
					ID: userId,
				}
				toAdd = append(toAdd, user.GetTenantTuple(id, relation))
			}
		}

		for _, user := range currentUsers {
			if !stringContains(bindings.Users, user.ID) {
				toRemove = append(toRemove, user.GetTenantTuple(id, relation))
			}
		}

		for _, groupName := range bindings.Groups {
			if !groupNameInListOfGroups(currentGroups, groupName) {
				group := &model.Group{
					Name: groupName,
				}
				toAdd = append(toAdd, group.GetTenantTuple(id, relation))
			}
		}

		for _, group := range currentGroups {
			if !stringContains(bindings.Groups, group.Name) {
				toRemove = append(toRemove, group.GetTenantTuple(id, relation))
			}
		}

		for _, clientId := range bindings.Oauth2Clients {
			if !ClientIDInListOfOAuth2Clients(currentClients, clientId) {
				client := &model.OAuth2Client{
					ClientID: &clientId,
				}
				toAdd = append(toAdd, client.GetTenantTuple(id, relation))
			}
		}

		for _, client := range currentClients {
			if !stringContains(bindings.Oauth2Clients, *client.ClientID) {
				toRemove = append(toRemove, client.GetTenantTuple(id, relation))
			}
		}
	}

	return toAdd, toRemove, nil
}

// function that resolves an ObservabilityTenantPermissionBindings
func (c *ClientWrapper) ResolveTenantBindings(ctx context.Context, id string, relation consts.ObservabilityTenantRelation) (bindings *model.ObservabilityTenantPermissionBindings, err error) {
	log := c.Log.WithName("ResolveTenantBindings").WithValues("ID", id)

	users, groups, clients, err := c.ExpandTenantRelation(ctx, id, relation)
	if err != nil {
		log.Error(err, "Failed to expand tenant relation")
		return nil, fmt.Errorf("failed to expand tenant relation %s: %w", relation, err)
	}

	if len(users) > 0 || len(groups) > 0 || len(clients) > 0 {
		bindings = &model.ObservabilityTenantPermissionBindings{}
	}

	for _, user := range users {
		bindings.Users = append(bindings.Users, user)
	}

	for _, group := range groups {
		bindings.Groups = append(bindings.Groups, group)
	}

	for _, client := range clients {
		bindings.Oauth2Clients = append(bindings.Oauth2Clients, client)
	}
	log.Info("Success resolving tenant bindings")
	return bindings, nil
}

// function that expands everybody with permissions on a tenant
func (c *ClientWrapper) ExpandTenantRelation(ctx context.Context, id string, relation consts.ObservabilityTenantRelation) (users []*model.User, groups []*model.Group, clients []*model.OAuth2Client, err error) {
	log := c.Log.WithName("ExpandTenantRelation").WithValues("ID", id)

	ss := rts.NewSubjectSet("ObservabilityTenant", id, relation.String())

	respTuples, err := c.KetoClient.Expand(ctx, ss, 100)
	if err != nil {
		log.Error(err, "Failed to query tuples")
		return nil, nil, nil, fmt.Errorf("failed to query tuples: %w", err)
	}

	log.Info("Success expanding tenant relation", "relation", relation, "tuples", respTuples)

	if respTuples != nil && respTuples.Children != nil {
		for _, child := range respTuples.Children {

			user, group, client := c.processRelation(child)
			switch {
			case user != nil:
				users = append(users, user)
			case group != nil:
				groups = append(groups, group)
			case client != nil:
				clients = append(clients, client)
			}
		}
	}

	return users, groups, clients, nil
}

func (c *ClientWrapper) processRelation(tree *rts.SubjectTree) (user *model.User, group *model.Group, client *model.OAuth2Client) {
	switch tree.Tuple.Subject.GetSet().Namespace {
	case consts.UserNamespace.String():
		user = &model.User{
			ID: tree.Tuple.Subject.GetSet().Object,
		}
	case consts.GroupNamespace.String():
		group = &model.Group{
			Name: tree.Tuple.Subject.GetSet().Object,
		}
	case consts.OAuth2ClientNamespace.String():
		client = &model.OAuth2Client{
			ClientID: &tree.Tuple.Subject.GetSet().Object,
		}
	}
	return user, group, client
}

// function that uses the controller client to list all observability tenants
func (c *ClientWrapper) ListTenants(ctx context.Context) ([]*model.ObservabilityTenant, error) {
	log := c.Log.WithName("ListTenants")

	tenants, err := c.ControllerClient.ObservabilityV1alpha1().Tenants().List(ctx, metav1.ListOptions{})
	if err != nil {
		log.Error(err, "Failed to list observability tenants")
		return nil, err
	}

	var outputTenants []*model.ObservabilityTenant

	for _, tenant := range tenants.Items {
		outputTenants = append(outputTenants, &model.ObservabilityTenant{
			ID: tenant.Name,
			Limits: &model.ObservabilityTenantLimits{
				Mimir: tenant.Spec.Limits.Mimir,
			},
		})
	}

	log.Info("Success listing observability tenants")
	return outputTenants, nil
}

// function that gets an observability tenant using the controller client
func (c *ClientWrapper) GetTenant(ctx context.Context, name string) (*model.ObservabilityTenant, error) {
	log := c.Log.WithName("GetTenant").WithValues("Name", name)

	if name == "" {
		return nil, fmt.Errorf("observability tenant name cannot be empty")
	}

	tenant, err := c.ControllerClient.ObservabilityV1alpha1().Tenants().Get(ctx, name, metav1.GetOptions{})
	if err != nil {
		log.Error(err, "Failed to get observability tenant")
		return nil, err
	}

	log.Info("Got observability tenant", "Tenant", tenant)

	outputTenant := &model.ObservabilityTenant{
		ID: tenant.Name,
		Limits: &model.ObservabilityTenantLimits{
			Mimir: tenant.Spec.Limits.Mimir,
		},
	}

	log.Info("Success getting observability tenant")
	return outputTenant, nil
}

// function that deletes an observability tenant using the controller client
func (c *ClientWrapper) DeleteTenant(ctx context.Context, name string) (*model.ObservabilityTenant, error) {
	log := c.Log.WithName("DeleteTenant").WithValues("Name", name)

	if name == "" {
		return nil, fmt.Errorf("observability tenant name cannot be empty")
	}

	err := c.ControllerClient.ObservabilityV1alpha1().Tenants().Delete(ctx, name, metav1.DeleteOptions{})
	if err != nil {
		log.Error(err, "Failed to delete observability tenant")
		return nil, err
	}

	log.Info("Success deleting observability tenant")
	return &model.ObservabilityTenant{
		ID: name,
	}, nil
}

// function that gets user objects from a list of user ids
func (c *ClientWrapper) GetObservabilityTenantUsers(ctx context.Context, users []*model.User) ([]*model.User, error) {
	log := c.Log.WithName("GetObservabilityTenantUsers")
	//TODO: dedupe with GetOAuth2ClientUserLoginBindings

	var output []*model.User

	for _, inUser := range users {
		user, err := c.GetUserFromId(ctx, inUser.ID)
		if err != nil {
			log.Error(err, "failed to get user", "ID", inUser.ID)
			continue
		}
		output = append(output, user)
	}
	return output, nil
}

// function that gets group objects from a list of group names
func (c *ClientWrapper) GetObservabilityTenantGroups(ctx context.Context, groups []*model.Group) ([]*model.Group, error) {
	log := c.Log.WithName("GetObservabilityTenantGroups")
	// TODO: dedupe with GetOAuth2ClientGroupLoginBindings

	var output []*model.Group

	for _, inGroup := range groups {
		group, err := c.GetGroupFromName(ctx, inGroup.Name)
		if err != nil {
			log.Error(err, "failed to get group", "Name", inGroup.Name)
			continue
		}
		output = append(output, group)
	}
	return output, nil
}

// function that gets oauth2 client objects from a list of oauth2 client ids
func (c *ClientWrapper) GetObservabilityTenantOauth2Clients(ctx context.Context, clients []*model.OAuth2Client) ([]*model.OAuth2Client, error) {
	log := c.Log.WithName("GetObservabilityTenantOauth2Clients")
	// TODO: turn this into a more generic function that can be used for all the Get*From* functions

	var output []*model.OAuth2Client

	for _, inClient := range clients {
		client, err := c.GetOAuth2Client(ctx, *inClient.ClientID)
		if err != nil {
			log.Error(err, "failed to get oauth2 client", "ClientID", inClient.ClientID)
			continue
		}
		output = append(output, client)
	}
	return output, nil
}

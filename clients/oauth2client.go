package clients

import (
	"context"
	"fmt"
	"net/http"

	hydra "github.com/ory/hydra-client-go/v2"
	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	px "github.com/ory/x/pointerx"
	"github.com/pluralsh/trace-shield/consts"
	"github.com/pluralsh/trace-shield/format"
	"github.com/pluralsh/trace-shield/graph/model"
	"github.com/pluralsh/trace-shield/utils"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
)

type HydraOperation string

const (
	HydraOperationCreate HydraOperation = "create"
	HydraOperationUpdate HydraOperation = "update"
)

// ListOAuth2Clients is the resolver for the listOAuth2Clients field.
func (c *ClientWrapper) ListOAuth2Clients(ctx context.Context) ([]*model.OAuth2Client, error) {
	log := c.Log.WithName("ListOAuth2Clients")

	ctx, span := c.Tracer.Start(ctx, "ListOAuth2Clients")
	defer span.End()

	clients, resp, err := c.HydraClient.OAuth2Api.ListOAuth2Clients(ctx).Execute()
	if err != nil || resp.StatusCode != 200 {
		log.Error(err, "failed to list oauth2 clients")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, fmt.Errorf("failed to list oauth2 clients: %w", err)
	}
	var output []*model.OAuth2Client
	for _, client := range clients {
		output = append(output, format.HydraOAuth2ClientToGraphQL(client))
	}
	return output, nil
}

// GetOAuth2Client is the resolver for the listOAuth2Clients field.
func (c *ClientWrapper) GetOAuth2Client(ctx context.Context, id string) (*model.OAuth2Client, error) {
	log := c.Log.WithName("GetOAuth2Client")

	ctx, span := c.Tracer.Start(ctx, "GetOAuth2Client")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", id),
		)
	}

	client, resp, err := c.HydraClient.OAuth2Api.GetOAuth2Client(ctx, id).Execute()
	if err != nil || resp.StatusCode != 200 {
		log.Error(err, "failed to list oauth2 clients")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, fmt.Errorf("failed to list oauth2 clients: %w", err)
	}
	if client == nil {
		err = fmt.Errorf("client not found")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	return format.HydraOAuth2ClientToGraphQL(*client), nil
}

// function that gets all login bindings for an oauth2 client from keto
func (c *ClientWrapper) ResolveOAuth2ClientLoginBindings(ctx context.Context, id string) (bindings *model.LoginBindings, err error) {
	log := c.Log.WithName("ResolveOAuth2ClientLoginBindings").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "ResolveOAuth2ClientLoginBindings")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", id),
		)
	}

	users, groups, err := c.ExpandLoginBindingRelation(ctx, id)
	if err != nil {
		log.Error(err, "Failed to expand login binding relation")
		return nil, err
	}

	if len(users) > 0 || len(groups) > 0 {
		bindings = &model.LoginBindings{}
	}

	for _, user := range users {
		bindings.Users = append(bindings.Users, user)
	}

	for _, group := range groups {
		bindings.Groups = append(bindings.Groups, group)
	}

	log.Info("Success getting group members in keto")
	return bindings, nil
}

// function that expands everybody with login bindings on an oauth2 client
func (c *ClientWrapper) ExpandLoginBindingRelation(ctx context.Context, clientId string) (users []*model.User, groups []*model.Group, err error) {
	log := c.Log.WithName("ExpandLoginBindingRelation").WithValues("ClientID", clientId)

	ctx, span := c.Tracer.Start(ctx, "ExpandLoginBindingRelation")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", clientId),
		)
	}

	client := model.NewOAuth2Client(clientId)

	ss := client.GetLoginBindingsSubjectSet()

	respTuples, err := c.KetoClient.Expand(ctx, ss, 100)
	if err != nil {
		log.Error(err, "Failed to query tuples")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, nil, err
	}

	log.Info("Success expanding oauth2 client relation", "relation", consts.OAuth2ClientRelationLoginBindings, "tuples", respTuples)

	if respTuples != nil && respTuples.Children != nil {
		for _, child := range respTuples.Children {

			user, group, _ := c.processRelation(child)
			switch {
			case user != nil:
				users = append(users, user)
			case group != nil:
				groups = append(groups, group)
			}
		}
	}

	return users, groups, nil
}

func (c *ClientWrapper) CreateOAuth2Client(ctx context.Context, mode HydraOperation, allowedCorsOrigins []string, audience []string, authorizationCodeGrantAccessTokenLifespan *string, authorizationCodeGrantIDTokenLifespan *string, authorizationCodeGrantRefreshTokenLifespan *string, backChannelLogoutSessionRequired *bool, backChannelLogoutURI *string, clientCredentialsGrantAccessTokenLifespan *string, clientID *string, clientName *string, clientSecret *string, clientSecretExpiresAt *int64, clientURI *string, contacts []string, frontchannelLogoutSessionRequired *bool, frontchannelLogoutURI *string, grantTypes []string, implicitGrantAccessTokenLifespan *string, implicitGrantIDTokenLifespan *string, jwks map[string]interface{}, jwksURI *string, jwtBearerGrantAccessTokenLifespan *string, logoURI *string, metadata map[string]interface{}, policyURI *string, postLogoutRedirectUris []string, redirectUris []string, responseTypes []string, scope *string, sectorIdentifierURI *string, subjectType *string, tokenEndpointAuthMethod *string, tokenEndpointAuthSigningAlgorithm *string, tosURI *string, userinfoSignedResponseAlgorithm *string, loginBindings *model.LoginBindingsInput) (*model.OAuth2Client, error) {
	log := c.Log.WithName("CreateOAuth2Client").WithValues("Name", clientName, "ID", clientID, "Mode", mode)

	ctx, span := c.Tracer.Start(ctx, "CreateOAuth2Client")
	defer span.End()

	client := format.GraphQLNewOAuth2ClientToHydra(allowedCorsOrigins, audience, authorizationCodeGrantAccessTokenLifespan, authorizationCodeGrantIDTokenLifespan, authorizationCodeGrantRefreshTokenLifespan, backChannelLogoutSessionRequired, backChannelLogoutURI, clientCredentialsGrantAccessTokenLifespan, clientID, clientName, clientSecret, clientSecretExpiresAt, clientURI, contacts, frontchannelLogoutSessionRequired, frontchannelLogoutURI, grantTypes, implicitGrantAccessTokenLifespan, implicitGrantIDTokenLifespan, jwks, jwksURI, jwtBearerGrantAccessTokenLifespan, logoURI, metadata, policyURI, postLogoutRedirectUris, redirectUris, responseTypes, scope, sectorIdentifierURI, subjectType, tokenEndpointAuthMethod, tokenEndpointAuthSigningAlgorithm, tosURI, userinfoSignedResponseAlgorithm, loginBindings)

	// TODO: add bound observability tenant as owner of the client so we can ensure that a client is only bound to one tenant

	var createdClient *hydra.OAuth2Client
	var resp *http.Response
	var err error

	if mode == HydraOperationCreate {
		createdClient, resp, err = c.HydraClient.OAuth2Api.CreateOAuth2Client(ctx).OAuth2Client(client).Execute()
		if err != nil || resp.StatusCode != 201 {
			log.Error(err, "failed to create oauth2 client")
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
			return nil, fmt.Errorf("failed to create oauth2 client: %w", err)
		}
	} else if mode == HydraOperationUpdate {
		if clientID == nil || *clientID == "" {
			err = fmt.Errorf("clientID is required for update")
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
			return nil, err
		}
		createdClient, resp, err = c.HydraClient.OAuth2Api.SetOAuth2Client(ctx, *clientID).OAuth2Client(client).Execute()
		if err != nil || resp.StatusCode != 200 {
			log.Error(err, "failed to update oauth2 client")
			return nil, fmt.Errorf("failed to update oauth2 client: %w", err)
		}
	}

	if createdClient == nil {
		err = fmt.Errorf("failed to create oauth2 client")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", *createdClient.ClientId),
		)
	}

	exist, err := c.OAuth2ClientExistsInKeto(ctx, *createdClient.ClientId)
	if err != nil {
		log.Error(err, "failed to check if oauth2 client exists in keto")
	}
	if !exist {
		err = c.CreateOAuth2ClientInKeto(ctx, *createdClient.ClientId)
		if err != nil {
			log.Error(err, "failed to create oauth2 client in keto")
		}
	}

	if err := c.UpdateOAuth2ClientLoginBindings(ctx, *createdClient.ClientId, loginBindings); err != nil {
		log.Error(err, "failed to update oauth2 client login bindings")
		// TODO: should we return here?
	}

	log.Info("Success creating oauth2 client in hydra")

	output := format.HydraOAuth2ClientToGraphQL(*createdClient)

	// output.Organization = &model.Organization{
	// 	Name: "main", //TODO: decide whether to hardcode this or not
	// }

	return output, nil
}

// function that updates the login bindings of an oauth2 client
func (c *ClientWrapper) UpdateOAuth2ClientLoginBindings(ctx context.Context, clientId string, bindings *model.LoginBindingsInput) error {
	log := c.Log.WithName("UpdateOAuth2ClientLoginBindings").WithValues("ClientID", clientId)

	ctx, span := c.Tracer.Start(ctx, "UpdateOAuth2ClientLoginBindings")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", clientId),
		)
	}

	toAdd, toRemove, err := c.LoginBindingsChangeset(ctx, clientId, bindings)
	if err != nil {
		log.Error(err, "Failed to get oauth2 client changeset")
		return err
	}

	return c.KetoClient.TransactTuples(ctx, toAdd, toRemove)
}

// function that deletes an oauth2 client
func (c *ClientWrapper) DeleteOAuth2Client(ctx context.Context, clientID string) (*model.OAuth2Client, error) {
	log := c.Log.WithName("DeleteOAuth2Client").WithValues("ID", clientID)

	ctx, span := c.Tracer.Start(ctx, "DeleteOAuth2Client")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", clientID),
		)
	}

	resp, err := c.HydraClient.OAuth2Api.DeleteOAuth2Client(ctx, clientID).Execute()
	if err != nil || resp.StatusCode != 204 {
		log.Error(err, "failed to delete oauth2 client")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, fmt.Errorf("failed to delete oauth2 client: %w", err)
	}

	exist, err := c.OAuth2ClientExistsInKeto(ctx, clientID)
	if err != nil {
		log.Error(err, "failed to check if oauth2 client exists in keto")
	}
	if exist {
		err = c.DeleteOAuth2ClientInKeto(ctx, clientID)
		if err != nil {
			log.Error(err, "failed to delete oauth2 client in keto")
		}
	}

	log.Info("Success deleting oauth2 client")

	return &model.OAuth2Client{
		ClientID: px.Ptr(clientID),
		// Organization: &model.Organization{
		// 	Name: "main", //TODO: decide whether to hardcode this or not
		// },
	}, nil
}

// function that checks if an oauth2 client exists in keto
func (c *ClientWrapper) OAuth2ClientExistsInKeto(ctx context.Context, id string) (bool, error) {
	log := c.Log.WithName("OAuth2ClientExistsInKeto").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "OAuth2ClientExistsInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", id),
		)
	}

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.OAuth2ClientNamespace.String()),
		Object:    px.Ptr(id),
		Relation:  px.Ptr(consts.ObjectRelationOrganizations.String()),
		Subject: rts.NewSubjectSet(
			consts.OrganizationNamespace.String(),
			consts.MainOrganizationName, //TODO: decide whether to hardcode this or not
			"",
		),
	}

	respTuples, err := c.KetoClient.QueryAllTuples(ctx, &query, 100)
	if err != nil {
		log.Error(err, "Failed to query tuples")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return false, fmt.Errorf("failed to query tuples: %w", err)
	}

	if len(respTuples) == 0 {
		return false, nil
	}

	return true, nil
}

// function that creates an oauth2client in keto
func (c *ClientWrapper) CreateOAuth2ClientInKeto(ctx context.Context, id string) error {
	log := c.Log.WithName("CreateOAuth2ClientInKeto").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "CreateOAuth2ClientInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", id),
		)
	}

	client := model.NewOAuth2Client(id)

	err := c.KetoClient.CreateTuple(ctx, client.GetOrganizationTuple())
	if err != nil {
		log.Error(err, "Failed to create tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to create tuple: %w", err)
	}

	log.Info("Success creating oauth2client in keto")
	return nil
}

// function that deletes an oauth2client in keto
func (c *ClientWrapper) DeleteOAuth2ClientInKeto(ctx context.Context, id string) error {
	log := c.Log.WithName("DeleteOAuth2ClientInKeto").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "DeleteOAuth2ClientInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", id),
		)
	}

	client := model.NewOAuth2Client(id)

	err := c.KetoClient.DeleteTuple(ctx, client.GetOrganizationTuple())
	if err != nil {
		log.Error(err, "Failed to delete tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to delete tuple: %w", err)
	}

	log.Info("Success deleting oauth2client in keto")
	return nil
}

// function that determines which users or groups to add or remove from the login bindings of an oauth2 client
func (c *ClientWrapper) LoginBindingsChangeset(ctx context.Context, clientId string, bindings *model.LoginBindingsInput) (toAdd []*rts.RelationTuple, toRemove []*rts.RelationTuple, err error) {
	log := c.Log.WithName("LoginBindingsChangeset").WithValues("ClientID", clientId)

	ctx, span := c.Tracer.Start(ctx, "LoginBindingsChangeset")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("client_id", clientId),
		)
	}

	client := model.NewOAuth2Client(clientId)

	currentUsers, currentGroups, err := c.ExpandLoginBindingRelation(ctx, clientId)
	if err != nil {
		log.Error(err, "Failed to expand login binding relation")
		return nil, nil, err
	}

	if bindings != nil {
		if bindings.Users != nil {
			userBindings, err := c.GetUserIdsFromUserInputs(ctx, bindings.Users)
			if err != nil {
				log.Error(err, "Failed to get user ids from user inputs")
			}

			for _, userId := range userBindings {
				if !userIdInListOfUsers(currentUsers, userId) {
					toAdd = append(toAdd, client.GetUserTuple(userId))
				}
			}

			for _, user := range currentUsers {
				if !utils.StringContains(userBindings, user.ID) {
					toRemove = append(toRemove, client.GetUserTuple(user.ID))
				}
			}
		}
		if bindings.Groups != nil {
			for _, group := range bindings.Groups {
				if !groupNameInListOfGroups(currentGroups, group.Name) {
					toAdd = append(toAdd, client.GetGroupTuple(group.Name))
				}
			}

			for _, group := range currentGroups {
				var groupBindings []string
				for _, group := range bindings.Groups {
					groupBindings = append(groupBindings, group.Name)
				}
				if !utils.StringContains(groupBindings, group.Name) {
					toRemove = append(toRemove, client.GetGroupTuple(group.Name))
				}
			}
		}
	}
	return toAdd, toRemove, nil
}

// function that checks if a client id is in a []*model.OAuth2Client
func ClientIDInListOfOAuth2Clients(clients []*model.OAuth2Client, clientID string) bool {
	for _, client := range clients {
		if *client.ClientID == clientID {
			return true
		}
	}
	return false
}

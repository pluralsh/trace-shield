package clients

import (
	"context"
	"encoding/json"
	"fmt"

	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	kratos "github.com/ory/kratos-client-go"
	px "github.com/ory/x/pointerx"
	"github.com/pluralsh/trace-shield/consts"
	"github.com/pluralsh/trace-shield/graph/model"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
)

// function that gets a user from the Kratos API
func (c *ClientWrapper) GetUserFromId(ctx context.Context, id string) (*model.User, error) {
	log := c.Log.WithName("User").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "GetUserFromId")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("user_id", id),
		)
	}

	user, resp, err := c.KratosAdminClient.IdentityApi.GetIdentity(ctx, id).Execute()
	if err != nil || resp.StatusCode != 200 {
		log.Error(err, "failed to get user")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	outUser, err := c.UnmarshalUserTraits(ctx, user)
	if err != nil {
		log.Error(err, "Error when unmarshalling user")
		return nil, err
	}

	log.Info("Success getting User")

	return outUser, nil
}

// function that gets a user using their email from the Kratos API
func (c *ClientWrapper) GetUserFromEmail(ctx context.Context, email string) (*model.User, error) {
	log := c.Log.WithName("User").WithValues("email", email)

	ctx, span := c.Tracer.Start(ctx, "GetUserFromEmail")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("user_email", email),
		)
	}

	users, resp, err := c.KratosAdminClient.IdentityApi.ListIdentities(ctx).CredentialsIdentifier(email).Execute()
	if err != nil || resp.StatusCode != 200 {
		log.Error(err, "failed to get user")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	if len(users) == 0 {
		return nil, nil
	} else if len(users) > 1 {
		err := fmt.Errorf("multiple users found with email %s", email)
		log.Error(err, "failed to get user")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	} else if len(users) == 1 {
		outUser, err := c.UnmarshalUserTraits(ctx, &users[0])
		if err != nil {
			log.Error(err, "Error when unmarshalling user")
			return nil, err
		}

		log.Info("Success getting User")

		return outUser, nil
	}
	return nil, nil
}

// function that returns a list of user IDs from a []*model.UserInput
func (c *ClientWrapper) GetUserIdsFromUserInputs(ctx context.Context, users []*model.UserInput) ([]string, error) {
	log := c.Log.WithName("GetUserIdsFromUserInputs")

	ctx, span := c.Tracer.Start(ctx, "GetUserIdsFromUserInputs")
	defer span.End()

	var ids []string

	for _, inputUser := range users {
		if inputUser.ID != nil {
			if *inputUser.ID != "" {
				ids = append(ids, *inputUser.ID)
			}
		} else if inputUser.Email != nil {
			if *inputUser.Email != "" {
				user, err := c.GetUserFromEmail(ctx, *inputUser.Email)
				if err != nil {
					log.Error(err, "failed to get user from email", "Email", *inputUser.Email)
					continue
				}
				ids = append(ids, user.ID)
			}
		}
	}
	return ids, nil
}

// function that will list all users using the kratos api
func (c *ClientWrapper) ListUsers(ctx context.Context) ([]*model.User, error) {
	log := c.Log.WithName("ListUsers")

	ctx, span := c.Tracer.Start(ctx, "ListUsers")
	defer span.End()

	users, resp, err := c.KratosAdminClient.IdentityApi.ListIdentities(ctx).Execute()
	if err != nil || resp.StatusCode != 200 {
		log.Error(err, "failed to list users")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, fmt.Errorf("failed to list users: %w", err)
	}

	var output []*model.User

	for _, user := range users {

		user, err := c.UnmarshalUserTraits(ctx, &user)
		if err != nil {
			log.Error(err, "Error when unmarshalling user", "ID", user.ID)
			continue
		}

		output = append(output, user)

	}
	return output, nil
}

// UnmarshalUserTraits unmarshals the user traits from the Kratos Identity.
// It expects that the user traits are in the format of the model.User struct.

func (c *ClientWrapper) UnmarshalUserTraits(ctx context.Context, user *kratos.Identity) (*model.User, error) {
	log := c.Log.WithName("UnmarshalUserTraits")

	ctx, span := c.Tracer.Start(ctx, "UnmarshalUserTraits")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("id", user.Id),
		)
	}

	outUser := &model.User{}

	byteData, err := json.Marshal(user.Traits)
	if err != nil {
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		log.Error(err, "Error when marshalling user traits")
		return nil, err
	}

	err = json.Unmarshal(byteData, outUser)
	if err != nil {
		log.Error(err, "Error when unmarshalling user traits")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	// the unmarshal function does not set the ID
	outUser.ID = user.Id

	return outUser, nil
}

func (c *ClientWrapper) CreateUser(ctx context.Context, email string, name *model.NameInput) (*model.User, error) {
	log := c.Log.WithName("CreateUser").WithValues("Email", email)

	ctx, span := c.Tracer.Start(ctx, "CreateUser")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("email", email),
		)
	}

	traits := map[string]interface{}{
		"email": email,
	}

	if name != nil {
		traits["name"] = make(map[string]interface{})
		if name.First != nil {
			traits["name"].(map[string]interface{})["first"] = *name.First
		}
		if name.Last != nil {
			traits["name"].(map[string]interface{})["last"] = *name.Last
		}
	}

	kratosUser, resp, err := c.KratosAdminClient.IdentityApi.CreateIdentity(ctx).CreateIdentityBody(
		kratos.CreateIdentityBody{
			SchemaId: "person",
			Traits:   traits,
			// VerifiableAddresses: []kratos.VerifiableIdentityAddress{
			// 	{
			// 		Value: email,
			// 		Via:   "email",
			// 	},
			// },
			// Credentials: &kratos.IdentityWithCredentials{
			// 	Password: &kratos.IdentityWithCredentialsPassword{
			// 		Config: &kratos.IdentityWithCredentialsPasswordConfig{
			// 			Password: &test,
			// 		},
			// 	},
			// },
		},
	).Execute()

	if err != nil || resp.StatusCode != 201 {
		log.Error(err, "failed to create user")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	// TODO: this is giving a 404 not found error
	recoveryLink, err := c.CreateRecoveryLinkForIdentity(ctx, kratosUser.Id)
	if err != nil {
		log.Error(err, "failed to create recovery link for user")
	}

	exits, err := c.UserExistsInKeto(ctx, kratosUser.Id)
	if err != nil {
		log.Error(err, "failed to check if user exists in keto")
		// return nil, err
	}

	if !exits {
		err = c.CreateUserInKeto(ctx, kratosUser.Id)
		if err != nil {
			log.Error(err, "failed to create user in keto")
			return nil, err
		}
	}

	outUser, err := c.UnmarshalUserTraits(ctx, kratosUser)
	if err != nil {
		log.Error(err, "failed to unmarshal user traits")
		return nil, err
	}

	outUser.RecoveryLink = recoveryLink

	// TODO: reenable once it is working
	// outUser.RecoveryLink = recoveryLink

	log.Info("Success creating User")
	return outUser, nil
}

func (c *ClientWrapper) DeleteUser(ctx context.Context, id string) (*model.User, error) {
	log := c.Log.WithName("DeleteUser").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "DeleteUser")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("user_id", id),
		)
	}

	resp, err := c.KratosAdminClient.IdentityApi.DeleteIdentity(ctx, id).Execute()

	if err != nil || resp.StatusCode != 204 {
		log.Error(err, "failed to delete user")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	exits, err := c.UserExistsInKeto(ctx, id)
	if err != nil {
		log.Error(err, "failed to check if user exists in keto")
		// return nil, err
	}

	if exits {
		err = c.DeleteUserInKeto(ctx, id)
		if err != nil {
			log.Error(err, "failed to delete user in keto")
			return nil, err
		}
	}

	log.Info("Success deleting User")
	return &model.User{
		ID:    id,
		Email: "deleted",
		// Organization: &model.Organization{
		// 	Name: consts.MainOrganizationName, //TODO: decide whether to hardcode this or not
		// },
	}, nil
}

// function that checks if a user exists in keto
func (c *ClientWrapper) UserExistsInKeto(ctx context.Context, id string) (bool, error) {
	log := c.Log.WithName("UserExistsInKeto").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "UserExistsInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("user_id", id),
		)
	}

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.UserNamespace.String()),
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

// function that create a recovery link for a user
func (c *ClientWrapper) CreateRecoveryLinkForIdentity(ctx context.Context, id string) (*string, error) {
	log := c.Log.WithName("CreateRecoveryLinkForIdentity").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "CreateRecoveryLinkForIdentity")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("user_id", id),
		)
	}

	link, resp, err := c.KratosAdminClient.IdentityApi.CreateRecoveryLinkForIdentity(ctx).CreateRecoveryLinkForIdentityBody(
		kratos.CreateRecoveryLinkForIdentityBody{
			IdentityId: id,
		},
	).Execute()
	if err != nil || resp.StatusCode != 200 {
		log.Error(err, "failed to create recovery link for identity")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	log.Info("Success creating recovery link for identity")
	return &link.RecoveryLink, nil
}

// function that creates a user in keto
func (c *ClientWrapper) CreateUserInKeto(ctx context.Context, id string) error {
	log := c.Log.WithName("CreateUserInKeto").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "CreateUserInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("user_id", id),
		)
	}

	user := model.NewUser(id)

	err := c.KetoClient.CreateTuple(ctx, user.GetOrganizationTuple())
	if err != nil {
		log.Error(err, "failed to create tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to create tuple: %w", err)
	}

	log.Info("Success creating user in keto")
	return nil
}

// function that deletes a user from keto
func (c *ClientWrapper) DeleteUserInKeto(ctx context.Context, id string) error {
	log := c.Log.WithName("DeleteUserInKeto").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "DeleteUserInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("user_id", id),
		)
	}

	user := model.NewUser(id)

	err := c.KetoClient.DeleteTuple(ctx, user.GetOrganizationTuple())
	if err != nil {
		log.Error(err, "failed to delete tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to delete tuple: %w", err)
	}

	log.Info("Success deleting user in keto")
	return nil
}

// function that will get all the groups a user is in
func (c *ClientWrapper) GetUserGroups(ctx context.Context, id string) ([]*model.Group, error) {
	log := c.Log.WithName("GetUserGroups").WithValues("ID", id)

	ctx, span := c.Tracer.Start(ctx, "GetUserGroups")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("user_id", id),
		)
	}

	respTuples, err := c.KetoClient.QueryAllTuples(ctx, &rts.RelationQuery{
		Namespace: px.Ptr(consts.GroupNamespace.String()),
		Relation:  px.Ptr(consts.GroupRelationMembers.String()),
		Subject:   rts.NewSubjectSet(consts.UserNamespace.String(), id, ""),
	}, 100)
	if err != nil {
		log.Error(err, "Failed to get tuples")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, fmt.Errorf("failed to get tuples: %w", err)
	}

	var groups []*model.Group

	for _, tuple := range respTuples {
		group, err := c.GetGroupFromName(ctx, tuple.Object)
		if err != nil {
			log.Error(err, "failed to get group", "Name", tuple.Object)
			continue
		}

		groups = append(groups, group)
	}

	return groups, nil
}

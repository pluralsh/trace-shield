package clients

import (
	"context"
	"fmt"

	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	px "github.com/ory/x/pointerx"
	"github.com/pluralsh/trace-shield/consts"
	"github.com/pluralsh/trace-shield/graph/model"
	"github.com/pluralsh/trace-shield/utils"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
)

func (c *ClientWrapper) MutateGroup(ctx context.Context, name string, members []string) (*model.Group, error) {

	// TODO: use same updating logic as observability tenant and oauth2 client
	log := c.Log.WithName("Group").WithValues("Name", name)

	ctx, span := c.Tracer.Start(ctx, "MutateGroup")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("name", name),
		)
	}

	// TODO: figure out how to distinguish between creating or updating a group
	// updating a group would require that we first check if it exists and if a user is allowed to update it
	// creating a group would require that we first check if it exists and if a user is allowed to create it

	groupExists, err := c.GroupExistsInKeto(ctx, name)
	if err != nil {
		log.Error(err, "Failed to check if group already exists in keto")
		return nil, err
	}

	if !groupExists {
		err := c.CreateGroupInKeto(ctx, name)
		if err != nil {
			log.Error(err, "Failed to create group in keto")
			return nil, err
		}
	}

	toAdd, toRemove, err := c.GroupChangeset(ctx, name, members)
	if err != nil {
		log.Error(err, "Failed to get group changeset")
		return nil, err
	}

	for _, member := range toAdd {
		err := c.AddUserToGroupInKeto(ctx, name, member)
		if err != nil {
			log.Error(err, "Failed to add user to group in keto", "User", member)
			// TODO: add some way to wrap errors
			continue
		}
	}

	for _, member := range toRemove {
		err := c.RemoveUserFromGroupInKeto(ctx, name, member)
		if err != nil {
			log.Error(err, "Failed to remove user from group in keto", "User", member)
			// TODO: add some way to wrap errors
			continue
		}
	}

	return &model.Group{
		Name: name,
		// Organization: &model.Organization{
		// 	Name: consts.MainOrganizationName, //TODO: decide whether to hardcode this or not
		// },
	}, nil
}

// function that determines which users to add or remove from a group
func (c *ClientWrapper) GroupChangeset(ctx context.Context, groupName string, members []string) (toAdd []string, toRemove []string, err error) {

	ctx, span := c.Tracer.Start(ctx, "GroupChangeset")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", groupName),
		)
	}

	currentMembers, err := c.GetGroupMembersInKeto(ctx, groupName)
	if err != nil {
		return nil, nil, fmt.Errorf("failed to get current members: %w", err)
	}

	for _, member := range members {
		if !userIdInListOfUsers(currentMembers, member) {
			toAdd = append(toAdd, member)
		}
	}

	for _, member := range currentMembers {
		if !utils.StringContains(members, member.ID) {
			toRemove = append(toRemove, member.ID)
		}
	}

	return toAdd, toRemove, nil
}

// function that checks if a user ID is in a []*model.User
func userIdInListOfUsers(users []*model.User, userId string) bool {
	for _, user := range users {
		if user.ID == userId {
			return true
		}
	}
	return false
}

// function that checks if a group is in a []*model.Group
func groupNameInListOfGroups(groups []*model.Group, groupId string) bool {
	for _, group := range groups {
		if group.Name == groupId {
			return true
		}
	}
	return false
}

// function that checks if a user is part of a group
func (c *ClientWrapper) IsUserInGroup(ctx context.Context, groupName string, userId string) (bool, error) {
	log := c.Log.WithName("IsUserInGroup").WithValues("Name", groupName)

	ctx, span := c.Tracer.Start(ctx, "GroupChangeset")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", groupName),
		)
	}

	group := model.NewGroup(groupName)

	_, err := c.KetoClient.Check(ctx, group.GetUserTuple(userId))
	if err != nil {
		log.Error(err, "Failed to check tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return false, fmt.Errorf("failed to check tuple: %w", err)
	}

	log.Info("Success checking if user is in group")
	return true, nil
}

// function that creates a group in keto
func (c *ClientWrapper) CreateGroupInKeto(ctx context.Context, name string) error {
	log := c.Log.WithName("CreateGroupInKeto").WithValues("Name", name)

	ctx, span := c.Tracer.Start(ctx, "CreateGroupInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("name", name),
		)
	}

	group := model.NewGroup(name)

	err := c.KetoClient.CreateTuple(ctx, group.GetOrganizationTuple())
	if err != nil {
		log.Error(err, "Failed to create tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to create tuple: %w", err)
	}

	log.Info("Success creating group in keto")
	return nil
}

// func that adds a user to a group in keto
func (c *ClientWrapper) AddUserToGroupInKeto(ctx context.Context, groupName string, userId string) error {
	log := c.Log.WithName("AddUserToGroupInKeto").WithValues("Name", groupName)

	ctx, span := c.Tracer.Start(ctx, "AddUserToGroupInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", groupName),
			attribute.String("user_id", userId),
		)
	}

	group := model.NewGroup(groupName)

	err := c.KetoClient.CreateTuple(ctx, group.GetUserTuple(userId))
	if err != nil {
		log.Error(err, "Failed to create tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to create tuple: %w", err)
	}

	log.Info("Success adding user to group in keto")
	return nil
}

// function that removes a user from a group in keto
func (c *ClientWrapper) RemoveUserFromGroupInKeto(ctx context.Context, groupName string, userId string) error {
	log := c.Log.WithName("RemoveUserFromGroupInKeto").WithValues("Name", groupName)

	ctx, span := c.Tracer.Start(ctx, "RemoveUserFromGroupInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", groupName),
			attribute.String("user_id", userId),
		)
	}

	group := model.NewGroup(groupName)

	err := c.KetoClient.DeleteTuple(ctx, group.GetUserTuple(userId))
	if err != nil {
		log.Error(err, "Failed to delete tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to delete tuple: %w", err)
	}

	log.Info("Success removing user from group in keto")
	return nil
}

// function that gets all members of a group in keto
func (c *ClientWrapper) GetGroupMembersInKeto(ctx context.Context, groupName string) ([]*model.User, error) {
	log := c.Log.WithName("GetGroupMembersInKeto").WithValues("Name", groupName)

	ctx, span := c.Tracer.Start(ctx, "GetGroupMembersInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", groupName),
		)
	}

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.GroupNamespace.String()),
		Object:    px.Ptr(groupName),
		Relation:  px.Ptr(consts.GroupRelationMembers.String()),
		Subject:   nil,
	}

	respTuples, err := c.KetoClient.QueryAllTuples(ctx, &query, 100)
	if err != nil {
		log.Error(err, "Failed to query tuples")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, fmt.Errorf("failed to query tuples: %w", err)
	}

	var outputMembers []*model.User

	for _, tuple := range respTuples {
		subjectSet := tuple.Subject.GetSet()
		if subjectSet.Namespace == consts.UserNamespace.String() && subjectSet.Object != "" {
			// TODO: use field collection to only get users from their ID if we need to
			// TODO: use a go routine to parallelize this
			user, err := c.GetUserFromId(ctx, subjectSet.Object) // TODO: it might be better to split this off into a separate function
			if err != nil {
				continue
			}
			outputMembers = append(outputMembers, user)
		} else {
			continue
		}

	}

	log.Info("Success getting group members in keto")
	return outputMembers, nil
}

// function that gets a group from keto
func (c *ClientWrapper) GetGroupFromName(ctx context.Context, groupName string) (*model.Group, error) {
	log := c.Log.WithName("GetGroupFromName").WithValues("Name", groupName)

	ctx, span := c.Tracer.Start(ctx, "GetGroupFromName")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", groupName),
		)
	}

	if groupName == "" {
		err := fmt.Errorf("group name cannot be empty")
		log.Error(err, "Group name cannot be empty")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	// check if group exists in keto
	exists, err := c.GroupExistsInKeto(ctx, groupName)
	if err != nil {
		log.Error(err, "Failed to check if group exists in keto")
		return nil, err
	}
	if !exists {
		err := fmt.Errorf("group does not exist in keto")
		log.Error(err, "Group does not exist in keto")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	return &model.Group{
		Name: groupName,
		// Organization: &model.Organization{
		// 	Name: consts.MainOrganizationName, //TODO: decide whether to hardcode this or not
		// },
	}, nil
}

// function that checks if a group exists in keto
func (c *ClientWrapper) GroupExistsInKeto(ctx context.Context, groupName string) (bool, error) {
	log := c.Log.WithName("GroupExistsInKeto").WithValues("Name", groupName)

	ctx, span := c.Tracer.Start(ctx, "GroupExistsInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", groupName),
		)
	}

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.GroupNamespace.String()),
		Object:    px.Ptr(groupName),
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

// function that lists all groups in keto
func (c *ClientWrapper) ListGroupsInKeto(ctx context.Context) ([]*model.Group, error) {
	log := c.Log.WithName("ListGroupsInKeto")

	ctx, span := c.Tracer.Start(ctx, "ListGroupsInKeto")
	defer span.End()

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.GroupNamespace.String()),
		Object:    nil,
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
		return nil, fmt.Errorf("failed to query tuples: %w", err)
	}

	var outputGroups []*model.Group

	for _, tuple := range respTuples {
		if tuple.Object != "" {
			group, err := c.GetGroupFromName(ctx, tuple.Object)
			if err != nil {
				continue
			}
			outputGroups = append(outputGroups, group)
		} else {
			continue
		}
	}

	log.Info("Success listing groups in keto")
	return outputGroups, nil
}

// function that deletes a group in keto
func (c *ClientWrapper) DeleteGroup(ctx context.Context, groupName string) (*model.Group, error) {
	log := c.Log.WithName("DeleteGroup").WithValues("Name", groupName)

	ctx, span := c.Tracer.Start(ctx, "DeleteGroup")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", groupName),
		)
	}

	group := model.NewGroup(groupName)

	err := c.KetoClient.DeleteTuple(ctx, group.GetOrganizationTuple())
	if err != nil {
		log.Error(err, "Failed to delete tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	log.Info("Success deleting group in keto")
	return &model.Group{
		Name: groupName,
		// Organization: &model.Organization{
		// 	Name: consts.MainOrganizationName, //TODO: decide whether to hardcode this or not
		// },
	}, nil
}

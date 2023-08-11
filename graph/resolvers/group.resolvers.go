package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.34

import (
	"context"
	"fmt"

	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	px "github.com/ory/x/pointerx"
	"github.com/pluralsh/trace-shield/consts"
	"github.com/pluralsh/trace-shield/graph/common"
	"github.com/pluralsh/trace-shield/graph/generated"
	"github.com/pluralsh/trace-shield/graph/model"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
)

// Members is the resolver for the members field.
func (r *groupResolver) Members(ctx context.Context, obj *model.Group) ([]*model.User, error) {
	return obj.ExpandGroupMembersRelation(ctx)
}

// CreateGroup is the resolver for the createGroup field.
func (r *mutationResolver) CreateGroup(ctx context.Context, name string, members []*model.UserInput) (*model.Group, error) {
	clients := common.GetContext(ctx)

	log := clients.Log.WithName("GetContext").WithValues("ID", name)

	ctx, span := clients.Tracer.Start(ctx, "CreateGroup")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", name),
		)
	}

	group := model.NewGroup(name)

	exist, err := group.ExistsInKeto(ctx)
	if err != nil {
		log.Error(err, "failed to check if group exists")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	if exist {
		log.Info("group already exists")
		return group, nil
	} else {
		err = group.CreateInKeto(ctx)
		if err != nil {
			log.Error(err, "failed to create group")
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
			return nil, err
		}
	}
	return group, nil
}

// UpdateGroup is the resolver for the updateGroup field.
func (r *mutationResolver) UpdateGroup(ctx context.Context, name string, members []*model.UserInput) (*model.Group, error) {
	clients := common.GetContext(ctx)

	log := clients.Log.WithName("UpdateGroup").WithValues("ID", name)

	ctx, span := clients.Tracer.Start(ctx, "UpdateGroup")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", name),
		)
	}

	group := model.NewGroup(name)

	exist, err := group.ExistsInKeto(ctx)
	if err != nil {
		log.Error(err, "failed to check if group exists")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}
	if !exist {
		err = fmt.Errorf("group does not exist")
		log.Error(err, "failed to update group")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	if err := group.UpdateMembers(ctx, members); err != nil {
		log.Error(err, "failed to update group")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}
	return group, nil
}

// DeleteGroup is the resolver for the deleteGroup field.
func (r *mutationResolver) DeleteGroup(ctx context.Context, name string) (*model.Group, error) {
	clients := common.GetContext(ctx)
	log := clients.Log.WithName("DeleteGroup").WithValues("ID", name)

	ctx, span := clients.Tracer.Start(ctx, "DeleteGroup")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", name),
		)
	}

	if name == "" {
		err := fmt.Errorf("group name cannot be empty")
		log.Error(err, "failed to delete group")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	group := model.NewGroup(name)

	exist, err := group.ExistsInKeto(ctx)
	if err != nil {
		log.Error(err, "failed to check if group exists")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}
	if !exist {
		err = fmt.Errorf("group does not exist")
		log.Error(err, "failed to delete group")
		span.RecordError(err)
		return nil, err
	}

	if err := group.DeleteInKeto(ctx); err != nil {
		log.Error(err, "failed to delete group")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}
	return group, nil
}

// ListGroups is the resolver for the listGroups field.
func (r *queryResolver) ListGroups(ctx context.Context) ([]*model.Group, error) {
	clients := common.GetContext(ctx)
	log := clients.Log.WithName("ListGroups")

	ctx, span := clients.Tracer.Start(ctx, "ListGroups")
	defer span.End()

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.GroupNamespace.String()),
		Object:    nil,
		Relation:  px.Ptr(consts.ObjectRelationOrganizations.String()),
		Subject: rts.NewSubjectSet(
			consts.OrganizationNamespace.String(),
			consts.MainOrganizationName,
			"",
		),
	}

	respTuples, err := clients.KetoClient.QueryAllTuples(ctx, &query, 100)
	if err != nil {
		log.Error(err, "Failed to query tuples")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, fmt.Errorf("failed to query tuples: %w", err)
	}

	var outputGroups []*model.Group

	for _, tuple := range respTuples {
		if tuple.Object != "" {
			group, err := r.GetGroup(ctx, tuple.Object)
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

// GetGroup is the resolver for the getGroup field.
func (r *queryResolver) GetGroup(ctx context.Context, name string) (*model.Group, error) {
	panic(fmt.Errorf("not implemented: GetGroup - getGroup"))
}

// Group returns generated.GroupResolver implementation.
func (r *Resolver) Group() generated.GroupResolver { return &groupResolver{r} }

type groupResolver struct{ *Resolver }

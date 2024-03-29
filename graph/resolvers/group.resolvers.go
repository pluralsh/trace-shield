package resolvers

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.34

import (
	"context"
	"fmt"

	"github.com/pluralsh/trace-shield/graph/generated"
	"github.com/pluralsh/trace-shield/graph/model"
)

// Members is the resolver for the members field.
func (r *groupResolver) Members(ctx context.Context, obj *model.Group) ([]*model.User, error) {
	return r.C.GetGroupMembersInKeto(ctx, obj.Name)
}

// Group is the resolver for the group field.
func (r *mutationResolver) Group(ctx context.Context, name string, members []*model.UserInput) (*model.Group, error) {
	if name == "" {
		return nil, fmt.Errorf("group name cannot be empty")
	}

	sanitizedMembers, err := r.C.GetUserIdsFromUserInputs(ctx, members)
	if err != nil {
		return nil, err
	}

	return r.C.MutateGroup(ctx, name, sanitizedMembers)
}

// DeleteGroup is the resolver for the deleteGroup field.
func (r *mutationResolver) DeleteGroup(ctx context.Context, name string) (*model.Group, error) {
	if name == "" {
		return nil, fmt.Errorf("group name cannot be empty")
	}
	return r.C.DeleteGroup(ctx, name)
}

// ListGroups is the resolver for the listGroups field.
func (r *queryResolver) ListGroups(ctx context.Context) ([]*model.Group, error) {
	return r.C.ListGroupsInKeto(ctx)
}

// Group returns generated.GroupResolver implementation.
func (r *Resolver) Group() generated.GroupResolver { return &groupResolver{r} }

type groupResolver struct{ *Resolver }

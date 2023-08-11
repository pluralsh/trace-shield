package model

import (
	"context"
	"fmt"

	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	px "github.com/ory/x/pointerx"
	"github.com/pluralsh/trace-shield/consts"
	"github.com/pluralsh/trace-shield/graph/common"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
)

// function that will return the relation tuple for the group on a ObservabilityTenant
func (g *Group) GetTenantTuple(tenant string, relation consts.ObservabilityTenantRelation) *rts.RelationTuple {
	return &rts.RelationTuple{
		Namespace: consts.ObservabilityTenantNamespace.String(),
		Object:    tenant,
		Relation:  relation.String(),
		Subject: rts.NewSubjectSet(
			consts.GroupNamespace.String(),
			g.Name,
			consts.GroupRelationMembers.String(),
		),
	}
}

// function that will return the relation tuple for a user on a group
func (g *Group) GetUserTuple(userId string) *rts.RelationTuple {
	return &rts.RelationTuple{
		Namespace: consts.GroupNamespace.String(),
		Object:    g.Name,
		Relation:  consts.GroupRelationMembers.String(),
		Subject: rts.NewSubjectSet(
			consts.UserNamespace.String(),
			userId,
			"",
		),
	}
}

// function that will return the relation tuple for a group on an organization
func (g *Group) GetOrganizationTuple() *rts.RelationTuple {
	return &rts.RelationTuple{
		Namespace: consts.GroupNamespace.String(),
		Object:    g.Name,
		Relation:  consts.ObjectRelationOrganizations.String(),
		Subject: rts.NewSubjectSet(
			consts.OrganizationNamespace.String(),
			consts.MainOrganizationName,
			"",
		),
	}
}

// function that checks if a group exists in keto
func (g *Group) ExistsInKeto(ctx context.Context) (bool, error) {
	clients := common.GetContext(ctx)
	log := clients.Log.WithName("GroupExistsInKeto").WithValues("Name", g.Name)

	ctx, span := clients.Tracer.Start(ctx, "GroupExistsInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", g.Name),
		)
	}

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.GroupNamespace.String()),
		Object:    px.Ptr(g.Name),
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
		return false, fmt.Errorf("failed to query tuples: %w", err)
	}
	if len(respTuples) == 0 {
		return false, nil
	}
	return true, nil
}

// function that creates a group in keto
func (g *Group) CreateInKeto(ctx context.Context) error {
	clients := common.GetContext(ctx)
	log := clients.Log.WithName("CreateGroupInKeto").WithValues("Name", g.Name)

	ctx, span := clients.Tracer.Start(ctx, "CreateGroupInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", g.Name),
		)
	}

	err := clients.KetoClient.CreateTuple(ctx, g.GetOrganizationTuple())
	if err != nil {
		log.Error(err, "Failed to create tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to create tuple: %w", err)
	}

	log.Info("Success creating group in keto")
	return nil
}

// function that deletes a group in keto
func (g *Group) DeleteInKeto(ctx context.Context) error {
	clients := common.GetContext(ctx)
	log := clients.Log.WithName("DeleteGroupInKeto").WithValues("Name", g.Name)

	ctx, span := clients.Tracer.Start(ctx, "DeleteGroupInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("group_id", g.Name),
		)
	}

	err := clients.KetoClient.DeleteTuple(ctx, g.GetOrganizationTuple())
	if err != nil {
		log.Error(err, "Failed to delete tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return err
	}

	log.Info("Success deleting group in keto")
	return nil
}

// function that checks if a group is in a []*Group
func GroupNameInListOfGroups(groups []*Group, groupId string) bool {
	for _, group := range groups {
		if group.Name == groupId {
			return true
		}
	}
	return false
}

// function that return a *model.Group for a given group name
func NewGroup(groupName string) *Group {
	return &Group{
		Name: groupName,
	}
}

package model

import (
	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	"github.com/pluralsh/trace-shield/consts"
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
			consts.MainOrganizationName, //TODO: decide whether to hardcode this or not
			"",
		),
	}
}

// function that return a *model.Group for a given group name
func NewGroup(groupName string) *Group {
	return &Group{
		Name: groupName,
	}
}

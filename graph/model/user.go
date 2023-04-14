package model

import (
	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	"github.com/pluralsh/trace-shield/consts"
)

// function that will return the relation tuple for the user on a ObservabilityTenant
func (u *User) GetTenantTuple(tenant string, relation consts.ObservabilityTenantRelation) *rts.RelationTuple {
	return &rts.RelationTuple{
		Namespace: consts.ObservabilityTenantNamespace.String(),
		Object:    tenant,
		Relation:  relation.String(),
		Subject: rts.NewSubjectSet(
			consts.UserNamespace.String(),
			u.ID,
			"",
		),
	}
}

// function that will return the relation tuple for the user on an organization
func (u *User) GetOrganizationTuple() *rts.RelationTuple {
	return &rts.RelationTuple{
		Namespace: consts.UserNamespace.String(),
		Object:    u.ID,
		Relation:  consts.ObjectRelationOrganizations.String(),
		Subject: rts.NewSubjectSet(
			consts.OrganizationNamespace.String(),
			consts.MainOrganizationName, //TODO: decide whether to hardcode this or not
			"",
		),
	}
}

// function that return a *User for a given id
func NewUser(id string) *User {
	return &User{
		ID: id,
	}
}

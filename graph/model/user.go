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

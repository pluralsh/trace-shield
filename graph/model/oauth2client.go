package model

import (
	rts "github.com/ory/keto/proto/ory/keto/relation_tuples/v1alpha2"
	"github.com/pluralsh/trace-shield/consts"
)

// function that will return the relation tuple for the oauth2client on a ObservabilityTenant
func (oc *OAuth2Client) GetTenantTuple(tenant string, relation consts.ObservabilityTenantRelation) *rts.RelationTuple {
	return &rts.RelationTuple{
		Namespace: consts.ObservabilityTenantNamespace.String(),
		Object:    tenant,
		Relation:  relation.String(),
		Subject: rts.NewSubjectSet(
			consts.GroupNamespace.String(),
			*oc.ClientID,
			"",
		),
	}
}

// function that gets the login binding relation tuple for a group on an oauth2client
func (oc *OAuth2Client) GetGroupTuple(groupName string) *rts.RelationTuple {
	return &rts.RelationTuple{
		Namespace: consts.OAuth2ClientNamespace.String(),
		Object:    *oc.ClientID,
		Relation:  consts.OAuth2ClientRelationLoginBindings.String(),
		Subject: rts.NewSubjectSet(
			consts.GroupNamespace.String(),
			groupName,
			consts.GroupRelationMembers.String(),
		),
	}
}

// function that gets the login binding relation tuple for a user on an oauth2client
func (oc *OAuth2Client) GetUserTuple(userId string) *rts.RelationTuple {
	return &rts.RelationTuple{
		Namespace: consts.OAuth2ClientNamespace.String(),
		Object:    *oc.ClientID,
		Relation:  consts.OAuth2ClientRelationLoginBindings.String(),
		Subject: rts.NewSubjectSet(
			consts.UserNamespace.String(),
			userId,
			"",
		),
	}
}

// function that will return the relation tuple for the oauth2client on an organization
func (oc *OAuth2Client) GetOrganizationTuple() *rts.RelationTuple {
	return &rts.RelationTuple{
		Namespace: consts.OAuth2ClientNamespace.String(),
		Object:    *oc.ClientID,
		Relation:  consts.ObjectRelationOrganizations.String(),
		Subject: rts.NewSubjectSet(
			consts.OrganizationNamespace.String(),
			consts.MainOrganizationName, //TODO: decide whether to hardcode this or not
			"",
		),
	}
}

// fuction that creates a new *OAuth2Client given a clientID
func NewOAuth2Client(clientID string) *OAuth2Client {
	return &OAuth2Client{
		ClientID: &clientID,
	}
}

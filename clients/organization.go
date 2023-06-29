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

func (c *ClientWrapper) UpdateOrganization(ctx context.Context, name string, admins []string) (*model.Organization, error) {

	// TODO: figure out which admins to add or remove
	// TODO: create separate functions for adding and removing admins from an organization
	log := c.Log.WithName("UpdateOrganization").WithValues("Name", name)

	ctx, span := c.Tracer.Start(ctx, "UpdateOrganization")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("name", name),
		)
	}

	_, err := c.OrganizationExistsInKeto(ctx, name)
	if err != nil {
		log.Error(err, "Failed to check if organization already exists in keto")
		return nil, err
	}

	//TODO: this doesn't seem to work and blocks updating with the first admin
	// if !exists {
	// 	log.Error(nil, "Organization does not exist in keto. Having multiple organizations is not yet supported.")
	// 	return nil, fmt.Errorf("Organization does not exist in keto. Having multiple organizations is not yet supported.")
	// }

	toAdd, toRemove, err := c.OrgAdminChangeset(ctx, name, admins)
	if err != nil {
		log.Error(err, "Failed to get organization admin changeset")
		return nil, err
	}

	for _, admin := range toAdd {
		err := c.AddAdminToOrganization(ctx, name, admin)
		if err != nil {
			log.Error(err, "Failed to add user to organization admins in keto", "User", admin)
			// TODO: add some way to wrap errors
			continue
		}
	}

	for _, admin := range toRemove {
		err := c.RemoveAdminFromOrganization(ctx, name, admin)
		if err != nil {
			log.Error(err, "Failed to remove user from organization admins in keto", "User", admin)
			// TODO: add some way to wrap errors
			continue
		}
	}

	return &model.Organization{
		Name: name,
	}, nil
}

// function that determines which admins to add or remove from an organization
func (c *ClientWrapper) OrgAdminChangeset(ctx context.Context, orgName string, admins []string) (toAdd []string, toRemove []string, err error) {
	log := c.Log.WithName("OrgAdminChangeset").WithValues("Name", orgName)

	ctx, span := c.Tracer.Start(ctx, "OrgAdminChangeset")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("name", orgName),
			attribute.StringSlice("admins", admins),
		)
	}

	currentAdmins, err := c.GetOrganizationAdmins(ctx, orgName)
	if err != nil {
		log.Error(err, "Failed to get current admins")
		return nil, nil, fmt.Errorf("failed to get current admins: %w", err)
	}

	for _, admin := range admins {
		if !userIdInListOfUsers(currentAdmins, admin) {
			toAdd = append(toAdd, admin)
		}
	}

	for _, admin := range currentAdmins {
		if !utils.StringContains(admins, admin.ID) {
			toRemove = append(toRemove, admin.ID)
		}
	}

	return toAdd, toRemove, nil
}

// function that adds an admin to an organization in keto
func (c *ClientWrapper) AddAdminToOrganization(ctx context.Context, orgName string, adminId string) error {
	log := c.Log.WithName("AddAdminToOrganization").WithValues("Name", orgName, "User", adminId)

	ctx, span := c.Tracer.Start(ctx, "AddAdminToOrganization")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("name", orgName),
			attribute.String("user_id", adminId),
		)
	}

	adminTuple := &rts.RelationTuple{
		Namespace: consts.OrganizationNamespace.String(),
		Object:    orgName,
		Relation:  consts.OrganizationRelationAdmins.String(),
		Subject: rts.NewSubjectSet(
			consts.UserNamespace.String(),
			adminId,
			"",
		),
	}

	err := c.KetoClient.CreateTuple(ctx, adminTuple)
	if err != nil {
		log.Error(err, "Failed to create tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to create tuple: %w", err)
	}

	return nil
}

// function that removes an admin from an organization in keto
func (c *ClientWrapper) RemoveAdminFromOrganization(ctx context.Context, orgName string, adminId string) error {
	log := c.Log.WithName("RemoveAdminFromOrganization").WithValues("Name", orgName, "User", adminId)

	ctx, span := c.Tracer.Start(ctx, "RemoveAdminFromOrganization")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("name", orgName),
			attribute.String("user_id", adminId),
		)
	}

	adminTuple := &rts.RelationTuple{
		Namespace: consts.OrganizationNamespace.String(),
		Object:    orgName,
		Relation:  consts.OrganizationRelationAdmins.String(),
		Subject: rts.NewSubjectSet(
			consts.UserNamespace.String(),
			adminId,
			"",
		),
	}

	err := c.KetoClient.DeleteTuple(ctx, adminTuple)
	if err != nil {
		log.Error(err, "Failed to delete tuple")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return fmt.Errorf("failed to delete tuple: %w", err)
	}

	return nil
}

// function that returns all admins for an organization
func (c *ClientWrapper) GetOrganizationAdmins(ctx context.Context, orgName string) ([]*model.User, error) {
	log := c.Log.WithName("GetOrganizationAdmins").WithValues("Name", orgName)

	ctx, span := c.Tracer.Start(ctx, "GetOrganizationAdmins")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("name", orgName),
		)
	}

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.OrganizationNamespace.String()),
		Object:    px.Ptr(orgName),
		Relation:  px.Ptr(consts.OrganizationRelationAdmins.String()),
		Subject:   nil,
	}

	respTuples, err := c.KetoClient.QueryAllTuples(ctx, &query, 100)
	if err != nil {
		log.Error(err, "Failed to query tuples")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, fmt.Errorf("failed to query tuples: %w", err)
	}

	var outputAdmins []*model.User

	for _, tuple := range respTuples {
		subjectSet := tuple.Subject.GetSet()
		if subjectSet.Namespace == consts.UserNamespace.String() {
			user, err := c.GetUserFromId(ctx, subjectSet.Object)
			if err != nil {
				continue
			}
			outputAdmins = append(outputAdmins, user)
		} else {
			continue
		}

	}

	return outputAdmins, nil
}

// function that checks if an organization exists in keto
func (c *ClientWrapper) OrganizationExistsInKeto(ctx context.Context, orgName string) (bool, error) {
	log := c.Log.WithName("OrganizationExistsInKeto").WithValues("Name", orgName)

	ctx, span := c.Tracer.Start(ctx, "OrganizationExistsInKeto")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("name", orgName),
		)
	}

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.OrganizationNamespace.String()),
		Object:    px.Ptr(orgName),
		Relation:  nil,
		Subject:   nil,
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

// function that lists all organizations in keto
func (c *ClientWrapper) ListOrganizations(ctx context.Context) ([]*model.Organization, error) {
	log := c.Log.WithName("ListOrganizations")

	ctx, span := c.Tracer.Start(ctx, "ListOrganizations")
	defer span.End()

	query := rts.RelationQuery{
		Namespace: px.Ptr(consts.OrganizationNamespace.String()),
		Object:    nil,
		Relation:  nil,
		Subject:   nil,
	}

	respTuples, err := c.KetoClient.QueryAllTuples(ctx, &query, 100)
	if err != nil {
		log.Error(err, "Failed to query tuples")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, fmt.Errorf("failed to query tuples: %w", err)
	}

	var outputOrgs []*model.Organization

	for _, tuple := range respTuples {
		outputOrgs = append(outputOrgs, &model.Organization{
			Name: tuple.Object,
		})
	}

	return outputOrgs, nil
}

// function that lists all organizations in keto
func (c *ClientWrapper) GetOrganization(ctx context.Context, orgName string) (*model.Organization, error) {
	log := c.Log.WithName("Organization").WithValues("Name", orgName)

	ctx, span := c.Tracer.Start(ctx, "Organization")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("name", orgName),
		)
	}

	exists, err := c.OrganizationExistsInKeto(ctx, orgName)
	if err != nil {
		log.Error(err, "Failed to check if organization exists in keto")
		return nil, err
	}

	if !exists {
		err := fmt.Errorf("Failed to get organization")
		log.Error(err, "Organization does not exist in keto. Having multiple organizations is not yet supported.", "Name", orgName)
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	currentAdmins, err := c.GetOrganizationAdmins(ctx, orgName)
	if err != nil {
		return nil, fmt.Errorf("failed to get current admins: %w", err)
	}

	return &model.Organization{
		Name:   orgName,
		Admins: currentAdmins,
	}, nil
}

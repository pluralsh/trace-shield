package clients

import (
	"context"
	"fmt"
	"net/http"

	hydra "github.com/ory/hydra-client-go/v2"
	"github.com/pluralsh/trace-shield/format"
	"github.com/pluralsh/trace-shield/graph/model"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
)

// GetOAuth2LoginRequest returns the OAuth2 login request for the given challenge.
func (c *ClientWrapper) GetOAuth2LoginRequest(ctx context.Context, challenge string) (*model.OAuth2LoginRequest, error) {
	log := c.Log.WithName("GetOAuth2LoginRequest").WithValues("challenge", challenge)

	ctx, span := c.Tracer.Start(ctx, "GetOAuth2LoginRequest")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("challenge", challenge),
		)
	}

	login, resp, err := c.HydraClient.OAuth2Api.GetOAuth2LoginRequest(ctx).LoginChallenge(challenge).Execute()
	if err != nil || resp.StatusCode != 200 {
		log.Error(err, "Error getting login request")
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		switch resp.StatusCode {
		// case http.StatusNotFound:
		// 	// Accessing to response details
		// 	// cast err to *client.GenericOpenAPIError object first and then
		// 	// to your desired type
		// 	notFound, ok := err.(*hydra.GenericOpenAPIError).Model().(hydra.JsonError)
		// 	fmt.Println(ok)
		// 	fmt.Println(*notFound.ErrorDescription)
		case http.StatusGone:

			r, ok := err.(*hydra.GenericOpenAPIError).Model().(hydra.OAuth2RedirectTo)
			fmt.Println(r, ok)
			fmt.Println("It's gone")
			return &model.OAuth2LoginRequest{RedirectTo: &r.RedirectTo}, err
		default:
			r, ok := err.(*hydra.GenericOpenAPIError).Model().(hydra.ErrorOAuth2)
			if ok {
				span.RecordError(err)
				span.SetStatus(codes.Error, err.Error())
				log.Error(err, "Error getting login request", "error", r.Error, "hint", r.ErrorHint, "description", r.ErrorDescription)
			}
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
			return nil, err
		}
	}

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("subject", login.Subject),
		)
	}

	var oidcContext *model.OidcContext

	if login.OidcContext != nil {
		oidcContext = &model.OidcContext{
			AcrValues:         login.OidcContext.AcrValues,
			Display:           login.OidcContext.Display,
			IDTokenHintClaims: login.OidcContext.IdTokenHintClaims,
			LoginHint:         login.OidcContext.LoginHint,
			UILocales:         login.OidcContext.UiLocales,
		}
	}

	return &model.OAuth2LoginRequest{
		Challenge:                    login.Challenge,
		Client:                       format.HydraOAuth2ClientToGraphQL(login.Client),
		OidcContext:                  oidcContext,
		RequestURL:                   &login.RequestUrl,
		RequestedAccessTokenAudience: login.RequestedAccessTokenAudience,
		RequestedScope:               login.RequestedScope,
		SessionID:                    login.SessionId,
		Skip:                         &login.Skip,
		Subject:                      login.Subject,
		RedirectTo:                   nil,
	}, nil
}

// AcceptOAuth2LoginRequest accepts the OAuth2 consent request for the given challenge.
func (c *ClientWrapper) AcceptOAuth2LoginRequest(ctx context.Context, challenge string, acr *string, amr []string, context map[string]interface{}, remember *bool, rememberFor *int64, subject string) (*model.OAuth2RedirectTo, error) {
	log := c.Log.WithName("AcceptOAuth2LoginRequest").WithValues("challenge", challenge)

	ctx, span := c.Tracer.Start(ctx, "AcceptOAuth2LoginRequest")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("challenge", challenge),
			attribute.String("subject", subject),
		)
	}

	// TODO: We should probably check the login binding here to ensure the user is allowed to login using the given OAuth 2.0 Client

	login, resp, err := c.HydraClient.OAuth2Api.AcceptOAuth2LoginRequest(ctx).
		LoginChallenge(challenge).
		AcceptOAuth2LoginRequest(hydra.AcceptOAuth2LoginRequest{
			Acr:         acr,
			Amr:         amr,
			Context:     context,
			Remember:    remember,
			RememberFor: rememberFor,
			Subject:     subject,
		}).
		Execute()
	if err != nil || resp.StatusCode != 200 {
		r, ok := err.(*hydra.GenericOpenAPIError).Model().(hydra.ErrorOAuth2)
		if ok {
			log.Error(err, "Error accepting login request", "error", r.Error, "hint", r.ErrorHint, "description", r.ErrorDescription)
		}
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	return &model.OAuth2RedirectTo{
		RedirectTo: login.RedirectTo,
	}, nil
}

// RejectOAuth2LoginRequest rejects the OAuth2 login request for the given challenge.
func (c *ClientWrapper) RejectOAuth2LoginRequest(ctx context.Context, challenge string) (*model.OAuth2RedirectTo, error) {
	log := c.Log.WithName("RejectOAuth2LoginRequest").WithValues("challenge", challenge)

	ctx, span := c.Tracer.Start(ctx, "RejectOAuth2LoginRequest")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("challenge", challenge),
		)
	}

	login, resp, err := c.HydraClient.OAuth2Api.RejectOAuth2LoginRequest(ctx).
		LoginChallenge(challenge).
		Execute()
	if err != nil || resp.StatusCode != 200 {
		r, ok := err.(*hydra.GenericOpenAPIError).Model().(hydra.ErrorOAuth2)
		if ok {
			log.Error(err, "Error rejecting login request", "error", r.Error, "hint", r.ErrorHint, "description", r.ErrorDescription)
		}
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		return nil, err
	}

	return &model.OAuth2RedirectTo{
		RedirectTo: login.RedirectTo,
	}, nil
}

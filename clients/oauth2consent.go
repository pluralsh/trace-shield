package clients

import (
	"context"
	"fmt"
	"net/http"

	hydra "github.com/ory/hydra-client-go/v2"
	"github.com/pluralsh/trace-shield/format"
	"github.com/pluralsh/trace-shield/graph/model"
	"github.com/pluralsh/trace-shield/utils"
	"go.opentelemetry.io/otel/attribute"
	"go.opentelemetry.io/otel/codes"
)

// GetOAuth2ConsentRequest returns the OAuth2 consent request for the given challenge.
func (c *ClientWrapper) GetOAuth2ConsentRequest(ctx context.Context, challenge string) (*model.OAuth2ConsentRequest, error) {
	log := c.Log.WithName("GetOAuth2ConsentRequest").WithValues("challenge", challenge)

	ctx, span := c.Tracer.Start(ctx, "GetOAuth2ConsentRequest")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("challenge", challenge),
		)
	}

	consent, resp, err := c.HydraClient.OAuth2Api.GetOAuth2ConsentRequest(ctx).ConsentChallenge(challenge).Execute()
	if err != nil || resp.StatusCode != 200 {
		log.Error(err, "Error getting consent request")
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
			return &model.OAuth2ConsentRequest{RedirectTo: &r.RedirectTo}, err
		default:
			r, ok := err.(*hydra.GenericOpenAPIError)
			if ok {
				r, ok := err.(*hydra.GenericOpenAPIError).Model().(hydra.ErrorOAuth2)
				if ok {
					log.Error(err, "Error getting consent request", "error", r.Error, "hint", r.ErrorHint, "description", r.ErrorDescription)
				}
			}
			span.RecordError(err)
			span.SetStatus(codes.Error, err.Error())
			log.Error(err, "Error when calling `OAuth2Api.GetOAuth2ConsentRequest", "request", r)
			return nil, err
		}
	}

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("subject", *consent.Subject),
		)
	}

	var oidcContext *model.OidcContext

	if consent.OidcContext != nil {
		oidcContext = &model.OidcContext{
			AcrValues:         consent.OidcContext.AcrValues,
			Display:           consent.OidcContext.Display,
			IDTokenHintClaims: consent.OidcContext.IdTokenHintClaims,
			LoginHint:         consent.OidcContext.LoginHint,
			UILocales:         consent.OidcContext.UiLocales,
		}
	}

	return &model.OAuth2ConsentRequest{
		Acr:                          consent.Acr,
		Amr:                          consent.Amr,
		Challenge:                    consent.Challenge,
		Client:                       format.HydraOAuth2ClientToGraphQL(*consent.Client),
		Context:                      utils.InterfaceToMap(consent.Context),
		LoginChallenge:               consent.LoginChallenge,
		LoginSessionID:               consent.LoginSessionId,
		OidcContext:                  oidcContext,
		RequestURL:                   consent.RequestUrl,
		RequestedAccessTokenAudience: consent.RequestedAccessTokenAudience,
		RequestedScope:               consent.RequestedScope,
		Skip:                         consent.Skip,
		Subject:                      *consent.Subject,
	}, nil
}

// AcceptOAuth2ConsentRequest accepts the OAuth2 consent request for the given challenge.
func (c *ClientWrapper) AcceptOAuth2ConsentRequest(ctx context.Context, challenge string, grantAccessTokenAudience []string, grantScope []string, remember *bool, rememberFor *int64, session *hydra.AcceptOAuth2ConsentRequestSession) (*model.OAuth2RedirectTo, error) {
	log := c.Log.WithName("AcceptOAuth2ConsentRequest").WithValues("challenge", challenge)

	ctx, span := c.Tracer.Start(ctx, "AcceptOAuth2ConsentRequest")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("challenge", challenge),
			attribute.StringSlice("grant_scope", grantScope),
		)
	}

	consent, resp, err := c.HydraClient.OAuth2Api.AcceptOAuth2ConsentRequest(ctx).
		ConsentChallenge(challenge).
		AcceptOAuth2ConsentRequest(hydra.AcceptOAuth2ConsentRequest{
			GrantAccessTokenAudience: grantAccessTokenAudience,
			GrantScope:               grantScope,
			Remember:                 remember,
			RememberFor:              rememberFor,
			Session:                  session,
		}).
		Execute()
	if err != nil || resp.StatusCode != 200 {
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		r, ok := err.(*hydra.GenericOpenAPIError).Model().(hydra.ErrorOAuth2)
		if ok {
			log.Error(err, "Error accepting consent request", "error", r.Error, "hint", r.ErrorHint, "description", r.ErrorDescription)
		}
		return nil, err
	}

	return &model.OAuth2RedirectTo{
		RedirectTo: consent.RedirectTo,
	}, nil
}

// RejectOAuth2ConsentRequest rejects the OAuth2 consent request for the given challenge.
func (c *ClientWrapper) RejectOAuth2ConsentRequest(ctx context.Context, challenge string) (*model.OAuth2RedirectTo, error) {
	log := c.Log.WithName("RejectOAuth2ConsentRequest").WithValues("challenge", challenge)

	ctx, span := c.Tracer.Start(ctx, "RejectOAuth2ConsentRequest")
	defer span.End()

	if span.IsRecording() {
		span.SetAttributes(
			attribute.String("challenge", challenge),
		)
	}

	consent, resp, err := c.HydraClient.OAuth2Api.RejectOAuth2ConsentRequest(ctx).
		ConsentChallenge(challenge).
		Execute()
	if err != nil || resp.StatusCode != 200 {
		span.RecordError(err)
		span.SetStatus(codes.Error, err.Error())
		r, ok := err.(*hydra.GenericOpenAPIError).Model().(hydra.ErrorOAuth2)
		if ok {
			log.Error(err, "Error rejecting consent request", "error", r.Error, "hint", r.ErrorHint, "description", r.ErrorDescription)
		}
		return nil, err
	}

	return &model.OAuth2RedirectTo{
		RedirectTo: consent.RedirectTo,
	}, nil
}

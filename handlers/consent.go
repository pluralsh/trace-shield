package handlers

import (
	"context"
	"net/http"

	hydra "github.com/ory/hydra-client-go/v2"
)

type ConsentAction string

const (
	ConsentActionAccept = ConsentAction("accept")
	ConsentActionDeny   = ConsentAction("deny")
)

type ConsentRequest struct {
	Challenge string        `json:"consent_challenge"`
	Action    ConsentAction `json:"consent_action"`
}

func (h *Handler) Consent(w http.ResponseWriter, r *http.Request) {
	log := h.Log.WithName("Consent")

	consentRequest := new(ConsentRequest)

	err := r.ParseForm()
	if err != nil {
		log.Error(err, "error during parsing body")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	consentRequest.Challenge = r.Form.Get("consent_challenge")
	consentRequest.Action = ConsentAction(r.Form.Get("consent_action"))

	consent, _, err := h.C.HydraClient.OAuth2Api.GetOAuth2ConsentRequest(context.Background()).ConsentChallenge(consentRequest.Challenge).Execute()
	if err != nil {
		log.Error(err, "error during getting consent request")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	var rememberFor int64 = 3600
	acceptConsent, _, err := h.C.HydraClient.OAuth2Api.AcceptOAuth2ConsentRequest(context.Background()).
		ConsentChallenge(consentRequest.Challenge).
		AcceptOAuth2ConsentRequest(hydra.AcceptOAuth2ConsentRequest{
			GrantAccessTokenAudience: consent.RequestedAccessTokenAudience,
			GrantScope:               consent.RequestedScope,
			Remember:                 consent.Skip,
			RememberFor:              &rememberFor,
			Session: &hydra.AcceptOAuth2ConsentRequestSession{
				IdToken: struct {
					Email string `json:"email"`
				}{
					Email: "test@test.com",
				},
			},
		}).
		Execute()
	if err != nil {
		log.Error(err, "error during accepting consent request")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	http.Redirect(w, r, acceptConsent.RedirectTo, http.StatusFound)
}

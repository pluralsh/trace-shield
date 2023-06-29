package handlers

import (
	"io"
	"net/http"
	"strings"

	hydra "github.com/ory/hydra-client-go/v2"
	"github.com/pluralsh/trace-shield/graph/model"
	"github.com/pluralsh/trace-shield/utils"
)

type ConsentAction string

const (
	ConsentActionAccept = ConsentAction("accept")
	ConsentActionDeny   = ConsentAction("deny")
)

type ConsentRequest struct {
	Challenge  string        `json:"consent_challenge"`
	Action     ConsentAction `json:"consent_action"`
	Remember   bool          `json:"remember"`
	GrantScope []string      `json:"grant_scope"`
}

func (h *Handler) Consent(w http.ResponseWriter, r *http.Request) {
	log := h.Log.WithName("Consent")

	body, err := io.ReadAll(r.Body)
	if err != nil {
		log.Error(err, "error during reading body")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	consentRequest := toConsentRequest(string(body))
	if consentRequest == nil {
		log.Error(nil, "error during parsing consent request")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	consent, _, err := h.C.HydraClient.OAuth2Api.GetOAuth2ConsentRequest(r.Context()).ConsentChallenge(consentRequest.Challenge).Execute()
	if err != nil {
		log.Error(err, "error during getting consent request")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	userCtx := ForContext(r.Context())

	accessToken := &model.ConsentRequestSessionAccessToken{}
	idToken := &model.ConsentRequestSessionIDToken{}

	if userCtx != nil {

		accessToken.Subject = &userCtx.Id
		idToken.Subject = &userCtx.Id

		if consentRequest.GrantScope != nil && &userCtx.Email != nil {
			if utils.StringContains(consentRequest.GrantScope, "email") {
				idToken.Email = &userCtx.Email
			}
		}
	}

	outSession := &hydra.AcceptOAuth2ConsentRequestSession{
		AccessToken: accessToken,
		IdToken:     idToken,
	}

	if consentRequest.Action == ConsentActionAccept {
		var rememberFor int64 = 3600
		acceptConsent, _, err := h.C.HydraClient.OAuth2Api.AcceptOAuth2ConsentRequest(r.Context()).
			ConsentChallenge(consentRequest.Challenge).
			AcceptOAuth2ConsentRequest(hydra.AcceptOAuth2ConsentRequest{
				GrantAccessTokenAudience: consent.RequestedAccessTokenAudience,
				GrantScope:               consentRequest.GrantScope,
				Remember:                 &consentRequest.Remember,
				RememberFor:              &rememberFor,
				Session:                  outSession,
			}).
			Execute()
		if err != nil {
			log.Error(err, "error during accepting consent request")
			w.WriteHeader(http.StatusInternalServerError)
			return
		}

		http.Redirect(w, r, acceptConsent.RedirectTo, http.StatusFound)
		return
	}

	rejectConsent, _, err := h.C.HydraClient.OAuth2Api.RejectOAuth2ConsentRequest(r.Context()).
		ConsentChallenge(consentRequest.Challenge).
		RejectOAuth2Request(hydra.RejectOAuth2Request{
			Error:            nil,
			ErrorDebug:       nil,
			ErrorDescription: nil,
			ErrorHint:        nil,
			StatusCode:       nil,
		}).Execute()
	if err != nil {
		log.Error(err, "error during rejecting consent request")
		w.WriteHeader(http.StatusInternalServerError)
		return
	}

	http.Redirect(w, r, rejectConsent.RedirectTo, http.StatusFound)

}

func toConsentRequest(body string) *ConsentRequest {
	if len(body) == 0 {
		return nil
	}

	tuples := strings.Split(body, "&")
	if len(tuples) == 0 {
		return nil
	}

	result := new(ConsentRequest)
	for _, tupleString := range tuples {
		tuple := strings.Split(tupleString, "=")
		if len(tuple) != 2 {
			continue
		}

		key := tuple[0]
		value := tuple[1]

		switch key {
		case "consent_challenge":
			result.Challenge = value
		case "consent_action":
			result.Action = ConsentAction(value)
		case "remember":
			result.Remember = value == "1"
		case "grant_scope":
			result.GrantScope = append(result.GrantScope, value)
		}
	}

	return result
}

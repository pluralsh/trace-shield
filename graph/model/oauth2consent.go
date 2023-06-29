package model

type ConsentRequestSessionAccessToken struct {
	Subject *string `json:"subject,omitempty"`
}

// ConsentRequestSessionIDToken is the ID token for the consent request session.
type ConsentRequestSessionIDToken struct {
	Subject *string `json:"subject,omitempty"`
	Email   *string `json:"email,omitempty"`
}

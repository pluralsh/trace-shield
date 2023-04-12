package handlers

import (
	"github.com/go-logr/logr"
	"github.com/ory/herodot"
	"github.com/pluralsh/trace-shield/clients"
)

type Handler struct {
	C   *clients.ClientWrapper
	Log logr.Logger
	hd  *herodot.JSONWriter
}

func (h *Handler) GetHerodot() *herodot.JSONWriter {
	if h.hd == nil {
		h.hd = herodot.NewJSONWriter(nil)
	}
	return h.hd
}

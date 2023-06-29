package handlers

import (
	"github.com/go-logr/logr"
	"github.com/ory/herodot"
	"github.com/pluralsh/trace-shield/clients"
	"go.opentelemetry.io/otel/propagation"
	"go.opentelemetry.io/otel/trace"
)

type Handler struct {
	C           *clients.ClientWrapper
	Log         logr.Logger
	Tracer      trace.Tracer
	Propagators propagation.TextMapPropagator
	hd          *herodot.JSONWriter
}

func (h *Handler) GetHerodot() *herodot.JSONWriter {
	if h.hd == nil {
		h.hd = herodot.NewJSONWriter(nil)
	}
	return h.hd
}

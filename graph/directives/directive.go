package directives

import (
	"github.com/pluralsh/trace-shield/clients"
	"go.opentelemetry.io/otel/trace"
)

type Directive struct {
	C      *clients.ClientWrapper
	Tracer trace.Tracer
}

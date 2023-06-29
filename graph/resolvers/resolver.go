//go:generate go run generate.go
package resolvers

import (
	"github.com/pluralsh/trace-shield/clients"
	"go.opentelemetry.io/otel/trace"
)

type Resolver struct {
	C      *clients.ClientWrapper
	Tracer trace.Tracer
}

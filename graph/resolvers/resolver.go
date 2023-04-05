//go:generate go run generate.go
package resolvers

import "github.com/pluralsh/trace-shield/clients"

type Resolver struct {
	C *clients.ClientWrapper
}

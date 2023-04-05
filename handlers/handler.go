package handlers

import (
	"github.com/go-logr/logr"
	"github.com/pluralsh/trace-shield/clients"
)

type Handler struct {
	C   *clients.ClientWrapper
	Log logr.Logger
}

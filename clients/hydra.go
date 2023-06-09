package clients

import (
	"fmt"
	"net/http"
	"os"

	hydra "github.com/ory/hydra-client-go/v2"
	"go.opentelemetry.io/contrib/instrumentation/net/http/otelhttp"
)

const (
	HydraPublicDefault = "http://127.0.0.1:4444"
	HydraAdminDefault  = "http://127.0.0.1:4445"
	HydraEnvPublic     = "HYDRA_PUBLIC_URL"
	HydraEnvAdmin      = "HYDRA_ADMIN_URL"
)

func NewHydraAdminClient() (*hydra.APIClient, error) {
	hydraAdminUrl := os.Getenv(HydraEnvAdmin)
	if hydraAdminUrl == "" {
		return nil, fmt.Errorf("No admin address configured for hydra")
	}
	client := http.Client{Transport: otelhttp.NewTransport(http.DefaultTransport)}
	hydraAdminConfiguration := hydra.NewConfiguration()
	hydraAdminConfiguration.Scheme = "http"
	hydraAdminConfiguration.Servers = []hydra.ServerConfiguration{
		{
			URL: hydraAdminUrl, // Hydra Admin API
		},
	}
	hydraAdminConfiguration.HTTPClient = &client
	hydraAdminClient := hydra.NewAPIClient(hydraAdminConfiguration)
	return hydraAdminClient, nil
}

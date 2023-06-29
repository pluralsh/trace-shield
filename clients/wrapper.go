package clients

import (
	"github.com/go-logr/logr"
	hydra "github.com/ory/hydra-client-go/v2"
	kratos "github.com/ory/kratos-client-go"
	controller "github.com/pluralsh/trace-shield-controller/generated/client/clientset/versioned"
	"go.opentelemetry.io/otel/trace"
	ctrl "sigs.k8s.io/controller-runtime"
)

type ClientWrapper struct {
	ControllerClient   *controller.Clientset
	KratosAdminClient  *kratos.APIClient
	KratosPublicClient *kratos.APIClient
	KetoClient         *KetoGrpcClient
	HydraClient        *hydra.APIClient
	Tracer             trace.Tracer

	Log logr.Logger
}

func NewControllerClient() (*controller.Clientset, error) {
	kubeconfig := ctrl.GetConfigOrDie()
	return controller.NewForConfig(kubeconfig)
}

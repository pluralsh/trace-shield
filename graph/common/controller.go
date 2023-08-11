package common

import (
	controller "github.com/pluralsh/trace-shield-controller/generated/client/clientset/versioned"
	ctrl "sigs.k8s.io/controller-runtime"
)

func NewControllerClient() (*controller.Clientset, error) {
	kubeconfig := ctrl.GetConfigOrDie()
	return controller.NewForConfig(kubeconfig)
}

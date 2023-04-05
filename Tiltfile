load('ext://helm_resource', 'helm_resource', 'helm_repo')
load('ext://configmap', 'configmap_create', 'configmap_yaml')
load('ext://restart_process', 'docker_build_with_restart')

helm_repo('bitnami', 'https://charts.bitnami.com/bitnami')
helm_repo('ory', 'https://k8s.ory.sh/helm/charts')
helm_repo('grafana-helm', 'https://grafana.github.io/helm-charts')

## Grafana

helm_resource(
    'grafana',
    'grafana/grafana',
    namespace='grafana',
    flags=[
        '--create-namespace',
        '--values=./dev/grafana_values.yaml',
        ],
    deps=['./dev/grafana_values.yaml'],
    labels=['grafana'],
    resource_deps=['grafana-helm'],
)

## Kratos

helm_resource(
    'postgresql-kratos',
    'bitnami/postgresql',
    namespace='kratos',
    flags=['--create-namespace', '--values=./dev/postgres_kratos_values.yaml'],
    deps=['./dev/postgres_kratos_values.yaml'],
    labels=['kratos'],
    resource_deps=['bitnami']
)

helm_resource(
    'kratos',
    'ory/kratos',
    namespace='kratos',
    flags=[
        '--create-namespace',
        '--values=./dev/kratos_values.yaml',
        "--set-file=kratos.identitySchemas.identity\\.person\\.schema\\.json=./dev/configs/kratos/identity.person.schema.json",
        ],
    deps=['./dev/kratos_values.yaml', './dev/configs/kratos/'],
    labels=['kratos'],
    resource_deps=['ory', 'postgres-kratos'],
)

# needed so we get the kratos logs and not the courier logs. TODO: figure out how to show both
k8s_resource(
    workload='kratos',
    extra_pod_selectors=[{'app.kubernetes.io/name': 'kratos'}],
    discovery_strategy='selectors-only'
)

## Oathkeeper

helm_resource(
    'oathkeeper',
    'ory/oathkeeper',
    namespace='oathkeeper',
    flags=[
        '--create-namespace',
        '--values=./dev/oathkeeper_values.yaml',
        "--set-file=oathkeeper.accessRules=./dev/configs/oathkeeper/access-rules.yaml",
        ],
    deps=['./dev/oathkeeper_values.yaml', './dev/configs/oathkeeper/'],
    labels=['oathkeeper'],
    resource_deps=['ory'],
    )

k8s_resource(
   workload='oathkeeper',
   port_forwards=[
      port_forward(4455, 4455, name='http-proxy'),
   ]
)

## Hydra

helm_resource(
    'postgresql-hydra',
    'bitnami/postgresql',
    namespace='hydra',
    flags=['--create-namespace', '--values=./dev/postgres_hydra_values.yaml'],
    deps=['./dev/postgres_hydra_values.yaml'],
    labels=['hydra'],
    resource_deps=['bitnami']
)

helm_resource(
    'hydra',
    'ory/hydra',
    namespace='hydra',
    flags=[
        '--create-namespace',
        '--values=./dev/hydra_values.yaml',
        ],
    deps=['./dev/hydra_values.yaml'],
    labels=['hydra'],
    resource_deps=['ory', 'postgres-hydra'],
)

## Keto

helm_resource(
    'postgresql-keto',
    'bitnami/postgresql',
    namespace='keto',
    flags=['--create-namespace', '--values=./dev/postgres_keto_values.yaml'],
    deps=['./dev/postgres_keto_values.yaml'],
    labels=['keto'],
    resource_deps=['bitnami']
)

helm_resource(
    'keto',
    'ory/keto',
    namespace='keto',
    flags=[
        '--create-namespace',
        '--values=./dev/keto_values.yaml',
        ],
    deps=['./dev/keto_values.yaml'],
    labels=['keto'],
    resource_deps=['ory', 'postgres-keto'],
)

configmap_create(
    'keto-namespaces-config',
    namespace='keto',
    from_file='namespaces.keto.ts=./dev/configs/keto/opl_ts/src/observability.ts',
    watch=True
)

k8s_resource(
    new_name='keto-namespace-config',
    objects=['keto-namespaces-config'],
    labels=['keto'],
)

## API Server

docker_build(
  'api-server-image',
  '.',
  entrypoint=['/server'],
  dockerfile='./Dockerfile',
#  only=[
#    './build',
#    './web',
#  ],
#  live_update=[
#    sync('./build', '/app/build'),
#    sync('./web', '/app/web'),
#  ],
)

k8s_yaml(
    './dev/api-deployment.yaml'
)

k8s_resource(
    'api-server',
    labels=['api-server'],
)

# frontend

include('./frontend/Tiltfile')

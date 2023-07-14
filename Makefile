
run:
	go run server.go -zap-devel -zap-log-level 2

generate: go-generate generate-typescript-client

go-generate:
	go generate ./...

generate-typescript-client:
	cd frontend && yarn graphql-codegen

generate-db:
	go generate ./ent

setup-tilt-cluster:
	ctlptl create cluster kind --registry=ctlptl-registry

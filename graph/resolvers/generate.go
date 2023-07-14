//go:build ignore

package main

import (
	"fmt"
	"os"
	"regexp"
	"strings"

	"github.com/99designs/gqlgen/api"
	"github.com/99designs/gqlgen/codegen/config"
	"github.com/99designs/gqlgen/plugin/modelgen"
	"github.com/Yamashou/gqlgenc/clientgenv2"
	clientConfig "github.com/Yamashou/gqlgenc/config"
)

var matchFirstCap = regexp.MustCompile("(.)([A-Z][a-z]+)")
var matchAllCap = regexp.MustCompile("([a-z0-9])([A-Z])")

func ToSnakeCase(str string) string {
	snake := matchFirstCap.ReplaceAllString(str, "${1}_${2}")
	snake = matchAllCap.ReplaceAllString(snake, "${1}_${2}")
	return strings.ToLower(snake)
}

var jsonTagRegexp = regexp.MustCompile(`json:".*?"`)
var jsonTagGroupRegexp = regexp.MustCompile(`json:"(.*?)"`)

func snakeCaseMutateHook(b *modelgen.ModelBuild) *modelgen.ModelBuild {
	for _, model := range b.Models {
		for _, field := range model.Fields {
			jsonTagGrouped := jsonTagGroupRegexp.FindStringSubmatch(field.Tag)
			snakeCase := ToSnakeCase(jsonTagGrouped[1])

			field.Tag = jsonTagRegexp.ReplaceAllString(field.Tag, fmt.Sprintf(`json:"%s"`, snakeCase))
		}
	}

	return b
}

// That plugin is used for custom model generation
// It allow to generate model with snake case json tag e.g `json:"example_prop"`
func main() {
	cfg, err := config.LoadConfigFromDefaultLocations()
	if err != nil {
		fmt.Fprintln(os.Stderr, "failed to load config", err.Error())
		os.Exit(2)
	}

	queries := []string{"query/*.graphqls"}
	clientPackage := config.PackageConfig{
		Filename: "./generated/client/client.go",
		Package:  "gqlclient",
	}

	interfaceName := "TraceShieldGraphQLClient"
	clientConf := &clientConfig.GenerateConfig{
		ClientV2:            true,
		ClientInterfaceName: &interfaceName,
	}

	clientPlugin := clientgenv2.New(queries, clientPackage, clientConf)

	err = api.Generate(cfg, api.AddPlugin(clientPlugin))

	if err != nil {
		fmt.Fprintln(os.Stderr, err.Error())
		os.Exit(3)
	}

	os.Exit(0)
}

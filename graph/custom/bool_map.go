package custom

import (
	"encoding/json"
	"fmt"
	"io"

	"github.com/99designs/gqlgen/graphql"
)

func MarshalBoolMap(val map[string]bool) graphql.Marshaler {
	return graphql.WriterFunc(func(w io.Writer) {
		err := json.NewEncoder(w).Encode(val)
		if err != nil {
			panic(err)
		}
	})
}

// TODO: this unmarshaler is not working and is needed for input types
func UnmarshalBoolMap(v interface{}) (map[string]bool, error) {
	if m, ok := v.(map[string]bool); ok {
		return m, nil
	}
	return nil, fmt.Errorf("%T is not a bool map", v)
}

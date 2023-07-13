package custom

import (
	"encoding/json"
	"fmt"
	"io"
	"strconv"

	graphql "github.com/99designs/gqlgen/graphql"
)

func MarshalUInt64(i uint64) graphql.Marshaler {
	return graphql.WriterFunc(func(w io.Writer) {
		io.WriteString(w, strconv.FormatUint(i, 10))
	})
}

func UnmarshalUInt64(v interface{}) (uint64, error) {
	switch v := v.(type) {
	case string:
		return strconv.ParseUint(v, 10, 64)
	case int:
		return uint64(v), nil
	case uint64:
		return v, nil
	case json.Number:
		return strconv.ParseUint(string(v), 10, 64)
	default:
		return 0, fmt.Errorf("%T is not a uint", v)
	}
}

func MarshalUInt32(i uint32) graphql.Marshaler {
	return graphql.WriterFunc(func(w io.Writer) {
		io.WriteString(w, strconv.FormatUint(uint64(i), 10))
	})
}

func UnmarshalUInt32(v interface{}) (uint32, error) {
	switch v := v.(type) {
	case string:
		i, err := strconv.ParseUint(v, 10, 32)
		return uint32(i), err
	case int:
		return uint32(v), nil
	case uint32:
		return v, nil
	case json.Number:
		i, err := strconv.ParseUint(string(v), 10, 32)
		return uint32(i), err
	default:
		return 0, fmt.Errorf("%T is not a uint", v)
	}
}

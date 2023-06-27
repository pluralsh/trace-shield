package utils

// function that converts an interface{} to a map[string]interface{}
func InterfaceToMap(i interface{}) map[string]interface{} {
	m := make(map[string]interface{})
	if i != nil {
		for k, v := range i.(map[string]interface{}) {
			m[k] = v
		}
	}
	return m
}

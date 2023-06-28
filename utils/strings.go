package utils

// function that checks if a string is in a []string
func StringContains(list []string, s string) bool {
	for _, u := range list {
		if u == s {
			return true
		}
	}
	return false
}

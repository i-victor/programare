package main

import (
	"fmt"
)

const (
	InfoColor    = "\033[1;34m%s\033[0m"
	NoticeColor  = "\033[1;36m%s\033[0m"
	WarningColor = "\033[1;33m%s\033[0m"
	ErrorColor   = "\033[1;31m%s\033[0m"
	DebugColor   = "\033[0;36m%s\033[0m"
)

func escapeSprintfVal(str string) string {
	var escaped string = str
	escaped = fmt.Sprintf("%#v", escaped)
	return escaped
}

func main() {
	fmt.Printf(InfoColor, "Info")
	fmt.Println("")
	fmt.Printf(NoticeColor, "Notice")
	fmt.Println("")
	fmt.Printf(WarningColor, "Warning")
	fmt.Println("")
	fmt.Printf(ErrorColor, "Error")
	fmt.Println("")
	fmt.Printf(DebugColor, "Debug")
	fmt.Println("")

	myVar := DebugColor + "Test\x1b"
	fmt.Println(escapeSprintfVal(myVar))
	myVar = fmt.Sprintf(DebugColor, escapeSprintfVal(myVar))
	fmt.Println(myVar)

}

// #END

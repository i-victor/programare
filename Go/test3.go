package main

import (
    "fmt"
    "strings"
)

func main() {
    //var String
    var stringValue string
    var originalValue string
    fmt.Printf("please, type some text:")
    //user input
    fmt.Scan(&stringValue)
    originalValue = stringValue
    //remove spaces
    stringValue = strings.Replace(stringValue, " ", "", -1)
    //set string to lower case
    stringValue = strings.ToLower(stringValue)
    //if contains substring "i", "a" and "n"
    if strings.Contains(stringValue, "i") && strings.Contains(stringValue, "a") && strings.Contains(stringValue, "n") {
        // if "i" is a prefix and "n" a suffix
        firstChar := strings.HasPrefix(stringValue, "i")
        lastChar := strings.HasSuffix(stringValue, "n")
        switch {
        //if is a prefix and suffix so Found
        case firstChar && lastChar:
            fmt.Printf("Found in %s", originalValue)
        //if isnt a prefix and suffix so Not Found
        default:
            fmt.Printf("Not Found in %s", originalValue)
        }
        //if there's no "i", "a" and "n"
    } else {
        fmt.Printf("Not Found in %s", originalValue)
    }
}

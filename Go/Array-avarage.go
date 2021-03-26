package main

import "fmt"

func main() {

    // declaring an array
    arr := []int{1, 2, 3, 4}

    // the number of elements of array
    n := 4

    // declaring the variable of the amount
    sum := 0

    //go through array with for
    for i := 0; i < n; i++ {//initialize the variable

        sum += (arr[i])
    }

    // avg is to find the average
    avg := (float64(sum)) / (float64(n))

    // print the the amount and the avarage
    fmt.Println("Sum = ", sum, "\nAverage = ", avg)
}

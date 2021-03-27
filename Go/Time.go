package main

import (
	"fmt"
	"time"
)

func main() {
	tick := time.Tick(20 * time.Second)
	boom := time.After(100 * time.Second)
	for {
		select {
		case <-tick:
			fmt.Println("tick.")
		case <-boom:
			fmt.Println("BOOM!")
			return
		default:
			fmt.Println("    .")
			time.Sleep(10 * time.Second)
		}
	}
}

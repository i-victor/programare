
// GO Lang
// go build test-webview.go (on openbsd may need to: CGO_LDFLAGS_ALLOW='-Wl,-z,wxneeded|-Wl,-rpath-link,/usr/X11R6/lib' go build test-webview2.go)
// (c) 2017-2020 unix-world.org
// version: 2020.05.17

package main

/*
#cgo openbsd LDFLAGS: -Wl,-z,wxneeded|-Wl,-rpath-link,/usr/X11R6/lib
*/

import (
//	webview "github.com/zserge/webview2"
	webview "github.com/unix-world/smartgo/webview2"
)

func main() {

	debug := false
	w := webview.New(debug)
	defer w.Destroy()
	w.SetTitle("Test Loading External URL")
	w.SetSize(960, 720, webview.HintNone)
	w.Navigate("http://demo.unix-world.org/smart-framework/")

	w.Run()

}

// #END

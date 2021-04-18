
// GO Lang
// go build test-webview.go (on openbsd may need to: CGO_LDFLAGS_ALLOW='-Wl,-z,wxneeded|-Wl,-rpath-link,/usr/X11R6/lib' go build test-webview.go)
// (c) 2017-2020 unix-world.org
// version: 2020.05.17

package main

/*
#cgo openbsd LDFLAGS: -Wl,-z,wxneeded|-Wl,-rpath-link,/usr/X11R6/lib
*/

import (
//	"github.com/zserge/webview"
	"github.com/unix-world/smartgo/webview"
)

func main() {
	w := webview.New(webview.Settings{
		Width:  960,
		Height: 720,
		Title:  "Test Loading External URL",
		URL:    "http://127.0.0.1:8088/www/site-victor/",
	})
	defer w.Exit()
	w.Run()
}

// #END

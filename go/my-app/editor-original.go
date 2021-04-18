//(c) 2020-2021 i-victor

package main

import (
	"os"
	"log"
//	"fmt"
	"net/url"

	smart "github.com/unix-world/smartgo"
	"github.com/zserge/lorca"
)

func LogToConsoleWithColors() {
	//--
	smart.ClearPrintTerminal()
	smart.LogToConsole("DEBUG", true) // colored log
	//--
} //END FUNCTION


func fatalError(logMessages ...interface{}) {
	//--
	log.Fatal("[ERROR] ", logMessages) // standard logger
	os.Exit(1)
	//--
} //END FUNCTION


func jsFunctionSaveData(fileContent string) string {
	//--
	if(fileContent == "") {
		return `document.getElementById('rezultat').innerText = 'Continut gol pentru salvare';`
	}
	//--
	var ok bool = false
	var err string = "?"
	//--
	ok, err = smart.SafePathDirCreate("tmp/", false, false)
	if(err != "") {
		return `document.getElementById('rezultat').innerText = 'Nu am reusit sa creez directorul. Eroarea este: ` + smart.EscapeJs(err) + `';`
	}
	//--
	ok, err = smart.SafePathFileWrite(fileContent, "w", "tmp/js-data-save.txt", false)
	if(err != "") {
		return `document.getElementById('rezultat').innerText = 'Nu am reusit sa salvez. Eroarea este: ` + smart.EscapeJs(err) + `';`
	}
	if(!ok) {
		return `document.getElementById('rezultat').innerText = 'Nu am reusit sa salvez ...';`
	}
	return `document.getElementById('rezultat').innerText = 'OK, salvat ...';`
	//--
}

func uiJsEditorLoad() string {
	js, _ := smart.SafePathFileRead("templates/ckeditor.js", false)
	return js
}

func uiJsEditorDisplay() string {
	html, _ := smart.SafePathFileRead("tmp/js-data-save.txt", false)
	return `
	var editor1 = DecoupledEditor
		.create( document.querySelector( '#editor' ), {
			// toolbar: [ 'heading', '|', 'bold', 'italic', 'link' ]
		} )
		.then( editor => {
			const toolbarContainer = document.querySelector( '.toolbar-container' );
			toolbarContainer.prepend( editor.ui.view.toolbar.element );
			window.editor = editor;
			editor.setData('` + smart.EscapeJs(html) + `');
		} )
		.catch( err => {
			alert(err.stack);
		} );
`
}


func main() {

	LogToConsoleWithColors() // use colors to log in console

	html, err := smart.SafePathFileRead("templates/template.htm", false)
	if(err != "") {
		fatalError("ERROR, cannot read Template", err)
	}
	log.Println("[DEBUG] Template loaded OK")

	ui, _ := lorca.New("data:text/html,"+url.PathEscape(html), "", 960, 720)
	defer ui.Close() // close the browser window only at the end of execution, when <-ui.Done() is called

	ui.Eval(uiJsEditorLoad())
	ui.Eval(uiJsEditorDisplay())

	// Bind Go function to be available in JS. Go function may be long-running and
	// blocking - in JS it's represented with a Promise.
//	ui.Bind("goFunction1", func() string {
//		result := "Salut";
//		return `document.getElementById('rezultat').innerText = '` + smart.EscapeJs(result) + `';`
//	})

	ui.Bind("goSaveData", func(str string) string { return jsFunctionSaveData(str) })

	// Wait for the browser window to be closed
	<-ui.Done()

}

// #END

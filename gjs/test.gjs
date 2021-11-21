const Gtk = imports.gi.Gtk;
const WebKit2 = imports.gi.WebKit2;

Gtk.init(null);

let webview = new WebKit2.WebView();
webview.load_uri('http://www.google.com');
let mwindow = new Gtk.Window({
    default_width: 600,
    default_height: 400
});
mwindow.add(webview);
mwindow.show_all();
mwindow.connect('destroy', function() { Gtk.main_quit() });

Gtk.main();

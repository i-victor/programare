
using Gtk;

int main (string[] args){

	Gtk.init(ref args);

	var fereastra = new Window();
	fereastra.title = "test vala";
	fereastra.set_default_size(264, 120);

	fereastra.window_position = WindowPosition.CENTER;



	fereastra.destroy.connect(Gtk.main_quit);
	fereastra.show_all();
	Gtk.main(); // run gtk

	return 0;


}
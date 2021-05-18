//test in go

package main

import "fmt"

func Displaynames() {
	names := [4]string{
		"Victor",
		"Radu",
		"Alex",
		"David",
	};
	fmt.Println(names);

	a := names[0:2];
	b := names[2:4];
	fmt.Println(a);
	fmt.Println(b);
};

func SimpleFunction() {
var a [2]string;
	a[0] = "Hello";
	a[1] = "World!";
	fmt.Println(a[0], a[1]);
}

func Array() {
var arr[4] int;
	arr[0] = 12;
	arr[1] = 3;
	arr[2] = 16;
	arr[3] = 2008;
	fmt.Println(arr);
};

func Display() {
var project [3] string;
	project[0] = "This is my";
	project[1] = "first";
	project[2] = "go project";
	fmt.Println(project[0], project[1], project[2]);
};

type Obj struct {
  Name string;
  Age int;
  Pasion string;
  Class string;
  Favoritedesktoplanguage string;
  Favoriteweblanguage string;
};

var object1 = Obj { Name: "Victor", Age: 13, Class: "a 6-a", Pasion: "IT", Favoritedesktoplanguage: "Golang", Favoriteweblanguage:"JS"  };

var a = "Name:";
var b = "Age:";
var c = "Pasion:";
var d = "Class:";
var e = "Favorite desktop language:";
var f = "Favorite web language:";

func main() {
	SimpleFunction();
	Displaynames();
	Display();
	Array();
	fmt.Println(a, object1.Name);
	fmt.Println(b, object1.Age);
	fmt.Println(c, object1.Pasion);
	fmt.Println(d, object1.Class);
	fmt.Println(e, object1.Favoritedesktoplanguage);
	fmt.Println(f, object1.Favoriteweblanguage);
};

<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

// parte logica

class myClass {

	public $text = 'def';

	public function myTest() {
		$out = (string) '<h1>'.htmlspecialchars($this->text).'</h1>';
		return (string) $out;
	} // END FUNCTION

}

// executie

$object = new myClass();
$object->text = 'Titlu 1';
echo $object->myTest();

$object2 = new myClass();
$object2->text = 'Titlu 2';
echo $object2->myTest();


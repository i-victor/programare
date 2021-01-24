<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

function Test(){

$class_names = '';

$arr = [
	'key1' => 'Ilies',
	'key2' => 'Chiorean',
	'key3' => 'Homorodean',
	'key4' => 'Popescu',
	'key5' => 'Greab'
];

		foreach($arr as $key => $valeu){
	$class_names.= $valeu.' , ';
}

	return (string) $class_names;

}

echo Test();



?>
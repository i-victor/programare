<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

function Family() {

	$names = '';

	$arr = [
		'key1' => 'Victor',
		'key2' => 'Radu',
		'key3' => 'Simona'
	];

		foreach($arr as $key => $value){
	$names .= $value.' , ';
	}

	return (string) $names;

}

echo Family();


?>
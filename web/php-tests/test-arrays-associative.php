<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

function myTest() {

	$out = '';

	// associative array
	$arr = [
		'key1' => 'One',
		'key2' => 'Two',
		'key3' => 'Three'
	];
	foreach($arr as $key => $value) {
		$out .= $value.', ';
	}

	return (string) $out;


} // END FUNCTION

echo myTest();

// #END


<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

function myTest() {

	$out = '';

	// non-associative array
	$arr = [
		'One',
		'Two',
		'Three'
	];
	for($i=0; $i<count($arr); $i++) {
		$out .= $arr[$i].', ';
	}

	return (string) $out;


} // END FUNCTION

echo myTest();

// #END

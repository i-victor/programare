<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');


function sumN(array $numbers) {
	$total = 0;
	foreach($numbers as $key => $val) {
		$total += (float) $val;
	}
	return (float) $total;
}
echo sumN([1, 2, 3, 4]);
echo '<hr>';

function sumM() { // variadic function
	$numbers = (array) func_get_args(); // get variadic arguments as array
	$total = 0;
	foreach($numbers as $key => $val) {
		$total += (float) $val;
	}
	return (float) $total;
}
echo sumM(1, 2, 3, 4);
echo '<hr>';


// #END


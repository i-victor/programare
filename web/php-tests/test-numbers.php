<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

function myTest() {

	$num1 = 10;
	$num2 = 0;

	$sum = $num1 + $num2;

	return($sum);


} // END FUNCTION

echo myTest();

// #END


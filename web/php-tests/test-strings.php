<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

function myTest() {

	$s1 = 'ILIES';
	$s2 = 'victor mihai';

	$rezultat = $s1 . ' ' .$s2;

	return ucwords(strtolower($rezultat));


} // END FUNCTION

echo myTest();

// #end

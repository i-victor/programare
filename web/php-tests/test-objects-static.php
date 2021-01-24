<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

class myClass {

	public static function myTest() {
		$out = 'abc';
		return (string) $out;
	} // END FUNCTION

}

echo myClass::myTest();

// #END

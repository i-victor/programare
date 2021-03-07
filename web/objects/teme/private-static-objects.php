<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

class Test {

	public static $myName = 'default';

	public static function setName($name) {
		self::$myName = (string) $name;
	}

	public static function displayName() {
		echo(self::$myName);
	}

} //END CLASS

Test::setName('Victor');
Test::displayName();

// #end

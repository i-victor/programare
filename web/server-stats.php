<?php

ini_set('display_errors', '1');	// display runtime errors
error_reporting(E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED); // error reporting
date_default_timezone_set('UTC');


$arr = [
	'stats' => [
		'server1'  => [
			'url' 		=> (string) 'http://server1.loc',
			'status' 	=> (bool) true,
			'time' 		=> (string) date('Y-m-d H:i:s'),
		],
		'server2'  => [
			'url' 		=> (string) 'https://server2.loc',
			'status' 	=> (bool) false,
			'time' 		=> (string) date('Y-m-d H:i:s'),
		],
	],
];

echo (string) json_encode($arr, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT | JSON_INVALID_UTF8_SUBSTITUTE);

// #end php


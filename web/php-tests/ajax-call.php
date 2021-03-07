<?php

$display = $_GET['mode']; // get variable by URL ?mode=json

// this content is valid HTML Code
$html = <<<'HTML'
	<span style="color:#666699;">'This is a TEXT from PHP'</style>;
HTML;

$array = [
	'name' => 'Victor',
	'age' => 12,
	'data' => [
		1,
		2,
		3
	]
];

if((string)$display == 'json') {
	echo (string) json_encode($array);
} else {
	echo (string) $html;
}

// #end

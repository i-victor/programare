<?php

function main($n=14, $x=4) {

	$all = range(1, $n);

//	print_r($all);

	$culegator = [];

	for($c=1; $c<=$x; $c++) {
		if((!isset($culegator)) OR (!is_array($culegator))) {
			$culegator[$c] = [];
		}
		$i=0;
		$test = $all;
		foreach($test as $key => $val) {
			if($i % 2 === 0) {
				$culegator[$c][] = $val;
			} else {
				if(!in_array($val, $test)) {
					$test[] = $val;
				}
			}
			$i++;
		}
		print_r($test);
		$all = $test;
	}

//	print_r($culegator);

}

main();


// #end php

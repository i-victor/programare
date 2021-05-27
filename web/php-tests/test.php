<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

echo '<pre>';

$arr = [];
//$map = new WeakMap;
$obj = new stdClass;
$arr[42] = &$obj;
//var_dump($arr);
//$map[$obj] = 42;
//var_dump($map);
// object(WeakMap)#1 (1) {
//   [0]=>
//   array(2) {
//     ["key"]=>
//     object(stdClass)#2 (0) {
//     }
//     ["value"]=>
//     int(42)
//   }
// }

// The object is destroyed here, and the key is automatically removed from the weak map.
$obj = null;
unset($obj);

var_dump($arr);
//var_dump($map);
// object(WeakMap)#1 (0) {
// }


$a = 2;
$b =& $a;
$a = 0;
echo 'B este: '.$b;

// #end php code

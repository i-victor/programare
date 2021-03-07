<?php

$v1 = (int) $_POST['val1'];
$v2 = (int) $_POST['val2'];

if ($v1 > $v2) {

$val1 = $v2;
$val2 = $v1;

} else {

$val1 = $v1;
$val2 = $v2;

	}


if($val1 == ($val2 - 1) or $val2 == ($val1 - 1)) {

echo "Cele 2 numere sunt consecutive";

} else {

echo "Cele 2 numere nu sunt consecutive";

}
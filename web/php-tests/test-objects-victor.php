<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

// parte logica

class test {

	public $culoare = 'verde';
	public $greutate = 64.5;
	public $volum = 2008;

	public function afisare() {
		return (string) 'masa obiectului este:'.$this->greutate.' inaltimea obiectului este:'.$this->volum.' culoarea obiectului este:'.$this->culoare;
	} //END FUNCTION

	public function formula() {
		return (float) ((float)$this->volum * (float)$this->greutate);
}

} //END CLASS


$obj = new test();
$obj->greutate = 24;
echo htmlspecialchars($obj->afisare());

echo'<br>';

$obj = new test();
echo (float) $obj->formula();

// end php code

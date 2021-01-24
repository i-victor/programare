<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

class copii {

	public $inaltime = 1.65;
	public $culoarepar  = 'negru';
	public $culoareochi = 'caprui';
	public $greutate = 64;

	public function afisare() {
		return (string) 'copilul are inaltimea:'.$this->inaltime.'si greutatea lui este:'.$this->greutate.'si culoarea parului este:'.$this->culoarepar.'si culoarea ochilor este:'.$this->culoareochi;
	} //END FUNCTION

} //END CLASS


$obj = new copii();
echo htmlspecialchars($obj->afisare());

// #end

<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

// parte logica

class cerc {

	public $raza = 0;

	public function area() {
		return (float) (pi() * (float)$this->raza * (float)$this->raza);
	} //END FUNCTION

} //END CLASS


$cerc1 = new cerc();
$cerc1->raza = 2008;
echo '<p>Aria Cerc1 este: '.$cerc1->area().'</p>';

$cerc2 = new cerc();
$cerc2->raza = 25;
echo '<p>Aria Cerc2 este: '.$cerc2->area().'</p>';

// end php code

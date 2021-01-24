<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

// parte logica

class dreptunghi {

	public $lungime = 0;
	public $latime = 0;

	public function area() {
		return (float) ((float)$this->lungime * (float)$this->latime);
	} //END FUNCTION

} //END CLASS


$dreptunghi1 = new dreptunghi();
$dreptunghi1->lungime = 10;
$dreptunghi1->latime = 5;
echo '<p>Aria Dreptunghi1 este: '.$dreptunghi1->area().'</p>';

$dreptunghi2 = new dreptunghi();
$dreptunghi2->lungime = 100;
$dreptunghi2->latime = 25;
echo '<p>Aria Dreptunghi2 este: '.$dreptunghi2->area().'</p>';

// # end php code

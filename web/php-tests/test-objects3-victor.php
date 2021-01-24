<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT & ~E_NOTICE);
date_default_timezone_set('UTC');

class medie {

	public $var1 = 10;
	public $var2 = 10;
	public $var3 = 9;
	public $var4 = 10;


	public function calculate(){

		$arr = [$this->var1,$this->var2,$this->var3,$this->var4];

		$medie = 0;
		foreach($arr as $key => $val){
			$medie += $val;
		}
		$medie = $medie / count($arr);

		return $medie;

	}

}//END CLASS==============




$obj = new medie();
echo $obj->calculate();





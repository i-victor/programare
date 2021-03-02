<?php

// obiect static php

class MyClass {

	private static $zecimale = 2;

	public function setZecimale($dec) {
		$dec = (int) $dec;
		if($dec < 0) {
			$dec = 0;
		} else if($dec > 4) {
			$dec = 4;
		}
		self::$zecimale = $dec;
	}

	public function adunare($numar, $factor) {
		$rezultat = (float) $numar + (float) $factor;
		return number_format($rezultat, self::$zecimale, '.', '');
	}

	public function scadere($numar, $factor) {
		$rezultat = (float) $numar - (float) $factor;
		return number_format($rezultat, self::$zecimale, '.', '');
	}

	public function inmultire($numar, $factor) {
		$rezultat = (float) $numar * (float) $factor;
		return number_format($rezultat, self::$zecimale, '.', '');
	}


	public function impartire($numar, $factor) {
		if((int)$factor == 0) {
			return 'Nu se poate, impartire la 0';
		}
		$rezultat = (float) $numar / (float) $factor;
		return number_format($rezultat, self::$zecimale, '.', '');
	}

}

$test = null;

MyClass::setZecimale(2);

echo('<pre>');

$test =  MyClass::adunare('3.2', '1');
echo($test."\n");

$test = MyClass::scadere('3.2', '1');
echo($test."\n");

$test = MyClass::inmultire('3.2', 1);
echo($test."\n");

$test = MyClass::impartire('6.4', 2);
echo($test."\n");

echo('</pre>');
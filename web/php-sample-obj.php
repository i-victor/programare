<?php

class Utils {

	public static function htmlEscape($str) {
		return (string) htmlspecialchars((string)$str);
	}


}


class Kid {

	private $age;
	private $height;

	public function __construct($age, $height) {
		$this->age = (int) $age;
		$this->height = (float) $height;
	}

	public function getData() {
		return 'This kid is '.$this->age.' years <old> and have a height of: '.$this->height.' cms';
	}

}


$victor = new Kid(13, 176);
$radujr = new Kid(19, 185);

echo Utils::htmlEscape($victor->getData());
echo '<hr>';
echo Utils::htmlEscape($radujr->getData());

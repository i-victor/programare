<?php

ini_set('display_errors', '1');	// display runtime errors
error_reporting(E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED); // error reporting
date_default_timezone_set('UTC');

class Draw {


	public $cursor = '';


	public function newLine() {

		$code = '<br>';

		return $code;

	}


	public function space() {

		$code = '&nbsp;';

		return $code;

	}


	public function button($name, $action) {

		$html = '<button style="cursor:'.htmlspecialchars($this->cursor).'" type="button" onclick="'.htmlspecialchars($action).'">'.htmlspecialchars($name).'</button>';

		return $html;

	} // end function


	public function link($name, $url) {

		$code = '';

		return $code;

	}


	public function image($action, $name, $width=100, $height=100) {

		$width = (int) $width;
		if($width < 1) {
			$width = 1;
		} elseif($width > 1600) {
			$width = 1600;
		} else {
			// $width is OK
		}

		if($height < 1) {
			$height = 1;
		} elseif($height > 1080) {
			$height = 1080;
		} else {
			// $heigh is OK
		}

		$code = '<img style="cursor:'.htmlspecialchars($this->cursor).'" title="'.htmlspecialchars($this->title).'" width="'.(int)$width.'" height="'.(int)$height.'" src="'.htmlspecialchars($action).'" alt="'.htmlspecialchars($name).'">';

		return $code;

	} //end function


} // end class


//===== below is output

echo '<h1>HomePage</h1>';

$draw = new Draw();

$draw->cursor = '';

echo $draw->button('Home Page', 'alert("esti deja pe homepage");');
echo $draw->space();
echo $draw->button('Pagina 2', 'self.location = "page2.php";');
echo $draw->newLine();
echo $draw->link('Pagina 2', 'page2.php');
echo $draw->newLine();

// #end
<?php

ini_set('display_errors', '1');	// display runtime errors
error_reporting(E_ALL & ~E_NOTICE & ~E_STRICT & ~E_DEPRECATED); // error reporting
date_default_timezone_set('UTC');

echo "Welcome to the page 2";

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

		$html = '<button style="cursor:'.htmlspecialchars($this->cursor).'" type="button" onclick="'.htmlspecialchars($action).'" id="button2" style="background-color:#ECECEC">'.htmlspecialchars($name).'</button>';

		return $html;

	} // end function


	public function link($name, $url) {

		$code = '';

		return $code;

	}

}//END class

$draw = new Draw();

$draw->cursor = '';

echo $draw->button('Page 2', 'alert("You are already on page 2");');
echo $draw->space();
echo $draw->button(' Home Page', 'self.location = "amazon-clone.php";');
echo $draw->newLine();
echo $draw->link('Home page', 'amazon-clone.php');
echo $draw->newLine();

?>

<head>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
    $( "#menu" ).menu();
  } );
  </script>
  <style>
  .ui-menu { width: 150px; position: relative; top: 100px; left: 120px; }
  </style>

<style>
#div1 { hieght: 300px; }
</style>

</head>
<body>

<div id="bar1" style="background-color: #ECECEC; padding: 10px">

<ul id="menu">

  <li><div>Menu</div>

<ul>
  <li><div>Books</div></li>
  <li><div>Clothing</div></li>
  <li><div>Electronics</div>
    <ul>
      <li><div>Home Entertainment</div></li>
      <li><div>Car Hifi</div></li>
      <li><div>Utilities</div></li>
    </ul>
  </li>
  <li><div>Movies</div></li>
  <li><div>Music</div>
    <ul>
      <li><div>Rock</div>
        <ul>
          <li><div>Alternative</div></li>
          <li><div>Classic</div></li>
        </ul>
      </li>
      <li><div>Jazz</div>
        <ul>
          <li><div>Freejazz</div></li>
          <li><div>Big Band</div></li>
          <li><div>Modern</div></li>
        </ul>
      </li>
      <li><div>Pop</div></li>
    </ul>
  </li>
  <li><div>Specials (n/a)</div></li>
</ul>
	</ul>
	</li>

		</div>

</body>

<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

if(isset($_REQUEST['dtime'])) {

$dob = (string) $_REQUEST['dtime'];

$mm= (int) $_REQUEST['mm'];

$dd= (int) $_REQUEST['dd'];

$yy= (int) $_REQUEST['yy'];

$dob=$mm."/".$dd."/".$yy;

$arr=explode('/',$dob);

$dateTs=strtotime($dob);

$now=strtotime('today');

if(count($arr) != 3) die('ERROR:please enter a valid date');

if(sizeof($arr)!=3) die('ERROR:please enter a valid date');

if(!checkdate($arr[0],$arr[1],$arr[2])) die('PLEASE: enter a valid date of birth');

if($dateTs>=$now) die('ENTER a date of birth earlier than today');

$ageDays=floor(($now-$dateTs)/86400);

$ageYears=floor($ageDays/365);

$ageMonths=floor(($ageDays-($ageYears*365))/30);


echo "<font color='black' size='10'> You are aproximative $ageYears years and $ageMonths months old.  </font>";

}

?>

<form method="post"><center>

<h1>Choose your day of birth</h1>

	<select name="yy">
		<option value="">Year</option>
	        <?php
		for($i=1800;$i<=date('Y');$i++)
		{
		echo "<option value='$i'>$i</option>";
		}
		?>
	</select>


	<select name="mm">
		<option value="">Month</option>
		<?php
		for($i=1;$i<=12;$i++)
		{
		echo "<option value='$i'>$i</option>";
		}
		?>
	</select>


	<select name="dd">
		<option value="">Date</option>
		<?php
		for($i=1;$i<=31;$i++)
		{
		echo "<option value='$i'>$i</option>";
		}

		?>
	</select>

<input type="submit" name="sub" value="check it"/>

	</center>

	</form>

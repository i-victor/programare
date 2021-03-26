<?php

ini_set('display_errors', 1);
error_reporting(E_ALL & ~E_STRICT);
date_default_timezone_set('UTC');

if(isset($_REQUEST['dtime'])) {

$dob = (string) $_REQUEST['dtime'];

$arr=explode('-',$dob);

$dateTs=strtotime($dob);

$now=strtotime('today');

if(count($arr) != 3) { die('ERROR:please enter a valid date'); }

if(!checkdate($arr[1],$arr[2],$arr[0])) die('PLEASE: enter a valid date of birth');

if($dateTs>=$now) die('ENTER a date of birth earlier than today');

$ageDays=floor(($now-$dateTs)/86400);

$ageYears=floor($ageDays/365);

$ageMonths=floor(($ageDays-($ageYears*365))/30);


echo "<font color='black' size='10'> You are aproximative $ageYears years and $ageMonths months old.  </font>";

}

?>

<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>

<form method="post"><center>

<h1>Choose your day of birth</h1>

<input type="text" id="selecteaza-data" name="dtime" readonly>
<input type="submit" name="sub" value="check it">

</center></form>
<script>
	$(function(){
		$('#selecteaza-data').datepicker({
			dateFormat: 'yy-mm-dd',
			showButtonPanel: true,
			changeMonth: true,
			changeYear: true,
			showOtherMonths: true,
			selectOtherMonths: true,
			yearRange: '1900:2021',
			maxDate: '+0M'
		});
	});
</script>

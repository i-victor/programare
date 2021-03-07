<?php
// Controller: Test/Exemplu
// Route: ?page=test.exemplu2

//----------------------------------------------------- PREVENT EXECUTION BEFORE RUNTIME READY
if(!defined('SMART_FRAMEWORK_RUNTIME_READY')) { // this must be defined in the first line of the application
	@http_response_code(500);
	die('Invalid Runtime Status in PHP Script: '.@basename(__FILE__).' ...');
} //end if
//-----------------------------------------------------

define('SMART_APP_MODULE_AREA', 'INDEX'); // INDEX, ADMIN, SHARED

/**
 * Index Controller
 *
 * @ignore
 *
 */
class SmartAppIndexController extends SmartAbstractAppController {

	public function Run() {

		//--
		$this->PageViewSetCfg('template-path', '@'); // set template path to this module
		$this->PageViewSetCfg('template-file', 'template.htm'); // the default template
		//--

		$this->PageViewSetVars([
			'title' 	=> 'Exemplul 2 (Twig)',
			'footer' 	=> '(C) 2021 VICTOR ILIES'
		]);

		$dtime = (string) $this->RequestVarGet('dtime'); //, '', 'string');

	if($dtime) {
		$dob = (string) $dtime;
		$arr = explode('-',$dob);
		$dateTs = strtotime($dob);
		$now = strtotime('today');
		if(count($arr) != 3) {
			$this->PageViewSetErrorStatus(400, 'ERROR: please enter a valid date');
			return;
		}
		if(!checkdate($arr[1],$arr[2],$arr[0])) {
			$this->PageViewSetErrorStatus(400, 'PLEASE: enter a valid date of birth');
			return;
		}
		if($dateTs>=$now) {
			$this->PageViewSetErrorStatus(400, 'ENTER a date of birth higher than today');
			return;
		}
		$ageDays = floor(($now-$dateTs)/86400);
		$ageYears = floor($ageDays/365);
		$ageMonths = floor(($ageDays-($ageYears*365))/30);
		$this->PageViewSetVars([
			'main' => SmartTemplating::render_file_template(
				$this->ControllerGetParam('module-view-path').'exemplu1-partea2.twig.htm',
				[
					'AGE_YEARS' => (string) $ageYears,
					'AGE_MONTHS' => (string) $ageMonths
				]
			)
		]);
		return;
	}

		//--
		$this->PageViewSetVars([
			'main' => SmartTemplating::render_file_template(
				$this->ControllerGetParam('module-view-path').'exemplu1-partea1.twig.htm',
				[
					'YEARS' => '1900:2021'
				]
			)
		]);
		//--

	} //END FUNCTION

} //END CLASS

// end of php code

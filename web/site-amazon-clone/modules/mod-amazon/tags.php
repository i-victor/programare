<?php

// Controller: amazone/page1
// Route: ?page=test.page1

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

		//-- this page output is json, NOT html
		$this->PageViewSetCfg('rawpage', true);
		$this->PageViewSetCfg('rawmime', 'text/json');
		$this->PageViewSetCfg('rawdisp', 'inline');
		//--

		//--
		$db = new \SmartModDataModel\Amazon\TagsModel();
		$data_arr = (array) $db->getData(25, 0);
		$db = null; // close connection
		//--
		$json = Smart::json_encode((array)$data_arr);
		//--

		//--
		$this->PageViewSetVars([
			'main' => (string) $json
		]);
		//--

	} //END FUNCTION

} // END CLASS

// end of php code

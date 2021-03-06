<?php

// Controller: amazone/Page1
// Route: ?page=amazon.page1

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

		$title = 'Homepage';

		$html = (string) SmartTemplating::render_file_template(
			$this->ControllerGetParam('module-view-path').'page1.mtpl.htm',
			[
			]
		);

		$this->PageViewSetVars([
			'title' => (string) $title,
			'main' => (string) $html
		]);

	} //END FUNCTION

} // END CLASS

// end of php code

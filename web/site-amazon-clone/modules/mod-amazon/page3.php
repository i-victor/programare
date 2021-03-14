<?php

// Controller: amazon/page3
// Route: ?page=amazone.page3

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

	public function Run () {

		//--
		$this->PageViewSetCfg('template-path', '@'); // set template path to this module
		$this->PageViewSetCfg('template-file', 'template.htm'); // the default template
		//--

		//--
		$title = 'Page 3';
		//--
		$html = SmartTemplating::render_file_template(
			$this->ControllerGetParam('module-view-path').'page3.mtpl.htm',
			[
				'TEXT' => 'This is page 3'
			]
		);
		//--
		$this->PageViewSetVars([
			'title' => (string) $title,
			'main' => (string) $html
		]);

	} //END FUNCTION

} //END CLASS

// end of php code

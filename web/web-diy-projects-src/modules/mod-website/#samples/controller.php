<?php
// Controller: Website/Controller
// Route: ?/page/website.controller (?page=website.controller)
// (c) 2006-2021 unix-world.org - all rights reserved
// r.8.7 / smart.framework.v.8.7

//----------------------------------------------------- PREVENT EXECUTION BEFORE RUNTIME READY
if(!defined('SMART_FRAMEWORK_RUNTIME_READY')) { // this must be defined in the first line of the application
	@http_response_code(500);
	die('Invalid Runtime Status in PHP Script: '.@basename(__FILE__).' ...');
} //end if
//-----------------------------------------------------

define('SMART_APP_MODULE_AREA', 'INDEX'); // INDEX

/**
 * Index Controller
 *
 * @ignore
 *
 */
final class SmartAppIndexController extends SmartAbstractAppController {

	public function Run() {

		//--
		$this->PageViewSetCfg('template-path', '@'); // set template path to this module
		$this->PageViewSetCfg('template-file', 'template.htm'); // the default template
		//--

		//--
		$this->PageViewSetVars([
			'title' 	=> 'This is the page title',
			'main' 		=> SmartMarkersTemplating::render_file_template(
				$this->ControllerGetParam('module-view-path').$this->ControllerGetParam('action').'.mtpl.htm',
				[
					'AREA-ONE' => 'Hello World',
					'URL-VAR-ONE' => 'website.homepage',
					'JS-VAR-ONE' => 'I am a \'simple\' alert for $jQuery',
				]
			)
		]);
		//--

	} //END FUNCTION

} //END CLASS

// end of php code

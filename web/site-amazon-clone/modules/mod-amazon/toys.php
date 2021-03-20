<?php

// Controller: amazon/Toys
// Route: ?page=amazon.toys

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

		$title = 'Toys';

		//--
		$db = new \SmartModDataModel\Amazon\ProductsModel();
		$limit = 10;
		$ofs = (int) $this->RequestVarGet('ofs'); // vine din request de la navbox
		$tabel_arr = (array) $db->filterDataToys($limit, $ofs * $limit);
		$total_records = (int) $db->countData();
		$pages = (int) ceil($total_records / $limit);
		$db = null; // close connection
		//--
		$tabel_html = (string) SmartTemplating::render_file_template(
			$this->ControllerGetParam('module-view-path').'partials/tabel.inc.twig.htm',
			[
				'TABEL' => (array) $tabel_arr,
				'RESULTS' => 'Lista Produse',
				'STRING' => 'Nu au fost gasite produse',
				'PAGES' => (int) ($pages - 1),
				'OFS' => (int) $ofs,
				'NUMSHIFT' => (int) $ofs * $limit,
				'SEARCH' => (string) '' // aici nu avem search
			]
		);

		$html = SmartTemplating::render_file_template(
			$this->ControllerGetParam('module-view-path').'toys.mtpl.htm',
			[
				'TABEL-TWIG-HTML' => (string) $tabel_html
			]
		);

		$this->PageViewSetVars([
			'title' => (string) $title,
			'main' => (string) $html
		]);

	} //END FUNCTION

} // END CLASS

// end of php code


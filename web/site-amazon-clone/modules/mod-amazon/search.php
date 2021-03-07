<?php

// Controller: Test/amazon-clone
// Route: ?page=test.amazone-clone

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

		$search = (string) $this->RequestVarGet('search'); // vine din $_POST['search']

		$title = 'Search Results';

		//--
		$tabel_arr = [ // aceasta este o structura de date ce poate fi stocata intr-o baza de date: SQLite sau PostgreSQL sau MySQL sau MongoDB
			0 => [
				'id' => 'iphone-12-mini',
				'name' => 'iPhone 12 Mini',
				'image' => 'https://m.media-amazon.com/images/I/51biqZP8+2L._AC_UY218_.jpg',
				'price' => '$379.99'
			],
			1 => [
				'id' => 'iphone-12-max',
				'name' => 'iPhone 12 Max',
				'image' => 'https://m.media-amazon.com/images/I/81K+adaNRiL._AC_UY218_.jpg',
				'price' => '$586'
			]
		];
		//--
		$tabel_filter_arr = array();
		foreach($tabel_arr as $num => $column) {
			if(is_array($column)) {
				if(isset($column['name'])) {
					if(stripos((string)$column['name'], (string)$search) !== false) { // conditie: daca coloana 'name' contine string-ul de cautare $search
						$tabel_filter_arr[] = $column;
					} //end if
				} //end if
			} //end if
		} //end foreach
		//--

		$tabel_html = (string) SmartTemplating::render_file_template(
			$this->ControllerGetParam('module-view-path').'partials/search-tabel.inc.twig.htm',
			[
				'TABEL' => (array) $tabel_filter_arr
			]
		);

		$html = SmartTemplating::render_file_template(
			$this->ControllerGetParam('module-view-path').'search.mtpl.htm',
			[
				'SEARCH' => (string) $search,
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

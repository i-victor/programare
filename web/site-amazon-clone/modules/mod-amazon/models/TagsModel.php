<?php
// [MODEL - Smart.Framework]
// (c) 2006-2020 unix-world.org - all rights reserved
// r.7.2.1 / smart.framework.v.7.2

// Class: \SmartModDataModel\Amazon\TagsModel
// Type: Module Data Model
// Info: this class integrates with the default Smart.Framework modules autoloader so does not need anything else to be setup

namespace SmartModDataModel\Amazon;

//----------------------------------------------------- PREVENT DIRECT EXECUTION (Namespace)
if(!\defined('\\SMART_FRAMEWORK_RUNTIME_READY')) { // this must be defined in the first line of the application
	@\http_response_code(500);
	die('Invalid Runtime Status in PHP Script: '.@\basename(__FILE__).' ...');
} //end if
//-----------------------------------------------------


//=====================================================================================
//===================================================================================== CLASS START [OK: NAMESPACE]
//=====================================================================================


/**
 * Data Model
 *
 * @access 		private
 * @internal
 *
 * @version 	v.20210313
 *
 */
final class TagsModel {

	// ->

	private $connection = null;

	//============================================================
	public function __construct() {

		//--
		$this->connection = new \SmartSQliteDb('#db/shop.sqlite');
		//--
		$this->connection->open();
		//--

		//-- init (create) the sample tables if they do not exist
		$this->init_table();
		//--

	} //END FUNCTION
	//============================================================


	//============================================================
	public function __destruct() {

		//--
		if(!$this->connection instanceof \SmartSQliteDb) {
			return;
		} //end if
		//--
		$this->connection->close(); // clean shutdown
		//--

	} //END FUNCTION
	//============================================================


	//============================================================
	public function getConnection() {
		//--
		return $this->connection;
		//--
	} //END FUNCTION
	//============================================================


	//============================================================
	public function getData(int $limit, int $offset) {
		//--
		if($limit < 1) {
			$limit = 1;
		} elseif($limit > 25) {
			$limit = 25;
		} //end if
		//--
		if($offset < 0) {
			$offset = 0;
		} //end if
		//--
		return (array) $this->connection->read_data( // get non-associative
			'SELECT * FROM tags ORDER BY id ASC LIMIT '.(int)$limit.' OFFSET '.(int)$offset
		);
		//--
	} //END FUNCTION
	//============================================================


	//===== PRIVATES


	//============================================================
	private function init_table() {

		//--
		if($this->connection->check_if_table_exists('tags') == 1) {
			return; // prevent execution if the table has been already created
		} //end if
		//--

		//--
		$rows = [ // aceasta este o structura de date ce poate fi stocata intr-o baza de date: SQLite sau PostgreSQL sau MySQL sau MongoDB
			[ 'id' => 'Apple' ],
			[ 'id' => 'iPhone' ],
			[ 'id' => 'Ipad' ],
			[ 'id' => 'iMac Pro' ],
			[ 'id' => 'iMac' ],
			[ 'id' => 'Mac' ],
			[ 'id' => 'Mac Pro' ],
			[ 'id' => 'Mac Mini' ],
			[ 'id' => 'MacBook' ],
			[ 'id' => 'MacBook Pro' ],
			[ 'id' => 'MacBook Air' ],
		];
		//--

		//--
		if(!$this->connection->check_if_table_exists('tags')) { // better check here and make create table in a transaction if does not exists ; if not check here the create_table() will anyway check
			$this->connection->write_data('BEGIN'); // start transaction
			$this->connection->create_table(
				'tags',
				'id character varying(64) PRIMARY KEY NOT NULL',
				[ // indexes
				//	'id' 		=> 'id', // not necessary, it is the primary key
				]
			);
			$iterator = 0;
			foreach($rows as $key => $row) {
				$wr = (array) $this->connection->write_data(
					'INSERT INTO `tags` '.$this->connection->prepare_statement($row, 'insert')
				);
				$iterator++;
				if($iterator != $wr[2]) {
					\Smart::log_warning(__METHOD__.' :: Invalid LastInsertID at cycle #'.$iterator.' is: '.$wr[2]);
				} //end if
			} //end foreach
			$this->connection->write_data('COMMIT');
		} //end if
		//--

	} //END FUNCTION
	//============================================================


} //END CLASS


//=====================================================================================
//===================================================================================== CLASS END
//=====================================================================================


// end of php code

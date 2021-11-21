<?php

abstract class cls {

	protected $text = '';

	final function __construct(string $txt) {
		$this->text = (string) $txt;
	}

	abstract public function display();

	final protected function escapeHtml(?string $txt) : string {
		return (string) htmlspecialchars((string)$txt);
	}

}

class cls1 extends cls {

	public function display() {
		echo '<h1>'.$this->escapeHtml((string)$this->text).'</h1>';
	}

}

final class cls2 extends cls1 {

}

$cls = new cls2('Salut');
$cls->display();


final class cls3 {

	public static function display(?string $txt) {
		echo '<h1>'.self::escapeHtml((string)$txt).'</h1>';
	}

	private static function escapeHtml(?string $txt) : string {
		return (string) htmlspecialchars((string)$txt);
	}

}

cls3::display('Salut2');


//END

// js

class Test {

	static myName = 'default';

	static setName(name) {
		this.myName = String(name);
	}

	static displayName() {
		document.write(this.myName);
	}

}

Test.setName('Victor');
Test.displayName();

// #end

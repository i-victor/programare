
var MyClass = new function() {

	var zecimale = 2;

	this.setZecimale = function(dec) {
		dec = parseInt(dec);
		if(dec < 0) {
			dec = 0;
		} else if(dec > 4) {
			dec = 4;
		}
		zecimale = dec;
	}

	this.adunare = function(numar, factor) {
		var rezultat = Number(numar) + Number(factor);
		return Number(rezultat).toFixed(zecimale);
	}

	this.scadere = function(numar, factor) {
		var rezultat = Number(numar) - Number(factor);
		return Number(rezultat).toFixed(zecimale);
	}

	this.inmultire = function(numar, factor) {
		var rezultat = Number(numar) * Number(factor);
		return Number(rezultat).toFixed(zecimale);
	}


	this.impartire = function(numar, factor) {
		if(Number(factor) == 0) {
			return 'Nu se poate, impartire la 0';
		}
		var rezultat = Number(numar) / Number(factor);
		return Number(rezultat).toFixed(zecimale);
	}

}

var test;

MyClass.setZecimale(-1);

test =  MyClass.adunare('3.2', 0);
console.log(test);

test = MyClass.scadere('3.2', 0);
console.log(test);

test = MyClass.inmultire('3.2', 0);
console.log(test);

test = MyClass.impartire('6.4', 0);
console.log(test);

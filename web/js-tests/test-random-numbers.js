
function randomNumber(){

return Math.floor(Math.random() * 11);
}
	var numarAleatoriu = randomNumber()

console.log(numarAleatoriu)

function createNumber(x) {

	if(x < 0) {
		return 0;
	}

	var i;
	for(i=0; i<10; i++) {
		//console.log(i);
		x = x + 2;
	}

	return x;

}

var result;

result = createNumber(0) + createNumber(-3);
console.log(result);

result = createNumber(5);
console.log(result);




var elements = ["Swift", "Java", "C++"];
var selected = [];

function getRandomElement() {
	let i = Math.floor(Math.random() * elements.length);
	return elements[i];
}

function doSelect() {
  var current = null;
  while(true) {
      current = getRandomElement();
      console.log("Get a random value:", current);
      if(!selected.includes(current)) {
          selected.push(current);
          break;
      } else {
        console.log("Duplicate");
      }
  }
  console.log("Selected:", current);
  return selected;
}

doSelect(); // pre-select

var maxChance = 10;
var rnd = Math.floor(Math.random() * maxChance); // min is 0 ; max is maxChance ; chance is 1/maxChance ; Ex: 1/100 = 0.01 if maxChance is 100
console.log("Rnd:", rnd);
if(rnd === 1) { // select by chance
    doSelect();
}

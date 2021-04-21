
// app.js
// v. 20210418

jQuery(() => {

	const $ = jQuery;

	const cardsValues = [ '2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace' ];
	const cardsColors = [ 'hearts', 'diamonds', 'spades', 'clubs' ];

	const getRandomFromArray = (arr) => {
		if(!Array.isArray(arr)) {
			console.warn('Poker.App', 'getRandomFromArray', 'Parameter arr is not array');
			return '';
		}
		if(!arr.length) {
			console.warn('Poker.App', 'getRandomFromArray', 'Parameter arr is an empty array');
			return '';
		}
		const selected = arr[Math.floor(Math.random() * (arr.length) )];
		if(typeof(selected) != 'string') {
			console.warn('Poker.App', 'getRandomFromArray', 'Selected value is not string');
			return '';
		}
		return String(selected);
	};

	const updateCardImg = (selectorId, value) => {
		if((typeof(value) != 'string') || (!value)) {
			console.warn('Poker.App', 'updateCardImg', 'Parameter is empty or not string');
			return false;
		}
		$('#' + String(selectorId)).attr('src', 'img/' + String(value)).hide().fadeIn();
		return true;
	};

	const resetDeck = () => {
		console.clear();
		updateCardImg('img-card1', 'back.svg');
		updateCardImg('img-card2', 'back.svg');
		updateCardImg('img-card3', 'back.svg');
		updateCardImg('img-card4', 'back.svg');
		updateCardImg('img-card5', 'back.svg');
	};

	const displayCard = (num, cardName) => {
		if((typeof(num) != 'number') || (!Number.isInteger(num)) || (!Number.isSafeInteger(num))) {
			console.warn('Poker.App', 'displayCard', 'Parameter num is empty or not (safe) integer number');
			return false;
		}
		if((num < 1) || (num > 5)) {
			console.warn('Poker.App', 'displayCard', 'Parameter num have an invalid value:', num);
			return false;
		}
		if((typeof(cardName) != 'string') || (cardName.length < 5) || (cardName.substr(-4, 4) != '.svg')) {
			console.warn('Poker.App', 'displayCard', 'Parameter cardName have an invalid value:', cardName);
			return false;
		}
		return Boolean(updateCardImg('img-card' + String(num), cardName));
	};

	const debug = '3ofAKind'; // by default is false
	if(debug) {
		$('body').append('<div style="text-align:center; font-weight:bold; position:fixed; top:10px; right:10px; background:#FFCC00; color:#111111; width:200px;">DEBUG: ' + $('<div></div>').text(debug).html() + '</div>');
	}

	const playCard = (cnum) => {
		//--
		if(cnum < 0 || cnum > 4) {
			console.error('Invalid Card Num: ' + cnum);
			return '';
		}
		//--
		cnum += 1;
		//--
		let selVal = getRandomFromArray(cardsValues); // console.log('selVal:' + selVal);
		let selColor = getRandomFromArray(cardsColors); // console.log('selColor:' + selColor);
		//-- debug area
		if(debug === 'royalFlush') {
			selColor = 'clubs';
			switch(cnum) {
				case 1:
					selVal = 10;
					break;
				case 2:
					selVal = 'jack';
					break;
				case 3:
					selVal = 'queen';
					break;
				case 4:
					selVal = 'king';
					break;
				case 5:
					selVal = 'ace';
					break;
				default:
					console.error('debug: too many cards: ' + cnum);
					return '';
			}
		} else if(debug === 'straightFlush') {
			selColor = 'diamonds';
			switch(cnum) {
				case 1:
					selVal = 9;
					break;
				case 2:
					selVal = 10;
					break;
				case 3:
					selVal = 'jack';
					break;
				case 4:
					selVal = 'queen';
					break;
				case 5:
					selVal = 'king';
					break;
				default:
					console.error('debug: too many cards: ' + cnum);
					return '';
			}
		} else if(debug === 'straight') {
			switch(cnum) {
				case 1:
					selVal = 2;
					break;
				case 2:
					selVal = 3;
					break;
				case 3:
					selVal = 4;
					break;
				case 4:
					selVal = 5;
					break;
				case 5:
					selVal = 6;
					break;
				default:
					console.error('debug: too many cards: ' + cnum);
					return '';
			}
		} else if(debug === '4ofAKind') {
			switch(cnum) {
				case 1:
					selVal = 'ace';
					break;
				case 2:
					selVal = 'ace';
					break;
				case 3:
					selVal = 'ace';
					break;
				case 4:
					selVal = 'ace';
					break;
				case 5:
					selVal = 'king';
					break;
				default:
					console.error('debug: too many cards: ' + cnum);
					return '';
			}
		} else if(debug === 'fullHouse') {
			switch(cnum) {
				case 1:
					selVal = 'ace';
					break;
				case 2:
					selVal = 'ace';
					break;
				case 3:
					selVal = 'ace';
					break;
				case 4:
					selVal = 'king';
					break;
				case 5:
					selVal = 'king';
					break;
				default:
					console.error('debug: too many cards: ' + cnum);
					return '';
			}
		} else if(debug === 'flush') {
			selColor = 'diamonds';
			switch(cnum) {
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
					break;
				default:
					console.error('debug: too many cards: ' + cnum);
					return '';
			}
		} else if(debug === '3ofAKind') {
			switch(cnum) {
				case 1:
					selVal = 'king';
					break;
				case 2:
					selVal = 'king';
					break;
				case 3:
					selVal = 'king';
					break;
				case 4:
					selVal = 'queen';
					break;
				case 5:
					selVal = 'jack';
					break;
				default:
					console.error('debug: too many cards: ' + cnum);
					return '';
			}
		} else if(debug) {
			alert('INVALID DEBUG: ' + debug);
		}
		//-- #end debug
		let cardName = String(selVal + '_of_' + selColor + '.svg');
	//	console.log('cardName:' + cardName);
		return String(cardName);
	};

	let isReady = false; // flag
	let arrSelCards = []; // keep record of what have been selected, which cards for the current deal

	const playDeck = () => {
		const slots = 5;
		const max = cardsValues.length * cardsColors.length * slots;
		resetDeck();
		arrSelCards = []; // reset on each play deck
		let selCard;
		let cardNum = 0;
		for(let i=0; i<=260; i++) { // 13 * 4 * 5 (max combinations)
			selCard = String(playCard(cardNum));
			console.log('Random Card:', selCard);
			if(selCard) {
				if(!arrSelCards.includes(selCard)) {
					arrSelCards.push(selCard);
					cardNum++;
				} else {
					//console.log('DUPLICATE:', selCard); // just for development
				}
				if(arrSelCards.length >= 5) { // stop at 5 cards selected
					break;
				}
			} else {
				break;
			}
		}
		if(arrSelCards.length < slots) { // this can happen only in debug mode !!!
			alert('POKER ERROR ... see console for details');
			console.error('FAILED to select 5 different cards:', arrSelCards);
			return false;
		}
		for(let n=0; n<arrSelCards.length; n++) {
			setTimeout(() => {
				displayCard(n+1, arrSelCards[n]);
			}, 250 + (50*n));
		}
		return true;
	};

	// action for the deal button
	$('#deal').on('click', function(e) {
		if(!isReady) {
			return;
		}
		if(!playDeck()) {
			return;
		}
		console.log('cardsValues', cardsValues.length, cardsValues);
		console.log('Cards', arrSelCards);

		// pre-process cards to an array of pairs: value, color
		let processArr = [];
		let valuesArr = [];
		let colorsArr = [];
		let cardName, cardVal, cardColor;
		for(let i=0; i<arrSelCards.length; i++) {
			let cardName = arrSelCards[i];
			cardName = cardName.substr(0, cardName.length - 4); // take out .svg
			cardName = cardName.split('_of_');
			processArr.push(cardName);
			valuesArr.push(cardName[0]);
			colorsArr.push(cardName[1]);
		}
		console.log('processArr', processArr);
		console.log('valuesArr', valuesArr);
		console.log('colorsArr', colorsArr);

		//count of duplicate value
		let duplicateValues = {};
		let duplicateColors = {};
		for(let i=0; i<processArr.length; i++) {
			//--
			cardVal = String(processArr[i][0]);
			cardColor = String(processArr[i][1]);
			//--
			if(!duplicateValues[cardVal]) {
				duplicateValues[cardVal] = 1;
			} else {
				duplicateValues[cardVal]++;
			}
			//--
			if(!duplicateColors[cardColor]) {
				duplicateColors[cardColor] = 1;
			} else {
				duplicateColors[cardColor]++;
			}
			//--
		}
		console.log('duplicateValues', duplicateValues);
		console.log('duplicateColors', duplicateColors);

		//evaluate
		let pairs = 0;
		let three = false;
		let full = false;
		let four = false;
		let flush = false;
		let straight = false;
		let straightFlush = false;
		let royalStraight = false; // this does not exists in poker hands but we use this just for eval
		let royalFlush = false;

		let straightArr = [];
		let idx;
		for(let x=0; x<valuesArr.length; x++) {
			idx = cardsValues.indexOf(valuesArr[x]);
			straightArr.push(idx);
			//console.log('Straight.Check', idx, valuesArr[x]);
		}
		straightArr = straightArr.sort((a, b) => a - b); // sort array numeric
		console.log('straightArr', straightArr);
		if(straightArr.length == 5) {
			if(
				(straightArr[0] + 1 == straightArr[1]) &&
				(straightArr[0] + 2 == straightArr[2]) &&
				(straightArr[0] + 3 == straightArr[3]) &&
				(straightArr[0] + 4 == straightArr[4])
			) {
				if(straightArr[4] < (cardsValues.length - 1)) {
					straight = true;
					console.log('you`ve got straight');
				} else {
					straight = true;
					royalStraight = true;
					console.log('you`ve got royal straight');
				}
			}
		}

		let onePair = false;
		for(let key in duplicateValues) {
			if(duplicateValues[key] == 2) {
				onePair = true;
				pairs++;
				console.log('you`ve got 1 pair of:' , key);
			}
			if(duplicateValues[key] == 3) {
				three = true;
				console.log('you`ve got 3 kinds of:' , key);
			}
			if(duplicateValues[key] == 4) {
				four = true;
				console.log('you`ve got 4 kinds of:' , key);
			}
		}

		// after: evaluate 2 pairs
		if(pairs == 1) {
			if(three === true && onePair === true) {
				full = true;
				console.log('you`ve got full house');
			}
		} else if(pairs > 1) {
			console.log('you`ve got 2 pairs');
		}

		//evaluate if we have duplicate colors
		for(let key in duplicateColors) {
			if(duplicateColors[key] > 1) {
				if(duplicateColors[key] >= 5) {
					if(royalStraight === true) {
						console.log('you`ve got royal flush of', key , 'color');
					} else {
						flush = true;
						console.log('you`ve got flush of', key , 'color');
					}
				} else {
					console.log('you`ve got', duplicateColors[key], key , 'colors');
				}
			}
		}

		if((flush === true) && (straight === true)) {
			straightFlush = true;
			console.log('you`ve got straight flush');
		}

	});

	// load the card backgrounds, after 0.5 seconds
	setTimeout(() => {
		resetDeck();
		isReady = true;
	}, 500);

	//-- solving

	//--

});


// #END



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

	const playCard = () => {
		let selVal = getRandomFromArray(cardsValues);
	//	console.log('selVal:' + selVal);
		let selColor = getRandomFromArray(cardsColors);
	//	console.log('selColor:' + selColor);
		let cardName = String(selVal + '_of_' + selColor + '.svg');
	//	console.log('cardName:' + cardName);
		return String(cardName);
	};

	let isReady = false; // flag
	let arrSelCards = []; // keep record of what have been selected, which cards for the current deal

	const playDeck = () => {
		isReady = false;
		console.clear();
		arrSelCards = []; // reset on each play deck
		let selCard;
		for(let i=0; i<=260; i++) { // 13 * 4 * 5 (max combinations)
			selCard = String(playCard());
			if(!arrSelCards.includes(selCard)) {
				arrSelCards.push(selCard);
			} else {
			//	console.log('DUPLICATE:', selCard); // just for development
			}
			if(arrSelCards.length >= 5) { // stop at 5 cards selected
				break;
			}
		}
		for(let n=0; n<arrSelCards.length; n++) {
			setTimeout(() => {
				displayCard(n+1, arrSelCards[n]);
			}, 50 + (50*n));
		}
		isReady = true;
	};

	// action for the deal button
	$('#deal').on('click', function(e) {
		if(!isReady) {
			return;
		}
		playDeck();
		console.log('Cards', arrSelCards);

		// pre-process cards to an array of pairs: value, color
		let processArr = [];
		let cardName, cardVal, cardColor;
		for(let i=0; i<arrSelCards.length; i++) {
			let cardName = arrSelCards[i];
			cardName = cardName.substr(0, cardName.length - 4); // take out .svg
			cardName = cardName.split('_of_');
			processArr.push(cardName);
		}
		console.log(processArr);

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
		console.log(duplicateValues);
		console.log(duplicateColors);

		//evaluate if we have duplicate values
		let pairs = 0;
		let three = false;
		let full = false;
		let four = false;
		for(let key in duplicateValues) {
			if(duplicateValues[key] == 2) {
				pairs++;
				console.log('you`ve got 1 pair of:' , key);
			} else if(duplicateValues[key] == 3) {
				three = true;
				console.log('you`ve got 3 kinds of:' , key);
			} else if(duplicateValues[key] == 4) {
				four = true;
				console.log('you`ve got 4 kinds of:' , key);
			}
		}
		// after: evaluate 2 pairs
		if(pairs == 1) {
			if(three === true) {
				full = true;
			}
		} else if(pairs > 1) {
			console.log('you`ve got 2 pairs');
		}
		if(full === true) {
			console.log('you`ve got full');
		}

		//evaluate if we have duplicate colors
		let flush = false;
		for(let key in duplicateColors) {
			if(duplicateColors[key] > 1) {
				if(duplicateColors[key] >= 5) {
					flush = true;
					console.log('you`ve got flush of ', key , 'color');
				} else {
					console.log('you`ve got', duplicateColors[key], key , 'colors');
				}
			}
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


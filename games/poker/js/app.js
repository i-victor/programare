
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

	let arrSelCards = []; // keep record of what have been selected, which cards for the current deal

	const playDeck = () => {
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
	};

	// opts.shapes[Math.floor(Math.random() * (opts.shapes.length) )]

	let isReady = false;

	// load the card backgrounds, after 0.5 seconds
	setTimeout(() => {
		resetDeck();
		isReady = true;
	}, 500);

	// action for the deal button
	$('#deal').on('click', function(e) {
		if(!isReady) {
			return;
		}
		playDeck();
		console.log('Cards', arrSelCards);
	});

	//-- solving

	//--

});

// #END


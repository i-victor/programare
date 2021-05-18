
var CharacterSelect = function(game) {

	console.log('Character Select loaded');

	this.characterOneButton = null;
	this.characterTwoButton = null;
	this.charactersSet = {
		'ninja'  : 'Character1',
		'ninja2' : 'Character2',
	};

	this.create = function() {
		var cX = this.game.world.centerX;
		var cY = this.game.world.centerY;

		// Button for character One

		this.characterOneButton = this.game.add.button(cX, cY - 225, 'ninja', this.SelectCharacter, this);
		this.characterOneButton.anchor.set(0.5);

		var characterOneText = game.add.text(0, 0, '', {
			font: 'Aldrich',
			fontSize: '72px',
			fill: '#000'
		});
		characterOneText.anchor.set(0.5);
		this.characterOneButton.addChild(characterOneText);

		// Button for character Two
		this.characterTwoButton = this.game.add.button(cX, cY, 'ninja2', this.SelectCharacter, this);
		this.characterTwoButton.anchor.set(0.5);

		var characterTwoText = game.add.text(0, 0, '', {
			font: 'Aldrich',
			fontSize: '72px',
			fill: '#000'
		});
		characterTwoText.anchor.set(0.5);
		this.characterTwoButton.addChild(characterTwoText);

		// Button to return to Title screen
		var backButton = this.game.add.button(cX, cY + 225, 'stageBanner', this.backToMenu, this);
		backButton.anchor.set(0.5);

		var backText = game.add.text(0, 0, 'Back', {
			font: 'Aldrich',
			fontSize: '72px',
			fill: '#000'
		});
		backText.anchor.set(0.5);
		backButton.addChild(backText);
	};

	this.SelectCharacter = function(chr) {

		var selectedCharacter = String(chr.key);

		for(let i=0; i<this.charactersSet.length; i++) {

			if(selectedCharacter === this.charactersSet[i]) {
				this.game.state.start(selectedCharacter);
				break;
			}

			this.character = characterKey[i];

			 if(this.characterOneButton) {

				globals.character = String(characterKey[0]);
				this.game.state.start('Caracther2');

				} else if(this.characterTwoButton) {

				globals.character = String(characterKey[1]);
				this.game.state.start('Caracther2');

				}
		}

	};

	this.backToMenu = function() {
		this.game.state.start('Title');
	};

};

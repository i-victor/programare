
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
		this.characterOneButton.setInteractive();

		var characterOneText = game.add.text(0, 0, '', {
			font: 'Aldrich',
			fontSize: '72px',
			fill: '#000'
		});
		characterOneText.anchor.set(0.5);
		this.characterOneButton.addChild(characterOneText);

		// Button for character Two
		this.characterTwoButton = this.game.add.button(cX, cY - 125, 'ninja2', this.SelectCharacter, this);
		this.characterTwoButton.anchor.set(0.5);
		this.characterTwoButton.setInteractive();

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
		for(var key in this.charactersSet) {
			if(selectedCharacter === key) {
				globals.selectedCharacter = String(key);
				break;
			}
		}
	};

	this.backToMenu = function() {
		this.game.state.start('Title');
	};

};

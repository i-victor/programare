var Preload = function(game) {
	console.log('Preload State Loaded');
};

Preload.prototype = {
	preload: function() {
		game.load.image('platform', 'assets/platform.png');
		game.load.image('brick', 'assets/block.png');
		game.load.image('slab', 'assets/slab.png');
		game.load.image('sky', 'assets/sky.png');
		game.load.image('pad', 'assets/bluepad.png');
		game.load.image('ground', 'assets/platform.png');
		game.load.image('ninja', 'assets/ninja.png');
		game.load.image('ninja2', 'assets/character_2.png');
		game.load.image('spike', 'assets/spike.png');
		game.load.image('coin', 'assets/coins.png');
		game.load.image('ninja', 'assets/ninja.png');
		game.load.image('grass', 'assets/grass.png');
		game.load.image('title', 'assets/title.png');
		game.load.image('caractherSelectButton', 'assets/selectCharacter.png');
		game.load.image('stageBanner', 'assets/stageBanner.png');
		game.load.image('playButton', 'assets/playButton.png');
		game.load.image('endlessButton', 'assets/endlessButton.png');
		game.load.image('flagpole', 'assets/flagpole.png');
		game.load.image('banner', 'assets/banner.png');
		game.load.image('xButton', 'assets/xButton.png');

		this.load.audio('death', 'assets/death.wav');

		this.load.audio('music', ['assets/music.mp3']);
	},
	create: function() {
		game.state.start('Title');
	}
};

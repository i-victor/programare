var Preload = function(game) {
	console.log('Preload State Loaded');
};

Preload.prototype = {
	preload: function() {
		this.load.image('platform', 'assets/platform.png');
		this.load.image('brick', 'assets/block.png');
		this.load.image('slab', 'assets/slab.png');
		this.load.image('pad', 'assets/bluepad.png');
		this.load.image('ground', 'assets/platform.png');
		this.load.image('ninja', 'assets/ninja.png');
		this.load.image('ninja2', 'assets/character_2.png');
		this.load.image('spike', 'assets/spike.png');
		this.load.image('coin', 'assets/coins.png');
		this.load.image('ninja', 'assets/ninja.png');
		this.load.image('grass', 'assets/grass.png');
		this.load.image('title', 'assets/title.png');
		this.load.image('caractherSelectButton', 'assets/selectCharacter.png');
		this.load.image('stageBanner', 'assets/stageBanner.png');
		this.load.image('playButton', 'assets/playButton.png');
		this.load.image('endlessButton', 'assets/endlessButton.png');
		this.load.image('flagpole', 'assets/flagpole.png');
		this.load.image('banner', 'assets/banner.png');
		this.load.image('xButton', 'assets/xButton.png');

		this.load.audio('death', 'assets/death.wav');

		this.load.audio('music', ['assets/music.mp3']);
	},
	create: function() {
		this.scene.start('Title');
	}
};

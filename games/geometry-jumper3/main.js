
// main.js

var Main = function(game) {

	console.log('Main State Loaded');

	this.game = null;

	this.X_GAMESPEED = 500; // Speed of the game in pixels per second
	this.ACCELERATION_FACTOR = 10 / this.X_GAMESPEED;  // Used to calculate acceleration while in endless mode
	this.IS_DEBUG_MODE = false; // Used to track whether game is in debug mode or not

	this.isVictory = true; // Flag to keep track of victory on level
	this.jumpCount = 0; // Tracks current amount of jumps, for double jumping
	this.score = 0; // Keeps track of the player's score internally
	this.scoreText = ''; // Text display element of the score
	this.isEndlessMode = false; // Flag to toggle endless mode differences
	this.timer = null; // Stores the phaser timer created to increment the score
	this.blockType = 1; // 1 = brick, 2 = spike, 3 = coin, 4 = floor
	this.quantity = 1; // Quantity for the debug mode
	this.secondsElapsed = 0; // Keeps track of the seconds elapsed on a level
	this.lastScore = 0; // Variable that stores the last score for display
	this.bestScore = 0; // Variable that stores / retrieves the best score from localStorage
	this.banner = null; // Variable to store the flag's banner

};

Main.prototype = {

	create: function() {
		this.game.time.advancedTiming = false;

		// Bounds of the world defined
		this.game.world.setBounds(0, 0, 35000, 750);

		// Start physics engine
		this.game.physics.startSystem(Phaser.Physics.ARCADE);

		console.log('Selected Character is:', globals.selectedCharacter);
		this.player = this.game.add.sprite(100, this.game.world.height - 150, String(globals.selectedCharacter));
		this.player.anchor.setTo(0.4);

		// Enable physics to the player
		this.game.physics.arcade.enable(this.player);
		this.player.body.gravity.y = 4000;
		this.player.body.collideWorldBounds = false;
		this.player.body.velocity.x = this.X_GAMESPEED;

		// INPUT

		// Added mouse / touch functionality for jumping
		var keyboard = this.game.input.keyboard;

		this.input.onDown.add(this.onMouseOrTouch, this); // Click and touch handler

		// Add scroll buttons for level editor
		this.cursors = keyboard.createCursorKeys();

		keyboard.addKey(Phaser.Keyboard.UP).onDown.add(this.jump, this);
		keyboard.addKey(Phaser.Keyboard.TILDE).onDown.add(this.debugToggle, this);

		// Add various functionality for debugging purposes
		if (this.isEndlessMode) {
			this.player.body.velocity.x = 0;

			keyboard.addKey(Phaser.Keyboard.B).onDown.add(this.brickToggle, this);
			keyboard.addKey(Phaser.Keyboard.S).onDown.add(this.spikeToggle, this);
			keyboard.addKey(Phaser.Keyboard.C).onDown.add(this.coinToggle, this);
			keyboard.addKey(Phaser.Keyboard.F).onDown.add(this.floorToggle, this);
			keyboard.addKey(Phaser.Keyboard.ONE).onDown.add(this.oneSwitch, this);
			keyboard.addKey(Phaser.Keyboard.TWO).onDown.add(this.twoSwitch, this);
			keyboard.addKey(Phaser.Keyboard.THREE).onDown.add(this.threeSwitch, this);
			keyboard.addKey(Phaser.Keyboard.FOUR).onDown.add(this.fourSwitch, this);
			keyboard.addKey(Phaser.Keyboard.FIVE).onDown.add(this.fiveSwitch, this);
			keyboard.addKey(Phaser.Keyboard.SIX).onDown.add(this.sixSwitch, this);
			keyboard.addKey(Phaser.Keyboard.SEVEN).onDown.add(this.sevenSwitch, this);
			keyboard.addKey(Phaser.Keyboard.EIGHT).onDown.add(this.eightSwitch, this);
			keyboard.addKey(Phaser.Keyboard.NINE).onDown.add(this.nineSwitch, this);

			this.game.add.text(50, 130, 'DEBUG MODE').fixedToCamera = true;

			this.xText = this.game.add.text(50, 160, 'X Secs: ', {
				fontSize: '20px',
				fill: '#000'
			});
			this.yText = this.game.add.text(50, 180, 'Y: 0' + this.yPos, {
				fontSize: '20px',
				fill: '#000'
			});
			this.qtyText = this.game.add.text(50, 200, 'Qty: 0' + this.quantity, {
				fontSize: '20px',
				fill: '#000'
			});
			this.blockText = this.game.add.text(50, 220, 'Type: ' + this.blockType, {
				fontSize: '20px',
				fill: '#000'
			});

			this.xText.fixedToCamera = true;
			this.yText.fixedToCamera = true;
			this.qtyText.fixedToCamera = true;
			this.blockText.fixedToCamera = true;
		} else {
			//  Initialize timer for scoring if not debug mode
			this.timer = this.game.time.create();
			this.timer.loop(1000, this.updateTimer, this);
			this.timer.start();
		}

		// Initialize Physics for obstacles
		this.platforms = this.add.physicsGroup();
		this.spikes = this.add.physicsGroup();
		this.flag = this.add.physicsGroup();
		this.slabs = this.add.physicsGroup();
		this.pads = this.add.physicsGroup();
		// Initialize floor
		this.floor = this.game.add.group();
		this.floor.enableBody = true;

		this.coins = this.game.add.group();
		this.coins.enableBody = true;

		// Initialize Scoreboard and on screen text
		this.scoreText = this.game.add.text(50, 16, 'Score: 0', {
			font: 'Aldrich',
			fontSize: '32px',
			fill: '#000'
		});
		this.score = 0;

		// Get local storage to set the best score
		if (localStorage.getItem(globals.stage) !== null) {
			this.bestScore = localStorage.getItem(globals.stage);
		}

		var bestScoreText = this.game.add.text(50, 60, 'Best: ' + this.bestScore, {
			font: 'Aldrich',
			fontSize: '20px',
			fill: '#000'
		});

		var lastScoreText = this.game.add.text(50, 84, 'Last: ' + this.lastScore, {
			font: 'Aldrich',
			fontSize: '20px',
			fill: '#000'
		});

		this.scoreText.fixedToCamera = true;
		bestScoreText.fixedToCamera = true;
		lastScoreText.fixedToCamera = true;

		// Display the back button
		this.backButton = this.game.add.button(1265, 50, 'xButton', this.backToMenu, this);
		this.backButton.anchor.set(0.5);
		this.backButton.scale.set(0.9, 0.9);
		this.backButton.fixedToCamera = true;

		// Iniitialize audio
		this.coinSound = this.game.add.audio('coin');
		this.coinSound.volume = 0.2;
		this.deathSound = this.game.add.audio('death');
		this.jumpSound = this.game.add.audio('jump');
		this.jumpSound.volume = 0.5;

		if (!this.music && !this.IS_DEBUG_MODE) {
			this.music = this.game.add.audio('music');
			this.music.loopFull();
		}

		this.isEndlessMode = false; // Reset endless mode flag

		// Create the world objects depending on stage selected
		switch (globals.stage) {
			case 0:
				this.isEndlessMode = true;
				EndlessLevel.start.call(this);
				break;
			case 1:
				Level1.start.call(this); // bind the 'this' argument to Main
				break;
			case 2:
				Level2.start.call(this);
				break;
			default:
				this.backToMenu();
				break;
		}

		this.isVictory = false;

		this.platforms.setAll('body.allowGravity', false);
		this.platforms.setAll('body.immovable', true);
		this.platforms.setAll('body.friction.x', 0);
		this.floor.setAll('body.allowGravity', false);
		this.floor.setAll('body.immovable', true);
		this.floor.setAll('body.friction.x', 0);
		this.flag.setAll('body.immovable', true);
		this.flag.setAll('body.gravity.y', 4000);
		this.flag.setAll('body.moves', false);
		if (this.isEndlessMode) {
			this.spikes.setAll('body.allowGravity', true);
			this.spikes.setAll('body.immovable', false);
			this.spikes.setAll('body.gravity.y', 4000);
		}

		// Set acceleration for player if endless mode
		if (this.isEndlessMode && !this.IS_DEBUG_MODE) {
			this.player.body.acceleration.x = 10;
		}
	},

	update: function() {

		var arcade = this.game.physics.arcade;
		var player = this.player;
		var playerBody = player.body;
		var coins = this.coins;
		var spikes = this.spikes;
		var floor = this.floor;
		var platforms = this.platforms;
		var slabs = this.slabs;
//        var pads = this.pads

		//  In debug, display X, Y, Qty, Type for level editing
		if (this.isEndlessMode) {
			this.xText.text = 'X Secs : ' + (this.game.camera.x + this.game.input.x) / 500;
			this.yText.text = 'Y : ' + this.game.input.y;
			this.qtyText.text = 'Qty : ' + this.quantity;
			this.blockText.text = 'Type: ' + this.blockType;


			// Scrolling keybinds for level editor
			if (this.cursors.left.isDown) {
				this.game.camera.x -= 50;
			} else if (this.cursors.right.isDown) {
				this.game.camera.x += 50;
			}
		} else { // Camera to follow player with offset
			this.game.camera.focusOnXY(player.x + 400, player.y);

			// If player gets stopped by brick
			if (playerBody.velocity.x < 500 && !this.isVictory) {
				if (this.isEndlessMode) { // Endless mode, uses current x position to recalculate approx speed
					playerBody.velocity.x = this.X_GAMESPEED + (playerBody.x * this.ACCELERATION_FACTOR);
				} else { // Normal mode sets player speed back to default.
					playerBody.velocity.x = this.X_GAMESPEED;
				}
			} else if (player.y > this.game.world.height + 500) {
				this.die();
			}
		}

		// Collide player with world objects
		arcade.collide(player, floor, this.resetJump, null, this);
		arcade.collide(player, platforms, this.resetJump, null, this);
		arcade.collide(player, this.flag, this.victory, null, this);
		arcade.collide(player, spikes, this.die, null, this);
		arcade.overlap(player, coins, this.collectCoin, null, this);

	},

	// Function called when player clicks screen or presses UP key
	onMouseOrTouch: function() {

		// In debug mode, it will place an object.  In regular, it will jump the player
		if (this.isEndlessMode) {

			var itemX = (this.game.camera.x + this.game.input.x) / 500;
			var itemY = this.game.input.y;

			switch (this.blockType) {
				case 1:
					console.log('this.createBrick(' + itemX + ', ' + itemY + ', ' + this.quantity + ');');
					this.createBrick(itemX, itemY, this.quantity);
					break;
				case 2:
					console.log('this.createSpike(' + itemX + ', ' + itemY + ', ' + this.quantity + ');');
					this.createSpike(itemX, itemY, this.quantity);
					break;
				case 3:
					console.log('this.createCoin(' + itemX + ', ' + itemY + ', ' + this.quantity + ');');
					this.createCoin(itemX, itemY, this.quantity);
					break;
				case 4:
					console.log('this.createFloor(' + itemX + ', ' + itemY + ', ' + this.quantity + ');');
					this.createFloor(itemX, this.quantity);
					break;
			}
		} else {
			this.jump();
		}

	},

	// Function that handles the jump logic
	jump: function() {

		switch (this.jumpCount) {
			case 0:
				this.jumpSound.play();
				this.player.body.velocity.y = -1000;
				this.jumpCount++;
				break;
			case 1:
				this.player.body.velocity.y = -1000;
				this.jumpCount++;
				this.game.add.tween(this.player).to({
					angle: 360
				}, 400, Phaser.Easing.Linear.None, true);
				break;
			default:
				break;
		}
	},

	// Function called when player touches floor, resetting jump counter to 0
	resetJump: function() {
	   if (this.player.body.touching.down) {
		   this.jumpCount = 0;
	   }
	},

	// Death function upon player impact with spike or through floor
	die: function() {
		console.log('Player has died');
		this.lastScore = this.score;
		if (this.lastScore > this.bestScore) {
			localStorage.setItem(globals.stage, this.lastScore);
		}
		this.deathSound.play();
		this.resetGame();
	},

	// Function to reset the game.  Usually called upon death.
	resetGame: function() {
		this.score = 0;
		this.secondsElapsed = 0;
		this.game.state.start('Main');
	},

	collectCoin: function(player, coin) {
		coin.kill();
		this.coinSound.play();

		// Add and update the score
		this.score += 10;
		this.scoreText.text = 'Score: ' + this.score;
	},

	createBrick: function(seconds, y, length, height) {
		var x = seconds * this.X_GAMESPEED;

		if (length === undefined) {
			length = 1;
		}
		if (height === undefined) {
			height = 1;
		}
		this.platforms.create(x, y, 'brick').scale.setTo(length, height);
	},

	createPad: function(seconds, y, length, height, boost) {
		var x = seconds * this.X_GAMESPEED;

		if (length === undefined) {
			length = 1;
		}
		if (height === undefined) {
			height = 1;
		}
		this.platforms.create(x, y, 'pad').scale.setTo(length, height);

		 this.player.body.velocity.y = -1000;

	},

	createSlab: function(seconds, y, length, height) {
		var x = seconds * this.X_GAMESPEED;

		if (length === undefined) {
			length = 1;
		}
		if (height === undefined) {
			height = 1;
		}
		this.platforms.create(x, y, 'slab').scale.setTo(length, height);
	},

	createFloor: function(seconds, length) {
		var x = seconds * this.X_GAMESPEED;

		if (length === undefined) {
			length = 1;
		}

		for (var i = 0; i < length; i++) {
			this.floor.create(x, this.game.world.height - 112, 'grass');
			x += 500; // each floor tile is 500px wide
		}
	},

	createSpike: function(seconds, y, num) {
		var x = seconds * this.X_GAMESPEED;

		if (num === undefined) {
			num = 1;
		}

		for (var i = 0; i < num; i++) {
			this.spikes.create(x, y, 'spike');
			x += 32;
		}
	},

	createCoin: function(seconds, y, num) {
		var x = seconds * this.X_GAMESPEED;

		if (num === undefined) {
			num = 1;
		}
		for (var i = 0; i < num; i++) {
			this.coins.create(x, y, 'coin');
			x += 50;
		}
	},

	placeFlag: function(seconds) {
		var x = seconds * this.X_GAMESPEED;
		this.flag.create(x, 256, 'flagpole');

		this.banner = this.game.add.sprite(x + 3, 270, 'banner');
		this.banner.anchor.setTo(1, 0);

	},

	// Function called when player touches flag at end of level
	victory: function() {

		var playerWalkTween = function() {
			var walkTo = this.player.body.x + 200;
			this.game.add.tween(this.player)
				.to({x : walkTo}, 1000, Phaser.Easing.Linear.In)
				.start()
				.onComplete.add(victoryJump, this);
		};

		var victoryJump = function() {
			var victoryText;
			var nextLevelButton;
			var cX = this.game.width/2;
			var cY = this.game.world.centerY;

			// Congratulatory text
			victoryText = this.game.add.text(cX, cY - 100, 'Level Complete!', {
				font: 'Aldrich',
				fontSize: '64px',
				fill: '#333'
			});
			victoryText.fixedToCamera = true;
			victoryText.anchor.setTo(0.5);

			// Sprite for the next level button
			globals.stage++;
			nextLevelButton = this.game.add.button(cX, cY + 150, 'playButton', this.game.state.states.Main.resetGame , this);
			nextLevelButton.fixedToCamera = true;
			nextLevelButton.anchor.set(0.5);
			nextLevelButton.scale.set(0.7);

			this.jump();
			this.game.time.events.add(Phaser.Timer.SECOND, this.jump, this);

		};

		this.isVictory = true;

		this.player.body.velocity.x = 0;
		this.timer.stop();

		// Tween that handles the flag dropping down
		var bannerTween = this.game.add.tween(this.banner)
			.to({y: 575}, 1500, Phaser.Easing.Linear.In).start();
		bannerTween.onComplete.add(playerWalkTween, this);
	},

	// Function that is called every second to increase the score and total seconds elapsed
	updateTimer: function() {
		this.score += 100;
		this.secondsElapsed++;
		this.scoreText.text = 'Score: ' + this.score;
	},

	// Function to go back to Title state
	backToMenu: function() {
		this.game.state.start('Title');
		this.music.stop();
		this.music = null;
	},

	// Function that toggles the debug mode.  Executed with ~ keypress
	debugToggle: function() {
		if (this.isEndlessMode) {
			console.log('Debug Mode : OFF');
			this.isEndlessMode = false;
		} else {
			console.log('Debug Mode : ON');
			this.isEndlessMode = true;
		}

		this.game.state.start('Main');
	},

	// DEBUG FUNCTIONS - Helper functions for level design
	brickToggle: function() {
		this.blockType = 1;
	},

	spikeToggle: function() {
		this.blockType = 2;
	},

	coinToggle: function() {
		this.blockType = 3;
	},

	floorToggle: function() {
		this.blockType = 4;
	},

	oneSwitch: function() {
		this.quantity = 1;
	},

	twoSwitch: function() {
		this.quantity = 2;
	},

	threeSwitch: function() {
		this.quantity = 3;
	},

	fourSwitch: function() {
		this.quantity = 4;
	},

	fiveSwitch: function() {
		this.quantity = 5;
	},

	sixSwitch: function() {
		this.quantity = 6;
	},

	sevenSwitch: function() {
		this.quantity = 7;
	},

	eightSwitch: function() {
		this.quantity = 8;
	},

	nineSwitch: function() {
		this.quantity = 9;
	}

};

// #END

var Title = function(game) {
    console.log('Title State Loaded');

    this.BACKGROUND_COLOR = '#87CEEB';
};

Title.prototype = {
    create: function() {
console.log(this);
        // Set world size of title menu
        this.cameras.main.setViewport(0, 0, 1344, 750);

        var cX = Math.floor(this.cameras.main._width / 2);
        var cY = Math.floor(this.cameras.main._height / 2)

        // Use scalemanager to scale the game
        this.scale.scaleMode = Phaser.Scale.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
        this.game.scale.refresh();

        this.cameras.main.setBackgroundColor(this.BACKGROUND_COLOR);

        // Add title image
        var title = this.game.scene.add.sprite(cX, cY, 'title');
        title.anchor.set(0.5);

        // Add animating cube
        var cube = this.game.add.sprite(cX - 63, cY - 55, 'ninja');
        cube.anchor.set(0.5);

        // Add tween animation to the cube
        this.game.add.tween(cube)
            .to({
                y: 180
            }, 250, Phaser.Easing.Exponential.Out, false, 1500)
            .to({
                y: 320
            }, 400, Phaser.Easing.Exponential.In, true).loop().start();

        // Add button to start normal levels game
        var characterSelectButton = this.game.add.button(cX - 200, cY + 200, 'caractherSelectButton', this.startCharacterSelect, this);
        characterSelectButton.anchor.set(0.5);
        characterSelectButton.scale.set(0.7, 0.7);

        // Add button to start normal levels game
        var playButton = this.game.add.button(cX, cY + 200, 'playButton', this.startLevelSelect, this);
        playButton.anchor.set(0.5);
        playButton.scale.set(0.7, 0.7);

        // REPLACE CODE FOR ENDLESS
        var endlessButton = this.game.add.button(cX + 200, cY + 200, 'endlessButton', this.startEndless, this);
        endlessButton.anchor.set(0.5);
        endlessButton.scale.set(0.7, 0.7);

        // Has to load invisible font usage so that main can have webfont loaded instantly
        this.preloadWebFont();

    },

    // "Preloads" the google web font at the title invisibly so it's ready for use in game
    preloadWebFont: function() {
        game.add.text(1, 1, 'Hi', {
            font: 'Aldrich',
            fontSize: '1px',
            fill: this.BACKGROUND_COLOR
        });
    },

    startNormal: function() {
        globals.stage = 1;
        this.game.state.start('Main');
    },

    startEndless: function() {
        globals.stage = 0;
        this.game.state.start('Main');
    },

    startLevelSelect: function() {
        this.game.state.start('LevelSelect');
    },

    startCharacterSelect: function() {
        this.game.state.start('CharacterSelect');
    }
};

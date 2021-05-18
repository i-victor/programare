(function() {
	game = new Phaser.Game(1334, 750, Phaser.AUTO, "gameScreen", {});
	game.scene.add("Preload", Preload);
	game.scene.add("Title", Title);
	game.scene.add("LevelSelect", LevelSelect);
	game.scene.add("CharacterSelect", CharacterSelect);
	game.scene.add("Main", Main);
	game.scene.start("Preload");
})();

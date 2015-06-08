var MainMenu = function() {    
    var addBackground = function() {
        var backgroundImage = phaser.add.image(0, 0, 'backgroundMenu');  
        backgroundImage.scale.setTo(0.5,0.6);
    };
    
    // ----- Menu principal ----- //
    var createIntroText = function() {
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Metal Slug ', { font: '70px Geo', fill: '#FF9900' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    };
    
    var createIntroText2 = function() {
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'La venganza de un familiar', { font: '30px Geo', fill: '#ffffff' });
		nameLabel.anchor.setTo(0.5, 0.5);
		phaser.add.tween(nameLabel).to({y: 200}, 1000).easing(Phaser.Easing.Bounce.Out).start();
    };
    
     var createStartText = function() {
        var startLabel = phaser.add.text(phaser.world.centerX, phaser.world.height-80, 'press the up arrow key to start', { font: '25px Arial', fill: '#ffffff' });
		startLabel.anchor.setTo(0.5, 0.5);

		phaser.add.tween(startLabel).to({angle: -2}, 500).to({angle:2}, 500).loop().start();   
    };
    
    var attachKeyboardCallback = function() {
        
        var upKey = phaser.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(onUpKeyDown, this);
    };
    // Quan apretes la flecha el joc comença.
    var onUpKeyDown = function() {
        phaser.state.start('game');
    };
    
    // ----- Instruccions ----- //
    
    /*var controls = function(){
        addBackground(); 
        phaser.add.sprite(50, 20, 'controls');
        phaser.add.button(phaser.world.centerX - 95, 515, 'goback', selectMode, this); 
    };
    
    var clickInstructions = function(){
        phaser.add.button(phaser.world.centerX - 95, 350, controls, this);   
    }*/
    
    // Crida les funcions anteriors.
    (function() {
        addBackground();
        //clickInstructions();
        createIntroText();
        createIntroText2();
        createStartText();
        attachKeyboardCallback();
    })()
};
var instructions = function() {    
    var addBackground = function() {
        var backgroundImage = phaser.add.image(0, 0, 'instruccions');  
        backgroundImage.scale.setTo(0.95,0.65);
    };
    
    var createTextReturn = function() {
        var startLabel = phaser.add.text(phaser.world.centerX, phaser.world.height-15, 'M back to menu, Arow UP for play ', { font: '25px Arial', fill: '#0F0F4C' });
		startLabel.anchor.setTo(0.5, 0.5);

		phaser.add.tween(startLabel).to({angle: -2}, 500).to({angle:2}, 500).loop().start();   
    };
    
    // ----- Comença el joc ----- //
    var attachKeyboardCallback = function() {
        
        var upKey = phaser.input.keyboard.addKey(Phaser.Keyboard.UP);
		upKey.onDown.addOnce(onUpKeyDown, this);
        
        var mKey = phaser.input.keyboard.addKey(Phaser.Keyboard.M);
		mKey.onDown.addOnce(controls, this);
    };
    
    // Quan apretes la flecha el joc comença.
    var onUpKeyDown = function() {
        phaser.state.start('game');
    };
    
    //Tornes al menu
    var controls = function(){
        phaser.state.start('menu');
    };
    
    (function() {
        addBackground();
        createTextReturn();
        attachKeyboardCallback();
    })()
};
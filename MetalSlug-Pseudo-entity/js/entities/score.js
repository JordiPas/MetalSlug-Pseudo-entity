var Score = function () {
    var score = 0;
    var mText = null;
    
    
    this.killEnemy = function(){
        score += 10;
        updateScore();
    };

    
    var updateScore = function () {
        console.log('ENTRO');
        mText.text = 'Score: ' + score;
        
        //Quab passsa els 90 punts guanya el joc
        if(score == 400){
            playersWin();   
        }
    };
    
    // ----- Players win ----- //
    
    var playersWin = function(){
        var backgroundImage = phaser.add.image(0, 0, 'victory');
        backgroundImage.scale.setTo(0.95,1);
        
        //Lletres que t'indiquen que fer quan s'hacaba el joc
        var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Restart game press R', { font: '70px Geo', fill: '#000000' });
        nameLabel.anchor.setTo(0.5, 0.5);
        phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();

        //El joc és reseteja
        var rKey = phaser.input.keyboard.addKey(Phaser.Keyboard.R);
        rKey.onDown.addOnce(reset, this);
    };
    
    var reset = function(){
        phaser.state.start('menu');
    };
    
     (function () {
         mText = phaser.add.text(30, 30, 'score: 0', {fontSize: '50px', fill: '#fff' });
         updateScore();
    })();
};
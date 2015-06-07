var Score = function (worldReference, playerReference, enemiesReference, dispararReference) {
    var score = 0;
    var scoreLabel = null;
    var totalScore = 0;
    var mWorld = worldReference;
    var mSprite = playerReference;
    var mEnemies = enemiesReference;
    var mDispar = dispararReference;
    //var mEnemies = enemiesReference;
    
    this.update = function () {
         score = 20;
    };
    
    var sumarScore = function() {
        totalScore = totalScore + score;
        
    };
    
    var mostrarScore = function(){
        scoreLabel = phaser.add.text(30, 30, 'score: 0', { font: '18px Arial', fill: '#ffffff' });

        scoreLabel.text = 'score: ' + totalScore;
    };
     
     (function () {
         mostrarScore();
    })();
};
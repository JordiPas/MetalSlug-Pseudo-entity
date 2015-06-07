var Score = function (/*enemiesReference*/) {
    var score = 0;
    var scoreLabel = null;
    var totalScore = 0;
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
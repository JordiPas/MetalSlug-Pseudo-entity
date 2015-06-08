var Score = function () {
    var score = 0;
    var scoreLabel = null;
    var totalScore = 0;
    //var mEnemies = enemiesReference;
   // var mDisparar = dispararReference;
    
    
    this.killEnemy = function(){
        score += 10;
        sumarScore();
    };
    
    var sumarScore = function() {
        totalScore = totalScore + score;
        
    };
    
    var updateScore = function () {
        scoreLabel.text = 'score: ' + totalScore;
    };
    
    var mostrarScore = function(){
        scoreLabel = phaser.add.text(30, 30, 'score: 0', { font: '18px Arial', fill: '#ffffff' });

        
    };
     
     (function () {
         mostrarScore();
         updateScore();
    })();
};
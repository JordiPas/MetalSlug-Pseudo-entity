var Score = function () {
    var score = 0;
    var mText = null;
    //var scoreLabel = null;
    //var totalScore = 0;
    //var mEnemies = enemiesReference;
   // var mDisparar = dispararReference;
    
    
    this.killEnemy = function(){
        score += 10;
        updateScore();
    };
    
    /*var sumarScore = function() {
        totalScore = totalScore + score;
        
    };*/
    
    var updateScore = function () {
        console.log('ENTRO');
        mText.text = 'Score: ' + score;
    };
    
    /*var mostrarScore = function(){
        scoreLabel = phaser.add.text(30, 30, 'score: 0', { font: '18px Arial', fill: '#ffffff' });

        
    };*/
     
     (function () {
         mText = phaser.add.text(30, 30, 'score: 0', {fontSize: '50px', fill: '#fff' });
         updateScore();
    })();
};
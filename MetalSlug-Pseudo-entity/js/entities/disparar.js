var Disparar = function (worldReference, playerReference, enemiesReference) {
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var mEnemies = enemiesReference;
    var laser = null;
    
    var Speed = 100;
    
    this.update = function() {
        phaser.physics.arcade.collide(laser, mWorldReference);
        phaser.physics.arcade.collide(mEnemies, laser, killEnemy, null, this);
        
        if(tecla.isDown){
           onTeclaDisparPressed();    
        }
        
    };
    
    var createShot = function() {
        
        laser = laser.create(155, 10, 'laser');
        laser.scale.setTo(0.1, 0.3);
        enablePhysics();
        
    };
    
    var enablePhysics = function() {
        phaser.physics.arcade.enable(laser);
        laser.body.velocity.x = Speed;
        
    };
    
    var killEnemy = function() {
        console.log("Enemy DIE");
    };
    
    // Funció d'apretar la tecla per disparar.
    var onTeclaDisparPressed = function(){
        killEnemy();
    };
    
    (function() {
        laser = phaser.add.group();
        laser.enableBody = true;
        createShot();
    })();
    
};
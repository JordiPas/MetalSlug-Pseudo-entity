var Disparar = function (worldReference, playerReference, enemiesReference) {
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var mEnemies = enemiesReference;
    var mLaser = null;
    var shoot = null;
    var laserTime = 1500;
    var emitter = phaser.add.emitter(0, 0, 15);
    
    var Speed = 100;
    
    this.update = function() {
        phaser.physics.arcade.collide(shoot, mWorldReference);
        phaser.physics.arcade.collide(mEnemies, shoot, killEnemy, null, this);
        
        if(teclaDR1.isDown){
            onTeclaDisparPressed();          
            
        }
        
        if(teclaDL1.isDown) {
            onTeclaDisparPressed();
        }
        
    };
    
    var createShot = function() {
        
        //shoot = shoot.createMultiple(100,'laser');
        shoot = shoot.create(mSprite.x, mSprite.y, 'laser');
        shoot.scale.setTo(0.3, 0.7);
        enablePhysics();
        
    };
    
    var enablePhysics = function() {
        phaser.physics.arcade.enable(shoot);
        shoot.body.velocity.x = Speed;
        
    };
    
    var killEnemy = function() {
        //console.log("Enemy DIE");
        if(shoot){
            mEnemies.kill();

            emitter.x = mEnemies.x;
            emitter.y = mEnemies.y;
            emitter.start(true, 600, null, 15);
        }
    };
    
    // Funció d'apretar la tecla per disparar.
    var onTeclaDisparPressed = function(){
            if(teclaDR1.isDown) {
                shoot.reset(mSprite.x, mSprite.y);
                shoot.body.velocity.x = 400;
                //laserTime = phaser.time.now + 500;
                
            }else if(teclaDL1.isDown) {
                shoot.reset(mSprite.x, mSprite.y);
                shoot.body.velocity.x = -400;
                //laserTime = phaser.time.now + 500;
        }  
        
    };
    
    (function() {
        //shoot = phaser.add.sprite(32, phaser.world.height - 150, 'laser');
        shoot = phaser.add.group();
        shoot.enableBody = true;
        
        
        emitter.makeParticles('pixel');
        emitter.setYSpeed(-150, 150);
        emitter.setXSpeed(-150, 150);
        emitter.gravity = 0;
        createShot();
    })();
    
};
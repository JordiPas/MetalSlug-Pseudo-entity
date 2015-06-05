var Disparar = function (worldReference, playerReference, enemiesReference) {
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var mEnemies = enemiesReference;
    var mLaser = null;
    var shoot = null;
    var shoots = null;
    var shootTime = 1500;
    var emitter = phaser.add.emitter(0, 0, 15);
    
    var Speed = 100;
    
    this.update = function() {
        phaser.physics.arcade.collide(shoot, mWorldReference);
        phaser.physics.arcade.collide(mEnemies, shoot, killEnemy, null, this);
        
        shoots.forEachAlive(function(onTeclaDisparPressed) {
            mEnemies.forEachAlive(function(mEnemies) {
                phaser.physics.arcade.overlap(shoots, mEnemies, killEnemy, null, this);
            }, this);
        }, this);
        
        if(teclaDR1.isDown){
            onTeclaDisparPressed();          
            
        }
        
        if(teclaDL1.isDown) {
            onTeclaDisparPressed();
        }
        
    };
    
    var createShot = function() {
        
        //shoots = phaser.add.group();
        //shoots.enableBody = true;
        //shoots.physicsBodyType = Phaser.Physics.ARCADE;
        //shoots.setAll('anchor.x', 0,5);
        //shoots.setAll('anchor.y', 1);
        //shoots.setAll('outOfBoundSkill', true);
        //shoots.setAll('checkWorldBounds', true);
        //shoots = shoots.createMultiple(100,'laser');
        //shoots = shoot.create(mSprite.x, mSprite.y, 'laser');
        shoots.scale.setTo(0.3, 0.7);
        enablePhysics();
        
    };
    
    var enablePhysics = function() {
        phaser.physics.arcade.enable(shoot);
        shoot.body.velocity.x = Speed;
        
    };
    
    var killEnemy = function(shoot, mEnemies) {
        //console.log("Enemy DIE");
        
            //if(shoot){
                shoot.kill();

                emitter.x = mEnemies.x;
                emitter.y = mEnemies.y;
                emitter.start(true, 600, null, 15);
                
                mEnemies.kill();
           // }
    };
    
    // Funció d'apretar la tecla per disparar.
    var onTeclaDisparPressed = function(){
        if(phaser.time.now > shootTime) {
            shoot = shoots.getFirstExists(false);
                if(shoot) {
                    if(teclaDR1.isDown) {
                        shoot.reset(mSprite.x, mSprite.y);
                        shoot.body.velocity.x = 400;
                        shootTime = phaser.time.now + 500;

                    }else if(teclaDL1.isDown) {
                        shoot.reset(mSprite.x, mSprite.y);
                        shoot.body.velocity.x = -400;
                        shootTime = phaser.time.now + 500;
                    }else {
                        shoot.reset(mSprite.x, mSprite.y);
                        shoot.body.velocity.x = 400;
                        shootTime = phaser.time.now + 500;
                    }
                }
            }
        
    };
    
    (function() {
        //shoot = phaser.add.sprite(32, phaser.world.height - 150, 'laser');
        shoots = phaser.add.group();
        shoots.enableBody = true;
        shoots.physicsBodyType = Phaser.Physics.ARCADE;
        shoots.setAll('anchor.x', 0,5);
        shoots.setAll('anchor.y', 1);
        shoots.setAll('outOfBoundSkill', true);
        shoots.setAll('checkWorldBounds', true);
         
        emitter.makeParticles('pixel');
        emitter.setYSpeed(-150, 150);
        emitter.setXSpeed(-150, 150);
        emitter.gravity = 0;
        createShot();
    })();
};
var Disparar = function (worldReference, playerReference, enemiesReference) {
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var mEnemies = enemiesReference;
    var laser = null;
    var shoot = null;
    var shoots = null;
    var emitter = phaser.add.emitter(0, 0, 15);
    var groupBullets = null;
    var shootTime = 0;
    
    var Speed = 100;
    
    this.update = function() {
        phaser.physics.arcade.collide(shoot, mWorldReference);
        phaser.physics.arcade.overlap(shoot, mEnemies, killEnemy, null, this);
        
        /*shoot.forEachAlive(function(onTeclaDisparPressed) {
            //mEnemies.forEachAlive(function(mEnemies) {
                phaser.physics.arcade.overlap(shoot, mEnemies, killEnemy, null, this);
            //}, this);
        }, this);*/
        
        if(teclaDR1.isDown){
             onTeclaDisparPressed();          
             
         }
         
         if(teclaDL1.isDown) {
             onTeclaDisparPressed();
         }
        
    };
    
    var createShot = function() {
          
        /*for (var i = 0; i < 20; i++)
    {
        var b = bullets.create(0, 0, 'bullet');
        b.name = 'bullet' + i;
        b.exists = false;
        b.visible = false;
        b.checkWorldBounds = true;
        b.events.onOutOfBounds.add(resetBullet, this);
    }*/
        shoot.physicsBodyType = Phaser.Physics.ARCADE;
        
        
        for (var i=0; i<20; i++) {            
        
            var s = shoots.create(mSprite.x, mSprite.y, 'laser');
            s.exists = false;
            s.visible = false;
            s.checlWorldBounds = true;
            s.events.onOutOfBounds.add(resetShoot, this);
            shoot.setAll('checkWorldBounds', true);
            //shoot = shoot.createMultiple(100,'laser'); Mirar el create multible per que no funciona
            //shoot = shoot.create(mSprite.x, mSprite.y, 'laser');
            shoot.scale.setTo(0.3, 0.7);
        }
        
        enablePhysics();
    };
    
    var enablePhysics = function() {
        phaser.physics.arcade.enable(shoot);
        //shoot.body.velocity.x = Speed;
        
    };
    
    var killEnemy = function(shoot, mEnemies) {
        
        //if( phaser.physics.arcade.collide(mEnemies, shoot) {
           
         console.log("Enemy DIE");
        //if(shoot){
        
            shoot.kill();
            mEnemies.kill();
 
            emitter.x = mEnemies.x;
            emitter.y = mEnemies.y;
            emitter.start(true, 600, null, 15);
            
            //mEnemies.kill();
        //}
    };
    
    // Funció d'apretar la tecla per disparar.
    var onTeclaDisparPressed = function(){
        
        if(phaser.time.now > shootTime) {
            shoot = shoots.getFirstExists(false);
            
            if(shoot) {
                shoot.reset(mSprite.x +6, mSprite.y -8);
                shoot.body.velocity.y = -300;
                shootTime = phaser.time.now + 150;
                
            }
            
            
            
            //if(teclaDR1.isDown) {
                
                //shoot.reset(mSprite.x, mSprite.y);
                //shoot.body.velocity.x = 400;
                //shootTime = phaser.time.now + 500;

            //}else if(teclaDL1.isDown) {
                //shoot.reset(mSprite.x, mSprite.y);
                //shoot.body.velocity.x = -400;
                //shootTime = phaser.time.now + 500;
            //}
        }
    };
        
    var resetShoot = function() {
        shoot.kill();       
        
    };
    
    (function() {
        shoot = phaser.add.group();
        shoot.enableBody = true;
        
        emitter.makeParticles('pixel');
        emitter.setYSpeed(-150, 150);
        emitter.setXSpeed(-150, 150);
        emitter.gravity = 0;
        createShot();
    })();
    
};
var Disparar = function (worldReference, playerReference, player2Reference, enemiesReference) {
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var mSprite2 = player2Reference;
    var mEnemies = enemiesReference;
    var laser = null;
    var laser_P2 = null;
    var shoot = null;
    var shoot2 = null;
    var shootGroup = null;
    var emitter = phaser.add.emitter(0, 0, 15);
    var emitter2 = phaser.add.emitter(0, 0, 15);
    var mListeners = [];
    var enemySound;
    
    var Speed = 100;
    
    this.update = function() {
       phaser.physics.arcade.collide(shoot, mWorldReference);
       phaser.physics.arcade.collide(shoot2, mWorldReference);
       phaser.physics.arcade.collide(mEnemies, shoot, killEnemy, null, this);
        phaser.physics.arcade.collide(mEnemies, shoot2, killEnemy, null, this);
       phaser.physics.arcade.overlap(mEnemies, shoot, killEnemy, null, this);    
        
        if(teclaDR1.isDown){
             onTeclaDisparPressed();          
             
         }
         
         if(teclaDL1.isDown) {
             onTeclaDisparPressed();
         }
        
        if(teclaDR2.isDown) {
            onTeclaDisparPressed_Player2();
        }
        
        if(teclaDL2.isDown) {
            onTeclaDisparPressed_Player2();
        }
        
    };
    
    this.registerListener = function(listener){
        mListeners.push(listener);   
    }
    
    var createShot = function() {
        
        //shoot = shoot.createMultiple(100,'laser'); Mirar el create multible per que no funciona
        //shoot = shootGroup.create(mSprite.x, mSprite.y, 'laser');
        //shoot = shootGroup.create(mSprite2.x, mSprite2.y, 'laser');
        shoot = shoot.create(mSprite.x, mSprite.y, 'laser');
        shoot2 = shoot2.create(mSprite2.x, mSprite2.y, 'laser2');
        //shoot = shoot.create(mSprite2.x, mSprite2.y, 'laser');
        
        shoot.scale.setTo(0.3, 0.7);
        shoot2.scale.setTo(0.3, 0.7);
        //shoot = phaser.add.group();
        
        enablePhysics();
    };
    
    var enablePhysics = function() {
        //phaser.physics.arcade.enable(shootGroup);
        phaser.physics.arcade.enable(shoot);
        phaser.physics.arcade.enable(shoot2);
        shoot.body.velocity.x = Speed;
        shoot2.body.velocity.x = Speed;
        
    };
    
    var killEnemy = function(shoot, mEnemies) {
        if(shoot){
            mEnemies.kill();
        
            shoot.kill();
 
            emitter.x = mEnemies.x;
            emitter.y = mEnemies.y;
            emitter.start(true, 600, null, 15);
            
            
        }else if(shoot2){
            mEnemies.kill();
        
            shoot.kill();
 
            emitter2.x = mEnemies.x;
            emitter2.y = mEnemies.y;
            emitter2.start(true, 600, null, 15);
        }
        
        enemieDead = phaser.add.audio('dead');
        enemieDead.play();
        //mEnemies.kill();
        console.log('MatarEnemigo'); 
        
        mListeners.forEach(function(listener){
            listener.killEnemy();
        });
        
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
        coinSound = phaser.add.audio('laser');
        coinSound.play();
    };
    
    var onTeclaDisparPressed_Player2 = function(){
        if(teclaDR2.isDown) {
            shoot2.reset(mSprite2.x, mSprite2.y);
            shoot2.body.velocity.x = 400;
            //laserTime = phaser.time.now + 500;
        }else if(teclaDL2.isDown) {
            shoot2.reset(mSprite2.x, mSprite2.y);
            shoot2.body.velocity.x = -400;
            //laserTime = phaser.time.now + 500;
        }
        coinSound = phaser.add.audio('laser');
        coinSound.play();
    };
    
    (function() {
        //shootGroup = phaser.add.group();
        //shootGroup.enableBody = true;
        shoot = phaser.add.group();
        shoot2 = phaser.add.group();
        shoot.enableBody = true;
        shoot2.enableBody = true;
       
        
        
        emitter.makeParticles('pixel');
        emitter.setYSpeed(-150, 150);
        emitter.setXSpeed(-150, 150);
        emitter.gravity = 0;
        
        emitter2.makeParticles('pixel2');
        emitter2.setYSpeed(-150, 150);
        emitter2.setXSpeed(-150, 150);
        emitter2.gravity = 0;
        
        createShot();
    })();
    
};
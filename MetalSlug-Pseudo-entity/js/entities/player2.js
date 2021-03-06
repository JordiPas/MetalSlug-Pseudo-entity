var Player2 = function(worldReference) {
    var mSprite2 = null;
    var mWorldReference = worldReference;
    var mListeners = [];
    
    this.update = function() {
        phaser.physics.arcade.collide(mSprite2, mWorldReference);
        
        mSprite2.body.velocity.x = 0;
        
        if(teclaA.isDown) {
            onPressLeft();
        }
        else if(teclaD.isDown) {
            onPressRight();
        }
        else {
            onNoDirectionPressed();
        }
        
        
        if (teclaW.isDown) {
            onPressUp();
        }
        
    };
    
    this.getPhysicsReference = function() {
        return mSprite2;
    };
    
    //Listener per anar escoltant
    this.registerListener = function(listener) {
        mListeners.push(listener);
    };
    
    //Aplique phsiques al player 2
    var enablePhysics = function() {
        phaser.physics.arcade.enable(mSprite2);
        mSprite2.body.bounce.y = 0.2;
        mSprite2.body.gravity.y = 250;
        mSprite2.body.collideWorldBounds = true;
    };
    
    //---------------CONTROLS-----------------
    var onPressLeft = function() {
        mSprite2.body.velocity.x = -150;
        mSprite2.animations.play('left');
    };
    
    var onPressRight = function() {
        mSprite2.body.velocity.x = 150;
        mSprite2.animations.play('right');
    };
    
    var onPressUp = function() {
        if(mSprite2.body.onFloor()){
            mSprite2.body.velocity.y = -300;
            jumpSound = phaser.add.audio('jump');
            jumpSound.play();
        }
    };
    
    var onNoDirectionPressed = function() {
        mSprite2.animations.stop();
        mSprite2.frame = 6;
    };
       
    
//Constructor
    (function() {
        mSprite2 = phaser.add.sprite(830, phaser.world.height - 600, 'player2');
        mSprite2.animations.add('left', [0, 1, 2, 3, 4, 5], 10, true);
        mSprite2.animations.add('right', [7, 8, 9, 10, 11, 12], 10, true);
        mSprite2.scale.setTo(1.50, 1.5);
        //phaser.camera.follow(mSprite);
        
        //mCursor = phaser.input.keyboard.createCursorKeys();
        
        enablePhysics();
    })();
    
    
};
        
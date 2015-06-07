var Player2 = function(worldReference) {
    var mSprite2 = null;
    var mWorldReference = worldReference;
    //var mCursor = null;
    var mListeners = [];
    //var mLaser = null;
    
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
    
    
    this.registerListener = function(listener) {
        mListeners.push(listener);
    };
    
    
    var enablePhysics = function() {
        phaser.physics.arcade.enable(mSprite2);
        mSprite2.body.bounce.y = 0.2;
        mSprite2.body.gravity.y = 250;
        mSprite2.body.collideWorldBounds = true;
    };
    
    var onPressLeft = function() {
        mSprite2.body.velocity.x = -150;
        mSprite2.animations.play('left');
    };
    
    var onPressRight = function() {
        mSprite2.body.velocity.x = 150;
        mSprite2.animations.play('right');
    };
    
    var onPressUp = function() {
        mSprite2.body.velocity.y = -150;
        /*if(mSprite.body.touching.down) {
            mSprite.body.velocity.y = -350;
        }*/
    };
    
    var onNoDirectionPressed = function() {
        mSprite2.animations.stop();
        mSprite2.frame = 6;
    };
       
    
//Constructor
    (function() {
        mSprite2 = phaser.add.sprite(32, phaser.world.height - 150, 'player2');
        mSprite2.animations.add('left', [0, 1, 2, 3, 4, 5], 20, true);
        mSprite2.animations.add('right', [7, 8, 9, 10, 11, 12], 20, true);
        mSprite2.scale.setTo(1.25, 1.5);
        //phaser.camera.follow(mSprite);
        
        //mCursor = phaser.input.keyboard.createCursorKeys();
        
        enablePhysics();
    })();
    
    
};
        
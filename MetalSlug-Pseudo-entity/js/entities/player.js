var Player = function(worldReference) {
    var mSprite = null;
    var mWorldReference = worldReference;
    var mCursor = null;
    var mListeners = [];
    //var mLaser = null;
    
    this.update = function() {
        phaser.physics.arcade.collide(mSprite, mWorldReference);
        
        mSprite.body.velocity.x = 0;
        
        if(mCursor.left.isDown) {
            onPressLeft();
        }
        else if(mCursor.right.isDown) {
            onPressRight();
        }
        else {
            onNoDirectionPressed();
        }
        
        
        if (mCursor.up.isDown) {
            onPressUp();
        }
        
    };
    
    this.getPhysicsReference = function() {
        return mSprite;
    };
    
    
    this.registerListener = function(listener) {
        mListeners.push(listener);
    }
    
    
    var enablePhysics = function() {
        phaser.physics.arcade.enable(mSprite);
        mSprite.body.bounce.y = 0.2;
        mSprite.body.gravity.y = 250;
        mSprite.body.collideWorldBounds = true;
    };
    
    var onPressLeft = function() {
        mSprite.body.velocity.x = -150;
        mSprite.animations.play('left');
    };
    
    var onPressRight = function() {
        mSprite.body.velocity.x = 150;
        mSprite.animations.play('right');
    };
    
    var onPressUp = function() {
        mSprite.body.velocity.y = -150;
        /*if(mSprite.body.touching.down) {
            mSprite.body.velocity.y = -350;
        }*/
    };
    
    var onNoDirectionPressed = function() {
        mSprite.animations.stop();
        mSprite.frame = 6;
    };
       
    
//Constructor
    (function() {
        mSprite = phaser.add.sprite(32, phaser.world.height - 150, 'player');
        mSprite.animations.add('left', [0, 1, 2, 3, 4, 5], 20, true);
        mSprite.animations.add('right', [7, 8, 9, 10, 11, 12], 20, true);
        mSprite.scale.setTo(1.25, 1.5);
        //phaser.camera.follow(mSprite);
        
        mCursor = phaser.input.keyboard.createCursorKeys();
        
        enablePhysics();
    })();
    
    
};
        
        
    
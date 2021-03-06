var Player = function(worldReference) {
    var mSprite = null;
    var mWorldReference = worldReference;
    var mCursor = null;
    var mListeners = [];
    
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
    
    //Listener per anar escoltant
    this.registerListener = function(listener) {
        mListeners.push(listener);
    };
    
    //Aplique phsiques al player 
    var enablePhysics = function() {
        phaser.physics.arcade.enable(mSprite);
        mSprite.body.bounce.y = 0.2;
        mSprite.body.gravity.y = 250;
        mSprite.body.collideWorldBounds = true;
    };
    
    //---------------CONTROLS-----------------
    var onPressLeft = function() {
        mSprite.body.velocity.x = -150;
        mSprite.animations.play('left');
    };
    
    var onPressRight = function() {
        mSprite.body.velocity.x = 150;
        mSprite.animations.play('right');
    };
    
    var onPressUp = function() {
        if(mSprite.body.onFloor()){
            mSprite.body.velocity.y = -300;
            jumpSound = phaser.add.audio('jump');
            jumpSound.play();
        }
    };
    
    var onNoDirectionPressed = function() {
        mSprite.animations.stop();
        mSprite.frame = 6;
    };
       
    
//Constructor
    (function() {
        mSprite = phaser.add.sprite(32, phaser.world.height - 350, 'player');
        mSprite.animations.add('left', [0, 1, 2, 3, 4, 5], 20, true);
        mSprite.animations.add('right', [7, 8, 9, 10, 11, 12], 20, true);
        mSprite.scale.setTo(1.25, 1.5);
        //phaser.camera.follow(mSprite);
        
        mCursor = phaser.input.keyboard.createCursorKeys();
        
        enablePhysics();
    })();
    
    
};
        
        
    
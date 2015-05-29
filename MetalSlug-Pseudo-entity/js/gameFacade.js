var GameFacade = function() {
    var mSelf = this;
    var mWorld = null;
    var mPlayer = null;
    
    this.update = function() {
        mPlayer.update();
    };
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);
    };
   
    (function() {
        enablePhysics();
        
        mWorld = new World();
        mPlayer = new Player(mWorld.getPhysicsReference());
        mPlayer.registerListener(mSelf);
       
    })();
};
    
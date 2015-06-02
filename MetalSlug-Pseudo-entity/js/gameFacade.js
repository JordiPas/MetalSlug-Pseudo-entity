var GameFacade = function() {
    var mSelf = this;
    var mWorld = null;
    var mPlayer = null;
    var mEnemies = null;
    
    this.update = function() {
        mLaser.update();
        mEnemies.update();
        mPlayer.update();
    };
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);
    };
   
    (function() {
        enablePhysics();
        
        mWorld = new World();
        mPlayer = new Player(mWorld.getPhysicsReference());
        mEnemies = new Enemies(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference());
        mLaser = new Disparar(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(),mPlayer.getPhysicsReference());
        mPlayer.registerListener(mSelf);
       
    })();
};
    
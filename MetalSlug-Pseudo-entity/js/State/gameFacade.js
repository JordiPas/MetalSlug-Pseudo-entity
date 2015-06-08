var GameFacade = function() {
    var mSelf = this;
    var mSelf2 = this;
    var mWorld = null;
    var mPlayer = null;
    var mPlayer2 = null;
    var mEnemies = null;
    var mLaser = null;
    var mScore = null;
    
    this.create = function() {
        enablePhysics();
        
        mWorld = new World();
        mPlayer = new Player(mWorld.getPhysicsReference());
        mPlayer2 = new Player2(mWorld.getPhysicsReference());
        mEnemies = new Enemies(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(), mPlayer2.getPhysicsReference());
        mLaser = new Disparar(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(),mPlayer2.getPhysicsReference(), mEnemies.getPhysicsReference());
        mScore = new Score();
        
        mPlayer.registerListener(mSelf);
        mPlayer2.registerListener(mSelf2);
        mLaser.registerListener(mSelf);
        
       
    };

    
    this.update = function() {
        mLaser.update();
        mEnemies.update();
        mPlayer.update();
        mPlayer2.update();
        //mScore.updateScore();
        

    };
    
    this.killEnemy = function() {
        mScore.killEnemy();
    };
    
    
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);
    };
   
};
    
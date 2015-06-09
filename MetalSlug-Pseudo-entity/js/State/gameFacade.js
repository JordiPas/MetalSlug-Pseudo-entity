//Classe que crea totes les classes
var GameFacade = function() {
    var mSelf = this;
    var mSelf2 = this;
    var mWorld = null;
    var mPlayer = null;
    var mPlayer2 = null;
    var mEnemies = null;
    var mLaser = null;
    var mScore = null;
    
    //Constructor de totes les classes, amb les referencies de les physiques com a parametre
    this.create = function() {
        enablePhysics();
        
        mWorld = new World();
        mPlayer = new Player(mWorld.getPhysicsReference());
        mPlayer2 = new Player2(mWorld.getPhysicsReference());
        mLaser = new Disparar(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(),mPlayer2.getPhysicsReference());
        mEnemies = new Enemies(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(), mPlayer2.getPhysicsReference());
        mLaser = new Disparar(mWorld.getPhysicsReference(), mPlayer.getPhysicsReference(),mPlayer2.getPhysicsReference(), mEnemies.getPhysicsReference());
        mScore = new Score();
        
        mPlayer.registerListener(mSelf);
        mPlayer2.registerListener(mSelf);
        mLaser.registerListener(mSelf);   
       
    };
    
    //funcio que va actualitzant tot el joc
    this.update = function() {
        mLaser.update();
        mEnemies.update();
        mPlayer.update();
        mPlayer2.update();
        
    };
    
    //funcio que fem servir per comunicar les classes dispar i enemies
    this.killEnemy = function() {
        console.log('GameMatar');
        mScore.killEnemy();
    };  
    
    //funcio que activa les physiques a tot el sistema
    var enablePhysics = function() {
        phaser.physics.startSystem(Phaser.Physics.ARCADE);
    };
   
};
    
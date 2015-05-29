var World = function() {
    var mMapa = null;
    var mLayer = null;
    
    this.getPhysicsReference = function() {
        return mLayer;
    };
    
    var addBackground = function() {
        phaser.add.sprite(0, 0, 'background');
    };
    
    var addTilemap = function() {
        mMapa = phaser.add.tilemap('casa');
    };
    
    var addTilesets = function() {
        mMapa.addTilesetImage('tileset');
    };
    
    var createLayer = function() {
        mLayer = mMapa.createLayer('Capa de Patrones 1');
        mLayer.resizeWorld();
        mMapa.setCollision(1);
    };
    
    var enablePhysics = function() {
        phaser.physics.arcade.enable(mLayer);
    };
    
    
    //Constructor
    (function() {
        //Add backgroun
        addBackground();
        
        //Create tilesets and tilemap
        addTilemap();
        addTilesets();
        createLayer();
    })();
};
        
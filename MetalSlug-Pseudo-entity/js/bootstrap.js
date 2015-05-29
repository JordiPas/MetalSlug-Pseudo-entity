var gameFacade = null;
var phaser = new Phaser.Game(
    950,
    635,
    Phaser.AUTO, 
    ' ',
    {
        preload: function() {
            
            phaser.load.image('background', 'assets/Casa.png');
            phaser.load.tilemap('casa', 'assets/TiledMetalSlug.json', null, Phaser.Tilemap.TILED_JSON);
            phaser.load.image('tileset', 'assets/tileset.png');
            phaser.load.spritesheet('player', 'assets/CorrerSlug.png', 32, 48);
            
        },
        
        create: function() {
            gameFacade = new GameFacade();
        },
        
        update: function() {
            if(gameFacade) {
                gameFacade.update();
            }
        }
    }
);
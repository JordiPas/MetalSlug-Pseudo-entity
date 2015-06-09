var gameFacade = null;
var phaser = new Phaser.Game(
    947,
    631,
    Phaser.AUTO, 
    'mainContent',
    {
        preload: function() {
            
            //phaser.stage.backgroundColor = "#99cc33";
            phaser.load.image('instruccions', 'assets/instruccions.png');
            phaser.load.image('backgroundMenu', 'assets/metalico.jpg');
            phaser.load.image('victory', 'assets/victory.jpg');
            phaser.load.image('gameOver', 'assets/gameOver.jpg');
            phaser.load.image('enemy', 'assets/enemy.png');
            phaser.load.image('pixel', 'assets/pixel.png');
            phaser.load.image('pixel2', 'assets/pixel2.png');
            phaser.load.image('laser', 'assets/laser.png'); //Disparar
            phaser.load.image('laser2', 'assets/laser2.png');
            phaser.load.spritesheet('player', 'assets/CorrerSlug.png', 51, 53);
            phaser.load.spritesheet('player2', 'assets/correrSlug2.png', 46, 50);
            phaser.load.tilemap('casa', 'assets/TiledMetalSlug.json', null, Phaser.Tilemap.TILED_JSON);
            phaser.load.image('background', 'assets/Casa.png');            
            phaser.load.image('Muro', 'assets/tileset.png');
            
            // ----- Audios ----- //
            phaser.load.audio('jump', ['assets/jump.ogg', 'assets/jump.mp3']);
		    phaser.load.audio('laser', 'assets/laser.wav');
		    phaser.load.audio('dead', ['assets/dead.ogg', 'assets/dead.mp3']);
            phaser.load.audio('playerDead', 'assets/playerdie.wav');
            phaser.load.audio('menuSound', 'assets/menu.wav');
            phaser.load.audio('gameSound', 'assets/level1.wav');
            phaser.load.audio('youLose', 'assets/youlose.wav');
            phaser.load.audio('youWin', 'assets/youwin.wav');
            
            
        },
        
        create: function() {
            phaser.state.add('menu', MenuState);
            phaser.state.add('instruccions', InstructionsState);
            phaser.state.add('game', GameFacade);
            phaser.state.start('menu');
            
            //Tecles per disparar
            teclaDR1 = phaser.input.keyboard.addKey(Phaser.Keyboard.M); //Dreta dispar
            teclaDL1 = phaser.input.keyboard.addKey(Phaser.Keyboard.N); //Esquerra dispar
            teclaW = phaser.input.keyboard.addKey(Phaser.Keyboard.W); //Saltar Player2
            teclaA = phaser.input.keyboard.addKey(Phaser.Keyboard.A); //Esquerra Player2
            teclaD = phaser.input.keyboard.addKey(Phaser.Keyboard.D); //Dreta Player2
            
            teclaDR2 = phaser.input.keyboard.addKey(Phaser.Keyboard.X); //Dreta dispar Player2
            teclaDL2 = phaser.input.keyboard.addKey(Phaser.Keyboard.Z); //Esquerra dispar Player2
            
            
        },
        
        update: function() {
            if(gameFacade) {
                gameFacade.update();
            }
        }
    }
);
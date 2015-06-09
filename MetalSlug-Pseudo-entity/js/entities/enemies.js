var Enemies = function(worldReference, playerReference, player2Reference) {
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var mSprite2 = player2Reference;
    var enemy = null;
    var Enemy = [];
    var EnemyGroup = null;
    var totalEnemies = 20;
    var seconds = null;
    var nextEnemy = 0;
    var start = 0;
    var delay = 0;
    var score = 50; //Posar la score real ara és ficticia
    var emitter = phaser.add.emitter(0, 0, 15);
    var emitter2 = phaser.add.emitter(0, 0, 15);
    var i=0;
    var muertos = 0; // Si maten els 2 jugadors GameOver
    
    
    var maxSpeed = 80;
    var minSpeed = -80;
    var velx = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    var vely = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    
    this.getPhysicsReference = function() {
        return EnemyGroup;
    };    
    
    this.update = function() {
        phaser.physics.arcade.collide(EnemyGroup, mWorldReference);
        phaser.physics.arcade.collide(mSprite, Enemy, killPlayer, null, this);
        phaser.physics.arcade.collide(mSprite2, Enemy, killPlayer2, null, this);
       
        
        if (nextEnemy < phaser.time.now) {
            if(i<totalEnemies){
                //Per fer que quan la puntuació augmenti surtin més enemics
                start = 6000, end = 1000, score = 100;
                delay = Math.max(start - (start-end)*score/score, end);

                //Crea els enemics
                createEnemies();
                createEnemies2();
                //Suma el temps per que surti el proxim enemic
                i++;
            }
            nextEnemy = phaser.time.now + delay;
            
            
        }      
        
    };        
    
    var createEnemies = function() {
        //Aqui a d'anar el codi per que si un enemic és mort en surti un altre!!!!!!
        
        //Crea un enemic
        enemy = EnemyGroup.create(155, 10, 'enemy');
        enemy.scale.setTo(0.7, 0.5);
        enablePhysics();
        Enemy.push(enemy);

    };
    
    var createEnemies2 = function() {
        //Aqui a d'anar el codi per que si un enemic és mort en surti un altre!!!!!!
        
        //Crea un enemic
        enemy = EnemyGroup.create(760, 380, 'enemy');
        enemy.scale.setTo(0.7, 0.5);
        enablePhysics();
        Enemy.push(enemy);

    };
    
    var enablePhysics = function() {
        
        phaser.physics.arcade.enable(Enemy);
        enemy.body.bounce.x = 1;
        enemy.body.gravity.y = 300;
        enemy.body.collideWorldBounds = true;
        enemy.body.velocity.x = velx;
        enemy.body.velocity.y = vely;
        //enemy.scale.setTo(1.25, 1.5);
        enemy.anchor.setTo(0.5, 0.5);
        enemy.checkWorldBounds = true;
        
    };
    
    // Mort el jugador 1
    var killPlayer = function() {
        mSprite.kill();
        
        emitter.x = mSprite.x;
        emitter.y = mSprite.y;
        emitter.start(true, 600, null, 15);
        muertos = muertos +1;
        playersLost();
        deadSound = phaser.add.audio('playerDead');
        deadSound.play();
    };
    
    //Mort el jugador 2
    var killPlayer2 = function() {
        mSprite2.kill();
        
        emitter2.x = mSprite2.x;
        emitter2.y = mSprite2.y;
        emitter2.start(true, 600, null, 15);
        muertos = muertos +1;
        playersLost();
        deadSound = phaser.add.audio('playerDead');
        deadSound.play();
    };
    
    // ----- Jugador pierde la partida ----- //
    var playersLost = function(){
        if(muertos == 2){
            
            gameSound.stop();
            youLose = phaser.add.audio('youLose');
            youLose.loop = true;
            youLose.play();
            youLose.volume = 1;
            
            var backgroundImage = phaser.add.image(0, 0, 'gameOver');
            backgroundImage.scale.setTo(2,1.8);
            
            //Lletres que t'indiquen que fer quan s'hacaba el joc
            var nameLabel = phaser.add.text(phaser.world.centerX, -50, 'Restart game press R', { font: '70px Geo', fill: '#FF9900' });
            nameLabel.anchor.setTo(0.5, 0.5);
            phaser.add.tween(nameLabel).to({y: 80}, 1000).easing(Phaser.Easing.Bounce.Out).start();
            
            //El joc és reseteja
            var rKey = phaser.input.keyboard.addKey(Phaser.Keyboard.R);
		    rKey.onDown.addOnce(reset, this);
        }
    };
    
    var reset = function(){
        phaser.state.start('menu');
        youLose.stop();
    };
    
    
    (function() {
        EnemyGroup = phaser.add.group();
        EnemyGroup.enableBody = true;
        
        emitter.makeParticles('pixel');
        emitter.setYSpeed(-150, 150);
        emitter.setXSpeed(-150, 150);
        emitter.gravity = 0;
        
        emitter2.makeParticles('pixel2');
        emitter2.setYSpeed(-150, 150);
        emitter2.setXSpeed(-150, 150);
        emitter2.gravity = 0;
        
        //createEnemies();
        //createEnemies2();
        
    })();
};
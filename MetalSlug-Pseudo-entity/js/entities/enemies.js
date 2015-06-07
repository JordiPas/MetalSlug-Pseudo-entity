var Enemies = function(worldReference, playerReference) {
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var enemy = null;
    var Enemy = [];
    var EnemyGroup = null;
    var totalEnemies = 5;
    var seconds = null;
    var nextEnemy = 0;
    var start = 0;
    var delay = 0;
    var score = 50; //Posar la score real ara és ficticia
    var emitter = phaser.add.emitter(0, 0, 15);
    var i = 0;
    
    
    var maxSpeed = 80;
    var minSpeed = -80;
    var velx = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    var vely = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    
    
    this.update = function() {
        phaser.physics.arcade.collide(EnemyGroup, mWorldReference);
        phaser.physics.arcade.collide(mSprite, Enemy, killPlayer, null, this);
        
        
            if (nextEnemy < phaser.time.now) {
                if(i<totalEnemies) {
                    //Per fer que quan la puntuació augmenti surtin més enemics
                    start = 4000, end = 1000, score = 100;
                    delay = Math.max(start - (start-end)*score/score, end);



                    //Crea els enemics
                    createEnemies();
                    i++;
                }
                //Suma el temps per que surti el proxim enemic
                //nextEnemy = phaser.time.now + delay;
                nextEnemy = phaser.time.now + 2000;
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
    
    var enablePhysics = function() {
        
        phaser.physics.arcade.enable(EnemyGroup);
        enemy.body.bounce.x = 1;
        enemy.body.gravity.y = 300;
        enemy.body.collideWorldBounds = true;
        enemy.body.velocity.x = velx;
        enemy.body.velocity.y = vely;
        //enemy.scale.setTo(1.25, 1.5);
        enemy.anchor.setTo(0.5, 0.5);
        enemy.checkWorldBounds = true;
        
    };
    
    var killPlayer = function() {
        mSprite.kill();
         
        emitter.x = mSprite.x;
        emitter.y = mSprite.y;
        emitter.start(true, 600, null, 15);
    };
    
    (function() {
        EnemyGroup = phaser.add.group();
        EnemyGroup.enableBody = true;
        
        emitter.makeParticles('pixel');
        emitter.setYSpeed(-150, 150);
        emitter.setXSpeed(-150, 150);
        emitter.gravity = 0;
        
    })();
};
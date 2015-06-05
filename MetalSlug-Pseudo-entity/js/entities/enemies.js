var Enemies = function(worldReference, playerReference) {
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var enemy = null;
    var Enemy = [];
    var EnemyGroup = null;
    var totalEnemies = 20;
    var emitter = phaser.add.emitter(0, 0, 15);
    var timer;
    var total = 0;
    
    
    
    var maxSpeed = 80;
    var minSpeed = -80;
    var velx = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    var vely = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    
    this.getPhysicsReference = function() {
        return enemy;
    };
    
    
    this.update = function() {
        phaser.physics.arcade.collide(EnemyGroup, mWorldReference);
        phaser.physics.arcade.collide(mSprite, Enemy, killPlayer, null, this);
        
    };
    
    
    function updateCounter() {

        total++;

    }
    
        //EnemyGroup = phaser.add.group();
        //EnemyGroup.enableBody = true;
        
    
    var createEnemies = function() {
        //quan el primer enemic mori
      /*enemy = EnemyGroup.getFirstDead();
        
		if (!enemy) {
			return;
		}

		EnemyGroup.anchor.setTo(0.5, 1);
		//enemy.reset(game.world.centerX, 0);
        
        EnemyGroup.create(155, 10, 'enemy');
		EnemyGroup.body.gravity.y = 500;
		EnemyGroup.body.velocity.x = 100 * Phaser.Math.randomSign();
		//enemy.body.bounce.x = 1;
		//enemy.checkWorldBounds = true;
		//enemy.outOfBoundsKill = true;
        
        enablePhysics();
        Enemy.push(enemy);*/
        
        /*
        if (this.nextEnemy < game.time.now) {
            var start = 4000, end = 1000, score = 100;
            
            var delay = Math.max(start - (start-end)*game.global.score/score, end);
            
            this.addEnemy();
            this.nextEnemy = game.time.now + delay;
            //this.nextEnemy = game.time.now + 2200;
        }
        
        */
        
        //for(var i = 0; i<totalEnemies; i++) {
            //var x = phaser.world.randomX;
            //var timer = game.time.create(1000, false);
            //timer.add(3000);
        
        
                enemy = EnemyGroup.create(155, 10, 'enemy');
                enemy.scale.setTo(0.7, 0.5);

                enablePhysics();

                Enemy.push(enemy);
            
            
        }

    };
    
    var enablePhysics = function() {
        phaser.physics.arcade.enable(Enemy);
        //EnemyGroup.createMultiple(20, 'enemy');
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
        
        createEnemies();
        
        /*if(nextEnemy < phaser.time.now){
            for(var i=0;i<1;i++){
                createEnemies();
                nextEnemy++;
            }
            var delay = 100;
            
            nextEnemy = phaser.time.now;
        }*/
    })();
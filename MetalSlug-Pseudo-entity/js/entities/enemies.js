var Enemies = function(worldReference, playerReference) {
    var mWorldReference = worldReference;
    var mSprite = playerReference;
    var enemy = null;
    var Enemy = [];
    var EnemyGroup = null;
    var totalEnemies = 20;
    
    
    var maxSpeed = 80;
    var minSpeed = -80;
    var velx = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    var vely = Math.random()*(maxSpeed - minSpeed+1)-minSpeed;
    
    
    this.update = function() {
        phaser.physics.arcade.collide(EnemyGroup, mWorldReference);
        phaser.physics.arcade.collide(mSprite, Enemy, killPlayer, null, this);
        
    };
    
    var createEnemies = function() {
        
        /*enemy = enemy.getFirstDead();
		if (!enemy) {
			return;
		}

		enemy.anchor.setTo(0.5, 1);
		//enemy.reset(game.world.centerX, 0);
        enemy.create(155, 10, 'enemy');
		enemy.body.gravity.y = 500;
		enemy.body.velocity.x = 100 * Phaser.Math.randomSign();
		enemy.body.bounce.x = 1;
		enemy.checkWorldBounds = true;
		enemy.outOfBoundsKill = true;
        
        */
        
        for(var i = 0; i<totalEnemies; i++) {
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
        console.log("PLAYER DIE");
    };
    
    (function() {
        EnemyGroup = phaser.add.group();
        EnemyGroup.enableBody = true;
        createEnemies();
    })();
};
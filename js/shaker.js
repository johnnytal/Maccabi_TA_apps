var shakerMain = function(game){
	FRONT_COLOR = '#c1ad65';
	BACK_COLOR = '#656d7c';
	
	MIDDLE = null;

	sensFactor = 0;
	distanceFactor = 0;
	resetTouching = true;
	
	INIT_SIZE = 0.7;
	INIT_SENS = 60;
};

shakerMain.prototype = {
    create: function(){
    	game.stage.backgroundColor = '#002255';
    	
    	sensFactor = 0;
    	distanceFactor = 0;

    	bg = game.add.image(0, 0, 'bg');
    	bg.alpha = 0.6;
    	
        circles = game.add.group();
		circles.enableBody = true;
		circles.physicsBodyType = Phaser.Physics.ARCADE;
		
		circle = circles.create(0, 0, 'green');
		circle.scale.set(INIT_SIZE, INIT_SIZE);

        circle.x = WIDTH / 2 - circle.width / 2;
        MIDDLE = HEIGHT / 2 - circle.height / 2;
        circle.y = MIDDLE;

        circle.body.collideWorldBounds = true;
        
		XtraUIbuttons();

        try{navigator.accelerometer.watchAcceleration(readAccel, onError, { frequency: 1});} catch(e){}
    }
};

function readAccel(acceleration){	
    //circle.y = MIDDLE + acceleration.x * (INIT_SENS + sensFactor);
    circle.body.velocity.y = acceleration.x * (INIT_SENS + sensFactor);
    
	if (!resetTouching && Math.abs(circle.y - MIDDLE) < 15){
		resetTouching = true;
	}
	
	if (game.state.getCurrentState().key == 'Shaker'){
		if (resetTouching){	 	
	    	if (circle.body.blocked.up){ // front
	    		//front.volume = Math.abs(acceleration.x / 10);
				front.play();
				flash(FRONT_COLOR);	
			}
	    	
	    	else if (circle.body.blocked.down) { // back 
	    		//back.volume = Math.abs(acceleration.x / 10);   		
				back.play();
				flash(BACK_COLOR);
			}	
		}
	}
}

function flash(_color){
	resetTouching = false;
	game.stage.backgroundColor = _color;
	circle.tint = 0xff00df;
	
	if (_color == FRONT_COLOR){
		window.plugins.flashlight.switchOn();
		navigator.vibrate(22);;	
	}
	else{
		navigator.vibrate(22);	
	}

	setTimeout(function(){
		if (window.plugins.flashlight.isSwitchedOn()){
			window.plugins.flashlight.switchOff();
		}
		
		circle.tint = 0xffffff;
		game.stage.backgroundColor = '#000000';
	}, 75);
}

function XtraUIbuttons(){
    plus = game.add.sprite(620, 300, 'plus');
    plus.scale.set(.85, .85);
    plus.alpha = 0.85;
    plus.inputEnabled = true;
    plus.events.onInputDown.add(function(){
    	sensFactor += 0.05;
    	sensText.text = "Sensitivity\nfactor: " + roundIt(sensFactor);
    	plus.tint = 0xf04030;
    	setTimeout(function(){plus.tint = 0xffffff;},100);
    }, this);
    
    minus = game.add.sprite(525, 300, 'minus');
    minus.scale.set(.85, .85);
    minus.alpha = 0.85;
    minus.inputEnabled = true;
    minus.events.onInputDown.add(function(){
    	sensFactor -= 0.05;
    	sensText.text = "Sensitivity\nfactor: " + roundIt(sensFactor);
    	minus.tint = 0xf04030;
    	setTimeout(function(){minus.tint = 0xffffff;},100);
    }, this);
    
    
    plusD = game.add.sprite(620, 100, 'plus');
    plusD.scale.set(.85, .85);
    plusD.alpha = 0.85;
    plusD.inputEnabled = true;
    plusD.events.onInputDown.add(function(){
    	distanceFactor += 0.01;
    	distanceText.text = "Size\nfactor: " + roundIt(distanceFactor);
    	plusD.tint = 0xf04030;
    	circle.scale.set(INIT_SIZE + distanceFactor);
    	setTimeout(function(){plusD.tint = 0xffffff;},100);
    }, this);
    
    minusD = game.add.sprite(525, 100, 'minus');
    minusD.scale.set(.85, .85);
    minusD.alpha = 0.85;
    minusD.inputEnabled = true;
    minusD.events.onInputDown.add(function(){
    	distanceFactor -= 0.01;
    	distanceText.text = "Size\nfactor: " + roundIt(distanceFactor);
    	minusD.tint = 0xf04030;
    	circle.scale.set(INIT_SIZE + distanceFactor);
    	setTimeout(function(){minusD.tint = 0xffffff;},100);
    }, this);
	
    distanceText = game.add.text(530, 30, "Size\nfactor: " + roundIt(distanceFactor), 
    {font: '22px', fill: 'white'});
    
    sensText = game.add.text(530, 230, "Sensitivity\nfactor: " + roundIt(sensFactor), 
    {font: '22px', fill: 'white'});
}

function onError(){
	alert('error');
}
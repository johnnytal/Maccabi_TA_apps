var shakerMain = function(game){
	FRONT_COLOR = '#c1ad65';
	BACK_COLOR = '#656d7c';

	resetTouching = true;

	frontAngle = 0;
	backAngle = 0;
	
	lastPlayed = null;

	INIT_FRONT = 22;
	INIT_BACK = -3;
	
	volume = 0;
};

shakerMain.prototype = {
    create: function(){
    	game.stage.backgroundColor = '#002255';
    	
    	frontAngle = 0;
    	backAngle = 0;

    	bg = game.add.image(0, 0, 'bg');
    	bg.alpha = 0.6;

		circle = game.add.image(0, 0, 'green');
		circle.scale.set(0.9, 0.9);
        circle.x = WIDTH / 2 - circle.width / 2;
        circle.y = HEIGHT / 2 - circle.height / 2;
 
		XtraUIbuttons();
		
	    debugText = game.add.text(110, 30, "" , {font: '24px', fill: 'white'});
	    
	    front = new Media('assets/audio/front.mp3');
	    back = new Media('assets/audio/back.mp3');
		
		try{window.addEventListener('deviceorientation', readAngle);}catch(e){}
		//try{window.addEventListener("devicemotion", readAccel, true);}catch(e){}
    }
};

function readAccel(event){
	volume = Math.abs(event.accelerationIncludingGravity.x) /  17;
}

function readAngle(event){	
	angle = roundIt(event.gamma);
	
	debugText.text = 'Angle: ' + angle;
	
	if (!resetTouching && angle > ((INIT_BACK + backAngle) + 0.75) && angle < ((INIT_FRONT + frontAngle) - 0.75)){
			resetTouching = true;
	}
	
	if (game.state.getCurrentState().key == 'Shaker'){

		if (angle > (INIT_FRONT + frontAngle) && (lastPlayed == 'back' || resetTouching)){
			//front.volume = volume;
			front.play();
			flash(FRONT_COLOR);	
			lastPlayed = 'front';
		}
		else if (angle < (INIT_BACK + backAngle) && (lastPlayed == 'front' || resetTouching)){
			//back.volume = volume;
			back.play();
			flash(BACK_COLOR);
			lastPlayed = 'back';
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
    	frontAngle += 0.1;
    	frontText.text = "FRONT: " + roundIt(INIT_FRONT + frontAngle);
    	plus.tint = 0xf04030;
    	setTimeout(function(){plus.tint = 0xffffff;},100);
    }, this);
    
    minus = game.add.sprite(525, 300, 'minus');
    minus.scale.set(.85, .85);
    minus.alpha = 0.85;
    minus.inputEnabled = true;
    minus.events.onInputDown.add(function(){
    	frontAngle -= 0.1;
    	frontText.text = "FRONT: " + roundIt(INIT_FRONT + frontAngle);
    	minus.tint = 0xf04030;
    	setTimeout(function(){minus.tint = 0xffffff;},100);
    }, this);
     
    plusD = game.add.sprite(620, 100, 'plus');
    plusD.scale.set(.85, .85);
    plusD.alpha = 0.85;
    plusD.inputEnabled = true;
    plusD.events.onInputDown.add(function(){
    	backAngle += 0.1;
    	backText.text = "BACK: " + roundIt(INIT_BACK + backAngle);
    	plusD.tint = 0xf04030;
    	setTimeout(function(){plusD.tint = 0xffffff;},100);
    }, this);
    
    minusD = game.add.sprite(525, 100, 'minus');
    minusD.scale.set(.85, .85);
    minusD.alpha = 0.85;
    minusD.inputEnabled = true;
    minusD.events.onInputDown.add(function(){
    	backAngle -= 0.1;
    	backText.text = "BACK: " + roundIt(INIT_BACK + backAngle);
    	minusD.tint = 0xf04030;
    	setTimeout(function(){minusD.tint = 0xffffff;},100);
    }, this);
	
    backText = game.add.text(545, 40, "BACK: " + roundIt(INIT_BACK + backAngle),
    {font: '24px', fill: 'white'});
    
    frontText = game.add.text(545, 240, "FRONT: " + roundIt(INIT_FRONT + frontAngle),
    {font: '24px', fill: 'white'});
}
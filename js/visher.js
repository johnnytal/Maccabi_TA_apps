var visherMain = function(game){
	resetVisher = true;
	GO_NUM = 6.5;
	
	HU_COLOR = 'visherBlue';
	HA_COLOR = 'visherYellow';
	
	anImage = null;
};

visherMain.prototype = {
    create: function(){ 
    	game.stage.backgroundColor = '#ff4502';

        wipers = game.add.group();
		wipers.enableBody = true;
		wipers.physicsBodyType = Phaser.Physics.ARCADE;
		
		wiper = wipers.create(0, 0, 'wiper');
		
		anImage = game.add.image(0, 0, HU_COLOR);

        wiper.y = HEIGHT / 2 + wiper.height / 4;
        wiper.x = (WIDTH / 2 - wiper.width / 2)  + 500;
        
        wiper.anchor.set(1, .5);
        
        wiper.body.collideWorldBounds = true;
    	
        angleText = game.add.text(600, 50, "Vish it!", {font: '32px', fill: 'white'});

    	try{navigator.accelerometer.watchAcceleration(readVisherAccel, onError, { frequency: 1 });} catch(e){}
    },
    
    update: function(){

    	if (game.state.getCurrentState().key == 'Visher'){
	    	if (!resetVisher && wiper.angle < 20 && wiper.angle > - 20){
	    		resetVisher = true;
	    	}
	    	
	    	if (resetVisher){    	
		    	if (wiper.angle < -25 && anImage.key != HU_COLOR){
					haSfx.play();
					flashVisher(HU_COLOR);	
	    		}
		    	
		    	else if (wiper.angle > 25 && anImage.key != HA_COLOR){    		
    				huSfx.play();
					flashVisher(HA_COLOR);
				}	
	    	}
    	}
	}
};

function readVisherAccel(acceleration){
	wiper.angle = acceleration.x * 3;
	angleText.text = roundIt(acceleration.x);
}

function flashVisher(_image){
	window.plugins.flashlight.switchOn();
	setTimeout(function(){navigator.vibrate(35);}, 20);	
	
	anImage.destroy();
	anImage = game.add.image(0, 0, _image);
	
	resetVisher = false;
	
	setTimeout(function(){
		window.plugins.flashlight.switchOff();
	}, 100);	
}

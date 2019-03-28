var trombMain = function(game){
	prev_reading = 0;
	accelY = 0;
};

trombMain.prototype = {
    create: function(){ 
    	game.stage.backgroundColor = '#0f5420';
    	
    	bg = game.add.image(0, 0, 'bg');
    	bg.alpha = 0.6;
    	
    	trombImg = game.add.image(200, 100, 'tromboneImg');
    	
        angleText2 = game.add.text(250, 50, "Play it!", {font: '32px', fill: 'white'});
        
       	try{window.addEventListener('deviceorientation', readTrombAccel);}catch(e){}

		//try{navigator.accelerometer.watchAcceleration(readTrombAccel, onError, { frequency: 250 });} catch(e){}	
    }
};

function readTrombAccel(acceleration){
	if (game.state.getCurrentState().key == "Trombone"){
		
		var beta = event.beta;  // -180,180 Y
		accelY = Math.round((beta + 180) / 4);

		angleText2.text = accelY;
		
		if (accelY < prev_reading){
	        if (trombSound.paused){
	           trombSound.resume();    
	        }
	        else if (!trombSound.isPlaying && !trombSound.paused){
	            trombSound.play();
	        }
	
			game.stage.backgroundColor = '#0245f0';
			trombImg.tint = 0x00ffff;
		}
		else{
			if (!trombSound.paused){
				trombSound.pause();
				
				game.stage.backgroundColor = '#0f5420';
				trombImg.tint = 0xffffff;
			}
		}
		
		prev_reading = accelY;
	}
}
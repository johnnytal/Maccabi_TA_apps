var trombMain = function(game){
	prev_reading = 0;
	
	MIN_DIF = 0.25;
	accelY = 0;
};

trombMain.prototype = {
    create: function(){ 
    	game.stage.backgroundColor = '#0f5420';
    	
    	bg = game.add.image(0, 0, 'bg');
    	bg.alpha = 0.6;
    	
    	trombImg = game.add.image(200, 100, 'tromboneImg');
    	
        angleText2 = game.add.text(250, 50, "Play it!", {font: '32px', fill: 'white'});

		try{navigator.accelerometer.watchAcceleration(readTrombAccel, onError, { frequency: 1 });} catch(e){}	
    }
};

function readTrombAccel(acceleration){
	if (game.state.getCurrentState().key == "Trombone"){
		
		accelY = Math.abs(roundIt(acceleration.y));
		angleText2.text = accelY;
		
		if (accelY + MIN_DIF < prev_reading){


	        if (!trombSound.paused && !trombSound.isPlaying){
	            trombSound.play();    
	        }
	        else{
	            trombSound.resume();
	        }

			game.stage.backgroundColor = '#0245f0';
			trombImg.tint = 0x00ffff;
		}
		else{
			setTimeout(function(){
				trombSound.pause();
			}, 300);

			game.stage.backgroundColor = '#0f5420';
			trombImg.tint = 0xffffff;
		}
		
		prev_reading = accelY;
	}
}
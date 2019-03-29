var trombMain = function(game){
	prev_reading = 0;
	accelY = 0;
	muteTimer = null;
	notesToPlay = [];
};

trombMain.prototype = {
    create: function(){ 
    	game.stage.backgroundColor = '#0f5420';
    	
    	loadHorn();
    	
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
		accelY = Math.round((beta + 180) / 8.5) - 15;

		angleText2.text = accelY;
		
		if (prev_reading != accelY){
			if (accelY < 8){
				notesToPlay[accelY].play();
				
				if (accelY > 0){
					try{ notesToPlay[prev_reading].fadeOut(100);
						 notesToPlay[prev_reading].onFadeComplete(function(){
						 	notesToPlay[prev_reading].volume = 1;
						 });
					}catch(e){}
				}
			}
		}
		
		/*if (accelY < prev_reading){
			try{
				clearTimeout(muteTimer);
				muteTimer = null;
			}catch(e){}
			
			
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
				muteTimer = setTimeout(function(){
					trombSound.pause();
				}, 150);
				
				game.stage.backgroundColor = '#0f5420';
				trombImg.tint = 0xffffff;
			}
		}*/
		
		prev_reading = accelY;
	}
}

function loadHorn(){
	sfx1 = game.add.audio('B1', 1);
	sfx2 = game.add.audio('C2', 1);
	sfx3 = game.add.audio('C_2', 1);
	sfx4 = game.add.audio('D2', 1);
	sfx5 = game.add.audio('D_2', 1);
	sfx6 = game.add.audio('E2', 1);
	sfx7 = game.add.audio('F2', 1);
	sfx8 = game.add.audio('G2', 1);
		
	notesToPlay = [
		sfx1, sfx2, sfx3, sfx4,sfx5, sfx6, sfx7, sfx8
	];
}

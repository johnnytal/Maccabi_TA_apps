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
		accelY = Math.round((beta + 180) / 17);

		angleText2.text = accelY;
		
		if (prev_reading != accelY){
			notesToPlay[accelY].play();
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
	sfx1 = game.add.audio('HO_stac_mf2_B1', 1),
	sfx2 = game.add.audio('HO_stac_mf2_C2', 1),
	sfx3 = game.add.audio('HO_stac_mf2_C_2', 1),
	sfx4 = game.add.audio('HO_stac_mf2_D_2', 1),
	sfx5 = game.add.audio('HO_stac_mf2_D_2', 1),
	sfx6 = game.add.audio('HO_stac_mf2_E2', 1),
	sfx7 = game.add.audio('HO_stac_mf2_F2', 1),
	sfx8 = game.add.audio('HO_stac_mf2_F_2', 1),
	sfx9 = game.add.audio('HO_stac_mf2_G2', 1),
	sfx10 = game.add.audio('HO_stac_mf2_G_2', 1),
	sfx11 = game.add.audio('HO_stac_mf2_B2', 1),
	sfx12 = game.add.audio('HO_stac_mf2_C_3', 1),
	sfx13 = game.add.audio('HO_stac_mf2_D_3', 1),
	sfx14 = game.add.audio('HO_stac_mf2_F3', 1),
	sfx15 = game.add.audio('HO_stac_mf2_G3', 1),
	sfx15 = game.add.audio('HO_stac_mf2_A3', 1),
	sfx16 = game.add.audio('HO_stac_mf2_B3', 1),
	sfx17 = game.add.audio('HO_stac_mf2_C_4', 1),
	sfx18 = game.add.audio('HO_stac_mf2_D_4', 1),
	sfx19 = game.add.audio('HO_stac_mf2_F4', 1),
	sfx20 = game.add.audio('HO_stac_mf2_G4', 1),
	sfx21 = game.add.audio('HO_stac_mf2_A4', 1),
	sfx22 = game.add.audio('HO_stac_mf2_B4', 1),
		
	notesToPlay = [
		sfx1, sfx2, sfx3, sfx4,sfx5, sfx6, sfx7, sfx8, sfx9, sfx10, sfx11, sfx12, sfx13, sfx14, sfx15, sfx16, sfx17, sfx18, sfx19, sfx20, sfx21
	];
}

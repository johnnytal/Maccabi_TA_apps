var trombMain = function(game){
	prev_reading = 0;
	accelY = 0;
	muteTimer = null;
	notesToPlay = [];
	
	INIT_FADE = 60;
	fadeFactor = 0;
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
       	
       	TrombUIbuttons();
    }
};

function readTrombAccel(event){
	if (game.state.getCurrentState().key == "Trombone"){
		
		var beta = event.beta;  // -180,180 Y
		accelY = Math.round((beta + 180) / 8.5) - 15;

		angleText2.text = accelY;
		
		if (prev_reading != accelY){
			if (accelY < 8){
				notesToPlay[accelY].fadeIn(INIT_FADE + fadeFactor);
				try{ notesToPlay[prev_reading].fadeOut(INIT_FADE + fadeFactor); }catch(e){}
			}
		}
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

function TrombUIbuttons(){
    plusT = game.add.sprite(620, 100, 'plus');
    plusT.scale.set(.85, .85);
    plusT.alpha = 0.85;
    plusT.inputEnabled = true;
    plusT.events.onInputDown.add(function(){
    	fadeFactor += 5;
    	fadeText.text = "Fade\nfactor: " + roundIt(fadeFactor);
    	plusT.tint = 0xf04030;
    	setTimeout(function(){plusT.tint = 0xffffff;},100);
    }, this);
    
    minusT = game.add.sprite(525, 100, 'minus');
    minusT.scale.set(.85, .85);
    minusT.alpha = 0.85;
    minusT.inputEnabled = true;
    minusT.events.onInputDown.add(function(){
    	if (INIT_FADE + fadeFactor > 0){
	    	fadeFactor -= 5;
	    	fadeText.text = "Fade\nfactor: " + roundIt(fadeFactor);
	    	minusT.tint = 0xf04030;
	    	setTimeout(function(){minusT.tint = 0xffffff;},100);
    	}
    }, this);
	
    fadeText = game.add.text(530, 30, "Fade\nfactor: " + roundIt(fadeFactor), 
    {font: '22px', fill: 'white'});
}

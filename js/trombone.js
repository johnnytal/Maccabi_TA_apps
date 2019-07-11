var trombMain = function(game){
	oleTriggered = false;

	POINT = 15;
};

trombMain.prototype = {
    create: function(){ 
    	loadHorn();
    	game.stage.backgroundColor = '#0000ff';

    	oleTriggered = false;

    	try{window.addEventListener('deviceorientation', readTrombAccel);}catch(e){}
    }
};

function readTrombAccel(event){
	if (game.state.getCurrentState().key == "Trombone"){
		angleTromb = roundIt(event.beta);
		
		if (angleTromb < POINT && !sfxOle.isPlaying && !sfxOh.isPlaying){
			sfxOh.play();
			oleTriggered = false;
			
			game.stage.backgroundColor = '#0000ff';
		}
		else if (!oleTriggered && angleTromb >= POINT){
			sfxOle.play();
			oleTriggered = true;
			
			game.stage.backgroundColor = '#ffff00';
			
			window.plugins.flashlight.switchOn();
			navigator.vibrate(500);	
			
			setTimeout(function(){
				sfxOh.stop();
			}, 100);
		}
	}
	
	if (!sfxOle.isPlaying && window.plugins.flashlight.isSwitchedOn()){
		window.plugins.flashlight.switchOff();
	}
}

function loadHorn(){
	sfxOh = game.add.audio('ohhh', 1, true);
	sfxOle = game.add.audio('ole', 1, false);
}
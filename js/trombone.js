var trombMain = function(game){
	oleTriggered = false;
};

trombMain.prototype = {
    create: function(){ 
    	loadHorn();
    	game.stage.backgroundColor = '#0f5420';

    	oleTriggered = false;

    	try{window.addEventListener('deviceorientation', readTrombAccel);}catch(e){}
    }
};

function readTrombAccel(event){
	if (game.state.getCurrentState().key == "Trombone"){
		angleTromb = roundIt(event.beta);
		
		if (angleTromb < 0 && !sfxOle.isPlaying){
			sfxOh.play();
			if (oleTriggered){
				oleTriggered = false;
			}
		}
		else if (!oleTriggered && angleTromb >= 0){
			sfxOle.play();
			oleTriggered = true;
			
			setTimeout(function(){
				sfxOh.stop();
			}, 100);
		}
	}
}

function loadHorn(){
	sfxOh = game.add.audio('ohhh', 1, true);
	sfxOle = game.add.audio('ole', 1, false);
}
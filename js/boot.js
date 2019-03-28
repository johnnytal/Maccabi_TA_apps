//window.onload = start;
document.addEventListener("deviceready", start, false);

function start(){
    WIDTH = 720; 
    HEIGHT = 400; 

    game = new Phaser.Game(WIDTH, HEIGHT, Phaser.CANVAS, "container");  

    game.state.add("Boot", boot);
    game.state.add("Preloader", preloader);
    game.state.add("Shaker", shakerMain);
    game.state.add("Trombone", trombMain);
    game.state.add("Visher", visherMain);
    game.state.add("Buttons", btnMain);
    game.state.add("Hot", gameMain);
    
    game.state.start("Boot");  
}

var boot = function(game){};
  
boot.prototype = {
    create: function(){
		loadJson();
		
        if (this.game.device.desktop){
            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        } 
        
        else {
            this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

            this.scale.maxWidth = window.innerWidth * window.devicePixelRatio;
            this.scale.maxHeight = window.innerHeight * window.devicePixelRatio;
            
            this.scale.forceOrientation(true, false);
        }
        
        game.state.start("Preloader"); 
    }
};

function loadJson(){
    trombJson = {
	    spritemap: {
	        1 : { start: 0.02, end: 0.04, loop: false },
	        2 : { start: 0.04, end: 0.06, loop: false },
	        3 : { start: 0.06, end: 0.08, loop: false },
	        4 : { start: 0.08, end: 0.1, loop: false },
	    	5 : { start: 0.1, end: 0.12, loop: false },
	    	6 : { start: 0.12, end: 0.14, loop: false },
	    	7 : { start: 0.14, end: 0.16, loop: false },
	    	8 : { start: 0.16, end: 0.18, loop: false },
	    	9 : { start: 0.18, end: 0.2, loop: false },
	    	10 : { start: 0.2, end: 0.22, loop: false },
	    	11 : { start: 0.22, end: 0.24, loop: false },
	    	12 : { start: 0.24, end: 0.26, loop: false },
	    	13 : { start: 0.26, end: 0.28, loop: false },
	    	14 : { start: 0.28, end: 0.3, loop: false },
	    	15 : { start: 0.3, end: 0.32, loop: false },
	    	16 : { start: 0.32, end: 0.34, loop: false },
	    	17 : { start: 0.34, end: 0.36, loop: false },
	    	18 : { start: 0.36, end: 0.38, loop: false },
	    	19 : { start: 0.38, end: 0.40, loop: false },
	    	20 : { start: 0.40, end: 0.42, loop: false },
	    	21 : { start: 0.42, end: 0.44, loop: false },
	    	22 : { start: 0.44, end: 0.46, loop: false },
	    	23 : { start: 0.46, end: 0.48, loop: false },
	    	24 : { start: 0.48, end: 0.50, loop: false },
    	}
	};
}

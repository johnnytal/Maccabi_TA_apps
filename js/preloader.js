var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){	
		game.load.image('bg', 'assets/images/bg.jpg');
		
        game.load.image('red', 'assets/images/black.png');
        game.load.image('green', 'assets/images/yellow.png');
        game.load.image('blue', 'assets/images/blue.png');
        
        game.load.image('button', "assets/images/large_orange_button.png");
        game.load.image('drag', "assets/images/drag.png");
        
        game.load.image('swipe_r', "assets/images/swipe_r.png");
        game.load.image('swipe_l', "assets/images/swipe_l.png");
        
        game.load.image('tromboneImg', "assets/images/trombone.png");
        
        game.load.image('wiper', "assets/images/wiper.png");
       
        game.load.image('visherBlue', "assets/images/visherBlue.png");
        game.load.image('visherYellow', "assets/images/visherYellow.png");
        
        game.load.image('plus', "assets/images/plus.png");
        game.load.image('minus', "assets/images/minus.png");

        game.load.spritesheet("cont", "assets/images/cont.png", 325/2, 102);
        
        game.load.audio("note1", "assets/audio/note1.mp3");
        game.load.audio("note2", "assets/audio/note2.mp3");
        game.load.audio("note3", "assets/audio/note3.mp3");
        
        game.load.audio("hu", "assets/audio/hu.ogg");
        game.load.audio("ha", "assets/audio/ha.ogg");
        
        game.load.audio("choose", "assets/audio/choose.mp3");
        
        game.load.audio("front", "assets/audio/front.mp3");
        game.load.audio("back", "assets/audio/back.mp3");
        
        //game.load.audio("trombone", "assets/audio/trombone.mp3");
        
        game.load.audio("HO_stac_mf2_A2", "assets/HO_stac_mf2/HO_stac_mf2_A2.mp3");
        game.load.audio("HO_stac_mf2_A3", "assets/HO_stac_mf2/HO_stac_mf2_A3.mp3");
        game.load.audio("HO_stac_mf2_A4", "assets/HO_stac_mf2/HO_stac_mf2_A4.mp3");
        game.load.audio("HO_stac_mf2_B1", "assets/HO_stac_mf2/HO_stac_mf2_B1.mp3");
        game.load.audio("HO_stac_mf2_B2", "assets/HO_stac_mf2/HO_stac_mf2_B2.mp3");
        game.load.audio("HO_stac_mf2_B3", "assets/HO_stac_mf2/HO_stac_mf2_B3.mp3");
        game.load.audio("HO_stac_mf2_B4", "assets/HO_stac_mf2/HO_stac_mf2_B4.mp3");
        game.load.audio("HO_stac_mf2_C_2", "assets/HO_stac_mf2/HO_stac_mf2_C_2.mp3");
        game.load.audio("HO_stac_mf2_C_3", "assets/HO_stac_mf2/HO_stac_mf2_C_3.mp3");
        game.load.audio("HO_stac_mf2_C_4", "assets/HO_stac_mf2/HO_stac_mf2_C_4.mp3");
        game.load.audio("HO_stac_mf2_C2", "assets/HO_stac_mf2/HO_stac_mf2_C2.mp3");
        game.load.audio("HO_stac_mf2_D_2", "assets/HO_stac_mf2/HO_stac_mf2_D_2.mp3");
        game.load.audio("HO_stac_mf2_D_3", "assets/HO_stac_mf2/HO_stac_mf2_D_3.mp3");
        game.load.audio("HO_stac_mf2_D_4", "assets/HO_stac_mf2/HO_stac_mf2_D_4.mp3");
        game.load.audio("HO_stac_mf2_D2", "assets/HO_stac_mf2/HO_stac_mf2_D2.mp3");
        game.load.audio("HO_stac_mf2_E2", "assets/HO_stac_mf2/HO_stac_mf2_E2.mp3");
        game.load.audio("HO_stac_mf2_F_2", "assets/HO_stac_mf2/HO_stac_mf2_F_2.mp3");
        game.load.audio("HO_stac_mf2_F2", "assets/HO_stac_mf2/HO_stac_mf2_F2.mp3");
        game.load.audio("HO_stac_mf2_F3", "assets/HO_stac_mf2/HO_stac_mf2_F3.mp3");
        game.load.audio("HO_stac_mf2_F4", "assets/HO_stac_mf2/HO_stac_mf2_F4.mp3");
        game.load.audio("HO_stac_mf2_G_2", "assets/HO_stac_mf2/HO_stac_mf2_G_2.mp3");
        game.load.audio("HO_stac_mf2_G2", "assets/HO_stac_mf2/HO_stac_mf2_G2.mp3");
        game.load.audio("HO_stac_mf2_G3", "assets/HO_stac_mf2/HO_stac_mf2_G3.mp3");
        game.load.audio("HO_stac_mf2_G4", "assets/HO_stac_mf2/HO_stac_mf2_G4.mp3");
    },
    
    create: function(){		        
		loadSounds();
		initPlugIns();
		UIbuttons();
		
        this.game.state.start("Buttons"); 
    }
};
3
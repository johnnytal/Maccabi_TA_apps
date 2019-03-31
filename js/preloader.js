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
        
        //game.load.audio("front", "assets/audio/front.mp3");
        //game.load.audio("back", "assets/audio/back.mp3");

        game.load.audio("B1", "assets/HO_stac_mf2/HO-L_oV_nA_sus_mf_B1.mp3");
        game.load.audio("C_2", "assets/HO_stac_mf2/HO-L_oV_nA_sus_mf_C_2.mp3");
        game.load.audio("C2", "assets/HO_stac_mf2/HO-L_oV_nA_sus_mf_C2.mp3");
        game.load.audio("D_2", "assets/HO_stac_mf2/HO-L_oV_nA_sus_mf_D_2.mp3");
        game.load.audio("D2", "assets/HO_stac_mf2/HO-L_oV_nA_sus_mf_D2.mp3");
        game.load.audio("E2", "assets/HO_stac_mf2/HO-L_oV_nA_sus_mf_E2.mp3");
        game.load.audio("F2", "assets/HO_stac_mf2/HO-L_oV_nA_sus_mf_F2.mp3");
        game.load.audio("G2", "assets/HO_stac_mf2/HO-L_oV_nA_sus_mf_G2.mp3");
        
        nativeAudio.preloadSimple('front', 'assets/audio/front.mp3');
        nativeAudio.preloadSimple('back', 'assets/audio/back.mp3');
    },
    
    create: function(){		        
		loadSounds();
		initPlugIns();
		UIbuttons();
		
        this.game.state.start("Buttons"); 
    }
};
3
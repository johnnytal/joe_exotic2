var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
    	progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px', fill: 'black', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 100,  this.game.world.centerY - 150, "Getting Joe ready...", {
            font: '32px', fill: 'darkblue', align: 'center'
        });
        
        this.game.load.audio('music1', 'assets/trump_corona/audio/music1.ogg');
        this.game.load.audio('music2', 'assets/trump_corona/audio/music2.ogg');
        this.game.load.audio('music3', 'assets/trump_corona/audio/music3.ogg');
        
        this.game.load.audio('trump1', 'assets/trump_corona/audio/america.ogg');
        this.game.load.audio('trump2', 'assets/trump_corona/audio/arm.ogg');
        this.game.load.audio('trump3', 'assets/trump_corona/audio/broke.ogg');
        this.game.load.audio('trump4', 'assets/trump_corona/audio/carol.ogg');
        this.game.load.audio('trump5', 'assets/trump_corona/audio/cats.ogg');
        this.game.load.audio('trump6', 'assets/trump_corona/audio/coke.ogg');
        this.game.load.audio('trump7', 'assets/trump_corona/audio/florida.ogg');
        this.game.load.audio('trump8', 'assets/trump_corona/audio/gay.ogg');
        this.game.load.audio('trump9', 'assets/trump_corona/audio/husband.ogg');
        this.game.load.audio('trump10', 'assets/trump_corona/audio/isis.ogg');
        this.game.load.audio('trump11', 'assets/trump_corona/audio/kinky.ogg');
        this.game.load.audio('trump12', 'assets/trump_corona/audio/lady.ogg');
        
        this.game.load.image("bg", "assets/trump_corona/images/Joe_Exotic.png");
        this.game.load.spritesheet("button", "assets/trump_corona/images/button4.png", 486/2, 185);
        this.game.load.image("gear", "assets/trump_corona/images/gearBtn2.png");
        this.game.load.image("ok", "assets/trump_corona/images/ok.png");
        this.game.load.image("musicBtn", "assets/trump_corona/images/musicBtn.png");
        this.game.load.image("panel", "assets/trump_corona/images/panel.png");  
    },
    
    create: function(){
        this.game.state.start("Game");  
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};
let MiniGame = cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        bgAll: cc.Node,
        BG: cc.Node,
        ICON: cc.Node
    },
    statics: {
        inst:  null,
    },
    onLoad(){
        MiniGame.inst = this;
        window.MiniGame = this;
        this.BG.active = false;
        this.node.zIndex = cc.lastZIndex+1;
        this.ICON.active  = false;
        this.bgAll.active = false;
    },
    showIcon(){
        this.ICON.active = true;
    },
    eventClickMini(event){
        let target = event.target;
        let move = target.getComponent("Move");
        if(move && move.isMove()){
            move._isMove = false;
            return;
        }

        let BG = this.BG.active;
        if(!BG){
            this.showGames();
        }else{
            this.hideGames();
        }
    },
    showGames(){
        this.BG.active    = true;
        this.bgAll.active  = true;

        let rotation    = cc.rotateBy(0.6, 8*360);
        let scaleBig    = cc.scaleTo(0.4, 1.1);
        let scaleSmall  = cc.scaleTo(0.2, 1);
        let fadeIn      = cc.fadeIn(0.6);
        let hideBg     = cc.fadeIn(0.6);

        this.BG.opacity    = 0;
        this.bgAll.opacity = 0;
        this.BG.scale      = 0;
        let spawn1         = cc.spawn(rotation, scaleBig, fadeIn, cc.sequence(cc.delayTime(0.4), scaleSmall));
        this.bgAll.runAction(hideBg);
        this.BG.runAction(spawn1);
    },
    hideGames(){
        let rotation    = cc.rotateBy(0.6, 8*360);
        let scaleBig    = cc.scaleTo(0.2, 1.1);
        let scaleSmall  = cc.scaleTo(0.4, 0);
        let fadeout     = cc.fadeIn(0.6);
        let hideBg      = cc.fadeIn(0.6);
        let spawn1      = cc.spawn(rotation, scaleBig, fadeout, cc.sequence(cc.delayTime(0.2), scaleSmall));
        let self        = this;
        this.bgAll.runAction(hideBg);
        this.BG.runAction(cc.sequence(spawn1, cc.callFunc(function(){
            self.BG.active      = false;
            self.bgAll.active   = false;
        })));
    },
    onSelectGame(event, game){
        this.hideGames();
        if(mm.isLogin) {
           let gameController = PortalManager.getGameController(game);
           if(gameController){
               mm.Loading.show();
               gameController.loginZone(Config.getUsername(), Config.getPass());
           }
        }else{
            this.show("UILogin", {pop: true});
        }

    }
});

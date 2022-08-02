cc.Player = cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        emoijNode : cc.Node,
        state : cc.Node,
        Status: cc.Node,
        avatar: cc.Node,
        progressBar: cc.ProgressBar,
        sp_avatar: cc.Sprite,
        _tick: 0,
        _desk: null,
        _totalTimeProgress: 30,
        _remainTurnTime: 30,
        _timeWarning: 5,
        _cbCompleteProgress: null,
        _cbWarning: null,
        _isWarning: false,
        lb_name: cc.Label,
        lb_money: cc.Label,
        SitOut: cc.Node,
        MoneyWin: cc.Label,
        zoneName: "portal"
    },
    onLoad(){
        // set default
        this._totalTimeProgress = 30;
        this._remainTurnTime = this._totalTimeProgress;
        this._timeWarning = 5;
        this._tick = 0;
    },
    onEnable(){
        this.zoneName = "portal";
        this.state.active = false;
        this.Status.active = false;
        this.SitOut.active = false;
        if(cc.isValid(this.MoneyWin))
            this.MoneyWin.active = false;
    },
    showMoneyWinEffect(money) {
        if (money > 0){
            this.showWinEffect();
            this.showMoneyWin(money);
        }else {
            this.showMoneyWin(money);
        }
    },
    showMoneyWin(money, cb){
        let pre = money > 0 ? "+" : "-";
        this.MoneyWin.string = pre + ""+Utils.addDotToNumber(Math.abs(money));
        this.MoneyWin.node.active = true;
        this.MoneyWin.node.stopAllActions();
        this.MoneyWin.node.position = cc.v2(0, 20);
        let nodeTo           = cc.v2(0, 120);
        let self = this;
        this.MoneyWin.node.runAction(cc.sequence(cc.moveTo(1, nodeTo).easing(cc.easeOut(0.5)), cc.delayTime(2), cc.callFunc(function () {
            self.MoneyWin.string      = 0;
            self.MoneyWin.node.active = false;
            if (cb)
                cb();
        })));
    },
    setDesk(desk){
        this.turnOffTimer();
        this._desk = desk;
        this.updateDeskInfo();
    },
    showWinEffect(){
        mm.audio.playWin();
        this.node.getChildByName("PokerWinEffect").active = true;
        let win1 = this.node.getChildByName("PokerWinEffect").getChildByName("Win1");
        let animation1 = win1.getComponent(sp.Skeleton);
        animation1.setAnimation(0,"Idle", true);

        let win2 = this.node.getChildByName("PokerWinEffect").getChildByName("Win2");
        let animation2 = win2.getComponent(sp.Skeleton);
        animation2.setAnimation(0,"Idle", true);

        this.node.getChildByName("thang-text").active = true;
    },
    hideWinEffect(){
        let win1 = this.node.getChildByName("PokerWinEffect").getChildByName("Win1");
        let animation1 = win1.getComponent(sp.Skeleton);
        animation1.setAnimation(0,"NONE", false);

        let win2 = this.node.getChildByName("PokerWinEffect").getChildByName("Win2");
        let animation2 = win2.getComponent(sp.Skeleton);
        animation2.setAnimation(0,"NONE", false);

        this.node.getChildByName("PokerWinEffect").active = false;
        this.node.getChildByName("thang-text").active = false;
    },
    updateDeskInfo(){
        if(this._desk){
            this.setNameDisplay(this._desk.displayName);
            this.setMoney(this._desk.UserChip);
            // update Avatar
            if(this.isItMe()){
                Utils.loadRes(this.sp_avatar, "images/avatar/"+Config.getDefaultAvatar());
            }else{
                Utils.loadRes(this.sp_avatar, "images/avatar/"+(this._desk.DeskId +1));
            }
        }
    },
    getDesk(){
        return this._desk;
    },
    isItMe(){
        if(this._desk.UserName == PortalManager.getGameController(this.zoneName).ZoneInstance.mySelf.name){
            return true;
        }
        return false;
    },
    setNameDisplay(name){
        this.lb_name.string = (name == undefined || name == null) ? "Guest" : Utils.formatText(name, 12);
    },
    setMoney(money){
        // this.lb_money.string = Utils.formatCurrency(money);
        this.lb_money.string = Utils.addDotToNumber(money);
    },
    addEventTimerComplete(cb){
        this._cbCompleteProgress = cb;
    },
    addEventTimerWarning(cb){
        this._cbWarning = cb;
    },
    setTimeWarning(timeWarning){
        this._timeWarning = timeWarning
    },
    setCurrentProgress(currentTime){
        this._remainTurnTime = currentTime;
    },
    setTotalProgress(totalTime){
        this._totalTimeProgress = totalTime;
    },
    setSitOut(isSitOut){
        this.SitOut.active = isSitOut;
    },
    turnOnTimer(){
        this.turnOffTimer();
        this.progressBar.node.active = true;
        this.progressBar.progress = 0;
        this._tick = this._remainTurnTime * 1000  + Date.now();
        this.unschedule(this.updateTimer, 0.1);
        this.schedule(this.updateTimer, 0.1);
    },
    turnOffTimer(){
        this._cbCompleteProgress = null;
        this._cbWarning = null;
        this._isWarning = false;
        this.progressBar.node.active = false;
        this.unschedule(this.updateTimer, 0.1);
    },
    updateTimer(dt){
        let newTick = (this._totalTimeProgress * 1000 + Date.now() - this._tick) / 1000;
        if(newTick <= this._totalTimeProgress){
            this.progressBar.progress = newTick /this._totalTimeProgress;
            if(!this._isWarning && (this._totalTimeProgress - newTick) <= this._timeWarning){
                this._isWarning = true;
                if(this._cbWarning)
                    this._cbWarning();
            }
        }else{
            if(this._cbCompleteProgress)
                this._cbCompleteProgress();
            this.turnOffTimer();
        }
    },
    updatePosHand(){

    },
    onPreStartEvent(preStartRes){
        this.reset();
    },
    onStartEvent(startEvent){

    },
    onTurnEvent(userTurnRes){

    },
    onFoldEvent(userFoldRes){

    },
    reset(){
        this.MoneyWin.node.active = false;
        this.state.active = false;
        this.Status.active = false;
        this.hideWinEffect();
    },
    onPublicMessage(msgItem){
        if (this.emoijNode != undefined){
            let self    = this;
            let isEmoij = msgItem.indexOf("emoij_") >= 0;
            let emojiNode = this.emoijNode.getChildByName("EMOJ");
            let boxNode   = this.emoijNode.getChildByName("box");
            emojiNode.active = false;
            boxNode.active   = false;
            if (isEmoij){
                emojiNode.active   = true;
                emojiNode.opacity  = 255;
                let type = msgItem.replace("emoij_", "");
                emojiNode.stopAllActions();
                emojiNode.getComponent(sp.Skeleton).setAnimation(0, type, false);
                emojiNode.runAction(cc.sequence(cc.delayTime(1.5), cc.fadeOut(2), cc.callFunc(function () {
                    emojiNode.active = false;
                })));
            }else {
                boxNode.active   = true;
                boxNode.opacity  = 255;
                boxNode.stopAllActions();
                boxNode.getChildByName("lb_chat").getComponent(cc.Label).string = msgItem;
                boxNode.getComponent(cc.Layout).updateLayout();
                boxNode.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(2), cc.callFunc(function () {
                    boxNode.active = false;
                })));
            }
        }
    },
});

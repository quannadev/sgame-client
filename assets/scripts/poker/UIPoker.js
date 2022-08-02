cc.Class({
    extends: cc.BaseGame,

    properties: {
        ChatEmojiLayer: cc.Node,
        Action: cc.Node,
        CommunityCard: cc.Node,
        lb_total_bet: cc.Label,
        PokerTextWinner: cc.Node,
        PotPrefab: cc.Prefab,
        buy_in: 0,
        bet: 500,
        POS_6: cc.Node,
        POS_9: cc.Node,
    },
    onLoad(){
        // init prefab pot
        this.PoolPot = [];
        for(let i = 0; i < 9;i++){
            let pot = cc.instantiate(this.PotPrefab);
            this.node.addChild(pot);
            pot.active = false;
            this.PoolPot.push(pot);
        }
    },
    onEnable(){
        this.buy_in = this._data.buy_in;
        this._number_desk = this._data.number_desk;
        this._room = this._data.room;
        this.poses = [];
        if(this._number_desk == 6){
            this.POS_6.active = true;
            this.POS_9.active = false;
            this._CURRENT_POS = this.POS_6;
        }else {
            this.POS_6.active = false;
            this.POS_9.active = true;
            this._CURRENT_POS = this.POS_9;
        }
        for(let i = 0; i < this._CURRENT_POS._children.length;i++){
            let pos = this._CURRENT_POS._children[i];
            this.poses.push(this._CURRENT_POS._children[i]);
            pos.on("touchend", function () {
                this.requestSitOn();
            }, this);
            pos.active = false;
        }
        this.countOut = 0;
    },
    onDisable(){
        this.nodePlayers.removeAllChildren(true);
        this.getCommunityCard().reset();
        this.hideDeskEmpty();
        this.lb_total_bet.node.parent.active = false;
        this.hidePokerTextWinner();
        this.WaitingTimer.active = false;
    },
    runActionChipToPot(betChip, cb){
        if(betChip <= 0){
            if(cb)
                cb();
            return;
        }
        for(let i = 0; i < this.controller.m_tableInfo.m_listUser.length;i++){
            let player = this._getJSPlayerByName(this.controller.m_tableInfo.m_listUser[i]);
            let convertPosBet = this.getPositionInOtherNode(player.BetChip, this.node);
            let pot = this.requestPoolPot();
            pot.position = convertPosBet;
            pot.active = true;
            pot.getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(betChip);
            pot.runAction(cc.sequence(cc.moveTo(0.3, this.lb_total_bet.node.parent.position), cc.callFunc(function () {
                this.active = false;
                if(cb)
                    cb();
            }, pot)))
        }
    },
    hidePokerTextWinner(){
        this.PokerTextWinner.active = false;
        let animation = this.PokerTextWinner.getComponent(sp.Skeleton);
        animation.setAnimation(0, "NONE", false);
    },
    showPokerTextWinner(nameWin){
        let winningHands = {
            HIGHCARD : "Bai-Cao",
            PAIR: "Mot-Doi",
            TWOPAIR: "Hai-Doi",
            THREEOFAKIND: "Xam",
            STRAIGHT: "Sanh",
            FLUSH: "Thung",
            FULLHOUSE: "Cu-Lu",
            FOUROFAKIND: "Tu-Quy",
            STRAIGHTFLUSH: "Sanh-Thung",
            ROYALFLUSH: "Thung_Pha-Sanh"
        }
        this.PokerTextWinner.active = true;
        let animation = this.PokerTextWinner.getComponent(sp.Skeleton);
        if(nameWin == "Sanh-Thung"){
            animation.setAnimation(0, "Sanh", false);
            animation.setAnimation(1, "Thung", false);
        }else if(winningHands[nameWin]){
            animation.setAnimation(0, winningHands[nameWin], true);
        }else{
            this.PokerTextWinner.active = false;
        }

    },
    eventBack(){
        if(!this.controller.m_tableInfo.m_isGameStart || this.controller.m_tableInfo.m_listActiveUserName.length <= 1){
           this.requestLeaveRoom();
        }else{
            let isSitOut = true;
            if(this.controller.m_tableInfo.m_listUserSitOut.indexOf(SmartFoxSDK.PokerController.ZoneInstance.mySelf.name) >= 0){
                isSitOut = false;
            }
            let sitOutRequest = new PokerRequest.SitOutRequest();
            sitOutRequest.setRoomId(this._room.id);
            sitOutRequest.setSitOut(isSitOut);
            SmartFoxSDK.PokerController.ZoneInstance.send(sitOutRequest.toSRequest());
        }
    },
    requestSitOn(){
        let myName = SmartFoxSDK.PokerController.ZoneInstance.mySelf.name;
        if(this._getJSPlayerByName(myName) == null){
            let sitOnRequest = new PokerRequest.SitOnRequest().setRoomId(this._room.id).setAutoSitOn().setBuyIn(this.buy_in);
            SmartFoxSDK.PokerController.ZoneInstance.send(sitOnRequest.toSRequest());
            this.hideDeskEmpty();
        }
    },
    getCommunityCard(){
        return this.CommunityCard.getComponent(this.CommunityCard.name);
    },
    getAction(){
        return this.Action.getComponent(this.Action.name);
    },
    setMoneyPot(money){
        if(money > 0){
            this.lb_total_bet.string = Utils.formatCurrency(money);
            this.lb_total_bet.node.parent.active = true;
        }else{
            this.lb_total_bet.node.parent.active = false;
        }
    },
    processBetChipToPot(cb){
        let betChip = 0;
        // sum all pot of user to total pot
        for(let i = 0; i < this.controller.m_tableInfo.m_listDesk.length;i++){
            let desk = this.controller.m_tableInfo.m_listDesk[i];
            let player = this._getJSPlayerById(desk.DeskId);
            if(player){
                betChip = player.m_total_bet;
                this.controller.m_tableInfo.m_potChip += player.m_total_bet;
                // reset bet of user
                player.resetBet();
            }

        }
        // action sum all pot of user to total pot
        this.runActionChipToPot(betChip, function () {
            this.lb_total_bet.string = Utils.formatCurrency(this.controller.m_tableInfo.m_potChip);
            this.lb_total_bet.node.parent.active = true;
            if(cb){
                cb();
            }
        }.bind(this));
    },
    requestPoolPot(){
        for(let i  = 0; i < this.PoolPot.length;i++){
            if(!this.PoolPot[i].active){
                this.PoolPot[i].active = true;
                return this.PoolPot[i];
            }
        }
        let pot = cc.instantiate(this.PotPrefab);
        this.node.addChild(pot);
        this.PoolPot.push(pot);
        return pot;
    },
    runActionPotChipToWinner(moneyWin , winner, cb, target){
        let player = this._getJSPlayerByName(winner);
        if(player){
            let pot = this.requestPoolPot();
            let self = this;
            let convertPosBet = this.getPositionInOtherNode(player.BetChip, this.node);
            pot.position = this.lb_total_bet.node.parent.position;
            pot.getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(moneyWin);
            pot.runAction(cc.sequence(cc.moveTo(0.5, convertPosBet), cc.callFunc(function () {
                this.active = false;
                self.lb_total_bet.node.parent.active = false;
                if(cb)
                    cb(moneyWin, target);
            }, pot)))
        }
    },
    eventShowChat(event, data) {
        this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
        if (this.ChatEmojiLayer.active)
            this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.PokerController.ZoneInstance);
    },
    onPublicMessage(messData) {
        let playerJs = this._getJSPlayerByName(messData.sender.name);
        if(playerJs != null){
            playerJs.onPublicMessage(messData.msg)
        }
    },
    updateUserVariable(subChip){
        let jsPlayer    = this._getJSPlayerByName(SmartFoxSDK.PokerController.ZoneInstance.mySelf.name);
        jsPlayer.setMoney(GameVariables.Poker.getChip(SmartFoxSDK.PokerController.ZoneInstance.mySelf)-subChip)
    },
});

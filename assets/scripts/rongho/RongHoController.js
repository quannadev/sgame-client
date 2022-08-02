let RongHoEvent = require('RongHoEvent')
let RongHoController = SmartFoxSDK.BaseController.extend({
    m_tableInfo : null,
    registerEvents(){
        this._super();
        this.ZoneInstance.addEventListenerExtension(RongHoEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
        this.ZoneInstance.addEventListenerExtension(RongHoEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
        this.ZoneInstance.addEventListenerExtension(RongHoEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
    },
    removeEvents(){
        this._super();
        this.ZoneInstance.removeEventListenerExtension(RongHoEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
        this.ZoneInstance.removeEventListenerExtension(RongHoEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
        this.ZoneInstance.removeEventListenerExtension(RongHoEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
    },
    onHistoryEvent(event){
        let history = new RongHoEvent.HistoryEvent().fromEvent(event);
        this.getUI().show("UIRongHoTransaction", {pop: true, src: 'rongho', data: {items: history.items}});
    },
    onLeaderBoardEvent(event){
        let rank = new RongHoEvent.LeaderBoardEvent().fromEvent(event);
        this.getUI().show("UIRongHoRank", {pop: true, src: 'rongho', data: {items: rank.items}});
    },
    onEventLogin(event){
        this._super(event);
        this._requestJoinRoom(this.zoneName);
    },
    onEventRoomJoin(event){
        this._super(event);
        if(this.getUI())
            this.getUI().updateUserCount();
    },
    onEventUserEnterRoom(event){
        this._super(event);
        let user = event.user;
        if(this.getUI()){
            this.getUI().updateUserCount();
            this.getUI().addNodePlayerEnterRoom(user);
        }
    },
    onEventUserExitRoom(event){
        let user = event.user;
        if(user.isItMe){
            if (this.getUI() != null)
                this.getUI().node.active = false;
            UIManger.show("UIHome");
        }else{
            if(this.getUI()){
                this.getUI().updateUserCount();
                this.getUI().removeNodePlayer(user);
            }
        }
    },
    onLoadGameEvent(event){
        this.preLoadUI({pop: true},function () {
            this.m_tableInfo = new RongHoEvent.LoadGameEvent().fromEvent(event);
            this.getUI().controller = this;
            cc.lastTime      = this.m_tableInfo.time + new Date().getTime()/1000;
            this.getUI().resetBetRongHo();
            this.resumeGame();
        }.bind(this))
    },
    resumeGame() {
        if (this.m_tableInfo != null) {
            this.m_tableInfo.time = Math.floor(cc.lastTime - new Date().getTime() / 1000);
            this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
            this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
            let users = [];
            users.push(this.ZoneInstance.mySelf);
            for (let i = 0; i < this.getRoom().getUserList().length; i++) {
                let u = this.getRoom().getUserList()[i];
                if (u.name != this.ZoneInstance.mySelf.name && users.length < 6) {
                    users.push(u);
                }
            }
            this.getUI().showListUsers(users);
            if (this.m_tableInfo.isBetting) {
                this.getUI()._stopEffectWinPot();
                this.getUI().ToastDatCua();
                this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.isBetting);
            } else {
                this.getUI()._turnOffTime();
                this.getUI().xocxoc(this.m_tableInfo.result, this.m_tableInfo.winpot, this.m_tableInfo.isWin);
            }
        }
    },
    onUserBetEvent(event){
        let userBet = new RongHoEvent.BetEvent().fromEvent(event);
        let userName = userBet.userName;
        let betChip = userBet.betChip;
        let typePot = userBet.typePot;

        this.m_tableInfo.listChipPot[typePot] += betChip;
        this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
        if(this.ZoneInstance.mySelf.name == userName){
            this.m_tableInfo.listMyChipPot[typePot] += betChip;
            this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
        }
        this.getUI().actionFlyChipToPot(userName, typePot, betChip);
        // user bet
        let user = this.getRoom().getUserByName(userName);
        if(user)
            this.getUI().updateChip(user);
    },
    onEndBettingEvent(event){
        let endBetting = new RongHoEvent.EndBetting().fromEvent(event);
        this.m_tableInfo.isBetting = false;
        this.m_tableInfo.result  = endBetting.result;
        this.m_tableInfo.winpot  = endBetting.winpot;
        this.m_tableInfo.winChip = endBetting.winChip;
        this.getUI()._turnOffTime();
        this.getUI().xocxoc(endBetting.result, endBetting.winpot,  endBetting.winChip > 0 ? true : false);
    },
    onPublicMessage(event){
        let sender = event.sender;
        let msg = event.message;
        let data = event.data;
        let dataSender = data != null ? {dn: data.get("dn"), fb : data.get("fb")} : {dn: "...", fb : ""};
        let msgItem = {};
        msgItem.sender = sender;
        msgItem.msg = msg;
        msgItem.dataSender = dataSender;
        this.getUI().onPublicMessage(msgItem);
    },
});
let instance = null;
let getInstance = function () {
    if(instance == null)
        instance = new RongHoController('UIRongHo', 'rongho');
    return instance;
}
SmartFoxSDK.RongHoController = module.exports = getInstance();

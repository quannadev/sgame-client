let RouletteEvent = require('RouletteEvent')
let RouletteController = SmartFoxSDK.BaseController.extend({
    m_tableInfo : null,
    registerEvents(){
        this._super();
        this.ZoneInstance.addEventListenerExtension(RouletteEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
        this.ZoneInstance.addEventListenerExtension(RouletteEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
        this.ZoneInstance.addEventListenerExtension(RouletteEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
        this.ZoneInstance.addEventListenerExtension(RouletteEvent.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
    },
    removeEvents(){
        this._super();
        this.ZoneInstance.removeEventListenerExtension(RouletteEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
        this.ZoneInstance.removeEventListenerExtension(RouletteEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
        this.ZoneInstance.removeEventListenerExtension(RouletteEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
        this.ZoneInstance.removeEventListenerExtension(RouletteEvent.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
    },
    onEventLogin(event){
        this._super(event);
        this._requestJoinRoom(this.zoneName);
    },
    onEventUserExitRoom(event){
        let user = event.user;
        if(user.isItMe){
            if (this.getUI() != null)
                this.getUI().node.active = false;
            UIManger.show("UIHome");
        }
    },
    onLoadGameEvent(event){
        this.preLoadUI({pop: true},function () {
            this.m_tableInfo = new RouletteEvent.LoadGameEvent().fromEvent(event);
            this.getUI().hideAll();
            let users = [];
            users.push(this.ZoneInstance.mySelf);
            for(let i = 0; i < this.getRoom().getUserList().length;i++){
                let u = this.getRoom().getUserList()[i];
                if(u.name != this.ZoneInstance.mySelf.name && users.length < 6){
                    users.push(u);
                }
            }
            this.getUI().showListUsers(users);
            if(this.m_tableInfo.isBetting){
                this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);
                this.getUI().showNoti("Bắt đầu cược");
            }else{
                this.getUI()._turnOffTime();
                this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);
                this.getUI().resumeGame( this.m_tableInfo.winpot, this.m_tableInfo.time, this.m_tableInfo.usersOnboard, this.m_tableInfo.chipUserOnBoard, this.m_tableInfo.result,  this.m_tableInfo.winChip);
            }
            this.getUI().updateTotalBet(this.m_tableInfo.totalUserBet);
            this.getUI().addChipToPot(this.m_tableInfo.listTypePotBet, this.m_tableInfo.listMyChipPot);
        }.bind(this))
    },
    onUserBetEvent(event){
        let userBet = new RouletteEvent.BetEvent().fromEvent(event);
        let userName = userBet.userName;
        let betChip = userBet.betChip;
        let typePot = userBet.typePot;
        let totalBet= userBet.totalBet;
        if(this.ZoneInstance.mySelf.name == userName){
            this.getUI().updateListChipBet(userBet.typePot, userBet.betChip);
        }
        this.getUI().updateTotalBet(totalBet);
        this.getUI().runActionChangeMoney(userName, -betChip, 1);
        this.getUI().actionFlyChipToPot(userName, typePot, betChip);
        let user = this.getRoom().getUserByName(userName);
        if(user)
            this.getUI().updateChip(user);
    },
    onEndBettingEvent(event){
        let endBetting = new RouletteEvent.EndBetting().fromEvent(event);
        this.m_tableInfo.isBetting       = false;
        this.m_tableInfo.chipUserOnBoard = endBetting.chipUserOnBoard;
        this.m_tableInfo.usersOnboard    = endBetting.usersOnboard;
        this.m_tableInfo.winpot          = endBetting.winpot;
        this.m_tableInfo.winChip         = endBetting.winChip;
        this.m_tableInfo.result          = endBetting.result;
        this.getUI()._turnOffTime();
        this.getUI()._turnOnTime(20, 20, this.m_tableInfo.isBetting);
        this.getUI().showNoti("Kết thúc cược!");
        this.getUI().showResult(this.m_tableInfo.result);
    },
    onHistoryResultEvent(event){
        let history = new RouletteEvent.HistoryResponse().fromEvent(event);
        this.getUI().showSoiCau(history.result);
    },
    onHistoryEvent(event){
        let historyEvent = new RouletteEvent.HistoryEvent().fromEvent(event);
        this.getUI().show("UIRouletteTransaction", {pop: true, src: 'roulette', data: {items: historyEvent.items}});
    },
    onLeaderBoardEvent(event){
        let leaderBoardEvent = new RouletteEvent.LeaderBoardEvent().fromEvent(event);
        this.getUI().show("UIRouletteRank", {pop: true, src: 'roulette', data: {items: leaderBoardEvent.items}});
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
        instance = new RouletteController('UIRoulette', 'roulette');
    return instance;
}
SmartFoxSDK.RouletteController = module.exports = getInstance();

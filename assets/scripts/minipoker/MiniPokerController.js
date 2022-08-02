let MiniPokerEvent = require('MiniPokerEvent')
let MiniPokerController = SmartFoxSDK.BaseController.extend({
    m_tableInfo: null,
    registerEvents(){
        this._super();
        this.ZoneInstance.addEventListenerExtension(MiniPokerEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    },
    removeEvents(){
        this._super();
        this.ZoneInstance.removeEventListenerExtension(MiniPokerEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    },
    onEventLogin(event){
        this._super(event);
        this._requestJoinRoom(this.zoneName);
    },
    onHistoryEvent(event){
        let data = event.getSArray("d");
        let items = [];
        for(let i = 0; i < data.size(); i++){
            let sItem = data.get(i).getObject();
            let item = {};
            item.session = sItem.getDouble("id");
            item.time = sItem.getUtfString("t");
            item.stakes = sItem.getDouble("b");
            item.win = sItem.getDouble("w");
            item.resultMap = sItem.getByteArray("rs");
            item.linewin = sItem.getByteArray("lw");
            items.push(item);
        }
        UIManger.show("UIMiniPokerTransaction", {pop: true, src: 'minipoker', data: {items: items}});
    },
    onLeaderBoardEvent(event){

        let data = event.getSArray("d");
        let items = [];
        for(let i = 0;i < data.size();i++){
            let sItem = data.get(i).getObject();
            let item = {};
            item.session = i+1;
            item.account = sItem.getUtfString("dn");
            item.win = sItem.getDouble("m");
            item.time = sItem.getUtfString("t");
            item.win_type = "Thắng";
            items.push(item);
        }
        UIManger.show("UIMiniPokerRank", {pop: true, src: 'minipoker', data: {items: items}});
    },
    onEventUserExitRoom(event){
        let user = event.user;
        if(user.isItMe){
            cc.currentUI  = "";
            mm.Loading.hide();
            this.getUI().back();
        }
    },
    onEventRoomJoin(user){
        this.preLoadUI({pop: true}, function () {
            // load user finish
        }.bind(this))
    },
    onUserBetEvent(event){
        if(this.getUI() == null)
            return;
        let userBet = new MiniPokerEvent.BetEvent().fromEvent(event);
        this.getUI().MiniPokerRun(userBet);
    },

});
let instance = null;
let getInstance = function () {
    if(instance == null)
        instance = new MiniPokerController("UIMiniPoker", "minipoker");
    return instance;
}
SmartFoxSDK.MiniPokerController = module.exports = getInstance();

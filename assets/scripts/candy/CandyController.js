let CandyEvent = require('CandyEvent')
let CandyController = SmartFoxSDK.BaseController.extend({
    m_tableInfo: null,
    registerEvents(){
        this._super();
        this.ZoneInstance.addEventListenerExtension(CandyEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    },
    removeEvents(){
        this._super();
        this.ZoneInstance.removeEventListenerExtension(CandyEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
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
            item.session = sItem.getDouble("id").toFixed(0);
            item.time = sItem.getUtfString("t");
            item.stakes = sItem.getDouble("b");
            item.win = sItem.getDouble("w");
            item.resultMap = sItem.getByteArray("rs");
            item.linewin = sItem.getByteArray("lw");
            items.push(item);
        }
        UIManger.show("UICandyTransaction", {pop: true, src: 'candy', data: {items: items}});
    },
    onLeaderBoardEvent(event){
        let data = event.getSArray("d");
        let items = [];
        for(let i = 0;i < data.size();i++){
            let sItem = data.get(i).getObject();
            let item = {};
            item.session = i;
            item.account = sItem.getUtfString("dn");
            item.win = sItem.getDouble("m");
            item.time = sItem.getUtfString("t");
            item.win_type = "Thắng";
            items.push(item);
        }
        UIManger.show("UICandyRank", {pop: true, src: 'candy', data: {items: items}});
    },
    onEventRoomJoin(event){
        this._super(event);
        this.preLoadUI({pop: true}, function () {
            // load user finish
        }.bind(this))
    },
    onEventUserExitRoom(event){
        let user = event.user;
        if(user.isItMe){
            cc.currentUI  = "";
            mm.Loading.hide();
            this.getUI().back();
        }
    },
    onUserBetEvent(event){
        if(this.getUI() == null)
            return;
        let userBet = new CandyEvent.BetEvent().fromEvent(event);
        this.getUI().CandyRun(userBet);
    },

});
let instance = null;
let getInstance = function () {
    if(instance == null)
        instance = new CandyController("UICandy", "candy");
    return instance;
}
SmartFoxSDK.CandyController = module.exports = getInstance();

let SieuXeEvent = require('SieuXeEvent')
let SieuXeController = SmartFoxSDK.BaseController.extend({
    m_tableInfo: null,
    registerEvents(){
        this._super();
        this.ZoneInstance.addEventListenerExtension(SieuXeEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    },
    removeEvents(){
        this._super();
        this.ZoneInstance.removeEventListenerExtension(SieuXeEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    },
    onEventLogin(event){
        this._super(event);
        this._requestJoinRoom(this.zoneName);
    },
    onHistoryEvent(event){
        let data = event.getSArray('d');
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
        UIManger.show("UISieuXeTransaction", {pop: true, src: 'sieuxe', data: {items: items}});
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
        UIManger.show("UISieuXeRank", {pop: true, src: 'sieuxe', data: {items: items}});
    },
    onEventRoomJoin(event){
        this._super(event);
        this.preLoadUI({pop: true}, function () {
            this.getUI().showGame();
        }.bind(this))
    },
    onEventUserExitRoom(event){
        let user = event.user;
        if(user.isItMe){
            cc.currentUI  = "";
            this.getUI().back();
        }
    },
    onUserBetEvent(event){
        if(this.getUI() == null)
            return;
        let userBet = new SieuXeEvent.BetEvent().fromEvent(event);
        this.getUI().SieuXeRun(userBet);
    },

});
let instance = null;
let getInstance = function () {
    if (instance == null)
        instance = new SieuXeController("UISieuXe", "sieuxe");
    return instance;
}
SmartFoxSDK.SieuXeController = module.exports =  getInstance();

let VampireEvent = require('VampireEvent')
let VampireController = SmartFoxSDK.BaseController.extend({
    m_tableInfo: null,
    registerEvents(){
        this._super();
        this.ZoneInstance.addEventListenerExtension(VampireEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
    },
    removeEvents(){
        this._super();
        this.ZoneInstance.removeEventListenerExtension(VampireEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
    },
    onEventLogin(event){
        this._super(event);
        this._requestJoinRoom(this.zoneName);
    },
    onEventRoomJoin(event){
        this._super(event);
        UIManger.show("UIVampireLobby", {pop: true, src: "vampire"});
    },
    onUserVariablesUpdate(event){
        this._super(event);
        if (this.getUI() != null)
            this.getUI().updateUserVariableSlot(event);
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
        UIManger.show("UIVampireHistoryTransaction", {pop: true, src: 'vampire', data: {items: items}});
    },
    onLeaderBoardEvent(event){
        let data = event.getSArray("d");
        let items = [];
        for(let i = 0;i < data.size();i++){
            let sItem = data.get(i).getObject();
            let item = {};
            item.session = i + 1;
            item.account = sItem.getUtfString("dn");
            item.win = sItem.getDouble("m");
            item.time = sItem.getUtfString("t");
            item.win_type = "Thắng";
            items.push(item);
        }
        UIManger.show("UIVampireRank", {pop: true, src: 'vampire', data: {items: items}});
    },
    onEventUserExitRoom(event){
        let user = event.user;
        if(user.isItMe){
            if (this.getUI() != null)
                this.getUI().node.active = false;
            UIManger.show("UIHome");
        }
    },
    onUserResultEvent(event){
        let userBet = new VampireEvent.ResultEvent().fromEvent(event);
        this.getUI().VampireRun(userBet);
    },

});
let instance = null;
let getInstance = function () {
    if(instance == null)
        instance = new VampireController("UIVampire", "vampire");
    return instance;
}
SmartFoxSDK.VampireController = module.exports = getInstance();

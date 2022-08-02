let KimCuongEvent = require('KimCuongEvent')
let KimCuongController = SmartFoxSDK.BaseController.extend({
    m_tableInfo: null,
    registerEvents(){
        this._super();
        this.ZoneInstance.addEventListenerExtension(KimCuongEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
    },
    removeEvents(){
        this._super();
        this.ZoneInstance.removeEventListenerExtension(KimCuongEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
    },
    onEventLogin(event){
        this._super(event);
        this._requestJoinRoom(this.zoneName);
    },
    onEventRoomJoin(event){
        this._super(event);
        UIManger.show("UIKimCuongLobby", {pop: true, src: "kimcuong"});
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
        UIManger.show("UIKimCuongHistoryTransaction", {pop: true, src: 'kimcuong', data: {items: items}});
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
        UIManger.show("UIKimCuongRank", {pop: true, src: 'kimcuong', data: {items: items}});
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
        let userBet = new KimCuongEvent.ResultEvent().fromEvent(event);
        this.getUI().KimCuongRun(userBet);
    },

});
let instance = null;
let getInstance = function () {
    if(instance == null)
        instance = new KimCuongController("UIKimCuong", "kimcuong");
    return instance;
}
SmartFoxSDK.KimCuongController = module.exports = getInstance();

let TaiXiuEvent = require('TaiXiuEvent')
let TaiXiuController = SmartFoxSDK.BaseController.extend({
    m_tableInfo : null,
    registerEvents(){
        this._super();

        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.SESSION_DETAIL, this.onSessionDetailEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.SOI_CAU_RES, this.onSoiCauEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TAN_LOC, this.onTanLocEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.RUT_LOC, this.onRutLocEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.HISTORY_TAN_LOC, this.onHistoryTanLocEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.HISTORY_RUT_LOC, this.onHistoryRutLocEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TOP_BET, this.onTopBetEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TOP_BET_REWARD, this.onTopBetRewardEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TOP_BET_RULE, this.onTopBetRuleEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.RANK_TAN_LOC, this.onRankTanLocEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.RANK_RUT_LOC, this.onRankRutLocEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.PUBLIC_MSG, this.onPublicMessageChat, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TOP_REWARD_RES, this.onTopRewardResEvent, this);
        this.ZoneInstance.addEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.UPDATE_STATE_POT, this.onUpdateStatePot, this);
    },
    removeEvents(){
        this._super();

        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.SESSION_DETAIL, this.onSessionDetailEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.SOI_CAU_RES, this.onSoiCauEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TAN_LOC, this.onTanLocEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.RUT_LOC, this.onRutLocEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.HISTORY_TAN_LOC, this.onHistoryTanLocEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.HISTORY_RUT_LOC, this.onHistoryRutLocEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TOP_BET, this.onTopBetEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TOP_BET_REWARD, this.onTopBetRewardEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TOP_BET_RULE, this.onTopBetRuleEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.RANK_TAN_LOC, this.onRankTanLocEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.RANK_RUT_LOC, this.onRankRutLocEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.PUBLIC_MSG, this.onPublicMessageChat, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.TOP_REWARD_RES, this.onTopRewardResEvent, this);
        this.ZoneInstance.removeEventListenerExtension(TaiXiuEvent.RESPONSE_NAME.UPDATE_STATE_POT, this.onUpdateStatePot, this);
    },
    onEventLogin(event){
        this._super(event);
        this._requestJoinRoom(this.zoneName);
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
    onPublicMessageChat(event){
        let publicMsg = new TaiXiuEvent.PublicMessagecEvent().fromEvent(event);
        let msgItem = {};
        let sender = {};
        sender.dn = publicMsg.un;
        msgItem.sender = sender;
        msgItem.msg = publicMsg.msg;
        msgItem.dataSender = {};
        msgItem.dataSender.dn = sender.dn;
        this.getUI().onPublicMessage(msgItem);
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
            item.refund = sItem.getDouble("rf");
            let result = sItem.getByteArray("rs");
            item.result = result
            item.cua = this._getNameResult(result);
            items.push(item);
        }
        this.getUI().updateDataHistory(items);
        // UIManger.show("UITaiXiuTransaction", {pop: true, src: 'taixiu', data: {items: items}});
    },
    _getNameResult(result){
        let cua = 'Tài';
        let point = 0;
        for(let i = 0; i < result.length;i++){
            point += result[i];
        }
        if(point <= 10)
            return "Xỉu";
        return cua;
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
        this.getUI().updateDataRank(items);
        // UIManger.show("UITaiXiuRank", {pop: true, src: 'taixiu', data: {items: items}});
    },
    onEventUserExitRoom(event){
        let user = event.user;
        if(user.isItMe){
            cc.currentUI  = "";
            mm.Loading.hide();
            this.getUI().back();
        }
    },
    onLoadGameEvent(event){
        this.preLoadUI({pop: true}, function () {
            this.m_tableInfo = new TaiXiuEvent.LoadGameEvent().fromEvent(event);
            cc.lastTime      = this.m_tableInfo.time + new Date().getTime()/1000;
            this.getUI().setPrepareBet(["Đặt","Đặt"]);
            this.getUI().controller = this;
            this.getUI().showGame(this.m_tableInfo.allowRutlLoc, this.m_tableInfo.fundRutloc);
            this.getUI().resetBetTaiXiu();
            this.getUI().updateListChat(this.m_tableInfo.listChat);
            this.getUI().showListUsers(this.m_tableInfo.listUsers);
            this.getUI().updateSessionId(cc.listCau[cc.listCau.length -1].sessionId);
            this.getUI().updateListCau();
            this.resumeGame();
        }.bind(this))
    },
    resumeGame() {
        if (this.m_tableInfo != null) {
            this.m_tableInfo.time =  Math.floor(cc.lastTime - new Date().getTime()/1000);
            this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
            this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
            this.getUI()._turnOfTime();
            this.getUI().hideResultNumber();
            this.getUI().hide3D();
            this.getUI().stopEffectResult();
            if(this.m_tableInfo.isBetting){
                this.getUI()._turnOnTime(this.m_tableInfo.time);
            }else{
                this.getUI().cancua(this.m_tableInfo.time);
            }
        }
    },
    onUpdateStatePot(event){
        if(this.getUI() == null)
            return;
        let statePot = new TaiXiuEvent.UpdateStatePotEvent().fromEvent(event);
        this.m_tableInfo.listChipPot[0] = statePot.potTai;
        this.m_tableInfo.listChipPot[1] = statePot.potXiu;

        this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
        this.getUI().showListUsers([statePot.ccuTai, statePot.ccuXiu]);
    },
    onUserBetEvent(event){
        if(this.getUI() == null)
            return;
        let userBet = new TaiXiuEvent.BetEvent().fromEvent(event);
        let userName = userBet.userName;
        let betChip = userBet.betChip;
        let typePot = userBet.typePot;
        this.m_tableInfo.listChipPot[typePot] += betChip;
        this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
        this.getUI().showListUsers(userBet.listUsers);
        if(this.ZoneInstance.mySelf.name == userName){
            this.m_tableInfo.listMyChipPot[typePot] += betChip;
            this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
            this.getUI().setPrepareBet(["Đặt","Đặt"]);
            this.getUI()._currentBet = 0;
            this.getUI().updateChipAll();
        }
    },
    onEndBettingEvent(event){
        if(this.getUI() == null)
            return;
        let endBetting = new TaiXiuEvent.EndBetting().fromEvent(event);
        this.m_tableInfo.isBetting      = false;
        this.m_tableInfo.refundChip     = endBetting.refundChip;
        this.m_tableInfo.winChip        = endBetting.winChip;
        this.m_tableInfo.result         = endBetting.result;
        this.m_tableInfo.playType       = endBetting.playType;

        this.getUI().updateThangThua(this.m_tableInfo.playType);
        // this.getUI().cancua(16);
        // this.getUI().updateDataCau();
        cc.lastTime  =  16.5 + new Date().getTime()/1000;
        this.getUI().updateDataCau();
        this.getUI().isPlayedAnimation = false;
        this.resumeGame();
    },
    onSessionDetailEvent(event){
        if(this.getUI() == null)
            return;
        let sessionDetail = new TaiXiuEvent.SessionDetail().fromEvent(event);
        this.getUI().updateDataSessionDetail(sessionDetail);
        // UIManger.show("UITaiXiuSessionDetail", {pop: true, src: 'taixiu', data: sessionDetail});
    },
    onSoiCauEvent(event) {
        if(this.getUI() == null)
            return;
        let listCau = new TaiXiuEvent.SoiCauEvent().fromEvent(event);
        this.getUI().updateTaiXiuSoiCau(listCau);
        // UIManger.show("UITaiXiuSoiCau", {pop: true, src: 'taixiu', data: listCau});
    },
    onTanLocEvent(event) {
        if(this.getUI() == null)
            return;
        let tanLoc   = new TaiXiuEvent.TanLocEvent().fromEvent(event);
        let uiTanLoc = this.getUIByName("UITaiXiuTanLoc");
        if (uiTanLoc!= null)
            uiTanLoc.tanLocRes(tanLoc);
        this.getUI().showGame(null, tanLoc.fund);
        this.onEventUpdateChip(0);
    },
    onRutLocEvent(event) {
        if(this.getUI() == null)
            return;
        let rutLoc = new TaiXiuEvent.RutLocEvent().fromEvent(event);
        this.getUI().showResultRutLoc(rutLoc);
        this.getUI().showGame(null, rutLoc.fund);
        this.onEventUpdateChip(0);
    },
    onHistoryTanLocEvent(event) {
        if(this.getUI() == null)
            return;
        let historyTanLoc = new TaiXiuEvent.HistoryTanLocEvent().fromEvent(event);
        let uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
        if (uiTanLoc!= null)
            uiTanLoc.updateDataList(historyTanLoc);
    },
    onHistoryRutLocEvent(event) {
        if(this.getUI() == null)
            return;
        let historyRutLoc = new TaiXiuEvent.HistoryRutLocEvent().fromEvent(event);
        let uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
        if (uiTanLoc!= null)
            uiTanLoc.updateDataList(historyRutLoc);
    },
    onTopBetEvent(event) {
        if(this.getUI() == null)
            return;
        let listTopBet = new TaiXiuEvent.TopBetEvent().fromEvent(event);
        let uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
        if (uiTanLoc!= null)
            uiTanLoc.updateDataList(listTopBet);
    },
    onTopBetRewardEvent(event) {
        if(this.getUI() == null)
            return;
        let betReward = new TaiXiuEvent.TopBetRewardEvent().fromEvent(event);
        if(this.getUI() == null)
            return;
        this.getUI().showReward(betReward);
    },
    onTopBetRuleEvent(event) {
        if(this.getUI() == null)
            return;
        let listTopBetRule = new TaiXiuEvent.TopBetRuleEvent().fromEvent(event);
        let uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
        if (uiTanLoc!= null)
            uiTanLoc.updateDataList(listTopBetRule);
    },
    onRankTanLocEvent(event) {
        if(this.getUI() == null)
            return;
        let rankTanLoc = new TaiXiuEvent.RankTanLocEvent().fromEvent(event);
        let uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
        if (uiTanLoc!= null)
            uiTanLoc.updateDataList(rankTanLoc);
    },
    onRankRutLocEvent(event) {
        if(this.getUI() == null)
            return;
        let rankRutLoc = new TaiXiuEvent.RankRutLocEvent().fromEvent(event);
        let uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
        if (uiTanLoc!= null)
            uiTanLoc.updateDataList(rankRutLoc);
    },
    onTopRewardResEvent(event) {
        if(this.getUI() == null)
            return;
        let topReward = new TaiXiuEvent.TopRewardResEvent().fromEvent(event);
        let uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
        if (topReward!= null)
            uiTanLoc.updateDataList(topReward);
    },
});
let instance = null;
let getInstance = function () {
    if(instance == null)
        instance = new TaiXiuController("UITaiXiu", "taixiu");
    return instance;
}
SmartFoxSDK.TaiXiuController = module.exports = getInstance();

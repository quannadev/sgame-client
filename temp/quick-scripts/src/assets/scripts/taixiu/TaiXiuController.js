"use strict";
cc._RF.push(module, '8222d9/7m9Mbp+Qjjj1G4rC', 'TaiXiuController');
// scripts/taixiu/TaiXiuController.js

"use strict";

var TaiXiuEvent = require('TaiXiuEvent');

var TaiXiuController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
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
  removeEvents: function removeEvents() {
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
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onPublicMessage: function onPublicMessage(event) {
    var sender = event.sender;
    var msg = event.message;
    var data = event.data;
    var dataSender = data != null ? {
      dn: data.get("dn"),
      fb: data.get("fb")
    } : {
      dn: "...",
      fb: ""
    };
    var msgItem = {};
    msgItem.sender = sender;
    msgItem.msg = msg;
    msgItem.dataSender = dataSender;
    this.getUI().onPublicMessage(msgItem);
  },
  onPublicMessageChat: function onPublicMessageChat(event) {
    var publicMsg = new TaiXiuEvent.PublicMessagecEvent().fromEvent(event);
    var msgItem = {};
    var sender = {};
    sender.dn = publicMsg.un;
    msgItem.sender = sender;
    msgItem.msg = publicMsg.msg;
    msgItem.dataSender = {};
    msgItem.dataSender.dn = sender.dn;
    this.getUI().onPublicMessage(msgItem);
  },
  onHistoryEvent: function onHistoryEvent(event) {
    var data = event.getSArray("d");
    var items = [];

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = sItem.getDouble("id").toFixed(0);
      item.time = sItem.getUtfString("t");
      item.stakes = sItem.getDouble("b");
      item.win = sItem.getDouble("w");
      item.refund = sItem.getDouble("rf");
      var result = sItem.getByteArray("rs");
      item.result = result;
      item.cua = this._getNameResult(result);
      items.push(item);
    }

    this.getUI().updateDataHistory(items); // UIManger.show("UITaiXiuTransaction", {pop: true, src: 'taixiu', data: {items: items}});
  },
  _getNameResult: function _getNameResult(result) {
    var cua = 'Tài';
    var point = 0;

    for (var i = 0; i < result.length; i++) {
      point += result[i];
    }

    if (point <= 10) return "Xỉu";
    return cua;
  },
  onLeaderBoardEvent: function onLeaderBoardEvent(event) {
    var data = event.getSArray("d");
    var items = [];

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = i;
      item.account = sItem.getUtfString("dn");
      item.win = sItem.getDouble("m");
      item.time = sItem.getUtfString("t");
      item.win_type = "Thắng";
      items.push(item);
    }

    this.getUI().updateDataRank(items); // UIManger.show("UITaiXiuRank", {pop: true, src: 'taixiu', data: {items: items}});
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      cc.currentUI = "";
      mm.Loading.hide();
      this.getUI().back();
    }
  },
  onLoadGameEvent: function onLoadGameEvent(event) {
    this.preLoadUI({
      pop: true
    }, function () {
      this.m_tableInfo = new TaiXiuEvent.LoadGameEvent().fromEvent(event);
      cc.lastTime = this.m_tableInfo.time + new Date().getTime() / 1000;
      this.getUI().setPrepareBet(["Đặt", "Đặt"]);
      this.getUI().controller = this;
      this.getUI().showGame(this.m_tableInfo.allowRutlLoc, this.m_tableInfo.fundRutloc);
      this.getUI().resetBetTaiXiu();
      this.getUI().updateListChat(this.m_tableInfo.listChat);
      this.getUI().showListUsers(this.m_tableInfo.listUsers);
      this.getUI().updateSessionId(cc.listCau[cc.listCau.length - 1].sessionId);
      this.getUI().updateListCau();
      this.resumeGame();
    }.bind(this));
  },
  resumeGame: function resumeGame() {
    if (this.m_tableInfo != null) {
      this.m_tableInfo.time = Math.floor(cc.lastTime - new Date().getTime() / 1000);
      this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
      this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);

      this.getUI()._turnOfTime();

      this.getUI().hideResultNumber();
      this.getUI().hide3D();
      this.getUI().stopEffectResult();

      if (this.m_tableInfo.isBetting) {
        this.getUI()._turnOnTime(this.m_tableInfo.time);
      } else {
        this.getUI().cancua(this.m_tableInfo.time);
      }
    }
  },
  onUpdateStatePot: function onUpdateStatePot(event) {
    if (this.getUI() == null) return;
    var statePot = new TaiXiuEvent.UpdateStatePotEvent().fromEvent(event);
    this.m_tableInfo.listChipPot[0] = statePot.potTai;
    this.m_tableInfo.listChipPot[1] = statePot.potXiu;
    this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
    this.getUI().showListUsers([statePot.ccuTai, statePot.ccuXiu]);
  },
  onUserBetEvent: function onUserBetEvent(event) {
    if (this.getUI() == null) return;
    var userBet = new TaiXiuEvent.BetEvent().fromEvent(event);
    var userName = userBet.userName;
    var betChip = userBet.betChip;
    var typePot = userBet.typePot;
    this.m_tableInfo.listChipPot[typePot] += betChip;
    this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
    this.getUI().showListUsers(userBet.listUsers);

    if (this.ZoneInstance.mySelf.name == userName) {
      this.m_tableInfo.listMyChipPot[typePot] += betChip;
      this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
      this.getUI().setPrepareBet(["Đặt", "Đặt"]);
      this.getUI()._currentBet = 0;
      this.getUI().updateChipAll();
    }
  },
  onEndBettingEvent: function onEndBettingEvent(event) {
    if (this.getUI() == null) return;
    var endBetting = new TaiXiuEvent.EndBetting().fromEvent(event);
    this.m_tableInfo.isBetting = false;
    this.m_tableInfo.refundChip = endBetting.refundChip;
    this.m_tableInfo.winChip = endBetting.winChip;
    this.m_tableInfo.result = endBetting.result;
    this.m_tableInfo.playType = endBetting.playType;
    this.getUI().updateThangThua(this.m_tableInfo.playType); // this.getUI().cancua(16);
    // this.getUI().updateDataCau();

    cc.lastTime = 16.5 + new Date().getTime() / 1000;
    this.getUI().updateDataCau();
    this.getUI().isPlayedAnimation = false;
    this.resumeGame();
  },
  onSessionDetailEvent: function onSessionDetailEvent(event) {
    if (this.getUI() == null) return;
    var sessionDetail = new TaiXiuEvent.SessionDetail().fromEvent(event);
    this.getUI().updateDataSessionDetail(sessionDetail); // UIManger.show("UITaiXiuSessionDetail", {pop: true, src: 'taixiu', data: sessionDetail});
  },
  onSoiCauEvent: function onSoiCauEvent(event) {
    if (this.getUI() == null) return;
    var listCau = new TaiXiuEvent.SoiCauEvent().fromEvent(event);
    this.getUI().updateTaiXiuSoiCau(listCau); // UIManger.show("UITaiXiuSoiCau", {pop: true, src: 'taixiu', data: listCau});
  },
  onTanLocEvent: function onTanLocEvent(event) {
    if (this.getUI() == null) return;
    var tanLoc = new TaiXiuEvent.TanLocEvent().fromEvent(event);
    var uiTanLoc = this.getUIByName("UITaiXiuTanLoc");
    if (uiTanLoc != null) uiTanLoc.tanLocRes(tanLoc);
    this.getUI().showGame(null, tanLoc.fund);
    this.onEventUpdateChip(0);
  },
  onRutLocEvent: function onRutLocEvent(event) {
    if (this.getUI() == null) return;
    var rutLoc = new TaiXiuEvent.RutLocEvent().fromEvent(event);
    this.getUI().showResultRutLoc(rutLoc);
    this.getUI().showGame(null, rutLoc.fund);
    this.onEventUpdateChip(0);
  },
  onHistoryTanLocEvent: function onHistoryTanLocEvent(event) {
    if (this.getUI() == null) return;
    var historyTanLoc = new TaiXiuEvent.HistoryTanLocEvent().fromEvent(event);
    var uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
    if (uiTanLoc != null) uiTanLoc.updateDataList(historyTanLoc);
  },
  onHistoryRutLocEvent: function onHistoryRutLocEvent(event) {
    if (this.getUI() == null) return;
    var historyRutLoc = new TaiXiuEvent.HistoryRutLocEvent().fromEvent(event);
    var uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
    if (uiTanLoc != null) uiTanLoc.updateDataList(historyRutLoc);
  },
  onTopBetEvent: function onTopBetEvent(event) {
    if (this.getUI() == null) return;
    var listTopBet = new TaiXiuEvent.TopBetEvent().fromEvent(event);
    var uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
    if (uiTanLoc != null) uiTanLoc.updateDataList(listTopBet);
  },
  onTopBetRewardEvent: function onTopBetRewardEvent(event) {
    if (this.getUI() == null) return;
    var betReward = new TaiXiuEvent.TopBetRewardEvent().fromEvent(event);
    if (this.getUI() == null) return;
    this.getUI().showReward(betReward);
  },
  onTopBetRuleEvent: function onTopBetRuleEvent(event) {
    if (this.getUI() == null) return;
    var listTopBetRule = new TaiXiuEvent.TopBetRuleEvent().fromEvent(event);
    var uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
    if (uiTanLoc != null) uiTanLoc.updateDataList(listTopBetRule);
  },
  onRankTanLocEvent: function onRankTanLocEvent(event) {
    if (this.getUI() == null) return;
    var rankTanLoc = new TaiXiuEvent.RankTanLocEvent().fromEvent(event);
    var uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
    if (uiTanLoc != null) uiTanLoc.updateDataList(rankTanLoc);
  },
  onRankRutLocEvent: function onRankRutLocEvent(event) {
    if (this.getUI() == null) return;
    var rankRutLoc = new TaiXiuEvent.RankRutLocEvent().fromEvent(event);
    var uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
    if (uiTanLoc != null) uiTanLoc.updateDataList(rankRutLoc);
  },
  onTopRewardResEvent: function onTopRewardResEvent(event) {
    if (this.getUI() == null) return;
    var topReward = new TaiXiuEvent.TopRewardResEvent().fromEvent(event);
    var uiTanLoc = this.getUIByName("UITaiXiuDuaTop");
    if (topReward != null) uiTanLoc.updateDataList(topReward);
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new TaiXiuController("UITaiXiu", "taixiu");
  return instance;
};

SmartFoxSDK.TaiXiuController = module.exports = getInstance();

cc._RF.pop();
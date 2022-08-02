"use strict";
cc._RF.push(module, '5ec5cXKwLBIIa8zDzEVyEFS', 'XocDiaController');
// scripts/xocdia/XocDiaController.js

"use strict";

var XocDiaEvent = require('XocDiaEvent');

var XocDiaController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(XocDiaEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
    this.ZoneInstance.addEventListenerExtension(XocDiaEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    this.ZoneInstance.addEventListenerExtension(XocDiaEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
    this.ZoneInstance.addEventListenerExtension(XocDiaEvent.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(XocDiaEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
    this.ZoneInstance.removeEventListenerExtension(XocDiaEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    this.ZoneInstance.removeEventListenerExtension(XocDiaEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
    this.ZoneInstance.removeEventListenerExtension(XocDiaEvent.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
  },
  onHistoryEvent: function onHistoryEvent(event) {
    var history = new XocDiaEvent.HistoryEvent().fromEvent(event);
    this.getUI().show("UIXocDiaTransaction", {
      pop: true,
      src: 'xocdia',
      data: {
        items: history.items
      }
    });
  },
  onLeaderBoardEvent: function onLeaderBoardEvent(event) {
    var rank = new XocDiaEvent.LeaderBoardEvent().fromEvent(event);
    this.getUI().show("UIXocDiaRank", {
      pop: true,
      src: 'xocdia',
      data: {
        items: rank.items
      }
    });
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onEventRoomJoin: function onEventRoomJoin(event) {
    this._super(event);

    if (this.getUI()) this.getUI().updateUserCount();
  },
  onEventUserEnterRoom: function onEventUserEnterRoom(event) {
    this._super(event);

    var user = event.user;

    if (this.getUI()) {
      this.getUI().updateUserCount();
      this.getUI().addNodePlayerEnterRoom(user);
    }
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      if (this.getUI() != null) this.getUI().node.active = false;
      UIManger.show("UIHome");
    } else {
      if (this.getUI()) {
        this.getUI().updateUserCount();
        this.getUI().removeNodePlayer(user);
      }
    }
  },
  onLoadGameEvent: function onLoadGameEvent(event) {
    this.preLoadUI({
      pop: true
    }, function () {
      if (!this.m_tableInfo) this.m_tableInfo = {};
      var loadEvent = new XocDiaEvent.LoadGameEvent().fromEvent(event);
      this.m_tableInfo.listMyChipPot = loadEvent.listMyChipPot;
      this.m_tableInfo.listChipPot = loadEvent.listChipPot;
      this.m_tableInfo.isBetting = loadEvent.isBetting;
      this.m_tableInfo.time = loadEvent.time + 1;
      if (loadEvent.result) this.m_tableInfo.result = loadEvent.result;
      if (loadEvent.winpot) this.m_tableInfo.winpot = loadEvent.winpot;
      cc.lastTime = this.m_tableInfo.time + new Date().getTime() / 1000;
      this.getUI().controller = this;
      this.resumeGame();
    }.bind(this));
  },
  resumeGame: function resumeGame() {
    if (this.m_tableInfo != null) {
      this.m_tableInfo.time = Math.floor(cc.lastTime - new Date().getTime() / 1000);
      this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
      this.getUI().showListChipBet(this.m_tableInfo.listChipPot);
      var users = [];
      users.push(this.ZoneInstance.mySelf);

      for (var i = 0; i < this.getRoom().getUserList().length; i++) {
        var u = this.getRoom().getUserList()[i];

        if (u.name != this.ZoneInstance.mySelf.name && users.length < 6) {
          users.push(u);
        }
      }

      this.getUI().showListUsers(users);

      if (this.m_tableInfo.isBetting) {
        this.getUI()._stopEffectWinPot();

        this.getUI().ToastDatCua();

        this.getUI()._turnOffTime();

        this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.isBetting);
      } else {
        this.getUI()._turnOffTime();

        this.getUI().resumeXocXoc(this.m_tableInfo.result, this.m_tableInfo.winpot, this.m_tableInfo.time, this.m_tableInfo.isWin);
      }
    }
  },
  onUserBetEvent: function onUserBetEvent(event) {
    if (!this.m_tableInfo) return;
    var userBet = new XocDiaEvent.BetEvent().fromEvent(event);
    var userName = userBet.userName;
    var betChip = userBet.betChip;
    var typePot = userBet.typePot;
    this.m_tableInfo.listChipPot[typePot] += betChip;
    this.getUI().showListChipBet(this.m_tableInfo.listChipPot);

    if (this.ZoneInstance.mySelf.name == userName) {
      this.m_tableInfo.listMyChipPot[typePot] += betChip;
      this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
    }

    this.getUI().actionFlyChipToPot(userName, typePot, betChip); // user bet

    var user = this.getRoom().getUserByName(userName);
    if (user) this.getUI().updateChip(user, 0);
  },
  onEndBettingEvent: function onEndBettingEvent(event) {
    var endBetting = new XocDiaEvent.EndBetting().fromEvent(event);
    if (!this.m_tableInfo) this.m_tableInfo = {};
    this.m_tableInfo.isBetting = false;
    this.m_tableInfo.result = endBetting.result;
    this.m_tableInfo.winpot = endBetting.winpot;
    this.m_tableInfo.winChip = endBetting.winChip;
    this.m_tableInfo.isWin = endBetting.winChip > 0;
    this.m_tableInfo.refund = endBetting.refund;

    this.getUI()._turnOffTime();

    this.getUI().xocxoc(endBetting.result, endBetting.winpot, endBetting.winChip > 0 ? true : false);
  },
  onHistoryResultEvent: function onHistoryResultEvent(event) {
    var history = new XocDiaEvent.HistoryResponse().fromEvent(event);
    console.log(history.result);
    this.getUI().showSoiCau(history.result);
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
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new XocDiaController('UIXocDia', 'xocdia');
  return instance;
};

SmartFoxSDK.XocDiaController = module.exports = getInstance();

cc._RF.pop();
"use strict";
cc._RF.push(module, 'e9744KaYgtCGKi7vCAoyyMZ', 'BaccaratController');
// scripts/baccarat/BaccaratController.js

"use strict";

var BaccaratEvent = require('BaccaratEvent');

var BaccaratController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: {},
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(BaccaratEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
    this.ZoneInstance.addEventListenerExtension(BaccaratEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    this.ZoneInstance.addEventListenerExtension(BaccaratEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
    this.ZoneInstance.addEventListenerExtension(BaccaratEvent.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
    this.ZoneInstance.addEventListenerExtension(BaccaratEvent.RESPONSE_NAME.HISTORY_DETAIL, this.HistoryDetailEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(BaccaratEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
    this.ZoneInstance.removeEventListenerExtension(BaccaratEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    this.ZoneInstance.removeEventListenerExtension(BaccaratEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
    this.ZoneInstance.removeEventListenerExtension(BaccaratEvent.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
    this.ZoneInstance.removeEventListenerExtension(BaccaratEvent.RESPONSE_NAME.HISTORY_DETAIL, this.HistoryDetailEvent, this);
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      if (this.getUI() != null) this.getUI().node.active = false;
      UIManger.show("UIHome");
    }
  },
  onLoadGameEvent: function onLoadGameEvent(event) {
    this.preLoadUI({
      pop: true
    }, function () {
      this.m_tableInfo = new BaccaratEvent.LoadGameEvent().fromEvent(event);
      this.getUI().hideAll();
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
      this.getUI().updateCau(this.m_tableInfo.allCau);

      if (this.m_tableInfo.isBetting) {
        this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);

        if (this.m_tableInfo.time >= 29) {
          this.getUI().showNoti("Bắt đầu cược");
        }

        this.getUI().runEffectGirl("1");
      } else {
        this.getUI()._turnOffTime();

        this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);

        this.getUI().resumeGame(this.m_tableInfo.cardPlayer, this.m_tableInfo.cardBanker, this.m_tableInfo.winpot, this.m_tableInfo.time, this.m_tableInfo.usersOnboard, this.m_tableInfo.chipUserOnBoard);
      }
    }.bind(this));
  },
  onUserBetEvent: function onUserBetEvent(event) {
    var userBet = new BaccaratEvent.BetEvent().fromEvent(event);
    var userName = userBet.userName;
    var betChip = userBet.betChip;
    var typePot = userBet.typePot;
    this.m_tableInfo.listChipPot[typePot] += betChip;
    this.getUI().showListChipBet(this.m_tableInfo.listChipPot);

    if (this.ZoneInstance.mySelf.name == userName) {
      this.m_tableInfo.listMyChipPot[typePot] += betChip;
      this.getUI().showListMyChipBet(this.m_tableInfo.listMyChipPot);
    }

    this.getUI().runActionChangeMoney(userName, -betChip, 1);
    this.getUI().actionFlyChipToPot(userName, typePot, betChip);
    var user = this.getRoom().getUserByName(userName);
    if (user) this.getUI().updateChip(user);
  },
  onEndBettingEvent: function onEndBettingEvent(event) {
    var endBetting = new BaccaratEvent.EndBetting().fromEvent(event);
    this.m_tableInfo.isBetting = false;
    this.m_tableInfo.chipUserOnBoard = endBetting.chipUserOnBoard;
    this.m_tableInfo.usersOnboard = endBetting.usersOnboard;
    this.m_tableInfo.cardPlayer = endBetting.cardPlayer;
    this.m_tableInfo.cardBanker = endBetting.cardBanker;
    this.m_tableInfo.winpot = endBetting.winpot;

    this.getUI()._turnOffTime();

    this.getUI()._turnOnTime(20, 20, this.m_tableInfo.isBetting);

    this.getUI().showNoti("Dừng đặt cược");
    this.getUI().showResult(this.m_tableInfo.cardPlayer, this.m_tableInfo.cardBanker, this.m_tableInfo.winpot, this.m_tableInfo.chipUserOnBoard, this.m_tableInfo.usersOnboard, 1);
  },
  onHistoryResultEvent: function onHistoryResultEvent(event) {},
  HistoryDetailEvent: function HistoryDetailEvent(event) {
    var allCau = new BaccaratEvent.HistoryDetailEvent().fromEvent(event);
    this.getUI().showSoiCau(allCau);
  },
  onHistoryEvent: function onHistoryEvent(event) {
    var items = new BaccaratEvent.HistoryEvent().fromEvent(event);
    this.getUI().show("UIBaccaratTransaction", {
      pop: true,
      src: 'baccarat',
      data: {
        items: items
      }
    });
  },
  onLeaderBoardEvent: function onLeaderBoardEvent(event) {
    var items = new BaccaratEvent.LeaderBoardEvent().fromEvent(event);
    this.getUI().show("UIBaccaratRank", {
      pop: true,
      src: 'baccarat',
      data: {
        items: items
      }
    });
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
  if (instance == null) instance = new BaccaratController('UIBaccarat', 'baccarat');
  return instance;
};

SmartFoxSDK.BaccaratController = module.exports = getInstance();

cc._RF.pop();
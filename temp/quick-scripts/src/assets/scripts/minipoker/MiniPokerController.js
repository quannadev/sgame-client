"use strict";
cc._RF.push(module, '19e3bEiYi9KToP2p9SX28cK', 'MiniPokerController');
// scripts/minipoker/MiniPokerController.js

"use strict";

var MiniPokerEvent = require('MiniPokerEvent');

var MiniPokerController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(MiniPokerEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(MiniPokerEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onHistoryEvent: function onHistoryEvent(event) {
    var data = event.getSArray("d");
    var items = [];

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = sItem.getDouble("id");
      item.time = sItem.getUtfString("t");
      item.stakes = sItem.getDouble("b");
      item.win = sItem.getDouble("w");
      item.resultMap = sItem.getByteArray("rs");
      item.linewin = sItem.getByteArray("lw");
      items.push(item);
    }

    UIManger.show("UIMiniPokerTransaction", {
      pop: true,
      src: 'minipoker',
      data: {
        items: items
      }
    });
  },
  onLeaderBoardEvent: function onLeaderBoardEvent(event) {
    var data = event.getSArray("d");
    var items = [];

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = i + 1;
      item.account = sItem.getUtfString("dn");
      item.win = sItem.getDouble("m");
      item.time = sItem.getUtfString("t");
      item.win_type = "Thắng";
      items.push(item);
    }

    UIManger.show("UIMiniPokerRank", {
      pop: true,
      src: 'minipoker',
      data: {
        items: items
      }
    });
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      cc.currentUI = "";
      mm.Loading.hide();
      this.getUI().back();
    }
  },
  onEventRoomJoin: function onEventRoomJoin(user) {
    this.preLoadUI({
      pop: true
    }, function () {// load user finish
    }.bind(this));
  },
  onUserBetEvent: function onUserBetEvent(event) {
    if (this.getUI() == null) return;
    var userBet = new MiniPokerEvent.BetEvent().fromEvent(event);
    this.getUI().MiniPokerRun(userBet);
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new MiniPokerController("UIMiniPoker", "minipoker");
  return instance;
};

SmartFoxSDK.MiniPokerController = module.exports = getInstance();

cc._RF.pop();
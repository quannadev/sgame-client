"use strict";
cc._RF.push(module, '2b3dcv8V6RLDLFX0qAjXvm5', 'SieuXeController');
// scripts/sieuxe/SieuXeController.js

"use strict";

var SieuXeEvent = require('SieuXeEvent');

var SieuXeController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(SieuXeEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(SieuXeEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onHistoryEvent: function onHistoryEvent(event) {
    var data = event.getSArray('d');
    var items = [];

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = sItem.getDouble("id").toFixed(0);
      item.time = sItem.getUtfString("t");
      item.stakes = sItem.getDouble("b");
      item.win = sItem.getDouble("w");
      item.resultMap = sItem.getByteArray("rs");
      item.linewin = sItem.getByteArray("lw");
      items.push(item);
    }

    UIManger.show("UISieuXeTransaction", {
      pop: true,
      src: 'sieuxe',
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
      item.session = i;
      item.account = sItem.getUtfString("dn");
      item.win = sItem.getDouble("m");
      item.time = sItem.getUtfString("t");
      item.win_type = "Thắng";
      items.push(item);
    }

    UIManger.show("UISieuXeRank", {
      pop: true,
      src: 'sieuxe',
      data: {
        items: items
      }
    });
  },
  onEventRoomJoin: function onEventRoomJoin(event) {
    this._super(event);

    this.preLoadUI({
      pop: true
    }, function () {
      this.getUI().showGame();
    }.bind(this));
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      cc.currentUI = "";
      this.getUI().back();
    }
  },
  onUserBetEvent: function onUserBetEvent(event) {
    if (this.getUI() == null) return;
    var userBet = new SieuXeEvent.BetEvent().fromEvent(event);
    this.getUI().SieuXeRun(userBet);
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new SieuXeController("UISieuXe", "sieuxe");
  return instance;
};

SmartFoxSDK.SieuXeController = module.exports = getInstance();

cc._RF.pop();
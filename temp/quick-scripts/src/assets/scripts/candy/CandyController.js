"use strict";
cc._RF.push(module, '6d821hsMmlMerrkIGxYuFjC', 'CandyController');
// scripts/candy/CandyController.js

"use strict";

var CandyEvent = require('CandyEvent');

var CandyController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(CandyEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(CandyEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
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
      item.session = sItem.getDouble("id").toFixed(0);
      item.time = sItem.getUtfString("t");
      item.stakes = sItem.getDouble("b");
      item.win = sItem.getDouble("w");
      item.resultMap = sItem.getByteArray("rs");
      item.linewin = sItem.getByteArray("lw");
      items.push(item);
    }

    UIManger.show("UICandyTransaction", {
      pop: true,
      src: 'candy',
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

    UIManger.show("UICandyRank", {
      pop: true,
      src: 'candy',
      data: {
        items: items
      }
    });
  },
  onEventRoomJoin: function onEventRoomJoin(event) {
    this._super(event);

    this.preLoadUI({
      pop: true
    }, function () {// load user finish
    }.bind(this));
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      cc.currentUI = "";
      mm.Loading.hide();
      this.getUI().back();
    }
  },
  onUserBetEvent: function onUserBetEvent(event) {
    if (this.getUI() == null) return;
    var userBet = new CandyEvent.BetEvent().fromEvent(event);
    this.getUI().CandyRun(userBet);
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new CandyController("UICandy", "candy");
  return instance;
};

SmartFoxSDK.CandyController = module.exports = getInstance();

cc._RF.pop();
"use strict";
cc._RF.push(module, 'ed5f9lRH0tI7aSBBqX2nrlb', 'KimCuongController');
// scripts/kimcuong/KimCuongController.js

"use strict";

var KimCuongEvent = require('KimCuongEvent');

var KimCuongController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(KimCuongEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(KimCuongEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onEventRoomJoin: function onEventRoomJoin(event) {
    this._super(event);

    UIManger.show("UIKimCuongLobby", {
      pop: true,
      src: "kimcuong"
    });
  },
  onUserVariablesUpdate: function onUserVariablesUpdate(event) {
    this._super(event);

    if (this.getUI() != null) this.getUI().updateUserVariableSlot(event);
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

    UIManger.show("UIKimCuongHistoryTransaction", {
      pop: true,
      src: 'kimcuong',
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

    UIManger.show("UIKimCuongRank", {
      pop: true,
      src: 'kimcuong',
      data: {
        items: items
      }
    });
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      if (this.getUI() != null) this.getUI().node.active = false;
      UIManger.show("UIHome");
    }
  },
  onUserResultEvent: function onUserResultEvent(event) {
    var userBet = new KimCuongEvent.ResultEvent().fromEvent(event);
    this.getUI().KimCuongRun(userBet);
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new KimCuongController("UIKimCuong", "kimcuong");
  return instance;
};

SmartFoxSDK.KimCuongController = module.exports = getInstance();

cc._RF.pop();
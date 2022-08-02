"use strict";
cc._RF.push(module, '9ee23AZ5WJFC5kMSVV5v/mP', 'ZeusController');
// scripts/zeus/ZeusController.js

"use strict";

var ZeusEvent = require('ZeusEvent');

var ZeusController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(ZeusEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(ZeusEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onEventRoomJoin: function onEventRoomJoin(event) {
    this._super(event);

    UIManger.show("UIZeusLobby", {
      pop: true,
      src: "zeus"
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

    UIManger.show("UIZeusHistoryTransaction", {
      pop: true,
      src: 'zeus',
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

    UIManger.show("UIZeusRank", {
      pop: true,
      src: 'zeus',
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
    var userBet = new ZeusEvent.ResultEvent().fromEvent(event);
    this.getUI().ZeusRun(userBet);
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new ZeusController("UIZeus", "zeus");
  return instance;
};

SmartFoxSDK.ZeusController = module.exports = getInstance();

cc._RF.pop();
"use strict";
cc._RF.push(module, 'a7a6aG7GZpBKJ7uIZyJHbCK', 'CasinoEvent');
// scripts/CasinoEvent.js

"use strict";

var CasinoEvent = {};
CasinoEvent.RESPONSE_NAME = {
  GROUP_GAME_RES: "g1",
  QUICK_JOIN_GAME_RES: "g2",
  HISTORY_RES: "g4",
  LEADER_BOARD_RES: "g5",
  TRANSFER_MONEY_RES: "p1",
  CHANGE_PASS_RES: "p2",
  GIFT_CODE_RES: "p3",
  LIST_AGENCY_RES: "p4"
};
CasinoEvent._BaseEvent = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._eventName = name;
  },
  getEventName: function getEventName() {
    return this._eventName;
  },
  fromEvent: function fromEvent(event) {
    return this;
  },
  toEvent: function toEvent() {
    return this;
  }
});
CasinoEvent.HistoryEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
  },
  fromEvent: function fromEvent(event) {
    this.game = event.getUtfString("g");
    this.data = event.getSArray("d");
    return this;
  }
});
CasinoEvent.LeaderboardEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES);
  },
  fromEvent: function fromEvent(event) {
    this.game = event.getUtfString("g");
    this.data = event.getSArray("d");
    return this;
  }
});
CasinoEvent.LoginEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(SmartFoxSDK.SmartFox.Event.LOGIN);
  },
  fromEvent: function fromEvent(event) {
    this.user = event.user;
    this.data = event.data;
    return this;
  },
  getUserInfo: function getUserInfo() {
    return this.user;
  },
  getData: function getData() {
    return this.data;
  }
});
CasinoEvent.RoomJoinEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(SmartFoxSDK.SmartFox.Event.ROOM_JOIN);
  },
  fromEvent: function fromEvent(event) {
    this.room = event.room;
    return this;
  },
  getRoomInfo: function getRoomInfo() {
    return this.room;
  }
});
CasinoEvent.QuickJoinGameEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.QUICK_JOIN_GAME_RES);
  },
  fromEvent: function fromEvent(event) {
    this.roomId = event.getInt("id");
    return this;
  }
});
CasinoEvent.GroupGameEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.GROUP_GAME_RES);
  },
  fromEvent: function fromEvent(event) {
    this.groups = [];
    var groups = event.getSArray("groups");

    for (var i = 0; i < groups.size(); i++) {
      var objGroup = groups.get(i).getObject();
      var groupId = objGroup.getUtfString("group");
      var groupVars = objGroup.getSArray("vars");
      var vars = {};

      for (var j = 0; j < groupVars.size(); j++) {
        var roomVar = SmartFoxSDK.SmartFox.Entities.Variables.RoomVariable.fromArray(groupVars.get(j).getObject());
        vars[roomVar.name] = roomVar.value.value;
      }

      var obj = {};
      obj.group_id = groupId;
      obj.group_vars = vars;
      this.groups.push(obj);
    }

    this.groups.sort(function (a, b) {
      return a.group_vars.bet_chip - b.group_vars.bet_chip;
    });
    return this;
  }
});
CasinoEvent.TransferMoneyEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.TRANSFER_MONEY_RES);
  },
  fromEvent: function fromEvent(event) {
    this.code = event.getByte("c");
    return this;
  }
});
CasinoEvent.ChangePassEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.CHANGE_PASS_RES);
  },
  fromEvent: function fromEvent(event) {
    this.code = event.getByte("c");
    return this;
  }
});
CasinoEvent.GiftCodeEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.GIFT_CODE_RES);
  },
  fromEvent: function fromEvent(event) {
    if (event.getUtfString("ec") != null) {
      this.ec = event.getUtfString("ec");
    } else {
      this.gift_value = event.getDouble("c");
    }

    return this;
  }
});
CasinoEvent.ListAgencyEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES);
  },
  fromEvent: function fromEvent(event) {
    var listAgency = [];
    var arr = event.getSArray("d");

    for (var i = 0; i < arr.size(); i++) {
      var sItem = arr.get(i).getObject();
      var agency = {};
      agency.username = sItem.getUtfString("un");
      agency.name = sItem.getUtfString("dn");
      agency.agName = sItem.getUtfString("ag");
      agency.zone = sItem.getUtfString("lo");
      agency.telegram = sItem.getUtfString("tl");
      agency.phone = sItem.getUtfString("p");
      agency.address = sItem.getUtfString("add");
      agency.face = sItem.getUtfString("fb");
      agency.stt = i + 1;
      listAgency.push(agency);
    }

    return listAgency;
  }
});
CasinoEvent.HistoryEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);
  },
  fromEvent: function fromEvent(event) {
    return this;
  }
});
CasinoEvent.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES);
  },
  fromEvent: function fromEvent(event) {
    return this;
  }
});
window.CasinoEvent = CasinoEvent;

cc._RF.pop();
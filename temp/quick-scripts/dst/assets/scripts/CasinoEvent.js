
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/CasinoEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0Nhc2lub0V2ZW50LmpzIl0sIm5hbWVzIjpbIkNhc2lub0V2ZW50IiwiUkVTUE9OU0VfTkFNRSIsIkdST1VQX0dBTUVfUkVTIiwiUVVJQ0tfSk9JTl9HQU1FX1JFUyIsIkhJU1RPUllfUkVTIiwiTEVBREVSX0JPQVJEX1JFUyIsIlRSQU5TRkVSX01PTkVZX1JFUyIsIkNIQU5HRV9QQVNTX1JFUyIsIkdJRlRfQ09ERV9SRVMiLCJMSVNUX0FHRU5DWV9SRVMiLCJfQmFzZUV2ZW50IiwiU21hcnRGb3hTREsiLCJDbGFzcyIsImV4dGVuZCIsImN0b3IiLCJuYW1lIiwiX2V2ZW50TmFtZSIsImdldEV2ZW50TmFtZSIsImZyb21FdmVudCIsImV2ZW50IiwidG9FdmVudCIsIkhpc3RvcnlFdmVudCIsIl9zdXBlciIsImdhbWUiLCJnZXRVdGZTdHJpbmciLCJkYXRhIiwiZ2V0U0FycmF5IiwiTGVhZGVyYm9hcmRFdmVudCIsIkxvZ2luRXZlbnQiLCJTbWFydEZveCIsIkV2ZW50IiwiTE9HSU4iLCJ1c2VyIiwiZ2V0VXNlckluZm8iLCJnZXREYXRhIiwiUm9vbUpvaW5FdmVudCIsIlJPT01fSk9JTiIsInJvb20iLCJnZXRSb29tSW5mbyIsIlF1aWNrSm9pbkdhbWVFdmVudCIsInJvb21JZCIsImdldEludCIsIkdyb3VwR2FtZUV2ZW50IiwiZ3JvdXBzIiwiaSIsInNpemUiLCJvYmpHcm91cCIsImdldCIsImdldE9iamVjdCIsImdyb3VwSWQiLCJncm91cFZhcnMiLCJ2YXJzIiwiaiIsInJvb21WYXIiLCJFbnRpdGllcyIsIlZhcmlhYmxlcyIsIlJvb21WYXJpYWJsZSIsImZyb21BcnJheSIsInZhbHVlIiwib2JqIiwiZ3JvdXBfaWQiLCJncm91cF92YXJzIiwicHVzaCIsInNvcnQiLCJhIiwiYiIsImJldF9jaGlwIiwiVHJhbnNmZXJNb25leUV2ZW50IiwiY29kZSIsImdldEJ5dGUiLCJDaGFuZ2VQYXNzRXZlbnQiLCJHaWZ0Q29kZUV2ZW50IiwiZWMiLCJnaWZ0X3ZhbHVlIiwiZ2V0RG91YmxlIiwiTGlzdEFnZW5jeUV2ZW50IiwibGlzdEFnZW5jeSIsImFyciIsInNJdGVtIiwiYWdlbmN5IiwidXNlcm5hbWUiLCJhZ05hbWUiLCJ6b25lIiwidGVsZWdyYW0iLCJwaG9uZSIsImFkZHJlc3MiLCJmYWNlIiwic3R0IiwiTGVhZGVyQm9hcmRFdmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxXQUFXLEdBQUcsRUFBbEI7QUFDQUEsV0FBVyxDQUFDQyxhQUFaLEdBQTRCO0FBQ3hCQyxFQUFBQSxjQUFjLEVBQUcsSUFETztBQUV4QkMsRUFBQUEsbUJBQW1CLEVBQUcsSUFGRTtBQUd4QkMsRUFBQUEsV0FBVyxFQUFFLElBSFc7QUFJeEJDLEVBQUFBLGdCQUFnQixFQUFHLElBSks7QUFLeEJDLEVBQUFBLGtCQUFrQixFQUFFLElBTEk7QUFNeEJDLEVBQUFBLGVBQWUsRUFBRSxJQU5PO0FBT3hCQyxFQUFBQSxhQUFhLEVBQUUsSUFQUztBQVF4QkMsRUFBQUEsZUFBZSxFQUFFO0FBUk8sQ0FBNUI7QUFVQVQsV0FBVyxDQUFDVSxVQUFaLEdBQXlCQyxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE1BQWxCLENBQXlCO0FBQzlDQyxFQUFBQSxJQUQ4QyxnQkFDekNDLElBRHlDLEVBQ3BDO0FBQ04sU0FBS0MsVUFBTCxHQUFrQkQsSUFBbEI7QUFDSCxHQUg2QztBQUk5Q0UsRUFBQUEsWUFKOEMsMEJBSWhDO0FBQ1YsV0FBTyxLQUFLRCxVQUFaO0FBQ0gsR0FONkM7QUFPOUNFLEVBQUFBLFNBUDhDLHFCQU9wQ0MsS0FQb0MsRUFPOUI7QUFDWixXQUFPLElBQVA7QUFDSCxHQVQ2QztBQVU5Q0MsRUFBQUEsT0FWOEMscUJBVXJDO0FBQ0wsV0FBTyxJQUFQO0FBQ0g7QUFaNkMsQ0FBekIsQ0FBekI7QUFjQXBCLFdBQVcsQ0FBQ3FCLFlBQVosR0FBMkJyQixXQUFXLENBQUNVLFVBQVosQ0FBdUJHLE1BQXZCLENBQThCO0FBQ3JEQyxFQUFBQSxJQURxRCxrQkFDL0M7QUFDRixTQUFLUSxNQUFMLENBQVl0QixXQUFXLENBQUNDLGFBQVosQ0FBMEJHLFdBQXRDO0FBQ0gsR0FIb0Q7QUFJckRjLEVBQUFBLFNBSnFELHFCQUkzQ0MsS0FKMkMsRUFJckM7QUFDWixTQUFLSSxJQUFMLEdBQVlKLEtBQUssQ0FBQ0ssWUFBTixDQUFtQixHQUFuQixDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZTixLQUFLLENBQUNPLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBWjtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBUm9ELENBQTlCLENBQTNCO0FBVUExQixXQUFXLENBQUMyQixnQkFBWixHQUErQjNCLFdBQVcsQ0FBQ1UsVUFBWixDQUF1QkcsTUFBdkIsQ0FBOEI7QUFDekRDLEVBQUFBLElBRHlELGtCQUNuRDtBQUNGLFNBQUtRLE1BQUwsQ0FBWXRCLFdBQVcsQ0FBQ0MsYUFBWixDQUEwQkksZ0JBQXRDO0FBQ0gsR0FId0Q7QUFJekRhLEVBQUFBLFNBSnlELHFCQUkvQ0MsS0FKK0MsRUFJekM7QUFDWixTQUFLSSxJQUFMLEdBQVlKLEtBQUssQ0FBQ0ssWUFBTixDQUFtQixHQUFuQixDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZTixLQUFLLENBQUNPLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBWjtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBUndELENBQTlCLENBQS9CO0FBVUExQixXQUFXLENBQUM0QixVQUFaLEdBQXlCNUIsV0FBVyxDQUFDVSxVQUFaLENBQXVCRyxNQUF2QixDQUE4QjtBQUNuREMsRUFBQUEsSUFEbUQsa0JBQzdDO0FBQ0YsU0FBS1EsTUFBTCxDQUFZWCxXQUFXLENBQUNrQixRQUFaLENBQXFCQyxLQUFyQixDQUEyQkMsS0FBdkM7QUFDSCxHQUhrRDtBQUluRGIsRUFBQUEsU0FKbUQscUJBSXpDQyxLQUp5QyxFQUluQztBQUNaLFNBQUthLElBQUwsR0FBWWIsS0FBSyxDQUFDYSxJQUFsQjtBQUNBLFNBQUtQLElBQUwsR0FBWU4sS0FBSyxDQUFDTSxJQUFsQjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBUmtEO0FBU25EUSxFQUFBQSxXQVRtRCx5QkFTdEM7QUFDVCxXQUFPLEtBQUtELElBQVo7QUFDSCxHQVhrRDtBQVluREUsRUFBQUEsT0FabUQscUJBWTFDO0FBQ0wsV0FBTyxLQUFLVCxJQUFaO0FBQ0g7QUFka0QsQ0FBOUIsQ0FBekI7QUFnQkF6QixXQUFXLENBQUNtQyxhQUFaLEdBQTRCbkMsV0FBVyxDQUFDVSxVQUFaLENBQXVCRyxNQUF2QixDQUE4QjtBQUN0REMsRUFBQUEsSUFEc0Qsa0JBQ2hEO0FBQ0YsU0FBS1EsTUFBTCxDQUFZWCxXQUFXLENBQUNrQixRQUFaLENBQXFCQyxLQUFyQixDQUEyQk0sU0FBdkM7QUFDSCxHQUhxRDtBQUl0RGxCLEVBQUFBLFNBSnNELHFCQUk1Q0MsS0FKNEMsRUFJdEM7QUFDWixTQUFLa0IsSUFBTCxHQUFZbEIsS0FBSyxDQUFDa0IsSUFBbEI7QUFDQSxXQUFPLElBQVA7QUFDSCxHQVBxRDtBQVF0REMsRUFBQUEsV0FSc0QseUJBUXpDO0FBQ1QsV0FBTyxLQUFLRCxJQUFaO0FBQ0g7QUFWcUQsQ0FBOUIsQ0FBNUI7QUFZQXJDLFdBQVcsQ0FBQ3VDLGtCQUFaLEdBQWlDdkMsV0FBVyxDQUFDVSxVQUFaLENBQXVCRyxNQUF2QixDQUE4QjtBQUMzREMsRUFBQUEsSUFEMkQsa0JBQ3JEO0FBQ0YsU0FBS1EsTUFBTCxDQUFZdEIsV0FBVyxDQUFDQyxhQUFaLENBQTBCRSxtQkFBdEM7QUFDSCxHQUgwRDtBQUkzRGUsRUFBQUEsU0FKMkQscUJBSWpEQyxLQUppRCxFQUkzQztBQUNaLFNBQUtxQixNQUFMLEdBQWNyQixLQUFLLENBQUNzQixNQUFOLENBQWEsSUFBYixDQUFkO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFQMEQsQ0FBOUIsQ0FBakM7QUFTQXpDLFdBQVcsQ0FBQzBDLGNBQVosR0FBNkIxQyxXQUFXLENBQUNVLFVBQVosQ0FBdUJHLE1BQXZCLENBQThCO0FBQ3ZEQyxFQUFBQSxJQUR1RCxrQkFDakQ7QUFDRixTQUFLUSxNQUFMLENBQVl0QixXQUFXLENBQUNDLGFBQVosQ0FBMEJDLGNBQXRDO0FBQ0gsR0FIc0Q7QUFJdkRnQixFQUFBQSxTQUp1RCxxQkFJN0NDLEtBSjZDLEVBSXZDO0FBQ1osU0FBS3dCLE1BQUwsR0FBYyxFQUFkO0FBQ0EsUUFBSUEsTUFBTSxHQUFHeEIsS0FBSyxDQUFDTyxTQUFOLENBQWdCLFFBQWhCLENBQWI7O0FBQ0EsU0FBSSxJQUFJa0IsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRCxNQUFNLENBQUNFLElBQVAsRUFBbkIsRUFBaUNELENBQUMsRUFBbEMsRUFBcUM7QUFDakMsVUFBSUUsUUFBUSxHQUFHSCxNQUFNLENBQUNJLEdBQVAsQ0FBV0gsQ0FBWCxFQUFjSSxTQUFkLEVBQWY7QUFDQSxVQUFJQyxPQUFPLEdBQUdILFFBQVEsQ0FBQ3RCLFlBQVQsQ0FBc0IsT0FBdEIsQ0FBZDtBQUNBLFVBQUkwQixTQUFTLEdBQUdKLFFBQVEsQ0FBQ3BCLFNBQVQsQ0FBbUIsTUFBbkIsQ0FBaEI7QUFFQSxVQUFJeUIsSUFBSSxHQUFHLEVBQVg7O0FBQ0EsV0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdGLFNBQVMsQ0FBQ0wsSUFBVixFQUFuQixFQUFvQ08sQ0FBQyxFQUFyQyxFQUF3QztBQUNwQyxZQUFJQyxPQUFPLEdBQUcxQyxXQUFXLENBQUNrQixRQUFaLENBQXFCeUIsUUFBckIsQ0FBOEJDLFNBQTlCLENBQXdDQyxZQUF4QyxDQUFxREMsU0FBckQsQ0FBK0RQLFNBQVMsQ0FBQ0gsR0FBVixDQUFjSyxDQUFkLEVBQWlCSixTQUFqQixFQUEvRCxDQUFkO0FBQ0FHLFFBQUFBLElBQUksQ0FBQ0UsT0FBTyxDQUFDdEMsSUFBVCxDQUFKLEdBQXFCc0MsT0FBTyxDQUFDSyxLQUFSLENBQWNBLEtBQW5DO0FBQ0g7O0FBQ0QsVUFBSUMsR0FBRyxHQUFHLEVBQVY7QUFDQUEsTUFBQUEsR0FBRyxDQUFDQyxRQUFKLEdBQWVYLE9BQWY7QUFDQVUsTUFBQUEsR0FBRyxDQUFDRSxVQUFKLEdBQWlCVixJQUFqQjtBQUNBLFdBQUtSLE1BQUwsQ0FBWW1CLElBQVosQ0FBaUJILEdBQWpCO0FBQ0g7O0FBQ0QsU0FBS2hCLE1BQUwsQ0FBWW9CLElBQVosQ0FBaUIsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQzdCLGFBQU9ELENBQUMsQ0FBQ0gsVUFBRixDQUFhSyxRQUFiLEdBQXdCRCxDQUFDLENBQUNKLFVBQUYsQ0FBYUssUUFBNUM7QUFDSCxLQUZEO0FBR0EsV0FBTyxJQUFQO0FBQ0g7QUExQnNELENBQTlCLENBQTdCO0FBNEJBbEUsV0FBVyxDQUFDbUUsa0JBQVosR0FBaUNuRSxXQUFXLENBQUNVLFVBQVosQ0FBdUJHLE1BQXZCLENBQThCO0FBQzNEQyxFQUFBQSxJQUQyRCxrQkFDckQ7QUFDRixTQUFLUSxNQUFMLENBQVl0QixXQUFXLENBQUNDLGFBQVosQ0FBMEJLLGtCQUF0QztBQUNILEdBSDBEO0FBSTNEWSxFQUFBQSxTQUoyRCxxQkFJakRDLEtBSmlELEVBSTNDO0FBQ1osU0FBS2lELElBQUwsR0FBWWpELEtBQUssQ0FBQ2tELE9BQU4sQ0FBYyxHQUFkLENBQVo7QUFDQSxXQUFPLElBQVA7QUFDSDtBQVAwRCxDQUE5QixDQUFqQztBQVNBckUsV0FBVyxDQUFDc0UsZUFBWixHQUE4QnRFLFdBQVcsQ0FBQ1UsVUFBWixDQUF1QkcsTUFBdkIsQ0FBOEI7QUFDeERDLEVBQUFBLElBRHdELGtCQUNsRDtBQUNGLFNBQUtRLE1BQUwsQ0FBWXRCLFdBQVcsQ0FBQ0MsYUFBWixDQUEwQk0sZUFBdEM7QUFDSCxHQUh1RDtBQUl4RFcsRUFBQUEsU0FKd0QscUJBSTlDQyxLQUo4QyxFQUl4QztBQUNaLFNBQUtpRCxJQUFMLEdBQVlqRCxLQUFLLENBQUNrRCxPQUFOLENBQWMsR0FBZCxDQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFQdUQsQ0FBOUIsQ0FBOUI7QUFTQXJFLFdBQVcsQ0FBQ3VFLGFBQVosR0FBNEJ2RSxXQUFXLENBQUNVLFVBQVosQ0FBdUJHLE1BQXZCLENBQThCO0FBQ3REQyxFQUFBQSxJQURzRCxrQkFDaEQ7QUFDRixTQUFLUSxNQUFMLENBQVl0QixXQUFXLENBQUNDLGFBQVosQ0FBMEJPLGFBQXRDO0FBQ0gsR0FIcUQ7QUFJdERVLEVBQUFBLFNBSnNELHFCQUk1Q0MsS0FKNEMsRUFJdEM7QUFDWixRQUFHQSxLQUFLLENBQUNLLFlBQU4sQ0FBbUIsSUFBbkIsS0FBNEIsSUFBL0IsRUFBb0M7QUFDaEMsV0FBS2dELEVBQUwsR0FBVXJELEtBQUssQ0FBQ0ssWUFBTixDQUFtQixJQUFuQixDQUFWO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS2lELFVBQUwsR0FBa0J0RCxLQUFLLENBQUN1RCxTQUFOLENBQWdCLEdBQWhCLENBQWxCO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0g7QUFYcUQsQ0FBOUIsQ0FBNUI7QUFhQTFFLFdBQVcsQ0FBQzJFLGVBQVosR0FBOEIzRSxXQUFXLENBQUNVLFVBQVosQ0FBdUJHLE1BQXZCLENBQThCO0FBQ3hEQyxFQUFBQSxJQUR3RCxrQkFDbEQ7QUFDRixTQUFLUSxNQUFMLENBQVl0QixXQUFXLENBQUNDLGFBQVosQ0FBMEJRLGVBQXRDO0FBQ0gsR0FIdUQ7QUFJeERTLEVBQUFBLFNBSndELHFCQUk5Q0MsS0FKOEMsRUFJeEM7QUFDWixRQUFJeUQsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHMUQsS0FBSyxDQUFDTyxTQUFOLENBQWdCLEdBQWhCLENBQVY7O0FBQ0EsU0FBSSxJQUFJa0IsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHaUMsR0FBRyxDQUFDaEMsSUFBSixFQUFuQixFQUE4QkQsQ0FBQyxFQUEvQixFQUFrQztBQUM5QixVQUFJa0MsS0FBSyxHQUFHRCxHQUFHLENBQUM5QixHQUFKLENBQVFILENBQVIsRUFBV0ksU0FBWCxFQUFaO0FBQ0EsVUFBSStCLE1BQU0sR0FBRyxFQUFiO0FBQ0FBLE1BQUFBLE1BQU0sQ0FBQ0MsUUFBUCxHQUFrQkYsS0FBSyxDQUFDdEQsWUFBTixDQUFtQixJQUFuQixDQUFsQjtBQUNBdUQsTUFBQUEsTUFBTSxDQUFDaEUsSUFBUCxHQUFjK0QsS0FBSyxDQUFDdEQsWUFBTixDQUFtQixJQUFuQixDQUFkO0FBQ0F1RCxNQUFBQSxNQUFNLENBQUNFLE1BQVAsR0FBZ0JILEtBQUssQ0FBQ3RELFlBQU4sQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDQXVELE1BQUFBLE1BQU0sQ0FBQ0csSUFBUCxHQUFjSixLQUFLLENBQUN0RCxZQUFOLENBQW1CLElBQW5CLENBQWQ7QUFDQXVELE1BQUFBLE1BQU0sQ0FBQ0ksUUFBUCxHQUFrQkwsS0FBSyxDQUFDdEQsWUFBTixDQUFtQixJQUFuQixDQUFsQjtBQUNBdUQsTUFBQUEsTUFBTSxDQUFDSyxLQUFQLEdBQWVOLEtBQUssQ0FBQ3RELFlBQU4sQ0FBbUIsR0FBbkIsQ0FBZjtBQUNBdUQsTUFBQUEsTUFBTSxDQUFDTSxPQUFQLEdBQWlCUCxLQUFLLENBQUN0RCxZQUFOLENBQW1CLEtBQW5CLENBQWpCO0FBQ0F1RCxNQUFBQSxNQUFNLENBQUNPLElBQVAsR0FBY1IsS0FBSyxDQUFDdEQsWUFBTixDQUFtQixJQUFuQixDQUFkO0FBQ0F1RCxNQUFBQSxNQUFNLENBQUNRLEdBQVAsR0FBYTNDLENBQUMsR0FBQyxDQUFmO0FBQ0FnQyxNQUFBQSxVQUFVLENBQUNkLElBQVgsQ0FBZ0JpQixNQUFoQjtBQUNIOztBQUNELFdBQU9ILFVBQVA7QUFDSDtBQXRCdUQsQ0FBOUIsQ0FBOUI7QUF3QkE1RSxXQUFXLENBQUNxQixZQUFaLEdBQTJCckIsV0FBVyxDQUFDVSxVQUFaLENBQXVCRyxNQUF2QixDQUE4QjtBQUNyREMsRUFBQUEsSUFEcUQsa0JBQy9DO0FBQ0YsU0FBS1EsTUFBTCxDQUFZdEIsV0FBVyxDQUFDQyxhQUFaLENBQTBCRyxXQUF0QztBQUNILEdBSG9EO0FBSXJEYyxFQUFBQSxTQUpxRCxxQkFJM0NDLEtBSjJDLEVBSXJDO0FBQ1osV0FBTyxJQUFQO0FBQ0g7QUFOb0QsQ0FBOUIsQ0FBM0I7QUFRQW5CLFdBQVcsQ0FBQ3dGLGdCQUFaLEdBQStCeEYsV0FBVyxDQUFDVSxVQUFaLENBQXVCRyxNQUF2QixDQUE4QjtBQUN6REMsRUFBQUEsSUFEeUQsa0JBQ25EO0FBQ0YsU0FBS1EsTUFBTCxDQUFZdEIsV0FBVyxDQUFDQyxhQUFaLENBQTBCSSxnQkFBdEM7QUFDSCxHQUh3RDtBQUl6RGEsRUFBQUEsU0FKeUQscUJBSS9DQyxLQUorQyxFQUl6QztBQUNaLFdBQU8sSUFBUDtBQUNIO0FBTndELENBQTlCLENBQS9CO0FBUUFzRSxNQUFNLENBQUN6RixXQUFQLEdBQXFCQSxXQUFyQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IENhc2lub0V2ZW50ID0ge307XG5DYXNpbm9FdmVudC5SRVNQT05TRV9OQU1FID0ge1xuICAgIEdST1VQX0dBTUVfUkVTIDogXCJnMVwiLFxuICAgIFFVSUNLX0pPSU5fR0FNRV9SRVM6ICBcImcyXCIsXG4gICAgSElTVE9SWV9SRVM6IFwiZzRcIixcbiAgICBMRUFERVJfQk9BUkRfUkVTIDogXCJnNVwiLFxuICAgIFRSQU5TRkVSX01PTkVZX1JFUzogXCJwMVwiLFxuICAgIENIQU5HRV9QQVNTX1JFUzogXCJwMlwiLFxuICAgIEdJRlRfQ09ERV9SRVM6IFwicDNcIixcbiAgICBMSVNUX0FHRU5DWV9SRVM6IFwicDRcIlxufVxuQ2FzaW5vRXZlbnQuX0Jhc2VFdmVudCA9IFNtYXJ0Rm94U0RLLkNsYXNzLmV4dGVuZCh7XG4gICAgY3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5fZXZlbnROYW1lID0gbmFtZTtcbiAgICB9LFxuICAgIGdldEV2ZW50TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnROYW1lO1xuICAgIH0sXG4gICAgZnJvbUV2ZW50KGV2ZW50KXtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICB0b0V2ZW50KCl7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuQ2FzaW5vRXZlbnQuSGlzdG9yeUV2ZW50ID0gQ2FzaW5vRXZlbnQuX0Jhc2VFdmVudC5leHRlbmQoe1xuICAgIGN0b3IoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoQ2FzaW5vRXZlbnQuUkVTUE9OU0VfTkFNRS5ISVNUT1JZX1JFUyk7XG4gICAgfSxcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xuICAgICAgICB0aGlzLmdhbWUgPSBldmVudC5nZXRVdGZTdHJpbmcoXCJnXCIpO1xuICAgICAgICB0aGlzLmRhdGEgPSBldmVudC5nZXRTQXJyYXkoXCJkXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbkNhc2lub0V2ZW50LkxlYWRlcmJvYXJkRXZlbnQgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihDYXNpbm9FdmVudC5SRVNQT05TRV9OQU1FLkxFQURFUl9CT0FSRF9SRVMpO1xuICAgIH0sXG4gICAgZnJvbUV2ZW50KGV2ZW50KXtcbiAgICAgICAgdGhpcy5nYW1lID0gZXZlbnQuZ2V0VXRmU3RyaW5nKFwiZ1wiKTtcbiAgICAgICAgdGhpcy5kYXRhID0gZXZlbnQuZ2V0U0FycmF5KFwiZFwiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5DYXNpbm9FdmVudC5Mb2dpbkV2ZW50ID0gQ2FzaW5vRXZlbnQuX0Jhc2VFdmVudC5leHRlbmQoe1xuICAgIGN0b3IoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuTE9HSU4pO1xuICAgIH0sXG4gICAgZnJvbUV2ZW50KGV2ZW50KXtcbiAgICAgICAgdGhpcy51c2VyID0gZXZlbnQudXNlcjtcbiAgICAgICAgdGhpcy5kYXRhID0gZXZlbnQuZGF0YTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRVc2VySW5mbygpe1xuICAgICAgICByZXR1cm4gdGhpcy51c2VyO1xuICAgIH0sXG4gICAgZ2V0RGF0YSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhO1xuICAgIH1cbn0pO1xuQ2FzaW5vRXZlbnQuUm9vbUpvaW5FdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkV2ZW50LlJPT01fSk9JTik7XG4gICAgfSxcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xuICAgICAgICB0aGlzLnJvb20gPSBldmVudC5yb29tO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFJvb21JbmZvKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnJvb207XG4gICAgfVxufSlcbkNhc2lub0V2ZW50LlF1aWNrSm9pbkdhbWVFdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuUVVJQ0tfSk9JTl9HQU1FX1JFUyk7XG4gICAgfSxcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xuICAgICAgICB0aGlzLnJvb21JZCA9IGV2ZW50LmdldEludChcImlkXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbkNhc2lub0V2ZW50Lkdyb3VwR2FtZUV2ZW50ID0gQ2FzaW5vRXZlbnQuX0Jhc2VFdmVudC5leHRlbmQoe1xuICAgIGN0b3IoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoQ2FzaW5vRXZlbnQuUkVTUE9OU0VfTkFNRS5HUk9VUF9HQU1FX1JFUyk7XG4gICAgfSxcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xuICAgICAgICB0aGlzLmdyb3VwcyA9IFtdO1xuICAgICAgICBsZXQgZ3JvdXBzID0gZXZlbnQuZ2V0U0FycmF5KFwiZ3JvdXBzXCIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ3JvdXBzLnNpemUoKTtpKyspe1xuICAgICAgICAgICAgbGV0IG9iakdyb3VwID0gZ3JvdXBzLmdldChpKS5nZXRPYmplY3QoKTtcbiAgICAgICAgICAgIGxldCBncm91cElkID0gb2JqR3JvdXAuZ2V0VXRmU3RyaW5nKFwiZ3JvdXBcIik7XG4gICAgICAgICAgICBsZXQgZ3JvdXBWYXJzID0gb2JqR3JvdXAuZ2V0U0FycmF5KFwidmFyc1wiKTtcblxuICAgICAgICAgICAgbGV0IHZhcnMgPSB7fTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBncm91cFZhcnMuc2l6ZSgpO2orKyl7XG4gICAgICAgICAgICAgICAgbGV0IHJvb21WYXIgPSBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5WYXJpYWJsZXMuUm9vbVZhcmlhYmxlLmZyb21BcnJheShncm91cFZhcnMuZ2V0KGopLmdldE9iamVjdCgpKTtcbiAgICAgICAgICAgICAgICB2YXJzW3Jvb21WYXIubmFtZV0gPSByb29tVmFyLnZhbHVlLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xuICAgICAgICAgICAgb2JqLmdyb3VwX2lkID0gZ3JvdXBJZDtcbiAgICAgICAgICAgIG9iai5ncm91cF92YXJzID0gdmFycztcbiAgICAgICAgICAgIHRoaXMuZ3JvdXBzLnB1c2gob2JqKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdyb3Vwcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgICByZXR1cm4gYS5ncm91cF92YXJzLmJldF9jaGlwIC0gYi5ncm91cF92YXJzLmJldF9jaGlwO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSlcbkNhc2lub0V2ZW50LlRyYW5zZmVyTW9uZXlFdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuVFJBTlNGRVJfTU9ORVlfUkVTKTtcbiAgICB9LFxuICAgIGZyb21FdmVudChldmVudCl7XG4gICAgICAgIHRoaXMuY29kZSA9IGV2ZW50LmdldEJ5dGUoXCJjXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbkNhc2lub0V2ZW50LkNoYW5nZVBhc3NFdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuQ0hBTkdFX1BBU1NfUkVTKTtcbiAgICB9LFxuICAgIGZyb21FdmVudChldmVudCl7XG4gICAgICAgIHRoaXMuY29kZSA9IGV2ZW50LmdldEJ5dGUoXCJjXCIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbkNhc2lub0V2ZW50LkdpZnRDb2RlRXZlbnQgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihDYXNpbm9FdmVudC5SRVNQT05TRV9OQU1FLkdJRlRfQ09ERV9SRVMpO1xuICAgIH0sXG4gICAgZnJvbUV2ZW50KGV2ZW50KXtcbiAgICAgICAgaWYoZXZlbnQuZ2V0VXRmU3RyaW5nKFwiZWNcIikgIT0gbnVsbCl7XG4gICAgICAgICAgICB0aGlzLmVjID0gZXZlbnQuZ2V0VXRmU3RyaW5nKFwiZWNcIik7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5naWZ0X3ZhbHVlID0gZXZlbnQuZ2V0RG91YmxlKFwiY1wiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbkNhc2lub0V2ZW50Lkxpc3RBZ2VuY3lFdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuTElTVF9BR0VOQ1lfUkVTKTtcbiAgICB9LFxuICAgIGZyb21FdmVudChldmVudCl7XG4gICAgICAgIGxldCBsaXN0QWdlbmN5ID0gW107XG4gICAgICAgIGxldCBhcnIgPSBldmVudC5nZXRTQXJyYXkoXCJkXCIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYXJyLnNpemUoKTtpKyspe1xuICAgICAgICAgICAgbGV0IHNJdGVtID0gYXJyLmdldChpKS5nZXRPYmplY3QoKTtcbiAgICAgICAgICAgIGxldCBhZ2VuY3kgPSB7fTtcbiAgICAgICAgICAgIGFnZW5jeS51c2VybmFtZSA9IHNJdGVtLmdldFV0ZlN0cmluZyhcInVuXCIpO1xuICAgICAgICAgICAgYWdlbmN5Lm5hbWUgPSBzSXRlbS5nZXRVdGZTdHJpbmcoXCJkblwiKTtcbiAgICAgICAgICAgIGFnZW5jeS5hZ05hbWUgPSBzSXRlbS5nZXRVdGZTdHJpbmcoXCJhZ1wiKTtcbiAgICAgICAgICAgIGFnZW5jeS56b25lID0gc0l0ZW0uZ2V0VXRmU3RyaW5nKFwibG9cIik7XG4gICAgICAgICAgICBhZ2VuY3kudGVsZWdyYW0gPSBzSXRlbS5nZXRVdGZTdHJpbmcoXCJ0bFwiKTtcbiAgICAgICAgICAgIGFnZW5jeS5waG9uZSA9IHNJdGVtLmdldFV0ZlN0cmluZyhcInBcIik7XG4gICAgICAgICAgICBhZ2VuY3kuYWRkcmVzcyA9IHNJdGVtLmdldFV0ZlN0cmluZyhcImFkZFwiKTtcbiAgICAgICAgICAgIGFnZW5jeS5mYWNlID0gc0l0ZW0uZ2V0VXRmU3RyaW5nKFwiZmJcIik7XG4gICAgICAgICAgICBhZ2VuY3kuc3R0ID0gaSsxO1xuICAgICAgICAgICAgbGlzdEFnZW5jeS5wdXNoKGFnZW5jeSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RBZ2VuY3k7XG4gICAgfVxufSk7XG5DYXNpbm9FdmVudC5IaXN0b3J5RXZlbnQgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihDYXNpbm9FdmVudC5SRVNQT05TRV9OQU1FLkhJU1RPUllfUkVTKTtcbiAgICB9LFxuICAgIGZyb21FdmVudChldmVudCl7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuQ2FzaW5vRXZlbnQuTGVhZGVyQm9hcmRFdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuTEVBREVSX0JPQVJEX1JFUyk7XG4gICAgfSxcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbndpbmRvdy5DYXNpbm9FdmVudCA9IENhc2lub0V2ZW50O1xuIl19
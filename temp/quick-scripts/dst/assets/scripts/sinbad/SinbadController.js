
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '35f4fj59QlA07DAjGMiBcly', 'SinbadController');
// scripts/sinbad/SinbadController.js

"use strict";

var SinbadEvent = require('SinbadEvent');

var SinbadController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(SinbadEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(SinbadEvent.RESPONSE_NAME.RESULT_RES, this.onUserResultEvent, this);
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onEventRoomJoin: function onEventRoomJoin(event) {
    this._super(event);

    UIManger.show("UISinbadLobby", {
      pop: true,
      src: "sinbad"
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

    UIManger.show("UISinbadHistoryTransaction", {
      pop: true,
      src: 'sinbad',
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
      item.win_type = "Th???ng";
      items.push(item);
    }

    UIManger.show("UISinbadRank", {
      pop: true,
      src: 'sinbad',
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
    var userBet = new SinbadEvent.ResultEvent().fromEvent(event);
    this.getUI().SinbadRun(userBet);
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new SinbadController("UISinbad", "sinbad");
  return instance;
};

SmartFoxSDK.SinbadController = module.exports = getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIlNpbmJhZEV2ZW50IiwicmVxdWlyZSIsIlNpbmJhZENvbnRyb2xsZXIiLCJTbWFydEZveFNESyIsIkJhc2VDb250cm9sbGVyIiwiZXh0ZW5kIiwibV90YWJsZUluZm8iLCJyZWdpc3RlckV2ZW50cyIsIl9zdXBlciIsIlpvbmVJbnN0YW5jZSIsImFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24iLCJSRVNQT05TRV9OQU1FIiwiUkVTVUxUX1JFUyIsIm9uVXNlclJlc3VsdEV2ZW50IiwicmVtb3ZlRXZlbnRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbiIsIm9uRXZlbnRMb2dpbiIsImV2ZW50IiwiX3JlcXVlc3RKb2luUm9vbSIsInpvbmVOYW1lIiwib25FdmVudFJvb21Kb2luIiwiVUlNYW5nZXIiLCJzaG93IiwicG9wIiwic3JjIiwib25Vc2VyVmFyaWFibGVzVXBkYXRlIiwiZ2V0VUkiLCJ1cGRhdGVVc2VyVmFyaWFibGVTbG90Iiwib25IaXN0b3J5RXZlbnQiLCJkYXRhIiwiZ2V0U0FycmF5IiwiaXRlbXMiLCJpIiwic2l6ZSIsInNJdGVtIiwiZ2V0IiwiZ2V0T2JqZWN0IiwiaXRlbSIsInNlc3Npb24iLCJnZXREb3VibGUiLCJ0b0ZpeGVkIiwidGltZSIsImdldFV0ZlN0cmluZyIsInN0YWtlcyIsIndpbiIsInJlc3VsdE1hcCIsImdldEJ5dGVBcnJheSIsImxpbmV3aW4iLCJwdXNoIiwib25MZWFkZXJCb2FyZEV2ZW50IiwiYWNjb3VudCIsIndpbl90eXBlIiwib25FdmVudFVzZXJFeGl0Um9vbSIsInVzZXIiLCJpc0l0TWUiLCJub2RlIiwiYWN0aXZlIiwidXNlckJldCIsIlJlc3VsdEV2ZW50IiwiZnJvbUV2ZW50IiwiU2luYmFkUnVuIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7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RDtBQXNEckRxQixFQUFBQSxtQkF0RHFELCtCQXNEakNuQyxLQXREaUMsRUFzRDNCO0FBQ3RCLFFBQUlvQyxJQUFJLEdBQUdwQyxLQUFLLENBQUNvQyxJQUFqQjs7QUFDQSxRQUFHQSxJQUFJLENBQUNDLE1BQVIsRUFBZTtBQUNYLFVBQUksS0FBSzVCLEtBQUwsTUFBZ0IsSUFBcEIsRUFDSSxLQUFLQSxLQUFMLEdBQWE2QixJQUFiLENBQWtCQyxNQUFsQixHQUEyQixLQUEzQjtBQUNKbkMsTUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWMsUUFBZDtBQUNIO0FBQ0osR0E3RG9EO0FBOERyRFQsRUFBQUEsaUJBOURxRCw2QkE4RG5DSSxLQTlEbUMsRUE4RDdCO0FBQ3BCLFFBQUl3QyxPQUFPLEdBQUcsSUFBSXpELFdBQVcsQ0FBQzBELFdBQWhCLEdBQThCQyxTQUE5QixDQUF3QzFDLEtBQXhDLENBQWQ7QUFDQSxTQUFLUyxLQUFMLEdBQWFrQyxTQUFiLENBQXVCSCxPQUF2QjtBQUNIO0FBakVvRCxDQUFsQyxDQUF2QjtBQW9FQSxJQUFJSSxRQUFRLEdBQUcsSUFBZjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFZO0FBQzFCLE1BQUdELFFBQVEsSUFBSSxJQUFmLEVBQ0lBLFFBQVEsR0FBRyxJQUFJM0QsZ0JBQUosQ0FBcUIsVUFBckIsRUFBaUMsUUFBakMsQ0FBWDtBQUNKLFNBQU8yRCxRQUFQO0FBQ0gsQ0FKRDs7QUFLQTFELFdBQVcsQ0FBQ0QsZ0JBQVosR0FBK0I2RCxNQUFNLENBQUNDLE9BQVAsR0FBaUJGLFdBQVcsRUFBM0QiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBTaW5iYWRFdmVudCA9IHJlcXVpcmUoJ1NpbmJhZEV2ZW50JylcbmxldCBTaW5iYWRDb250cm9sbGVyID0gU21hcnRGb3hTREsuQmFzZUNvbnRyb2xsZXIuZXh0ZW5kKHtcbiAgICBtX3RhYmxlSW5mbzogbnVsbCxcbiAgICByZWdpc3RlckV2ZW50cygpe1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFNpbmJhZEV2ZW50LlJFU1BPTlNFX05BTUUuUkVTVUxUX1JFUywgdGhpcy5vblVzZXJSZXN1bHRFdmVudCwgdGhpcyk7XG4gICAgfSxcbiAgICByZW1vdmVFdmVudHMoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihTaW5iYWRFdmVudC5SRVNQT05TRV9OQU1FLlJFU1VMVF9SRVMsIHRoaXMub25Vc2VyUmVzdWx0RXZlbnQsIHRoaXMpO1xuICAgIH0sXG4gICAgb25FdmVudExvZ2luKGV2ZW50KXtcbiAgICAgICAgdGhpcy5fc3VwZXIoZXZlbnQpO1xuICAgICAgICB0aGlzLl9yZXF1ZXN0Sm9pblJvb20odGhpcy56b25lTmFtZSk7XG4gICAgfSxcbiAgICBvbkV2ZW50Um9vbUpvaW4oZXZlbnQpe1xuICAgICAgICB0aGlzLl9zdXBlcihldmVudCk7XG4gICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSVNpbmJhZExvYmJ5XCIsIHtwb3A6IHRydWUsIHNyYzogXCJzaW5iYWRcIn0pO1xuICAgIH0sXG4gICAgb25Vc2VyVmFyaWFibGVzVXBkYXRlKGV2ZW50KXtcbiAgICAgICAgdGhpcy5fc3VwZXIoZXZlbnQpO1xuICAgICAgICBpZiAodGhpcy5nZXRVSSgpICE9IG51bGwpXG4gICAgICAgICAgICB0aGlzLmdldFVJKCkudXBkYXRlVXNlclZhcmlhYmxlU2xvdChldmVudCk7XG4gICAgfSxcbiAgICBvbkhpc3RvcnlFdmVudChldmVudCl7XG4gICAgICAgIGxldCBkYXRhID0gZXZlbnQuZ2V0U0FycmF5KFwiZFwiKTtcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBkYXRhLnNpemUoKTsgaSsrKXtcbiAgICAgICAgICAgIGxldCBzSXRlbSA9IGRhdGEuZ2V0KGkpLmdldE9iamVjdCgpO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB7fTtcbiAgICAgICAgICAgIGl0ZW0uc2Vzc2lvbiA9IHNJdGVtLmdldERvdWJsZShcImlkXCIpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgICBpdGVtLnRpbWUgPSBzSXRlbS5nZXRVdGZTdHJpbmcoXCJ0XCIpO1xuICAgICAgICAgICAgaXRlbS5zdGFrZXMgPSBzSXRlbS5nZXREb3VibGUoXCJiXCIpO1xuICAgICAgICAgICAgaXRlbS53aW4gPSBzSXRlbS5nZXREb3VibGUoXCJ3XCIpO1xuICAgICAgICAgICAgaXRlbS5yZXN1bHRNYXAgPSBzSXRlbS5nZXRCeXRlQXJyYXkoXCJyc1wiKTtcbiAgICAgICAgICAgIGl0ZW0ubGluZXdpbiA9IHNJdGVtLmdldEJ5dGVBcnJheShcImx3XCIpO1xuICAgICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlTaW5iYWRIaXN0b3J5VHJhbnNhY3Rpb25cIiwge3BvcDogdHJ1ZSwgc3JjOiAnc2luYmFkJywgZGF0YToge2l0ZW1zOiBpdGVtc319KTtcbiAgICB9LFxuICAgIG9uTGVhZGVyQm9hcmRFdmVudChldmVudCl7XG4gICAgICAgIGxldCBkYXRhID0gZXZlbnQuZ2V0U0FycmF5KFwiZFwiKTtcbiAgICAgICAgbGV0IGl0ZW1zID0gW107XG4gICAgICAgIGZvcihsZXQgaSA9IDA7aSA8IGRhdGEuc2l6ZSgpO2krKyl7XG4gICAgICAgICAgICBsZXQgc0l0ZW0gPSBkYXRhLmdldChpKS5nZXRPYmplY3QoKTtcbiAgICAgICAgICAgIGxldCBpdGVtID0ge307XG4gICAgICAgICAgICBpdGVtLnNlc3Npb24gPSBpICsgMTtcbiAgICAgICAgICAgIGl0ZW0uYWNjb3VudCA9IHNJdGVtLmdldFV0ZlN0cmluZyhcImRuXCIpO1xuICAgICAgICAgICAgaXRlbS53aW4gPSBzSXRlbS5nZXREb3VibGUoXCJtXCIpO1xuICAgICAgICAgICAgaXRlbS50aW1lID0gc0l0ZW0uZ2V0VXRmU3RyaW5nKFwidFwiKTtcbiAgICAgICAgICAgIGl0ZW0ud2luX3R5cGUgPSBcIlRo4bqvbmdcIjtcbiAgICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgICAgVUlNYW5nZXIuc2hvdyhcIlVJU2luYmFkUmFua1wiLCB7cG9wOiB0cnVlLCBzcmM6ICdzaW5iYWQnLCBkYXRhOiB7aXRlbXM6IGl0ZW1zfX0pO1xuICAgIH0sXG4gICAgb25FdmVudFVzZXJFeGl0Um9vbShldmVudCl7XG4gICAgICAgIGxldCB1c2VyID0gZXZlbnQudXNlcjtcbiAgICAgICAgaWYodXNlci5pc0l0TWUpe1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VUkoKSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgVUlNYW5nZXIuc2hvdyhcIlVJSG9tZVwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25Vc2VyUmVzdWx0RXZlbnQoZXZlbnQpe1xuICAgICAgICBsZXQgdXNlckJldCA9IG5ldyBTaW5iYWRFdmVudC5SZXN1bHRFdmVudCgpLmZyb21FdmVudChldmVudCk7XG4gICAgICAgIHRoaXMuZ2V0VUkoKS5TaW5iYWRSdW4odXNlckJldCk7XG4gICAgfSxcblxufSk7XG5sZXQgaW5zdGFuY2UgPSBudWxsO1xubGV0IGdldEluc3RhbmNlID0gZnVuY3Rpb24gKCkge1xuICAgIGlmKGluc3RhbmNlID09IG51bGwpXG4gICAgICAgIGluc3RhbmNlID0gbmV3IFNpbmJhZENvbnRyb2xsZXIoXCJVSVNpbmJhZFwiLCBcInNpbmJhZFwiKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5TbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyID0gbW9kdWxlLmV4cG9ydHMgPSBnZXRJbnN0YW5jZSgpO1xuIl19
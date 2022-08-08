
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/UISinbadLobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4921eyuWttMwad/CmxtoYog', 'UISinbadLobby');
// scripts/sinbad/UISinbadLobby.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    arr_lb_hu: {
      type: cc.Label,
      "default": []
    },
    lb_sodu: cc.Label
  },
  onLoad: function onLoad() {
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  onEnable: function onEnable() {
    this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf));
  },
  updateJackpot: function updateJackpot() {
    var keys = ["sinbad1l", "sinbad1k", "sinbad10k"];

    for (var i = 0; i < keys.length; i++) {
      if (SmartFoxSDK.SinbadController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.SinbadController.ZoneInstance.mySelf.getVariable(keys[i]);

        if (variableJackpot) {
          var jackpot = variableJackpot.value;
          var lb_hu = this.arr_lb_hu[i];
          var current_lb_jackpot = lb_hu.string;
          current_lb_jackpot = current_lb_jackpot.split(".").join("");
          var currentHu = parseFloat(current_lb_jackpot);
          Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
        }
      }
    }
  },
  eventPlayGame: function eventPlayGame(event, customData) {
    cc.betLevel = customData;
    mm.Loading.show();
    this.show("UISinbad", {
      pop: true,
      src: "sinbad"
    });
  },
  eventSetting: function eventSetting() {},
  back: function back() {
    var room = SmartFoxSDK.SinbadController.ZoneInstance.getRoomByName("sinbad");

    if (room) {
      SmartFoxSDK.SinbadController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.show('UIHome');
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) - subChip);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9VSVNpbmJhZExvYmJ5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImFycl9sYl9odSIsInR5cGUiLCJMYWJlbCIsImxiX3NvZHUiLCJvbkxvYWQiLCJzY2hlZHVsZSIsInVwZGF0ZUphY2twb3QiLCJvbkVuYWJsZSIsInN0cmluZyIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJHYW1lVmFyaWFibGVzIiwiUG9rZXIiLCJnZXRDaGlwIiwiU21hcnRGb3hTREsiLCJTaW5iYWRDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwia2V5cyIsImkiLCJsZW5ndGgiLCJ2YXJpYWJsZUphY2twb3QiLCJnZXRWYXJpYWJsZSIsImphY2twb3QiLCJ2YWx1ZSIsImxiX2h1IiwiY3VycmVudF9sYl9qYWNrcG90Iiwic3BsaXQiLCJqb2luIiwiY3VycmVudEh1IiwicGFyc2VGbG9hdCIsIm51bWJlclRvIiwiZXZlbnRQbGF5R2FtZSIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImJldExldmVsIiwibW0iLCJMb2FkaW5nIiwic2hvdyIsInBvcCIsInNyYyIsImV2ZW50U2V0dGluZyIsImJhY2siLCJyb29tIiwiZ2V0Um9vbUJ5TmFtZSIsInNlbmQiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiTGVhdmVSb29tUmVxdWVzdCIsInVwZGF0ZVVzZXJWYXJpYWJsZSIsInN1YkNoaXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxLQURGO0FBRVAsaUJBQVM7QUFGRixLQURIO0FBS1JDLElBQUFBLE9BQU8s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NEJDLFdBQVcsQ0FBQ0MsZ0JBQVosQ0FBNkJDLFlBQTdCLENBQTBDQyxNQUF0RSxJQUE4RWtDLE9BQW5HLENBQXRCO0FBQ0g7QUFwREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGFycl9sYl9odToge1xuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9LFxuICAgICAgICBsYl9zb2R1OiBjYy5MYWJlbFxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUphY2twb3QsIDMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoKTtcbiAgICB9LFxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSk7XG4gICAgfSxcbiAgICB1cGRhdGVKYWNrcG90KCl7XG4gICAgICAgIGxldCBrZXlzID0gW1wic2luYmFkMWxcIixcInNpbmJhZDFrXCIsXCJzaW5iYWQxMGtcIl07XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYoU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGVKYWNrcG90ID0gU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLmdldFZhcmlhYmxlKGtleXNbaV0pO1xuICAgICAgICAgICAgICAgIGlmKHZhcmlhYmxlSmFja3BvdCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBqYWNrcG90ID0gdmFyaWFibGVKYWNrcG90LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGJfaHUgPSB0aGlzLmFycl9sYl9odVtpXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfbGJfamFja3BvdCA9IGxiX2h1LnN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9sYl9qYWNrcG90ID0gY3VycmVudF9sYl9qYWNrcG90LnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEh1ID0gcGFyc2VGbG9hdChjdXJyZW50X2xiX2phY2twb3QpO1xuICAgICAgICAgICAgICAgICAgICBVdGlscy5udW1iZXJUbyhsYl9odSwgY3VycmVudEh1LCBqYWNrcG90LCAxMDAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRQbGF5R2FtZShldmVudCwgY3VzdG9tRGF0YSkge1xuICAgICAgICBjYy5iZXRMZXZlbCA9IGN1c3RvbURhdGE7XG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xuICAgICAgICB0aGlzLnNob3coXCJVSVNpbmJhZFwiLCB7cG9wOiB0cnVlLCBzcmM6IFwic2luYmFkXCJ9KTtcbiAgICB9LFxuICAgIGV2ZW50U2V0dGluZygpIHtcblxuICAgIH0sXG4gICAgYmFjaygpe1xuICAgICAgICBsZXQgcm9vbSA9IFNtYXJ0Rm94U0RLLlNpbmJhZENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJzaW5iYWRcIik7XG4gICAgICAgIGlmKHJvb20pe1xuICAgICAgICAgICAgU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChuZXcgU21hcnRGb3hTREsuU21hcnRGb3guUmVxdWVzdHMuU3lzdGVtLkxlYXZlUm9vbVJlcXVlc3Qocm9vbSkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2hvdygnVUlIb21lJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVVzZXJWYXJpYWJsZShzdWJDaGlwKXtcbiAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpLXN1YkNoaXApO1xuICAgIH0sXG59KTtcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/UIZeusLobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '68a77TTRL1Jr6sFN6WXGsGU', 'UIZeusLobby');
// scripts/zeus/UIZeusLobby.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbSoDu: cc.Label,
    arr_lb_hu: {
      type: cc.Label,
      "default": []
    }
  },
  onLoad: function onLoad() {
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  onEnable: function onEnable() {
    this.lbSoDu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf));
  },
  updateJackpot: function updateJackpot() {
    var keys = ["zeus1l", "zeus1k", "zeus10k"];

    for (var i = 0; i < keys.length; i++) {
      var variableJackpot = SmartFoxSDK.ZeusController.ZoneInstance.mySelf.getVariable(keys[i]);

      if (variableJackpot) {
        var jackpot = variableJackpot.value;
        var lb_hu = this.arr_lb_hu[i];
        var current_lb_jackpot = lb_hu.string;
        current_lb_jackpot = current_lb_jackpot.split(".").join("");
        var currentHu = parseFloat(current_lb_jackpot);
        Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
      }
    }
  },
  eventPlayGame: function eventPlayGame(event, customData) {
    cc.betLevel = customData;
    mm.Loading.show();
    this.show("UIZeus", {
      pop: true,
      src: "zeus"
    });
  },
  eventBack: function eventBack() {
    var room = SmartFoxSDK.ZeusController.ZoneInstance.getRoomByName("zeus");

    if (room) {
      SmartFoxSDK.ZeusController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.show('UIHome');
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    this.lbSoDu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) - subChip);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcVUlaZXVzTG9iYnkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGJTb0R1IiwiTGFiZWwiLCJhcnJfbGJfaHUiLCJ0eXBlIiwib25Mb2FkIiwic2NoZWR1bGUiLCJ1cGRhdGVKYWNrcG90Iiwib25FbmFibGUiLCJzdHJpbmciLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwiR2FtZVZhcmlhYmxlcyIsIlBva2VyIiwiZ2V0Q2hpcCIsIlNtYXJ0Rm94U0RLIiwiWmV1c0NvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJteVNlbGYiLCJrZXlzIiwiaSIsImxlbmd0aCIsInZhcmlhYmxlSmFja3BvdCIsImdldFZhcmlhYmxlIiwiamFja3BvdCIsInZhbHVlIiwibGJfaHUiLCJjdXJyZW50X2xiX2phY2twb3QiLCJzcGxpdCIsImpvaW4iLCJjdXJyZW50SHUiLCJwYXJzZUZsb2F0IiwibnVtYmVyVG8iLCJldmVudFBsYXlHYW1lIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwiYmV0TGV2ZWwiLCJtbSIsIkxvYWRpbmciLCJzaG93IiwicG9wIiwic3JjIiwiZXZlbnRCYWNrIiwicm9vbSIsImdldFJvb21CeU5hbWUiLCJzZW5kIiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkxlYXZlUm9vbVJlcXVlc3QiLCJ1cGRhdGVVc2VyVmFyaWFibGUiLCJzdWJDaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBSUosRUFBRSxDQUFDSyxLQURMO0FBRVJDLElBQUFBLFNBQVMsRUFBRTtBQUNQQyxNQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ0ssS0FERjtBQUVQLGlCQUFTO0FB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LkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxiU29EdSAgOiBjYy5MYWJlbCxcclxuICAgICAgICBhcnJfbGJfaHU6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUphY2twb3QsIDMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgdGhpcy5sYlNvRHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVKYWNrcG90KCl7XHJcbiAgICAgICAgbGV0IGtleXMgPSBbXCJ6ZXVzMWxcIixcInpldXMxa1wiLFwiemV1czEwa1wiXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgbGV0IHZhcmlhYmxlSmFja3BvdCA9IFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYuZ2V0VmFyaWFibGUoa2V5c1tpXSk7XHJcbiAgICAgICAgICAgIGlmKHZhcmlhYmxlSmFja3BvdCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgamFja3BvdCA9IHZhcmlhYmxlSmFja3BvdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIGxldCBsYl9odSA9IHRoaXMuYXJyX2xiX2h1W2ldO1xyXG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfbGJfamFja3BvdCA9IGxiX2h1LnN0cmluZztcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRfbGJfamFja3BvdCA9IGN1cnJlbnRfbGJfamFja3BvdC5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SHUgPSBwYXJzZUZsb2F0KGN1cnJlbnRfbGJfamFja3BvdCk7XHJcbiAgICAgICAgICAgICAgICBVdGlscy5udW1iZXJUbyhsYl9odSwgY3VycmVudEh1LCBqYWNrcG90LCAxMDAwLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudFBsYXlHYW1lKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgY2MuYmV0TGV2ZWwgPSBjdXN0b21EYXRhO1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2hvdyhcIlVJWmV1c1wiLCB7cG9wOiB0cnVlLCBzcmM6IFwiemV1c1wifSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRCYWNrKCl7XHJcbiAgICAgICAgbGV0IHJvb20gPSBTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2UuZ2V0Um9vbUJ5TmFtZShcInpldXNcIik7XHJcbiAgICAgICAgaWYocm9vbSl7XHJcbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uTGVhdmVSb29tUmVxdWVzdChyb29tKSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvdygnVUlIb21lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVVzZXJWYXJpYWJsZShzdWJDaGlwKXtcclxuICAgICAgICB0aGlzLmxiU29EdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZiktc3ViQ2hpcCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
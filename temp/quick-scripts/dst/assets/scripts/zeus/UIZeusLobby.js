
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3pldXMvVUlaZXVzTG9iYnkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGJTb0R1IiwiTGFiZWwiLCJhcnJfbGJfaHUiLCJ0eXBlIiwib25Mb2FkIiwic2NoZWR1bGUiLCJ1cGRhdGVKYWNrcG90Iiwib25FbmFibGUiLCJzdHJpbmciLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwiR2FtZVZhcmlhYmxlcyIsIlBva2VyIiwiZ2V0Q2hpcCIsIlNtYXJ0Rm94U0RLIiwiWmV1c0NvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJteVNlbGYiLCJrZXlzIiwiaSIsImxlbmd0aCIsInZhcmlhYmxlSmFja3BvdCIsImdldFZhcmlhYmxlIiwiamFja3BvdCIsInZhbHVlIiwibGJfaHUiLCJjdXJyZW50X2xiX2phY2twb3QiLCJzcGxpdCIsImpvaW4iLCJjdXJyZW50SHUiLCJwYXJzZUZsb2F0IiwibnVtYmVyVG8iLCJldmVudFBsYXlHYW1lIiwiZXZlbnQiLCJjdXN0b21EYXRhIiwiYmV0TGV2ZWwiLCJtbSIsIkxvYWRpbmciLCJzaG93IiwicG9wIiwic3JjIiwiZXZlbnRCYWNrIiwicm9vbSIsImdldFJvb21CeU5hbWUiLCJzZW5kIiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkxlYXZlUm9vbVJlcXVlc3QiLCJ1cGRhdGVVc2VyVmFyaWFibGUiLCJzdWJDaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBSUosRUFBRSxDQUFDSyxLQURMO0FBRVJDLElBQUFBLFNBQVMsRUFBRTtBQUNQQyxNQUFBQSxJQUFJLEVBQUVQLEVBQUUsQ0FBQ0ssS0FERjtBQUVQLGlCQUFTO0FBRkY7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YXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYlNvRHUgIDogY2MuTGFiZWwsXG4gICAgICAgIGFycl9sYl9odToge1xuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlSmFja3BvdCwgMyk7XG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xuICAgIH0sXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgdGhpcy5sYlNvRHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcbiAgICB9LFxuICAgIHVwZGF0ZUphY2twb3QoKXtcbiAgICAgICAgbGV0IGtleXMgPSBbXCJ6ZXVzMWxcIixcInpldXMxa1wiLFwiemV1czEwa1wiXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgdmFyaWFibGVKYWNrcG90ID0gU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShrZXlzW2ldKTtcbiAgICAgICAgICAgIGlmKHZhcmlhYmxlSmFja3BvdCl7XG4gICAgICAgICAgICAgICAgbGV0IGphY2twb3QgPSB2YXJpYWJsZUphY2twb3QudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IGxiX2h1ID0gdGhpcy5hcnJfbGJfaHVbaV07XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfbGJfamFja3BvdCA9IGxiX2h1LnN0cmluZztcbiAgICAgICAgICAgICAgICBjdXJyZW50X2xiX2phY2twb3QgPSBjdXJyZW50X2xiX2phY2twb3Quc3BsaXQoXCIuXCIpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRIdSA9IHBhcnNlRmxvYXQoY3VycmVudF9sYl9qYWNrcG90KTtcbiAgICAgICAgICAgICAgICBVdGlscy5udW1iZXJUbyhsYl9odSwgY3VycmVudEh1LCBqYWNrcG90LCAxMDAwLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRQbGF5R2FtZShldmVudCwgY3VzdG9tRGF0YSkge1xuICAgICAgICBjYy5iZXRMZXZlbCA9IGN1c3RvbURhdGE7XG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xuICAgICAgICB0aGlzLnNob3coXCJVSVpldXNcIiwge3BvcDogdHJ1ZSwgc3JjOiBcInpldXNcIn0pO1xuICAgIH0sXG4gICAgZXZlbnRCYWNrKCl7XG4gICAgICAgIGxldCByb29tID0gU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJ6ZXVzXCIpO1xuICAgICAgICBpZihyb29tKXtcbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uTGVhdmVSb29tUmVxdWVzdChyb29tKSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zaG93KCdVSUhvbWUnKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVXNlclZhcmlhYmxlKHN1YkNoaXApe1xuICAgICAgICB0aGlzLmxiU29EdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZiktc3ViQ2hpcCk7XG4gICAgfSxcbn0pO1xuIl19
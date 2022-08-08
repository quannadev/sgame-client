
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/UIVampireLobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5c6c3SXQsBIFohKdPuKuB7m', 'UIVampireLobby');
// scripts/vampire/UIVampireLobby.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    arr_lb_hu: {
      type: cc.Label,
      "default": []
    }
  },
  onLoad: function onLoad() {
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  updateJackpot: function updateJackpot() {
    var keys = ["vampire1l", "vampire1k", "vampire10k"];

    for (var i = 0; i < keys.length; i++) {
      if (SmartFoxSDK.VampireController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(keys[i]);

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
    this.show("UIVampire", {
      pop: true,
      src: "vampire"
    });
  },
  eventSetting: function eventSetting() {},
  back: function back() {
    var room = SmartFoxSDK.VampireController.ZoneInstance.getRoomByName("vampire");

    if (room) {
      SmartFoxSDK.VampireController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.show('UIHome');
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVUlWYW1waXJlTG9iYnkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYXJyX2xiX2h1IiwidHlwZSIsIkxhYmVsIiwib25Mb2FkIiwic2NoZWR1bGUiLCJ1cGRhdGVKYWNrcG90Iiwia2V5cyIsImkiLCJsZW5ndGgiLCJTbWFydEZveFNESyIsIlZhbXBpcmVDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwidmFyaWFibGVKYWNrcG90IiwiZ2V0VmFyaWFibGUiLCJqYWNrcG90IiwidmFsdWUiLCJsYl9odSIsImN1cnJlbnRfbGJfamFja3BvdCIsInN0cmluZyIsInNwbGl0Iiwiam9pbiIsImN1cnJlbnRIdSIsInBhcnNlRmxvYXQiLCJVdGlscyIsIm51bWJlclRvIiwiZXZlbnRQbGF5R2FtZSIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImJldExldmVsIiwibW0iLCJMb2FkaW5nIiwic2hvdyIsInBvcCIsInNyYyIsImV2ZW50U2V0dGluZyIsImJhY2siLCJyb29tIiwiZ2V0Um9vbUJ5TmFtZSIsInNlbmQiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiTGVhdmVSb29tUmVxdWVzdCIsInVwZGF0ZVVzZXJWYXJpYWJsZSIsInN1YkNoaXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxLQURGO0FBRVAsaUJBQVM7QUFGRjtBQURILEdBSFA7QUFTTEMsRUFBQUEsTUFUSyxvQkFTSztBQUNOLFNBQUtDLFFBQUwsQ0FBYyxLQUFLQyxhQUFuQixFQUFrQyxDQUFsQztBQUNBLFNBQUtBLGFBQUw7QUFDSCxHQVpJO0FBYUxBLEVBQUFBLGFBYkssMkJBYVU7QUFDWCxRQUFJQyxJQUFJLEdBQUcsQ0FBQyxXQUFELEVBQWEsV0FBYixFQUF5QixZQUF6QixDQUFYOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE1BQXhCLEVBQStCRCxDQUFDLEVBQWhDLEVBQW1DO0FBQy9CLFVBQUdFLFdBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLFlBQTlCLENBQTJDQyxNQUE5QyxFQUFxRDtBQUNqRCxZQUFJQyxlQUFlLEdBQUdKLFdBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLFlBQTlCLENBQTJDQyxNQUEzQyxDQUFrREUsV0FBbEQsQ0FBOERSLElBQUksQ0FBQ0MsQ0FBRCxDQUFsRSxDQUF0Qjs7QUFDQSxZQUFHTSxlQUFILEVBQW1CO0FBQ2YsY0FBSUUsT0FBTyxHQUFHRixlQUFlLENBQUNHLEtBQTlCO0FBQ0EsY0FBSUMsS0FBSyxHQUFHLEtBQUtqQixTQUFMLENBQWVPLENBQWYsQ0FBWjtBQUNBLGNBQUlXLGtCQUFrQixHQUFHRCxLQUFLLENBQUNFLE1BQS9CO0FBQ0FELFVBQUFBLGtCQUFrQixHQUFHQSxrQkFBa0IsQ0FBQ0UsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJDLElBQTlCLENBQW1DLEVBQW5DLENBQXJCO0FBQ0EsY0FBSUMsU0FBUyxHQUFHQyxVQUFVLENBQUNMLGtCQUFELENBQTFCO0FBQ0FNLFVBQUFBLEtBQUssQ0FBQ0MsUUFBTixDQUFlUixLQUFmLEVBQXNCSyxTQUF0QixFQUFpQ1AsT0FBakMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQ7QUFDSDtBQUNKO0FBRUo7QUFDSixHQTdCSTtBQThCTFcsRUFBQUEsYUE5QksseUJBOEJTQyxLQTlCVCxFQThCZ0JDLFVBOUJoQixFQThCNEI7QUFDN0JoQyxJQUFBQSxFQUFFLENBQUNpQyxRQUFILEdBQWNELFVBQWQ7QUFDQUUsSUFBQUEsRUFBRSxDQUFDQyxPQUFILENBQVdDLElBQVg7QUFDQSxTQUFLQSxJQUFMLENBQVUsV0FBVixFQUF1QjtBQUFDQyxNQUFBQSxHQUFHLEVBQUUsSUFBTjtBQUFZQyxNQUFBQSxHQUFHLEVBQUU7QUFBakIsS0FBdkI7QUFDSCxHQWxDSTtBQW1DTEMsRUFBQUEsWUFuQ0ssMEJBbUNVLENBRWQsQ0FyQ0k7QUFzQ0xDLEVBQUFBLElBdENLLGtCQXNDQztBQUNGLFFBQUlDLElBQUksR0FBRzVCLFdBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLFlBQTlCLENBQTJDMkIsYUFBM0MsQ0FBeUQsU0FBekQsQ0FBWDs7QUFDQSxRQUFHRCxJQUFILEVBQVE7QUFDSjVCLE1BQUFBLFdBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLFlBQTlCLENBQTJDNEIsSUFBM0MsQ0FBZ0QsSUFBSTlCLFdBQVcsQ0FBQytCLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxNQUE5QixDQUFxQ0MsZ0JBQXpDLENBQTBETixJQUExRCxDQUFoRDtBQUNILEtBRkQsTUFFSztBQUNELFdBQUtMLElBQUwsQ0FBVSxRQUFWO0FBQ0g7QUFDSixHQTdDSTtBQThDTFksRUFBQUEsa0JBOUNLLDhCQThDY0MsT0E5Q2QsRUE4Q3NCLENBRTFCO0FBaERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBhcnJfbGJfaHU6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxuICAgICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUphY2twb3QsIDMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoKTtcbiAgICB9LFxuICAgIHVwZGF0ZUphY2twb3QoKXtcbiAgICAgICAgbGV0IGtleXMgPSBbXCJ2YW1waXJlMWxcIixcInZhbXBpcmUxa1wiLFwidmFtcGlyZTEwa1wiXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBpZihTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGVKYWNrcG90ID0gU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShrZXlzW2ldKTtcbiAgICAgICAgICAgICAgICBpZih2YXJpYWJsZUphY2twb3Qpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgamFja3BvdCA9IHZhcmlhYmxlSmFja3BvdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxiX2h1ID0gdGhpcy5hcnJfbGJfaHVbaV07XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2xiX2phY2twb3QgPSBsYl9odS5zdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfbGJfamFja3BvdCA9IGN1cnJlbnRfbGJfamFja3BvdC5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRIdSA9IHBhcnNlRmxvYXQoY3VycmVudF9sYl9qYWNrcG90KTtcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMubnVtYmVyVG8obGJfaHUsIGN1cnJlbnRIdSwgamFja3BvdCwgMTAwMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50UGxheUdhbWUoZXZlbnQsIGN1c3RvbURhdGEpIHtcbiAgICAgICAgY2MuYmV0TGV2ZWwgPSBjdXN0b21EYXRhO1xuICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcbiAgICAgICAgdGhpcy5zaG93KFwiVUlWYW1waXJlXCIsIHtwb3A6IHRydWUsIHNyYzogXCJ2YW1waXJlXCJ9KTtcbiAgICB9LFxuICAgIGV2ZW50U2V0dGluZygpIHtcblxuICAgIH0sXG4gICAgYmFjaygpe1xuICAgICAgICBsZXQgcm9vbSA9IFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwidmFtcGlyZVwiKTtcbiAgICAgICAgaWYocm9vbSl7XG4gICAgICAgICAgICBTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChuZXcgU21hcnRGb3hTREsuU21hcnRGb3guUmVxdWVzdHMuU3lzdGVtLkxlYXZlUm9vbVJlcXVlc3Qocm9vbSkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2hvdygnVUlIb21lJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVVzZXJWYXJpYWJsZShzdWJDaGlwKXtcblxuICAgIH0sXG59KTtcbiJdfQ==
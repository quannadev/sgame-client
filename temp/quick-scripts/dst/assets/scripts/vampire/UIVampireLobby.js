
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVUlWYW1waXJlTG9iYnkuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYXJyX2xiX2h1IiwidHlwZSIsIkxhYmVsIiwib25Mb2FkIiwic2NoZWR1bGUiLCJ1cGRhdGVKYWNrcG90Iiwia2V5cyIsImkiLCJsZW5ndGgiLCJTbWFydEZveFNESyIsIlZhbXBpcmVDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwidmFyaWFibGVKYWNrcG90IiwiZ2V0VmFyaWFibGUiLCJqYWNrcG90IiwidmFsdWUiLCJsYl9odSIsImN1cnJlbnRfbGJfamFja3BvdCIsInN0cmluZyIsInNwbGl0Iiwiam9pbiIsImN1cnJlbnRIdSIsInBhcnNlRmxvYXQiLCJVdGlscyIsIm51bWJlclRvIiwiZXZlbnRQbGF5R2FtZSIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImJldExldmVsIiwibW0iLCJMb2FkaW5nIiwic2hvdyIsInBvcCIsInNyYyIsImV2ZW50U2V0dGluZyIsImJhY2siLCJyb29tIiwiZ2V0Um9vbUJ5TmFtZSIsInNlbmQiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiTGVhdmVSb29tUmVxdWVzdCIsInVwZGF0ZVVzZXJWYXJpYWJsZSIsInN1YkNoaXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxLQURGO0FBRVAsaUJBQVM7QUFGRjtBQURILEdBSFA7QUFTTEMsRUFBQUEsTUFUSyxvQkFTSztBQUNOLFNBQUtDLFFBQUwsQ0FBYyxLQUFLQyxhQUFuQixFQUFrQyxDQUFsQztBQUNBLFNBQUtBLGFBQUw7QUFDSCxHQVpJO0FBYUxBLEVBQUFBLGFBYkssMkJBYVU7QUFDWCxRQUFJQyxJQUFJLEdBQUcsQ0FBQyxXQUFELEVBQWEsV0FBYixFQUF5QixZQUF6QixDQUFYOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE1BQXhCLEVBQStCRCxDQUFDLEVBQWhDLEVBQW1DO0FBQy9CLFVBQUdFLFdBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLFlBQTlCLENBQTJDQyxNQUE5QyxFQUFxRDtBQUNqRCxZQUFJQyxlQUFlLEdBQUdKLFdBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLFlBQTlCLENBQTJDQyxNQUEzQyxDQUFrREUsV0FBbEQsQ0FBOERSLElBQUksQ0FBQ0MsQ0FBRCxDQUFsRSxDQUF0Qjs7QUFDQSxZQUFHTSxlQUFILEVBQW1CO0FBQ2YsY0FBSUUsT0FBTyxHQUFHRixlQUFlLENBQUNHLEtBQTlCO0FBQ0EsY0FBSUMsS0FBSyxHQUFHLEtBQUtqQixTQUFMLENBQWVPLENBQWYsQ0FBWjtBQUNBLGNBQUlXLGtCQUFrQixHQUFHRCxLQUFLLENBQUNFLE1BQS9CO0FBQ0FELFVBQUFBLGtCQUFrQixHQUFHQSxrQkFBa0IsQ0FBQ0UsS0FBbkIsQ0FBeUIsR0FBekIsRUFBOEJDLElBQTlCLENBQW1DLEVBQW5DLENBQXJCO0FBQ0EsY0FBSUMsU0FBUyxHQUFHQyxVQUFVLENBQUNMLGtCQUFELENBQTFCO0FBQ0FNLFVBQUFBLEtBQUssQ0FBQ0MsUUFBTixDQUFlUixLQUFmLEVBQXNCSyxTQUF0QixFQUFpQ1AsT0FBakMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQ7QUFDSDtBQUNKO0FBRUo7QUFDSixHQTdCSTtBQThCTFcsRUFBQUEsYUE5QksseUJBOEJTQyxLQTlCVCxFQThCZ0JDLFVBOUJoQixFQThCNEI7QUFDN0JoQyxJQUFBQSxFQUFFLENBQUNpQyxRQUFILEdBQWNELFVBQWQ7QUFDQUUsSUFBQUEsRUFBRSxDQUFDQyxPQUFILENBQVdDLElBQVg7QUFDQSxTQUFLQSxJQUFMLENBQVUsV0FBVixFQUF1QjtBQUFDQyxNQUFBQSxHQUFHLEVBQUUsSUFBTjtBQUFZQyxNQUFBQSxHQUFHLEVBQUU7QUFBakIsS0FBdkI7QUFDSCxHQWxDSTtBQW1DTEMsRUFBQUEsWUFuQ0ssMEJBbUNVLENBRWQsQ0FyQ0k7QUFzQ0xDLEVBQUFBLElBdENLLGtCQXNDQztBQUNGLFFBQUlDLElBQUksR0FBRzVCLFdBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLFlBQTlCLENBQTJDMkIsYUFBM0MsQ0FBeUQsU0FBekQsQ0FBWDs7QUFDQSxRQUFHRCxJQUFILEVBQVE7QUFDSjVCLE1BQUFBLFdBQVcsQ0FBQ0MsaUJBQVosQ0FBOEJDLFlBQTlCLENBQTJDNEIsSUFBM0MsQ0FBZ0QsSUFBSTlCLFdBQVcsQ0FBQytCLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxNQUE5QixDQUFxQ0MsZ0JBQXpDLENBQTBETixJQUExRCxDQUFoRDtBQUNILEtBRkQsTUFFSztBQUNELFdBQUtMLElBQUwsQ0FBVSxRQUFWO0FBQ0g7QUFDSixHQTdDSTtBQThDTFksRUFBQUEsa0JBOUNLLDhCQThDY0MsT0E5Q2QsRUE4Q3NCLENBRTFCO0FBaERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFycl9sYl9odToge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlSmFja3BvdCwgMyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KCk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlSmFja3BvdCgpe1xyXG4gICAgICAgIGxldCBrZXlzID0gW1widmFtcGlyZTFsXCIsXCJ2YW1waXJlMWtcIixcInZhbXBpcmUxMGtcIl07XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlSmFja3BvdCA9IFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYuZ2V0VmFyaWFibGUoa2V5c1tpXSk7XHJcbiAgICAgICAgICAgICAgICBpZih2YXJpYWJsZUphY2twb3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqYWNrcG90ID0gdmFyaWFibGVKYWNrcG90LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYl9odSA9IHRoaXMuYXJyX2xiX2h1W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2xiX2phY2twb3QgPSBsYl9odS5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9sYl9qYWNrcG90ID0gY3VycmVudF9sYl9qYWNrcG90LnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SHUgPSBwYXJzZUZsb2F0KGN1cnJlbnRfbGJfamFja3BvdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMubnVtYmVyVG8obGJfaHUsIGN1cnJlbnRIdSwgamFja3BvdCwgMTAwMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50UGxheUdhbWUoZXZlbnQsIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBjYy5iZXRMZXZlbCA9IGN1c3RvbURhdGE7XHJcbiAgICAgICAgbW0uTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5zaG93KFwiVUlWYW1waXJlXCIsIHtwb3A6IHRydWUsIHNyYzogXCJ2YW1waXJlXCJ9KTtcclxuICAgIH0sXHJcbiAgICBldmVudFNldHRpbmcoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIGJhY2soKXtcclxuICAgICAgICBsZXQgcm9vbSA9IFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwidmFtcGlyZVwiKTtcclxuICAgICAgICBpZihyb29tKXtcclxuICAgICAgICAgICAgU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQobmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5MZWF2ZVJvb21SZXF1ZXN0KHJvb20pKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93KCdVSUhvbWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVXNlclZhcmlhYmxlKHN1YkNoaXApe1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
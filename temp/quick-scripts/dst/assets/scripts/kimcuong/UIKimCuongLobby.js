
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/UIKimCuongLobby.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd91e3NpUr5Bxav9jYlxjD5u', 'UIKimCuongLobby');
// scripts/kimcuong/UIKimCuongLobby.js

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
    var keys = ["kimcuong1l", "kimcuong1k", "kimcuong10k"];

    for (var i = 0; i < keys.length; i++) {
      if (SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.KimCuongController.ZoneInstance.mySelf.getVariable(keys[i]);

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
    this.show("UIKimCuong", {
      pop: true,
      src: "kimcuong"
    });
  },
  eventSetting: function eventSetting() {},
  back: function back() {
    var room = SmartFoxSDK.KimCuongController.ZoneInstance.getRoomByName("kimcuong");

    if (room) {
      SmartFoxSDK.KimCuongController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.show('UIHome');
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL1VJS2ltQ3VvbmdMb2JieS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhcnJfbGJfaHUiLCJ0eXBlIiwiTGFiZWwiLCJvbkxvYWQiLCJzY2hlZHVsZSIsInVwZGF0ZUphY2twb3QiLCJrZXlzIiwiaSIsImxlbmd0aCIsIlNtYXJ0Rm94U0RLIiwiS2ltQ3VvbmdDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwidmFyaWFibGVKYWNrcG90IiwiZ2V0VmFyaWFibGUiLCJqYWNrcG90IiwidmFsdWUiLCJsYl9odSIsImN1cnJlbnRfbGJfamFja3BvdCIsInN0cmluZyIsInNwbGl0Iiwiam9pbiIsImN1cnJlbnRIdSIsInBhcnNlRmxvYXQiLCJVdGlscyIsIm51bWJlclRvIiwiZXZlbnRQbGF5R2FtZSIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImJldExldmVsIiwibW0iLCJMb2FkaW5nIiwic2hvdyIsInBvcCIsInNyYyIsImV2ZW50U2V0dGluZyIsImJhY2siLCJyb29tIiwiZ2V0Um9vbUJ5TmFtZSIsInNlbmQiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiTGVhdmVSb29tUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNUQyxJQUFBQSxTQUFTLEVBQUU7QUFDUEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLEtBREY7QUFFUCxpQkFBUztBQUZGO0FBREYsR0FIUDtBQVNMQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsUUFBTCxDQUFjLEtBQUtDLGFBQW5CLEVBQWtDLENBQWxDO0FBQ0EsU0FBS0EsYUFBTDtBQUNILEdBWkk7QUFhTEEsRUFBQUEsYUFiSywyQkFhVTtBQUNYLFFBQUlDLElBQUksR0FBRyxDQUFDLFlBQUQsRUFBYyxZQUFkLEVBQTJCLGFBQTNCLENBQVg7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdELElBQUksQ0FBQ0UsTUFBeEIsRUFBK0JELENBQUMsRUFBaEMsRUFBbUM7QUFDL0IsVUFBR0UsV0FBVyxDQUFDQyxrQkFBWixDQUErQkMsWUFBL0IsQ0FBNENDLE1BQS9DLEVBQXNEO0FBQ2xELFlBQUlDLGVBQWUsR0FBR0osV0FBVyxDQUFDQyxrQkFBWixDQUErQkMsWUFBL0IsQ0FBNENDLE1BQTVDLENBQW1ERSxXQUFuRCxDQUErRFIsSUFBSSxDQUFDQyxDQUFELENBQW5FLENBQXRCOztBQUNBLFlBQUdNLGVBQUgsRUFBbUI7QUFDZixjQUFJRSxPQUFPLEdBQUdGLGVBQWUsQ0FBQ0csS0FBOUI7QUFDQSxjQUFJQyxLQUFLLEdBQUcsS0FBS2pCLFNBQUwsQ0FBZU8sQ0FBZixDQUFaO0FBQ0EsY0FBSVcsa0JBQWtCLEdBQUdELEtBQUssQ0FBQ0UsTUFBL0I7QUFDQUQsVUFBQUEsa0JBQWtCLEdBQUdBLGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QixHQUF6QixFQUE4QkMsSUFBOUIsQ0FBbUMsRUFBbkMsQ0FBckI7QUFDQSxjQUFJQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQ0wsa0JBQUQsQ0FBMUI7QUFDQU0sVUFBQUEsS0FBSyxDQUFDQyxRQUFOLENBQWVSLEtBQWYsRUFBc0JLLFNBQXRCLEVBQWlDUCxPQUFqQyxFQUEwQyxJQUExQyxFQUFnRCxJQUFoRDtBQUNIO0FBQ0o7QUFFSjtBQUNKLEdBN0JJO0FBOEJMVyxFQUFBQSxhQTlCSyx5QkE4QlNDLEtBOUJULEVBOEJnQkMsVUE5QmhCLEVBOEI0QjtBQUM3QmhDLElBQUFBLEVBQUUsQ0FBQ2lDLFFBQUgsR0FBY0QsVUFBZDtBQUNBRSxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsSUFBWDtBQUNBLFNBQUtBLElBQUwsQ0FBVSxZQUFWLEVBQXdCO0FBQUNDLE1BQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLE1BQUFBLEdBQUcsRUFBRTtBQUFqQixLQUF4QjtBQUNILEdBbENJO0FBbUNMQyxFQUFBQSxZQW5DSywwQkFtQ1UsQ0FFZCxDQXJDSTtBQXNDTEMsRUFBQUEsSUF0Q0ssa0JBc0NDO0FBQ0YsUUFBSUMsSUFBSSxHQUFHNUIsV0FBVyxDQUFDQyxrQkFBWixDQUErQkMsWUFBL0IsQ0FBNEMyQixhQUE1QyxDQUEwRCxVQUExRCxDQUFYOztBQUNBLFFBQUdELElBQUgsRUFBUTtBQUNKNUIsTUFBQUEsV0FBVyxDQUFDQyxrQkFBWixDQUErQkMsWUFBL0IsQ0FBNEM0QixJQUE1QyxDQUFpRCxJQUFJOUIsV0FBVyxDQUFDK0IsUUFBWixDQUFxQkMsUUFBckIsQ0FBOEJDLE1BQTlCLENBQXFDQyxnQkFBekMsQ0FBMEROLElBQTFELENBQWpEO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS0wsSUFBTCxDQUFVLFFBQVY7QUFDSDtBQUNKO0FBN0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgIGFycl9sYl9odToge1xuICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcbiAgICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICB9XG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlSmFja3BvdCwgMyk7XG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xuICAgIH0sXG4gICAgdXBkYXRlSmFja3BvdCgpe1xuICAgICAgICBsZXQga2V5cyA9IFtcImtpbWN1b25nMWxcIixcImtpbWN1b25nMWtcIixcImtpbWN1b25nMTBrXCJdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGVKYWNrcG90ID0gU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYuZ2V0VmFyaWFibGUoa2V5c1tpXSk7XG4gICAgICAgICAgICAgICAgaWYodmFyaWFibGVKYWNrcG90KXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGphY2twb3QgPSB2YXJpYWJsZUphY2twb3QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsYl9odSA9IHRoaXMuYXJyX2xiX2h1W2ldO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9sYl9qYWNrcG90ID0gbGJfaHUuc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2xiX2phY2twb3QgPSBjdXJyZW50X2xiX2phY2twb3Quc3BsaXQoXCIuXCIpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SHUgPSBwYXJzZUZsb2F0KGN1cnJlbnRfbGJfamFja3BvdCk7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLm51bWJlclRvKGxiX2h1LCBjdXJyZW50SHUsIGphY2twb3QsIDEwMDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSxcbiAgICBldmVudFBsYXlHYW1lKGV2ZW50LCBjdXN0b21EYXRhKSB7XG4gICAgICAgIGNjLmJldExldmVsID0gY3VzdG9tRGF0YTtcbiAgICAgICAgbW0uTG9hZGluZy5zaG93KCk7XG4gICAgICAgIHRoaXMuc2hvdyhcIlVJS2ltQ3VvbmdcIiwge3BvcDogdHJ1ZSwgc3JjOiBcImtpbWN1b25nXCJ9KTtcbiAgICB9LFxuICAgIGV2ZW50U2V0dGluZygpIHtcblxuICAgIH0sXG4gICAgYmFjaygpe1xuICAgICAgICBsZXQgcm9vbSA9IFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UuZ2V0Um9vbUJ5TmFtZShcImtpbWN1b25nXCIpO1xuICAgICAgICBpZihyb29tKXtcbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChuZXcgU21hcnRGb3hTREsuU21hcnRGb3guUmVxdWVzdHMuU3lzdGVtLkxlYXZlUm9vbVJlcXVlc3Qocm9vbSkpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuc2hvdygnVUlIb21lJyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==
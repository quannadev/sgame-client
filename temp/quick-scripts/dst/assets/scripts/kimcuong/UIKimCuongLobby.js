
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXFVJS2ltQ3VvbmdMb2JieS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhcnJfbGJfaHUiLCJ0eXBlIiwiTGFiZWwiLCJvbkxvYWQiLCJzY2hlZHVsZSIsInVwZGF0ZUphY2twb3QiLCJrZXlzIiwiaSIsImxlbmd0aCIsIlNtYXJ0Rm94U0RLIiwiS2ltQ3VvbmdDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwidmFyaWFibGVKYWNrcG90IiwiZ2V0VmFyaWFibGUiLCJqYWNrcG90IiwidmFsdWUiLCJsYl9odSIsImN1cnJlbnRfbGJfamFja3BvdCIsInN0cmluZyIsInNwbGl0Iiwiam9pbiIsImN1cnJlbnRIdSIsInBhcnNlRmxvYXQiLCJVdGlscyIsIm51bWJlclRvIiwiZXZlbnRQbGF5R2FtZSIsImV2ZW50IiwiY3VzdG9tRGF0YSIsImJldExldmVsIiwibW0iLCJMb2FkaW5nIiwic2hvdyIsInBvcCIsInNyYyIsImV2ZW50U2V0dGluZyIsImJhY2siLCJyb29tIiwiZ2V0Um9vbUJ5TmFtZSIsInNlbmQiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiTGVhdmVSb29tUmVxdWVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNUQyxJQUFBQSxTQUFTLEVBQUU7QUFDUEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNLEtBREY7QUFFUCxpQkFBUztBQUZGO0FBREYsR0FIUDtBQVNMQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ04sU0FBS0MsUUFBTCxDQUFjLEtBQUtDLGFBQW5CLEVBQWtDLENBQWxDO0FBQ0EsU0FBS0EsYUFBTDtBQUNILEdBWkk7QUFhTEEsRUFBQUEsYUFiSywyQkFhVTtBQUNYLFFBQUlDLElBQUksR0FBRyxDQUFDLFlBQUQsRUFBYyxZQUFkLEVBQTJCLGFBQTNCLENBQVg7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdELElBQUksQ0FBQ0UsTUFBeEIsRUFBK0JELENBQUMsRUFBaEMsRUFBbUM7QUFDL0IsVUFBR0UsV0FBVyxDQUFDQyxrQkFBWixDQUErQkMsWUFBL0IsQ0FBNENDLE1BQS9DLEVBQXNEO0FBQ2xELFlBQUlDLGVBQWUsR0FBR0osV0FBVyxDQUFDQyxrQkFBWixDQUErQkMsWUFBL0IsQ0FBNENDLE1BQTVDLENBQW1ERSxXQUFuRCxDQUErRFIsSUFBSSxDQUFDQyxDQUFELENBQW5FLENBQXRCOztBQUNBLFlBQUdNLGVBQUgsRUFBbUI7QUFDZixjQUFJRSxPQUFPLEdBQUdGLGVBQWUsQ0FBQ0csS0FBOUI7QUFDQSxjQUFJQyxLQUFLLEdBQUcsS0FBS2pCLFNBQUwsQ0FBZU8sQ0FBZixDQUFaO0FBQ0EsY0FBSVcsa0JBQWtCLEdBQUdELEtBQUssQ0FBQ0UsTUFBL0I7QUFDQUQsVUFBQUEsa0JBQWtCLEdBQUdBLGtCQUFrQixDQUFDRSxLQUFuQixDQUF5QixHQUF6QixFQUE4QkMsSUFBOUIsQ0FBbUMsRUFBbkMsQ0FBckI7QUFDQSxjQUFJQyxTQUFTLEdBQUdDLFVBQVUsQ0FBQ0wsa0JBQUQsQ0FBMUI7QUFDQU0sVUFBQUEsS0FBSyxDQUFDQyxRQUFOLENBQWVSLEtBQWYsRUFBc0JLLFNBQXRCLEVBQWlDUCxPQUFqQyxFQUEwQyxJQUExQyxFQUFnRCxJQUFoRDtBQUNIO0FBQ0o7QUFFSjtBQUNKLEdBN0JJO0FBOEJMVyxFQUFBQSxhQTlCSyx5QkE4QlNDLEtBOUJULEVBOEJnQkMsVUE5QmhCLEVBOEI0QjtBQUM3QmhDLElBQUFBLEVBQUUsQ0FBQ2lDLFFBQUgsR0FBY0QsVUFBZDtBQUNBRSxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsSUFBWDtBQUNBLFNBQUtBLElBQUwsQ0FBVSxZQUFWLEVBQXdCO0FBQUNDLE1BQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLE1BQUFBLEdBQUcsRUFBRTtBQUFqQixLQUF4QjtBQUNILEdBbENJO0FBbUNMQyxFQUFBQSxZQW5DSywwQkFtQ1UsQ0FFZCxDQXJDSTtBQXNDTEMsRUFBQUEsSUF0Q0ssa0JBc0NDO0FBQ0YsUUFBSUMsSUFBSSxHQUFHNUIsV0FBVyxDQUFDQyxrQkFBWixDQUErQkMsWUFBL0IsQ0FBNEMyQixhQUE1QyxDQUEwRCxVQUExRCxDQUFYOztBQUNBLFFBQUdELElBQUgsRUFBUTtBQUNKNUIsTUFBQUEsV0FBVyxDQUFDQyxrQkFBWixDQUErQkMsWUFBL0IsQ0FBNEM0QixJQUE1QyxDQUFpRCxJQUFJOUIsV0FBVyxDQUFDK0IsUUFBWixDQUFxQkMsUUFBckIsQ0FBOEJDLE1BQTlCLENBQXFDQyxnQkFBekMsQ0FBMEROLElBQTFELENBQWpEO0FBQ0gsS0FGRCxNQUVLO0FBQ0QsV0FBS0wsSUFBTCxDQUFVLFFBQVY7QUFDSDtBQUNKO0FBN0NJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgYXJyX2xiX2h1OiB7XHJcbiAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVKYWNrcG90LCAzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVKYWNrcG90KCl7XHJcbiAgICAgICAgbGV0IGtleXMgPSBbXCJraW1jdW9uZzFsXCIsXCJraW1jdW9uZzFrXCIsXCJraW1jdW9uZzEwa1wiXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlSmFja3BvdCA9IFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLmdldFZhcmlhYmxlKGtleXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYodmFyaWFibGVKYWNrcG90KXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamFja3BvdCA9IHZhcmlhYmxlSmFja3BvdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGJfaHUgPSB0aGlzLmFycl9sYl9odVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9sYl9qYWNrcG90ID0gbGJfaHUuc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfbGJfamFja3BvdCA9IGN1cnJlbnRfbGJfamFja3BvdC5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEh1ID0gcGFyc2VGbG9hdChjdXJyZW50X2xiX2phY2twb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLm51bWJlclRvKGxiX2h1LCBjdXJyZW50SHUsIGphY2twb3QsIDEwMDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudFBsYXlHYW1lKGV2ZW50LCBjdXN0b21EYXRhKSB7XHJcbiAgICAgICAgY2MuYmV0TGV2ZWwgPSBjdXN0b21EYXRhO1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIHRoaXMuc2hvdyhcIlVJS2ltQ3VvbmdcIiwge3BvcDogdHJ1ZSwgc3JjOiBcImtpbWN1b25nXCJ9KTtcclxuICAgIH0sXHJcbiAgICBldmVudFNldHRpbmcoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIGJhY2soKXtcclxuICAgICAgICBsZXQgcm9vbSA9IFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UuZ2V0Um9vbUJ5TmFtZShcImtpbWN1b25nXCIpO1xyXG4gICAgICAgIGlmKHJvb20pe1xyXG4gICAgICAgICAgICBTbWFydEZveFNESy5LaW1DdW9uZ0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQobmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5MZWF2ZVJvb21SZXF1ZXN0KHJvb20pKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zaG93KCdVSUhvbWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
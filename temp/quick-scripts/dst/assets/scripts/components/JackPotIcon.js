
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/JackPotIcon.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b47dtdF61EAYm1JNHgq0UZ', 'JackPotIcon');
// scripts/components/JackPotIcon.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    arr_lb_hu: {
      type: cc.Label,
      "default": []
    },
    game: "kimcuong"
  },
  onLoad: function onLoad() {
    var random = Math.floor(Math.random() * 3) + 1;
    this.schedule(this.updateJackpot, random);
    this.updateJackpot();
  },
  updateJackpot: function updateJackpot() {
    var prefixkeys = ["1l", "1k", "10k"];
    var keys = [];

    for (var i = 0; i < prefixkeys.length; i++) {
      keys[i] = this.game + prefixkeys[i];
    }

    for (var _i = 0; _i < keys.length; _i++) {
      var random = Math.floor(Math.random() * 2);

      if (SmartFoxSDK.PortalController.ZoneInstance.mySelf && random == 0) {
        var variableJackpot = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable(keys[_i]);

        if (variableJackpot) {
          var jackpot = variableJackpot.value;
          var lb_hu = this.arr_lb_hu[_i];
          var current_lb_jackpot = lb_hu.string;
          current_lb_jackpot = current_lb_jackpot.split(".").join("");
          var currentHu = parseFloat(current_lb_jackpot);
          Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29tcG9uZW50c1xcSmFja1BvdEljb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJhcnJfbGJfaHUiLCJ0eXBlIiwiTGFiZWwiLCJnYW1lIiwib25Mb2FkIiwicmFuZG9tIiwiTWF0aCIsImZsb29yIiwic2NoZWR1bGUiLCJ1cGRhdGVKYWNrcG90IiwicHJlZml4a2V5cyIsImtleXMiLCJpIiwibGVuZ3RoIiwiU21hcnRGb3hTREsiLCJQb3J0YWxDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwidmFyaWFibGVKYWNrcG90IiwiZ2V0VmFyaWFibGUiLCJqYWNrcG90IiwidmFsdWUiLCJsYl9odSIsImN1cnJlbnRfbGJfamFja3BvdCIsInN0cmluZyIsInNwbGl0Iiwiam9pbiIsImN1cnJlbnRIdSIsInBhcnNlRmxvYXQiLCJVdGlscyIsIm51bWJlclRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFFO0FBQ1BDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxLQURGO0FBRVAsaUJBQVM7QUFGRixLQURIO0FBS1JDLElBQUFBLElBQUksRUFBRTtBQUxFLEdBSFA7QUFVTEMsRUFBQUEsTUFWSyxvQkFVSztBQUNOLFFBQUlDLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0QsTUFBTCxLQUFlLENBQTFCLElBQStCLENBQTVDO0FBQ0EsU0FBS0csUUFBTCxDQUFjLEtBQUtDLGFBQW5CLEVBQWtDSixNQUFsQztBQUNBLFNBQUtJLGFBQUw7QUFDSCxHQWRJO0FBZUxBLEVBQUFBLGFBZkssMkJBZVU7QUFDWCxRQUFJQyxVQUFVLEdBQUcsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLEtBQVgsQ0FBakI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsRUFBWDs7QUFDQSxTQUFJLElBQUlDLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR0YsVUFBVSxDQUFDRyxNQUE5QixFQUFxQ0QsQ0FBQyxFQUF0QyxFQUF5QztBQUNyQ0QsTUFBQUEsSUFBSSxDQUFDQyxDQUFELENBQUosR0FBVSxLQUFLVCxJQUFMLEdBQVlPLFVBQVUsQ0FBQ0UsQ0FBRCxDQUFoQztBQUNIOztBQUNELFNBQUksSUFBSUEsRUFBQyxHQUFHLENBQVosRUFBZUEsRUFBQyxHQUFHRCxJQUFJLENBQUNFLE1BQXhCLEVBQStCRCxFQUFDLEVBQWhDLEVBQW1DO0FBQy9CLFVBQUlQLE1BQU0sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0QsTUFBTCxLQUFjLENBQXpCLENBQWI7O0FBQ0EsVUFBR1MsV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLE1BQTFDLElBQW9EWixNQUFNLElBQUksQ0FBakUsRUFBbUU7QUFDL0QsWUFBSWEsZUFBZSxHQUFHSixXQUFXLENBQUNDLGdCQUFaLENBQTZCQyxZQUE3QixDQUEwQ0MsTUFBMUMsQ0FBaURFLFdBQWpELENBQTZEUixJQUFJLENBQUNDLEVBQUQsQ0FBakUsQ0FBdEI7O0FBQ0EsWUFBR00sZUFBSCxFQUFtQjtBQUNmLGNBQUlFLE9BQU8sR0FBR0YsZUFBZSxDQUFDRyxLQUE5QjtBQUNBLGNBQUlDLEtBQUssR0FBRyxLQUFLdEIsU0FBTCxDQUFlWSxFQUFmLENBQVo7QUFDQSxjQUFJVyxrQkFBa0IsR0FBR0QsS0FBSyxDQUFDRSxNQUEvQjtBQUNBRCxVQUFBQSxrQkFBa0IsR0FBR0Esa0JBQWtCLENBQUNFLEtBQW5CLENBQXlCLEdBQXpCLEVBQThCQyxJQUE5QixDQUFtQyxFQUFuQyxDQUFyQjtBQUNBLGNBQUlDLFNBQVMsR0FBR0MsVUFBVSxDQUFDTCxrQkFBRCxDQUExQjtBQUNBTSxVQUFBQSxLQUFLLENBQUNDLFFBQU4sQ0FBZVIsS0FBZixFQUFzQkssU0FBdEIsRUFBaUNQLE9BQWpDLEVBQTBDLElBQTFDLEVBQWdELElBQWhEO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUFuQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhcnJfbGJfaHU6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnYW1lOiBcImtpbWN1b25nXCJcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqIDMpICsgMTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlSmFja3BvdCwgcmFuZG9tKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVKYWNrcG90KCl7XHJcbiAgICAgICAgbGV0IHByZWZpeGtleXMgPSBbXCIxbFwiLFwiMWtcIixcIjEwa1wiXTtcclxuICAgICAgICBsZXQga2V5cyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcmVmaXhrZXlzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBrZXlzW2ldID0gdGhpcy5nYW1lICsgcHJlZml4a2V5c1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMik7XHJcbiAgICAgICAgICAgIGlmKFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZiAmJiByYW5kb20gPT0gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGVKYWNrcG90ID0gU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLmdldFZhcmlhYmxlKGtleXNbaV0pO1xyXG4gICAgICAgICAgICAgICAgaWYodmFyaWFibGVKYWNrcG90KXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamFja3BvdCA9IHZhcmlhYmxlSmFja3BvdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbGJfaHUgPSB0aGlzLmFycl9sYl9odVtpXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9sYl9qYWNrcG90ID0gbGJfaHUuc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfbGJfamFja3BvdCA9IGN1cnJlbnRfbGJfamFja3BvdC5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEh1ID0gcGFyc2VGbG9hdChjdXJyZW50X2xiX2phY2twb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLm51bWJlclRvKGxiX2h1LCBjdXJyZW50SHUsIGphY2twb3QsIDEwMDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/UIVampireBonus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '57a06mQcIpGQaAVDCSxZ5Dg', 'UIVampireBonus');
// scripts/vampire/UIVampireBonus.js

"use strict";

var Helper = require("Helper");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbTime: cc.Label,
    lbLuotBoc: cc.Label,
    lbMoneyWin: cc.Label,
    lbTotalWin: cc.Label,
    resultWin: cc.Node,
    totalSelect: 0,
    totalTime: 15
  },
  onEnable: function onEnable() {
    this.totalTime = 30;
    this.resultWin.active = false;
    this.totalSelect = this._data.length;
    this.lbLuotBoc.string = this.totalSelect;
    this.lbTime.string = this.totalTime;
    this.schedule(this.countTime, 1);
  },
  countTime: function countTime() {
    this.totalTime--;

    if (this.totalTime < 1) {
      this.unschedule(this.countTime);
      this.eventClose();
    }

    this.lbTime.string = this.totalTime;
  },
  showMoneyWin: function showMoneyWin() {
    var moneyWin = 0;

    for (var i = 0; i < this._data.length; i++) {
      moneyWin += this._data[i];
    }

    this.resultWin.active = true;
    Helper.numberTo(this.lbTotalWin, 0, moneyWin, 1200, true);
    this.scheduleOnce(function () {
      this.eventClose();
    }, 3);
  },
  eventSelect: function eventSelect(event, data) {
    var self = this;

    if (this.totalSelect > 0) {
      this.totalSelect--;

      if (this._data[this.totalSelect] > 0) {
        event.target.getChildByName("lb_money").active = true;
        event.target.getChildByName("Vampire-BonusGame-1-1").getComponent(sp.Skeleton).setAnimation(0, "Attack", false);
        event.target.getChildByName("Vampire-BonusGame-1-1").getComponent(sp.Skeleton).setCompleteListener(function (trackEntry, loopCount) {
          Helper.numberTo(event.target.getChildByName("lb_money").getComponent(cc.Label), 0, self._data[self.totalSelect], 1200, true);
        });
      }

      var moneyWin = 0;

      for (var i = this._data.length - 1; i > this.totalSelect; i--) {
        moneyWin += this._data[i];
      }

      Helper.numberTo(this.lbMoneyWin, 0, moneyWin, 1200, true);
      this.lbLuotBoc.string = this.totalSelect;

      if (this.totalSelect == 0) {
        this.showMoneyWin();
      }
    }
  },
  eventClose: function eventClose() {
    this.back();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVUlWYW1waXJlQm9udXMuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxiVGltZSIsIkxhYmVsIiwibGJMdW90Qm9jIiwibGJNb25leVdpbiIsImxiVG90YWxXaW4iLCJyZXN1bHRXaW4iLCJOb2RlIiwidG90YWxTZWxlY3QiLCJ0b3RhbFRpbWUiLCJvbkVuYWJsZSIsImFjdGl2ZSIsIl9kYXRhIiwibGVuZ3RoIiwic3RyaW5nIiwic2NoZWR1bGUiLCJjb3VudFRpbWUiLCJ1bnNjaGVkdWxlIiwiZXZlbnRDbG9zZSIsInNob3dNb25leVdpbiIsIm1vbmV5V2luIiwiaSIsIm51bWJlclRvIiwic2NoZWR1bGVPbmNlIiwiZXZlbnRTZWxlY3QiLCJldmVudCIsImRhdGEiLCJzZWxmIiwidGFyZ2V0IiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwic2V0Q29tcGxldGVMaXN0ZW5lciIsInRyYWNrRW50cnkiLCJsb29wQ291bnQiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFRSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsU0FBUyxFQUFLTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsVUFBVSxFQUFJUCxFQUFFLENBQUNLLEtBSFQ7QUFJUkcsSUFBQUEsVUFBVSxFQUFJUixFQUFFLENBQUNLLEtBSlQ7QUFLUkksSUFBQUEsU0FBUyxFQUFLVCxFQUFFLENBQUNVLElBTFQ7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WCxHQUFrQixDQUE3QixFQUFnQ1EsQ0FBQyxHQUFDLEtBQUtiLFdBQXZDLEVBQW9EYSxDQUFDLEVBQXJELEVBQXdEO0FBQ3BERCxRQUFBQSxRQUFRLElBQUksS0FBS1IsS0FBTCxDQUFXUyxDQUFYLENBQVo7QUFDSDs7QUFDRDFCLE1BQUFBLE1BQU0sQ0FBQzJCLFFBQVAsQ0FBZ0IsS0FBS2xCLFVBQXJCLEVBQWlDLENBQWpDLEVBQW9DZ0IsUUFBcEMsRUFBOEMsSUFBOUMsRUFBb0QsSUFBcEQ7QUFDQSxXQUFLakIsU0FBTCxDQUFlVyxNQUFmLEdBQTBCLEtBQUtOLFdBQS9COztBQUNBLFVBQUksS0FBS0EsV0FBTCxJQUFvQixDQUF4QixFQUEwQjtBQUN0QixhQUFLVyxZQUFMO0FBQ0g7QUFDSjtBQUNKLEdBN0RJO0FBOERMRCxFQUFBQSxVQTlESyx3QkE4RFE7QUFDVCxTQUFLbUIsSUFBTDtBQUNIO0FBaEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBIZWxwZXIgPSByZXF1aXJlKFwiSGVscGVyXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTHVvdEJvYyAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTW9uZXlXaW4gIDogY2MuTGFiZWwsXG4gICAgICAgIGxiVG90YWxXaW4gIDogY2MuTGFiZWwsXG4gICAgICAgIHJlc3VsdFdpbiAgIDogY2MuTm9kZSxcbiAgICAgICAgdG90YWxTZWxlY3QgOiAwLFxuICAgICAgICB0b3RhbFRpbWUgICA6IDE1LFxuICAgIH0sXG4gICAgb25FbmFibGUgKCkge1xuICAgICAgICB0aGlzLnRvdGFsVGltZSAgICAgICAgICA9IDMwO1xuICAgICAgICB0aGlzLnJlc3VsdFdpbi5hY3RpdmUgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRvdGFsU2VsZWN0ICAgICAgICA9IHRoaXMuX2RhdGEubGVuZ3RoO1xuICAgICAgICB0aGlzLmxiTHVvdEJvYy5zdHJpbmcgICA9IHRoaXMudG90YWxTZWxlY3Q7XG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gdGhpcy50b3RhbFRpbWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jb3VudFRpbWUsIDEpO1xuICAgIH0sXG4gICAgY291bnRUaW1lKCkge1xuICAgICAgICB0aGlzLnRvdGFsVGltZS0tO1xuICAgICAgICBpZiAoIHRoaXMudG90YWxUaW1lIDwgMSl7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5ldmVudENsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSB0aGlzLnRvdGFsVGltZTtcbiAgICB9LFxuICAgIHNob3dNb25leVdpbigpIHtcbiAgICAgICAgbGV0IG1vbmV5V2luID0gMDtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLl9kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIG1vbmV5V2luICs9IHRoaXMuX2RhdGFbaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZXN1bHRXaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgSGVscGVyLm51bWJlclRvKHRoaXMubGJUb3RhbFdpbiwgMCAsbW9uZXlXaW4sIDEyMDAsIHRydWUpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKXtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDbG9zZSgpO1xuICAgICAgICB9LCAzKVxuICAgIH0sXG4gICAgZXZlbnRTZWxlY3QoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBpZiAodGhpcy50b3RhbFNlbGVjdCA+IDApe1xuICAgICAgICAgICAgdGhpcy50b3RhbFNlbGVjdC0tO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFbdGhpcy50b3RhbFNlbGVjdF0gPiAwKXtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9tb25leVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIlZhbXBpcmUtQm9udXNHYW1lLTEtMVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkF0dGFja1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiVmFtcGlyZS1Cb251c0dhbWUtMS0xXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeSwgbG9vcENvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIEhlbHBlci5udW1iZXJUbyhldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9tb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLCAwICwgc2VsZi5fZGF0YVtzZWxmLnRvdGFsU2VsZWN0XSwgMTIwMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBtb25leVdpbiA9IDA7XG4gICAgICAgICAgICBmb3IgKGxldCBpPXRoaXMuX2RhdGEubGVuZ3RoLTE7IGk+dGhpcy50b3RhbFNlbGVjdDsgaS0tKXtcbiAgICAgICAgICAgICAgICBtb25leVdpbiArPSB0aGlzLl9kYXRhW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgSGVscGVyLm51bWJlclRvKHRoaXMubGJNb25leVdpbiwgMCAsbW9uZXlXaW4sIDEyMDAsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5sYkx1b3RCb2Muc3RyaW5nICAgPSB0aGlzLnRvdGFsU2VsZWN0O1xuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxTZWxlY3QgPT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9uZXlXaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfVxufSk7XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVUlWYW1waXJlQm9udXMuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxiVGltZSIsIkxhYmVsIiwibGJMdW90Qm9jIiwibGJNb25leVdpbiIsImxiVG90YWxXaW4iLCJyZXN1bHRXaW4iLCJOb2RlIiwidG90YWxTZWxlY3QiLCJ0b3RhbFRpbWUiLCJvbkVuYWJsZSIsImFjdGl2ZSIsIl9kYXRhIiwibGVuZ3RoIiwic3RyaW5nIiwic2NoZWR1bGUiLCJjb3VudFRpbWUiLCJ1bnNjaGVkdWxlIiwiZXZlbnRDbG9zZSIsInNob3dNb25leVdpbiIsIm1vbmV5V2luIiwiaSIsIm51bWJlclRvIiwic2NoZWR1bGVPbmNlIiwiZXZlbnRTZWxlY3QiLCJldmVudCIsImRhdGEiLCJzZWxmIiwidGFyZ2V0IiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwic2V0Q29tcGxldGVMaXN0ZW5lciIsInRyYWNrRW50cnkiLCJsb29wQ291bnQiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFRSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsU0FBUyxFQUFLTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsVUFBVSxFQUFJUCxFQUFFLENBQUNLLEtBSFQ7QUFJUkcsSUFBQUEsVUFBVSxFQUFJUixFQUFFLENBQUNLLEtBSlQ7QUFLUkksSUFBQUEsU0FBUyxFQUFLVCxFQUFFLENBQUNVLElB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TUFBWCxHQUFrQixDQUE3QixFQUFnQ1EsQ0FBQyxHQUFDLEtBQUtiLFdBQXZDLEVBQW9EYSxDQUFDLEVBQXJELEVBQXdEO0FBQ3BERCxRQUFBQSxRQUFRLElBQUksS0FBS1IsS0FBTCxDQUFXUyxDQUFYLENBQVo7QUFDSDs7QUFDRDFCLE1BQUFBLE1BQU0sQ0FBQzJCLFFBQVAsQ0FBZ0IsS0FBS2xCLFVBQXJCLEVBQWlDLENBQWpDLEVBQW9DZ0IsUUFBcEMsRUFBOEMsSUFBOUMsRUFBb0QsSUFBcEQ7QUFDQSxXQUFLakIsU0FBTCxDQUFlVyxNQUFmLEdBQTBCLEtBQUtOLFdBQS9COztBQUNBLFVBQUksS0FBS0EsV0FBTCxJQUFvQixDQUF4QixFQUEwQjtBQUN0QixhQUFLVyxZQUFMO0FBQ0g7QUFDSjtBQUNKLEdBN0RJO0FBOERMRCxFQUFBQSxVQTlESyx3QkE4RFE7QUFDVCxTQUFLbUIsSUFBTDtBQUNIO0FBaEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBIZWxwZXIgPSByZXF1aXJlKFwiSGVscGVyXCIpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTHVvdEJvYyAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJNb25leVdpbiAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYlRvdGFsV2luICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIHJlc3VsdFdpbiAgIDogY2MuTm9kZSxcclxuICAgICAgICB0b3RhbFNlbGVjdCA6IDAsXHJcbiAgICAgICAgdG90YWxUaW1lICAgOiAxNSxcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgICAgICAgICAgPSAzMDtcclxuICAgICAgICB0aGlzLnJlc3VsdFdpbi5hY3RpdmUgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudG90YWxTZWxlY3QgICAgICAgID0gdGhpcy5fZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5sYkx1b3RCb2Muc3RyaW5nICAgPSB0aGlzLnRvdGFsU2VsZWN0O1xyXG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gdGhpcy50b3RhbFRpbWU7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmNvdW50VGltZSwgMSk7XHJcbiAgICB9LFxyXG4gICAgY291bnRUaW1lKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxUaW1lLS07XHJcbiAgICAgICAgaWYgKCB0aGlzLnRvdGFsVGltZSA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudFRpbWUpO1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50Q2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSB0aGlzLnRvdGFsVGltZTtcclxuICAgIH0sXHJcbiAgICBzaG93TW9uZXlXaW4oKSB7XHJcbiAgICAgICAgbGV0IG1vbmV5V2luID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBtb25leVdpbiArPSB0aGlzLl9kYXRhW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlc3VsdFdpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIEhlbHBlci5udW1iZXJUbyh0aGlzLmxiVG90YWxXaW4sIDAgLG1vbmV5V2luLCAxMjAwLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgdGhpcy5ldmVudENsb3NlKCk7XHJcbiAgICAgICAgfSwgMylcclxuICAgIH0sXHJcbiAgICBldmVudFNlbGVjdChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAodGhpcy50b3RhbFNlbGVjdCA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsU2VsZWN0LS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhW3RoaXMudG90YWxTZWxlY3RdID4gMCl7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9tb25leVwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwiVmFtcGlyZS1Cb251c0dhbWUtMS0xXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQXR0YWNrXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIlZhbXBpcmUtQm9udXNHYW1lLTEtMVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldENvbXBsZXRlTGlzdGVuZXIoKHRyYWNrRW50cnksIGxvb3BDb3VudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEhlbHBlci5udW1iZXJUbyhldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9tb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLCAwICwgc2VsZi5fZGF0YVtzZWxmLnRvdGFsU2VsZWN0XSwgMTIwMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IG1vbmV5V2luID0gMDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT10aGlzLl9kYXRhLmxlbmd0aC0xOyBpPnRoaXMudG90YWxTZWxlY3Q7IGktLSl7XHJcbiAgICAgICAgICAgICAgICBtb25leVdpbiArPSB0aGlzLl9kYXRhW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEhlbHBlci5udW1iZXJUbyh0aGlzLmxiTW9uZXlXaW4sIDAgLG1vbmV5V2luLCAxMjAwLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5sYkx1b3RCb2Muc3RyaW5nICAgPSB0aGlzLnRvdGFsU2VsZWN0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbFNlbGVjdCA9PSAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd01vbmV5V2luKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
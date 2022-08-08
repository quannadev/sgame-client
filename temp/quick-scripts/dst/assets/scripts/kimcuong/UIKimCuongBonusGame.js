
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/UIKimCuongBonusGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2df859DcplP5LRkXX1yZqV8', 'UIKimCuongBonusGame');
// scripts/kimcuong/UIKimCuongBonusGame.js

"use strict";

var Helper = require("Helper");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbHeSoNhan: cc.Label,
    lbTime: cc.Label,
    lbLuotBoc: cc.Label,
    lbMoneyWin: cc.Label,
    resultWin: cc.Node,
    totalSelect: 0,
    totalTime: 15
  },
  onEnable: function onEnable() {
    this.totalTime = 15;
    this.resultWin.active = false;
    this.totalSelect = this._data.length;
    this.lbHeSoNhan.string = "x" + Math.floor(Math.random() * 30);
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
    var self = this;
    this.resultWin.active = true;
    var moneyWin = 0;

    for (var i = 0; i < this._data.length; i++) {
      moneyWin += this._data[i];
    }

    this.lbMoneyWin.node.active = true;
    Helper.numberTo(this.lbMoneyWin, 0, moneyWin, 600, true, function () {
      setTimeout(function () {
        self.eventClose();
        self.resultWin.active = false;
      }, 1500);
    });
  },
  eventSelect: function eventSelect(event, data) {
    if (this.totalSelect > 0) {
      this.totalSelect--;

      if (this._data[this.totalSelect] > 0) {
        event.target.getChildByName("lb_money").active = true;
        event.target.getChildByName("KimCuongBonusGame").getComponent(sp.Skeleton).setAnimation(0, "Attack-KimCuong", false);
        Helper.numberTo(event.target.getChildByName("lb_money").getComponent(cc.Label), 0, this._data[this.totalSelect], 1200, true);
      } else {
        event.target.getChildByName("KimCuongBonusGame").getComponent(sp.Skeleton).setAnimation(0, "Attack-Miss", false);
      }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL1VJS2ltQ3VvbmdCb251c0dhbWUuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxiSGVTb05oYW4iLCJMYWJlbCIsImxiVGltZSIsImxiTHVvdEJvYyIsImxiTW9uZXlXaW4iLCJyZXN1bHRXaW4iLCJOb2RlIiwidG90YWxTZWxlY3QiLCJ0b3RhbFRpbWUiLCJvbkVuYWJsZSIsImFjdGl2ZSIsIl9kYXRhIiwibGVuZ3RoIiwic3RyaW5nIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2NoZWR1bGUiLCJjb3VudFRpbWUiLCJ1bnNjaGVkdWxlIiwiZXZlbnRDbG9zZSIsInNob3dNb25leVdpbiIsInNlbGYiLCJtb25leVdpbiIsImkiLCJub2RlIiwibnVtYmVyVG8iLCJzZXRUaW1lb3V0IiwiZXZlbnRTZWxlY3QiLCJldmVudCIsImRhdGEiLCJ0YXJnZXQiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInNwIiwiU2tlbGV0b24iLCJzZXRBbmltYXRpb24iLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFJSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsU0FBUyxFQUFLUCxFQUFFLENBQUNLLEtBSFQ7QUFJUkcsSUFBQUEsVUFBVSxFQUFJUixFQUFFLENBQUNLLEtBSlQ7QUFLUkksSUFBQUEsU0FBUyxFQUFLVCxFQUFFLENBQUNVLElBTFQ7QUFNUkMsSUFBQUEs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QUpELE1BSU07QUFDRnNCLFFBQUFBLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxjQUFiLENBQTRCLG1CQUE1QixFQUFpREMsWUFBakQsQ0FBOERDLEVBQUUsQ0FBQ0MsUUFBakUsRUFBMkVDLFlBQTNFLENBQXdGLENBQXhGLEVBQTJGLGFBQTNGLEVBQTBHLEtBQTFHO0FBQ0g7O0FBQ0QsV0FBS2pDLFNBQUwsQ0FBZVUsTUFBZixHQUEwQixLQUFLTixXQUEvQjs7QUFDQSxVQUFJLEtBQUtBLFdBQUwsSUFBb0IsQ0FBeEIsRUFBMEI7QUFDdEIsYUFBS2MsWUFBTDtBQUNIO0FBQ0o7QUFDSixHQTNESTtBQTRETEQsRUFBQUEsVUE1REssd0JBNERRO0FBQ1QsU0FBS2lCLElBQUw7QUFDSDtBQTlESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgSGVscGVyID0gcmVxdWlyZShcIkhlbHBlclwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYkhlU29OaGFuICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYkx1b3RCb2MgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk1vbmV5V2luICA6IGNjLkxhYmVsLFxuICAgICAgICByZXN1bHRXaW4gICA6IGNjLk5vZGUsXG4gICAgICAgIHRvdGFsU2VsZWN0IDogMCxcbiAgICAgICAgdG90YWxUaW1lICAgOiAxNSxcbiAgICB9LFxuICAgIG9uRW5hYmxlICgpIHtcbiAgICAgICAgdGhpcy50b3RhbFRpbWUgICAgICAgICAgPSAxNTtcbiAgICAgICAgdGhpcy5yZXN1bHRXaW4uYWN0aXZlICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy50b3RhbFNlbGVjdCAgICAgICAgPSB0aGlzLl9kYXRhLmxlbmd0aDtcbiAgICAgICAgdGhpcy5sYkhlU29OaGFuLnN0cmluZyAgPSBcInhcIitNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMzApO1xuICAgICAgICB0aGlzLmxiTHVvdEJvYy5zdHJpbmcgICA9IHRoaXMudG90YWxTZWxlY3Q7XG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gdGhpcy50b3RhbFRpbWU7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5jb3VudFRpbWUsIDEpO1xuICAgIH0sXG4gICAgY291bnRUaW1lKCkge1xuICAgICAgICB0aGlzLnRvdGFsVGltZS0tO1xuICAgICAgICBpZiAoIHRoaXMudG90YWxUaW1lIDwgMSl7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5jb3VudFRpbWUpO1xuICAgICAgICAgICAgdGhpcy5ldmVudENsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSB0aGlzLnRvdGFsVGltZTtcbiAgICB9LFxuICAgIHNob3dNb25leVdpbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLnJlc3VsdFdpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbW9uZXlXaW4gPSAwO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuX2RhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbW9uZXlXaW4gKz0gdGhpcy5fZGF0YVtpXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxiTW9uZXlXaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBIZWxwZXIubnVtYmVyVG8odGhpcy5sYk1vbmV5V2luLCAwICxtb25leVdpbiwgNjAwLCB0cnVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgc2VsZi5ldmVudENsb3NlKCk7XG4gICAgICAgICAgICAgICAgc2VsZi5yZXN1bHRXaW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAxNTAwKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBldmVudFNlbGVjdChldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy50b3RhbFNlbGVjdCA+IDApe1xuICAgICAgICAgICAgdGhpcy50b3RhbFNlbGVjdC0tO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFbdGhpcy50b3RhbFNlbGVjdF0gPiAwKXtcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9tb25leVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIktpbUN1b25nQm9udXNHYW1lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQXR0YWNrLUtpbUN1b25nXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBIZWxwZXIubnVtYmVyVG8oZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwibGJfbW9uZXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSwgMCAsIHRoaXMuX2RhdGFbdGhpcy50b3RhbFNlbGVjdF0sIDEyMDAsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcIktpbUN1b25nQm9udXNHYW1lXCIpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiQXR0YWNrLU1pc3NcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sYkx1b3RCb2Muc3RyaW5nICAgPSB0aGlzLnRvdGFsU2VsZWN0O1xuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxTZWxlY3QgPT0gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9uZXlXaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfVxufSk7XG4iXX0=
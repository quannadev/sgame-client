
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXFVJS2ltQ3VvbmdCb251c0dhbWUuanMiXSwibmFtZXMiOlsiSGVscGVyIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxiSGVTb05oYW4iLCJMYWJlbCIsImxiVGltZSIsImxiTHVvdEJvYyIsImxiTW9uZXlXaW4iLCJyZXN1bHRXaW4iLCJOb2RlIiwidG90YWxTZWxlY3QiLCJ0b3RhbFRpbWUiLCJvbkVuYWJsZSIsImFjdGl2ZSIsIl9kYXRhIiwibGVuZ3RoIiwic3RyaW5nIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwic2NoZWR1bGUiLCJjb3VudFRpbWUiLCJ1bnNjaGVkdWxlIiwiZXZlbnRDbG9zZSIsInNob3dNb25leVdpbiIsInNlbGYiLCJtb25leVdpbiIsImkiLCJub2RlIiwibnVtYmVyVG8iLCJzZXRUaW1lb3V0IiwiZXZlbnRTZWxlY3QiLCJldmVudCIsImRhdGEiLCJ0YXJnZXQiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInNwIiwiU2tlbGV0b24iLCJzZXRBbmltYXRpb24iLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFJSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsU0FBUyxFQUFLUCxFQUFFLENBQUNLLEtBSFQ7QUFJUkcsSUFBQUEsVUFBVSxFQUFJUixFQUFFLENBQUNLLEtBSlQ7QUFLUkksSUFBQUEsU0FBUyxFQUFLVCxFQUFFLENBQUNVLElBTFQ7QUFNUkMsSUFB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SCxPQUpELE1BSU07QUFDRnNCLFFBQUFBLEtBQUssQ0FBQ0UsTUFBTixDQUFhQyxjQUFiLENBQTRCLG1CQUE1QixFQUFpREMsWUFBakQsQ0FBOERDLEVBQUUsQ0FBQ0MsUUFBakUsRUFBMkVDLFlBQTNFLENBQXdGLENBQXhGLEVBQTJGLGFBQTNGLEVBQTBHLEtBQTFHO0FBQ0g7O0FBQ0QsV0FBS2pDLFNBQUwsQ0FBZVUsTUFBZixHQUEwQixLQUFLTixXQUEvQjs7QUFDQSxVQUFJLEtBQUtBLFdBQUwsSUFBb0IsQ0FBeEIsRUFBMEI7QUFDdEIsYUFBS2MsWUFBTDtBQUNIO0FBQ0o7QUFDSixHQTNESTtBQTRETEQsRUFBQUEsVUE1REssd0JBNERRO0FBQ1QsU0FBS2lCLElBQUw7QUFDSDtBQTlESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgSGVscGVyID0gcmVxdWlyZShcIkhlbHBlclwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGJIZVNvTmhhbiAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTHVvdEJvYyAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJNb25leVdpbiAgOiBjYy5MYWJlbCxcclxuICAgICAgICByZXN1bHRXaW4gICA6IGNjLk5vZGUsXHJcbiAgICAgICAgdG90YWxTZWxlY3QgOiAwLFxyXG4gICAgICAgIHRvdGFsVGltZSAgIDogMTUsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUgKCkge1xyXG4gICAgICAgIHRoaXMudG90YWxUaW1lICAgICAgICAgID0gMTU7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRXaW4uYWN0aXZlICAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRvdGFsU2VsZWN0ICAgICAgICA9IHRoaXMuX2RhdGEubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMubGJIZVNvTmhhbi5zdHJpbmcgID0gXCJ4XCIrTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKjMwKTtcclxuICAgICAgICB0aGlzLmxiTHVvdEJvYy5zdHJpbmcgICA9IHRoaXMudG90YWxTZWxlY3Q7XHJcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSB0aGlzLnRvdGFsVGltZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuY291bnRUaW1lLCAxKTtcclxuICAgIH0sXHJcbiAgICBjb3VudFRpbWUoKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbFRpbWUtLTtcclxuICAgICAgICBpZiAoIHRoaXMudG90YWxUaW1lIDwgMSl7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmNvdW50VGltZSk7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IHRoaXMudG90YWxUaW1lO1xyXG4gICAgfSxcclxuICAgIHNob3dNb25leVdpbigpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRXaW4uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgbW9uZXlXaW4gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIG1vbmV5V2luICs9IHRoaXMuX2RhdGFbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGJNb25leVdpbi5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgSGVscGVyLm51bWJlclRvKHRoaXMubGJNb25leVdpbiwgMCAsbW9uZXlXaW4sIDYwMCwgdHJ1ZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmV2ZW50Q2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVzdWx0V2luLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LCAxNTAwKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBldmVudFNlbGVjdChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRvdGFsU2VsZWN0ID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxTZWxlY3QtLTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2RhdGFbdGhpcy50b3RhbFNlbGVjdF0gPiAwKXtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImxiX21vbmV5XCIpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJLaW1DdW9uZ0JvbnVzR2FtZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkF0dGFjay1LaW1DdW9uZ1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBIZWxwZXIubnVtYmVyVG8oZXZlbnQudGFyZ2V0LmdldENoaWxkQnlOYW1lKFwibGJfbW9uZXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSwgMCAsIHRoaXMuX2RhdGFbdGhpcy50b3RhbFNlbGVjdF0sIDEyMDAsIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJLaW1DdW9uZ0JvbnVzR2FtZVwiKS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIkF0dGFjay1NaXNzXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxiTHVvdEJvYy5zdHJpbmcgICA9IHRoaXMudG90YWxTZWxlY3Q7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsU2VsZWN0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9uZXlXaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgfVxyXG59KTtcclxuIl19
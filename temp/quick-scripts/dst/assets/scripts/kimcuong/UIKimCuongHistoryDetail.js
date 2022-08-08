
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/UIKimCuongHistoryDetail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '293dambNPhHXYKAoFTNzF93', 'UIKimCuongHistoryDetail');
// scripts/kimcuong/UIKimCuongHistoryDetail.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listItem: cc.Node,
    lbSession: cc.Label,
    lbMoneyWin: cc.Label
  },
  onEnable: function onEnable() {
    var resultMap = this._data.resultMap;
    this.lbSession.string = "#" + this._data.session;
    this.lbMoneyWin.string = Utils.addDotToNumber(this._data.win);
    Promise.all(this.listItem.children.map(function (itemTrans, index) {
      itemTrans.getComponent("KimCuongItem").setIcon(resultMap[index]);
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL1VJS2ltQ3VvbmdIaXN0b3J5RGV0YWlsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3RJdGVtIiwiTm9kZSIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJNb25leVdpbiIsIm9uRW5hYmxlIiwicmVzdWx0TWFwIiwiX2RhdGEiLCJzdHJpbmciLCJzZXNzaW9uIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsIndpbiIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW1UcmFucyIsImluZGV4IiwiZ2V0Q29tcG9uZW50Iiwic2V0SWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1KLEVBQUUsQ0FBQ0ssSUFEVDtBQUVSQyxJQUFBQSxTQUFTLEVBQUtOLEVBQUUsQ0FBQ08sS0FGVDtBQUdSQyxJQUFBQSxVQUFVLEVBQUlSLEVBQUUsQ0FBQ087QUFIVCxHQUhQO0FBUUxFLEVBQUFBLFFBUkssc0JBUU07QUFDUCxRQUFJQyxTQUFTLEdBQUcsS0FBS0MsS0FBTCxDQUFXRCxTQUEzQjtBQUNBLFNBQUtKLFNBQUwsQ0FBZU0sTUFBZixHQUF3QixNQUFJLEtBQUtELEtBQUwsQ0FBV0UsT0FBdkM7QUFDQSxTQUFLTCxVQUFMLENBQWdCSSxNQUFoQixHQUF5QkUsS0FBSyxDQUFDQyxjQUFOLENBQXFCLEtBQUtKLEtBQUwsQ0FBV0ssR0FBaEMsQ0FBekI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS2QsUUFBTCxDQUFjZSxRQUFkLENBQXVCQyxHQUF2QixDQUEyQixVQUFTQyxTQUFULEVBQW9CQyxLQUFwQixFQUEyQjtBQUM5REQsTUFBQUEsU0FBUyxDQUFDRSxZQUFWLENBQXVCLGNBQXZCLEVBQXVDQyxPQUF2QyxDQUErQ2QsU0FBUyxDQUFDWSxLQUFELENBQXhEO0FBQ0gsS0FGVyxDQUFaO0FBR0g7QUFmSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGlzdEl0ZW0gICAgOiBjYy5Ob2RlLFxuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk1vbmV5V2luICA6IGNjLkxhYmVsXG4gICAgfSxcbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgbGV0IHJlc3VsdE1hcCA9IHRoaXMuX2RhdGEucmVzdWx0TWFwO1xuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLl9kYXRhLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJNb25leVdpbi5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9kYXRhLndpbik7XG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubGlzdEl0ZW0uY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGl0ZW1UcmFucywgaW5kZXgpIHtcbiAgICAgICAgICAgIGl0ZW1UcmFucy5nZXRDb21wb25lbnQoXCJLaW1DdW9uZ0l0ZW1cIikuc2V0SWNvbihyZXN1bHRNYXBbaW5kZXhdKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn0pO1xuIl19
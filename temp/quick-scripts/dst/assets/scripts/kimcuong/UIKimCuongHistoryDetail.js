
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXFVJS2ltQ3VvbmdIaXN0b3J5RGV0YWlsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3RJdGVtIiwiTm9kZSIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJNb25leVdpbiIsIm9uRW5hYmxlIiwicmVzdWx0TWFwIiwiX2RhdGEiLCJzdHJpbmciLCJzZXNzaW9uIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsIndpbiIsIlByb21pc2UiLCJhbGwiLCJjaGlsZHJlbiIsIm1hcCIsIml0ZW1UcmFucyIsImluZGV4IiwiZ2V0Q29tcG9uZW50Iiwic2V0SWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1KLEVBQUUsQ0FBQ0ssSUFEVDtBQUVSQyxJQUFBQSxTQUFTLEVBQUtOLEVBQUUsQ0FBQ08sS0FGVDtBQUdSQyxJQUFBQSxVQUFVLEVBQUlSLEVBQUUsQ0FBQ087QUFIVCxHQUhQO0FBUUxFLEVBQUFBLFFBUkssc0JBUU07QUFDUCxRQUFJQyxTQUFTLEdBQUcsS0FBS0MsS0FBTCxDQUFXRCxTQUEzQjtBQUNBLFNBQUtKLFNBQUwsQ0FBZU0sTUFBZixHQUF3QixNQUFJLEtBQUtELEtBQUwsQ0FBV0UsT0FBdkM7QUFDQSxTQUFLTCxVQUFMLENBQWdCSSxNQUFoQixHQUF5QkUsS0FBSyxDQUFDQyxjQUFOLENBQXFCLEtBQUtKLEtBQUwsQ0FBV0ssR0FBaEMsQ0FBekI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS2QsUUFBTCxDQUFjZSxRQUFkLENBQXVCQyxHQUF2QixDQUEyQixVQUFTQyxTQUFULEVBQW9CQyxLQUFwQixFQUEyQjtBQUM5REQsTUFBQUEsU0FBUyxDQUFDRSxZQUFWLENBQXVCLGNBQXZCLEVBQXVDQyxPQUF2QyxDQUErQ2QsU0FBUyxDQUFDWSxLQUFELENBQXhEO0FBQ0gsS0FGVyxDQUFaO0FBR0g7QUFmSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaXN0SXRlbSAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgbGJTZXNzaW9uICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYk1vbmV5V2luICA6IGNjLkxhYmVsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdE1hcCA9IHRoaXMuX2RhdGEucmVzdWx0TWFwO1xyXG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuX2RhdGEuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLmxiTW9uZXlXaW4uc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fZGF0YS53aW4pO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubGlzdEl0ZW0uY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGl0ZW1UcmFucywgaW5kZXgpIHtcclxuICAgICAgICAgICAgaXRlbVRyYW5zLmdldENvbXBvbmVudChcIktpbUN1b25nSXRlbVwiKS5zZXRJY29uKHJlc3VsdE1hcFtpbmRleF0pO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
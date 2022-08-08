
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/UICandyTransactionDetail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '44a08iIlj9ENZ6z1lkN8/FX', 'UICandyTransactionDetail');
// scripts/candy/UICandyTransactionDetail.js

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
      itemTrans.getComponent("CandyItem").setIcon(resultMap[index]);
    }));

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbmR5L1VJQ2FuZHlUcmFuc2FjdGlvbkRldGFpbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0SXRlbSIsIk5vZGUiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiTW9uZXlXaW4iLCJvbkVuYWJsZSIsInJlc3VsdE1hcCIsIl9kYXRhIiwic3RyaW5nIiwic2Vzc2lvbiIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iLCJQcm9taXNlIiwiYWxsIiwiY2hpbGRyZW4iLCJtYXAiLCJpdGVtVHJhbnMiLCJpbmRleCIsImdldENvbXBvbmVudCIsInNldEljb24iLCJub2RlIiwiekluZGV4IiwibGFzdFpJbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1KLEVBQUUsQ0FBQ0ssSUFEVDtBQUVSQyxJQUFBQSxTQUFTLEVBQUtOLEVBQUUsQ0FBQ08sS0FGVDtBQUdSQyxJQUFBQSxVQUFVLEVBQUlSLEVBQUUsQ0FBQ087QUFIVCxHQUhQO0FBUUxFLEVBQUFBLFFBUkssc0JBUU07QUFDUCxRQUFJQyxTQUFTLEdBQUcsS0FBS0MsS0FBTCxDQUFXRCxTQUEzQjtBQUNBLFNBQUtKLFNBQUwsQ0FBZU0sTUFBZixHQUF3QixNQUFJLEtBQUtELEtBQUwsQ0FBV0UsT0FBdkM7QUFDQSxTQUFLTCxVQUFMLENBQWdCSSxNQUFoQixHQUF5QkUsS0FBSyxDQUFDQyxjQUFOLENBQXFCLEtBQUtKLEtBQUwsQ0FBV0ssR0FBaEMsQ0FBekI7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS2QsUUFBTCxDQUFjZSxRQUFkLENBQXVCQyxHQUF2QixDQUEyQixVQUFTQyxTQUFULEVBQW9CQyxLQUFwQixFQUEyQjtBQUM5REQsTUFBQUEsU0FBUyxDQUFDRSxZQUFWLENBQXVCLFdBQXZCLEVBQW9DQyxPQUFwQyxDQUE0Q2QsU0FBUyxDQUFDWSxLQUFELENBQXJEO0FBQ0gsS0FGVyxDQUFaOztBQUdBLFFBQUksS0FBS0csSUFBTCxDQUFVQyxNQUFWLElBQW9CMUIsRUFBRSxDQUFDMkIsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CMUIsRUFBRSxDQUFDMkIsVUFBdEI7QUFDSDtBQUNKO0FBbEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsaXN0SXRlbSAgICA6IGNjLk5vZGUsXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTW9uZXlXaW4gIDogY2MuTGFiZWxcbiAgICB9LFxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBsZXQgcmVzdWx0TWFwID0gdGhpcy5fZGF0YS5yZXN1bHRNYXA7XG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuX2RhdGEuc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5sYk1vbmV5V2luLnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHRoaXMuX2RhdGEud2luKTtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saXN0SXRlbS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oaXRlbVRyYW5zLCBpbmRleCkge1xuICAgICAgICAgICAgaXRlbVRyYW5zLmdldENvbXBvbmVudChcIkNhbmR5SXRlbVwiKS5zZXRJY29uKHJlc3VsdE1hcFtpbmRleF0pO1xuICAgICAgICB9KSk7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLmxhc3RaSW5kZXg7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==
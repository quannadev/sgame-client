
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/UISinbadHistoryDetail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '027f0XkPChA9rtB0ME6QuQu', 'UISinbadHistoryDetail');
// scripts/sinbad/UISinbadHistoryDetail.js

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
      itemTrans.getComponent("SinbadItem").setIcon(resultMap[index]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9VSVNpbmJhZEhpc3RvcnlEZXRhaWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGlzdEl0ZW0iLCJOb2RlIiwibGJTZXNzaW9uIiwiTGFiZWwiLCJsYk1vbmV5V2luIiwib25FbmFibGUiLCJyZXN1bHRNYXAiLCJfZGF0YSIsInN0cmluZyIsInNlc3Npb24iLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwid2luIiwiUHJvbWlzZSIsImFsbCIsImNoaWxkcmVuIiwibWFwIiwiaXRlbVRyYW5zIiwiaW5kZXgiLCJnZXRDb21wb25lbnQiLCJzZXRJY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBTUosRUFBRSxDQUFDSyxJQURUO0FBRVJDLElBQUFBLFNBQVMsRUFBS04sRUFBRSxDQUFDTyxLQUZUO0FBR1JDLElBQUFBLFVBQVUsRUFBSVIsRUFBRSxDQUFDTztBQUhULEdBSFA7QUFRTEUsRUFBQUEsUUFSSyxzQkFRTTtBQUNQLFFBQUlDLFNBQVMsR0FBRyxLQUFLQyxLQUFMLENBQVdELFNBQTNCO0FBQ0EsU0FBS0osU0FBTCxDQUFlTSxNQUFmLEdBQXdCLE1BQUksS0FBS0QsS0FBTCxDQUFXRSxPQUF2QztBQUNBLFNBQUtMLFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCRSxLQUFLLENBQUNDLGNBQU4sQ0FBcUIsS0FBS0osS0FBTCxDQUFXSyxHQUFoQyxDQUF6QjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLZCxRQUFMLENBQWNlLFFBQWQsQ0FBdUJDLEdBQXZCLENBQTJCLFVBQVNDLFNBQVQsRUFBb0JDLEtBQXBCLEVBQTJCO0FBQzlERCxNQUFBQSxTQUFTLENBQUNFLFlBQVYsQ0FBdUIsWUFBdkIsRUFBcUNDLE9BQXJDLENBQTZDZCxTQUFTLENBQUNZLEtBQUQsQ0FBdEQ7QUFDSCxLQUZXLENBQVo7QUFHSDtBQWZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsaXN0SXRlbSAgICA6IGNjLk5vZGUsXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTW9uZXlXaW4gIDogY2MuTGFiZWxcbiAgICB9LFxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICBsZXQgcmVzdWx0TWFwID0gdGhpcy5fZGF0YS5yZXN1bHRNYXA7XG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuX2RhdGEuc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5sYk1vbmV5V2luLnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHRoaXMuX2RhdGEud2luKTtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saXN0SXRlbS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oaXRlbVRyYW5zLCBpbmRleCkge1xuICAgICAgICAgICAgaXRlbVRyYW5zLmdldENvbXBvbmVudChcIlNpbmJhZEl0ZW1cIikuc2V0SWNvbihyZXN1bHRNYXBbaW5kZXhdKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn0pO1xuIl19
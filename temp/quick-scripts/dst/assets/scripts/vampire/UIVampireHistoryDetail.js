
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/UIVampireHistoryDetail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73ceeniwy9EQ7w7NPmsRltV', 'UIVampireHistoryDetail');
// scripts/vampire/UIVampireHistoryDetail.js

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
      itemTrans.getComponent("VampireItem").setIcon(resultMap[index]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVUlWYW1waXJlSGlzdG9yeURldGFpbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0SXRlbSIsIk5vZGUiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiTW9uZXlXaW4iLCJvbkVuYWJsZSIsInJlc3VsdE1hcCIsIl9kYXRhIiwic3RyaW5nIiwic2Vzc2lvbiIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iLCJQcm9taXNlIiwiYWxsIiwiY2hpbGRyZW4iLCJtYXAiLCJpdGVtVHJhbnMiLCJpbmRleCIsImdldENvbXBvbmVudCIsInNldEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNSixFQUFFLENBQUNLLElBRFQ7QUFFUkMsSUFBQUEsU0FBUyxFQUFLTixFQUFFLENBQUNPLEtBRlQ7QUFHUkMsSUFBQUEsVUFBVSxFQUFJUixFQUFFLENBQUNPO0FBSFQsR0FIUDtBQVFMRSxFQUFBQSxRQVJLLHNCQVFNO0FBQ1AsUUFBSUMsU0FBUyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0QsU0FBM0I7QUFDQSxTQUFLSixTQUFMLENBQWVNLE1BQWYsR0FBd0IsTUFBSSxLQUFLRCxLQUFMLENBQVdFLE9BQXZDO0FBQ0EsU0FBS0wsVUFBTCxDQUFnQkksTUFBaEIsR0FBeUJFLEtBQUssQ0FBQ0MsY0FBTixDQUFxQixLQUFLSixLQUFMLENBQVdLLEdBQWhDLENBQXpCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtkLFFBQUwsQ0FBY2UsUUFBZCxDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBU0MsU0FBVCxFQUFvQkMsS0FBcEIsRUFBMkI7QUFDOURELE1BQUFBLFNBQVMsQ0FBQ0UsWUFBVixDQUF1QixhQUF2QixFQUFzQ0MsT0FBdEMsQ0FBOENkLFNBQVMsQ0FBQ1ksS0FBRCxDQUF2RDtBQUNILEtBRlcsQ0FBWjtBQUdIO0FBZkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxpc3RJdGVtICAgIDogY2MuTm9kZSxcbiAgICAgICAgbGJTZXNzaW9uICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJNb25leVdpbiAgOiBjYy5MYWJlbFxuICAgIH0sXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGxldCByZXN1bHRNYXAgPSB0aGlzLl9kYXRhLnJlc3VsdE1hcDtcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nID0gXCIjXCIrdGhpcy5fZGF0YS5zZXNzaW9uO1xuICAgICAgICB0aGlzLmxiTW9uZXlXaW4uc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fZGF0YS53aW4pO1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpc3RJdGVtLmNoaWxkcmVuLm1hcChmdW5jdGlvbihpdGVtVHJhbnMsIGluZGV4KSB7XG4gICAgICAgICAgICBpdGVtVHJhbnMuZ2V0Q29tcG9uZW50KFwiVmFtcGlyZUl0ZW1cIikuc2V0SWNvbihyZXN1bHRNYXBbaW5kZXhdKTtcbiAgICAgICAgfSkpO1xuICAgIH1cbn0pO1xuIl19
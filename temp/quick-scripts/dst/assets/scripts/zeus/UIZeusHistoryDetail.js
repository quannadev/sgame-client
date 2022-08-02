
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/UIZeusHistoryDetail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cafd0/tZ8hLXLDrY0MQcqPI', 'UIZeusHistoryDetail');
// scripts/zeus/UIZeusHistoryDetail.js

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
      itemTrans.getComponent("ZeusItem").setIcon(resultMap[index]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcVUlaZXVzSGlzdG9yeURldGFpbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0SXRlbSIsIk5vZGUiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiTW9uZXlXaW4iLCJvbkVuYWJsZSIsInJlc3VsdE1hcCIsIl9kYXRhIiwic3RyaW5nIiwic2Vzc2lvbiIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iLCJQcm9taXNlIiwiYWxsIiwiY2hpbGRyZW4iLCJtYXAiLCJpdGVtVHJhbnMiLCJpbmRleCIsImdldENvbXBvbmVudCIsInNldEljb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNSixFQUFFLENBQUNLLElBRFQ7QUFFUkMsSUFBQUEsU0FBUyxFQUFLTixFQUFFLENBQUNPLEtBRlQ7QUFHUkMsSUFBQUEsVUFBVSxFQUFJUixFQUFFLENBQUNPO0FBSFQsR0FIUDtBQVFMRSxFQUFBQSxRQVJLLHNCQVFNO0FBQ1AsUUFBSUMsU0FBUyxHQUFHLEtBQUtDLEtBQUwsQ0FBV0QsU0FBM0I7QUFDQSxTQUFLSixTQUFMLENBQWVNLE1BQWYsR0FBd0IsTUFBSSxLQUFLRCxLQUFMLENBQVdFLE9BQXZDO0FBQ0EsU0FBS0wsVUFBTCxDQUFnQkksTUFBaEIsR0FBeUJFLEtBQUssQ0FBQ0MsY0FBTixDQUFxQixLQUFLSixLQUFMLENBQVdLLEdBQWhDLENBQXpCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtkLFFBQUwsQ0FBY2UsUUFBZCxDQUF1QkMsR0FBdkIsQ0FBMkIsVUFBU0MsU0FBVCxFQUFvQkMsS0FBcEIsRUFBMkI7QUFDOURELE1BQUFBLFNBQVMsQ0FBQ0UsWUFBVixDQUF1QixVQUF2QixFQUFtQ0MsT0FBbkMsQ0FBMkNkLFNBQVMsQ0FBQ1ksS0FBRCxDQUFwRDtBQUNILEtBRlcsQ0FBWjtBQUdIO0FBZkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGlzdEl0ZW0gICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJNb25leVdpbiAgOiBjYy5MYWJlbFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIGxldCByZXN1bHRNYXAgPSB0aGlzLl9kYXRhLnJlc3VsdE1hcDtcclxuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLl9kYXRhLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5sYk1vbmV5V2luLnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHRoaXMuX2RhdGEud2luKTtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpc3RJdGVtLmNoaWxkcmVuLm1hcChmdW5jdGlvbihpdGVtVHJhbnMsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGl0ZW1UcmFucy5nZXRDb21wb25lbnQoXCJaZXVzSXRlbVwiKS5zZXRJY29uKHJlc3VsdE1hcFtpbmRleF0pO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
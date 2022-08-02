
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/BankLogItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5b1cetNqDxIBIZWNzePjwSc', 'BankLogItem');
// scripts/portal/BankLogItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lb_time: cc.Label,
    lb_amount: cc.Label,
    lb_chip: cc.Label,
    lb_tax: cc.Label,
    lb_des: cc.Label
  },
  init: function init(dataRank) {
    this.lb_time.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lb_des.string = dataRank.des;
    this.lb_tax.string = dataRank.tax + "%";
    var pre = dataRank.amount > 0 ? "+" : "-";
    this.lb_amount.string = pre + "" + Utils.addDotToNumber(Math.abs(dataRank.amount));
    this.lb_chip.string = Utils.addDotToNumber(Math.abs(dataRank.chip));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxCYW5rTG9nSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJfdGltZSIsIkxhYmVsIiwibGJfYW1vdW50IiwibGJfY2hpcCIsImxiX3RheCIsImxiX2RlcyIsImluaXQiLCJkYXRhUmFuayIsInN0cmluZyIsIlV0aWxzIiwicmVGb3JtYXREaXNwbGF5VGltZSIsInRpbWUiLCJkZXMiLCJ0YXgiLCJwcmUiLCJhbW91bnQiLCJhZGREb3RUb051bWJlciIsIk1hdGgiLCJhYnMiLCJjaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFPSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsU0FBUyxFQUFRTixFQUFFLENBQUNLLEtBRlo7QUFHUkUsSUFBQUEsT0FBTyxFQUFLUCxFQUFFLENBQUNLLEtBSFA7QUFJUkcsSUFBQUEsTUFBTSxFQUFPUixFQUFFLENBQUNLLEtBSlI7QUFLUkksSUFBQUEsTUFBTSxFQUFLVCxFQUFFLENBQUNLO0FBTE4sR0FIUDtBQVVMSyxFQUFBQSxJQVZLLGdCQVVBQyxRQVZBLEVBVVU7QUFDWCxTQUFLUCxPQUFMLENBQWFRLE1BQWIsR0FBMkJDLEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEJILFFBQVEsQ0FBQ0ksSUFBbkMsQ0FBM0I7QUFDQSxTQUFLTixNQUFMLENBQVlHLE1BQVosR0FBMEJELFFBQVEsQ0FBQ0ssR0FBbkM7QUFDQSxTQUFLUixNQUFMLENBQVlJLE1BQVosR0FBcUJELFFBQVEsQ0FBQ00sR0FBVCxHQUFjLEdBQW5DO0FBQ0EsUUFBSUMsR0FBRyxHQUFHUCxRQUFRLENBQUNRLE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsR0FBdEIsR0FBNEIsR0FBdEM7QUFDQSxTQUFLYixTQUFMLENBQWVNLE1BQWYsR0FBOEJNLEdBQUcsR0FBQyxFQUFKLEdBQU9MLEtBQUssQ0FBQ08sY0FBTixDQUFxQkMsSUFBSSxDQUFDQyxHQUFMLENBQVNYLFFBQVEsQ0FBQ1EsTUFBbEIsQ0FBckIsQ0FBckM7QUFDQSxTQUFLWixPQUFMLENBQWFLLE1BQWIsR0FBNEJDLEtBQUssQ0FBQ08sY0FBTixDQUFxQkMsSUFBSSxDQUFDQyxHQUFMLENBQVNYLFFBQVEsQ0FBQ1ksSUFBbEIsQ0FBckIsQ0FBNUI7QUFDSDtBQWpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGJfdGltZSAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYl9hbW91bnQgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiX2NoaXAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiX3RheCAgIDogICBjYy5MYWJlbCxcclxuICAgICAgICBsYl9kZXMgICA6IGNjLkxhYmVsXHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhUmFuaykge1xyXG4gICAgICAgIHRoaXMubGJfdGltZS5zdHJpbmcgICAgID0gIFV0aWxzLnJlRm9ybWF0RGlzcGxheVRpbWUoZGF0YVJhbmsudGltZSk7XHJcbiAgICAgICAgdGhpcy5sYl9kZXMuc3RyaW5nICAgICAgPSBkYXRhUmFuay5kZXM7XHJcbiAgICAgICAgdGhpcy5sYl90YXguc3RyaW5nID0gZGF0YVJhbmsudGF4ICtcIiVcIlxyXG4gICAgICAgIGxldCBwcmUgPSBkYXRhUmFuay5hbW91bnQgPiAwID8gXCIrXCIgOiBcIi1cIjtcclxuICAgICAgICB0aGlzLmxiX2Ftb3VudC5zdHJpbmcgICAgICAgPSBwcmUrXCJcIitVdGlscy5hZGREb3RUb051bWJlcihNYXRoLmFicyhkYXRhUmFuay5hbW91bnQpKTtcclxuICAgICAgICB0aGlzLmxiX2NoaXAuc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoTWF0aC5hYnMoZGF0YVJhbmsuY2hpcCkpO1xyXG4gICAgfVxyXG59KTtcclxuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BvcnRhbC9CYW5rTG9nSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJfdGltZSIsIkxhYmVsIiwibGJfYW1vdW50IiwibGJfY2hpcCIsImxiX3RheCIsImxiX2RlcyIsImluaXQiLCJkYXRhUmFuayIsInN0cmluZyIsIlV0aWxzIiwicmVGb3JtYXREaXNwbGF5VGltZSIsInRpbWUiLCJkZXMiLCJ0YXgiLCJwcmUiLCJhbW91bnQiLCJhZGREb3RUb051bWJlciIsIk1hdGgiLCJhYnMiLCJjaGlwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFPSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsU0FBUyxFQUFRTixFQUFFLENBQUNLLEtBRlo7QUFHUkUsSUFBQUEsT0FBTyxFQUFLUCxFQUFFLENBQUNLLEtBSFA7QUFJUkcsSUFBQUEsTUFBTSxFQUFPUixFQUFFLENBQUNLLEtBSlI7QUFLUkksSUFBQUEsTUFBTSxFQUFLVCxFQUFFLENBQUNLO0FBTE4sR0FIUDtBQVVMSyxFQUFBQSxJQVZLLGdCQVVBQyxRQVZBLEVBVVU7QUFDWCxTQUFLUCxPQUFMLENBQWFRLE1BQWIsR0FBMkJDLEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEJILFFBQVEsQ0FBQ0ksSUFBbkMsQ0FBM0I7QUFDQSxTQUFLTixNQUFMLENBQVlHLE1BQVosR0FBMEJELFFBQVEsQ0FBQ0ssR0FBbkM7QUFDQSxTQUFLUixNQUFMLENBQVlJLE1BQVosR0FBcUJELFFBQVEsQ0FBQ00sR0FBVCxHQUFjLEdBQW5DO0FBQ0EsUUFBSUMsR0FBRyxHQUFHUCxRQUFRLENBQUNRLE1BQVQsR0FBa0IsQ0FBbEIsR0FBc0IsR0FBdEIsR0FBNEIsR0FBdEM7QUFDQSxTQUFLYixTQUFMLENBQWVNLE1BQWYsR0FBOEJNLEdBQUcsR0FBQyxFQUFKLEdBQU9MLEtBQUssQ0FBQ08sY0FBTixDQUFxQkMsSUFBSSxDQUFDQyxHQUFMLENBQVNYLFFBQVEsQ0FBQ1EsTUFBbEIsQ0FBckIsQ0FBckM7QUFDQSxTQUFLWixPQUFMLENBQWFLLE1BQWIsR0FBNEJDLEtBQUssQ0FBQ08sY0FBTixDQUFxQkMsSUFBSSxDQUFDQyxHQUFMLENBQVNYLFFBQVEsQ0FBQ1ksSUFBbEIsQ0FBckIsQ0FBNUI7QUFDSDtBQWpCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiX3RpbWUgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiX2Ftb3VudCAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiX2NoaXAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYl90YXggICA6ICAgY2MuTGFiZWwsXG4gICAgICAgIGxiX2RlcyAgIDogY2MuTGFiZWxcbiAgICB9LFxuICAgIGluaXQoZGF0YVJhbmspIHtcbiAgICAgICAgdGhpcy5sYl90aW1lLnN0cmluZyAgICAgPSAgVXRpbHMucmVGb3JtYXREaXNwbGF5VGltZShkYXRhUmFuay50aW1lKTtcbiAgICAgICAgdGhpcy5sYl9kZXMuc3RyaW5nICAgICAgPSBkYXRhUmFuay5kZXM7XG4gICAgICAgIHRoaXMubGJfdGF4LnN0cmluZyA9IGRhdGFSYW5rLnRheCArXCIlXCJcbiAgICAgICAgbGV0IHByZSA9IGRhdGFSYW5rLmFtb3VudCA+IDAgPyBcIitcIiA6IFwiLVwiO1xuICAgICAgICB0aGlzLmxiX2Ftb3VudC5zdHJpbmcgICAgICAgPSBwcmUrXCJcIitVdGlscy5hZGREb3RUb051bWJlcihNYXRoLmFicyhkYXRhUmFuay5hbW91bnQpKTtcbiAgICAgICAgdGhpcy5sYl9jaGlwLnN0cmluZyAgICAgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKE1hdGguYWJzKGRhdGFSYW5rLmNoaXApKTtcbiAgICB9XG59KTtcbiJdfQ==
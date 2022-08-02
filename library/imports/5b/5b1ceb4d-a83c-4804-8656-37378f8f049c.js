"use strict";
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
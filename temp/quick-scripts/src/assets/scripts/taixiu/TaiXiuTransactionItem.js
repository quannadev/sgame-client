"use strict";
cc._RF.push(module, '7b87ddeFVVHWIjXopjEyKPP', 'TaiXiuTransactionItem');
// scripts/taixiu/TaiXiuTransactionItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbMucDat: cc.Label,
    lbResult: cc.Label,
    lbWin: cc.Label,
    lbRefund: cc.Label
  },
  init: function init(dataRank) {
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
    this.lbMucDat.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbResult.string = dataRank.result + " " + dataRank.cua;
    this.lbRefund.string = Utils.addDotToNumber(dataRank.refund);
  }
});

cc._RF.pop();
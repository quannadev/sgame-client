"use strict";
cc._RF.push(module, 'ee6af1rUH1DE7BzpLWH9aT7', 'TaiXiuDuaTop');
// scripts/taixiu/TaiXiuDuaTop.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbTime: cc.Label,
    lbName: cc.Label,
    lbWin: cc.Label
  },
  init: function init(dataRank) {
    this.lbTime.string = dataRank.time;
    this.lbName.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  }
});

cc._RF.pop();
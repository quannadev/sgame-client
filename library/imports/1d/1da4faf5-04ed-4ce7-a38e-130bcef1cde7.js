"use strict";
cc._RF.push(module, '1da4fr1BO1M56OOEwvO8c3n', 'VampireRankItem');
// scripts/vampire/VampireRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbAccount: cc.Label,
    lbWin: cc.Label,
    lbDes: cc.Label
  },
  init: function init(stt, dataRank) {
    this.lbTime.string = dataRank.time;
    this.lbSession.string = dataRank.session;
    this.lbAccount.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  }
});

cc._RF.pop();
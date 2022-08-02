"use strict";
cc._RF.push(module, '8e3baaTjshBjrBxMbEWhQjz', 'SinbadRankItem');
// scripts/sinbad/SinbadRankItem.js

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
  init: function init(id, dataRank) {
    this.lbTime.string = dataRank.time;
    this.lbSession.string = "#" + dataRank.session;
    this.lbAccount.string = dataRank.account;
    this.lbDes.string = dataRank.win_type;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  }
});

cc._RF.pop();
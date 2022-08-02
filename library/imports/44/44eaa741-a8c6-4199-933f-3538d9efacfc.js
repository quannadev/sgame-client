"use strict";
cc._RF.push(module, '44eaadBqMZBmZM/NTjZ76z8', 'CandyRankItem');
// scripts/candy/CandyRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbStt: cc.Label,
    lbTime: cc.Label,
    lbAccount: cc.Label,
    lbWin: cc.Label,
    lbWinType: cc.Label
  },
  init: function init(dataRank) {
    this.lbStt.string = dataRank.session;
    this.lbTime.string = dataRank.time;
    this.lbAccount.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
    this.lbWinType.string = dataRank.win_type;
  }
});

cc._RF.pop();
"use strict";
cc._RF.push(module, '301a9r8YHpKa5EJzNz+6ouX', 'SieuXeRankItem');
// scripts/sieuxe/SieuXeRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbAccount: cc.Label,
    lbWin: cc.Label,
    lbWinType: cc.Label
  },
  init: function init(dataRank) {
    this.lbSession.string = dataRank.session;
    this.lbTime.string = dataRank.time;
    this.lbAccount.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
    this.lbWinType.string = dataRank.win_type;
  }
});

cc._RF.pop();
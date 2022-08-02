"use strict";
cc._RF.push(module, 'd74deKLKrZFUJxC2r3mrnfX', 'MiniPokerRankItem');
// scripts/minipoker/MiniPokerRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lb_stt: cc.Label,
    lbName: cc.Label,
    lbWin: cc.Label
  },
  init: function init(dataRank) {
    this.lb_stt.string = dataRank.session;
    this.lbName.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  }
});

cc._RF.pop();
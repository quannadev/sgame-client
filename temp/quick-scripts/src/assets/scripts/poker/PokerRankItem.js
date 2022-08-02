"use strict";
cc._RF.push(module, 'e7f87GFHhxAeqSTT1R7ktC6', 'PokerRankItem');
// scripts/poker/PokerRankItem.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbAccount: cc.Label,
    lbWin: cc.Label
  },
  init: function init(dataRank) {
    this.lbSession.string = dataRank.session;
    this.lbAccount.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  }
});

cc._RF.pop();
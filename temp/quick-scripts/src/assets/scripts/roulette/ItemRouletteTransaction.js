"use strict";
cc._RF.push(module, '73dffsApsVOsbB18KNzdG1T', 'ItemRouletteTransaction');
// scripts/roulette/ItemRouletteTransaction.js

"use strict";

var TypeBet = ["EVEN", "ODD", "RED", "BLACK", "1-18", "19-36", "1-12", "13-24", "25-36", "1SD", "2ND", "3RD"];
cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbBet: cc.Label,
    lbResult: cc.Label,
    lbBetValue: cc.Label,
    lbRefund: cc.Label,
    lbWin: cc.Label
  },
  init: function init(dataRank) {
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lbWin.string = Utils.addDotToNumber(parseFloat(dataRank.prizePot).toFixed(0));
    this.lbBet.string = this.getTypePot(dataRank.typePot);
    this.lbBetValue.string = Utils.addDotToNumber(parseFloat(dataRank.betPot).toFixed(0));
    this.lbResult.string = dataRank.result;
    this.lbRefund.string = "0";
  },
  getTypePot: function getTypePot(typePot) {
    if (typePot > 36) {
      return TypeBet[typePot % 37];
    }

    return typePot;
  }
});

cc._RF.pop();
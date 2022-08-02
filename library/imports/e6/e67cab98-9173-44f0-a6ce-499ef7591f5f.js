"use strict";
cc._RF.push(module, 'e67cauYkXNE8KbOSZ73WR9f', 'VampireTransactionItem');
// scripts/vampire/VampireTransactionItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbMucDat: cc.Label,
    lbWin: cc.Label,
    lbDetail: cc.Label,
    _dataRank: null
  },
  init: function init(stt, dataRank) {
    this._dataRank = dataRank;
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = dataRank.time;
    this.lbMucDat.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UIVampireHistoryDetail", {
      pop: true,
      src: "vampire",
      data: this._dataRank
    });
  }
});

cc._RF.pop();
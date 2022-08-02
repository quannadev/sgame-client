"use strict";
cc._RF.push(module, '412e1wgkQ5BV7u1nFVPdDoR', 'SinbadTransactionItem');
// scripts/sinbad/SinbadTransactionItem.js

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
  init: function init(dataRank) {
    this._dataRank = dataRank;
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = dataRank.time;
    this.lbMucDat.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UISinbadHistoryDetail", {
      pop: true,
      src: "sinbad",
      data: this._dataRank
    });
  }
});

cc._RF.pop();
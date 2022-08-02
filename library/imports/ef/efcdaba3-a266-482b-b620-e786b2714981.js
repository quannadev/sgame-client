"use strict";
cc._RF.push(module, 'efcdaujomZIK7Yg54aycUmB', 'SieuXeTransactionItem');
// scripts/sieuxe/SieuXeTransactionItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbStakes: cc.Label,
    lbWin: cc.Label,
    _dataRank: null
  },
  init: function init(dataRank) {
    this._dataRank = dataRank;
    this.lbSession.string = dataRank.session;
    this.lbTime.string = dataRank.time;
    this.lbStakes.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UISieuXeTransactionDetail", {
      pop: true,
      src: 'sieuxe',
      data: {
        map: this._dataRank.resultMap,
        session: this._dataRank.session,
        win: this._dataRank.win
      }
    });
  }
});

cc._RF.pop();
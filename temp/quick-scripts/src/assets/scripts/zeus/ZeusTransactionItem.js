"use strict";
cc._RF.push(module, '8b771omZChDF7cu6tIKECgV', 'ZeusTransactionItem');
// scripts/zeus/ZeusTransactionItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    bgItem: cc.Node,
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbMucDat: cc.Label,
    lbWin: cc.Label,
    _dataRank: null
  },
  init: function init(idx, dataRank) {
    this._dataRank = dataRank;
    this.bgItem.active = idx % 2 == 1;
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lbMucDat.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UIZeusHistoryDetail", {
      pop: true,
      src: "zeus",
      data: this._dataRank
    });
  }
});

cc._RF.pop();
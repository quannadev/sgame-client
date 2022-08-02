"use strict";
cc._RF.push(module, '7e047XDGmtJ6LTOAeD9TJnQ', 'TXSessionDetail');
// scripts/taixiu/TXSessionDetail.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbTime: cc.Label,
    lbDat: cc.Label,
    lbName: cc.Label
  },
  init: function init(dataSession) {
    this.lbTime.string = Utils.reFormatDisplayTime(dataSession.time).split(" ")[0];
    this.lbDat.string = dataSession.betTai > 0 ? Utils.addDotToNumber(dataSession.betTai) : Utils.addDotToNumber(dataSession.betXiu);
    this.lbName.string = dataSession.displayName;
  }
});

cc._RF.pop();
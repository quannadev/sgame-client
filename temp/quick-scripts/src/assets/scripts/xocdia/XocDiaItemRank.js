"use strict";
cc._RF.push(module, 'b257dv/3TtE8J97K+eMOEBc', 'XocDiaItemRank');
// scripts/xocdia/XocDiaItemRank.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    listRank: [cc.SpriteFrame],
    spRank: cc.Sprite,
    lbRank: cc.Label,
    lbName: cc.Label,
    lbWin: cc.Label,
    bgItem: cc.Node
  },
  init: function init(dataRank, stt) {
    if (stt < 3) {
      this.spRank.node.active = true;
      this.lbRank.node.active = false;
      this.spRank.spriteFrame = this.listRank[stt];
    } else {
      this.spRank.node.active = false;
      this.lbRank.node.active = true;
      this.lbRank.string = stt + 1;
    }

    this.bgItem.active = stt % 2 == 0;
    this.lbName.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  }
});

cc._RF.pop();
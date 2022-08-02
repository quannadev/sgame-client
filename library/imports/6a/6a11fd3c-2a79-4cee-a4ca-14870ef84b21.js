"use strict";
cc._RF.push(module, '6a11f08KnlM7qTKFIcO+Esh', 'UIMiniPokerHelper');
// scripts/minipoker/UIMiniPokerHelper.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {},
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  }
});

cc._RF.pop();
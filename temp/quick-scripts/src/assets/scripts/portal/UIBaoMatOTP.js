"use strict";
cc._RF.push(module, '826abY87hRI442yZwTg/sWm', 'UIBaoMatOTP');
// scripts/portal/UIBaoMatOTP.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    phone: cc.EditBox,
    code_otp: cc.EditBox
  },
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  eventClose: function eventClose() {
    this.back();
    mm.audio.playButton();
  },
  eventUpdate: function eventUpdate() {
    mm.audio.playButton();
  }
});

cc._RF.pop();
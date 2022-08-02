"use strict";
cc._RF.push(module, 'd5a52cM8CtFQaeaphTmxD6Z', 'UIBaccaratHelper');
// scripts/baccarat/UIBaccaratHelper.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {},
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  }
});

cc._RF.pop();
"use strict";
cc._RF.push(module, '952eesdz9BDxZsNeGcLh/i1', 'UIXocDiaHelper');
// scripts/xocdia/UIXocDiaHelper.js

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
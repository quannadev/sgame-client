"use strict";
cc._RF.push(module, '88a8apaHLJPbJhUVAyFSPIk', 'UITaiXiuHelper');
// scripts/taixiu/UITaiXiuHelper.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {},
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }
  }
});

cc._RF.pop();
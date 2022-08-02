"use strict";
cc._RF.push(module, '13ba2NCuKtE9YsQAdXH7gmE', 'UICandyHelper');
// scripts/candy/UICandyHelper.js

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
    this.back();
  }
});

cc._RF.pop();
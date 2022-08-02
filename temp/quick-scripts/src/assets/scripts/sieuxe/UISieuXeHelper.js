"use strict";
cc._RF.push(module, '2c740bo341LhZk4g0X7OWaB', 'UISieuXeHelper');
// scripts/sieuxe/UISieuXeHelper.js

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
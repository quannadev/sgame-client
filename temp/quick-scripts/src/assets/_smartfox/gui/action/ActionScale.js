"use strict";
cc._RF.push(module, 'c2bb5sgqExIgrS2J5v3PKDt', 'ActionScale');
// _smartfox/gui/action/ActionScale.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onEnable: function onEnable() {
    this.node.scale = 0;
    this.node.runAction(cc.sequence(cc.scaleTo(0.2, 1.05), cc.delayTime(0.1), cc.scaleTo(0.1, 1)));
  }
});

cc._RF.pop();
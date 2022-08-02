"use strict";
cc._RF.push(module, '763396pf7hMnaO8rEr45Ez2', 'ActionRotateJerk');
// _smartfox/gui/action/ActionRotateJerk.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    _seq2: null
  },
  onLoad: function onLoad() {
    var seq = cc.sequence(cc.rotateTo(0.5, -30), cc.rotateTo(0.5, 30));
    this._seq2 = seq.clone().repeatForever();
  },
  runActionRotateJerk: function runActionRotateJerk(nodeRun) {
    nodeRun.runAction(cc.sequence(this._seq2, cc.delayTime(1)).bind(this));
  }
});

cc._RF.pop();
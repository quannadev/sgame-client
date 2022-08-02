"use strict";
cc._RF.push(module, '8201bPTvwFBGJDnQyU8Hphu', 'ActionRotate');
// _smartfox/gui/action/ActionRotate.js

"use strict";

var MOVE_TYPE = cc.Enum({
  MoveTop: 1,
  MoveBottom: 2,
  MoveLeft: 3,
  MoveRight: 4
});
cc.Class({
  "extends": cc.Component,
  properties: {
    timer: 4
  },
  onLoad: function onLoad() {
    var actionBy = cc.rotateBy(this.timer, 360);
    this.node.runAction(actionBy.repeatForever());
  }
});

cc._RF.pop();
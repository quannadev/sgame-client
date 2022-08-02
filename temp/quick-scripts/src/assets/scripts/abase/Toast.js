"use strict";
cc._RF.push(module, '03de5PVMXVCEI3J2p5dEfHb', 'Toast');
// scripts/abase/Toast.js

"use strict";

var Toast = cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lb_msg: cc.Label
  },
  statics: {
    inst: null
  },
  onLoad: function onLoad() {
    Toast.inst = this;
    mm.Toast = this;

    this._hide();

    this.node.zIndex = 500;
  },
  showToast: function showToast(duration, msg, pos) {
    this.node.active = true;
    var self = this;
    this.lb_msg.string = msg;

    if (pos != undefined && pos != null) {
      this.node.position = pos;
    }

    this.node.stopAllActions();
    this.node.runAction(cc.sequence(cc.delayTime(duration), cc.callFunc(function () {
      self._hide();
    })));
  },
  _hide: function _hide() {
    this.node.active = false;
  }
});

cc._RF.pop();
"use strict";
cc._RF.push(module, '972c5O/HVZKw7Sap+T3eCiU', 'Move');
// scripts/Move.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    _isMove: false
  },
  onLoad: function onLoad() {
    var self = this;
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var target = event.currentTarget;
      var location = event.getLocation();
      var delta = event.getDelta();
      self.node.x += delta.x;
      self.node.y += delta.y;

      if (delta.x != 0 || delta.y != 0) {
        self._isMove = true;
      }
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      self._isMove = false;

      if (self.node.parent.zIndex <= cc.lastZIndex) {
        cc.lastZIndex += 1;
        self.node.parent.zIndex = cc.lastZIndex;
      }
    });
  },
  isMove: function isMove() {
    return this._isMove;
  }
});

cc._RF.pop();
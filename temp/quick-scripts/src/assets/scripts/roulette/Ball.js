"use strict";
cc._RF.push(module, 'da3c96DhmpDVoia4fePoHCi', 'Ball');
// scripts/roulette/Ball.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    _cbOnCollisionStay: null
  },
  onCollisionEnter: function onCollisionEnter(other, self) {
    if (this._cbOnCollisionStay) this._cbOnCollisionStay(parseInt(other.tag));
  },
  addEventOnCollisionEnter: function addEventOnCollisionEnter(cb) {
    this._cbOnCollisionStay = cb;
  }
});

cc._RF.pop();
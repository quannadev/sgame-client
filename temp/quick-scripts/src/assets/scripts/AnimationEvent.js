"use strict";
cc._RF.push(module, '3a45a/naWNJ75sLKgKIaSUl', 'AnimationEvent');
// scripts/AnimationEvent.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    _cb: null
  },
  onAnimCompleted: function onAnimCompleted(num, string) {
    this.node.active = false;
    if (this._cb) this._cb();
  },
  addEventComplete: function addEventComplete(cb) {
    this._cb = cb;
  }
});

cc._RF.pop();
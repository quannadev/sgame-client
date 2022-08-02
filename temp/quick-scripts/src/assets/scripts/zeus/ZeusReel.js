"use strict";
cc._RF.push(module, '4300e0hteBBP5YX06aNN+Dp', 'ZeusReel');
// scripts/zeus/ZeusReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, data) {
    var _this = this;

    this.SLV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.SLV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('ZeusItem');
      icon.init(self.SLV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index) {
    this.node.stopAllActions();
    var timeDelay = 0.4;
    var timeMove = 2;

    if (this.SLV.isFast) {
      timeDelay = 0.2;
      timeMove = 1;
    }

    var d = cc.moveTo(timeMove, cc.v2(this.node.x, -(this.node.height - 420))).easing(cc.easeInOut(1));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.SLV.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 4) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.SLV.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, EF));
    } else this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, p2));
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.SLV.copy();
    this.node.y = 0;
  }
});

cc._RF.pop();
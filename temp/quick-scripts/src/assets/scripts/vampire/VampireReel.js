"use strict";
cc._RF.push(module, '4aa6aTnCmVHmKQ/V/OOpr1u', 'VampireReel');
// scripts/vampire/VampireReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  onEnable: function onEnable() {},
  init: function init(obj, data) {
    var _this = this;

    this.SLV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.SLV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('VampireItem');
      icon.init(self.SLV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index) {
    this.node.stopAllActions();
    var self = this;
    var d = cc.moveTo(1.8, cc.v2(this.node.x, -(this.node.height - 418))).easing(cc.easeInOut(3));
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
      this.node.runAction(cc.sequence(cc.delayTime(index * 0.2), d, EF));
    } else this.node.runAction(cc.sequence(cc.delayTime(index * 0.2), d, p2));
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.SLV.copy();
    this.node.y = 0;
  }
});

cc._RF.pop();
"use strict";
cc._RF.push(module, 'b2860cvS59Co5TTs1MoU1BF', 'SieuXeReel');
// scripts/sieuxe/SieuXeReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    HeightReel: 300
  },
  onLoad: function onLoad() {
    this.HeightReel = this.node.height - 5;
  },
  init: function init(obj, data) {
    var _this = this;

    this.SXV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.SXV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('SieuXeItem');
      icon.init(self.SXV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index, isFast) {
    var timeDelay = 0.2;
    var timeMove = 2;

    if (this.SXV.isFast) {
      timeDelay = 0.1;
      timeMove = 0.2;
    }

    this.node.stopAllActions();
    var d = cc.moveTo(timeMove, cc.v2(this.node.x, -(this.node.height - this.HeightReel))).easing(cc.easeInOut(0.5));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.SXV.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 4) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.SXV.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, EF));
    } else {
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, p2));
    }
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.SXV.copy();
    this.node.y = 0;
  }
});

cc._RF.pop();
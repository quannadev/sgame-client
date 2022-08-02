"use strict";
cc._RF.push(module, '827fc8EAylLFatmnoEMHgPy', 'CandyReel');
// scripts/candy/CandyReel.js

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

    this.CDV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.CDV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('CandyItem');
      icon.init(self.CDV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index, isFast) {
    var timeDelay = 0.4;
    var timeMove = 1;

    if (this.CDV.isFast) {
      timeDelay = 0.2;
      timeMove = 0.4;
    }

    this.node.stopAllActions();
    var d = cc.moveTo(timeMove, cc.v2(this.node.x, -(this.node.height - this.HeightReel))).easing(cc.easeOut(1));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.CDV.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 2) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.CDV.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, EF));
    } else {
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, p2));
    }
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.CDV.copy();
    this.node.y = 0;
  }
});

cc._RF.pop();
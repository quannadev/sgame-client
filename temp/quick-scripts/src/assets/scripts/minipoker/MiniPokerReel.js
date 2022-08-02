"use strict";
cc._RF.push(module, 'e1af81InmlHHrH9JZzyBiCQ', 'MiniPokerReel');
// scripts/minipoker/MiniPokerReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    HeightReel: 144
  },
  onLoad: function onLoad() {
    this.HeightReel = this.node.height - 5;
  },
  init: function init(obj, data) {
    var _this = this;

    this.MNPK = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.MNPK.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('MiniPokerItem');
      icon.init(self.MNPK, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index) {
    var timeMove = 1;

    if (this.MNPK.isFast) {
      timeMove = 0.2;
    }

    this.node.stopAllActions();
    var d = cc.moveTo(timeMove * (index / 2 + 1), cc.v2(this.node.x, -(this.node.height - this.HeightReel))).easing(cc.easeOut(2));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.MNPK.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 4) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.MNPK.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(d, EF));
    } else {
      this.node.runAction(cc.sequence(d, p2));
    }
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.MNPK.copy();
    this.node.y = 0;
  }
});

cc._RF.pop();
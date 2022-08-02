"use strict";
cc._RF.push(module, '2c2b9R9uDxPBJNa9FDo103e', 'CandyItem');
// scripts/candy/CandyItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, icon) {
    this.node.children[icon].active = true;
  },
  stop: function stop() {},
  random: function random() {
    var icon = ~~(Math.random() * 6);
    this.setIcon(icon);
    return icon;
  },
  setIcon: function setIcon(icon, data) {
    var _this = this;

    if (data === void 0) {
      data = false;
    }

    Promise.all(this.node.children.map(function (node) {
      node.active = false;
    })).then(function (result) {
      _this.node.children[icon].active = true;

      if (data) {
        _this.data = icon;
      }
    }, this);
  }
});

cc._RF.pop();
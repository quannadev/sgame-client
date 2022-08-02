"use strict";
cc._RF.push(module, '565b6mXw05EG7JF3cEWRyAE', 'VampireItem');
// scripts/vampire/VampireItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, icon) {
    this.RedT = obj;
    this.node.children[icon].active = true;
  },
  stop: function stop() {},
  random: function random() {
    var icon = ~~(Math.random() * 7);
    this.setIcon(icon);
    return icon;
  },
  setIcon: function setIcon(icon, data) {
    if (data === void 0) {
      data = false;
    }

    Promise.all(this.node.children.map(function (node) {
      node.active = false;
    }));
    this.node.children[icon].active = true;

    if (data) {
      this.data = icon;
    }
  }
});

cc._RF.pop();
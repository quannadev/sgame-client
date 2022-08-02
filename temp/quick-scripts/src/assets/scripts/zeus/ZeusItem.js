"use strict";
cc._RF.push(module, 'f72a0nXxyhMEJ+UQ0MG/OuN', 'ZeusItem');
// scripts/zeus/ZeusItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, icon) {
    var _this = this;

    this.RedT = obj;
    Promise.all(this.node.children.map(function (node) {
      node.active = false;
    })).then(function (result) {
      _this.node.children[icon].active = true;
    });
  },
  stop: function stop() {},
  random: function random() {
    var icon = ~~(Math.random() * 11);
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
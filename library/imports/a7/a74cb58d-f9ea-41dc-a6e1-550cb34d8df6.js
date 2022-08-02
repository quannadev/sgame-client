"use strict";
cc._RF.push(module, 'a74cbWN+epB3KbhVQyzTY32', 'SinbadItem');
// scripts/sinbad/SinbadItem.js

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
    var icon = ~~(Math.random() * 7);
    this.setIcon(icon);
    return icon;
  },
  setIcon: function setIcon(icon, data) {
    var _this2 = this;

    if (data === void 0) {
      data = false;
    }

    Promise.all(this.node.children.map(function (node) {
      node.active = false;
    })).then(function (result) {
      _this2.node.children[icon].active = true;

      if (data) {
        _this2.data = icon;
      }
    });
  }
});

cc._RF.pop();
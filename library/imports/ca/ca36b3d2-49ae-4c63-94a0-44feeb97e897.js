"use strict";
cc._RF.push(module, 'ca36bPSSa5MY5SgRP7rl+iX', 'MM');
// scripts/abase/MM.js

"use strict";

var MM = cc.Class({
  "extends": cc.Component,
  statics: {
    inst: null
  },
  // use this for initialization
  onLoad: function onLoad() {
    MM.inst = this;
    var gameObj = cc.find('MM');

    if (gameObj) {
      cc.game.addPersistRootNode(gameObj);
    }

    cc.lastZIndex = 0;
    cc.currentUI = "";
  },
  start: function start() {
    cc.screen.fullScreen();
  },
  //去左空格;
  ltrim: function ltrim(s) {
    return s.replace(/(^\s*)/g, "");
  },
  //去右空格;
  rtrim: function rtrim(s) {
    return s.replace(/(\s*$)/g, "");
  },
  //去左右空格;
  trim: function trim(s) {
    return s.replace(/(^\s*)|(\s*$)/g, "");
  }
});
window.mm = MM;

cc._RF.pop();
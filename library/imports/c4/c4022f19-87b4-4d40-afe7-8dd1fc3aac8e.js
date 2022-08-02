"use strict";
cc._RF.push(module, 'c40228Zh7RNQK/njdH8OqyO', 'SinbadMainLine');
// scripts/sinbad/SinbadMainLine.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(obj) {
    this.SLV = obj;
    return this;
  },
  onEnable: function onEnable() {// this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
    // this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
  },
  onDisable: function onDisable() {// this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
    // this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
  },
  onhover: function onhover() {
    this.node.children[0].active = true;
  },
  offhover: function offhover() {
    this.node.children[0].active = false;
  },
  onEf: function onEf() {
    this.onhover();
    this.node.pauseSystemEvents(true);
  },
  offEf: function offEf() {
    this.offhover();
    this.node.resumeSystemEvents(true);
  },
  offAll: function offAll() {}
});

cc._RF.pop();
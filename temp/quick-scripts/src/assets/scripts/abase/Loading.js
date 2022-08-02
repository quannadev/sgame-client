"use strict";
cc._RF.push(module, '05429VhJqJPza6444t1eZ5u', 'Loading');
// scripts/abase/Loading.js

"use strict";

var Loading = cc.Class({
  "extends": cc.VozBaseComponent,
  statics: {
    inst: null
  },
  properties: {
    icon_loading: cc.Node
  },
  onLoad: function onLoad() {
    Loading.inst = this;
    mm.Loading = this;
    this.hide();
    this.node.zIndex = 1000;
  },
  show: function show(hideIconLoad) {
    this.node.active = true;

    if (hideIconLoad != undefined && hideIconLoad) {
      this.icon_loading.active = false;
    } else {
      this.icon_loading.active = true;
      this.icon_loading.runAction(cc.repeatForever(cc.rotateBy(0.01, 10)));
    }
  },
  hide: function hide() {
    this.node.active = false;
    if (cc._selectGameNode) cc._selectGameNode.getChildByName("load").active = false;
  }
});

cc._RF.pop();
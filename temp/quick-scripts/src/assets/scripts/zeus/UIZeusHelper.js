"use strict";
cc._RF.push(module, '569a0hfmHhHS6Z7otbFzfYD', 'UIZeusHelper');
// scripts/zeus/UIZeusHelper.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    helperNode: cc.Node
  },
  onEnable: function onEnable() {
    var pageHelp = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
    pageHelp.scrollToPage(0, 0);
  },
  eventClose: function eventClose() {
    this.back();
  },
  eventHelperLeft: function eventHelperLeft() {
    var pageHelp = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
    pageHelp.scrollToPage((pageHelp.getCurrentPageIndex() + 4) % 5, 0.2);
  },
  eventHelperRight: function eventHelperRight() {
    var pageHelp = this.helperNode.getChildByName("pageview").getComponent(cc.PageView);
    pageHelp.scrollToPage((pageHelp.getCurrentPageIndex() + 1) % 5, 0.2);
  }
});

cc._RF.pop();
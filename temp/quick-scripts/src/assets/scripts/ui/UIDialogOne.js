"use strict";
cc._RF.push(module, 'bc69fyCGktKKJgDpKJdig1b', 'UIDialogOne');
// scripts/ui/UIDialogOne.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lb_content: cc.Label
  },
  onEnable: function onEnable() {
    if (this._data.content) {
      this.lb_content.string = this._data.content;
    }

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  eventConfirm: function eventConfirm() {
    mm.audio.playButton();

    if (this._data.cbYes) {
      this._data.cbYes.call(this);
    }

    this.node.setSiblingIndex(0);
    this.node.active = false;
  }
});

cc._RF.pop();
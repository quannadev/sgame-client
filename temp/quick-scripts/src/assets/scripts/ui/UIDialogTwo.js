"use strict";
cc._RF.push(module, '33288DCobhC34Lhvm6P2Ery', 'UIDialogTwo');
// scripts/ui/UIDialogTwo.js

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
  },
  eventCancel: function eventCancel() {
    mm.audio.playButton();
    this.back();
  }
});

cc._RF.pop();
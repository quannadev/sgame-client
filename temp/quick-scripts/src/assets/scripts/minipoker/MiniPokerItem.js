"use strict";
cc._RF.push(module, 'd9485vhHS9J+rnpQl9LAd6g', 'MiniPokerItem');
// scripts/minipoker/MiniPokerItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    card: cc.Sprite,
    listCard: null
  },
  init: function init(obj, icon) {
    this.listCard = obj.ListCard;
    this.card.spriteFrame = this.listCard.getSpriteFrame(icon);
  },
  stop: function stop() {},
  setIcon: function setIcon(icon, data) {
    if (data === void 0) {
      data = false;
    }

    this.card.spriteFrame = this.listCard.getSpriteFrame(icon);

    if (data) {
      this.data = icon;
    }
  }
});

cc._RF.pop();
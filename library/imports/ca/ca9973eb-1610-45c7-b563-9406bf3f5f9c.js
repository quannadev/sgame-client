"use strict";
cc._RF.push(module, 'ca997PrFhBFx7VjlAa/P1+c', 'ItemGame');
// scripts/components/ItemGame.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    Icon: cc.Sprite
  },
  init: function init(game) {// Utils.loadRes(this.Icon, game.res);
  }
});

cc._RF.pop();
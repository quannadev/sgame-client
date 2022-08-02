"use strict";
cc._RF.push(module, 'e7646Q9hVJHWoaeuM57B/H8', 'UIPokerRank');
// scripts/poker/UIPokerRank.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listRank = [];
    this.listview.numItems = this.listRank.length;
  },
  updateRank: function updateRank(items) {
    if (items) {
      this.listRank = items;
      this.listview.numItems = this.listRank.length;
    }
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank);
  }
});

cc._RF.pop();
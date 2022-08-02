"use strict";
cc._RF.push(module, 'c7d052LJhlNfoLv1LMTXkXD', 'UIKimCuongHistoryTransaction');
// scripts/kimcuong/UIKimCuongHistoryTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listRank = [];
  },
  onEnable: function onEnable() {
    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank);
  },
  eventClose: function eventClose() {
    this.back();
  }
});

cc._RF.pop();
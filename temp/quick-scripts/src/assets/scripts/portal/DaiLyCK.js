"use strict";
cc._RF.push(module, '4d6e5Mp9lhCY7n39obibtKI', 'DaiLyCK');
// scripts/portal/DaiLyCK.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listDaiLy = [];
    this.listview.numItems = this.listDaiLy.length;
  },
  eventClose: function eventClose() {
    this.back();
  },
  updateItems: function updateItems(listAgency) {
    this.listDaiLy = listAgency;
    this.listview.numItems = this.listDaiLy.length;
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listDaiLy[idx];
    item.getComponent(item.name).init(rank);
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;

    if (this.cb) {
      selectedId = parseInt(selectedId);
      this.cb(this.listDaiLy[selectedId]);
      item.getComponent(item.name).showMenuChon(true);

      if (lastSelectedId != null) {
        lastSelectedId = parseInt(lastSelectedId);
        if (this.listview.getItemByListId(lastSelectedId)) this.listview.getItemByListId(lastSelectedId).getComponent(item.name).showMenuChon(false);
      }
    }
  },
  addEventSelect: function addEventSelect(callBack) {
    this.cb = callBack;
  }
});

cc._RF.pop();
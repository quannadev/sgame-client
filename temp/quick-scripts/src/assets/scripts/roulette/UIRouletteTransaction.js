"use strict";
cc._RF.push(module, '8afe49fZYBET5yoqw5KoFiP', 'UIRouletteTransaction');
// scripts/roulette/UIRouletteTransaction.js

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
  onEnable: function onEnable() {
    mm.Loading.hide();
    this.listRank = this._data.items;
    this.listview.numItems = this.listRank.length;
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank);
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;
    var list = item.listItem._list;
    var str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;

    if (list.selectedMode == 2) {
      //Nếu nó là chế độ đa lựa chọn
      str += '，Giá trị hiện tại：' + val;
    }
  }
});

cc._RF.pop();
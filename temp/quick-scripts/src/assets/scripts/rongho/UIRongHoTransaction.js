"use strict";
cc._RF.push(module, 'e239915Zz1C6ahqoqk8Oirz', 'UIRongHoTransaction');
// scripts/rongho/UIRongHoTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onEnable: function onEnable() {
    mm.Loading.hide();
    this.listTrans = this._data.items;
    this.listview.numItems = this.listTrans.length;
  },
  eventClose: function eventClose() {
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listTrans[idx];
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

    console.log(str);
  }
});

cc._RF.pop();
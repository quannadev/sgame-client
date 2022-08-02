"use strict";
cc._RF.push(module, '2d0cfAstC5MnplBOYUrsRWa', 'UISinbadHistoryTransaction');
// scripts/sinbad/UISinbadHistoryTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listTransaction = [{
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }];
    this.listview.numItems = this.listTransaction.length;
  },
  onEnable: function onEnable() {
    if (this._data && this._data.items) {
      this.listTransaction = this._data.items;
      this.listview.numItems = this.listTransaction.length;
    }
  },
  eventClose: function eventClose() {
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listTransaction[idx];
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
  },
  eventHistoryWin: function eventHistoryWin() {},
  eventAll: function eventAll() {}
});

cc._RF.pop();
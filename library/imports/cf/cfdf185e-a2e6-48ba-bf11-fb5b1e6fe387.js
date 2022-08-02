"use strict";
cc._RF.push(module, 'cfdf1heouZIur8R+1seb+OH', 'UITaiXiuRank');
// scripts/taixiu/UITaiXiuRank.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onEnable: function onEnable() {
    this.listRank = this._data.items;
    this.listview.numItems = this.listRank.length;

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }

    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.TaiXiuController.ZoneInstance.send(request.toSRequest());
  },
  updateData: function updateData(items) {
    mm.Loading.hide();
    this.listRank = items;
    this.listview.numItems = this.listRank.length;
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank, idx);
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
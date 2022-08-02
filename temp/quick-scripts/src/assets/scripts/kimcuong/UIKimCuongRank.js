"use strict";
cc._RF.push(module, '48a34FzAUxMT7uWTPE0cZ4M', 'UIKimCuongRank');
// scripts/kimcuong/UIKimCuongRank.js

"use strict";

var Listview = require('Listview');

var Helper = require('Helper');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview,
    lbTitle: cc.Label,
    allRank: cc.Sprite,
    allHu: cc.Sprite,
    listRank: [],
    listHu: []
  },
  onEnable: function onEnable() {
    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
      this.lbTitle.string = "Bảng Vinh Danh";
    }
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(idx, rank);
  },
  eventClose: function eventClose() {
    this.back();
  },
  eventAllRank: function eventAllRank() {
    this.lbTitle.string = "Bảng Vinh Danh";
    Helper.setMaterialGray(this.allRank, false);
    Helper.setMaterialGray(this.allHu, true);

    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }
  },
  eventHu: function eventHu() {
    this.lbTitle.string = "Lịch Sử Hũ";
    Helper.setMaterialGray(this.allRank, true);
    Helper.setMaterialGray(this.allHu, false);

    if (this._data && this._data.items) {
      this.listHu = [];
      this.listview.numItems = this.listHu.length;
    }
  }
});

cc._RF.pop();
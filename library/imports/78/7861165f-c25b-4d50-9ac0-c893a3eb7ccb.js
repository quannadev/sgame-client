"use strict";
cc._RF.push(module, '78611ZfwltNUJrAyJOj63zL', 'UISieuXeTransactionDetail');
// scripts/sieuxe/UISieuXeTransactionDetail.js

"use strict";

var reel = require("SieuXeReel");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    reels: {
      "default": [],
      type: cc.Node
    },
    lbSession: cc.Label,
    lbTotalWin: cc.Label,
    TotalItemRun: 20,
    TotalColumn: 5
  },
  onEnable: function onEnable() {
    this.TotalItemRun = 20;
    this.lbSession.string = "#" + this._data.session;
    this.lbTotalWin.string = Utils.addDotToNumber(this._data.win);
    var result = this._data.map; // reformat

    for (var i = 0; i < result.length; i++) {
      var count = i % 5;

      if (count > 2) {
        result[i] = result[i] + 1;
      }
    }

    result = this.getDataResult(result);
    Promise.all(this.reels.map(function (itemReel, pos) {
      Promise.all(itemReel.children.map(function (itemXe, index) {
        itemXe.getComponent("SieuXeItem").init(this, result[pos][index]);
      }));
    }));

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }
  },
  getDataResult: function getDataResult(result) {
    var newArray = [];

    for (var i = 0; i < this.TotalColumn; i++) {
      newArray[i] = [];
    }

    for (var _i = 0; _i < result.length; _i++) {
      newArray[_i % this.TotalColumn].push(result[_i]);
    }

    return newArray;
  },
  eventClose: function eventClose() {
    this.back();
  } // update (dt) {},

});

cc._RF.pop();
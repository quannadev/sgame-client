"use strict";
cc._RF.push(module, 'cafd0/tZ8hLXLDrY0MQcqPI', 'UIZeusHistoryDetail');
// scripts/zeus/UIZeusHistoryDetail.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listItem: cc.Node,
    lbSession: cc.Label,
    lbMoneyWin: cc.Label
  },
  onEnable: function onEnable() {
    var resultMap = this._data.resultMap;
    this.lbSession.string = "#" + this._data.session;
    this.lbMoneyWin.string = Utils.addDotToNumber(this._data.win);
    Promise.all(this.listItem.children.map(function (itemTrans, index) {
      itemTrans.getComponent("ZeusItem").setIcon(resultMap[index]);
    }));
  }
});

cc._RF.pop();
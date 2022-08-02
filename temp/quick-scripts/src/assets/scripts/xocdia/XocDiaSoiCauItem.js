"use strict";
cc._RF.push(module, '69c92IEkJRDeafCU1znnby7', 'XocDiaSoiCauItem');
// scripts/xocdia/XocDiaSoiCauItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bgCauLe: cc.Node,
    bgCauChan: cc.Node,
    lbCau: cc.Label,
    MaxCount: 4
  },
  init: function init(dataCau) {
    dataCau = parseInt(dataCau);
    var isBlack = dataCau % 2 == 1;

    if (isBlack) {
      this.bgCauLe.active = true;
      this.bgCauChan.active = false;
      this.lbCau.string = dataCau;
      this.lbCau.node.color = cc.Color.WHITE;
    } else {
      this.bgCauLe.active = false;
      this.bgCauChan.active = true;
      this.lbCau.string = this.MaxCount - dataCau;
      this.lbCau.node.color = cc.Color.BLACK;
    }
  }
});

cc._RF.pop();
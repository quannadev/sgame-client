"use strict";
cc._RF.push(module, '649d1zpIAVJTagGV0gBAK2D', 'XocDiaItemTransaction');
// scripts/xocdia/XocDiaItemTransaction.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lb_cua_dat: cc.Label,
    lb_ketqua: cc.Label,
    lb_tongdat: cc.Label,
    lb_hoan_tra: cc.Label,
    lb_thuc_nhan: cc.Label,
    _dataRank: null
  },
  init: function init(dataHistory) {
    this._dataRank = dataHistory;
    this.lbSession.string = dataHistory.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataHistory.time);
    this.lb_cua_dat.string = dataHistory.cuadat;
    this.lb_thuc_nhan.string = Utils.addDotToNumber(dataHistory.win);
    this.lb_ketqua.string = dataHistory.ketqua;
    this.lb_tongdat.string = Utils.addDotToNumber(dataHistory.stakes);
    this.lb_hoan_tra.string = Utils.addDotToNumber(dataHistory.hoan_tra);
  }
});

cc._RF.pop();
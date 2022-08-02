"use strict";
cc._RF.push(module, 'b10450FXRFEfadZP6AM2J3S', 'KimCuongEvent');
// scripts/kimcuong/KimCuongEvent.js

"use strict";

var KimCuongEvent = {};
KimCuongEvent.RESPONSE_NAME = {
  RESULT_RES: "vqv2",
  FREE_DAILY_RES: "vqv3",
  MINIMIZE_RES: "vqv4",
  AUTO_PLAY_RES: "vqv5",
  STOP_AUTO_PLAY_RES: "vqv6"
}; // TRUOT = 0;
// THANG = 1;
// THANG_LON = 2;
// NO_HU = 3;
// NO_HU_X2 = 4;
// MINIGAME_SLOT = 5;

KimCuongEvent.ResultEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(KimCuongEvent.RESPONSE_NAME.RESULT_RES);

    this.winMoney = 0;
    this.freeGift = [];
    this.lineWin = [];
    this.result = [];
    this.session = 0;
    this.isFreeSpin = false;
    this.isBonus = false;
    this.freeSpin = 0;
    this.type = 0;
    this.haiSao = "";
    this.ration = 0;
  },
  fromEvent: function fromEvent(event) {
    this.winMoney = event.getDouble("w");
    this.lineWin = event.getIntArray("lw");
    this.result = event.getIntArray("r");
    this.session = event.getDouble("id");
    this.isFreeSpin = event.getBool("fr");
    this.freeSpin = event.getByte("ra");
    this.type = event.getByte("rs");
    this.haiSao = event.getUtfString("hs");

    if (this.type == 2) {
      this.isThangLon = true;
    }

    if (this.type == 3) {
      this.isNohu = true;
    }

    if (this.type == 4) {
      this.isNohuX2 = true;
    }

    if (this.type == 5) {
      this.isBonus = true;

      for (var i = 1; i < this.haiSao.length; i = i + 2) {
        this.freeGift.push(this.haiSao[i]);
      }
    }

    return this;
  }
});
window.KimCuongEvent = module.exports = KimCuongEvent;

cc._RF.pop();
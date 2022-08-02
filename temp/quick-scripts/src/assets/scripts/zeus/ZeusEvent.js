"use strict";
cc._RF.push(module, 'efd24RLQ9NNU7Tlkma2LEQH', 'ZeusEvent');
// scripts/zeus/ZeusEvent.js

"use strict";

var ZeusEvent = {};
ZeusEvent.RESPONSE_NAME = {
  RESULT_RES: "zu2",
  FREE_DAILY_RES: "zu3",
  MINIMIZE_RES: "zu4",
  AUTO_PLAY_RES: "zu5",
  STOP_AUTO_PLAY_RES: "zu6"
}; // TRUOT = 0;
// THANG = 1;
// THANG_LON = 2;
// NO_HU = 3;
// NO_HU_X2 = 4;
// MINIGAME_SLOT = 5;

ZeusEvent.ResultEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(ZeusEvent.RESPONSE_NAME.RESULT_RES);

    this.winMoney = 0;
    this.freeGift = [];
    this.lineWin = [];
    this.result = [];
    this.session = 0;
    this.isFreeSpin = false;
    this.isBonus = false;
    this.freeSpin = 0;
    this.type = 0;
    this.xSpecial = 0;
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

      for (var i = 0; i < this.haiSao[this.haiSao.length - 1]; i++) {
        this.freeGift.push(this.haiSao[i]);
      }

      this.freeGift.push(0);
      this.xSpecial = this.haiSao[this.haiSao.length - 2];
    }

    return this;
  }
});
window.ZeusEvent = module.exports = ZeusEvent;

cc._RF.pop();
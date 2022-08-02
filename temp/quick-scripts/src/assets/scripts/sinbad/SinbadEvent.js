"use strict";
cc._RF.push(module, 'f541eflLUBIeaDZkVLnYZjS', 'SinbadEvent');
// scripts/sinbad/SinbadEvent.js

"use strict";

var SinbadEvent = {};
SinbadEvent.RESPONSE_NAME = {
  RESULT_RES: "sb2",
  FREE_DAILY_RES: "sb3",
  MINIMIZE_RES: "sb4",
  AUTO_PLAY_RES: "sb5",
  STOP_AUTO_PLAY_RES: "sb6"
}; // TRUOT = 0;
// THANG = 1;
// THANG_LON = 2;
// NO_HU = 3;
// NO_HU_X2 = 4;
// MINIGAME_SLOT = 5;

SinbadEvent.ResultEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(SinbadEvent.RESPONSE_NAME.RESULT_RES);

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
window.SinbadEvent = module.exports = SinbadEvent;

cc._RF.pop();
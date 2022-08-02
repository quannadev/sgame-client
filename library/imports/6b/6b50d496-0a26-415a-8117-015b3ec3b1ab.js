"use strict";
cc._RF.push(module, '6b50dSWCiZBWoEXAVs+w7Gr', 'CandyEvent');
// scripts/candy/CandyEvent.js

"use strict";

var CandyEvent = {};
CandyEvent.RESPONSE_NAME = {
  BET_RES: "cd1"
};
CandyEvent.BetEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CandyEvent.RESPONSE_NAME.BET_RES);

    this.freeSpin = 0;
    this.freeGift = [];
  },
  fromEvent: function fromEvent(event) {
    this.status = 1;
    this.winMoney = event.getDouble("w");
    this.lineWin = event.getIntArray("lw");
    this.isNohu = event.getBool("nh");
    this.isThangLon = event.getBool("tl");
    this.result = event.getIntArray("r");

    if (event.containsKey("fs")) {
      this.freeSpin = event.getInt("fs");
    }

    if (event.containsKey("fg")) {
      this.freeGift = event.getDoubleArray("fg");
    }

    this.msg = event.getUtfString("ec");
    if (this.msg != null) this.status = 0;
    return this;
  }
});
window.CandyEvent = module.exports = CandyEvent;

cc._RF.pop();
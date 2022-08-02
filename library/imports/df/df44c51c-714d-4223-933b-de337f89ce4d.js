"use strict";
cc._RF.push(module, 'df44cUccU1CI5M73jN/ic5N', 'MiniPokerEvent');
// scripts/minipoker/MiniPokerEvent.js

"use strict";

var MiniPokerEvent = {};
MiniPokerEvent.RESPONSE_NAME = {
  BET_RES: "mp1"
};
MiniPokerEvent.BetEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(MiniPokerEvent.RESPONSE_NAME.BET_RES);
  },
  fromEvent: function fromEvent(event) {
    this.noHu = false;
    this.winMoney = event.getDouble("w");
    this.handWinType = event.getByte("hw");
    this.result = event.getByteArray("c");

    if (event.containsKey("n")) {
      this.noHu = event.getBool("n");
    }

    return this;
  }
});
window.MiniPokerEvent = module.exports = MiniPokerEvent;

cc._RF.pop();
"use strict";
cc._RF.push(module, 'a5b7f3fBq5PMLBDDylBJ3KZ', 'RouletteEvent');
// scripts/roulette/RouletteEvent.js

"use strict";

var RouletteEvent = {};
RouletteEvent.RESPONSE_NAME = {
  LOAD_GAME_RES: "rl1",
  BET_RES: "rl2",
  END_BETTING: "rl3",
  HISTORY_RESULT: "rl4"
};
RouletteEvent.LoadGameEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(RouletteEvent.RESPONSE_NAME.LOAD_GAME_RES);
  },
  fromEvent: function fromEvent(event) {
    this.isBetting = event.getBool("b");
    this.time = event.getInt("t");
    this.totalUserBet = event.getDouble("tc");
    this.listTypePotBet = event.getIntArray("lmtcp");
    this.listMyChipPot = event.getDoubleArray("lmcp");
    this.usersOnboard = event.getUtfStringArray("lu");
    this.chipUserOnBoard = event.getDoubleArray("lc");

    if (!this.isBetting) {
      this.result = event.getByte("rs");
      this.winpot = event.getByteArray("wp");
      this.winChip = 1000;
    }

    return this;
  }
});
RouletteEvent.BetEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(RouletteEvent.RESPONSE_NAME.BET_RES);
  },
  fromEvent: function fromEvent(event) {
    this.userName = event.getUtfString("un");
    this.betChip = event.getDouble("c");
    this.typePot = event.getByte("t");
    this.totalBet = event.getDouble("tc");
    return this;
  }
});
RouletteEvent.EndBetting = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(RouletteEvent.RESPONSE_NAME.END_BETTING);
  },
  fromEvent: function fromEvent(event) {
    this.result = event.getByte("rs");
    this.winChip = event.getDouble("wc");
    this.winpot = event.getByteArray("wp");
    this.chipUserOnBoard = event.getDoubleArray("lc");
    this.usersOnboard = event.getUtfStringArray("lu");
    return this;
  }
});
RouletteEvent.HistoryResponse = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RESULT);
  },
  fromEvent: function fromEvent(event) {
    this.result = event.getByteArray("lr");
    return this;
  }
});
RouletteEvent.HistoryEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);

    this.items = [];
  },
  fromEvent: function fromEvent(event) {
    var data = event.getSArray("d");

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var session = sItem.getDouble("id").toFixed(0);
      var time = sItem.getUtfString("t");
      var result = sItem.getInt("rs");
      var betValues = sItem.getUtfString("bi");
      var itemBet = betValues.split(",");

      for (var j = 0; j < itemBet.length; j++) {
        if (itemBet[j].length > 0) {
          var betObj = itemBet[j].split("|");
          var item = {};
          item.session = session;
          item.time = time;
          item.result = result;
          item.typePot = betObj[0];
          item.betPot = betObj[1];
          item.prizePot = betObj[2];
          this.items.push(item);
        }
      }
    }

    return this;
  }
});
RouletteEvent.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.LEADERBOARD_RES);

    this.items = [];
  },
  fromEvent: function fromEvent(event) {
    var data = event.getSArray("d");

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = i;
      item.account = sItem.getUtfString("dn");
      item.win = sItem.getDouble("m");
      item.time = sItem.getUtfString("t");
      this.items.push(item);
    }

    return this;
  }
});
window.RouletteEvent = module.exports = RouletteEvent;

cc._RF.pop();
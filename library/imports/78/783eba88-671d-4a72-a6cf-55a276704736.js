"use strict";
cc._RF.push(module, '783ebqIZx1KcqbPVaJ2cEc2', 'TaiXiuEvent');
// scripts/taixiu/TaiXiuEvent.js

"use strict";

var TaiXiuEvent = {};
TaiXiuEvent.RESPONSE_NAME = {
  LOAD_GAME_RES: "tx1",
  BET_RES: "tx2",
  END_BETTING: "tx3",
  SESSION_DETAIL: "tx4",
  SOI_CAU_RES: "tx5",
  TAN_LOC: "tx6",
  RUT_LOC: "tx7",
  HISTORY_TAN_LOC: "tx8",
  HISTORY_RUT_LOC: "tx9",
  TOP_BET: "tx10",
  TOP_BET_REWARD: "tx11",
  TOP_BET_RULE: "tx12",
  RANK_TAN_LOC: "tx13",
  RANK_RUT_LOC: "tx14",
  PUBLIC_MSG: "tx15",
  TOP_REWARD_RES: "tx16",
  UPDATE_STATE_POT: "tx17"
};
TaiXiuEvent.LoadGameEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.LOAD_GAME_RES);

    this.listCau = [];
  },
  fromEvent: function fromEvent(event) {
    this.isBetting = event.getBool("b");
    this.time = event.getInt("t");
    this.listChipPot = event.getDoubleArray("lcp");
    this.listMyChipPot = event.getDoubleArray("lmcp");
    this.listUsers = event.getIntArray("lu");
    this.allowRutlLoc = event.getBool("rl");
    this.fundRutloc = event.getDouble("frl");

    if (this.isBetting) {
      this.time += 6.5;
    } else {
      this.result = event.getByteArray("rs");
    }

    if (event.containsKey("c")) {
      var arrCau = event.getSArray("c");

      for (var i = 0; i < arrCau.size(); i++) {
        var sCau = arrCau.get(i).getObject();
        var itemCau = {};
        itemCau.sessionId = sCau.getDouble("id").toFixed(0);
        itemCau.point = sCau.getByte("p");
        this.listCau.push(itemCau);
      }

      cc.listCau = this.listCau;
    }

    var listChatObj = event.getSArray("lc");
    this.listChat = [];

    for (var _i = 0; _i < listChatObj.size(); _i++) {
      var sLoc = listChatObj.get(_i).getObject();
      var itemChat = {};
      itemChat.dataSender = {};
      itemChat.dataSender.dn = sLoc.getUtfString("un");
      itemChat.msg = sLoc.getUtfString("msg");
      this.listChat.unshift(itemChat);
    }

    return this;
  }
});
TaiXiuEvent.BetEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.BET_RES);
  },
  fromEvent: function fromEvent(event) {
    this.userName = event.getUtfString("un");
    this.betChip = event.getDouble("c");
    this.typePot = event.getByte("t");
    this.listUsers = event.getIntArray("lu");
    return this;
  }
});
TaiXiuEvent.UpdateStatePotEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.UPDATE_STATE_POT);
  },
  fromEvent: function fromEvent(event) {
    this.potTai = event.getDouble("bt");
    this.potXiu = event.getDouble("bx");
    this.ccuTai = event.getInt("ut");
    this.ccuXiu = event.getInt("ux");
    return this;
  }
});
TaiXiuEvent.EndBetting = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.END_BETTING);
  },
  fromEvent: function fromEvent(event) {
    this.result = event.getByteArray("rs");
    this.winChip = event.getDouble("wc");
    this.refundChip = event.getDouble("rc");
    this.playType = event.getByte("te");
    return this;
  }
});
TaiXiuEvent.SessionDetail = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.SESSION_DETAIL);
  },
  fromEvent: function fromEvent(event) {
    var sessionDetail = {};
    sessionDetail.dices = event.getByteArray("rs");
    sessionDetail.totalTai = event.getDouble("tt");
    sessionDetail.totalXiu = event.getDouble("tx");
    sessionDetail.refundTai = event.getDouble("rt");
    sessionDetail.refundXiu = event.getDouble("rx");
    var sArrayUb = event.getSArray("ub");
    sessionDetail.arrUserBetTai = [];
    sessionDetail.arrUserBetXiu = [];

    for (var i = 0; i < sArrayUb.size(); i++) {
      var sObj = sArrayUb.get(i).getObject();
      var betDetail = {};
      betDetail.time = sObj.getUtfString("t");
      betDetail.displayName = sObj.getUtfString("dn");
      betDetail.betTai = sObj.getDouble("bt");
      betDetail.betXiu = sObj.getDouble("bx");
      if (betDetail.betTai > 0) sessionDetail.arrUserBetTai.push(betDetail);
      if (betDetail.betXiu > 0) sessionDetail.arrUserBetXiu.push(betDetail);
    }

    return sessionDetail;
  }
});
TaiXiuEvent.SoiCauEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.SOI_CAU_RES);
  },
  fromEvent: function fromEvent(event) {
    var arrCau = event.getSArray("c");
    this.listSoiCau = [];

    for (var i = 0; i < arrCau.size(); i++) {
      var sCau = arrCau.get(i).getObject();
      var itemCau = {};
      itemCau.dices = sCau.getByteArray("d");
      this.listSoiCau.push(itemCau);
    }

    return this.listSoiCau;
  }
});
TaiXiuEvent.TanLocEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.TAN_LOC);
  },
  fromEvent: function fromEvent(event) {
    var tanLoc = {};
    tanLoc.chipTan = event.getDouble("c");
    tanLoc.fund = event.getDouble("f");
    tanLoc.mesTan = event.getUtfString("ec");
    return tanLoc;
  }
});
TaiXiuEvent.RutLocEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.RUT_LOC);
  },
  fromEvent: function fromEvent(event) {
    var rutLoc = {};
    rutLoc.chipTan = event.getDouble("c");
    rutLoc.fund = event.getDouble("f");
    rutLoc.mesTan = event.getUtfString("ec");
    return rutLoc;
  }
});
TaiXiuEvent.HistoryTanLocEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.HISTORY_TAN_LOC);
  },
  fromEvent: function fromEvent(event) {
    var arrLoc = event.getSArray("d");
    var listTanLoc = [];

    for (var i = 0; i < arrLoc.size(); i++) {
      var sLoc = arrLoc.get(i).getObject();
      var itemLoc = {};
      itemLoc.account = sLoc.getUtfString("u");
      itemLoc.win = sLoc.getDouble("c");
      itemLoc.time = Utils.reFormatDisplayTime(sLoc.getUtfString("t"));
      listTanLoc.push(itemLoc);
    }

    return listTanLoc;
  }
});
TaiXiuEvent.HistoryRutLocEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.HISTORY_RUT_LOC);
  },
  fromEvent: function fromEvent(event) {
    var arrLoc = event.getSArray("d");
    var listTanLoc = [];

    for (var i = 0; i < arrLoc.size(); i++) {
      var sLoc = arrLoc.get(i).getObject();
      var itemLoc = {};
      itemLoc.account = sLoc.getUtfString("u");
      itemLoc.win = sLoc.getDouble("c");
      itemLoc.time = Utils.reFormatDisplayTime(sLoc.getUtfString("t"));
      listTanLoc.push(itemLoc);
    }

    return listTanLoc;
  }
});
TaiXiuEvent.TopBetEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.TOP_BET);
  },
  fromEvent: function fromEvent(event) {
    var arrLoc = event.getSArray("d");
    var listTopBet = [];

    for (var i = 0; i < arrLoc.size(); i++) {
      var sLoc = arrLoc.get(i).getObject();
      var itemTop = {};
      itemTop.account = sLoc.getUtfString("u");
      itemTop.win = sLoc.getDouble("c");
      itemTop.time = i + 1;
      listTopBet.push(itemTop);
    }

    return listTopBet;
  }
});
TaiXiuEvent.TopBetRewardEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.TOP_BET_REWARD);
  },
  fromEvent: function fromEvent(event) {
    var rewardObj = {};
    rewardObj.reward = event.getDouble("c");
    rewardObj.top = event.getInt("t");
    return rewardObj;
  }
});
TaiXiuEvent.TopBetRuleEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.TOP_BET_RULE);
  },
  fromEvent: function fromEvent(event) {
    var arrLoc = event.getDoubleArray("d");
    var listBetRule = [];

    for (var i = 0; i < arrLoc.length; i++) {
      var rule = {};
      rule.account = arrLoc[i];
      rule.win = "";
      rule.time = i + 1;
      listBetRule.push(rule);
    }

    return listBetRule;
  }
});
TaiXiuEvent.RankRutLocEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.RANK_RUT_LOC);
  },
  fromEvent: function fromEvent(event) {
    var arrLoc = event.getSArray("d");
    var listRank = [];

    for (var i = 0; i < arrLoc.size(); i++) {
      var sLoc = arrLoc.get(i).getObject();
      var rankRut = {};
      rankRut.account = sLoc.getUtfString("u");
      rankRut.win = sLoc.getDouble("c");
      rankRut.time = i + 1;
      listRank.push(rankRut);
    }

    return listRank;
  }
});
TaiXiuEvent.RankTanLocEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.RANK_TAN_LOC);
  },
  fromEvent: function fromEvent(event) {
    var arrLoc = event.getSArray("d");
    var listRank = [];

    for (var i = 0; i < arrLoc.size(); i++) {
      var sLoc = arrLoc.get(i).getObject();
      var rankTan = {};
      rankTan.account = sLoc.getUtfString("u");
      rankTan.win = sLoc.getDouble("c");
      rankTan.time = i + 1;
      listRank.push(rankTan);
    }

    return listRank;
  }
});
TaiXiuEvent.PublicMessagecEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.PUBLIC_MSG);
  },
  fromEvent: function fromEvent(event) {
    this.un = event.getUtfString("un");
    this.msg = event.getUtfString("msg");
    return this;
  }
});
TaiXiuEvent.TopRewardResEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(TaiXiuEvent.RESPONSE_NAME.TOP_REWARD_RES);
  },
  fromEvent: function fromEvent(event) {
    var arrReward = event.getSArray("d");
    var listReward = [];

    for (var i = 0; i < arrReward.size(); i++) {
      var sLoc = arrReward.get(i).getObject();
      var reward = {};
      reward.account = sLoc.getUtfString("u");
      reward.win = sLoc.getDouble("c");
      reward.time = i + 1;
      listReward.push(reward);
    }

    return listReward;
  }
});
window.TaiXiuEvent = module.exports = TaiXiuEvent;

cc._RF.pop();
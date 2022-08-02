"use strict";
cc._RF.push(module, 'e8debnA7Y5Kg47AGSDTbMUL', 'UIPoker');
// scripts/poker/UIPoker.js

"use strict";

cc.Class({
  "extends": cc.BaseGame,
  properties: {
    ChatEmojiLayer: cc.Node,
    Action: cc.Node,
    CommunityCard: cc.Node,
    lb_total_bet: cc.Label,
    PokerTextWinner: cc.Node,
    PotPrefab: cc.Prefab,
    buy_in: 0,
    bet: 500,
    POS_6: cc.Node,
    POS_9: cc.Node
  },
  onLoad: function onLoad() {
    // init prefab pot
    this.PoolPot = [];

    for (var i = 0; i < 9; i++) {
      var pot = cc.instantiate(this.PotPrefab);
      this.node.addChild(pot);
      pot.active = false;
      this.PoolPot.push(pot);
    }
  },
  onEnable: function onEnable() {
    this.buy_in = this._data.buy_in;
    this._number_desk = this._data.number_desk;
    this._room = this._data.room;
    this.poses = [];

    if (this._number_desk == 6) {
      this.POS_6.active = true;
      this.POS_9.active = false;
      this._CURRENT_POS = this.POS_6;
    } else {
      this.POS_6.active = false;
      this.POS_9.active = true;
      this._CURRENT_POS = this.POS_9;
    }

    for (var i = 0; i < this._CURRENT_POS._children.length; i++) {
      var pos = this._CURRENT_POS._children[i];
      this.poses.push(this._CURRENT_POS._children[i]);
      pos.on("touchend", function () {
        this.requestSitOn();
      }, this);
      pos.active = false;
    }

    this.countOut = 0;
  },
  onDisable: function onDisable() {
    this.nodePlayers.removeAllChildren(true);
    this.getCommunityCard().reset();
    this.hideDeskEmpty();
    this.lb_total_bet.node.parent.active = false;
    this.hidePokerTextWinner();
    this.WaitingTimer.active = false;
  },
  runActionChipToPot: function runActionChipToPot(betChip, cb) {
    if (betChip <= 0) {
      if (cb) cb();
      return;
    }

    for (var i = 0; i < this.controller.m_tableInfo.m_listUser.length; i++) {
      var player = this._getJSPlayerByName(this.controller.m_tableInfo.m_listUser[i]);

      var convertPosBet = this.getPositionInOtherNode(player.BetChip, this.node);
      var pot = this.requestPoolPot();
      pot.position = convertPosBet;
      pot.active = true;
      pot.getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(betChip);
      pot.runAction(cc.sequence(cc.moveTo(0.3, this.lb_total_bet.node.parent.position), cc.callFunc(function () {
        this.active = false;
        if (cb) cb();
      }, pot)));
    }
  },
  hidePokerTextWinner: function hidePokerTextWinner() {
    this.PokerTextWinner.active = false;
    var animation = this.PokerTextWinner.getComponent(sp.Skeleton);
    animation.setAnimation(0, "NONE", false);
  },
  showPokerTextWinner: function showPokerTextWinner(nameWin) {
    var winningHands = {
      HIGHCARD: "Bai-Cao",
      PAIR: "Mot-Doi",
      TWOPAIR: "Hai-Doi",
      THREEOFAKIND: "Xam",
      STRAIGHT: "Sanh",
      FLUSH: "Thung",
      FULLHOUSE: "Cu-Lu",
      FOUROFAKIND: "Tu-Quy",
      STRAIGHTFLUSH: "Sanh-Thung",
      ROYALFLUSH: "Thung_Pha-Sanh"
    };
    this.PokerTextWinner.active = true;
    var animation = this.PokerTextWinner.getComponent(sp.Skeleton);

    if (nameWin == "Sanh-Thung") {
      animation.setAnimation(0, "Sanh", false);
      animation.setAnimation(1, "Thung", false);
    } else if (winningHands[nameWin]) {
      animation.setAnimation(0, winningHands[nameWin], true);
    } else {
      this.PokerTextWinner.active = false;
    }
  },
  eventBack: function eventBack() {
    if (!this.controller.m_tableInfo.m_isGameStart || this.controller.m_tableInfo.m_listActiveUserName.length <= 1) {
      this.requestLeaveRoom();
    } else {
      var isSitOut = true;

      if (this.controller.m_tableInfo.m_listUserSitOut.indexOf(SmartFoxSDK.PokerController.ZoneInstance.mySelf.name) >= 0) {
        isSitOut = false;
      }

      var sitOutRequest = new PokerRequest.SitOutRequest();
      sitOutRequest.setRoomId(this._room.id);
      sitOutRequest.setSitOut(isSitOut);
      SmartFoxSDK.PokerController.ZoneInstance.send(sitOutRequest.toSRequest());
    }
  },
  requestSitOn: function requestSitOn() {
    var myName = SmartFoxSDK.PokerController.ZoneInstance.mySelf.name;

    if (this._getJSPlayerByName(myName) == null) {
      var sitOnRequest = new PokerRequest.SitOnRequest().setRoomId(this._room.id).setAutoSitOn().setBuyIn(this.buy_in);
      SmartFoxSDK.PokerController.ZoneInstance.send(sitOnRequest.toSRequest());
      this.hideDeskEmpty();
    }
  },
  getCommunityCard: function getCommunityCard() {
    return this.CommunityCard.getComponent(this.CommunityCard.name);
  },
  getAction: function getAction() {
    return this.Action.getComponent(this.Action.name);
  },
  setMoneyPot: function setMoneyPot(money) {
    if (money > 0) {
      this.lb_total_bet.string = Utils.formatCurrency(money);
      this.lb_total_bet.node.parent.active = true;
    } else {
      this.lb_total_bet.node.parent.active = false;
    }
  },
  processBetChipToPot: function processBetChipToPot(cb) {
    var betChip = 0; // sum all pot of user to total pot

    for (var i = 0; i < this.controller.m_tableInfo.m_listDesk.length; i++) {
      var desk = this.controller.m_tableInfo.m_listDesk[i];

      var player = this._getJSPlayerById(desk.DeskId);

      if (player) {
        betChip = player.m_total_bet;
        this.controller.m_tableInfo.m_potChip += player.m_total_bet; // reset bet of user

        player.resetBet();
      }
    } // action sum all pot of user to total pot


    this.runActionChipToPot(betChip, function () {
      this.lb_total_bet.string = Utils.formatCurrency(this.controller.m_tableInfo.m_potChip);
      this.lb_total_bet.node.parent.active = true;

      if (cb) {
        cb();
      }
    }.bind(this));
  },
  requestPoolPot: function requestPoolPot() {
    for (var i = 0; i < this.PoolPot.length; i++) {
      if (!this.PoolPot[i].active) {
        this.PoolPot[i].active = true;
        return this.PoolPot[i];
      }
    }

    var pot = cc.instantiate(this.PotPrefab);
    this.node.addChild(pot);
    this.PoolPot.push(pot);
    return pot;
  },
  runActionPotChipToWinner: function runActionPotChipToWinner(moneyWin, winner, cb, target) {
    var player = this._getJSPlayerByName(winner);

    if (player) {
      var pot = this.requestPoolPot();
      var self = this;
      var convertPosBet = this.getPositionInOtherNode(player.BetChip, this.node);
      pot.position = this.lb_total_bet.node.parent.position;
      pot.getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(moneyWin);
      pot.runAction(cc.sequence(cc.moveTo(0.5, convertPosBet), cc.callFunc(function () {
        this.active = false;
        self.lb_total_bet.node.parent.active = false;
        if (cb) cb(moneyWin, target);
      }, pot)));
    }
  },
  eventShowChat: function eventShowChat(event, data) {
    this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
    if (this.ChatEmojiLayer.active) this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.PokerController.ZoneInstance);
  },
  onPublicMessage: function onPublicMessage(messData) {
    var playerJs = this._getJSPlayerByName(messData.sender.name);

    if (playerJs != null) {
      playerJs.onPublicMessage(messData.msg);
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    var jsPlayer = this._getJSPlayerByName(SmartFoxSDK.PokerController.ZoneInstance.mySelf.name);

    jsPlayer.setMoney(GameVariables.Poker.getChip(SmartFoxSDK.PokerController.ZoneInstance.mySelf) - subChip);
  }
});

cc._RF.pop();
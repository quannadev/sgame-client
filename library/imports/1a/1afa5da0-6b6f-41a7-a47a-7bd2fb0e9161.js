"use strict";
cc._RF.push(module, '1afa52ga29Bp6R6e9L7DpFh', 'PlayerPoker');
// scripts/poker/PlayerPoker.js

"use strict";

var PokerCard = require('PokerCard');

cc.Class({
  "extends": cc.Player,
  properties: {
    cards: {
      type: cc.Node,
      "default": []
    },
    Hands: cc.Node,
    BigBlind: cc.Node,
    SmallBlind: cc.Node,
    BetChip: cc.Node,
    _actionController: null,
    m_total_bet: 0,
    TypeOfHand: cc.Label
  },
  onEnable: function onEnable() {
    this._super();

    this.zoneName = "poker";
    this.Hands.active = false;
    this.BigBlind.active = false;
    this.SmallBlind.active = false;
    this.BetChip.active = false;
    this.TypeOfHand.node.active = false;
    this.hideWinEffect();
  },
  onDisable: function onDisable() {
    this.reset();
  },
  reset: function reset() {
    this.Hands.active = false;
    this.BigBlind.active = false;
    this.SmallBlind.active = false;
    this.Status.active = false;
    this.BetChip.active = false;
    this.TypeOfHand.node.active = false;
    this.Status.active = false;
    this.hideWinEffect();
    this.hideHoldem();
    this.resetBet();
  },
  setActionController: function setActionController(actionController) {
    this._actionController = actionController;
  },
  addCardHand: function addCardHand(cardIds) {
    this.Hands.active = true;

    for (var i = 0; i < this.cards.length; i++) {
      var card = this.cards[i].getComponent("Card");

      if (cardIds[i] < 0) {
        card.init(null);
      } else {
        card.reveal(new PokerCard.Card(cardIds[i]));
      }
    }

    this.scaleHoldEm();
  },
  scaleHoldEm: function scaleHoldEm() {
    if (!this.isItMe()) {
      this.Hands.scale = 0.75;
    } else {
      this.Hands.scale = 1;
    }
  },
  hideHoldem: function hideHoldem() {
    this.Hands.active = false;
  },
  onStartEvent: function onStartEvent(startEvent) {
    this.BigBlind.active = false;
    this.SmallBlind.active = false;
    this.Status.active = false;
    this.Hands.active = true;

    for (var i = 0; i < this.cards.length; i++) {
      var card = this.cards[i].getComponent("Card");
      this.cards[i].opacity = 255;

      if (this.isItMe()) {
        card.reveal(new PokerCard.Card(startEvent.m_listCard[i]));
      } else {
        card.init(null);
      }
    }

    this.scaleHoldEm();

    if (startEvent.m_smallBlind == this._desk.UserName) {
      this.SmallBlind.active = true;
      this.m_total_bet = startEvent.m_betChipGame;
      this.showBetChip(this.m_total_bet); // sub money in Desk

      this._desk.UserChip -= startEvent.m_betChipGame;
      this.setMoney(this._desk.UserChip);
    } else if (startEvent.m_bigBlind == this._desk.UserName) {
      this.BigBlind.active = true;
      this.m_total_bet = 2 * startEvent.m_betChipGame;
      this.showBetChip(this.m_total_bet); // sub money in Desk

      this._desk.UserChip -= 2 * startEvent.m_betChipGame;
      this.setMoney(this._desk.UserChip);
    }

    if (startEvent.m_currentUser == this._desk.UserName) {
      var time = startEvent.m_userTime / 1000;
      this.setTotalProgress(time);
      this.setCurrentProgress(time);
      this.setTimeWarning(5);
      this.turnOnTimer();

      if (cc.isValid(this._actionController)) {
        this._actionController.showCallRaise(startEvent.m_betChipGame, this._desk.UserChip, this.m_total_bet);
      }
    }
  },
  updatePosHand: function updatePosHand() {
    if (this.newPos != undefined) {
      if (this.number_desk == 6) {
        if (this.newPos == 5 || this.newPos == 4 || this.newPos == 3) {
          this.Hands.x = -110;
        } else {
          this.Hands.x = 115;
        }
      } else {
        if (this.newPos == 5 || this.newPos == 6 || this.newPos == 7) {
          this.Hands.x = -110;
        } else {
          this.Hands.x = 115;
        }
      }
    }
  },
  onTurnEvent: function onTurnEvent(userTurnRes) {
    this.Status.active = false;
    var time = userTurnRes.m_time / 1000;
    this.setTotalProgress(time);
    this.setCurrentProgress(time);
    this.setTimeWarning(5);
    this.turnOnTimer();
    var betChip = userTurnRes.m_betchip; // check action of myself

    if (this.isItMe()) {
      // call or raise
      if (betChip > 0) {
        if (cc.isValid(this._actionController)) {
          if (betChip > this._desk.UserChip) betChip = this._desk.UserChip;

          this._actionController.showCallRaise(betChip, this._desk.UserChip, this.m_total_bet);
        }
      } else {
        // check
        if (cc.isValid(this._actionController)) {
          this._actionController.showCheck(betChip, this._desk.UserChip, this.m_total_bet);
        }
      }
    } else {
      if (cc.isValid(this._actionController)) {
        this._actionController.hideAllActions();
      }
    }
  },
  onFoldEvent: function onFoldEvent(userFoldRes) {
    Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/fold-tag");
    this.turnOffTimer();

    if (cc.isValid(this._actionController)) {
      this._actionController.hideAllActions();
    }

    this.Hands.active = false;
  },
  onCheckEvent: function onCheckEvent(userCheckRes) {
    this.BetChip.active = false;
    Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/check-tag");

    if (cc.isValid(this._actionController)) {
      this._actionController.hideAllActions();
    }
  },
  onCallEvent: function onCallEvent(userCallRes) {
    Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/call-tag");
    var callChip = userCallRes.m_chip;
    this.m_total_bet += callChip;
    this.showBetChip(this.m_total_bet); // sub money in Desk

    this._desk.UserChip -= callChip;
    this.setMoney(this._desk.UserChip);

    if (cc.isValid(this._actionController)) {
      this._actionController.hideAllActions();
    }
  },
  onRaiseEvent: function onRaiseEvent(userRaiseRes) {
    Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/rasie-tag");
    var raiseChip = userRaiseRes.m_chip;
    this.m_total_bet += raiseChip;
    this.showBetChip(this.m_total_bet); // sub money in Desk

    this._desk.UserChip -= raiseChip;
    this.setMoney(this._desk.UserChip);

    if (cc.isValid(this._actionController)) {
      this._actionController.hideAllActions();
    }
  },
  onAllInEvent: function onAllInEvent(userAllInRes) {
    Utils.loadRes(this.Status.getComponent(cc.Sprite), "images/poker/PlayerStatus/all-in-tag");
    var raiseChip = userAllInRes.m_chip;
    this.m_total_bet += raiseChip;
    this.showBetChip(this.m_total_bet); // sub money in Desk

    this._desk.UserChip -= raiseChip;
    this.setMoney(this._desk.UserChip);

    if (cc.isValid(this._actionController)) {
      this._actionController.hideAllActions();
    }
  },
  onShowDownEvent: function onShowDownEvent(cardIds) {
    this.turnOffTimer();
    this.Hands.active = true;
    this.BetChip.active = false;

    for (var i = 0; i < this.cards.length; i++) {
      var card = this.cards[i].getComponent("Card");

      if (this.isItMe()) {
        card.init(new PokerCard.Card(cardIds[i]));
      } else {
        card.reveal(new PokerCard.Card(cardIds[i]));
      }
    }
  },
  onGameFinishEvent: function onGameFinishEvent(winCards, typeofHand, chipWin) {
    this.turnOffTimer();

    if (chipWin > 0) {
      // chip refund
      this._desk.UserChip += chipWin;
      this.setMoney(this.getDesk().UserChip);
    }

    for (var i = 0; i < this.cards.length; i++) {
      var card = this.cards[i].getComponent("Card");

      if (card._card && winCards.indexOf(card._card.id) < 0) {
        card.showOver();
      }
    }

    var winningHands = {
      HIGHCARD: "Mậu Thầu",
      PAIR: "Một Đôi",
      TWOPAIR: "Hai Đôi",
      THREEOFAKIND: "Xám",
      STRAIGHT: "Sảnh",
      FLUSH: "Thùng",
      FULLHOUSE: "Củ Lũ",
      FOUROFAKIND: "Tứ Quý",
      STRAIGHTFLUSH: "Sảnh Thùng",
      ROYALFLUSH: "Thùng Phá Sảnh"
    };

    if (winningHands[typeofHand]) {
      this.TypeOfHand.node.active = true;
      this.TypeOfHand.string = winningHands[typeofHand];
    }

    this.m_total_bet = 0;
  },
  onWinnerEvent: function onWinnerEvent() {
    this.showWinEffect();
    this.turnOffTimer();
  },
  showBetChip: function showBetChip(money) {
    if (money <= 0) return;
    this.BetChip.active = true;
    var lb_betChip = this.BetChip.getChildByName("money").getComponent(cc.Label);
    lb_betChip.string = Utils.formatCurrency(money.toFixed(0));
  },
  turnOffTimer: function turnOffTimer() {
    this._super();

    if (cc.isValid(this._actionController)) {
      this._actionController.hideAllActions();
    }
  },
  showBetting: function showBetting() {
    this.turnOnTimer();

    if (cc.isValid(this._actionController)) {
      this._actionController.showCheck(this.m_total_bet, this._desk.UserChip, this.m_total_bet);
    }
  },
  resetBet: function resetBet() {
    this.m_total_bet = 0;
    this.BetChip.active = false;
  }
});

cc._RF.pop();
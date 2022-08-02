"use strict";
cc._RF.push(module, 'f675coqnWtL06o3ZbZgYaBD', 'CommunityCards');
// scripts/poker/CommunityCards.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var PokerCard = require('PokerCard');

cc.Class({
  "extends": cc.Component,
  properties: {
    cards: {
      type: cc.Node,
      "default": []
    }
  },
  onLoad: function onLoad() {
    this.posCards = [];

    for (var i = 0; i < this.cards.length; i++) {
      this.posCards.push(this.cards[i].position);
    }

    this.reset();
  },
  dealFlop: function dealFlop(cardIds) {
    if (cardIds.length != 3) {
      console.error("Size cards Flop != 3");
    } else {
      // actions
      for (var i = 0; i < 3; i++) {
        var card = this.cards[i].getComponent("Card");
        card.init(null);
        this.cards[i].position = this.posCards[0];
        this.cards[i].active = true;
      }

      var self = this;
      this.cards[0].runAction(cc.sequence(cc.moveTo(0.2, this.posCards[0]), cc.callFunc(function () {
        var card = self.cards[0].getComponent("Card");
        card.reveal(new PokerCard.Card(cardIds[0]));
      })));
      this.cards[1].runAction(cc.sequence(cc.moveTo(0.2, this.posCards[1]), cc.callFunc(function () {
        var card = self.cards[1].getComponent("Card");
        card.reveal(new PokerCard.Card(cardIds[1]));
      })));
      this.cards[2].runAction(cc.sequence(cc.moveTo(0.2, this.posCards[2]), cc.callFunc(function () {
        var card = self.cards[2].getComponent("Card");
        card.reveal(new PokerCard.Card(cardIds[2]));
      })));
    }
  },
  dealTurn: function dealTurn(cardIds) {
    if (cardIds.length != 1) {
      console.error("Size cards Turn != 1");
    } else {
      var card = this.cards[3].getComponent("Card");
      card.reveal(new PokerCard.Card(cardIds[0]));
    }
  },
  dealRiver: function dealRiver(cardIds) {
    if (cardIds.length != 1) {
      console.error("Size cards River != 1");
    } else {
      var card = this.cards[4].getComponent("Card");
      card.reveal(new PokerCard.Card(cardIds[0]));
    }
  },
  showDown: function showDown(cardIds) {
    for (var i = 0; i < cardIds.length; i++) {
      var card = this.cards[i].getComponent("Card");

      if (this.cards[i].active) {
        card.init(new PokerCard.Card(cardIds[i]));
      } else {
        card.reveal(new PokerCard.Card(cardIds[i]));
      }
    }
  },
  showCommunityCard: function showCommunityCard(cards) {
    if (cards.length == 0) return; // case if win before the turn river

    for (var i = 0; i < this.cards.length; i++) {
      if (cards[i]) {
        var card = this.cards[i].getComponent("Card");

        if (this.cards[i].active) {
          card.init(new PokerCard.Card(cards[i]));
        } else {
          card.reveal(new PokerCard.Card(cards[i]));
        }
      }
    }
  },
  showCommunityCardWin: function showCommunityCardWin(cards) {
    for (var i = 0; i < this.cards.length; i++) {
      var card = this.cards[i].getComponent("Card");

      if (card._card != null && cards.indexOf(card._card.id) < 0) {
        card.showOver();
      }
    }
  },
  reset: function reset() {
    for (var i = 0; i < this.cards.length; i++) {
      var card = this.cards[i].getComponent("Card");
      card.hideOver();
      this.cards[i].active = false;
    }
  }
});

cc._RF.pop();
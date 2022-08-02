"use strict";
cc._RF.push(module, '0576fWjH4dAXrjF8gIXbQyP', 'Card');
// scripts/abase/Card.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    _isSelected: false,
    bg: cc.Node,
    _card: null,
    _cbSelect: null,
    _removeSelect: true,
    over: cc.Node
  },
  onLoad: function onLoad() {
    this.over.active = false;
  },
  showOver: function showOver() {
    this.over.active = true;
  },
  hideOver: function hideOver() {
    this.over.active = false;
  },
  addEventSelect: function addEventSelect(cb) {
    this._cbSelect = cb;
  },
  isSelected: function isSelected() {
    return this._isSelected;
  },
  getCard: function getCard() {
    return this._card;
  },
  setCard: function setCard(card) {
    this._card = card;
  },
  _loadCardBack: function _loadCardBack() {
    cc.loader.loadRes("images/cards", cc.SpriteAtlas, function (err, atlas) {
      if (err) {
        console.log(err);
        return;
      }

      this.bg.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame("-1");
    }.bind(this));
  },
  _loadCard: function _loadCard() {
    cc.loader.loadRes("images/cards", cc.SpriteAtlas, function (err, atlas) {
      if (err) {
        console.log(err);
        return;
      }

      this.bg.getComponent(cc.Sprite).spriteFrame = atlas.getSpriteFrame(this._card.nameFile);
    }.bind(this));
  },
  init: function init(card, _removeSelect) {
    this.node.active = true;
    this.hideOver();

    if (card == null) {
      this._loadCardBack();
    } else {
      this._card = card;

      if (_removeSelect != undefined) {
        this._removeSelect = _removeSelect;
      } else {
        this._removeSelect = true;
      }

      this._loadCard();
    }
  },
  reveal: function reveal(card, pIsFaceUp) {
    this.node.active = true;
    this.hideOver();

    this._loadCardBack();

    this._card = card;
    var self = this;
    var timeFlip = 0.45;
    var callFunc = cc.callFunc(function () {
      self._loadCard();

      if (!pIsFaceUp) self.node.skewY = 170;else self.node.skewY = 45;
    });

    if (!pIsFaceUp) {
      self.node.skewY = 0;
      var action = cc.skewBy(timeFlip / 2, 0, 10);
      var action2 = cc.skewTo(timeFlip / 2, 0, 180);
      self.node.runAction(cc.sequence(action, callFunc, action2));
    } else {
      self.node.skewY = 180;

      var _action = cc.skewBy(timeFlip / 2, 0, -35);

      var _action2 = cc.skewTo(timeFlip / 2, 0, 0);

      self.node.runAction(cc.sequence(_action, callFunc, _action2));
    }
  },
  switchCard: function switchCard(pIsFaceUp) {
    var self = this;
    var timeFlip = 0.45;
    var callFunc = cc.callFunc(function () {
      self._loadCard();

      if (!pIsFaceUp) self.node.skewY = 170;else self.node.skewY = 45;
    });
    self.node.skewY = 0;
    var action = cc.skewBy(timeFlip / 2, 0, 10);
    var action2 = cc.skewTo(timeFlip / 2, 0, 180);
    self.node.runAction(cc.sequence(action, callFunc, action2));

    if (!pIsFaceUp) {
      self.node.skewY = 0;

      var _action3 = cc.skewBy(timeFlip / 2, 0, 10);

      var _action4 = cc.skewTo(timeFlip / 2, 0, 180);

      self.node.runAction(cc.sequence(_action3, callFunc, _action4));
    } else {
      self.node.skewY = 180;

      var _action5 = cc.skewBy(timeFlip / 2, 0, -35);

      var _action6 = cc.skewTo(timeFlip / 2, 0, 0);

      self.node.runAction(cc.sequence(_action5, callFunc, _action6));
    }
  },
  reset: function reset() {
    this._loadCardBack();

    this.hideOver();
    this.node._zIndex = 0;
    this.node.x = 0;
    this.node.y = 0;
    this._isSelected = false;
    this._card = null;
    this._cbSelect = null;
    this._removeSelect = true;
  },
  eventSelect: function eventSelect() {
    if (!this._removeSelect) {
      if (!this._isSelected) {
        this._isSelected = true;
        this.node.y = this.node.y + 20;

        if (this._cbSelect) {
          this._cbSelect(this.getCard().id);
        }
      } else {
        this._isSelected = false;
        this.node.y = this.node.y - 20;
      }
    }
  },
  setScaleCard: function setScaleCard(scaleCard) {
    this.node.width *= scaleCard;
    this.node.height *= scaleCard;
  }
});

cc._RF.pop();
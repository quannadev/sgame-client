
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/Card.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FiYXNlL0NhcmQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJfaXNTZWxlY3RlZCIsImJnIiwiTm9kZSIsIl9jYXJkIiwiX2NiU2VsZWN0IiwiX3JlbW92ZVNlbGVjdCIsIm92ZXIiLCJvbkxvYWQiLCJhY3RpdmUiLCJzaG93T3ZlciIsImhpZGVPdmVyIiwiYWRkRXZlbnRTZWxlY3QiLCJjYiIsImlzU2VsZWN0ZWQiLCJnZXRDYXJkIiwic2V0Q2FyZCIsImNhcmQiLCJfbG9hZENhcmRCYWNrIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUF0bGFzIiwiZXJyIiwiYXRsYXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJnZXRTcHJpdGVGcmFtZSIsImJpbmQiLCJfbG9hZENhcmQiLCJuYW1lRmlsZSIsImluaXQiLCJub2RlIiwidW5kZWZpbmVkIiwicmV2ZWFsIiwicElzRmFjZVVwIiwic2VsZiIsInRpbWVGbGlwIiwiY2FsbEZ1bmMiLCJza2V3WSIsImFjdGlvbiIsInNrZXdCeSIsImFjdGlvbjIiLCJza2V3VG8iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsInN3aXRjaENhcmQiLCJyZXNldCIsIl96SW5kZXgiLCJ4IiwieSIsImV2ZW50U2VsZWN0IiwiaWQiLCJzZXRTY2FsZUNhcmQiLCJzY2FsZUNhcmQiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRSxLQURMO0FBRVJDLElBQUFBLEVBQUUsRUFBR0wsRUFBRSxDQUFDTSxJQUZBO0FBR1JDLElBQUFBLEtBQUssRUFBRSxJQUhDO0FBSVJDLElBQUFBLFNBQVMs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LEdBQWlCLElBQWpCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNILEdBbklJO0FBb0lMK0MsRUFBQUEsV0FwSUsseUJBb0lRO0FBQ1QsUUFBRyxDQUFDLEtBQUsvQyxhQUFULEVBQXVCO0FBQ25CLFVBQUcsQ0FBQyxLQUFLTCxXQUFULEVBQXFCO0FBQ2pCLGFBQUtBLFdBQUwsR0FBbUIsSUFBbkI7QUFDQSxhQUFLaUMsSUFBTCxDQUFVa0IsQ0FBVixHQUFjLEtBQUtsQixJQUFMLENBQVVrQixDQUFWLEdBQWMsRUFBNUI7O0FBQ0EsWUFBRyxLQUFLL0MsU0FBUixFQUFrQjtBQUNkLGVBQUtBLFNBQUwsQ0FBZSxLQUFLVSxPQUFMLEdBQWV1QyxFQUE5QjtBQUNIO0FBQ0osT0FORCxNQU1LO0FBQ0QsYUFBS3JELFdBQUwsR0FBbUIsS0FBbkI7QUFDQSxhQUFLaUMsSUFBTCxDQUFVa0IsQ0FBVixHQUFjLEtBQUtsQixJQUFMLENBQVVrQixDQUFWLEdBQWMsRUFBNUI7QUFDSDtBQUNKO0FBQ0osR0FqSkk7QUFrSkxHLEVBQUFBLFlBbEpLLHdCQWtKUUMsU0FsSlIsRUFrSmtCO0FBQ25CLFNBQUt0QixJQUFMLENBQVV1QixLQUFWLElBQW9CRCxTQUFwQjtBQUNBLFNBQUt0QixJQUFMLENBQVV3QixNQUFWLElBQW9CRixTQUFwQjtBQUNIO0FBckpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9pc1NlbGVjdGVkOiBmYWxzZSxcbiAgICAgICAgYmcgOiBjYy5Ob2RlLFxuICAgICAgICBfY2FyZDogbnVsbCxcbiAgICAgICAgX2NiU2VsZWN0IDogbnVsbCxcbiAgICAgICAgX3JlbW92ZVNlbGVjdDogdHJ1ZSxcbiAgICAgICAgb3ZlcjogY2MuTm9kZVxuICAgIH0sXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIHRoaXMub3Zlci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIHNob3dPdmVyKCl7XG4gICAgICAgIHRoaXMub3Zlci5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZU92ZXIoKXtcbiAgICAgICAgdGhpcy5vdmVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgYWRkRXZlbnRTZWxlY3QoY2Ipe1xuICAgICAgICB0aGlzLl9jYlNlbGVjdCA9IGNiO1xuICAgIH0sXG4gICAgaXNTZWxlY3RlZCgpe1xuICAgICAgICByZXR1cm4gdGhpcy5faXNTZWxlY3RlZDtcbiAgICB9LFxuICAgIGdldENhcmQoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcmQ7XG4gICAgfSxcbiAgICBzZXRDYXJkKGNhcmQpe1xuICAgICAgICB0aGlzLl9jYXJkID0gY2FyZDtcbiAgICB9LFxuICAgIF9sb2FkQ2FyZEJhY2soKXtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvY2FyZHNcIiwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XG4gICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGF0bGFzLmdldFNwcml0ZUZyYW1lKFwiLTFcIik7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcbiAgICBfbG9hZENhcmQoKXtcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoXCJpbWFnZXMvY2FyZHNcIiwgY2MuU3ByaXRlQXRsYXMsIGZ1bmN0aW9uIChlcnIsIGF0bGFzKSB7XG4gICAgICAgICAgICBpZihlcnIpe1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iZy5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IGF0bGFzLmdldFNwcml0ZUZyYW1lKHRoaXMuX2NhcmQubmFtZUZpbGUpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sXG4gICAgaW5pdChjYXJkLCBfcmVtb3ZlU2VsZWN0KXtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuaGlkZU92ZXIoKTtcbiAgICAgICAgaWYoY2FyZCA9PSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMuX2xvYWRDYXJkQmFjaygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuX2NhcmQgPSBjYXJkO1xuICAgICAgICAgICAgaWYoX3JlbW92ZVNlbGVjdCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZVNlbGVjdCA9IF9yZW1vdmVTZWxlY3Q7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLl9yZW1vdmVTZWxlY3QgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbG9hZENhcmQoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmV2ZWFsKGNhcmQsIHBJc0ZhY2VVcCl7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmhpZGVPdmVyKCk7XG4gICAgICAgIHRoaXMuX2xvYWRDYXJkQmFjaygpO1xuICAgICAgICB0aGlzLl9jYXJkID0gY2FyZDtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdGltZUZsaXAgPSAwLjQ1O1xuICAgICAgICBsZXQgY2FsbEZ1bmMgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLl9sb2FkQ2FyZCgpO1xuICAgICAgICAgICAgaWYoIXBJc0ZhY2VVcClcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuc2tld1kgPSAxNzA7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLnNrZXdZID0gNDU7XG4gICAgICAgIH0pO1xuICAgICAgICBpZighcElzRmFjZVVwKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxmLm5vZGUuc2tld1kgPSAwO1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNrZXdCeSh0aW1lRmxpcC8yLDAsMTApO1xuICAgICAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5za2V3VG8odGltZUZsaXAvMiwwLDE4MCk7XG4gICAgICAgICAgICBzZWxmLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbixjYWxsRnVuYyxhY3Rpb24yKSk7XG4gICAgICAgIH1lbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGYubm9kZS5za2V3WSA9IDE4MDtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5za2V3QnkodGltZUZsaXAvMiwwLC0zNSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLnNrZXdUbyh0aW1lRmxpcC8yLDAsMCk7XG4gICAgICAgICAgICBzZWxmLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbixjYWxsRnVuYyxhY3Rpb24yKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN3aXRjaENhcmQocElzRmFjZVVwKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IHRpbWVGbGlwID0gMC40NTtcbiAgICAgICAgbGV0IGNhbGxGdW5jID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2VsZi5fbG9hZENhcmQoKTtcbiAgICAgICAgICAgIGlmKCFwSXNGYWNlVXApXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLnNrZXdZID0gMTcwO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5za2V3WSA9IDQ1O1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5ub2RlLnNrZXdZID0gMDtcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNrZXdCeSh0aW1lRmxpcC8yLDAsMTApO1xuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLnNrZXdUbyh0aW1lRmxpcC8yLDAsMTgwKTtcbiAgICAgICAgc2VsZi5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb24sY2FsbEZ1bmMsYWN0aW9uMikpO1xuICAgICAgICBpZighcElzRmFjZVVwKVxuICAgICAgICB7XG4gICAgICAgICAgICBzZWxmLm5vZGUuc2tld1kgPSAwO1xuICAgICAgICAgICAgbGV0IGFjdGlvbiA9IGNjLnNrZXdCeSh0aW1lRmxpcC8yLDAsMTApO1xuICAgICAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5za2V3VG8odGltZUZsaXAvMiwwLDE4MCk7XG4gICAgICAgICAgICBzZWxmLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbixjYWxsRnVuYyxhY3Rpb24yKSk7XG4gICAgICAgIH1lbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGYubm9kZS5za2V3WSA9IDE4MDtcbiAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5za2V3QnkodGltZUZsaXAvMiwwLC0zNSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLnNrZXdUbyh0aW1lRmxpcC8yLDAsMCk7XG4gICAgICAgICAgICBzZWxmLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbixjYWxsRnVuYyxhY3Rpb24yKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJlc2V0KCl7XG4gICAgICAgIHRoaXMuX2xvYWRDYXJkQmFjaygpO1xuICAgICAgICB0aGlzLmhpZGVPdmVyKCk7XG4gICAgICAgIHRoaXMubm9kZS5fekluZGV4ID0gMDtcbiAgICAgICAgdGhpcy5ub2RlLnggPSAwO1xuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XG4gICAgICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY2FyZCA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NiU2VsZWN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fcmVtb3ZlU2VsZWN0ID0gdHJ1ZTtcbiAgICB9LFxuICAgIGV2ZW50U2VsZWN0KCl7XG4gICAgICAgIGlmKCF0aGlzLl9yZW1vdmVTZWxlY3Qpe1xuICAgICAgICAgICAgaWYoIXRoaXMuX2lzU2VsZWN0ZWQpe1xuICAgICAgICAgICAgICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gdGhpcy5ub2RlLnkgKyAyMDtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYlNlbGVjdCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NiU2VsZWN0KHRoaXMuZ2V0Q2FyZCgpLmlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSB0aGlzLm5vZGUueSAtIDIwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRTY2FsZUNhcmQoc2NhbGVDYXJkKXtcbiAgICAgICAgdGhpcy5ub2RlLndpZHRoICAqPSBzY2FsZUNhcmQ7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgKj0gc2NhbGVDYXJkO1xuICAgIH1cbn0pO1xuIl19
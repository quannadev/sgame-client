
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/minipoker/MiniPokerItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd9485vhHS9J+rnpQl9LAd6g', 'MiniPokerItem');
// scripts/minipoker/MiniPokerItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    card: cc.Sprite,
    listCard: null
  },
  init: function init(obj, icon) {
    this.listCard = obj.ListCard;
    this.card.spriteFrame = this.listCard.getSpriteFrame(icon);
  },
  stop: function stop() {},
  setIcon: function setIcon(icon, data) {
    if (data === void 0) {
      data = false;
    }

    this.card.spriteFrame = this.listCard.getSpriteFrame(icon);

    if (data) {
      this.data = icon;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaXBva2VyXFxNaW5pUG9rZXJJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY2FyZCIsIlNwcml0ZSIsImxpc3RDYXJkIiwiaW5pdCIsIm9iaiIsImljb24iLCJMaXN0Q2FyZCIsInNwcml0ZUZyYW1lIiwiZ2V0U3ByaXRlRnJhbWUiLCJzdG9wIiwic2V0SWNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxJQUFJLEVBQUVKLEVBQUUsQ0FBQ0ssTUFERDtBQUVSQyxJQUFBQSxRQUFRLEVBQUU7QUFGRixHQUhQO0FBT0xDLEVBQUFBLElBUEssZ0JBT0FDLEdBUEEsRUFPS0MsSUFQTCxFQU9VO0FBQ1gsU0FBS0gsUUFBTCxHQUF3QkUsR0FBRyxDQUFDRSxRQUE1QjtBQUNBLFNBQUtOLElBQUwsQ0FBVU8sV0FBVixHQUF3QixLQUFLTCxRQUFMLENBQWNNLGNBQWQsQ0FBNkJILElBQTdCLENBQXhCO0FBQ0gsR0FWSTtBQVdMSSxFQUFBQSxJQUFJLEVBQUUsZ0JBQVcsQ0FFaEIsQ0FiSTtBQWNMQyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNMLElBQVQsRUFBZU0sSUFBZixFQUE0QjtBQUFBLFFBQWJBLElBQWE7QUFBYkEsTUFBQUEsSUFBYSxHQUFOLEtBQU07QUFBQTs7QUFDakMsU0FBS1gsSUFBTCxDQUFVTyxXQUFWLEdBQXdCLEtBQUtMLFFBQUwsQ0FBY00sY0FBZCxDQUE2QkgsSUFBN0IsQ0FBeEI7O0FBQ0EsUUFBSU0sSUFBSixFQUFVO0FBQ04sV0FBS0EsSUFBTCxHQUFZTixJQUFaO0FBQ0g7QUFDSjtBQW5CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGNhcmQ6IGNjLlNwcml0ZSxcclxuICAgICAgICBsaXN0Q2FyZDogbnVsbFxyXG4gICAgfSxcclxuICAgIGluaXQob2JqLCBpY29uKXtcclxuICAgICAgICB0aGlzLmxpc3RDYXJkICAgICAgICAgPSBvYmouTGlzdENhcmQ7XHJcbiAgICAgICAgdGhpcy5jYXJkLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0Q2FyZC5nZXRTcHJpdGVGcmFtZShpY29uKTtcclxuICAgIH0sXHJcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgc2V0SWNvbjogZnVuY3Rpb24oaWNvbiwgZGF0YSA9IGZhbHNlKXtcclxuICAgICAgICB0aGlzLmNhcmQuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RDYXJkLmdldFNwcml0ZUZyYW1lKGljb24pO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGljb247XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
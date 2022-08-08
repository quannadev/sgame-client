
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/minipoker/MiniPokerReel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e1af81InmlHHrH9JZzyBiCQ', 'MiniPokerReel');
// scripts/minipoker/MiniPokerReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    HeightReel: 144
  },
  onLoad: function onLoad() {
    this.HeightReel = this.node.height - 5;
  },
  init: function init(obj, data) {
    var _this = this;

    this.MNPK = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.MNPK.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('MiniPokerItem');
      icon.init(self.MNPK, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index) {
    var timeMove = 1;

    if (this.MNPK.isFast) {
      timeMove = 0.2;
    }

    this.node.stopAllActions();
    var d = cc.moveTo(timeMove * (index / 2 + 1), cc.v2(this.node.x, -(this.node.height - this.HeightReel))).easing(cc.easeOut(2));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.MNPK.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 4) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.MNPK.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(d, EF));
    } else {
      this.node.runAction(cc.sequence(d, p2));
    }
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.MNPK.copy();
    this.node.y = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21pbmlwb2tlci9NaW5pUG9rZXJSZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiSGVpZ2h0UmVlbCIsIm9uTG9hZCIsIm5vZGUiLCJoZWlnaHQiLCJpbml0Iiwib2JqIiwiZGF0YSIsIk1OUEsiLCJpY29ucyIsInNlbGYiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbVR5cGUiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsImljb25QcmVmYWIiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bHQiLCJzcGluIiwidGltZU1vdmUiLCJpc0Zhc3QiLCJzdG9wQWxsQWN0aW9ucyIsImQiLCJtb3ZlVG8iLCJ2MiIsIngiLCJlYXNpbmciLCJlYXNlT3V0IiwicDIiLCJjYWxsRnVuYyIsImNvcHkiLCJ5IiwiRUYiLCJydW5BY3Rpb25Xb24iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFESixHQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUk7QUFDTCxTQUFLRCxVQUFMLEdBQWtCLEtBQUtFLElBQUwsQ0FBVUMsTUFBVixHQUFpQixDQUFuQztBQUNILEdBUkk7QUFTTEMsRUFBQUEsSUFUSyxnQkFTQUMsR0FUQSxFQVNLQyxJQVRMLEVBU1U7QUFBQTs7QUFDWCxTQUFLQyxJQUFMLEdBQVlGLEdBQVo7QUFDQSxTQUFLRyxLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUF5QjtBQUMxQyxVQUFJQyxJQUFJLEdBQUduQixFQUFFLENBQUNvQixXQUFILENBQWVQLElBQUksQ0FBQ0YsSUFBTCxDQUFVVSxVQUF6QixDQUFYO0FBQ0FSLE1BQUFBLElBQUksQ0FBQ1AsSUFBTCxDQUFVZ0IsUUFBVixDQUFtQkgsSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNJLFlBQUwsQ0FBa0IsZUFBbEIsQ0FBUDtBQUNBSixNQUFBQSxJQUFJLENBQUNYLElBQUwsQ0FBVUssSUFBSSxDQUFDRixJQUFmLEVBQXFCTSxRQUFyQjtBQUNBLGFBQU9FLElBQVA7QUFDSCxLQU5XLENBQVosRUFNSUssSUFOSixDQU1TLFVBQUFDLE1BQU0sRUFBSTtBQUNmLE1BQUEsS0FBSSxDQUFDYixLQUFMLEdBQWFhLE1BQWI7QUFDSCxLQVJEO0FBU0gsR0F0Qkk7QUF1QkxDLEVBQUFBLElBQUksRUFBRSxjQUFTUixLQUFULEVBQWU7QUFDakIsUUFBSVMsUUFBUSxHQUFJLENBQWhCOztBQUNBLFFBQUssS0FBS2hCLElBQUwsQ0FBVWlCLE1BQWYsRUFBc0I7QUFDbEJELE1BQUFBLFFBQVEsR0FBSSxHQUFaO0FBQ0g7O0FBQ0QsU0FBS3JCLElBQUwsQ0FBVXVCLGNBQVY7QUFDQSxRQUFJQyxDQUFDLEdBQUk5QixFQUFFLENBQUMrQixNQUFILENBQVVKLFFBQVEsSUFBRVQsS0FBSyxHQUFDLENBQU4sR0FBUSxDQUFWLENBQWxCLEVBQWdDbEIsRUFBRSxDQUFDZ0MsRUFBSCxDQUFNLEtBQUsxQixJQUFMLENBQVUyQixDQUFoQixFQUFrQixFQUFFLEtBQUszQixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBS0gsVUFBekIsQ0FBbEIsQ0FBaEMsRUFBeUY4QixNQUF6RixDQUFnR2xDLEVBQUUsQ0FBQ21DLE9BQUgsQ0FBVyxDQUFYLENBQWhHLENBQVQ7QUFDQSxRQUFJQyxFQUFFLEdBQUdwQyxFQUFFLENBQUNxQyxRQUFILENBQVksWUFBVztBQUM1QixVQUFJbkIsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixhQUFLUCxJQUFMLENBQVUyQixJQUFWO0FBQ0g7O0FBQ0QsV0FBS2hDLElBQUwsQ0FBVWlDLENBQVYsR0FBYyxDQUFkO0FBQ0gsS0FMUSxFQUtOLElBTE0sQ0FBVDs7QUFNQSxRQUFJckIsS0FBSyxLQUFLLENBQWQsRUFBZ0I7QUFDWixVQUFJc0IsRUFBRSxHQUFHeEMsRUFBRSxDQUFDcUMsUUFBSCxDQUFZLFlBQVc7QUFDNUIsYUFBSy9CLElBQUwsQ0FBVWlDLENBQVYsR0FBYyxDQUFkO0FBQ0EsYUFBSzVCLElBQUwsQ0FBVThCLFlBQVY7QUFDSCxPQUhRLEVBR04sSUFITSxDQUFUO0FBSUEsV0FBS25DLElBQUwsQ0FBVW9DLFNBQVYsQ0FBb0IxQyxFQUFFLENBQUMyQyxRQUFILENBQVliLENBQVosRUFBZVUsRUFBZixDQUFwQjtBQUNILEtBTkQsTUFNTTtBQUNGLFdBQUtsQyxJQUFMLENBQVVvQyxTQUFWLENBQW9CMUMsRUFBRSxDQUFDMkMsUUFBSCxDQUFZYixDQUFaLEVBQWVNLEVBQWYsQ0FBcEI7QUFDSDtBQUNKLEdBN0NJO0FBOENMUSxFQUFBQSxJQUFJLEVBQUUsZ0JBQVU7QUFDWixTQUFLdEMsSUFBTCxDQUFVdUIsY0FBVjtBQUNBLFNBQUtsQixJQUFMLENBQVUyQixJQUFWO0FBQ0EsU0FBS2hDLElBQUwsQ0FBVWlDLENBQVYsR0FBYyxDQUFkO0FBQ0g7QUFsREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgSGVpZ2h0UmVlbDogMTQ0XG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuSGVpZ2h0UmVlbCA9IHRoaXMubm9kZS5oZWlnaHQtNTtcbiAgICB9LFxuICAgIGluaXQob2JqLCBkYXRhKXtcbiAgICAgICAgdGhpcy5NTlBLID0gb2JqO1xuICAgICAgICB0aGlzLmljb25zID0gW107XG4gICAgICAgIGxldCBzZWxmICA9IHRoaXM7XG4gICAgICAgIFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKGl0ZW1UeXBlLCBpbmRleCl7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuTU5QSy5pY29uUHJlZmFiKTtcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGljb24gPSBpY29uLmdldENvbXBvbmVudCgnTWluaVBva2VySXRlbScpO1xuICAgICAgICAgICAgaWNvbi5pbml0KHNlbGYuTU5QSywgaXRlbVR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIGljb247XG4gICAgICAgIH0pKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmljb25zID0gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNwaW46IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgbGV0IHRpbWVNb3ZlICA9IDE7XG4gICAgICAgIGlmICggdGhpcy5NTlBLLmlzRmFzdCl7XG4gICAgICAgICAgICB0aW1lTW92ZSAgPSAwLjI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBkICA9IGNjLm1vdmVUbyh0aW1lTW92ZSooaW5kZXgvMisxKSwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LSB0aGlzLkhlaWdodFJlZWwpKSkuZWFzaW5nKGNjLmVhc2VPdXQoMikpO1xuICAgICAgICBsZXQgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuTU5QSy5jb3B5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IDA7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBpZiAoaW5kZXggPT09IDQpe1xuICAgICAgICAgICAgbGV0IEVGID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuTU5QSy5ydW5BY3Rpb25Xb24oKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShkLCBFRikpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGQsIHAyKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLk1OUEsuY29weSgpO1xuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XG4gICAgfSxcbn0pO1xuIl19
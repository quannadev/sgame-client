
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaXBva2VyXFxNaW5pUG9rZXJSZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiSGVpZ2h0UmVlbCIsIm9uTG9hZCIsIm5vZGUiLCJoZWlnaHQiLCJpbml0Iiwib2JqIiwiZGF0YSIsIk1OUEsiLCJpY29ucyIsInNlbGYiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbVR5cGUiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsImljb25QcmVmYWIiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bHQiLCJzcGluIiwidGltZU1vdmUiLCJpc0Zhc3QiLCJzdG9wQWxsQWN0aW9ucyIsImQiLCJtb3ZlVG8iLCJ2MiIsIngiLCJlYXNpbmciLCJlYXNlT3V0IiwicDIiLCJjYWxsRnVuYyIsImNvcHkiLCJ5IiwiRUYiLCJydW5BY3Rpb25Xb24iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFESixHQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUk7QUFDTCxTQUFLRCxVQUFMLEdBQWtCLEtBQUtFLElBQUwsQ0FBVUMsTUFBVixHQUFpQixDQUFuQztBQUNILEdBUkk7QUFTTEMsRUFBQUEsSUFUSyxnQkFTQUMsR0FUQSxFQVNLQyxJQVRMLEVBU1U7QUFBQTs7QUFDWCxTQUFLQyxJQUFMLEdBQVlGLEdBQVo7QUFDQSxTQUFLRyxLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUF5QjtBQUMxQyxVQUFJQyxJQUFJLEdBQUduQixFQUFFLENBQUNvQixXQUFILENBQWVQLElBQUksQ0FBQ0YsSUFBTCxDQUFVVSxVQUF6QixDQUFYO0FBQ0FSLE1BQUFBLElBQUksQ0FBQ1AsSUFBTCxDQUFVZ0IsUUFBVixDQUFtQkgsSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNJLFlBQUwsQ0FBa0IsZUFBbEIsQ0FBUDtBQUNBSixNQUFBQSxJQUFJLENBQUNYLElBQUwsQ0FBVUssSUFBSSxDQUFDRixJQUFmLEVBQXFCTSxRQUFyQjtBQUNBLGFBQU9FLElBQVA7QUFDSCxLQU5XLENBQVosRUFNSUssSUFOSixDQU1TLFVBQUFDLE1BQU0sRUFBSTtBQUNmLE1BQUEsS0FBSSxDQUFDYixLQUFMLEdBQWFhLE1BQWI7QUFDSCxLQVJEO0FBU0gsR0F0Qkk7QUF1QkxDLEVBQUFBLElBQUksRUFBRSxjQUFTUixLQUFULEVBQWU7QUFDakIsUUFBSVMsUUFBUSxHQUFJLENBQWhCOztBQUNBLFFBQUssS0FBS2hCLElBQUwsQ0FBVWlCLE1BQWYsRUFBc0I7QUFDbEJELE1BQUFBLFFBQVEsR0FBSSxHQUFaO0FBQ0g7O0FBQ0QsU0FBS3JCLElBQUwsQ0FBVXVCLGNBQVY7QUFDQSxRQUFJQyxDQUFDLEdBQUk5QixFQUFFLENBQUMrQixNQUFILENBQVVKLFFBQVEsSUFBRVQsS0FBSyxHQUFDLENBQU4sR0FBUSxDQUFWLENBQWxCLEVBQWdDbEIsRUFBRSxDQUFDZ0MsRUFBSCxDQUFNLEtBQUsxQixJQUFMLENBQVUyQixDQUFoQixFQUFrQixFQUFFLEtBQUszQixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBS0gsVUFBekIsQ0FBbEIsQ0FBaEMsRUFBeUY4QixNQUF6RixDQUFnR2xDLEVBQUUsQ0FBQ21DLE9BQUgsQ0FBVyxDQUFYLENBQWhHLENBQVQ7QUFDQSxRQUFJQyxFQUFFLEdBQUdwQyxFQUFFLENBQUNxQyxRQUFILENBQVksWUFBVztBQUM1QixVQUFJbkIsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixhQUFLUCxJQUFMLENBQVUyQixJQUFWO0FBQ0g7O0FBQ0QsV0FBS2hDLElBQUwsQ0FBVWlDLENBQVYsR0FBYyxDQUFkO0FBQ0gsS0FMUSxFQUtOLElBTE0sQ0FBVDs7QUFNQSxRQUFJckIsS0FBSyxLQUFLLENBQWQsRUFBZ0I7QUFDWixVQUFJc0IsRUFBRSxHQUFHeEMsRUFBRSxDQUFDcUMsUUFBSCxDQUFZLFlBQVc7QUFDNUIsYUFBSy9CLElBQUwsQ0FBVWlDLENBQVYsR0FBYyxDQUFkO0FBQ0EsYUFBSzVCLElBQUwsQ0FBVThCLFlBQVY7QUFDSCxPQUhRLEVBR04sSUFITSxDQUFUO0FBSUEsV0FBS25DLElBQUwsQ0FBVW9DLFNBQVYsQ0FBb0IxQyxFQUFFLENBQUMyQyxRQUFILENBQVliLENBQVosRUFBZVUsRUFBZixDQUFwQjtBQUNILEtBTkQsTUFNTTtBQUNGLFdBQUtsQyxJQUFMLENBQVVvQyxTQUFWLENBQW9CMUMsRUFBRSxDQUFDMkMsUUFBSCxDQUFZYixDQUFaLEVBQWVNLEVBQWYsQ0FBcEI7QUFDSDtBQUNKLEdBN0NJO0FBOENMUSxFQUFBQSxJQUFJLEVBQUUsZ0JBQVU7QUFDWixTQUFLdEMsSUFBTCxDQUFVdUIsY0FBVjtBQUNBLFNBQUtsQixJQUFMLENBQVUyQixJQUFWO0FBQ0EsU0FBS2hDLElBQUwsQ0FBVWlDLENBQVYsR0FBYyxDQUFkO0FBQ0g7QUFsREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBIZWlnaHRSZWVsOiAxNDRcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5IZWlnaHRSZWVsID0gdGhpcy5ub2RlLmhlaWdodC01O1xyXG4gICAgfSxcclxuICAgIGluaXQob2JqLCBkYXRhKXtcclxuICAgICAgICB0aGlzLk1OUEsgPSBvYmo7XHJcbiAgICAgICAgdGhpcy5pY29ucyA9IFtdO1xyXG4gICAgICAgIGxldCBzZWxmICA9IHRoaXM7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoZGF0YS5tYXAoZnVuY3Rpb24oaXRlbVR5cGUsIGluZGV4KXtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBjYy5pbnN0YW50aWF0ZShzZWxmLk1OUEsuaWNvblByZWZhYik7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcclxuICAgICAgICAgICAgaWNvbiA9IGljb24uZ2V0Q29tcG9uZW50KCdNaW5pUG9rZXJJdGVtJyk7XHJcbiAgICAgICAgICAgIGljb24uaW5pdChzZWxmLk1OUEssIGl0ZW1UeXBlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGljb247XHJcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pY29ucyA9IHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzcGluOiBmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgbGV0IHRpbWVNb3ZlICA9IDE7XHJcbiAgICAgICAgaWYgKCB0aGlzLk1OUEsuaXNGYXN0KXtcclxuICAgICAgICAgICAgdGltZU1vdmUgID0gMC4yO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBsZXQgZCAgPSBjYy5tb3ZlVG8odGltZU1vdmUqKGluZGV4LzIrMSksIGNjLnYyKHRoaXMubm9kZS54LC0odGhpcy5ub2RlLmhlaWdodC0gdGhpcy5IZWlnaHRSZWVsKSkpLmVhc2luZyhjYy5lYXNlT3V0KDIpKTtcclxuICAgICAgICBsZXQgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1OUEsuY29weSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IDQpe1xyXG4gICAgICAgICAgICBsZXQgRUYgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuTU5QSy5ydW5BY3Rpb25Xb24oKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZCwgRUYpKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZCwgcDIpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc3RvcDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLk1OUEsuY29weSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
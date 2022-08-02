
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/minipoker/MiniPokerWinGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '828d9yDIAJGU4V0lAKsZzMt', 'MiniPokerWinGame');
// scripts/minipoker/MiniPokerWinGame.js

"use strict";

var self;

var Helper = require("Helper");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbMoneyWin: cc.Label,
    lbNumberWin: cc.Label,
    animationWin: cc.Node,
    winText: cc.Node
  },
  onLoad: function onLoad() {
    self = this;
  },
  init: function init(obj) {
    this.MNPK = obj;
  },
  runWinGame: function runWinGame() {
    var _this = this;

    this.winText.active = false;

    if (this.MNPK.isNoHu) {
      this.runNoHu();
    } else {
      if (this.MNPK.winMoney > 0) {
        if (this.MNPK.handWinType > 0) {
          this.winText.active = true;
          Promise.all(this.winText.children.map(function (text, index) {
            text.active = false;
          })).then(function (result) {
            self.winText.children[_this.MNPK.handWinType].active = true;
          });
          this.lbMoneyWin.node.y = -50;
        } else this.lbMoneyWin.node.y = 0;

        this.MNPK.setMoneyWin(this.MNPK.winMoney);
        this.lbMoneyWin.node.active = true;
        Helper.numberTo(this.lbMoneyWin, 0, this.MNPK.winMoney, 1200, true, function () {
          self.MNPK.updateChipAll();
          self.scheduleOnce(function () {
            self.lbMoneyWin.node.active = false;
            self.winText.active = false;
            self.checkRunAgainWin();
          }, 1);
        });
        this.MNPK.winMoney = 0;
      } else {
        this.MNPK.autoQuay();
      }
    }
  },
  checkRunAgainWin: function checkRunAgainWin() {
    if (this.MNPK.winMoney > 0 || this.MNPK.isNoHu || this.MNPK.isAuto) this.runWinGame();
  },
  runNoHu: function runNoHu() {
    this.animationWin.active = true;
    this.animationWin.getComponent(sp.Skeleton).setAnimation(0, "Idle", false);
    this.lbNumberWin.node.active = true;
    Helper.numberTo(this.lbNumberWin, 0, this.MNPK.winMoney, 1200, true, function () {
      this.scheduleOnce(function () {
        var d = cc.moveTo(0.5, cc.v2(-75, 170));
        self.lbNumberWin.node.runAction(cc.sequence(d, cc.delayTime(1), cc.callFunc(function () {
          self.lbNumberWin.node.active = false;
          self.checkRunAgainWin();
        })));
      }, 3);
    });
    this.scheduleOnce(function () {
      self.animationWin.active = false;
    }, 4);
    this.MNPK.isNoHu = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaXBva2VyXFxNaW5pUG9rZXJXaW5HYW1lLmpzIl0sIm5hbWVzIjpbInNlbGYiLCJIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGJNb25leVdpbiIsIkxhYmVsIiwibGJOdW1iZXJXaW4iLCJhbmltYXRpb25XaW4iLCJOb2RlIiwid2luVGV4dCIsIm9uTG9hZCIsImluaXQiLCJvYmoiLCJNTlBLIiwicnVuV2luR2FtZSIsImFjdGl2ZSIsImlzTm9IdSIsInJ1bk5vSHUiLCJ3aW5Nb25leSIsImhhbmRXaW5UeXBlIiwiUHJvbWlzZSIsImFsbCIsImNoaWxkcmVuIiwibWFwIiwidGV4dCIsImluZGV4IiwidGhlbiIsInJlc3VsdCIsIm5vZGUiLCJ5Iiwic2V0TW9uZXlXaW4iLCJudW1iZXJUbyIsInVwZGF0ZUNoaXBBbGwiLCJzY2hlZHVsZU9uY2UiLCJjaGVja1J1bkFnYWluV2luIiwiYXV0b1F1YXkiLCJpc0F1dG8iLCJnZXRDb21wb25lbnQiLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwiZCIsIm1vdmVUbyIsInYyIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJjYWxsRnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFKOztBQUNBLElBQUlDLE1BQU0sR0FBR0MsT0FBTyxDQUFDLFFBQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFZSixFQUFFLENBQUNLLEtBRGpCO0FBRVJDLElBQUFBLFdBQVcsRUFBV04sRUFBRSxDQUFDSyxLQUZqQjtBQUdSRSxJQUFBQSxZQUFZLEVBQVVQLEVBQUUsQ0FBQ1EsSUFIakI7QUFJUkMsSUFBQUEsT0FB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RSxLQUFwRTtBQUNBLFNBQUtsQyxXQUFMLENBQWlCc0IsSUFBakIsQ0FBc0JiLE1BQXRCLEdBQStCLElBQS9CO0FBQ0FqQixJQUFBQSxNQUFNLENBQUNpQyxRQUFQLENBQWdCLEtBQUt6QixXQUFyQixFQUFrQyxDQUFsQyxFQUFxQyxLQUFLTyxJQUFMLENBQVVLLFFBQS9DLEVBQXlELElBQXpELEVBQStELElBQS9ELEVBQXFFLFlBQVk7QUFDN0UsV0FBS2UsWUFBTCxDQUFrQixZQUFZO0FBQzFCLFlBQUlRLENBQUMsR0FBR3pDLEVBQUUsQ0FBQzBDLE1BQUgsQ0FBVSxHQUFWLEVBQWUxQyxFQUFFLENBQUMyQyxFQUFILENBQU0sQ0FBQyxFQUFQLEVBQVcsR0FBWCxDQUFmLENBQVI7QUFDQTlDLFFBQUFBLElBQUksQ0FBQ1MsV0FBTCxDQUFpQnNCLElBQWpCLENBQXNCZ0IsU0FBdEIsQ0FBZ0M1QyxFQUFFLENBQUM2QyxRQUFILENBQVlKLENBQVosRUFBZXpDLEVBQUUsQ0FBQzhDLFNBQUgsQ0FBYSxDQUFiLENBQWYsRUFBZ0M5QyxFQUFFLENBQUMrQyxRQUFILENBQVksWUFBWTtBQUNwRmxELFVBQUFBLElBQUksQ0FBQ1MsV0FBTCxDQUFpQnNCLElBQWpCLENBQXNCYixNQUF0QixHQUErQixLQUEvQjtBQUNBbEIsVUFBQUEsSUFBSSxDQUFDcUMsZ0JBQUw7QUFDSCxTQUgrRCxDQUFoQyxDQUFoQztBQUlILE9BTkQsRUFNRyxDQU5IO0FBT0gsS0FSRDtBQVNBLFNBQUtELFlBQUwsQ0FBa0IsWUFBWTtBQUMxQnBDLE1BQUFBLElBQUksQ0FBQ1UsWUFBTCxDQUFrQlEsTUFBbEIsR0FBNEIsS0FBNUI7QUFDSCxLQUZELEVBRUcsQ0FGSDtBQUdBLFNBQUtGLElBQUwsQ0FBVUcsTUFBVixHQUF1QixLQUF2QjtBQUNIO0FBckVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBzZWxmO1xyXG5sZXQgSGVscGVyID0gcmVxdWlyZShcIkhlbHBlclwiKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGJNb25leVdpbiAgICAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTnVtYmVyV2luICAgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBhbmltYXRpb25XaW4gICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICB3aW5UZXh0ICAgICAgICAgICAgIDogY2MuTm9kZSxcclxuICAgIH0sXHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBzZWxmID0gdGhpcztcclxuICAgIH0sXHJcbiAgICBpbml0KG9iaikge1xyXG4gICAgICAgIHRoaXMuTU5QSyA9IG9iajtcclxuICAgIH0sXHJcbiAgICBydW5XaW5HYW1lKCkge1xyXG4gICAgICAgIHRoaXMud2luVGV4dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5NTlBLLmlzTm9IdSl7XHJcbiAgICAgICAgICAgIHRoaXMucnVuTm9IdSgpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuTU5QSy53aW5Nb25leSA+IDApe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuTU5QSy5oYW5kV2luVHlwZSA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2luVGV4dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHRoaXMud2luVGV4dC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24odGV4dCwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pKS50aGVuKHJlc3VsdCA9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53aW5UZXh0LmNoaWxkcmVuW3RoaXMuTU5QSy5oYW5kV2luVHlwZV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiTW9uZXlXaW4ubm9kZS55ID0gLTUwO1xyXG4gICAgICAgICAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiTW9uZXlXaW4ubm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuTU5QSy5zZXRNb25leVdpbih0aGlzLk1OUEsud2luTW9uZXkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYk1vbmV5V2luLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIEhlbHBlci5udW1iZXJUbyh0aGlzLmxiTW9uZXlXaW4sIDAsIHRoaXMuTU5QSy53aW5Nb25leSwgMTIwMCwgdHJ1ZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuTU5QSy51cGRhdGVDaGlwQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxiTW9uZXlXaW4ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi53aW5UZXh0LmFjdGl2ZSAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuY2hlY2tSdW5BZ2FpbldpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDEpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuTU5QSy53aW5Nb25leSAgID0gMDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLk1OUEsuYXV0b1F1YXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjaGVja1J1bkFnYWluV2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLk1OUEsud2luTW9uZXkgPiAwIHx8IHRoaXMuTU5QSy5pc05vSHUgfHwgdGhpcy5NTlBLLmlzQXV0bylcclxuICAgICAgICAgICAgdGhpcy5ydW5XaW5HYW1lKCk7XHJcbiAgICB9LFxyXG4gICAgcnVuTm9IdSgpe1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uV2luLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25XaW4uZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJJZGxlXCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmxiTnVtYmVyV2luLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBIZWxwZXIubnVtYmVyVG8odGhpcy5sYk51bWJlcldpbiwgMCwgdGhpcy5NTlBLLndpbk1vbmV5LCAxMjAwLCB0cnVlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBkID0gY2MubW92ZVRvKDAuNSwgY2MudjIoLTc1LCAxNzApKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubGJOdW1iZXJXaW4ubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoZCwgY2MuZGVsYXlUaW1lKDEpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5sYk51bWJlcldpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2hlY2tSdW5BZ2FpbldpbigpO1xyXG4gICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfSwgMylcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYW5pbWF0aW9uV2luLmFjdGl2ZSAgPSBmYWxzZTtcclxuICAgICAgICB9LCA0KVxyXG4gICAgICAgIHRoaXMuTU5QSy5pc05vSHUgICAgID0gZmFsc2U7XHJcbiAgICB9LFxyXG59KTtcclxuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadWinGame.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4f9aOPTllDGrZ4AF2CQyng', 'SinbadWinGame');
// scripts/sinbad/SinbadWinGame.js

"use strict";

var self;

var Helper = require("Helper");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbMoneyWin: cc.Label,
    BonusFreeSpine: cc.Node,
    NoHuCoin: cc.Node,
    ThangText: cc.Node,
    ThangLonCoin: cc.Node,
    FreeCount: cc.Node,
    NumberFreeSpine: cc.Node
  },
  onLoad: function onLoad() {
    self = this;
  },
  init: function init(obj) {
    this.SLV = obj;
  },
  runWinGame: function runWinGame() {
    var bgAll = this.node.getChildByName("bg_all");
    bgAll.active = true;

    if (this.SLV.isThangLon && !this.SLV.isNoHu) {
      this.SLV.playBigWin();
      this.runZeusThangLon();
    } else if (this.SLV.isNoHu) {
      this.SLV.playJackpot();
      this.runZeusNoHu();
    } else if (this.SLV.isFree) {
      this.runFreeSpine();
    } else if (this.SLV.isBonus) {
      this.SLV.playBonus();
      this.runBonusSpine();
    } else {
      self.SLV.setMoneyWin(self.SLV.winMoney);
      self.updateFreeSpin();

      if (this.SLV.winMoney > 0) {
        this.SLV.playSpinWin();
        this.lbMoneyWin.node.active = true;
        Helper.numberTo(this.lbMoneyWin, 0, this.SLV.winMoney, 1200, true, function () {
          self.scheduleOnce(function () {
            self.lbMoneyWin.node.active = false;
            bgAll.active = false;
            self.SLV.autoQuay();
          }, 1);
        });
        this.SLV.winMoney = 0;
      } else {
        bgAll.active = false;
        self.SLV.autoQuay();
      }
    }

    if (this.SLV.type == 0) this.SLV.playSpinMis();
  },
  updateFreeSpin: function updateFreeSpin() {
    if (this.SLV.freeSpin < 1) this.FreeCount.active = false;else {
      this.FreeCount.active = true;
      self.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = self.SLV.freeSpin;
    }
  },
  checkRunAgainWin: function checkRunAgainWin() {
    if (this.SLV.isBonus || this.SLV.winMoney > 0 || this.SLV.isFree || this.SLV.isNoHu || this.SLV.isThangLon || this.SLV.isAuto) this.runWinGame();
  },
  runFreeSpine: function runFreeSpine() {
    this.SLV.isFree = false;
    this.BonusFreeSpine.active = true;
    this.NumberFreeSpine.active = true;
    this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, 'FreeSpine', true);
    this.NumberFreeSpine.getChildByName("lb_number_free_spine").getComponent(cc.Label).string = this.SLV.freeSpin;
    this.scheduleOnce(function () {
      self.node.getChildByName("bg_all").active = false;
      self.BonusFreeSpine.active = false;
      self.NumberFreeSpine.active = false;
      self.FreeCount.active = true;
      self.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = self.SLV.freeSpin;
      this.checkRunAgainWin();
    }, 3);
  },
  runBonusSpine: function runBonusSpine() {
    this.SLV.isBonus = false;
    this.BonusFreeSpine.active = true;
    this.NumberFreeSpine.active = false;
    this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, 'Bonus', true);
    this.scheduleOnce(function () {
      self.BonusFreeSpine.active = false;
      self.show("UISinbadBonus", {
        src: 'sinbad',
        pop: true,
        data: self.SLV.freeGift
      });
    }, 2);
  },
  runZeusNoHu: function runZeusNoHu() {
    this.SLV.isNoHu = false;
    this.NoHuCoin.active = true;
    this.Text.active = true;
    this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "NoHu", true);
    var lbMoney = self.node.getChildByName("lb_number_win");
    lbMoney.setPosition(cc.v2(0, 50));
    lbMoney.active = true;
    Helper.numberTo(lbMoney.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, true, function () {
      self.scheduleOnce(function () {
        var d = cc.moveTo(0.5, cc.v2(0, 100));
        lbMoney.runAction(cc.sequence(d, cc.delayTime(1), cc.callFunc(function () {
          self.node.getChildByName("bg_all").active = false;
          self.NoHuCoin.active = false;
          self.ThangText.active = false;
          lbMoney.active = false;
          self.checkRunAgainWin();
        })));
      }, 5);
    });
  },
  runZeusThangLon: function runZeusThangLon() {
    this.SLV.isThangLon = false;
    this.ThangLonCoin.active = true;
    this.ThangText.active = true;
    this.ThangText.getComponent(sp.Skeleton).setAnimation(0, "ThangLon", true);
    var lbMoney = self.node.getChildByName("lb_number_win");
    lbMoney.setPosition(cc.v2(0, 50));
    lbMoney.active = true;
    Helper.numberTo(lbMoney.getComponent(cc.Label), 0, this.SLV.winMoney, 1200, true, function () {
      self.scheduleOnce(function () {
        var d = cc.moveTo(0.5, cc.v2(0, 100));
        lbMoney.runAction(cc.sequence(d, cc.delayTime(0.5), cc.callFunc(function () {
          lbMoney.active = false;
          self.node.getChildByName("bg_all").active = false;
          self.ThangLonCoin.active = false;
          self.ThangText.active = false;
          self.checkRunAgainWin();
        })));
      }, 3);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRXaW5HYW1lLmpzIl0sIm5hbWVzIjpbInNlbGYiLCJIZWxwZXIiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGJNb25leVdpbiIsIkxhYmVsIiwiQm9udXNGcmVlU3BpbmUiLCJOb2RlIiwiTm9IdUNvaW4iLCJUaGFuZ1RleHQiLCJUaGFuZ0xvbkNvaW4iLCJGcmVlQ291bnQiLCJOdW1iZXJGcmVlU3BpbmUiLCJvbkxvYWQiLCJpbml0Iiwib2JqIiwiU0xWIiwicnVuV2luR2FtZSIsImJnQWxsIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwiaXNUaGFuZ0xvbiIsImlzTm9IdSIsInBsYXlCaWdXaW4iLCJydW5aZXVzVGhhbmdMb24iLCJwbGF5SmFja3BvdCIsInJ1blpldXNOb0h1IiwiaXNGcmVlIiwicnVuRnJlZVNwaW5lIiwiaXNCb251cyIsInBsYXlCb251cyIsInJ1bkJvbnVzU3BpbmUiLCJzZXRNb25leVdpbiIsIndpbk1vbmV5IiwidXBkYXRlRnJlZVNwaW4iLCJwbGF5U3BpbldpbiIsIm51bWJlclRvIiwic2NoZWR1bGVPbmNlIiwiYXV0b1F1YXkiLCJ0eXBlIiwicGxheVNwaW5NaXMiLCJmcmVlU3BpbiIsImdldENvbXBvbmVudCIsInN0cmluZyIsImNoZWNrUnVuQWdhaW5XaW4iLCJpc0F1dG8iLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwic2hvdyIsInNyYyIsInBvcCIsImRhdGEiLCJmcmVlR2lmdCIsIlRleHQiLCJsYk1vbmV5Iiwic2V0UG9zaXRpb24iLCJ2MiIsImQiLCJtb3ZlVG8iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsImNhbGxGdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLElBQUo7O0FBQ0EsSUFBSUMsTUFBTSxHQUFHQyxPQUFPLENB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LENBQUNuQyxNQUFSLEdBQWlCLElBQWpCO0FBQ0F2QixJQUFBQSxNQUFNLENBQUN1QyxRQUFQLENBQWdCbUIsT0FBTyxDQUFDYixZQUFSLENBQXFCM0MsRUFBRSxDQUFDSyxLQUF4QixDQUFoQixFQUFnRCxDQUFoRCxFQUFtRCxLQUFLVyxHQUFMLENBQVNrQixRQUE1RCxFQUFzRSxJQUF0RSxFQUE0RSxJQUE1RSxFQUFrRixZQUFZO0FBQzFGckMsTUFBQUEsSUFBSSxDQUFDeUMsWUFBTCxDQUFrQixZQUFVO0FBQ3hCLFlBQUlxQixDQUFDLEdBQUczRCxFQUFFLENBQUM0RCxNQUFILENBQVUsR0FBVixFQUFlNUQsRUFBRSxDQUFDMEQsRUFBSCxDQUFNLENBQU4sRUFBUyxHQUFULENBQWYsQ0FBUjtBQUNBRixRQUFBQSxPQUFPLENBQUNLLFNBQVIsQ0FBa0I3RCxFQUFFLENBQUM4RCxRQUFILENBQVlILENBQVosRUFBZTNELEVBQUUsQ0FBQytELFNBQUgsQ0FBYSxHQUFiLENBQWYsRUFBa0MvRCxFQUFFLENBQUNnRSxRQUFILENBQVksWUFBWTtBQUN4RVIsVUFBQUEsT0FBTyxDQUFDbkMsTUFBUixHQUFpQixLQUFqQjtBQUNBeEIsVUFBQUEsSUFBSSxDQUFDc0IsSUFBTCxDQUFVQyxjQUFWLENBQXlCLFFBQXpCLEVBQW1DQyxNQUFuQyxHQUE2QyxLQUE3QztBQUNBeEIsVUFBQUEsSUFBSSxDQUFDYSxZQUFMLENBQWtCVyxNQUFsQixHQUE4QixLQUE5QjtBQUNBeEIsVUFBQUEsSUFBSSxDQUFDWSxTQUFMLENBQWVZLE1BQWYsR0FBOEIsS0FBOUI7QUFDQXhCLFVBQUFBLElBQUksQ0FBQ2dELGdCQUFMO0FBQ0gsU0FObUQsQ0FBbEMsQ0FBbEI7QUFPSCxPQVRELEVBU0csQ0FUSDtBQVVILEtBWEQ7QUFZSDtBQXJJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgc2VsZjtcbmxldCBIZWxwZXIgPSByZXF1aXJlKFwiSGVscGVyXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiTW9uZXlXaW4gICAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgQm9udXNGcmVlU3BpbmUgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIE5vSHVDb2luICAgIFx0XHQ6IGNjLk5vZGUsXG4gICAgICAgIFRoYW5nVGV4dCAgIFx0XHQ6IGNjLk5vZGUsXG4gICAgICAgIFRoYW5nTG9uQ29pblx0XHQ6IGNjLk5vZGUsXG4gICAgICAgIEZyZWVDb3VudCAgICAgICAgICAgOiBjYy5Ob2RlLFxuICAgICAgICBOdW1iZXJGcmVlU3BpbmUgICAgIDogY2MuTm9kZSxcbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgc2VsZiA9IHRoaXM7XG4gICAgfSxcbiAgICBpbml0KG9iaikge1xuICAgICAgICB0aGlzLlNMViA9IG9iajtcbiAgICB9LFxuICAgIHJ1bldpbkdhbWUoKSB7XG4gICAgICAgIGxldCBiZ0FsbCAgICAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19hbGxcIik7XG4gICAgICAgIGJnQWxsLmFjdGl2ZSAgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5TTFYuaXNUaGFuZ0xvbiAmJiAhdGhpcy5TTFYuaXNOb0h1KSB7XG4gICAgICAgICAgICB0aGlzLlNMVi5wbGF5QmlnV2luKCk7XG4gICAgICAgICAgICB0aGlzLnJ1blpldXNUaGFuZ0xvbigpO1xuICAgICAgICB9ZWxzZSBpZiAodGhpcy5TTFYuaXNOb0h1KXtcbiAgICAgICAgICAgIHRoaXMuU0xWLnBsYXlKYWNrcG90KCk7XG4gICAgICAgICAgICB0aGlzLnJ1blpldXNOb0h1KCk7XG4gICAgICAgIH1lbHNlIGlmICh0aGlzLlNMVi5pc0ZyZWUpe1xuICAgICAgICAgICAgdGhpcy5ydW5GcmVlU3BpbmUoKTtcbiAgICAgICAgfWVsc2UgaWYgKHRoaXMuU0xWLmlzQm9udXMpe1xuICAgICAgICAgICAgdGhpcy5TTFYucGxheUJvbnVzKCk7XG4gICAgICAgICAgICB0aGlzLnJ1bkJvbnVzU3BpbmUoKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBzZWxmLlNMVi5zZXRNb25leVdpbihzZWxmLlNMVi53aW5Nb25leSk7XG4gICAgICAgICAgICBzZWxmLnVwZGF0ZUZyZWVTcGluKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5TTFYud2luTW9uZXkgPiAwKXtcbiAgICAgICAgICAgICAgICB0aGlzLlNMVi5wbGF5U3BpbldpbigpO1xuICAgICAgICAgICAgICAgIHRoaXMubGJNb25leVdpbi5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgSGVscGVyLm51bWJlclRvKHRoaXMubGJNb25leVdpbiwgMCwgdGhpcy5TTFYud2luTW9uZXksIDEyMDAsIHRydWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGJNb25leVdpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmdBbGwuYWN0aXZlICA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5TTFYuYXV0b1F1YXkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5TTFYud2luTW9uZXkgICA9IDA7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBiZ0FsbC5hY3RpdmUgID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc2VsZi5TTFYuYXV0b1F1YXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5TTFYudHlwZSA9PSAwKVxuICAgICAgICAgICAgdGhpcy5TTFYucGxheVNwaW5NaXMoKTtcbiAgICB9LFxuICAgIHVwZGF0ZUZyZWVTcGluKCkge1xuICAgICAgICBpZiAodGhpcy5TTFYuZnJlZVNwaW4gPCAxKVxuICAgICAgICAgICAgdGhpcy5GcmVlQ291bnQuYWN0aXZlICAgICAgID0gZmFsc2U7XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0aGlzLkZyZWVDb3VudC5hY3RpdmUgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5GcmVlQ291bnQuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9mcmVlX3NwaW5lX2NvdW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gc2VsZi5TTFYuZnJlZVNwaW47XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNoZWNrUnVuQWdhaW5XaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLlNMVi5pc0JvbnVzIHx8IHRoaXMuU0xWLndpbk1vbmV5ID4gMCB8fCB0aGlzLlNMVi5pc0ZyZWUgfHwgdGhpcy5TTFYuaXNOb0h1IHx8IHRoaXMuU0xWLmlzVGhhbmdMb24gfHwgdGhpcy5TTFYuaXNBdXRvKVxuICAgICAgICAgICAgdGhpcy5ydW5XaW5HYW1lKCk7XG4gICAgfSxcbiAgICBydW5GcmVlU3BpbmUoKSB7XG4gICAgICAgIHRoaXMuU0xWLmlzRnJlZSAgICAgICAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLkJvbnVzRnJlZVNwaW5lLmFjdGl2ZSAgPSB0cnVlO1xuICAgICAgICB0aGlzLk51bWJlckZyZWVTcGluZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLkJvbnVzRnJlZVNwaW5lLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsICdGcmVlU3BpbmUnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5OdW1iZXJGcmVlU3BpbmUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9udW1iZXJfZnJlZV9zcGluZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuU0xWLmZyZWVTcGluO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdfYWxsXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgc2VsZi5Cb251c0ZyZWVTcGluZS5hY3RpdmUgID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLk51bWJlckZyZWVTcGluZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHNlbGYuRnJlZUNvdW50LmFjdGl2ZSAgICAgICA9IHRydWU7XG4gICAgICAgICAgICBzZWxmLkZyZWVDb3VudC5nZXRDaGlsZEJ5TmFtZShcImxiX2ZyZWVfc3BpbmVfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzZWxmLlNMVi5mcmVlU3BpbjtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tSdW5BZ2FpbldpbigpO1xuICAgICAgICB9LCAzKTtcbiAgICB9LFxuICAgIHJ1bkJvbnVzU3BpbmUoKSB7XG4gICAgICAgIHRoaXMuU0xWLmlzQm9udXMgICAgICAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLkJvbnVzRnJlZVNwaW5lLmFjdGl2ZSAgPSB0cnVlO1xuICAgICAgICB0aGlzLk51bWJlckZyZWVTcGluZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5Cb251c0ZyZWVTcGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCAnQm9udXMnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNlbGYuQm9udXNGcmVlU3BpbmUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBzZWxmLnNob3coXCJVSVNpbmJhZEJvbnVzXCIsIHtzcmM6ICdzaW5iYWQnLCBwb3A6IHRydWUsIGRhdGE6IHNlbGYuU0xWLmZyZWVHaWZ0fSk7XG4gICAgICAgIH0sIDIpO1xuICAgIH0sXG4gICAgcnVuWmV1c05vSHUoKXtcbiAgICAgICAgdGhpcy5TTFYuaXNOb0h1ICAgICAgICAgICAgICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5Ob0h1Q29pbi5hY3RpdmUgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5UZXh0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuVGhhbmdUZXh0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiTm9IdVwiLCB0cnVlKTtcbiAgICAgICAgbGV0IGxiTW9uZXkgPSBzZWxmLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9udW1iZXJfd2luXCIpO1xuICAgICAgICBsYk1vbmV5LnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XG4gICAgICAgIGxiTW9uZXkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgSGVscGVyLm51bWJlclRvKGxiTW9uZXkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSwgMCwgdGhpcy5TTFYud2luTW9uZXksIDEyMDAsIHRydWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGQgPSBjYy5tb3ZlVG8oMC41LCBjYy52MigwLCAxMDApKTtcbiAgICAgICAgICAgICAgICBsYk1vbmV5LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShkLCBjYy5kZWxheVRpbWUoMSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdfYWxsXCIpLmFjdGl2ZSAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5Ob0h1Q29pbi5hY3RpdmUgID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuVGhhbmdUZXh0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBsYk1vbmV5LmFjdGl2ZSAgICAgICAgICAgICAgICA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmNoZWNrUnVuQWdhaW5XaW4oKTtcbiAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgfSwgNSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgcnVuWmV1c1RoYW5nTG9uKCl7XG4gICAgICAgIHRoaXMuU0xWLmlzVGhhbmdMb24gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5UaGFuZ0xvbkNvaW4uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5UaGFuZ1RleHQuYWN0aXZlICAgID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5UaGFuZ1RleHQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgXCJUaGFuZ0xvblwiLCB0cnVlKTtcbiAgICAgICAgbGV0IGxiTW9uZXkgPSBzZWxmLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9udW1iZXJfd2luXCIpO1xuICAgICAgICBsYk1vbmV5LnNldFBvc2l0aW9uKGNjLnYyKDAsIDUwKSk7XG4gICAgICAgIGxiTW9uZXkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgSGVscGVyLm51bWJlclRvKGxiTW9uZXkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSwgMCwgdGhpcy5TTFYud2luTW9uZXksIDEyMDAsIHRydWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgbGV0IGQgPSBjYy5tb3ZlVG8oMC41LCBjYy52MigwLCAxMDApKTtcbiAgICAgICAgICAgICAgICBsYk1vbmV5LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShkLCBjYy5kZWxheVRpbWUoMC41KSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBsYk1vbmV5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19hbGxcIikuYWN0aXZlICA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLlRoYW5nTG9uQ29pbi5hY3RpdmUgICAgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5UaGFuZ1RleHQuYWN0aXZlICAgICAgID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2hlY2tSdW5BZ2FpbldpbigpO1xuICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICB9LCAzKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xuIl19
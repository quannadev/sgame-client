"use strict";
cc._RF.push(module, '48f05ZuHIZHeI3pfLCV5Lqt', 'KimCuongWinGame');
// scripts/kimcuong/KimCuongWinGame.js

"use strict";

var self;

var Helper = require("Helper");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbMoneyWin: cc.Label,
    BonusFreeSpine: cc.Node,
    KimCuongNoHuCoin: cc.Node,
    KimCuongThangText: cc.Node,
    KimCuongThangLonCoin: cc.Node,
    FreeCount: cc.Node,
    NumberFreeSpine: cc.Node
  },
  onLoad: function onLoad() {
    self = this;
  },
  init: function init(obj) {
    this.KCV = obj;
  },
  runWinGame: function runWinGame() {
    var bgAll = this.node.getChildByName("bg_all");
    bgAll.active = true;

    if (this.KCV.isThangLon && !this.KCV.isNoHu) {
      this.KCV.playBigWin();
      this.runKimCuongThangLon();
    } else if (this.KCV.isNoHu) {
      this.KCV.playJackpot();
      this.runKimCuongNoHu();
    } else if (this.KCV.isFree) {
      this.runFreeSpine();
    } else if (this.KCV.isBonus) {
      this.KCV.playBonus();
      this.runBonusSpine();
    } else {
      console.log("updateFreeSpin");
      self.KCV.setMoneyWin(self.KCV.winMoney);
      self.updateFreeSpin();

      if (this.KCV.winMoney > 0) {
        this.KCV.playSpinWin();
        this.lbMoneyWin.node.active = true;
        Helper.numberTo(this.lbMoneyWin, 0, this.KCV.winMoney, 1200, true, function () {
          self.scheduleOnce(function () {
            self.lbMoneyWin.node.active = false;
            bgAll.active = false;
            self.KCV.autoQuay();
          }, 1);
        });
        this.KCV.winMoney = 0;
      } else {
        bgAll.active = false;
        self.KCV.autoQuay();
      }
    }

    if (this.KCV.type == 0) this.KCV.playSpinMis();
  },
  updateFreeSpin: function updateFreeSpin() {
    if (this.KCV.freeSpin < 1) this.FreeCount.active = false;else {
      this.FreeCount.active = true;
      self.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = self.KCV.freeSpin;
    }
  },
  checkRunAgainWin: function checkRunAgainWin() {
    if (this.KCV.isBonus || this.KCV.winMoney > 0 || this.KCV.isFree || this.KCV.isNoHu || this.KCV.isThangLon || this.KCV.isAuto) this.runWinGame();
  },
  runFreeSpine: function runFreeSpine() {
    this.KCV.isFree = false;
    this.BonusFreeSpine.active = true;
    this.NumberFreeSpine.active = true;
    this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, 'FreeSpine', true);
    this.NumberFreeSpine.getChildByName("lb_number_free_spine").getComponent(cc.Label).string = this.KCV.freeSpin;
    this.scheduleOnce(function () {
      self.node.getChildByName("bg_all").active = false;
      self.BonusFreeSpine.active = false;
      self.NumberFreeSpine.active = false;
      self.FreeCount.active = true;
      self.FreeCount.getChildByName("lb_free_spine_count").getComponent(cc.Label).string = self.KCV.freeSpin;
      this.checkRunAgainWin();
    }, 3);
  },
  runBonusSpine: function runBonusSpine() {
    this.KCV.isBonus = false;
    this.BonusFreeSpine.active = true;
    this.NumberFreeSpine.active = false;
    this.BonusFreeSpine.getComponent(sp.Skeleton).setAnimation(0, 'Bonusgame', true);
    this.scheduleOnce(function () {
      self.BonusFreeSpine.active = false;
      self.show("UIKimCuongBonusGame", {
        src: 'kimcuong',
        pop: true,
        data: self.KCV.freeGift
      });
    }, 2);
  },
  runKimCuongNoHu: function runKimCuongNoHu() {
    this.KCV.isNoHu = false;
    this.KimCuongNoHuCoin.active = true;
    this.KimCuongThangText.active = true;
    this.KimCuongThangText.getComponent(sp.Skeleton).setAnimation(0, "NoHu", true);
    var lbMoney = self.node.getChildByName("lb_number_win");
    lbMoney.setPosition(cc.v2(0, -160));
    lbMoney.active = true;
    Helper.numberTo(lbMoney.getComponent(cc.Label), 0, this.KCV.winMoney, 1200, true, function () {
      self.scheduleOnce(function () {
        var d = cc.moveTo(0.5, cc.v2(0, 50));
        lbMoney.runAction(cc.sequence(d, cc.delayTime(1), cc.callFunc(function () {
          self.node.getChildByName("bg_all").active = false;
          self.KimCuongNoHuCoin.active = false;
          self.KimCuongThangText.active = false;
          lbMoney.active = false;
          self.checkRunAgainWin();
        })));
      }, 5);
    });
  },
  runKimCuongThangLon: function runKimCuongThangLon() {
    this.KCV.isThangLon = false;
    this.KimCuongThangLonCoin.active = true;
    this.KimCuongThangText.active = true;
    this.KimCuongThangText.getComponent(sp.Skeleton).setAnimation(0, "ThangLon", true);
    var lbMoney = self.node.getChildByName("lb_number_win");
    lbMoney.setPosition(cc.v2(0, -100));
    lbMoney.active = true;
    Helper.numberTo(lbMoney.getComponent(cc.Label), 0, this.KCV.winMoney, 1200, true, function () {
      self.scheduleOnce(function () {
        var d = cc.moveTo(0.5, cc.v2(0, 50));
        lbMoney.runAction(cc.sequence(d, cc.delayTime(0.5), cc.callFunc(function () {
          lbMoney.active = false;
          self.node.getChildByName("bg_all").active = false;
          self.KimCuongThangLonCoin.active = false;
          self.KimCuongThangText.active = false;
          self.checkRunAgainWin();
        })));
      }, 3);
    });
  }
});

cc._RF.pop();
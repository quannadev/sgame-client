"use strict";
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
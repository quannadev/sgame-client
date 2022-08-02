"use strict";
cc._RF.push(module, '57a06mQcIpGQaAVDCSxZ5Dg', 'UIVampireBonus');
// scripts/vampire/UIVampireBonus.js

"use strict";

var Helper = require("Helper");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbTime: cc.Label,
    lbLuotBoc: cc.Label,
    lbMoneyWin: cc.Label,
    lbTotalWin: cc.Label,
    resultWin: cc.Node,
    totalSelect: 0,
    totalTime: 15
  },
  onEnable: function onEnable() {
    this.totalTime = 30;
    this.resultWin.active = false;
    this.totalSelect = this._data.length;
    this.lbLuotBoc.string = this.totalSelect;
    this.lbTime.string = this.totalTime;
    this.schedule(this.countTime, 1);
  },
  countTime: function countTime() {
    this.totalTime--;

    if (this.totalTime < 1) {
      this.unschedule(this.countTime);
      this.eventClose();
    }

    this.lbTime.string = this.totalTime;
  },
  showMoneyWin: function showMoneyWin() {
    var moneyWin = 0;

    for (var i = 0; i < this._data.length; i++) {
      moneyWin += this._data[i];
    }

    this.resultWin.active = true;
    Helper.numberTo(this.lbTotalWin, 0, moneyWin, 1200, true);
    this.scheduleOnce(function () {
      this.eventClose();
    }, 3);
  },
  eventSelect: function eventSelect(event, data) {
    var self = this;

    if (this.totalSelect > 0) {
      this.totalSelect--;

      if (this._data[this.totalSelect] > 0) {
        event.target.getChildByName("lb_money").active = true;
        event.target.getChildByName("Vampire-BonusGame-1-1").getComponent(sp.Skeleton).setAnimation(0, "Attack", false);
        event.target.getChildByName("Vampire-BonusGame-1-1").getComponent(sp.Skeleton).setCompleteListener(function (trackEntry, loopCount) {
          Helper.numberTo(event.target.getChildByName("lb_money").getComponent(cc.Label), 0, self._data[self.totalSelect], 1200, true);
        });
      }

      var moneyWin = 0;

      for (var i = this._data.length - 1; i > this.totalSelect; i--) {
        moneyWin += this._data[i];
      }

      Helper.numberTo(this.lbMoneyWin, 0, moneyWin, 1200, true);
      this.lbLuotBoc.string = this.totalSelect;

      if (this.totalSelect == 0) {
        this.showMoneyWin();
      }
    }
  },
  eventClose: function eventClose() {
    this.back();
  }
});

cc._RF.pop();
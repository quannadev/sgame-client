"use strict";
cc._RF.push(module, 'f9e8bpyjAVNmoOJW0dkn31Q', 'UIZeusBonus');
// scripts/zeus/UIZeusBonus.js

"use strict";

var Helper = require("Helper");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbTime: cc.Label,
    lbMoneyWin: cc.Label,
    lbTotalWin: cc.Label,
    specialSelect: cc.Node,
    resultWin: cc.Node,
    totalMoneyWin: 0,
    totalSelect: 0,
    totalTime: 15,
    listItemX: {
      type: cc.Node,
      "default": []
    },
    listXSpecial: {
      type: cc.SpriteFrame,
      "default": []
    },
    gifts: [],
    xSpecial: 0
  },
  onEnable: function onEnable() {
    this.gifts = this._data.gifts;
    this.xSpecial = this._data.xSpecial;
    this.totalTime = 20;
    this.totalMoneyWin = 0;
    this.specialSelect.active = false;
    this.resultWin.active = false;
    this.totalSelect = this.gifts.length;
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
    this.scheduleOnce(function () {
      this.specialSelect.active = true;
      Promise.all(this.listItemX.map(function (itemX, index) {
        itemX.active = true;
      }));
    }, 1);
  },
  eventSelect: function eventSelect(event, data) {
    if (this.totalSelect > 0) {
      this.totalSelect--;

      if (this.gifts[this.totalSelect] > 0) {
        event.target.getChildByName("lb_money").active = true;
        event.target.getChildByName("Zeus-BonusGame").getComponent(sp.Skeleton).setAnimation(0, "Attack", false);
        var lastMoney = this.totalMoneyWin;
        this.totalMoneyWin += this.gifts[this.totalSelect];
        Helper.numberTo(event.target.getChildByName("lb_money").getComponent(cc.Label), 0, this.gifts[this.totalSelect], 1200, true);
        Helper.numberTo(this.lbMoneyWin, lastMoney, this.totalMoneyWin, 1200, true);
      } else {
        event.target.getChildByName("Zeus-BonusGame").getComponent(sp.Skeleton).setAnimation(0, "Idle-Miss", false);
      }

      if (this.totalSelect == 0) {
        this.showMoneyWin();
      }
    }
  },
  eventClose: function eventClose() {
    this.back();
  },
  eventSelectSpecial: function eventSelectSpecial(event, data) {
    var self = this;
    var pos = parseInt(data);
    this.listItemX[pos].getComponent(sp.Skeleton).setAnimation(0, "Attack", false);
    this.listItemX[pos].getComponent(sp.Skeleton).setCompleteListener(function (trackEntry, loopCount) {
      var xSpecialItem = self.listItemX[pos].getChildByName("xSpecial");
      xSpecialItem.active = true;
      xSpecialItem.getComponent(cc.Sprite).spriteFrame = self.listXSpecial[self.xSpecial - 1];
      self.scheduleOnce(function () {
        Promise.all(this.listItemX.map(function (itemX, index) {
          itemX.active = false;
        }));
        Helper.numberTo(self.lbTotalWin, 0, self._data.total, 500, true);
        self.resultWin.active = true;
        self.scheduleOnce(function () {
          self.eventClose();
        }, 2);
      }, 2);
    });
    self.scheduleOnce(function () {
      var _loop = function _loop(i) {
        if (i != pos) {
          self.listItemX[i].getComponent(sp.Skeleton).setAnimation(0, "Attack", false);
          self.listItemX[i].getComponent(sp.Skeleton).setCompleteListener(function (trackEntry, loopCount) {
            var xSpecialNew = self.listItemX[i].getChildByName("xSpecial");
            xSpecialNew.active = true;
            var ranPos = Math.floor(Math.random() * 5);
            xSpecialNew.getComponent(cc.Sprite).spriteFrame = self.listXSpecial[ranPos];
          });
        }
      };

      for (var i = 0; i < self.listItemX.length; i++) {
        _loop(i);
      }
    }, 0.5);
  }
});

cc._RF.pop();
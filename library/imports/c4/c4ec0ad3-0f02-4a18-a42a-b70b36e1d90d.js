"use strict";
cc._RF.push(module, 'c4ec0rTDwJKGKQqtws24dkN', 'UISinbadBonus');
// scripts/sinbad/UISinbadBonus.js

"use strict";

var Helper = require("Helper");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    character: sp.Skeleton,
    lbHeSoNhan: cc.Label,
    lbTime: cc.Label,
    lbLuotBoc: cc.Label,
    lbMoneyWin: cc.Label,
    totalSelect: 0,
    totalTime: 15,
    resultBonus: cc.Node,
    vongTronNode: cc.Node
  },
  onEnable: function onEnable() {
    this.totalTime = 30;
    this.totalSelect = this._data.length; // this.lbHeSoNhan.string  = "x"+Math.floor(Math.random()*30);

    this.lbLuotBoc.string = this.totalSelect;
    this.lbTime.string = this.totalTime;
    this.schedule(this.countTime, 1);
    var quay = cc.rotateBy(20, 360);
    this.actionQuay = quay.repeatForever();
    this.vongTronNode.runAction(this.actionQuay);
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
    var self = this;
    self.resultBonus.active = true;
    var moneyWin = 0;

    for (var i = 0; i < this._data.length; i++) {
      moneyWin += this._data[i];
    }

    this.lbMoneyWin.node.active = true;
    Helper.numberTo(this.lbMoneyWin, 0, moneyWin, 1200, true, function () {
      setTimeout(function () {
        self.eventClose();
      }, 2000);
    });
  },
  eventSelect: function eventSelect(event, data) {
    if (event.target.getChildByName("dauhoi").active) {
      if (this.totalSelect > 0) {
        var idle = this.character.setAnimation(0, "PhiTieu", false);
        this.character.setTrackCompleteListener(idle, function () {
          this.vongTronNode.stopAction(this.actionQuay);
          this.totalSelect--;

          if (this._data[this.totalSelect] > 0) {
            event.target.getChildByName("lb_money").active = true;
            event.target.getChildByName("dauhoi").active = false;
            event.target.getChildByName("truot").active = false;
            this.character.setAnimation(0, "Thang", false);
            Helper.numberTo(event.target.getChildByName("lb_money").getComponent(cc.Label), 0, this._data[this.totalSelect], 1300, true, function () {
              this.vongTronNode.runAction(this.actionQuay);
            }.bind(this));
          } else {
            event.target.getChildByName("dauhoi").active = false;
            event.target.getChildByName("truot").active = true;
            this.character.setAnimation(0, "Idle", false);
            this.vongTronNode.runAction(this.actionQuay);
          }

          this.lbLuotBoc.string = this.totalSelect;

          if (this.totalSelect == 0) {
            this.showMoneyWin();
          }
        }.bind(this));
      }
    }
  },
  eventClose: function eventClose() {
    this.back();
  }
});

cc._RF.pop();
"use strict";
cc._RF.push(module, '58b69emvVtCYYFPfXmaEGra', 'HuLobby');
// scripts/components/HuLobby.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    content: cc.Node,
    betLevel: "1l"
  },
  onLoad: function onLoad() {
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  updateJackpot: function updateJackpot() {
    for (var i = 0; i < this.content._children.length; i++) {
      var game = this.content._children[i];
      var key = game.name + this.betLevel;

      if (SmartFoxSDK.PortalController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable(key);

        if (variableJackpot) {
          var lb_hu = game.getChildByName("lb_money").getComponent(cc.Label);
          var jackpot = variableJackpot.value;
          var current_lb_jackpot = lb_hu.string;
          current_lb_jackpot = current_lb_jackpot.split(".").join("");
          var currentHu = parseFloat(current_lb_jackpot);
          Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
        }
      }
    }
  },
  eventToggleBetMoney: function eventToggleBetMoney(event) {
    this.betLevel = event.node.name;
    this.updateJackpot();
    mm.audio.playButton();
  }
});

cc._RF.pop();
"use strict";
cc._RF.push(module, '68a77TTRL1Jr6sFN6WXGsGU', 'UIZeusLobby');
// scripts/zeus/UIZeusLobby.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lbSoDu: cc.Label,
    arr_lb_hu: {
      type: cc.Label,
      "default": []
    }
  },
  onLoad: function onLoad() {
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  onEnable: function onEnable() {
    this.lbSoDu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf));
  },
  updateJackpot: function updateJackpot() {
    var keys = ["zeus1l", "zeus1k", "zeus10k"];

    for (var i = 0; i < keys.length; i++) {
      var variableJackpot = SmartFoxSDK.ZeusController.ZoneInstance.mySelf.getVariable(keys[i]);

      if (variableJackpot) {
        var jackpot = variableJackpot.value;
        var lb_hu = this.arr_lb_hu[i];
        var current_lb_jackpot = lb_hu.string;
        current_lb_jackpot = current_lb_jackpot.split(".").join("");
        var currentHu = parseFloat(current_lb_jackpot);
        Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
      }
    }
  },
  eventPlayGame: function eventPlayGame(event, customData) {
    cc.betLevel = customData;
    mm.Loading.show();
    this.show("UIZeus", {
      pop: true,
      src: "zeus"
    });
  },
  eventBack: function eventBack() {
    var room = SmartFoxSDK.ZeusController.ZoneInstance.getRoomByName("zeus");

    if (room) {
      SmartFoxSDK.ZeusController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.show('UIHome');
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    this.lbSoDu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) - subChip);
  }
});

cc._RF.pop();
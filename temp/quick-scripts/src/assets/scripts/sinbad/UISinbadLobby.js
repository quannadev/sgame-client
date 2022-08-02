"use strict";
cc._RF.push(module, '4921eyuWttMwad/CmxtoYog', 'UISinbadLobby');
// scripts/sinbad/UISinbadLobby.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    arr_lb_hu: {
      type: cc.Label,
      "default": []
    },
    lb_sodu: cc.Label
  },
  onLoad: function onLoad() {
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  onEnable: function onEnable() {
    this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf));
  },
  updateJackpot: function updateJackpot() {
    var keys = ["sinbad1l", "sinbad1k", "sinbad10k"];

    for (var i = 0; i < keys.length; i++) {
      if (SmartFoxSDK.SinbadController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.SinbadController.ZoneInstance.mySelf.getVariable(keys[i]);

        if (variableJackpot) {
          var jackpot = variableJackpot.value;
          var lb_hu = this.arr_lb_hu[i];
          var current_lb_jackpot = lb_hu.string;
          current_lb_jackpot = current_lb_jackpot.split(".").join("");
          var currentHu = parseFloat(current_lb_jackpot);
          Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
        }
      }
    }
  },
  eventPlayGame: function eventPlayGame(event, customData) {
    cc.betLevel = customData;
    mm.Loading.show();
    this.show("UISinbad", {
      pop: true,
      src: "sinbad"
    });
  },
  eventSetting: function eventSetting() {},
  back: function back() {
    var room = SmartFoxSDK.SinbadController.ZoneInstance.getRoomByName("sinbad");

    if (room) {
      SmartFoxSDK.SinbadController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.show('UIHome');
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) - subChip);
  }
});

cc._RF.pop();
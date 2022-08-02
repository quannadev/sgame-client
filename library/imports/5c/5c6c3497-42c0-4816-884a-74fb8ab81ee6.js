"use strict";
cc._RF.push(module, '5c6c3SXQsBIFohKdPuKuB7m', 'UIVampireLobby');
// scripts/vampire/UIVampireLobby.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    arr_lb_hu: {
      type: cc.Label,
      "default": []
    }
  },
  onLoad: function onLoad() {
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  updateJackpot: function updateJackpot() {
    var keys = ["vampire1l", "vampire1k", "vampire10k"];

    for (var i = 0; i < keys.length; i++) {
      if (SmartFoxSDK.VampireController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(keys[i]);

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
    this.show("UIVampire", {
      pop: true,
      src: "vampire"
    });
  },
  eventSetting: function eventSetting() {},
  back: function back() {
    var room = SmartFoxSDK.VampireController.ZoneInstance.getRoomByName("vampire");

    if (room) {
      SmartFoxSDK.VampireController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.show('UIHome');
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {}
});

cc._RF.pop();
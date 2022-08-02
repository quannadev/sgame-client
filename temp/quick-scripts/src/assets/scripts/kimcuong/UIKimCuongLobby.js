"use strict";
cc._RF.push(module, 'd91e3NpUr5Bxav9jYlxjD5u', 'UIKimCuongLobby');
// scripts/kimcuong/UIKimCuongLobby.js

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
    var keys = ["kimcuong1l", "kimcuong1k", "kimcuong10k"];

    for (var i = 0; i < keys.length; i++) {
      if (SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.KimCuongController.ZoneInstance.mySelf.getVariable(keys[i]);

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
    this.show("UIKimCuong", {
      pop: true,
      src: "kimcuong"
    });
  },
  eventSetting: function eventSetting() {},
  back: function back() {
    var room = SmartFoxSDK.KimCuongController.ZoneInstance.getRoomByName("kimcuong");

    if (room) {
      SmartFoxSDK.KimCuongController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.show('UIHome');
    }
  }
});

cc._RF.pop();
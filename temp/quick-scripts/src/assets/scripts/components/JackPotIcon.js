"use strict";
cc._RF.push(module, '3b47dtdF61EAYm1JNHgq0UZ', 'JackPotIcon');
// scripts/components/JackPotIcon.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    arr_lb_hu: {
      type: cc.Label,
      "default": []
    },
    game: "kimcuong"
  },
  onLoad: function onLoad() {
    var random = Math.floor(Math.random() * 3) + 1;
    this.schedule(this.updateJackpot, random);
    this.updateJackpot();
  },
  updateJackpot: function updateJackpot() {
    var prefixkeys = ["1l", "1k", "10k"];
    var keys = [];

    for (var i = 0; i < prefixkeys.length; i++) {
      keys[i] = this.game + prefixkeys[i];
    }

    for (var _i = 0; _i < keys.length; _i++) {
      var random = Math.floor(Math.random() * 2);

      if (SmartFoxSDK.PortalController.ZoneInstance.mySelf && random == 0) {
        var variableJackpot = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable(keys[_i]);

        if (variableJackpot) {
          var jackpot = variableJackpot.value;
          var lb_hu = this.arr_lb_hu[_i];
          var current_lb_jackpot = lb_hu.string;
          current_lb_jackpot = current_lb_jackpot.split(".").join("");
          var currentHu = parseFloat(current_lb_jackpot);
          Utils.numberTo(lb_hu, currentHu, jackpot, 1000, true);
        }
      }
    }
  }
});

cc._RF.pop();
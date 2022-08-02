"use strict";
cc._RF.push(module, '840b07WWMtDgKSV7eaNVymK', 'UIProfile');
// scripts/portal/UIProfile.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    username: cc.Label,
    displayName: cc.Label,
    money: cc.Label
  },
  onEnable: function onEnable() {
    this.username.string = SmartFoxSDK.PortalController.ZoneInstance.mySelf.name;
    this.displayName.string = GameVariables.getDisplayName(SmartFoxSDK.PortalController.ZoneInstance.mySelf);
    this.money.string = Utils.addDotToNumber(GameVariables.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf));

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  eventChangePassword: function eventChangePassword(event) {
    mm.audio.playButton();
    this.show("UIChangePassword", {
      pop: true,
      src: 'portal'
    });
  },
  eventClose: function eventClose() {
    this.back();
    mm.audio.playButton();
  }
});

cc._RF.pop();
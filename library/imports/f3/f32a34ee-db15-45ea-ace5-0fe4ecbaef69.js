"use strict";
cc._RF.push(module, 'f32a3Tu2xVF6qzlD+Tsuu9p', 'SystemMessage');
// scripts/components/SystemMessage.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    message: cc.RichText,
    isRunning: false
  },
  onEnable: function onEnable() {
    // this.runMessage("Mua game liên hệ telegram: @mrteoem");
    this.messageBoxWidth = this.node.width;

    if (SmartFoxSDK.PortalController.ZoneInstance.mySelf) {
      var msg = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable("sysmsg");

      if (msg && msg.value) {
        this.runMessage(msg.value);
      }
    } else {
      this.runMessage("Chào mừng các bạn đến với cổng game Smart Fox! Cổng game quốc tế dành cho người Việt");
    }
  },
  runMessage: function runMessage(msg) {
    if (msg.length > 0 && !this.isRunning) {
      this.isRunning = true;
      var messageBoxWidth = this.node.width;
      this.message.node.stopAllActions();
      this.message.string = msg;
      this.message.node.x = messageBoxWidth;
      var moveWidth = messageBoxWidth + this.message.node.width;
      var duration = moveWidth / 100.0;
      var self = this;
      this.message.node.runAction(cc.repeatForever(new cc.sequence(cc.moveTo(duration, cc.v2(-moveWidth, 0)), cc.callFunc(function () {
        self.message.node.x = messageBoxWidth;
        self.isRunning = false;
      }))));
    }
  }
});

cc._RF.pop();
"use strict";
cc._RF.push(module, '1daf1TMa/RH14YEUuQ9IzmW', 'UITaiXiuTanLoc');
// scripts/taixiu/UITaiXiuTanLoc.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    edtTanLoc: cc.EditBox,
    tanLoc: cc.Node
  },
  onEnable: function onEnable() {
    this.edtTanLoc.string = "0";
    this.tanLoc.active = false;

    if (this.node.zIndex <= cc.lastZIndex) {
      cc.lastZIndex += 1;
      this.node.zIndex = cc.lastZIndex;
    }
  },
  eventClose: function eventClose() {
    this.back();
  },
  eventBetLoc: function eventBetLoc(event, data) {
    this.edtTanLoc.string = data;
  },
  eventTanLoc: function eventTanLoc() {
    var chip = this.edtTanLoc.string;
    chip = parseInt(chip);

    if (chip > 0) {
      var betRequest = new TaiXiuRequest.TanLocRequest();
      betRequest.setChip(chip);
      SmartFoxSDK.TaiXiuController.ZoneInstance.send(betRequest.toSRequest());
    } else {
      this.showToast("Tiền tán lộc phải lớn hơn 0");
    }
  },
  tanLocRes: function tanLocRes(tanLocInfo) {
    if (tanLocInfo.mesTan == null) {
      this.showToast("Tán lộc thành công.\n" + "Chúc bạn may mắn");
    } else {
      this.showToast(tanLocInfo.mesTan);
    }
  },
  showToast: function showToast(message) {
    this.tanLoc.active = true;
    this.tanLoc.getChildByName("lbNoti").getComponent(cc.Label).string = message;
    this.scheduleOnce(function () {
      this.tanLoc.active = false;
    }, 2);
  }
});

cc._RF.pop();
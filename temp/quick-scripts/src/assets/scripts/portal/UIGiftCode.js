"use strict";
cc._RF.push(module, 'a8cf0sM+3ND6apFBWLLFcpM', 'UIGiftCode');
// scripts/portal/UIGiftCode.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    edit_gc: cc.EditBox
  },
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  eventSend: function eventSend() {
    mm.audio.playButton();

    if (this.edit_gc.string == "") {
      mm.Toast.showToast(1, "GiftCode không được trống");
      return;
    }

    var request = new CasinoRequest.GiftCodeRequest();
    request.setGiftCode(this.edit_gc.string);
    SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());
    mm.Loading.show();
  },
  eventClose: function eventClose() {
    this.back();
    mm.audio.playButton();
  }
});

cc._RF.pop();
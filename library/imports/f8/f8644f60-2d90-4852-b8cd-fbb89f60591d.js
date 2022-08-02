"use strict";
cc._RF.push(module, 'f86449gLZBIUrjN+7ifYFkd', 'UIChangePassword');
// scripts/portal/UIChangePassword.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    register_pass: cc.EditBox,
    register_pass_again: cc.EditBox
  },
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  clickChangePassword: function clickChangePassword(event) {
    mm.audio.playButton();

    if (this.register_pass.string == "") {
      mm.Toast.showToast(1, "Mật khẩu không được trống");
      return;
    }

    if (this.register_pass.string != this.register_pass_again.string) {
      mm.Toast.showToast(1, "Mật khẩu không khớp");
      return;
    }

    if (this.register_pass.string.length < 6) {
      mm.Toast.showToast(1, "Mật khẩu nhỏ hơn 6 kí tự");
      return;
    }

    var request = new CasinoRequest.ChangePassRequest();
    request.setNewPassword(this.register_pass.string);
    SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());
  },
  eventClose: function eventClose() {
    this.back();
    mm.audio.playButton();
  }
});

cc._RF.pop();
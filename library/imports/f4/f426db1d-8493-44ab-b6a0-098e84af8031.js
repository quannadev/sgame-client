"use strict";
cc._RF.push(module, 'f426dsdhJNEq7agCY6Er4Ax', 'UILogin');
// scripts/ui/UILogin.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    Login: cc.Node,
    login_username: cc.EditBox,
    login_pass: cc.EditBox
  },
  onEnable: function onEnable() {
    this.login_username.string = Config.getUsername();
    this.login_pass.string = Config.getPass();
  },
  clickLogin: function clickLogin() {
    mm.audio.playButton();

    if (this.login_username.string == "") {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Tên đăng nhập không được trống");
      return;
    }

    if (this.login_pass.string == "") {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Mật khẩu không được trống");
      return;
    }

    mm.Loading.show();
    var un = this.login_username.string;
    var pass = this.login_pass.string;
    SmartFoxSDK.PortalController.loginZone(un, pass);
    Config.saveUsername(un);
    Config.savePass(pass);
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  }
});

cc._RF.pop();
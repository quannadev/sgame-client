"use strict";
cc._RF.push(module, 'cce15CVz1BEWr7q5ojTTbkj', 'PortalMenu');
// scripts/portal/PortalMenu.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {},
  onClickMenu: function onClickMenu() {
    mm.audio.playButton();
    this.show("UIMenu", {
      pop: true,
      src: "portal"
    });
  },
  onClickPayment: function onClickPayment() {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show('UIPayment', {
        pop: true,
        src: 'portal',
        data: {
          nickname: null,
          area: 'ja'
        }
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickTelegram: function onClickTelegram() {
    mm.audio.playButton();
    cc.sys.openURL("https://t.me/cskh");
  },
  onClickGiftCode: function onClickGiftCode() {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show('UIGiftCode', {
        pop: true,
        src: 'portal'
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickDaiLy: function onClickDaiLy() {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show("UIDaiLy", {
        pop: true,
        src: 'portal'
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickChuyenkhoan: function onClickChuyenkhoan() {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show('UIPayment', {
        pop: true,
        src: 'portal',
        data: {
          nickname: null,
          area: 'ja'
        }
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickProfile: function onClickProfile(event) {
    mm.audio.playButton();

    if (mm.isLogin) {
      this.show("UIProfile", {
        pop: true,
        src: 'portal'
      });
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  onClickGroup: function onClickGroup() {
    mm.audio.playButton();
    cc.sys.openURL("https://www.facebook.com");
  },
  onClickFacebook: function onClickFacebook() {
    mm.audio.playButton();
    cc.sys.openURL("https://www.facebook.com");
  },
  onClickEvent: function onClickEvent() {
    this.show("UITaiXiuDuaTop", {
      pop: true,
      src: 'taixiu',
      data: "TheLe"
    });
  }
});

cc._RF.pop();
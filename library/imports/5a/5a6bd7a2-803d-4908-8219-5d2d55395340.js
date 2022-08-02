"use strict";
cc._RF.push(module, '5a6bdeigD1JCIIZXS1VOVNA', 'UIMenu');
// scripts/portal/UIMenu.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    toggleMusic: cc.Toggle,
    toggleSound: cc.Toggle,
    _keyMusic: "smart_fox_music",
    _keySound: "smart_fox_sound"
  },
  onEnable: function onEnable() {
    this.initSound();

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  clickLSGD: function clickLSGD(event) {
    mm.audio.playButton();
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());
  },
  clickBaoMat: function clickBaoMat(event) {
    mm.audio.playButton();
    this.show('UIBaoMatOTP', {
      pop: true,
      src: 'portal'
    });
  },
  clickHoTro: function clickHoTro(event) {
    mm.audio.playButton();
    cc.sys.openURL("https://t.me/cskh");
  },
  initSound: function initSound() {
    var musicSave = cc.sys.localStorage.getItem(this._keyMusic);

    if (musicSave != null) {
      this._musicState = parseInt(musicSave);
    } else {
      this._musicState = 1;
      cc.sys.localStorage.setItem(this._keyMusic, "1");
    }

    var soundSave = cc.sys.localStorage.getItem(this._keySound);

    if (soundSave != null) {
      this._soundState = parseInt(soundSave);
    } else {
      this._soundState = 1;
      cc.sys.localStorage.setItem(this._keySound, "1");
    }

    mm.audio.playMusic();
    this.toggleMusic.isChecked = this._musicState == 0;
    this.toggleSound.isChecked = this._soundState == 0;
  },
  eventMusic: function eventMusic() {
    this._musicState = this.toggleMusic.isChecked ? 0 : 1;
    cc.sys.localStorage.setItem(this._keyMusic, this._musicState);
    mm.audio.playMusic();
  },
  eventSound: function eventSound() {
    this._soundState = this.toggleSound.isChecked ? 0 : 1;
    cc.sys.localStorage.setItem(this._keySound, this._soundState);
  }
});

cc._RF.pop();
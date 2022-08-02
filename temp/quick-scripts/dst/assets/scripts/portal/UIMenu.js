
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/UIMenu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxVSU1lbnUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidG9nZ2xlTXVzaWMiLCJUb2dnbGUiLCJ0b2dnbGVTb3VuZCIsIl9rZXlNdXNpYyIsIl9rZXlTb3VuZCIsIm9uRW5hYmxlIiwiaW5pdFNvdW5kIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJjbGlja0xTR0QiLCJldmVudCIsIm1tIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwicmVxdWVzdCIsIkNhc2lub1JlcXVlc3QiLCJIaXN0b3J5UmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiUG9ydGFsQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsInNlbmQiLCJ0b1NSZXF1ZXN0IiwiY2xpY2tCYW9NYXQiLCJzaG93IiwicG9wIiwic3JjIiwiY2xpY2tIb1RybyIsInN5cyIsIm9wZW5VUkwiLCJtdXNpY1NhdmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX211c2ljU3RhdGUiLCJwYXJzZUludCIsInNldEl0ZW0iLCJzb3VuZFNhdmUiLCJfc291bmRTdGF0ZSIsInBsYXlNdXNpYyIsImlzQ2hlY2tlZCIsImV2ZW50TXVzaWMiLCJldmVudFNvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRUosRUFBRSxDQUFDSyxNQURSO0FBRVJDLElBQUFBLFdBQVcsRUFBRU4sRUFBRSxDQUFDSyxNQUZSO0FBR1JFLElBQUFBLFNBQVMsRUFBRSxpQkFISDtBQUlSQyxJQUFBQSxTQUFTLEVBQUU7QUFKSCxHQUhQO0FBU0xDLEVBQUFBLFFBVEssc0JBU0s7QUFDTixTQUFLQyxTQUFMOztBQUNBLFFBQUksS0FBS0MsSUFB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K0IsQ0FBbEQ7QUFDQTNDLElBQUFBLEVBQUUsQ0FBQ2dDLEdBQUgsQ0FBT0csWUFBUCxDQUFvQkksT0FBcEIsQ0FBNEIsS0FBSy9CLFNBQWpDLEVBQTZDLEtBQUtpQyxXQUFsRDtBQUNIO0FBeERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHRvZ2dsZU11c2ljOiBjYy5Ub2dnbGUsXHJcbiAgICAgICAgdG9nZ2xlU291bmQ6IGNjLlRvZ2dsZSxcclxuICAgICAgICBfa2V5TXVzaWM6IFwic21hcnRfZm94X211c2ljXCIsXHJcbiAgICAgICAgX2tleVNvdW5kOiBcInNtYXJ0X2ZveF9zb3VuZFwiLFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgdGhpcy5pbml0U291bmQoKTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnpJbmRleCA8PSBjYy5sYXN0WkluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLmxhc3RaSW5kZXgrMTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xpY2tMU0dEKGV2ZW50KXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5IaXN0b3J5UmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGNsaWNrQmFvTWF0KGV2ZW50KXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5zaG93KCdVSUJhb01hdE9UUCcsIHtwb3A6IHRydWUsIHNyYzogJ3BvcnRhbCd9KTtcclxuICAgIH0sXHJcbiAgICBjbGlja0hvVHJvKGV2ZW50KXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL3QubWUvY3NraFwiKTtcclxuICAgIH0sXHJcbiAgICBpbml0U291bmQoKSB7XHJcbiAgICAgICAgdmFyIG11c2ljU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9rZXlNdXNpYyk7XHJcbiAgICAgICAgaWYgKG11c2ljU2F2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljU3RhdGUgPSBwYXJzZUludChtdXNpY1NhdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljU3RhdGUgPSAxO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5TXVzaWMsIFwiMVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzb3VuZFNhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fa2V5U291bmQpO1xyXG4gICAgICAgIGlmIChzb3VuZFNhdmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFN0YXRlID0gMTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleVNvdW5kLCBcIjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlNdXNpYygpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID0gdGhpcy5fbXVzaWNTdGF0ZT09MDtcclxuICAgICAgICB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZCA9IHRoaXMuX3NvdW5kU3RhdGU9PTA7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRNdXNpYygpIHtcclxuICAgICAgICB0aGlzLl9tdXNpY1N0YXRlICAgICAgICAgPSB0aGlzLnRvZ2dsZU11c2ljLmlzQ2hlY2tlZD8gMDogMTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5TXVzaWMsICB0aGlzLl9tdXNpY1N0YXRlKTtcclxuICAgICAgICBtbS5hdWRpby5wbGF5TXVzaWMoKTtcclxuICAgIH0sXHJcbiAgICBldmVudFNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuX3NvdW5kU3RhdGUgPSB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZD8gMDogMTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5U291bmQsICB0aGlzLl9zb3VuZFN0YXRlKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
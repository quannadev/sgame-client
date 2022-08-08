
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BvcnRhbC9VSU1lbnUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidG9nZ2xlTXVzaWMiLCJUb2dnbGUiLCJ0b2dnbGVTb3VuZCIsIl9rZXlNdXNpYyIsIl9rZXlTb3VuZCIsIm9uRW5hYmxlIiwiaW5pdFNvdW5kIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJjbGlja0xTR0QiLCJldmVudCIsIm1tIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwicmVxdWVzdCIsIkNhc2lub1JlcXVlc3QiLCJIaXN0b3J5UmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiUG9ydGFsQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsInNlbmQiLCJ0b1NSZXF1ZXN0IiwiY2xpY2tCYW9NYXQiLCJzaG93IiwicG9wIiwic3JjIiwiY2xpY2tIb1RybyIsInN5cyIsIm9wZW5VUkwiLCJtdXNpY1NhdmUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiX211c2ljU3RhdGUiLCJwYXJzZUludCIsInNldEl0ZW0iLCJzb3VuZFNhdmUiLCJfc291bmRTdGF0ZSIsInBsYXlNdXNpYyIsImlzQ2hlY2tlZCIsImV2ZW50TXVzaWMiLCJldmVudFNvdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRUosRUFBRSxDQUFDSyxNQURSO0FBRVJDLElBQUFBLFdBQVcsRUFBRU4sRUFBRSxDQUFDSyxNQUZSO0FBR1JFLElBQUFBLFNBQVMsRUFBRSxpQkFISDtBQUlSQyxJQUFBQSxTQUFTLEVBQUU7QUFKSCxHQUhQO0FBU0xDLEVBQUFBLFFBVEssc0JBU0s7QUFDTixTQUFLQyxTQUFMOztBQUNBLFFBQUksS0FBS0MsSUFBTCxD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Q0FBbEQ7QUFDQTNDLElBQUFBLEVBQUUsQ0FBQ2dDLEdBQUgsQ0FBT0csWUFBUCxDQUFvQkksT0FBcEIsQ0FBNEIsS0FBSy9CLFNBQWpDLEVBQTZDLEtBQUtpQyxXQUFsRDtBQUNIO0FBeERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICB0b2dnbGVNdXNpYzogY2MuVG9nZ2xlLFxuICAgICAgICB0b2dnbGVTb3VuZDogY2MuVG9nZ2xlLFxuICAgICAgICBfa2V5TXVzaWM6IFwic21hcnRfZm94X211c2ljXCIsXG4gICAgICAgIF9rZXlTb3VuZDogXCJzbWFydF9mb3hfc291bmRcIixcbiAgICB9LFxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKCk7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLmxhc3RaSW5kZXgrMTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgY2xpY2tMU0dEKGV2ZW50KXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0Lkhpc3RvcnlSZXF1ZXN0KCk7XG4gICAgICAgIFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xuICAgIH0sXG4gICAgY2xpY2tCYW9NYXQoZXZlbnQpe1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuc2hvdygnVUlCYW9NYXRPVFAnLCB7cG9wOiB0cnVlLCBzcmM6ICdwb3J0YWwnfSk7XG4gICAgfSxcbiAgICBjbGlja0hvVHJvKGV2ZW50KXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBjYy5zeXMub3BlblVSTChcImh0dHBzOi8vdC5tZS9jc2toXCIpO1xuICAgIH0sXG4gICAgaW5pdFNvdW5kKCkge1xuICAgICAgICB2YXIgbXVzaWNTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX2tleU11c2ljKTtcbiAgICAgICAgaWYgKG11c2ljU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9tdXNpY1N0YXRlID0gcGFyc2VJbnQobXVzaWNTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX211c2ljU3RhdGUgPSAxO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleU11c2ljLCBcIjFcIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc291bmRTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX2tleVNvdW5kKTtcbiAgICAgICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kU3RhdGUgPSAxO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleVNvdW5kLCBcIjFcIik7XG4gICAgICAgIH1cbiAgICAgICAgbW0uYXVkaW8ucGxheU11c2ljKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkID0gdGhpcy5fbXVzaWNTdGF0ZT09MDtcbiAgICAgICAgdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQgPSB0aGlzLl9zb3VuZFN0YXRlPT0wO1xuICAgIH0sXG4gICAgZXZlbnRNdXNpYygpIHtcbiAgICAgICAgdGhpcy5fbXVzaWNTdGF0ZSAgICAgICAgID0gdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQ/IDA6IDE7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlNdXNpYywgIHRoaXMuX211c2ljU3RhdGUpO1xuICAgICAgICBtbS5hdWRpby5wbGF5TXVzaWMoKTtcbiAgICB9LFxuICAgIGV2ZW50U291bmQoKSB7XG4gICAgICAgIHRoaXMuX3NvdW5kU3RhdGUgPSB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZD8gMDogMTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleVNvdW5kLCAgdGhpcy5fc291bmRTdGF0ZSk7XG4gICAgfSxcbn0pO1xuIl19
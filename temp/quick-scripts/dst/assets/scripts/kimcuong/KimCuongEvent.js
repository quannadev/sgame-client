
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/KimCuongEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b10450FXRFEfadZP6AM2J3S', 'KimCuongEvent');
// scripts/kimcuong/KimCuongEvent.js

"use strict";

var KimCuongEvent = {};
KimCuongEvent.RESPONSE_NAME = {
  RESULT_RES: "vqv2",
  FREE_DAILY_RES: "vqv3",
  MINIMIZE_RES: "vqv4",
  AUTO_PLAY_RES: "vqv5",
  STOP_AUTO_PLAY_RES: "vqv6"
}; // TRUOT = 0;
// THANG = 1;
// THANG_LON = 2;
// NO_HU = 3;
// NO_HU_X2 = 4;
// MINIGAME_SLOT = 5;

KimCuongEvent.ResultEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(KimCuongEvent.RESPONSE_NAME.RESULT_RES);

    this.winMoney = 0;
    this.freeGift = [];
    this.lineWin = [];
    this.result = [];
    this.session = 0;
    this.isFreeSpin = false;
    this.isBonus = false;
    this.freeSpin = 0;
    this.type = 0;
    this.haiSao = "";
    this.ration = 0;
  },
  fromEvent: function fromEvent(event) {
    this.winMoney = event.getDouble("w");
    this.lineWin = event.getIntArray("lw");
    this.result = event.getIntArray("r");
    this.session = event.getDouble("id");
    this.isFreeSpin = event.getBool("fr");
    this.freeSpin = event.getByte("ra");
    this.type = event.getByte("rs");
    this.haiSao = event.getUtfString("hs");

    if (this.type == 2) {
      this.isThangLon = true;
    }

    if (this.type == 3) {
      this.isNohu = true;
    }

    if (this.type == 4) {
      this.isNohuX2 = true;
    }

    if (this.type == 5) {
      this.isBonus = true;

      for (var i = 1; i < this.haiSao.length; i = i + 2) {
        this.freeGift.push(this.haiSao[i]);
      }
    }

    return this;
  }
});
window.KimCuongEvent = module.exports = KimCuongEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXEtpbUN1b25nRXZlbnQuanMiXSwibmFtZXMiOlsiS2ltQ3VvbmdFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJSRVNVTFRfUkVTIiwiRlJFRV9EQUlMWV9SRVMiLCJNSU5JTUlaRV9SRVMiLCJBVVRPX1BMQVlfUkVTIiwiU1RPUF9BVVRPX1BMQVlfUkVTIiwiUmVzdWx0RXZlbnQiLCJDYXNpbm9FdmVudCIsIl9CYXNlRXZlbnQiLCJleHRlbmQiLCJjdG9yIiwiX3N1cGVyIiwid2luTW9uZXkiLCJmcmVlR2lmdCIsImxpbmVXaW4iLCJyZXN1bHQiLCJzZXNzaW9uIiwiaXNGcmVlU3BpbiIsImlzQm9udXMiLCJmcmVlU3BpbiIsInR5cGUiLCJoYWlTYW8iLCJyYXRpb24iLCJmcm9tRXZlbnQiLCJldmVudCIsImdldERvdWJsZSIsImdldEludEFycmF5IiwiZ2V0Qm9vbCIsImdldEJ5dGUiLCJnZXRVdGZTdHJpbmciLCJpc1RoYW5nTG9uIiwiaXNOb2h1IiwiaXNOb2h1WDIiLCJpIiwibGVuZ3RoIiwicHVzaCIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGFBQWEsQ0FBQ0MsYUFBZCxHQUE4QjtBQUMxQkMsRUFBQUEsVUFBVSxFQUFHLE1BRGE7QUFFMUJDLEVBQUFBLGNBQWMsRUFBRSxNQUZVO0FBRzFCQyxFQUFBQSxZQUFZLEVBQUUsTUFIWTtBQUkxQkMsRUFBQUEsYUFBYSxFQUFFLE1BSlc7QUFLMUJDLEVBQUFBLGtCQUFrQixFQUFFO0FBTE0sQ0FBOUIsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FOLGFBQWEsQ0FBQ08sV0FBZCxHQUE0QkMsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUN0REMsRUFBQUEsSUFEc0Qsa0JBQ2hEO0FBQ0YsU0FBS0MsTUFBTCxDQUFZWixhQUFhLENBQUNDLGFBQWQsQ0FBNEJDLFVBQXhDOztBQUNBLFNBQUtXLFFBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsSUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWtCLENBQWxCO0FBQ0gsR0FkcUQ7QUFldERDLEVBQUFBLFNBZnNELHFCQWU1Q0MsS0FmNEMsRUFldEM7QUFDWixTQUFLWixRQUFMLEdBQWtCWSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBbEI7QUFDQSxTQUFLWCxPQUFMLEdBQWtCVSxLQUFLLENBQUNFLFdBQU4sQ0FBa0IsSUFBbEIsQ0FBbEI7QUFDQSxTQUFLWCxNQUFMLEdBQWtCUyxLQUFLLENBQUNFLFdBQU4sQ0FBa0IsR0FBbEIsQ0FBbEI7QUFDQSxTQUFLVixPQUFMLEdBQWtCUSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBbEI7QUFDQSxTQUFLUixVQUFMLEdBQWtCTyxLQUFLLENBQUNHLE9BQU4sQ0FBYyxJQUFkLENBQWxCO0FBQ0EsU0FBS1IsUUFBTCxHQUFrQkssS0FBSyxDQUFDSSxPQUFOLENBQWMsSUFBZCxDQUFsQjtBQUNBLFNBQUtSLElBQUwsR0FBa0JJLEtBQUssQ0FBQ0ksT0FBTixDQUFjLElBQWQsQ0FBbEI7QUFDQSxTQUFLUCxNQUFMLEdBQWtCRyxLQUFLLENBQUNLLFlBQU4sQ0FBbUIsSUFBbkIsQ0FBbEI7O0FBQ0EsUUFBRyxLQUFLVCxJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLVSxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLVixJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLVyxNQUFMLEdBQWMsSUFBZDtBQUNIOztBQUNELFFBQUcsS0FBS1gsSUFBTCxJQUFhLENBQWhCLEVBQWtCO0FBQ2QsV0FBS1ksUUFBTCxHQUFnQixJQUFoQjtBQUNIOztBQUNELFFBQUcsS0FBS1osSUFBTCxJQUFhLENBQWhCLEVBQWtCO0FBQ2QsV0FBS0YsT0FBTCxHQUFlLElBQWY7O0FBQ0EsV0FBSyxJQUFJZSxDQUFDLEdBQUUsQ0FBWixFQUFlQSxDQUFDLEdBQUUsS0FBS1osTUFBTCxDQUFZYSxNQUE5QixFQUFzQ0QsQ0FBQyxHQUFFQSxDQUFDLEdBQUMsQ0FBM0MsRUFBNkM7QUFDekMsYUFBS3BCLFFBQUwsQ0FBY3NCLElBQWQsQ0FBbUIsS0FBS2QsTUFBTCxDQUFZWSxDQUFaLENBQW5CO0FBQ0g7QUFDSjs7QUFDRCxXQUFPLElBQVA7QUFDSDtBQXhDcUQsQ0FBOUIsQ0FBNUI7QUEwQ0FHLE1BQU0sQ0FBQ3JDLGFBQVAsR0FBdUJzQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QyxhQUF4QyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEtpbUN1b25nRXZlbnQgPSB7fTtcclxuS2ltQ3VvbmdFdmVudC5SRVNQT05TRV9OQU1FID0ge1xyXG4gICAgUkVTVUxUX1JFUyA6IFwidnF2MlwiLFxyXG4gICAgRlJFRV9EQUlMWV9SRVM6IFwidnF2M1wiLFxyXG4gICAgTUlOSU1JWkVfUkVTOiBcInZxdjRcIixcclxuICAgIEFVVE9fUExBWV9SRVM6IFwidnF2NVwiLFxyXG4gICAgU1RPUF9BVVRPX1BMQVlfUkVTOiBcInZxdjZcIlxyXG59XHJcbi8vIFRSVU9UID0gMDtcclxuLy8gVEhBTkcgPSAxO1xyXG4vLyBUSEFOR19MT04gPSAyO1xyXG4vLyBOT19IVSA9IDM7XHJcbi8vIE5PX0hVX1gyID0gNDtcclxuLy8gTUlOSUdBTUVfU0xPVCA9IDU7XHJcbktpbUN1b25nRXZlbnQuUmVzdWx0RXZlbnQgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoS2ltQ3VvbmdFdmVudC5SRVNQT05TRV9OQU1FLlJFU1VMVF9SRVMpO1xyXG4gICAgICAgIHRoaXMud2luTW9uZXkgICA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmVlR2lmdCAgID0gW107XHJcbiAgICAgICAgdGhpcy5saW5lV2luICAgID0gW107XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgICAgID0gW107XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uICAgID0gMDtcclxuICAgICAgICB0aGlzLmlzRnJlZVNwaW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQm9udXMgICAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZyZWVTcGluICAgPSAwO1xyXG4gICAgICAgIHRoaXMudHlwZSAgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5oYWlTYW8gICAgID0gXCJcIjtcclxuICAgICAgICB0aGlzLnJhdGlvbiAgICAgPSAwO1xyXG4gICAgfSxcclxuICAgIGZyb21FdmVudChldmVudCl7XHJcbiAgICAgICAgdGhpcy53aW5Nb25leSAgID0gZXZlbnQuZ2V0RG91YmxlKFwid1wiKTtcclxuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBldmVudC5nZXRJbnRBcnJheShcImx3XCIpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ICAgICA9IGV2ZW50LmdldEludEFycmF5KFwiclwiKTtcclxuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSBldmVudC5nZXREb3VibGUoXCJpZFwiKTtcclxuICAgICAgICB0aGlzLmlzRnJlZVNwaW4gPSBldmVudC5nZXRCb29sKFwiZnJcIik7XHJcbiAgICAgICAgdGhpcy5mcmVlU3BpbiAgID0gZXZlbnQuZ2V0Qnl0ZShcInJhXCIpO1xyXG4gICAgICAgIHRoaXMudHlwZSAgICAgICA9IGV2ZW50LmdldEJ5dGUoXCJyc1wiKTtcclxuICAgICAgICB0aGlzLmhhaVNhbyAgICAgPSBldmVudC5nZXRVdGZTdHJpbmcoXCJoc1wiKTtcclxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMuaXNUaGFuZ0xvbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAzKXtcclxuICAgICAgICAgICAgdGhpcy5pc05vaHUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gNCl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOb2h1WDIgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gNSl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCb251cyA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPTE7IGk8IHRoaXMuaGFpU2FvLmxlbmd0aDsgaT0gaSsyKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJlZUdpZnQucHVzaCh0aGlzLmhhaVNhb1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG59KTtcclxud2luZG93LktpbUN1b25nRXZlbnQgPSBtb2R1bGUuZXhwb3J0cyA9IEtpbUN1b25nRXZlbnQ7XHJcbiJdfQ==
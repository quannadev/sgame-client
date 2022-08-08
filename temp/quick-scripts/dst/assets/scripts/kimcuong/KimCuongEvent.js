
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL0tpbUN1b25nRXZlbnQuanMiXSwibmFtZXMiOlsiS2ltQ3VvbmdFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJSRVNVTFRfUkVTIiwiRlJFRV9EQUlMWV9SRVMiLCJNSU5JTUlaRV9SRVMiLCJBVVRPX1BMQVlfUkVTIiwiU1RPUF9BVVRPX1BMQVlfUkVTIiwiUmVzdWx0RXZlbnQiLCJDYXNpbm9FdmVudCIsIl9CYXNlRXZlbnQiLCJleHRlbmQiLCJjdG9yIiwiX3N1cGVyIiwid2luTW9uZXkiLCJmcmVlR2lmdCIsImxpbmVXaW4iLCJyZXN1bHQiLCJzZXNzaW9uIiwiaXNGcmVlU3BpbiIsImlzQm9udXMiLCJmcmVlU3BpbiIsInR5cGUiLCJoYWlTYW8iLCJyYXRpb24iLCJmcm9tRXZlbnQiLCJldmVudCIsImdldERvdWJsZSIsImdldEludEFycmF5IiwiZ2V0Qm9vbCIsImdldEJ5dGUiLCJnZXRVdGZTdHJpbmciLCJpc1RoYW5nTG9uIiwiaXNOb2h1IiwiaXNOb2h1WDIiLCJpIiwibGVuZ3RoIiwicHVzaCIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGFBQWEsQ0FBQ0MsYUFBZCxHQUE4QjtBQUMxQkMsRUFBQUEsVUFBVSxFQUFHLE1BRGE7QUFFMUJDLEVBQUFBLGNBQWMsRUFBRSxNQUZVO0FBRzFCQyxFQUFBQSxZQUFZLEVBQUUsTUFIWTtBQUkxQkMsRUFBQUEsYUFBYSxFQUFFLE1BSlc7QUFLMUJDLEVBQUFBLGtCQUFrQixFQUFFO0FBTE0sQ0FBOUIsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FOLGFBQWEsQ0FBQ08sV0FBZCxHQUE0QkMsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUN0REMsRUFBQUEsSUFEc0Qsa0JBQ2hEO0FBQ0YsU0FBS0MsTUFBTCxDQUFZWixhQUFhLENBQUNDLGFBQWQsQ0FBNEJDLFVBQXhDOztBQUNBLFNBQUtXLFFBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsSUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWtCLENBQWxCO0FBQ0gsR0FkcUQ7QUFldERDLEVBQUFBLFNBZnNELHFCQWU1Q0MsS0FmNEMsRUFldEM7QUFDWixTQUFLWixRQUFMLEdBQWtCWSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBbEI7QUFDQSxTQUFLWCxPQUFMLEdBQWtCVSxLQUFLLENBQUNFLFdBQU4sQ0FBa0IsSUFBbEIsQ0FBbEI7QUFDQSxTQUFLWCxNQUFMLEdBQWtCUyxLQUFLLENBQUNFLFdBQU4sQ0FBa0IsR0FBbEIsQ0FBbEI7QUFDQSxTQUFLVixPQUFMLEdBQWtCUSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBbEI7QUFDQSxTQUFLUixVQUFMLEdBQWtCTyxLQUFLLENBQUNHLE9BQU4sQ0FBYyxJQUFkLENBQWxCO0FBQ0EsU0FBS1IsUUFBTCxHQUFrQkssS0FBSyxDQUFDSSxPQUFOLENBQWMsSUFBZCxDQUFsQjtBQUNBLFNBQUtSLElBQUwsR0FBa0JJLEtBQUssQ0FBQ0ksT0FBTixDQUFjLElBQWQsQ0FBbEI7QUFDQSxTQUFLUCxNQUFMLEdBQWtCRyxLQUFLLENBQUNLLFlBQU4sQ0FBbUIsSUFBbkIsQ0FBbEI7O0FBQ0EsUUFBRyxLQUFLVCxJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLVSxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLVixJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLVyxNQUFMLEdBQWMsSUFBZDtBQUNIOztBQUNELFFBQUcsS0FBS1gsSUFBTCxJQUFhLENBQWhCLEVBQWtCO0FBQ2QsV0FBS1ksUUFBTCxHQUFnQixJQUFoQjtBQUNIOztBQUNELFFBQUcsS0FBS1osSUFBTCxJQUFhLENBQWhCLEVBQWtCO0FBQ2QsV0FBS0YsT0FBTCxHQUFlLElBQWY7O0FBQ0EsV0FBSyxJQUFJZSxDQUFDLEdBQUUsQ0FBWixFQUFlQSxDQUFDLEdBQUUsS0FBS1osTUFBTCxDQUFZYSxNQUE5QixFQUFzQ0QsQ0FBQyxHQUFFQSxDQUFDLEdBQUMsQ0FBM0MsRUFBNkM7QUFDekMsYUFBS3BCLFFBQUwsQ0FBY3NCLElBQWQsQ0FBbUIsS0FBS2QsTUFBTCxDQUFZWSxDQUFaLENBQW5CO0FBQ0g7QUFDSjs7QUFDRCxXQUFPLElBQVA7QUFDSDtBQXhDcUQsQ0FBOUIsQ0FBNUI7QUEwQ0FHLE1BQU0sQ0FBQ3JDLGFBQVAsR0FBdUJzQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QyxhQUF4QyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEtpbUN1b25nRXZlbnQgPSB7fTtcbktpbUN1b25nRXZlbnQuUkVTUE9OU0VfTkFNRSA9IHtcbiAgICBSRVNVTFRfUkVTIDogXCJ2cXYyXCIsXG4gICAgRlJFRV9EQUlMWV9SRVM6IFwidnF2M1wiLFxuICAgIE1JTklNSVpFX1JFUzogXCJ2cXY0XCIsXG4gICAgQVVUT19QTEFZX1JFUzogXCJ2cXY1XCIsXG4gICAgU1RPUF9BVVRPX1BMQVlfUkVTOiBcInZxdjZcIlxufVxuLy8gVFJVT1QgPSAwO1xuLy8gVEhBTkcgPSAxO1xuLy8gVEhBTkdfTE9OID0gMjtcbi8vIE5PX0hVID0gMztcbi8vIE5PX0hVX1gyID0gNDtcbi8vIE1JTklHQU1FX1NMT1QgPSA1O1xuS2ltQ3VvbmdFdmVudC5SZXN1bHRFdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKEtpbUN1b25nRXZlbnQuUkVTUE9OU0VfTkFNRS5SRVNVTFRfUkVTKTtcbiAgICAgICAgdGhpcy53aW5Nb25leSAgID0gMDtcbiAgICAgICAgdGhpcy5mcmVlR2lmdCAgID0gW107XG4gICAgICAgIHRoaXMubGluZVdpbiAgICA9IFtdO1xuICAgICAgICB0aGlzLnJlc3VsdCAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5zZXNzaW9uICAgID0gMDtcbiAgICAgICAgdGhpcy5pc0ZyZWVTcGluID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNCb251cyAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLmZyZWVTcGluICAgPSAwO1xuICAgICAgICB0aGlzLnR5cGUgICAgICAgPSAwO1xuICAgICAgICB0aGlzLmhhaVNhbyAgICAgPSBcIlwiO1xuICAgICAgICB0aGlzLnJhdGlvbiAgICAgPSAwO1xuICAgIH0sXG4gICAgZnJvbUV2ZW50KGV2ZW50KXtcbiAgICAgICAgdGhpcy53aW5Nb25leSAgID0gZXZlbnQuZ2V0RG91YmxlKFwid1wiKTtcbiAgICAgICAgdGhpcy5saW5lV2luICAgID0gZXZlbnQuZ2V0SW50QXJyYXkoXCJsd1wiKTtcbiAgICAgICAgdGhpcy5yZXN1bHQgICAgID0gZXZlbnQuZ2V0SW50QXJyYXkoXCJyXCIpO1xuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSBldmVudC5nZXREb3VibGUoXCJpZFwiKTtcbiAgICAgICAgdGhpcy5pc0ZyZWVTcGluID0gZXZlbnQuZ2V0Qm9vbChcImZyXCIpO1xuICAgICAgICB0aGlzLmZyZWVTcGluICAgPSBldmVudC5nZXRCeXRlKFwicmFcIik7XG4gICAgICAgIHRoaXMudHlwZSAgICAgICA9IGV2ZW50LmdldEJ5dGUoXCJyc1wiKTtcbiAgICAgICAgdGhpcy5oYWlTYW8gICAgID0gZXZlbnQuZ2V0VXRmU3RyaW5nKFwiaHNcIik7XG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAyKXtcbiAgICAgICAgICAgIHRoaXMuaXNUaGFuZ0xvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy50eXBlID09IDMpe1xuICAgICAgICAgICAgdGhpcy5pc05vaHUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSA0KXtcbiAgICAgICAgICAgIHRoaXMuaXNOb2h1WDIgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSA1KXtcbiAgICAgICAgICAgIHRoaXMuaXNCb251cyA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0xOyBpPCB0aGlzLmhhaVNhby5sZW5ndGg7IGk9IGkrMil7XG4gICAgICAgICAgICAgICAgdGhpcy5mcmVlR2lmdC5wdXNoKHRoaXMuaGFpU2FvW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxufSk7XG53aW5kb3cuS2ltQ3VvbmdFdmVudCA9IG1vZHVsZS5leHBvcnRzID0gS2ltQ3VvbmdFdmVudDtcbiJdfQ==
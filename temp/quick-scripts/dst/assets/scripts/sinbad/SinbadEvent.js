
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f541eflLUBIeaDZkVLnYZjS', 'SinbadEvent');
// scripts/sinbad/SinbadEvent.js

"use strict";

var SinbadEvent = {};
SinbadEvent.RESPONSE_NAME = {
  RESULT_RES: "sb2",
  FREE_DAILY_RES: "sb3",
  MINIMIZE_RES: "sb4",
  AUTO_PLAY_RES: "sb5",
  STOP_AUTO_PLAY_RES: "sb6"
}; // TRUOT = 0;
// THANG = 1;
// THANG_LON = 2;
// NO_HU = 3;
// NO_HU_X2 = 4;
// MINIGAME_SLOT = 5;

SinbadEvent.ResultEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(SinbadEvent.RESPONSE_NAME.RESULT_RES);

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
window.SinbadEvent = module.exports = SinbadEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxTaW5iYWRFdmVudC5qcyJdLCJuYW1lcyI6WyJTaW5iYWRFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJSRVNVTFRfUkVTIiwiRlJFRV9EQUlMWV9SRVMiLCJNSU5JTUlaRV9SRVMiLCJBVVRPX1BMQVlfUkVTIiwiU1RPUF9BVVRPX1BMQVlfUkVTIiwiUmVzdWx0RXZlbnQiLCJDYXNpbm9FdmVudCIsIl9CYXNlRXZlbnQiLCJleHRlbmQiLCJjdG9yIiwiX3N1cGVyIiwid2luTW9uZXkiLCJmcmVlR2lmdCIsImxpbmVXaW4iLCJyZXN1bHQiLCJzZXNzaW9uIiwiaXNGcmVlU3BpbiIsImlzQm9udXMiLCJmcmVlU3BpbiIsInR5cGUiLCJoYWlTYW8iLCJyYXRpb24iLCJmcm9tRXZlbnQiLCJldmVudCIsImdldERvdWJsZSIsImdldEludEFycmF5IiwiZ2V0Qm9vbCIsImdldEJ5dGUiLCJnZXRVdGZTdHJpbmciLCJpc1RoYW5nTG9uIiwiaXNOb2h1IiwiaXNOb2h1WDIiLCJpIiwibGVuZ3RoIiwicHVzaCIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFHLEVBQWxCO0FBQ0FBLFdBQVcsQ0FBQ0MsYUFBWixHQUE0QjtBQUN4QkMsRUFBQUEsVUFBVSxFQUFHLEtBRFc7QUFFeEJDLEVBQUFBLGNBQWMsRUFBRSxLQUZRO0FBR3hCQyxFQUFBQSxZQUFZLEVBQUUsS0FIVTtBQUl4QkMsRUFBQUEsYUFBYSxFQUFFLEtBSlM7QUFLeEJDLEVBQUFBLGtCQUFrQixFQUFFO0FBTEksQ0FBNUIsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FOLFdBQVcsQ0FBQ08sV0FBWixHQUEwQkMsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUNwREMsRUFBQUEsSUFEb0Qsa0JBQzlDO0FBQ0YsU0FBS0MsTUFBTCxDQUFZWixXQUFXLENBQUNDLGFBQVosQ0FBMEJDLFVBQXRDOztBQUNBLFNBQUtXLFFBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsSUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWtCLENBQWxCO0FBQ0gsR0FkbUQ7QUFlcERDLEVBQUFBLFNBZm9ELHFCQWUxQ0MsS0FmMEMsRUFlcEM7QUFDWixTQUFLWixRQUFMLEdBQWtCWSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBbEI7QUFDQSxTQUFLWCxPQUFMLEdBQWtCVSxLQUFLLENBQUNFLFdBQU4sQ0FBa0IsSUFBbEIsQ0FBbEI7QUFDQSxTQUFLWCxNQUFMLEdBQWtCUyxLQUFLLENBQUNFLFdBQU4sQ0FBa0IsR0FBbEIsQ0FBbEI7QUFDQSxTQUFLVixPQUFMLEdBQWtCUSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBbEI7QUFDQSxTQUFLUixVQUFMLEdBQWtCTyxLQUFLLENBQUNHLE9BQU4sQ0FBYyxJQUFkLENBQWxCO0FBQ0EsU0FBS1IsUUFBTCxHQUFrQkssS0FBSyxDQUFDSSxPQUFOLENBQWMsSUFBZCxDQUFsQjtBQUNBLFNBQUtSLElBQUwsR0FBa0JJLEtBQUssQ0FBQ0ksT0FBTixDQUFjLElBQWQsQ0FBbEI7QUFDQSxTQUFLUCxNQUFMLEdBQWtCRyxLQUFLLENBQUNLLFlBQU4sQ0FBbUIsSUFBbkIsQ0FBbEI7O0FBQ0EsUUFBRyxLQUFLVCxJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLVSxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLVixJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLVyxNQUFMLEdBQWMsSUFBZDtBQUNIOztBQUNELFFBQUcsS0FBS1gsSUFBTCxJQUFhLENBQWhCLEVBQWtCO0FBQ2QsV0FBS1ksUUFBTCxHQUFnQixJQUFoQjtBQUNIOztBQUNELFFBQUcsS0FBS1osSUFBTCxJQUFhLENBQWhCLEVBQWtCO0FBQ2QsV0FBS0YsT0FBTCxHQUFlLElBQWY7O0FBQ0EsV0FBSyxJQUFJZSxDQUFDLEdBQUUsQ0FBWixFQUFlQSxDQUFDLEdBQUUsS0FBS1osTUFBTCxDQUFZYSxNQUE5QixFQUFzQ0QsQ0FBQyxHQUFFQSxDQUFDLEdBQUMsQ0FBM0MsRUFBNkM7QUFDekMsYUFBS3BCLFFBQUwsQ0FBY3NCLElBQWQsQ0FBbUIsS0FBS2QsTUFBTCxDQUFZWSxDQUFaLENBQW5CO0FBQ0g7QUFDSjs7QUFDRCxXQUFPLElBQVA7QUFDSDtBQXhDbUQsQ0FBOUIsQ0FBMUI7QUEwQ0FHLE1BQU0sQ0FBQ3JDLFdBQVAsR0FBcUJzQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QyxXQUF0QyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFNpbmJhZEV2ZW50ID0ge307XHJcblNpbmJhZEV2ZW50LlJFU1BPTlNFX05BTUUgPSB7XHJcbiAgICBSRVNVTFRfUkVTIDogXCJzYjJcIixcclxuICAgIEZSRUVfREFJTFlfUkVTOiBcInNiM1wiLFxyXG4gICAgTUlOSU1JWkVfUkVTOiBcInNiNFwiLFxyXG4gICAgQVVUT19QTEFZX1JFUzogXCJzYjVcIixcclxuICAgIFNUT1BfQVVUT19QTEFZX1JFUzogXCJzYjZcIlxyXG59XHJcbi8vIFRSVU9UID0gMDtcclxuLy8gVEhBTkcgPSAxO1xyXG4vLyBUSEFOR19MT04gPSAyO1xyXG4vLyBOT19IVSA9IDM7XHJcbi8vIE5PX0hVX1gyID0gNDtcclxuLy8gTUlOSUdBTUVfU0xPVCA9IDU7XHJcblNpbmJhZEV2ZW50LlJlc3VsdEV2ZW50ID0gQ2FzaW5vRXZlbnQuX0Jhc2VFdmVudC5leHRlbmQoe1xyXG4gICAgY3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKFNpbmJhZEV2ZW50LlJFU1BPTlNFX05BTUUuUkVTVUxUX1JFUyk7XHJcbiAgICAgICAgdGhpcy53aW5Nb25leSAgID0gMDtcclxuICAgICAgICB0aGlzLmZyZWVHaWZ0ICAgPSBbXTtcclxuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc3VsdCAgICAgPSBbXTtcclxuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNGcmVlU3BpbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNCb251cyAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IDA7XHJcbiAgICAgICAgdGhpcy50eXBlICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLmhhaVNhbyAgICAgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMucmF0aW9uICAgICA9IDA7XHJcbiAgICB9LFxyXG4gICAgZnJvbUV2ZW50KGV2ZW50KXtcclxuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSBldmVudC5nZXREb3VibGUoXCJ3XCIpO1xyXG4gICAgICAgIHRoaXMubGluZVdpbiAgICA9IGV2ZW50LmdldEludEFycmF5KFwibHdcIik7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgICAgID0gZXZlbnQuZ2V0SW50QXJyYXkoXCJyXCIpO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiAgICA9IGV2ZW50LmdldERvdWJsZShcImlkXCIpO1xyXG4gICAgICAgIHRoaXMuaXNGcmVlU3BpbiA9IGV2ZW50LmdldEJvb2woXCJmclwiKTtcclxuICAgICAgICB0aGlzLmZyZWVTcGluICAgPSBldmVudC5nZXRCeXRlKFwicmFcIik7XHJcbiAgICAgICAgdGhpcy50eXBlICAgICAgID0gZXZlbnQuZ2V0Qnl0ZShcInJzXCIpO1xyXG4gICAgICAgIHRoaXMuaGFpU2FvICAgICA9IGV2ZW50LmdldFV0ZlN0cmluZyhcImhzXCIpO1xyXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSAyKXtcclxuICAgICAgICAgICAgdGhpcy5pc1RoYW5nTG9uID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50eXBlID09IDMpe1xyXG4gICAgICAgICAgICB0aGlzLmlzTm9odSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSA0KXtcclxuICAgICAgICAgICAgdGhpcy5pc05vaHVYMiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMudHlwZSA9PSA1KXtcclxuICAgICAgICAgICAgdGhpcy5pc0JvbnVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9MTsgaTwgdGhpcy5oYWlTYW8ubGVuZ3RoOyBpPSBpKzIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmVlR2lmdC5wdXNoKHRoaXMuaGFpU2FvW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbn0pO1xyXG53aW5kb3cuU2luYmFkRXZlbnQgPSBtb2R1bGUuZXhwb3J0cyA9IFNpbmJhZEV2ZW50O1xyXG4iXX0=
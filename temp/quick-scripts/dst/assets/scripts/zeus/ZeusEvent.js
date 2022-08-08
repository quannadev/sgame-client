
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/ZeusEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'efd24RLQ9NNU7Tlkma2LEQH', 'ZeusEvent');
// scripts/zeus/ZeusEvent.js

"use strict";

var ZeusEvent = {};
ZeusEvent.RESPONSE_NAME = {
  RESULT_RES: "zu2",
  FREE_DAILY_RES: "zu3",
  MINIMIZE_RES: "zu4",
  AUTO_PLAY_RES: "zu5",
  STOP_AUTO_PLAY_RES: "zu6"
}; // TRUOT = 0;
// THANG = 1;
// THANG_LON = 2;
// NO_HU = 3;
// NO_HU_X2 = 4;
// MINIGAME_SLOT = 5;

ZeusEvent.ResultEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(ZeusEvent.RESPONSE_NAME.RESULT_RES);

    this.winMoney = 0;
    this.freeGift = [];
    this.lineWin = [];
    this.result = [];
    this.session = 0;
    this.isFreeSpin = false;
    this.isBonus = false;
    this.freeSpin = 0;
    this.type = 0;
    this.xSpecial = 0;
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

      for (var i = 0; i < this.haiSao[this.haiSao.length - 1]; i++) {
        this.freeGift.push(this.haiSao[i]);
      }

      this.freeGift.push(0);
      this.xSpecial = this.haiSao[this.haiSao.length - 2];
    }

    return this;
  }
});
window.ZeusEvent = module.exports = ZeusEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3pldXMvWmV1c0V2ZW50LmpzIl0sIm5hbWVzIjpbIlpldXNFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJSRVNVTFRfUkVTIiwiRlJFRV9EQUlMWV9SRVMiLCJNSU5JTUlaRV9SRVMiLCJBVVRPX1BMQVlfUkVTIiwiU1RPUF9BVVRPX1BMQVlfUkVTIiwiUmVzdWx0RXZlbnQiLCJDYXNpbm9FdmVudCIsIl9CYXNlRXZlbnQiLCJleHRlbmQiLCJjdG9yIiwiX3N1cGVyIiwid2luTW9uZXkiLCJmcmVlR2lmdCIsImxpbmVXaW4iLCJyZXN1bHQiLCJzZXNzaW9uIiwiaXNGcmVlU3BpbiIsImlzQm9udXMiLCJmcmVlU3BpbiIsInR5cGUiLCJ4U3BlY2lhbCIsImhhaVNhbyIsInJhdGlvbiIsImZyb21FdmVudCIsImV2ZW50IiwiZ2V0RG91YmxlIiwiZ2V0SW50QXJyYXkiLCJnZXRCb29sIiwiZ2V0Qnl0ZSIsImdldFV0ZlN0cmluZyIsImlzVGhhbmdMb24iLCJpc05vaHUiLCJpc05vaHVYMiIsImkiLCJsZW5ndGgiLCJwdXNoIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUcsRUFBaEI7QUFDQUEsU0FBUyxDQUFDQyxhQUFWLEdBQTBCO0FBQ3RCQyxFQUFBQSxVQUFVLEVBQUcsS0FEUztBQUV0QkMsRUFBQUEsY0FBYyxFQUFFLEtBRk07QUFHdEJDLEVBQUFBLFlBQVksRUFBRSxLQUhRO0FBSXRCQyxFQUFBQSxhQUFhLEVBQUUsS0FKTztBQUt0QkMsRUFBQUEsa0JBQWtCLEVBQUU7QUFMRSxDQUExQixFQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQU4sU0FBUyxDQUFDTyxXQUFWLEdBQXdCQyxXQUFXLENBQUNDLFVBQVosQ0FBdUJDLE1BQXZCLENBQThCO0FBQ2xEQyxFQUFBQSxJQURrRCxrQkFDNUM7QUFDRixTQUFLQyxNQUFMLENBQVlaLFNBQVMsQ0FBQ0MsYUFBVixDQUF3QkMsVUFBcEM7O0FBQ0EsU0FBS1csUUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsTUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWtCLENBQWxCO0FBQ0gsR0FmaUQ7QUFnQmxEQyxFQUFBQSxTQWhCa0QscUJBZ0J4Q0MsS0FoQndDLEVBZ0JsQztBQUNaLFNBQUtiLFFBQUwsR0FBa0JhLEtBQUssQ0FBQ0MsU0FBTixDQUFnQixHQUFoQixDQUFsQjtBQUNBLFNBQUtaLE9BQUwsR0FBa0JXLEtBQUssQ0FBQ0UsV0FBTixDQUFrQixJQUFsQixDQUFsQjtBQUNBLFNBQUtaLE1BQUwsR0FBa0JVLEtBQUssQ0FBQ0UsV0FBTixDQUFrQixHQUFsQixDQUFsQjtBQUNBLFNBQUtYLE9BQUwsR0FBa0JTLEtBQUssQ0FBQ0MsU0FBTixDQUFnQixJQUFoQixDQUFsQjtBQUNBLFNBQUtULFVBQUwsR0FBa0JRLEtBQUssQ0FBQ0csT0FBTixDQUFjLElBQWQsQ0FBbEI7QUFDQSxTQUFLVCxRQUFMLEdBQWtCTSxLQUFLLENBQUNJLE9BQU4sQ0FBYyxJQUFkLENBQWxCO0FBQ0EsU0FBS1QsSUFBTCxHQUFrQkssS0FBSyxDQUFDSSxPQUFOLENBQWMsSUFBZCxDQUFsQjtBQUNBLFNBQUtQLE1BQUwsR0FBa0JHLEtBQUssQ0FBQ0ssWUFBTixDQUFtQixJQUFuQixDQUFsQjs7QUFDQSxRQUFHLEtBQUtWLElBQUwsSUFBYSxDQUFoQixFQUFrQjtBQUNkLFdBQUtXLFVBQUwsR0FBa0IsSUFBbEI7QUFDSDs7QUFDRCxRQUFHLEtBQUtYLElBQUwsSUFBYSxDQUFoQixFQUFrQjtBQUNkLFdBQUtZLE1BQUwsR0FBYyxJQUFkO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLWixJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLYSxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLYixJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLRixPQUFMLEdBQWUsSUFBZjs7QUFDQSxXQUFLLElBQUlnQixDQUFDLEdBQUUsQ0FBWixFQUFlQSxDQUFDLEdBQUUsS0FBS1osTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWWEsTUFBWixHQUFtQixDQUEvQixDQUFsQixFQUFxREQsQ0FBQyxFQUF0RCxFQUF5RDtBQUNyRCxhQUFLckIsUUFBTCxDQUFjdUIsSUFBZCxDQUFtQixLQUFLZCxNQUFMLENBQVlZLENBQVosQ0FBbkI7QUFDSDs7QUFDRCxXQUFLckIsUUFBTCxDQUFjdUIsSUFBZCxDQUFtQixDQUFuQjtBQUNBLFdBQUtmLFFBQUwsR0FBZ0IsS0FBS0MsTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWWEsTUFBWixHQUFtQixDQUEvQixDQUFoQjtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIO0FBM0NpRCxDQUE5QixDQUF4QjtBQTZDQUUsTUFBTSxDQUFDdEMsU0FBUCxHQUFtQnVDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnhDLFNBQXBDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgWmV1c0V2ZW50ID0ge307XG5aZXVzRXZlbnQuUkVTUE9OU0VfTkFNRSA9IHtcbiAgICBSRVNVTFRfUkVTIDogXCJ6dTJcIixcbiAgICBGUkVFX0RBSUxZX1JFUzogXCJ6dTNcIixcbiAgICBNSU5JTUlaRV9SRVM6IFwienU0XCIsXG4gICAgQVVUT19QTEFZX1JFUzogXCJ6dTVcIixcbiAgICBTVE9QX0FVVE9fUExBWV9SRVM6IFwienU2XCJcbn1cbi8vIFRSVU9UID0gMDtcbi8vIFRIQU5HID0gMTtcbi8vIFRIQU5HX0xPTiA9IDI7XG4vLyBOT19IVSA9IDM7XG4vLyBOT19IVV9YMiA9IDQ7XG4vLyBNSU5JR0FNRV9TTE9UID0gNTtcblpldXNFdmVudC5SZXN1bHRFdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKFpldXNFdmVudC5SRVNQT05TRV9OQU1FLlJFU1VMVF9SRVMpO1xuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSAwO1xuICAgICAgICB0aGlzLmZyZWVHaWZ0ICAgPSBbXTtcbiAgICAgICAgdGhpcy5saW5lV2luICAgID0gW107XG4gICAgICAgIHRoaXMucmVzdWx0ICAgICA9IFtdO1xuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSAwO1xuICAgICAgICB0aGlzLmlzRnJlZVNwaW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0JvbnVzICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IDA7XG4gICAgICAgIHRoaXMudHlwZSAgICAgICA9IDA7XG4gICAgICAgIHRoaXMueFNwZWNpYWwgICA9IDA7XG4gICAgICAgIHRoaXMuaGFpU2FvICAgICA9IFwiXCI7XG4gICAgICAgIHRoaXMucmF0aW9uICAgICA9IDA7XG4gICAgfSxcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSBldmVudC5nZXREb3VibGUoXCJ3XCIpO1xuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBldmVudC5nZXRJbnRBcnJheShcImx3XCIpO1xuICAgICAgICB0aGlzLnJlc3VsdCAgICAgPSBldmVudC5nZXRJbnRBcnJheShcInJcIik7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiAgICA9IGV2ZW50LmdldERvdWJsZShcImlkXCIpO1xuICAgICAgICB0aGlzLmlzRnJlZVNwaW4gPSBldmVudC5nZXRCb29sKFwiZnJcIik7XG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGV2ZW50LmdldEJ5dGUoXCJyYVwiKTtcbiAgICAgICAgdGhpcy50eXBlICAgICAgID0gZXZlbnQuZ2V0Qnl0ZShcInJzXCIpO1xuICAgICAgICB0aGlzLmhhaVNhbyAgICAgPSBldmVudC5nZXRVdGZTdHJpbmcoXCJoc1wiKTtcbiAgICAgICAgaWYodGhpcy50eXBlID09IDIpe1xuICAgICAgICAgICAgdGhpcy5pc1RoYW5nTG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gMyl7XG4gICAgICAgICAgICB0aGlzLmlzTm9odSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy50eXBlID09IDQpe1xuICAgICAgICAgICAgdGhpcy5pc05vaHVYMiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy50eXBlID09IDUpe1xuICAgICAgICAgICAgdGhpcy5pc0JvbnVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPTA7IGk8IHRoaXMuaGFpU2FvW3RoaXMuaGFpU2FvLmxlbmd0aC0xXTsgaSsrKXtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVHaWZ0LnB1c2godGhpcy5oYWlTYW9baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mcmVlR2lmdC5wdXNoKDApO1xuICAgICAgICAgICAgdGhpcy54U3BlY2lhbCA9IHRoaXMuaGFpU2FvW3RoaXMuaGFpU2FvLmxlbmd0aC0yXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxufSk7XG53aW5kb3cuWmV1c0V2ZW50ID0gbW9kdWxlLmV4cG9ydHMgPSBaZXVzRXZlbnQ7XG4iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcWmV1c0V2ZW50LmpzIl0sIm5hbWVzIjpbIlpldXNFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJSRVNVTFRfUkVTIiwiRlJFRV9EQUlMWV9SRVMiLCJNSU5JTUlaRV9SRVMiLCJBVVRPX1BMQVlfUkVTIiwiU1RPUF9BVVRPX1BMQVlfUkVTIiwiUmVzdWx0RXZlbnQiLCJDYXNpbm9FdmVudCIsIl9CYXNlRXZlbnQiLCJleHRlbmQiLCJjdG9yIiwiX3N1cGVyIiwid2luTW9uZXkiLCJmcmVlR2lmdCIsImxpbmVXaW4iLCJyZXN1bHQiLCJzZXNzaW9uIiwiaXNGcmVlU3BpbiIsImlzQm9udXMiLCJmcmVlU3BpbiIsInR5cGUiLCJ4U3BlY2lhbCIsImhhaVNhbyIsInJhdGlvbiIsImZyb21FdmVudCIsImV2ZW50IiwiZ2V0RG91YmxlIiwiZ2V0SW50QXJyYXkiLCJnZXRCb29sIiwiZ2V0Qnl0ZSIsImdldFV0ZlN0cmluZyIsImlzVGhhbmdMb24iLCJpc05vaHUiLCJpc05vaHVYMiIsImkiLCJsZW5ndGgiLCJwdXNoIiwid2luZG93IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxTQUFTLEdBQUcsRUFBaEI7QUFDQUEsU0FBUyxDQUFDQyxhQUFWLEdBQTBCO0FBQ3RCQyxFQUFBQSxVQUFVLEVBQUcsS0FEUztBQUV0QkMsRUFBQUEsY0FBYyxFQUFFLEtBRk07QUFHdEJDLEVBQUFBLFlBQVksRUFBRSxLQUhRO0FBSXRCQyxFQUFBQSxhQUFhLEVBQUUsS0FKTztBQUt0QkMsRUFBQUEsa0JBQWtCLEVBQUU7QUFMRSxDQUExQixFQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQU4sU0FBUyxDQUFDTyxXQUFWLEdBQXdCQyxXQUFXLENBQUNDLFVBQVosQ0FBdUJDLE1BQXZCLENBQThCO0FBQ2xEQyxFQUFBQSxJQURrRCxrQkFDNUM7QUFDRixTQUFLQyxNQUFMLENBQVlaLFNBQVMsQ0FBQ0MsYUFBVixDQUF3QkMsVUFBcEM7O0FBQ0EsU0FBS1csUUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsTUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxJQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWtCLENBQWxCO0FBQ0gsR0FmaUQ7QUFnQmxEQyxFQUFBQSxTQWhCa0QscUJBZ0J4Q0MsS0FoQndDLEVBZ0JsQztBQUNaLFNBQUtiLFFBQUwsR0FBa0JhLEtBQUssQ0FBQ0MsU0FBTixDQUFnQixHQUFoQixDQUFsQjtBQUNBLFNBQUtaLE9BQUwsR0FBa0JXLEtBQUssQ0FBQ0UsV0FBTixDQUFrQixJQUFsQixDQUFsQjtBQUNBLFNBQUtaLE1BQUwsR0FBa0JVLEtBQUssQ0FBQ0UsV0FBTixDQUFrQixHQUFsQixDQUFsQjtBQUNBLFNBQUtYLE9BQUwsR0FBa0JTLEtBQUssQ0FBQ0MsU0FBTixDQUFnQixJQUFoQixDQUFsQjtBQUNBLFNBQUtULFVBQUwsR0FBa0JRLEtBQUssQ0FBQ0csT0FBTixDQUFjLElBQWQsQ0FBbEI7QUFDQSxTQUFLVCxRQUFMLEdBQWtCTSxLQUFLLENBQUNJLE9BQU4sQ0FBYyxJQUFkLENBQWxCO0FBQ0EsU0FBS1QsSUFBTCxHQUFrQkssS0FBSyxDQUFDSSxPQUFOLENBQWMsSUFBZCxDQUFsQjtBQUNBLFNBQUtQLE1BQUwsR0FBa0JHLEtBQUssQ0FBQ0ssWUFBTixDQUFtQixJQUFuQixDQUFsQjs7QUFDQSxRQUFHLEtBQUtWLElBQUwsSUFBYSxDQUFoQixFQUFrQjtBQUNkLFdBQUtXLFVBQUwsR0FBa0IsSUFBbEI7QUFDSDs7QUFDRCxRQUFHLEtBQUtYLElBQUwsSUFBYSxDQUFoQixFQUFrQjtBQUNkLFdBQUtZLE1BQUwsR0FBYyxJQUFkO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLWixJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLYSxRQUFMLEdBQWdCLElBQWhCO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLYixJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLRixPQUFMLEdBQWUsSUFBZjs7QUFDQSxXQUFLLElBQUlnQixDQUFDLEdBQUUsQ0FBWixFQUFlQSxDQUFDLEdBQUUsS0FBS1osTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWWEsTUFBWixHQUFtQixDQUEvQixDQUFsQixFQUFxREQsQ0FBQyxFQUF0RCxFQUF5RDtBQUNyRCxhQUFLckIsUUFBTCxDQUFjdUIsSUFBZCxDQUFtQixLQUFLZCxNQUFMLENBQVlZLENBQVosQ0FBbkI7QUFDSDs7QUFDRCxXQUFLckIsUUFBTCxDQUFjdUIsSUFBZCxDQUFtQixDQUFuQjtBQUNBLFdBQUtmLFFBQUwsR0FBZ0IsS0FBS0MsTUFBTCxDQUFZLEtBQUtBLE1BQUwsQ0FBWWEsTUFBWixHQUFtQixDQUEvQixDQUFoQjtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIO0FBM0NpRCxDQUE5QixDQUF4QjtBQTZDQUUsTUFBTSxDQUFDdEMsU0FBUCxHQUFtQnVDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnhDLFNBQXBDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgWmV1c0V2ZW50ID0ge307XHJcblpldXNFdmVudC5SRVNQT05TRV9OQU1FID0ge1xyXG4gICAgUkVTVUxUX1JFUyA6IFwienUyXCIsXHJcbiAgICBGUkVFX0RBSUxZX1JFUzogXCJ6dTNcIixcclxuICAgIE1JTklNSVpFX1JFUzogXCJ6dTRcIixcclxuICAgIEFVVE9fUExBWV9SRVM6IFwienU1XCIsXHJcbiAgICBTVE9QX0FVVE9fUExBWV9SRVM6IFwienU2XCJcclxufVxyXG4vLyBUUlVPVCA9IDA7XHJcbi8vIFRIQU5HID0gMTtcclxuLy8gVEhBTkdfTE9OID0gMjtcclxuLy8gTk9fSFUgPSAzO1xyXG4vLyBOT19IVV9YMiA9IDQ7XHJcbi8vIE1JTklHQU1FX1NMT1QgPSA1O1xyXG5aZXVzRXZlbnQuUmVzdWx0RXZlbnQgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoWmV1c0V2ZW50LlJFU1BPTlNFX05BTUUuUkVTVUxUX1JFUyk7XHJcbiAgICAgICAgdGhpcy53aW5Nb25leSAgID0gMDtcclxuICAgICAgICB0aGlzLmZyZWVHaWZ0ICAgPSBbXTtcclxuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc3VsdCAgICAgPSBbXTtcclxuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSAwO1xyXG4gICAgICAgIHRoaXMuaXNGcmVlU3BpbiA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNCb251cyAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IDA7XHJcbiAgICAgICAgdGhpcy50eXBlICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLnhTcGVjaWFsICAgPSAwO1xyXG4gICAgICAgIHRoaXMuaGFpU2FvICAgICA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5yYXRpb24gICAgID0gMDtcclxuICAgIH0sXHJcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMud2luTW9uZXkgICA9IGV2ZW50LmdldERvdWJsZShcIndcIik7XHJcbiAgICAgICAgdGhpcy5saW5lV2luICAgID0gZXZlbnQuZ2V0SW50QXJyYXkoXCJsd1wiKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCAgICAgPSBldmVudC5nZXRJbnRBcnJheShcInJcIik7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uICAgID0gZXZlbnQuZ2V0RG91YmxlKFwiaWRcIik7XHJcbiAgICAgICAgdGhpcy5pc0ZyZWVTcGluID0gZXZlbnQuZ2V0Qm9vbChcImZyXCIpO1xyXG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGV2ZW50LmdldEJ5dGUoXCJyYVwiKTtcclxuICAgICAgICB0aGlzLnR5cGUgICAgICAgPSBldmVudC5nZXRCeXRlKFwicnNcIik7XHJcbiAgICAgICAgdGhpcy5oYWlTYW8gICAgID0gZXZlbnQuZ2V0VXRmU3RyaW5nKFwiaHNcIik7XHJcbiAgICAgICAgaWYodGhpcy50eXBlID09IDIpe1xyXG4gICAgICAgICAgICB0aGlzLmlzVGhhbmdMb24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gMyl7XHJcbiAgICAgICAgICAgIHRoaXMuaXNOb2h1ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50eXBlID09IDQpe1xyXG4gICAgICAgICAgICB0aGlzLmlzTm9odVgyID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy50eXBlID09IDUpe1xyXG4gICAgICAgICAgICB0aGlzLmlzQm9udXMgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0wOyBpPCB0aGlzLmhhaVNhb1t0aGlzLmhhaVNhby5sZW5ndGgtMV07IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVHaWZ0LnB1c2godGhpcy5oYWlTYW9baV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZUdpZnQucHVzaCgwKTtcclxuICAgICAgICAgICAgdGhpcy54U3BlY2lhbCA9IHRoaXMuaGFpU2FvW3RoaXMuaGFpU2FvLmxlbmd0aC0yXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG59KTtcclxud2luZG93LlpldXNFdmVudCA9IG1vZHVsZS5leHBvcnRzID0gWmV1c0V2ZW50O1xyXG4iXX0=
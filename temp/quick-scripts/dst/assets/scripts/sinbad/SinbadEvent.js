
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRFdmVudC5qcyJdLCJuYW1lcyI6WyJTaW5iYWRFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJSRVNVTFRfUkVTIiwiRlJFRV9EQUlMWV9SRVMiLCJNSU5JTUlaRV9SRVMiLCJBVVRPX1BMQVlfUkVTIiwiU1RPUF9BVVRPX1BMQVlfUkVTIiwiUmVzdWx0RXZlbnQiLCJDYXNpbm9FdmVudCIsIl9CYXNlRXZlbnQiLCJleHRlbmQiLCJjdG9yIiwiX3N1cGVyIiwid2luTW9uZXkiLCJmcmVlR2lmdCIsImxpbmVXaW4iLCJyZXN1bHQiLCJzZXNzaW9uIiwiaXNGcmVlU3BpbiIsImlzQm9udXMiLCJmcmVlU3BpbiIsInR5cGUiLCJoYWlTYW8iLCJyYXRpb24iLCJmcm9tRXZlbnQiLCJldmVudCIsImdldERvdWJsZSIsImdldEludEFycmF5IiwiZ2V0Qm9vbCIsImdldEJ5dGUiLCJnZXRVdGZTdHJpbmciLCJpc1RoYW5nTG9uIiwiaXNOb2h1IiwiaXNOb2h1WDIiLCJpIiwibGVuZ3RoIiwicHVzaCIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFHLEVBQWxCO0FBQ0FBLFdBQVcsQ0FBQ0MsYUFBWixHQUE0QjtBQUN4QkMsRUFBQUEsVUFBVSxFQUFHLEtBRFc7QUFFeEJDLEVBQUFBLGNBQWMsRUFBRSxLQUZRO0FBR3hCQyxFQUFBQSxZQUFZLEVBQUUsS0FIVTtBQUl4QkMsRUFBQUEsYUFBYSxFQUFFLEtBSlM7QUFLeEJDLEVBQUFBLGtCQUFrQixFQUFFO0FBTEksQ0FBNUIsRUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FOLFdBQVcsQ0FBQ08sV0FBWixHQUEwQkMsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUNwREMsRUFBQUEsSUFEb0Qsa0JBQzlDO0FBQ0YsU0FBS0MsTUFBTCxDQUFZWixXQUFXLENBQUNDLGFBQVosQ0FBMEJDLFVBQXRDOztBQUNBLFNBQUtXLFFBQUwsR0FBa0IsQ0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWtCLEVBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxPQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLE9BQUwsR0FBa0IsS0FBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsSUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBa0IsRUFBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWtCLENBQWxCO0FBQ0gsR0FkbUQ7QUFlcERDLEVBQUFBLFNBZm9ELHFCQWUxQ0MsS0FmMEMsRUFlcEM7QUFDWixTQUFLWixRQUFMLEdBQWtCWSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBbEI7QUFDQSxTQUFLWCxPQUFMLEdBQWtCVSxLQUFLLENBQUNFLFdBQU4sQ0FBa0IsSUFBbEIsQ0FBbEI7QUFDQSxTQUFLWCxNQUFMLEdBQWtCUyxLQUFLLENBQUNFLFdBQU4sQ0FBa0IsR0FBbEIsQ0FBbEI7QUFDQSxTQUFLVixPQUFMLEdBQWtCUSxLQUFLLENBQUNDLFNBQU4sQ0FBZ0IsSUFBaEIsQ0FBbEI7QUFDQSxTQUFLUixVQUFMLEdBQWtCTyxLQUFLLENBQUNHLE9BQU4sQ0FBYyxJQUFkLENBQWxCO0FBQ0EsU0FBS1IsUUFBTCxHQUFrQkssS0FBSyxDQUFDSSxPQUFOLENBQWMsSUFBZCxDQUFsQjtBQUNBLFNBQUtSLElBQUwsR0FBa0JJLEtBQUssQ0FBQ0ksT0FBTixDQUFjLElBQWQsQ0FBbEI7QUFDQSxTQUFLUCxNQUFMLEdBQWtCRyxLQUFLLENBQUNLLFlBQU4sQ0FBbUIsSUFBbkIsQ0FBbEI7O0FBQ0EsUUFBRyxLQUFLVCxJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLVSxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLVixJQUFMLElBQWEsQ0FBaEIsRUFBa0I7QUFDZCxXQUFLVyxNQUFMLEdBQWMsSUFBZDtBQUNIOztBQUNELFFBQUcsS0FBS1gsSUFBTCxJQUFhLENBQWhCLEVBQWtCO0FBQ2QsV0FBS1ksUUFBTCxHQUFnQixJQUFoQjtBQUNIOztBQUNELFFBQUcsS0FBS1osSUFBTCxJQUFhLENBQWhCLEVBQWtCO0FBQ2QsV0FBS0YsT0FBTCxHQUFlLElBQWY7O0FBQ0EsV0FBSyxJQUFJZSxDQUFDLEdBQUUsQ0FBWixFQUFlQSxDQUFDLEdBQUUsS0FBS1osTUFBTCxDQUFZYSxNQUE5QixFQUFzQ0QsQ0FBQyxHQUFFQSxDQUFDLEdBQUMsQ0FBM0MsRUFBNkM7QUFDekMsYUFBS3BCLFFBQUwsQ0FBY3NCLElBQWQsQ0FBbUIsS0FBS2QsTUFBTCxDQUFZWSxDQUFaLENBQW5CO0FBQ0g7QUFDSjs7QUFDRCxXQUFPLElBQVA7QUFDSDtBQXhDbUQsQ0FBOUIsQ0FBMUI7QUEwQ0FHLE1BQU0sQ0FBQ3JDLFdBQVAsR0FBcUJzQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJ2QyxXQUF0QyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFNpbmJhZEV2ZW50ID0ge307XG5TaW5iYWRFdmVudC5SRVNQT05TRV9OQU1FID0ge1xuICAgIFJFU1VMVF9SRVMgOiBcInNiMlwiLFxuICAgIEZSRUVfREFJTFlfUkVTOiBcInNiM1wiLFxuICAgIE1JTklNSVpFX1JFUzogXCJzYjRcIixcbiAgICBBVVRPX1BMQVlfUkVTOiBcInNiNVwiLFxuICAgIFNUT1BfQVVUT19QTEFZX1JFUzogXCJzYjZcIlxufVxuLy8gVFJVT1QgPSAwO1xuLy8gVEhBTkcgPSAxO1xuLy8gVEhBTkdfTE9OID0gMjtcbi8vIE5PX0hVID0gMztcbi8vIE5PX0hVX1gyID0gNDtcbi8vIE1JTklHQU1FX1NMT1QgPSA1O1xuU2luYmFkRXZlbnQuUmVzdWx0RXZlbnQgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihTaW5iYWRFdmVudC5SRVNQT05TRV9OQU1FLlJFU1VMVF9SRVMpO1xuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSAwO1xuICAgICAgICB0aGlzLmZyZWVHaWZ0ICAgPSBbXTtcbiAgICAgICAgdGhpcy5saW5lV2luICAgID0gW107XG4gICAgICAgIHRoaXMucmVzdWx0ICAgICA9IFtdO1xuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSAwO1xuICAgICAgICB0aGlzLmlzRnJlZVNwaW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0JvbnVzICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IDA7XG4gICAgICAgIHRoaXMudHlwZSAgICAgICA9IDA7XG4gICAgICAgIHRoaXMuaGFpU2FvICAgICA9IFwiXCI7XG4gICAgICAgIHRoaXMucmF0aW9uICAgICA9IDA7XG4gICAgfSxcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSBldmVudC5nZXREb3VibGUoXCJ3XCIpO1xuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBldmVudC5nZXRJbnRBcnJheShcImx3XCIpO1xuICAgICAgICB0aGlzLnJlc3VsdCAgICAgPSBldmVudC5nZXRJbnRBcnJheShcInJcIik7XG4gICAgICAgIHRoaXMuc2Vzc2lvbiAgICA9IGV2ZW50LmdldERvdWJsZShcImlkXCIpO1xuICAgICAgICB0aGlzLmlzRnJlZVNwaW4gPSBldmVudC5nZXRCb29sKFwiZnJcIik7XG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGV2ZW50LmdldEJ5dGUoXCJyYVwiKTtcbiAgICAgICAgdGhpcy50eXBlICAgICAgID0gZXZlbnQuZ2V0Qnl0ZShcInJzXCIpO1xuICAgICAgICB0aGlzLmhhaVNhbyAgICAgPSBldmVudC5nZXRVdGZTdHJpbmcoXCJoc1wiKTtcbiAgICAgICAgaWYodGhpcy50eXBlID09IDIpe1xuICAgICAgICAgICAgdGhpcy5pc1RoYW5nTG9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnR5cGUgPT0gMyl7XG4gICAgICAgICAgICB0aGlzLmlzTm9odSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy50eXBlID09IDQpe1xuICAgICAgICAgICAgdGhpcy5pc05vaHVYMiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy50eXBlID09IDUpe1xuICAgICAgICAgICAgdGhpcy5pc0JvbnVzID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPTE7IGk8IHRoaXMuaGFpU2FvLmxlbmd0aDsgaT0gaSsyKXtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVHaWZ0LnB1c2godGhpcy5oYWlTYW9baV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG59KTtcbndpbmRvdy5TaW5iYWRFdmVudCA9IG1vZHVsZS5leHBvcnRzID0gU2luYmFkRXZlbnQ7XG4iXX0=
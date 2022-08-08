
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/CandyEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b50dSWCiZBWoEXAVs+w7Gr', 'CandyEvent');
// scripts/candy/CandyEvent.js

"use strict";

var CandyEvent = {};
CandyEvent.RESPONSE_NAME = {
  BET_RES: "cd1"
};
CandyEvent.BetEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CandyEvent.RESPONSE_NAME.BET_RES);

    this.freeSpin = 0;
    this.freeGift = [];
  },
  fromEvent: function fromEvent(event) {
    this.status = 1;
    this.winMoney = event.getDouble("w");
    this.lineWin = event.getIntArray("lw");
    this.isNohu = event.getBool("nh");
    this.isThangLon = event.getBool("tl");
    this.result = event.getIntArray("r");

    if (event.containsKey("fs")) {
      this.freeSpin = event.getInt("fs");
    }

    if (event.containsKey("fg")) {
      this.freeGift = event.getDoubleArray("fg");
    }

    this.msg = event.getUtfString("ec");
    if (this.msg != null) this.status = 0;
    return this;
  }
});
window.CandyEvent = module.exports = CandyEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbmR5L0NhbmR5RXZlbnQuanMiXSwibmFtZXMiOlsiQ2FuZHlFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJCRVRfUkVTIiwiQmV0RXZlbnQiLCJDYXNpbm9FdmVudCIsIl9CYXNlRXZlbnQiLCJleHRlbmQiLCJjdG9yIiwiX3N1cGVyIiwiZnJlZVNwaW4iLCJmcmVlR2lmdCIsImZyb21FdmVudCIsImV2ZW50Iiwic3RhdHVzIiwid2luTW9uZXkiLCJnZXREb3VibGUiLCJsaW5lV2luIiwiZ2V0SW50QXJyYXkiLCJpc05vaHUiLCJnZXRCb29sIiwiaXNUaGFuZ0xvbiIsInJlc3VsdCIsImNvbnRhaW5zS2V5IiwiZ2V0SW50IiwiZ2V0RG91YmxlQXJyYXkiLCJtc2ciLCJnZXRVdGZTdHJpbmciLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFVBQVUsR0FBRyxFQUFqQjtBQUNBQSxVQUFVLENBQUNDLGFBQVgsR0FBMkI7QUFDdkJDLEVBQUFBLE9BQU8sRUFBRztBQURhLENBQTNCO0FBR0FGLFVBQVUsQ0FBQ0csUUFBWCxHQUFzQkMsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUNoREMsRUFBQUEsSUFEZ0Qsa0JBQzFDO0FBQ0YsU0FBS0MsTUFBTCxDQUFZUixVQUFVLENBQUNDLGFBQVgsQ0FBeUJDLE9BQXJDOztBQUNBLFNBQUtPLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0gsR0FMK0M7QUFNaERDLEVBQUFBLFNBTmdELHFCQU10Q0MsS0FOc0MsRUFNaEM7QUFDWixTQUFLQyxNQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFrQkYsS0FBSyxDQUFDRyxTQUFOLENBQWdCLEdBQWhCLENBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFrQkosS0FBSyxDQUFDSyxXQUFOLENBQWtCLElBQWxCLENBQWxCO0FBQ0EsU0FBS0MsTUFBTCxHQUFrQk4sS0FBSyxDQUFDTyxPQUFOLENBQWMsSUFBZCxDQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JSLEtBQUssQ0FBQ08sT0FBTixDQUFjLElBQWQsQ0FBbEI7QUFDQSxTQUFLRSxNQUFMLEdBQWtCVCxLQUFLLENBQUNLLFdBQU4sQ0FBa0IsR0FBbEIsQ0FBbEI7O0FBQ0EsUUFBR0wsS0FBSyxDQUFDVSxXQUFOLENBQWtCLElBQWxCLENBQUgsRUFBMkI7QUFDdkIsV0FBS2IsUUFBTCxHQUFnQkcsS0FBSyxDQUFDVyxNQUFOLENBQWEsSUFBYixDQUFoQjtBQUNIOztBQUNELFFBQUdYLEtBQUssQ0FBQ1UsV0FBTixDQUFrQixJQUFsQixDQUFILEVBQTJCO0FBQ3ZCLFdBQUtaLFFBQUwsR0FBZ0JFLEtBQUssQ0FBQ1ksY0FBTixDQUFxQixJQUFyQixDQUFoQjtBQUNIOztBQUNELFNBQUtDLEdBQUwsR0FBZWIsS0FBSyxDQUFDYyxZQUFOLENBQW1CLElBQW5CLENBQWY7QUFDQSxRQUFJLEtBQUtELEdBQUwsSUFBWSxJQUFoQixFQUNJLEtBQUtaLE1BQUwsR0FBa0IsQ0FBbEI7QUFDSixXQUFPLElBQVA7QUFDSDtBQXZCK0MsQ0FBOUIsQ0FBdEI7QUF5QkFjLE1BQU0sQ0FBQzNCLFVBQVAsR0FBb0I0QixNQUFNLENBQUNDLE9BQVAsR0FBaUI3QixVQUFyQyIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IENhbmR5RXZlbnQgPSB7fTtcbkNhbmR5RXZlbnQuUkVTUE9OU0VfTkFNRSA9IHtcbiAgICBCRVRfUkVTIDogXCJjZDFcIlxufTtcbkNhbmR5RXZlbnQuQmV0RXZlbnQgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihDYW5keUV2ZW50LlJFU1BPTlNFX05BTUUuQkVUX1JFUyk7XG4gICAgICAgIHRoaXMuZnJlZVNwaW4gPSAwO1xuICAgICAgICB0aGlzLmZyZWVHaWZ0ID0gW107XG4gICAgfSxcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xuICAgICAgICB0aGlzLnN0YXR1cyAgICAgPSAxO1xuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSBldmVudC5nZXREb3VibGUoXCJ3XCIpO1xuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBldmVudC5nZXRJbnRBcnJheShcImx3XCIpO1xuICAgICAgICB0aGlzLmlzTm9odSAgICAgPSBldmVudC5nZXRCb29sKFwibmhcIik7XG4gICAgICAgIHRoaXMuaXNUaGFuZ0xvbiA9IGV2ZW50LmdldEJvb2woXCJ0bFwiKTtcbiAgICAgICAgdGhpcy5yZXN1bHQgICAgID0gZXZlbnQuZ2V0SW50QXJyYXkoXCJyXCIpO1xuICAgICAgICBpZihldmVudC5jb250YWluc0tleShcImZzXCIpKXtcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gPSBldmVudC5nZXRJbnQoXCJmc1wiKTtcbiAgICAgICAgfVxuICAgICAgICBpZihldmVudC5jb250YWluc0tleShcImZnXCIpKXtcbiAgICAgICAgICAgIHRoaXMuZnJlZUdpZnQgPSBldmVudC5nZXREb3VibGVBcnJheShcImZnXCIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubXNnICAgICA9IGV2ZW50LmdldFV0ZlN0cmluZyhcImVjXCIpO1xuICAgICAgICBpZiAodGhpcy5tc2cgIT0gbnVsbClcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzICAgICA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG59KTtcbndpbmRvdy5DYW5keUV2ZW50ID0gbW9kdWxlLmV4cG9ydHMgPSBDYW5keUV2ZW50O1xuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sieuxe/SieuXeEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ff615bPxEpGDKtUuoK1XkCm', 'SieuXeEvent');
// scripts/sieuxe/SieuXeEvent.js

"use strict";

var SieuXeEvent = {};
SieuXeEvent.RESPONSE_NAME = {
  BET_RES: "sx1"
};
SieuXeEvent.BetEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(SieuXeEvent.RESPONSE_NAME.BET_RES);

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

    return this;
  }
});
window.SieuXeEvent = module.exports = SieuXeEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2lldXhlXFxTaWV1WGVFdmVudC5qcyJdLCJuYW1lcyI6WyJTaWV1WGVFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJCRVRfUkVTIiwiQmV0RXZlbnQiLCJDYXNpbm9FdmVudCIsIl9CYXNlRXZlbnQiLCJleHRlbmQiLCJjdG9yIiwiX3N1cGVyIiwiZnJlZVNwaW4iLCJmcmVlR2lmdCIsImZyb21FdmVudCIsImV2ZW50Iiwic3RhdHVzIiwid2luTW9uZXkiLCJnZXREb3VibGUiLCJsaW5lV2luIiwiZ2V0SW50QXJyYXkiLCJpc05vaHUiLCJnZXRCb29sIiwiaXNUaGFuZ0xvbiIsInJlc3VsdCIsImNvbnRhaW5zS2V5IiwiZ2V0SW50IiwiZ2V0RG91YmxlQXJyYXkiLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFdBQVcsR0FBRyxFQUFsQjtBQUNBQSxXQUFXLENBQUNDLGFBQVosR0FBNEI7QUFDeEJDLEVBQUFBLE9BQU8sRUFBRztBQURjLENBQTVCO0FBR0FGLFdBQVcsQ0FBQ0csUUFBWixHQUF1QkMsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUNqREMsRUFBQUEsSUFEaUQsa0JBQzNDO0FBQ0YsU0FBS0MsTUFBTCxDQUFZUixXQUFXLENBQUNDLGFBQVosQ0FBMEJDLE9BQXRDOztBQUNBLFNBQUtPLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0gsR0FMZ0Q7QUFNakRDLEVBQUFBLFNBTmlELHFCQU12Q0MsS0FOdUMsRUFNakM7QUFDWixTQUFLQyxNQUFMLEdBQWtCLENBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFrQkYsS0FBSyxDQUFDRyxTQUFOLENBQWdCLEdBQWhCLENBQWxCO0FBQ0EsU0FBS0MsT0FBTCxHQUFrQkosS0FBSyxDQUFDSyxXQUFOLENBQWtCLElBQWxCLENBQWxCO0FBQ0EsU0FBS0MsTUFBTCxHQUFrQk4sS0FBSyxDQUFDTyxPQUFOLENBQWMsSUFBZCxDQUFsQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0JSLEtBQUssQ0FBQ08sT0FBTixDQUFjLElBQWQsQ0FBbEI7QUFDQSxTQUFLRSxNQUFMLEdBQWtCVCxLQUFLLENBQUNLLFdBQU4sQ0FBa0IsR0FBbEIsQ0FBbEI7O0FBQ0EsUUFBR0wsS0FBSyxDQUFDVSxXQUFOLENBQWtCLElBQWxCLENBQUgsRUFBMkI7QUFDdkIsV0FBS2IsUUFBTCxHQUFnQkcsS0FBSyxDQUFDVyxNQUFOLENBQWEsSUFBYixDQUFoQjtBQUNIOztBQUNELFFBQUdYLEtBQUssQ0FBQ1UsV0FBTixDQUFrQixJQUFsQixDQUFILEVBQTJCO0FBQ3ZCLFdBQUtaLFFBQUwsR0FBZ0JFLEtBQUssQ0FBQ1ksY0FBTixDQUFxQixJQUFyQixDQUFoQjtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIO0FBcEJnRCxDQUE5QixDQUF2QjtBQXNCQUMsTUFBTSxDQUFDekIsV0FBUCxHQUFxQjBCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNCLFdBQXRDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgU2lldVhlRXZlbnQgPSB7fTtcclxuU2lldVhlRXZlbnQuUkVTUE9OU0VfTkFNRSA9IHtcclxuICAgIEJFVF9SRVMgOiBcInN4MVwiXHJcbn07XHJcblNpZXVYZUV2ZW50LkJldEV2ZW50ID0gQ2FzaW5vRXZlbnQuX0Jhc2VFdmVudC5leHRlbmQoe1xyXG4gICAgY3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKFNpZXVYZUV2ZW50LlJFU1BPTlNFX05BTUUuQkVUX1JFUyk7XHJcbiAgICAgICAgdGhpcy5mcmVlU3BpbiA9IDA7XHJcbiAgICAgICAgdGhpcy5mcmVlR2lmdCA9IFtdO1xyXG4gICAgfSxcclxuICAgIGZyb21FdmVudChldmVudCl7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgICAgID0gMTtcclxuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSBldmVudC5nZXREb3VibGUoXCJ3XCIpO1xyXG4gICAgICAgIHRoaXMubGluZVdpbiAgICA9IGV2ZW50LmdldEludEFycmF5KFwibHdcIik7XHJcbiAgICAgICAgdGhpcy5pc05vaHUgICAgID0gZXZlbnQuZ2V0Qm9vbChcIm5oXCIpO1xyXG4gICAgICAgIHRoaXMuaXNUaGFuZ0xvbiA9IGV2ZW50LmdldEJvb2woXCJ0bFwiKTtcclxuICAgICAgICB0aGlzLnJlc3VsdCAgICAgPSBldmVudC5nZXRJbnRBcnJheShcInJcIik7XHJcbiAgICAgICAgaWYoZXZlbnQuY29udGFpbnNLZXkoXCJmc1wiKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gPSBldmVudC5nZXRJbnQoXCJmc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZXZlbnQuY29udGFpbnNLZXkoXCJmZ1wiKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZUdpZnQgPSBldmVudC5nZXREb3VibGVBcnJheShcImZnXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbn0pO1xyXG53aW5kb3cuU2lldVhlRXZlbnQgPSBtb2R1bGUuZXhwb3J0cyA9IFNpZXVYZUV2ZW50OyJdfQ==
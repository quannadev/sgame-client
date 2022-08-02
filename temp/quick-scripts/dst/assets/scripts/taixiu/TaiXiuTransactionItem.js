
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/taixiu/TaiXiuTransactionItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7b87ddeFVVHWIjXopjEyKPP', 'TaiXiuTransactionItem');
// scripts/taixiu/TaiXiuTransactionItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbMucDat: cc.Label,
    lbResult: cc.Label,
    lbWin: cc.Label,
    lbRefund: cc.Label
  },
  init: function init(dataRank) {
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
    this.lbMucDat.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbResult.string = dataRank.result + " " + dataRank.cua;
    this.lbRefund.string = Utils.addDotToNumber(dataRank.refund);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdGFpeGl1XFxUYWlYaXVUcmFuc2FjdGlvbkl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJNdWNEYXQiLCJsYlJlc3VsdCIsImxiV2luIiwibGJSZWZ1bmQiLCJpbml0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwiVXRpbHMiLCJyZUZvcm1hdERpc3BsYXlUaW1lIiwidGltZSIsImFkZERvdFRvTnVtYmVyIiwid2luIiwic3Rha2VzIiwicmVzdWx0IiwiY3VhIiwicmVmdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFLSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsUUFBUSxFQUFNUCxFQUFFLENBQUNLLEtBSFQ7QUFJUkcsSUFBQUEsUUFBUSxFQUFLUixFQUFFLENBQUNLLEtBSlI7QUFLUkksSUFBQUEsS0FBSyxFQUFTVCxFQUFFLENBQUNLLEtBTFQ7QUFNUkssSUFBQUEsUUFBUSxFQUFHVixFQUFFLENBQUNLO0FBTk4sR0FIUDtBQVdMTSxFQUFBQSxJQVhLLGdCQVdBQyxRQVhBLEVBV1U7QUFDWCxTQUFLUixTQUFMLENBQWVTLE1BQWYsR0FBMEIsTUFBSUQsUUFBUSxDQUFDRSxPQUF2QztBQUNBLFNBQUtSLE1BQUwsQ0FBWU8sTUFBWixHQUEwQkUsS0FBSyxDQUFDQyxtQkFBTixDQUEwQkosUUFBUSxDQUFDSyxJQUFuQyxDQUExQjtBQUNBLFNBQUtSLEtBQUwsQ0FBV0ksTUFBWCxHQUEwQkUsS0FBSyxDQUFDRyxjQUFOLENBQXFCTixRQUFRLENBQUNPLEdBQTlCLENBQTFCO0FBQ0EsU0FBS1osUUFBTCxDQUFjTSxNQUFkLEdBQXVCRSxLQUFLLENBQUNHLGNBQU4sQ0FBcUJOLFFBQVEsQ0FBQ1EsTUFBOUIsQ0FBdkI7QUFDQSxTQUFLWixRQUFMLENBQWNLLE1BQWQsR0FBdUJELFFBQVEsQ0FBQ1MsTUFBVCxHQUFrQixHQUFsQixHQUF1QlQsUUFBUSxDQUFDVSxHQUF2RDtBQUNBLFNBQUtaLFFBQUwsQ0FBY0csTUFBZCxHQUF1QkUsS0FBSyxDQUFDRyxjQUFOLENBQXFCTixRQUFRLENBQUNXLE1BQTlCLENBQXZCO0FBQ0g7QUFsQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYk11Y0RhdCAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiUmVzdWx0ICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYldpbiAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiUmVmdW5kIDogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhUmFuaykge1xyXG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyAgID0gXCIjXCIrZGF0YVJhbmsuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IFV0aWxzLnJlRm9ybWF0RGlzcGxheVRpbWUoZGF0YVJhbmsudGltZSk7XHJcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xyXG4gICAgICAgIHRoaXMubGJNdWNEYXQuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsuc3Rha2VzKTtcclxuICAgICAgICB0aGlzLmxiUmVzdWx0LnN0cmluZyA9IGRhdGFSYW5rLnJlc3VsdCArIFwiIFwiICtkYXRhUmFuay5jdWE7XHJcbiAgICAgICAgdGhpcy5sYlJlZnVuZC5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay5yZWZ1bmQpO1xyXG4gICAgfVxyXG59KTtcclxuIl19
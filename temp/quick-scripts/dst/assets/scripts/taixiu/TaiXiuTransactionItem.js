
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RhaXhpdS9UYWlYaXVUcmFuc2FjdGlvbkl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJNdWNEYXQiLCJsYlJlc3VsdCIsImxiV2luIiwibGJSZWZ1bmQiLCJpbml0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwiVXRpbHMiLCJyZUZvcm1hdERpc3BsYXlUaW1lIiwidGltZSIsImFkZERvdFRvTnVtYmVyIiwid2luIiwic3Rha2VzIiwicmVzdWx0IiwiY3VhIiwicmVmdW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFLSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsUUFBUSxFQUFNUCxFQUFFLENBQUNLLEtBSFQ7QUFJUkcsSUFBQUEsUUFBUSxFQUFLUixFQUFFLENBQUNLLEtBSlI7QUFLUkksSUFBQUEsS0FBSyxFQUFTVCxFQUFFLENBQUNLLEtBTFQ7QUFNUkssSUFBQUEsUUFBUSxFQUFHVixFQUFFLENBQUNLO0FBTk4sR0FIUDtBQVdMTSxFQUFBQSxJQVhLLGdCQVdBQyxRQVhBLEVBV1U7QUFDWCxTQUFLUixTQUFMLENBQWVTLE1BQWYsR0FBMEIsTUFBSUQsUUFBUSxDQUFDRSxPQUF2QztBQUNBLFNBQUtSLE1BQUwsQ0FBWU8sTUFBWixHQUEwQkUsS0FBSyxDQUFDQyxtQkFBTixDQUEwQkosUUFBUSxDQUFDSyxJQUFuQyxDQUExQjtBQUNBLFNBQUtSLEtBQUwsQ0FBV0ksTUFBWCxHQUEwQkUsS0FBSyxDQUFDRyxjQUFOLENBQXFCTixRQUFRLENBQUNPLEdBQTlCLENBQTFCO0FBQ0EsU0FBS1osUUFBTCxDQUFjTSxNQUFkLEdBQXVCRSxLQUFLLENBQUNHLGNBQU4sQ0FBcUJOLFFBQVEsQ0FBQ1EsTUFBOUIsQ0FBdkI7QUFDQSxTQUFLWixRQUFMLENBQWNLLE1BQWQsR0FBdUJELFFBQVEsQ0FBQ1MsTUFBVCxHQUFrQixHQUFsQixHQUF1QlQsUUFBUSxDQUFDVSxHQUF2RDtBQUNBLFNBQUtaLFFBQUwsQ0FBY0csTUFBZCxHQUF1QkUsS0FBSyxDQUFDRyxjQUFOLENBQXFCTixRQUFRLENBQUNXLE1BQTlCLENBQXZCO0FBQ0g7QUFsQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk11Y0RhdCAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlJlc3VsdCAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiV2luICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiUmVmdW5kIDogY2MuTGFiZWwsXG4gICAgfSxcbiAgICBpbml0KGRhdGFSYW5rKSB7XG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyAgID0gXCIjXCIrZGF0YVJhbmsuc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSBVdGlscy5yZUZvcm1hdERpc3BsYXlUaW1lKGRhdGFSYW5rLnRpbWUpO1xuICAgICAgICB0aGlzLmxiV2luLnN0cmluZyAgICAgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLndpbik7XG4gICAgICAgIHRoaXMubGJNdWNEYXQuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsuc3Rha2VzKTtcbiAgICAgICAgdGhpcy5sYlJlc3VsdC5zdHJpbmcgPSBkYXRhUmFuay5yZXN1bHQgKyBcIiBcIiArZGF0YVJhbmsuY3VhO1xuICAgICAgICB0aGlzLmxiUmVmdW5kLnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLnJlZnVuZCk7XG4gICAgfVxufSk7XG4iXX0=
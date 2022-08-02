
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/ItemRouletteTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '73dffsApsVOsbB18KNzdG1T', 'ItemRouletteTransaction');
// scripts/roulette/ItemRouletteTransaction.js

"use strict";

var TypeBet = ["EVEN", "ODD", "RED", "BLACK", "1-18", "19-36", "1-12", "13-24", "25-36", "1SD", "2ND", "3RD"];
cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbBet: cc.Label,
    lbResult: cc.Label,
    lbBetValue: cc.Label,
    lbRefund: cc.Label,
    lbWin: cc.Label
  },
  init: function init(dataRank) {
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lbWin.string = Utils.addDotToNumber(parseFloat(dataRank.prizePot).toFixed(0));
    this.lbBet.string = this.getTypePot(dataRank.typePot);
    this.lbBetValue.string = Utils.addDotToNumber(parseFloat(dataRank.betPot).toFixed(0));
    this.lbResult.string = dataRank.result;
    this.lbRefund.string = "0";
  },
  getTypePot: function getTypePot(typePot) {
    if (typePot > 36) {
      return TypeBet[typePot % 37];
    }

    return typePot;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm91bGV0dGVcXEl0ZW1Sb3VsZXR0ZVRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbIlR5cGVCZXQiLCJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJTZXNzaW9uIiwiTGFiZWwiLCJsYlRpbWUiLCJsYkJldCIsImxiUmVzdWx0IiwibGJCZXRWYWx1ZSIsImxiUmVmdW5kIiwibGJXaW4iLCJpbml0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwiVXRpbHMiLCJyZUZvcm1hdERpc3BsYXlUaW1lIiwidGltZSIsImFkZERvdFRvTnVtYmVyIiwicGFyc2VGbG9hdCIsInByaXplUG90IiwidG9GaXhlZCIsImdldFR5cGVQb3QiLCJ0eXBlUG90IiwiYmV0UG90IiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBRyxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCLE9BQXZCLEVBQWdDLE1BQWhDLEVBQXdDLE9BQXhDLEVBQWlELE1BQWpELEVBQXlELE9BQXpELEVBQWtFLE9BQWxFLEVBQTJFLEtBQTNFLEVBQWtGLEtBQWxGLEVBQXlGLEtBQXpGLENBQWQ7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLEtBQUssRUFBUVAsRUFBRSxDQUFDSyxLQUhSO0FBSVJHLElBQUFBLFFBQVEsRUFBTVIsRUFBRSxDQUFDSyxLQUpUO0FBS1JJLElBQUFBLFVBQVUsRUFBSVQsRUFBRSxDQUFDSyxLQUxUO0FBTVJLLElBQUFBLFFBQVEsRUFBTVYsRUFBRSxDQUFDSyxLQU5UO0FBT1JNLElBQUFBLEtBQUssRUFBU1gsRUFBRSxDQUFDSztBQVBULEdBSFA7QUFZTE8sRUFBQUEsSUFaSyxnQkFZQUMsUUFaQSxFQVlVO0FBQ1gsU0FBS1QsU0FBTCxDQUFlVSxNQUFmLEdBQTBCLE1BQUlELFFBQVEsQ0FBQ0UsT0FBdkM7QUFDQSxTQUFLVCxNQUFMLENBQVlRLE1BQVosR0FBMEJFLEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEJKLFFBQVEsQ0FBQ0ssSUFBbkMsQ0FBMUI7QUFDQSxTQUFLUCxLQUFMLENBQVdHLE1BQVgsR0FBMEJFLEtBQUssQ0FBQ0csY0FBTixDQUFxQkMsVUFBVSxDQUFDUCxRQUFRLENBQUNRLFFBQVYsQ0FBVixDQUE4QkMsT0FBOUIsQ0FBc0MsQ0FBdEMsQ0FBckIsQ0FBMUI7QUFDQSxTQUFLZixLQUFMLENBQVdPLE1BQVgsR0FBMEIsS0FBS1MsVUFBTCxDQUFnQlYsUUFBUSxDQUFDVyxPQUF6QixDQUExQjtBQUNBLFNBQUtmLFVBQUwsQ0FBZ0JLLE1BQWhCLEdBQTBCRSxLQUFLLENBQUNHLGNBQU4sQ0FBcUJDLFVBQVUsQ0FBQ1AsUUFBUSxDQUFDWSxNQUFWLENBQVYsQ0FBNEJILE9BQTVCLENBQW9DLENBQXBDLENBQXJCLENBQTFCO0FBQ0EsU0FBS2QsUUFBTCxDQUFjTSxNQUFkLEdBQTBCRCxRQUFRLENBQUNhLE1BQW5DO0FBQ0EsU0FBS2hCLFFBQUwsQ0FBY0ksTUFBZCxHQUEwQixHQUExQjtBQUNILEdBcEJJO0FBcUJMUyxFQUFBQSxVQXJCSyxzQkFxQk1DLE9BckJOLEVBcUJlO0FBQ2hCLFFBQUlBLE9BQU8sR0FBRyxFQUFkLEVBQWlCO0FBQ2IsYUFBT3pCLE9BQU8sQ0FBQ3lCLE9BQU8sR0FBQyxFQUFULENBQWQ7QUFDSDs7QUFDRCxXQUFPQSxPQUFQO0FBQ0g7QUExQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFR5cGVCZXQgPSBbXCJFVkVOXCIsIFwiT0REXCIsIFwiUkVEXCIsIFwiQkxBQ0tcIiwgXCIxLTE4XCIsIFwiMTktMzZcIiwgXCIxLTEyXCIsIFwiMTMtMjRcIiwgXCIyNS0zNlwiLCBcIjFTRFwiLCBcIjJORFwiLCBcIjNSRFwiXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYkJldCAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJSZXN1bHQgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYkJldFZhbHVlICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiUmVmdW5kICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBpbml0KGRhdGFSYW5rKSB7XHJcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nICAgPSBcIiNcIitkYXRhUmFuay5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gVXRpbHMucmVGb3JtYXREaXNwbGF5VGltZShkYXRhUmFuay50aW1lKTtcclxuICAgICAgICB0aGlzLmxiV2luLnN0cmluZyAgICAgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHBhcnNlRmxvYXQoZGF0YVJhbmsucHJpemVQb3QpLnRvRml4ZWQoMCkpO1xyXG4gICAgICAgIHRoaXMubGJCZXQuc3RyaW5nICAgICAgID0gdGhpcy5nZXRUeXBlUG90KGRhdGFSYW5rLnR5cGVQb3QpO1xyXG4gICAgICAgIHRoaXMubGJCZXRWYWx1ZS5zdHJpbmcgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIocGFyc2VGbG9hdChkYXRhUmFuay5iZXRQb3QpLnRvRml4ZWQoMCkpO1xyXG4gICAgICAgIHRoaXMubGJSZXN1bHQuc3RyaW5nICAgID0gZGF0YVJhbmsucmVzdWx0O1xyXG4gICAgICAgIHRoaXMubGJSZWZ1bmQuc3RyaW5nICAgID0gXCIwXCI7XHJcbiAgICB9LFxyXG4gICAgZ2V0VHlwZVBvdCh0eXBlUG90KSB7XHJcbiAgICAgICAgaWYgKHR5cGVQb3QgPiAzNil7XHJcbiAgICAgICAgICAgIHJldHVybiBUeXBlQmV0W3R5cGVQb3QlMzddO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHlwZVBvdDtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
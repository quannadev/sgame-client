
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/VampireRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1da4fr1BO1M56OOEwvO8c3n', 'VampireRankItem');
// scripts/vampire/VampireRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbAccount: cc.Label,
    lbWin: cc.Label,
    lbDes: cc.Label
  },
  init: function init(stt, dataRank) {
    this.lbTime.string = dataRank.time;
    this.lbSession.string = dataRank.session;
    this.lbAccount.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVmFtcGlyZVJhbmtJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJCYXNlSXRlbUN1c3RvbSIsInByb3BlcnRpZXMiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiVGltZSIsImxiQWNjb3VudCIsImxiV2luIiwibGJEZXMiLCJpbml0Iiwic3R0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJ0aW1lIiwic2Vzc2lvbiIsImFjY291bnQiLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwid2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFLSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsU0FBUyxFQUFLUCxFQUFFLENBQUNLLEtBSFQ7QUFJUkcsSUFBQUEsS0FBSyxFQUFTUixFQUFFLENBQUNLLEtBSlQ7QUFLUkksSUFBQUEsS0FBSyxFQUFTVCxFQUFFLENBQUNLO0FBTFQsR0FIUDtBQVVMSyxFQUFBQSxJQVZLLGdCQVVBQyxHQVZBLEVBVUtDLFFBVkwsRUFVZTtBQUNoQixTQUFLTixNQUFMLENBQVlPLE1BQVosR0FBMEJELFFBQVEsQ0FBQ0UsSUFBbkM7QUFDQSxTQUFLVixTQUFMLENBQWVTLE1BQWYsR0FBMEJELFFBQVEsQ0FBQ0csT0FBbkM7QUFDQSxTQUFLUixTQUFMLENBQWVNLE1BQWYsR0FBMEJELFFBQVEsQ0FBQ0ksT0FBbkM7QUFDQSxTQUFLUixLQUFMLENBQVdLLE1BQVgsR0FBMEJJLEtBQUssQ0FBQ0MsY0FBTixDQUFxQk4sUUFBUSxDQUFDTyxHQUE5QixDQUExQjtBQUNIO0FBZkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYkFjY291bnQgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYldpbiAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYkRlcyAgICAgICA6IGNjLkxhYmVsLFxuICAgIH0sXG4gICAgaW5pdChzdHQsIGRhdGFSYW5rKSB7XG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gZGF0YVJhbmsudGltZTtcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nICAgPSBkYXRhUmFuay5zZXNzaW9uO1xuICAgICAgICB0aGlzLmxiQWNjb3VudC5zdHJpbmcgICA9IGRhdGFSYW5rLmFjY291bnQ7XG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcbiAgICB9XG59KTtcbiJdfQ==
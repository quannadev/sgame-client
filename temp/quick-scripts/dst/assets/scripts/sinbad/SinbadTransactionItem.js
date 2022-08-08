
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadTransactionItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '412e1wgkQ5BV7u1nFVPdDoR', 'SinbadTransactionItem');
// scripts/sinbad/SinbadTransactionItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbMucDat: cc.Label,
    lbWin: cc.Label,
    lbDetail: cc.Label,
    _dataRank: null
  },
  init: function init(dataRank) {
    this._dataRank = dataRank;
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = dataRank.time;
    this.lbMucDat.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UISinbadHistoryDetail", {
      pop: true,
      src: "sinbad",
      data: this._dataRank
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRUcmFuc2FjdGlvbkl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJNdWNEYXQiLCJsYldpbiIsImxiRGV0YWlsIiwiX2RhdGFSYW5rIiwiaW5pdCIsImRhdGFSYW5rIiwic3RyaW5nIiwic2Vzc2lvbiIsInRpbWUiLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwic3Rha2VzIiwid2luIiwiZXZlbnREZXRhaWwiLCJzaG93IiwicG9wIiwic3JjIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFFBQVEsRUFBTVAsRUFBRSxDQUFDSyxLQUhUO0FBSVJHLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDSyxLQUpUO0FBS1JJLElBQUFBLFFBQVEsRUFBTVQsRUFBRSxDQUFDSyxLQUxUO0FBTVJLLElBQUFBLFNBQVMsRUFBTTtBQU5QLEdBSFA7QUFXTEMsRUFBQUEsSUFYSyxnQkFXQUMsUUFYQSxFQVdVO0FBQ1gsU0FBS0YsU0FBTCxHQUFpQkUsUUFBakI7QUFDQSxTQUFLUixTQUFMLENBQWVTLE1BQWYsR0FBMEIsTUFBSUQsUUFBUSxDQUFDRSxPQUF2QztBQUNBLFNBQUtSLE1BQUwsQ0FBWU8sTUFBWixHQUEwQkQsUUFBUSxDQUFDRyxJQUFuQztBQUNBLFNBQUtSLFFBQUwsQ0FBY00sTUFBZCxHQUEwQkcsS0FBSyxDQUFDQyxjQUFOLENBQXFCTCxRQUFRLENBQUNNLE1BQTlCLENBQTFCO0FBQ0EsU0FBS1YsS0FBTCxDQUFXSyxNQUFYLEdBQTBCRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJMLFFBQVEsQ0FBQ08sR0FBOUIsQ0FBMUI7QUFDSCxHQWpCSTtBQWtCTEMsRUFBQUEsV0FsQksseUJBa0JTO0FBQ1YsU0FBS0MsSUFBTCxDQUFVLHVCQUFWLEVBQW1DO0FBQUNDLE1BQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLE1BQUFBLEdBQUcsRUFBRSxRQUFqQjtBQUEyQkMsTUFBQUEsSUFBSSxFQUFFLEtBQUtkO0FBQXRDLEtBQW5DO0FBQ0g7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk11Y0RhdCAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYldpbiAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYkRldGFpbCAgICA6IGNjLkxhYmVsLFxuICAgICAgICBfZGF0YVJhbmsgICA6ICBudWxsLFxuICAgIH0sXG4gICAgaW5pdChkYXRhUmFuaykge1xuICAgICAgICB0aGlzLl9kYXRhUmFuayA9IGRhdGFSYW5rO1xuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IFwiI1wiK2RhdGFSYW5rLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gZGF0YVJhbmsudGltZTtcbiAgICAgICAgdGhpcy5sYk11Y0RhdC5zdHJpbmcgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay5zdGFrZXMpO1xuICAgICAgICB0aGlzLmxiV2luLnN0cmluZyAgICAgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLndpbik7XG4gICAgfSxcbiAgICBldmVudERldGFpbCgpIHtcbiAgICAgICAgdGhpcy5zaG93KFwiVUlTaW5iYWRIaXN0b3J5RGV0YWlsXCIsIHtwb3A6IHRydWUsIHNyYzogXCJzaW5iYWRcIiwgZGF0YTogdGhpcy5fZGF0YVJhbmt9KVxuICAgIH1cblxufSk7XG4iXX0=
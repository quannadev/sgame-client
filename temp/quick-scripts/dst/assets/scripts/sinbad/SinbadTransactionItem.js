
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxTaW5iYWRUcmFuc2FjdGlvbkl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJNdWNEYXQiLCJsYldpbiIsImxiRGV0YWlsIiwiX2RhdGFSYW5rIiwiaW5pdCIsImRhdGFSYW5rIiwic3RyaW5nIiwic2Vzc2lvbiIsInRpbWUiLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwic3Rha2VzIiwid2luIiwiZXZlbnREZXRhaWwiLCJzaG93IiwicG9wIiwic3JjIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFFBQVEsRUFBTVAsRUFBRSxDQUFDSyxLQUhUO0FBSVJHLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDSyxLQUpUO0FBS1JJLElBQUFBLFFBQVEsRUFBTVQsRUFBRSxDQUFDSyxLQUxUO0FBTVJLLElBQUFBLFNBQVMsRUFBTTtBQU5QLEdBSFA7QUFXTEMsRUFBQUEsSUFYSyxnQkFXQUMsUUFYQSxFQVdVO0FBQ1gsU0FBS0YsU0FBTCxHQUFpQkUsUUFBakI7QUFDQSxTQUFLUixTQUFMLENBQWVTLE1BQWYsR0FBMEIsTUFBSUQsUUFBUSxDQUFDRSxPQUF2QztBQUNBLFNBQUtSLE1BQUwsQ0FBWU8sTUFBWixHQUEwQkQsUUFBUSxDQUFDRyxJQUFuQztBQUNBLFNBQUtSLFFBQUwsQ0FBY00sTUFBZCxHQUEwQkcsS0FBSyxDQUFDQyxjQUFOLENBQXFCTCxRQUFRLENBQUNNLE1BQTlCLENBQTFCO0FBQ0EsU0FBS1YsS0FBTCxDQUFXSyxNQUFYLEdBQTBCRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJMLFFBQVEsQ0FBQ08sR0FBOUIsQ0FBMUI7QUFDSCxHQWpCSTtBQWtCTEMsRUFBQUEsV0FsQksseUJBa0JTO0FBQ1YsU0FBS0MsSUFBTCxDQUFVLHVCQUFWLEVBQW1DO0FBQUNDLE1BQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLE1BQUFBLEdBQUcsRUFBRSxRQUFqQjtBQUEyQkMsTUFBQUEsSUFBSSxFQUFFLEtBQUtkO0FBQXRDLEtBQW5DO0FBQ0g7QUFwQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYk11Y0RhdCAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiV2luICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJEZXRhaWwgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBfZGF0YVJhbmsgICA6ICBudWxsLFxyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YVJhbmspIHtcclxuICAgICAgICB0aGlzLl9kYXRhUmFuayA9IGRhdGFSYW5rO1xyXG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyAgID0gXCIjXCIrZGF0YVJhbmsuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IGRhdGFSYW5rLnRpbWU7XHJcbiAgICAgICAgdGhpcy5sYk11Y0RhdC5zdHJpbmcgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay5zdGFrZXMpO1xyXG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcclxuICAgIH0sXHJcbiAgICBldmVudERldGFpbCgpIHtcclxuICAgICAgICB0aGlzLnNob3coXCJVSVNpbmJhZEhpc3RvcnlEZXRhaWxcIiwge3BvcDogdHJ1ZSwgc3JjOiBcInNpbmJhZFwiLCBkYXRhOiB0aGlzLl9kYXRhUmFua30pXHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
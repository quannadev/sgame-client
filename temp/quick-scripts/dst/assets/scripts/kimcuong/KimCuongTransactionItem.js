
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/KimCuongTransactionItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd1d58QdrrhLVo/dLlWg2cdD', 'KimCuongTransactionItem');
// scripts/kimcuong/KimCuongTransactionItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbStakes: cc.Label,
    lbWin: cc.Label,
    _dataRank: null
  },
  init: function init(dataRank) {
    this._dataRank = dataRank;
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lbStakes.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UIKimCuongHistoryDetail", {
      pop: true,
      src: "kimcuong",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXEtpbUN1b25nVHJhbnNhY3Rpb25JdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJCYXNlSXRlbUN1c3RvbSIsInByb3BlcnRpZXMiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiVGltZSIsImxiU3Rha2VzIiwibGJXaW4iLCJfZGF0YVJhbmsiLCJpbml0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwiVXRpbHMiLCJyZUZvcm1hdERpc3BsYXlUaW1lIiwidGltZSIsImFkZERvdFRvTnVtYmVyIiwic3Rha2VzIiwid2luIiwiZXZlbnREZXRhaWwiLCJzaG93IiwicG9wIiwic3JjIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFFBQVEsRUFBTVAsRUFBRSxDQUFDSyxLQUhUO0FBSVJHLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDSyxLQUpUO0FBS1JJLElBQUFBLFNBQVMsRUFBTTtBQUxQLEdBSFA7QUFVTEMsRUFBQUEsSUFWSyxnQkFVQUMsUUFWQSxFQVVVO0FBQ1gsU0FBS0YsU0FBTCxHQUFpQkUsUUFBakI7QUFDQSxTQUFLUCxTQUFMLENBQWVRLE1BQWYsR0FBMEIsTUFBSUQsUUFBUSxDQUFDRSxPQUF2QztBQUNBLFNBQUtQLE1BQUwsQ0FBWU0sTUFBWixHQUEwQkUsS0FBSyxDQUFDQyxtQkFBTixDQUEwQkosUUFBUSxDQUFDSyxJQUFuQyxDQUExQjtBQUNBLFNBQUtULFFBQUwsQ0FBY0ssTUFBZCxHQUF5QkUsS0FBSyxDQUFDRyxjQUFOLENBQXFCTixRQUFRLENBQUNPLE1BQTlCLENBQXpCO0FBQ0EsU0FBS1YsS0FBTCxDQUFXSSxNQUFYLEdBQTBCRSxLQUFLLENBQUNHLGNBQU4sQ0FBcUJOLFFBQVEsQ0FBQ1EsR0FBOUIsQ0FBMUI7QUFDSCxHQWhCSTtBQWlCTEMsRUFBQUEsV0FqQksseUJBaUJTO0FBQ1YsU0FBS0MsSUFBTCxDQUFVLHlCQUFWLEVBQXFDO0FBQUNDLE1BQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLE1BQUFBLEdBQUcsRUFBRSxVQUFqQjtBQUE2QkMsTUFBQUEsSUFBSSxFQUFFLEtBQUtmO0FBQXhDLEtBQXJDO0FBQ0g7QUFuQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYlN0YWtlcyAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiV2luICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgX2RhdGFSYW5rICAgOiAgbnVsbCxcclxuICAgIH0sXHJcbiAgICBpbml0KGRhdGFSYW5rKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVJhbmsgPSBkYXRhUmFuaztcclxuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IFwiI1wiK2RhdGFSYW5rLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSBVdGlscy5yZUZvcm1hdERpc3BsYXlUaW1lKGRhdGFSYW5rLnRpbWUpO1xyXG4gICAgICAgIHRoaXMubGJTdGFrZXMuc3RyaW5nICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay5zdGFrZXMpO1xyXG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcclxuICAgIH0sXHJcbiAgICBldmVudERldGFpbCgpIHtcclxuICAgICAgICB0aGlzLnNob3coXCJVSUtpbUN1b25nSGlzdG9yeURldGFpbFwiLCB7cG9wOiB0cnVlLCBzcmM6IFwia2ltY3VvbmdcIiwgZGF0YTogdGhpcy5fZGF0YVJhbmt9KVxyXG4gICAgfVxyXG59KTtcclxuIl19
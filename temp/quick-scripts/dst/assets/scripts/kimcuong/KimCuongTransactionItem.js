
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL0tpbUN1b25nVHJhbnNhY3Rpb25JdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJCYXNlSXRlbUN1c3RvbSIsInByb3BlcnRpZXMiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiVGltZSIsImxiU3Rha2VzIiwibGJXaW4iLCJfZGF0YVJhbmsiLCJpbml0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwiVXRpbHMiLCJyZUZvcm1hdERpc3BsYXlUaW1lIiwidGltZSIsImFkZERvdFRvTnVtYmVyIiwic3Rha2VzIiwid2luIiwiZXZlbnREZXRhaWwiLCJzaG93IiwicG9wIiwic3JjIiwiZGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFFBQVEsRUFBTVAsRUFBRSxDQUFDSyxLQUhUO0FBSVJHLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDSyxLQUpUO0FBS1JJLElBQUFBLFNBQVMsRUFBTTtBQUxQLEdBSFA7QUFVTEMsRUFBQUEsSUFWSyxnQkFVQUMsUUFWQSxFQVVVO0FBQ1gsU0FBS0YsU0FBTCxHQUFpQkUsUUFBakI7QUFDQSxTQUFLUCxTQUFMLENBQWVRLE1BQWYsR0FBMEIsTUFBSUQsUUFBUSxDQUFDRSxPQUF2QztBQUNBLFNBQUtQLE1BQUwsQ0FBWU0sTUFBWixHQUEwQkUsS0FBSyxDQUFDQyxtQkFBTixDQUEwQkosUUFBUSxDQUFDSyxJQUFuQyxDQUExQjtBQUNBLFNBQUtULFFBQUwsQ0FBY0ssTUFBZCxHQUF5QkUsS0FBSyxDQUFDRyxjQUFOLENBQXFCTixRQUFRLENBQUNPLE1BQTlCLENBQXpCO0FBQ0EsU0FBS1YsS0FBTCxDQUFXSSxNQUFYLEdBQTBCRSxLQUFLLENBQUNHLGNBQU4sQ0FBcUJOLFFBQVEsQ0FBQ1EsR0FBOUIsQ0FBMUI7QUFDSCxHQWhCSTtBQWlCTEMsRUFBQUEsV0FqQksseUJBaUJTO0FBQ1YsU0FBS0MsSUFBTCxDQUFVLHlCQUFWLEVBQXFDO0FBQUNDLE1BQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLE1BQUFBLEdBQUcsRUFBRSxVQUFqQjtBQUE2QkMsTUFBQUEsSUFBSSxFQUFFLEtBQUtmO0FBQXhDLEtBQXJDO0FBQ0g7QUFuQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlN0YWtlcyAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYldpbiAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBfZGF0YVJhbmsgICA6ICBudWxsLFxuICAgIH0sXG4gICAgaW5pdChkYXRhUmFuaykge1xuICAgICAgICB0aGlzLl9kYXRhUmFuayA9IGRhdGFSYW5rO1xuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IFwiI1wiK2RhdGFSYW5rLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gVXRpbHMucmVGb3JtYXREaXNwbGF5VGltZShkYXRhUmFuay50aW1lKTtcbiAgICAgICAgdGhpcy5sYlN0YWtlcy5zdHJpbmcgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLnN0YWtlcyk7XG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcbiAgICB9LFxuICAgIGV2ZW50RGV0YWlsKCkge1xuICAgICAgICB0aGlzLnNob3coXCJVSUtpbUN1b25nSGlzdG9yeURldGFpbFwiLCB7cG9wOiB0cnVlLCBzcmM6IFwia2ltY3VvbmdcIiwgZGF0YTogdGhpcy5fZGF0YVJhbmt9KVxuICAgIH1cbn0pO1xuIl19
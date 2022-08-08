
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/xocdia/XocDiaItemTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '649d1zpIAVJTagGV0gBAK2D', 'XocDiaItemTransaction');
// scripts/xocdia/XocDiaItemTransaction.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lb_cua_dat: cc.Label,
    lb_ketqua: cc.Label,
    lb_tongdat: cc.Label,
    lb_hoan_tra: cc.Label,
    lb_thuc_nhan: cc.Label,
    _dataRank: null
  },
  init: function init(dataHistory) {
    this._dataRank = dataHistory;
    this.lbSession.string = dataHistory.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataHistory.time);
    this.lb_cua_dat.string = dataHistory.cuadat;
    this.lb_thuc_nhan.string = Utils.addDotToNumber(dataHistory.win);
    this.lb_ketqua.string = dataHistory.ketqua;
    this.lb_tongdat.string = Utils.addDotToNumber(dataHistory.stakes);
    this.lb_hoan_tra.string = Utils.addDotToNumber(dataHistory.hoan_tra);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3hvY2RpYS9Yb2NEaWFJdGVtVHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJfY3VhX2RhdCIsImxiX2tldHF1YSIsImxiX3RvbmdkYXQiLCJsYl9ob2FuX3RyYSIsImxiX3RodWNfbmhhbiIsIl9kYXRhUmFuayIsImluaXQiLCJkYXRhSGlzdG9yeSIsInN0cmluZyIsInNlc3Npb24iLCJVdGlscyIsInJlRm9ybWF0RGlzcGxheVRpbWUiLCJ0aW1lIiwiY3VhZGF0IiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iLCJrZXRxdWEiLCJzdGFrZXMiLCJob2FuX3RyYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFVBQVUsRUFBRVAsRUFBRSxDQUFDSyxLQUhQO0FBSVJHLElBQUFBLFNBQVMsRUFBU1IsRUFBRSxDQUFDSyxLQUpiO0FBS1JJLElBQUFBLFVBQVUsRUFBRVQsRUFBRSxDQUFDSyxLQUxQO0FBTVJLLElBQUFBLFdBQVcsRUFBRVYsRUFBRSxDQUFDSyxLQU5SO0FBT1JNLElBQUFBLFlBQVksRUFBRVgsRUFBRSxDQUFDSyxLQVBUO0FBUVJPLElBQUFBLFNBQVMsRUFBTTtBQVJQLEdBSFA7QUFhTEMsRUFBQUEsSUFiSyxnQkFhQUMsV0FiQSxFQWFhO0FBQ2QsU0FBS0YsU0FBTCxHQUFpQkUsV0FBakI7QUFDQSxTQUFLVixTQUFMLENBQWVXLE1BQWYsR0FBMEJELFdBQVcsQ0FBQ0UsT0FBdEM7QUFDQSxTQUFLVixNQUFMLENBQVlTLE1BQVosR0FBMEJFLEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEJKLFdBQVcsQ0FBQ0ssSUFBdEMsQ0FBMUI7QUFDQSxTQUFLWixVQUFMLENBQWdCUSxNQUFoQixHQUEwQkQsV0FBVyxDQUFDTSxNQUF0QztBQUNBLFNBQUtULFlBQUwsQ0FBa0JJLE1BQWxCLEdBQWlDRSxLQUFLLENBQUNJLGNBQU4sQ0FBcUJQLFdBQVcsQ0FBQ1EsR0FBakMsQ0FBakM7QUFDQSxTQUFLZCxTQUFMLENBQWVPLE1BQWYsR0FBd0JELFdBQVcsQ0FBQ1MsTUFBcEM7QUFDQSxTQUFLZCxVQUFMLENBQWdCTSxNQUFoQixHQUF5QkUsS0FBSyxDQUFDSSxjQUFOLENBQXFCUCxXQUFXLENBQUNVLE1BQWpDLENBQXpCO0FBQ0EsU0FBS2QsV0FBTCxDQUFpQkssTUFBakIsR0FBMEJFLEtBQUssQ0FBQ0ksY0FBTixDQUFxQlAsV0FBVyxDQUFDVyxRQUFqQyxDQUExQjtBQUNIO0FBdEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGJTZXNzaW9uICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJfY3VhX2RhdDogY2MuTGFiZWwsXG4gICAgICAgIGxiX2tldHF1YSAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYl90b25nZGF0OiBjYy5MYWJlbCxcbiAgICAgICAgbGJfaG9hbl90cmE6IGNjLkxhYmVsLFxuICAgICAgICBsYl90aHVjX25oYW46IGNjLkxhYmVsLFxuICAgICAgICBfZGF0YVJhbmsgICA6ICBudWxsLFxuICAgIH0sXG4gICAgaW5pdChkYXRhSGlzdG9yeSkge1xuICAgICAgICB0aGlzLl9kYXRhUmFuayA9IGRhdGFIaXN0b3J5O1xuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IGRhdGFIaXN0b3J5LnNlc3Npb247XG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gVXRpbHMucmVGb3JtYXREaXNwbGF5VGltZShkYXRhSGlzdG9yeS50aW1lKTtcbiAgICAgICAgdGhpcy5sYl9jdWFfZGF0LnN0cmluZyAgPSBkYXRhSGlzdG9yeS5jdWFkYXQ7XG4gICAgICAgIHRoaXMubGJfdGh1Y19uaGFuLnN0cmluZyAgICAgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFIaXN0b3J5Lndpbik7XG4gICAgICAgIHRoaXMubGJfa2V0cXVhLnN0cmluZyA9IGRhdGFIaXN0b3J5LmtldHF1YTtcbiAgICAgICAgdGhpcy5sYl90b25nZGF0LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFIaXN0b3J5LnN0YWtlcyk7XG4gICAgICAgIHRoaXMubGJfaG9hbl90cmEuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YUhpc3RvcnkuaG9hbl90cmEpO1xuICAgIH0sXG59KTtcbiJdfQ==
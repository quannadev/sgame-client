
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xceG9jZGlhXFxYb2NEaWFJdGVtVHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJfY3VhX2RhdCIsImxiX2tldHF1YSIsImxiX3RvbmdkYXQiLCJsYl9ob2FuX3RyYSIsImxiX3RodWNfbmhhbiIsIl9kYXRhUmFuayIsImluaXQiLCJkYXRhSGlzdG9yeSIsInN0cmluZyIsInNlc3Npb24iLCJVdGlscyIsInJlRm9ybWF0RGlzcGxheVRpbWUiLCJ0aW1lIiwiY3VhZGF0IiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iLCJrZXRxdWEiLCJzdGFrZXMiLCJob2FuX3RyYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFVBQVUsRUFBRVAsRUFBRSxDQUFDSyxLQUhQO0FBSVJHLElBQUFBLFNBQVMsRUFBU1IsRUFBRSxDQUFDSyxLQUpiO0FBS1JJLElBQUFBLFVBQVUsRUFBRVQsRUFBRSxDQUFDSyxLQUxQO0FBTVJLLElBQUFBLFdBQVcsRUFBRVYsRUFBRSxDQUFDSyxLQU5SO0FBT1JNLElBQUFBLFlBQVksRUFBRVgsRUFBRSxDQUFDSyxLQVBUO0FBUVJPLElBQUFBLFNBQVMsRUFBTTtBQVJQLEdBSFA7QUFhTEMsRUFBQUEsSUFiSyxnQkFhQUMsV0FiQSxFQWFhO0FBQ2QsU0FBS0YsU0FBTCxHQUFpQkUsV0FBakI7QUFDQSxTQUFLVixTQUFMLENBQWVXLE1BQWYsR0FBMEJELFdBQVcsQ0FBQ0UsT0FBdEM7QUFDQSxTQUFLVixNQUFMLENBQVlTLE1BQVosR0FBMEJFLEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEJKLFdBQVcsQ0FBQ0ssSUFBdEMsQ0FBMUI7QUFDQSxTQUFLWixVQUFMLENBQWdCUSxNQUFoQixHQUEwQkQsV0FBVyxDQUFDTSxNQUF0QztBQUNBLFNBQUtULFlBQUwsQ0FBa0JJLE1BQWxCLEdBQWlDRSxLQUFLLENBQUNJLGNBQU4sQ0FBcUJQLFdBQVcsQ0FBQ1EsR0FBakMsQ0FBakM7QUFDQSxTQUFLZCxTQUFMLENBQWVPLE1BQWYsR0FBd0JELFdBQVcsQ0FBQ1MsTUFBcEM7QUFDQSxTQUFLZCxVQUFMLENBQWdCTSxNQUFoQixHQUF5QkUsS0FBSyxDQUFDSSxjQUFOLENBQXFCUCxXQUFXLENBQUNVLE1BQWpDLENBQXpCO0FBQ0EsU0FBS2QsV0FBTCxDQUFpQkssTUFBakIsR0FBMEJFLEtBQUssQ0FBQ0ksY0FBTixDQUFxQlAsV0FBVyxDQUFDVyxRQUFqQyxDQUExQjtBQUNIO0FBdEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJfY3VhX2RhdDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJfa2V0cXVhICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJfdG9uZ2RhdDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJfaG9hbl90cmE6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiX3RodWNfbmhhbjogY2MuTGFiZWwsXHJcbiAgICAgICAgX2RhdGFSYW5rICAgOiAgbnVsbCxcclxuICAgIH0sXHJcbiAgICBpbml0KGRhdGFIaXN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVJhbmsgPSBkYXRhSGlzdG9yeTtcclxuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IGRhdGFIaXN0b3J5LnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSBVdGlscy5yZUZvcm1hdERpc3BsYXlUaW1lKGRhdGFIaXN0b3J5LnRpbWUpO1xyXG4gICAgICAgIHRoaXMubGJfY3VhX2RhdC5zdHJpbmcgID0gZGF0YUhpc3RvcnkuY3VhZGF0O1xyXG4gICAgICAgIHRoaXMubGJfdGh1Y19uaGFuLnN0cmluZyAgICAgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFIaXN0b3J5Lndpbik7XHJcbiAgICAgICAgdGhpcy5sYl9rZXRxdWEuc3RyaW5nID0gZGF0YUhpc3Rvcnkua2V0cXVhO1xyXG4gICAgICAgIHRoaXMubGJfdG9uZ2RhdC5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhSGlzdG9yeS5zdGFrZXMpO1xyXG4gICAgICAgIHRoaXMubGJfaG9hbl90cmEuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YUhpc3RvcnkuaG9hbl90cmEpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
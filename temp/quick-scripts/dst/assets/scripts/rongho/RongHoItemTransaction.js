
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rongho/RongHoItemTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e226CcPRRKH66YJcKZFQOS', 'RongHoItemTransaction');
// scripts/rongho/RongHoItemTransaction.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lb_cua_dat: cc.Label,
    lb_ketqua: cc.Label,
    lb_tongdat: cc.Label,
    lb_win: cc.Label,
    _dataRank: null,
    _listResult: []
  },
  onLoad: function onLoad() {
    this._listResult = ['Rồng', 'Hòa', 'Hổ', 'Rô', 'Cơ', 'Tép', 'Bích'];
  },
  init: function init(dataHistory) {
    this._dataRank = dataHistory;
    this.lbSession.string = dataHistory.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataHistory.time);
    this.lb_cua_dat.string = dataHistory.cuadat;
    this.lb_win.string = Utils.addDotToNumber(dataHistory.win);
    var resultString = "";

    if (dataHistory.ketqua.length > 1) {
      var tren = parseInt(dataHistory.ketqua[0]);
      if (tren >= 0) resultString = this._listResult[tren];
      var duoi = parseInt(dataHistory.ketqua[1]);
      if (duoi >= 0) resultString += ", " + this._listResult[duoi];
    }

    this.lb_ketqua.string = resultString;
    this.lb_tongdat.string = Utils.addDotToNumber(dataHistory.stakes);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Jvbmdoby9Sb25nSG9JdGVtVHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJfY3VhX2RhdCIsImxiX2tldHF1YSIsImxiX3RvbmdkYXQiLCJsYl93aW4iLCJfZGF0YVJhbmsiLCJfbGlzdFJlc3VsdCIsIm9uTG9hZCIsImluaXQiLCJkYXRhSGlzdG9yeSIsInN0cmluZyIsInNlc3Npb24iLCJVdGlscyIsInJlRm9ybWF0RGlzcGxheVRpbWUiLCJ0aW1lIiwiY3VhZGF0IiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iLCJyZXN1bHRTdHJpbmciLCJrZXRxdWEiLCJsZW5ndGgiLCJ0cmVuIiwicGFyc2VJbnQiLCJkdW9pIiwic3Rha2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFLSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsVUFBVSxFQUFFUCxFQUFFLENBQUNLLEtBSFA7QUFJUkcsSUFBQUEsU0FBUyxFQUFTUixFQUFFLENBQUNLLEtBSmI7QUFLUkksSUFBQUEsVUFBVSxFQUFFVCxFQUFFLENBQUNLLEtBTFA7QUFNUkssSUFBQUEsTUFBTSxFQUFFVixFQUFFLENBQUNLLEtBTkg7QUFPUk0sSUFBQUEsU0FBUyxFQUFNLElBUFA7QUFRUkMsSUFBQUEsV0FBVyxFQUFNO0FBUlQsR0FIUDtBQWFMQyxFQUFBQSxNQWJLLG9CQWFJO0FBQ0wsU0FBS0QsV0FBTCxHQUFtQixDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLEtBQWxDLEVBQXlDLE1BQXpDLENBQW5CO0FBQ0gsR0FmSTtBQWdCTEUsRUFBQUEsSUFoQkssZ0JBZ0JBQyxXQWhCQSxFQWdCYTtBQUNkLFNBQUtKLFNBQUwsR0FBaUJJLFdBQWpCO0FBQ0EsU0FBS1gsU0FBTCxDQUFlWSxNQUFmLEdBQTBCRCxXQUFXLENBQUNFLE9BQXRDO0FBQ0EsU0FBS1gsTUFBTCxDQUFZVSxNQUFaLEdBQTBCRSxLQUFLLENBQUNDLG1CQUFOLENBQTBCSixXQUFXLENBQUNLLElBQXRDLENBQTFCO0FBQ0EsU0FBS2IsVUFBTCxDQUFnQlMsTUFBaEIsR0FBMkJELFdBQVcsQ0FBQ00sTUFBdkM7QUFDQSxTQUFLWCxNQUFMLENBQVlNLE1BQVosR0FBMkJFLEtBQUssQ0FBQ0ksY0FBTixDQUFxQlAsV0FBVyxDQUFDUSxHQUFqQyxDQUEzQjtBQUNBLFFBQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFDQSxRQUFJVCxXQUFXLENBQUNVLE1BQVosQ0FBbUJDLE1BQW5CLEdBQTRCLENBQWhDLEVBQWtDO0FBQzlCLFVBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDYixXQUFXLENBQUNVLE1BQVosQ0FBbUIsQ0FBbkIsQ0FBRCxDQUFuQjtBQUNBLFVBQUlFLElBQUksSUFBSSxDQUFaLEVBQ0lILFlBQVksR0FBRyxLQUFLWixXQUFMLENBQWlCZSxJQUFqQixDQUFmO0FBQ0osVUFBSUUsSUFBSSxHQUFHRCxRQUFRLENBQUNiLFdBQVcsQ0FBQ1UsTUFBWixDQUFtQixDQUFuQixDQUFELENBQW5CO0FBQ0EsVUFBSUksSUFBSSxJQUFJLENBQVosRUFDSUwsWUFBWSxJQUFJLE9BQUssS0FBS1osV0FBTCxDQUFpQmlCLElBQWpCLENBQXJCO0FBQ1A7O0FBQ0QsU0FBS3JCLFNBQUwsQ0FBZVEsTUFBZixHQUF3QlEsWUFBeEI7QUFDQSxTQUFLZixVQUFMLENBQWdCTyxNQUFoQixHQUF5QkUsS0FBSyxDQUFDSSxjQUFOLENBQXFCUCxXQUFXLENBQUNlLE1BQWpDLENBQXpCO0FBQ0g7QUFqQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYl9jdWFfZGF0OiBjYy5MYWJlbCxcbiAgICAgICAgbGJfa2V0cXVhICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiX3RvbmdkYXQ6IGNjLkxhYmVsLFxuICAgICAgICBsYl93aW46IGNjLkxhYmVsLFxuICAgICAgICBfZGF0YVJhbmsgICA6ICBudWxsLFxuICAgICAgICBfbGlzdFJlc3VsdCAgIDogIFtdLFxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9saXN0UmVzdWx0ID0gWydS4buTbmcnLCAnSMOyYScsICdI4buVJywgJ1LDtCcsICdDxqEnLCAnVMOpcCcsICdCw61jaCddO1xuICAgIH0sXG4gICAgaW5pdChkYXRhSGlzdG9yeSkge1xuICAgICAgICB0aGlzLl9kYXRhUmFuayA9IGRhdGFIaXN0b3J5O1xuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IGRhdGFIaXN0b3J5LnNlc3Npb247XG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gVXRpbHMucmVGb3JtYXREaXNwbGF5VGltZShkYXRhSGlzdG9yeS50aW1lKTtcbiAgICAgICAgdGhpcy5sYl9jdWFfZGF0LnN0cmluZyAgID0gZGF0YUhpc3RvcnkuY3VhZGF0O1xuICAgICAgICB0aGlzLmxiX3dpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhSGlzdG9yeS53aW4pO1xuICAgICAgICBsZXQgcmVzdWx0U3RyaW5nID0gXCJcIjtcbiAgICAgICAgaWYgKGRhdGFIaXN0b3J5LmtldHF1YS5sZW5ndGggPiAxKXtcbiAgICAgICAgICAgIGxldCB0cmVuID0gcGFyc2VJbnQoZGF0YUhpc3Rvcnkua2V0cXVhWzBdKTtcbiAgICAgICAgICAgIGlmICh0cmVuID49IDApXG4gICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nID0gdGhpcy5fbGlzdFJlc3VsdFt0cmVuXTtcbiAgICAgICAgICAgIGxldCBkdW9pID0gcGFyc2VJbnQoZGF0YUhpc3Rvcnkua2V0cXVhWzFdKTtcbiAgICAgICAgICAgIGlmIChkdW9pID49IDApXG4gICAgICAgICAgICAgICAgcmVzdWx0U3RyaW5nICs9IFwiLCBcIit0aGlzLl9saXN0UmVzdWx0W2R1b2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJfa2V0cXVhLnN0cmluZyA9IHJlc3VsdFN0cmluZztcbiAgICAgICAgdGhpcy5sYl90b25nZGF0LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFIaXN0b3J5LnN0YWtlcyk7XG4gICAgfSxcbn0pO1xuIl19
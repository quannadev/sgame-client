
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm9uZ2hvXFxSb25nSG9JdGVtVHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJfY3VhX2RhdCIsImxiX2tldHF1YSIsImxiX3RvbmdkYXQiLCJsYl93aW4iLCJfZGF0YVJhbmsiLCJfbGlzdFJlc3VsdCIsIm9uTG9hZCIsImluaXQiLCJkYXRhSGlzdG9yeSIsInN0cmluZyIsInNlc3Npb24iLCJVdGlscyIsInJlRm9ybWF0RGlzcGxheVRpbWUiLCJ0aW1lIiwiY3VhZGF0IiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iLCJyZXN1bHRTdHJpbmciLCJrZXRxdWEiLCJsZW5ndGgiLCJ0cmVuIiwicGFyc2VJbnQiLCJkdW9pIiwic3Rha2VzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsU0FBUyxFQUFLSixFQUFFLENBQUNLLEtBRFQ7QUFFUkMsSUFBQUEsTUFBTSxFQUFRTixFQUFFLENBQUNLLEtBRlQ7QUFHUkUsSUFBQUEsVUFBVSxFQUFFUCxFQUFFLENBQUNLLEtBSFA7QUFJUkcsSUFBQUEsU0FBUyxFQUFTUixFQUFFLENBQUNLLEtBSmI7QUFLUkksSUFBQUEsVUFBVSxFQUFFVCxFQUFFLENBQUNLLEtBTFA7QUFNUkssSUFBQUEsTUFBTSxFQUFFVixFQUFFLENBQUNLLEtBTkg7QUFPUk0sSUFBQUEsU0FBUyxFQUFNLElBUFA7QUFRUkMsSUFBQUEsV0FBVyxFQUFNO0FBUlQsR0FIUDtBQWFMQyxFQUFBQSxNQWJLLG9CQWFJO0FBQ0wsU0FBS0QsV0FBTCxHQUFtQixDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLEVBQWtDLEtBQWxDLEVBQXlDLE1BQXpDLENBQW5CO0FBQ0gsR0FmSTtBQWdCTEUsRUFBQUEsSUFoQkssZ0JBZ0JBQyxXQWhCQSxFQWdCYTtBQUNkLFNBQUtKLFNBQUwsR0FBaUJJLFdBQWpCO0FBQ0EsU0FBS1gsU0FBTCxDQUFlWSxNQUFmLEdBQTBCRCxXQUFXLENBQUNFLE9BQXRDO0FBQ0EsU0FBS1gsTUFBTCxDQUFZVSxNQUFaLEdBQTBCRSxLQUFLLENBQUNDLG1CQUFOLENBQTBCSixXQUFXLENBQUNLLElBQXRDLENBQTFCO0FBQ0EsU0FBS2IsVUFBTCxDQUFnQlMsTUFBaEIsR0FBMkJELFdBQVcsQ0FBQ00sTUFBdkM7QUFDQSxTQUFLWCxNQUFMLENBQVlNLE1BQVosR0FBMkJFLEtBQUssQ0FBQ0ksY0FBTixDQUFxQlAsV0FBVyxDQUFDUSxHQUFqQyxDQUEzQjtBQUNBLFFBQUlDLFlBQVksR0FBRyxFQUFuQjs7QUFDQSxRQUFJVCxXQUFXLENBQUNVLE1BQVosQ0FBbUJDLE1BQW5CLEdBQTRCLENBQWhDLEVBQWtDO0FBQzlCLFVBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDYixXQUFXLENBQUNVLE1BQVosQ0FBbUIsQ0FBbkIsQ0FBRCxDQUFuQjtBQUNBLFVBQUlFLElBQUksSUFBSSxDQUFaLEVBQ0lILFlBQVksR0FBRyxLQUFLWixXQUFMLENBQWlCZSxJQUFqQixDQUFmO0FBQ0osVUFBSUUsSUFBSSxHQUFHRCxRQUFRLENBQUNiLFdBQVcsQ0FBQ1UsTUFBWixDQUFtQixDQUFuQixDQUFELENBQW5CO0FBQ0EsVUFBSUksSUFBSSxJQUFJLENBQVosRUFDSUwsWUFBWSxJQUFJLE9BQUssS0FBS1osV0FBTCxDQUFpQmlCLElBQWpCLENBQXJCO0FBQ1A7O0FBQ0QsU0FBS3JCLFNBQUwsQ0FBZVEsTUFBZixHQUF3QlEsWUFBeEI7QUFDQSxTQUFLZixVQUFMLENBQWdCTyxNQUFoQixHQUF5QkUsS0FBSyxDQUFDSSxjQUFOLENBQXFCUCxXQUFXLENBQUNlLE1BQWpDLENBQXpCO0FBQ0g7QUFqQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYl9jdWFfZGF0OiBjYy5MYWJlbCxcclxuICAgICAgICBsYl9rZXRxdWEgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYl90b25nZGF0OiBjYy5MYWJlbCxcclxuICAgICAgICBsYl93aW46IGNjLkxhYmVsLFxyXG4gICAgICAgIF9kYXRhUmFuayAgIDogIG51bGwsXHJcbiAgICAgICAgX2xpc3RSZXN1bHQgICA6ICBbXSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5fbGlzdFJlc3VsdCA9IFsnUuG7k25nJywgJ0jDsmEnLCAnSOG7lScsICdSw7QnLCAnQ8ahJywgJ1TDqXAnLCAnQsOtY2gnXTtcclxuICAgIH0sXHJcbiAgICBpbml0KGRhdGFIaXN0b3J5KSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVJhbmsgPSBkYXRhSGlzdG9yeTtcclxuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IGRhdGFIaXN0b3J5LnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSBVdGlscy5yZUZvcm1hdERpc3BsYXlUaW1lKGRhdGFIaXN0b3J5LnRpbWUpO1xyXG4gICAgICAgIHRoaXMubGJfY3VhX2RhdC5zdHJpbmcgICA9IGRhdGFIaXN0b3J5LmN1YWRhdDtcclxuICAgICAgICB0aGlzLmxiX3dpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhSGlzdG9yeS53aW4pO1xyXG4gICAgICAgIGxldCByZXN1bHRTdHJpbmcgPSBcIlwiO1xyXG4gICAgICAgIGlmIChkYXRhSGlzdG9yeS5rZXRxdWEubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgIGxldCB0cmVuID0gcGFyc2VJbnQoZGF0YUhpc3Rvcnkua2V0cXVhWzBdKTtcclxuICAgICAgICAgICAgaWYgKHRyZW4gPj0gMClcclxuICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyA9IHRoaXMuX2xpc3RSZXN1bHRbdHJlbl07XHJcbiAgICAgICAgICAgIGxldCBkdW9pID0gcGFyc2VJbnQoZGF0YUhpc3Rvcnkua2V0cXVhWzFdKTtcclxuICAgICAgICAgICAgaWYgKGR1b2kgPj0gMClcclxuICAgICAgICAgICAgICAgIHJlc3VsdFN0cmluZyArPSBcIiwgXCIrdGhpcy5fbGlzdFJlc3VsdFtkdW9pXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYl9rZXRxdWEuc3RyaW5nID0gcmVzdWx0U3RyaW5nO1xyXG4gICAgICAgIHRoaXMubGJfdG9uZ2RhdC5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhSGlzdG9yeS5zdGFrZXMpO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
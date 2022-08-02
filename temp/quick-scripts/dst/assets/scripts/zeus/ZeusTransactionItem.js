
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/ZeusTransactionItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8b771omZChDF7cu6tIKECgV', 'ZeusTransactionItem');
// scripts/zeus/ZeusTransactionItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    bgItem: cc.Node,
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbMucDat: cc.Label,
    lbWin: cc.Label,
    _dataRank: null
  },
  init: function init(idx, dataRank) {
    this._dataRank = dataRank;
    this.bgItem.active = idx % 2 == 1;
    this.lbSession.string = "#" + dataRank.session;
    this.lbTime.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lbMucDat.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UIZeusHistoryDetail", {
      pop: true,
      src: "zeus",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcWmV1c1RyYW5zYWN0aW9uSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwiYmdJdGVtIiwiTm9kZSIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJNdWNEYXQiLCJsYldpbiIsIl9kYXRhUmFuayIsImluaXQiLCJpZHgiLCJkYXRhUmFuayIsImFjdGl2ZSIsInN0cmluZyIsInNlc3Npb24iLCJVdGlscyIsInJlRm9ybWF0RGlzcGxheVRpbWUiLCJ0aW1lIiwiYWRkRG90VG9OdW1iZXIiLCJzdGFrZXMiLCJ3aW4iLCJldmVudERldGFpbCIsInNob3ciLCJwb3AiLCJzcmMiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFRSixFQUFFLENBQUNLLElBRFQ7QUFFUkMsSUFBQUEsU0FBUyxFQUFLTixFQUFFLENBQUNPLEtBRlQ7QUFHUkMsSUFBQUEsTUFBTSxFQUFRUixFQUFFLENBQUNPLEtBSFQ7QUFJUkUsSUFBQUEsUUFBUSxFQUFNVCxFQUFFLENBQUNPLEtBSlQ7QUFLUkcsSUFBQUEsS0FBSyxFQUFTVixFQUFFLENBQUNPLEtBTFQ7QUFNUkksSUFBQUEsU0FBUyxFQUFNO0FBTlAsR0FIUDtBQVdMQyxFQUFBQSxJQVhLLGdCQVdBQyxHQVhBLEVBV0tDLFFBWEwsRUFXZTtBQUNoQixTQUFLSCxTQUFMLEdBQWlCRyxRQUFqQjtBQUNBLFNBQUtWLE1BQUwsQ0FBWVcsTUFBWixHQUEwQkYsR0FBRyxHQUFHLENBQU4sSUFBVSxDQUFwQztBQUNBLFNBQUtQLFNBQUwsQ0FBZVUsTUFBZixHQUEwQixNQUFJRixRQUFRLENBQUNHLE9BQXZDO0FBQ0EsU0FBS1QsTUFBTCxDQUFZUSxNQUFaLEdBQTBCRSxLQUFLLENBQUNDLG1CQUFOLENBQTBCTCxRQUFRLENBQUNNLElBQW5DLENBQTFCO0FBQ0EsU0FBS1gsUUFBTCxDQUFjTyxNQUFkLEdBQTRCRSxLQUFLLENBQUNHLGNBQU4sQ0FBcUJQLFFBQVEsQ0FBQ1EsTUFBOUIsQ0FBNUI7QUFDQSxTQUFLWixLQUFMLENBQVdNLE1BQVgsR0FBMEJFLEtBQUssQ0FBQ0csY0FBTixDQUFxQlAsUUFBUSxDQUFDUyxHQUE5QixDQUExQjtBQUNILEdBbEJJO0FBbUJMQyxFQUFBQSxXQW5CSyx5QkFtQlM7QUFDVixTQUFLQyxJQUFMLENBQVUscUJBQVYsRUFBaUM7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFLElBQU47QUFBWUMsTUFBQUEsR0FBRyxFQUFFLE1BQWpCO0FBQXlCQyxNQUFBQSxJQUFJLEVBQUUsS0FBS2pCO0FBQXBDLEtBQWpDO0FBQ0g7QUFyQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJnSXRlbSAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJNdWNEYXQgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYldpbiAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIF9kYXRhUmFuayAgIDogIG51bGwsXHJcbiAgICB9LFxyXG4gICAgaW5pdChpZHgsIGRhdGFSYW5rKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YVJhbmsgPSBkYXRhUmFuaztcclxuICAgICAgICB0aGlzLmJnSXRlbS5hY3RpdmUgICAgICA9IGlkeCAlIDIgPT0xO1xyXG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyAgID0gXCIjXCIrZGF0YVJhbmsuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IFV0aWxzLnJlRm9ybWF0RGlzcGxheVRpbWUoZGF0YVJhbmsudGltZSk7XHJcbiAgICAgICAgdGhpcy5sYk11Y0RhdC5zdHJpbmcgICAgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLnN0YWtlcyk7XHJcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xyXG4gICAgfSxcclxuICAgIGV2ZW50RGV0YWlsKCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyhcIlVJWmV1c0hpc3RvcnlEZXRhaWxcIiwge3BvcDogdHJ1ZSwgc3JjOiBcInpldXNcIiwgZGF0YTogdGhpcy5fZGF0YVJhbmt9KVxyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==
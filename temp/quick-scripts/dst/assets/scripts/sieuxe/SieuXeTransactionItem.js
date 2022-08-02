
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sieuxe/SieuXeTransactionItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'efcdaujomZIK7Yg54aycUmB', 'SieuXeTransactionItem');
// scripts/sieuxe/SieuXeTransactionItem.js

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
    this.lbSession.string = dataRank.session;
    this.lbTime.string = dataRank.time;
    this.lbStakes.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UISieuXeTransactionDetail", {
      pop: true,
      src: 'sieuxe',
      data: {
        map: this._dataRank.resultMap,
        session: this._dataRank.session,
        win: this._dataRank.win
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2lldXhlXFxTaWV1WGVUcmFuc2FjdGlvbkl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJTdGFrZXMiLCJsYldpbiIsIl9kYXRhUmFuayIsImluaXQiLCJkYXRhUmFuayIsInN0cmluZyIsInNlc3Npb24iLCJ0aW1lIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsInN0YWtlcyIsIndpbiIsImV2ZW50RGV0YWlsIiwic2hvdyIsInBvcCIsInNyYyIsImRhdGEiLCJtYXAiLCJyZXN1bHRNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUtKLEVBQUUsQ0FBQ0ssS0FEVDtBQUVSQyxJQUFBQSxNQUFNLEVBQVFOLEVBQUUsQ0FBQ0ssS0FGVDtBQUdSRSxJQUFBQSxRQUFRLEVBQU1QLEVBQUUsQ0FBQ0ssS0FIVDtBQUlSRyxJQUFBQSxLQUFLLEVBQVNSLEVBQUUsQ0FBQ0ssS0FKVDtBQUtSSSxJQUFBQSxTQUFTLEVBQU07QUFMUCxHQUhQO0FBVUxDLEVBQUFBLElBVkssZ0JBVUFDLFFBVkEsRUFVVTtBQUNYLFNBQUtGLFNBQUwsR0FBaUJFLFFBQWpCO0FBQ0EsU0FBS1AsU0FBTCxDQUFlUSxNQUFmLEdBQTBCRCxRQUFRLENBQUNFLE9BQW5DO0FBQ0EsU0FBS1AsTUFBTCxDQUFZTSxNQUFaLEdBQTBCRCxRQUFRLENBQUNHLElBQW5DO0FBQ0EsU0FBS1AsUUFBTCxDQUFjSyxNQUFkLEdBQXlCRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJMLFFBQVEsQ0FBQ00sTUFBOUIsQ0FBekI7QUFDQSxTQUFLVCxLQUFMLENBQVdJLE1BQVgsR0FBMEJHLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkwsUUFBUSxDQUFDTyxHQUE5QixDQUExQjtBQUNILEdBaEJJO0FBaUJMQyxFQUFBQSxXQWpCSyx5QkFpQlM7QUFDVixTQUFLQyxJQUFMLENBQVUsMkJBQVYsRUFBdUM7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFLElBQU47QUFBWUMsTUFBQUEsR0FBRyxFQUFFLFFBQWpCO0FBQTJCQyxNQUFBQSxJQUFJLEVBQUU7QUFBQ0MsUUFBQUEsR0FBRyxFQUFFLEtBQUtmLFNBQUwsQ0FBZWdCLFNBQXJCO0FBQWdDWixRQUFBQSxPQUFPLEVBQUUsS0FBS0osU0FBTCxDQUFlSSxPQUF4RDtBQUFpRUssUUFBQUEsR0FBRyxFQUFFLEtBQUtULFNBQUwsQ0FBZVM7QUFBckY7QUFBakMsS0FBdkM7QUFDSDtBQW5CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGJTZXNzaW9uICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYlRpbWUgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiU3Rha2VzICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBfZGF0YVJhbmsgICA6ICBudWxsLFxyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YVJhbmspIHtcclxuICAgICAgICB0aGlzLl9kYXRhUmFuayA9IGRhdGFSYW5rO1xyXG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyAgID0gZGF0YVJhbmsuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IGRhdGFSYW5rLnRpbWU7XHJcbiAgICAgICAgdGhpcy5sYlN0YWtlcy5zdHJpbmcgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLnN0YWtlcyk7XHJcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xyXG4gICAgfSxcclxuICAgIGV2ZW50RGV0YWlsKCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyhcIlVJU2lldVhlVHJhbnNhY3Rpb25EZXRhaWxcIiwge3BvcDogdHJ1ZSwgc3JjOiAnc2lldXhlJywgZGF0YToge21hcDogdGhpcy5fZGF0YVJhbmsucmVzdWx0TWFwLCBzZXNzaW9uOiB0aGlzLl9kYXRhUmFuay5zZXNzaW9uLCB3aW46IHRoaXMuX2RhdGFSYW5rLndpbn19KTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=
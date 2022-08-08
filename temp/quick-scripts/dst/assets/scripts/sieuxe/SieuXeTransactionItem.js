
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpZXV4ZS9TaWV1WGVUcmFuc2FjdGlvbkl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUaW1lIiwibGJTdGFrZXMiLCJsYldpbiIsIl9kYXRhUmFuayIsImluaXQiLCJkYXRhUmFuayIsInN0cmluZyIsInNlc3Npb24iLCJ0aW1lIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsInN0YWtlcyIsIndpbiIsImV2ZW50RGV0YWlsIiwic2hvdyIsInBvcCIsInNyYyIsImRhdGEiLCJtYXAiLCJyZXN1bHRNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUtKLEVBQUUsQ0FBQ0ssS0FEVDtBQUVSQyxJQUFBQSxNQUFNLEVBQVFOLEVBQUUsQ0FBQ0ssS0FGVDtBQUdSRSxJQUFBQSxRQUFRLEVBQU1QLEVBQUUsQ0FBQ0ssS0FIVDtBQUlSRyxJQUFBQSxLQUFLLEVBQVNSLEVBQUUsQ0FBQ0ssS0FKVDtBQUtSSSxJQUFBQSxTQUFTLEVBQU07QUFMUCxHQUhQO0FBVUxDLEVBQUFBLElBVkssZ0JBVUFDLFFBVkEsRUFVVTtBQUNYLFNBQUtGLFNBQUwsR0FBaUJFLFFBQWpCO0FBQ0EsU0FBS1AsU0FBTCxDQUFlUSxNQUFmLEdBQTBCRCxRQUFRLENBQUNFLE9BQW5DO0FBQ0EsU0FBS1AsTUFBTCxDQUFZTSxNQUFaLEdBQTBCRCxRQUFRLENBQUNHLElBQW5DO0FBQ0EsU0FBS1AsUUFBTCxDQUFjSyxNQUFkLEdBQXlCRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJMLFFBQVEsQ0FBQ00sTUFBOUIsQ0FBekI7QUFDQSxTQUFLVCxLQUFMLENBQVdJLE1BQVgsR0FBMEJHLEtBQUssQ0FBQ0MsY0FBTixDQUFxQkwsUUFBUSxDQUFDTyxHQUE5QixDQUExQjtBQUNILEdBaEJJO0FBaUJMQyxFQUFBQSxXQWpCSyx5QkFpQlM7QUFDVixTQUFLQyxJQUFMLENBQVUsMkJBQVYsRUFBdUM7QUFBQ0MsTUFBQUEsR0FBRyxFQUFFLElBQU47QUFBWUMsTUFBQUEsR0FBRyxFQUFFLFFBQWpCO0FBQTJCQyxNQUFBQSxJQUFJLEVBQUU7QUFBQ0MsUUFBQUEsR0FBRyxFQUFFLEtBQUtmLFNBQUwsQ0FBZWdCLFNBQXJCO0FBQWdDWixRQUFBQSxPQUFPLEVBQUUsS0FBS0osU0FBTCxDQUFlSSxPQUF4RDtBQUFpRUssUUFBQUEsR0FBRyxFQUFFLEtBQUtULFNBQUwsQ0FBZVM7QUFBckY7QUFBakMsS0FBdkM7QUFDSDtBQW5CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiU3Rha2VzICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiV2luICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIF9kYXRhUmFuayAgIDogIG51bGwsXG4gICAgfSxcbiAgICBpbml0KGRhdGFSYW5rKSB7XG4gICAgICAgIHRoaXMuX2RhdGFSYW5rID0gZGF0YVJhbms7XG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyAgID0gZGF0YVJhbmsuc2Vzc2lvbjtcbiAgICAgICAgdGhpcy5sYlRpbWUuc3RyaW5nICAgICAgPSBkYXRhUmFuay50aW1lO1xuICAgICAgICB0aGlzLmxiU3Rha2VzLnN0cmluZyAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsuc3Rha2VzKTtcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xuICAgIH0sXG4gICAgZXZlbnREZXRhaWwoKSB7XG4gICAgICAgIHRoaXMuc2hvdyhcIlVJU2lldVhlVHJhbnNhY3Rpb25EZXRhaWxcIiwge3BvcDogdHJ1ZSwgc3JjOiAnc2lldXhlJywgZGF0YToge21hcDogdGhpcy5fZGF0YVJhbmsucmVzdWx0TWFwLCBzZXNzaW9uOiB0aGlzLl9kYXRhUmFuay5zZXNzaW9uLCB3aW46IHRoaXMuX2RhdGFSYW5rLndpbn19KTtcbiAgICB9XG5cbn0pO1xuIl19
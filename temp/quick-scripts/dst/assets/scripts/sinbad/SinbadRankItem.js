
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8e3baaTjshBjrBxMbEWhQjz', 'SinbadRankItem');
// scripts/sinbad/SinbadRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbSession: cc.Label,
    lbTime: cc.Label,
    lbAccount: cc.Label,
    lbWin: cc.Label,
    lbDes: cc.Label
  },
  init: function init(id, dataRank) {
    this.lbTime.string = dataRank.time;
    this.lbSession.string = "#" + dataRank.session;
    this.lbAccount.string = dataRank.account;
    this.lbDes.string = dataRank.win_type;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxTaW5iYWRSYW5rSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJTZXNzaW9uIiwiTGFiZWwiLCJsYlRpbWUiLCJsYkFjY291bnQiLCJsYldpbiIsImxiRGVzIiwiaW5pdCIsImlkIiwiZGF0YVJhbmsiLCJzdHJpbmciLCJ0aW1lIiwic2Vzc2lvbiIsImFjY291bnQiLCJ3aW5fdHlwZSIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUtKLEVBQUUsQ0FBQ0ssS0FEVDtBQUVSQyxJQUFBQSxNQUFNLEVBQVFOLEVBQUUsQ0FBQ0ssS0FGVDtBQUdSRSxJQUFBQSxTQUFTLEVBQUtQLEVBQUUsQ0FBQ0ssS0FIVDtBQUlSRyxJQUFBQSxLQUFLLEVBQVNSLEVBQUUsQ0FBQ0ssS0FKVDtBQUtSSSxJQUFBQSxLQUFLLEVBQVNULEVBQUUsQ0FBQ0s7QUFMVCxHQUhQO0FBVUxLLEVBQUFBLElBVkssZ0JBVUFDLEVBVkEsRUFVSUMsUUFWSixFQVVjO0FBQ2YsU0FBS04sTUFBTCxDQUFZTyxNQUFaLEdBQTBCRCxRQUFRLENBQUNFLElBQW5DO0FBQ0EsU0FBS1YsU0FBTCxDQUFlUyxNQUFmLEdBQTBCLE1BQUlELFFBQVEsQ0FBQ0csT0FBdkM7QUFDQSxTQUFLUixTQUFMLENBQWVNLE1BQWYsR0FBMEJELFFBQVEsQ0FBQ0ksT0FBbkM7QUFDQSxTQUFLUCxLQUFMLENBQVdJLE1BQVgsR0FBMEJELFFBQVEsQ0FBQ0ssUUFBbkM7QUFDQSxTQUFLVCxLQUFMLENBQVdLLE1BQVgsR0FBMEJLLEtBQUssQ0FBQ0MsY0FBTixDQUFxQlAsUUFBUSxDQUFDUSxHQUE5QixDQUExQjtBQUNIO0FBaEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJBY2NvdW50ICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYldpbiAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiRGVzICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgaW5pdChpZCwgZGF0YVJhbmspIHtcclxuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IGRhdGFSYW5rLnRpbWU7XHJcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nICAgPSBcIiNcIitkYXRhUmFuay5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMubGJBY2NvdW50LnN0cmluZyAgID0gZGF0YVJhbmsuYWNjb3VudDtcclxuICAgICAgICB0aGlzLmxiRGVzLnN0cmluZyAgICAgICA9IGRhdGFSYW5rLndpbl90eXBlO1xyXG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
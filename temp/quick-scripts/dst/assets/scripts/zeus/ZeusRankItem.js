
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/ZeusRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67567IO8ytEOLx19xqvyNTX', 'ZeusRankItem');
// scripts/zeus/ZeusRankItem.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcWmV1c1JhbmtJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJCYXNlSXRlbUN1c3RvbSIsInByb3BlcnRpZXMiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiVGltZSIsImxiQWNjb3VudCIsImxiV2luIiwibGJEZXMiLCJpbml0IiwiaWQiLCJkYXRhUmFuayIsInN0cmluZyIsInRpbWUiLCJzZXNzaW9uIiwiYWNjb3VudCIsIndpbl90eXBlIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsIndpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFNBQVMsRUFBS1AsRUFBRSxDQUFDSyxLQUhUO0FBSVJHLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDSyxLQUpUO0FBS1JJLElBQUFBLEtBQUssRUFBU1QsRUFBRSxDQUFDSztBQUxULEdBSFA7QUFVTEssRUFBQUEsSUFWSyxnQkFVQUMsRUFWQSxFQVVJQyxRQVZKLEVBVWM7QUFDZixTQUFLTixNQUFMLENBQVlPLE1BQVosR0FBMEJELFFBQVEsQ0FBQ0UsSUFBbkM7QUFDQSxTQUFLVixTQUFMLENBQWVTLE1BQWYsR0FBMEIsTUFBSUQsUUFBUSxDQUFDRyxPQUF2QztBQUNBLFNBQUtSLFNBQUwsQ0FBZU0sTUFBZixHQUEwQkQsUUFBUSxDQUFDSSxPQUFuQztBQUNBLFNBQUtQLEtBQUwsQ0FBV0ksTUFBWCxHQUEwQkQsUUFBUSxDQUFDSyxRQUFuQztBQUNBLFNBQUtULEtBQUwsQ0FBV0ssTUFBWCxHQUEwQkssS0FBSyxDQUFDQyxjQUFOLENBQXFCUCxRQUFRLENBQUNRLEdBQTlCLENBQTFCO0FBQ0g7QUFoQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYkFjY291bnQgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiV2luICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJEZXMgICAgICAgOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBpbml0KGlkLCBkYXRhUmFuaykge1xyXG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gZGF0YVJhbmsudGltZTtcclxuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgICA9IFwiI1wiK2RhdGFSYW5rLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5sYkFjY291bnQuc3RyaW5nICAgPSBkYXRhUmFuay5hY2NvdW50O1xyXG4gICAgICAgIHRoaXMubGJEZXMuc3RyaW5nICAgICAgID0gZGF0YVJhbmsud2luX3R5cGU7XHJcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xyXG4gICAgfVxyXG59KTtcclxuIl19
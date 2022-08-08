
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/minipoker/MiniPokerRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd74deKLKrZFUJxC2r3mrnfX', 'MiniPokerRankItem');
// scripts/minipoker/MiniPokerRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lb_stt: cc.Label,
    lbName: cc.Label,
    lbWin: cc.Label
  },
  init: function init(dataRank) {
    this.lb_stt.string = dataRank.session;
    this.lbName.string = dataRank.account;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21pbmlwb2tlci9NaW5pUG9rZXJSYW5rSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJfc3R0IiwiTGFiZWwiLCJsYk5hbWUiLCJsYldpbiIsImluaXQiLCJkYXRhUmFuayIsInN0cmluZyIsInNlc3Npb24iLCJhY2NvdW50IiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsIndpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBUUosRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLEtBQUssRUFBU1AsRUFBRSxDQUFDSztBQUhULEdBSFA7QUFRTEcsRUFBQUEsSUFSSyxnQkFRQUMsUUFSQSxFQVFVO0FBQ1gsU0FBS0wsTUFBTCxDQUFZTSxNQUFaLEdBQTBCRCxRQUFRLENBQUNFLE9BQW5DO0FBQ0EsU0FBS0wsTUFBTCxDQUFZSSxNQUFaLEdBQTBCRCxRQUFRLENBQUNHLE9BQW5DO0FBQ0EsU0FBS0wsS0FBTCxDQUFXRyxNQUFYLEdBQTBCRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJMLFFBQVEsQ0FBQ00sR0FBOUIsQ0FBMUI7QUFDSDtBQVpJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGJfc3R0ICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJOYW1lICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbFxuICAgIH0sXG4gICAgaW5pdChkYXRhUmFuaykge1xuICAgICAgICB0aGlzLmxiX3N0dC5zdHJpbmcgICAgICA9IGRhdGFSYW5rLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJOYW1lLnN0cmluZyAgICAgID0gZGF0YVJhbmsuYWNjb3VudDtcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xuICAgIH1cbn0pO1xuIl19
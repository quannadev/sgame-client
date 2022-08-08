
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/KimCuongRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1cc7f3nrzZPoZVT5dKl2V8G', 'KimCuongRankItem');
// scripts/kimcuong/KimCuongRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    bgRank: cc.Node,
    lbStt: cc.Label,
    lbWin: cc.Label,
    lbAccount: cc.Label,
    lbTime: cc.Label,
    lbDes: cc.Label
  },
  init: function init(stt, dataRank) {
    this.bgRank.active = stt % 2 == 1;
    this.lbStt.string = "#" + dataRank.session;
    this.lbAccount.string = dataRank.account;
    this.lbTime.string = dataRank.time;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL0tpbUN1b25nUmFua0l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImJnUmFuayIsIk5vZGUiLCJsYlN0dCIsIkxhYmVsIiwibGJXaW4iLCJsYkFjY291bnQiLCJsYlRpbWUiLCJsYkRlcyIsImluaXQiLCJzdHQiLCJkYXRhUmFuayIsImFjdGl2ZSIsInN0cmluZyIsInNlc3Npb24iLCJhY2NvdW50IiwidGltZSIsIndpbl90eXBlIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsIndpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBU0osRUFBRSxDQUFDSyxJQURWO0FBRVJDLElBQUFBLEtBQUssRUFBU04sRUFBRSxDQUFDTyxLQUZUO0FBR1JDLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDTyxLQUhUO0FBSVJFLElBQUFBLFNBQVMsRUFBS1QsRUFBRSxDQUFDTyxLQUpUO0FBS1JHLElBQUFBLE1BQU0sRUFBUVYsRUFBRSxDQUFDTyxLQUxUO0FBTVJJLElBQUFBLEtBQUssRUFBU1gsRUFBRSxDQUFDTztBQU5ULEdBSFA7QUFXTEssRUFBQUEsSUFYSyxnQkFXQUMsR0FYQSxFQVdLQyxRQVhMLEVBV2U7QUFDaEIsU0FBS1YsTUFBTCxDQUFZVyxNQUFaLEdBQTBCRixHQUFHLEdBQUMsQ0FBSixJQUFRLENBQWxDO0FBQ0EsU0FBS1AsS0FBTCxDQUFXVSxNQUFYLEdBQTBCLE1BQUlGLFFBQVEsQ0FBQ0csT0FBdkM7QUFDQSxTQUFLUixTQUFMLENBQWVPLE1BQWYsR0FBMEJGLFFBQVEsQ0FBQ0ksT0FBbkM7QUFDQSxTQUFLUixNQUFMLENBQVlNLE1BQVosR0FBMEJGLFFBQVEsQ0FBQ0ssSUFBbkM7QUFDQSxTQUFLUixLQUFMLENBQVdLLE1BQVgsR0FBMEJGLFFBQVEsQ0FBQ00sUUFBbkM7QUFDQSxTQUFLWixLQUFMLENBQVdRLE1BQVgsR0FBMEJLLEtBQUssQ0FBQ0MsY0FBTixDQUFxQlIsUUFBUSxDQUFDUyxHQUE5QixDQUExQjtBQUNIO0FBbEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgYmdSYW5rICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgbGJTdHQgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJBY2NvdW50ICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJEZXMgICAgICAgOiBjYy5MYWJlbCxcbiAgICB9LFxuICAgIGluaXQoc3R0LCBkYXRhUmFuaykge1xuICAgICAgICB0aGlzLmJnUmFuay5hY3RpdmUgICAgICA9IHN0dCUyID09MTtcbiAgICAgICAgdGhpcy5sYlN0dC5zdHJpbmcgICAgICAgPSBcIiNcIitkYXRhUmFuay5zZXNzaW9uO1xuICAgICAgICB0aGlzLmxiQWNjb3VudC5zdHJpbmcgICA9IGRhdGFSYW5rLmFjY291bnQ7XG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gZGF0YVJhbmsudGltZTtcbiAgICAgICAgdGhpcy5sYkRlcy5zdHJpbmcgICAgICAgPSBkYXRhUmFuay53aW5fdHlwZTtcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xuICAgIH1cbn0pO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXEtpbUN1b25nUmFua0l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImJnUmFuayIsIk5vZGUiLCJsYlN0dCIsIkxhYmVsIiwibGJXaW4iLCJsYkFjY291bnQiLCJsYlRpbWUiLCJsYkRlcyIsImluaXQiLCJzdHQiLCJkYXRhUmFuayIsImFjdGl2ZSIsInN0cmluZyIsInNlc3Npb24iLCJhY2NvdW50IiwidGltZSIsIndpbl90eXBlIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsIndpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE1BQU0sRUFBU0osRUFBRSxDQUFDSyxJQURWO0FBRVJDLElBQUFBLEtBQUssRUFBU04sRUFBRSxDQUFDTyxLQUZUO0FBR1JDLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDTyxLQUhUO0FBSVJFLElBQUFBLFNBQVMsRUFBS1QsRUFBRSxDQUFDTyxLQUpUO0FBS1JHLElBQUFBLE1BQU0sRUFBUVYsRUFBRSxDQUFDTyxLQUxUO0FBTVJJLElBQUFBLEtBQUssRUFBU1gsRUFBRSxDQUFDTztBQU5ULEdBSFA7QUFXTEssRUFBQUEsSUFYSyxnQkFXQUMsR0FYQSxFQVdLQyxRQVhMLEVBV2U7QUFDaEIsU0FBS1YsTUFBTCxDQUFZVyxNQUFaLEdBQTBCRixHQUFHLEdBQUMsQ0FBSixJQUFRLENBQWxDO0FBQ0EsU0FBS1AsS0FBTCxDQUFXVSxNQUFYLEdBQTBCLE1BQUlGLFFBQVEsQ0FBQ0csT0FBdkM7QUFDQSxTQUFLUixTQUFMLENBQWVPLE1BQWYsR0FBMEJGLFFBQVEsQ0FBQ0ksT0FBbkM7QUFDQSxTQUFLUixNQUFMLENBQVlNLE1BQVosR0FBMEJGLFFBQVEsQ0FBQ0ssSUFBbkM7QUFDQSxTQUFLUixLQUFMLENBQVdLLE1BQVgsR0FBMEJGLFFBQVEsQ0FBQ00sUUFBbkM7QUFDQSxTQUFLWixLQUFMLENBQVdRLE1BQVgsR0FBMEJLLEtBQUssQ0FBQ0MsY0FBTixDQUFxQlIsUUFBUSxDQUFDUyxHQUE5QixDQUExQjtBQUNIO0FBbEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZ1JhbmsgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxiU3R0ICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYkFjY291bnQgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJEZXMgICAgICAgOiBjYy5MYWJlbCxcclxuICAgIH0sXHJcbiAgICBpbml0KHN0dCwgZGF0YVJhbmspIHtcclxuICAgICAgICB0aGlzLmJnUmFuay5hY3RpdmUgICAgICA9IHN0dCUyID09MTtcclxuICAgICAgICB0aGlzLmxiU3R0LnN0cmluZyAgICAgICA9IFwiI1wiK2RhdGFSYW5rLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5sYkFjY291bnQuc3RyaW5nICAgPSBkYXRhUmFuay5hY2NvdW50O1xyXG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gZGF0YVJhbmsudGltZTtcclxuICAgICAgICB0aGlzLmxiRGVzLnN0cmluZyAgICAgICA9IGRhdGFSYW5rLndpbl90eXBlO1xyXG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
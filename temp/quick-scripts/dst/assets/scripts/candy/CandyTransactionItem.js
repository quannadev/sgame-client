
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/CandyTransactionItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0360vAsI9HnoA5Zrwuwbf7', 'CandyTransactionItem');
// scripts/candy/CandyTransactionItem.js

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
    this.lbTime.string = Utils.reFormatDisplayTime(dataRank.time);
    this.lbStakes.string = Utils.addDotToNumber(dataRank.stakes);
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
  },
  eventDetail: function eventDetail() {
    this.show("UICandyTransactionDetail", {
      src: "candy",
      data: this._dataRank,
      pop: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FuZHlcXENhbmR5VHJhbnNhY3Rpb25JdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJCYXNlSXRlbUN1c3RvbSIsInByb3BlcnRpZXMiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiVGltZSIsImxiU3Rha2VzIiwibGJXaW4iLCJfZGF0YVJhbmsiLCJpbml0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwiVXRpbHMiLCJyZUZvcm1hdERpc3BsYXlUaW1lIiwidGltZSIsImFkZERvdFRvTnVtYmVyIiwic3Rha2VzIiwid2luIiwiZXZlbnREZXRhaWwiLCJzaG93Iiwic3JjIiwiZGF0YSIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFFBQVEsRUFBTVAsRUFBRSxDQUFDSyxLQUhUO0FBSVJHLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDSyxLQUpUO0FBS1JJLElBQUFBLFNBQVMsRUFBTTtBQUxQLEdBSFA7QUFVTEMsRUFBQUEsSUFWSyxnQkFVQUMsUUFWQSxFQVVVO0FBQ1gsU0FBS0YsU0FBTCxHQUFpQkUsUUFBakI7QUFDQSxTQUFLUCxTQUFMLENBQWVRLE1BQWYsR0FBMEJELFFBQVEsQ0FBQ0UsT0FBbkM7QUFDQSxTQUFLUCxNQUFMLENBQVlNLE1BQVosR0FBMEJFLEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEJKLFFBQVEsQ0FBQ0ssSUFBbkMsQ0FBMUI7QUFDQSxTQUFLVCxRQUFMLENBQWNLLE1BQWQsR0FBMEJFLEtBQUssQ0FBQ0csY0FBTixDQUFxQk4sUUFBUSxDQUFDTyxNQUE5QixDQUExQjtBQUNBLFNBQUtWLEtBQUwsQ0FBV0ksTUFBWCxHQUEwQkUsS0FBSyxDQUFDRyxjQUFOLENBQXFCTixRQUFRLENBQUNRLEdBQTlCLENBQTFCO0FBQ0gsR0FoQkk7QUFpQkxDLEVBQUFBLFdBakJLLHlCQWlCUztBQUNWLFNBQUtDLElBQUwsQ0FBVSwwQkFBVixFQUFzQztBQUFDQyxNQUFBQSxHQUFHLEVBQUUsT0FBTjtBQUFlQyxNQUFBQSxJQUFJLEVBQUUsS0FBS2QsU0FBMUI7QUFBcUNlLE1BQUFBLEdBQUcsRUFBRTtBQUExQyxLQUF0QztBQUNIO0FBbkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiVGltZSAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJTdGFrZXMgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYldpbiAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIF9kYXRhUmFuayAgIDogIG51bGwsXHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhUmFuaykge1xyXG4gICAgICAgIHRoaXMuX2RhdGFSYW5rID0gZGF0YVJhbms7XHJcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nICAgPSBkYXRhUmFuay5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gVXRpbHMucmVGb3JtYXREaXNwbGF5VGltZShkYXRhUmFuay50aW1lKTtcclxuICAgICAgICB0aGlzLmxiU3Rha2VzLnN0cmluZyAgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLnN0YWtlcyk7XHJcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xyXG4gICAgfSxcclxuICAgIGV2ZW50RGV0YWlsKCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyhcIlVJQ2FuZHlUcmFuc2FjdGlvbkRldGFpbFwiLCB7c3JjOiBcImNhbmR5XCIsIGRhdGE6IHRoaXMuX2RhdGFSYW5rLCBwb3A6IHRydWV9KVxyXG4gICAgfVxyXG5cclxufSk7XHJcbiJdfQ==
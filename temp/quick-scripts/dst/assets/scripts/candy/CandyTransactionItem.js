
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbmR5L0NhbmR5VHJhbnNhY3Rpb25JdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJCYXNlSXRlbUN1c3RvbSIsInByb3BlcnRpZXMiLCJsYlNlc3Npb24iLCJMYWJlbCIsImxiVGltZSIsImxiU3Rha2VzIiwibGJXaW4iLCJfZGF0YVJhbmsiLCJpbml0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJzZXNzaW9uIiwiVXRpbHMiLCJyZUZvcm1hdERpc3BsYXlUaW1lIiwidGltZSIsImFkZERvdFRvTnVtYmVyIiwic3Rha2VzIiwid2luIiwiZXZlbnREZXRhaWwiLCJzaG93Iiwic3JjIiwiZGF0YSIsInBvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBS0osRUFBRSxDQUFDSyxLQURUO0FBRVJDLElBQUFBLE1BQU0sRUFBUU4sRUFBRSxDQUFDSyxLQUZUO0FBR1JFLElBQUFBLFFBQVEsRUFBTVAsRUFBRSxDQUFDSyxLQUhUO0FBSVJHLElBQUFBLEtBQUssRUFBU1IsRUFBRSxDQUFDSyxLQUpUO0FBS1JJLElBQUFBLFNBQVMsRUFBTTtBQUxQLEdBSFA7QUFVTEMsRUFBQUEsSUFWSyxnQkFVQUMsUUFWQSxFQVVVO0FBQ1gsU0FBS0YsU0FBTCxHQUFpQkUsUUFBakI7QUFDQSxTQUFLUCxTQUFMLENBQWVRLE1BQWYsR0FBMEJELFFBQVEsQ0FBQ0UsT0FBbkM7QUFDQSxTQUFLUCxNQUFMLENBQVlNLE1BQVosR0FBMEJFLEtBQUssQ0FBQ0MsbUJBQU4sQ0FBMEJKLFFBQVEsQ0FBQ0ssSUFBbkMsQ0FBMUI7QUFDQSxTQUFLVCxRQUFMLENBQWNLLE1BQWQsR0FBMEJFLEtBQUssQ0FBQ0csY0FBTixDQUFxQk4sUUFBUSxDQUFDTyxNQUE5QixDQUExQjtBQUNBLFNBQUtWLEtBQUwsQ0FBV0ksTUFBWCxHQUEwQkUsS0FBSyxDQUFDRyxjQUFOLENBQXFCTixRQUFRLENBQUNRLEdBQTlCLENBQTFCO0FBQ0gsR0FoQkk7QUFpQkxDLEVBQUFBLFdBakJLLHlCQWlCUztBQUNWLFNBQUtDLElBQUwsQ0FBVSwwQkFBVixFQUFzQztBQUFDQyxNQUFBQSxHQUFHLEVBQUUsT0FBTjtBQUFlQyxNQUFBQSxJQUFJLEVBQUUsS0FBS2QsU0FBMUI7QUFBcUNlLE1BQUFBLEdBQUcsRUFBRTtBQUExQyxLQUF0QztBQUNIO0FBbkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGJTZXNzaW9uICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJTdGFrZXMgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgX2RhdGFSYW5rICAgOiAgbnVsbCxcbiAgICB9LFxuICAgIGluaXQoZGF0YVJhbmspIHtcbiAgICAgICAgdGhpcy5fZGF0YVJhbmsgPSBkYXRhUmFuaztcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nICAgPSBkYXRhUmFuay5zZXNzaW9uO1xuICAgICAgICB0aGlzLmxiVGltZS5zdHJpbmcgICAgICA9IFV0aWxzLnJlRm9ybWF0RGlzcGxheVRpbWUoZGF0YVJhbmsudGltZSk7XG4gICAgICAgIHRoaXMubGJTdGFrZXMuc3RyaW5nICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsuc3Rha2VzKTtcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgICAgICAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xuICAgIH0sXG4gICAgZXZlbnREZXRhaWwoKSB7XG4gICAgICAgIHRoaXMuc2hvdyhcIlVJQ2FuZHlUcmFuc2FjdGlvbkRldGFpbFwiLCB7c3JjOiBcImNhbmR5XCIsIGRhdGE6IHRoaXMuX2RhdGFSYW5rLCBwb3A6IHRydWV9KVxuICAgIH1cblxufSk7XG4iXX0=
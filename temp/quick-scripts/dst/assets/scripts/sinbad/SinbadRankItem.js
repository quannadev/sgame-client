
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRSYW5rSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJTZXNzaW9uIiwiTGFiZWwiLCJsYlRpbWUiLCJsYkFjY291bnQiLCJsYldpbiIsImxiRGVzIiwiaW5pdCIsImlkIiwiZGF0YVJhbmsiLCJzdHJpbmciLCJ0aW1lIiwic2Vzc2lvbiIsImFjY291bnQiLCJ3aW5fdHlwZSIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxTQUFTLEVBQUtKLEVBQUUsQ0FBQ0ssS0FEVDtBQUVSQyxJQUFBQSxNQUFNLEVBQVFOLEVBQUUsQ0FBQ0ssS0FGVDtBQUdSRSxJQUFBQSxTQUFTLEVBQUtQLEVBQUUsQ0FBQ0ssS0FIVDtBQUlSRyxJQUFBQSxLQUFLLEVBQVNSLEVBQUUsQ0FBQ0ssS0FKVDtBQUtSSSxJQUFBQSxLQUFLLEVBQVNULEVBQUUsQ0FBQ0s7QUFMVCxHQUhQO0FBVUxLLEVBQUFBLElBVkssZ0JBVUFDLEVBVkEsRUFVSUMsUUFWSixFQVVjO0FBQ2YsU0FBS04sTUFBTCxDQUFZTyxNQUFaLEdBQTBCRCxRQUFRLENBQUNFLElBQW5DO0FBQ0EsU0FBS1YsU0FBTCxDQUFlUyxNQUFmLEdBQTBCLE1BQUlELFFBQVEsQ0FBQ0csT0FBdkM7QUFDQSxTQUFLUixTQUFMLENBQWVNLE1BQWYsR0FBMEJELFFBQVEsQ0FBQ0ksT0FBbkM7QUFDQSxTQUFLUCxLQUFMLENBQVdJLE1BQVgsR0FBMEJELFFBQVEsQ0FBQ0ssUUFBbkM7QUFDQSxTQUFLVCxLQUFMLENBQVdLLE1BQVgsR0FBMEJLLEtBQUssQ0FBQ0MsY0FBTixDQUFxQlAsUUFBUSxDQUFDUSxHQUE5QixDQUExQjtBQUNIO0FBaEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGJTZXNzaW9uICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJUaW1lICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJBY2NvdW50ICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJEZXMgICAgICAgOiBjYy5MYWJlbCxcbiAgICB9LFxuICAgIGluaXQoaWQsIGRhdGFSYW5rKSB7XG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyAgICAgID0gZGF0YVJhbmsudGltZTtcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nICAgPSBcIiNcIitkYXRhUmFuay5zZXNzaW9uO1xuICAgICAgICB0aGlzLmxiQWNjb3VudC5zdHJpbmcgICA9IGRhdGFSYW5rLmFjY291bnQ7XG4gICAgICAgIHRoaXMubGJEZXMuc3RyaW5nICAgICAgID0gZGF0YVJhbmsud2luX3R5cGU7XG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICAgICAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcbiAgICB9XG59KTtcbiJdfQ==
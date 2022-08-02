
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/taixiu/TaiXiuDuaTop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ee6af1rUH1DE7BzpLWH9aT7', 'TaiXiuDuaTop');
// scripts/taixiu/TaiXiuDuaTop.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbTime: cc.Label,
    lbName: cc.Label,
    lbWin: cc.Label
  },
  init: function init(dataRank) {
    this.lbTime.string = dataRank.time;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdGFpeGl1XFxUYWlYaXVEdWFUb3AuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiVGltZSIsIkxhYmVsIiwibGJOYW1lIiwibGJXaW4iLCJpbml0IiwiZGF0YVJhbmsiLCJzdHJpbmciLCJ0aW1lIiwiYWNjb3VudCIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQU9KLEVBQUUsQ0FBQ0ssS0FEUjtBQUVSQyxJQUFBQSxNQUFNLEVBQU9OLEVBQUUsQ0FBQ0ssS0FGUjtBQUdSRSxJQUFBQSxLQUFLLEVBQVFQLEVBQUUsQ0FBQ0s7QUFIUixHQUhQO0FBUUxHLEVBQUFBLElBUkssZ0JBUUFDLFFBUkEsRUFRVTtBQUNYLFNBQUtMLE1BQUwsQ0FBWU0sTUFBWixHQUFxQkQsUUFBUSxDQUFDRSxJQUE5QjtBQUNBLFNBQUtMLE1BQUwsQ0FBWUksTUFBWixHQUFxQkQsUUFBUSxDQUFDRyxPQUE5QjtBQUNBLFNBQUtMLEtBQUwsQ0FBV0csTUFBWCxHQUFxQkcsS0FBSyxDQUFDQyxjQUFOLENBQXFCTCxRQUFRLENBQUNNLEdBQTlCLENBQXJCO0FBQ0g7QUFaSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGJUaW1lICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTmFtZSAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYldpbiAgICAgIDogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhUmFuaykge1xyXG4gICAgICAgIHRoaXMubGJUaW1lLnN0cmluZyA9IGRhdGFSYW5rLnRpbWU7XHJcbiAgICAgICAgdGhpcy5sYk5hbWUuc3RyaW5nID0gZGF0YVJhbmsuYWNjb3VudDtcclxuICAgICAgICB0aGlzLmxiV2luLnN0cmluZyAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xyXG4gICAgfVxyXG59KTtcclxuIl19
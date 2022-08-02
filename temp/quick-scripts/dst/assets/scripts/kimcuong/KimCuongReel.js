
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/KimCuongReel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '15db43GnmdNKphB8PmhNtEr', 'KimCuongReel');
// scripts/kimcuong/KimCuongReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  onEnable: function onEnable() {},
  init: function init(obj, data) {
    var _this = this;

    this.KCV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.KCV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('KimCuongItem');
      icon.init(self.KCV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index) {
    this.node.stopAllActions();
    var self = this;
    var timeDelay = 0.4;
    var timeMove = 1.8;

    if (this.KCV.isFast) {
      timeDelay = 0.2;
      timeMove = 0.9;
    }

    var d = cc.moveTo(timeMove, cc.v2(this.node.x, -(this.node.height - 418))).easing(cc.easeInOut(1));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.KCV.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 4) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.KCV.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, EF));
    } else this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, p2));
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.KCV.copy();
    this.node.y = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXEtpbUN1b25nUmVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm9uRW5hYmxlIiwiaW5pdCIsIm9iaiIsImRhdGEiLCJLQ1YiLCJpY29ucyIsInNlbGYiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbVR5cGUiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsImljb25QcmVmYWIiLCJub2RlIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwicmVzdWx0Iiwic3BpbiIsInN0b3BBbGxBY3Rpb25zIiwidGltZURlbGF5IiwidGltZU1vdmUiLCJpc0Zhc3QiLCJkIiwibW92ZVRvIiwidjIiLCJ4IiwiaGVpZ2h0IiwiZWFzaW5nIiwiZWFzZUluT3V0IiwicDIiLCJjYWxsRnVuYyIsImNvcHkiLCJ5IiwiRUYiLCJydW5BY3Rpb25Xb24iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0ssQ0FFVCxDQVRJO0FBVUxDLEVBQUFBLFFBVkssc0JBVU8sQ0FBRSxDQVZUO0FBWUxDLEVBQUFBLElBWkssZ0JBWUFDLEdBWkEsRUFZS0MsSUFaTCxFQVlVO0FBQUE7O0FBQ1gsU0FBS0MsR0FBTCxHQUFXRixHQUFYO0FBQ0EsU0FBS0csS0FBTCxHQUFhLEVBQWI7QUFDQSxRQUFJQyxJQUFJLEdBQUksSUFBWjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBU0MsUUFBVCxFQUFtQkMsS0FBbkIsRUFBeUI7QUFDMUMsVUFBSUMsSUFBSSxHQUFHakIsRUFBRSxDQUFDa0IsV0FBSCxDQUFlUCxJQUFJLENBQUNGLEdBQUwsQ0FBU1UsVUFBeEIsQ0FBWDtBQUNBUixNQUFBQSxJQUFJLENBQUNTLElBQUwsQ0FBVUMsUUFBVixDQUFtQkosSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNLLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBUDtBQUNBTCxNQUFBQSxJQUFJLENBQUNYLElBQUwsQ0FBVUssSUFBSSxDQUFDRixHQUFmLEVBQW9CTSxRQUFwQjtBQUNBLGFBQU9FLElBQVA7QUFDSCxLQU5XLENBQVosRUFPS00sSUFQTCxDQU9VLFVBQUFDLE1BQU0sRUFBSTtBQUNaLE1BQUEsS0FBSSxDQUFDZCxLQUFMLEdBQWFjLE1BQWI7QUFDSCxLQVRMO0FBVUgsR0ExQkk7QUEyQkxDLEVBQUFBLElBQUksRUFBRSxjQUFTVCxLQUFULEVBQWU7QUFDakIsU0FBS0ksSUFBTCxDQUFVTSxjQUFWO0FBQ0EsUUFBSWYsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFJZ0IsU0FBUyxHQUFHLEdBQWhCO0FBQ0EsUUFBSUMsUUFBUSxHQUFJLEdBQWhCOztBQUNBLFFBQUssS0FBS25CLEdBQUwsQ0FBU29CLE1BQWQsRUFBcUI7QUFDakJGLE1BQUFBLFNBQVMsR0FBRyxHQUFaO0FBQ0FDLE1BQUFBLFFBQVEsR0FBSSxHQUFaO0FBQ0g7O0FBQ0QsUUFBSUUsQ0FBQyxHQUFHOUIsRUFBRSxDQUFDK0IsTUFBSCxDQUFVSCxRQUFWLEVBQW9CNUIsRUFBRSxDQUFDZ0MsRUFBSCxDQUFNLEtBQUtaLElBQUwsQ0FBVWEsQ0FBaEIsRUFBa0IsRUFBRSxLQUFLYixJQUFMLENBQVVjLE1BQVYsR0FBaUIsR0FBbkIsQ0FBbEIsQ0FBcEIsRUFBZ0VDLE1BQWhFLENBQXVFbkMsRUFBRSxDQUFDb0MsU0FBSCxDQUFhLENBQWIsQ0FBdkUsQ0FBUjtBQUNBLFFBQUlDLEVBQUUsR0FBR3JDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLFVBQUl0QixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLGFBQUtQLEdBQUwsQ0FBUzhCLElBQVQ7QUFDSDs7QUFDRCxXQUFLbkIsSUFBTCxDQUFVb0IsQ0FBVixHQUFjLENBQWQ7QUFDSCxLQUxRLEVBS04sSUFMTSxDQUFUOztBQU9BLFFBQUl4QixLQUFLLEtBQUssQ0FBZCxFQUFnQjtBQUNaLFVBQUl5QixFQUFFLEdBQUd6QyxFQUFFLENBQUNzQyxRQUFILENBQVksWUFBVztBQUM1QixhQUFLbEIsSUFBTCxDQUFVb0IsQ0FBVixHQUFjLENBQWQ7QUFDQSxhQUFLL0IsR0FBTCxDQUFTaUMsWUFBVDtBQUNILE9BSFEsRUFHTixJQUhNLENBQVQ7QUFJQSxXQUFLdEIsSUFBTCxDQUFVdUIsU0FBVixDQUFvQjNDLEVBQUUsQ0FBQzRDLFFBQUgsQ0FBWTVDLEVBQUUsQ0FBQzZDLFNBQUgsQ0FBYTdCLEtBQUssR0FBQ1csU0FBbkIsQ0FBWixFQUEyQ0csQ0FBM0MsRUFBOENXLEVBQTlDLENBQXBCO0FBQ0gsS0FORCxNQU9JLEtBQUtyQixJQUFMLENBQVV1QixTQUFWLENBQW9CM0MsRUFBRSxDQUFDNEMsUUFBSCxDQUFZNUMsRUFBRSxDQUFDNkMsU0FBSCxDQUFhN0IsS0FBSyxHQUFDVyxTQUFuQixDQUFaLEVBQTJDRyxDQUEzQyxFQUE4Q08sRUFBOUMsQ0FBcEI7QUFDUCxHQXBESTtBQXFETFMsRUFBQUEsSUFBSSxFQUFFLGdCQUFVO0FBQ1osU0FBSzFCLElBQUwsQ0FBVU0sY0FBVjtBQUNBLFNBQUtqQixHQUFMLENBQVM4QixJQUFUO0FBQ0EsU0FBS25CLElBQUwsQ0FBVW9CLENBQVYsR0FBYyxDQUFkO0FBQ0g7QUF6REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSAoKSB7fSxcclxuXHJcbiAgICBpbml0KG9iaiwgZGF0YSl7XHJcbiAgICAgICAgdGhpcy5LQ1YgPSBvYmo7XHJcbiAgICAgICAgdGhpcy5pY29ucyA9IFtdO1xyXG4gICAgICAgIHZhciBzZWxmICA9IHRoaXM7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoZGF0YS5tYXAoZnVuY3Rpb24oaXRlbVR5cGUsIGluZGV4KXtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBjYy5pbnN0YW50aWF0ZShzZWxmLktDVi5pY29uUHJlZmFiKTtcclxuICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGljb24pO1xyXG4gICAgICAgICAgICBpY29uID0gaWNvbi5nZXRDb21wb25lbnQoJ0tpbUN1b25nSXRlbScpO1xyXG4gICAgICAgICAgICBpY29uLmluaXQoc2VsZi5LQ1YsIGl0ZW1UeXBlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGljb247XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmljb25zID0gcmVzdWx0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzcGluOiBmdW5jdGlvbihpbmRleCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCB0aW1lRGVsYXkgPSAwLjQ7XHJcbiAgICAgICAgbGV0IHRpbWVNb3ZlICA9IDEuODtcclxuICAgICAgICBpZiAoIHRoaXMuS0NWLmlzRmFzdCl7XHJcbiAgICAgICAgICAgIHRpbWVEZWxheSA9IDAuMjtcclxuICAgICAgICAgICAgdGltZU1vdmUgID0gMC45O1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZCA9IGNjLm1vdmVUbyh0aW1lTW92ZSwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LTQxOCkpKS5lYXNpbmcoY2MuZWFzZUluT3V0KDEpKTtcclxuICAgICAgICB2YXIgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLktDVi5jb3B5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IDQpe1xyXG4gICAgICAgICAgICB2YXIgRUYgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuS0NWLnJ1bkFjdGlvbldvbigpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqdGltZURlbGF5KSwgZCwgRUYgKSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KnRpbWVEZWxheSksIGQsIHAyKSk7XHJcbiAgICB9LFxyXG4gICAgc3RvcDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLktDVi5jb3B5KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
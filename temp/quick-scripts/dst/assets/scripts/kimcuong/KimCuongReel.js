
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL0tpbUN1b25nUmVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIm9uRW5hYmxlIiwiaW5pdCIsIm9iaiIsImRhdGEiLCJLQ1YiLCJpY29ucyIsInNlbGYiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbVR5cGUiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsImljb25QcmVmYWIiLCJub2RlIiwiYWRkQ2hpbGQiLCJnZXRDb21wb25lbnQiLCJ0aGVuIiwicmVzdWx0Iiwic3BpbiIsInN0b3BBbGxBY3Rpb25zIiwidGltZURlbGF5IiwidGltZU1vdmUiLCJpc0Zhc3QiLCJkIiwibW92ZVRvIiwidjIiLCJ4IiwiaGVpZ2h0IiwiZWFzaW5nIiwiZWFzZUluT3V0IiwicDIiLCJjYWxsRnVuYyIsImNvcHkiLCJ5IiwiRUYiLCJydW5BY3Rpb25Xb24iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0ssQ0FFVCxDQVRJO0FBVUxDLEVBQUFBLFFBVkssc0JBVU8sQ0FBRSxDQVZUO0FBWUxDLEVBQUFBLElBWkssZ0JBWUFDLEdBWkEsRUFZS0MsSUFaTCxFQVlVO0FBQUE7O0FBQ1gsU0FBS0MsR0FBTCxHQUFXRixHQUFYO0FBQ0EsU0FBS0csS0FBTCxHQUFhLEVBQWI7QUFDQSxRQUFJQyxJQUFJLEdBQUksSUFBWjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBU0MsUUFBVCxFQUFtQkMsS0FBbkIsRUFBeUI7QUFDMUMsVUFBSUMsSUFBSSxHQUFHakIsRUFBRSxDQUFDa0IsV0FBSCxDQUFlUCxJQUFJLENBQUNGLEdBQUwsQ0FBU1UsVUFBeEIsQ0FBWDtBQUNBUixNQUFBQSxJQUFJLENBQUNTLElBQUwsQ0FBVUMsUUFBVixDQUFtQkosSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNLLFlBQUwsQ0FBa0IsY0FBbEIsQ0FBUDtBQUNBTCxNQUFBQSxJQUFJLENBQUNYLElBQUwsQ0FBVUssSUFBSSxDQUFDRixHQUFmLEVBQW9CTSxRQUFwQjtBQUNBLGFBQU9FLElBQVA7QUFDSCxLQU5XLENBQVosRUFPS00sSUFQTCxDQU9VLFVBQUFDLE1BQU0sRUFBSTtBQUNaLE1BQUEsS0FBSSxDQUFDZCxLQUFMLEdBQWFjLE1BQWI7QUFDSCxLQVRMO0FBVUgsR0ExQkk7QUEyQkxDLEVBQUFBLElBQUksRUFBRSxjQUFTVCxLQUFULEVBQWU7QUFDakIsU0FBS0ksSUFBTCxDQUFVTSxjQUFWO0FBQ0EsUUFBSWYsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFJZ0IsU0FBUyxHQUFHLEdBQWhCO0FBQ0EsUUFBSUMsUUFBUSxHQUFJLEdBQWhCOztBQUNBLFFBQUssS0FBS25CLEdBQUwsQ0FBU29CLE1BQWQsRUFBcUI7QUFDakJGLE1BQUFBLFNBQVMsR0FBRyxHQUFaO0FBQ0FDLE1BQUFBLFFBQVEsR0FBSSxHQUFaO0FBQ0g7O0FBQ0QsUUFBSUUsQ0FBQyxHQUFHOUIsRUFBRSxDQUFDK0IsTUFBSCxDQUFVSCxRQUFWLEVBQW9CNUIsRUFBRSxDQUFDZ0MsRUFBSCxDQUFNLEtBQUtaLElBQUwsQ0FBVWEsQ0FBaEIsRUFBa0IsRUFBRSxLQUFLYixJQUFMLENBQVVjLE1BQVYsR0FBaUIsR0FBbkIsQ0FBbEIsQ0FBcEIsRUFBZ0VDLE1BQWhFLENBQXVFbkMsRUFBRSxDQUFDb0MsU0FBSCxDQUFhLENBQWIsQ0FBdkUsQ0FBUjtBQUNBLFFBQUlDLEVBQUUsR0FBR3JDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLFVBQUl0QixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLGFBQUtQLEdBQUwsQ0FBUzhCLElBQVQ7QUFDSDs7QUFDRCxXQUFLbkIsSUFBTCxDQUFVb0IsQ0FBVixHQUFjLENBQWQ7QUFDSCxLQUxRLEVBS04sSUFMTSxDQUFUOztBQU9BLFFBQUl4QixLQUFLLEtBQUssQ0FBZCxFQUFnQjtBQUNaLFVBQUl5QixFQUFFLEdBQUd6QyxFQUFFLENBQUNzQyxRQUFILENBQVksWUFBVztBQUM1QixhQUFLbEIsSUFBTCxDQUFVb0IsQ0FBVixHQUFjLENBQWQ7QUFDQSxhQUFLL0IsR0FBTCxDQUFTaUMsWUFBVDtBQUNILE9BSFEsRUFHTixJQUhNLENBQVQ7QUFJQSxXQUFLdEIsSUFBTCxDQUFVdUIsU0FBVixDQUFvQjNDLEVBQUUsQ0FBQzRDLFFBQUgsQ0FBWTVDLEVBQUUsQ0FBQzZDLFNBQUgsQ0FBYTdCLEtBQUssR0FBQ1csU0FBbkIsQ0FBWixFQUEyQ0csQ0FBM0MsRUFBOENXLEVBQTlDLENBQXBCO0FBQ0gsS0FORCxNQU9JLEtBQUtyQixJQUFMLENBQVV1QixTQUFWLENBQW9CM0MsRUFBRSxDQUFDNEMsUUFBSCxDQUFZNUMsRUFBRSxDQUFDNkMsU0FBSCxDQUFhN0IsS0FBSyxHQUFDVyxTQUFuQixDQUFaLEVBQTJDRyxDQUEzQyxFQUE4Q08sRUFBOUMsQ0FBcEI7QUFDUCxHQXBESTtBQXFETFMsRUFBQUEsSUFBSSxFQUFFLGdCQUFVO0FBQ1osU0FBSzFCLElBQUwsQ0FBVU0sY0FBVjtBQUNBLFNBQUtqQixHQUFMLENBQVM4QixJQUFUO0FBQ0EsU0FBS25CLElBQUwsQ0FBVW9CLENBQVYsR0FBYyxDQUFkO0FBQ0g7QUF6REksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG5cbiAgICB9LFxuICAgIG9uRW5hYmxlICgpIHt9LFxuXG4gICAgaW5pdChvYmosIGRhdGEpe1xuICAgICAgICB0aGlzLktDViA9IG9iajtcbiAgICAgICAgdGhpcy5pY29ucyA9IFtdO1xuICAgICAgICB2YXIgc2VsZiAgPSB0aGlzO1xuICAgICAgICBQcm9taXNlLmFsbChkYXRhLm1hcChmdW5jdGlvbihpdGVtVHlwZSwgaW5kZXgpe1xuICAgICAgICAgICAgbGV0IGljb24gPSBjYy5pbnN0YW50aWF0ZShzZWxmLktDVi5pY29uUHJlZmFiKTtcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGljb24gPSBpY29uLmdldENvbXBvbmVudCgnS2ltQ3VvbmdJdGVtJyk7XG4gICAgICAgICAgICBpY29uLmluaXQoc2VsZi5LQ1YsIGl0ZW1UeXBlKTtcbiAgICAgICAgICAgIHJldHVybiBpY29uO1xuICAgICAgICB9KSlcbiAgICAgICAgICAgIC50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pY29ucyA9IHJlc3VsdDtcbiAgICAgICAgICAgIH0pO1xuICAgIH0sXG4gICAgc3BpbjogZnVuY3Rpb24oaW5kZXgpe1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgdGltZURlbGF5ID0gMC40O1xuICAgICAgICBsZXQgdGltZU1vdmUgID0gMS44O1xuICAgICAgICBpZiAoIHRoaXMuS0NWLmlzRmFzdCl7XG4gICAgICAgICAgICB0aW1lRGVsYXkgPSAwLjI7XG4gICAgICAgICAgICB0aW1lTW92ZSAgPSAwLjk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGQgPSBjYy5tb3ZlVG8odGltZU1vdmUsIGNjLnYyKHRoaXMubm9kZS54LC0odGhpcy5ub2RlLmhlaWdodC00MTgpKSkuZWFzaW5nKGNjLmVhc2VJbk91dCgxKSk7XG4gICAgICAgIHZhciBwMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5LQ1YuY29weSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDQpe1xuICAgICAgICAgICAgdmFyIEVGID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuS0NWLnJ1bkFjdGlvbldvbigpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCp0aW1lRGVsYXkpLCBkLCBFRiApKTtcbiAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCp0aW1lRGVsYXkpLCBkLCBwMikpO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuS0NWLmNvcHkoKTtcbiAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xuICAgIH0sXG59KTtcbiJdfQ==
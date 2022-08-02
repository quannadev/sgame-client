
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/CandyReel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '827fc8EAylLFatmnoEMHgPy', 'CandyReel');
// scripts/candy/CandyReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    HeightReel: 300
  },
  onLoad: function onLoad() {
    this.HeightReel = this.node.height - 5;
  },
  init: function init(obj, data) {
    var _this = this;

    this.CDV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.CDV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('CandyItem');
      icon.init(self.CDV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index, isFast) {
    var timeDelay = 0.4;
    var timeMove = 1;

    if (this.CDV.isFast) {
      timeDelay = 0.2;
      timeMove = 0.4;
    }

    this.node.stopAllActions();
    var d = cc.moveTo(timeMove, cc.v2(this.node.x, -(this.node.height - this.HeightReel))).easing(cc.easeOut(1));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.CDV.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 2) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.CDV.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, EF));
    } else {
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, p2));
    }
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.CDV.copy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FuZHlcXENhbmR5UmVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkhlaWdodFJlZWwiLCJvbkxvYWQiLCJub2RlIiwiaGVpZ2h0IiwiaW5pdCIsIm9iaiIsImRhdGEiLCJDRFYiLCJpY29ucyIsInNlbGYiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbVR5cGUiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsImljb25QcmVmYWIiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bHQiLCJzcGluIiwiaXNGYXN0IiwidGltZURlbGF5IiwidGltZU1vdmUiLCJzdG9wQWxsQWN0aW9ucyIsImQiLCJtb3ZlVG8iLCJ2MiIsIngiLCJlYXNpbmciLCJlYXNlT3V0IiwicDIiLCJjYWxsRnVuYyIsImNvcHkiLCJ5IiwiRUYiLCJydW5BY3Rpb25Xb24iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFESixHQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUk7QUFDTCxTQUFLRCxVQUFMLEdBQWtCLEtBQUtFLElBQUwsQ0FBVUMsTUFBVixHQUFpQixDQUFuQztBQUNILEdBUkk7QUFTTEMsRUFBQUEsSUFUSyxnQkFTQUMsR0FUQSxFQVNLQyxJQVRMLEVBU1U7QUFBQTs7QUFDWCxTQUFLQyxHQUFMLEdBQVdGLEdBQVg7QUFDQSxTQUFLRyxLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUF5QjtBQUMxQyxVQUFJQyxJQUFJLEdBQUduQixFQUFFLENBQUNvQixXQUFILENBQWVQLElBQUksQ0FBQ0YsR0FBTCxDQUFTVSxVQUF4QixDQUFYO0FBQ0FSLE1BQUFBLElBQUksQ0FBQ1AsSUFBTCxDQUFVZ0IsUUFBVixDQUFtQkgsSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNJLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBUDtBQUNBSixNQUFBQSxJQUFJLENBQUNYLElBQUwsQ0FBVUssSUFBSSxDQUFDRixHQUFmLEVBQW9CTSxRQUFwQjtBQUNBLGFBQU9FLElBQVA7QUFDSCxLQU5XLENBQVosRUFNSUssSUFOSixDQU1TLFVBQUFDLE1BQU0sRUFBSTtBQUNmLE1BQUEsS0FBSSxDQUFDYixLQUFMLEdBQWFhLE1BQWI7QUFDSCxLQVJEO0FBU0gsR0F0Qkk7QUF1QkxDLEVBQUFBLElBQUksRUFBRSxjQUFTUixLQUFULEVBQWdCUyxNQUFoQixFQUF1QjtBQUN6QixRQUFJQyxTQUFTLEdBQUcsR0FBaEI7QUFDQSxRQUFJQyxRQUFRLEdBQUksQ0FBaEI7O0FBQ0EsUUFBSyxLQUFLbEIsR0FBTCxDQUFTZ0IsTUFBZCxFQUFxQjtBQUNqQkMsTUFBQUEsU0FBUyxHQUFHLEdBQVo7QUFDQUMsTUFBQUEsUUFBUSxHQUFJLEdBQVo7QUFDSDs7QUFFRCxTQUFLdkIsSUFBTCxDQUFVd0IsY0FBVjtBQUNBLFFBQUlDLENBQUMsR0FBRy9CLEVBQUUsQ0FBQ2dDLE1BQUgsQ0FBVUgsUUFBVixFQUFvQjdCLEVBQUUsQ0FBQ2lDLEVBQUgsQ0FBTSxLQUFLM0IsSUFBTCxDQUFVNEIsQ0FBaEIsRUFBa0IsRUFBRSxLQUFLNUIsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLEtBQUtILFVBQXpCLENBQWxCLENBQXBCLEVBQTZFK0IsTUFBN0UsQ0FBb0ZuQyxFQUFFLENBQUNvQyxPQUFILENBQVcsQ0FBWCxDQUFwRixDQUFSO0FBQ0EsUUFBSUMsRUFBRSxHQUFHckMsRUFBRSxDQUFDc0MsUUFBSCxDQUFZLFlBQVc7QUFDNUIsVUFBSXBCLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsYUFBS1AsR0FBTCxDQUFTNEIsSUFBVDtBQUNIOztBQUNELFdBQUtqQyxJQUFMLENBQVVrQyxDQUFWLEdBQWMsQ0FBZDtBQUNILEtBTFEsRUFLTixJQUxNLENBQVQ7O0FBTUEsUUFBSXRCLEtBQUssS0FBSyxDQUFkLEVBQWdCO0FBQ1osVUFBSXVCLEVBQUUsR0FBR3pDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLGFBQUtoQyxJQUFMLENBQVVrQyxDQUFWLEdBQWMsQ0FBZDtBQUNBLGFBQUs3QixHQUFMLENBQVMrQixZQUFUO0FBQ0gsT0FIUSxFQUdOLElBSE0sQ0FBVDtBQUlBLFdBQUtwQyxJQUFMLENBQVVxQyxTQUFWLENBQW9CM0MsRUFBRSxDQUFDNEMsUUFBSCxDQUFZNUMsRUFBRSxDQUFDNkMsU0FBSCxDQUFhM0IsS0FBSyxHQUFDVSxTQUFuQixDQUFaLEVBQTJDRyxDQUEzQyxFQUE4Q1UsRUFBOUMsQ0FBcEI7QUFDSCxLQU5ELE1BTU07QUFDRixXQUFLbkMsSUFBTCxDQUFVcUMsU0FBVixDQUFvQjNDLEVBQUUsQ0FBQzRDLFFBQUgsQ0FBWTVDLEVBQUUsQ0FBQzZDLFNBQUgsQ0FBYTNCLEtBQUssR0FBQ1UsU0FBbkIsQ0FBWixFQUEyQ0csQ0FBM0MsRUFBOENNLEVBQTlDLENBQXBCO0FBQ0g7QUFFSixHQWpESTtBQWtETFMsRUFBQUEsSUFBSSxFQUFFLGdCQUFVO0FBQ1osU0FBS3hDLElBQUwsQ0FBVXdCLGNBQVY7QUFDQSxTQUFLbkIsR0FBTCxDQUFTNEIsSUFBVDtBQUNBLFNBQUtqQyxJQUFMLENBQVVrQyxDQUFWLEdBQWMsQ0FBZDtBQUNIO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgSGVpZ2h0UmVlbDogMzAwXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuSGVpZ2h0UmVlbCA9IHRoaXMubm9kZS5oZWlnaHQtNTtcclxuICAgIH0sXHJcbiAgICBpbml0KG9iaiwgZGF0YSl7XHJcbiAgICAgICAgdGhpcy5DRFYgPSBvYmo7XHJcbiAgICAgICAgdGhpcy5pY29ucyA9IFtdO1xyXG4gICAgICAgIGxldCBzZWxmICA9IHRoaXM7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoZGF0YS5tYXAoZnVuY3Rpb24oaXRlbVR5cGUsIGluZGV4KXtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBjYy5pbnN0YW50aWF0ZShzZWxmLkNEVi5pY29uUHJlZmFiKTtcclxuICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGljb24pO1xyXG4gICAgICAgICAgICBpY29uID0gaWNvbi5nZXRDb21wb25lbnQoJ0NhbmR5SXRlbScpO1xyXG4gICAgICAgICAgICBpY29uLmluaXQoc2VsZi5DRFYsIGl0ZW1UeXBlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGljb247XHJcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pY29ucyA9IHJlc3VsdDtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzcGluOiBmdW5jdGlvbihpbmRleCwgaXNGYXN0KXtcclxuICAgICAgICBsZXQgdGltZURlbGF5ID0gMC40O1xyXG4gICAgICAgIGxldCB0aW1lTW92ZSAgPSAxO1xyXG4gICAgICAgIGlmICggdGhpcy5DRFYuaXNGYXN0KXtcclxuICAgICAgICAgICAgdGltZURlbGF5ID0gMC4yO1xyXG4gICAgICAgICAgICB0aW1lTW92ZSAgPSAwLjQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBsZXQgZCA9IGNjLm1vdmVUbyh0aW1lTW92ZSwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LSB0aGlzLkhlaWdodFJlZWwpKSkuZWFzaW5nKGNjLmVhc2VPdXQoMSkpO1xyXG4gICAgICAgIGxldCBwMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuQ0RWLmNvcHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAyKXtcclxuICAgICAgICAgICAgbGV0IEVGID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNEVi5ydW5BY3Rpb25Xb24oKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KnRpbWVEZWxheSksIGQsIEVGICkpO1xyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqdGltZURlbGF5KSwgZCwgcDIpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5DRFYuY29weSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
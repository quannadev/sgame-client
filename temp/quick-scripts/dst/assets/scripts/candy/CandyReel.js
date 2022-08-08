
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbmR5L0NhbmR5UmVlbC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkhlaWdodFJlZWwiLCJvbkxvYWQiLCJub2RlIiwiaGVpZ2h0IiwiaW5pdCIsIm9iaiIsImRhdGEiLCJDRFYiLCJpY29ucyIsInNlbGYiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaXRlbVR5cGUiLCJpbmRleCIsImljb24iLCJpbnN0YW50aWF0ZSIsImljb25QcmVmYWIiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bHQiLCJzcGluIiwiaXNGYXN0IiwidGltZURlbGF5IiwidGltZU1vdmUiLCJzdG9wQWxsQWN0aW9ucyIsImQiLCJtb3ZlVG8iLCJ2MiIsIngiLCJlYXNpbmciLCJlYXNlT3V0IiwicDIiLCJjYWxsRnVuYyIsImNvcHkiLCJ5IiwiRUYiLCJydW5BY3Rpb25Xb24iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUU7QUFESixHQUhQO0FBTUxDLEVBQUFBLE1BTkssb0JBTUk7QUFDTCxTQUFLRCxVQUFMLEdBQWtCLEtBQUtFLElBQUwsQ0FBVUMsTUFBVixHQUFpQixDQUFuQztBQUNILEdBUkk7QUFTTEMsRUFBQUEsSUFUSyxnQkFTQUMsR0FUQSxFQVNLQyxJQVRMLEVBU1U7QUFBQTs7QUFDWCxTQUFLQyxHQUFMLEdBQVdGLEdBQVg7QUFDQSxTQUFLRyxLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUF5QjtBQUMxQyxVQUFJQyxJQUFJLEdBQUduQixFQUFFLENBQUNvQixXQUFILENBQWVQLElBQUksQ0FBQ0YsR0FBTCxDQUFTVSxVQUF4QixDQUFYO0FBQ0FSLE1BQUFBLElBQUksQ0FBQ1AsSUFBTCxDQUFVZ0IsUUFBVixDQUFtQkgsSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNJLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBUDtBQUNBSixNQUFBQSxJQUFJLENBQUNYLElBQUwsQ0FBVUssSUFBSSxDQUFDRixHQUFmLEVBQW9CTSxRQUFwQjtBQUNBLGFBQU9FLElBQVA7QUFDSCxLQU5XLENBQVosRUFNSUssSUFOSixDQU1TLFVBQUFDLE1BQU0sRUFBSTtBQUNmLE1BQUEsS0FBSSxDQUFDYixLQUFMLEdBQWFhLE1BQWI7QUFDSCxLQVJEO0FBU0gsR0F0Qkk7QUF1QkxDLEVBQUFBLElBQUksRUFBRSxjQUFTUixLQUFULEVBQWdCUyxNQUFoQixFQUF1QjtBQUN6QixRQUFJQyxTQUFTLEdBQUcsR0FBaEI7QUFDQSxRQUFJQyxRQUFRLEdBQUksQ0FBaEI7O0FBQ0EsUUFBSyxLQUFLbEIsR0FBTCxDQUFTZ0IsTUFBZCxFQUFxQjtBQUNqQkMsTUFBQUEsU0FBUyxHQUFHLEdBQVo7QUFDQUMsTUFBQUEsUUFBUSxHQUFJLEdBQVo7QUFDSDs7QUFFRCxTQUFLdkIsSUFBTCxDQUFVd0IsY0FBVjtBQUNBLFFBQUlDLENBQUMsR0FBRy9CLEVBQUUsQ0FBQ2dDLE1BQUgsQ0FBVUgsUUFBVixFQUFvQjdCLEVBQUUsQ0FBQ2lDLEVBQUgsQ0FBTSxLQUFLM0IsSUFBTCxDQUFVNEIsQ0FBaEIsRUFBa0IsRUFBRSxLQUFLNUIsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLEtBQUtILFVBQXpCLENBQWxCLENBQXBCLEVBQTZFK0IsTUFBN0UsQ0FBb0ZuQyxFQUFFLENBQUNvQyxPQUFILENBQVcsQ0FBWCxDQUFwRixDQUFSO0FBQ0EsUUFBSUMsRUFBRSxHQUFHckMsRUFBRSxDQUFDc0MsUUFBSCxDQUFZLFlBQVc7QUFDNUIsVUFBSXBCLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsYUFBS1AsR0FBTCxDQUFTNEIsSUFBVDtBQUNIOztBQUNELFdBQUtqQyxJQUFMLENBQVVrQyxDQUFWLEdBQWMsQ0FBZDtBQUNILEtBTFEsRUFLTixJQUxNLENBQVQ7O0FBTUEsUUFBSXRCLEtBQUssS0FBSyxDQUFkLEVBQWdCO0FBQ1osVUFBSXVCLEVBQUUsR0FBR3pDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLGFBQUtoQyxJQUFMLENBQVVrQyxDQUFWLEdBQWMsQ0FBZDtBQUNBLGFBQUs3QixHQUFMLENBQVMrQixZQUFUO0FBQ0gsT0FIUSxFQUdOLElBSE0sQ0FBVDtBQUlBLFdBQUtwQyxJQUFMLENBQVVxQyxTQUFWLENBQW9CM0MsRUFBRSxDQUFDNEMsUUFBSCxDQUFZNUMsRUFBRSxDQUFDNkMsU0FBSCxDQUFhM0IsS0FBSyxHQUFDVSxTQUFuQixDQUFaLEVBQTJDRyxDQUEzQyxFQUE4Q1UsRUFBOUMsQ0FBcEI7QUFDSCxLQU5ELE1BTU07QUFDRixXQUFLbkMsSUFBTCxDQUFVcUMsU0FBVixDQUFvQjNDLEVBQUUsQ0FBQzRDLFFBQUgsQ0FBWTVDLEVBQUUsQ0FBQzZDLFNBQUgsQ0FBYTNCLEtBQUssR0FBQ1UsU0FBbkIsQ0FBWixFQUEyQ0csQ0FBM0MsRUFBOENNLEVBQTlDLENBQXBCO0FBQ0g7QUFFSixHQWpESTtBQWtETFMsRUFBQUEsSUFBSSxFQUFFLGdCQUFVO0FBQ1osU0FBS3hDLElBQUwsQ0FBVXdCLGNBQVY7QUFDQSxTQUFLbkIsR0FBTCxDQUFTNEIsSUFBVDtBQUNBLFNBQUtqQyxJQUFMLENBQVVrQyxDQUFWLEdBQWMsQ0FBZDtBQUNIO0FBdERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIEhlaWdodFJlZWw6IDMwMFxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLkhlaWdodFJlZWwgPSB0aGlzLm5vZGUuaGVpZ2h0LTU7XG4gICAgfSxcbiAgICBpbml0KG9iaiwgZGF0YSl7XG4gICAgICAgIHRoaXMuQ0RWID0gb2JqO1xuICAgICAgICB0aGlzLmljb25zID0gW107XG4gICAgICAgIGxldCBzZWxmICA9IHRoaXM7XG4gICAgICAgIFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKGl0ZW1UeXBlLCBpbmRleCl7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuQ0RWLmljb25QcmVmYWIpO1xuICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGljb24pO1xuICAgICAgICAgICAgaWNvbiA9IGljb24uZ2V0Q29tcG9uZW50KCdDYW5keUl0ZW0nKTtcbiAgICAgICAgICAgIGljb24uaW5pdChzZWxmLkNEViwgaXRlbVR5cGUpO1xuICAgICAgICAgICAgcmV0dXJuIGljb247XG4gICAgICAgIH0pKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICB0aGlzLmljb25zID0gcmVzdWx0O1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNwaW46IGZ1bmN0aW9uKGluZGV4LCBpc0Zhc3Qpe1xuICAgICAgICBsZXQgdGltZURlbGF5ID0gMC40O1xuICAgICAgICBsZXQgdGltZU1vdmUgID0gMTtcbiAgICAgICAgaWYgKCB0aGlzLkNEVi5pc0Zhc3Qpe1xuICAgICAgICAgICAgdGltZURlbGF5ID0gMC4yO1xuICAgICAgICAgICAgdGltZU1vdmUgID0gMC40O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBkID0gY2MubW92ZVRvKHRpbWVNb3ZlLCBjYy52Mih0aGlzLm5vZGUueCwtKHRoaXMubm9kZS5oZWlnaHQtIHRoaXMuSGVpZ2h0UmVlbCkpKS5lYXNpbmcoY2MuZWFzZU91dCgxKSk7XG4gICAgICAgIGxldCBwMiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5DRFYuY29weSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAyKXtcbiAgICAgICAgICAgIGxldCBFRiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLkNEVi5ydW5BY3Rpb25Xb24oKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqdGltZURlbGF5KSwgZCwgRUYgKSk7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KnRpbWVEZWxheSksIGQsIHAyKSk7XG4gICAgICAgIH1cblxuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRoaXMuQ0RWLmNvcHkoKTtcbiAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xuICAgIH0sXG59KTtcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadReel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3443aQFv7hDybagiJywFYa3', 'SinbadReel');
// scripts/sinbad/SinbadReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  onEnable: function onEnable() {},
  init: function init(obj, data) {
    var _this = this;

    this.SLV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.SLV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('SinbadItem');
      icon.init(self.SLV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index) {
    this.node.stopAllActions();
    var self = this;
    var d = cc.moveTo(1.8, cc.v2(this.node.x, -(this.node.height - 418))).easing(cc.easeInOut(3));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.SLV.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 4) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.SLV.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(cc.delayTime(index * 0.2), d, EF));
    } else this.node.runAction(cc.sequence(cc.delayTime(index * 0.2), d, p2));
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.SLV.copy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxTaW5iYWRSZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwib25FbmFibGUiLCJpbml0Iiwib2JqIiwiZGF0YSIsIlNMViIsImljb25zIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtVHlwZSIsImluZGV4IiwiaWNvbiIsImluc3RhbnRpYXRlIiwiaWNvblByZWZhYiIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bHQiLCJzcGluIiwic3RvcEFsbEFjdGlvbnMiLCJkIiwibW92ZVRvIiwidjIiLCJ4IiwiaGVpZ2h0IiwiZWFzaW5nIiwiZWFzZUluT3V0IiwicDIiLCJjYWxsRnVuYyIsImNvcHkiLCJ5IiwiRUYiLCJydW5BY3Rpb25Xb24iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0ssQ0FFVCxDQVRJO0FBVUxDLEVBQUFBLFFBVkssc0JBVU8sQ0FBRSxDQVZUO0FBWUxDLEVBQUFBLElBWkssZ0JBWUFDLEdBWkEsRUFZS0MsSUFaTCxFQVlVO0FBQUE7O0FBQ1gsU0FBS0MsR0FBTCxHQUFXRixHQUFYO0FBQ0EsU0FBS0csS0FBTCxHQUFhLEVBQWI7QUFDQSxRQUFJQyxJQUFJLEdBQUksSUFBWjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBU0MsUUFBVCxFQUFtQkMsS0FBbkIsRUFBeUI7QUFDMUMsVUFBSUMsSUFBSSxHQUFHakIsRUFBRSxDQUFDa0IsV0FBSCxDQUFlUCxJQUFJLENBQUNGLEdBQUwsQ0FBU1UsVUFBeEIsQ0FBWDtBQUNBUixNQUFBQSxJQUFJLENBQUNTLElBQUwsQ0FBVUMsUUFBVixDQUFtQkosSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNLLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBUDtBQUNBTCxNQUFBQSxJQUFJLENBQUNYLElBQUwsQ0FBVUssSUFBSSxDQUFDRixHQUFmLEVBQW9CTSxRQUFwQjtBQUNBLGFBQU9FLElBQVA7QUFDSCxLQU5XLENBQVosRUFPS00sSUFQTCxDQU9VLFVBQUFDLE1BQU0sRUFBSTtBQUNaLE1BQUEsS0FBSSxDQUFDZCxLQUFMLEdBQWFjLE1BQWI7QUFDSCxLQVRMO0FBVUgsR0ExQkk7QUEyQkxDLEVBQUFBLElBQUksRUFBRSxjQUFTVCxLQUFULEVBQWU7QUFDakIsU0FBS0ksSUFBTCxDQUFVTSxjQUFWO0FBQ0EsUUFBSWYsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFJZ0IsQ0FBQyxHQUFHM0IsRUFBRSxDQUFDNEIsTUFBSCxDQUFVLEdBQVYsRUFBZTVCLEVBQUUsQ0FBQzZCLEVBQUgsQ0FBTSxLQUFLVCxJQUFMLENBQVVVLENBQWhCLEVBQWtCLEVBQUUsS0FBS1YsSUFBTCxDQUFVVyxNQUFWLEdBQWlCLEdBQW5CLENBQWxCLENBQWYsRUFBMkRDLE1BQTNELENBQWtFaEMsRUFBRSxDQUFDaUMsU0FBSCxDQUFhLENBQWIsQ0FBbEUsQ0FBUjtBQUNBLFFBQUlDLEVBQUUsR0FBR2xDLEVBQUUsQ0FBQ21DLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLFVBQUluQixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLGFBQUtQLEdBQUwsQ0FBUzJCLElBQVQ7QUFDSDs7QUFDRCxXQUFLaEIsSUFBTCxDQUFVaUIsQ0FBVixHQUFjLENBQWQ7QUFDSCxLQUxRLEVBS04sSUFMTSxDQUFUOztBQU9BLFFBQUlyQixLQUFLLEtBQUssQ0FBZCxFQUFnQjtBQUNaLFVBQUlzQixFQUFFLEdBQUd0QyxFQUFFLENBQUNtQyxRQUFILENBQVksWUFBVztBQUM1QixhQUFLZixJQUFMLENBQVVpQixDQUFWLEdBQWMsQ0FBZDtBQUNBLGFBQUs1QixHQUFMLENBQVM4QixZQUFUO0FBQ0gsT0FIUSxFQUdOLElBSE0sQ0FBVDtBQUlBLFdBQUtuQixJQUFMLENBQVVvQixTQUFWLENBQW9CeEMsRUFBRSxDQUFDeUMsUUFBSCxDQUFZekMsRUFBRSxDQUFDMEMsU0FBSCxDQUFhMUIsS0FBSyxHQUFDLEdBQW5CLENBQVosRUFBcUNXLENBQXJDLEVBQXdDVyxFQUF4QyxDQUFwQjtBQUNILEtBTkQsTUFPSSxLQUFLbEIsSUFBTCxDQUFVb0IsU0FBVixDQUFvQnhDLEVBQUUsQ0FBQ3lDLFFBQUgsQ0FBWXpDLEVBQUUsQ0FBQzBDLFNBQUgsQ0FBYTFCLEtBQUssR0FBQyxHQUFuQixDQUFaLEVBQXFDVyxDQUFyQyxFQUF3Q08sRUFBeEMsQ0FBcEI7QUFDUCxHQTlDSTtBQStDTFMsRUFBQUEsSUFBSSxFQUFFLGdCQUFVO0FBQ1osU0FBS3ZCLElBQUwsQ0FBVU0sY0FBVjtBQUNBLFNBQUtqQixHQUFMLENBQVMyQixJQUFUO0FBQ0EsU0FBS2hCLElBQUwsQ0FBVWlCLENBQVYsR0FBYyxDQUFkO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBvbkxvYWQgKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSAoKSB7fSxcclxuXHJcbiAgICBpbml0KG9iaiwgZGF0YSl7XHJcbiAgICAgICAgdGhpcy5TTFYgPSBvYmo7XHJcbiAgICAgICAgdGhpcy5pY29ucyA9IFtdO1xyXG4gICAgICAgIHZhciBzZWxmICA9IHRoaXM7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoZGF0YS5tYXAoZnVuY3Rpb24oaXRlbVR5cGUsIGluZGV4KXtcclxuICAgICAgICAgICAgbGV0IGljb24gPSBjYy5pbnN0YW50aWF0ZShzZWxmLlNMVi5pY29uUHJlZmFiKTtcclxuICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGljb24pO1xyXG4gICAgICAgICAgICBpY29uID0gaWNvbi5nZXRDb21wb25lbnQoJ1NpbmJhZEl0ZW0nKTtcclxuICAgICAgICAgICAgaWNvbi5pbml0KHNlbGYuU0xWLCBpdGVtVHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpY29uO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29ucyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3BpbjogZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZCA9IGNjLm1vdmVUbygxLjgsIGNjLnYyKHRoaXMubm9kZS54LC0odGhpcy5ub2RlLmhlaWdodC00MTgpKSkuZWFzaW5nKGNjLmVhc2VJbk91dCgzKSk7XHJcbiAgICAgICAgdmFyIHAyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TTFYuY29weSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSA0KXtcclxuICAgICAgICAgICAgdmFyIEVGID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNMVi5ydW5BY3Rpb25Xb24oKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KjAuMiksIGQsIEVGICkpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjIpLCBkLCBwMikpO1xyXG4gICAgfSxcclxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5TTFYuY29weSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
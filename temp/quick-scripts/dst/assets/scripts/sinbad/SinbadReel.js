
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRSZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwib25FbmFibGUiLCJpbml0Iiwib2JqIiwiZGF0YSIsIlNMViIsImljb25zIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtVHlwZSIsImluZGV4IiwiaWNvbiIsImluc3RhbnRpYXRlIiwiaWNvblByZWZhYiIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bHQiLCJzcGluIiwic3RvcEFsbEFjdGlvbnMiLCJkIiwibW92ZVRvIiwidjIiLCJ4IiwiaGVpZ2h0IiwiZWFzaW5nIiwiZWFzZUluT3V0IiwicDIiLCJjYWxsRnVuYyIsImNvcHkiLCJ5IiwiRUYiLCJydW5BY3Rpb25Xb24iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsImRlbGF5VGltZSIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE1BUEssb0JBT0ssQ0FFVCxDQVRJO0FBVUxDLEVBQUFBLFFBVkssc0JBVU8sQ0FBRSxDQVZUO0FBWUxDLEVBQUFBLElBWkssZ0JBWUFDLEdBWkEsRUFZS0MsSUFaTCxFQVlVO0FBQUE7O0FBQ1gsU0FBS0MsR0FBTCxHQUFXRixHQUFYO0FBQ0EsU0FBS0csS0FBTCxHQUFhLEVBQWI7QUFDQSxRQUFJQyxJQUFJLEdBQUksSUFBWjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBU0MsUUFBVCxFQUFtQkMsS0FBbkIsRUFBeUI7QUFDMUMsVUFBSUMsSUFBSSxHQUFHakIsRUFBRSxDQUFDa0IsV0FBSCxDQUFlUCxJQUFJLENBQUNGLEdBQUwsQ0FBU1UsVUFBeEIsQ0FBWDtBQUNBUixNQUFBQSxJQUFJLENBQUNTLElBQUwsQ0FBVUMsUUFBVixDQUFtQkosSUFBbkI7QUFDQUEsTUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNLLFlBQUwsQ0FBa0IsWUFBbEIsQ0FBUDtBQUNBTCxNQUFBQSxJQUFJLENBQUNYLElBQUwsQ0FBVUssSUFBSSxDQUFDRixHQUFmLEVBQW9CTSxRQUFwQjtBQUNBLGFBQU9FLElBQVA7QUFDSCxLQU5XLENBQVosRUFPS00sSUFQTCxDQU9VLFVBQUFDLE1BQU0sRUFBSTtBQUNaLE1BQUEsS0FBSSxDQUFDZCxLQUFMLEdBQWFjLE1BQWI7QUFDSCxLQVRMO0FBVUgsR0ExQkk7QUEyQkxDLEVBQUFBLElBQUksRUFBRSxjQUFTVCxLQUFULEVBQWU7QUFDakIsU0FBS0ksSUFBTCxDQUFVTSxjQUFWO0FBQ0EsUUFBSWYsSUFBSSxHQUFHLElBQVg7QUFDQSxRQUFJZ0IsQ0FBQyxHQUFHM0IsRUFBRSxDQUFDNEIsTUFBSCxDQUFVLEdBQVYsRUFBZTVCLEVBQUUsQ0FBQzZCLEVBQUgsQ0FBTSxLQUFLVCxJQUFMLENBQVVVLENBQWhCLEVBQWtCLEVBQUUsS0FBS1YsSUFBTCxDQUFVVyxNQUFWLEdBQWlCLEdBQW5CLENBQWxCLENBQWYsRUFBMkRDLE1BQTNELENBQWtFaEMsRUFBRSxDQUFDaUMsU0FBSCxDQUFhLENBQWIsQ0FBbEUsQ0FBUjtBQUNBLFFBQUlDLEVBQUUsR0FBR2xDLEVBQUUsQ0FBQ21DLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLFVBQUluQixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLGFBQUtQLEdBQUwsQ0FBUzJCLElBQVQ7QUFDSDs7QUFDRCxXQUFLaEIsSUFBTCxDQUFVaUIsQ0FBVixHQUFjLENBQWQ7QUFDSCxLQUxRLEVBS04sSUFMTSxDQUFUOztBQU9BLFFBQUlyQixLQUFLLEtBQUssQ0FBZCxFQUFnQjtBQUNaLFVBQUlzQixFQUFFLEdBQUd0QyxFQUFFLENBQUNtQyxRQUFILENBQVksWUFBVztBQUM1QixhQUFLZixJQUFMLENBQVVpQixDQUFWLEdBQWMsQ0FBZDtBQUNBLGFBQUs1QixHQUFMLENBQVM4QixZQUFUO0FBQ0gsT0FIUSxFQUdOLElBSE0sQ0FBVDtBQUlBLFdBQUtuQixJQUFMLENBQVVvQixTQUFWLENBQW9CeEMsRUFBRSxDQUFDeUMsUUFBSCxDQUFZekMsRUFBRSxDQUFDMEMsU0FBSCxDQUFhMUIsS0FBSyxHQUFDLEdBQW5CLENBQVosRUFBcUNXLENBQXJDLEVBQXdDVyxFQUF4QyxDQUFwQjtBQUNILEtBTkQsTUFPSSxLQUFLbEIsSUFBTCxDQUFVb0IsU0FBVixDQUFvQnhDLEVBQUUsQ0FBQ3lDLFFBQUgsQ0FBWXpDLEVBQUUsQ0FBQzBDLFNBQUgsQ0FBYTFCLEtBQUssR0FBQyxHQUFuQixDQUFaLEVBQXFDVyxDQUFyQyxFQUF3Q08sRUFBeEMsQ0FBcEI7QUFDUCxHQTlDSTtBQStDTFMsRUFBQUEsSUFBSSxFQUFFLGdCQUFVO0FBQ1osU0FBS3ZCLElBQUwsQ0FBVU0sY0FBVjtBQUNBLFNBQUtqQixHQUFMLENBQVMyQixJQUFUO0FBQ0EsU0FBS2hCLElBQUwsQ0FBVWlCLENBQVYsR0FBYyxDQUFkO0FBQ0g7QUFuREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIG9uTG9hZCAoKSB7XG5cbiAgICB9LFxuICAgIG9uRW5hYmxlICgpIHt9LFxuXG4gICAgaW5pdChvYmosIGRhdGEpe1xuICAgICAgICB0aGlzLlNMViA9IG9iajtcbiAgICAgICAgdGhpcy5pY29ucyA9IFtdO1xuICAgICAgICB2YXIgc2VsZiAgPSB0aGlzO1xuICAgICAgICBQcm9taXNlLmFsbChkYXRhLm1hcChmdW5jdGlvbihpdGVtVHlwZSwgaW5kZXgpe1xuICAgICAgICAgICAgbGV0IGljb24gPSBjYy5pbnN0YW50aWF0ZShzZWxmLlNMVi5pY29uUHJlZmFiKTtcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGljb24gPSBpY29uLmdldENvbXBvbmVudCgnU2luYmFkSXRlbScpO1xuICAgICAgICAgICAgaWNvbi5pbml0KHNlbGYuU0xWLCBpdGVtVHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgICAgfSkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbnMgPSByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNwaW46IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGQgPSBjYy5tb3ZlVG8oMS44LCBjYy52Mih0aGlzLm5vZGUueCwtKHRoaXMubm9kZS5oZWlnaHQtNDE4KSkpLmVhc2luZyhjYy5lYXNlSW5PdXQoMykpO1xuICAgICAgICB2YXIgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuU0xWLmNvcHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSA0KXtcbiAgICAgICAgICAgIHZhciBFRiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlNMVi5ydW5BY3Rpb25Xb24oKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqMC4yKSwgZCwgRUYgKSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqMC4yKSwgZCwgcDIpKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLlNMVi5jb3B5KCk7XG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICB9LFxufSk7XG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/Toast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '03de5PVMXVCEI3J2p5dEfHb', 'Toast');
// scripts/abase/Toast.js

"use strict";

var Toast = cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lb_msg: cc.Label
  },
  statics: {
    inst: null
  },
  onLoad: function onLoad() {
    Toast.inst = this;
    mm.Toast = this;

    this._hide();

    this.node.zIndex = 500;
  },
  showToast: function showToast(duration, msg, pos) {
    this.node.active = true;
    var self = this;
    this.lb_msg.string = msg;

    if (pos != undefined && pos != null) {
      this.node.position = pos;
    }

    this.node.stopAllActions();
    this.node.runAction(cc.sequence(cc.delayTime(duration), cc.callFunc(function () {
      self._hide();
    })));
  },
  _hide: function _hide() {
    this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXFRvYXN0LmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGJfbXNnIiwiTGFiZWwiLCJzdGF0aWNzIiwiaW5zdCIsIm9uTG9hZCIsIm1tIiwiX2hpZGUiLCJub2RlIiwiekluZGV4Iiwic2hvd1RvYXN0IiwiZHVyYXRpb24iLCJtc2ciLCJwb3MiLCJhY3RpdmUiLCJzZWxmIiwic3RyaW5nIiwidW5kZWZpbmVkIiwicG9zaXRpb24iLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwiY2FsbEZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNqQixhQUFTRCxFQUFFLENBQUNFLGdCQURLO0FBR2pCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFSixFQUFFLENBQUNLO0FBREgsR0FISztBQU1qQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRztBQURGLEdBTlE7QUFTakJDLEVBQUFBLE1BVGlCLG9CQVNQO0FBQ05ULElBQUFBLEtBQUssQ0FBQ1EsSUFBTixHQUFhLElBQWI7QUFDQUUsSUFBQUEsRUFBRSxDQUFDVixLQUFILEdBQVcsSUFBWDs7QUFDQSxTQUFLVyxLQUFMOztBQUNBLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixHQUFuQjtBQUNILEdBZGdCO0FBZWpCQyxFQUFBQSxTQWZpQixxQkFlUEMsUUFmTyxFQWVHQyxHQWZILEVBZVFDLEdBZlIsRUFlWTtBQUN6QixTQUFLTCxJQUFMLENBQVVNLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQUtkLE1BQUwsQ0FBWWUsTUFBWixHQUFxQkosR0FBckI7O0FBQ0EsUUFBR0MsR0FBRyxJQUFJSSxTQUFQLElBQW9CSixHQUFHLElBQUksSUFBOUIsRUFBbUM7QUFDL0IsV0FBS0wsSUFBTCxDQUFVVSxRQUFWLEdBQXFCTCxHQUFyQjtBQUNIOztBQUNELFNBQUtMLElBQUwsQ0FBVVcsY0FBVjtBQUNBLFNBQUtYLElBQUwsQ0FBVVksU0FBVixDQUFvQnZCLEVBQUUsQ0FBQ3dCLFFBQUgsQ0FBWXhCLEVBQUUsQ0FBQ3lCLFNBQUgsQ0FBYVgsUUFBYixDQUFaLEVBQW9DZCxFQUFFLENBQUMwQixRQUFILENBQVksWUFBWTtBQUM1RVIsTUFBQUEsSUFBSSxDQUFDUixLQUFMO0FBQ0gsS0FGdUQsQ0FBcEMsQ0FBcEI7QUFHSCxHQTFCZ0I7QUEyQmpCQSxFQUFBQSxLQTNCaUIsbUJBMkJWO0FBQ0gsU0FBS0MsSUFBTCxDQUFVTSxNQUFWLEdBQW1CLEtBQW5CO0FBQ0g7QUE3QmdCLENBQVQsQ0FBWiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFRvYXN0ID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGJfbXNnOiBjYy5MYWJlbFxyXG4gICAgfSxcclxuICAgIHN0YXRpY3M6IHtcclxuICAgICAgICBpbnN0OiAgbnVsbCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIFRvYXN0Lmluc3QgPSB0aGlzO1xyXG4gICAgICAgIG1tLlRvYXN0ID0gdGhpcztcclxuICAgICAgICB0aGlzLl9oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IDUwMDtcclxuICAgIH0sXHJcbiAgICBzaG93VG9hc3QoZHVyYXRpb24sIG1zZywgcG9zKXtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5sYl9tc2cuc3RyaW5nID0gbXNnO1xyXG4gICAgICAgIGlmKHBvcyAhPSB1bmRlZmluZWQgJiYgcG9zICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGR1cmF0aW9uKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLl9oaWRlKCk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgIH0sXHJcbiAgICBfaGlkZSgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
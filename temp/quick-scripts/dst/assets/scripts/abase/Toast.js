
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2FiYXNlL1RvYXN0LmpzIl0sIm5hbWVzIjpbIlRvYXN0IiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGJfbXNnIiwiTGFiZWwiLCJzdGF0aWNzIiwiaW5zdCIsIm9uTG9hZCIsIm1tIiwiX2hpZGUiLCJub2RlIiwiekluZGV4Iiwic2hvd1RvYXN0IiwiZHVyYXRpb24iLCJtc2ciLCJwb3MiLCJhY3RpdmUiLCJzZWxmIiwic3RyaW5nIiwidW5kZWZpbmVkIiwicG9zaXRpb24iLCJzdG9wQWxsQWN0aW9ucyIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwiY2FsbEZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsS0FBSyxHQUFHQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNqQixhQUFTRCxFQUFFLENBQUNFLGdCQURLO0FBR2pCQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFFSixFQUFFLENBQUNLO0FBREgsR0FISztBQU1qQkMsRUFBQUEsT0FBTyxFQUFFO0FBQ0xDLElBQUFBLElBQUksRUFBRztBQURGLEdBTlE7QUFTakJDLEVBQUFBLE1BVGlCLG9CQVNQO0FBQ05ULElBQUFBLEtBQUssQ0FBQ1EsSUFBTixHQUFhLElBQWI7QUFDQUUsSUFBQUEsRUFBRSxDQUFDVixLQUFILEdBQVcsSUFBWDs7QUFDQSxTQUFLVyxLQUFMOztBQUNBLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFtQixHQUFuQjtBQUNILEdBZGdCO0FBZWpCQyxFQUFBQSxTQWZpQixxQkFlUEMsUUFmTyxFQWVHQyxHQWZILEVBZVFDLEdBZlIsRUFlWTtBQUN6QixTQUFLTCxJQUFMLENBQVVNLE1BQVYsR0FBbUIsSUFBbkI7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQUtkLE1BQUwsQ0FBWWUsTUFBWixHQUFxQkosR0FBckI7O0FBQ0EsUUFBR0MsR0FBRyxJQUFJSSxTQUFQLElBQW9CSixHQUFHLElBQUksSUFBOUIsRUFBbUM7QUFDL0IsV0FBS0wsSUFBTCxDQUFVVSxRQUFWLEdBQXFCTCxHQUFyQjtBQUNIOztBQUNELFNBQUtMLElBQUwsQ0FBVVcsY0FBVjtBQUNBLFNBQUtYLElBQUwsQ0FBVVksU0FBVixDQUFvQnZCLEVBQUUsQ0FBQ3dCLFFBQUgsQ0FBWXhCLEVBQUUsQ0FBQ3lCLFNBQUgsQ0FBYVgsUUFBYixDQUFaLEVBQW9DZCxFQUFFLENBQUMwQixRQUFILENBQVksWUFBWTtBQUM1RVIsTUFBQUEsSUFBSSxDQUFDUixLQUFMO0FBQ0gsS0FGdUQsQ0FBcEMsQ0FBcEI7QUFHSCxHQTFCZ0I7QUEyQmpCQSxFQUFBQSxLQTNCaUIsbUJBMkJWO0FBQ0gsU0FBS0MsSUFBTCxDQUFVTSxNQUFWLEdBQW1CLEtBQW5CO0FBQ0g7QUE3QmdCLENBQVQsQ0FBWiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFRvYXN0ID0gY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiX21zZzogY2MuTGFiZWxcbiAgICB9LFxuICAgIHN0YXRpY3M6IHtcbiAgICAgICAgaW5zdDogIG51bGwsXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICBUb2FzdC5pbnN0ID0gdGhpcztcbiAgICAgICAgbW0uVG9hc3QgPSB0aGlzO1xuICAgICAgICB0aGlzLl9oaWRlKCk7XG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSA1MDA7XG4gICAgfSxcbiAgICBzaG93VG9hc3QoZHVyYXRpb24sIG1zZywgcG9zKXtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5sYl9tc2cuc3RyaW5nID0gbXNnO1xuICAgICAgICBpZihwb3MgIT0gdW5kZWZpbmVkICYmIHBvcyAhPSBudWxsKXtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHBvcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoZHVyYXRpb24pLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBzZWxmLl9oaWRlKCk7XG4gICAgICAgIH0pKSk7XG4gICAgfSxcbiAgICBfaGlkZSgpe1xuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbn0pO1xuIl19
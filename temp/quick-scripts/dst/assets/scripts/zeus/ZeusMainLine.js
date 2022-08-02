
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/ZeusMainLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '201d5GLsDVCWq3vFVfxB+5M', 'ZeusMainLine');
// scripts/zeus/ZeusMainLine.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(obj) {
    return this;
  },
  onEnable: function onEnable() {// this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
    // this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
  },
  onDisable: function onDisable() {// this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
    // this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
  },
  onhover: function onhover() {
    this.node.active = true;
  },
  offhover: function offhover() {
    this.node.active = false;
  },
  onEf: function onEf() {
    this.onhover();
    this.node.pauseSystemEvents(true);
  },
  offEf: function offEf() {
    this.offhover();
    this.node.resumeSystemEvents(true);
  },
  offAll: function offAll() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcWmV1c01haW5MaW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJpbml0Iiwib2JqIiwib25FbmFibGUiLCJvbkRpc2FibGUiLCJvbmhvdmVyIiwibm9kZSIsImFjdGl2ZSIsIm9mZmhvdmVyIiwib25FZiIsInBhdXNlU3lzdGVtRXZlbnRzIiwib2ZmRWYiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJvZmZBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLEdBSEEsRUFHSTtBQUNMLFdBQU8sSUFBUDtBQUNILEdBTEk7QUFNTEMsRUFBQUEsUUFBUSxFQUFFLG9CQUFXLENBQ2pCO0FBQ0E7QUFDSCxHQVRJO0FBVUxDLEVBQUFBLFNBQVMsRUFBRSxxQkFBVyxDQUNsQjtBQUNBO0FBQ0gsR0FiSTtBQWNMQyxFQUFBQSxPQUFPLEVBQUUsbUJBQVU7QUFDZixTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkI7QUFDSCxHQWhCSTtBQWlCTEMsRUFBQUEsUUFBUSxFQUFFLG9CQUFVO0FBQ2hCLFNBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFtQixLQUFuQjtBQUNILEdBbkJJO0FBb0JMRSxFQUFBQSxJQUFJLEVBQUUsZ0JBQVU7QUFDWixTQUFLSixPQUFMO0FBQ0EsU0FBS0MsSUFBTCxDQUFVSSxpQkFBVixDQUE0QixJQUE1QjtBQUNILEdBdkJJO0FBd0JMQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVU7QUFDYixTQUFLSCxRQUFMO0FBQ0EsU0FBS0YsSUFBTCxDQUFVTSxrQkFBVixDQUE2QixJQUE3QjtBQUNILEdBM0JJO0FBNEJMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FFbkI7QUE5QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBpbml0KG9iail7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbmhvdmVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub2ZmaG92ZXIsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbmhvdmVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm9mZmhvdmVyLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbmhvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIG9mZmhvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBvbkVmOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMub25ob3ZlcigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgIH0sXHJcbiAgICBvZmZFZjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm9mZmhvdmVyKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgIH0sXHJcbiAgICBvZmZBbGw6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
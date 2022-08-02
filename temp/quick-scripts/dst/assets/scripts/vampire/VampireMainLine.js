
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/VampireMainLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9307cScMi1Ne44gMf5xrgre', 'VampireMainLine');
// scripts/vampire/VampireMainLine.js

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
    this.node.children[0].active = true;
    this.node.children[1].active = true;
  },
  offhover: function offhover() {
    this.node.children[0].active = false;
    this.node.children[1].active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVmFtcGlyZU1haW5MaW5lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJpbml0Iiwib2JqIiwib25FbmFibGUiLCJvbkRpc2FibGUiLCJvbmhvdmVyIiwibm9kZSIsImNoaWxkcmVuIiwiYWN0aXZlIiwib2ZmaG92ZXIiLCJvbkVmIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJvZmZFZiIsInJlc3VtZVN5c3RlbUV2ZW50cyIsIm9mZkFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsSUFISyxnQkFHQUMsR0FIQSxFQUdJO0FBQ0wsV0FBTyxJQUFQO0FBQ0gsR0FMSTtBQU1MQyxFQUFBQSxRQUFRLEVBQUUsb0JBQVcsQ0FDakI7QUFDQTtBQUNILEdBVEk7QUFVTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFXLENBQ2xCO0FBQ0E7QUFDSCxHQWJJO0FBY0xDLEVBQUFBLE9BQU8sRUFBRSxtQkFBVTtBQUNmLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsSUFBL0I7QUFDQSxTQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLElBQS9CO0FBQ0gsR0FqQkk7QUFrQkxDLEVBQUFBLFFBQVEsRUFBRSxvQkFBVTtBQUNoQixTQUFLSCxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsU0FBS0YsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxNQUF0QixHQUErQixLQUEvQjtBQUNILEdBckJJO0FBc0JMRSxFQUFBQSxJQUFJLEVBQUUsZ0JBQVU7QUFDWixTQUFLTCxPQUFMO0FBQ0EsU0FBS0MsSUFBTCxDQUFVSyxpQkFBVixDQUE0QixJQUE1QjtBQUNILEdBekJJO0FBMEJMQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVU7QUFDYixTQUFLSCxRQUFMO0FBQ0EsU0FBS0gsSUFBTCxDQUFVTyxrQkFBVixDQUE2QixJQUE3QjtBQUNILEdBN0JJO0FBOEJMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FFbkI7QUFoQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBpbml0KG9iail7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbmhvdmVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub2ZmaG92ZXIsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbmhvdmVyLCB0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm9mZmhvdmVyLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbmhvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIG9mZmhvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgb25FZjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm9uaG92ZXIoKTtcclxuICAgICAgICB0aGlzLm5vZGUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgb2ZmRWY6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5vZmZob3ZlcigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgb2ZmQWxsOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19
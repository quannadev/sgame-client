
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sieuxe/SieuXeMainLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ddf11ZyqedLoL32ynFBhdp3', 'SieuXeMainLine');
// scripts/sieuxe/SieuXeMainLine.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(obj) {
    this.KCV = obj;
    return this;
  },
  onEnable: function onEnable() {
    this.node.on(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
  },
  onDisable: function onDisable() {
    this.node.off(cc.Node.EventType.MOUSE_ENTER, this.onhover, this);
    this.node.off(cc.Node.EventType.MOUSE_LEAVE, this.offhover, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2lldXhlXFxTaWV1WGVNYWluTGluZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiaW5pdCIsIm9iaiIsIktDViIsIm9uRW5hYmxlIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIk1PVVNFX0VOVEVSIiwib25ob3ZlciIsIk1PVVNFX0xFQVZFIiwib2ZmaG92ZXIiLCJvbkRpc2FibGUiLCJvZmYiLCJjaGlsZHJlbiIsImFjdGl2ZSIsIm9uRWYiLCJwYXVzZVN5c3RlbUV2ZW50cyIsIm9mZkVmIiwicmVzdW1lU3lzdGVtRXZlbnRzIiwib2ZmQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxJQUhLLGdCQUdBQyxHQUhBLEVBR0k7QUFDTCxTQUFLQyxHQUFMLEdBQVdELEdBQVg7QUFDQSxXQUFPLElBQVA7QUFDSCxHQU5JO0FBT0xFLEVBQUFBLFFBQVEsRUFBRSxvQkFBVztBQUNqQixTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLE9BQWpELEVBQTBELElBQTFEO0FBQ0EsU0FBS0wsSUFBTCxDQUFVQyxFQUFWLENBQWFSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxXQUEvQixFQUE0QyxLQUFLQyxRQUFqRCxFQUEyRCxJQUEzRDtBQUNILEdBVkk7QUFXTEMsRUFBQUEsU0FBUyxFQUFFLHFCQUFXO0FBQ2xCLFNBQUtSLElBQUwsQ0FBVVMsR0FBVixDQUFjaEIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQWhDLEVBQTZDLEtBQUtDLE9BQWxELEVBQTJELElBQTNEO0FBQ0EsU0FBS0wsSUFBTCxDQUFVUyxHQUFWLENBQWNoQixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsV0FBaEMsRUFBNkMsS0FBS0MsUUFBbEQsRUFBNEQsSUFBNUQ7QUFDSCxHQWRJO0FBZUxGLEVBQUFBLE9BQU8sRUFBRSxtQkFBVTtBQUNmLFNBQUtMLElBQUwsQ0FBVVUsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsSUFBL0I7QUFDQSxTQUFLWCxJQUFMLENBQVVVLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLElBQS9CO0FBQ0gsR0FsQkk7QUFtQkxKLEVBQUFBLFFBQVEsRUFBRSxvQkFBVTtBQUNoQixTQUFLUCxJQUFMLENBQVVVLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsU0FBS1gsSUFBTCxDQUFVVSxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxNQUF0QixHQUErQixLQUEvQjtBQUNILEdBdEJJO0FBdUJMQyxFQUFBQSxJQUFJLEVBQUUsZ0JBQVU7QUFDWixTQUFLUCxPQUFMO0FBQ0EsU0FBS0wsSUFBTCxDQUFVYSxpQkFBVixDQUE0QixJQUE1QjtBQUNILEdBMUJJO0FBMkJMQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVU7QUFDYixTQUFLUCxRQUFMO0FBQ0EsU0FBS1AsSUFBTCxDQUFVZSxrQkFBVixDQUE2QixJQUE3QjtBQUNILEdBOUJJO0FBK0JMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FFbkI7QUFqQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBpbml0KG9iail7XHJcbiAgICAgICAgdGhpcy5LQ1YgPSBvYmo7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbmhvdmVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub2ZmaG92ZXIsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbmhvdmVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm9mZmhvdmVyLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbmhvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIG9mZmhvdmVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgb25FZjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm9uaG92ZXIoKTtcclxuICAgICAgICB0aGlzLm5vZGUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgb2ZmRWY6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5vZmZob3ZlcigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgb2ZmQWxsOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgfVxyXG59KTtcclxuIl19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/CandyMainLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5cf73OfJulPvKNsjWTyvDYr', 'CandyMainLine');
// scripts/candy/CandyMainLine.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(obj) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbmR5L0NhbmR5TWFpbkxpbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJvYmoiLCJvbkVuYWJsZSIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9FTlRFUiIsIm9uaG92ZXIiLCJNT1VTRV9MRUFWRSIsIm9mZmhvdmVyIiwib25EaXNhYmxlIiwib2ZmIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJvbkVmIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJvZmZFZiIsInJlc3VtZVN5c3RlbUV2ZW50cyIsIm9mZkFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsSUFISyxnQkFHQUMsR0FIQSxFQUdJO0FBQ0wsV0FBTyxJQUFQO0FBQ0gsR0FMSTtBQU1MQyxFQUFBQSxRQUFRLEVBQUUsb0JBQVc7QUFDakIsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUEvQixFQUE0QyxLQUFLQyxPQUFqRCxFQUEwRCxJQUExRDtBQUNBLFNBQUtMLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsV0FBL0IsRUFBNEMsS0FBS0MsUUFBakQsRUFBMkQsSUFBM0Q7QUFDSCxHQVRJO0FBVUxDLEVBQUFBLFNBQVMsRUFBRSxxQkFBVztBQUNsQixTQUFLUixJQUFMLENBQVVTLEdBQVYsQ0FBY2YsRUFBRSxDQUFDUSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQWhDLEVBQTZDLEtBQUtDLE9BQWxELEVBQTJELElBQTNEO0FBQ0EsU0FBS0wsSUFBTCxDQUFVUyxHQUFWLENBQWNmLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxXQUFoQyxFQUE2QyxLQUFLQyxRQUFsRCxFQUE0RCxJQUE1RDtBQUNILEdBYkk7QUFjTEYsRUFBQUEsT0FBTyxFQUFFLG1CQUFVO0FBQ2YsU0FBS0wsSUFBTCxDQUFVVSxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxNQUF0QixHQUErQixJQUEvQjtBQUNBLFNBQUtYLElBQUwsQ0FBVVUsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsSUFBL0I7QUFDSCxHQWpCSTtBQWtCTEosRUFBQUEsUUFBUSxFQUFFLG9CQUFVO0FBQ2hCLFNBQUtQLElBQUwsQ0FBVVUsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsS0FBL0I7QUFDQSxTQUFLWCxJQUFMLENBQVVVLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0gsR0FyQkk7QUFzQkxDLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUtQLE9BQUw7QUFDQSxTQUFLTCxJQUFMLENBQVVhLGlCQUFWLENBQTRCLElBQTVCO0FBQ0gsR0F6Qkk7QUEwQkxDLEVBQUFBLEtBQUssRUFBRSxpQkFBVTtBQUNiLFNBQUtQLFFBQUw7QUFDQSxTQUFLUCxJQUFMLENBQVVlLGtCQUFWLENBQTZCLElBQTdCO0FBQ0gsR0E3Qkk7QUE4QkxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWSxDQUVuQjtBQWhDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBpbml0KG9iail7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgb25FbmFibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfRU5URVIsIHRoaXMub25ob3ZlciwgdGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vZmZob3ZlciwgdGhpcyk7XG4gICAgfSxcbiAgICBvbkRpc2FibGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCB0aGlzLm9mZmhvdmVyLCB0aGlzKTtcbiAgICB9LFxuICAgIG9uaG92ZXI6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblswXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9mZmhvdmVyOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIG9uRWY6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMub25ob3ZlcigpO1xuICAgICAgICB0aGlzLm5vZGUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XG4gICAgfSxcbiAgICBvZmZFZjogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5vZmZob3ZlcigpO1xuICAgICAgICB0aGlzLm5vZGUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xuICAgIH0sXG4gICAgb2ZmQWxsOiBmdW5jdGlvbiAoKSB7XG5cbiAgICB9XG59KTtcbiJdfQ==
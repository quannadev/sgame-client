
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/KimCuongMainLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b6c86BbR5MeoSMZRpqF98u', 'KimCuongMainLine');
// scripts/kimcuong/KimCuongMainLine.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(obj) {
    this.KCV = obj;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL0tpbUN1b25nTWFpbkxpbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJvYmoiLCJLQ1YiLCJvbkVuYWJsZSIsIm9uRGlzYWJsZSIsIm9uaG92ZXIiLCJub2RlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJvZmZob3ZlciIsIm9uRWYiLCJwYXVzZVN5c3RlbUV2ZW50cyIsIm9mZkVmIiwicmVzdW1lU3lzdGVtRXZlbnRzIiwib2ZmQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxJQUhLLGdCQUdBQyxHQUhBLEVBR0k7QUFDTCxTQUFLQyxHQUFMLEdBQVdELEdBQVg7QUFDQSxXQUFPLElBQVA7QUFDSCxHQU5JO0FBT0xFLEVBQUFBLFFBQVEsRUFBRSxvQkFBVyxDQUNqQjtBQUNBO0FBQ0gsR0FWSTtBQVdMQyxFQUFBQSxTQUFTLEVBQUUscUJBQVcsQ0FDbEI7QUFDQTtBQUNILEdBZEk7QUFlTEMsRUFBQUEsT0FBTyxFQUFFLG1CQUFVO0FBQ2YsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxNQUF0QixHQUErQixJQUEvQjtBQUNBLFNBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsSUFBL0I7QUFDSCxHQWxCSTtBQW1CTEMsRUFBQUEsUUFBUSxFQUFFLG9CQUFVO0FBQ2hCLFNBQUtILElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsS0FBL0I7QUFDQSxTQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0gsR0F0Qkk7QUF1QkxFLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUtMLE9BQUw7QUFDQSxTQUFLQyxJQUFMLENBQVVLLGlCQUFWLENBQTRCLElBQTVCO0FBQ0gsR0ExQkk7QUEyQkxDLEVBQUFBLEtBQUssRUFBRSxpQkFBVTtBQUNiLFNBQUtILFFBQUw7QUFDQSxTQUFLSCxJQUFMLENBQVVPLGtCQUFWLENBQTZCLElBQTdCO0FBQ0gsR0E5Qkk7QUErQkxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWSxDQUVuQjtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBpbml0KG9iail7XG4gICAgICAgIHRoaXMuS0NWID0gb2JqO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub2ZmaG92ZXIsIHRoaXMpO1xuICAgIH0sXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbmhvdmVyLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vZmZob3ZlciwgdGhpcyk7XG4gICAgfSxcbiAgICBvbmhvdmVyOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBvZmZob3ZlcjogZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMV0uYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbkVmOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm9uaG92ZXIoKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xuICAgIH0sXG4gICAgb2ZmRWY6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMub2ZmaG92ZXIoKTtcbiAgICAgICAgdGhpcy5ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICB9LFxuICAgIG9mZkFsbDogZnVuY3Rpb24gKCkge1xuXG4gICAgfVxufSk7XG4iXX0=
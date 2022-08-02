
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXEtpbUN1b25nTWFpbkxpbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJvYmoiLCJLQ1YiLCJvbkVuYWJsZSIsIm9uRGlzYWJsZSIsIm9uaG92ZXIiLCJub2RlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJvZmZob3ZlciIsIm9uRWYiLCJwYXVzZVN5c3RlbUV2ZW50cyIsIm9mZkVmIiwicmVzdW1lU3lzdGVtRXZlbnRzIiwib2ZmQWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxJQUhLLGdCQUdBQyxHQUhBLEVBR0k7QUFDTCxTQUFLQyxHQUFMLEdBQVdELEdBQVg7QUFDQSxXQUFPLElBQVA7QUFDSCxHQU5JO0FBT0xFLEVBQUFBLFFBQVEsRUFBRSxvQkFBVyxDQUNqQjtBQUNBO0FBQ0gsR0FWSTtBQVdMQyxFQUFBQSxTQUFTLEVBQUUscUJBQVcsQ0FDbEI7QUFDQTtBQUNILEdBZEk7QUFlTEMsRUFBQUEsT0FBTyxFQUFFLG1CQUFVO0FBQ2YsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxNQUF0QixHQUErQixJQUEvQjtBQUNBLFNBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsSUFBL0I7QUFDSCxHQWxCSTtBQW1CTEMsRUFBQUEsUUFBUSxFQUFFLG9CQUFVO0FBQ2hCLFNBQUtILElBQUwsQ0FBVUMsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsS0FBL0I7QUFDQSxTQUFLRixJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0gsR0F0Qkk7QUF1QkxFLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUtMLE9BQUw7QUFDQSxTQUFLQyxJQUFMLENBQVVLLGlCQUFWLENBQTRCLElBQTVCO0FBQ0gsR0ExQkk7QUEyQkxDLEVBQUFBLEtBQUssRUFBRSxpQkFBVTtBQUNiLFNBQUtILFFBQUw7QUFDQSxTQUFLSCxJQUFMLENBQVVPLGtCQUFWLENBQTZCLElBQTdCO0FBQ0gsR0E5Qkk7QUErQkxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWSxDQUVuQjtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGluaXQob2JqKXtcclxuICAgICAgICB0aGlzLktDViA9IG9iajtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vZmZob3ZlciwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub2ZmaG92ZXIsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uaG92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgb2ZmaG92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBvbkVmOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMub25ob3ZlcigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgIH0sXHJcbiAgICBvZmZFZjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm9mZmhvdmVyKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgIH0sXHJcbiAgICBvZmZBbGw6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
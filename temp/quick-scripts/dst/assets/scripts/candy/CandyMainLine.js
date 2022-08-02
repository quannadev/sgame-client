
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FuZHlcXENhbmR5TWFpbkxpbmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImluaXQiLCJvYmoiLCJvbkVuYWJsZSIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJNT1VTRV9FTlRFUiIsIm9uaG92ZXIiLCJNT1VTRV9MRUFWRSIsIm9mZmhvdmVyIiwib25EaXNhYmxlIiwib2ZmIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJvbkVmIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJvZmZFZiIsInJlc3VtZVN5c3RlbUV2ZW50cyIsIm9mZkFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsSUFISyxnQkFHQUMsR0FIQSxFQUdJO0FBQ0wsV0FBTyxJQUFQO0FBQ0gsR0FMSTtBQU1MQyxFQUFBQSxRQUFRLEVBQUUsb0JBQVc7QUFDakIsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFQLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxXQUEvQixFQUE0QyxLQUFLQyxPQUFqRCxFQUEwRCxJQUExRDtBQUNBLFNBQUtMLElBQUwsQ0FBVUMsRUFBVixDQUFhUCxFQUFFLENBQUNRLElBQUgsQ0FBUUMsU0FBUixDQUFrQkcsV0FBL0IsRUFBNEMsS0FBS0MsUUFBakQsRUFBMkQsSUFBM0Q7QUFDSCxHQVRJO0FBVUxDLEVBQUFBLFNBQVMsRUFBRSxxQkFBVztBQUNsQixTQUFLUixJQUFMLENBQVVTLEdBQVYsQ0FBY2YsRUFBRSxDQUFDUSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQWhDLEVBQTZDLEtBQUtDLE9BQWxELEVBQTJELElBQTNEO0FBQ0EsU0FBS0wsSUFBTCxDQUFVUyxHQUFWLENBQWNmLEVBQUUsQ0FBQ1EsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxXQUFoQyxFQUE2QyxLQUFLQyxRQUFsRCxFQUE0RCxJQUE1RDtBQUNILEdBYkk7QUFjTEYsRUFBQUEsT0FBTyxFQUFFLG1CQUFVO0FBQ2YsU0FBS0wsSUFBTCxDQUFVVSxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxNQUF0QixHQUErQixJQUEvQjtBQUNBLFNBQUtYLElBQUwsQ0FBVVUsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsSUFBL0I7QUFDSCxHQWpCSTtBQWtCTEosRUFBQUEsUUFBUSxFQUFFLG9CQUFVO0FBQ2hCLFNBQUtQLElBQUwsQ0FBVVUsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsTUFBdEIsR0FBK0IsS0FBL0I7QUFDQSxTQUFLWCxJQUFMLENBQVVVLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0gsR0FyQkk7QUFzQkxDLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUtQLE9BQUw7QUFDQSxTQUFLTCxJQUFMLENBQVVhLGlCQUFWLENBQTRCLElBQTVCO0FBQ0gsR0F6Qkk7QUEwQkxDLEVBQUFBLEtBQUssRUFBRSxpQkFBVTtBQUNiLFNBQUtQLFFBQUw7QUFDQSxTQUFLUCxJQUFMLENBQVVlLGtCQUFWLENBQTZCLElBQTdCO0FBQ0gsR0E3Qkk7QUE4QkxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWSxDQUVuQjtBQWhDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGluaXQob2JqKXtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vZmZob3ZlciwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub2ZmaG92ZXIsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uaG92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzFdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgb2ZmaG92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlblsxXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBvbkVmOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMub25ob3ZlcigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgIH0sXHJcbiAgICBvZmZFZjogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm9mZmhvdmVyKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgIH0sXHJcbiAgICBvZmZBbGw6IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadMainLine.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c40228Zh7RNQK/njdH8OqyO', 'SinbadMainLine');
// scripts/sinbad/SinbadMainLine.js

"use strict";

cc.Class({
  "extends": cc.Component,
  init: function init(obj) {
    this.SLV = obj;
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
  },
  offhover: function offhover() {
    this.node.children[0].active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRNYWluTGluZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiaW5pdCIsIm9iaiIsIlNMViIsIm9uRW5hYmxlIiwib25EaXNhYmxlIiwib25ob3ZlciIsIm5vZGUiLCJjaGlsZHJlbiIsImFjdGl2ZSIsIm9mZmhvdmVyIiwib25FZiIsInBhdXNlU3lzdGVtRXZlbnRzIiwib2ZmRWYiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJvZmZBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLEdBSEEsRUFHSTtBQUNMLFNBQUtDLEdBQUwsR0FBV0QsR0FBWDtBQUNBLFdBQU8sSUFBUDtBQUNILEdBTkk7QUFPTEUsRUFBQUEsUUFBUSxFQUFFLG9CQUFXLENBQ2pCO0FBQ0E7QUFDSCxHQVZJO0FBV0xDLEVBQUFBLFNBQVMsRUFBRSxxQkFBVyxDQUNsQjtBQUNBO0FBQ0gsR0FkSTtBQWVMQyxFQUFBQSxPQUFPLEVBQUUsbUJBQVU7QUFDZixTQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLElBQS9CO0FBQ0gsR0FqQkk7QUFrQkxDLEVBQUFBLFFBQVEsRUFBRSxvQkFBVTtBQUNoQixTQUFLSCxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0gsR0FwQkk7QUFxQkxFLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUtMLE9BQUw7QUFDQSxTQUFLQyxJQUFMLENBQVVLLGlCQUFWLENBQTRCLElBQTVCO0FBQ0gsR0F4Qkk7QUF5QkxDLEVBQUFBLEtBQUssRUFBRSxpQkFBVTtBQUNiLFNBQUtILFFBQUw7QUFDQSxTQUFLSCxJQUFMLENBQVVPLGtCQUFWLENBQTZCLElBQTdCO0FBQ0gsR0E1Qkk7QUE2QkxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWSxDQUVuQjtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBpbml0KG9iail7XG4gICAgICAgIHRoaXMuU0xWID0gb2JqO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIG9uRW5hYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub2ZmaG92ZXIsIHRoaXMpO1xuICAgIH0sXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgdGhpcy5vbmhvdmVyLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vZmZob3ZlciwgdGhpcyk7XG4gICAgfSxcbiAgICBvbmhvdmVyOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIG9mZmhvdmVyOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5bMF0uYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBvbkVmOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm9uaG92ZXIoKTtcbiAgICAgICAgdGhpcy5ub2RlLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xuICAgIH0sXG4gICAgb2ZmRWY6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMub2ZmaG92ZXIoKTtcbiAgICAgICAgdGhpcy5ub2RlLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICB9LFxuICAgIG9mZkFsbDogZnVuY3Rpb24gKCkge1xuXG4gICAgfVxufSk7XG4iXX0=
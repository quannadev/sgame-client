
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxTaW5iYWRNYWluTGluZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwiaW5pdCIsIm9iaiIsIlNMViIsIm9uRW5hYmxlIiwib25EaXNhYmxlIiwib25ob3ZlciIsIm5vZGUiLCJjaGlsZHJlbiIsImFjdGl2ZSIsIm9mZmhvdmVyIiwib25FZiIsInBhdXNlU3lzdGVtRXZlbnRzIiwib2ZmRWYiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJvZmZBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLElBSEssZ0JBR0FDLEdBSEEsRUFHSTtBQUNMLFNBQUtDLEdBQUwsR0FBV0QsR0FBWDtBQUNBLFdBQU8sSUFBUDtBQUNILEdBTkk7QUFPTEUsRUFBQUEsUUFBUSxFQUFFLG9CQUFXLENBQ2pCO0FBQ0E7QUFDSCxHQVZJO0FBV0xDLEVBQUFBLFNBQVMsRUFBRSxxQkFBVyxDQUNsQjtBQUNBO0FBQ0gsR0FkSTtBQWVMQyxFQUFBQSxPQUFPLEVBQUUsbUJBQVU7QUFDZixTQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLElBQS9CO0FBQ0gsR0FqQkk7QUFrQkxDLEVBQUFBLFFBQVEsRUFBRSxvQkFBVTtBQUNoQixTQUFLSCxJQUFMLENBQVVDLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0gsR0FwQkk7QUFxQkxFLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUtMLE9BQUw7QUFDQSxTQUFLQyxJQUFMLENBQVVLLGlCQUFWLENBQTRCLElBQTVCO0FBQ0gsR0F4Qkk7QUF5QkxDLEVBQUFBLEtBQUssRUFBRSxpQkFBVTtBQUNiLFNBQUtILFFBQUw7QUFDQSxTQUFLSCxJQUFMLENBQVVPLGtCQUFWLENBQTZCLElBQTdCO0FBQ0gsR0E1Qkk7QUE2QkxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWSxDQUVuQjtBQS9CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIGluaXQob2JqKXtcclxuICAgICAgICB0aGlzLlNMViA9IG9iajtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9MRUFWRSwgdGhpcy5vZmZob3ZlciwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyB0aGlzLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCB0aGlzLm9uaG92ZXIsIHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIHRoaXMub2ZmaG92ZXIsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIG9uaG92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgb2ZmaG92ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIG9uRWY6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5vbmhvdmVyKCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgfSxcclxuICAgIG9mZkVmOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHRoaXMub2ZmaG92ZXIoKTtcclxuICAgICAgICB0aGlzLm5vZGUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgfSxcclxuICAgIG9mZkFsbDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sieuxe/UISieuXeHelper.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c740bo341LhZk4g0X7OWaB', 'UISieuXeHelper');
// scripts/sieuxe/UISieuXeHelper.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {},
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }
  },
  eventClose: function eventClose() {
    this.back();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2lldXhlXFxVSVNpZXVYZUhlbHBlci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkVuYWJsZSIsIm5vZGUiLCJ6SW5kZXgiLCJsYXN0WkluZGV4IiwiZXZlbnRDbG9zZSIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MQyxFQUFBQSxRQU5LLHNCQU1PO0FBQ1IsUUFBSSxLQUFLQyxJQUFMLENBQVVDLE1BQVYsSUFBb0JOLEVBQUUsQ0FBQ08sVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CTixFQUFFLENBQUNPLFVBQXRCO0FBQ0g7QUFDSixHQVZJO0FBV0xDLEVBQUFBLFVBWEssd0JBV1E7QUFDVCxTQUFLQyxJQUFMO0FBQ0g7QUFiSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUgKCkge1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
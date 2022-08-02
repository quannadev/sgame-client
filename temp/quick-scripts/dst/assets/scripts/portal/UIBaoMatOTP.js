
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/UIBaoMatOTP.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '826abY87hRI442yZwTg/sWm', 'UIBaoMatOTP');
// scripts/portal/UIBaoMatOTP.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    phone: cc.EditBox,
    code_otp: cc.EditBox
  },
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  eventClose: function eventClose() {
    this.back();
    mm.audio.playButton();
  },
  eventUpdate: function eventUpdate() {
    mm.audio.playButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxVSUJhb01hdE9UUC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwaG9uZSIsIkVkaXRCb3giLCJjb2RlX290cCIsIm9uRW5hYmxlIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJldmVudENsb3NlIiwiYmFjayIsIm1tIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwiZXZlbnRVcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFSixFQUFFLENBQUNLLE9BREY7QUFFUkMsSUFBQUEsUUFBUSxFQUFFTixFQUFFLENBQUNLO0FBRkwsR0FIUDtBQU9MRSxFQUFBQSxRQVBLLHNCQU9LO0FBQ04sUUFBSSxLQUFLQyxJQUFMLENBQVVDLE1BQVYsSUFBb0JULEVBQUUsQ0FBQ1UsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CVCxFQUFFLENBQUNVLFVBQUgsR0FBYyxDQUFqQztBQUNIO0FBQ0osR0FYSTtBQVlMQyxFQUFBQSxVQVpLLHdCQVlPO0FBQ1IsU0FBS0MsSUFBTDtBQUNBQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNILEdBZkk7QUFnQkxDLEVBQUFBLFdBaEJLLHlCQWdCUTtBQUNUSCxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNIO0FBbEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHBob25lOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIGNvZGVfb3RwOiBjYy5FZGl0Qm94XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnpJbmRleCA8PSBjYy5sYXN0WkluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLmxhc3RaSW5kZXgrMTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpe1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgIH0sXHJcbiAgICBldmVudFVwZGF0ZSgpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
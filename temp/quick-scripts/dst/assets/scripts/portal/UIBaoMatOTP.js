
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BvcnRhbC9VSUJhb01hdE9UUC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwaG9uZSIsIkVkaXRCb3giLCJjb2RlX290cCIsIm9uRW5hYmxlIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJldmVudENsb3NlIiwiYmFjayIsIm1tIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwiZXZlbnRVcGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFSixFQUFFLENBQUNLLE9BREY7QUFFUkMsSUFBQUEsUUFBUSxFQUFFTixFQUFFLENBQUNLO0FBRkwsR0FIUDtBQU9MRSxFQUFBQSxRQVBLLHNCQU9LO0FBQ04sUUFBSSxLQUFLQyxJQUFMLENBQVVDLE1BQVYsSUFBb0JULEVBQUUsQ0FBQ1UsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CVCxFQUFFLENBQUNVLFVBQUgsR0FBYyxDQUFqQztBQUNIO0FBQ0osR0FYSTtBQVlMQyxFQUFBQSxVQVpLLHdCQVlPO0FBQ1IsU0FBS0MsSUFBTDtBQUNBQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNILEdBZkk7QUFnQkxDLEVBQUFBLFdBaEJLLHlCQWdCUTtBQUNUSCxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNIO0FBbEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBwaG9uZTogY2MuRWRpdEJveCxcbiAgICAgICAgY29kZV9vdHA6IGNjLkVkaXRCb3hcbiAgICB9LFxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLmxhc3RaSW5kZXgrMTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRDbG9zZSgpe1xuICAgICAgICB0aGlzLmJhY2soKTtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgIH0sXG4gICAgZXZlbnRVcGRhdGUoKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgIH1cbn0pO1xuIl19
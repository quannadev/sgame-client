
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/action/ActionRotate.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8201bPTvwFBGJDnQyU8Hphu', 'ActionRotate');
// _smartfox/gui/action/ActionRotate.js

"use strict";

var MOVE_TYPE = cc.Enum({
  MoveTop: 1,
  MoveBottom: 2,
  MoveLeft: 3,
  MoveRight: 4
});
cc.Class({
  "extends": cc.Component,
  properties: {
    timer: 4
  },
  onLoad: function onLoad() {
    var actionBy = cc.rotateBy(this.timer, 360);
    this.node.runAction(actionBy.repeatForever());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX3NtYXJ0Zm94XFxndWlcXGFjdGlvblxcQWN0aW9uUm90YXRlLmpzIl0sIm5hbWVzIjpbIk1PVkVfVFlQRSIsImNjIiwiRW51bSIsIk1vdmVUb3AiLCJNb3ZlQm90dG9tIiwiTW92ZUxlZnQiLCJNb3ZlUmlnaHQiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJ0aW1lciIsIm9uTG9hZCIsImFjdGlvbkJ5Iiwicm90YXRlQnkiLCJub2RlIiwicnVuQWN0aW9uIiwicmVwZWF0Rm9yZXZlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxTQUFTLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ3RCQyxFQUFBQSxPQUFPLEVBQVMsQ0FETTtBQUV0QkMsRUFBQUEsVUFBVSxFQUFNLENBRk07QUFHdEJDLEVBQUFBLFFBQVEsRUFBUSxDQUhNO0FBSXRCQyxFQUFBQSxTQUFTLEVBQU87QUFKTSxDQUFSLENBQWxCO0FBT0FMLEVBQUUsQ0FBQ00sS0FBSCxDQUFTO0FBQ0wsYUFBU04sRUFBRSxDQUFDTyxTQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQVc7QUFEUixHQUZQO0FBS0xDLEVBQUFBLE1BTEssb0JBS0s7QUFDTixRQUFJQyxRQUFRLEdBQUdYLEVBQUUsQ0FBQ1ksUUFBSCxDQUFZLEtBQUtILEtBQWpCLEVBQXdCLEdBQXhCLENBQWY7QUFDQSxTQUFLSSxJQUFMLENBQVVDLFNBQVYsQ0FBb0JILFFBQVEsQ0FBQ0ksYUFBVCxFQUFwQjtBQUNIO0FBUkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTU9WRV9UWVBFID0gY2MuRW51bSh7XHJcbiAgICBNb3ZlVG9wICAgICAgIDogMSxcclxuICAgIE1vdmVCb3R0b20gICAgOiAyLFxyXG4gICAgTW92ZUxlZnQgICAgICA6IDMsXHJcbiAgICBNb3ZlUmlnaHQgICAgIDogNCxcclxufSk7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdGltZXIgICAgICAgICA6IDQsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBsZXQgYWN0aW9uQnkgPSBjYy5yb3RhdGVCeSh0aGlzLnRpbWVyLCAzNjApO1xyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oYWN0aW9uQnkucmVwZWF0Rm9yZXZlcigpKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
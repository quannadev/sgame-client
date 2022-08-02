
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/action/ActionScale.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c2bb5sgqExIgrS2J5v3PKDt', 'ActionScale');
// _smartfox/gui/action/ActionScale.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onEnable: function onEnable() {
    this.node.scale = 0;
    this.node.runAction(cc.sequence(cc.scaleTo(0.2, 1.05), cc.delayTime(0.1), cc.scaleTo(0.1, 1)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcX3NtYXJ0Zm94XFxndWlcXGFjdGlvblxcQWN0aW9uU2NhbGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkVuYWJsZSIsIm5vZGUiLCJzY2FsZSIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwic2NhbGVUbyIsImRlbGF5VGltZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFNTEMsRUFBQUEsUUFOSyxzQkFNTztBQUNSLFNBQUtDLElBQUwsQ0FBVUMsS0FBVixHQUFrQixDQUFsQjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsU0FBVixDQUNJUCxFQUFFLENBQUNRLFFBQUgsQ0FDSVIsRUFBRSxDQUFDUyxPQUFILENBQVcsR0FBWCxFQUFnQixJQUFoQixDQURKLEVBRUlULEVBQUUsQ0FBQ1UsU0FBSCxDQUFhLEdBQWIsQ0FGSixFQUdJVixFQUFFLENBQUNTLE9BQUgsQ0FBVyxHQUFYLEVBQWdCLENBQWhCLENBSEosQ0FESjtBQU9IO0FBZkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5zY2FsZVRvKDAuMiwgMS4wNSksXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC4xKSxcclxuICAgICAgICAgICAgICAgIGNjLnNjYWxlVG8oMC4xLCAxKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
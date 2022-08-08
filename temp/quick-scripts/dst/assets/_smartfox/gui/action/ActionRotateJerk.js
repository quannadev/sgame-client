
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/_smartfox/gui/action/ActionRotateJerk.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '763396pf7hMnaO8rEr45Ez2', 'ActionRotateJerk');
// _smartfox/gui/action/ActionRotateJerk.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    _seq2: null
  },
  onLoad: function onLoad() {
    var seq = cc.sequence(cc.rotateTo(0.5, -30), cc.rotateTo(0.5, 30));
    this._seq2 = seq.clone().repeatForever();
  },
  runActionRotateJerk: function runActionRotateJerk(nodeRun) {
    nodeRun.runAction(cc.sequence(this._seq2, cc.delayTime(1)).bind(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9fc21hcnRmb3gvZ3VpL2FjdGlvbi9BY3Rpb25Sb3RhdGVKZXJrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiX3NlcTIiLCJvbkxvYWQiLCJzZXEiLCJzZXF1ZW5jZSIsInJvdGF0ZVRvIiwiY2xvbmUiLCJyZXBlYXRGb3JldmVyIiwicnVuQWN0aW9uUm90YXRlSmVyayIsIm5vZGVSdW4iLCJydW5BY3Rpb24iLCJkZWxheVRpbWUiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFFO0FBREMsR0FGUDtBQUtMQyxFQUFBQSxNQUxLLG9CQUtLO0FBQ04sUUFBTUMsR0FBRyxHQUFHTixFQUFFLENBQUNPLFFBQUgsQ0FDUlAsRUFBRSxDQUFDUSxRQUFILENBQVksR0FBWixFQUFpQixDQUFDLEVBQWxCLENBRFEsRUFFUlIsRUFBRSxDQUFDUSxRQUFILENBQVksR0FBWixFQUFpQixFQUFqQixDQUZRLENBQVo7QUFJQSxTQUFLSixLQUFMLEdBQWFFLEdBQUcsQ0FBQ0csS0FBSixHQUFZQyxhQUFaLEVBQWI7QUFDSCxHQVhJO0FBWUxDLEVBQUFBLG1CQVpLLCtCQVllQyxPQVpmLEVBWXdCO0FBQ3pCQSxJQUFBQSxPQUFPLENBQUNDLFNBQVIsQ0FDSWIsRUFBRSxDQUFDTyxRQUFILENBQ0ksS0FBS0gsS0FEVCxFQUVJSixFQUFFLENBQUNjLFNBQUgsQ0FBYSxDQUFiLENBRkosRUFHRUMsSUFIRixDQUdPLElBSFAsQ0FESjtBQUtIO0FBbEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfc2VxMjogbnVsbCxcbiAgICB9LFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIGNvbnN0IHNlcSA9IGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgY2Mucm90YXRlVG8oMC41LCAtMzApLFxuICAgICAgICAgICAgY2Mucm90YXRlVG8oMC41LCAzMClcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5fc2VxMiA9IHNlcS5jbG9uZSgpLnJlcGVhdEZvcmV2ZXIoKTtcbiAgICB9LFxuICAgIHJ1bkFjdGlvblJvdGF0ZUplcmsobm9kZVJ1bikge1xuICAgICAgICBub2RlUnVuLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICAgIHRoaXMuX3NlcTIsXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEpXG4gICAgICAgICAgICApLmJpbmQodGhpcykpO1xuICAgIH1cbn0pO1xuIl19
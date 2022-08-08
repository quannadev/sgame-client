
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/poker/Timer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77bd8G8bZtE4pRjbtrbTTRM', 'Timer');
// scripts/poker/Timer.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    progressBar: cc.ProgressBar,
    _tick: 0,
    _totalTimeProgress: 10,
    _remainTurnTime: 30,
    _timeWarning: 5,
    _cbCompleteProgress: null,
    _cbWarning: null,
    _isWarning: false,
    lb_time: cc.Label
  },
  onEnable: function onEnable() {
    this._tick = 0;
    this._totalTimeProgress = 10;
    this._remainTurnTime = 10;
    this.lb_time.node.active = false;
  },
  addEventTimerComplete: function addEventTimerComplete(cb) {
    this._cbCompleteProgress = cb;
  },
  addEventTimerWarning: function addEventTimerWarning(cb) {
    this._cbWarning = cb;
  },
  setTimeWarning: function setTimeWarning(timeWarning) {
    this._timeWarning = timeWarning;
  },
  setCurrentProgress: function setCurrentProgress(currentTime) {
    this._remainTurnTime = currentTime;
  },
  setTotalProgress: function setTotalProgress(totalTime) {
    this._totalTimeProgress = totalTime;
  },
  setTotalRemain: function setTotalRemain(remainTime) {
    this._remainTurnTime = remainTime;
  },
  turnOnTimer: function turnOnTimer() {
    this.turnOffTimer();
    this.progressBar.node.active = true;
    this.progressBar.progress = 0;
    this._tick = this._remainTurnTime * 1000 + Date.now();
    this.unschedule(this.updateTimer, 0.1);
    this.schedule(this.updateTimer, 0.1);
  },
  turnOffTimer: function turnOffTimer() {
    this.lb_time.node.active = false;
    this._cbCompleteProgress = null;
    this._cbWarning = null;
    this._isWarning = false;
    this.progressBar.node.active = false;
    this.unschedule(this.updateTimer, 0.1);
  },
  updateTimer: function updateTimer(dt) {
    var newTick = (this._totalTimeProgress * 1000 + Date.now() - this._tick) / 1000;

    if (newTick <= this._totalTimeProgress) {
      this.lb_time.node.active = true; // if(this.lb_time.node.y == 0){
      //     this.lb_time.node.y = 20;
      //     this.lb_time.node.stopAllActions();
      //     this.lb_time.node.runAction(cc.sequence(cc.moveTo(0.1, cc.v2(0, 0)),cc.delayTime(0.9), cc.callFunc(function () {
      //         this.node.y = 0;
      //     }, this.lb_time)));
      // }

      this.lb_time.string = this._totalTimeProgress - Math.floor(newTick);
      this.progressBar.progress = newTick / this._totalTimeProgress;

      if (!this._isWarning && this._totalTimeProgress - newTick <= this._timeWarning) {
        this._isWarning = true;
        if (this._cbWarning) this._cbWarning();
      }
    } else {
      if (this._cbCompleteProgress) this._cbCompleteProgress();
      this.turnOffTimer();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Bva2VyL1RpbWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsInByb2dyZXNzQmFyIiwiUHJvZ3Jlc3NCYXIiLCJfdGljayIsIl90b3RhbFRpbWVQcm9ncmVzcyIsIl9yZW1haW5UdXJuVGltZSIsIl90aW1lV2FybmluZyIsIl9jYkNvbXBsZXRlUHJvZ3Jlc3MiLCJfY2JXYXJuaW5nIiwiX2lzV2FybmluZyIsImxiX3RpbWUiLCJMYWJlbCIsIm9uRW5hYmxlIiwibm9kZSIsImFjdGl2ZSIsImFkZEV2ZW50VGltZXJDb21wbGV0ZSIsImNiIiwiYWRkRXZlbnRUaW1lcldhcm5pbmciLCJzZXRUaW1lV2FybmluZyIsInRpbWVXYXJuaW5nIiwic2V0Q3VycmVudFByb2dyZXNzIiwiY3VycmVudFRpbWUiLCJzZXRUb3RhbFByb2dyZXNzIiwidG90YWxUaW1lIiwic2V0VG90YWxSZW1haW4iLCJyZW1haW5UaW1lIiwidHVybk9uVGltZXIiLCJ0dXJuT2ZmVGltZXIiLCJwcm9ncmVzcyIsIkRhdGUiLCJub3ciLCJ1bnNjaGVkdWxlIiwidXBkYXRlVGltZXIiLCJzY2hlZHVsZSIsImR0IiwibmV3VGljayIsInN0cmluZyIsIk1hdGgiLCJmbG9vciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUVKLEVBQUUsQ0FBQ0ssV0FEUjtBQUVSQyxJQUFBQSxLQUFLLEVBQUUsQ0FGQztBQUdSQyxJQUFBQSxrQkFBa0IsRUFBRSxFQUhaO0FBSVJDLElBQUFBLGVBQWUsRUFBRSxFQUpUO0FBS1JDLElBQUFBLFlBQVksRUFBRSxDQUxOO0FBTVJDLElBQUFBLG1CQUFtQixFQUFFLElBTmI7QUFPUkMsSUFBQUEs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Q0FBQyxLQUFLSyxVQUFOLElBQXFCLEtBQUtMLGtCQUFMLEdBQTBCK0IsT0FBM0IsSUFBdUMsS0FBSzdCLFlBQW5FLEVBQWdGO0FBQzVFLGFBQUtHLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxZQUFHLEtBQUtELFVBQVIsRUFDSSxLQUFLQSxVQUFMO0FBQ1A7QUFDSixLQWhCRCxNQWdCSztBQUNELFVBQUcsS0FBS0QsbUJBQVIsRUFDSSxLQUFLQSxtQkFBTDtBQUNKLFdBQUtvQixZQUFMO0FBQ0g7QUFDSjtBQTdFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyLFxuICAgICAgICBfdGljazogMCxcbiAgICAgICAgX3RvdGFsVGltZVByb2dyZXNzOiAxMCxcbiAgICAgICAgX3JlbWFpblR1cm5UaW1lOiAzMCxcbiAgICAgICAgX3RpbWVXYXJuaW5nOiA1LFxuICAgICAgICBfY2JDb21wbGV0ZVByb2dyZXNzOiBudWxsLFxuICAgICAgICBfY2JXYXJuaW5nOiBudWxsLFxuICAgICAgICBfaXNXYXJuaW5nOiBmYWxzZSxcbiAgICAgICAgbGJfdGltZSA6IGNjLkxhYmVsXG4gICAgfSxcbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICB0aGlzLl90aWNrID0gMDtcbiAgICAgICAgdGhpcy5fdG90YWxUaW1lUHJvZ3Jlc3MgPSAxMDtcbiAgICAgICAgdGhpcy5fcmVtYWluVHVyblRpbWUgPSAxMDtcbiAgICAgICAgdGhpcy5sYl90aW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBhZGRFdmVudFRpbWVyQ29tcGxldGUoY2Ipe1xuICAgICAgICB0aGlzLl9jYkNvbXBsZXRlUHJvZ3Jlc3MgPSBjYjtcbiAgICB9LFxuICAgIGFkZEV2ZW50VGltZXJXYXJuaW5nKGNiKXtcbiAgICAgICAgdGhpcy5fY2JXYXJuaW5nID0gY2I7XG4gICAgfSxcbiAgICBzZXRUaW1lV2FybmluZyh0aW1lV2FybmluZyl7XG4gICAgICAgIHRoaXMuX3RpbWVXYXJuaW5nID0gdGltZVdhcm5pbmdcbiAgICB9LFxuICAgIHNldEN1cnJlbnRQcm9ncmVzcyhjdXJyZW50VGltZSl7XG4gICAgICAgIHRoaXMuX3JlbWFpblR1cm5UaW1lID0gY3VycmVudFRpbWU7XG4gICAgfSxcbiAgICBzZXRUb3RhbFByb2dyZXNzKHRvdGFsVGltZSl7XG4gICAgICAgIHRoaXMuX3RvdGFsVGltZVByb2dyZXNzID0gdG90YWxUaW1lO1xuICAgIH0sXG4gICAgc2V0VG90YWxSZW1haW4ocmVtYWluVGltZSl7XG4gICAgICAgIHRoaXMuX3JlbWFpblR1cm5UaW1lID0gcmVtYWluVGltZTtcbiAgICB9LFxuICAgIHR1cm5PblRpbWVyKCl7XG4gICAgICAgIHRoaXMudHVybk9mZlRpbWVyKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5fdGljayA9IHRoaXMuX3JlbWFpblR1cm5UaW1lICogMTAwMCAgKyBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMC4xKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAwLjEpO1xuICAgIH0sXG4gICAgdHVybk9mZlRpbWVyKCl7XG4gICAgICAgIHRoaXMubGJfdGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jYkNvbXBsZXRlUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLl9jYldhcm5pbmcgPSBudWxsO1xuICAgICAgICB0aGlzLl9pc1dhcm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMC4xKTtcbiAgICB9LFxuICAgIHVwZGF0ZVRpbWVyKGR0KXtcbiAgICAgICAgbGV0IG5ld1RpY2sgPSAodGhpcy5fdG90YWxUaW1lUHJvZ3Jlc3MgKiAxMDAwICsgRGF0ZS5ub3coKSAtIHRoaXMuX3RpY2spIC8gMTAwMDtcbiAgICAgICAgaWYobmV3VGljayA8PSB0aGlzLl90b3RhbFRpbWVQcm9ncmVzcyl7XG4gICAgICAgICAgICB0aGlzLmxiX3RpbWUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8gaWYodGhpcy5sYl90aW1lLm5vZGUueSA9PSAwKXtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmxiX3RpbWUubm9kZS55ID0gMjA7XG4gICAgICAgICAgICAvLyAgICAgdGhpcy5sYl90aW1lLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmxiX3RpbWUubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuMSwgY2MudjIoMCwgMCkpLGNjLmRlbGF5VGltZSgwLjkpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICAgICAgICAgIC8vICAgICB9LCB0aGlzLmxiX3RpbWUpKSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB0aGlzLmxiX3RpbWUuc3RyaW5nID0gdGhpcy5fdG90YWxUaW1lUHJvZ3Jlc3MgLSBNYXRoLmZsb29yKG5ld1RpY2spO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IG5ld1RpY2sgL3RoaXMuX3RvdGFsVGltZVByb2dyZXNzO1xuICAgICAgICAgICAgaWYoIXRoaXMuX2lzV2FybmluZyAmJiAodGhpcy5fdG90YWxUaW1lUHJvZ3Jlc3MgLSBuZXdUaWNrKSA8PSB0aGlzLl90aW1lV2FybmluZyl7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNXYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYldhcm5pbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NiV2FybmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMuX2NiQ29tcGxldGVQcm9ncmVzcylcbiAgICAgICAgICAgICAgICB0aGlzLl9jYkNvbXBsZXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIHRoaXMudHVybk9mZlRpbWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==
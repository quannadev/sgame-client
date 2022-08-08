
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/baccarat/TimeSub.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '700a1GAnw1MsKGm7OpCTSip', 'TimeSub');
// scripts/baccarat/TimeSub.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    progressBar: cc.ProgressBar,
    _tick: 0,
    _totalTimeProgress: 30,
    _remainTurnTime: 30,
    _timeWarning: 5,
    _cbCompleteProgress: null,
    _cbWarning: null,
    _isWarning: false,
    lb_time: cc.Label
  },
  onEnable: function onEnable() {
    this._tick = 0;
    this._totalTimeProgress = 30;
    this._remainTurnTime = 30;
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
    var newTick = (this._tick - Date.now() - this._totalTimeProgress) / 1000;

    if (newTick > 0 && newTick <= this._totalTimeProgress) {
      this.lb_time.node.active = true;
      this.lb_time.string = Math.ceil(newTick);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhY2NhcmF0L1RpbWVTdWIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJvZ3Jlc3NCYXIiLCJQcm9ncmVzc0JhciIsIl90aWNrIiwiX3RvdGFsVGltZVByb2dyZXNzIiwiX3JlbWFpblR1cm5UaW1lIiwiX3RpbWVXYXJuaW5nIiwiX2NiQ29tcGxldGVQcm9ncmVzcyIsIl9jYldhcm5pbmciLCJfaXNXYXJuaW5nIiwibGJfdGltZSIsIkxhYmVsIiwib25FbmFibGUiLCJub2RlIiwiYWN0aXZlIiwiYWRkRXZlbnRUaW1lckNvbXBsZXRlIiwiY2IiLCJhZGRFdmVudFRpbWVyV2FybmluZyIsInNldFRpbWVXYXJuaW5nIiwidGltZVdhcm5pbmciLCJzZXRDdXJyZW50UHJvZ3Jlc3MiLCJjdXJyZW50VGltZSIsInNldFRvdGFsUHJvZ3Jlc3MiLCJ0b3RhbFRpbWUiLCJzZXRUb3RhbFJlbWFpbiIsInJlbWFpblRpbWUiLCJ0dXJuT25UaW1lciIsInR1cm5PZmZUaW1lciIsInByb2dyZXNzIiwiRGF0ZSIsIm5vdyIsInVuc2NoZWR1bGUiLCJ1cGRhdGVUaW1lciIsInNjaGVkdWxlIiwiZHQiLCJuZXdUaWNrIiwic3RyaW5nIiwiTWF0aCIsImNlaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFSixFQUFFLENBQUNLLFdBRFI7QUFFUkMsSUFBQUEsS0FBSyxFQUFFLENBRkM7QUFHUkMsSUFBQUEsa0JBQWtCLEVBQUUsRUFIWjtBQUlSQyxJQUFBQSxlQUFlLEVBQUUsRUFKVDtBQUtSQyxJQUFBQSxZQUFZLEVBQUUsQ0FMTjtBQU1SQyxJQUFBQSxtQkFBbUIsRUFBRSxJQU5iO0FBT1JDLElB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QyxLQUFLN0IsWUFBbkUsRUFBZ0Y7QUFDNUUsYUFBS0csVUFBTCxHQUFrQixJQUFsQjtBQUNBLFlBQUcsS0FBS0QsVUFBUixFQUNJLEtBQUtBLFVBQUw7QUFDUDtBQUNKLEtBVEQsTUFTSztBQUNELFVBQUcsS0FBS0QsbUJBQVIsRUFDSSxLQUFLQSxtQkFBTDtBQUNKLFdBQUtvQixZQUFMO0FBQ0g7QUFDSjtBQXRFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcHJvZ3Jlc3NCYXI6IGNjLlByb2dyZXNzQmFyLFxuICAgICAgICBfdGljazogMCxcbiAgICAgICAgX3RvdGFsVGltZVByb2dyZXNzOiAzMCxcbiAgICAgICAgX3JlbWFpblR1cm5UaW1lOiAzMCxcbiAgICAgICAgX3RpbWVXYXJuaW5nOiA1LFxuICAgICAgICBfY2JDb21wbGV0ZVByb2dyZXNzOiBudWxsLFxuICAgICAgICBfY2JXYXJuaW5nOiBudWxsLFxuICAgICAgICBfaXNXYXJuaW5nOiBmYWxzZSxcbiAgICAgICAgbGJfdGltZSA6IGNjLkxhYmVsXG4gICAgfSxcbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICB0aGlzLl90aWNrID0gMDtcbiAgICAgICAgdGhpcy5fdG90YWxUaW1lUHJvZ3Jlc3MgPSAzMDtcbiAgICAgICAgdGhpcy5fcmVtYWluVHVyblRpbWUgPSAzMDtcbiAgICAgICAgdGhpcy5sYl90aW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBhZGRFdmVudFRpbWVyQ29tcGxldGUoY2Ipe1xuICAgICAgICB0aGlzLl9jYkNvbXBsZXRlUHJvZ3Jlc3MgPSBjYjtcbiAgICB9LFxuICAgIGFkZEV2ZW50VGltZXJXYXJuaW5nKGNiKXtcbiAgICAgICAgdGhpcy5fY2JXYXJuaW5nID0gY2I7XG4gICAgfSxcbiAgICBzZXRUaW1lV2FybmluZyh0aW1lV2FybmluZyl7XG4gICAgICAgIHRoaXMuX3RpbWVXYXJuaW5nID0gdGltZVdhcm5pbmdcbiAgICB9LFxuICAgIHNldEN1cnJlbnRQcm9ncmVzcyhjdXJyZW50VGltZSl7XG4gICAgICAgIHRoaXMuX3JlbWFpblR1cm5UaW1lID0gY3VycmVudFRpbWU7XG4gICAgfSxcbiAgICBzZXRUb3RhbFByb2dyZXNzKHRvdGFsVGltZSl7XG4gICAgICAgIHRoaXMuX3RvdGFsVGltZVByb2dyZXNzID0gdG90YWxUaW1lO1xuICAgIH0sXG4gICAgc2V0VG90YWxSZW1haW4ocmVtYWluVGltZSl7XG4gICAgICAgIHRoaXMuX3JlbWFpblR1cm5UaW1lID0gcmVtYWluVGltZTtcbiAgICB9LFxuICAgIHR1cm5PblRpbWVyKCl7XG4gICAgICAgIHRoaXMudHVybk9mZlRpbWVyKCk7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gMDtcbiAgICAgICAgdGhpcy5fdGljayA9IHRoaXMuX3JlbWFpblR1cm5UaW1lICogMTAwMCAgKyBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMC4xKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAwLjEpO1xuICAgIH0sXG4gICAgdHVybk9mZlRpbWVyKCl7XG4gICAgICAgIHRoaXMubGJfdGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jYkNvbXBsZXRlUHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgICB0aGlzLl9jYldhcm5pbmcgPSBudWxsO1xuICAgICAgICB0aGlzLl9pc1dhcm5pbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMC4xKTtcbiAgICB9LFxuICAgIHVwZGF0ZVRpbWVyKGR0KXtcbiAgICAgICAgbGV0IG5ld1RpY2sgPSAodGhpcy5fdGljayAtIERhdGUubm93KCkgLSB0aGlzLl90b3RhbFRpbWVQcm9ncmVzcykgLyAxMDAwO1xuICAgICAgICBpZihuZXdUaWNrID4gMCAmJiBuZXdUaWNrIDw9IHRoaXMuX3RvdGFsVGltZVByb2dyZXNzKXtcbiAgICAgICAgICAgIHRoaXMubGJfdGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxiX3RpbWUuc3RyaW5nID0gTWF0aC5jZWlsKG5ld1RpY2spO1xuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IG5ld1RpY2sgL3RoaXMuX3RvdGFsVGltZVByb2dyZXNzO1xuICAgICAgICAgICAgaWYoIXRoaXMuX2lzV2FybmluZyAmJiAodGhpcy5fdG90YWxUaW1lUHJvZ3Jlc3MgLSBuZXdUaWNrKSA8PSB0aGlzLl90aW1lV2FybmluZyl7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNXYXJuaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYldhcm5pbmcpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NiV2FybmluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKHRoaXMuX2NiQ29tcGxldGVQcm9ncmVzcylcbiAgICAgICAgICAgICAgICB0aGlzLl9jYkNvbXBsZXRlUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIHRoaXMudHVybk9mZlRpbWVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==
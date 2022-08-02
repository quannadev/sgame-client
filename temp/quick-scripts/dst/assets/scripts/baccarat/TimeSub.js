
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFjY2FyYXRcXFRpbWVTdWIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicHJvZ3Jlc3NCYXIiLCJQcm9ncmVzc0JhciIsIl90aWNrIiwiX3RvdGFsVGltZVByb2dyZXNzIiwiX3JlbWFpblR1cm5UaW1lIiwiX3RpbWVXYXJuaW5nIiwiX2NiQ29tcGxldGVQcm9ncmVzcyIsIl9jYldhcm5pbmciLCJfaXNXYXJuaW5nIiwibGJfdGltZSIsIkxhYmVsIiwib25FbmFibGUiLCJub2RlIiwiYWN0aXZlIiwiYWRkRXZlbnRUaW1lckNvbXBsZXRlIiwiY2IiLCJhZGRFdmVudFRpbWVyV2FybmluZyIsInNldFRpbWVXYXJuaW5nIiwidGltZVdhcm5pbmciLCJzZXRDdXJyZW50UHJvZ3Jlc3MiLCJjdXJyZW50VGltZSIsInNldFRvdGFsUHJvZ3Jlc3MiLCJ0b3RhbFRpbWUiLCJzZXRUb3RhbFJlbWFpbiIsInJlbWFpblRpbWUiLCJ0dXJuT25UaW1lciIsInR1cm5PZmZUaW1lciIsInByb2dyZXNzIiwiRGF0ZSIsIm5vdyIsInVuc2NoZWR1bGUiLCJ1cGRhdGVUaW1lciIsInNjaGVkdWxlIiwiZHQiLCJuZXdUaWNrIiwic3RyaW5nIiwiTWF0aCIsImNlaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsV0FBVyxFQUFFSixFQUFFLENBQUNLLFdBRFI7QUFFUkMsSUFBQUEsS0FBSyxFQUFFLENBRkM7QUFHUkMsSUFBQUEsa0JBQWtCLEVBQUUsRUFIWjtBQUlSQyxJQUFBQSxlQUFlLEVBQUUsRUFKVDtBQUtSQyxJQUFBQSxZQUFZLEVBQUUsQ0FMTjtBQU1SQyxJQUFBQSxtQkFBbUIsRUFBRSxJQU5iO0FBT1JD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QUF1QyxLQUFLN0IsWUFBbkUsRUFBZ0Y7QUFDNUUsYUFBS0csVUFBTCxHQUFrQixJQUFsQjtBQUNBLFlBQUcsS0FBS0QsVUFBUixFQUNJLEtBQUtBLFVBQUw7QUFDUDtBQUNKLEtBVEQsTUFTSztBQUNELFVBQUcsS0FBS0QsbUJBQVIsRUFDSSxLQUFLQSxtQkFBTDtBQUNKLFdBQUtvQixZQUFMO0FBQ0g7QUFDSjtBQXRFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBwcm9ncmVzc0JhcjogY2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgX3RpY2s6IDAsXHJcbiAgICAgICAgX3RvdGFsVGltZVByb2dyZXNzOiAzMCxcclxuICAgICAgICBfcmVtYWluVHVyblRpbWU6IDMwLFxyXG4gICAgICAgIF90aW1lV2FybmluZzogNSxcclxuICAgICAgICBfY2JDb21wbGV0ZVByb2dyZXNzOiBudWxsLFxyXG4gICAgICAgIF9jYldhcm5pbmc6IG51bGwsXHJcbiAgICAgICAgX2lzV2FybmluZzogZmFsc2UsXHJcbiAgICAgICAgbGJfdGltZSA6IGNjLkxhYmVsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICB0aGlzLl90aWNrID0gMDtcclxuICAgICAgICB0aGlzLl90b3RhbFRpbWVQcm9ncmVzcyA9IDMwO1xyXG4gICAgICAgIHRoaXMuX3JlbWFpblR1cm5UaW1lID0gMzA7XHJcbiAgICAgICAgdGhpcy5sYl90aW1lLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgYWRkRXZlbnRUaW1lckNvbXBsZXRlKGNiKXtcclxuICAgICAgICB0aGlzLl9jYkNvbXBsZXRlUHJvZ3Jlc3MgPSBjYjtcclxuICAgIH0sXHJcbiAgICBhZGRFdmVudFRpbWVyV2FybmluZyhjYil7XHJcbiAgICAgICAgdGhpcy5fY2JXYXJuaW5nID0gY2I7XHJcbiAgICB9LFxyXG4gICAgc2V0VGltZVdhcm5pbmcodGltZVdhcm5pbmcpe1xyXG4gICAgICAgIHRoaXMuX3RpbWVXYXJuaW5nID0gdGltZVdhcm5pbmdcclxuICAgIH0sXHJcbiAgICBzZXRDdXJyZW50UHJvZ3Jlc3MoY3VycmVudFRpbWUpe1xyXG4gICAgICAgIHRoaXMuX3JlbWFpblR1cm5UaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICB9LFxyXG4gICAgc2V0VG90YWxQcm9ncmVzcyh0b3RhbFRpbWUpe1xyXG4gICAgICAgIHRoaXMuX3RvdGFsVGltZVByb2dyZXNzID0gdG90YWxUaW1lO1xyXG4gICAgfSxcclxuICAgIHNldFRvdGFsUmVtYWluKHJlbWFpblRpbWUpe1xyXG4gICAgICAgIHRoaXMuX3JlbWFpblR1cm5UaW1lID0gcmVtYWluVGltZTtcclxuICAgIH0sXHJcbiAgICB0dXJuT25UaW1lcigpe1xyXG4gICAgICAgIHRoaXMudHVybk9mZlRpbWVyKCk7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5fdGljayA9IHRoaXMuX3JlbWFpblR1cm5UaW1lICogMTAwMCAgKyBEYXRlLm5vdygpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAwLjEpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMC4xKTtcclxuICAgIH0sXHJcbiAgICB0dXJuT2ZmVGltZXIoKXtcclxuICAgICAgICB0aGlzLmxiX3RpbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9jYkNvbXBsZXRlUHJvZ3Jlc3MgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2NiV2FybmluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5faXNXYXJuaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAwLjEpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZVRpbWVyKGR0KXtcclxuICAgICAgICBsZXQgbmV3VGljayA9ICh0aGlzLl90aWNrIC0gRGF0ZS5ub3coKSAtIHRoaXMuX3RvdGFsVGltZVByb2dyZXNzKSAvIDEwMDA7XHJcbiAgICAgICAgaWYobmV3VGljayA+IDAgJiYgbmV3VGljayA8PSB0aGlzLl90b3RhbFRpbWVQcm9ncmVzcyl7XHJcbiAgICAgICAgICAgIHRoaXMubGJfdGltZS5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGJfdGltZS5zdHJpbmcgPSBNYXRoLmNlaWwobmV3VGljayk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCYXIucHJvZ3Jlc3MgPSBuZXdUaWNrIC90aGlzLl90b3RhbFRpbWVQcm9ncmVzcztcclxuICAgICAgICAgICAgaWYoIXRoaXMuX2lzV2FybmluZyAmJiAodGhpcy5fdG90YWxUaW1lUHJvZ3Jlc3MgLSBuZXdUaWNrKSA8PSB0aGlzLl90aW1lV2FybmluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1dhcm5pbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5fY2JXYXJuaW5nKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NiV2FybmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuX2NiQ29tcGxldGVQcm9ncmVzcylcclxuICAgICAgICAgICAgICAgIHRoaXMuX2NiQ29tcGxldGVQcm9ncmVzcygpO1xyXG4gICAgICAgICAgICB0aGlzLnR1cm5PZmZUaW1lcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
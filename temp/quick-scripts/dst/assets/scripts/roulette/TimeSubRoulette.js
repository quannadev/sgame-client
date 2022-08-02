
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/TimeSubRoulette.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8d0aPNht1K9ZXWnTiTT19O', 'TimeSubRoulette');
// scripts/roulette/TimeSubRoulette.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm91bGV0dGVcXFRpbWVTdWJSb3VsZXR0ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJwcm9ncmVzc0JhciIsIlByb2dyZXNzQmFyIiwiX3RpY2siLCJfdG90YWxUaW1lUHJvZ3Jlc3MiLCJfcmVtYWluVHVyblRpbWUiLCJfdGltZVdhcm5pbmciLCJfY2JDb21wbGV0ZVByb2dyZXNzIiwiX2NiV2FybmluZyIsIl9pc1dhcm5pbmciLCJsYl90aW1lIiwiTGFiZWwiLCJvbkVuYWJsZSIsIm5vZGUiLCJhY3RpdmUiLCJhZGRFdmVudFRpbWVyQ29tcGxldGUiLCJjYiIsImFkZEV2ZW50VGltZXJXYXJuaW5nIiwic2V0VGltZVdhcm5pbmciLCJ0aW1lV2FybmluZyIsInNldEN1cnJlbnRQcm9ncmVzcyIsImN1cnJlbnRUaW1lIiwic2V0VG90YWxQcm9ncmVzcyIsInRvdGFsVGltZSIsInNldFRvdGFsUmVtYWluIiwicmVtYWluVGltZSIsInR1cm5PblRpbWVyIiwidHVybk9mZlRpbWVyIiwicHJvZ3Jlc3MiLCJEYXRlIiwibm93IiwidW5zY2hlZHVsZSIsInVwZGF0ZVRpbWVyIiwic2NoZWR1bGUiLCJkdCIsIm5ld1RpY2siLCJzdHJpbmciLCJNYXRoIiwiY2VpbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxXQUFXLEVBQUVKLEVBQUUsQ0FBQ0ssV0FEUjtBQUVSQyxJQUFBQSxLQUFLLEVBQUUsQ0FGQztBQUdSQyxJQUFBQSxrQkFBa0IsRUFBRSxFQUhaO0FBSVJDLElBQUFBLGVBQWUsRUFBRSxFQUpUO0FBS1JDLElBQUFBLFlBQVksRUFBRSxDQUxOO0FBTVJDLElBQUFBLG1CQUFtQixFQUFFLElBTmI7QUFPUkMsSUFBQUEsVUFBVSxFQUFFLElBUEo7QUFRUkMsSUFBQUEsVUFBVSxFQUFFLEtBUko7QUFTUkMsSUFBQUEsT0FBTyxFQUFHYixFQUFFLENBQUNjO0FBVEwsR0FIUDtBQWNMQyxFQUFBQSxRQWRLLHNCQWNLO0FBQ04sU0FBS1QsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLQyxrQkFBTCxHQUEwQixFQUExQjtBQUNBLFNBQUtDLGVBQUwsR0FBdUIsRUFBdkI7QUFDQSxTQUFLSyxPQUFMLENBQWFHLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLEtBQTNCO0FBQ0gsR0FuQkk7QUFvQkxDLEVBQUFBLHFCQXBCSyxpQ0FvQmlCQyxFQXBCakIsRUFvQm9CO0FBQ3JCLFNBQUtULG1CQUFMLEdBQTJCUyxFQUEzQjtBQUNILEdBdEJJO0FBdUJMQyxFQUFBQSxvQkF2QkssZ0NBdUJnQkQsRUF2QmhCLEVBdUJtQjtBQUNwQixTQUFLUixVQUFMLEdBQWtCUSxFQUFsQjtBQUNILEdBekJJO0FBMEJMRSxFQUFBQSxjQTFCSywwQkEwQlVDLFdBMUJWLEVBMEJzQjtBQUN2QixTQUFLYixZQUFMLEdBQW9CYSxXQUFwQjtBQUNILEdBNUJJO0FBNkJMQyxFQUFBQSxrQkE3QkssOEJBNkJjQyxXQTdCZCxFQTZCMEI7QUFDM0IsU0FBS2hCLGVBQUwsR0FBdUJnQixXQUF2QjtBQUNILEdBL0JJO0FBZ0NMQyxFQUFBQSxnQkFoQ0ssNEJBZ0NZQyxTQWhDWixFQWdDc0I7QUFDdkIsU0FBS25CLGtCQUFMLEdBQTBCbUIsU0FBMUI7QUFDSCxHQWxDSTtBQW1DTEMsRUFBQUEsY0FuQ0ssMEJBbUNVQyxVQW5DVixFQW1DcUI7QUFDdEIsU0FBS3BCLGVBQUwsR0FBdUJvQixVQUF2QjtBQUNILEdBckNJO0FBc0NMQyxFQUFBQSxXQXRDSyx5QkFzQ1E7QUFDVCxTQUFLQyxZQUFMO0FBQ0EsU0FBSzFCLFdBQUwsQ0FBaUJZLElBQWpCLENBQXNCQyxNQUF0QixHQUErQixJQUEvQjtBQUNBLFNBQUtiLFdBQUwsQ0FBaUIyQixRQUFqQixHQUE0QixDQUE1QjtBQUNBLFNBQUt6QixLQUFMLEdBQWEsS0FBS0UsZUFBTCxHQUF1QixJQUF2QixHQUErQndCLElBQUksQ0FBQ0MsR0FBTCxFQUE1QztBQUNBLFNBQUtDLFVBQUwsQ0FBZ0IsS0FBS0MsV0FBckIsRUFBa0MsR0FBbEM7QUFDQSxTQUFLQyxRQUFMLENBQWMsS0FBS0QsV0FBbkIsRUFBZ0MsR0FBaEM7QUFDSCxHQTdDSTtBQThDTEwsRUFBQUEsWUE5Q0ssMEJBOENTO0FBQ1YsU0FBS2pCLE9BQUwsQ0FBYUcsSUFBYixDQUFrQkMsTUFBbEIsR0FBMkIsS0FBM0I7QUFDQSxTQUFLUCxtQkFBTCxHQUEyQixJQUEzQjtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS1IsV0FBTCxDQUFpQlksSUFBakIsQ0FBc0JDLE1BQXRCLEdBQStCLEtBQS9CO0FBQ0EsU0FBS2lCLFVBQUwsQ0FBZ0IsS0FBS0MsV0FBckIsRUFBa0MsR0FBbEM7QUFDSCxHQXJESTtBQXNETEEsRUFBQUEsV0F0REssdUJBc0RPRSxFQXREUCxFQXNEVTtBQUNYLFFBQUlDLE9BQU8sR0FBRyxDQUFDLEtBQUtoQyxLQUFMLEdBQWEwQixJQUFJLENBQUNDLEdBQUwsRUFBYixHQUEwQixLQUFLMUIsa0JBQWhDLElBQXNELElBQXBFOztBQUNBLFFBQUcrQixPQUFPLEdBQUcsQ0FBVixJQUFlQSxPQUFPLElBQUksS0FBSy9CLGtCQUFsQyxFQUFxRDtBQUNqRCxXQUFLTSxPQUFMLENBQWFHLElBQWIsQ0FBa0JDLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0EsV0FBS0osT0FBTCxDQUFhMEIsTUFBYixHQUFzQkMsSUFBSSxDQUFDQyxJQUFMLENBQVVILE9BQVYsQ0FBdEI7QUFDQSxXQUFLbEMsV0FBTCxDQUFpQjJCLFFBQWpCLEdBQTRCTyxPQUFPLEdBQUUsS0FBSy9CLGtCQUExQzs7QUFDQSxVQUFHLENBQUMsS0FBS0ssVUFBTixJQUFxQixLQUFLTCxrQkFBTCxHQUEwQitCLE9BQTNCLElBQXVDLEtBQUs3QixZQUFuRSxFQUFnRjtBQUM1RSxhQUFLRyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsWUFBRyxLQUFLRCxVQUFSLEVBQ0ksS0FBS0EsVUFBTDtBQUNQO0FBQ0osS0FURCxNQVNLO0FBQ0QsVUFBRyxLQUFLRCxtQkFBUixFQUNJLEtBQUtBLG1CQUFMO0FBQ0osV0FBS29CLFlBQUw7QUFDSDtBQUNKO0FBdEVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIHByb2dyZXNzQmFyOiBjYy5Qcm9ncmVzc0JhcixcclxuICAgICAgICBfdGljazogMCxcclxuICAgICAgICBfdG90YWxUaW1lUHJvZ3Jlc3M6IDMwLFxyXG4gICAgICAgIF9yZW1haW5UdXJuVGltZTogMzAsXHJcbiAgICAgICAgX3RpbWVXYXJuaW5nOiA1LFxyXG4gICAgICAgIF9jYkNvbXBsZXRlUHJvZ3Jlc3M6IG51bGwsXHJcbiAgICAgICAgX2NiV2FybmluZzogbnVsbCxcclxuICAgICAgICBfaXNXYXJuaW5nOiBmYWxzZSxcclxuICAgICAgICBsYl90aW1lIDogY2MuTGFiZWxcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMuX3RpY2sgPSAwO1xyXG4gICAgICAgIHRoaXMuX3RvdGFsVGltZVByb2dyZXNzID0gMzA7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluVHVyblRpbWUgPSAzMDtcclxuICAgICAgICB0aGlzLmxiX3RpbWUubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBhZGRFdmVudFRpbWVyQ29tcGxldGUoY2Ipe1xyXG4gICAgICAgIHRoaXMuX2NiQ29tcGxldGVQcm9ncmVzcyA9IGNiO1xyXG4gICAgfSxcclxuICAgIGFkZEV2ZW50VGltZXJXYXJuaW5nKGNiKXtcclxuICAgICAgICB0aGlzLl9jYldhcm5pbmcgPSBjYjtcclxuICAgIH0sXHJcbiAgICBzZXRUaW1lV2FybmluZyh0aW1lV2FybmluZyl7XHJcbiAgICAgICAgdGhpcy5fdGltZVdhcm5pbmcgPSB0aW1lV2FybmluZ1xyXG4gICAgfSxcclxuICAgIHNldEN1cnJlbnRQcm9ncmVzcyhjdXJyZW50VGltZSl7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluVHVyblRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgIH0sXHJcbiAgICBzZXRUb3RhbFByb2dyZXNzKHRvdGFsVGltZSl7XHJcbiAgICAgICAgdGhpcy5fdG90YWxUaW1lUHJvZ3Jlc3MgPSB0b3RhbFRpbWU7XHJcbiAgICB9LFxyXG4gICAgc2V0VG90YWxSZW1haW4ocmVtYWluVGltZSl7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluVHVyblRpbWUgPSByZW1haW5UaW1lO1xyXG4gICAgfSxcclxuICAgIHR1cm5PblRpbWVyKCl7XHJcbiAgICAgICAgdGhpcy50dXJuT2ZmVGltZXIoKTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gMDtcclxuICAgICAgICB0aGlzLl90aWNrID0gdGhpcy5fcmVtYWluVHVyblRpbWUgKiAxMDAwICArIERhdGUubm93KCk7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDAuMSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZVRpbWVyLCAwLjEpO1xyXG4gICAgfSxcclxuICAgIHR1cm5PZmZUaW1lcigpe1xyXG4gICAgICAgIHRoaXMubGJfdGltZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX2NiQ29tcGxldGVQcm9ncmVzcyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY2JXYXJuaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9pc1dhcm5pbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudXBkYXRlVGltZXIsIDAuMSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVGltZXIoZHQpe1xyXG4gICAgICAgIGxldCBuZXdUaWNrID0gKHRoaXMuX3RpY2sgLSBEYXRlLm5vdygpIC0gdGhpcy5fdG90YWxUaW1lUHJvZ3Jlc3MpIC8gMTAwMDtcclxuICAgICAgICBpZihuZXdUaWNrID4gMCAmJiBuZXdUaWNrIDw9IHRoaXMuX3RvdGFsVGltZVByb2dyZXNzKXtcclxuICAgICAgICAgICAgdGhpcy5sYl90aW1lLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYl90aW1lLnN0cmluZyA9IE1hdGguY2VpbChuZXdUaWNrKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IG5ld1RpY2sgL3RoaXMuX3RvdGFsVGltZVByb2dyZXNzO1xyXG4gICAgICAgICAgICBpZighdGhpcy5faXNXYXJuaW5nICYmICh0aGlzLl90b3RhbFRpbWVQcm9ncmVzcyAtIG5ld1RpY2spIDw9IHRoaXMuX3RpbWVXYXJuaW5nKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2lzV2FybmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYldhcm5pbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2JXYXJuaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgaWYodGhpcy5fY2JDb21wbGV0ZVByb2dyZXNzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY2JDb21wbGV0ZVByb2dyZXNzKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHVybk9mZlRpbWVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuIl19
"use strict";
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
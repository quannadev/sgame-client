cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        progressBar: cc.ProgressBar,
        _tick: 0,
        _totalTimeProgress: 10,
        _remainTurnTime: 30,
        _timeWarning: 5,
        _cbCompleteProgress: null,
        _cbWarning: null,
        _isWarning: false,
        lb_time : cc.Label
    },
    onEnable(){
        this._tick = 0;
        this._totalTimeProgress = 10;
        this._remainTurnTime = 10;
        this.lb_time.node.active = false;
    },
    addEventTimerComplete(cb){
        this._cbCompleteProgress = cb;
    },
    addEventTimerWarning(cb){
        this._cbWarning = cb;
    },
    setTimeWarning(timeWarning){
        this._timeWarning = timeWarning
    },
    setCurrentProgress(currentTime){
        this._remainTurnTime = currentTime;
    },
    setTotalProgress(totalTime){
        this._totalTimeProgress = totalTime;
    },
    setTotalRemain(remainTime){
        this._remainTurnTime = remainTime;
    },
    turnOnTimer(){
        this.turnOffTimer();
        this.progressBar.node.active = true;
        this.progressBar.progress = 0;
        this._tick = this._remainTurnTime * 1000  + Date.now();
        this.unschedule(this.updateTimer, 0.1);
        this.schedule(this.updateTimer, 0.1);
    },
    turnOffTimer(){
        this.lb_time.node.active = false;
        this._cbCompleteProgress = null;
        this._cbWarning = null;
        this._isWarning = false;
        this.progressBar.node.active = false;
        this.unschedule(this.updateTimer, 0.1);
    },
    updateTimer(dt){
        let newTick = (this._totalTimeProgress * 1000 + Date.now() - this._tick) / 1000;
        if(newTick <= this._totalTimeProgress){
            this.lb_time.node.active = true;
            // if(this.lb_time.node.y == 0){
            //     this.lb_time.node.y = 20;
            //     this.lb_time.node.stopAllActions();
            //     this.lb_time.node.runAction(cc.sequence(cc.moveTo(0.1, cc.v2(0, 0)),cc.delayTime(0.9), cc.callFunc(function () {
            //         this.node.y = 0;
            //     }, this.lb_time)));
            // }
            this.lb_time.string = this._totalTimeProgress - Math.floor(newTick);
            this.progressBar.progress = newTick /this._totalTimeProgress;
            if(!this._isWarning && (this._totalTimeProgress - newTick) <= this._timeWarning){
                this._isWarning = true;
                if(this._cbWarning)
                    this._cbWarning();
            }
        }else{
            if(this._cbCompleteProgress)
                this._cbCompleteProgress();
            this.turnOffTimer();
        }
    }
});

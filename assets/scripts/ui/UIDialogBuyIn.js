cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        _distance: 100,
        _current: 0,
        _max: 0,
        _min: 0,
        _sizeDesk: 6,
        _remainChip: 0,
        lb_min: cc.Label,
        lb_max: cc.Label,
        lb_current: cc.Label,
        lb_remain: cc.Label,
        SliderRaise: cc.Slider,
        cbYes: null
    },
    onEnable(){
        this.cbYes = this._data.cbYes;
        this.initSlider(this._data.distance, this._data.remainChip, this._data.currentChip, this._data.min, this._data.max);
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex+1;
        }
    },
    initSlider(distance, remainChip, currentChip, min,  max){
        this._max = max;
        this._min = min;
        this._distance = distance;
        this._current = currentChip;
        this._remainChip = remainChip;
        this.lb_remain.string = Utils.formatCurrency(remainChip);
        this.updateSlider();
    },
    updateSlider(){
        let currentProcess = this._current / this._max;
        this.SliderRaise.progress = currentProcess;
        this.lb_current.string = Utils.addDotToNumber(this._current);
        this.lb_min.string = Utils.formatCurrency(this._min);
        this.lb_max.string = Utils.formatCurrency(this._max);
    },
    eventPlus(){
        mm.audio.playButton();
        this._current += this._distance;
        if(this._current > this._max){
            this._current = this._max;
        }
        this.updateSlider();
    },
    eventSub(){
        mm.audio.playButton();
        this._current -= this._distance;
        if(this._current < this._min){
            this._current = this._min;
        }
        this.updateSlider();
    },
    onSliderRaise(slider){
        let process = slider.progress;
        this._current = Math.floor(parseFloat(process).toFixed(1)  * this._max);
        if(this._current > this._remainChip){
            this._current = this._remainChip;
        }
        if(this._current < this._min){
            this._current = this._min;
        }
        this.lb_current.string = Utils.addDotToNumber(this._current);
    },
    onToggleGroup(event, sizeDesk){
        mm.audio.playButton();
        this._sizeDesk = sizeDesk;
    },
    eventConfirm(){
        mm.audio.playButton();
        if(this.cbYes){
            this.cbYes.call(this);
        }
    },
    getBuyIn(){
        return this._current;
    },
    getMinBet(){
        return this._distance;
    },
    eventCancel(){
        mm.audio.playButton();
        this.back();
    }
});

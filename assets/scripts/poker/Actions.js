cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        NodeRaise: cc.Node,
        Check: cc.Node,
        Call: cc.Node,
        Fold: cc.Node,
        Raise: cc.Node,
        Bet: cc.Node,
        SliderRaise: cc.Slider,
        lb_Current: cc.Label,
        _distance: 100,
        _current: 0,
        _max: 0,
        lb_bettingChip: cc.Label
    },
    onEnable(){
        this.NodeRaise.active   = false;
        this.Check.active       = false;
        this.Call.active        = false;
        this.Fold.active        = false;
        this.Raise.active       = false;
        this.Bet.active         = false;
    },
    initSlider(distance, current, max){
        if(distance <= 0)
            distance = SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip;
        this._max = max;
        this._distance = distance;
        this._current = current;
        this.updateSlider();
    },
    updateSlider(){
        let currentProcess = this._current / this._max;
        this.SliderRaise.progress = currentProcess;
        this.lb_Current.string = Utils.formatCurrency(this._current);
    },
    eventPlus(){
        this._current += this._distance;
        if(this._current > this._max){
            this._current = this._max;
        }
        this.updateSlider();
    },
    eventSub(){
        this._current -= this._distance;
        if(this._current < 0){
            this._current = 0;
        }
        this.updateSlider();
    },
    eventAllIn(){
        this._current = this._max;
        this.updateSlider();
    },
    onSliderRaise(slider){
        let process = slider.progress;
        this._current = Math.floor(process.toFixed(1) * this._max);
        this.lb_Current.string = Utils.addDotToNumber(this._current);
    },
    hideAllActions(){
        this.NodeRaise.active = false;
        this.Check.active = false;
        this.Call.active = false;
        this.Fold.active = false;
        this.Raise.active = false;
        this.Bet.active = false;
    },
    showCallRaise(betchip, max, currentMyBet){
        this.Call.active = true;
        this.Fold.active = true;
        this.Raise.active = true;
        this.Bet.active = false;
        if(betchip != undefined){
            this.setLabelBettingChip(betchip + currentMyBet);
            if(max){
                this.initSlider(SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip, betchip, max)
            }
        }
    },
    showCheck(betchip, max, currentMyBet){
        this.Check.active = true;
        this.Fold.active = true;
        this.Raise.active = true;
        this.Bet.active = true;
        if(betchip != undefined){
            this.setLabelBettingChip(betchip + currentMyBet);
            if(max){
                this.initSlider(SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip, betchip, max)
            }
        }
    },
    setLabelBettingChip(chip){
        this.lb_bettingChip.string = Utils.formatCurrency(chip.toFixed(0));
    },
    ActionBet(){
        this.handleRaiseRequest(SmartFoxSDK.PokerController.QuickJoinRoomConfig.betChip);
    },
    ActionCheck(){
        this.handleRaiseRequest(0);
    },
    ActionCall(){
        let callRequest = new PokerRequest.CallRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId);
        SmartFoxSDK.PokerController.ZoneInstance.send(callRequest.toSRequest());
    },
    ActionSliderRaise(){
        let isActive = this.NodeRaise.active;
        this.NodeRaise.active = !isActive;
    },
    ActionRaise(){
        this.ActionSliderRaise();
        this.handleRaiseRequest(this._current);
    },
    ActionAllIn(){
        let allInRequest = new PokerRequest.AllInRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId);
        SmartFoxSDK.PokerController.ZoneInstance.send(allInRequest.toSRequest());
    },
    ActionFold(){
        let foldRequest = new PokerRequest.FoldRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId);
        SmartFoxSDK.PokerController.ZoneInstance.send(foldRequest.toSRequest());
    },
    raise_1_2Pot(){
        this.handleRaiseRequest(SmartFoxSDK.PokerController.m_tableInfo.m_potChip / 2);
    },
    raisePot(){
        this.handleRaiseRequest(SmartFoxSDK.PokerController.m_tableInfo.m_potChip);
    },
    handleRaiseRequest(chip){
        let raiseRequest = new PokerRequest.RaiseRequest().setRoomId(SmartFoxSDK.PokerController.QuickJoinRoomConfig.roomId).setBetChip(chip);
        SmartFoxSDK.PokerController.ZoneInstance.send(raiseRequest.toSRequest());
    }
});

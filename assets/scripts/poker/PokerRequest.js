let PokerRequest = {};
PokerRequest.POKER_REQUEST_NAME = {
    LEAVE_GAME_REQUEST: "leave_game_request",
    DO_BET_REQUEST: "do_bet_request",
    GAME_REPORTED_REQUEST: "game_reported_request",
    SIT_ON_REQ: "sit_on_req",
    SIT_OUT_REQ: "sit_out_req",
    STAND_UP_REQ: "stand_up_req",
    BET_REQ: "bet_req",
    CALL_REQ: "call_req",
    RAISE_REQ: "raise_req",
    CHECK_REQ: "check_req",
    FOLD_REQ: "fold_req",
    GOING_ALL_REQ: "going_all_req",
    CONFIRM_READY_GAME: "confirm_ready_game_req"
}
//
PokerRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = undefined;
    },
    setRoomId(id){
        this._roomId = id;
        return this;
    },
    getRequestName(){
        return this._requestName;
    },
    toSRequest(){
        return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
    }
});
//
PokerRequest.SitOnRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.SIT_ON_REQ);
    },
    setDeskId(id){
        this._params.putInt(this.constructor.DESK_ID, id);
        return this;
    },
    setBuyIn(buy_in){
        this._params.putDouble(this.constructor.BUY_IN, buy_in);
        return this;
    },
    setAutoSitOn(){
        this._params.putInt(this.constructor.AUTO_SIT_ON, -10);
        return this;
    }
});
PokerRequest.SitOnRequest.DESK_ID = "deskid";
PokerRequest.SitOnRequest.BUY_IN = "buy_in";
PokerRequest.SitOnRequest.AUTO_SIT_ON = "auto_sit";
//
PokerRequest.SitOutRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.SIT_OUT_REQ);
    },
    setSitOut(sit_out){
        this._params.putBool(this.constructor.IS_SIT_OUT, sit_out);
        return this;
    }
});
PokerRequest.SitOutRequest.IS_SIT_OUT = "is_sit_out";
//
PokerRequest.StandUpRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.STAND_UP_REQ);
    }
});
//
PokerRequest.BetRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.BET_REQ);
    },
    setBet(bet_chip){
        this._params.putDouble(this.constructor.BET_CHIP, bet_chip);
        return this;
    }
});
PokerRequest.BetRequest.BET_CHIP = "bet_chip";
//
PokerRequest.CallRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.CALL_REQ);
    }
});
//
PokerRequest.CheckRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.CHECK_REQ);
    }
});
//
PokerRequest.FoldRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.FOLD_REQ);
    }
});
//
PokerRequest.RaiseRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.RAISE_REQ);
    },
    setBetChip(bet_chip){
        this._params.putDouble(this.constructor.BET_CHIP, bet_chip);
        return this;
    }
});
PokerRequest.RaiseRequest.BET_CHIP = "bet_chip";
//
PokerRequest.AllInRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.GOING_ALL_REQ);
    }
});
//
PokerRequest.ConfirmReadyRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.CONFIRM_READY_GAME);
    }
});
//
PokerRequest.LeaveGameRequest = PokerRequest._BaseRequest.extend({
    ctor(){
        this._super(PokerRequest.POKER_REQUEST_NAME.LEAVE_GAME_REQUEST);
    }
})
window.PokerRequest = PokerRequest;
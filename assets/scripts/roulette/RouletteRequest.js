let RouletteRequest = {};
RouletteRequest.REQUEST_NAME = {
    BET_REQUEST : "rl2",
    HISTORY_RESULT: "rl4"
}
RouletteRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = SmartFoxSDK.RouletteController.ZoneInstance.getRoomByName("roulette").id;
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

RouletteRequest.BetRequest = RouletteRequest._BaseRequest.extend({
    ctor(){
        this._super(RouletteRequest.REQUEST_NAME.BET_REQUEST);
    },
    setTypePot(type){
        this._params.putByte("t", type);
        return this;
    },
    setBetChip(betChip){
        this._params.putDouble("b", betChip);
        return this;
    }
})
RouletteRequest.HistoryRequest = RouletteRequest._BaseRequest.extend({
    ctor(){
        this._super(RouletteRequest.REQUEST_NAME.HISTORY_RESULT);
    }
})
window.RouletteRequest = RouletteRequest;

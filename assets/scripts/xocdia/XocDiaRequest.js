let XocDiaRequest = {};
XocDiaRequest.REQUEST_NAME = {
    BET_REQUEST : "xd2",
    HISTORY_RESULT: "xd4"
}
XocDiaRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia").id;
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

XocDiaRequest.BetRequest = XocDiaRequest._BaseRequest.extend({
    ctor(){
        this._super(XocDiaRequest.REQUEST_NAME.BET_REQUEST);
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
XocDiaRequest.HistoryResultRequest = XocDiaRequest._BaseRequest.extend({
    ctor(){
        this._super(XocDiaRequest.REQUEST_NAME.HISTORY_RESULT);
    }
})
window.XocDiaRequest = XocDiaRequest;

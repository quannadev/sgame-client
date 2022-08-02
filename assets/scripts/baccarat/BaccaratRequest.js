let BaccaratRequest = {};
BaccaratRequest.REQUEST_NAME = {
    BET_REQUEST : "b2",
    HISTORY_RESULT: "b4",
    HISTORY_DETAIL: "b5",
}
BaccaratRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = SmartFoxSDK.BaccaratController.ZoneInstance.getRoomByName("baccarat").id;
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

BaccaratRequest.BetRequest = BaccaratRequest._BaseRequest.extend({
    ctor(){
        this._super(BaccaratRequest.REQUEST_NAME.BET_REQUEST);
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
BaccaratRequest.HistoryRequest = BaccaratRequest._BaseRequest.extend({
    ctor(){
        this._super(BaccaratRequest.REQUEST_NAME.HISTORY_RESULT);
    }
})
BaccaratRequest.HistoryDetailRequest = BaccaratRequest._BaseRequest.extend({
    ctor(){
        this._super(BaccaratRequest.REQUEST_NAME.HISTORY_DETAIL);
    }
})
window.BaccaratRequest = BaccaratRequest;

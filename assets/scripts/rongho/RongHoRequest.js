let RongHoRequest = {};
RongHoRequest.REQUEST_NAME = {
    BET_REQUEST : "rh2"
}
RongHoRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = SmartFoxSDK.RongHoController.ZoneInstance.getRoomByName("rongho").id;
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

RongHoRequest.BetRequest = RongHoRequest._BaseRequest.extend({
    ctor(){
        this._super(RongHoRequest.REQUEST_NAME.BET_REQUEST);
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
window.RongHoRequest = RongHoRequest;
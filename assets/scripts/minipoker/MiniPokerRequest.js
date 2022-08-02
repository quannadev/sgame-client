let MiniPokerRequest = {};
MiniPokerRequest.REQUEST_NAME = {
    BET_REQUEST : "mp1"
};
MiniPokerRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = SmartFoxSDK.MiniPokerController.ZoneInstance.getRoomByName("minipoker").id;
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
MiniPokerRequest.BetRequest = MiniPokerRequest._BaseRequest.extend({
    ctor(){
        this._super(MiniPokerRequest.REQUEST_NAME.BET_REQUEST);
    },
    setBet(bet){
        this._params.putDouble("b", bet);
        return this;
    }
})
window.MiniPokerRequest = MiniPokerRequest;
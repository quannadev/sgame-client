let CandyRequest = {};
CandyRequest.REQUEST_NAME = {
    BET_REQUEST : "cd1"
};
CandyRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = SmartFoxSDK.CandyController.ZoneInstance.getRoomByName("candy").id;
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
CandyRequest.BetRequest = CandyRequest._BaseRequest.extend({
    ctor(){
        this._super(CandyRequest.REQUEST_NAME.BET_REQUEST);
    },
    setLineChan(){
        this._params.putBool("lc", true);
        return this;
    },
    setLineLe(){
        this._params.putBool("ll", true);
        return this;
    },
    setLine(lines){
        this._params.putIntArray("la", lines);
        return this;
    },
    setBet(bet, cheat){
        this._params.putDouble("b", bet);
        if(cheat !== undefined)
            this._params.putUtfString("cheat", cheat);
        return this;
    }
})
window.CandyRequest = CandyRequest;

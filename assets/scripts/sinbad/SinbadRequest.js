let SinbadRequest = {};
SinbadRequest.REQUEST_NAME = {
    BET_REQUEST : "sb1",
    AUTO_PLAY_REQUEST: "sb5",
    STOP_AUTO_PLAY_REQUEST: "sb6"
}
SinbadRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = SmartFoxSDK.SinbadController.ZoneInstance.getRoomByName("sinbad").id;
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
SinbadRequest.BetRequest = SinbadRequest._BaseRequest.extend({
    ctor(){
        this._super(SinbadRequest.REQUEST_NAME.BET_REQUEST);
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
    setBet(bet){
        this._params.putDouble("b", bet);
        return this;
    }
});
SinbadRequest.AutoPlayRequest = SinbadRequest._BaseRequest.extend({
    ctor(){
        this._super(SinbadRequest.REQUEST_NAME.AUTO_PLAY_REQUEST);
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
});
SinbadRequest.StopAutoPlayRequest = SinbadRequest._BaseRequest.extend({
    ctor(){
        this._super(SinbadRequest.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
    },
    setBet(bet){
        this._params.putDouble("b", bet);
        return this;
    }
});

window.SinbadRequest = SinbadRequest;

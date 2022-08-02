let SieuXeRequest = {};
SieuXeRequest.REQUEST_NAME = {
    BET_REQUEST : "sx1"
}
SieuXeRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = SmartFoxSDK.SieuXeController.ZoneInstance.getRoomByName("sieuxe").id;
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
SieuXeRequest.BetRequest = SieuXeRequest._BaseRequest.extend({
    ctor(){
        this._super(SieuXeRequest.REQUEST_NAME.BET_REQUEST);
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
window.SieuXeRequest = SieuXeRequest;

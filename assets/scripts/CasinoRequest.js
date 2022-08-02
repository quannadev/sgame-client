let CasinoRequest = {};
CasinoRequest.REQUEST_NAME = {
    GROUP_GAME_REQUEST : "g1",
    QUICK_JOIN_GAME_REQUEST:  "g2",
    HISTORY_REQUEST: "g4",
    LEADER_BOARD_REQUEST: "g5",
    TRANSFER_MONEY_REQUEST: "p1",
    CHANGE_PASS_REQUEST: "p2",
    GIFT_CODE_REQUEST: "p3",
    LIST_AGENCY_REQUEST: "p4"
}
CasinoRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._request = null;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = undefined;
    },
    getRequestName(){
        return this._requestName;
    },
    toSRequest(){
        return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
    }
});
CasinoRequest.HistoryRequest = CasinoRequest._BaseRequest.extend({
    ctor(roomId){
        this._super(CasinoRequest.REQUEST_NAME.HISTORY_REQUEST);
        this._roomId = roomId;
    }
});
CasinoRequest.LeaderBoardRequest = CasinoRequest._BaseRequest.extend({
    ctor(roomId){
        this._super(CasinoRequest.REQUEST_NAME.LEADER_BOARD_REQUEST);
        this._roomId = roomId;
    }
});
CasinoRequest.LoginRequest = CasinoRequest._BaseRequest.extend({
    ctor(name, pass, zone, param){
        this._super(CasinoRequest.REQUEST_NAME.LOGIN_REQUEST);
        this.name = name;
        this.pass = pass;
        this.zone = zone;
        this.param = param;
    },
    toSRequest(){
        return new SmartFoxSDK.SmartFox.Requests.System.LoginRequest(this.name, this.pass, this.zone, this.param);
    }
});
CasinoRequest.JoinRoomRequest = CasinoRequest._BaseRequest.extend({
    ctor(id, pass, isSpectator){
        this._super(CasinoRequest.REQUEST_NAME.JOIN_ROOM_REQUEST);
        this.id = id;
        this.pass = pass;
        this.isSpetator = isSpectator;
    },
    toSRequest(){
        return new SmartFoxSDK.SmartFox.Requests.System.JoinRoomRequest(this.id, this.pass, null, this.isSpetator);
    }
});
CasinoRequest.GroupGameRequest = CasinoRequest._BaseRequest.extend({
    ctor(){
        this._super(CasinoRequest.REQUEST_NAME.GROUP_GAME_REQUEST);
    },
    setGame(game){
        return this;
    }
});
CasinoRequest.QuickJoinGameRequest = CasinoRequest._BaseRequest.extend({
    ctor(){
        this._super(CasinoRequest.REQUEST_NAME.QUICK_JOIN_GAME_REQUEST);
    },
    setGame(game){
        this._params.putUtfString("game", game);
        return this;
    },
    setGroup(group){
        this._params.putUtfString("group", group);
        return this;
    },
    setSizeDesk(size){
        this._params.putInt("size", size);
        return this;
    }
});
CasinoRequest.TransferMoneyRequest = CasinoRequest._BaseRequest.extend({
    ctor(){
        this._super(CasinoRequest.REQUEST_NAME.TRANSFER_MONEY_REQUEST);
    },
    setUserRecived(username){
        this._params.putUtfString("ur", username);
        return this;
    },
    setMoneyTransfer(money){
        this._params.putDouble("m", money);
        return this;
    }
})
CasinoRequest.ChangePassRequest = CasinoRequest._BaseRequest.extend({
    ctor(){
        this._super(CasinoRequest.REQUEST_NAME.CHANGE_PASS_REQUEST);
    },
    setNewPassword(pass){
        this._params.putUtfString("p", pass);
        return this;
    }
})
CasinoRequest.GiftCodeRequest = CasinoRequest._BaseRequest.extend({
    ctor(){
        this._super(CasinoRequest.REQUEST_NAME.GIFT_CODE_REQUEST);
    },
    setGiftCode(code){
        this._params.putUtfString("gc", code);
        return this;
    }
})
CasinoRequest.ListAgencyRequest = CasinoRequest._BaseRequest.extend({
    ctor(){
        this._super(CasinoRequest.REQUEST_NAME.LIST_AGENCY_REQUEST);
    }
})
window.CasinoRequest = CasinoRequest;
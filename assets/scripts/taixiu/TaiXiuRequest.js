let TaiXiuRequest = {};
TaiXiuRequest.REQUEST_NAME = {
    BET_REQUEST : "tx1",
    SESSION_DETAIL : "tx4",
    SOI_CAU_REQUEST: "tx5",
    TAN_LOC_REQUEST: "tx6",
    RUT_LOC_REQUEST: "tx7",
    HISTORY_TAN_LOC_REQUEST: "tx8",
    HISTORY_RUT_LOC_REQUEST: "tx9",
    TOP_BET_REQUEST: "tx10",
    TOP_BET_RULE_REQUEST: "tx12",
    RANK_TAN_LOC_REQUEST: "tx13",
    RANK_RUT_LOC_REQUEST: "tx14",
    TOP_REWARD_RES_REQUEST: "tx16",
}
TaiXiuRequest._BaseRequest = SmartFoxSDK.Class.extend({
    ctor(name){
        this._requestName = name;
        this._params = new SmartFoxSDK.SObject();
        this._roomId = SmartFoxSDK.TaiXiuController.ZoneInstance.getRoomByName("taixiu").id;
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

TaiXiuRequest.BetRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.BET_REQUEST);
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
TaiXiuRequest.SoiCauRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.SOI_CAU_REQUEST);
    }
})
TaiXiuRequest.SessionDetailRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.SESSION_DETAIL);
    },
    setSessionId(referenceId){
        this._params.putDouble("id", referenceId);
        return this;
    }
})
TaiXiuRequest.TanLocRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.TAN_LOC_REQUEST);
    },
    setChip(chip){
        this._params.putDouble("c", chip);
        return this;
    }
})
TaiXiuRequest.RutLocRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.RUT_LOC_REQUEST);
    }
})
TaiXiuRequest.HistoryTanLocRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.HISTORY_TAN_LOC_REQUEST);
    }
})
TaiXiuRequest.HistoryRutLocRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.HISTORY_RUT_LOC_REQUEST);
    }
})
TaiXiuRequest.TopBetRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.TOP_BET_REQUEST);
    }
})
TaiXiuRequest.TopBetRuleRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.TOP_BET_RULE_REQUEST);
    }
})
TaiXiuRequest.RankRutLocRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.RANK_RUT_LOC_REQUEST);
    }
})
TaiXiuRequest.TopRewardResRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.TOP_REWARD_RES_REQUEST);
    }
})
TaiXiuRequest.RankTanLocRequest = TaiXiuRequest._BaseRequest.extend({
    ctor(){
        this._super(TaiXiuRequest.REQUEST_NAME.RANK_TAN_LOC_REQUEST);
    }
})
window.TaiXiuRequest = TaiXiuRequest;

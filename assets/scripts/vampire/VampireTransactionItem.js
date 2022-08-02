cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbSession   : cc.Label,
        lbTime      : cc.Label,
        lbMucDat    : cc.Label,
        lbWin       : cc.Label,
        lbDetail    : cc.Label,
        _dataRank   :  null,
    },
    init(stt, dataRank) {
        this._dataRank = dataRank;
        this.lbSession.string   = "#"+dataRank.session;
        this.lbTime.string      = dataRank.time;
        this.lbMucDat.string    = Utils.addDotToNumber(dataRank.stakes);
        this.lbWin.string       = Utils.addDotToNumber(dataRank.win);
    },
    eventDetail() {
        this.show("UIVampireHistoryDetail", {pop: true, src: "vampire", data: this._dataRank})
    }

});

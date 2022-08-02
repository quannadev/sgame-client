cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbSession   : cc.Label,
        lbTime      : cc.Label,
        lbStakes    : cc.Label,
        lbWin       : cc.Label,
        _dataRank   :  null,
    },
    init(dataRank) {
        this._dataRank = dataRank;
        this.lbSession.string   = dataRank.session;
        this.lbTime.string      = Utils.reFormatDisplayTime(dataRank.time);
        this.lbStakes.string    = Utils.addDotToNumber(dataRank.stakes);
        this.lbWin.string       = Utils.addDotToNumber(dataRank.win);
    },
    eventDetail() {
        this.show("UICandyTransactionDetail", {src: "candy", data: this._dataRank, pop: true})
    }

});

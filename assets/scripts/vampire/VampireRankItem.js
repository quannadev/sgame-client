cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbSession   : cc.Label,
        lbTime      : cc.Label,
        lbAccount   : cc.Label,
        lbWin       : cc.Label,
        lbDes       : cc.Label,
    },
    init(stt, dataRank) {
        this.lbTime.string      = dataRank.time;
        this.lbSession.string   = dataRank.session;
        this.lbAccount.string   = dataRank.account;
        this.lbWin.string       = Utils.addDotToNumber(dataRank.win);
    }
});

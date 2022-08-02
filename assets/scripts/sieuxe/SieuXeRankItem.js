cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbSession   : cc.Label,
        lbTime      : cc.Label,
        lbAccount   : cc.Label,
        lbWin       : cc.Label,
        lbWinType   : cc.Label,
    },
    init(dataRank) {
        this.lbSession.string   = dataRank.session;
        this.lbTime.string      = dataRank.time;
        this.lbAccount.string   = dataRank.account;
        this.lbWin.string       = Utils.addDotToNumber(dataRank.win);
        this.lbWinType.string   = dataRank.win_type;
    }
});

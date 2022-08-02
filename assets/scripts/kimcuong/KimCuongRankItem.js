cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        bgRank       : cc.Node,
        lbStt       : cc.Label,
        lbWin       : cc.Label,
        lbAccount   : cc.Label,
        lbTime      : cc.Label,
        lbDes       : cc.Label,
    },
    init(stt, dataRank) {
        this.bgRank.active      = stt%2 ==1;
        this.lbStt.string       = "#"+dataRank.session;
        this.lbAccount.string   = dataRank.account;
        this.lbTime.string      = dataRank.time;
        this.lbDes.string       = dataRank.win_type;
        this.lbWin.string       = Utils.addDotToNumber(dataRank.win);
    }
});

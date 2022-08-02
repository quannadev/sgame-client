cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lb_stt      : cc.Label,
        lbName      : cc.Label,
        lbWin       : cc.Label
    },
    init(dataRank) {
        this.lb_stt.string      = dataRank.session;
        this.lbName.string      = dataRank.account;
        this.lbWin.string       = Utils.addDotToNumber(dataRank.win);
    }
});

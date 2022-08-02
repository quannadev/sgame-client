cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbTime     : cc.Label,
        lbName     : cc.Label,
        lbWin      : cc.Label,
    },
    init(dataRank) {
        this.lbTime.string = dataRank.time;
        this.lbName.string = dataRank.account;
        this.lbWin.string  = Utils.addDotToNumber(dataRank.win);
    }
});

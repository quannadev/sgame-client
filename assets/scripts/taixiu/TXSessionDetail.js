cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbTime      : cc.Label,
        lbDat    : cc.Label,
        lbName       : cc.Label,
    },
    init(dataSession) {
        this.lbTime.string = Utils.reFormatDisplayTime(dataSession.time).split(" ")[0];
        this.lbDat.string  = dataSession.betTai > 0 ? Utils.addDotToNumber(dataSession.betTai) :  Utils.addDotToNumber(dataSession.betXiu);
        this.lbName.string = dataSession.displayName;
    }
});

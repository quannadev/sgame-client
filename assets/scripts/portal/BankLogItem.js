cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lb_time     : cc.Label,
        lb_amount      : cc.Label,
        lb_chip   : cc.Label,
        lb_tax   :   cc.Label,
        lb_des   : cc.Label
    },
    init(dataRank) {
        this.lb_time.string     =  Utils.reFormatDisplayTime(dataRank.time);
        this.lb_des.string      = dataRank.des;
        this.lb_tax.string = dataRank.tax +"%"
        let pre = dataRank.amount > 0 ? "+" : "-";
        this.lb_amount.string       = pre+""+Utils.addDotToNumber(Math.abs(dataRank.amount));
        this.lb_chip.string       = Utils.addDotToNumber(Math.abs(dataRank.chip));
    }
});

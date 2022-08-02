cc.Class({
    extends: cc.Component,

    properties: {
        bgCauLe   : cc.Node,
        bgCauChan : cc.Node,
        lbCau     : cc.Label,
        MaxCount  : 4
    },
    init(dataCau) {
        dataCau = parseInt(dataCau);
        let isBlack = dataCau % 2 == 1;
        if (isBlack){
            this.bgCauLe.active     = true;
            this.bgCauChan.active   = false;
            this.lbCau.string       = dataCau;
            this.lbCau.node.color   = cc.Color.WHITE;
        }else {
            this.bgCauLe.active     = false;
            this.bgCauChan.active   = true;
            this.lbCau.string       = this.MaxCount - dataCau;
            this.lbCau.node.color   = cc.Color.BLACK;
        }
    },
});

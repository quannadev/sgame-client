cc.Class({
    extends: cc.Component,

    properties: {
        bgRed   : cc.Node,
        bgBlack : cc.Node,
        lbCau     : cc.Label,
        MaxCount  : 4,
        _ListRed    : [],
    },
    onLoad() {
        this._ListRed   = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
    },
    init(dataCau) {
        dataCau     = parseInt(dataCau);
        if (this._ListRed.indexOf(dataCau) >=0){
            this.bgRed.active          = true;
            this.bgBlack.active        = false;
        } else{
            this.bgRed.active          = false;
            this.bgBlack.active        = true;
        }
        this.lbCau.string        = dataCau;
    },
});

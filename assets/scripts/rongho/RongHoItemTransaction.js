cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbSession   : cc.Label,
        lbTime      : cc.Label,
        lb_cua_dat: cc.Label,
        lb_ketqua       : cc.Label,
        lb_tongdat: cc.Label,
        lb_win: cc.Label,
        _dataRank   :  null,
        _listResult   :  [],
    },
    onLoad() {
        this._listResult = ['Rồng', 'Hòa', 'Hổ', 'Rô', 'Cơ', 'Tép', 'Bích'];
    },
    init(dataHistory) {
        this._dataRank = dataHistory;
        this.lbSession.string   = dataHistory.session;
        this.lbTime.string      = Utils.reFormatDisplayTime(dataHistory.time);
        this.lb_cua_dat.string   = dataHistory.cuadat;
        this.lb_win.string       = Utils.addDotToNumber(dataHistory.win);
        let resultString = "";
        if (dataHistory.ketqua.length > 1){
            let tren = parseInt(dataHistory.ketqua[0]);
            if (tren >= 0)
                resultString = this._listResult[tren];
            let duoi = parseInt(dataHistory.ketqua[1]);
            if (duoi >= 0)
                resultString += ", "+this._listResult[duoi];
        }
        this.lb_ketqua.string = resultString;
        this.lb_tongdat.string = Utils.addDotToNumber(dataHistory.stakes);
    },
});

cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        listItem    : cc.Node,
        lbSession   : cc.Label,
        lbMoneyWin  : cc.Label
    },
    onEnable() {
        let resultMap = this._data.resultMap;
        this.lbSession.string = "#"+this._data.session;
        this.lbMoneyWin.string = Utils.addDotToNumber(this._data.win);
        Promise.all(this.listItem.children.map(function(itemTrans, index) {
            itemTrans.getComponent("KimCuongItem").setIcon(resultMap[index]);
        }));
    }
});

cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbName   : cc.Label,
        lbUserName      : cc.Label,
        lbSTT: cc.Label,
        _isSelect : false
    },
    onEnable() {
        this._isSelect = false;
        let menuChon = this.node.getChildByName("menuchon");
        menuChon.active = false;
        this.node.on(cc.Node.EventType.MOUSE_ENTER, function (event) {
            menuChon.active = true;
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
            menuChon.active = this._isSelect;
        }, this);
    },
    showMenuChon(isShow) {
        this._isSelect = isShow;
        this.node.getChildByName("menuchon").active = isShow;
    },
    init(data) {
        this.lbName.string = data.agName;
        this.lbUserName.string = data.name;
        this.lbSTT.string = data.stt;
    }
});

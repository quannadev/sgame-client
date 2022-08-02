cc.Class({
    extends: cc.BaseItemCustom,

    properties: {
        lbStt           : cc.Label,
        lbName          : cc.Label,
        lbUserName      : cc.Label,
        lbAddress       : cc.Label,
        lbPhone         : cc.Label,
        _dataTransfer   : null,
        _cb: null
    },
    init(data, stt) {
        this._dataTransfer      = data;
        this.lbStt.string       = stt+1;
        this.lbName.string      = data.agName;
        this.lbUserName.string  = data.name;
        this.lbPhone.string     = data.phone == null? "" : data.phone;
        this.lbAddress.string   = data.address;
    },
    eventTransfer() {
        mm.audio.playButton();
        if (this._cb)
            this._cb(this._dataTransfer);
    },
    addEventSelect(callBack) {
        this._cb = callBack;
    },
    eventZalo() {
        mm.audio.playButton();
        if (this._dataTransfer.phone != null)
        cc.sys.openURL("https://zalo.me/"+this._dataTransfer.phone);
    },
    eventFacebook() {
        mm.audio.playButton();
        if (this._dataTransfer.face != null)
            cc.sys.openURL( this._dataTransfer.face);
    }

});

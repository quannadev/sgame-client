cc.Class({
    extends: cc.Component,

    properties: {
        _cbOnCollisionStay: null
    },
    onCollisionEnter: function (other, self) {
        if (this._cbOnCollisionStay)
            this._cbOnCollisionStay(parseInt(other.tag));
    },
    addEventOnCollisionEnter(cb) {
        this._cbOnCollisionStay = cb;
    }
});

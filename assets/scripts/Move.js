cc.Class({
    extends: cc.Component,

    properties: {
        _isMove: false
    },
    onLoad(){
        let self = this;
        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
            let target = event.currentTarget;
            let location = event.getLocation();
            let delta = event.getDelta();
            self.node.x += delta.x;
            self.node.y += delta.y;
            if(delta.x != 0 || delta.y != 0){
                self._isMove = true;
            }
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
            self._isMove = false;
            if (self.node.parent.zIndex <= cc.lastZIndex){
                cc.lastZIndex   += 1;
                self.node.parent.zIndex = cc.lastZIndex;
            }
        })
    },
    isMove(){
        return this._isMove;
    }
});

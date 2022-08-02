let Toast = cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        lb_msg: cc.Label
    },
    statics: {
        inst:  null,
    },
    onLoad () {
        Toast.inst = this;
        mm.Toast = this;
        this._hide();
        this.node.zIndex = 500;
    },
    showToast(duration, msg, pos){
        this.node.active = true;
        let self = this;
        this.lb_msg.string = msg;
        if(pos != undefined && pos != null){
            this.node.position = pos;
        }
        this.node.stopAllActions();
        this.node.runAction(cc.sequence(cc.delayTime(duration), cc.callFunc(function () {
            self._hide();
        })));
    },
    _hide(){
        this.node.active = false;
    },
});

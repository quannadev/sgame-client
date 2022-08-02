cc.Class({
    extends: cc.VozBaseComponent,

    properties: {

    },
    onEnable () {
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex;
        }
    },
    eventClose() {
        this.back();
    }
});

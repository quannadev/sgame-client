cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        lb_content: cc.Label
    },
    onEnable(){
        if(this._data.content){
            this.lb_content.string = this._data.content;
        }
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex+1;
        }
    },
    eventConfirm(){
        mm.audio.playButton();
        if (this._data.cbYes) {
            this._data.cbYes.call(this);
        }
        this.node.setSiblingIndex(0);
    },
    eventCancel(){
        mm.audio.playButton();
        this.back();
    }
});

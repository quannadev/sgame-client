cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        phone: cc.EditBox,
        code_otp: cc.EditBox
    },
    onEnable(){
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex+1;
        }
    },
    eventClose(){
        this.back();
        mm.audio.playButton();
    },
    eventUpdate(){
        mm.audio.playButton();
    }
});

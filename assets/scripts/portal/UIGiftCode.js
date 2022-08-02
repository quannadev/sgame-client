cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        edit_gc: cc.EditBox
    },
    onEnable(){
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex+1;
        }
    },
    eventSend(){
        mm.audio.playButton();
        if(this.edit_gc.string == ""){
            mm.Toast.showToast(1, "GiftCode không được trống");
            return;
        }
        let request = new CasinoRequest.GiftCodeRequest();
        request.setGiftCode(this.edit_gc.string);
        SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());
        mm.Loading.show();
    },
    eventClose(){
        this.back();
        mm.audio.playButton();
    }
});

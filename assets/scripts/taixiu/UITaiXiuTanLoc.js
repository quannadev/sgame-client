cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        edtTanLoc   : cc.EditBox,
        tanLoc      : cc.Node
    },

    onEnable () {
        this.edtTanLoc.string = "0";
        this.tanLoc.active = false;
        if (this.node.zIndex <= cc.lastZIndex){
            cc.lastZIndex   += 1;
            this.node.zIndex = cc.lastZIndex;
        }
    },
    eventClose() {
        this.back();
    },
    eventBetLoc(event, data) {
        this.edtTanLoc.string = data;
    },
    eventTanLoc(){
        let chip = this.edtTanLoc.string;
        chip     = parseInt(chip);
        if (chip > 0){
            let betRequest = new TaiXiuRequest.TanLocRequest();
            betRequest.setChip(chip);
            SmartFoxSDK.TaiXiuController.ZoneInstance.send(betRequest.toSRequest());
        }else {
            this.showToast("Tiền tán lộc phải lớn hơn 0");
        }
    },
    tanLocRes(tanLocInfo){
        if (tanLocInfo.mesTan == null){
            this.showToast("Tán lộc thành công.\n" +
                "Chúc bạn may mắn");
        }else {
            this.showToast(tanLocInfo.mesTan);
        }
    },
    showToast(message) {
        this.tanLoc.active = true;
        this.tanLoc.getChildByName("lbNoti").getComponent(cc.Label).string = message;
        this.scheduleOnce(function () {
            this.tanLoc.active = false;
        }, 2)
    }
});

let UIManager = require("UIManager");
let PortalController = SmartFoxSDK.BaseController.extend({
    registerEvents(){
        this._super();
        this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.TRANSFER_MONEY_RES, this.onTransferMoney, this);
        this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.CHANGE_PASS_RES, this.onChangePassword, this);
        this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.GIFT_CODE_RES, this.onGiftCode, this);
    },
    removeEvents(){
        this._super();
        this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.TRANSFER_MONEY_RES, this.onTransferMoney, this);
        this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.CHANGE_PASS_RES, this.onChangePassword, this);
        this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.GIFT_CODE_RES, this.onGiftCode, this);
    },
    onEventConnection(event){
        if(event.success){
            if(this.register){
                this.register = false;
                let uiRegister = UIManager.getUIFromName("UIRegister");
                uiRegister.getComponent(uiRegister.name).eventClickRegister();
            }else{
                this.loginZone(this.un, this.pass);
            }
        }else{
            this._reset();
        }
    },
    onEventLogin(event){
        this._super(event);
        mm.isLogin = true;
        UIManger.show("UIHome");
        Config.saveUsername(this.un);
        Config.savePass(this.pass);
        // MQTTManager.connect();
    },
    onHistoryEvent(event){
        mm.Loading.hide();
        let data = event.getSArray("d");
        let items = [];
        for(let i = 0; i < data.size(); i++){
            let sItem = data.get(i).getObject();
            let item = {};
            item.session = i + 1;
            item.time = sItem.getUtfString("t");
            item.amount = sItem.getDouble("am");
            item.chip = sItem.getDouble("c");
            item.tax = sItem.getDouble("tx");
            item.des = sItem.getUtfString("des");
            items.push(item);
        }
        UIManger.show("UIBankLog", {pop: true, src: 'portal', data: {items: items}});
    },
    onTransferMoney(event){
        let transfer = new CasinoEvent.TransferMoneyEvent().fromEvent(event);
        let code = transfer.code;
        if(code == 1){
            // true
            mm.Toast.showToast(1, "Chuyển tiền thành công");
        }else if(code == 0){
            // false
            mm.Toast.showToast(1, "Tài khoản nhận không đúng");
        }else if(code == 2){
            mm.Toast.showToast(1, "Bạn không đủ số dư");
        }
        mm.Loading.hide();
    },
    onChangePassword(event){
        let changePass = new CasinoEvent.ChangePassEvent().fromEvent(event);
        let code = changePass.code;
        if(code == 1){
            // true
            Config.clearUserPass();
            mm.Toast.showToast(1, "Đổi mật khẩu thành công");
        }else{
            // false
            mm.Toast.showToast(1, "Đổi mật khẩu thất bại");
        }
    },
    onGiftCode(event){
        mm.Loading.hide();
        let giftCodeRes = new CasinoEvent.GiftCodeEvent().fromEvent(event);
        if(giftCodeRes.ec !== undefined && giftCodeRes.ec !== null){
            mm.Toast.showToast(1, giftCodeRes.ec);
        }else{
            mm.Toast.showToast(1, "Bạn được quà "+Utils.addDotToNumber(giftCodeRes.gift_value));
        }
    },

});
let instance = null;
let getInstance = function () {
    if(instance == null)
        instance = new PortalController("UIPortal", 'portal');
    return instance;
}
SmartFoxSDK.PortalController = module.exports = getInstance();

cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        register_username: cc.EditBox,
        register_diplayname: cc.EditBox,
        register_pass: cc.EditBox,
        register_pass_again: cc.EditBox
    },
    eventClickRegister(){
        mm.audio.playButton();
        if(!SmartFoxSDK.PortalController.ZoneInstance.isConnected()){
            SmartFoxSDK.PortalController.register = true;
            SmartFoxSDK.PortalController.ZoneInstance.connect();
            return;
        }
        if(this.register_username.string == ""){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Tên đăng nhập không được trống");
            return;
        }
        if(!Utils.validateString(this.register_username.string)){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Tên đăng nhập chỉ chứa các ký tự A-Z, a-z, 0-9");
            return;
        }
        if(!Utils.validateString(this.register_diplayname.string)){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Tên hiển thị chỉ chứa các ký tự A-Z, a-z, 0-9");
            return;
        }
        if(this.register_diplayname.string == ""){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Tên hiển thị không được trống");
            return;
        }
        if(this.register_username.string.includes(" ")){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Tài khoản bao gồm khoảng trắng");
            return;
        }
        if(this.register_diplayname.string.includes(" ")){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Tên hiển thị bao gồm khoảng trắng");
            return;
        }
        if(this.register_username.string == this.register_diplayname.string){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Tài khoản và tên hiển thị trùng nhau");
            return;
        }
        if(this.register_pass.string == ""){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Mật khẩu không được trống");
            return;
        }
        if(this.register_pass.string != this.register_pass_again.string){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Mật khẩu không khớp");
            return;
        }
        if(this.register_pass.string.length < 6){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Mật khẩu nhỏ hơn 6 kí tự");
            return;
        }
        let un = this.register_username.string;
        let pass = this.register_pass.string;
        let zone = "portal";
        let params = new SmartFoxSDK.SObject();
        params.putByte("rt", 4);
        params.putUtfString("role", "user");
        params.putUtfString("dn", this.register_diplayname.string);
        let loginRequest = new CasinoRequest.LoginRequest(un, pass, zone, params);
        SmartFoxSDK.PortalController.un = un;
        SmartFoxSDK.PortalController.pass = pass;
        SmartFoxSDK.PortalController.ZoneInstance.send(loginRequest.toSRequest());
    },
    eventClose(){
        mm.audio.playButton();
        this.back();
    }
});

cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        Login: cc.Node,
        login_username: cc.EditBox,
        login_pass: cc.EditBox
    },
    onEnable(){
        this.login_username.string = Config.getUsername();
        this.login_pass.string = Config.getPass();
    },
    clickLogin(){
        mm.audio.playButton();
        if(this.login_username.string == ""){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Tên đăng nhập không được trống");
            return;
        }
        if(this.login_pass.string == ""){
            Config.clearUserPass();
            mm.Toast.showToast(1, "Mật khẩu không được trống");
            return;
        }
        mm.Loading.show();
        let un = this.login_username.string;
        let pass = this.login_pass.string;
        SmartFoxSDK.PortalController.loginZone(un, pass);
        Config.saveUsername(un);
        Config.savePass(pass);
    },
    eventClose(){
        mm.audio.playButton();
        this.back();
    }
});

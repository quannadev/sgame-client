cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
    },
    onClickMenu(){
        mm.audio.playButton();
        this.show("UIMenu", {pop: true, src: "portal"});
    },
    onClickPayment(){
        mm.audio.playButton();
        if(mm.isLogin){
            this.show('UIPayment', {pop: true, src: 'portal', data : {nickname: null, area : 'ja'}});
        }else{
            this.show("UILogin", {pop: true});
        }
    },
    onClickTelegram(){
        mm.audio.playButton();
        cc.sys.openURL("https://t.me/cskh");
    },
    onClickGiftCode(){
        mm.audio.playButton();
        if(mm.isLogin){
            this.show('UIGiftCode', {pop: true, src: 'portal'});
        }else{
            this.show("UILogin", {pop: true});
        }
    },
    onClickDaiLy(){
        mm.audio.playButton();
        if(mm.isLogin){
            this.show("UIDaiLy", {pop: true, src: 'portal'});
        }else{
            this.show("UILogin", {pop: true});
        }
    },
    onClickChuyenkhoan(){
        mm.audio.playButton();
        if(mm.isLogin){
            this.show('UIPayment', {pop: true, src: 'portal', data : {nickname: null, area : 'ja'}});
        }else{
            this.show("UILogin", {pop: true});
        }
    },
    onClickProfile(event){
        mm.audio.playButton();
        if(mm.isLogin){
            this.show("UIProfile", {pop: true, src: 'portal'});
        }else{
            this.show("UILogin", {pop: true});
        }
    },
    onClickGroup(){
        mm.audio.playButton();
        cc.sys.openURL("https://www.facebook.com");
    },
    onClickFacebook(){
        mm.audio.playButton();
        cc.sys.openURL("https://www.facebook.com");
    },
    onClickEvent() {
        this.show("UITaiXiuDuaTop", {pop: true, src: 'taixiu', data: "TheLe"});
    }
});

cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        edit_user_re: cc.EditBox,
        edit_user_re_again: cc.EditBox,
        edit_money: cc.EditBox,
        lbTyLe: cc.Label,
        lbMyMoney: cc.Label,
        lbMoneyRev: cc.Label,
        lbTienTe: cc.Label,
        lbDesTrans: cc.Label,
        warningNode: cc.Node,
        lbIsDaiLy: cc.Label,
        lbNickName: cc.Label,
        lbGold: cc.Label,
        lbDes: cc.Label,
        _area: "ja",
        _moneyConvert: 0,
        _isDaiLy: false,
        listDaiLy: []
    },
    onEnable(){
        this.listDaiLy = [];
        SmartFoxSDK.PortalController.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
        let request = new CasinoRequest.ListAgencyRequest();
        SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());

        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex+1;
        }
        if (this._data.nickname != null){
            this.setLastArea(this._data.area);
            this.updateDaiLyInfo(this._data.nickname, this._data.agName);
        }
        this.warningNode.active = false;
        this._area = this.getLastArea();
        this.updateTyLe();
        this.lbMyMoney.string = Utils.addDotToNumber(GameVariables.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf));;
    },
    onDisable(){
        SmartFoxSDK.PortalController.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
    },
    onListAgency(event){
        mm.Loading.hide();
        this.listDaiLy = new CasinoEvent.ListAgencyEvent().fromEvent(event);
    },
    changeMoney(editBox) {
        if (editBox == "")
            this.lbMoneyRev.string = "0";
        else
            this.lbMoneyRev.string = Utils.addDotToNumber(Math.floor(parseFloat(editBox))/this._moneyConvert);
    },
    eventClose(){
        this.back();
        mm.audio.playButton();
    },
    updateDaiLyInfo(username, agName) {
        this.edit_user_re.string        = username;
        this.edit_user_re_again.string  = username;
        this.lbDesTrans.string  = "Bán GOLD cho "+agName;
        this._data.agName = agName;
    },
    updateTyLe() {
        if (this._area == "ja"){
            this.lbTyLe.string   = "Tỉ lệ quy đổi: 1YEN = 226.8";
            this.lbTienTe.string = "YEN";
            this._moneyConvert   =  226.8;
        }else {
            this.lbTyLe.string = "Tỉ lệ quy đổi: 1WON = 20.52";
            this.lbTienTe.string = "WON";
            this._moneyConvert   = 20.52;
        }
    },
    clickTransferMoney(event){
        mm.audio.playButton();
        if(this.edit_user_re.string == ""){
            mm.Toast.showToast(1, "Tên người nhận không được trống");
            return;
        }
        // if(this.edit_user_re.string != this.edit_user_re_again.string){
        //     mm.Toast.showToast(1, "Nickname không khớp");
        //     return;
        // }
        if(this.edit_money.string == ""){
            mm.Toast.showToast(1, "Tiền không được trống");
            return;
        }
        if(parseInt(this.edit_money.string) < 10000){
            mm.Toast.showToast(1, "Tiền phải lớn hơn 10.000");
            return;
        }
        this.showInfoWaring(this._data.agName);
    },
    showInfoWaring(agenName) {
        if (agenName == undefined)
            agenName = "Không xác định!";
        this.warningNode.active = true;
        this.lbIsDaiLy.node.active = !this._isDaiLy;
        this.lbDes.string = "Chuyên GOLD cho "+agenName;
        this.lbNickName.string = this.edit_user_re.string;
        this.lbGold.string     = Utils.addDotToNumber(this.edit_money.string) + " GOLD";
    },
    eventShowDaiLys() {
        this.show("UIDaiLy", {pop: true, src: 'portal'});
    },
    eventChangeArea() {
        if ( this._area == "ja")
            this.setLastArea("ko");
        else
            this.setLastArea("ja");
        this._area = this.getLastArea();
        this.updateTyLe();
        this.changeMoney(this.edit_money.string);
    },
    setLastArea(area) {
        var localStorage = cc.sys.localStorage;
        localStorage.setItem("last_area", area);
    },
    getLastArea() {
        let localStorage = cc.sys.localStorage;
        if (localStorage.getItem("last_area") === null || localStorage.getItem("last_area") === undefined) {
            localStorage.setItem("last_area", "ja");
        }
        return localStorage.getItem("last_area");
    },
    eventDongY() {
        let request = new CasinoRequest.TransferMoneyRequest();
        request.setMoneyTransfer(parseInt(this.edit_money.string));
        request.setUserRecived(this.edit_user_re.string);
        SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());
        mm.Loading.show();
        this.eventCancel();
    },
    eventCancel() {
        this.warningNode.active = false;
    },
    eventGetInfoDaiLy() {
        this._isDaiLy = false;
        let nickName = this.edit_user_re.string;
        if (this.listDaiLy.length > 0){
            for (let i=0; i< this.listDaiLy.length; i++){
                if (nickName == this.listDaiLy[i].name){
                    this._isDaiLy = true;
                    this._area = this.listDaiLy[i].zone;
                    this.updateDaiLyInfo(this.listDaiLy[i].name, this.listDaiLy[i].agName);
                    this.updateTyLe();
                    this.lbMyMoney.string = Utils.addDotToNumber(GameVariables.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf));;

                }
            }
        }
    }

});

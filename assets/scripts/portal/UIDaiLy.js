const Listview = require('Listview');
cc.Class({
    extends: cc.VozBaseComponent,

    properties: {
        listview    : Listview,
        listArea    : [cc.Sprite],
        listBg      : [cc.SpriteFrame],
        _listArea  : []
    },
    onLoad() {
        this.listDaiLy = [];
        this._listArea = ["ja", "ko"];
        this.listview.numItems = this.listDaiLy.length;
    },
    onEnable(){
        mm.Loading.show();
        SmartFoxSDK.PortalController.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
        let request = new CasinoRequest.ListAgencyRequest();
        SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());
        if (this.node.zIndex <= cc.lastZIndex){
            this.node.zIndex = cc.lastZIndex+1;
        }
    },
    onDisable(){
        SmartFoxSDK.PortalController.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.LIST_AGENCY_RES, this.onListAgency, this);
    },
    eventClose() {
        mm.audio.playButton();
        this.back();
    },
    onListAgency(event){
        mm.Loading.hide();
        let listAgency = new CasinoEvent.ListAgencyEvent().fromEvent(event);
        this.listBaseDaiLy = listAgency;
        this.listDaiLy = listAgency;
        console.log(listAgency);
        this.eventSelectArea(null, this.getLastArea());
    },
    onListRender(item, idx) {
        let rank = this.listDaiLy[idx];
        item.getComponent(item.name).init(rank, idx);
        item.getComponent(item.name).addEventSelect(function (dataSelect) {
            mm.audio.playButton();
            this.show('UIPayment', {pop: true, src: 'portal', data : {nickname: dataSelect.name, agName: dataSelect.agName, area : dataSelect.zone}});
        });
    },
    onListSelected(item, selectedId, lastSelectedId, val) {
        if (!item)
            return;
        let list = item.listItem._list;
        let str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;
        if (list.selectedMode == 2) { //Nếu nó là chế độ đa lựa chọn
            str += '，Giá trị hiện tại：' + val;
        }
        console.log(str);
    },
    eventSelectArea(event, data) {
        if (event != null)
            mm.audio.playButton();
        let listArea           = this.getDailyInArea(data);
        this.listDaiLy         = listArea;
        this.listview.numItems = listArea.length;
        for (let i=0; i< 3; i++){
            this.listArea[i].spriteFrame = this.listBg[0];
        }
        this.listArea[data].spriteFrame = this.listBg[1];
    },
    getDailyInArea(posArea) {
        let area = this._listArea[posArea];
        let listArea = [];
        for (let i=0; i< this.listBaseDaiLy.length; i++){
           if ( this.listBaseDaiLy[i].zone == area)
               listArea.push(this.listBaseDaiLy[i]);
        }
        return listArea;
    },
    getLastArea() {
        let localStorage = cc.sys.localStorage;
        if (localStorage.getItem("last_area") === null || localStorage.getItem("last_area") === undefined) {
            localStorage.setItem("last_area", "ja");
        }
        let area = localStorage.getItem("last_area");
        if (area == "ja")
            return  0;
        else
            return 1;
    }
});

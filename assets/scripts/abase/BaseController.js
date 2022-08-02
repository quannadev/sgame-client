let BaseController = SmartFoxSDK.Class.extend({
    room: null,
    _nameUI: null,
    _ui: null,
    _src: "",
    ZoneInstance: null,
    zoneName: "",
    _inited: false,
    un: "",
    pass: "",
    ctor(nameUI, src){
        if(nameUI == undefined)
            console.error("Undefine name UI");
        this._nameUI = nameUI;
        if(src != undefined){}
        this._src = src;
        this.zoneName = this._src;
        this._initialize();
        // ping server
        setInterval(function () {
            if (this.ZoneInstance && this.ZoneInstance.isConnected()) {
                this.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.PingPongRequest());
            }
        }.bind(this), 30 * 1000);
    },
    _reset(){
        mm.Loading.hide();
        if(this.ZoneInstance){
            cc.currentUI = "";
            this._inited = false;
            this.removeEvents();
            this.ZoneInstance._reset(!1);
            this.ZoneInstance._socketEngine.disconnect("disconnect");
            this.ZoneInstance = new SmartFoxSDK.newInstance(Config.zoneConfig[this.zoneName]);
            this.registerEvents();
        }
    },
    _initialize(){
        if(!this._inited){
            this._inited = true;
            if(Config.zoneConfig[this.zoneName]){
                // src is name game
                this.ZoneInstance = new SmartFoxSDK.newInstance(Config.zoneConfig[this.zoneName]);
                this.registerEvents();
            }
        }
    },
    loginZone(un,pass){
        this.un = un;
        this.pass = pass;
        if(this.ZoneInstance.isConnected()){
            if(this.ZoneInstance.getCurrentZone() == this.zoneName){
                this.onEventLogin({"status": true});
            }else{
                let params = new SmartFoxSDK.SObject();
                params.putUtfString("role", "user");
                let loginRequest = new SmartFoxSDK.SmartFox.Requests.System.LoginRequest(un, pass, this.zoneName, params);
                this.ZoneInstance.send(loginRequest);
            }
        }else{
            this.ZoneInstance.connect();
        }
    },
    setRoom(room){
        this.room = room;
        // reset UI
        this._ui = null;
    },
    getRoom(){
        return this.room;
    },
    getUI(){
        if(this._ui != null)
            return this._ui;
        if (!this._nameUI || !this._nameUI.startsWith('UI')) {
            return null;
        }
        const scene = cc.director.getScene();
        let nodeUI =  cc.find(this._nameUI, scene);
        if(nodeUI)
            this._ui = nodeUI.getComponent(this._nameUI);
        return this._ui;
    },
    getUIByName(nameUi){
        if (!nameUi || !nameUi.startsWith('UI')) {
            return null;
        }
        const scene = cc.director.getScene();
        let nodeUI =  cc.find(nameUi, scene);
        let uiFin = null;
        if(nodeUI)
            uiFin = nodeUI.getComponent(nameUi);
        return uiFin;
    },
    preLoadUI(data, complete){
        if(this._src != "")
            data.src = this._src;
        const scene = cc.director.getScene();
        const node = cc.find(this._nameUI, scene);
        if(node && node.active){
            if(complete){
                complete();
                mm.Loading.hide();
            }
        }else{
            UIManger.show(this._nameUI, data, function () {
                if(complete){
                    complete();
                    mm.Loading.hide();
                }
            })
        }
    },
    registerEvents(){
        this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.HISTORY_RES, this.onHistoryEvent, this);
        this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES, this.onLeaderBoardEvent, this);

        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.CONNECTION, this.onEventConnection, this);
        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.LOGIN, this.onEventLogin, this);
        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.LOGIN_ERROR, this.onEventLoginError, this);
        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate, this);
        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.PUBLIC_MESSAGE, this.onPublicMessage, this);

        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.ROOM_JOIN, this.onEventRoomJoin, this);
        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.USER_ENTER_ROOM, this.onEventUserEnterRoom, this);
        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.ROOM_JOIN_ERROR, this.onEventRoomJoinError, this);
        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.USER_EXIT_ROOM, this.onEventUserExitRoom, this);

        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.CONNECTION_LOST, this.onEventLost, this);
        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.DISCONNECT_REASON, this.onEventDisconnect, this);
        this.ZoneInstance.addEventListener(SmartFoxSDK.SmartFox.Event.SOCKET_ERROR, this.onEventIOError, this);
    },
    removeEvents(){
        this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.HISTORY_RES, this.onHistoryEvent, this);
        this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.LEADER_BOARD_RES, this.onLeaderBoardEvent, this);

        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.CONNECTION, this.onEventConnection, this);
        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.LOGIN, this.onEventLogin, this);
        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.LOGIN_ERROR, this.onEventLoginError, this);
        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.USER_VARIABLES_UPDATE, this.onUserVariablesUpdate, this);
        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.PUBLIC_MESSAGE, this.onPublicMessage, this);

        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.ROOM_JOIN, this.onEventRoomJoin, this);
        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.USER_ENTER_ROOM, this.onEventUserEnterRoom, this);
        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.ROOM_JOIN_ERROR, this.onEventRoomJoinError, this);
        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.USER_EXIT_ROOM, this.onEventUserExitRoom, this);

        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.CONNECTION_LOST, this.onEventLost, this);
        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.DISCONNECT_REASON, this.onEventDisconnect, this);
        this.ZoneInstance.removeEventListener(SmartFoxSDK.SmartFox.Event.SOCKET_ERROR, this.onEventIOError, this);
    },
    onPublicMessage(event){
        // let uiChat = UIManger.getUIFromName("UIChat");
        // let sender = event.sender;
        // let msg = event.message;
        // let data = event.data;
        // let dataSender = data != null ? {dn: data.get("dn"), fb : data.get("fb")} : {dn: "...", fb : ""};
        // let msgItem = {};
        // msgItem.text = msg;
        // msgItem.type = 1;
        // dataSender.un = sender.name;
        // if(sender && sender.isItMe){
        //     msgItem.type = 2;
        // }
        // msgItem.dataSender = dataSender;
        // if(mm.dataChat == undefined)
        //     mm.dataChat = [];
        // mm.dataChat.push(msgItem);
        // if(uiChat){
        //     let jsChat = uiChat.getComponent(uiChat.name);
        //     jsChat.refresh(msgItem)
        // }
        // let uigame = UIManger.getUIFromName("UICotuong");
        // if(uigame){
        //     uigame.getComponent(uigame.name).onPublicMessage(msgItem);
        // }
    },
    onHistoryEvent(event){

    },
    onLeaderBoardEvent(event){

    },
    _requestJoinRoom(roomName){
        this.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.JoinRoomRequest(roomName));
    },
    onEventConnection(event){
        if(event.success){
            this.loginZone(this.un, this.pass);
        }else{
            this._reset();
        }
    },
    onEventLogin(event){
        if (event.zone == "portal"){
            this.onEventUpdateChip(0);
        }
    },
    onEventLoginError(params){
        this._reset();
        let self = this;
        if(params.id == 6){
            let msg = "Tài khoản "+params.msg[0]+ " đã đăng nhập ở thiết bị khác";
            UIManger.show('UIDialogOne', {
                data: {
                    content: msg,
                    "cbYes": function cbYes() {
                        PortalManager.disconnectAll();
                        self.resetAllGameUI();
                        UIManger.show("UIHome");
                    }
                }, pop: true
            });
        }else if(params.id == 3){
            Config.clearUserPass();
            let msg = "Mật khẩu không đúng";
            mm.Toast.showToast(1, msg);
        }else if(params.id == 2){
            Config.clearUserPass();
            let msg = params.msg[0];
            mm.Toast.showToast(1, msg);
        }else {
            Config.clearUserPass();
            let msg = "Tên đăng nhập hoặc mật khẩu không đúng";
            mm.Toast.showToast(1, msg);
        }

    },
    onUserVariablesUpdate(event){
        // sync chip to portal
        // if(SmartFoxSDK.PortalController.ZoneInstance.mySelf){
        //     let user = event.user;
        //     let newChip = GameVariables.Poker.getChip(user);
        //     GameVariables.setChip(newChip, SmartFoxSDK.PortalController.ZoneInstance.mySelf);
        // }
        // let scene = cc.director.getScene();
        // for (let i = 0; i < scene._children.length; i++) {
        //     let ui = scene._children[i];
        //     if (ui._name.includes("UI")) {
        //         let jsUI = ui.getComponent(ui._name);
        //         jsUI.updateUserVariable(event)
        //     }
        // }
        // if (cc.currentUI == ""){
        //     this.onEventUpdateChip();
        // }
        let scene = cc.director.getScene();
        for (let i = 0; i < scene._children.length; i++) {
            let ui = scene._children[i];
            if (ui._name == "UIHome" && cc.currentUI == "") {
                let jsUI = ui.getComponent(ui._name);
                jsUI.updateUserVariable(0)
            }
        }
    },
    onEventUpdateChip(subChip) {
        if (subChip == undefined || subChip == null)
            subChip = 0;
        let scene = cc.director.getScene();
        for (let i = 0; i < scene._children.length; i++) {
            let ui = scene._children[i];
            if (ui._name.includes("UI") && ui.active) {
                let jsUI = ui.getComponent(ui._name);
                jsUI.updateUserVariable(subChip);
            }
        }
    },
    onEventRoomJoin(event){
        this.setRoom(event.room);
    },
    onEventUserEnterRoom(event){
    },
    onEventRoomJoinError(event){
        mm.Loading.hide();
        if(event == 19){
            // leave game
            this.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(this.room));
            mm.Loading.show();
        }
    },
    onEventUserExitRoom(event){
        let user = event.user;
        if(user.isItMe){
            if (this.getUI() != null)
                this.getUI().node.active = false;
            UIManger.show("UILobby", {pop: true, data: {game: this.zoneName, ZoneInstance: this.ZoneInstance}});
        }else if(this.getUI()){
            this.getUI().removePlayer([user.name]);
        }
    },
    onEventLost(params){
        this._reset();
        PortalManager.disconnectAll();
        this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại.");
        // if(!cc.isValid(this.getUI()))
        //     return;
        // let uiLobby = UIManger.getUIFromName("UILobby");
        // if(this.getUI().node.active || (uiLobby && uiLobby.active && uiLobby.getComponent(uiLobby.name)._data.game == this.zoneName)){
        //     this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
        // }
    },
    onEventDisconnect(params){
        this._reset();
        PortalManager.disconnectAll();
        this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
        // if(!cc.isValid(this.getUI()))
        //     return;
        // let uiLobby = UIManger.getUIFromName("UILobby");
        // if(this.getUI().node.active || (uiLobby && uiLobby.active && uiLobby.getComponent(uiLobby.name)._data.game == this.zoneName)){
        //     this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
        // }
    },
    onEventIOError(params){
        this._reset();
        PortalManager.disconnectAll();
        this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
        // this._reset();
        // if(!cc.isValid(this.getUI()))
        //     return;
        // let uiLobby = UIManger.getUIFromName("UILobby");
        // if(this.getUI().node.active || (uiLobby && uiLobby.active && uiLobby.getComponent(uiLobby.name)._data.game == this.zoneName)){
        //     this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
        // }
    },
    _showDialogDisconnect(msg){
        let self = this;
        UIManger.show('UIDialogOne', {
            data: {
                content: msg,
                "cbYes": function cbYes() {
                    self.resetAllGameUI();
                    UIManger.show("UIHome");
                }
            }, pop: true
        });
    },
    resetAllGameUI() {
        mm.isLogin = false;
        const scene = cc.director.getScene();
        for (let index = 0; index < scene.childrenCount; index++) {
            let element = scene.children[index];
            if (element.name.startsWith('UI')) {
                if (element.name != "UIHome"){
                    element.destroy();
                }
            }
        }
    }
});
SmartFoxSDK.BaseController = BaseController;

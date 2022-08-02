
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/abase/BaseController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f030atiiq5OL57wworyoLv8', 'BaseController');
// scripts/abase/BaseController.js

"use strict";

var BaseController = SmartFoxSDK.Class.extend({
  room: null,
  _nameUI: null,
  _ui: null,
  _src: "",
  ZoneInstance: null,
  zoneName: "",
  _inited: false,
  un: "",
  pass: "",
  ctor: function ctor(nameUI, src) {
    if (nameUI == undefined) console.error("Undefine name UI");
    this._nameUI = nameUI;

    if (src != undefined) {}

    this._src = src;
    this.zoneName = this._src;

    this._initialize(); // ping server


    setInterval(function () {
      if (this.ZoneInstance && this.ZoneInstance.isConnected()) {
        this.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.PingPongRequest());
      }
    }.bind(this), 30 * 1000);
  },
  _reset: function _reset() {
    mm.Loading.hide();

    if (this.ZoneInstance) {
      cc.currentUI = "";
      this._inited = false;
      this.removeEvents();

      this.ZoneInstance._reset(!1);

      this.ZoneInstance._socketEngine.disconnect("disconnect");

      this.ZoneInstance = new SmartFoxSDK.newInstance(Config.zoneConfig[this.zoneName]);
      this.registerEvents();
    }
  },
  _initialize: function _initialize() {
    if (!this._inited) {
      this._inited = true;

      if (Config.zoneConfig[this.zoneName]) {
        // src is name game
        this.ZoneInstance = new SmartFoxSDK.newInstance(Config.zoneConfig[this.zoneName]);
        this.registerEvents();
      }
    }
  },
  loginZone: function loginZone(un, pass) {
    this.un = un;
    this.pass = pass;

    if (this.ZoneInstance.isConnected()) {
      if (this.ZoneInstance.getCurrentZone() == this.zoneName) {
        this.onEventLogin({
          "status": true
        });
      } else {
        var params = new SmartFoxSDK.SObject();
        params.putUtfString("role", "user");
        var loginRequest = new SmartFoxSDK.SmartFox.Requests.System.LoginRequest(un, pass, this.zoneName, params);
        this.ZoneInstance.send(loginRequest);
      }
    } else {
      this.ZoneInstance.connect();
    }
  },
  setRoom: function setRoom(room) {
    this.room = room; // reset UI

    this._ui = null;
  },
  getRoom: function getRoom() {
    return this.room;
  },
  getUI: function getUI() {
    if (this._ui != null) return this._ui;

    if (!this._nameUI || !this._nameUI.startsWith('UI')) {
      return null;
    }

    var scene = cc.director.getScene();
    var nodeUI = cc.find(this._nameUI, scene);
    if (nodeUI) this._ui = nodeUI.getComponent(this._nameUI);
    return this._ui;
  },
  getUIByName: function getUIByName(nameUi) {
    if (!nameUi || !nameUi.startsWith('UI')) {
      return null;
    }

    var scene = cc.director.getScene();
    var nodeUI = cc.find(nameUi, scene);
    var uiFin = null;
    if (nodeUI) uiFin = nodeUI.getComponent(nameUi);
    return uiFin;
  },
  preLoadUI: function preLoadUI(data, complete) {
    if (this._src != "") data.src = this._src;
    var scene = cc.director.getScene();
    var node = cc.find(this._nameUI, scene);

    if (node && node.active) {
      if (complete) {
        complete();
        mm.Loading.hide();
      }
    } else {
      UIManger.show(this._nameUI, data, function () {
        if (complete) {
          complete();
          mm.Loading.hide();
        }
      });
    }
  },
  registerEvents: function registerEvents() {
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
  removeEvents: function removeEvents() {
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
  onPublicMessage: function onPublicMessage(event) {// let uiChat = UIManger.getUIFromName("UIChat");
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
  onHistoryEvent: function onHistoryEvent(event) {},
  onLeaderBoardEvent: function onLeaderBoardEvent(event) {},
  _requestJoinRoom: function _requestJoinRoom(roomName) {
    this.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.JoinRoomRequest(roomName));
  },
  onEventConnection: function onEventConnection(event) {
    if (event.success) {
      this.loginZone(this.un, this.pass);
    } else {
      this._reset();
    }
  },
  onEventLogin: function onEventLogin(event) {
    if (event.zone == "portal") {
      this.onEventUpdateChip(0);
    }
  },
  onEventLoginError: function onEventLoginError(params) {
    this._reset();

    var self = this;

    if (params.id == 6) {
      var msg = "Tài khoản " + params.msg[0] + " đã đăng nhập ở thiết bị khác";
      UIManger.show('UIDialogOne', {
        data: {
          content: msg,
          "cbYes": function cbYes() {
            PortalManager.disconnectAll();
            self.resetAllGameUI();
            UIManger.show("UIHome");
          }
        },
        pop: true
      });
    } else if (params.id == 3) {
      Config.clearUserPass();
      var _msg = "Mật khẩu không đúng";
      mm.Toast.showToast(1, _msg);
    } else if (params.id == 2) {
      Config.clearUserPass();
      var _msg2 = params.msg[0];
      mm.Toast.showToast(1, _msg2);
    } else {
      Config.clearUserPass();
      var _msg3 = "Tên đăng nhập hoặc mật khẩu không đúng";
      mm.Toast.showToast(1, _msg3);
    }
  },
  onUserVariablesUpdate: function onUserVariablesUpdate(event) {
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
    var scene = cc.director.getScene();

    for (var i = 0; i < scene._children.length; i++) {
      var ui = scene._children[i];

      if (ui._name == "UIHome" && cc.currentUI == "") {
        var jsUI = ui.getComponent(ui._name);
        jsUI.updateUserVariable(0);
      }
    }
  },
  onEventUpdateChip: function onEventUpdateChip(subChip) {
    if (subChip == undefined || subChip == null) subChip = 0;
    var scene = cc.director.getScene();

    for (var i = 0; i < scene._children.length; i++) {
      var ui = scene._children[i];

      if (ui._name.includes("UI") && ui.active) {
        var jsUI = ui.getComponent(ui._name);
        jsUI.updateUserVariable(subChip);
      }
    }
  },
  onEventRoomJoin: function onEventRoomJoin(event) {
    this.setRoom(event.room);
  },
  onEventUserEnterRoom: function onEventUserEnterRoom(event) {},
  onEventRoomJoinError: function onEventRoomJoinError(event) {
    mm.Loading.hide();

    if (event == 19) {
      // leave game
      this.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(this.room));
      mm.Loading.show();
    }
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      if (this.getUI() != null) this.getUI().node.active = false;
      UIManger.show("UILobby", {
        pop: true,
        data: {
          game: this.zoneName,
          ZoneInstance: this.ZoneInstance
        }
      });
    } else if (this.getUI()) {
      this.getUI().removePlayer([user.name]);
    }
  },
  onEventLost: function onEventLost(params) {
    this._reset();

    PortalManager.disconnectAll();

    this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại."); // if(!cc.isValid(this.getUI()))
    //     return;
    // let uiLobby = UIManger.getUIFromName("UILobby");
    // if(this.getUI().node.active || (uiLobby && uiLobby.active && uiLobby.getComponent(uiLobby.name)._data.game == this.zoneName)){
    //     this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
    // }

  },
  onEventDisconnect: function onEventDisconnect(params) {
    this._reset();

    PortalManager.disconnectAll();

    this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại"); // if(!cc.isValid(this.getUI()))
    //     return;
    // let uiLobby = UIManger.getUIFromName("UILobby");
    // if(this.getUI().node.active || (uiLobby && uiLobby.active && uiLobby.getComponent(uiLobby.name)._data.game == this.zoneName)){
    //     this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
    // }

  },
  onEventIOError: function onEventIOError(params) {
    this._reset();

    PortalManager.disconnectAll();

    this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại"); // this._reset();
    // if(!cc.isValid(this.getUI()))
    //     return;
    // let uiLobby = UIManger.getUIFromName("UILobby");
    // if(this.getUI().node.active || (uiLobby && uiLobby.active && uiLobby.getComponent(uiLobby.name)._data.game == this.zoneName)){
    //     this._showDialogDisconnect("Mất kết nối ! vui lòng kết nối lại");
    // }

  },
  _showDialogDisconnect: function _showDialogDisconnect(msg) {
    var self = this;
    UIManger.show('UIDialogOne', {
      data: {
        content: msg,
        "cbYes": function cbYes() {
          self.resetAllGameUI();
          UIManger.show("UIHome");
        }
      },
      pop: true
    });
  },
  resetAllGameUI: function resetAllGameUI() {
    mm.isLogin = false;
    var scene = cc.director.getScene();

    for (var index = 0; index < scene.childrenCount; index++) {
      var element = scene.children[index];

      if (element.name.startsWith('UI')) {
        if (element.name != "UIHome") {
          element.destroy();
        }
      }
    }
  }
});
SmartFoxSDK.BaseController = BaseController;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYWJhc2VcXEJhc2VDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkJhc2VDb250cm9sbGVyIiwiU21hcnRGb3hTREsiLCJDbGFzcyIsImV4dGVuZCIsInJvb20iLCJfbmFtZVVJIiwiX3VpIiwiX3NyYyIsIlpvbmVJbnN0YW5jZSIsInpvbmVOYW1lIiwiX2luaXRlZCIsInVuIiwicGFzcyIsImN0b3IiLCJuYW1lVUkiLCJzcmMiLCJ1bmRlZmluZWQiLCJjb25zb2xlIiwiZXJyb3IiLCJfaW5pdGlhbGl6ZSIsInNldEludGVydmFsIiwiaXNDb25uZWN0ZWQiLCJzZW5kIiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIlBpbmdQb25nUmVxdWVzdCIsImJpbmQiLCJfcmVzZXQiLCJtbSIsIkxvYWRpbmciLCJoaWRlIiwiY2MiLCJjdXJyZW50VUkiLCJyZW1vdmVFdmVudHMiLCJfc29ja2V0RW5naW5lIiwiZGlzY29ubmVjdCIsIm5ld0luc3RhbmNlIiwiQ29uZmlnIiwiem9uZUNvbmZpZyIsInJlZ2lzdGVyRXZlbnRzIiwibG9naW5ab25lIiwiZ2V0Q3VycmVudFpvbmUiLCJvbkV2ZW50TG9naW4iLCJwYXJhbXMiLCJTT2JqZWN0IiwicHV0VXRmU3RyaW5nIiwibG9naW5SZXF1ZXN0IiwiTG9naW5SZXF1ZXN0IiwiY29ubmVjdCIsInNldFJvb20iLCJnZXRSb29tIiwiZ2V0VUkiLCJzdGFydHNXaXRoIiwic2NlbmUiLCJkaXJlY3RvciIsImdldFNjZW5lIiwibm9kZVVJIiwiZmluZCIsImdldENvbXBvbmVudCIsImdldFVJQnlOYW1lIiwibmFtZVVpIiwidWlGaW4iLCJwcmVMb2FkVUkiLCJkYXRhIiwiY29tcGxldGUiLCJub2RlIiwiYWN0aXZlIiwiVUlNYW5nZXIiLCJzaG93IiwiYWRkRXZlbnRMaXN0ZW5lckV4dGVuc2lvbiIsIkNhc2lub0V2ZW50IiwiUkVTUE9OU0VfTkFNRSIsIkhJU1RPUllfUkVTIiwib25IaXN0b3J5RXZlbnQiLCJMRUFERVJfQk9BUkRfUkVTIiwib25MZWFkZXJCb2FyZEV2ZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIkV2ZW50IiwiQ09OTkVDVElPTiIsIm9uRXZlbnRDb25uZWN0aW9uIiwiTE9HSU4iLCJMT0dJTl9FUlJPUiIsIm9uRXZlbnRMb2dpbkVycm9yIiwiVVNFUl9WQVJJQUJMRVNfVVBEQVRFIiwib25Vc2VyVmFyaWFibGVzVXBkYXRlIiwiUFVCTElDX01FU1NBR0UiLCJvblB1YmxpY01lc3NhZ2UiLCJST09NX0pPSU4iLCJvbkV2ZW50Um9vbUpvaW4iLCJVU0VSX0VOVEVSX1JPT00iLCJvbkV2ZW50VXNlckVudGVyUm9vbSIsIlJPT01fSk9JTl9FUlJPUiIsIm9uRXZlbnRSb29tSm9pbkVycm9yIiwiVVNFUl9FWElUX1JPT00iLCJvbkV2ZW50VXNlckV4aXRSb29tIiwiQ09OTkVDVElPTl9MT1NUIiwib25FdmVudExvc3QiLCJESVNDT05ORUNUX1JFQVNPTiIsIm9uRXZlbnREaXNjb25uZWN0IiwiU09DS0VUX0VSUk9SIiwib25FdmVudElPRXJyb3IiLCJyZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiX3JlcXVlc3RKb2luUm9vbSIsInJvb21OYW1lIiwiSm9pblJvb21SZXF1ZXN0Iiwic3VjY2VzcyIsInpvbmUiLCJvbkV2ZW50VXBkYXRlQ2hpcCIsInNlbGYiLCJpZCIsIm1zZyIsImNvbnRlbnQiLCJjYlllcyIsIlBvcnRhbE1hbmFnZXIiLCJkaXNjb25uZWN0QWxsIiwicmVzZXRBbGxHYW1lVUkiLCJwb3AiLCJjbGVhclVzZXJQYXNzIiwiVG9hc3QiLCJzaG93VG9hc3QiLCJpIiwiX2NoaWxkcmVuIiwibGVuZ3RoIiwidWkiLCJfbmFtZSIsImpzVUkiLCJ1cGRhdGVVc2VyVmFyaWFibGUiLCJzdWJDaGlwIiwiaW5jbHVkZXMiLCJMZWF2ZVJvb21SZXF1ZXN0IiwidXNlciIsImlzSXRNZSIsImdhbWUiLCJyZW1vdmVQbGF5ZXIiLCJuYW1lIiwiX3Nob3dEaWFsb2dEaXNjb25uZWN0IiwiaXNMb2dpbiIsImluZGV4IiwiY2hpbGRyZW5Db3VudCIsImVsZW1lbnQiLCJjaGlsZHJlbiIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsY0FBYyxHQUFHQyxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE1BQWxCLENBQXlCO0FBQzFDQyxFQUFBQSxJQUFJLEVBQUUsSUFEb0M7QUFFMUNDLEVBQUFBLE9BQU8sRUFBRSxJQUZpQztBQUcxQ0MsRUFBQUEsR0FBRyxFQUFFLElBSHFDO0FBSTFDQyxFQUFBQSxJQUFJLEVBQUUsRUFKb0M7QUFLMUNDLEVBQUFBLFlBQVksRUFBRSxJQUw0QjtBQU0xQ0MsRUFBQUEsUUFBUSxFQUFFLEVBTmdDO0FBTzFDQyxFQUFBQSxPQUFPLEVBQUUsS0FQaUM7QUFRMUNDLEVBQUFBLEVBQUUsRUFBRSxFQVJzQztBQVMxQ0MsRUFBQUEsSUFBSSxFQUFFLEVBVG9DO0FBVTFDQyxFQUFBQSxJQVYwQyxnQkFVckNDLE1BVnFDLEVBVTdCQyxHQVY2QixFQVV6QjtBQUNiLFFBQUdELE1BQU0sSUFBSUUsU0FBYixFQUNJQyxPQUFPLENBQUNDLEtBQVIsQ0FBYyxrQkFBZDtBQUNKLFNBQUtiLE9BQUwsR0FBZVMsTUFBZjs7QUFDQSxRQUFHQyxHQUFHLElBQUlDLFNBQVYsRUFBb0IsQ0FBRTs7QUFDdEIsU0FBS1QsSUFBTCxHQUFZUSxHQUFaO0FBQ0EsU0FBS04sUUFBTCxHQUFnQixLQUFLRixJQUFyQjs7QUFDQSxTQUFLWSxXQUFMLEdBUGEsQ0FRYjs7O0FBQ0FDLElBQUFBLFdBQVcsQ0FBQyxZQUFZO0FBQ3BCLFVBQUksS0FBS1osWUFBTCxJQUFxQixLQUFLQSxZQUFMLENBQWtCYSxXQUFsQixFQUF6QixFQUEwRDtBQUN0RCxhQUFLYixZQUFMLENBQWtCYyxJQUFsQixDQUF1QixJQUFJckIsV0FBVyxDQUFDc0IsUUFBWixDQUFxQkMsUUFBckIsQ0FBOEJDLE1BQTlCLENB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QixRQUFJRixJQUFJLEdBQUcsSUFBWDtBQUNBM0MsSUFBQUEsUUFBUSxDQUFDQyxJQUFULENBQWMsYUFBZCxFQUE2QjtBQUN6QkwsTUFBQUEsSUFBSSxFQUFFO0FBQ0ZrRCxRQUFBQSxPQUFPLEVBQUVELEdBRFA7QUFFRixpQkFBUyxTQUFTRSxLQUFULEdBQWlCO0FBQ3RCSixVQUFBQSxJQUFJLENBQUNPLGNBQUw7QUFDQWxELFVBQUFBLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjLFFBQWQ7QUFDSDtBQUxDLE9BRG1CO0FBT3RCa0QsTUFBQUEsR0FBRyxFQUFFO0FBUGlCLEtBQTdCO0FBU0gsR0EvVXlDO0FBZ1YxQ0QsRUFBQUEsY0FoVjBDLDRCQWdWekI7QUFDYnpGLElBQUFBLEVBQUUsQ0FBQzhHLE9BQUgsR0FBYSxLQUFiO0FBQ0EsUUFBTXJGLEtBQUssR0FBR3RCLEVBQUUsQ0FBQ3VCLFFBQUgsQ0FBWUMsUUFBWixFQUFkOztBQUNBLFNBQUssSUFBSW9GLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHdEYsS0FBSyxDQUFDdUYsYUFBbEMsRUFBaURELEtBQUssRUFBdEQsRUFBMEQ7QUFDdEQsVUFBSUUsT0FBTyxHQUFHeEYsS0FBSyxDQUFDeUYsUUFBTixDQUFlSCxLQUFmLENBQWQ7O0FBQ0EsVUFBSUUsT0FBTyxDQUFDTCxJQUFSLENBQWFwRixVQUFiLENBQXdCLElBQXhCLENBQUosRUFBbUM7QUFDL0IsWUFBSXlGLE9BQU8sQ0FBQ0wsSUFBUixJQUFnQixRQUFwQixFQUE2QjtBQUN6QkssVUFBQUEsT0FBTyxDQUFDRSxPQUFSO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7QUEzVnlDLENBQXpCLENBQXJCO0FBNlZBL0ksV0FBVyxDQUFDRCxjQUFaLEdBQTZCQSxjQUE3QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEJhc2VDb250cm9sbGVyID0gU21hcnRGb3hTREsuQ2xhc3MuZXh0ZW5kKHtcclxuICAgIHJvb206IG51bGwsXHJcbiAgICBfbmFtZVVJOiBudWxsLFxyXG4gICAgX3VpOiBudWxsLFxyXG4gICAgX3NyYzogXCJcIixcclxuICAgIFpvbmVJbnN0YW5jZTogbnVsbCxcclxuICAgIHpvbmVOYW1lOiBcIlwiLFxyXG4gICAgX2luaXRlZDogZmFsc2UsXHJcbiAgICB1bjogXCJcIixcclxuICAgIHBhc3M6IFwiXCIsXHJcbiAgICBjdG9yKG5hbWVVSSwgc3JjKXtcclxuICAgICAgICBpZihuYW1lVUkgPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiVW5kZWZpbmUgbmFtZSBVSVwiKTtcclxuICAgICAgICB0aGlzLl9uYW1lVUkgPSBuYW1lVUk7XHJcbiAgICAgICAgaWYoc3JjICE9IHVuZGVmaW5lZCl7fVxyXG4gICAgICAgIHRoaXMuX3NyYyA9IHNyYztcclxuICAgICAgICB0aGlzLnpvbmVOYW1lID0gdGhpcy5fc3JjO1xyXG4gICAgICAgIHRoaXMuX2luaXRpYWxpemUoKTtcclxuICAgICAgICAvLyBwaW5nIHNlcnZlclxyXG4gICAgICAgIHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuWm9uZUluc3RhbmNlICYmIHRoaXMuWm9uZUluc3RhbmNlLmlzQ29ubmVjdGVkKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnNlbmQobmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5QaW5nUG9uZ1JlcXVlc3QoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcyksIDMwICogMTAwMCk7XHJcbiAgICB9LFxyXG4gICAgX3Jlc2V0KCl7XHJcbiAgICAgICAgbW0uTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgaWYodGhpcy5ab25lSW5zdGFuY2Upe1xyXG4gICAgICAgICAgICBjYy5jdXJyZW50VUkgPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLl9pbml0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudHMoKTtcclxuICAgICAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuX3Jlc2V0KCExKTtcclxuICAgICAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuX3NvY2tldEVuZ2luZS5kaXNjb25uZWN0KFwiZGlzY29ubmVjdFwiKTtcclxuICAgICAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UgPSBuZXcgU21hcnRGb3hTREsubmV3SW5zdGFuY2UoQ29uZmlnLnpvbmVDb25maWdbdGhpcy56b25lTmFtZV0pO1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRXZlbnRzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIF9pbml0aWFsaXplKCl7XHJcbiAgICAgICAgaWYoIXRoaXMuX2luaXRlZCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2luaXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKENvbmZpZy56b25lQ29uZmlnW3RoaXMuem9uZU5hbWVdKXtcclxuICAgICAgICAgICAgICAgIC8vIHNyYyBpcyBuYW1lIGdhbWVcclxuICAgICAgICAgICAgICAgIHRoaXMuWm9uZUluc3RhbmNlID0gbmV3IFNtYXJ0Rm94U0RLLm5ld0luc3RhbmNlKENvbmZpZy56b25lQ29uZmlnW3RoaXMuem9uZU5hbWVdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBsb2dpblpvbmUodW4scGFzcyl7XHJcbiAgICAgICAgdGhpcy51biA9IHVuO1xyXG4gICAgICAgIHRoaXMucGFzcyA9IHBhc3M7XHJcbiAgICAgICAgaWYodGhpcy5ab25lSW5zdGFuY2UuaXNDb25uZWN0ZWQoKSl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuWm9uZUluc3RhbmNlLmdldEN1cnJlbnRab25lKCkgPT0gdGhpcy56b25lTmFtZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRXZlbnRMb2dpbih7XCJzdGF0dXNcIjogdHJ1ZX0pO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSBuZXcgU21hcnRGb3hTREsuU09iamVjdCgpO1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1dFV0ZlN0cmluZyhcInJvbGVcIiwgXCJ1c2VyXCIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxvZ2luUmVxdWVzdCA9IG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uTG9naW5SZXF1ZXN0KHVuLCBwYXNzLCB0aGlzLnpvbmVOYW1lLCBwYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ab25lSW5zdGFuY2Uuc2VuZChsb2dpblJlcXVlc3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmNvbm5lY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0Um9vbShyb29tKXtcclxuICAgICAgICB0aGlzLnJvb20gPSByb29tO1xyXG4gICAgICAgIC8vIHJlc2V0IFVJXHJcbiAgICAgICAgdGhpcy5fdWkgPSBudWxsO1xyXG4gICAgfSxcclxuICAgIGdldFJvb20oKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5yb29tO1xyXG4gICAgfSxcclxuICAgIGdldFVJKCl7XHJcbiAgICAgICAgaWYodGhpcy5fdWkgIT0gbnVsbClcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3VpO1xyXG4gICAgICAgIGlmICghdGhpcy5fbmFtZVVJIHx8ICF0aGlzLl9uYW1lVUkuc3RhcnRzV2l0aCgnVUknKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGxldCBub2RlVUkgPSAgY2MuZmluZCh0aGlzLl9uYW1lVUksIHNjZW5lKTtcclxuICAgICAgICBpZihub2RlVUkpXHJcbiAgICAgICAgICAgIHRoaXMuX3VpID0gbm9kZVVJLmdldENvbXBvbmVudCh0aGlzLl9uYW1lVUkpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91aTtcclxuICAgIH0sXHJcbiAgICBnZXRVSUJ5TmFtZShuYW1lVWkpe1xyXG4gICAgICAgIGlmICghbmFtZVVpIHx8ICFuYW1lVWkuc3RhcnRzV2l0aCgnVUknKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGxldCBub2RlVUkgPSAgY2MuZmluZChuYW1lVWksIHNjZW5lKTtcclxuICAgICAgICBsZXQgdWlGaW4gPSBudWxsO1xyXG4gICAgICAgIGlmKG5vZGVVSSlcclxuICAgICAgICAgICAgdWlGaW4gPSBub2RlVUkuZ2V0Q29tcG9uZW50KG5hbWVVaSk7XHJcbiAgICAgICAgcmV0dXJuIHVpRmluO1xyXG4gICAgfSxcclxuICAgIHByZUxvYWRVSShkYXRhLCBjb21wbGV0ZSl7XHJcbiAgICAgICAgaWYodGhpcy5fc3JjICE9IFwiXCIpXHJcbiAgICAgICAgICAgIGRhdGEuc3JjID0gdGhpcy5fc3JjO1xyXG4gICAgICAgIGNvbnN0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICBjb25zdCBub2RlID0gY2MuZmluZCh0aGlzLl9uYW1lVUksIHNjZW5lKTtcclxuICAgICAgICBpZihub2RlICYmIG5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgaWYoY29tcGxldGUpe1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIG1tLkxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFVJTWFuZ2VyLnNob3codGhpcy5fbmFtZVVJLCBkYXRhLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZihjb21wbGV0ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVnaXN0ZXJFdmVudHMoKXtcclxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuSElTVE9SWV9SRVMsIHRoaXMub25IaXN0b3J5RXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oQ2FzaW5vRXZlbnQuUkVTUE9OU0VfTkFNRS5MRUFERVJfQk9BUkRfUkVTLCB0aGlzLm9uTGVhZGVyQm9hcmRFdmVudCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuQ09OTkVDVElPTiwgdGhpcy5vbkV2ZW50Q29ubmVjdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihTbWFydEZveFNESy5TbWFydEZveC5FdmVudC5MT0dJTiwgdGhpcy5vbkV2ZW50TG9naW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuTE9HSU5fRVJST1IsIHRoaXMub25FdmVudExvZ2luRXJyb3IsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuVVNFUl9WQVJJQUJMRVNfVVBEQVRFLCB0aGlzLm9uVXNlclZhcmlhYmxlc1VwZGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihTbWFydEZveFNESy5TbWFydEZveC5FdmVudC5QVUJMSUNfTUVTU0FHRSwgdGhpcy5vblB1YmxpY01lc3NhZ2UsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkV2ZW50LlJPT01fSk9JTiwgdGhpcy5vbkV2ZW50Um9vbUpvaW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuVVNFUl9FTlRFUl9ST09NLCB0aGlzLm9uRXZlbnRVc2VyRW50ZXJSb29tLCB0aGlzKTtcclxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyKFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkV2ZW50LlJPT01fSk9JTl9FUlJPUiwgdGhpcy5vbkV2ZW50Um9vbUpvaW5FcnJvciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihTbWFydEZveFNESy5TbWFydEZveC5FdmVudC5VU0VSX0VYSVRfUk9PTSwgdGhpcy5vbkV2ZW50VXNlckV4aXRSb29tLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lcihTbWFydEZveFNESy5TbWFydEZveC5FdmVudC5DT05ORUNUSU9OX0xPU1QsIHRoaXMub25FdmVudExvc3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuRElTQ09OTkVDVF9SRUFTT04sIHRoaXMub25FdmVudERpc2Nvbm5lY3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuU09DS0VUX0VSUk9SLCB0aGlzLm9uRXZlbnRJT0Vycm9yLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVFdmVudHMoKXtcclxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuSElTVE9SWV9SRVMsIHRoaXMub25IaXN0b3J5RXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24oQ2FzaW5vRXZlbnQuUkVTUE9OU0VfTkFNRS5MRUFERVJfQk9BUkRfUkVTLCB0aGlzLm9uTGVhZGVyQm9hcmRFdmVudCwgdGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuQ09OTkVDVElPTiwgdGhpcy5vbkV2ZW50Q29ubmVjdGlvbiwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihTbWFydEZveFNESy5TbWFydEZveC5FdmVudC5MT0dJTiwgdGhpcy5vbkV2ZW50TG9naW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuTE9HSU5fRVJST1IsIHRoaXMub25FdmVudExvZ2luRXJyb3IsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuVVNFUl9WQVJJQUJMRVNfVVBEQVRFLCB0aGlzLm9uVXNlclZhcmlhYmxlc1VwZGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihTbWFydEZveFNESy5TbWFydEZveC5FdmVudC5QVUJMSUNfTUVTU0FHRSwgdGhpcy5vblB1YmxpY01lc3NhZ2UsIHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkV2ZW50LlJPT01fSk9JTiwgdGhpcy5vbkV2ZW50Um9vbUpvaW4sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuVVNFUl9FTlRFUl9ST09NLCB0aGlzLm9uRXZlbnRVc2VyRW50ZXJSb29tLCB0aGlzKTtcclxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyKFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkV2ZW50LlJPT01fSk9JTl9FUlJPUiwgdGhpcy5vbkV2ZW50Um9vbUpvaW5FcnJvciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihTbWFydEZveFNESy5TbWFydEZveC5FdmVudC5VU0VSX0VYSVRfUk9PTSwgdGhpcy5vbkV2ZW50VXNlckV4aXRSb29tLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihTbWFydEZveFNESy5TbWFydEZveC5FdmVudC5DT05ORUNUSU9OX0xPU1QsIHRoaXMub25FdmVudExvc3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuRElTQ09OTkVDVF9SRUFTT04sIHRoaXMub25FdmVudERpc2Nvbm5lY3QsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXIoU21hcnRGb3hTREsuU21hcnRGb3guRXZlbnQuU09DS0VUX0VSUk9SLCB0aGlzLm9uRXZlbnRJT0Vycm9yLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvblB1YmxpY01lc3NhZ2UoZXZlbnQpe1xyXG4gICAgICAgIC8vIGxldCB1aUNoYXQgPSBVSU1hbmdlci5nZXRVSUZyb21OYW1lKFwiVUlDaGF0XCIpO1xyXG4gICAgICAgIC8vIGxldCBzZW5kZXIgPSBldmVudC5zZW5kZXI7XHJcbiAgICAgICAgLy8gbGV0IG1zZyA9IGV2ZW50Lm1lc3NhZ2U7XHJcbiAgICAgICAgLy8gbGV0IGRhdGEgPSBldmVudC5kYXRhO1xyXG4gICAgICAgIC8vIGxldCBkYXRhU2VuZGVyID0gZGF0YSAhPSBudWxsID8ge2RuOiBkYXRhLmdldChcImRuXCIpLCBmYiA6IGRhdGEuZ2V0KFwiZmJcIil9IDoge2RuOiBcIi4uLlwiLCBmYiA6IFwiXCJ9O1xyXG4gICAgICAgIC8vIGxldCBtc2dJdGVtID0ge307XHJcbiAgICAgICAgLy8gbXNnSXRlbS50ZXh0ID0gbXNnO1xyXG4gICAgICAgIC8vIG1zZ0l0ZW0udHlwZSA9IDE7XHJcbiAgICAgICAgLy8gZGF0YVNlbmRlci51biA9IHNlbmRlci5uYW1lO1xyXG4gICAgICAgIC8vIGlmKHNlbmRlciAmJiBzZW5kZXIuaXNJdE1lKXtcclxuICAgICAgICAvLyAgICAgbXNnSXRlbS50eXBlID0gMjtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gbXNnSXRlbS5kYXRhU2VuZGVyID0gZGF0YVNlbmRlcjtcclxuICAgICAgICAvLyBpZihtbS5kYXRhQ2hhdCA9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgLy8gICAgIG1tLmRhdGFDaGF0ID0gW107XHJcbiAgICAgICAgLy8gbW0uZGF0YUNoYXQucHVzaChtc2dJdGVtKTtcclxuICAgICAgICAvLyBpZih1aUNoYXQpe1xyXG4gICAgICAgIC8vICAgICBsZXQganNDaGF0ID0gdWlDaGF0LmdldENvbXBvbmVudCh1aUNoYXQubmFtZSk7XHJcbiAgICAgICAgLy8gICAgIGpzQ2hhdC5yZWZyZXNoKG1zZ0l0ZW0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGxldCB1aWdhbWUgPSBVSU1hbmdlci5nZXRVSUZyb21OYW1lKFwiVUlDb3R1b25nXCIpO1xyXG4gICAgICAgIC8vIGlmKHVpZ2FtZSl7XHJcbiAgICAgICAgLy8gICAgIHVpZ2FtZS5nZXRDb21wb25lbnQodWlnYW1lLm5hbWUpLm9uUHVibGljTWVzc2FnZShtc2dJdGVtKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG4gICAgb25IaXN0b3J5RXZlbnQoZXZlbnQpe1xyXG5cclxuICAgIH0sXHJcbiAgICBvbkxlYWRlckJvYXJkRXZlbnQoZXZlbnQpe1xyXG5cclxuICAgIH0sXHJcbiAgICBfcmVxdWVzdEpvaW5Sb29tKHJvb21OYW1lKXtcclxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5zZW5kKG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uSm9pblJvb21SZXF1ZXN0KHJvb21OYW1lKSk7XHJcbiAgICB9LFxyXG4gICAgb25FdmVudENvbm5lY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIGlmKGV2ZW50LnN1Y2Nlc3Mpe1xyXG4gICAgICAgICAgICB0aGlzLmxvZ2luWm9uZSh0aGlzLnVuLCB0aGlzLnBhc3MpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkV2ZW50TG9naW4oZXZlbnQpe1xyXG4gICAgICAgIGlmIChldmVudC56b25lID09IFwicG9ydGFsXCIpe1xyXG4gICAgICAgICAgICB0aGlzLm9uRXZlbnRVcGRhdGVDaGlwKDApO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkV2ZW50TG9naW5FcnJvcihwYXJhbXMpe1xyXG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmKHBhcmFtcy5pZCA9PSA2KXtcclxuICAgICAgICAgICAgbGV0IG1zZyA9IFwiVMOgaSBraG/huqNuIFwiK3BhcmFtcy5tc2dbMF0rIFwiIMSRw6MgxJHEg25nIG5o4bqtcCDhu58gdGhp4bq/dCBi4buLIGtow6FjXCI7XHJcbiAgICAgICAgICAgIFVJTWFuZ2VyLnNob3coJ1VJRGlhbG9nT25lJywge1xyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IG1zZyxcclxuICAgICAgICAgICAgICAgICAgICBcImNiWWVzXCI6IGZ1bmN0aW9uIGNiWWVzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3J0YWxNYW5hZ2VyLmRpc2Nvbm5lY3RBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5yZXNldEFsbEdhbWVVSSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlIb21lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIHBvcDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZSBpZihwYXJhbXMuaWQgPT0gMyl7XHJcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XHJcbiAgICAgICAgICAgIGxldCBtc2cgPSBcIk3huq10IGto4bqpdSBraMO0bmcgxJHDum5nXCI7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBtc2cpO1xyXG4gICAgICAgIH1lbHNlIGlmKHBhcmFtcy5pZCA9PSAyKXtcclxuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcclxuICAgICAgICAgICAgbGV0IG1zZyA9IHBhcmFtcy5tc2dbMF07XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBtc2cpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcclxuICAgICAgICAgICAgbGV0IG1zZyA9IFwiVMOqbiDEkcSDbmcgbmjhuq1wIGhv4bq3YyBt4bqtdCBraOG6qXUga2jDtG5nIMSRw7puZ1wiO1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgbXNnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfSxcclxuICAgIG9uVXNlclZhcmlhYmxlc1VwZGF0ZShldmVudCl7XHJcbiAgICAgICAgLy8gc3luYyBjaGlwIHRvIHBvcnRhbFxyXG4gICAgICAgIC8vIGlmKFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZil7XHJcbiAgICAgICAgLy8gICAgIGxldCB1c2VyID0gZXZlbnQudXNlcjtcclxuICAgICAgICAvLyAgICAgbGV0IG5ld0NoaXAgPSBHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAodXNlcik7XHJcbiAgICAgICAgLy8gICAgIEdhbWVWYXJpYWJsZXMuc2V0Q2hpcChuZXdDaGlwLCBTbWFydEZveFNESy5Qb3J0YWxDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCB1aSA9IHNjZW5lLl9jaGlsZHJlbltpXTtcclxuICAgICAgICAvLyAgICAgaWYgKHVpLl9uYW1lLmluY2x1ZGVzKFwiVUlcIikpIHtcclxuICAgICAgICAvLyAgICAgICAgIGxldCBqc1VJID0gdWkuZ2V0Q29tcG9uZW50KHVpLl9uYW1lKTtcclxuICAgICAgICAvLyAgICAgICAgIGpzVUkudXBkYXRlVXNlclZhcmlhYmxlKGV2ZW50KVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChjYy5jdXJyZW50VUkgPT0gXCJcIil7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub25FdmVudFVwZGF0ZUNoaXAoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNjZW5lLl9jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgdWkgPSBzY2VuZS5fY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmICh1aS5fbmFtZSA9PSBcIlVJSG9tZVwiICYmIGNjLmN1cnJlbnRVSSA9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNVSSA9IHVpLmdldENvbXBvbmVudCh1aS5fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBqc1VJLnVwZGF0ZVVzZXJWYXJpYWJsZSgwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRXZlbnRVcGRhdGVDaGlwKHN1YkNoaXApIHtcclxuICAgICAgICBpZiAoc3ViQ2hpcCA9PSB1bmRlZmluZWQgfHwgc3ViQ2hpcCA9PSBudWxsKVxyXG4gICAgICAgICAgICBzdWJDaGlwID0gMDtcclxuICAgICAgICBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2NlbmUuX2NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB1aSA9IHNjZW5lLl9jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgaWYgKHVpLl9uYW1lLmluY2x1ZGVzKFwiVUlcIikgJiYgdWkuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQganNVSSA9IHVpLmdldENvbXBvbmVudCh1aS5fbmFtZSk7XHJcbiAgICAgICAgICAgICAgICBqc1VJLnVwZGF0ZVVzZXJWYXJpYWJsZShzdWJDaGlwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkV2ZW50Um9vbUpvaW4oZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuc2V0Um9vbShldmVudC5yb29tKTtcclxuICAgIH0sXHJcbiAgICBvbkV2ZW50VXNlckVudGVyUm9vbShldmVudCl7XHJcbiAgICB9LFxyXG4gICAgb25FdmVudFJvb21Kb2luRXJyb3IoZXZlbnQpe1xyXG4gICAgICAgIG1tLkxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgIGlmKGV2ZW50ID09IDE5KXtcclxuICAgICAgICAgICAgLy8gbGVhdmUgZ2FtZVxyXG4gICAgICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5zZW5kKG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uTGVhdmVSb29tUmVxdWVzdCh0aGlzLnJvb20pKTtcclxuICAgICAgICAgICAgbW0uTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRXZlbnRVc2VyRXhpdFJvb20oZXZlbnQpe1xyXG4gICAgICAgIGxldCB1c2VyID0gZXZlbnQudXNlcjtcclxuICAgICAgICBpZih1c2VyLmlzSXRNZSl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFVJKCkgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlMb2JieVwiLCB7cG9wOiB0cnVlLCBkYXRhOiB7Z2FtZTogdGhpcy56b25lTmFtZSwgWm9uZUluc3RhbmNlOiB0aGlzLlpvbmVJbnN0YW5jZX19KTtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmdldFVJKCkpe1xyXG4gICAgICAgICAgICB0aGlzLmdldFVJKCkucmVtb3ZlUGxheWVyKFt1c2VyLm5hbWVdKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25FdmVudExvc3QocGFyYW1zKXtcclxuICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG4gICAgICAgIFBvcnRhbE1hbmFnZXIuZGlzY29ubmVjdEFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dEaWFsb2dEaXNjb25uZWN0KFwiTeG6pXQga+G6v3QgbuG7kWkgISB2dWkgbMOybmcga+G6v3QgbuG7kWkgbOG6oWkuXCIpO1xyXG4gICAgICAgIC8vIGlmKCFjYy5pc1ZhbGlkKHRoaXMuZ2V0VUkoKSkpXHJcbiAgICAgICAgLy8gICAgIHJldHVybjtcclxuICAgICAgICAvLyBsZXQgdWlMb2JieSA9IFVJTWFuZ2VyLmdldFVJRnJvbU5hbWUoXCJVSUxvYmJ5XCIpO1xyXG4gICAgICAgIC8vIGlmKHRoaXMuZ2V0VUkoKS5ub2RlLmFjdGl2ZSB8fCAodWlMb2JieSAmJiB1aUxvYmJ5LmFjdGl2ZSAmJiB1aUxvYmJ5LmdldENvbXBvbmVudCh1aUxvYmJ5Lm5hbWUpLl9kYXRhLmdhbWUgPT0gdGhpcy56b25lTmFtZSkpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLl9zaG93RGlhbG9nRGlzY29ubmVjdChcIk3huqV0IGvhur90IG7hu5FpICEgdnVpIGzDsm5nIGvhur90IG7hu5FpIGzhuqFpXCIpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH0sXHJcbiAgICBvbkV2ZW50RGlzY29ubmVjdChwYXJhbXMpe1xyXG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XHJcbiAgICAgICAgUG9ydGFsTWFuYWdlci5kaXNjb25uZWN0QWxsKCk7XHJcbiAgICAgICAgdGhpcy5fc2hvd0RpYWxvZ0Rpc2Nvbm5lY3QoXCJN4bqldCBr4bq/dCBu4buRaSAhIHZ1aSBsw7JuZyBr4bq/dCBu4buRaSBs4bqhaVwiKTtcclxuICAgICAgICAvLyBpZighY2MuaXNWYWxpZCh0aGlzLmdldFVJKCkpKVxyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gbGV0IHVpTG9iYnkgPSBVSU1hbmdlci5nZXRVSUZyb21OYW1lKFwiVUlMb2JieVwiKTtcclxuICAgICAgICAvLyBpZih0aGlzLmdldFVJKCkubm9kZS5hY3RpdmUgfHwgKHVpTG9iYnkgJiYgdWlMb2JieS5hY3RpdmUgJiYgdWlMb2JieS5nZXRDb21wb25lbnQodWlMb2JieS5uYW1lKS5fZGF0YS5nYW1lID09IHRoaXMuem9uZU5hbWUpKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5fc2hvd0RpYWxvZ0Rpc2Nvbm5lY3QoXCJN4bqldCBr4bq/dCBu4buRaSAhIHZ1aSBsw7JuZyBr4bq/dCBu4buRaSBs4bqhaVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG4gICAgb25FdmVudElPRXJyb3IocGFyYW1zKXtcclxuICAgICAgICB0aGlzLl9yZXNldCgpO1xyXG4gICAgICAgIFBvcnRhbE1hbmFnZXIuZGlzY29ubmVjdEFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3Nob3dEaWFsb2dEaXNjb25uZWN0KFwiTeG6pXQga+G6v3QgbuG7kWkgISB2dWkgbMOybmcga+G6v3QgbuG7kWkgbOG6oWlcIik7XHJcbiAgICAgICAgLy8gdGhpcy5fcmVzZXQoKTtcclxuICAgICAgICAvLyBpZighY2MuaXNWYWxpZCh0aGlzLmdldFVJKCkpKVxyXG4gICAgICAgIC8vICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gbGV0IHVpTG9iYnkgPSBVSU1hbmdlci5nZXRVSUZyb21OYW1lKFwiVUlMb2JieVwiKTtcclxuICAgICAgICAvLyBpZih0aGlzLmdldFVJKCkubm9kZS5hY3RpdmUgfHwgKHVpTG9iYnkgJiYgdWlMb2JieS5hY3RpdmUgJiYgdWlMb2JieS5nZXRDb21wb25lbnQodWlMb2JieS5uYW1lKS5fZGF0YS5nYW1lID09IHRoaXMuem9uZU5hbWUpKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5fc2hvd0RpYWxvZ0Rpc2Nvbm5lY3QoXCJN4bqldCBr4bq/dCBu4buRaSAhIHZ1aSBsw7JuZyBr4bq/dCBu4buRaSBs4bqhaVwiKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9LFxyXG4gICAgX3Nob3dEaWFsb2dEaXNjb25uZWN0KG1zZyl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIFVJTWFuZ2VyLnNob3coJ1VJRGlhbG9nT25lJywge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtc2csXHJcbiAgICAgICAgICAgICAgICBcImNiWWVzXCI6IGZ1bmN0aW9uIGNiWWVzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucmVzZXRBbGxHYW1lVUkoKTtcclxuICAgICAgICAgICAgICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlIb21lXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCBwb3A6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZXNldEFsbEdhbWVVSSgpIHtcclxuICAgICAgICBtbS5pc0xvZ2luID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzY2VuZS5jaGlsZHJlbkNvdW50OyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGxldCBlbGVtZW50ID0gc2NlbmUuY2hpbGRyZW5baW5kZXhdO1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5uYW1lLnN0YXJ0c1dpdGgoJ1VJJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50Lm5hbWUgIT0gXCJVSUhvbWVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5TbWFydEZveFNESy5CYXNlQ29udHJvbGxlciA9IEJhc2VDb250cm9sbGVyO1xyXG4iXX0=
"use strict";
cc._RF.push(module, 'b61e3usURxALbVo2C8WDS0x', 'UIHome');
// scripts/ui/UIHome.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    TopHome: cc.Node,
    TopLogin: cc.Node,
    lb_name: cc.Label,
    lb_chip: cc.Label,
    Avatar: cc.Sprite,
    ALL: {
      type: cc.Node,
      "default": []
    },
    SLOT: {
      type: cc.Node,
      "default": []
    },
    MINI: {
      type: cc.Node,
      "default": []
    },
    CASINO: {
      type: cc.Node,
      "default": []
    }
  },
  onLoad: function onLoad() {
    Utils.loadRes(this.Avatar, "images/avatar/" + Config.getDefaultAvatar());
    MiniGame.showIcon();
    cc.isFirstTx = true;
  },
  onEnable: function onEnable() {
    if (mm.isLogin) {
      this.TopHome.active = true;
      this.TopLogin.active = false;
    } else {
      this.TopHome.active = false;
      this.TopLogin.active = true;
      this.resetAllGameUI();
    }

    mm.audio.playMusic();

    if (mm.isLogin && cc.isFirstTx) {
      cc.isFirstTx = false;
      var ui = this.getUIFromName("UITaiXiu");

      if (ui == null) {
        this._selectGame = "taixiu";
        this.completeLoadUIGame(this._selectGame);
      }
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    if (SmartFoxSDK.PortalController.ZoneInstance.mySelf) {
      this.lb_name.string = Utils.formatText(GameVariables.Poker.getDisplayName(SmartFoxSDK.PortalController.ZoneInstance.mySelf), 20);
      this.lb_chip.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf) - subChip);
      var msg = SmartFoxSDK.PortalController.ZoneInstance.mySelf.getVariable("sysmsg");

      if (msg && msg.value) {
        var SystemMessage = this.node.getChildByName("content").getChildByName("SystemMessage");
        var js = SystemMessage.getComponent(SystemMessage.name);
        js.runMessage(msg.value);
      }
    }
  },
  onSelectGame: function onSelectGame(event, game) {
    this._selectGame = game;
    cc._selectGameNode = event.currentTarget;
    this.onLoadSubGame();
    mm.audio.playButton();
  },
  onToggleCategoryGame: function onToggleCategoryGame(event) {
    mm.audio.playButton();

    if (event.node.name == 'All') {
      this._activeIconGame(this.ALL);
    } else if (event.node.name == 'Slot') {
      this._hideAllIconGame();

      this._activeIconGame(this.SLOT);
    } else if (event.node.name == 'MiniGame') {
      this._hideAllIconGame();

      this._activeIconGame(this.MINI);
    } else if (event.node.name == 'Casino') {
      this._hideAllIconGame();

      this._activeIconGame(this.CASINO);
    }
  },
  _hideAllIconGame: function _hideAllIconGame() {
    for (var i = 0; i < this.ALL.length; i++) {
      this.ALL[i].active = false;
    }
  },
  _activeIconGame: function _activeIconGame(list) {
    for (var i = 0; i < list.length; i++) {
      list[i].active = true;
    }
  },
  onLoadSubGame: function onLoadSubGame() {
    var game = this._selectGame;

    if (mm.isLogin) {
      cc._selectGameNode.getChildByName("load").active = true;
      mm.Loading.show();
      this.completeLoadUIGame(game);
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  },
  completeLoadUIGame: function completeLoadUIGame(game) {
    var gameController = PortalManager.getGameController(game);
    if (gameController) gameController.loginZone(Config.getUsername(), Config.getPass());
  },
  onClickLogin: function onClickLogin() {
    mm.audio.playButton();
    this.show("UILogin", {
      pop: true
    });
  },
  onClickRegister: function onClickRegister() {
    mm.audio.playButton();
    this.show("UIRegister", {
      pop: true
    });
  },
  eventShowWarning: function eventShowWarning() {
    var self = this;
    mm.audio.playButton();
    UIManger.show('UIDialogTwo', {
      data: {
        content: "Bạn có muốn đăng xuất không?",
        "cbYes": function cbYes() {
          self.TopHome.active = false;
          self.TopLogin.active = true;
          mm.isLogin = false;

          SmartFoxSDK.PortalController._reset();

          PortalManager.disconnectAll();
          self.resetAllGameUI();
        }
      },
      pop: true
    });
  },
  resetAllGameUI: function resetAllGameUI() {
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

cc._RF.pop();
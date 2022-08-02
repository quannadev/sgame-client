"use strict";
cc._RF.push(module, '09f3fziL3hAtr4+JFrcPUSo', 'MiniGame');
// scripts/MiniGame.js

"use strict";

var MiniGame = cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    bgAll: cc.Node,
    BG: cc.Node,
    ICON: cc.Node
  },
  statics: {
    inst: null
  },
  onLoad: function onLoad() {
    MiniGame.inst = this;
    window.MiniGame = this;
    this.BG.active = false;
    this.node.zIndex = cc.lastZIndex + 1;
    this.ICON.active = false;
    this.bgAll.active = false;
  },
  showIcon: function showIcon() {
    this.ICON.active = true;
  },
  eventClickMini: function eventClickMini(event) {
    var target = event.target;
    var move = target.getComponent("Move");

    if (move && move.isMove()) {
      move._isMove = false;
      return;
    }

    var BG = this.BG.active;

    if (!BG) {
      this.showGames();
    } else {
      this.hideGames();
    }
  },
  showGames: function showGames() {
    this.BG.active = true;
    this.bgAll.active = true;
    var rotation = cc.rotateBy(0.6, 8 * 360);
    var scaleBig = cc.scaleTo(0.4, 1.1);
    var scaleSmall = cc.scaleTo(0.2, 1);
    var fadeIn = cc.fadeIn(0.6);
    var hideBg = cc.fadeIn(0.6);
    this.BG.opacity = 0;
    this.bgAll.opacity = 0;
    this.BG.scale = 0;
    var spawn1 = cc.spawn(rotation, scaleBig, fadeIn, cc.sequence(cc.delayTime(0.4), scaleSmall));
    this.bgAll.runAction(hideBg);
    this.BG.runAction(spawn1);
  },
  hideGames: function hideGames() {
    var rotation = cc.rotateBy(0.6, 8 * 360);
    var scaleBig = cc.scaleTo(0.2, 1.1);
    var scaleSmall = cc.scaleTo(0.4, 0);
    var fadeout = cc.fadeIn(0.6);
    var hideBg = cc.fadeIn(0.6);
    var spawn1 = cc.spawn(rotation, scaleBig, fadeout, cc.sequence(cc.delayTime(0.2), scaleSmall));
    var self = this;
    this.bgAll.runAction(hideBg);
    this.BG.runAction(cc.sequence(spawn1, cc.callFunc(function () {
      self.BG.active = false;
      self.bgAll.active = false;
    })));
  },
  onSelectGame: function onSelectGame(event, game) {
    this.hideGames();

    if (mm.isLogin) {
      var gameController = PortalManager.getGameController(game);

      if (gameController) {
        mm.Loading.show();
        gameController.loginZone(Config.getUsername(), Config.getPass());
      }
    } else {
      this.show("UILogin", {
        pop: true
      });
    }
  }
});

cc._RF.pop();
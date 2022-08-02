
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rongho/UIRongHo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd14dcVfmcFDAoag6EVbl0A/', 'UIRongHo');
// scripts/rongho/UIRongHo.js

"use strict";

var PokerCard = require('PokerCard');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    ChatEmojiLayer: cc.Node,
    listNodeBet: {
      type: cc.Node,
      "default": []
    },
    listNodePot: {
      type: cc.Node,
      "default": []
    },
    _myChipBet: [],
    _currentType: -1,
    _currentBet: 1000,
    Timer: cc.Node,
    ChipPrefab: cc.Prefab,
    POS: cc.Node,
    Result: cc.Node,
    CardRong: cc.Node,
    CardHo: cc.Node,
    ListMenu: cc.Node,
    Notice: cc.Node,
    Toast: cc.Node,
    lb_countUser: cc.Label,
    _isRongHo: -1
  },
  onLoad: function onLoad() {
    this._currentBet = 1000;
    this._myChipBet = [];
    this._isDat = false;
    this._isDatLast = false;
    this.poolChip = [];

    for (var i = 0; i < 20; i++) {
      var chip = cc.instantiate(this.ChipPrefab);
      this.node.addChild(chip);
      chip.active = false;
      chip.scale = 0.33;
      this.poolChip.push(chip);
    }

    cc.game.on(cc.game.EVENT_SHOW, function () {
      if (this.node != null) SmartFoxSDK.RongHoController.resumeGame();
    }.bind(this));
    this._isRongHo = -1;
  },
  resetBetRongHo: function resetBetRongHo() {
    this._isRongHo = -1;
  },
  onEnable: function onEnable() {
    this.Timer.active = false;
    this.Result.active = false;

    this._stopEffectWinPot();

    this.listMyChipBet = [];

    for (var i = 0; i < this.listNodePot.length; i++) {
      this.listMyChipBet.push(this.listNodePot[i].getChildByName("mybet").getComponent(cc.Label));
    }

    this.listChipBet = [];

    for (var _i = 0; _i < this.listNodePot.length; _i++) {
      this.listChipBet.push(this.listNodePot[_i].getChildByName("pot").getComponent(cc.Label));
    }
  },
  getChipNode: function getChipNode() {
    for (var i = 0; i < this.poolChip.length; i++) {
      if (!this.poolChip[i].active) {
        this.poolChip[i].active = true;
        return this.poolChip[i];
      }
    }

    var chip = cc.instantiate(this.ChipPrefab);
    this.node.addChild(chip);
    chip.active = true;
    chip.scale = 0.33;
    this.poolChip.push(chip);
    return chip;
  },
  returnChipNode: function returnChipNode(chipNode) {
    chipNode.active = false;
  },
  _stopEffectWinPot: function _stopEffectWinPot() {
    for (var i = 0; i < this.listNodePot.length; i++) {
      var nodePot = this.listNodePot[i];
      var line = nodePot.getChildByName("Line-1");
      line.active = false;
    }
  },
  showListUsers: function showListUsers(listUserShow) {
    for (var i = 0; i < 6; i++) {
      var nodeUser = this.POS.getChildByName("pos_" + i);
      var lb_name = nodeUser.getChildByName("name").getComponent(cc.Label);
      var lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);
      var user = i >= listUserShow.length ? null : listUserShow[i];

      if (user && user.getVariable("role").value != "admin") {
        nodeUser.active = true;
        nodeUser._username = user.name;
        lb_name.string = GameVariables.getDisplayName(user);
        lb_money.string = Utils.addDotToNumber(GameVariables.getChip(user));

        if (user.isItMe) {
          Utils.loadRes(nodeUser.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + Config.getDefaultAvatar());
        } else {
          var rand = Math.floor(Math.random() * 9) + 1;
          Utils.loadRes(nodeUser.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + rand);
        }
      } else {
        nodeUser.active = false;
        nodeUser._username = null;
      }
    }
  },
  getPosFromName: function getPosFromName(username) {
    for (var i = 0; i < 6; i++) {
      var nodeUser = this.POS.getChildByName("pos_" + i);

      if (nodeUser.active && nodeUser._username && nodeUser._username == username) {
        return i;
      }
    }

    return 6;
  },
  updateUserCount: function updateUserCount() {
    var room = SmartFoxSDK.RongHoController.ZoneInstance.getRoomByName("rongho");
    var count = room.getUserList().length;

    if (count > 1) {
      if (cc.isValid(this.lb_countUser)) this.lb_countUser.string = count;
    }
  },
  showNotice: function showNotice(delay, content, cb) {
    this.Notice.active = true;
    this.Notice.stopAllActions();
    var self = this;
    this.Notice.getChildByName("lb_noti").getComponent(cc.Label).string = content;
    this.Notice.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(function () {
      self.Notice.active = false;
      if (cb) cb();
    })));
  },
  showToast: function showToast(delay, content) {
    this.Toast.active = true;
    this.Toast.stopAllActions();
    var self = this;
    this.Toast.getChildByName("lb_noti").getComponent(cc.Label).string = content;
    this.Toast.runAction(cc.sequence(cc.delayTime(delay), cc.callFunc(function () {
      self.Toast.active = false;
    })));
  },
  ToastDatCua: function ToastDatCua(cb) {
    this.isFirst = true;
    this.showNotice(2, "Đặt cửa", cb);
  },
  removeNodePlayer: function removeNodePlayer(user) {
    for (var i = 0; i < 6; i++) {
      var nodeUser = this.POS.getChildByName("pos_" + i);

      if (nodeUser._username == user.name) {
        nodeUser.active = false;
      }
    }
  },
  addNodePlayerEnterRoom: function addNodePlayerEnterRoom(user) {
    if (user && user.getVariable("role").value != "admin") {
      for (var i = 1; i < 6; i++) {
        var nodeUser = this.POS.getChildByName("pos_" + i);
        var lb_name = nodeUser.getChildByName("name").getComponent(cc.Label);
        var lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);

        if (!nodeUser.active) {
          nodeUser.active = true;
          nodeUser._username = user.name;
          lb_name.string = GameVariables.getDisplayName(user);
          lb_money.string = Utils.addDotToNumber(GameVariables.getChip(user));

          if (user.isItMe) {
            Utils.loadRes(nodeUser.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + Config.getDefaultAvatar());
          } else {
            var rand = Math.floor(Math.random() * 9) + 1;
            Utils.loadRes(nodeUser.getChildByName("avatar").getComponent(cc.Sprite), "images/avatar/" + rand);
          }

          break;
        }
      }
    }
  },
  updateChip: function updateChip(user) {
    for (var i = 0; i < 6; i++) {
      var nodeUser = this.POS.getChildByName("pos_" + i);
      var lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);

      if (nodeUser.active && nodeUser._username && nodeUser._username == user.name) {
        lb_money.string = Utils.addDotToNumber(GameVariables.getChip(user));
        return;
      }
    }
  },
  xocxoc: function xocxoc(result, winpot, isWin) {
    this._runEffectPotWin(winpot, isWin);

    this.Result.active = true;
    this.CardRong.getComponent("Card").reveal(new PokerCard.Card(result[0]));
    this.CardHo.getComponent("Card").reveal(new PokerCard.Card(result[1]));
  },
  _runEffectPotWin: function _runEffectPotWin(winPot, isWin) {
    if (winPot == null) return;

    for (var i = 0; i < winPot.length; i++) {
      if (winPot[i] >= 0 && winPot[i] <= 6) {
        var nodePot = this.listNodePot[winPot[i]];
        var line = nodePot.getChildByName("Line-1");
        line.active = true;
        var animation = line.getComponent(sp.Skeleton);
        animation.setAnimation(1, 'Idle', true);
      }
    }

    if (isWin) {
      var posUser = this.POS.children[0];
      var animationGame = posUser.getChildByName("InGame-Thang-2");
      var textGame = posUser.getChildByName("thang-text");
      var node_txt_win = posUser.getChildByName("money_win");
      node_txt_win.position = cc.v2(0, 0);
      node_txt_win.getComponent(cc.Label).string = "+" + Utils.addDotToNumber(SmartFoxSDK.RongHoController.m_tableInfo.winChip);
      node_txt_win.active = true;
      animationGame.active = true;
      textGame.active = true;
      animationGame.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
      var actionScale = cc.moveTo(1.5, cc.v2(0, 100));
      var scaleCallback = cc.sequence(actionScale, cc.delayTime(2.5), cc.callFunc(function () {
        animationGame.active = false;
        textGame.active = false;
        node_txt_win.active = false;
      }));
      node_txt_win.runAction(scaleCallback);
    }

    this._isDat = false;
  },
  _turnOnTime: function _turnOnTime(time, isBetting) {
    this.Timer.active = true;
    this.CardRong.getComponent("Card").init(null);
    this.CardHo.getComponent("Card").init(null);

    this._stopEffectWinPot();

    var js = this.Timer.getComponent(this.Timer.name);
    js.setTotalProgress(30);
    js.setCurrentProgress(time);
    js.turnOnTimer();
  },
  _turnOffTime: function _turnOffTime() {
    this.Timer.active = false;
  },
  showListMyChipBet: function showListMyChipBet(bets) {
    if (this._isHaveChipBet(bets)) {
      this._myChipBet = bets;
    } else {
      if (!this._isDatLast) this._myChipBet = bets;
      if (this._isDatLast) this._isDatLast = false;
    }

    for (var i = 0; i < bets.length; i++) {
      this.listMyChipBet[i].string = Utils.addDotToNumber(bets[i]);
    }
  },
  showListChipBet: function showListChipBet(bets) {
    for (var i = 0; i < bets.length; i++) {
      this.listChipBet[i].string = Utils.addDotToNumber(bets[i]);
    }
  },
  selectBetChip: function selectBetChip(event, betChip) {
    for (var i = 0; i < this.listNodeBet.length; i++) {
      this.listNodeBet[i].scale = 1;
      this.listNodeBet[i].getChildByName("label").color = cc.Color.WHITE;
    }

    this._currentBet = betChip;
    event.currentTarget.scale = 1.3;
    event.currentTarget.getChildByName("label").color = cc.Color.YELLOW;
  },
  requestBet: function requestBet(event, type) {
    if (!SmartFoxSDK.RongHoController.m_tableInfo.isBetting) {
      this.showToast(1, "Đang mở bài không được đặt");
      return;
    }

    type = parseInt(type);

    if (type == 0 || type == 2) {
      if (this._isRongHo >= 0 && type !== this._isRongHo) {
        this.showToast(1, "Không được phép đặt nhiều cửa");
        return;
      }

      this._isRongHo = type;
    }

    this._isDat = true;
    mm.audio.playDatCua();
    this.sendRequestBet(this._currentBet, type);
  },
  sendRequestBet: function sendRequestBet(bet, type) {
    this._currentType = type;
    this._isDatLast = true;

    if (this._currentType < 0 || this._currentType >= 7) {
      this.showToast(1, "Của đặt không hợp lệ");
    } else if (GameVariables.getChip(SmartFoxSDK.RongHoController.ZoneInstance.mySelf) < bet) {
      this.showToast(1, "Không đủ tiền!");
    } else {
      var betRequest = new RongHoRequest.BetRequest();
      betRequest.setBetChip(bet);
      betRequest.setTypePot(this._currentType);
      SmartFoxSDK.RongHoController.ZoneInstance.send(betRequest.toSRequest());
    }
  },
  actionFlyChipToPot: function actionFlyChipToPot(username, potType, money) {
    var _this = this;

    var pos = this.getPosFromName(username);
    var chipName = "chip2";

    if (money >= 1000 && money < 5000) {
      chipName = "chip1";
    } else if (money >= 5000 && money < 20000) {
      chipName = "chip2";
    } else if (money >= 20000 && money < 50000) {
      chipName = "chip3";
    } else if (money >= 100000 && money < 500000) {
      chipName = "chip4";
    } else if (money >= 500000) {
      chipName = "chip5";
    }

    var _loop = function _loop(i) {
      var chipNode = _this.getChipNode();

      Utils.loadRes(chipNode.getComponent(cc.Sprite), "images/xocdia/" + chipName);

      var nodeAvatar = _this.POS.getChildByName("pos_" + pos);

      chipNode.position = nodeAvatar.position;
      var nodeFrom = _this.listNodePot[potType];

      var posTo = _this.getPositionInOtherNode(nodeFrom, _this.node);

      var self = _this;
      chipNode.runAction(cc.sequence(cc.delayTime(i * 0.06), cc.moveTo(0.2, cc.v2(posTo.x, posTo.y)), cc.callFunc(function () {
        self.returnChipNode(this);
      }, chipNode)));
    };

    for (var i = 0; i < 3; i++) {
      _loop(i);
    }
  },
  clickExitRoom: function clickExitRoom(event) {
    var room = SmartFoxSDK.RongHoController.ZoneInstance.getRoomByName("rongho");

    if (room) {
      SmartFoxSDK.RongHoController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
      mm.Loading.show();
    } else {
      UIManger.show("UIHome");
    }
  },
  eventShowMenu: function eventShowMenu() {
    this.ListMenu.active = !this.ListMenu.active;
  },
  eventRank: function eventRank() {
    mm.Loading.show();
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.RongHoController.ZoneInstance.send(request.toSRequest());
  },
  eventHelper: function eventHelper() {
    this.show("UIRongHoHelper", {
      pop: true,
      src: 'rongho'
    });
  },
  eventHistory: function eventHistory() {
    mm.Loading.show();
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.RongHoController.ZoneInstance.send(request.toSRequest());
  },
  eventGapThep: function eventGapThep() {
    if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
      if (!SmartFoxSDK.RongHoController.m_tableInfo.isBetting) {
        this.showToast(1, "Đang trả thưởng, không được cược");
        return;
      }

      this._isDat = true;

      for (var i = 0; i < this._myChipBet.length; i++) {
        if (this._myChipBet[i] > 0) this.sendRequestBet(2 * this._myChipBet[i], i);
      }
    }
  },
  eventDatLai: function eventDatLai() {
    if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
      if (!SmartFoxSDK.RongHoController.m_tableInfo.isBetting) {
        this.showToast(1, "Đang trả thưởng, không được cược");
        return;
      }

      this._isDat = true;

      for (var i = 0; i < this._myChipBet.length; i++) {
        if (this._myChipBet[i] > 0) this.sendRequestBet(this._myChipBet[i], i);
      }
    }
  },
  _isHaveChipBet: function _isHaveChipBet(listChipBet) {
    var haveChip = false;

    for (var i = 0; i < listChipBet.length; i++) {
      if (listChipBet[i] > 0) {
        haveChip = true;
        return haveChip;
      }
    }

    return haveChip;
  },
  eventShowChat: function eventShowChat(event, data) {
    this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
    if (this.ChatEmojiLayer.active) this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.RongHoController.ZoneInstance);
  },
  onPublicMessage: function onPublicMessage(messData) {
    var msgItem = messData.msg;
    var pos = this.getPosFromName(messData.sender.name);
    var emojiBox = this.POS.children[pos].getChildByName("EMOJ");

    if (emojiBox != undefined) {
      var self = this;
      var isEmoij = msgItem.indexOf("emoij_") >= 0;
      var emojiNode = emojiBox.getChildByName("EMOJ");
      var boxNode = emojiBox.getChildByName("box");
      emojiNode.active = false;
      boxNode.active = false;

      if (isEmoij) {
        emojiNode.active = true;
        emojiNode.opacity = 255;
        var type = msgItem.replace("emoij_", "");
        emojiNode.stopAllActions();
        emojiNode.getComponent(sp.Skeleton).setAnimation(0, type, false);
        emojiNode.runAction(cc.sequence(cc.delayTime(1.5), cc.fadeOut(2), cc.callFunc(function () {
          emojiNode.active = false;
        })));
      } else {
        boxNode.active = true;
        boxNode.opacity = 255;
        boxNode.stopAllActions();
        boxNode.getChildByName("lb_chat").getComponent(cc.Label).string = msgItem;
        boxNode.getComponent(cc.Layout).updateLayout();
        boxNode.runAction(cc.sequence(cc.delayTime(2), cc.fadeOut(2), cc.callFunc(function () {
          boxNode.active = false;
        })));
      }
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    var nodeUser = this.POS.children[0];
    nodeUser.getChildByName("money").getComponent(cc.Label).string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.RongHoController.ZoneInstance.mySelf) - subChip);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm9uZ2hvXFxVSVJvbmdIby5qcyJdLCJuYW1lcyI6WyJQb2tlckNhcmQiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiQ2hhdEVtb2ppTGF5ZXIiLCJOb2RlIiwibGlzdE5vZGVCZXQiLCJ0eXBlIiwibGlzdE5vZGVQb3QiLCJfbXlDaGlwQmV0IiwiX2N1cnJlbnRUeXBlIiwiX2N1cnJlbnRCZXQiLCJUaW1lciIsIkNoaXBQcmVmYWIiLCJQcmVmYWIiLCJQT1MiLCJSZXN1bHQiLCJDYXJkUm9uZyIsIkNhcmRIbyIsIkxpc3RNZW51IiwiTm90aWNlIiwiVG9hc3QiLCJsYl9jb3VudFVzZXIiLCJMYWJlbCIsIl9pc1JvbmdIbyIsIm9uTG9hZCIsIl9pc0RhdCIsIl9pc0RhdExhc3QiLCJwb29sQ2hpcCIsImkiLCJjaGlwIiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJhY3RpdmUiLCJzY2FsZSIsInB1c2giLCJnYW1lIiwib24iLCJFVkVOVF9TSE9XIiwiU21hcnRGb3hTREsiLCJSb25nSG9Db250cm9sbGVyIiwicmVzdW1lR2FtZSIsImJpbmQiLCJyZXNldEJldFJvbmdIbyIsIm9uRW5hYmxlIiwiX3N0b3BFZmZlY3RXaW5Qb3QiLCJsaXN0TXlDaGlwQmV0IiwibGVuZ3RoIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJsaXN0Q2hpcEJldCIsImdldENoaXBOb2RlIiwicmV0dXJuQ2hpcE5vZGUiLCJjaGlwTm9kZSIsIm5vZGVQb3QiLCJsaW5lIiwic2hvd0xpc3RVc2VycyIsImxpc3RVc2VyU2hvdyIsIm5vZGVVc2VyIiwibGJfbmFtZSIsImxiX21vbmV5IiwidXNlciIsImdldFZhcmlhYmxlIiwidmFsdWUiLCJfdXNlcm5hbWUiLCJuYW1lIiwic3RyaW5nIiwiR2FtZVZhcmlhYmxlcyIsImdldERpc3BsYXlOYW1lIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsImdldENoaXAiLCJpc0l0TWUiLCJsb2FkUmVzIiwiU3ByaXRlIiwiQ29uZmlnIiwiZ2V0RGVmYXVsdEF2YXRhciIsInJhbmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJnZXRQb3NGcm9tTmFtZSIsInVzZXJuYW1lIiwidXBkYXRlVXNlckNvdW50Iiwicm9vbSIsIlpvbmVJbnN0YW5jZSIsImdldFJvb21CeU5hbWUiLCJjb3VudCIsImdldFVzZXJMaXN0IiwiaXNWYWxpZCIsInNob3dOb3RpY2UiLCJkZWxheSIsImNvbnRlbnQiLCJjYiIsInN0b3BBbGxBY3Rpb25zIiwic2VsZiIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwiY2FsbEZ1bmMiLCJzaG93VG9hc3QiLCJUb2FzdERhdEN1YSIsImlzRmlyc3QiLCJyZW1vdmVOb2RlUGxheWVyIiwiYWRkTm9kZVBsYXllckVudGVyUm9vbSIsInVwZGF0ZUNoaXAiLCJ4b2N4b2MiLCJyZXN1bHQiLCJ3aW5wb3QiLCJpc1dpbiIsIl9ydW5FZmZlY3RQb3RXaW4iLCJyZXZlYWwiLCJDYXJkIiwid2luUG90IiwiYW5pbWF0aW9uIiwic3AiLCJTa2VsZXRvbiIsInNldEFuaW1hdGlvbiIsInBvc1VzZXIiLCJjaGlsZHJlbiIsImFuaW1hdGlvbkdhbWUiLCJ0ZXh0R2FtZSIsIm5vZGVfdHh0X3dpbiIsInBvc2l0aW9uIiwidjIiLCJtX3RhYmxlSW5mbyIsIndpbkNoaXAiLCJhY3Rpb25TY2FsZSIsIm1vdmVUbyIsInNjYWxlQ2FsbGJhY2siLCJfdHVybk9uVGltZSIsInRpbWUiLCJpc0JldHRpbmciLCJpbml0IiwianMiLCJzZXRUb3RhbFByb2dyZXNzIiwic2V0Q3VycmVudFByb2dyZXNzIiwidHVybk9uVGltZXIiLCJfdHVybk9mZlRpbWUiLCJzaG93TGlzdE15Q2hpcEJldCIsImJldHMiLCJfaXNIYXZlQ2hpcEJldCIsInNob3dMaXN0Q2hpcEJldCIsInNlbGVjdEJldENoaXAiLCJldmVudCIsImJldENoaXAiLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJjdXJyZW50VGFyZ2V0IiwiWUVMTE9XIiwicmVxdWVzdEJldCIsInBhcnNlSW50IiwibW0iLCJhdWRpbyIsInBsYXlEYXRDdWEiLCJzZW5kUmVxdWVzdEJldCIsImJldCIsIm15U2VsZiIsImJldFJlcXVlc3QiLCJSb25nSG9SZXF1ZXN0IiwiQmV0UmVxdWVzdCIsInNldEJldENoaXAiLCJzZXRUeXBlUG90Iiwic2VuZCIsInRvU1JlcXVlc3QiLCJhY3Rpb25GbHlDaGlwVG9Qb3QiLCJwb3RUeXBlIiwibW9uZXkiLCJwb3MiLCJjaGlwTmFtZSIsIm5vZGVBdmF0YXIiLCJub2RlRnJvbSIsInBvc1RvIiwiZ2V0UG9zaXRpb25Jbk90aGVyTm9kZSIsIngiLCJ5IiwiY2xpY2tFeGl0Um9vbSIsIlNtYXJ0Rm94IiwiUmVxdWVzdHMiLCJTeXN0ZW0iLCJMZWF2ZVJvb21SZXF1ZXN0IiwiTG9hZGluZyIsInNob3ciLCJVSU1hbmdlciIsImV2ZW50U2hvd01lbnUiLCJldmVudFJhbmsiLCJyZXF1ZXN0IiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImV2ZW50SGVscGVyIiwicG9wIiwic3JjIiwiZXZlbnRIaXN0b3J5IiwiSGlzdG9yeVJlcXVlc3QiLCJldmVudEdhcFRoZXAiLCJldmVudERhdExhaSIsImhhdmVDaGlwIiwiZXZlbnRTaG93Q2hhdCIsImRhdGEiLCJpbml0Q29udHJvbGxlciIsIm9uUHVibGljTWVzc2FnZSIsIm1lc3NEYXRhIiwibXNnSXRlbSIsIm1zZyIsInNlbmRlciIsImVtb2ppQm94IiwidW5kZWZpbmVkIiwiaXNFbW9paiIsImluZGV4T2YiLCJlbW9qaU5vZGUiLCJib3hOb2RlIiwib3BhY2l0eSIsInJlcGxhY2UiLCJmYWRlT3V0IiwiTGF5b3V0IiwidXBkYXRlTGF5b3V0IiwidXBkYXRlVXNlclZhcmlhYmxlIiwic3ViQ2hpcCIsIlBva2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNB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QixHQUFuQjtBQUNBRCxRQUFBQSxPQUFPLENBQUNySCxjQUFSO0FBQ0FxSCxRQUFBQSxPQUFPLENBQUNuSyxjQUFSLENBQXVCLFNBQXZCLEVBQWtDQyxZQUFsQyxDQUErQ2xELEVBQUUsQ0FBQ3VCLEtBQWxELEVBQXlENEMsTUFBekQsR0FBa0V5SSxPQUFsRTtBQUNBUSxRQUFBQSxPQUFPLENBQUNsSyxZQUFSLENBQXFCbEQsRUFBRSxDQUFDd04sTUFBeEIsRUFBZ0NDLFlBQWhDO0FBQ0FMLFFBQUFBLE9BQU8sQ0FBQ25ILFNBQVIsQ0FBa0JqRyxFQUFFLENBQUNrRyxRQUFILENBQVlsRyxFQUFFLENBQUNtRyxTQUFILENBQWEsQ0FBYixDQUFaLEVBQTZCbkcsRUFBRSxDQUFDdU4sT0FBSCxDQUFXLENBQVgsQ0FBN0IsRUFBNEN2TixFQUFFLENBQUNvRyxRQUFILENBQVksWUFBWTtBQUNsRmdILFVBQUFBLE9BQU8sQ0FBQ2xMLE1BQVIsR0FBaUIsS0FBakI7QUFDSCxTQUY2RCxDQUE1QyxDQUFsQjtBQUdIO0FBQ0o7QUFDSixHQS9hSTtBQWdiTHdMLEVBQUFBLGtCQWhiSyw4QkFnYmNDLE9BaGJkLEVBZ2JzQjtBQUN2QixRQUFJaEssUUFBUSxHQUFHLEtBQUs1QyxHQUFMLENBQVN5RyxRQUFULENBQWtCLENBQWxCLENBQWY7QUFDQTdELElBQUFBLFFBQVEsQ0FBQ1YsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0MsWUFBakMsQ0FBOENsRCxFQUFFLENBQUN1QixLQUFqRCxFQUF3RDRDLE1BQXhELEdBQWtFRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUJILGFBQWEsQ0FBQ3dKLEtBQWQsQ0FBb0JwSixPQUFwQixDQUE0QmhDLFdBQVcsQ0FBQ0MsZ0JBQVosQ0FBNkI2QyxZQUE3QixDQUEwQ3lFLE1BQXRFLElBQThFNEQsT0FBbkcsQ0FBbEU7QUFDSDtBQW5iSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUG9rZXJDYXJkID0gcmVxdWlyZSgnUG9rZXJDYXJkJyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIENoYXRFbW9qaUxheWVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxpc3ROb2RlQmV0OiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaXN0Tm9kZVBvdDoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX215Q2hpcEJldCA6IFtdLFxyXG4gICAgICAgIF9jdXJyZW50VHlwZSA6IC0xLFxyXG4gICAgICAgIF9jdXJyZW50QmV0OiAxMDAwLFxyXG4gICAgICAgIFRpbWVyOiBjYy5Ob2RlLFxyXG4gICAgICAgIENoaXBQcmVmYWI6IGNjLlByZWZhYixcclxuICAgICAgICBQT1M6IGNjLk5vZGUsXHJcbiAgICAgICAgUmVzdWx0OiBjYy5Ob2RlLFxyXG4gICAgICAgIENhcmRSb25nOiBjYy5Ob2RlLFxyXG4gICAgICAgIENhcmRIbzogY2MuTm9kZSxcclxuICAgICAgICBMaXN0TWVudTogY2MuTm9kZSxcclxuICAgICAgICBOb3RpY2U6IGNjLk5vZGUsXHJcbiAgICAgICAgVG9hc3Q6IGNjLk5vZGUsXHJcbiAgICAgICAgbGJfY291bnRVc2VyOiBjYy5MYWJlbCxcclxuICAgICAgICBfaXNSb25nSG86IC0xXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEJldCA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5fbXlDaGlwQmV0ICAgICA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2lzRGF0ICAgICAgICAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9pc0RhdExhc3QgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wb29sQ2hpcCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyMDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQ2hpcFByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlwKTtcclxuICAgICAgICAgICAgY2hpcC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2hpcC5zY2FsZSA9IDAuMzM7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbENoaXAucHVzaChjaGlwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubm9kZSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgU21hcnRGb3hTREsuUm9uZ0hvQ29udHJvbGxlci5yZXN1bWVHYW1lKCk7XHJcbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLl9pc1JvbmdIbyA9IC0xO1xyXG4gICAgfSxcclxuICAgIHJlc2V0QmV0Um9uZ0hvKCl7XHJcbiAgICAgICAgdGhpcy5faXNSb25nSG8gPSAtMTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMuVGltZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5SZXN1bHQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fc3RvcEVmZmVjdFdpblBvdCgpO1xyXG4gICAgICAgIHRoaXMubGlzdE15Q2hpcEJldCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3ROb2RlUG90Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RNeUNoaXBCZXQucHVzaCh0aGlzLmxpc3ROb2RlUG90W2ldLmdldENoaWxkQnlOYW1lKFwibXliZXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlzdENoaXBCZXQgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Tm9kZVBvdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hpcEJldC5wdXNoKHRoaXMubGlzdE5vZGVQb3RbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJwb3RcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGdldENoaXBOb2RlKCl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucG9vbENoaXAubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnBvb2xDaGlwW2ldLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xDaGlwW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wb29sQ2hpcFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQ2hpcFByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoaXApO1xyXG4gICAgICAgIGNoaXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBjaGlwLnNjYWxlID0gMC4zMztcclxuICAgICAgICB0aGlzLnBvb2xDaGlwLnB1c2goY2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaXA7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuQ2hpcE5vZGUoY2hpcE5vZGUpe1xyXG4gICAgICAgIGNoaXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIF9zdG9wRWZmZWN0V2luUG90KCl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE5vZGVQb3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlUG90ID0gdGhpcy5saXN0Tm9kZVBvdFtpXTtcclxuICAgICAgICAgICAgbGV0IGxpbmUgPSBub2RlUG90LmdldENoaWxkQnlOYW1lKFwiTGluZS0xXCIpO1xyXG4gICAgICAgICAgICBsaW5lLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93TGlzdFVzZXJzKGxpc3RVc2VyU2hvdyl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDY7aSsrKXtcclxuICAgICAgICAgICAgbGV0IG5vZGVVc2VyID0gdGhpcy5QT1MuZ2V0Q2hpbGRCeU5hbWUoXCJwb3NfXCIraSk7XHJcbiAgICAgICAgICAgIGxldCBsYl9uYW1lID0gbm9kZVVzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGxldCBsYl9tb25leSA9IG5vZGVVc2VyLmdldENoaWxkQnlOYW1lKFwibW9uZXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgbGV0IHVzZXIgPSAoaSA+PSBsaXN0VXNlclNob3cubGVuZ3RoKSA/IG51bGwgOiBsaXN0VXNlclNob3dbaV07XHJcbiAgICAgICAgICAgIGlmKHVzZXIgJiYgKHVzZXIuZ2V0VmFyaWFibGUoXCJyb2xlXCIpLnZhbHVlICE9IFwiYWRtaW5cIikpe1xyXG4gICAgICAgICAgICAgICAgbm9kZVVzZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIG5vZGVVc2VyLl91c2VybmFtZSA9IHVzZXIubmFtZTtcclxuICAgICAgICAgICAgICAgIGxiX25hbWUuc3RyaW5nID0gR2FtZVZhcmlhYmxlcy5nZXREaXNwbGF5TmFtZSh1c2VyKTtcclxuICAgICAgICAgICAgICAgIGxiX21vbmV5LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuZ2V0Q2hpcCh1c2VyKSk7XHJcbiAgICAgICAgICAgICAgICBpZih1c2VyLmlzSXRNZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMubG9hZFJlcyhub2RlVXNlci5nZXRDaGlsZEJ5TmFtZShcImF2YXRhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgXCJpbWFnZXMvYXZhdGFyL1wiK0NvbmZpZy5nZXREZWZhdWx0QXZhdGFyKCkpO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiA5KSArIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLmxvYWRSZXMobm9kZVVzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhdmF0YXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIFwiaW1hZ2VzL2F2YXRhci9cIityYW5kKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBub2RlVXNlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5vZGVVc2VyLl91c2VybmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zRnJvbU5hbWUodXNlcm5hbWUpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2O2krKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlVXNlciA9IHRoaXMuUE9TLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK2kpO1xyXG4gICAgICAgICAgICBpZihub2RlVXNlci5hY3RpdmUgJiYgbm9kZVVzZXIuX3VzZXJuYW1lICYmIG5vZGVVc2VyLl91c2VybmFtZSA9PSB1c2VybmFtZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gNiA7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVXNlckNvdW50KCl7XHJcbiAgICAgICAgbGV0IHJvb20gPSBTbWFydEZveFNESy5Sb25nSG9Db250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwicm9uZ2hvXCIpO1xyXG4gICAgICAgIGxldCBjb3VudCA9IHJvb20uZ2V0VXNlckxpc3QoKS5sZW5ndGg7XHJcbiAgICAgICAgaWYgKGNvdW50ID4gMSl7XHJcbiAgICAgICAgICAgIGlmKGNjLmlzVmFsaWQodGhpcy5sYl9jb3VudFVzZXIpKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYl9jb3VudFVzZXIuc3RyaW5nID0gY291bnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dOb3RpY2UoZGVsYXksIGNvbnRlbnQsIGNiKSB7XHJcbiAgICAgICAgdGhpcy5Ob3RpY2UuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vdGljZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLk5vdGljZS5nZXRDaGlsZEJ5TmFtZShcImxiX25vdGlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBjb250ZW50O1xyXG4gICAgICAgIHRoaXMuTm90aWNlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoZGVsYXkpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHNlbGYuTm90aWNlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZihjYilcclxuICAgICAgICAgICAgICAgIGNiKCk7XHJcbiAgICAgICAgfSkpKTtcclxuICAgIH0sXHJcbiAgICBzaG93VG9hc3QoZGVsYXksIGNvbnRlbnQpIHtcclxuICAgICAgICB0aGlzLlRvYXN0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ub2FzdC5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLlRvYXN0LmdldENoaWxkQnlOYW1lKFwibGJfbm90aVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGNvbnRlbnQ7XHJcbiAgICAgICAgdGhpcy5Ub2FzdC5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGRlbGF5KSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLlRvYXN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9LFxyXG4gICAgVG9hc3REYXRDdWEoY2Ipe1xyXG4gICAgICAgIHRoaXMuaXNGaXJzdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93Tm90aWNlKDIsIFwixJDhurd0IGPhu61hXCIsIGNiKTtcclxuICAgIH0sXHJcbiAgICByZW1vdmVOb2RlUGxheWVyKHVzZXIpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2O2krKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlVXNlciA9IHRoaXMuUE9TLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK2kpO1xyXG4gICAgICAgICAgICBpZihub2RlVXNlci5fdXNlcm5hbWUgPT0gdXNlci5uYW1lKXtcclxuICAgICAgICAgICAgICAgIG5vZGVVc2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZE5vZGVQbGF5ZXJFbnRlclJvb20odXNlcil7XHJcbiAgICAgICAgaWYgKHVzZXIgJiYgKHVzZXIuZ2V0VmFyaWFibGUoXCJyb2xlXCIpLnZhbHVlICE9IFwiYWRtaW5cIikpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgNjtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVVc2VyID0gdGhpcy5QT1MuZ2V0Q2hpbGRCeU5hbWUoXCJwb3NfXCIraSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGJfbmFtZSA9IG5vZGVVc2VyLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxiX21vbmV5ID0gbm9kZVVzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgaWYoIW5vZGVVc2VyLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZVVzZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBub2RlVXNlci5fdXNlcm5hbWUgPSB1c2VyLm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGJfbmFtZS5zdHJpbmcgPSBHYW1lVmFyaWFibGVzLmdldERpc3BsYXlOYW1lKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxiX21vbmV5LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuZ2V0Q2hpcCh1c2VyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodXNlci5pc0l0TWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5sb2FkUmVzKG5vZGVVc2VyLmdldENoaWxkQnlOYW1lKFwiYXZhdGFyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBcImltYWdlcy9hdmF0YXIvXCIrQ29uZmlnLmdldERlZmF1bHRBdmF0YXIoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByYW5kID0gKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSogOSkgKyAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMubG9hZFJlcyhub2RlVXNlci5nZXRDaGlsZEJ5TmFtZShcImF2YXRhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgXCJpbWFnZXMvYXZhdGFyL1wiK3JhbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVDaGlwKHVzZXIpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA2O2krKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlVXNlciA9IHRoaXMuUE9TLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK2kpO1xyXG4gICAgICAgICAgICBsZXQgbGJfbW9uZXkgPSBub2RlVXNlci5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGlmKG5vZGVVc2VyLmFjdGl2ZSAmJiBub2RlVXNlci5fdXNlcm5hbWUgJiYgbm9kZVVzZXIuX3VzZXJuYW1lID09IHVzZXIubmFtZSl7XHJcbiAgICAgICAgICAgICAgICBsYl9tb25leS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLmdldENoaXAodXNlcikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHhvY3hvYyhyZXN1bHQsIHdpbnBvdCwgaXNXaW4pe1xyXG4gICAgICAgIHRoaXMuX3J1bkVmZmVjdFBvdFdpbih3aW5wb3QsIGlzV2luKTtcclxuICAgICAgICB0aGlzLlJlc3VsdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQ2FyZFJvbmcuZ2V0Q29tcG9uZW50KFwiQ2FyZFwiKS5yZXZlYWwobmV3IFBva2VyQ2FyZC5DYXJkKHJlc3VsdFswXSkpO1xyXG4gICAgICAgIHRoaXMuQ2FyZEhvLmdldENvbXBvbmVudChcIkNhcmRcIikucmV2ZWFsKG5ldyBQb2tlckNhcmQuQ2FyZChyZXN1bHRbMV0pKTtcclxuICAgIH0sXHJcbiAgICBfcnVuRWZmZWN0UG90V2luKHdpblBvdCwgaXNXaW4pe1xyXG4gICAgICAgIGlmKHdpblBvdCA9PSBudWxsKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdpblBvdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYod2luUG90W2ldID49IDAgJiYgd2luUG90W2ldIDw9IDYpe1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGVQb3QgPSB0aGlzLmxpc3ROb2RlUG90W3dpblBvdFtpXV07XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IG5vZGVQb3QuZ2V0Q2hpbGRCeU5hbWUoXCJMaW5lLTFcIik7XHJcbiAgICAgICAgICAgICAgICBsaW5lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gbGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLnNldEFuaW1hdGlvbigxLCAnSWRsZScsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1dpbil7XHJcbiAgICAgICAgICAgIGxldCBwb3NVc2VyICAgICAgID0gdGhpcy5QT1MuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb25HYW1lID0gcG9zVXNlci5nZXRDaGlsZEJ5TmFtZShcIkluR2FtZS1UaGFuZy0yXCIpO1xyXG4gICAgICAgICAgICBsZXQgdGV4dEdhbWUgICAgICA9IHBvc1VzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0aGFuZy10ZXh0XCIpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZV90eHRfd2luID0gcG9zVXNlci5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5X3dpblwiKTtcclxuICAgICAgICAgICAgbm9kZV90eHRfd2luLnBvc2l0aW9uID0gY2MudjIoMCwgMCk7XHJcbiAgICAgICAgICAgIG5vZGVfdHh0X3dpbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK1V0aWxzLmFkZERvdFRvTnVtYmVyKFNtYXJ0Rm94U0RLLlJvbmdIb0NvbnRyb2xsZXIubV90YWJsZUluZm8ud2luQ2hpcCk7XHJcbiAgICAgICAgICAgIG5vZGVfdHh0X3dpbi5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbmltYXRpb25HYW1lLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRleHRHYW1lLmFjdGl2ZSAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgYW5pbWF0aW9uR2FtZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIGxldCBhY3Rpb25TY2FsZSA9ICAgY2MubW92ZVRvKDEuNSwgY2MudjIoMCwgMTAwKSk7XHJcbiAgICAgICAgICAgIGxldCBzY2FsZUNhbGxiYWNrID0gIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uU2NhbGUsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMi41KSxcclxuICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25HYW1lLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRHYW1lLmFjdGl2ZSAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZV90eHRfd2luLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgbm9kZV90eHRfd2luLnJ1bkFjdGlvbihzY2FsZUNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5faXNEYXQgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBfdHVybk9uVGltZSh0aW1lLCBpc0JldHRpbmcpe1xyXG4gICAgICAgIHRoaXMuVGltZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLkNhcmRSb25nLmdldENvbXBvbmVudChcIkNhcmRcIikuaW5pdChudWxsKTtcclxuICAgICAgICB0aGlzLkNhcmRIby5nZXRDb21wb25lbnQoXCJDYXJkXCIpLmluaXQobnVsbCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcEVmZmVjdFdpblBvdCgpO1xyXG4gICAgICAgIGxldCBqcyA9IHRoaXMuVGltZXIuZ2V0Q29tcG9uZW50KHRoaXMuVGltZXIubmFtZSk7XHJcbiAgICAgICAganMuc2V0VG90YWxQcm9ncmVzcygzMCk7XHJcbiAgICAgICAganMuc2V0Q3VycmVudFByb2dyZXNzKHRpbWUpO1xyXG4gICAgICAgIGpzLnR1cm5PblRpbWVyKCk7XHJcbiAgICB9LFxyXG4gICAgX3R1cm5PZmZUaW1lKCl7XHJcbiAgICAgICAgdGhpcy5UaW1lci5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93TGlzdE15Q2hpcEJldChiZXRzKXtcclxuICAgICAgICBpZiAodGhpcy5faXNIYXZlQ2hpcEJldChiZXRzKSl7XHJcbiAgICAgICAgICAgIHRoaXMuX215Q2hpcEJldCA9IGJldHM7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2lzRGF0TGFzdClcclxuICAgICAgICAgICAgICAgIHRoaXMuX215Q2hpcEJldCA9IGJldHM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0RhdExhc3QpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0RhdExhc3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGJldHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdE15Q2hpcEJldFtpXS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihiZXRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd0xpc3RDaGlwQmV0KGJldHMpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBiZXRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RDaGlwQmV0W2ldLnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGJldHNbaV0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZWxlY3RCZXRDaGlwKGV2ZW50LCBiZXRDaGlwKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Tm9kZUJldC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0Tm9kZUJldFtpXS5zY2FsZSA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdE5vZGVCZXRbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9jdXJyZW50QmV0ID0gYmV0Q2hpcDtcclxuXHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5zY2FsZSA9IDEuMztcclxuICAgICAgICBldmVudC5jdXJyZW50VGFyZ2V0LmdldENoaWxkQnlOYW1lKFwibGFiZWxcIikuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICB9LFxyXG4gICAgcmVxdWVzdEJldChldmVudCwgdHlwZSl7XHJcbiAgICAgICAgaWYoIVNtYXJ0Rm94U0RLLlJvbmdIb0NvbnRyb2xsZXIubV90YWJsZUluZm8uaXNCZXR0aW5nKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoMSwgXCLEkGFuZyBt4bufIGLDoGkga2jDtG5nIMSRxrDhu6NjIMSR4bq3dFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0eXBlID0gcGFyc2VJbnQodHlwZSk7XHJcblxyXG4gICAgICAgIGlmICh0eXBlID09IDAgfHwgdHlwZSA9PSAyKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc1JvbmdIbyA+PTAgJiYgdHlwZSAhPT0gIHRoaXMuX2lzUm9uZ0hvKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KDEsIFwiS2jDtG5nIMSRxrDhu6NjIHBow6lwIMSR4bq3dCBuaGnhu4F1IGPhu61hXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2lzUm9uZ0hvICAgICA9IHR5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2lzRGF0ICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheURhdEN1YSgpO1xyXG4gICAgICAgIHRoaXMuc2VuZFJlcXVlc3RCZXQodGhpcy5fY3VycmVudEJldCwgdHlwZSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZFJlcXVlc3RCZXQoYmV0LCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuX2lzRGF0TGFzdCAgICA9IHRydWU7XHJcbiAgICAgICAgaWYodGhpcy5fY3VycmVudFR5cGUgPCAwIHx8IHRoaXMuX2N1cnJlbnRUeXBlID49IDcpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdCgxLCBcIkPhu6dhIMSR4bq3dCBraMO0bmcgaOG7o3AgbOG7h1wiKTtcclxuICAgICAgICB9ZWxzZSBpZihHYW1lVmFyaWFibGVzLmdldENoaXAoU21hcnRGb3hTREsuUm9uZ0hvQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSA8IGJldCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KDEsIFwiS2jDtG5nIMSR4bunIHRp4buBbiFcIik7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxldCBiZXRSZXF1ZXN0ID0gbmV3IFJvbmdIb1JlcXVlc3QuQmV0UmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBiZXRSZXF1ZXN0LnNldEJldENoaXAoYmV0KTtcclxuICAgICAgICAgICAgYmV0UmVxdWVzdC5zZXRUeXBlUG90KHRoaXMuX2N1cnJlbnRUeXBlKTtcclxuICAgICAgICAgICAgU21hcnRGb3hTREsuUm9uZ0hvQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChiZXRSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZseUNoaXBUb1BvdCh1c2VybmFtZSwgcG90VHlwZSwgbW9uZXkpe1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvc0Zyb21OYW1lKHVzZXJuYW1lKTtcclxuICAgICAgICBsZXQgY2hpcE5hbWUgPSBcImNoaXAyXCI7XHJcbiAgICAgICAgaWYobW9uZXkgPj0gMTAwMCAmJiBtb25leSA8IDUwMDApe1xyXG4gICAgICAgICAgICBjaGlwTmFtZSA9IFwiY2hpcDFcIjtcclxuICAgICAgICB9ZWxzZSBpZihtb25leSA+PSA1MDAwICYmIG1vbmV5IDwgMjAwMDApe1xyXG4gICAgICAgICAgICBjaGlwTmFtZSA9IFwiY2hpcDJcIjtcclxuICAgICAgICB9ZWxzZSBpZihtb25leSA+PSAyMDAwMCAmJiBtb25leSA8IDUwMDAwKXtcclxuICAgICAgICAgICAgY2hpcE5hbWUgPSBcImNoaXAzXCI7XHJcbiAgICAgICAgfWVsc2UgaWYobW9uZXkgPj0gMTAwMDAwICYmIG1vbmV5IDwgNTAwMDAwKXtcclxuICAgICAgICAgICAgY2hpcE5hbWUgPSBcImNoaXA0XCI7XHJcbiAgICAgICAgfWVsc2UgaWYobW9uZXkgPj0gNTAwMDAwKXtcclxuICAgICAgICAgICAgY2hpcE5hbWUgPSBcImNoaXA1XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7ICBpIDwgMzsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaXBOb2RlID0gdGhpcy5nZXRDaGlwTm9kZSgpO1xyXG4gICAgICAgICAgICBVdGlscy5sb2FkUmVzKGNoaXBOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLFwiaW1hZ2VzL3hvY2RpYS9cIitjaGlwTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBub2RlQXZhdGFyID0gdGhpcy5QT1MuZ2V0Q2hpbGRCeU5hbWUoXCJwb3NfXCIrcG9zKTtcclxuICAgICAgICAgICAgY2hpcE5vZGUucG9zaXRpb24gPSBub2RlQXZhdGFyLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBsZXQgbm9kZUZyb20gPSB0aGlzLmxpc3ROb2RlUG90W3BvdFR5cGVdO1xyXG4gICAgICAgICAgICBsZXQgcG9zVG8gPSB0aGlzLmdldFBvc2l0aW9uSW5PdGhlck5vZGUobm9kZUZyb20sIHRoaXMubm9kZSk7XHJcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgY2hpcE5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpKjAuMDYpLCBjYy5tb3ZlVG8oMC4yLCBjYy52Mihwb3NUby54LCBwb3NUby55KSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYucmV0dXJuQ2hpcE5vZGUodGhpcyk7XHJcbiAgICAgICAgICAgIH0sIGNoaXBOb2RlKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGlja0V4aXRSb29tKGV2ZW50KXtcclxuICAgICAgICBsZXQgcm9vbSA9IFNtYXJ0Rm94U0RLLlJvbmdIb0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJyb25naG9cIik7XHJcbiAgICAgICAgaWYocm9vbSl7XHJcbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlJvbmdIb0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQobmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5MZWF2ZVJvb21SZXF1ZXN0KHJvb20pKTtcclxuICAgICAgICAgICAgbW0uTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSUhvbWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50U2hvd01lbnUoKSB7XHJcbiAgICAgICAgdGhpcy5MaXN0TWVudS5hY3RpdmUgPSAhdGhpcy5MaXN0TWVudS5hY3RpdmU7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRSYW5rKCkge1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IENhc2lub1JlcXVlc3QuTGVhZGVyQm9hcmRSZXF1ZXN0KCk7XHJcbiAgICAgICAgU21hcnRGb3hTREsuUm9uZ0hvQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSlcclxuICAgIH0sXHJcbiAgICBldmVudEhlbHBlcigpIHtcclxuICAgICAgICB0aGlzLnNob3coXCJVSVJvbmdIb0hlbHBlclwiLCB7cG9wOiB0cnVlLCBzcmM6ICdyb25naG8nfSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRIaXN0b3J5KCkge1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IENhc2lub1JlcXVlc3QuSGlzdG9yeVJlcXVlc3QoKTtcclxuICAgICAgICBTbWFydEZveFNESy5Sb25nSG9Db250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcclxuICAgIH0sXHJcbiAgICBldmVudEdhcFRoZXAoKXtcclxuICAgICAgICBpZiAodGhpcy5faXNIYXZlQ2hpcEJldCh0aGlzLl9teUNoaXBCZXQpICYmICAhdGhpcy5faXNEYXQpe1xyXG4gICAgICAgICAgICBpZighU21hcnRGb3hTREsuUm9uZ0hvQ29udHJvbGxlci5tX3RhYmxlSW5mby5pc0JldHRpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoMSwgXCLEkGFuZyB0cuG6oyB0aMaw4bufbmcsIGtow7RuZyDEkcaw4bujYyBjxrDhu6NjXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRGF0ICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fbXlDaGlwQmV0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9teUNoaXBCZXRbaV0gPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFJlcXVlc3RCZXQoMip0aGlzLl9teUNoaXBCZXRbaV0sIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50RGF0TGFpKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0hhdmVDaGlwQmV0KHRoaXMuX215Q2hpcEJldCkgJiYgICF0aGlzLl9pc0RhdCl7XHJcbiAgICAgICAgICAgIGlmKCFTbWFydEZveFNESy5Sb25nSG9Db250cm9sbGVyLm1fdGFibGVJbmZvLmlzQmV0dGluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdCgxLCBcIsSQYW5nIHRy4bqjIHRoxrDhu59uZywga2jDtG5nIMSRxrDhu6NjIGPGsOG7o2NcIik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5faXNEYXQgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLl9teUNoaXBCZXQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX215Q2hpcEJldFtpXSA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kUmVxdWVzdEJldCh0aGlzLl9teUNoaXBCZXRbaV0sIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIF9pc0hhdmVDaGlwQmV0KGxpc3RDaGlwQmV0KSB7XHJcbiAgICAgICAgbGV0IGhhdmVDaGlwID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0Q2hpcEJldC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmIChsaXN0Q2hpcEJldFtpXSA+IDApe1xyXG4gICAgICAgICAgICAgICAgaGF2ZUNoaXAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhdmVDaGlwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoYXZlQ2hpcDtcclxuICAgIH0sXHJcbiAgICBldmVudFNob3dDaGF0KGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5DaGF0RW1vamlMYXllci5hY3RpdmUgPSAhdGhpcy5DaGF0RW1vamlMYXllci5hY3RpdmU7XHJcbiAgICAgICAgaWYgKHRoaXMuQ2hhdEVtb2ppTGF5ZXIuYWN0aXZlKVxyXG4gICAgICAgICAgICB0aGlzLkNoYXRFbW9qaUxheWVyLmdldENvbXBvbmVudChcIkNoYXRFbW9qaUxheWVyXCIpLmluaXRDb250cm9sbGVyKFNtYXJ0Rm94U0RLLlJvbmdIb0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlKTtcclxuICAgIH0sXHJcbiAgICBvblB1YmxpY01lc3NhZ2UobWVzc0RhdGEpe1xyXG4gICAgICAgIGxldCBtc2dJdGVtICAgID0gbWVzc0RhdGEubXNnO1xyXG4gICAgICAgIGxldCBwb3MgICAgICAgID0gdGhpcy5nZXRQb3NGcm9tTmFtZShtZXNzRGF0YS5zZW5kZXIubmFtZSk7XHJcbiAgICAgICAgbGV0IGVtb2ppQm94ICAgPSB0aGlzLlBPUy5jaGlsZHJlbltwb3NdLmdldENoaWxkQnlOYW1lKFwiRU1PSlwiKTtcclxuICAgICAgICBpZiAoZW1vamlCb3ggIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IHNlbGYgICAgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgaXNFbW9paiA9IG1zZ0l0ZW0uaW5kZXhPZihcImVtb2lqX1wiKSA+PSAwO1xyXG4gICAgICAgICAgICBsZXQgZW1vamlOb2RlID0gZW1vamlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJFTU9KXCIpO1xyXG4gICAgICAgICAgICBsZXQgYm94Tm9kZSAgID0gZW1vamlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIGVtb2ppTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYm94Tm9kZS5hY3RpdmUgICA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoaXNFbW9pail7XHJcbiAgICAgICAgICAgICAgICBlbW9qaU5vZGUuYWN0aXZlICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZW1vamlOb2RlLm9wYWNpdHkgID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBtc2dJdGVtLnJlcGxhY2UoXCJlbW9pal9cIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBlbW9qaU5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGVtb2ppTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCB0eXBlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlbW9qaU5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjUpLCBjYy5mYWRlT3V0KDIpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1vamlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm94Tm9kZS5hY3RpdmUgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBib3hOb2RlLm9wYWNpdHkgID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgYm94Tm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgYm94Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiX2NoYXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBtc2dJdGVtO1xyXG4gICAgICAgICAgICAgICAgYm94Tm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIGJveE5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyKSwgY2MuZmFkZU91dCgyKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVVzZXJWYXJpYWJsZShzdWJDaGlwKXtcclxuICAgICAgICBsZXQgbm9kZVVzZXIgPSB0aGlzLlBPUy5jaGlsZHJlblswXVxyXG4gICAgICAgIG5vZGVVc2VyLmdldENoaWxkQnlOYW1lKFwibW9uZXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAgVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlJvbmdIb0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZiktc3ViQ2hpcCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
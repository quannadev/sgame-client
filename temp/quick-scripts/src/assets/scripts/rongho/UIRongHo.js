"use strict";
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
"use strict";
cc._RF.push(module, '13624LjH8lLHbXfT535k/0O', 'UIXocDia');
// scripts/xocdia/UIXocDia.js

"use strict";

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
    _currentType: -1,
    _currentBet: 5000,
    Timer: cc.Node,
    XocXocBat: cc.Node,
    openBat: cc.Node,
    Result: cc.Node,
    ChipPrefab: cc.Prefab,
    POS: cc.Node,
    isNan: cc.Toggle,
    _currentTime: 0,
    _isOpen: false,
    _TimeWaitOpenBat: 3,
    _dataCau: [],
    _myChipBet: [],
    _isDat: false,
    _isDatLast: false,
    lb_countUser: cc.Label,
    Notice: cc.Node,
    ListMenu: cc.Node
  },
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    this._myChipBet = [];
    this._currentBet = 5000;
    this._isDat = false;
    this._isDatLast = false;
    this.poolChip = [];
    this.isNan.isChecked = false;

    for (var i = 0; i < 20; i++) {
      var chip = cc.instantiate(this.ChipPrefab);
      chip.scale = 0.33;
      this.node.addChild(chip);
      chip.active = false;
      this.poolChip.push(chip);
    }

    this.isFirst = true;
    this.openBat.on(cc.Node.EventType.TOUCH_MOVE, function (touch, event) {
      this.openBat.position = this.openBat.parent.convertToNodeSpaceAR(touch.getLocation());
      this._isOpen = !cc.Intersection.pointInPolygon(touch.getLocation(), this.XocXocBat.getComponent(cc.BoxCollider).world.points);

      if (this.isFirst && this._isOpen) {
        this.isFirst = false;
        this.showNotice(1, "Trả thưởng!");

        this._openBat(SmartFoxSDK.XocDiaController.m_tableInfo.winpot, 0, SmartFoxSDK.XocDiaController.m_tableInfo.isWin);

        this.openBat.stopAllActions();
      }
    }, this);
    cc.game.on(cc.game.EVENT_SHOW, function () {
      if (this.node != null) SmartFoxSDK.XocDiaController.resumeGame();
    }.bind(this));
  },
  onEnable: function onEnable() {
    this._dataCau = [];
    this.Notice.active = false;
    this.Timer.active = false;

    this._stopEffectWinPot();

    this.XocXocBat.active = false;
    this.Result.active = false;
    this.listMyChipBet = [];

    for (var i = 0; i < this.listNodePot.length; i++) {
      this.listMyChipBet.push(this.listNodePot[i].getChildByName("mybet").getComponent(cc.Label));
    }

    this.listChipBet = [];

    for (var _i = 0; _i < this.listNodePot.length; _i++) {
      this.listChipBet.push(this.listNodePot[_i].getChildByName("pot").getComponent(cc.Label));
    }

    this.updateUserCount();
    this.suggestBetChip();
  },
  suggestBetChip: function suggestBetChip() {
    for (var i = 0; i < this.listNodeBet.length; i++) {
      this.listNodeBet[i].scale = 1;
      this.listNodeBet[i].getChildByName("label").color = cc.Color.WHITE;
    }

    var indexSuggest = 0;
    this._currentBet = 5000;

    if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 50000000) {
      indexSuggest = this.listNodeBet.length - 1;
      this._currentBet = 1000000;
    } else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 10000000) {
      indexSuggest = this.listNodeBet.length - 2;
      this._currentBet = 500000;
    } else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 5000000) {
      indexSuggest = this.listNodeBet.length - 3;
      this._currentBet = 100000;
    } else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 100000) {
      indexSuggest = this.listNodeBet.length - 4;
      this._currentBet = 20000;
    } else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) > 50000) {
      indexSuggest = this.listNodeBet.length - 5;
      this._currentBet = 5000;
    }

    if (indexSuggest >= 0 && indexSuggest < this.listNodeBet.length) {
      var nodeBet = this.listNodeBet[indexSuggest];
      nodeBet.scale = 1.3;
      nodeBet.getChildByName("label").color = cc.Color.YELLOW;
    }
  },
  renewRound: function renewRound() {
    this.isFirst = true;

    if (SmartFoxSDK.XocDiaController.m_tableInfo.isBetting) {
      this.Result.active = false;

      for (var i = 0; i < this.listNodePot.length; i++) {
        var nodePot = this.listNodePot[i];
        var line = nodePot.getChildByName("Line-1");
        line.active = false;
      }
    }
  },
  updateUserCount: function updateUserCount() {
    var room = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia");
    var count = room.getUserList().length;

    if (count > 5) {
      this.POS.children[6].active = true;
      if (cc.isValid(this.lb_countUser)) this.lb_countUser.string = count - 5;
    } else {
      this.POS.children[6].active = false;
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
  ToastCanCua: function ToastCanCua(cb, delay) {
    var self = this;
    this.showNotice(delay, "Bắt đầu cân cửa!", function () {
      if (SmartFoxSDK.XocDiaController.m_tableInfo.refund > 0) {
        self.updateRefundChip(function () {
          if (cb) cb();
        });
      } else {
        if (cb) cb();
      }
    });
    var lb_tai = this.listChipBet[0].string;
    var lb_xiu = this.listChipBet[1].string;
    var balance = Math.min(parseFloat(lb_tai.split(".").join("")), parseFloat(lb_xiu.split(".").join("")));
    this.listChipBet[0].string = Utils.addDotToNumber(balance);
    this.listChipBet[1].string = Utils.addDotToNumber(balance);
  },
  ToastDatCua: function ToastDatCua(cb) {
    this.isFirst = true;
    this.showNotice(1, "Đặt cửa", cb);
  },
  getChipNode: function getChipNode() {
    for (var i = 0; i < this.poolChip.length; i++) {
      if (!this.poolChip[i].active) {
        this.poolChip[i].active = true;
        return this.poolChip[i];
      }
    }

    var chip = cc.instantiate(this.ChipPrefab);
    chip.scale = 0.33;
    this.node.addChild(chip);
    chip.active = true;
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
  updateUserVariable: function updateUserVariable(subChip) {
    this.updateChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf, subChip);
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
  getPosFromName: function getPosFromName(username) {
    for (var i = 0; i < 6; i++) {
      var nodeUser = this.POS.getChildByName("pos_" + i);

      if (nodeUser.active && nodeUser._username && nodeUser._username == username) {
        return i;
      }
    }

    return 6;
  },
  updateChip: function updateChip(user, subChip) {
    if (user) {
      for (var i = 0; i < 6; i++) {
        var nodeUser = this.POS.getChildByName("pos_" + i);
        var lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);

        if (nodeUser.active && nodeUser._username && nodeUser._username == user.name) {
          lb_money.string = Utils.addDotToNumber(GameVariables.getChip(user) - subChip);
          return;
        }
      }
    }
  },
  updateRefundChip: function updateRefundChip(cb) {
    if (SmartFoxSDK.XocDiaController.m_tableInfo && SmartFoxSDK.XocDiaController.m_tableInfo.refund) {
      var amount = SmartFoxSDK.XocDiaController.m_tableInfo.refund;
      var posUser = this.POS.children[0];
      var node_txt_win = posUser.getChildByName("money_win");
      node_txt_win.getComponent(cc.Label).string = "+" + Utils.addDotToNumber(amount);
      node_txt_win.active = true; // update user chip

      var lb_money = posUser.getChildByName("money").getComponent(cc.Label);
      var currentMoney = lb_money.string.split(".").join("");
      currentMoney = parseFloat(currentMoney) + amount;
      lb_money.string = Utils.addDotToNumber(currentMoney);
      var actionScale = cc.moveTo(1, cc.v2(0, 100));
      var scaleCallback = cc.sequence(actionScale, cc.callFunc(function () {
        node_txt_win.active = false;

        if (cb) {
          cb();
        }
      }));
      node_txt_win.stopAllActions();
      node_txt_win.runAction(scaleCallback);
    } else {
      if (cb) {
        cb();
      }
    }
  },
  showResult: function showResult() {
    var result = SmartFoxSDK.XocDiaController.m_tableInfo.result;
    if (!result) return;
    this.Result.active = true;
    var totalBlack = 0;

    for (var i = 0; i < this.Result._children.length; i++) {
      var icon = this.Result._children[i];

      if (result[i] == 0) {
        Utils.loadRes(icon.getComponent(cc.Sprite), "/images/xocdia/den-result");
        totalBlack++;
      } else {
        Utils.loadRes(icon.getComponent(cc.Sprite), "/images/xocdia/trang-result");
      }
    }
  },
  xocxoc: function xocxoc(result, winpot, isWin) {
    var self = this;

    this._stopEffectWinPot();

    this._isOpen = false;
    this.openBat.active = false;
    this.XocXocBat.active = true;
    this.showNotice(1, "Mở bát!", function () {
      this.XocXocBat.getComponent(sp.Skeleton).setAnimation(0, 'Atack-1', false);
      this.scheduleOnce(function () {
        this.XocXocBat.getComponent(sp.Skeleton).setAnimation(0, 'Atack-3', false);
        this.openBat.active = true;
        this.openBat.position = cc.v2(0, 0);
        this.openBat.stopAllActions();
        this.showResult();

        if (this.isNan.isChecked) {
          this.openBat.runAction(cc.sequence(cc.delayTime(6), cc.callFunc(function () {
            self._openBat(winpot, 0, isWin);
          })));
        } else {
          this.openBat.runAction(cc.sequence(cc.delayTime(0.5), cc.callFunc(function () {
            self._openBat(winpot, 0, isWin);
          })));
        }
      }, 1.4);
    }.bind(this));
  },
  resumeXocXoc: function resumeXocXoc(result, winpot, time, isWin) {
    var self = this;
    this._isOpen = false;
    self.openBat.active = false;
    this.XocXocBat.active = true;
    var animation = this.XocXocBat.getComponent(sp.Skeleton);
    animation.setAnimation(1, "Atack-3", true);
    self.Result.active = true;

    for (var i = 0; i < self.Result._children.length; i++) {
      var icon = self.Result._children[i];
      Utils.loadRes(icon.getComponent(cc.Sprite), "/images/xocdia/" + (result[i] == 0 ? 'den-result' : 'trang-result'));
    }

    this._openBat(winpot, 0, isWin);
  },
  _openBat: function _openBat(winpot, timeWait, isWin) {
    var self = this;
    this.openBat.position = cc.v2(0, 0);
    this.openBat.active = true;
    var moveBat = cc.moveTo(1, cc.v2(146, 88)).easing(cc.easeIn(2));

    if (this.isNan.isChecked) {
      self._runEffectPotWin(winpot, isWin);

      self.openBat.active = false;
    } else {
      this.openBat.stopAllActions();
      this.openBat.runAction(cc.sequence(moveBat, cc.callFunc(function () {
        self._runEffectPotWin(winpot, isWin);

        self.openBat.active = false;
      })));
    }
  },
  _runEffectPotWin: function _runEffectPotWin(winPot, isWin) {
    if (SmartFoxSDK.XocDiaController.m_tableInfo.isBetting) return;

    if (!winPot || isWin == undefined) {
      return;
    }

    var self = this;

    for (var i = 0; i < winPot.length; i++) {
      if (winPot[i] >= 0 && winPot[i] < 6) {
        var nodePot = this.listNodePot[winPot[i]];
        var line = nodePot.getChildByName("Line-1");
        line.active = true;
        line.getComponent(sp.Skeleton).setAnimation(0, "Idle", true);
      }
    }

    if (isWin) {
      var posUser = this.POS.children[0];
      var animationGame = posUser.getChildByName("InGame-Thang-2");
      var textGame = posUser.getChildByName("thang-text");
      var node_txt_win = posUser.getChildByName("money_win");
      node_txt_win.position = cc.v2(0, 0);
      node_txt_win.getComponent(cc.Label).string = "+" + Utils.addDotToNumber(SmartFoxSDK.XocDiaController.m_tableInfo.winChip);
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
      this.updateUserVariable(0);
    }

    this._isDat = false;
  },
  _runCountTimer: function _runCountTimer() {
    if (this._currentTime > 0) this._currentTime--;

    if (this._currentTime < 6) {
      this.Timer.color = cc.Color.RED;
    } else this.Timer.color = cc.Color.WHITE;

    if (this._currentTime < 10) {
      this.Timer.getComponent(cc.Label).string = "0" + this._currentTime;
    } else this.Timer.getComponent(cc.Label).string = this._currentTime;
  },
  _turnOnTime: function _turnOnTime(time, isBetting) {
    this.Timer.active = true;
    this.XocXocBat.active = false;
    this.Result.active = false;
    this._currentTime = time;

    this._runCountTimer();

    this._stopEffectWinPot();

    this.schedule(this._runCountTimer, 1);
  },
  _turnOffTime: function _turnOffTime() {
    this.Timer.active = false;
    this.unschedule(this._runCountTimer);
  },
  showListMyChipBet: function showListMyChipBet(bets) {
    if (this._isHaveChipBet(bets)) {
      this._myChipBet = bets;
    } else {
      if (!this._isDatLast) this._myChipBet = bets;
      if (this._isDatLast) this._isDatLast = false;
    }

    for (var i = 0; i < bets.length; i++) {
      this.listMyChipBet[i].string = "(" + Utils.addDotToNumber(bets[i]) + ")";
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
    if (this.XocXocBat.active) {
      mm.Toast.showToast(1, "Đang mở bát không được đặt");
      return;
    }

    this._isDat = true;
    mm.audio.playDatCua();
    this.sendRequestBet(this._currentBet, type);
  },
  sendRequestBet: function sendRequestBet(bet, type) {
    this._isDatLast = true;
    this._currentType = type;

    if (this._currentType < 0 || this._currentType >= 6) {
      mm.Toast.showToast(1, "Của đặt không hợp lệ");
    } else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) < bet) {
      mm.Toast.showToast(1, "Không đủ tiền!");
    } else {
      var betRequest = new XocDiaRequest.BetRequest();
      betRequest.setBetChip(bet);
      betRequest.setTypePot(this._currentType);
      SmartFoxSDK.XocDiaController.ZoneInstance.send(betRequest.toSRequest());
    }
  },
  actionFlyChipToPot: function actionFlyChipToPot(username, potType, money) {
    var _this = this;

    var pos = this.getPosFromName(username);
    var chipName = "chip1";

    if (money > 1000 && money <= 5000) {
      chipName = "chip1";
    } else if (money > 5000 && money <= 20000) {
      chipName = "chip2";
    } else if (money > 20000 && money <= 100000) {
      chipName = "chip3";
    } else if (money > 100000 && money <= 500000) {
      chipName = "chip4";
    } else if (money > 500000) {
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
      chipNode.runAction(cc.sequence(cc.delayTime(i * 0.1), cc.moveTo(0.3, cc.v2(posTo.x, posTo.y)).easing(cc.easeOut(3)), cc.callFunc(function () {
        self.returnChipNode(this);
      }, chipNode)));
    };

    for (var i = 0; i < 5; i++) {
      _loop(i);
    }
  },
  clickExitRoom: function clickExitRoom(event) {
    var room = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia");

    if (room) {
      SmartFoxSDK.XocDiaController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
      mm.Loading.show();
    } else {
      UIManger.show("UIHome");
    }
  },
  eventSoiCau: function eventSoiCau() {
    mm.audio.playButton();
    mm.Loading.show();
    var historyRequest = new XocDiaRequest.HistoryResultRequest();
    SmartFoxSDK.XocDiaController.ZoneInstance.send(historyRequest.toSRequest());
  },
  showSoiCau: function showSoiCau(dataCau) {
    this._dataCau = dataCau;
    console.log(dataCau);
    this.show("UIXocDiaSoiCau", {
      pop: true,
      src: 'xocdia',
      data: dataCau
    });
  },
  eventGapThep: function eventGapThep() {
    mm.audio.playButton();

    if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
      if (this.XocXocBat.active) {
        mm.Toast.showToast(1, "Đang mở bát không được đặt");
        return;
      }

      this._isDat = true;

      for (var i = 0; i < this._myChipBet.length; i++) {
        if (this._myChipBet[i] > 0) this.sendRequestBet(2 * this._myChipBet[i], i);
      }
    }
  },
  eventDatLai: function eventDatLai() {
    mm.audio.playButton();

    if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
      if (this.XocXocBat.active) {
        mm.Toast.showToast(1, "Đang mở bát không được đặt");
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
  eventNan: function eventNan() {
    mm.audio.playButton();
  },
  eventShowMenu: function eventShowMenu() {
    mm.audio.playButton();
    this.ListMenu.active = !this.ListMenu.active;
  },
  eventRank: function eventRank() {
    mm.audio.playButton();
    mm.Loading.show();
    this.ListMenu.active = false;
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.XocDiaController.ZoneInstance.send(request.toSRequest());
  },
  eventHelper: function eventHelper() {
    mm.audio.playButton();
    this.ListMenu.active = false;
    this.show("UIXocDiaHelper", {
      pop: true,
      src: 'xocdia'
    });
  },
  eventHistory: function eventHistory() {
    mm.audio.playButton();
    mm.Loading.show();
    this.ListMenu.active = false;
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.XocDiaController.ZoneInstance.send(request.toSRequest());
  },
  eventShowChat: function eventShowChat(event, data) {
    mm.audio.playButton();
    this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
    if (this.ChatEmojiLayer.active) this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.XocDiaController.ZoneInstance);
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
  }
});

cc._RF.pop();
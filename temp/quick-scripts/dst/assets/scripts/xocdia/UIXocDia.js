
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/xocdia/UIXocDia.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
        this.showNotice(1, "Tr??? th?????ng!");

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
    this.showNotice(delay, "B???t ?????u c??n c???a!", function () {
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
    this.showNotice(1, "?????t c???a", cb);
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
    this.showNotice(1, "M??? b??t!", function () {
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
      mm.Toast.showToast(1, "??ang m??? b??t kh??ng ???????c ?????t");
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
      mm.Toast.showToast(1, "C???a ?????t kh??ng h???p l???");
    } else if (GameVariables.getChip(SmartFoxSDK.XocDiaController.ZoneInstance.mySelf) < bet) {
      mm.Toast.showToast(1, "Kh??ng ????? ti???n!");
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
        mm.Toast.showToast(1, "??ang m??? b??t kh??ng ???????c ?????t");
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
        mm.Toast.showToast(1, "??ang m??? b??t kh??ng ???????c ?????t");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3hvY2RpYS9VSVhvY0RpYS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJDaGF0RW1vamlMYXllciIsIk5vZGUiLCJsaXN0Tm9kZUJldCIsInR5cGUiLCJsaXN0Tm9kZVBvdCIsIl9jdXJyZW50VHlwZSIsIl9jdXJyZW50QmV0IiwiVGltZXIiLCJYb2NYb2NCYXQiLCJvcGVuQmF0IiwiUmVzdWx0IiwiQ2hpcFByZWZhYiIsIlByZWZhYiIsIlBPUyIsImlzTmFuIiwiVG9nZ2xlIiwiX2N1cnJlbnRUaW1lIiwiX2lzT3BlbiIsIl9UaW1lV2FpdE9wZW5CYXQiLCJfZGF0YUNhdSIsIl9teUNoaXBCZXQiLCJfaXNEYXQiLCJfaXNEYXRMYXN0IiwibGJfY291bnRVc2VyIiwiTGFiZWwiLCJOb3RpY2UiLCJMaXN0TWVudSIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJwb29sQ2hpcCIsImlzQ2hlY2tlZCIsImkiLCJjaGlwIiwiaW5zdGFudGlhdGUiLCJzY2FsZSIsIm5vZGUiLCJhZGRDaGlsZCIsImFjdGl2ZSIsInB1c2giLCJpc0ZpcnN0Iiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9NT1ZFIiwidG91Y2giLCJldmVudCIsInBvc2l0aW9uIiwicGFyZW50IiwiY29udmVydFRvTm9kZVNwYWNlQVIiLCJnZXRMb2NhdGlvbiIsIkludGVyc2VjdGlvbiIsInBvaW50SW5Qb2x5Z29uIiwiZ2V0Q29tcG9uZW50IiwiQm94Q29sbGlkZXIiLCJ3b3JsZCIsInBvaW50cyIsInNob3dOb3RpY2UiLCJfb3BlbkJhdCIsIlNtYXJ0Rm94U0RLIiwiWG9jRGlhQ29udHJvbGxlciIsIm1fdGFibGVJbmZvIiwid2lucG90IiwiaXNXaW4iLCJzdG9wQWxsQWN0aW9ucyIsImdhbWUiLCJFVkVOVF9TSE9XIiwicmVzdW1lR2FtZSIsImJpbmQiLCJvbkVuYWJsZSIsIl9zdG9wRWZmZWN0V2luUG90IiwibGlzdE15Q2hpcEJldCIsImxlbmd0aCIsImdldENoaWxkQnlOYW1lIiwibGlzdENoaXBCZXQiLCJ1cGRhdGVVc2VyQ291bnQiLCJzdWdnZXN0QmV0Q2hpcCIsImNvbG9yIiwiQ29sb3IiLCJXSElURSIsImluZGV4U3VnZ2VzdCIsIkdhbWVWYXJpYWJsZXMiLCJnZXRDaGlwIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwibm9kZUJldCIsIllFTExPVyIsInJlbmV3Um91bmQiLCJpc0JldHRpbmciLCJub2RlUG90IiwibGluZSIsInJvb20iLCJnZXRSb29tQnlOYW1lIiwiY291bnQiLCJnZXRVc2VyTGlzdCIsImNoaWxkcmVuIiwiaXNWYWxpZCIsInN0cmluZyIsImRlbGF5IiwiY29udGVudCIsImNiIiwic2VsZiIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwiY2FsbEZ1bmMiLCJUb2FzdENhbkN1YSIsInJlZnVuZCIsInVwZGF0ZVJlZnVuZENoaXAiLCJsYl90YWkiLCJsYl94aXUiLCJiYWxhbmNlIiwiTWF0aCIsIm1pbiIsInBhcnNlRmxvYXQiLCJzcGxpdCIsImpvaW4iLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwiVG9hc3REYXRDdWEiLCJnZXRDaGlwTm9kZSIsInJldHVybkNoaXBOb2RlIiwiY2hpcE5vZGUiLCJ1cGRhdGVVc2VyVmFyaWFibGUiLCJzdWJDaGlwIiwidXBkYXRlQ2hpcCIsInNob3dMaXN0VXNlcnMiLCJsaXN0VXNlclNob3ciLCJub2RlVXNlciIsImxiX25hbWUiLCJsYl9tb25leSIsInVzZXIiLCJnZXRWYXJpYWJsZSIsInZhbHVlIiwiX3VzZXJuYW1lIiwibmFtZSIsImdldERpc3BsYXlOYW1lIiwiaXNJdE1lIiwibG9hZFJlcyIsIlNwcml0ZSIsIkNvbmZpZyIsImdldERlZmF1bHRBdmF0YXIiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJyZW1vdmVOb2RlUGxheWVyIiwiYWRkTm9kZVBsYXllckVudGVyUm9vbSIsImdldFBvc0Zyb21OYW1lIiwidXNlcm5hbWUiLCJhbW91bnQiLCJwb3NVc2VyIiwibm9kZV90eHRfd2luIiwiY3VycmVudE1vbmV5IiwiYWN0aW9uU2NhbGUiLCJtb3ZlVG8iLCJ2MiIsInNjYWxlQ2FsbGJhY2siLCJzaG93UmVzdWx0IiwicmVzdWx0IiwidG90YWxCbGFjayIsIl9jaGlsZHJlbiIsImljb24iLCJ4b2N4b2MiLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwic2NoZWR1bGVPbmNlIiwicmVzdW1lWG9jWG9jIiwidGltZSIsImFuaW1hdGlvbiIsInRpbWVXYWl0IiwibW92ZUJhdCIsImVhc2luZyIsImVhc2VJbiIsIl9ydW5FZmZlY3RQb3RXaW4iLCJ3aW5Qb3QiLCJ1bmRlZmluZWQiLCJhbmltYXRpb25HYW1lIiwidGV4dEdhbWUiLCJ3aW5DaGlwIiwiX3J1bkNvdW50VGltZXIiLCJSRUQiLCJfdHVybk9uVGltZSIsInNjaGVkdWxlIiwiX3R1cm5PZmZUaW1lIiwidW5zY2hlZHVsZSIsInNob3dMaXN0TXlDaGlwQmV0IiwiYmV0cyIsIl9pc0hhdmVDaGlwQmV0Iiwic2hvd0xpc3RDaGlwQmV0Iiwic2VsZWN0QmV0Q2hpcCIsImJldENoaXAiLCJjdXJyZW50VGFyZ2V0IiwicmVxdWVzdEJldCIsIm1tIiwiVG9hc3QiLCJzaG93VG9hc3QiLCJhdWRpbyIsInBsYXlEYXRDdWEiLCJzZW5kUmVxdWVzdEJldCIsImJldCIsImJldFJlcXVlc3QiLCJYb2NEaWFSZXF1ZXN0IiwiQmV0UmVxdWVzdCIsInNldEJldENoaXAiLCJzZXRUeXBlUG90Iiwic2VuZCIsInRvU1JlcXVlc3QiLCJhY3Rpb25GbHlDaGlwVG9Qb3QiLCJwb3RUeXBlIiwibW9uZXkiLCJwb3MiLCJjaGlwTmFtZSIsIm5vZGVBdmF0YXIiLCJub2RlRnJvbSIsInBvc1RvIiwiZ2V0UG9zaXRpb25Jbk90aGVyTm9kZSIsIngiLCJ5IiwiZWFzZU91dCIsImNsaWNrRXhpdFJvb20iLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiTGVhdmVSb29tUmVxdWVzdCIsIkxvYWRpbmciLCJzaG93IiwiVUlNYW5nZXIiLCJldmVudFNvaUNhdSIsInBsYXlCdXR0b24iLCJoaXN0b3J5UmVxdWVzdCIsIkhpc3RvcnlSZXN1bHRSZXF1ZXN0Iiwic2hvd1NvaUNhdSIsImRhdGFDYXUiLCJjb25zb2xlIiwibG9nIiwicG9wIiwic3JjIiwiZGF0YSIsImV2ZW50R2FwVGhlcCIsImV2ZW50RGF0TGFpIiwiaGF2ZUNoaXAiLCJldmVudE5hbiIsImV2ZW50U2hvd01lbnUiLCJldmVudFJhbmsiLCJyZXF1ZXN0IiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImV2ZW50SGVscGVyIiwiZXZlbnRIaXN0b3J5IiwiSGlzdG9yeVJlcXVlc3QiLCJldmVudFNob3dDaGF0IiwiaW5pdENvbnRyb2xsZXIiLCJvblB1YmxpY01lc3NhZ2UiLCJtZXNzRGF0YSIsIm1zZ0l0ZW0iLCJtc2ciLCJzZW5kZXIiLCJlbW9qaUJveCIsImlzRW1vaWoiLCJpbmRleE9mIiwiZW1vamlOb2RlIiwiYm94Tm9kZSIsIm9wYWNpdHkiLCJyZXBsYWNlIiwiZmFkZU91dCIsIkxheW91dCIsInVwZGF0ZUxheW91dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxjQUFjLEVBQUVKLEVBQUUsQ0FBQ0ssSUFEWDtBQUVSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVEMsTUFBQUEsSUFBSSxFQUFFUCxFQUFFLENBQUNLLElBREE7QUFFVCxpQkFBUztBQUZBLEtBRkw7QUFNUkcsSUFBQUEsV0FBVyxFQUFFO0FBQ1RELE1BQUFBLElBQUksRUFBRVAsRUFBRSxDQUFDSyxJQURBO0FBRVQsaUJBQVM7QUFGQSxLQU5MO0FBVVJJLElBQUFBLFlBQVksRUFBRyxDQUFDLENBVlI7QUFX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VCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIENoYXRFbW9qaUxheWVyOiBjYy5Ob2RlLFxuICAgICAgICBsaXN0Tm9kZUJldDoge1xuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGxpc3ROb2RlUG90OiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICAgICAgZGVmYXVsdDogW11cbiAgICAgICAgfSxcbiAgICAgICAgX2N1cnJlbnRUeXBlIDogLTEsXG4gICAgICAgIF9jdXJyZW50QmV0ICA6IDUwMDAsXG4gICAgICAgIFRpbWVyICAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIFhvY1hvY0JhdCAgICA6IGNjLk5vZGUsXG4gICAgICAgIG9wZW5CYXQgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIFJlc3VsdCAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIENoaXBQcmVmYWIgICA6IGNjLlByZWZhYixcbiAgICAgICAgUE9TICAgICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgaXNOYW4gICAgICAgIDogY2MuVG9nZ2xlLFxuICAgICAgICBfY3VycmVudFRpbWUgOiAwLFxuICAgICAgICBfaXNPcGVuICAgICAgOiBmYWxzZSxcbiAgICAgICAgX1RpbWVXYWl0T3BlbkJhdCA6IDMsXG4gICAgICAgIF9kYXRhQ2F1ICAgICAgICAgOiBbXSxcbiAgICAgICAgX215Q2hpcEJldCAgICAgICA6IFtdLFxuICAgICAgICBfaXNEYXQgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIF9pc0RhdExhc3QgICAgICAgOiBmYWxzZSxcbiAgICAgICAgbGJfY291bnRVc2VyOiBjYy5MYWJlbCxcbiAgICAgICAgTm90aWNlOiBjYy5Ob2RlLFxuICAgICAgICBMaXN0TWVudSAgICAgOiBjYy5Ob2RlLFxuICAgIH0sXG4gICAgb25Mb2FkKCl7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fbXlDaGlwQmV0ICAgICA9IFtdO1xuICAgICAgICB0aGlzLl9jdXJyZW50QmV0ICAgID0gNTAwMDtcbiAgICAgICAgdGhpcy5faXNEYXQgICAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0RhdExhc3QgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMucG9vbENoaXAgPSBbXTtcbiAgICAgICAgdGhpcy5pc05hbi5pc0NoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDIwO2krKyl7XG4gICAgICAgICAgICBsZXQgY2hpcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQ2hpcFByZWZhYik7XG4gICAgICAgICAgICBjaGlwLnNjYWxlID0gMC4zMztcbiAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlwKTtcbiAgICAgICAgICAgIGNoaXAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnBvb2xDaGlwLnB1c2goY2hpcCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcGVuQmF0Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uICh0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMub3BlbkJhdC5wb3NpdGlvbiA9ICB0aGlzLm9wZW5CYXQucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoLmdldExvY2F0aW9uKCkpO1xuICAgICAgICAgICAgdGhpcy5faXNPcGVuICAgICAgICAgID0gIWNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbih0b3VjaC5nZXRMb2NhdGlvbigpLCB0aGlzLlhvY1hvY0JhdC5nZXRDb21wb25lbnQoY2MuQm94Q29sbGlkZXIpLndvcmxkLnBvaW50cyk7XG4gICAgICAgICAgICBpZih0aGlzLmlzRmlyc3QgJiYgdGhpcy5faXNPcGVuKXtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRmlyc3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dOb3RpY2UoMSwgXCJUcuG6oyB0aMaw4bufbmchXCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuX29wZW5CYXQoU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlci5tX3RhYmxlSW5mby53aW5wb3QsIDAsIFNtYXJ0Rm94U0RLLlhvY0RpYUNvbnRyb2xsZXIubV90YWJsZUluZm8uaXNXaW4pO1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbkJhdC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgfX0sIHRoaXMpO1xuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfU0hPVywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlhvY0RpYUNvbnRyb2xsZXIucmVzdW1lR2FtZSgpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgdGhpcy5fZGF0YUNhdSAgICAgPSBbXTtcbiAgICAgICAgdGhpcy5Ob3RpY2UuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuVGltZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3N0b3BFZmZlY3RXaW5Qb3QoKTtcbiAgICAgICAgdGhpcy5Yb2NYb2NCYXQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuUmVzdWx0LmFjdGl2ZSAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpc3RNeUNoaXBCZXQgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE5vZGVQb3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICB0aGlzLmxpc3RNeUNoaXBCZXQucHVzaCh0aGlzLmxpc3ROb2RlUG90W2ldLmdldENoaWxkQnlOYW1lKFwibXliZXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5saXN0Q2hpcEJldCA9IFtdO1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Tm9kZVBvdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHRoaXMubGlzdENoaXBCZXQucHVzaCh0aGlzLmxpc3ROb2RlUG90W2ldLmdldENoaWxkQnlOYW1lKFwicG90XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlVXNlckNvdW50KCk7XG4gICAgICAgIHRoaXMuc3VnZ2VzdEJldENoaXAoKTtcbiAgICB9LFxuICAgIHN1Z2dlc3RCZXRDaGlwKCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3ROb2RlQmV0Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgdGhpcy5saXN0Tm9kZUJldFtpXS5zY2FsZSA9IDE7XG4gICAgICAgICAgICB0aGlzLmxpc3ROb2RlQmV0W2ldLmdldENoaWxkQnlOYW1lKFwibGFiZWxcIikuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXhTdWdnZXN0ID0gMDtcbiAgICAgICAgdGhpcy5fY3VycmVudEJldCA9IDUwMDA7XG4gICAgICAgIGlmKEdhbWVWYXJpYWJsZXMuZ2V0Q2hpcChTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpID4gNTAwMDAwMDApe1xuICAgICAgICAgICAgaW5kZXhTdWdnZXN0ID0gdGhpcy5saXN0Tm9kZUJldC5sZW5ndGggLTE7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QmV0ID0gMTAwMDAwMDtcbiAgICAgICAgfWVsc2UgaWYoR2FtZVZhcmlhYmxlcy5nZXRDaGlwKFNtYXJ0Rm94U0RLLlhvY0RpYUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgPiAxMDAwMDAwMCl7XG4gICAgICAgICAgICBpbmRleFN1Z2dlc3QgPSB0aGlzLmxpc3ROb2RlQmV0Lmxlbmd0aCAtIDI7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QmV0ID0gNTAwMDAwO1xuICAgICAgICB9ZWxzZSBpZihHYW1lVmFyaWFibGVzLmdldENoaXAoU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSA+IDUwMDAwMDApe1xuICAgICAgICAgICAgaW5kZXhTdWdnZXN0ID0gdGhpcy5saXN0Tm9kZUJldC5sZW5ndGggLSAzO1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJldCA9IDEwMDAwMDtcbiAgICAgICAgfWVsc2UgaWYoR2FtZVZhcmlhYmxlcy5nZXRDaGlwKFNtYXJ0Rm94U0RLLlhvY0RpYUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgPiAxMDAwMDApe1xuICAgICAgICAgICAgaW5kZXhTdWdnZXN0ID0gdGhpcy5saXN0Tm9kZUJldC5sZW5ndGggLSA0O1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJldCA9IDIwMDAwO1xuICAgICAgICB9ZWxzZSBpZihHYW1lVmFyaWFibGVzLmdldENoaXAoU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSA+IDUwMDAwKXtcbiAgICAgICAgICAgIGluZGV4U3VnZ2VzdCA9IHRoaXMubGlzdE5vZGVCZXQubGVuZ3RoIC0gNTtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRCZXQgPSA1MDAwO1xuICAgICAgICB9XG4gICAgICAgIGlmKGluZGV4U3VnZ2VzdCA+PSAwICYmIGluZGV4U3VnZ2VzdCA8IHRoaXMubGlzdE5vZGVCZXQubGVuZ3RoKXtcbiAgICAgICAgICAgIGxldCBub2RlQmV0ID0gdGhpcy5saXN0Tm9kZUJldFtpbmRleFN1Z2dlc3RdO1xuICAgICAgICAgICAgbm9kZUJldC5zY2FsZSA9IDEuMztcbiAgICAgICAgICAgIG5vZGVCZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVuZXdSb3VuZCgpe1xuICAgICAgICB0aGlzLmlzRmlyc3QgPSB0cnVlO1xuICAgICAgICBpZihTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLm1fdGFibGVJbmZvLmlzQmV0dGluZyl7XG4gICAgICAgICAgICB0aGlzLlJlc3VsdC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3ROb2RlUG90Lmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgICAgIGxldCBub2RlUG90ID0gdGhpcy5saXN0Tm9kZVBvdFtpXTtcbiAgICAgICAgICAgICAgICBsZXQgbGluZSA9IG5vZGVQb3QuZ2V0Q2hpbGRCeU5hbWUoXCJMaW5lLTFcIik7XG4gICAgICAgICAgICAgICAgbGluZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVXNlckNvdW50KCl7XG4gICAgICAgIGxldCByb29tID0gU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlci5ab25lSW5zdGFuY2UuZ2V0Um9vbUJ5TmFtZShcInhvY2RpYVwiKTtcbiAgICAgICAgbGV0IGNvdW50ID0gcm9vbS5nZXRVc2VyTGlzdCgpLmxlbmd0aDtcbiAgICAgICAgaWYgKGNvdW50ID4gNSl7XG4gICAgICAgICAgICB0aGlzLlBPUy5jaGlsZHJlbls2XS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYoY2MuaXNWYWxpZCh0aGlzLmxiX2NvdW50VXNlcikpXG4gICAgICAgICAgICAgICAgdGhpcy5sYl9jb3VudFVzZXIuc3RyaW5nID0gY291bnQtNTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5QT1MuY2hpbGRyZW5bNl0uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dOb3RpY2UoZGVsYXksIGNvbnRlbnQsIGNiKSB7XG4gICAgICAgIHRoaXMuTm90aWNlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuTm90aWNlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5Ob3RpY2UuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9ub3RpXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY29udGVudDtcbiAgICAgICAgdGhpcy5Ob3RpY2UucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShkZWxheSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYuTm90aWNlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYoY2IpXG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgfSkpKTtcbiAgICB9LFxuICAgIFRvYXN0Q2FuQ3VhKGNiLCBkZWxheSl7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5zaG93Tm90aWNlKGRlbGF5LCBcIkLhuq90IMSR4bqndSBjw6JuIGPhu61hIVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZihTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLm1fdGFibGVJbmZvLnJlZnVuZCA+IDApe1xuICAgICAgICAgICAgICAgIHNlbGYudXBkYXRlUmVmdW5kQ2hpcChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNiKVxuICAgICAgICAgICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGlmKGNiKVxuICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGxiX3RhaSA9IHRoaXMubGlzdENoaXBCZXRbMF0uc3RyaW5nO1xuICAgICAgICBsZXQgbGJfeGl1ID0gdGhpcy5saXN0Q2hpcEJldFsxXS5zdHJpbmc7XG4gICAgICAgIGxldCBiYWxhbmNlID0gTWF0aC5taW4ocGFyc2VGbG9hdChsYl90YWkuc3BsaXQoXCIuXCIpLmpvaW4oXCJcIikpICwgcGFyc2VGbG9hdChsYl94aXUuc3BsaXQoXCIuXCIpLmpvaW4oXCJcIikpKTtcbiAgICAgICAgdGhpcy5saXN0Q2hpcEJldFswXS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihiYWxhbmNlKTtcbiAgICAgICAgdGhpcy5saXN0Q2hpcEJldFsxXS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihiYWxhbmNlKTtcbiAgICB9LFxuICAgIFRvYXN0RGF0Q3VhKGNiKXtcbiAgICAgICAgdGhpcy5pc0ZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93Tm90aWNlKDEsIFwixJDhurd0IGPhu61hXCIsIGNiKTtcbiAgICB9LFxuICAgIGdldENoaXBOb2RlKCl7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvb2xDaGlwLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgaWYoIXRoaXMucG9vbENoaXBbaV0uYWN0aXZlKXtcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xDaGlwW2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9vbENoaXBbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNoaXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkNoaXBQcmVmYWIpO1xuICAgICAgICBjaGlwLnNjYWxlID0gMC4zMztcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoaXApO1xuICAgICAgICBjaGlwLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMucG9vbENoaXAucHVzaChjaGlwKTtcbiAgICAgICAgcmV0dXJuIGNoaXA7XG4gICAgfSxcbiAgICByZXR1cm5DaGlwTm9kZShjaGlwTm9kZSl7XG4gICAgICAgIGNoaXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgX3N0b3BFZmZlY3RXaW5Qb3QoKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdE5vZGVQb3QubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgbm9kZVBvdCA9IHRoaXMubGlzdE5vZGVQb3RbaV07XG4gICAgICAgICAgICBsZXQgbGluZSA9IG5vZGVQb3QuZ2V0Q2hpbGRCeU5hbWUoXCJMaW5lLTFcIik7XG4gICAgICAgICAgICBsaW5lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVVc2VyVmFyaWFibGUoc3ViQ2hpcCl7XG4gICAgICAgIHRoaXMudXBkYXRlQ2hpcChTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYsIHN1YkNoaXApO1xuICAgIH0sXG4gICAgc2hvd0xpc3RVc2VycyhsaXN0VXNlclNob3cpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjtpKyspe1xuICAgICAgICAgICAgbGV0IG5vZGVVc2VyID0gdGhpcy5QT1MuZ2V0Q2hpbGRCeU5hbWUoXCJwb3NfXCIraSk7XG4gICAgICAgICAgICBsZXQgbGJfbmFtZSA9IG5vZGVVc2VyLmdldENoaWxkQnlOYW1lKFwibmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGV0IGxiX21vbmV5ID0gbm9kZVVzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGV0IHVzZXIgPSAoaSA+PSBsaXN0VXNlclNob3cubGVuZ3RoKSA/IG51bGwgOiBsaXN0VXNlclNob3dbaV07XG4gICAgICAgICAgICBpZih1c2VyICYmICh1c2VyLmdldFZhcmlhYmxlKFwicm9sZVwiKS52YWx1ZSAhPSBcImFkbWluXCIpKXtcbiAgICAgICAgICAgICAgICBub2RlVXNlci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG5vZGVVc2VyLl91c2VybmFtZSA9IHVzZXIubmFtZTtcbiAgICAgICAgICAgICAgICBsYl9uYW1lLnN0cmluZyA9IEdhbWVWYXJpYWJsZXMuZ2V0RGlzcGxheU5hbWUodXNlcik7XG4gICAgICAgICAgICAgICAgbGJfbW9uZXkuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5nZXRDaGlwKHVzZXIpKTtcbiAgICAgICAgICAgICAgICBpZih1c2VyLmlzSXRNZSl7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLmxvYWRSZXMobm9kZVVzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhdmF0YXJcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIFwiaW1hZ2VzL2F2YXRhci9cIitDb25maWcuZ2V0RGVmYXVsdEF2YXRhcigpKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiA5KSArIDEpO1xuICAgICAgICAgICAgICAgICAgICBVdGlscy5sb2FkUmVzKG5vZGVVc2VyLmdldENoaWxkQnlOYW1lKFwiYXZhdGFyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBcImltYWdlcy9hdmF0YXIvXCIrcmFuZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgbm9kZVVzZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbm9kZVVzZXIuX3VzZXJuYW1lID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgcmVtb3ZlTm9kZVBsYXllcih1c2VyKXtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDY7aSsrKXtcbiAgICAgICAgICAgIGxldCBub2RlVXNlciA9IHRoaXMuUE9TLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK2kpO1xuICAgICAgICAgICAgaWYobm9kZVVzZXIuX3VzZXJuYW1lID09IHVzZXIubmFtZSl7XG4gICAgICAgICAgICAgICAgbm9kZVVzZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFkZE5vZGVQbGF5ZXJFbnRlclJvb20odXNlcil7XG4gICAgICAgIGlmICh1c2VyICYmICh1c2VyLmdldFZhcmlhYmxlKFwicm9sZVwiKS52YWx1ZSAhPSBcImFkbWluXCIpKXtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCA2O2krKyl7XG4gICAgICAgICAgICAgICAgbGV0IG5vZGVVc2VyID0gdGhpcy5QT1MuZ2V0Q2hpbGRCeU5hbWUoXCJwb3NfXCIraSk7XG4gICAgICAgICAgICAgICAgbGV0IGxiX25hbWUgPSBub2RlVXNlci5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBsZXQgbGJfbW9uZXkgPSBub2RlVXNlci5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgaWYoIW5vZGVVc2VyLmFjdGl2ZSl7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVVc2VyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVVc2VyLl91c2VybmFtZSA9IHVzZXIubmFtZTtcbiAgICAgICAgICAgICAgICAgICAgbGJfbmFtZS5zdHJpbmcgPSBHYW1lVmFyaWFibGVzLmdldERpc3BsYXlOYW1lKHVzZXIpO1xuICAgICAgICAgICAgICAgICAgICBsYl9tb25leS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLmdldENoaXAodXNlcikpO1xuICAgICAgICAgICAgICAgICAgICBpZih1c2VyLmlzSXRNZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBVdGlscy5sb2FkUmVzKG5vZGVVc2VyLmdldENoaWxkQnlOYW1lKFwiYXZhdGFyXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBcImltYWdlcy9hdmF0YXIvXCIrQ29uZmlnLmdldERlZmF1bHRBdmF0YXIoKSk7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmQgPSAoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKiA5KSArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgVXRpbHMubG9hZFJlcyhub2RlVXNlci5nZXRDaGlsZEJ5TmFtZShcImF2YXRhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgXCJpbWFnZXMvYXZhdGFyL1wiK3JhbmQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0UG9zRnJvbU5hbWUodXNlcm5hbWUpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjtpKyspe1xuICAgICAgICAgICAgbGV0IG5vZGVVc2VyID0gdGhpcy5QT1MuZ2V0Q2hpbGRCeU5hbWUoXCJwb3NfXCIraSk7XG4gICAgICAgICAgICBpZihub2RlVXNlci5hY3RpdmUgJiYgbm9kZVVzZXIuX3VzZXJuYW1lICYmIG5vZGVVc2VyLl91c2VybmFtZSA9PSB1c2VybmFtZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDYgO1xuICAgIH0sXG4gICAgdXBkYXRlQ2hpcCh1c2VyLCBzdWJDaGlwKXtcbiAgICAgICAgaWYodXNlcil7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNjtpKyspe1xuICAgICAgICAgICAgICAgIGxldCBub2RlVXNlciA9IHRoaXMuUE9TLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK2kpO1xuICAgICAgICAgICAgICAgIGxldCBsYl9tb25leSA9IG5vZGVVc2VyLmdldENoaWxkQnlOYW1lKFwibW9uZXlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBpZihub2RlVXNlci5hY3RpdmUgJiYgbm9kZVVzZXIuX3VzZXJuYW1lICYmIG5vZGVVc2VyLl91c2VybmFtZSA9PSB1c2VyLm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICBsYl9tb25leS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLmdldENoaXAodXNlciktc3ViQ2hpcCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVJlZnVuZENoaXAoY2Ipe1xuICAgICAgICBpZihTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLm1fdGFibGVJbmZvICYmIFNtYXJ0Rm94U0RLLlhvY0RpYUNvbnRyb2xsZXIubV90YWJsZUluZm8ucmVmdW5kKXtcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSBTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLm1fdGFibGVJbmZvLnJlZnVuZDtcbiAgICAgICAgICAgIGxldCBwb3NVc2VyICAgICAgID0gdGhpcy5QT1MuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBsZXQgbm9kZV90eHRfd2luID0gcG9zVXNlci5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5X3dpblwiKTtcbiAgICAgICAgICAgIG5vZGVfdHh0X3dpbi5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiK1V0aWxzLmFkZERvdFRvTnVtYmVyKGFtb3VudCk7XG4gICAgICAgICAgICBub2RlX3R4dF93aW4uYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHVzZXIgY2hpcFxuICAgICAgICAgICAgbGV0IGxiX21vbmV5ID0gcG9zVXNlci5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsZXQgY3VycmVudE1vbmV5ID0gbGJfbW9uZXkuc3RyaW5nLnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgY3VycmVudE1vbmV5ID0gcGFyc2VGbG9hdChjdXJyZW50TW9uZXkpICsgYW1vdW50O1xuICAgICAgICAgICAgbGJfbW9uZXkuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoY3VycmVudE1vbmV5KTtcbiAgICAgICAgICAgIGxldCBhY3Rpb25TY2FsZSA9ICAgY2MubW92ZVRvKDEsIGNjLnYyKDAsIDEwMCkpO1xuICAgICAgICAgICAgbGV0IHNjYWxlQ2FsbGJhY2sgPSAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgYWN0aW9uU2NhbGUsXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBub2RlX3R4dF93aW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNiKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNiKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG5vZGVfdHh0X3dpbi5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbm9kZV90eHRfd2luLnJ1bkFjdGlvbihzY2FsZUNhbGxiYWNrKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBpZihjYil7XG4gICAgICAgICAgICAgICAgY2IoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hvd1Jlc3VsdCgpe1xuICAgICAgICBsZXQgcmVzdWx0ID0gU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlci5tX3RhYmxlSW5mby5yZXN1bHQ7XG4gICAgICAgIGlmKCFyZXN1bHQpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHRoaXMuUmVzdWx0LmFjdGl2ZSAgPSB0cnVlO1xuICAgICAgICBsZXQgdG90YWxCbGFjayA9IDA7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLlJlc3VsdC5fY2hpbGRyZW4ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuUmVzdWx0Ll9jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHRbaV0gPT0gMCl7XG4gICAgICAgICAgICAgICAgVXRpbHMubG9hZFJlcyhpY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpLFwiL2ltYWdlcy94b2NkaWEvZGVuLXJlc3VsdFwiKTtcbiAgICAgICAgICAgICAgICB0b3RhbEJsYWNrKys7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBVdGlscy5sb2FkUmVzKGljb24uZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksXCIvaW1hZ2VzL3hvY2RpYS90cmFuZy1yZXN1bHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHhvY3hvYyhyZXN1bHQsIHdpbnBvdCwgaXNXaW4pIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLl9zdG9wRWZmZWN0V2luUG90KCk7XG4gICAgICAgIHRoaXMuX2lzT3BlbiAgICAgICAgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9wZW5CYXQuYWN0aXZlICAgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5Yb2NYb2NCYXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zaG93Tm90aWNlKDEsIFwiTeG7nyBiw6F0IVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLlhvY1hvY0JhdC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCdBdGFjay0xJywgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuWG9jWG9jQmF0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsICdBdGFjay0zJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbkJhdC5hY3RpdmUgICA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuQmF0LnBvc2l0aW9uID0gY2MudjIoMCwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5vcGVuQmF0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5pc05hbi5pc0NoZWNrZWQpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5CYXQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSg2KSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fb3BlbkJhdCh3aW5wb3QsIDAsIGlzV2luKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuQmF0LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMC41KSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fb3BlbkJhdCh3aW5wb3QsIDAsIGlzV2luKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxLjQpXG5cbiAgICAgICAgfS5iaW5kKHRoaXMpKTtcblxuICAgIH0sXG5cbiAgICByZXN1bWVYb2NYb2MocmVzdWx0LCB3aW5wb3QsIHRpbWUsIGlzV2luKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5faXNPcGVuICAgICAgICAgID0gZmFsc2U7XG4gICAgICAgIHNlbGYub3BlbkJhdC5hY3RpdmUgICA9IGZhbHNlO1xuICAgICAgICB0aGlzLlhvY1hvY0JhdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgYW5pbWF0aW9uID0gdGhpcy5Yb2NYb2NCYXQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgYW5pbWF0aW9uLnNldEFuaW1hdGlvbigxLCBcIkF0YWNrLTNcIix0cnVlKTtcbiAgICAgICAgc2VsZi5SZXN1bHQuYWN0aXZlICA9IHRydWU7XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzZWxmLlJlc3VsdC5fY2hpbGRyZW4ubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IHNlbGYuUmVzdWx0Ll9jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIFV0aWxzLmxvYWRSZXMoaWNvbi5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSxcIi9pbWFnZXMveG9jZGlhL1wiKyAocmVzdWx0W2ldID09IDAgPyAnZGVuLXJlc3VsdCcgOiAndHJhbmctcmVzdWx0JykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29wZW5CYXQod2lucG90LCAwLCBpc1dpbik7XG4gICAgfSxcbiAgICBfb3BlbkJhdCh3aW5wb3QsIHRpbWVXYWl0LCBpc1dpbikge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMub3BlbkJhdC5wb3NpdGlvbiA9IGNjLnYyKDAsIDApO1xuICAgICAgICB0aGlzLm9wZW5CYXQuYWN0aXZlICAgPSB0cnVlO1xuICAgICAgICBsZXQgbW92ZUJhdCA9IGNjLm1vdmVUbygxLCBjYy52MigxNDYsIDg4KSkuZWFzaW5nKGNjLmVhc2VJbigyKSk7XG4gICAgICAgIGlmICh0aGlzLmlzTmFuLmlzQ2hlY2tlZCl7XG4gICAgICAgICAgICBzZWxmLl9ydW5FZmZlY3RQb3RXaW4od2lucG90LCBpc1dpbik7XG4gICAgICAgICAgICBzZWxmLm9wZW5CYXQuYWN0aXZlICAgPSBmYWxzZTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcGVuQmF0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICB0aGlzLm9wZW5CYXQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKG1vdmVCYXQsIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLl9ydW5FZmZlY3RQb3RXaW4od2lucG90LCBpc1dpbik7XG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuQmF0LmFjdGl2ZSAgID0gZmFsc2U7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBfcnVuRWZmZWN0UG90V2luKHdpblBvdCwgaXNXaW4pe1xuICAgICAgICBpZihTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLm1fdGFibGVJbmZvLmlzQmV0dGluZylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYoIXdpblBvdCB8fCBpc1dpbiA9PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdpblBvdC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGlmKHdpblBvdFtpXSA+PSAwICYmIHdpblBvdFtpXSA8IDYpe1xuICAgICAgICAgICAgICAgIGxldCBub2RlUG90ID0gdGhpcy5saXN0Tm9kZVBvdFt3aW5Qb3RbaV1dO1xuICAgICAgICAgICAgICAgIGxldCBsaW5lID0gbm9kZVBvdC5nZXRDaGlsZEJ5TmFtZShcIkxpbmUtMVwiKTtcbiAgICAgICAgICAgICAgICBsaW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGluZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzV2luKXtcbiAgICAgICAgICAgIGxldCBwb3NVc2VyICAgICAgID0gdGhpcy5QT1MuY2hpbGRyZW5bMF07XG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uR2FtZSA9IHBvc1VzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJJbkdhbWUtVGhhbmctMlwiKTtcbiAgICAgICAgICAgIGxldCB0ZXh0R2FtZSAgICAgID0gcG9zVXNlci5nZXRDaGlsZEJ5TmFtZShcInRoYW5nLXRleHRcIik7XG4gICAgICAgICAgICBsZXQgbm9kZV90eHRfd2luID0gcG9zVXNlci5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5X3dpblwiKTtcbiAgICAgICAgICAgIG5vZGVfdHh0X3dpbi5wb3NpdGlvbiA9IGNjLnYyKDAsIDApO1xuICAgICAgICAgICAgbm9kZV90eHRfd2luLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIrVXRpbHMuYWRkRG90VG9OdW1iZXIoU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlci5tX3RhYmxlSW5mby53aW5DaGlwKTtcbiAgICAgICAgICAgIG5vZGVfdHh0X3dpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYW5pbWF0aW9uR2FtZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGV4dEdhbWUuYWN0aXZlICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgYW5pbWF0aW9uR2FtZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBcIklkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uU2NhbGUgPSAgIGNjLm1vdmVUbygxLjUsIGNjLnYyKDAsIDEwMCkpO1xuICAgICAgICAgICAgbGV0IHNjYWxlQ2FsbGJhY2sgPSAgY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgYWN0aW9uU2NhbGUsXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuNSksXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25HYW1lLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0ZXh0R2FtZS5hY3RpdmUgICAgICA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBub2RlX3R4dF93aW4uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBub2RlX3R4dF93aW4ucnVuQWN0aW9uKHNjYWxlQ2FsbGJhY2spO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyVmFyaWFibGUoMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faXNEYXQgPSBmYWxzZTtcbiAgICB9LFxuXG4gICAgX3J1bkNvdW50VGltZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VGltZSA+IDApXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZS0tO1xuICAgICAgICBpZiAodGhpcy5fY3VycmVudFRpbWUgPCA2KXtcbiAgICAgICAgICAgIHRoaXMuVGltZXIuY29sb3IgPSBjYy5Db2xvci5SRUQ7XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICB0aGlzLlRpbWVyLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50VGltZSA8IDEwKXtcbiAgICAgICAgICAgIHRoaXMuVGltZXIuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIjBcIisgdGhpcy5fY3VycmVudFRpbWU7XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICB0aGlzLlRpbWVyLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5fY3VycmVudFRpbWU7XG4gICAgfSxcbiAgICBfdHVybk9uVGltZSh0aW1lLCBpc0JldHRpbmcpe1xuICAgICAgICB0aGlzLlRpbWVyLmFjdGl2ZSAgICAgICA9IHRydWU7XG4gICAgICAgIHRoaXMuWG9jWG9jQmF0LmFjdGl2ZSAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuUmVzdWx0LmFjdGl2ZSAgICAgID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lICAgICAgID0gdGltZTtcbiAgICAgICAgdGhpcy5fcnVuQ291bnRUaW1lcigpO1xuICAgICAgICB0aGlzLl9zdG9wRWZmZWN0V2luUG90KCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5fcnVuQ291bnRUaW1lciwgMSk7XG4gICAgfSxcbiAgICBfdHVybk9mZlRpbWUoKXtcbiAgICAgICAgdGhpcy5UaW1lci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3J1bkNvdW50VGltZXIpO1xuICAgIH0sXG4gICAgc2hvd0xpc3RNeUNoaXBCZXQoYmV0cyl7XG4gICAgICAgIGlmICh0aGlzLl9pc0hhdmVDaGlwQmV0KGJldHMpKXtcbiAgICAgICAgICAgIHRoaXMuX215Q2hpcEJldCA9IGJldHM7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNEYXRMYXN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX215Q2hpcEJldCA9IGJldHM7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNEYXRMYXN0KVxuICAgICAgICAgICAgICAgIHRoaXMuX2lzRGF0TGFzdCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBiZXRzLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgdGhpcy5saXN0TXlDaGlwQmV0W2ldLnN0cmluZyA9IFwiKFwiICsgVXRpbHMuYWRkRG90VG9OdW1iZXIoYmV0c1tpXSkgKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hvd0xpc3RDaGlwQmV0KGJldHMpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHRoaXMubGlzdENoaXBCZXRbaV0uc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoYmV0c1tpXSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlbGVjdEJldENoaXAoZXZlbnQsIGJldENoaXApe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0Tm9kZUJldC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIHRoaXMubGlzdE5vZGVCZXRbaV0uc2NhbGUgPSAxO1xuICAgICAgICAgICAgdGhpcy5saXN0Tm9kZUJldFtpXS5nZXRDaGlsZEJ5TmFtZShcImxhYmVsXCIpLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY3VycmVudEJldCA9IGJldENoaXA7XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc2NhbGUgPSAxLjM7XG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYWJlbFwiKS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcbiAgICB9LFxuICAgIHJlcXVlc3RCZXQoZXZlbnQsIHR5cGUpe1xuICAgICAgICBpZiAodGhpcy5Yb2NYb2NCYXQuYWN0aXZlKXtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIsSQYW5nIG3hu58gYsOhdCBraMO0bmcgxJHGsOG7o2MgxJHhurd0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2lzRGF0ICAgICAgICA9IHRydWU7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlEYXRDdWEoKTtcbiAgICAgICAgdGhpcy5zZW5kUmVxdWVzdEJldCh0aGlzLl9jdXJyZW50QmV0LCB0eXBlKTtcbiAgICB9LFxuICAgIHNlbmRSZXF1ZXN0QmV0KGJldCwgdHlwZSkge1xuICAgICAgICB0aGlzLl9pc0RhdExhc3QgICAgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jdXJyZW50VHlwZSAgPSB0eXBlO1xuICAgICAgICBpZih0aGlzLl9jdXJyZW50VHlwZSA8IDAgfHwgdGhpcy5fY3VycmVudFR5cGUgPj0gNil7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJD4bunYSDEkeG6t3Qga2jDtG5nIGjhu6NwIGzhu4dcIik7XG4gICAgICAgIH1lbHNlIGlmKEdhbWVWYXJpYWJsZXMuZ2V0Q2hpcChTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIDwgYmV0KXtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIktow7RuZyDEkeG7pyB0aeG7gW4hXCIpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxldCBiZXRSZXF1ZXN0ID0gbmV3IFhvY0RpYVJlcXVlc3QuQmV0UmVxdWVzdCgpO1xuICAgICAgICAgICAgYmV0UmVxdWVzdC5zZXRCZXRDaGlwKGJldCk7XG4gICAgICAgICAgICBiZXRSZXF1ZXN0LnNldFR5cGVQb3QodGhpcy5fY3VycmVudFR5cGUpO1xuICAgICAgICAgICAgU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChiZXRSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGFjdGlvbkZseUNoaXBUb1BvdCh1c2VybmFtZSwgcG90VHlwZSwgbW9uZXkpe1xuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRQb3NGcm9tTmFtZSh1c2VybmFtZSk7XG4gICAgICAgIGxldCBjaGlwTmFtZSA9IFwiY2hpcDFcIjtcbiAgICAgICAgaWYobW9uZXkgPiAxMDAwICYmIG1vbmV5IDw9IDUwMDApe1xuICAgICAgICAgICAgY2hpcE5hbWUgPSBcImNoaXAxXCI7XG4gICAgICAgIH1lbHNlIGlmKG1vbmV5ID4gNTAwMCAmJiBtb25leSA8PSAyMDAwMCl7XG4gICAgICAgICAgICBjaGlwTmFtZSA9IFwiY2hpcDJcIjtcbiAgICAgICAgfWVsc2UgaWYobW9uZXkgPiAyMDAwMCAmJiBtb25leSA8PSAxMDAwMDApe1xuICAgICAgICAgICAgY2hpcE5hbWUgPSBcImNoaXAzXCI7XG4gICAgICAgIH1lbHNlIGlmKG1vbmV5ID4gMTAwMDAwICYmIG1vbmV5IDw9IDUwMDAwMCl7XG4gICAgICAgICAgICBjaGlwTmFtZSA9IFwiY2hpcDRcIjtcbiAgICAgICAgfWVsc2UgaWYobW9uZXkgPiA1MDAwMDApe1xuICAgICAgICAgICAgY2hpcE5hbWUgPSBcImNoaXA1XCI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMDsgIGkgPCA1OyBpKyspe1xuICAgICAgICAgICAgbGV0IGNoaXBOb2RlID0gdGhpcy5nZXRDaGlwTm9kZSgpO1xuICAgICAgICAgICAgVXRpbHMubG9hZFJlcyhjaGlwTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSxcImltYWdlcy94b2NkaWEvXCIrY2hpcE5hbWUpO1xuICAgICAgICAgICAgbGV0IG5vZGVBdmF0YXIgPSB0aGlzLlBPUy5nZXRDaGlsZEJ5TmFtZShcInBvc19cIitwb3MpO1xuICAgICAgICAgICAgY2hpcE5vZGUucG9zaXRpb24gPSBub2RlQXZhdGFyLnBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IG5vZGVGcm9tID0gdGhpcy5saXN0Tm9kZVBvdFtwb3RUeXBlXTtcbiAgICAgICAgICAgIGxldCBwb3NUbyA9IHRoaXMuZ2V0UG9zaXRpb25Jbk90aGVyTm9kZShub2RlRnJvbSwgdGhpcy5ub2RlKTtcbiAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIGNoaXBOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaSowLjEpLCBjYy5tb3ZlVG8oMC4zLCBjYy52Mihwb3NUby54LCBwb3NUby55KSkuZWFzaW5nKGNjLmVhc2VPdXQoMykpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5yZXR1cm5DaGlwTm9kZSh0aGlzKTtcbiAgICAgICAgICAgIH0sIGNoaXBOb2RlKSkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjbGlja0V4aXRSb29tKGV2ZW50KXtcbiAgICAgICAgbGV0IHJvb20gPSBTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwieG9jZGlhXCIpO1xuICAgICAgICBpZihyb29tKXtcbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlhvY0RpYUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQobmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5MZWF2ZVJvb21SZXF1ZXN0KHJvb20pKTtcbiAgICAgICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSUhvbWVcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50U29pQ2F1KCkge1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xuICAgICAgICBsZXQgaGlzdG9yeVJlcXVlc3QgPSBuZXcgWG9jRGlhUmVxdWVzdC5IaXN0b3J5UmVzdWx0UmVxdWVzdCgpO1xuICAgICAgICBTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKGhpc3RvcnlSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgfSxcbiAgICBzaG93U29pQ2F1KGRhdGFDYXUpIHtcbiAgICAgICAgdGhpcy5fZGF0YUNhdSA9IGRhdGFDYXU7XG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGFDYXUpO1xuICAgICAgICB0aGlzLnNob3coXCJVSVhvY0RpYVNvaUNhdVwiLCB7cG9wOiB0cnVlLCBzcmM6ICd4b2NkaWEnLCBkYXRhOiBkYXRhQ2F1fSk7XG4gICAgfSxcbiAgICBldmVudEdhcFRoZXAoKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBpZiAodGhpcy5faXNIYXZlQ2hpcEJldCh0aGlzLl9teUNoaXBCZXQpICYmICAhdGhpcy5faXNEYXQpe1xuICAgICAgICAgICAgaWYgKHRoaXMuWG9jWG9jQmF0LmFjdGl2ZSl7XG4gICAgICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwixJBhbmcgbeG7nyBiw6F0IGtow7RuZyDEkcaw4bujYyDEkeG6t3RcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5faXNEYXQgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fbXlDaGlwQmV0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fbXlDaGlwQmV0W2ldID4gMClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kUmVxdWVzdEJldCgyKnRoaXMuX215Q2hpcEJldFtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50RGF0TGFpKCkge1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIGlmICh0aGlzLl9pc0hhdmVDaGlwQmV0KHRoaXMuX215Q2hpcEJldCkgJiYgICF0aGlzLl9pc0RhdCl7XG4gICAgICAgICAgICBpZiAodGhpcy5Yb2NYb2NCYXQuYWN0aXZlKXtcbiAgICAgICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCLEkGFuZyBt4bufIGLDoXQga2jDtG5nIMSRxrDhu6NjIMSR4bq3dFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pc0RhdCAgICAgICAgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLl9teUNoaXBCZXQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9teUNoaXBCZXRbaV0gPiAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0QmV0KHRoaXMuX215Q2hpcEJldFtpXSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIF9pc0hhdmVDaGlwQmV0KGxpc3RDaGlwQmV0KSB7XG4gICAgICAgIGxldCBoYXZlQ2hpcCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RDaGlwQmV0Lmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmIChsaXN0Q2hpcEJldFtpXSA+IDApe1xuICAgICAgICAgICAgICAgIGhhdmVDaGlwID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gaGF2ZUNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhdmVDaGlwO1xuICAgIH0sXG4gICAgZXZlbnROYW4oKSB7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICB9LFxuICAgIGV2ZW50U2hvd01lbnUoKSB7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgdGhpcy5MaXN0TWVudS5hY3RpdmUgPSAhdGhpcy5MaXN0TWVudS5hY3RpdmU7XG4gICAgfSxcbiAgICBldmVudFJhbmsoKSB7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgbW0uTG9hZGluZy5zaG93KCk7XG4gICAgICAgIHRoaXMuTGlzdE1lbnUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IENhc2lub1JlcXVlc3QuTGVhZGVyQm9hcmRSZXF1ZXN0KCk7XG4gICAgICAgIFNtYXJ0Rm94U0RLLlhvY0RpYUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpXG4gICAgfSxcbiAgICBldmVudEhlbHBlcigpIHtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICB0aGlzLkxpc3RNZW51LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3coXCJVSVhvY0RpYUhlbHBlclwiLCB7cG9wOiB0cnVlLCBzcmM6ICd4b2NkaWEnfSk7XG4gICAgfSxcbiAgICBldmVudEhpc3RvcnkoKSB7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgbW0uTG9hZGluZy5zaG93KCk7XG4gICAgICAgIHRoaXMuTGlzdE1lbnUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IENhc2lub1JlcXVlc3QuSGlzdG9yeVJlcXVlc3QoKTtcbiAgICAgICAgU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgfSxcbiAgICBldmVudFNob3dDaGF0KGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgdGhpcy5DaGF0RW1vamlMYXllci5hY3RpdmUgPSAhdGhpcy5DaGF0RW1vamlMYXllci5hY3RpdmU7XG4gICAgICAgIGlmICh0aGlzLkNoYXRFbW9qaUxheWVyLmFjdGl2ZSlcbiAgICAgICAgICAgIHRoaXMuQ2hhdEVtb2ppTGF5ZXIuZ2V0Q29tcG9uZW50KFwiQ2hhdEVtb2ppTGF5ZXJcIikuaW5pdENvbnRyb2xsZXIoU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlci5ab25lSW5zdGFuY2UpO1xuICAgIH0sXG4gICAgb25QdWJsaWNNZXNzYWdlKG1lc3NEYXRhKXtcbiAgICAgICAgbGV0IG1zZ0l0ZW0gICAgPSBtZXNzRGF0YS5tc2c7XG4gICAgICAgIGxldCBwb3MgICAgICAgID0gdGhpcy5nZXRQb3NGcm9tTmFtZShtZXNzRGF0YS5zZW5kZXIubmFtZSk7XG4gICAgICAgIGxldCBlbW9qaUJveCAgID0gdGhpcy5QT1MuY2hpbGRyZW5bcG9zXS5nZXRDaGlsZEJ5TmFtZShcIkVNT0pcIik7XG4gICAgICAgIGlmIChlbW9qaUJveCAhPSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgbGV0IHNlbGYgICAgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IGlzRW1vaWogPSBtc2dJdGVtLmluZGV4T2YoXCJlbW9pal9cIikgPj0gMDtcbiAgICAgICAgICAgIGxldCBlbW9qaU5vZGUgPSBlbW9qaUJveC5nZXRDaGlsZEJ5TmFtZShcIkVNT0pcIik7XG4gICAgICAgICAgICBsZXQgYm94Tm9kZSAgID0gZW1vamlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XG4gICAgICAgICAgICBlbW9qaU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICBib3hOb2RlLmFjdGl2ZSAgID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoaXNFbW9pail7XG4gICAgICAgICAgICAgICAgZW1vamlOb2RlLmFjdGl2ZSAgID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBlbW9qaU5vZGUub3BhY2l0eSAgPSAyNTU7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBtc2dJdGVtLnJlcGxhY2UoXCJlbW9pal9cIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgZW1vamlOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICAgICAgZW1vamlOb2RlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIHR5cGUsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBlbW9qaU5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjUpLCBjYy5mYWRlT3V0KDIpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGVtb2ppTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgIGJveE5vZGUuYWN0aXZlICAgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJveE5vZGUub3BhY2l0eSAgPSAyNTU7XG4gICAgICAgICAgICAgICAgYm94Tm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgICAgIGJveE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9jaGF0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbXNnSXRlbTtcbiAgICAgICAgICAgICAgICBib3hOb2RlLmdldENvbXBvbmVudChjYy5MYXlvdXQpLnVwZGF0ZUxheW91dCgpO1xuICAgICAgICAgICAgICAgIGJveE5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyKSwgY2MuZmFkZU91dCgyKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBib3hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/UIRoulette.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3187bQ/8idCz414/y8vl4tl', 'UIRoulette');
// scripts/roulette/UIRoulette.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    ChatEmojiLayer: cc.Node,
    lbSession: cc.Label,
    lbRoom: cc.Label,
    lbTotalBet: cc.Label,
    listNodeBet: cc.Node,
    listPosBet: cc.Node,
    rouletteXoay: cc.Node,
    Timer: cc.Node,
    Ball: cc.Node,
    canXoay: cc.Node,
    boarXoay: cc.Node,
    menu: cc.Node,
    soiCau: cc.Node,
    listviewCau: Listview,
    _currentType: -1,
    _currentBet: 1000,
    ChipPrefab: cc.Prefab,
    PlayerPos: cc.Node,
    Noti: cc.Node,
    listCauTop: cc.Node,
    fontWin: cc.Font,
    fontLose: cc.Font,
    _currentTime: 0,
    _dataCau: [],
    _isDat: false,
    _lastBet: null,
    _currentPercent: 0,
    _resultPos: 0,
    _totalBet: 0,
    _listChipBet: [],
    _listTypeBet: [],
    listDataCau: [],
    _ListRed: [],
    _isShowCau: false
  },
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    var self = this;
    this._listTypeBet = [];
    this._listChipBet = [];
    this.ListChipImg = {
      "1000": "1k",
      "5000": "5k",
      "10000": "10k",
      "500000": "500k",
      "1000000": "1m",
      "5000000": "5m"
    };
    this._currentBet = 1000;
    this._lastBet = this.listNodeBet.children[0];
    this.listNodePot = this.listPosBet.children;
    this._isDat = false;
    this.poolChip = [];

    for (var i = 0; i < 20; i++) {
      var chip = cc.instantiate(this.ChipPrefab);
      chip.scale = 0.33;
      this.node.addChild(chip);
      chip.active = false;
      this.poolChip.push(chip);
    }

    this.listMyChipBet = [];
    this._ListRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
  },
  onDisable: function onDisable() {
    cc.director.getCollisionManager().enabled = false;
  },
  onEnable: function onEnable() {
    cc.director.getCollisionManager().enabled = true;
    this._dataCau = [];
    this._currentPercent = 0;
    this.hideAll();
    this.Ball.getComponent("Ball").addEventOnCollisionEnter(function (tag) {
      if (tag == this._resultPos) {
        this.rouletteXoay.stopAllActions();
        this.canXoay.stopAllActions();
        this.Ball.stopAllActions();
        this.scheduleOnce(this.showResultWin, 2);
      }
    }.bind(this));
    this._isShowCau = false;
    this.sendRequestSoiCau();
  },
  eventBet: function eventBet(event, data) {
    mm.audio.playButton();

    if (!SmartFoxSDK.RouletteController.m_tableInfo.isBetting) {
      this.showNoti("Không được cược!");
      return;
    }

    if (!this._isDat) {
      this._listTypeBet = [];
      this._listChipBet = [];
    }

    this._isDat = true;
    mm.audio.playDatCua();
    this.sendRequestBet(this._currentBet, data);
  },
  hideAll: function hideAll() {
    this._isDat = false;
    this.Noti.active = false;
    this.Timer.active = false;
    this.rouletteXoay.stopAllActions();
    this.canXoay.stopAllActions();
    this.Ball.stopAllActions();
    this.boarXoay.stopAllActions();
    this.updateTotalBet(0);
    this.rouletteXoay.active = false;
    Promise.all(this.listNodePot.map(function (nodeBet, index) {
      nodeBet.getChildByName("bg_win").active = false;
    }));
    Promise.all(this.poolChip.map(function (chip, index) {
      if (chip.active) {
        chip.removeFromParent(true);
        chip.active = false;
      }
    }));
  },
  runActionChangeMoney: function runActionChangeMoney(username, money, speed) {
    var fontTxt = money > 0 ? this.fontWin : this.fontLose;
    var pos = this.getPosFromName(username);
    var nodeAvatar = this.PlayerPos.getChildByName("pos_" + pos);

    if (nodeAvatar) {
      var moneyWin = nodeAvatar.getChildByName("money_win").getComponent(cc.Label);

      if (moneyWin.node.active) {
        money += this.getMoneyFromString(moneyWin.string);
      }

      if (money == 0) return;
      moneyWin.node.active = true;
      moneyWin.node.stopAllActions();
      moneyWin.node.position = cc.v2(0, 20);
      moneyWin.font = fontTxt;
      moneyWin.string = money > 0 ? "+" + Utils.addDotToNumber(money) : Utils.addDotToNumber(money);
      var nodeTo = cc.v2(0, 120);
      if (pos > 6) nodeTo = cc.v2(0, 50);
      moneyWin.node.runAction(cc.sequence(cc.moveTo(0.5 * speed, nodeTo).easing(cc.easeOut(0.5)), cc.delayTime(1.5 * speed), cc.callFunc(function () {
        moneyWin.string = 0;
        moneyWin.node.active = false;
      })));
      this.updateMoney(money, nodeAvatar);
    }
  },
  getMoneyFromString: function getMoneyFromString(moneyString) {
    moneyString = moneyString.replace("+", ""); // moneyString = moneyString.replace("-", "");

    moneyString = moneyString.split(".").join("");
    return parseFloat(moneyString);
  },
  showResult: function showResult(result) {
    if (this._dataCau.length > this.listCauTop.length) {
      this._dataCau.shift();
    }

    this._dataCau.push(result);

    this.runActionRotationBall(result);
  },
  getNumberCardFromChip: function getNumberCardFromChip(money) {
    var number5m = Math.floor(money / 5000000);
    money = money - number5m * 5000000;
    var number1m = Math.floor(money / 1000000);
    money = money - number1m * 1000000;
    var number500k = Math.floor(money / 500000);
    money = money - number500k * 500000;
    var number10k = Math.floor(money / 10000);
    money = money - number10k * 10000;
    var number5k = Math.floor(money / 5000);
    money = money - number5k * 5000;
    var number1k = Math.floor(money / 1000);
    return [number1k, number5k, number10k, number500k, number1m, number5m];
  },
  addChipToPot: function addChipToPot(listTypePotBet, listMyChipPot) {
    for (var i = 0; i < listTypePotBet.length; i++) {
      this.actionFlyChipToPot(SmartFoxSDK.RouletteController.ZoneInstance.mySelf, listTypePotBet[i], listMyChipPot[i]);
    }
  },
  resumeGame: function resumeGame(winPot, time, usersOnboard, chipUserOnBoard, result, winChip) {
    if (this._dataCau.length > this.listCauTop.length) {
      this._dataCau.shift();
    }

    this._dataCau.push(result);

    if (time <= 10) this.showResultWin();else this.showResult(result);
  },
  getChipNode: function getChipNode() {
    for (var i = 0; i < this.poolChip.length; i++) {
      if (!this.poolChip[i].active) {
        this.poolChip[i].active = true;
        this.poolChip[i].position = cc.v2(0, 0);
        this.poolChip[i].parent = this.node;
        return this.poolChip[i];
      }
    }

    var chip = cc.instantiate(this.ChipPrefab);
    this.node.addChild(chip);
    chip.scale = 0.33;
    chip.active = true;
    this.poolChip.push(chip);
    return chip;
  },
  returnChipNode: function returnChipNode(chipNode) {
    chipNode.active = false;
  },
  showListUsers: function showListUsers(listUserShow) {
    for (var i = 0; i < this.PlayerPos.childrenCount - 1; i++) {
      var nodeUser = this.PlayerPos.getChildByName("pos_" + i);
      var userFrame = nodeUser.getChildByName("user_frame");
      var lb_name = userFrame.getChildByName("name").getComponent(cc.Label);
      var user = i >= listUserShow.length ? null : listUserShow[i];

      if (user && user.getVariable("role").value != "admin") {
        nodeUser.active = true;
        nodeUser._username = user.name;
        lb_name.string = GameVariables.getDisplayName(user);
        this.updateMoney(GameVariables.getChip(user), nodeUser);
      } else {
        nodeUser.active = false;
        nodeUser._username = null;
      }
    }
  },
  getPosFromName: function getPosFromName(username) {
    for (var i = 0; i < this.PlayerPos.childrenCount - 1; i++) {
      var nodeUser = this.PlayerPos.getChildByName("pos_" + i);

      if (nodeUser.active && nodeUser._username && nodeUser._username == username) {
        return i;
      }
    }

    return this.PlayerPos.childrenCount - 1;
  },
  updateChip: function updateChip(user) {
    for (var i = 0; i < this.PlayerPos.childrenCount - 1; i++) {
      var nodeUser = this.PlayerPos.getChildByName("pos_" + i);

      if (nodeUser.active && nodeUser._username && nodeUser._username == user.name) {
        this.updateMoney(GameVariables.getChip(user), nodeUser);
        return;
      }
    }
  },
  updateListChipBet: function updateListChipBet(typePot, betChip) {
    this._listTypeBet.push(typePot);

    this._listChipBet.push(betChip);
  },
  selectBetChip: function selectBetChip(event, betChip) {
    mm.audio.playButton();
    this._lastBet.getChildByName("bg_select").active = false;
    event.currentTarget.getChildByName("bg_select").active = true;
    this._lastBet = event.currentTarget;
    this._currentBet = parseInt(betChip);
  },
  updateTotalBet: function updateTotalBet(totalBet) {
    this.lbTotalBet.string = Utils.addDotToNumber(Math.abs(totalBet));
  },
  sendRequestBet: function sendRequestBet(bet, type) {
    this._currentType = type;

    if (this._currentType < 0 || this._currentType > 48) {
      this.showNoti("Chọn lại giá trị cược");
    } else if (GameVariables.getChip(SmartFoxSDK.RouletteController.ZoneInstance.mySelf) < bet) {
      this.showNoti("Không đủ tiền cược!");
    } else {
      var betRequest = new RouletteRequest.BetRequest();
      betRequest.setBetChip(bet);
      betRequest.setTypePot(this._currentType);
      SmartFoxSDK.RouletteController.ZoneInstance.send(betRequest.toSRequest());
    }
  },
  actionFlyChipToPot: function actionFlyChipToPot(username, potType, money) {
    if (this.ListChipImg.hasOwnProperty(money)) {
      this.actionFlyOneChipToPot(username, potType, money);
    } else {
      this.actionFlyMutiChipToPot(username, potType, money);
    }
  },
  runActionToGirl: function runActionToGirl(cb) {
    var _this = this;

    var totalActive = 0;

    for (var i = 0; i < this.poolChip.length; i++) {
      if (this.poolChip[i].active) totalActive++;
    }

    var count = 0;

    var _loop = function _loop(_i) {
      var chipNode = null;

      if (_this.poolChip[_i].active) {
        count++;
        chipNode = _this.poolChip[_i];

        var posTo = _this.getPositionInOtherNode(chipNode, _this.node);

        chipNode.parent = _this.node;
        chipNode.position = posTo;
        var positionGirl = cc.v2(Math.random() * 50 - 25, Math.random() * 50 - 25);
        chipNode.runAction(cc.sequence(cc.moveTo(1, positionGirl), cc.delayTime(0.05 * _i), cc.callFunc(function () {
          chipNode.stopAllActions();
          chipNode.active = false;
          chipNode.removeFromParent(true);

          if (count >= totalActive) {
            count = -1;
            if (cb) cb();
          }
        })));
      }
    };

    for (var _i = 0; _i < this.poolChip.length; _i++) {
      _loop(_i);
    }
  },
  actionFlyOneChipToPot: function actionFlyOneChipToPot(username, potType, money) {
    var pos = this.getPosFromName(username);
    var chipName = "1k";

    if (this.ListChipImg.hasOwnProperty(money)) {
      chipName = this.ListChipImg[money];
      var chipNode = this.getChipNode();
      Utils.loadRes(chipNode.getComponent(cc.Sprite), "roulette/phinh/" + chipName);
      var nodeAvatar = this.PlayerPos.getChildByName("pos_" + pos);
      chipNode.position = nodeAvatar.position;
      var nodeFrom = this.getPosBet(potType);
      var posTo = this.getPositionInOtherNode(nodeFrom, this.node);
      chipNode.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(posTo.x, posTo.y)).easing(cc.easeOut(1)), cc.callFunc(function () {
        chipNode.position = cc.v2(Math.random() * nodeFrom.width - nodeFrom.width / 2, Math.random() * nodeFrom.height - nodeFrom.height / 2);
        chipNode.parent = nodeFrom;
      })));
    }
  },
  actionFlyMutiChipToPot: function actionFlyMutiChipToPot(username, potType, money) {
    var self = this;
    var listCard = this.getNumberCardFromChip(money);
    var allKey = Object.keys(this.ListChipImg);
    Promise.all(allKey.map(function (key, index) {
      if (listCard[index] > 0) {
        var chip = parseInt(key);

        for (var i = 0; i < listCard[index]; i++) {
          self.actionFlyOneChipToPot(username, potType, chip);
        }
      }
    }));
  },
  actionFlyChipToPlayer: function actionFlyChipToPlayer(username, money, speed) {
    var self = this;
    var listCard = this.getNumberCardFromChip(money);
    var allKey = Object.keys(this.ListChipImg);
    var pos = self.getPosFromName(username);
    var nodeAvatar = self.PlayerPos.getChildByName("pos_" + pos);
    var positionTo = nodeAvatar.position;
    var total = 0;
    var allChipNode = [];
    Promise.all(allKey.map(function (key, index) {
      if (listCard[index] > 0) {
        var chip = parseInt(key);

        for (var i = 0; i < listCard[index]; i++) {
          var chipName = "1k";
          if (self.ListChipImg.hasOwnProperty(chip)) chipName = self.ListChipImg[key];
          var chipNode = self.getChipNode();
          Utils.loadRes(chipNode.getComponent(cc.Sprite), "roulette/phinh/" + chipName);
          chipNode.position = cc.v2(Math.random() * 50 - 20, Math.random() * 10 - 10);
          allChipNode.push(chipNode);
        }
      }
    })).then(function (result) {
      Promise.all(allChipNode.map(function (chipNode, index) {
        if (chipNode != null) {
          total++;
          chipNode.runAction(cc.sequence(cc.delayTime(total * 0.1 * speed), cc.moveTo(1 * speed, positionTo).easing(cc.easeOut(1)), cc.callFunc(function () {
            chipNode.removeFromParent(true);
            chipNode.active = false;
          })));
        }
      })).then(function (result) {
        self.runActionChangeMoney(username, money, speed);
      });
    });
  },
  getPosBet: function getPosBet(potType) {
    var betNode = this.listNodePot[potType].getChildByName("nodeBet");

    if (betNode.childrenCount > 30) {
      var card = betNode.children[0];
      card.removeFromParent(true);
      card.active = false;
    }

    if (!betNode.active) betNode.active = true;
    return betNode;
  },
  clickExitRoom: function clickExitRoom(event) {
    mm.audio.playButton();
    var room = SmartFoxSDK.RouletteController.ZoneInstance.getRoomByName("roulette");

    if (room) {
      SmartFoxSDK.RouletteController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
      mm.Loading.show();
    } else {
      UIManger.show("UIHome");
    }
  },
  eventHelper: function eventHelper() {
    mm.audio.playButton();
    this.show("UIRouletteHelper", {
      pop: true,
      src: 'roulette'
    });
  },
  eventSoiCau: function eventSoiCau() {
    mm.audio.playButton();
    this._isShowCau = true;
    if (this.soiCau.active) this.soiCau.active = false;else {
      if (this._dataCau.length < 1) {
        mm.Loading.show();
        this.sendRequestSoiCau();
      } else {
        this.showSoiCau(this._dataCau);
      }
    }
  },
  sendRequestSoiCau: function sendRequestSoiCau() {
    var historyRequest = new RouletteRequest.HistoryRequest();
    SmartFoxSDK.RouletteController.ZoneInstance.send(historyRequest.toSRequest());
  },
  showSoiCau: function showSoiCau(dataCau) {
    mm.Loading.hide();
    this._dataCau = dataCau;

    if (this._isShowCau || this.soiCau.active) {
      this._reformatDataCau();

      this.soiCau.active = true;
      this.listviewCau.numItems = this.listDataCau.length;
      this.listviewCau.node.getComponent(cc.ScrollView).scrollToRight(1);
    }

    this.updateListCauTop();
    this._isShowCau = false;
  },
  eventGapThep: function eventGapThep() {
    mm.audio.playButton();

    if (this._listTypeBet.length > 0 && !this._isDat) {
      this._isDat = true;

      for (var i = 0; i < this._listTypeBet.length; i++) {
        this.sendRequestBet(2 * this._listChipBet[i], this._listTypeBet[i]);
      }

      this._listChipBet = [];
      this._listTypeBet = [];
    } else {
      this.showNoti("No data!");
    }
  },
  eventDatLai: function eventDatLai() {
    mm.audio.playButton();

    if (this._listTypeBet.length > 0 && !this._isDat) {
      this._isDat = true;

      for (var i = 0; i < this._listTypeBet.length; i++) {
        this.sendRequestBet(this._listChipBet[i], this._listTypeBet[i]);
      }

      this._listChipBet = [];
      this._listTypeBet = [];
    } else {
      this.showNoti("Không có dữ liệu cược!");
    }
  },
  showNoti: function showNoti(message) {
    this.Noti.active = true;
    this.Noti.getChildByName("lb_noti_content").getComponent(cc.Label).string = message;
    this.scheduleOnce(function () {
      this.Noti.active = false;
    }, 1.5);
  },
  onListRender: function onListRender(item, idx) {
    var cau = this.listDataCau[idx];
    item.getComponent(item.name).init(cau);
  },
  showResultWin: function showResultWin() {
    var _this2 = this;

    var self = this;
    this.showSoiCau(this._dataCau);
    this.rouletteXoay.active = false;
    var winPot = SmartFoxSDK.RouletteController.m_tableInfo.winpot;
    var usersOnboard = SmartFoxSDK.RouletteController.m_tableInfo.usersOnboard;
    var chipUserOnBoard = SmartFoxSDK.RouletteController.m_tableInfo.chipUserOnBoard;

    if (winPot != undefined) {
      (function () {
        var speed = 1;
        var isRun = true;

        for (var i = 0; i < winPot.length; i++) {
          var pos = winPot[i];
          var blink = cc.blink(2 * speed, 8);

          var bgWin = _this2.listNodePot[pos].getChildByName("bg_win");

          bgWin.active = true;
          bgWin.runAction(cc.sequence(blink, cc.delayTime(speed), cc.callFunc(function () {
            if (isRun) {
              isRun = false;
              self.runActionToGirl(function () {
                if (chipUserOnBoard.length > 0) {
                  Promise.all(usersOnboard.map(function (username, index) {
                    self.actionFlyChipToPlayer(username, chipUserOnBoard[index], speed);
                  }));
                }
              });
            }
          })));
        }
      })();
    }
  },
  runActionRotationBall: function runActionRotationBall(pos) {
    var self = this;
    this._resultPos = pos;
    this.rouletteXoay.active = true;
    this.rouletteXoay.scale = 0;
    this.boarXoay.stopAllActions();
    this.canXoay.stopAllActions();
    this.Ball.stopAllActions();
    var scaleTo = cc.scaleTo(0.3, 1);
    this.rouletteXoay.runAction(cc.sequence(scaleTo, cc.delayTime(0.2), cc.callFunc(function () {
      var pos1 = cc.v2(376, 0);
      var pos2 = cc.v2(324, 0);
      var pos3 = cc.v2(212, 0);
      var moveTo2 = cc.moveTo(1, pos2);
      var moveTo3 = cc.moveTo(1, pos3);
      var actionBy = cc.rotateBy(4, 360);
      var action1 = cc.rotateBy(1, -360);
      var action2 = cc.rotateBy(1.5, -360);
      var action3 = cc.rotateBy(2, -360);
      var jumpUp = cc.jumpBy(0.5, cc.v2(0, 0), 20, 5);
      self.boarXoay.runAction(actionBy.repeatForever());
      self.Ball.position = pos1;
      self.canXoay.runAction(cc.sequence(action1.repeat(3), cc.callFunc(function () {
        self.Ball.runAction(moveTo2);
        self.canXoay.runAction(cc.sequence(action2.repeat(0.05), cc.callFunc(function () {
          self.Ball.runAction(cc.sequence(moveTo3, cc.delayTime(0.5), jumpUp));
          self.canXoay.runAction(action3.repeat(2));
        })));
      })));
    })));
  },
  eventOpenMenu: function eventOpenMenu() {
    mm.audio.playButton();
    this.menu.active = !this.menu.active;
  },
  updateListCauTop: function updateListCauTop() {
    var self = this;
    var start = 0;
    var cauLength = this._dataCau.length;
    if (this._dataCau.length <= this.listCauTop.childrenCount) start = 0;else start = this._dataCau.length - this.listCauTop.childrenCount;
    Promise.all(this.listCauTop.children.map(function (cauNode, index) {
      cauNode.active = false;

      if (index < cauLength) {
        cauNode.active = true;
        cauNode.getComponent(cc.Label).string = self._dataCau[start + index];
        cauNode.color = self._ListRed.indexOf(self._dataCau[start + index]) > 0 ? cc.Color.RED : cc.Color.BLACK;
      }
    }));
  },
  _reformatDataCau: function _reformatDataCau() {
    this.MaxRow = 4;
    this.listDataCau = [];
    var maxCat = Math.ceil(this._dataCau.length / this.MaxRow);

    for (var j = 0; j < maxCat; j++) {
      this.listDataCau.push(this._dataCau.slice(j * this.MaxRow, (j + 1) * this.MaxRow));
    }
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;
    var list = item.listItem._list;
    var str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;

    if (list.selectedMode == 2) {
      //Nếu nó là chế độ đa lựa chọn
      str += '，Giá trị hiện tại：' + val;
    }

    console.log(str);
  },
  eventRank: function eventRank() {
    mm.audio.playButton();
    mm.Loading.show();
    this.menu.active = false;
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.RouletteController.ZoneInstance.send(request.toSRequest());
  },
  eventHistory: function eventHistory() {
    mm.audio.playButton();
    mm.Loading.show();
    this.menu.active = false;
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.RouletteController.ZoneInstance.send(request.toSRequest());
  },
  _turnOnTime: function _turnOnTime(time, maxTime) {
    this.Timer.active = true;
    this.Timer.getComponent("TimeSubRoulette").setTotalProgress(maxTime);
    this.Timer.getComponent("TimeSubRoulette").setTotalRemain(time);
    this.Timer.getComponent("TimeSubRoulette").turnOnTimer();
    this._currentTime = time;
  },
  _turnOffTime: function _turnOffTime() {
    this.Timer.getComponent("TimeSubRoulette").turnOffTimer();
    this.Timer.active = false;
  },
  eventShowChat: function eventShowChat(event, data) {
    mm.audio.playButton();
    this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
    if (this.ChatEmojiLayer.active) this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.RouletteController.ZoneInstance);
  },
  onPublicMessage: function onPublicMessage(messData) {
    var msgItem = messData.msg;
    var pos = this.getPosFromName(messData.sender.name);
    var emojiBox = this.PlayerPos.children[pos].getChildByName("EMOJ");

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
    this.updateMoney(GameVariables.Poker.getChip(SmartFoxSDK.RouletteController.ZoneInstance.mySelf) - subChip, this.PlayerPos.children[0]);
  },
  updateMoney: function updateMoney(money, nodePlayer) {
    nodePlayer.getChildByName("user_frame").getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(money);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm91bGV0dGVcXFVJUm91bGV0dGUuanMiXSwibmFtZXMiOlsiTGlzdHZpZXciLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiQ2hhdEVtb2ppTGF5ZXIiLCJOb2RlIiwibGJTZXNzaW9uIiwiTGFiZWwiLCJsYlJvb20iLCJsYlRvdGFsQmV0IiwibGlzdE5vZGVCZXQiLCJsaXN0UG9zQmV0Iiwicm91bGV0dGVYb2F5IiwiVGltZXIiLCJCYWxsIiwiY2FuWG9heSIsImJvYXJYb2F5IiwibWVudSIsInNvaUNhdSIsImxpc3R2aWV3Q2F1IiwiX2N1cnJlbnRUeXBlIiwiX2N1cnJlbnRCZXQiLCJDaGlwUHJlZmFiIiwiUHJlZmFiIiwiUGxheWVyUG9zIiwiTm90aSIsImxpc3RDYXVUb3AiLCJmb250V2luIiwiRm9udCIsImZvbnRMb3NlIiwiX2N1cnJlbnRUaW1lIiwiX2RhdGFDYXUiLCJfaXNEYXQiLCJfbGFzdEJldCIsIl9jdXJyZW50UGVyY2VudCIsIl9yZXN1bHRQb3MiLCJfdG90YWxCZXQiLCJfbGlzdENoaXBCZXQiLCJfbGlzdFR5cGVCZXQiLCJsaXN0RGF0YUNhdSIsIl9MaXN0UmVkIiwiX2lzU2hvd0NhdSIsIm9uTG9hZCIsImRpcmVjdG9yIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJzZWxmIiwiTGlzdENoaXBJbWciLCJjaGlsZHJlbiIsImxpc3ROb2RlUG90IiwicG9vbENoaXAiLCJpIiwiY2hpcCIsImluc3RhbnRpYXRlIiwic2NhbGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJhY3RpdmUiLCJwdXNoIiwibGlzdE15Q2hpcEJldCIsIm9uRGlzYWJsZSIsIm9uRW5hYmxlIiwiaGlkZUFsbCIsImdldENvbXBvbmVudCIsImFkZEV2ZW50T25Db2xsaXNpb25FbnRlciIsInRhZyIsInN0b3BBbGxBY3Rpb25zIiwic2NoZWR1bGVPbmNlIiwic2hvd1Jlc3VsdFdpbiIsImJpbmQiLCJzZW5kUmVxdWVzdFNvaUNhdSIsImV2ZW50QmV0IiwiZXZlbnQiLCJkYXRhIiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJTbWFydEZveFNESyIsIlJvdWxldHRlQ29udHJvbGxlciIsIm1fdGFibGVJbmZvIiwiaXNCZXR0aW5nIiwic2hvd05vdGkiLCJwbGF5RGF0Q3VhIiwic2VuZFJlcXVlc3RCZXQiLCJ1cGRhdGVUb3RhbEJldCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJub2RlQmV0IiwiaW5kZXgiLCJnZXRDaGlsZEJ5TmFtZSIsInJlbW92ZUZyb21QYXJlbnQiLCJydW5BY3Rpb25DaGFuZ2VNb25leSIsInVzZXJuYW1lIiwibW9uZXkiLCJzcGVlZCIsImZvbnRUeHQiLCJwb3MiLCJnZXRQb3NGcm9tTmFtZSIsIm5vZGVBdmF0YXIiLCJtb25leVdpbiIsImdldE1vbmV5RnJvbVN0cmluZyIsInN0cmluZyIsInBvc2l0aW9uIiwidjIiLCJmb250IiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsIm5vZGVUbyIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwibW92ZVRvIiwiZWFzaW5nIiwiZWFzZU91dCIsImRlbGF5VGltZSIsImNhbGxGdW5jIiwidXBkYXRlTW9uZXkiLCJtb25leVN0cmluZyIsInJlcGxhY2UiLCJzcGxpdCIsImpvaW4iLCJwYXJzZUZsb2F0Iiwic2hvd1Jlc3VsdCIsInJlc3VsdCIsImxlbmd0aCIsInNoaWZ0IiwicnVuQWN0aW9uUm90YXRpb25CYWxsIiwiZ2V0TnVtYmVyQ2FyZEZyb21DaGlwIiwibnVtYmVyNW0iLCJNYXRoIiwiZmxvb3IiLCJudW1iZXIxbSIsIm51bWJlcjUwMGsiLCJudW1iZXIxMGsiLCJudW1iZXI1ayIsIm51bWJlcjFrIiwiYWRkQ2hpcFRvUG90IiwibGlzdFR5cGVQb3RCZXQiLCJsaXN0TXlDaGlwUG90IiwiYWN0aW9uRmx5Q2hpcFRvUG90IiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwicmVzdW1lR2FtZSIsIndpblBvdCIsInRpbWUiLCJ1c2Vyc09uYm9hcmQiLCJjaGlwVXNlck9uQm9hcmQiLCJ3aW5DaGlwIiwiZ2V0Q2hpcE5vZGUiLCJwYXJlbnQiLCJyZXR1cm5DaGlwTm9kZSIsImNoaXBOb2RlIiwic2hvd0xpc3RVc2VycyIsImxpc3RVc2VyU2hvdyIsImNoaWxkcmVuQ291bnQiLCJub2RlVXNlciIsInVzZXJGcmFtZSIsImxiX25hbWUiLCJ1c2VyIiwiZ2V0VmFyaWFibGUiLCJ2YWx1ZSIsIl91c2VybmFtZSIsIm5hbWUiLCJHYW1lVmFyaWFibGVzIiwiZ2V0RGlzcGxheU5hbWUiLCJnZXRDaGlwIiwidXBkYXRlQ2hpcCIsInVwZGF0ZUxpc3RDaGlwQmV0IiwidHlwZVBvdCIsImJldENoaXAiLCJzZWxlY3RCZXRDaGlwIiwiY3VycmVudFRhcmdldCIsInBhcnNlSW50IiwidG90YWxCZXQiLCJhYnMiLCJiZXQiLCJ0eXBlIiwiYmV0UmVxdWVzdCIsIlJvdWxldHRlUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJzZXRCZXRDaGlwIiwic2V0VHlwZVBvdCIsInNlbmQiLCJ0b1NSZXF1ZXN0IiwicG90VHlwZSIsImhhc093blByb3BlcnR5IiwiYWN0aW9uRmx5T25lQ2hpcFRvUG90IiwiYWN0aW9uRmx5TXV0aUNoaXBUb1BvdCIsInJ1bkFjdGlvblRvR2lybCIsImNiIiwidG90YWxBY3RpdmUiLCJjb3VudCIsInBvc1RvIiwiZ2V0UG9zaXRpb25Jbk90aGVyTm9kZSIsInBvc2l0aW9uR2lybCIsInJhbmRvbSIsImNoaXBOYW1lIiwibG9hZFJlcyIsIlNwcml0ZSIsIm5vZGVGcm9tIiwiZ2V0UG9zQmV0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsImxpc3RDYXJkIiwiYWxsS2V5IiwiT2JqZWN0Iiwia2V5cyIsImtleSIsImFjdGlvbkZseUNoaXBUb1BsYXllciIsInBvc2l0aW9uVG8iLCJ0b3RhbCIsImFsbENoaXBOb2RlIiwidGhlbiIsImJldE5vZGUiLCJjYXJkIiwiY2xpY2tFeGl0Um9vbSIsInJvb20iLCJnZXRSb29tQnlOYW1lIiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkxlYXZlUm9vbVJlcXVlc3QiLCJMb2FkaW5nIiwic2hvdyIsIlVJTWFuZ2VyIiwiZXZlbnRIZWxwZXIiLCJwb3AiLCJzcmMiLCJldmVudFNvaUNhdSIsInNob3dTb2lDYXUiLCJoaXN0b3J5UmVxdWVzdCIsIkhpc3RvcnlSZXF1ZXN0IiwiZGF0YUNhdSIsImhpZGUiLCJfcmVmb3JtYXREYXRhQ2F1IiwibnVtSXRlbXMiLCJTY3JvbGxWaWV3Iiwic2Nyb2xsVG9SaWdodCIsInVwZGF0ZUxpc3RDYXVUb3AiLCJldmVudEdhcFRoZXAiLCJldmVudERhdExhaSIsIm1lc3NhZ2UiLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwiY2F1IiwiaW5pdCIsIndpbnBvdCIsInVuZGVmaW5lZCIsImlzUnVuIiwiYmxpbmsiLCJiZ1dpbiIsInNjYWxlVG8iLCJwb3MxIiwicG9zMiIsInBvczMiLCJtb3ZlVG8yIiwibW92ZVRvMyIsImFjdGlvbkJ5Iiwicm90YXRlQnkiLCJhY3Rpb24xIiwiYWN0aW9uMiIsImFjdGlvbjMiLCJqdW1wVXAiLCJqdW1wQnkiLCJyZXBlYXRGb3JldmVyIiwicmVwZWF0IiwiZXZlbnRPcGVuTWVudSIsInN0YXJ0IiwiY2F1TGVuZ3RoIiwiY2F1Tm9kZSIsImNvbG9yIiwiaW5kZXhPZiIsIkNvbG9yIiwiUkVEIiwiQkxBQ0siLCJNYXhSb3ciLCJtYXhDYXQiLCJjZWlsIiwiaiIsInNsaWNlIiwib25MaXN0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwibGFzdFNlbGVjdGVkSWQiLCJ2YWwiLCJsaXN0IiwibGlzdEl0ZW0iLCJfbGlzdCIsInN0ciIsInNlbGVjdGVkTW9kZSIsImNvbnNvbGUiLCJsb2ciLCJldmVudFJhbmsiLCJyZXF1ZXN0IiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImV2ZW50SGlzdG9yeSIsIl90dXJuT25UaW1lIiwibWF4VGltZSIsInNldFRvdGFsUHJvZ3Jlc3MiLCJzZXRUb3RhbFJlbWFpbiIsInR1cm5PblRpbWVyIiwiX3R1cm5PZmZUaW1lIiwidHVybk9mZlRpbWVyIiwiZXZlbnRTaG93Q2hhdCIsImluaXRDb250cm9sbGVyIiwib25QdWJsaWNNZXNzYWdlIiwibWVzc0RhdGEiLCJtc2dJdGVtIiwibXNnIiwic2VuZGVyIiwiZW1vamlCb3giLCJpc0Vtb2lqIiwiZW1vamlOb2RlIiwiYm94Tm9kZSIsIm9wYWNpdHkiLCJzcCIsIlNrZWxldG9uIiwic2V0QW5pbWF0aW9uIiwiZmFkZU91dCIsIkxheW91dCIsInVwZGF0ZUxheW91dCIsInVwZGF0ZVVzZXJWYXJpYWJsZSIsInN1YkNoaXAiLCJQb2tlciIsIm5vZGVQbGF5ZXIiLCJmb3JtYXRDdXJyZW5jeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGNBQWMsRUFBRUosRUFBRSxDQUFDSyxJQURYO0FBRVJDLElBQUFBLFNBQVMsRUFBS04sRUFBRSxDQUFDTyxLQUZUO0FBR1JDLElBQUFBLE1BQU0sRUFBUVIsRUFBRSxDQUFDTyxLQUhUO0FBSVJFLElBQUFBLFVBQVUsRUFBSVQsRUFBRSxDQUFDTyxLQUpUO0FBS1JHLElBQUFBLFdBQVcsRUFBR1YsRUFBRSxDQUFDSyxJQUxUO0FBTVJNLElBQUFBLFVBQVUsRUFBSVgsRUFBRSxDQUFDSyxJQU5UO0FBT1JPLElBQUFBLFlBQVksRUFBSVosRUFBRSxDQUFDSyxJQVBYO0FBUVJRLElBQUFBLEtBQUssRUFBU2IsRUFBRSxDQUFDSyxJQVJUO0FBU1JTLElBQUFBLElBQUksRUFBVWQsRUFBRSxDQUFDSyxJQVRUO0FBVVJVLElBQUFBLE9BQU8sRUFBVWYsRUFBRSxDQUFDSyxJQVZaO0FBV1JXLElBQUFBLFFBQVEsRUFBVWhCLEVBQUUs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QUFBLE9BQU8sQ0FBQy9NLFNBQVIsQ0FBa0I3RyxFQUFFLENBQUM4RyxRQUFILENBQVk5RyxFQUFFLENBQUNrSCxTQUFILENBQWEsQ0FBYixDQUFaLEVBQTZCbEgsRUFBRSxDQUFDaVUsT0FBSCxDQUFXLENBQVgsQ0FBN0IsRUFBNENqVSxFQUFFLENBQUNtSCxRQUFILENBQVksWUFBWTtBQUNsRnlNLFVBQUFBLE9BQU8sQ0FBQ25RLE1BQVIsR0FBaUIsS0FBakI7QUFDSCxTQUY2RCxDQUE1QyxDQUFsQjtBQUdIO0FBQ0o7QUFDSixHQW5uQkk7QUFvbkJMMlEsRUFBQUEsa0JBcG5CSyw4QkFvbkJjQyxPQXBuQmQsRUFvbkJzQjtBQUN2QixTQUFLak4sV0FBTCxDQUFpQitDLGFBQWEsQ0FBQ21LLEtBQWQsQ0FBb0JqSyxPQUFwQixDQUE0QnhGLFdBQVcsQ0FBQ0Msa0JBQVosQ0FBK0I4RCxZQUEvQixDQUE0Q0MsTUFBeEUsSUFBZ0Z3TCxPQUFqRyxFQUEwRyxLQUFLN1MsU0FBTCxDQUFld0IsUUFBZixDQUF3QixDQUF4QixDQUExRztBQUNILEdBdG5CSTtBQXVuQkxvRSxFQUFBQSxXQXZuQkssdUJBdW5CT3RCLEtBdm5CUCxFQXVuQmN5TyxVQXZuQmQsRUF1bkIwQjtBQUMzQkEsSUFBQUEsVUFBVSxDQUFDN08sY0FBWCxDQUEwQixZQUExQixFQUF3Q0EsY0FBeEMsQ0FBdUQsT0FBdkQsRUFBZ0UzQixZQUFoRSxDQUE2RS9ELEVBQUUsQ0FBQ08sS0FBaEYsRUFBdUYrRixNQUF2RixHQUFpR0ksS0FBSyxDQUFDOE4sY0FBTixDQUFxQjFPLEtBQXJCLENBQWpHO0FBQ0g7QUF6bkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpc3R2aWV3ID0gcmVxdWlyZSgnTGlzdHZpZXcnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgQ2hhdEVtb2ppTGF5ZXI6IGNjLk5vZGUsXHJcbiAgICAgICAgbGJTZXNzaW9uICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYlJvb20gICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiVG90YWxCZXQgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGlzdE5vZGVCZXQgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxpc3RQb3NCZXQgIDogY2MuTm9kZSxcclxuICAgICAgICByb3VsZXR0ZVhvYXkgIDogY2MuTm9kZSxcclxuICAgICAgICBUaW1lciAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgQmFsbCAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGNhblhvYXkgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBib2FyWG9heSAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIG1lbnUgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBzb2lDYXUgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBsaXN0dmlld0NhdSAgICAgICAgOiBMaXN0dmlldyxcclxuICAgICAgICBfY3VycmVudFR5cGUgICAgICAgICA6IC0xLFxyXG4gICAgICAgIF9jdXJyZW50QmV0ICAgICAgICAgIDogMTAwMCxcclxuICAgICAgICBDaGlwUHJlZmFiICAgICAgICAgICA6IGNjLlByZWZhYixcclxuICAgICAgICBQbGF5ZXJQb3MgICAgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgTm90aSAgICAgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxpc3RDYXVUb3AgICAgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBmb250V2luICAgICAgICAgICAgICA6IGNjLkZvbnQsXHJcbiAgICAgICAgZm9udExvc2UgICAgICAgICAgICAgOiBjYy5Gb250LFxyXG4gICAgICAgIF9jdXJyZW50VGltZSA6IDAsXHJcbiAgICAgICAgX2RhdGFDYXUgICAgIDogW10sXHJcbiAgICAgICAgX2lzRGF0ICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgX2xhc3RCZXQgICAgIDogbnVsbCxcclxuICAgICAgICBfY3VycmVudFBlcmNlbnQgICAgIDogMCxcclxuICAgICAgICBfcmVzdWx0UG9zICAgICA6IDAsXHJcbiAgICAgICAgX3RvdGFsQmV0ICAgICAgOiAwLFxyXG4gICAgICAgIF9saXN0Q2hpcEJldCAgIDogW10sXHJcbiAgICAgICAgX2xpc3RUeXBlQmV0ICAgOiBbXSxcclxuICAgICAgICBsaXN0RGF0YUNhdSAgIDogW10sXHJcbiAgICAgICAgX0xpc3RSZWQgICA6IFtdLFxyXG4gICAgICAgIF9pc1Nob3dDYXUgICA6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fbGlzdFR5cGVCZXQgICAgID0gW107XHJcbiAgICAgICAgdGhpcy5fbGlzdENoaXBCZXQgICAgID0gW107XHJcbiAgICAgICAgdGhpcy5MaXN0Q2hpcEltZyAgICA9IHtcclxuICAgICAgICAgICAgXCIxMDAwXCIgICAgICAgOiBcIjFrXCIsXHJcbiAgICAgICAgICAgIFwiNTAwMFwiICAgICAgIDogXCI1a1wiLFxyXG4gICAgICAgICAgICBcIjEwMDAwXCIgICAgICA6IFwiMTBrXCIsXHJcbiAgICAgICAgICAgIFwiNTAwMDAwXCIgICAgIDogXCI1MDBrXCIsXHJcbiAgICAgICAgICAgIFwiMTAwMDAwMFwiICAgIDogXCIxbVwiLFxyXG4gICAgICAgICAgICBcIjUwMDAwMDBcIiAgICA6IFwiNW1cIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5fY3VycmVudEJldCAgICA9IDEwMDA7XHJcbiAgICAgICAgdGhpcy5fbGFzdEJldCAgICAgICA9IHRoaXMubGlzdE5vZGVCZXQuY2hpbGRyZW5bMF07XHJcbiAgICAgICAgdGhpcy5saXN0Tm9kZVBvdCAgICA9IHRoaXMubGlzdFBvc0JldC5jaGlsZHJlbjtcclxuICAgICAgICB0aGlzLl9pc0RhdCAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wb29sQ2hpcCA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAyMDtpKyspe1xyXG4gICAgICAgICAgICBsZXQgY2hpcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQ2hpcFByZWZhYik7XHJcbiAgICAgICAgICAgIGNoaXAuc2NhbGUgPSAwLjMzO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2hpcCk7XHJcbiAgICAgICAgICAgIGNoaXAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbENoaXAucHVzaChjaGlwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0TXlDaGlwQmV0ID0gW107XHJcbiAgICAgICAgdGhpcy5fTGlzdFJlZCAgID0gWzEsIDMsIDUsIDcsIDksIDEyLCAxNCwgMTYsIDE4LCAxOSwgMjEsIDIzLCAyNSwgMjcsIDMwLCAzMiwgMzQsIDM2XTtcclxuXHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fZGF0YUNhdSAgICAgICAgICAgID0gW107XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBlcmNlbnQgICAgID0gMDtcclxuICAgICAgICB0aGlzLmhpZGVBbGwoKTtcclxuICAgICAgICB0aGlzLkJhbGwuZ2V0Q29tcG9uZW50KFwiQmFsbFwiKS5hZGRFdmVudE9uQ29sbGlzaW9uRW50ZXIoZnVuY3Rpb24gKHRhZykge1xyXG4gICAgICAgICAgICBpZiAodGFnID09IHRoaXMuX3Jlc3VsdFBvcyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdWxldHRlWG9heS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYW5Yb2F5LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkJhbGwuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKHRoaXMuc2hvd1Jlc3VsdFdpbiwgMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICAgICAgdGhpcy5faXNTaG93Q2F1ICAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0U29pQ2F1KCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRCZXQoZXZlbnQsIGRhdGEpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBpZiAoIVNtYXJ0Rm94U0RLLlJvdWxldHRlQ29udHJvbGxlci5tX3RhYmxlSW5mby5pc0JldHRpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb3RpKFwiS2jDtG5nIMSRxrDhu6NjIGPGsOG7o2MhXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5faXNEYXQpe1xyXG4gICAgICAgICAgICB0aGlzLl9saXN0VHlwZUJldCA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLl9saXN0Q2hpcEJldCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9pc0RhdCAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlEYXRDdWEoKTtcclxuICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0QmV0KHRoaXMuX2N1cnJlbnRCZXQsIGRhdGEpO1xyXG4gICAgfSxcclxuICAgIGhpZGVBbGwoKSB7XHJcbiAgICAgICAgdGhpcy5faXNEYXQgICAgICAgICAgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuTm90aS5hY3RpdmUgICAgICAgICAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlRpbWVyLmFjdGl2ZSAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yb3VsZXR0ZVhvYXkuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmNhblhvYXkuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLkJhbGwuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmJvYXJYb2F5LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUb3RhbEJldCgwKTtcclxuICAgICAgICB0aGlzLnJvdWxldHRlWG9heS5hY3RpdmUgID0gZmFsc2U7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saXN0Tm9kZVBvdC5tYXAoZnVuY3Rpb24obm9kZUJldCwgaW5kZXgpe1xyXG4gICAgICAgICAgICBub2RlQmV0LmdldENoaWxkQnlOYW1lKFwiYmdfd2luXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnBvb2xDaGlwLm1hcChmdW5jdGlvbihjaGlwLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmIChjaGlwLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICBjaGlwLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBjaGlwLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHJ1bkFjdGlvbkNoYW5nZU1vbmV5KHVzZXJuYW1lLCBtb25leSwgc3BlZWQpIHtcclxuICAgICAgICBsZXQgZm9udFR4dCA9IG1vbmV5ID4gMD8gdGhpcy5mb250V2luOiB0aGlzLmZvbnRMb3NlO1xyXG4gICAgICAgIGxldCBwb3MgICAgICAgID0gdGhpcy5nZXRQb3NGcm9tTmFtZSh1c2VybmFtZSk7XHJcbiAgICAgICAgbGV0IG5vZGVBdmF0YXIgPSB0aGlzLlBsYXllclBvcy5nZXRDaGlsZEJ5TmFtZShcInBvc19cIitwb3MpO1xyXG4gICAgICAgIGlmIChub2RlQXZhdGFyKXtcclxuICAgICAgICAgICAgbGV0IG1vbmV5V2luICAgPSBub2RlQXZhdGFyLmdldENoaWxkQnlOYW1lKFwibW9uZXlfd2luXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGlmIChtb25leVdpbi5ub2RlLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICBtb25leSArPSB0aGlzLmdldE1vbmV5RnJvbVN0cmluZyhtb25leVdpbi5zdHJpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChtb25leSA9PSAwKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIDtcclxuICAgICAgICAgICAgbW9uZXlXaW4ubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBtb25leVdpbi5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIG1vbmV5V2luLm5vZGUucG9zaXRpb24gPSBjYy52MigwLCAyMCk7XHJcbiAgICAgICAgICAgIG1vbmV5V2luLmZvbnQgICAgICAgID0gZm9udFR4dDtcclxuICAgICAgICAgICAgbW9uZXlXaW4uc3RyaW5nICAgICAgPSBtb25leSA+IDA/IFwiK1wiK1V0aWxzLmFkZERvdFRvTnVtYmVyKG1vbmV5KTogVXRpbHMuYWRkRG90VG9OdW1iZXIobW9uZXkpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZVRvICAgICAgICAgICA9IGNjLnYyKDAsIDEyMCk7XHJcbiAgICAgICAgICAgIGlmIChwb3MgPiA2KVxyXG4gICAgICAgICAgICAgICAgbm9kZVRvICAgICAgICAgICA9IGNjLnYyKDAsIDUwKTtcclxuICAgICAgICAgICAgbW9uZXlXaW4ubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuNSpzcGVlZCwgbm9kZVRvKS5lYXNpbmcoY2MuZWFzZU91dCgwLjUpKSwgY2MuZGVsYXlUaW1lKDEuNSpzcGVlZCksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIG1vbmV5V2luLnN0cmluZyAgICAgID0gMDtcclxuICAgICAgICAgICAgICAgIG1vbmV5V2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTW9uZXkobW9uZXksIG5vZGVBdmF0YXIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRNb25leUZyb21TdHJpbmcobW9uZXlTdHJpbmcpIHtcclxuICAgICAgICBtb25leVN0cmluZyA9IG1vbmV5U3RyaW5nLnJlcGxhY2UoXCIrXCIsIFwiXCIpO1xyXG4gICAgICAgIC8vIG1vbmV5U3RyaW5nID0gbW9uZXlTdHJpbmcucmVwbGFjZShcIi1cIiwgXCJcIik7XHJcbiAgICAgICAgbW9uZXlTdHJpbmcgPSBtb25leVN0cmluZy5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcclxuICAgICAgIHJldHVybiBwYXJzZUZsb2F0KG1vbmV5U3RyaW5nKVxyXG4gICAgfSxcclxuICAgIHNob3dSZXN1bHQocmVzdWx0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFDYXUubGVuZ3RoID4gdGhpcy5saXN0Q2F1VG9wLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGFDYXUuc2hpZnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZGF0YUNhdS5wdXNoKHJlc3VsdCk7XHJcbiAgICAgICAgdGhpcy5ydW5BY3Rpb25Sb3RhdGlvbkJhbGwocmVzdWx0KTtcclxuICAgIH0sXHJcbiAgICBnZXROdW1iZXJDYXJkRnJvbUNoaXAobW9uZXkpIHtcclxuICAgICAgICBsZXQgbnVtYmVyNW0gICAgPSAgTWF0aC5mbG9vcihtb25leS81MDAwMDAwKTtcclxuICAgICAgICBtb25leSAgICAgICAgICAgPSBtb25leSAtIG51bWJlcjVtKjUwMDAwMDA7XHJcbiAgICAgICAgbGV0IG51bWJlcjFtICAgID0gIE1hdGguZmxvb3IobW9uZXkvMTAwMDAwMCk7XHJcbiAgICAgICAgbW9uZXkgICAgICAgICAgID0gbW9uZXkgLSBudW1iZXIxbSoxMDAwMDAwO1xyXG4gICAgICAgIGxldCBudW1iZXI1MDBrICA9ICBNYXRoLmZsb29yKG1vbmV5LzUwMDAwMCk7XHJcbiAgICAgICAgbW9uZXkgICAgICAgICAgID0gbW9uZXkgLSBudW1iZXI1MDBrKjUwMDAwMDtcclxuICAgICAgICBsZXQgbnVtYmVyMTBrICAgPSAgTWF0aC5mbG9vcihtb25leS8xMDAwMCk7XHJcbiAgICAgICAgbW9uZXkgICAgICAgICAgID0gbW9uZXkgLSBudW1iZXIxMGsqMTAwMDA7XHJcbiAgICAgICAgbGV0IG51bWJlcjVrICAgPSAgTWF0aC5mbG9vcihtb25leS81MDAwKTtcclxuICAgICAgICBtb25leSAgICAgICAgICAgPSBtb25leSAtIG51bWJlcjVrKjUwMDA7XHJcbiAgICAgICAgbGV0IG51bWJlcjFrICAgID0gIE1hdGguZmxvb3IobW9uZXkvMTAwMCk7XHJcbiAgICAgICAgcmV0dXJuIFtudW1iZXIxaywgbnVtYmVyNWssIG51bWJlcjEwaywgbnVtYmVyNTAwaywgbnVtYmVyMW0sIG51bWJlcjVtXTtcclxuICAgIH0sXHJcbiAgICBhZGRDaGlwVG9Qb3QobGlzdFR5cGVQb3RCZXQsIGxpc3RNeUNoaXBQb3QpIHtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RUeXBlUG90QmV0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25GbHlDaGlwVG9Qb3QoU21hcnRGb3hTREsuUm91bGV0dGVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYsIGxpc3RUeXBlUG90QmV0W2ldLCBsaXN0TXlDaGlwUG90W2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lR2FtZSh3aW5Qb3QsIHRpbWUsIHVzZXJzT25ib2FyZCwgY2hpcFVzZXJPbkJvYXJkLCByZXN1bHQsIHdpbkNoaXApIHtcclxuICAgICAgICBpZiAodGhpcy5fZGF0YUNhdS5sZW5ndGggPiB0aGlzLmxpc3RDYXVUb3AubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5fZGF0YUNhdS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9kYXRhQ2F1LnB1c2gocmVzdWx0KTtcclxuICAgICAgICBpZiAodGltZSA8PSAxMClcclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0V2luKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnNob3dSZXN1bHQocmVzdWx0KTtcclxuICAgIH0sXHJcbiAgICBnZXRDaGlwTm9kZSgpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvb2xDaGlwLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZighdGhpcy5wb29sQ2hpcFtpXS5hY3RpdmUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb29sQ2hpcFtpXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb29sQ2hpcFtpXS5wb3NpdGlvbiA9IGNjLnYyKDAsMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xDaGlwW2ldLnBhcmVudCA9IHRoaXMubm9kZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9vbENoaXBbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoaXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkNoaXBQcmVmYWIpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZChjaGlwKTtcclxuICAgICAgICBjaGlwLnNjYWxlID0gMC4zMztcclxuICAgICAgICBjaGlwLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wb29sQ2hpcC5wdXNoKGNoaXApO1xyXG4gICAgICAgIHJldHVybiBjaGlwO1xyXG4gICAgfSxcclxuICAgIHJldHVybkNoaXBOb2RlKGNoaXBOb2RlKXtcclxuICAgICAgICBjaGlwTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzaG93TGlzdFVzZXJzKGxpc3RVc2VyU2hvdyl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuUGxheWVyUG9zLmNoaWxkcmVuQ291bnQtMTtpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZVVzZXIgICAgPSB0aGlzLlBsYXllclBvcy5nZXRDaGlsZEJ5TmFtZShcInBvc19cIitpKTtcclxuICAgICAgICAgICAgbGV0IHVzZXJGcmFtZSAgID0gbm9kZVVzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX2ZyYW1lXCIpO1xyXG4gICAgICAgICAgICBsZXQgbGJfbmFtZSAgICAgPSB1c2VyRnJhbWUuZ2V0Q2hpbGRCeU5hbWUoXCJuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgICAgIGxldCB1c2VyID0gKGkgPj0gbGlzdFVzZXJTaG93Lmxlbmd0aCkgPyBudWxsIDogbGlzdFVzZXJTaG93W2ldO1xyXG4gICAgICAgICAgICBpZih1c2VyICYmICh1c2VyLmdldFZhcmlhYmxlKFwicm9sZVwiKS52YWx1ZSAhPSBcImFkbWluXCIpKXtcclxuICAgICAgICAgICAgICAgIG5vZGVVc2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBub2RlVXNlci5fdXNlcm5hbWUgPSB1c2VyLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBsYl9uYW1lLnN0cmluZyA9IEdhbWVWYXJpYWJsZXMuZ2V0RGlzcGxheU5hbWUodXNlcik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZU1vbmV5KEdhbWVWYXJpYWJsZXMuZ2V0Q2hpcCh1c2VyKSwgbm9kZVVzZXIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIG5vZGVVc2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgbm9kZVVzZXIuX3VzZXJuYW1lID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRQb3NGcm9tTmFtZSh1c2VybmFtZSl7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuUGxheWVyUG9zLmNoaWxkcmVuQ291bnQtMTtpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZVVzZXIgPSB0aGlzLlBsYXllclBvcy5nZXRDaGlsZEJ5TmFtZShcInBvc19cIitpKTtcclxuICAgICAgICAgICAgaWYobm9kZVVzZXIuYWN0aXZlICYmIG5vZGVVc2VyLl91c2VybmFtZSAmJiBub2RlVXNlci5fdXNlcm5hbWUgPT0gdXNlcm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuUGxheWVyUG9zLmNoaWxkcmVuQ291bnQtMSA7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlQ2hpcCh1c2VyKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5QbGF5ZXJQb3MuY2hpbGRyZW5Db3VudC0xO2krKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlVXNlciA9IHRoaXMuUGxheWVyUG9zLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK2kpO1xyXG4gICAgICAgICAgICBpZihub2RlVXNlci5hY3RpdmUgJiYgbm9kZVVzZXIuX3VzZXJuYW1lICYmIG5vZGVVc2VyLl91c2VybmFtZSA9PSB1c2VyLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVNb25leShHYW1lVmFyaWFibGVzLmdldENoaXAodXNlciksIG5vZGVVc2VyKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZUxpc3RDaGlwQmV0KHR5cGVQb3QsIGJldENoaXApIHtcclxuICAgICAgICB0aGlzLl9saXN0VHlwZUJldC5wdXNoKHR5cGVQb3QpO1xyXG4gICAgICAgIHRoaXMuX2xpc3RDaGlwQmV0LnB1c2goYmV0Q2hpcCk7XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0QmV0Q2hpcChldmVudCwgYmV0Q2hpcCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuX2xhc3RCZXQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19zZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImJnX3NlbGVjdFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2xhc3RCZXQgICAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCZXQgPSBwYXJzZUludChiZXRDaGlwKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVUb3RhbEJldCh0b3RhbEJldCl7XHJcbiAgICAgICAgdGhpcy5sYlRvdGFsQmV0LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKE1hdGguYWJzKHRvdGFsQmV0KSk7XHJcbiAgICB9LFxyXG4gICAgc2VuZFJlcXVlc3RCZXQoYmV0LCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFR5cGUgID0gdHlwZTtcclxuICAgICAgICBpZih0aGlzLl9jdXJyZW50VHlwZSA8IDAgfHwgdGhpcy5fY3VycmVudFR5cGUgPiA0OCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGkoXCJDaOG7jW4gbOG6oWkgZ2nDoSB0cuG7iyBjxrDhu6NjXCIpO1xyXG4gICAgICAgIH1lbHNlIGlmKEdhbWVWYXJpYWJsZXMuZ2V0Q2hpcChTbWFydEZveFNESy5Sb3VsZXR0ZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgPCBiZXQpe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dOb3RpKFwiS2jDtG5nIMSR4bunIHRp4buBbiBjxrDhu6NjIVwiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGV0IGJldFJlcXVlc3QgPSBuZXcgUm91bGV0dGVSZXF1ZXN0LkJldFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgYmV0UmVxdWVzdC5zZXRCZXRDaGlwKGJldCk7XHJcbiAgICAgICAgICAgIGJldFJlcXVlc3Quc2V0VHlwZVBvdCh0aGlzLl9jdXJyZW50VHlwZSk7XHJcbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlJvdWxldHRlQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChiZXRSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZseUNoaXBUb1BvdCh1c2VybmFtZSwgcG90VHlwZSwgbW9uZXkpe1xyXG4gICAgICAgIGlmICh0aGlzLkxpc3RDaGlwSW1nLmhhc093blByb3BlcnR5KG1vbmV5KSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uRmx5T25lQ2hpcFRvUG90KHVzZXJuYW1lLCBwb3RUeXBlLCBtb25leSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbkZseU11dGlDaGlwVG9Qb3QodXNlcm5hbWUsIHBvdFR5cGUsIG1vbmV5KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcnVuQWN0aW9uVG9HaXJsKGNiKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsQWN0aXZlID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMucG9vbENoaXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb29sQ2hpcFtpXS5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICB0b3RhbEFjdGl2ZSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY291bnQgPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5wb29sQ2hpcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjaGlwTm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvb2xDaGlwW2ldLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICBjb3VudCArKztcclxuICAgICAgICAgICAgICAgIGNoaXBOb2RlID0gdGhpcy5wb29sQ2hpcFtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBwb3NUbyA9IHRoaXMuZ2V0UG9zaXRpb25Jbk90aGVyTm9kZShjaGlwTm9kZSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgICAgIGNoaXBOb2RlLnBhcmVudCAgID0gdGhpcy5ub2RlO1xyXG4gICAgICAgICAgICAgICAgY2hpcE5vZGUucG9zaXRpb24gPSBwb3NUbztcclxuICAgICAgICAgICAgICAgIGxldCBwb3NpdGlvbkdpcmwgPSBjYy52MihNYXRoLnJhbmRvbSgpKjUwLTI1LCBNYXRoLnJhbmRvbSgpKjUwLTI1KTtcclxuICAgICAgICAgICAgICAgIGNoaXBOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5tb3ZlVG8oMSwgcG9zaXRpb25HaXJsKSwgY2MuZGVsYXlUaW1lKDAuMDUqaSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlwTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaXBOb2RlLnJlbW92ZUZyb21QYXJlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IHRvdGFsQWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQgPSAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZseU9uZUNoaXBUb1BvdCh1c2VybmFtZSwgcG90VHlwZSwgbW9uZXkpe1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLmdldFBvc0Zyb21OYW1lKHVzZXJuYW1lKTtcclxuICAgICAgICBsZXQgY2hpcE5hbWUgPSBcIjFrXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuTGlzdENoaXBJbWcuaGFzT3duUHJvcGVydHkobW9uZXkpKXtcclxuICAgICAgICAgICAgY2hpcE5hbWUgPSB0aGlzLkxpc3RDaGlwSW1nW21vbmV5XTtcclxuICAgICAgICAgICAgbGV0IGNoaXBOb2RlID0gdGhpcy5nZXRDaGlwTm9kZSgpO1xyXG4gICAgICAgICAgICBVdGlscy5sb2FkUmVzKGNoaXBOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLFwicm91bGV0dGUvcGhpbmgvXCIrY2hpcE5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZUF2YXRhciA9IHRoaXMuUGxheWVyUG9zLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK3Bvcyk7XHJcbiAgICAgICAgICAgIGNoaXBOb2RlLnBvc2l0aW9uID0gbm9kZUF2YXRhci5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IG5vZGVGcm9tID0gdGhpcy5nZXRQb3NCZXQocG90VHlwZSk7XHJcbiAgICAgICAgICAgIGxldCBwb3NUbyA9IHRoaXMuZ2V0UG9zaXRpb25Jbk90aGVyTm9kZShub2RlRnJvbSwgdGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgY2hpcE5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygwLjUsIGNjLnYyKHBvc1RvLngsIHBvc1RvLnkpKS5lYXNpbmcoY2MuZWFzZU91dCgxKSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGNoaXBOb2RlLnBvc2l0aW9uICAgPSBjYy52MihNYXRoLnJhbmRvbSgpKm5vZGVGcm9tLndpZHRoLW5vZGVGcm9tLndpZHRoLzIsTWF0aC5yYW5kb20oKSpub2RlRnJvbS5oZWlnaHQtbm9kZUZyb20uaGVpZ2h0LzIpO1xyXG4gICAgICAgICAgICAgICAgY2hpcE5vZGUucGFyZW50ICAgICA9IG5vZGVGcm9tO1xyXG4gICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3Rpb25GbHlNdXRpQ2hpcFRvUG90KHVzZXJuYW1lLCBwb3RUeXBlLCBtb25leSl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBsaXN0Q2FyZCA9IHRoaXMuZ2V0TnVtYmVyQ2FyZEZyb21DaGlwKG1vbmV5KTtcclxuICAgICAgICBsZXQgYWxsS2V5ICAgPSBPYmplY3Qua2V5cyh0aGlzLkxpc3RDaGlwSW1nKTtcclxuICAgICAgICBQcm9taXNlLmFsbChhbGxLZXkubWFwKGZ1bmN0aW9uKGtleSwgaW5kZXgpe1xyXG4gICAgICAgICAgICBpZiAobGlzdENhcmRbaW5kZXhdID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpcCA9IHBhcnNlSW50KGtleSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RDYXJkW2luZGV4XTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmFjdGlvbkZseU9uZUNoaXBUb1BvdCh1c2VybmFtZSwgcG90VHlwZSwgY2hpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSlcclxuICAgIH0sXHJcbiAgICBhY3Rpb25GbHlDaGlwVG9QbGF5ZXIodXNlcm5hbWUsIG1vbmV5LCBzcGVlZCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBsaXN0Q2FyZCA9IHRoaXMuZ2V0TnVtYmVyQ2FyZEZyb21DaGlwKG1vbmV5KTtcclxuICAgICAgICBsZXQgYWxsS2V5ID0gT2JqZWN0LmtleXModGhpcy5MaXN0Q2hpcEltZyk7XHJcbiAgICAgICAgbGV0IHBvcyAgICAgICAgPSBzZWxmLmdldFBvc0Zyb21OYW1lKHVzZXJuYW1lKTtcclxuICAgICAgICBsZXQgbm9kZUF2YXRhciA9IHNlbGYuUGxheWVyUG9zLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK3Bvcyk7XHJcbiAgICAgICAgbGV0IHBvc2l0aW9uVG8gPSBub2RlQXZhdGFyLnBvc2l0aW9uO1xyXG4gICAgICAgIGxldCB0b3RhbCA9IDA7XHJcbiAgICAgICAgbGV0IGFsbENoaXBOb2RlID0gW107XHJcbiAgICAgICAgUHJvbWlzZS5hbGwoYWxsS2V5Lm1hcChmdW5jdGlvbihrZXksIGluZGV4KXtcclxuICAgICAgICAgICAgaWYgKGxpc3RDYXJkW2luZGV4XSA+IDApe1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaXAgPSBwYXJzZUludChrZXkpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBsaXN0Q2FyZFtpbmRleF07IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaXBOYW1lID0gXCIxa1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLkxpc3RDaGlwSW1nLmhhc093blByb3BlcnR5KGNoaXApKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlwTmFtZSA9IHNlbGYuTGlzdENoaXBJbWdba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaGlwTm9kZSA9IHNlbGYuZ2V0Q2hpcE5vZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBVdGlscy5sb2FkUmVzKGNoaXBOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLFwicm91bGV0dGUvcGhpbmgvXCIrY2hpcE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaXBOb2RlLnBvc2l0aW9uID0gY2MudjIoTWF0aC5yYW5kb20oKSo1MC0yMCwgTWF0aC5yYW5kb20oKSoxMC0xMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQ2hpcE5vZGUucHVzaChjaGlwTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChhbGxDaGlwTm9kZS5tYXAoZnVuY3Rpb24oY2hpcE5vZGUsIGluZGV4KXtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlwTm9kZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbCArKztcclxuICAgICAgICAgICAgICAgICAgICBjaGlwTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKHRvdGFsKjAuMSpzcGVlZCksIGNjLm1vdmVUbygxKnNwZWVkLCBwb3NpdGlvblRvKS5lYXNpbmcoY2MuZWFzZU91dCgxKSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpcE5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpcE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYucnVuQWN0aW9uQ2hhbmdlTW9uZXkodXNlcm5hbWUsIG1vbmV5LCBzcGVlZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zQmV0KHBvdFR5cGUpIHtcclxuICAgICAgICBsZXQgYmV0Tm9kZSA9IHRoaXMubGlzdE5vZGVQb3RbcG90VHlwZV0uZ2V0Q2hpbGRCeU5hbWUoXCJub2RlQmV0XCIpO1xyXG4gICAgICAgIGlmIChiZXROb2RlLmNoaWxkcmVuQ291bnQgPiAzMCl7XHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gYmV0Tm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgY2FyZC5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICBjYXJkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJldE5vZGUuYWN0aXZlKVxyXG4gICAgICAgICAgICBiZXROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGJldE5vZGU7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tFeGl0Um9vbShldmVudCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIGxldCByb29tID0gU21hcnRGb3hTREsuUm91bGV0dGVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwicm91bGV0dGVcIik7XHJcbiAgICAgICAgaWYocm9vbSl7XHJcbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlJvdWxldHRlQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChuZXcgU21hcnRGb3hTREsuU21hcnRGb3guUmVxdWVzdHMuU3lzdGVtLkxlYXZlUm9vbVJlcXVlc3Qocm9vbSkpO1xyXG4gICAgICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgVUlNYW5nZXIuc2hvdyhcIlVJSG9tZVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRIZWxwZXIoKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuc2hvdyhcIlVJUm91bGV0dGVIZWxwZXJcIiwge3BvcDogdHJ1ZSwgc3JjOiAncm91bGV0dGUnfSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTb2lDYXUoKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuX2lzU2hvd0NhdSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuc29pQ2F1LmFjdGl2ZSlcclxuICAgICAgICAgICAgdGhpcy5zb2lDYXUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kYXRhQ2F1Lmxlbmd0aCA8IDEpe1xyXG4gICAgICAgICAgICAgICAgbW0uTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0U29pQ2F1KCk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NvaUNhdSh0aGlzLl9kYXRhQ2F1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZW5kUmVxdWVzdFNvaUNhdSgpIHtcclxuICAgICAgICBsZXQgaGlzdG9yeVJlcXVlc3QgPSBuZXcgUm91bGV0dGVSZXF1ZXN0Lkhpc3RvcnlSZXF1ZXN0KCk7XHJcbiAgICAgICAgU21hcnRGb3hTREsuUm91bGV0dGVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKGhpc3RvcnlSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1NvaUNhdShkYXRhQ2F1KSB7XHJcbiAgICAgICAgbW0uTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YUNhdSA9IGRhdGFDYXU7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzU2hvd0NhdSB8fCB0aGlzLnNvaUNhdS5hY3RpdmUpe1xyXG4gICAgICAgICAgICB0aGlzLl9yZWZvcm1hdERhdGFDYXUoKTtcclxuICAgICAgICAgICAgdGhpcy5zb2lDYXUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0dmlld0NhdS5udW1JdGVtcyA9IHRoaXMubGlzdERhdGFDYXUubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Q2F1Lm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLnNjcm9sbFRvUmlnaHQoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdENhdVRvcCgpO1xyXG4gICAgICAgIHRoaXMuX2lzU2hvd0NhdSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGV2ZW50R2FwVGhlcCgpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBpZiAodGhpcy5fbGlzdFR5cGVCZXQubGVuZ3RoID4gMCAmJiAgIXRoaXMuX2lzRGF0KXtcclxuICAgICAgICAgICAgdGhpcy5faXNEYXQgICAgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLl9saXN0VHlwZUJldC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZXF1ZXN0QmV0KDIqdGhpcy5fbGlzdENoaXBCZXRbaV0sIHRoaXMuX2xpc3RUeXBlQmV0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9saXN0Q2hpcEJldCAgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5fbGlzdFR5cGVCZXQgID0gW107XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGkoXCJObyBkYXRhIVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnREYXRMYWkoKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9saXN0VHlwZUJldC5sZW5ndGggPiAwICYmICAhdGhpcy5faXNEYXQpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0RhdCAgICAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuX2xpc3RUeXBlQmV0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFJlcXVlc3RCZXQodGhpcy5fbGlzdENoaXBCZXRbaV0sIHRoaXMuX2xpc3RUeXBlQmV0W2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9saXN0Q2hpcEJldCAgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5fbGlzdFR5cGVCZXQgID0gW107XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd05vdGkoXCJLaMO0bmcgY8OzIGThu68gbGnhu4d1IGPGsOG7o2MhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93Tm90aShtZXNzYWdlKSB7XHJcbiAgICAgICAgdGhpcy5Ob3RpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5Ob3RpLmdldENoaWxkQnlOYW1lKFwibGJfbm90aV9jb250ZW50XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuTm90aS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCAxLjUpXHJcbiAgICB9LFxyXG4gICAgb25MaXN0UmVuZGVyKGl0ZW0sIGlkeCkge1xyXG4gICAgICAgIGxldCBjYXUgPSB0aGlzLmxpc3REYXRhQ2F1W2lkeF07XHJcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoaXRlbS5uYW1lKS5pbml0KGNhdSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdFdpbigpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zaG93U29pQ2F1KHRoaXMuX2RhdGFDYXUpO1xyXG4gICAgICAgIHRoaXMucm91bGV0dGVYb2F5LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCB3aW5Qb3QgICAgICAgICAgPSBTbWFydEZveFNESy5Sb3VsZXR0ZUNvbnRyb2xsZXIubV90YWJsZUluZm8ud2lucG90O1xyXG4gICAgICAgIGxldCB1c2Vyc09uYm9hcmQgICAgPSBTbWFydEZveFNESy5Sb3VsZXR0ZUNvbnRyb2xsZXIubV90YWJsZUluZm8udXNlcnNPbmJvYXJkO1xyXG4gICAgICAgIGxldCBjaGlwVXNlck9uQm9hcmQgPSBTbWFydEZveFNESy5Sb3VsZXR0ZUNvbnRyb2xsZXIubV90YWJsZUluZm8uY2hpcFVzZXJPbkJvYXJkO1xyXG4gICAgICAgIGlmICh3aW5Qb3QgIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IHNwZWVkICA9IDE7XHJcbiAgICAgICAgICAgIGxldCBpc1J1biA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgd2luUG90Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPSB3aW5Qb3RbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgYmxpbmsgICAgPSBjYy5ibGluaygyKnNwZWVkLCA4KTtcclxuICAgICAgICAgICAgICAgIGxldCBiZ1dpbiAgICA9IHRoaXMubGlzdE5vZGVQb3RbcG9zXS5nZXRDaGlsZEJ5TmFtZShcImJnX3dpblwiKTtcclxuICAgICAgICAgICAgICAgIGJnV2luLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBiZ1dpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYmxpbmssIGNjLmRlbGF5VGltZShzcGVlZCksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSdW4pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1J1biA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnJ1bkFjdGlvblRvR2lybChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpcFVzZXJPbkJvYXJkLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHVzZXJzT25ib2FyZC5tYXAoZnVuY3Rpb24odXNlcm5hbWUsIGluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY3Rpb25GbHlDaGlwVG9QbGF5ZXIodXNlcm5hbWUsIGNoaXBVc2VyT25Cb2FyZFtpbmRleF0sIHNwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcnVuQWN0aW9uUm90YXRpb25CYWxsKHBvcykge1xyXG4gICAgICAgIGxldCBzZWxmICAgICAgICAgICAgICAgICA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5fcmVzdWx0UG9zICAgICAgICAgID0gcG9zO1xyXG4gICAgICAgIHRoaXMucm91bGV0dGVYb2F5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5yb3VsZXR0ZVhvYXkuc2NhbGUgID0gMDtcclxuICAgICAgICB0aGlzLmJvYXJYb2F5LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5jYW5Yb2F5LnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5CYWxsLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbGV0IHNjYWxlVG8gID0gY2Muc2NhbGVUbygwLjMsIDEpO1xyXG4gICAgICAgIHRoaXMucm91bGV0dGVYb2F5LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzY2FsZVRvLCBjYy5kZWxheVRpbWUoMC4yKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsZXQgcG9zMSAgICAgPSBjYy52MigzNzYsIDApO1xyXG4gICAgICAgICAgICBsZXQgcG9zMiAgICAgPSBjYy52MigzMjQsIDApO1xyXG4gICAgICAgICAgICBsZXQgcG9zMyAgICAgPSBjYy52MigyMTIsIDApO1xyXG4gICAgICAgICAgICBsZXQgbW92ZVRvMiAgPSBjYy5tb3ZlVG8oMSwgcG9zMik7XHJcbiAgICAgICAgICAgIGxldCBtb3ZlVG8zICA9IGNjLm1vdmVUbygxLCBwb3MzKTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbkJ5ID0gY2Mucm90YXRlQnkoNCwgMzYwKTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5yb3RhdGVCeSgxLCAtMzYwKTtcclxuICAgICAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5yb3RhdGVCeSgxLjUsIC0zNjApO1xyXG4gICAgICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLnJvdGF0ZUJ5KDIsIC0zNjApO1xyXG4gICAgICAgICAgICBsZXQganVtcFVwICA9IGNjLmp1bXBCeSgwLjUsIGNjLnYyKDAsIDApLCAyMCwgNSk7XHJcbiAgICAgICAgICAgIHNlbGYuYm9hclhvYXkucnVuQWN0aW9uKGFjdGlvbkJ5LnJlcGVhdEZvcmV2ZXIoKSk7XHJcbiAgICAgICAgICAgIHNlbGYuQmFsbC5wb3NpdGlvbiA9IHBvczE7XHJcbiAgICAgICAgICAgIHNlbGYuY2FuWG9heS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9uMS5yZXBlYXQoMyksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuQmFsbC5ydW5BY3Rpb24obW92ZVRvMik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNhblhvYXkucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbjIucmVwZWF0KDAuMDUpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5CYWxsLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShtb3ZlVG8zLCBjYy5kZWxheVRpbWUoMC41KSwganVtcFVwKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jYW5Yb2F5LnJ1bkFjdGlvbihhY3Rpb24zLnJlcGVhdCgyKSk7XHJcbiAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRPcGVuTWVudSgpIHtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5tZW51LmFjdGl2ZSA9ICF0aGlzLm1lbnUuYWN0aXZlO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUxpc3RDYXVUb3AoKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBzdGFydCA9IDA7XHJcbiAgICAgICAgbGV0IGNhdUxlbmd0aCA9IHRoaXMuX2RhdGFDYXUubGVuZ3RoO1xyXG4gICAgICAgIGlmICh0aGlzLl9kYXRhQ2F1Lmxlbmd0aCA8PSB0aGlzLmxpc3RDYXVUb3AuY2hpbGRyZW5Db3VudClcclxuICAgICAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc3RhcnQgPSB0aGlzLl9kYXRhQ2F1Lmxlbmd0aCAtIHRoaXMubGlzdENhdVRvcC5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubGlzdENhdVRvcC5jaGlsZHJlbi5tYXAoZnVuY3Rpb24oY2F1Tm9kZSwgaW5kZXgpe1xyXG4gICAgICAgICAgICBjYXVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPCBjYXVMZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgY2F1Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGNhdU5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBzZWxmLl9kYXRhQ2F1W3N0YXJ0K2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGNhdU5vZGUuY29sb3IgPSBzZWxmLl9MaXN0UmVkLmluZGV4T2Yoc2VsZi5fZGF0YUNhdVtzdGFydCtpbmRleF0pID4gMCA/IGNjLkNvbG9yLlJFRCA6IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIF9yZWZvcm1hdERhdGFDYXUoKSB7XHJcbiAgICAgICAgdGhpcy5NYXhSb3cgID0gNDtcclxuICAgICAgICB0aGlzLmxpc3REYXRhQ2F1ID0gW107XHJcbiAgICAgICAgbGV0IG1heENhdCA9IE1hdGguY2VpbCh0aGlzLl9kYXRhQ2F1Lmxlbmd0aCAvIHRoaXMuTWF4Um93KTtcclxuICAgICAgICBmb3IgKGxldCBqPTA7IGo8IG1heENhdCA7IGorKyl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdERhdGFDYXUucHVzaCh0aGlzLl9kYXRhQ2F1LnNsaWNlKGoqdGhpcy5NYXhSb3csIChqKzEpKnRoaXMuTWF4Um93KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTGlzdFNlbGVjdGVkKGl0ZW0sIHNlbGVjdGVkSWQsIGxhc3RTZWxlY3RlZElkLCB2YWwpIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgbGlzdCA9IGl0ZW0ubGlzdEl0ZW0uX2xpc3Q7XHJcbiAgICAgICAgbGV0IHN0ciA9ICdEYW5oIHPDoWNoIGhv4bqhdCDEkeG7mW5nIGhp4buHbiB04bqhaSBsw6A6JyArIGxpc3Qubm9kZS5uYW1lICsgJ++8jEzhu7FhIGNo4buNbiBoaeG7h24gdOG6oWkgbMOg77yaJyArIHNlbGVjdGVkSWQgKyAn77yMTOG7sWEgY2jhu41uIGN14buRaSBjw7luZyBsw6DvvJonICsgbGFzdFNlbGVjdGVkSWQ7XHJcbiAgICAgICAgaWYgKGxpc3Quc2VsZWN0ZWRNb2RlID09IDIpIHsgLy9O4bq/dSBuw7MgbMOgIGNo4bq/IMSR4buZIMSRYSBs4buxYSBjaOG7jW5cclxuICAgICAgICAgICAgc3RyICs9ICfvvIxHacOhIHRy4buLIGhp4buHbiB04bqhae+8micgKyB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRSYW5rKCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcclxuICAgICAgICB0aGlzLm1lbnUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5MZWFkZXJCb2FyZFJlcXVlc3QoKTtcclxuICAgICAgICBTbWFydEZveFNESy5Sb3VsZXR0ZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpXHJcbiAgICB9LFxyXG4gICAgZXZlbnRIaXN0b3J5KCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcclxuICAgICAgICB0aGlzLm1lbnUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5IaXN0b3J5UmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlJvdWxldHRlQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgX3R1cm5PblRpbWUodGltZSwgbWF4VGltZSl7XHJcbiAgICAgICAgdGhpcy5UaW1lci5hY3RpdmUgICAgICAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuVGltZXIuZ2V0Q29tcG9uZW50KFwiVGltZVN1YlJvdWxldHRlXCIpLnNldFRvdGFsUHJvZ3Jlc3MobWF4VGltZSk7XHJcbiAgICAgICAgdGhpcy5UaW1lci5nZXRDb21wb25lbnQoXCJUaW1lU3ViUm91bGV0dGVcIikuc2V0VG90YWxSZW1haW4odGltZSk7XHJcbiAgICAgICAgdGhpcy5UaW1lci5nZXRDb21wb25lbnQoXCJUaW1lU3ViUm91bGV0dGVcIikudHVybk9uVGltZXIoKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50VGltZSAgICAgICA9IHRpbWU7XHJcbiAgICB9LFxyXG4gICAgX3R1cm5PZmZUaW1lKCl7XHJcbiAgICAgICAgdGhpcy5UaW1lci5nZXRDb21wb25lbnQoXCJUaW1lU3ViUm91bGV0dGVcIikudHVybk9mZlRpbWVyKCk7XHJcbiAgICAgICAgdGhpcy5UaW1lci5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBldmVudFNob3dDaGF0KGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuQ2hhdEVtb2ppTGF5ZXIuYWN0aXZlID0gIXRoaXMuQ2hhdEVtb2ppTGF5ZXIuYWN0aXZlO1xyXG4gICAgICAgIGlmICh0aGlzLkNoYXRFbW9qaUxheWVyLmFjdGl2ZSlcclxuICAgICAgICAgICAgdGhpcy5DaGF0RW1vamlMYXllci5nZXRDb21wb25lbnQoXCJDaGF0RW1vamlMYXllclwiKS5pbml0Q29udHJvbGxlcihTbWFydEZveFNESy5Sb3VsZXR0ZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlKTtcclxuICAgIH0sXHJcbiAgICBvblB1YmxpY01lc3NhZ2UobWVzc0RhdGEpe1xyXG4gICAgICAgIGxldCBtc2dJdGVtICAgID0gbWVzc0RhdGEubXNnO1xyXG4gICAgICAgIGxldCBwb3MgICAgICAgID0gdGhpcy5nZXRQb3NGcm9tTmFtZShtZXNzRGF0YS5zZW5kZXIubmFtZSk7XHJcbiAgICAgICAgbGV0IGVtb2ppQm94ICAgPSB0aGlzLlBsYXllclBvcy5jaGlsZHJlbltwb3NdLmdldENoaWxkQnlOYW1lKFwiRU1PSlwiKTtcclxuICAgICAgICBpZiAoZW1vamlCb3ggIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbGV0IHNlbGYgICAgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgaXNFbW9paiA9IG1zZ0l0ZW0uaW5kZXhPZihcImVtb2lqX1wiKSA+PSAwO1xyXG4gICAgICAgICAgICBsZXQgZW1vamlOb2RlID0gZW1vamlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJFTU9KXCIpO1xyXG4gICAgICAgICAgICBsZXQgYm94Tm9kZSAgID0gZW1vamlCb3guZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XHJcbiAgICAgICAgICAgIGVtb2ppTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgYm94Tm9kZS5hY3RpdmUgICA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoaXNFbW9pail7XHJcbiAgICAgICAgICAgICAgICBlbW9qaU5vZGUuYWN0aXZlICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZW1vamlOb2RlLm9wYWNpdHkgID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBtc2dJdGVtLnJlcGxhY2UoXCJlbW9pal9cIiwgXCJcIik7XHJcbiAgICAgICAgICAgICAgICBlbW9qaU5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGVtb2ppTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCB0eXBlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBlbW9qaU5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjUpLCBjYy5mYWRlT3V0KDIpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW1vamlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYm94Tm9kZS5hY3RpdmUgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBib3hOb2RlLm9wYWNpdHkgID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgYm94Tm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgYm94Tm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiX2NoYXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBtc2dJdGVtO1xyXG4gICAgICAgICAgICAgICAgYm94Tm9kZS5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS51cGRhdGVMYXlvdXQoKTtcclxuICAgICAgICAgICAgICAgIGJveE5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyKSwgY2MuZmFkZU91dCgyKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJveE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVVzZXJWYXJpYWJsZShzdWJDaGlwKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZU1vbmV5KEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5Sb3VsZXR0ZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZiktc3ViQ2hpcCwgdGhpcy5QbGF5ZXJQb3MuY2hpbGRyZW5bMF0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZU1vbmV5KG1vbmV5LCBub2RlUGxheWVyKSB7XHJcbiAgICAgICAgbm9kZVBsYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfZnJhbWVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJtb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9ICBVdGlscy5mb3JtYXRDdXJyZW5jeShtb25leSk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
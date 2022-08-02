"use strict";
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
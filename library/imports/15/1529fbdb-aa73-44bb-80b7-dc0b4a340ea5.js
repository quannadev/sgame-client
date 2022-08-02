"use strict";
cc._RF.push(module, '1529fvbqnNEu4C33AtKNA6l', 'UIBaccarat');
// scripts/baccarat/UIBaccarat.js

"use strict";

var BaccaratCard = require('BaccaratCard');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    ChatEmojiLayer: cc.Node,
    listCau: cc.Node,
    threeCau: cc.Node,
    lbSession: cc.Label,
    listNodeBet: cc.Node,
    scrollBet: cc.ScrollView,
    bgThreeCau: {
      type: cc.SpriteFrame,
      "default": []
    },
    bgListCau: {
      type: cc.SpriteFrame,
      "default": []
    },
    listNodePot: {
      type: cc.Node,
      "default": []
    },
    _currentType: -1,
    _currentBet: 1000,
    menuNode: cc.Node,
    Timer: cc.Node,
    ChipPrefab: cc.Prefab,
    baccaratPrefab: cc.Prefab,
    PlayerPos: cc.Node,
    Noti: cc.Node,
    playerCard1: cc.Node,
    playerCard2: cc.Node,
    playerCard3: cc.Node,
    playerCardUp: cc.Node,
    playerBgPoint: cc.Node,
    playerPoint: cc.Label,
    bankerCard1: cc.Node,
    bankerCard2: cc.Node,
    bankerCard3: cc.Node,
    bankerCardUp: cc.Node,
    bankerBgPoint: cc.Node,
    bankerPoint: cc.Label,
    winNode: cc.Node,
    playerNode: cc.Node,
    bankerNode: cc.Node,
    girl: cc.Node,
    ListPosInGirl: cc.Node,
    fontWin: cc.Font,
    fontLose: cc.Font,
    _currentTime: 0,
    _dataCau: [],
    _myChipBet: [],
    _poolChip: [],
    _poolCau: [],
    _isDat: false,
    _isDatLast: false,
    _lastBet: null,
    _currentPercent: 0
  },
  onLoad: function onLoad() {
    cc.director.getCollisionManager().enabled = true;
    var self = this;
    this._myChipBet = [];
    this.ListChipImg = {
      "1000": "ic_chip1_small",
      "2000": "ic_chip2_small",
      "5000": "ic_chip3_small",
      "10000": "ic_chip4_small",
      "50000": "ic_chip5_small",
      "100000": "ic_chip6_small",
      "500000": "ic_chip7_small",
      "1000000": "ic_chip8_small",
      "10000000": "ic_chip9_small"
    };
    this._currentBet = 1000;
    this._lastBet = this.listNodeBet.children[0];
    this._isDat = false;
    this._isDatLast = false;
    this.poolChip = [];

    for (var i = 0; i < 20; i++) {
      var chip = cc.instantiate(this.ChipPrefab);
      this.node.addChild(chip);
      chip.active = false;
      this.poolChip.push(chip);
    }

    this.listMyChipBet = [];
    this.listChipBet = [];
    Promise.all(this.listNodePot.map(function (nodeBet, index) {
      self.listMyChipBet.push(nodeBet.getChildByName("bg_cuoc_ca_nhan").getChildByName("mybet").getComponent(cc.Label));
      self.listChipBet.push(nodeBet.getChildByName("bg_tongcuoc").getChildByName("pot").getComponent(cc.Label));
      nodeBet.on(cc.Node.EventType.TOUCH_END, function (event) {
        var polygonCollider = nodeBet.getComponent(cc.PolygonCollider);

        if (cc.Intersection.pointInPolygon(event.getLocation(), polygonCollider.world.points)) {
          if (!SmartFoxSDK.BaccaratController.m_tableInfo.isBetting) {
            mm.Toast.showToast(1, "Không được cược");
            return;
          }

          self._isDat = true;
          mm.audio.playDatCua();
          self.sendRequestBet(self._currentBet, index);
        }
      });
    }));
  },
  onEnable: function onEnable() {
    this._dataCau = [];
    this._currentPercent = 0;
    this.hideAll();

    this._stopEffectWinPot();
  },
  hideAll: function hideAll() {
    this.Timer.active = false;
    this.Noti.active = false;
    Promise.all(this.listNodePot.map(function (nodeBet, index) {
      Promise.all(nodeBet.children.map(function (subBet, index) {
        subBet.active = false;
      }));
    }));
    this.playerCard1.active = false;
    this.playerCard2.active = false;
    this.playerCard3.active = false;
    this.playerCardUp.active = false;
    this.playerBgPoint.active = false;
    this.bankerCard1.active = false;
    this.bankerCard2.active = false;
    this.bankerCard3.active = false;
    this.bankerCardUp.active = false;
    this.bankerPoint.active = false;
    this.bankerBgPoint.active = false;
    this.winNode.active = false;
    this.menuNode.active = false;
  },
  runActionChangeMoney: function runActionChangeMoney(username, money, speed) {
    this.updateUserVariable(0);

    if (money > 0) {
      mm.audio.playWin();
    }

    if (Math.abs(money) > 0) {
      var fontTxt = money > 0 ? this.fontWin : this.fontLose;
      var pos = this.getPosFromName(username);
      var nodeAvatar = this.PlayerPos.getChildByName("pos_" + pos);
      var moneyWin = nodeAvatar.getChildByName("money_win").getComponent(cc.Label);
      moneyWin.node.stopAllActions();
      moneyWin.node.active = true;
      moneyWin.node.stopAllActions();
      moneyWin.node.position = cc.v2(0, 20);
      moneyWin.font = fontTxt;
      moneyWin.string = money > 0 ? "+" + Utils.addDotToNumber(Math.abs(money)) : "-" + Utils.addDotToNumber(Math.abs(money));
      var nodeTo = cc.v2(0, 120);
      if (pos > 6) nodeTo = cc.v2(0, 50);
      moneyWin.node.runAction(cc.sequence(cc.moveTo(0.5 * speed, nodeTo).easing(cc.easeOut(0.5)), cc.delayTime(2 * speed), cc.callFunc(function () {
        moneyWin.node.active = false;
      })));
    }
  },
  runEffectGirl: function runEffectGirl(effectName) {
    this._isDat = false;
    this.girl.getComponent(sp.Skeleton).setAnimation(0, effectName, false);
  },
  showResult: function showResult(cardPlayer, cardBanker, winpot, chipUserOnBoard, usersOnboard, speed) {
    var self = this;
    this.runEffectGirl("2");
    this.playerCardUp.active = true;
    this.bankerCardUp.active = true;
    this.bankerCardUp.position = cc.v2(-34, -46);
    this.bankerCardUp.angle = 0;
    this.bankerCardUp.opacity = 255;
    this.bankerCardUp.stopAllActions();
    this.playerCardUp.position = cc.v2(34, -46);
    this.playerCardUp.angle = 0;
    this.playerCardUp.opacity = 255;
    this.playerCardUp.stopAllActions();
    var listCardPlayer = [];
    var listCardBanker = [];

    for (var i = 0; i < cardPlayer.length; i++) {
      listCardPlayer.push(new BaccaratCard.Card(cardPlayer[i]));
    }

    for (var _i = 0; _i < cardBanker.length; _i++) {
      listCardBanker.push(new BaccaratCard.Card(cardBanker[_i]));
    }

    this.playerPoint.string = (listCardPlayer[0].pointNumber + listCardPlayer[1].pointNumber) % 10;
    this.bankerPoint.string = (listCardBanker[0].pointNumber + listCardBanker[1].pointNumber) % 10;
    this.playerCard2.getComponent("ItemCard").init(listCardPlayer[1]);
    this.bankerCard2.getComponent("ItemCard").init(listCardBanker[1]);
    this.playerCard1.getComponent("ItemCard").reveal(listCardPlayer[0], true);
    this.bankerCard1.getComponent("ItemCard").reveal(listCardBanker[0], true, function () {
      self.runActionOpenCard(self.playerCardUp, speed, function () {
        self.runActionShowPoint(self.playerBgPoint, speed, function () {
          self.runActionOpenCard(self.bankerCardUp, speed, function () {
            self.runActionShowPoint(self.bankerBgPoint, speed, function () {
              //show win
              if (cardPlayer.length > 2 || cardBanker.length > 2) {
                if (cardPlayer.length == 3) {
                  self.playerCard3.getComponent("ItemCard").reveal(listCardPlayer[2], false, function () {
                    self.playerPoint.string = (listCardPlayer[0].pointNumber + listCardPlayer[1].pointNumber + listCardPlayer[2].pointNumber) % 10;
                    self.showWin(winpot, chipUserOnBoard, usersOnboard, speed);
                  });
                }

                if (cardBanker.length == 3) {
                  self.bankerCard3.getComponent("ItemCard").reveal(listCardBanker[2], false, function () {
                    self.bankerPoint.string = (listCardBanker[0].pointNumber + listCardBanker[1].pointNumber + listCardBanker[2].pointNumber) % 10;
                    self.showWin(winpot, chipUserOnBoard, usersOnboard, speed);
                  });
                }
              } else {
                self.showWin(winpot, chipUserOnBoard, usersOnboard, speed);
              }
            });
          });
        });
      });
    });
  },
  showEffectWinLose: function showEffectWinLose(pos) {
    this.winNode.active = true;
    var posNode = this.playerNode.position;
    var effectname = "hoa";

    if (pos == 0 || pos == 3) {
      effectname = "thangcon_1";
      posNode = this.playerNode.position;
    } else if (pos == 1 || pos == 4) {
      effectname = "thangcai_1";
      posNode = this.bankerNode.position;
    } else {
      posNode = cc.v2(0, this.bankerNode.y);
      effectname = "hoa_1";
    }

    this.winNode.position = posNode;
    this.winNode.getComponent(sp.Skeleton).setAnimation(0, effectname, false);
  },
  runActionOpenCard: function runActionOpenCard(nodeCard, speed, cb) {
    var rotate1 = cc.rotateTo(0.5 * speed, 6);
    var rotate2 = cc.rotateTo(1 * speed, -6);
    var rotate3 = cc.rotateTo(0.5 * speed, 0);
    var fadeIn = cc.fadeOut(1.5 * speed);
    var moveEnd = cc.moveBy(1.5 * speed, cc.v2(nodeCard.x + 50, nodeCard.y - 50));
    nodeCard.runAction(cc.sequence(rotate1, rotate2, rotate3, cc.spawn(fadeIn, moveEnd), cc.callFunc(function () {
      if (cb) cb();
    })));
  },
  runActionShowPoint: function runActionShowPoint(nodePoint, speed, cb) {
    if (!nodePoint.active) nodePoint.active = true;
    nodePoint.stopAllActions();
    nodePoint.scaleY = 0;
    var scale = cc.scaleTo(0.2 * speed, 1, 1);
    nodePoint.runAction(cc.sequence(scale, cc.callFunc(function () {
      if (cb) cb();
    })));
  },
  showWin: function showWin(winPot, chipUserOnBoard, usersOnboard, speed) {
    var self = this;

    for (var i = 0; i < winPot.length; i++) {
      var pos = winPot[i];
      var blink = cc.blink(2 * speed, 8);
      var bgWin = this.listNodePot[pos].getChildByName("bg_win");
      bgWin.active = true;
      bgWin.runAction(cc.sequence(blink, cc.delayTime(1 * speed), cc.callFunc(function () {
        self.runActionToGirl(function () {
          if (chipUserOnBoard.length > 0) {
            Promise.all(usersOnboard.map(function (username, index) {
              self.actionFlyChipToPlayer(username, chipUserOnBoard[index], speed);
            }));
          }
        });
      })));
    }

    this.showEffectWinLose(winPot[0]);
  },
  getNumberCardFromChip: function getNumberCardFromChip(money) {
    var number10M = Math.floor(money / 10000000);
    money = money - number10M * 10000000;
    var number1M = Math.floor(money / 1000000);
    money = money - number1M * 1000000;
    var number500k = Math.floor(money / 500000);
    money = money - number500k * 500000;
    var number100k = Math.floor(money / 100000);
    money = money - number100k * 100000;
    var number50k = Math.floor(money / 50000);
    money = money - number50k * 50000;
    var number10k = Math.floor(money / 10000);
    money = money - number10k * 10000;
    var number5k = Math.floor(money / 5000);
    money = money - number5k * 5000;
    var number2k = Math.floor(money / 2000);
    money = money - number2k * 2000;
    var number1k = Math.floor(money / 1000);
    return [number1k, number2k, number5k, number10k, number50k, number100k, number500k, number1M, number10M];
  },
  runActionToGirl: function runActionToGirl(cb) {
    var _this = this;

    var totalActive = 0;

    for (var i = 0; i < this.poolChip.length; i++) {
      if (this.poolChip[i].active) totalActive++;
    }

    var count = 0;

    var _loop = function _loop(_i2) {
      var chipNode = null;

      if (_this.poolChip[_i2].active) {
        count++;
        chipNode = _this.poolChip[_i2];
        chipNode.position = cc.v2(0, 0);

        var posTo = _this.getPositionInOtherNode(chipNode, _this.ListPosInGirl);

        chipNode.parent = _this.ListPosInGirl;
        chipNode.position = posTo;
        var positionGirl = cc.v2(Math.random() * 50 - 20, Math.random() * 10 - 10);
        chipNode.runAction(cc.sequence(cc.moveTo(1, positionGirl).easing(cc.easeOut(0.5)), cc.delayTime(0.05 * _i2), cc.callFunc(function () {
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

    for (var _i2 = 0; _i2 < this.poolChip.length; _i2++) {
      _loop(_i2);
    }
  },
  resumeGame: function resumeGame(cardPlayer, cardBanker, winpot, time, usersOnboard, chipUserOnBoard) {
    this.showResult(cardPlayer, cardBanker, winpot, chipUserOnBoard, usersOnboard, time / 20);
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
    chip.active = true;
    this.poolChip.push(chip);
    return chip;
  },
  returnChipNode: function returnChipNode(chipNode) {
    chipNode.active = false;
  },
  _stopEffectWinPot: function _stopEffectWinPot() {},
  showListUsers: function showListUsers(listUserShow) {
    for (var i = 0; i < 7; i++) {
      var nodeUser = this.PlayerPos.getChildByName("pos_" + i);
      var lb_name = nodeUser.getChildByName("name").getComponent(cc.Label);
      var lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);
      var user = i >= listUserShow.length ? null : listUserShow[i];

      if (user && user.getVariable("role").value != "admin") {
        nodeUser.active = true;
        nodeUser._username = user.name;
        lb_name.string = GameVariables.getDisplayName(user);
        lb_money.string = Utils.formatCurrency(GameVariables.getChip(user));
      } else {
        nodeUser.active = false;
        nodeUser._username = null;
      }
    }
  },
  getPosFromName: function getPosFromName(username) {
    for (var i = 0; i < 7; i++) {
      var nodeUser = this.PlayerPos.getChildByName("pos_" + i);

      if (nodeUser.active && nodeUser._username && nodeUser._username == username) {
        return i;
      }
    }

    return 7;
  },
  updateChip: function updateChip(user) {
    for (var i = 0; i < 7; i++) {
      var nodeUser = this.PlayerPos.getChildByName("pos_" + i);
      var lb_money = nodeUser.getChildByName("money").getComponent(cc.Label);

      if (nodeUser.active && nodeUser._username && nodeUser._username == user.name) {
        lb_money.string = Utils.formatCurrency(GameVariables.getChip(user));
        return;
      }
    }
  },
  _turnOnTime: function _turnOnTime(time, maxTime) {
    this.Timer.active = true;
    this.Timer.getComponent("TimeSub").setTotalProgress(maxTime);
    this.Timer.getComponent("TimeSub").setTotalRemain(time);
    this.Timer.getComponent("TimeSub").turnOnTimer();
    this._currentTime = time;

    this._stopEffectWinPot();
  },
  _turnOffTime: function _turnOffTime() {
    this.Timer.getComponent("TimeSub").turnOffTimer();
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
      if (bets[i] > 0) {
        if (!this.listMyChipBet[i].node.parent.active) this.listMyChipBet[i].node.parent.active = true;
        this.listMyChipBet[i].string = Utils.formatCurrency(bets[i]);
      } else this.listMyChipBet[i].node.parent.active = false;
    }
  },
  showListChipBet: function showListChipBet(bets) {
    for (var i = 0; i < bets.length; i++) {
      if (!this.listChipBet[i].node.parent.active) this.listChipBet[i].node.parent.active = true;
      this.listChipBet[i].string = Utils.formatCurrency(bets[i]);
    }
  },
  selectBetChip: function selectBetChip(event, betChip) {
    mm.audio.playButton();
    this._lastBet.getChildByName("bg_select").active = false;
    event.currentTarget.getChildByName("bg_select").active = true;
    this._lastBet = event.currentTarget;
    this._currentBet = parseInt(betChip);
  },
  sendRequestBet: function sendRequestBet(bet, type) {
    this._isDatLast = true;
    this._currentType = type;

    if (this._currentType < 0 || this._currentType >= 6) {
      mm.Toast.showToast(1, "Của đặt không hợp lệ");
    } else if (GameVariables.getChip(SmartFoxSDK.BaccaratController.ZoneInstance.mySelf) < bet) {
      mm.Toast.showToast(1, "Không đủ tiền!");
    } else {
      var betRequest = new BaccaratRequest.BetRequest();
      betRequest.setBetChip(bet);
      betRequest.setTypePot(this._currentType);
      SmartFoxSDK.BaccaratController.ZoneInstance.send(betRequest.toSRequest());
    }
  },
  actionFlyChipToPot: function actionFlyChipToPot(username, potType, money) {
    if (this.ListChipImg.hasOwnProperty(money)) {
      this.actionFlyOneChipToPot(username, potType, money);
    } else {
      this.actionFlyMutiChipToPot(username, potType, money);
    }
  },
  actionFlyOneChipToPot: function actionFlyOneChipToPot(username, potType, money) {
    var pos = this.getPosFromName(username);
    var chipName = "ic_chip1_small";

    if (this.ListChipImg.hasOwnProperty(money)) {
      chipName = this.ListChipImg[money];
      var chipNode = this.getChipNode();
      Utils.loadRes(chipNode.getComponent(cc.Sprite), "images/baccarat/" + chipName);
      var nodeAvatar = this.PlayerPos.getChildByName("pos_" + pos);
      chipNode.position = nodeAvatar.position;
      var nodeFrom = this.getPosBet(potType);
      var posTo = this.getPositionInOtherNode(nodeFrom, this.node);
      chipNode.runAction(cc.sequence(cc.moveTo(0.5, cc.v2(posTo.x, posTo.y)).easing(cc.easeOut(1)), cc.callFunc(function () {
        chipNode.position = cc.v2(0, 0);
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
          var chipName = "ic_chip1_small";
          if (self.ListChipImg.hasOwnProperty(chip)) chipName = self.ListChipImg[key];
          var chipNode = self.getChipNode();
          Utils.loadRes(chipNode.getComponent(cc.Sprite), "images/baccarat/" + chipName);
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
    var betNode = null;

    if (potType < 2) {
      var bet0 = this.listNodePot[potType].getChildByName("Bet0");
      var bet1 = this.listNodePot[potType].getChildByName("Bet1");
      var bet2 = this.listNodePot[potType].getChildByName("Bet2");
      if (bet0.childrenCount < bet1.childrenCount) betNode = bet0;else if (bet1.childrenCount < bet2.childrenCount) {
        betNode = bet1;
      } else betNode = bet2;
    } else {
      betNode = this.listNodePot[potType].getChildByName("Bet0");
    }

    if (betNode.childrenCount > 8) {
      var card = betNode.children[0];
      card.removeFromParent(true);
      card.active = false;
    }

    if (!betNode.active) betNode.active = true;
    return betNode;
  },
  eventCloseMenu: function eventCloseMenu() {
    mm.audio.playButton();
    this.menuNode.active = false;
  },
  eventOpenMenu: function eventOpenMenu() {
    mm.audio.playButton();
    this.menuNode.active = true;
  },
  eventRank: function eventRank() {
    mm.audio.playButton();
    mm.Loading.show();
    this.menuNode.active = false;
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.BaccaratController.ZoneInstance.send(request.toSRequest());
  },
  eventTransaction: function eventTransaction() {
    mm.audio.playButton();
    mm.Loading.show();
    this.menuNode.active = false;
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.BaccaratController.ZoneInstance.send(request.toSRequest());
  },
  clickExitRoom: function clickExitRoom(event) {
    var room = SmartFoxSDK.BaccaratController.ZoneInstance.getRoomByName("baccarat");

    if (room) {
      SmartFoxSDK.BaccaratController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
      mm.Loading.show();
    } else {
      UIManger.show("UIHome");
    }
  },
  eventHelper: function eventHelper() {
    mm.audio.playButton();
    this.show("UIBaccaratHelper", {
      pop: true,
      src: 'baccarat'
    });
  },
  eventSoiCau: function eventSoiCau() {
    mm.audio.playButton();
    mm.Loading.show();

    if (this._dataCau.length < 1) {
      var historyRequest = new BaccaratRequest.HistoryDetailRequest();
      SmartFoxSDK.BaccaratController.ZoneInstance.send(historyRequest.toSRequest());
    } else {
      this.showSoiCau(this._dataCau);
    }
  },
  showSoiCau: function showSoiCau(dataCau) {
    this._dataCau = dataCau;
    this.show("UIBaccaratSoiCau", {
      pop: true,
      src: 'baccarat',
      data: dataCau
    });
  },
  eventGapThep: function eventGapThep() {
    mm.audio.playButton();

    if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
      this._isDat = true;

      for (var i = 0; i < this._myChipBet.length; i++) {
        if (this._myChipBet[i] > 0) this.sendRequestBet(2 * this._myChipBet[i], i);
      }
    } else {
      mm.Toast.showToast(1, "Không có dữ liệu gấp thếp");
    }
  },
  eventDatLai: function eventDatLai() {
    mm.audio.playButton();

    if (this._isHaveChipBet(this._myChipBet) && !this._isDat) {
      this._isDat = true;

      for (var i = 0; i < this._myChipBet.length; i++) {
        if (this._myChipBet[i] > 0) this.sendRequestBet(this._myChipBet[i], i);
      }
    } else {
      mm.Toast.showToast(1, "Không có dữ liệu đặt lại");
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
  eventScrollLeft: function eventScrollLeft() {
    mm.audio.playButton();
    this._currentPercent -= 0.5;
    if (this._currentPercent < 0) this._currentPercent = 0;
    this.scrollBet.scrollToPercentHorizontal(this._currentPercent, 1);
  },
  eventScrollRight: function eventScrollRight() {
    mm.audio.playButton();
    this._currentPercent += 0.5;
    if (this._currentPercent > 1) this._currentPercent = 1;
    this.scrollBet.scrollToPercentHorizontal(this._currentPercent, 1);
  },
  showNoti: function showNoti(message) {
    this.Noti.active = true;
    this.Noti.getChildByName("lb_noti_content").getComponent(cc.Label).string = message;
    this.scheduleOnce(function () {
      this.Noti.active = false;
    }, 1.5);
  },
  onListRender: function onListRender(item, idx) {
    var cau = this.listCau[idx];
    item.getComponent(item.name).init(cau);
  },
  updateCau: function updateCau(listCau) {
    var self = this;
    var startPos = listCau.length - this.listCau.childrenCount;
    if (startPos < 0) startPos = 0;
    Promise.all(this.listCau.children.map(function (nodeCau, index) {
      if (startPos + index < listCau.length) {
        var type = listCau[startPos + index].type;
        self.setCauInfo(type, nodeCau);
      } else {
        nodeCau.active = false;
      }
    }));
    this.updateThreeCau(listCau);
  },
  updateThreeCau: function updateThreeCau(listCau) {
    var threeCau = [];
    var totalCau = listCau.length;

    if (totalCau > 3) {
      threeCau.push(listCau[totalCau - 3]);
      threeCau.push(listCau[totalCau - 2]);
      threeCau.push(listCau[totalCau - 1]);
    } else {
      threeCau = listCau;
    }

    var self = this;
    var total = threeCau.length;
    Promise.all(this.threeCau.children.map(function (nodeCau, index) {
      if (index < total) {
        var type = self.getTypeCau(threeCau[index].type);
        nodeCau.getComponent(cc.Sprite).spriteFrame = self.bgThreeCau[type];
        if (type == 0) nodeCau.getChildByName("lb_point").getComponent(cc.Label).string = threeCau[index].con;else if (type == 1) {
          nodeCau.getChildByName("lb_point").getComponent(cc.Label).string = threeCau[index].cai;
        } else nodeCau.getChildByName("lb_point").getComponent(cc.Label).string = threeCau[index].con;
      } else nodeCau.active = false;
    }));
  },
  setCauInfo: function setCauInfo(type, nodeCau) {
    var cai = nodeCau.getChildByName("cai");
    var con = nodeCau.getChildByName("con");
    cai.active = false;
    con.active = false;

    for (var i = 0; i < type.length; i++) {
      if (type[i] > 2) {
        if (type == 3) {
          con.active = true;
        } else {
          cai.active = true;
        }
      } else {
        nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgListCau[type[i]];
      }
    }
  },
  getTypeCau: function getTypeCau(typeCau) {
    if (typeCau.length < 2) return typeCau[0];

    for (var i = 0; i < typeCau.length; i++) {
      if (typeCau[i] < 3) return typeCau[i];
    }

    return 2;
  },
  eventShowChat: function eventShowChat(event, data) {
    this.ChatEmojiLayer.active = !this.ChatEmojiLayer.active;
    if (this.ChatEmojiLayer.active) this.ChatEmojiLayer.getComponent("ChatEmojiLayer").initController(SmartFoxSDK.BaccaratController.ZoneInstance);
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
    var nodeUser = this.PlayerPos.children[0];
    nodeUser.getChildByName("money").getComponent(cc.Label).string = Utils.formatCurrency(GameVariables.Poker.getChip(SmartFoxSDK.BaccaratController.ZoneInstance.mySelf) - subChip);
  }
});

cc._RF.pop();

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/baccarat/UIBaccarat.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFjY2FyYXRcXFVJQmFjY2FyYXQuanMiXSwibmFtZXMiOlsiQmFjY2FyYXRDYXJkIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkNoYXRFbW9qaUxheWVyIiwiTm9kZSIsImxpc3RDYXUiLCJ0aHJlZUNhdSIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGlzdE5vZGVCZXQiLCJzY3JvbGxCZXQiLCJTY3JvbGxWaWV3IiwiYmdUaHJlZUNhdSIsInR5cGUiLCJTcHJpdGVGcmFtZSIsImJnTGlzdENhdSIsImxpc3ROb2RlUG90IiwiX2N1cnJlbnRUeXBlIiwiX2N1cnJlbnRCZXQiLCJtZW51Tm9kZSIsIlRpbWVyIiwiQ2hpcFByZWZhYiIsIlByZWZhYiIsImJhY2NhcmF0UHJlZmFiIiwiUGxheWVyUG9zIiwiTm90aSIsInBsYXllckNhcmQxIiwicGxheWVyQ2FyZDIiLCJwbGF5ZXJDYXJkMyIsInBsYXllckNhcmRVcCIsInBsYXllckJnUG9pbnQiLCJwbGF5ZXJQb2ludCIsImJhbmtlckNhcmQxIiwiYmFua2VyQ2FyZDIiLCJiYW5rZXJDYXJkMyIsImJhbmtlckNhcmRVcCIsImJhbmtlckJnUG9pbnQiLCJiYW5rZXJQb2ludCIsIndpbk5vZGUiLCJwbGF5ZXJOb2RlIiwiYmFua2VyTm9kZSIsImdpcmwiLCJMaXN0UG9zSW5HaXJsIiwiZm9udFdpbiIsIkZvbnQiLCJmb250TG9zZSIsIl9jdXJyZW50VGltZSIsIl9kYXRhQ2F1IiwiX215Q2hpcEJldCIsIl9wb29sQ2hpcCIsIl9wb29sQ2F1IiwiX2lzRGF0IiwiX2lzRGF0TGFzdCIsIl9sYXN0QmV0IiwiX2N1cnJlbnRQZXJjZW50Iiwib25Mb2FkIiwiZGlyZWN0b3IiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsInNlbGYiLCJMaXN0Q2hpcEltZyIsImNoaWxkcmVuIiwicG9vbENoaXAiLCJpIiwiY2hpcCIsImluc3RhbnRpYXRlIiwibm9kZSIsImFkZENoaWxkIiwiYWN0aXZlIiwicHVzaCIsImxpc3RNeUNoaXBCZXQiLCJsaXN0Q2hpcEJldCIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJub2RlQmV0IiwiaW5kZXgiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiZXZlbnQiLCJwb2x5Z29uQ29sbGlkZXIiLCJQb2x5Z29uQ29sbGlkZXIiLCJJbnRlcnNlY3Rpb24iLCJwb2ludEluUG9seWdvbiIsImdldExvY2F0aW9uIiwid29ybGQiLCJwb2ludHMiLCJTbWFydEZveFNESyIsIkJhY2NhcmF0Q29udHJvbGxlciIsIm1fdGFibGVJbmZvIiwiaXNCZXR0aW5nIiwibW0iLCJUb2FzdCIsInNob3dUb2FzdCIsImF1ZGlvIiwicGxheURhdEN1YSIsInNlbmRSZXF1ZXN0QmV0Iiwib25FbmFibGUiLCJoaWRlQWxsIiwiX3N0b3BFZmZlY3RXaW5Qb3QiLCJzdWJCZXQiLCJydW5BY3Rpb25DaGFuZ2VNb25leSIsInVzZXJuYW1lIiwibW9uZXkiLCJzcGVlZCIsInVwZGF0ZVVzZXJWYXJpYWJsZSIsInBsYXlXaW4iLCJNYXRoIiwiYWJzIiwiZm9udFR4dCIsInBvcyIsImdldFBvc0Zyb21OYW1lIiwibm9kZUF2YXRhciIsIm1vbmV5V2luIiwic3RvcEFsbEFjdGlvbnMiLCJwb3NpdGlvbiIsInYyIiwiZm9udCIsInN0cmluZyIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJub2RlVG8iLCJydW5BY3Rpb24iLCJzZXF1ZW5jZSIsIm1vdmVUbyIsImVhc2luZyIsImVhc2VPdXQiLCJkZWxheVRpbWUiLCJjYWxsRnVuYyIsInJ1bkVmZmVjdEdpcmwiLCJlZmZlY3ROYW1lIiwic3AiLCJTa2VsZXRvbiIsInNldEFuaW1hdGlvbiIsInNob3dSZXN1bHQiLCJjYXJkUGxheWVyIiwiY2FyZEJhbmtlciIsIndpbnBvdCIsImNoaXBVc2VyT25Cb2FyZCIsInVzZXJzT25ib2FyZCIsImFuZ2xlIiwib3BhY2l0eSIsImxpc3RDYXJkUGxheWVyIiwibGlzdENhcmRCYW5rZXIiLCJsZW5ndGgiLCJDYXJkIiwicG9pbnROdW1iZXIiLCJpbml0IiwicmV2ZWFsIiwicnVuQWN0aW9uT3BlbkNhcmQiLCJydW5BY3Rpb25TaG93UG9pbnQiLCJzaG93V2luIiwic2hvd0VmZmVjdFdpbkxvc2UiLCJwb3NOb2RlIiwiZWZmZWN0bmFtZSIsInkiLCJub2RlQ2FyZCIsImNiIiwicm90YXRlMSIsInJvdGF0ZVRvIiwicm90YXRlMiIsInJvdGF0ZTMiLCJmYWRlSW4iLCJmYWRlT3V0IiwibW92ZUVuZCIsIm1vdmVCeSIsIngiLCJzcGF3biIsIm5vZGVQb2ludCIsInNjYWxlWSIsInNjYWxlIiwic2NhbGVUbyIsIndpblBvdCIsImJsaW5rIiwiYmdXaW4iLCJydW5BY3Rpb25Ub0dpcmwiLCJhY3Rpb25GbHlDaGlwVG9QbGF5ZXIiLCJnZXROdW1iZXJDYXJkRnJvbUNoaXAiLCJudW1iZXIxME0iLCJmbG9vciIsIm51bWJlcjFNIiwibnVtYmVyNTAwayIsIm51bWJlcjEwMGsiLCJudW1iZXI1MGsiLCJudW1iZXIxMGsiLCJudW1iZXI1ayIsIm51bWJlcjJrIiwibnVtYmVyMWsiLCJ0b3RhbEFjdGl2ZSIsImNvdW50IiwiY2hpcE5vZGUiLCJwb3NUbyIsImdldFBvc2l0aW9uSW5PdGhlck5vZGUiLCJwYXJlbnQiLCJwb3NpdGlvbkdpcmwiLCJyYW5kb20iLCJyZW1vdmVGcm9tUGFyZW50IiwicmVzdW1lR2FtZSIsInRpbWUiLCJnZXRDaGlwTm9kZSIsInJldHVybkNoaXBOb2RlIiwic2hvd0xpc3RVc2VycyIsImxpc3RVc2VyU2hvdyIsIm5vZGVVc2VyIiwibGJfbmFtZSIsImxiX21vbmV5IiwidXNlciIsImdldFZhcmlhYmxlIiwidmFsdWUiLCJfdXNlcm5hbWUiLCJuYW1lIiwiR2FtZVZhcmlhYmxlcyIsImdldERpc3BsYXlOYW1lIiwiZm9ybWF0Q3VycmVuY3kiLCJnZXRDaGlwIiwidXBkYXRlQ2hpcCIsIl90dXJuT25UaW1lIiwibWF4VGltZSIsInNldFRvdGFsUHJvZ3Jlc3MiLCJzZXRUb3RhbFJlbWFpbiIsInR1cm5PblRpbWVyIiwiX3R1cm5PZmZUaW1lIiwidHVybk9mZlRpbWVyIiwic2hvd0xpc3RNeUNoaXBCZXQiLCJiZXRzIiwiX2lzSGF2ZUNoaXBCZXQiLCJzaG93TGlzdENoaXBCZXQiLCJzZWxlY3RCZXRDaGlwIiwiYmV0Q2hpcCIsInBsYXlCdXR0b24iLCJjdXJyZW50VGFyZ2V0IiwicGFyc2VJbnQiLCJiZXQiLCJab25lSW5zdGFuY2UiLCJteVNlbGYiLCJiZXRSZXF1ZXN0IiwiQmFjY2FyYXRSZXF1ZXN0IiwiQmV0UmVxdWVzdCIsInNldEJldENoaXAiLCJzZXRUeXBlUG90Iiwic2VuZCIsInRvU1JlcXVlc3QiLCJhY3Rpb25GbHlDaGlwVG9Qb3QiLCJwb3RUeXBlIiwiaGFzT3duUHJvcGVydHkiLCJhY3Rpb25GbHlPbmVDaGlwVG9Qb3QiLCJhY3Rpb25GbHlNdXRpQ2hpcFRvUG90IiwiY2hpcE5hbWUiLCJsb2FkUmVzIiwiU3ByaXRlIiwibm9kZUZyb20iLCJnZXRQb3NCZXQiLCJsaXN0Q2FyZCIsImFsbEtleSIsIk9iamVjdCIsImtleXMiLCJrZXkiLCJwb3NpdGlvblRvIiwidG90YWwiLCJhbGxDaGlwTm9kZSIsInRoZW4iLCJyZXN1bHQiLCJiZXROb2RlIiwiYmV0MCIsImJldDEiLCJiZXQyIiwiY2hpbGRyZW5Db3VudCIsImNhcmQiLCJldmVudENsb3NlTWVudSIsImV2ZW50T3Blbk1lbnUiLCJldmVudFJhbmsiLCJMb2FkaW5nIiwic2hvdyIsInJlcXVlc3QiLCJDYXNpbm9SZXF1ZXN0IiwiTGVhZGVyQm9hcmRSZXF1ZXN0IiwiZXZlbnRUcmFuc2FjdGlvbiIsIkhpc3RvcnlSZXF1ZXN0IiwiY2xpY2tFeGl0Um9vbSIsInJvb20iLCJnZXRSb29tQnlOYW1lIiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkxlYXZlUm9vbVJlcXVlc3QiLCJVSU1hbmdlciIsImV2ZW50SGVscGVyIiwicG9wIiwic3JjIiwiZXZlbnRTb2lDYXUiLCJoaXN0b3J5UmVxdWVzdCIsIkhpc3RvcnlEZXRhaWxSZXF1ZXN0Iiwic2hvd1NvaUNhdSIsImRhdGFDYXUiLCJkYXRhIiwiZXZlbnRHYXBUaGVwIiwiZXZlbnREYXRMYWkiLCJoYXZlQ2hpcCIsImV2ZW50U2Nyb2xsTGVmdCIsInNjcm9sbFRvUGVyY2VudEhvcml6b250YWwiLCJldmVudFNjcm9sbFJpZ2h0Iiwic2hvd05vdGkiLCJtZXNzYWdlIiwic2NoZWR1bGVPbmNlIiwib25MaXN0UmVuZGVyIiwiaXRlbSIsImlkeCIsImNhdSIsInVwZGF0ZUNhdSIsInN0YXJ0UG9zIiwibm9kZUNhdSIsInNldENhdUluZm8iLCJ1cGRhdGVUaHJlZUNhdSIsInRvdGFsQ2F1IiwiZ2V0VHlwZUNhdSIsInNwcml0ZUZyYW1lIiwiY29uIiwiY2FpIiwidHlwZUNhdSIsImV2ZW50U2hvd0NoYXQiLCJpbml0Q29udHJvbGxlciIsIm9uUHVibGljTWVzc2FnZSIsIm1lc3NEYXRhIiwibXNnSXRlbSIsIm1zZyIsInNlbmRlciIsImVtb2ppQm94IiwidW5kZWZpbmVkIiwiaXNFbW9paiIsImluZGV4T2YiLCJlbW9qaU5vZGUiLCJib3hOb2RlIiwicmVwbGFjZSIsIkxheW91dCIsInVwZGF0ZUxheW91dCIsInN1YkNoaXAiLCJQb2tlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxZQUFZLEdBQUdDLE9BQU8sQ0FBQyxjQUFELENBQTFCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGNBQWMsRUFBRUosRUFBRSxDQUFDSyxJQURYO0FBRVJDLElBQUFBLE9BQU8sRUFBT04sRUFBRSxDQUFDSyxJQUZUO0FBR1JFLElBQUFBLFFBQVEsRUFBTVAsRUFBRSxDQUFDSyxJQUhUO0FBSVJHLElBQUFBLFNBQVMsRUFB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QyxDQUE4Qy9FLEVBQUUsQ0FBQ1MsS0FBakQsRUFBd0RpSCxNQUF4RCxHQUFrRUMsS0FBSyxDQUFDOEYsY0FBTixDQUFxQkYsYUFBYSxDQUFDNkgsS0FBZCxDQUFvQjFILE9BQXBCLENBQTRCL0gsV0FBVyxDQUFDQyxrQkFBWixDQUErQmlKLFlBQS9CLENBQTRDQyxNQUF4RSxJQUFnRnFHLE9BQXJHLENBQWxFO0FBQ0g7QUF4dkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBCYWNjYXJhdENhcmQgPSByZXF1aXJlKCdCYWNjYXJhdENhcmQnKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgQ2hhdEVtb2ppTGF5ZXI6IGNjLk5vZGUsXHJcbiAgICAgICAgbGlzdENhdSAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHRocmVlQ2F1ICAgIDogY2MuTm9kZSxcclxuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxpc3ROb2RlQmV0IDogY2MuTm9kZSxcclxuICAgICAgICBzY3JvbGxCZXQgICA6IGNjLlNjcm9sbFZpZXcsXHJcbiAgICAgICAgYmdUaHJlZUNhdSA6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBiZ0xpc3RDYXUgOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlzdE5vZGVQb3QgOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLk5vZGUsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBfY3VycmVudFR5cGUgICAgICAgICA6IC0xLFxyXG4gICAgICAgIF9jdXJyZW50QmV0ICAgICAgICAgIDogMTAwMCxcclxuICAgICAgICBtZW51Tm9kZSAgICAgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgVGltZXIgICAgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIENoaXBQcmVmYWIgICAgICAgICAgIDogY2MuUHJlZmFiLFxyXG4gICAgICAgIGJhY2NhcmF0UHJlZmFiICAgICAgIDogY2MuUHJlZmFiLFxyXG4gICAgICAgIFBsYXllclBvcyAgICAgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBOb3RpICAgICAgICAgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgcGxheWVyQ2FyZDEgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHBsYXllckNhcmQyICAgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBwbGF5ZXJDYXJkMyAgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgcGxheWVyQ2FyZFVwICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHBsYXllckJnUG9pbnQgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBwbGF5ZXJQb2ludCAgICAgICAgICA6IGNjLkxhYmVsLFxyXG5cclxuICAgICAgICBiYW5rZXJDYXJkMSAgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgYmFua2VyQ2FyZDIgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhbmtlckNhcmQzICAgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBiYW5rZXJDYXJkVXAgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgYmFua2VyQmdQb2ludCAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhbmtlclBvaW50ICAgICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgd2luTm9kZSAgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHBsYXllck5vZGUgICAgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBiYW5rZXJOb2RlICAgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgZ2lybCAgICAgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIExpc3RQb3NJbkdpcmwgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBmb250V2luICAgICAgICAgICAgICA6IGNjLkZvbnQsXHJcbiAgICAgICAgZm9udExvc2UgICAgICAgICAgICAgOiBjYy5Gb250LFxyXG4gICAgICAgIF9jdXJyZW50VGltZSA6IDAsXHJcbiAgICAgICAgX2RhdGFDYXUgICAgIDogW10sXHJcbiAgICAgICAgX215Q2hpcEJldCAgIDogW10sXHJcbiAgICAgICAgX3Bvb2xDaGlwICAgIDogW10sXHJcbiAgICAgICAgX3Bvb2xDYXUgICAgIDogW10sXHJcbiAgICAgICAgX2lzRGF0ICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgX2lzRGF0TGFzdCAgIDogZmFsc2UsXHJcbiAgICAgICAgX2xhc3RCZXQgICAgIDogbnVsbCxcclxuICAgICAgICBfY3VycmVudFBlcmNlbnQgICAgIDogMCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuX215Q2hpcEJldCAgICAgPSBbXTtcclxuICAgICAgICB0aGlzLkxpc3RDaGlwSW1nICAgID0ge1xyXG4gICAgICAgICAgICBcIjEwMDBcIiAgICAgIDogXCJpY19jaGlwMV9zbWFsbFwiLFxyXG4gICAgICAgICAgICBcIjIwMDBcIiAgICAgIDogXCJpY19jaGlwMl9zbWFsbFwiLFxyXG4gICAgICAgICAgICBcIjUwMDBcIiAgICAgIDogXCJpY19jaGlwM19zbWFsbFwiLFxyXG4gICAgICAgICAgICBcIjEwMDAwXCIgICAgIDogXCJpY19jaGlwNF9zbWFsbFwiLFxyXG4gICAgICAgICAgICBcIjUwMDAwXCIgICAgIDogXCJpY19jaGlwNV9zbWFsbFwiLFxyXG4gICAgICAgICAgICBcIjEwMDAwMFwiICAgIDogXCJpY19jaGlwNl9zbWFsbFwiLFxyXG4gICAgICAgICAgICBcIjUwMDAwMFwiICAgIDogXCJpY19jaGlwN19zbWFsbFwiLFxyXG4gICAgICAgICAgICBcIjEwMDAwMDBcIiAgIDogXCJpY19jaGlwOF9zbWFsbFwiLFxyXG4gICAgICAgICAgICBcIjEwMDAwMDAwXCIgIDogXCJpY19jaGlwOV9zbWFsbFwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50QmV0ICAgID0gMTAwMDtcclxuICAgICAgICB0aGlzLl9sYXN0QmV0ICAgICAgID0gdGhpcy5saXN0Tm9kZUJldC5jaGlsZHJlblswXTtcclxuICAgICAgICB0aGlzLl9pc0RhdCAgICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5faXNEYXRMYXN0ICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucG9vbENoaXAgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMjA7aSsrKXtcclxuICAgICAgICAgICAgbGV0IGNoaXAgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkNoaXBQcmVmYWIpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoY2hpcCk7XHJcbiAgICAgICAgICAgIGNoaXAuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucG9vbENoaXAucHVzaChjaGlwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0TXlDaGlwQmV0ID0gW107XHJcbiAgICAgICAgdGhpcy5saXN0Q2hpcEJldCAgID0gW107XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saXN0Tm9kZVBvdC5tYXAoZnVuY3Rpb24obm9kZUJldCwgaW5kZXgpe1xyXG4gICAgICAgICAgICBzZWxmLmxpc3RNeUNoaXBCZXQucHVzaChub2RlQmV0LmdldENoaWxkQnlOYW1lKFwiYmdfY3VvY19jYV9uaGFuXCIpLmdldENoaWxkQnlOYW1lKFwibXliZXRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSk7XHJcbiAgICAgICAgICAgIHNlbGYubGlzdENoaXBCZXQucHVzaChub2RlQmV0LmdldENoaWxkQnlOYW1lKFwiYmdfdG9uZ2N1b2NcIikuZ2V0Q2hpbGRCeU5hbWUoXCJwb3RcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKSk7XHJcbiAgICAgICAgICAgIG5vZGVCZXQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwb2x5Z29uQ29sbGlkZXIgPSBub2RlQmV0LmdldENvbXBvbmVudChjYy5Qb2x5Z29uQ29sbGlkZXIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNjLkludGVyc2VjdGlvbi5wb2ludEluUG9seWdvbihldmVudC5nZXRMb2NhdGlvbigpLCBwb2x5Z29uQ29sbGlkZXIud29ybGQucG9pbnRzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghU21hcnRGb3hTREsuQmFjY2FyYXRDb250cm9sbGVyLm1fdGFibGVJbmZvLmlzQmV0dGluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIktow7RuZyDEkcaw4bujYyBjxrDhu6NjXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2lzRGF0ICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbW0uYXVkaW8ucGxheURhdEN1YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2VuZFJlcXVlc3RCZXQoc2VsZi5fY3VycmVudEJldCwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICB0aGlzLl9kYXRhQ2F1ICAgICAgICAgICAgPSBbXTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UGVyY2VudCAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuaGlkZUFsbCgpO1xyXG4gICAgICAgIHRoaXMuX3N0b3BFZmZlY3RXaW5Qb3QoKTtcclxuICAgIH0sXHJcbiAgICBoaWRlQWxsKCkge1xyXG4gICAgICAgIHRoaXMuVGltZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5Ob3RpLmFjdGl2ZSAgPSBmYWxzZTtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpc3ROb2RlUG90Lm1hcChmdW5jdGlvbihub2RlQmV0LCBpbmRleCl7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKG5vZGVCZXQuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKHN1YkJldCwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgc3ViQmV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyZDEuYWN0aXZlICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyZDIuYWN0aXZlICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyZDMuYWN0aXZlICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyZFVwLmFjdGl2ZSAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucGxheWVyQmdQb2ludC5hY3RpdmUgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFua2VyQ2FyZDEuYWN0aXZlICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFua2VyQ2FyZDIuYWN0aXZlICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFua2VyQ2FyZDMuYWN0aXZlICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFua2VyQ2FyZFVwLmFjdGl2ZSAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFua2VyUG9pbnQuYWN0aXZlICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmFua2VyQmdQb2ludC5hY3RpdmUgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMud2luTm9kZS5hY3RpdmUgICAgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWVudU5vZGUuYWN0aXZlICAgICAgICA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHJ1bkFjdGlvbkNoYW5nZU1vbmV5KHVzZXJuYW1lLCBtb25leSwgc3BlZWQpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVVzZXJWYXJpYWJsZSgwKTtcclxuICAgICAgICBpZiAobW9uZXkgPiAwKSB7XHJcbiAgICAgICAgICAgIG1tLmF1ZGlvLnBsYXlXaW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKG1vbmV5KSA+IDApe1xyXG4gICAgICAgICAgICBsZXQgZm9udFR4dCA9IG1vbmV5ID4gMD8gdGhpcy5mb250V2luOiB0aGlzLmZvbnRMb3NlO1xyXG4gICAgICAgICAgICBsZXQgcG9zICAgICAgICA9IHRoaXMuZ2V0UG9zRnJvbU5hbWUodXNlcm5hbWUpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZUF2YXRhciA9IHRoaXMuUGxheWVyUG9zLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK3Bvcyk7XHJcbiAgICAgICAgICAgIGxldCBtb25leVdpbiAgID0gbm9kZUF2YXRhci5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5X3dpblwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBtb25leVdpbi5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgIG1vbmV5V2luLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbW9uZXlXaW4ubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICBtb25leVdpbi5ub2RlLnBvc2l0aW9uID0gY2MudjIoMCwgMjApO1xyXG4gICAgICAgICAgICBtb25leVdpbi5mb250ICAgICAgICA9IGZvbnRUeHQ7XHJcbiAgICAgICAgICAgIG1vbmV5V2luLnN0cmluZyAgICAgID0gbW9uZXkgPiAwPyBcIitcIitVdGlscy5hZGREb3RUb051bWJlcihNYXRoLmFicyhtb25leSkpOiBcIi1cIitVdGlscy5hZGREb3RUb051bWJlcihNYXRoLmFicyhtb25leSkpO1xyXG4gICAgICAgICAgICBsZXQgbm9kZVRvICAgICAgICAgICA9IGNjLnYyKDAsIDEyMCk7XHJcbiAgICAgICAgICAgIGlmIChwb3MgPiA2KVxyXG4gICAgICAgICAgICAgICAgbm9kZVRvICAgICAgICAgICA9IGNjLnYyKDAsIDUwKTtcclxuICAgICAgICAgICAgbW9uZXlXaW4ubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuNSpzcGVlZCwgbm9kZVRvKS5lYXNpbmcoY2MuZWFzZU91dCgwLjUpKSwgY2MuZGVsYXlUaW1lKDIqc3BlZWQpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBtb25leVdpbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBydW5FZmZlY3RHaXJsKGVmZmVjdE5hbWUpIHtcclxuICAgICAgICB0aGlzLl9pc0RhdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2lybC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBlZmZlY3ROYW1lLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdChjYXJkUGxheWVyLCBjYXJkQmFua2VyLCB3aW5wb3QsIGNoaXBVc2VyT25Cb2FyZCwgdXNlcnNPbmJvYXJkLCBzcGVlZCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLnJ1bkVmZmVjdEdpcmwoXCIyXCIpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyZFVwLmFjdGl2ZSAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJDYXJkVXAuYWN0aXZlICAgID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5iYW5rZXJDYXJkVXAucG9zaXRpb24gID0gY2MudjIoLTM0LCAtNDYpO1xyXG4gICAgICAgIHRoaXMuYmFua2VyQ2FyZFVwLmFuZ2xlICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJDYXJkVXAub3BhY2l0eSAgID0gMjU1O1xyXG4gICAgICAgIHRoaXMuYmFua2VyQ2FyZFVwLnN0b3BBbGxBY3Rpb25zKCk7XHJcblxyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyZFVwLnBvc2l0aW9uICA9IGNjLnYyKDM0LCAtNDYpO1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyZFVwLmFuZ2xlICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDYXJkVXAub3BhY2l0eSAgID0gMjU1O1xyXG4gICAgICAgIHRoaXMucGxheWVyQ2FyZFVwLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbGV0IGxpc3RDYXJkUGxheWVyID0gW107XHJcbiAgICAgICAgbGV0IGxpc3RDYXJkQmFua2VyID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgY2FyZFBsYXllci5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxpc3RDYXJkUGxheWVyLnB1c2gobmV3IEJhY2NhcmF0Q2FyZC5DYXJkKGNhcmRQbGF5ZXJbaV0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBjYXJkQmFua2VyLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGlzdENhcmRCYW5rZXIucHVzaChuZXcgQmFjY2FyYXRDYXJkLkNhcmQoY2FyZEJhbmtlcltpXSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBsYXllclBvaW50LnN0cmluZyA9IChsaXN0Q2FyZFBsYXllclswXS5wb2ludE51bWJlciArIGxpc3RDYXJkUGxheWVyWzFdLnBvaW50TnVtYmVyKSUxMDtcclxuICAgICAgICB0aGlzLmJhbmtlclBvaW50LnN0cmluZyA9IChsaXN0Q2FyZEJhbmtlclswXS5wb2ludE51bWJlciArIGxpc3RDYXJkQmFua2VyWzFdLnBvaW50TnVtYmVyKSUxMDtcclxuXHJcbiAgICAgICAgdGhpcy5wbGF5ZXJDYXJkMi5nZXRDb21wb25lbnQoXCJJdGVtQ2FyZFwiKS5pbml0KGxpc3RDYXJkUGxheWVyWzFdKTtcclxuICAgICAgICB0aGlzLmJhbmtlckNhcmQyLmdldENvbXBvbmVudChcIkl0ZW1DYXJkXCIpLmluaXQobGlzdENhcmRCYW5rZXJbMV0pO1xyXG5cclxuICAgICAgICB0aGlzLnBsYXllckNhcmQxLmdldENvbXBvbmVudChcIkl0ZW1DYXJkXCIpLnJldmVhbChsaXN0Q2FyZFBsYXllclswXSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5iYW5rZXJDYXJkMS5nZXRDb21wb25lbnQoXCJJdGVtQ2FyZFwiKS5yZXZlYWwobGlzdENhcmRCYW5rZXJbMF0sIHRydWUsIGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICBzZWxmLnJ1bkFjdGlvbk9wZW5DYXJkKHNlbGYucGxheWVyQ2FyZFVwLCBzcGVlZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ydW5BY3Rpb25TaG93UG9pbnQoc2VsZi5wbGF5ZXJCZ1BvaW50LCBzcGVlZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYucnVuQWN0aW9uT3BlbkNhcmQoc2VsZi5iYW5rZXJDYXJkVXAsIHNwZWVkLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucnVuQWN0aW9uU2hvd1BvaW50KHNlbGYuYmFua2VyQmdQb2ludCwgc3BlZWQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2hvdyB3aW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYXJkUGxheWVyLmxlbmd0aCA+IDIgfHwgY2FyZEJhbmtlci5sZW5ndGggPiAyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZFBsYXllci5sZW5ndGggPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYucGxheWVyQ2FyZDMuZ2V0Q29tcG9uZW50KFwiSXRlbUNhcmRcIikucmV2ZWFsKGxpc3RDYXJkUGxheWVyWzJdLCBmYWxzZSwgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnBsYXllclBvaW50LnN0cmluZyA9IChsaXN0Q2FyZFBsYXllclswXS5wb2ludE51bWJlciArIGxpc3RDYXJkUGxheWVyWzFdLnBvaW50TnVtYmVyK2xpc3RDYXJkUGxheWVyWzJdLnBvaW50TnVtYmVyKSUxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1dpbih3aW5wb3QsIGNoaXBVc2VyT25Cb2FyZCwgdXNlcnNPbmJvYXJkLCBzcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2FyZEJhbmtlci5sZW5ndGggPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYmFua2VyQ2FyZDMuZ2V0Q29tcG9uZW50KFwiSXRlbUNhcmRcIikucmV2ZWFsKGxpc3RDYXJkQmFua2VyWzJdLCBmYWxzZSwgZnVuY3Rpb24gKCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmJhbmtlclBvaW50LnN0cmluZyA9IChsaXN0Q2FyZEJhbmtlclswXS5wb2ludE51bWJlciArIGxpc3RDYXJkQmFua2VyWzFdLnBvaW50TnVtYmVyK2xpc3RDYXJkQmFua2VyWzJdLnBvaW50TnVtYmVyKSUxMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2hvd1dpbih3aW5wb3QsIGNoaXBVc2VyT25Cb2FyZCwgdXNlcnNPbmJvYXJkLCBzcGVlZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNob3dXaW4od2lucG90LCBjaGlwVXNlck9uQm9hcmQsIHVzZXJzT25ib2FyZCwgc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0VmZmVjdFdpbkxvc2UocG9zKXtcclxuICAgICAgICB0aGlzLndpbk5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgcG9zTm9kZSA9IHRoaXMucGxheWVyTm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBsZXQgZWZmZWN0bmFtZSA9IFwiaG9hXCI7XHJcbiAgICAgICAgaWYgKHBvcyA9PSAwIHx8IHBvcyA9PTMpe1xyXG4gICAgICAgICAgICBlZmZlY3RuYW1lID0gXCJ0aGFuZ2Nvbl8xXCI7XHJcbiAgICAgICAgICAgIHBvc05vZGUgPSB0aGlzLnBsYXllck5vZGUucG9zaXRpb247XHJcbiAgICAgICAgfWVsc2UgaWYgKHBvcyA9PSAxIHx8IHBvcyA9PTQpe1xyXG4gICAgICAgICAgICBlZmZlY3RuYW1lID0gXCJ0aGFuZ2NhaV8xXCI7XHJcbiAgICAgICAgICAgIHBvc05vZGUgPSB0aGlzLmJhbmtlck5vZGUucG9zaXRpb247XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHBvc05vZGUgPSBjYy52MigwLCAgdGhpcy5iYW5rZXJOb2RlLnkpO1xyXG4gICAgICAgICAgICBlZmZlY3RuYW1lID0gXCJob2FfMVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndpbk5vZGUucG9zaXRpb24gPSBwb3NOb2RlO1xyXG4gICAgICAgIHRoaXMud2luTm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLCBlZmZlY3RuYW1lLCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgcnVuQWN0aW9uT3BlbkNhcmQobm9kZUNhcmQsIHNwZWVkLCBjYikge1xyXG4gICAgICAgIGxldCByb3RhdGUxID0gY2Mucm90YXRlVG8oMC41KnNwZWVkLCA2KTtcclxuICAgICAgICBsZXQgcm90YXRlMiA9IGNjLnJvdGF0ZVRvKDEqc3BlZWQsIC02KTtcclxuICAgICAgICBsZXQgcm90YXRlMyA9IGNjLnJvdGF0ZVRvKDAuNSpzcGVlZCwgMCk7XHJcbiAgICAgICAgbGV0IGZhZGVJbiA9IGNjLmZhZGVPdXQoMS41KnNwZWVkKTtcclxuICAgICAgICBsZXQgbW92ZUVuZCA9IGNjLm1vdmVCeSgxLjUqc3BlZWQsIGNjLnYyKG5vZGVDYXJkLngrNTAsIG5vZGVDYXJkLnktNTApKTtcclxuICAgICAgICBub2RlQ2FyZC5ydW5BY3Rpb24oY2Muc2VxdWVuY2Uocm90YXRlMSwgcm90YXRlMiwgcm90YXRlMywgY2Muc3Bhd24oZmFkZUluLCBtb3ZlRW5kKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2IpXHJcbiAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9LFxyXG4gICAgcnVuQWN0aW9uU2hvd1BvaW50KG5vZGVQb2ludCwgc3BlZWQsIGNiKSB7XHJcbiAgICAgICAgaWYgKCFub2RlUG9pbnQuYWN0aXZlKVxyXG4gICAgICAgICAgICBub2RlUG9pbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICBub2RlUG9pbnQuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBub2RlUG9pbnQuc2NhbGVZID0gMDtcclxuICAgICAgICBsZXQgc2NhbGUgPSBjYy5zY2FsZVRvKDAuMipzcGVlZCwgMSwgMSk7XHJcbiAgICAgICAgbm9kZVBvaW50LnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShzY2FsZSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoY2IpXHJcbiAgICAgICAgICAgICAgICBjYigpO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1dpbih3aW5Qb3QsIGNoaXBVc2VyT25Cb2FyZCwgdXNlcnNPbmJvYXJkLCBzcGVlZCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHdpblBvdC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBwb3MgPSB3aW5Qb3RbaV07XHJcbiAgICAgICAgICAgIGxldCBibGluayAgICA9IGNjLmJsaW5rKDIqc3BlZWQsIDgpO1xyXG4gICAgICAgICAgICBsZXQgYmdXaW4gICAgPSB0aGlzLmxpc3ROb2RlUG90W3Bvc10uZ2V0Q2hpbGRCeU5hbWUoXCJiZ193aW5cIik7XHJcbiAgICAgICAgICAgIGJnV2luLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGJnV2luLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShibGluaywgY2MuZGVsYXlUaW1lKDEqc3BlZWQpLCBjYy5jYWxsRnVuYyhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJ1bkFjdGlvblRvR2lybChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNoaXBVc2VyT25Cb2FyZC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodXNlcnNPbmJvYXJkLm1hcChmdW5jdGlvbih1c2VybmFtZSwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hY3Rpb25GbHlDaGlwVG9QbGF5ZXIodXNlcm5hbWUsIGNoaXBVc2VyT25Cb2FyZFtpbmRleF0sIHNwZWVkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dFZmZlY3RXaW5Mb3NlKHdpblBvdFswXSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0TnVtYmVyQ2FyZEZyb21DaGlwKG1vbmV5KSB7XHJcbiAgICAgICAgbGV0IG51bWJlcjEwTSAgID0gTWF0aC5mbG9vcihtb25leS8xMDAwMDAwMCk7XHJcbiAgICAgICAgbW9uZXkgICAgICAgICAgID0gbW9uZXkgLSBudW1iZXIxME0qMTAwMDAwMDA7XHJcbiAgICAgICAgbGV0IG51bWJlcjFNICAgID0gIE1hdGguZmxvb3IobW9uZXkvMTAwMDAwMCk7XHJcbiAgICAgICAgbW9uZXkgICAgICAgICAgID0gbW9uZXkgLSBudW1iZXIxTSoxMDAwMDAwO1xyXG4gICAgICAgIGxldCBudW1iZXI1MDBrICA9ICBNYXRoLmZsb29yKG1vbmV5LzUwMDAwMCk7XHJcbiAgICAgICAgbW9uZXkgICAgICAgICAgID0gbW9uZXkgLSBudW1iZXI1MDBrKjUwMDAwMDtcclxuICAgICAgICBsZXQgbnVtYmVyMTAwayAgPSAgTWF0aC5mbG9vcihtb25leS8xMDAwMDApO1xyXG4gICAgICAgIG1vbmV5ICAgICAgICAgICA9IG1vbmV5IC0gbnVtYmVyMTAwayoxMDAwMDA7XHJcbiAgICAgICAgbGV0IG51bWJlcjUwayAgID0gIE1hdGguZmxvb3IobW9uZXkvNTAwMDApO1xyXG4gICAgICAgIG1vbmV5ICAgICAgICAgICA9IG1vbmV5IC0gbnVtYmVyNTBrKjUwMDAwO1xyXG4gICAgICAgIGxldCBudW1iZXIxMGsgICA9ICBNYXRoLmZsb29yKG1vbmV5LzEwMDAwKTtcclxuICAgICAgICBtb25leSAgICAgICAgICAgPSBtb25leSAtIG51bWJlcjEwayoxMDAwMDtcclxuICAgICAgICBsZXQgbnVtYmVyNWsgICAgPSAgTWF0aC5mbG9vcihtb25leS81MDAwKTtcclxuICAgICAgICBtb25leSAgICAgICAgICAgPSBtb25leSAtIG51bWJlcjVrKjUwMDA7XHJcbiAgICAgICAgbGV0IG51bWJlcjJrICAgID0gIE1hdGguZmxvb3IobW9uZXkvMjAwMCk7XHJcbiAgICAgICAgbW9uZXkgICAgICAgICAgID0gbW9uZXkgLSBudW1iZXIyayoyMDAwO1xyXG4gICAgICAgIGxldCBudW1iZXIxayAgICA9ICBNYXRoLmZsb29yKG1vbmV5LzEwMDApO1xyXG4gICAgICAgIHJldHVybiBbbnVtYmVyMWssIG51bWJlcjJrLCBudW1iZXI1aywgbnVtYmVyMTBrLCBudW1iZXI1MGssIG51bWJlcjEwMGssIG51bWJlcjUwMGssIG51bWJlcjFNLCBudW1iZXIxME1dO1xyXG4gICAgfSxcclxuICAgIHJ1bkFjdGlvblRvR2lybChjYikge1xyXG4gICAgICAgIGxldCB0b3RhbEFjdGl2ZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLnBvb2xDaGlwLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9vbENoaXBbaV0uYWN0aXZlKVxyXG4gICAgICAgICAgICAgICAgdG90YWxBY3RpdmUrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMucG9vbENoaXAubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgbGV0IGNoaXBOb2RlID0gbnVsbDtcclxuICAgICAgICAgIGlmICh0aGlzLnBvb2xDaGlwW2ldLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgY291bnQgKys7XHJcbiAgICAgICAgICAgICAgY2hpcE5vZGUgPSB0aGlzLnBvb2xDaGlwW2ldO1xyXG4gICAgICAgICAgICAgIGNoaXBOb2RlLnBvc2l0aW9uID0gY2MudjIoMCwwKTtcclxuICAgICAgICAgICAgICBsZXQgcG9zVG8gPSB0aGlzLmdldFBvc2l0aW9uSW5PdGhlck5vZGUoY2hpcE5vZGUsIHRoaXMuTGlzdFBvc0luR2lybCk7XHJcbiAgICAgICAgICAgICAgY2hpcE5vZGUucGFyZW50ICAgPSB0aGlzLkxpc3RQb3NJbkdpcmw7XHJcbiAgICAgICAgICAgICAgY2hpcE5vZGUucG9zaXRpb24gPSBwb3NUbztcclxuICAgICAgICAgICAgICBsZXQgcG9zaXRpb25HaXJsID0gY2MudjIoTWF0aC5yYW5kb20oKSo1MC0yMCwgTWF0aC5yYW5kb20oKSoxMC0xMCk7XHJcbiAgICAgICAgICAgICAgY2hpcE5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLm1vdmVUbygxLCBwb3NpdGlvbkdpcmwpLmVhc2luZyhjYy5lYXNlT3V0KDAuNSkpLCBjYy5kZWxheVRpbWUoMC4wNSppKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICBjaGlwTm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgICAgICAgICAgICBjaGlwTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgY2hpcE5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID49IHRvdGFsQWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY2IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2IoKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXN1bWVHYW1lKGNhcmRQbGF5ZXIsIGNhcmRCYW5rZXIsIHdpbnBvdCwgdGltZSwgdXNlcnNPbmJvYXJkLCBjaGlwVXNlck9uQm9hcmQpIHtcclxuICAgICAgICB0aGlzLnNob3dSZXN1bHQoY2FyZFBsYXllciwgY2FyZEJhbmtlciwgd2lucG90LCBjaGlwVXNlck9uQm9hcmQsIHVzZXJzT25ib2FyZCwgdGltZS8yMCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0Q2hpcE5vZGUoKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucG9vbENoaXAubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnBvb2xDaGlwW2ldLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xDaGlwW2ldLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvb2xDaGlwW2ldLnBvc2l0aW9uID0gY2MudjIoMCwwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9vbENoaXBbaV0ucGFyZW50ID0gdGhpcy5ub2RlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5wb29sQ2hpcFtpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hpcCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQ2hpcFByZWZhYik7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGNoaXApO1xyXG4gICAgICAgIGNoaXAuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBvb2xDaGlwLnB1c2goY2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaXA7XHJcbiAgICB9LFxyXG4gICAgcmV0dXJuQ2hpcE5vZGUoY2hpcE5vZGUpe1xyXG4gICAgICAgIGNoaXBOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIF9zdG9wRWZmZWN0V2luUG90KCl7XHJcblxyXG4gICAgfSxcclxuICAgIHNob3dMaXN0VXNlcnMobGlzdFVzZXJTaG93KXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNztpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZVVzZXIgPSB0aGlzLlBsYXllclBvcy5nZXRDaGlsZEJ5TmFtZShcInBvc19cIitpKTtcclxuICAgICAgICAgICAgbGV0IGxiX25hbWUgPSBub2RlVXNlci5nZXRDaGlsZEJ5TmFtZShcIm5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgICAgICAgICAgbGV0IGxiX21vbmV5ID0gbm9kZVVzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBsZXQgdXNlciA9IChpID49IGxpc3RVc2VyU2hvdy5sZW5ndGgpID8gbnVsbCA6IGxpc3RVc2VyU2hvd1tpXTtcclxuICAgICAgICAgICAgaWYodXNlciAmJiAodXNlci5nZXRWYXJpYWJsZShcInJvbGVcIikudmFsdWUgIT0gXCJhZG1pblwiKSl7XHJcbiAgICAgICAgICAgICAgICBub2RlVXNlci5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbm9kZVVzZXIuX3VzZXJuYW1lID0gdXNlci5uYW1lO1xyXG4gICAgICAgICAgICAgICAgbGJfbmFtZS5zdHJpbmcgPSBHYW1lVmFyaWFibGVzLmdldERpc3BsYXlOYW1lKHVzZXIpO1xyXG4gICAgICAgICAgICAgICAgbGJfbW9uZXkuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q3VycmVuY3koR2FtZVZhcmlhYmxlcy5nZXRDaGlwKHVzZXIpKTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBub2RlVXNlci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIG5vZGVVc2VyLl91c2VybmFtZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zRnJvbU5hbWUodXNlcm5hbWUpe1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCA3O2krKyl7XHJcbiAgICAgICAgICAgIGxldCBub2RlVXNlciA9IHRoaXMuUGxheWVyUG9zLmdldENoaWxkQnlOYW1lKFwicG9zX1wiK2kpO1xyXG4gICAgICAgICAgICBpZihub2RlVXNlci5hY3RpdmUgJiYgbm9kZVVzZXIuX3VzZXJuYW1lICYmIG5vZGVVc2VyLl91c2VybmFtZSA9PSB1c2VybmFtZSl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gNyA7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlQ2hpcCh1c2VyKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgNztpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZVVzZXIgPSB0aGlzLlBsYXllclBvcy5nZXRDaGlsZEJ5TmFtZShcInBvc19cIitpKTtcclxuICAgICAgICAgICAgbGV0IGxiX21vbmV5ID0gbm9kZVVzZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtb25leVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgICAgICAgICBpZihub2RlVXNlci5hY3RpdmUgJiYgbm9kZVVzZXIuX3VzZXJuYW1lICYmIG5vZGVVc2VyLl91c2VybmFtZSA9PSB1c2VyLm5hbWUpe1xyXG4gICAgICAgICAgICAgICAgbGJfbW9uZXkuc3RyaW5nID0gVXRpbHMuZm9ybWF0Q3VycmVuY3koR2FtZVZhcmlhYmxlcy5nZXRDaGlwKHVzZXIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBfdHVybk9uVGltZSh0aW1lLCBtYXhUaW1lKXtcclxuICAgICAgICB0aGlzLlRpbWVyLmFjdGl2ZSAgICAgICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5UaW1lci5nZXRDb21wb25lbnQoXCJUaW1lU3ViXCIpLnNldFRvdGFsUHJvZ3Jlc3MobWF4VGltZSk7XHJcbiAgICAgICAgdGhpcy5UaW1lci5nZXRDb21wb25lbnQoXCJUaW1lU3ViXCIpLnNldFRvdGFsUmVtYWluKHRpbWUpO1xyXG4gICAgICAgIHRoaXMuVGltZXIuZ2V0Q29tcG9uZW50KFwiVGltZVN1YlwiKS50dXJuT25UaW1lcigpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lICAgICAgID0gdGltZTtcclxuICAgICAgICB0aGlzLl9zdG9wRWZmZWN0V2luUG90KCk7XHJcbiAgICB9LFxyXG4gICAgX3R1cm5PZmZUaW1lKCl7XHJcbiAgICAgICAgdGhpcy5UaW1lci5nZXRDb21wb25lbnQoXCJUaW1lU3ViXCIpLnR1cm5PZmZUaW1lcigpO1xyXG4gICAgICAgIHRoaXMuVGltZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc2hvd0xpc3RNeUNoaXBCZXQoYmV0cyl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzSGF2ZUNoaXBCZXQoYmV0cykpe1xyXG4gICAgICAgICAgICB0aGlzLl9teUNoaXBCZXQgPSBiZXRzO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLl9pc0RhdExhc3QpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9teUNoaXBCZXQgPSBiZXRzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNEYXRMYXN0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5faXNEYXRMYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBiZXRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBpZiAoYmV0c1tpXSA+MCl7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMubGlzdE15Q2hpcEJldFtpXS5ub2RlLnBhcmVudC5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0TXlDaGlwQmV0W2ldLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RNeUNoaXBCZXRbaV0uc3RyaW5nID0gVXRpbHMuZm9ybWF0Q3VycmVuY3koYmV0c1tpXSk7XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RNeUNoaXBCZXRbaV0ubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dMaXN0Q2hpcEJldChiZXRzKXtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmxpc3RDaGlwQmV0W2ldLm5vZGUucGFyZW50LmFjdGl2ZSlcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoaXBCZXRbaV0ubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2hpcEJldFtpXS5zdHJpbmcgPSBVdGlscy5mb3JtYXRDdXJyZW5jeShiZXRzW2ldKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0QmV0Q2hpcChldmVudCwgYmV0Q2hpcCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuX2xhc3RCZXQuZ2V0Q2hpbGRCeU5hbWUoXCJiZ19zZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgZXZlbnQuY3VycmVudFRhcmdldC5nZXRDaGlsZEJ5TmFtZShcImJnX3NlbGVjdFwiKS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2xhc3RCZXQgICAgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCZXQgPSBwYXJzZUludChiZXRDaGlwKTtcclxuICAgIH0sXHJcbiAgICBzZW5kUmVxdWVzdEJldChiZXQsIHR5cGUpIHtcclxuICAgICAgICB0aGlzLl9pc0RhdExhc3QgICAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUeXBlICA9IHR5cGU7XHJcbiAgICAgICAgaWYodGhpcy5fY3VycmVudFR5cGUgPCAwIHx8IHRoaXMuX2N1cnJlbnRUeXBlID49IDYpe1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJD4bunYSDEkeG6t3Qga2jDtG5nIGjhu6NwIGzhu4dcIik7XHJcbiAgICAgICAgfWVsc2UgaWYoR2FtZVZhcmlhYmxlcy5nZXRDaGlwKFNtYXJ0Rm94U0RLLkJhY2NhcmF0Q29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSA8IGJldCl7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIktow7RuZyDEkeG7pyB0aeG7gW4hXCIpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsZXQgYmV0UmVxdWVzdCA9IG5ldyBCYWNjYXJhdFJlcXVlc3QuQmV0UmVxdWVzdCgpO1xyXG4gICAgICAgICAgICBiZXRSZXF1ZXN0LnNldEJldENoaXAoYmV0KTtcclxuICAgICAgICAgICAgYmV0UmVxdWVzdC5zZXRUeXBlUG90KHRoaXMuX2N1cnJlbnRUeXBlKTtcclxuICAgICAgICAgICAgU21hcnRGb3hTREsuQmFjY2FyYXRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKGJldFJlcXVlc3QudG9TUmVxdWVzdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWN0aW9uRmx5Q2hpcFRvUG90KHVzZXJuYW1lLCBwb3RUeXBlLCBtb25leSl7XHJcbiAgICAgICAgaWYgKHRoaXMuTGlzdENoaXBJbWcuaGFzT3duUHJvcGVydHkobW9uZXkpKXtcclxuICAgICAgICAgICAgdGhpcy5hY3Rpb25GbHlPbmVDaGlwVG9Qb3QodXNlcm5hbWUsIHBvdFR5cGUsIG1vbmV5KTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uRmx5TXV0aUNoaXBUb1BvdCh1c2VybmFtZSwgcG90VHlwZSwgbW9uZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhY3Rpb25GbHlPbmVDaGlwVG9Qb3QodXNlcm5hbWUsIHBvdFR5cGUsIG1vbmV5KXtcclxuICAgICAgICBsZXQgcG9zID0gdGhpcy5nZXRQb3NGcm9tTmFtZSh1c2VybmFtZSk7XHJcbiAgICAgICAgbGV0IGNoaXBOYW1lID0gXCJpY19jaGlwMV9zbWFsbFwiO1xyXG4gICAgICAgIGlmICh0aGlzLkxpc3RDaGlwSW1nLmhhc093blByb3BlcnR5KG1vbmV5KSl7XHJcbiAgICAgICAgICAgIGNoaXBOYW1lID0gdGhpcy5MaXN0Q2hpcEltZ1ttb25leV07XHJcbiAgICAgICAgICAgIGxldCBjaGlwTm9kZSA9IHRoaXMuZ2V0Q2hpcE5vZGUoKTtcclxuICAgICAgICAgICAgVXRpbHMubG9hZFJlcyhjaGlwTm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSxcImltYWdlcy9iYWNjYXJhdC9cIitjaGlwTmFtZSk7XHJcbiAgICAgICAgICAgIGxldCBub2RlQXZhdGFyID0gdGhpcy5QbGF5ZXJQb3MuZ2V0Q2hpbGRCeU5hbWUoXCJwb3NfXCIrcG9zKTtcclxuICAgICAgICAgICAgY2hpcE5vZGUucG9zaXRpb24gPSBub2RlQXZhdGFyLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBsZXQgbm9kZUZyb20gPSB0aGlzLmdldFBvc0JldChwb3RUeXBlKTtcclxuICAgICAgICAgICAgbGV0IHBvc1RvID0gdGhpcy5nZXRQb3NpdGlvbkluT3RoZXJOb2RlKG5vZGVGcm9tLCB0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBjaGlwTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MubW92ZVRvKDAuNSwgY2MudjIocG9zVG8ueCwgcG9zVG8ueSkpLmVhc2luZyhjYy5lYXNlT3V0KDEpKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgY2hpcE5vZGUucG9zaXRpb24gPSBjYy52MigwLDApO1xyXG4gICAgICAgICAgICAgICAgY2hpcE5vZGUucGFyZW50ID0gbm9kZUZyb207XHJcbiAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZseU11dGlDaGlwVG9Qb3QodXNlcm5hbWUsIHBvdFR5cGUsIG1vbmV5KXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxpc3RDYXJkID0gdGhpcy5nZXROdW1iZXJDYXJkRnJvbUNoaXAobW9uZXkpO1xyXG4gICAgICAgIGxldCBhbGxLZXkgICA9IE9iamVjdC5rZXlzKHRoaXMuTGlzdENoaXBJbWcpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGFsbEtleS5tYXAoZnVuY3Rpb24oa2V5LCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmIChsaXN0Q2FyZFtpbmRleF0gPiAwKXtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlwID0gcGFyc2VJbnQoa2V5KTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgbGlzdENhcmRbaW5kZXhdOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYWN0aW9uRmx5T25lQ2hpcFRvUG90KHVzZXJuYW1lLCBwb3RUeXBlLCBjaGlwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgfSxcclxuICAgIGFjdGlvbkZseUNoaXBUb1BsYXllcih1c2VybmFtZSwgbW9uZXksIHNwZWVkKXtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxpc3RDYXJkID0gdGhpcy5nZXROdW1iZXJDYXJkRnJvbUNoaXAobW9uZXkpO1xyXG4gICAgICAgIGxldCBhbGxLZXkgPSBPYmplY3Qua2V5cyh0aGlzLkxpc3RDaGlwSW1nKTtcclxuICAgICAgICBsZXQgcG9zICAgICAgICA9IHNlbGYuZ2V0UG9zRnJvbU5hbWUodXNlcm5hbWUpO1xyXG4gICAgICAgIGxldCBub2RlQXZhdGFyID0gc2VsZi5QbGF5ZXJQb3MuZ2V0Q2hpbGRCeU5hbWUoXCJwb3NfXCIrcG9zKTtcclxuICAgICAgICBsZXQgcG9zaXRpb25UbyA9IG5vZGVBdmF0YXIucG9zaXRpb247XHJcbiAgICAgICAgbGV0IHRvdGFsID0gMDtcclxuICAgICAgICBsZXQgYWxsQ2hpcE5vZGUgPSBbXTtcclxuICAgICAgICBQcm9taXNlLmFsbChhbGxLZXkubWFwKGZ1bmN0aW9uKGtleSwgaW5kZXgpe1xyXG4gICAgICAgICAgICBpZiAobGlzdENhcmRbaW5kZXhdID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY2hpcCA9IHBhcnNlSW50KGtleSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RDYXJkW2luZGV4XTsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpcE5hbWUgPSBcImljX2NoaXAxX3NtYWxsXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuTGlzdENoaXBJbWcuaGFzT3duUHJvcGVydHkoY2hpcCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaXBOYW1lID0gc2VsZi5MaXN0Q2hpcEltZ1trZXldXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaXBOb2RlID0gc2VsZi5nZXRDaGlwTm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLmxvYWRSZXMoY2hpcE5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksXCJpbWFnZXMvYmFjY2FyYXQvXCIrY2hpcE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaXBOb2RlLnBvc2l0aW9uID0gY2MudjIoTWF0aC5yYW5kb20oKSo1MC0yMCwgTWF0aC5yYW5kb20oKSoxMC0xMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxsQ2hpcE5vZGUucHVzaChjaGlwTm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChhbGxDaGlwTm9kZS5tYXAoZnVuY3Rpb24oY2hpcE5vZGUsIGluZGV4KXtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlwTm9kZSAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbCArKztcclxuICAgICAgICAgICAgICAgICAgICBjaGlwTm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKHRvdGFsKjAuMSpzcGVlZCksIGNjLm1vdmVUbygxKnNwZWVkLCBwb3NpdGlvblRvKS5lYXNpbmcoY2MuZWFzZU91dCgxKSksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpcE5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpcE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHNlbGYucnVuQWN0aW9uQ2hhbmdlTW9uZXkodXNlcm5hbWUsIG1vbmV5LCBzcGVlZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UG9zQmV0KHBvdFR5cGUpIHtcclxuICAgICAgICBsZXQgYmV0Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHBvdFR5cGUgPCAyKXtcclxuICAgICAgICAgICAgbGV0IGJldDAgPSB0aGlzLmxpc3ROb2RlUG90W3BvdFR5cGVdLmdldENoaWxkQnlOYW1lKFwiQmV0MFwiKTtcclxuICAgICAgICAgICAgbGV0IGJldDEgPSB0aGlzLmxpc3ROb2RlUG90W3BvdFR5cGVdLmdldENoaWxkQnlOYW1lKFwiQmV0MVwiKTtcclxuICAgICAgICAgICAgbGV0IGJldDIgPSB0aGlzLmxpc3ROb2RlUG90W3BvdFR5cGVdLmdldENoaWxkQnlOYW1lKFwiQmV0MlwiKTtcclxuICAgICAgICAgICAgaWYgKGJldDAuY2hpbGRyZW5Db3VudCA8IGJldDEuY2hpbGRyZW5Db3VudClcclxuICAgICAgICAgICAgICAgIGJldE5vZGUgPSBiZXQwO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChiZXQxLmNoaWxkcmVuQ291bnQgPCBiZXQyLmNoaWxkcmVuQ291bnQpe1xyXG4gICAgICAgICAgICAgICAgYmV0Tm9kZSA9IGJldDE7XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICBiZXROb2RlID0gYmV0MjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgYmV0Tm9kZSA9IHRoaXMubGlzdE5vZGVQb3RbcG90VHlwZV0uZ2V0Q2hpbGRCeU5hbWUoXCJCZXQwXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmV0Tm9kZS5jaGlsZHJlbkNvdW50ID4gOCl7XHJcbiAgICAgICAgICAgIGxldCBjYXJkID0gYmV0Tm9kZS5jaGlsZHJlblswXTtcclxuICAgICAgICAgICAgY2FyZC5yZW1vdmVGcm9tUGFyZW50KHRydWUpO1xyXG4gICAgICAgICAgICBjYXJkLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWJldE5vZGUuYWN0aXZlKVxyXG4gICAgICAgICAgICBiZXROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgcmV0dXJuIGJldE5vZGU7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZU1lbnUoKXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5tZW51Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBldmVudE9wZW5NZW51KCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLm1lbnVOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRSYW5rKCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcclxuICAgICAgICB0aGlzLm1lbnVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IENhc2lub1JlcXVlc3QuTGVhZGVyQm9hcmRSZXF1ZXN0KCk7XHJcbiAgICAgICAgU21hcnRGb3hTREsuQmFjY2FyYXRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKVxyXG4gICAgfSxcclxuICAgIGV2ZW50VHJhbnNhY3Rpb24oKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIHRoaXMubWVudU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5IaXN0b3J5UmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLkJhY2NhcmF0Q29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tFeGl0Um9vbShldmVudCl7XHJcbiAgICAgICAgbGV0IHJvb20gPSBTbWFydEZveFNESy5CYWNjYXJhdENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJiYWNjYXJhdFwiKTtcclxuICAgICAgICBpZihyb29tKXtcclxuICAgICAgICAgICAgU21hcnRGb3hTREsuQmFjY2FyYXRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uTGVhdmVSb29tUmVxdWVzdChyb29tKSk7XHJcbiAgICAgICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlIb21lXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudEhlbHBlcigpIHtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5zaG93KFwiVUlCYWNjYXJhdEhlbHBlclwiLCB7cG9wOiB0cnVlLCBzcmM6ICdiYWNjYXJhdCd9KTtcclxuICAgIH0sXHJcbiAgICBldmVudFNvaUNhdSgpIHtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgbW0uTG9hZGluZy5zaG93KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2RhdGFDYXUubGVuZ3RoIDwgMSl7XHJcbiAgICAgICAgICAgIGxldCBoaXN0b3J5UmVxdWVzdCA9IG5ldyBCYWNjYXJhdFJlcXVlc3QuSGlzdG9yeURldGFpbFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgU21hcnRGb3hTREsuQmFjY2FyYXRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKGhpc3RvcnlSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dTb2lDYXUodGhpcy5fZGF0YUNhdSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dTb2lDYXUoZGF0YUNhdSkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFDYXUgPSBkYXRhQ2F1O1xyXG4gICAgICAgIHRoaXMuc2hvdyhcIlVJQmFjY2FyYXRTb2lDYXVcIiwge3BvcDogdHJ1ZSwgc3JjOiAnYmFjY2FyYXQnLCBkYXRhOiBkYXRhQ2F1fSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRHYXBUaGVwKCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0hhdmVDaGlwQmV0KHRoaXMuX215Q2hpcEJldCkgJiYgICF0aGlzLl9pc0RhdCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRGF0ICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fbXlDaGlwQmV0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9teUNoaXBCZXRbaV0gPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFJlcXVlc3RCZXQoMip0aGlzLl9teUNoaXBCZXRbaV0sIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJLaMO0bmcgY8OzIGThu68gbGnhu4d1IGfhuqVwIHRo4bq/cFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnREYXRMYWkoKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0hhdmVDaGlwQmV0KHRoaXMuX215Q2hpcEJldCkgJiYgICF0aGlzLl9pc0RhdCl7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRGF0ICAgICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fbXlDaGlwQmV0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9teUNoaXBCZXRbaV0gPiAwKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZFJlcXVlc3RCZXQodGhpcy5fbXlDaGlwQmV0W2ldLCBpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJLaMO0bmcgY8OzIGThu68gbGnhu4d1IMSR4bq3dCBs4bqhaVwiKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgX2lzSGF2ZUNoaXBCZXQobGlzdENoaXBCZXQpIHtcclxuICAgICAgICBsZXQgaGF2ZUNoaXAgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IGxpc3RDaGlwQmV0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKGxpc3RDaGlwQmV0W2ldID4gMCl7XHJcbiAgICAgICAgICAgICAgICBoYXZlQ2hpcCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGF2ZUNoaXA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGhhdmVDaGlwO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U2Nyb2xsTGVmdCgpIHtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5fY3VycmVudFBlcmNlbnQgLT0gMC41O1xyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyZW50UGVyY2VudCA8IDApXHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRQZXJjZW50ID0gMDtcclxuICAgICAgICB0aGlzLnNjcm9sbEJldC5zY3JvbGxUb1BlcmNlbnRIb3Jpem9udGFsKHRoaXMuX2N1cnJlbnRQZXJjZW50LCAxKTtcclxuICAgIH0sXHJcbiAgICBldmVudFNjcm9sbFJpZ2h0KCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50UGVyY2VudCArPSAwLjU7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRQZXJjZW50ID4gMSlcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFBlcmNlbnQgPSAxO1xyXG4gICAgICAgIHRoaXMuc2Nyb2xsQmV0LnNjcm9sbFRvUGVyY2VudEhvcml6b250YWwodGhpcy5fY3VycmVudFBlcmNlbnQsIDEpO1xyXG4gICAgfSxcclxuICAgIHNob3dOb3RpKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLk5vdGkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLk5vdGkuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9ub3RpX2NvbnRlbnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5Ob3RpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEuNSlcclxuICAgIH0sXHJcbiAgICBvbkxpc3RSZW5kZXIoaXRlbSwgaWR4KSB7XHJcbiAgICAgICAgbGV0IGNhdSA9IHRoaXMubGlzdENhdVtpZHhdO1xyXG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuaW5pdChjYXUpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZUNhdShsaXN0Q2F1KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgICAgID0gdGhpcztcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBsaXN0Q2F1Lmxlbmd0aCAtIHRoaXMubGlzdENhdS5jaGlsZHJlbkNvdW50O1xyXG4gICAgICAgIGlmIChzdGFydFBvcyA8IDApXHJcbiAgICAgICAgICAgIHN0YXJ0UG9zID0gMDtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpc3RDYXUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG5vZGVDYXUsIGluZGV4KXtcclxuICAgICAgICAgICAgaWYgKHN0YXJ0UG9zK2luZGV4IDwgbGlzdENhdS5sZW5ndGgpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBsaXN0Q2F1W3N0YXJ0UG9zK2luZGV4XS50eXBlO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXRDYXVJbmZvKHR5cGUsIG5vZGVDYXUpO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBub2RlQ2F1LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlVGhyZWVDYXUobGlzdENhdSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVGhyZWVDYXUobGlzdENhdSkge1xyXG4gICAgICAgIGxldCB0aHJlZUNhdSA9IFtdO1xyXG4gICAgICAgIGxldCB0b3RhbENhdSA9IGxpc3RDYXUubGVuZ3RoO1xyXG4gICAgICAgIGlmICh0b3RhbENhdSA+IDMpe1xyXG4gICAgICAgICAgICB0aHJlZUNhdS5wdXNoKGxpc3RDYXVbdG90YWxDYXUtM10pO1xyXG4gICAgICAgICAgICB0aHJlZUNhdS5wdXNoKGxpc3RDYXVbdG90YWxDYXUtMl0pO1xyXG4gICAgICAgICAgICB0aHJlZUNhdS5wdXNoKGxpc3RDYXVbdG90YWxDYXUtMV0pO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhyZWVDYXUgPSBsaXN0Q2F1O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHRvdGFsID0gdGhyZWVDYXUubGVuZ3RoO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMudGhyZWVDYXUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG5vZGVDYXUsIGluZGV4KXtcclxuICAgICAgICAgICAgaWYgKGluZGV4IDwgdG90YWwpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSBzZWxmLmdldFR5cGVDYXUodGhyZWVDYXVbaW5kZXhdLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgbm9kZUNhdS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNlbGYuYmdUaHJlZUNhdVt0eXBlXTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlID09MClcclxuICAgICAgICAgICAgICAgICAgICBub2RlQ2F1LmdldENoaWxkQnlOYW1lKFwibGJfcG9pbnRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aHJlZUNhdVtpbmRleF0uY29uO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZSA9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVDYXUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9wb2ludFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRocmVlQ2F1W2luZGV4XS5jYWk7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIG5vZGVDYXUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9wb2ludFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRocmVlQ2F1W2luZGV4XS5jb247XHJcbiAgICAgICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgICAgICBub2RlQ2F1LmFjdGl2ZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgc2V0Q2F1SW5mbyh0eXBlLCBub2RlQ2F1KSB7XHJcbiAgICAgICAgbGV0IGNhaSA9IG5vZGVDYXUuZ2V0Q2hpbGRCeU5hbWUoXCJjYWlcIik7XHJcbiAgICAgICAgbGV0IGNvbiA9IG5vZGVDYXUuZ2V0Q2hpbGRCeU5hbWUoXCJjb25cIik7XHJcbiAgICAgICAgY2FpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIGNvbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHR5cGUubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZiAodHlwZVtpXSA+IDIpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FpLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIG5vZGVDYXUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmJnTGlzdENhdVt0eXBlW2ldXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRUeXBlQ2F1KHR5cGVDYXUpIHtcclxuICAgICAgICBpZiAodHlwZUNhdS5sZW5ndGggPDIpXHJcbiAgICAgICAgICAgIHJldHVybiB0eXBlQ2F1WzBdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0eXBlQ2F1Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYgKHR5cGVDYXVbaV0gPCAzKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHR5cGVDYXVbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAyO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U2hvd0NoYXQoZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLkNoYXRFbW9qaUxheWVyLmFjdGl2ZSA9ICF0aGlzLkNoYXRFbW9qaUxheWVyLmFjdGl2ZTtcclxuICAgICAgICBpZiAodGhpcy5DaGF0RW1vamlMYXllci5hY3RpdmUpXHJcbiAgICAgICAgICAgIHRoaXMuQ2hhdEVtb2ppTGF5ZXIuZ2V0Q29tcG9uZW50KFwiQ2hhdEVtb2ppTGF5ZXJcIikuaW5pdENvbnRyb2xsZXIoU21hcnRGb3hTREsuQmFjY2FyYXRDb250cm9sbGVyLlpvbmVJbnN0YW5jZSk7XHJcbiAgICB9LFxyXG4gICAgb25QdWJsaWNNZXNzYWdlKG1lc3NEYXRhKXtcclxuICAgICAgICBsZXQgbXNnSXRlbSAgICA9IG1lc3NEYXRhLm1zZztcclxuICAgICAgICBsZXQgcG9zICAgICAgICA9IHRoaXMuZ2V0UG9zRnJvbU5hbWUobWVzc0RhdGEuc2VuZGVyLm5hbWUpO1xyXG4gICAgICAgIGxldCBlbW9qaUJveCAgID0gdGhpcy5QbGF5ZXJQb3MuY2hpbGRyZW5bcG9zXS5nZXRDaGlsZEJ5TmFtZShcIkVNT0pcIik7XHJcbiAgICAgICAgaWYgKGVtb2ppQm94ICE9IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGxldCBzZWxmICAgID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IGlzRW1vaWogPSBtc2dJdGVtLmluZGV4T2YoXCJlbW9pal9cIikgPj0gMDtcclxuICAgICAgICAgICAgbGV0IGVtb2ppTm9kZSA9IGVtb2ppQm94LmdldENoaWxkQnlOYW1lKFwiRU1PSlwiKTtcclxuICAgICAgICAgICAgbGV0IGJveE5vZGUgICA9IGVtb2ppQm94LmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xyXG4gICAgICAgICAgICBlbW9qaU5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGJveE5vZGUuYWN0aXZlICAgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGlzRW1vaWope1xyXG4gICAgICAgICAgICAgICAgZW1vamlOb2RlLmFjdGl2ZSAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGVtb2ppTm9kZS5vcGFjaXR5ICA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gbXNnSXRlbS5yZXBsYWNlKFwiZW1vaWpfXCIsIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgZW1vamlOb2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgICAgICAgICBlbW9qaU5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCwgdHlwZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgZW1vamlOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMS41KSwgY2MuZmFkZU91dCgyKSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVtb2ppTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0pKSk7XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIGJveE5vZGUuYWN0aXZlICAgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYm94Tm9kZS5vcGFjaXR5ICA9IDI1NTtcclxuICAgICAgICAgICAgICAgIGJveE5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICAgICAgICAgIGJveE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9jaGF0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbXNnSXRlbTtcclxuICAgICAgICAgICAgICAgIGJveE5vZGUuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkudXBkYXRlTGF5b3V0KCk7XHJcbiAgICAgICAgICAgICAgICBib3hOb2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMiksIGNjLmZhZGVPdXQoMiksIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBib3hOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVVc2VyVmFyaWFibGUoc3ViQ2hpcCl7XHJcbiAgICAgICAgbGV0IG5vZGVVc2VyID0gdGhpcy5QbGF5ZXJQb3MuY2hpbGRyZW5bMF1cclxuICAgICAgICBub2RlVXNlci5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gIFV0aWxzLmZvcm1hdEN1cnJlbmN5KEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5CYWNjYXJhdENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZiktc3ViQ2hpcCk7XHJcbiAgICB9LFxyXG59KTtcclxuIl19
"use strict";
cc._RF.push(module, '3c82dNTzG1LeLxL3rRvmYq/', 'UITaiXiu');
// scripts/taixiu/UITaiXiu.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    TableBet: cc.Node,
    TanLoc: cc.Node,
    btnXinLoc: cc.Node,
    rutLocInfo: cc.Node,
    lbDayThang: cc.Label,
    lbDayThangMax: cc.Label,
    lbDayThua: cc.Label,
    lbDayThuaMax: cc.Label,
    DiceAnimation: cc.Animation,
    D1: cc.Node,
    D2: cc.Node,
    D3: cc.Node,
    Timer: cc.Label,
    ResultNumber: cc.Node,
    _time: 0,
    _currentBet: 0,
    _currentTypeBet: 0,
    listChipBet: {
      type: cc.Label,
      "default": []
    },
    listMyChipBet: {
      type: cc.Label,
      "default": []
    },
    listPrepareBet: {
      type: cc.Label,
      "default": []
    },
    listUsers: {
      type: cc.Label,
      "default": []
    },
    CauNode: cc.Node,
    imgTai: cc.Node,
    imgXiu: cc.Node,
    BetSelect: cc.Node,
    BetOther: cc.Node,
    controller: null,
    nodeChat: cc.Node,
    toggleChat: cc.Toggle,
    listDicesNode: [cc.SpriteFrame],
    listTaiXiuSprite: [cc.SpriteFrame],
    notiNode: cc.Node,
    toastNode: cc.Node,
    timeEndNode: cc.Node,
    moBatNode: cc.Node,
    animUpBat: cc.Node,
    quayBatNode: cc.Node,
    bgSession: cc.Node,
    lbSession: cc.Label,
    lbTimeEnd: cc.Label,
    moneyWin: cc.Node,
    lbMoneyWin: cc.Label,
    _isNan: false,
    _isBetTaiXiu: -1,
    _totalTimeEnd: 0,
    _totalDayThang: 0,
    _totalDayThua: 0,
    isPlayedAnimation: false
  },
  onLoad: function onLoad() {
    this.schedule(this.updateTimer, 1);
    var self = this;
    cc.game.on(cc.game.EVENT_SHOW, function () {
      if (self.node != null) self.resumeGame();
    });
    this.moBatNode.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var delta = event.getDelta();
      this.moBatNode.x += delta.x;
      this.moBatNode.y += delta.y;
    }, this);
  },
  onEnable: function onEnable() {
    this.content = this.node.getChildByName("content");
    this.hide3D();
    this.DiceAnimation.node.active = false;
    this.TableBet.active = false;
    this.TanLoc.active = true;
    var dices = this.DiceAnimation.node.getComponent("AnimationEvent");
    dices.addEventComplete(function () {
      this.onCompletedAnimationDice(10);
    }.bind(this)); // this.node.y = 360;

    this._isNan = false;
    this.quayBatNode.active = false;
    this.nodeChat.active = !this.toggleChat.isChecked;

    if (this.node.zIndex <= cc.lastZIndex) {
      cc.lastZIndex += 1;
      this.node.zIndex = cc.lastZIndex;
    }

    cc.currentUI = "UITaiXiu";
    this._totalDayThang = 0;
    this._totalDayThua = 0;
    this.setThangThua();
    this.isPlayedAnimation = false;
  },
  setThangThua: function setThangThua() {
    var maxThang = this.getMaxDayThang();
    var maxThua = this.getMaxDayThang();

    if (this._totalDayThang > maxThang) {
      maxThang = this._totalDayThang;
      this.setMaxDayThang(maxThang);
    }

    if (this._totalDayThua > maxThua) {
      maxThua = this._totalDayThua;
      this.setMaxDayThua(maxThua);
    }

    this.lbDayThang.string = this._totalDayThang;
    this.lbDayThangMax.string = maxThang;
    this.lbDayThua.string = this._totalDayThua;
    this.lbDayThuaMax.string = maxThua;
  },
  updateListChat: function updateListChat(listChat) {
    if (listChat.length > 0) {
      this.nodeChat.getComponent(this.nodeChat.name).initChat(listChat);
    }
  },
  onPublicMessage: function onPublicMessage(msgItem) {
    this.nodeChat.getComponent(this.nodeChat.name).addMessage(msgItem);
  },
  resetBetTaiXiu: function resetBetTaiXiu() {
    this._isBetTaiXiu = -1;
    this.toastNode.active = false;
    this.notiNode.active = false;
  },
  showGame: function showGame(isLoc, quyLoc) {
    if (isLoc != null) this.btnXinLoc.getComponent(cc.Button).interactable = isLoc;
    this.rutLocInfo.getChildByName("lbMaxNumberTxt").getComponent(cc.Label).string = Utils.addDotToNumber(quyLoc);
  },
  updateDataCau: function updateDataCau() {
    if (SmartFoxSDK.TaiXiuController.m_tableInfo) {
      var itemCau = {};
      var listResult = SmartFoxSDK.TaiXiuController.m_tableInfo.result;
      if (cc.listCau.length > 0) itemCau.sessionId = parseInt(cc.listCau[cc.listCau.length - 1].sessionId) + 1;else itemCau.sessionId = 1;
      itemCau.point = listResult[0] + listResult[1] + listResult[2];
      cc.listCau.push(itemCau);
      cc.listCau.shift();
    }
  },
  updateListCau: function updateListCau() {
    if (SmartFoxSDK.TaiXiuController.m_tableInfo) {
      if (this.CauNode != null) {
        var listCau = cc.listCau;
        var sizeDot = this.CauNode._children.length;
        if (listCau.length > 16) listCau = listCau.slice(listCau.length - 16, listCau.length);

        for (var i = 0; i < listCau.length; i++) {
          if (i < sizeDot) {
            var cau = this.CauNode._children[i];
            var dataCau = listCau[i];
            cau.txSessionId = dataCau.sessionId;

            if (dataCau.point >= 11) {
              cau.getComponent(cc.Sprite).spriteFrame = this.listTaiXiuSprite[0];
            } else {
              cau.getComponent(cc.Sprite).spriteFrame = this.listTaiXiuSprite[1];
            }
          }
        }

        var a1 = cc.fadeOut(0.2);
        var a2 = cc.fadeIn(0.2);
        this.bgSession.runAction(cc.repeat(cc.sequence(a1, a2), 5));
      }
    }
  },
  updateSessionId: function updateSessionId(sessionId) {
    this.lbSession.string = "#" + (parseInt(sessionId) + 1);
  },
  eventSessionDetail: function eventSessionDetail(event, data) {
    mm.Loading.show(); // cc.txCurrentSession      = event.target.txSessionId;

    UIManger.show("UITaiXiuSessionDetail", {
      pop: true,
      src: 'taixiu',
      data: event.target.txSessionId
    });
  },
  updateDataSessionDetail: function updateDataSessionDetail(dataSession) {
    var ui = this.getUIFromName("UITaiXiuSessionDetail");

    if (ui.name == "UITaiXiuSessionDetail") {
      ui.getComponent(ui.name).init(dataSession);
    }
  },
  eventSoiCau: function eventSoiCau() {
    mm.Loading.show();
    UIManger.show("UITaiXiuSoiCau", {
      pop: true,
      src: 'taixiu',
      data: []
    });
  },
  updateTaiXiuSoiCau: function updateTaiXiuSoiCau(listResult) {
    var ui = this.getUIFromName("UITaiXiuSoiCau");

    if (ui.name == "UITaiXiuSoiCau") {
      ui.getComponent(ui.name).setAllCau(listResult);
    }
  },
  onDisable: function onDisable() {
    this.node.stopAllActions();
  },
  setPrepareBet: function setPrepareBet(prepareBets) {
    if (prepareBets.length != 2) {
      console.error("Error Lenght " + prepareBets.length);
      return;
    }

    if (this.listPrepareBet != null) {
      for (var i = 0; i < this.listPrepareBet.length; i++) {
        this.listPrepareBet[i].string = prepareBets[i];
      }
    }
  },
  runEffectMoneyWin: function runEffectMoneyWin(delay, moneyWin) {
    var self = this;
    this.moneyWin.active = true;
    this.moneyWin.y = 0;
    this.moneyWin.opacity = 255;
    this.lbMoneyWin.string = "+" + Utils.addDotToNumber(moneyWin);
    var move = cc.moveTo(2, cc.v2(this.moneyWin.x, this.moneyWin.y + 100));
    var a1 = cc.fadeOut(0.1);
    this.moneyWin.stopAllActions();
    this.moneyWin.runAction(cc.sequence(cc.delayTime(delay), move, a1, cc.callFunc(function () {
      self.moneyWin.active = false;
    })));
    this.updateChipAll(0);
  },
  runEffectRefundWin: function runEffectRefundWin(delay, refundChip, moneyWin) {
    var self = this;
    this.moneyWin.active = true;
    this.moneyWin.y = 0;
    this.moneyWin.opacity = 255;
    this.lbMoneyWin.string = "+" + Utils.addDotToNumber(refundChip);
    var move = cc.moveTo(2, cc.v2(this.moneyWin.x, this.moneyWin.y + 100));
    var a1 = cc.fadeOut(0.1);
    this.moneyWin.stopAllActions();
    this.moneyWin.runAction(cc.sequence(cc.delayTime(delay), move, a1, cc.callFunc(function () {
      self.moneyWin.active = false;
    })));
    this.updateChipAll(moneyWin);
  },
  runEffectResult: function runEffectResult(number) {
    var a1 = cc.fadeOut(0.1);
    var a2 = cc.fadeIn(0.1);

    if (number <= 10) {
      // XIU
      this.imgXiu.runAction(cc.repeatForever(cc.sequence(a1, a2)));
    }

    if (number >= 11 && number <= 18) {
      // TAI
      this.imgTai.runAction(cc.repeatForever(cc.sequence(a1, a2)));
    }
  },
  stopEffectResult: function stopEffectResult() {
    this.imgTai.stopAllActions();
    this.imgXiu.stopAllActions();
    this.DiceAnimation.node.active = false;
    this.timeEndNode.active = false;
    this.imgXiu.opacity = 255;
    this.imgTai.opacity = 255;
  },
  eventToggleChat: function eventToggleChat(event) {
    this.nodeChat.active = !event.isChecked;
  },
  eventNan: function eventNan(event) {
    this._isNan = !event.isChecked;
  },
  onCompletedAnimationDice: function onCompletedAnimationDice(timeLeft) {
    if (SmartFoxSDK.TaiXiuController.m_tableInfo.result) {
      // load result
      this.D1.getComponent(cc.Sprite).spriteFrame = this.listDicesNode[SmartFoxSDK.TaiXiuController.m_tableInfo.result[0] - 1];
      this.D2.getComponent(cc.Sprite).spriteFrame = this.listDicesNode[SmartFoxSDK.TaiXiuController.m_tableInfo.result[1] - 1];
      this.D3.getComponent(cc.Sprite).spriteFrame = this.listDicesNode[SmartFoxSDK.TaiXiuController.m_tableInfo.result[2] - 1];

      if (this._isNan) {
        var self = this;
        this.moBatNode.position = cc.v2(4.213, -43.589);
        this.moBatNode.active = true;
        var a2 = cc.fadeIn(0.5);
        this.moBatNode.opacity = 255;
        this.moBatNode.runAction(cc.sequence(cc.delayTime(0.2), a2, cc.callFunc(function () {
          self.animUpBat.active = false;
        })));
      } else {
        this.showResultTaiXiu();
      }

      this.D1.active = true;
      this.D2.active = true;
      this.D3.active = true;
      this._totalTimeEnd = timeLeft;
      this.timeEndNode.active = timeLeft > 0;

      if (this._totalTimeEnd < 10) {
        this.lbTimeEnd.string = "00:0" + this._totalTimeEnd;
      } else {
        this.lbTimeEnd.string = "00:" + this._totalTimeEnd;
      }
    }
  },
  showResultTaiXiu: function showResultTaiXiu() {
    if (SmartFoxSDK.TaiXiuController.m_tableInfo.result) {
      var number = 0;

      for (var i = 0; i < SmartFoxSDK.TaiXiuController.m_tableInfo.result.length; i++) {
        number += SmartFoxSDK.TaiXiuController.m_tableInfo.result[i];
      }

      this.showResultNumber(number);
      this.runEffectResult(number);
      this.updateListCau();
      this.setThangThua();

      var ui = this._getUIFromIndex(-1);

      if (ui.name == "UITaiXiuSoiCau") {
        ui.getComponent("UITaiXiuSoiCau").eventGetAllCau();
      }

      if (SmartFoxSDK.TaiXiuController.m_tableInfo.winChip > 0) {
        this.runEffectMoneyWin(1, SmartFoxSDK.TaiXiuController.m_tableInfo.winChip);
      }
    }
  },
  updateTimer: function updateTimer() {
    if (this.Timer != null) {
      this._time--;

      if (this._time >= 0) {
        if (this._time < 10) {
          this.Timer.string = "0" + this._time;

          if (this._time <= 5) {
            this.Timer.node.color = cc.Color.RED;
          }
        } else {
          this.Timer.string = this._time;
        }
      } else {
        if (this.Timer.node.active) this.Timer.node.active = false;
        this._totalTimeEnd--;

        if (this._totalTimeEnd >= 0) {
          this.timeEndNode.active = true;

          if (this._totalTimeEnd < 10) {
            this.lbTimeEnd.string = "00:0" + this._totalTimeEnd;
          } else {
            this.lbTimeEnd.string = "00:" + this._totalTimeEnd;
          }

          if (this._isNan) {
            if (this._totalTimeEnd < 5 && this.moBatNode.active) {
              this.moBatNode.active = false;
              this.showResultTaiXiu();
            }
          }
        } else {
          this.timeEndNode.active = false;
        }
      }

      if (this.controller != null && this.controller.m_tableInfo != null) this.quayBatNode.active = this.controller.m_tableInfo.isBetting && this._time >= 0 && this._time <= 30;
    }
  },
  _turnOnTime: function _turnOnTime(time) {
    if (this.Timer != null) {
      this.Timer.node.active = time > 0;

      if (time <= 5) {
        this.Timer.node.color = cc.Color.RED;
      } else {
        this.Timer.node.color = cc.Color.WHITE;
      }

      this._time = time;

      if (this._time >= 0 && this._time < 10) {
        this.Timer.string = "0" + this._time;
      } else {
        this.Timer.string = this._time;
      }
    }
  },
  _turnOfTime: function _turnOfTime() {
    if (this.Timer != null) this.Timer.node.active = false;
  },
  showListChipBet: function showListChipBet(bets) {
    if (this.listChipBet != null) {
      for (var i = 0; i < bets.length; i++) {
        this.listChipBet[i].string = Utils.addDotToNumber(bets[i]);
      }
    }
  },
  updateThangThua: function updateThangThua(typeWin) {
    if (typeWin > 0) {
      if (typeWin == 1) {
        this._totalDayThang++;
        this._totalDayThua = 0;
      } else {
        this._totalDayThang = 0;
        this._totalDayThua++;
      }
    }
  },
  resumeGame: function resumeGame() {
    if (SmartFoxSDK.TaiXiuController.m_tableInfo != null) {
      SmartFoxSDK.TaiXiuController.m_tableInfo.time = Math.floor(cc.lastTime - new Date().getTime() / 1000);

      this._turnOfTime();

      this.hideResultNumber();
      this.hide3D();
      this.stopEffectResult();

      if (SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
        this._turnOnTime(SmartFoxSDK.TaiXiuController.m_tableInfo.time);
      } else {
        this.cancua(SmartFoxSDK.TaiXiuController.m_tableInfo.time);
      }
    }
  },
  cancua: function cancua(timeLeft) {
    this._turnOnTime(timeLeft - 10);

    this.scheduleOnce(function () {
      if (!SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
        var lb_tai = this.listChipBet[0].string;
        var lb_xiu = this.listChipBet[1].string;
        var balance = Math.min(parseFloat(lb_tai.split(".").join("")), parseFloat(lb_xiu.split(".").join("")));
        this.listChipBet[0].string = Utils.addDotToNumber(balance);
        this.listChipBet[1].string = Utils.addDotToNumber(balance);

        if (SmartFoxSDK.TaiXiuController.m_tableInfo.refundChip > 0) {
          this.runEffectRefundWin(1, this.controller.m_tableInfo.refundChip, this.controller.m_tableInfo.winChip);
        }
      }
    }, 1.2);

    if (timeLeft > 14) {
      this.showNoti(1, "Bắt đầu cân cửa");
    }

    if (timeLeft > 10) {
      this.scheduleOnce(function () {
        if (!SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
          this.Timer.node.active = false;
          this.runDiceAnimation();
        }
      }, timeLeft - 10);
    } else {
      this.DiceAnimation.stop();
      this.onCompletedAnimationDice(timeLeft);
    }
  },
  showListMyChipBet: function showListMyChipBet(bets) {
    if (this.listMyChipBet != null) {
      for (var i = 0; i < bets.length; i++) {
        this.listMyChipBet[i].string = Utils.addDotToNumber(bets[i]);
      }
    }
  },
  showListUsers: function showListUsers(users) {
    if (this.listUsers != null) {
      for (var i = 0; i < users.length; i++) {
        this.listUsers[i].string = "(" + users[i] + ")";
      }
    }
  },
  showResultNumber: function showResultNumber(number) {
    this.ResultNumber.active = true;
    this.ResultNumber.getChildByName("result").getComponent(cc.Label).string = number;
  },
  hideResultNumber: function hideResultNumber() {
    this.moBatNode.active = false;
    this.ResultNumber.active = false;
  },
  hide3D: function hide3D() {
    this.D1.active = false;
    this.D2.active = false;
    this.D3.active = false;
  },
  runDiceAnimation: function runDiceAnimation() {
    if (!this.isPlayedAnimation) {
      this.isPlayedAnimation = true;
      this.hide3D();
      this.DiceAnimation.stop();
      this.DiceAnimation.node.active = true;
      this.DiceAnimation.play();
      this.scheduleOnce(function () {
        this.animUpBat.active = true;
        this.animUpBat.getComponent(sp.Skeleton).setAnimation(0, "Idle", false);
      }, 0.2);
    }
  },
  clickBet: function clickBet(event, cua) {
    if (!this.controller.m_tableInfo.isBetting) {
      // mm.Toast.showToast(2, "Đợi phiên mới để đặt");
      this.showToast(1, "Hết thời gian đặt cược");
      return;
    }

    cua = parseInt(cua);

    if (this._isBetTaiXiu >= 0 && this._isBetTaiXiu != cua) {
      this.showToast(1, "Không được phép đặt nhiều cửa");
      return;
    } // if(this.node.y < 480)
    //     this.node.y = 480;


    this.TableBet.active = true;
    this.TanLoc.active = false;
    this.BetSelect.active = true;
    this.BetOther.active = false;
    this._currentBet = 0;
    this.showListMyChipBet(SmartFoxSDK.TaiXiuController.m_tableInfo.listMyChipPot);
    this._currentTypeBet = cua; // tai

    if (this._currentTypeBet == 0) {
      this.listPrepareBet[0].string = "0";
      this.listPrepareBet[1].string = "Đặt";
    } else if (this._currentTypeBet == 1) {
      // xiu
      this.listPrepareBet[0].string = "Đặt";
      this.listPrepareBet[1].string = "0";
    }
  },
  clickHuy: function clickHuy(event) {
    this.TableBet.active = false;
    this.TanLoc.active = true;
    this.showListMyChipBet(SmartFoxSDK.TaiXiuController.m_tableInfo.listMyChipPot);
    this.setPrepareBet(["Đặt", "Đặt"]);
  },
  clickDongY: function clickDongY(event) {
    // send bet request
    if (SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
      if (this._currentBet > 0) {
        var betRequest = new TaiXiuRequest.BetRequest();
        betRequest.setBetChip(this._currentBet);
        betRequest.setTypePot(this._currentTypeBet);
        this._isBetTaiXiu = this._currentTypeBet;
        SmartFoxSDK.TaiXiuController.ZoneInstance.send(betRequest.toSRequest());
        this.TableBet.active = false;
        this.TanLoc.active = true;
      } else {
        this.showToast(1, "Tiền cược phải lớn hơn 0");
      }
    } else {
      // mm.Toast.showToast(1, "Hết thời gian đặt cược");
      this.showToast(1, "Hết thời gian đặt cược");
    }
  },
  selectBet: function selectBet(event, bet) {
    if (GameVariables.getChip(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf) < this._currentBet + parseInt(bet)) {
      // mm.Toast.showToast(1, "Bạn không đủ Chip");
      this.showToast(1, "Bạn không đủ Chip");
    } else if (!SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
      // mm.Toast.showToast(1, "Hết thời gian đặt cược");
      this.showToast(1, "Hết thời gian đặt cược");
    } else {
      this._currentBet += parseInt(bet);
      this.listPrepareBet[this._currentTypeBet].string = Utils.addDotToNumber(this._currentBet);
    }
  },
  selectBetOther: function selectBetOther(event, number) {
    if (this.listPrepareBet[this._currentTypeBet].string == "0" || this.listPrepareBet[this._currentTypeBet].string == "Đặt") {
      this.listPrepareBet[this._currentTypeBet].string = "";
    }

    var preBet = "";

    if (number == 'del') {
      preBet = this.listPrepareBet[this._currentTypeBet].string;
      preBet = preBet.split(".").join("");
      preBet = preBet.substr(0, preBet.length - 1);
      this.listPrepareBet[this._currentTypeBet].string = Utils.addDotToNumber(preBet);
    } else {
      preBet = this.listPrepareBet[this._currentTypeBet].string;
      preBet = preBet.split(".").join("");
      preBet += number;
      this.listPrepareBet[this._currentTypeBet].string = Utils.addDotToNumber(preBet);
    }

    this._currentBet = parseInt(preBet);

    if (this._currentBet > GameVariables.Poker.getChip(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf)) {
      // mm.Toast.showToast(1, "Số dư không đủ");
      this.showToast(1, "Số dư không đủ");
      this._currentBet = GameVariables.Poker.getChip(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf);
      this.listPrepareBet[this._currentTypeBet].string = Utils.addDotToNumber(this._currentBet);
    }
  },
  clickOtherNumber: function clickOtherNumber(event) {
    this.BetSelect.active = false;
    this.BetOther.active = true;
    this.listPrepareBet[this._currentTypeBet].string = "0";
  },
  clickExitRoom: function clickExitRoom(event) {
    var room = SmartFoxSDK.TaiXiuController.ZoneInstance.getRoomByName("taixiu");

    if (room) {
      SmartFoxSDK.TaiXiuController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
      mm.Loading.show();
    } else {
      this.back();
    }
  },
  clickHelper: function clickHelper(event) {
    this.show("UITaiXiuHelper", {
      pop: true,
      src: 'taixiu'
    });
  },
  clickHistory: function clickHistory(event) {
    mm.Loading.show();
    UIManger.show("UITaiXiuTransaction", {
      pop: true,
      src: 'taixiu',
      data: {
        items: []
      }
    });
  },
  updateDataHistory: function updateDataHistory(items) {
    var ui = this.getUIFromName("UITaiXiuTransaction");

    if (ui != null && ui.name == "UITaiXiuTransaction") {
      ui.getComponent(ui.name).updateData(items);
    }
  },
  clickRank: function clickRank(event) {
    mm.Loading.show();
    UIManger.show("UITaiXiuRank", {
      pop: true,
      src: 'taixiu',
      data: {
        items: []
      }
    });
  },
  updateDataRank: function updateDataRank(items) {
    var ui = this.getUIFromName("UITaiXiuRank");

    if (ui != null && ui.name == "UITaiXiuRank") {
      ui.getComponent(ui.name).updateData(items);
    }
  },
  showNoti: function showNoti(time, message) {
    this.notiNode.active = true;
    this.notiNode.getChildByName("lbNoti").getComponent(cc.Label).string = message;
    this.scheduleOnce(function () {
      this.notiNode.active = false;
    }, time);
  },
  showToast: function showToast(time, message) {
    this.toastNode.active = true;
    this.toastNode.getChildByName("lbNoti").getComponent(cc.Label).string = message;
    this.scheduleOnce(function () {
      this.toastNode.active = false;
    }, time);
  },
  eventAllIn: function eventAllIn() {
    if (SmartFoxSDK.TaiXiuController.m_tableInfo.isBetting) {
      this._currentBet = GameVariables.Poker.getChip(SmartFoxSDK.TaiXiuController.ZoneInstance.mySelf);

      if (this._currentBet > 0) {
        var self = this;
        UIManger.show('UIDialogTwo', {
          data: {
            content: "Bạn có muốn đặt toàn bộ số tiền?",
            "cbYes": function cbYes() {
              var betRequest = new TaiXiuRequest.BetRequest();
              betRequest.setBetChip(self._currentBet);
              betRequest.setTypePot(self._currentTypeBet);
              self._isBetTaiXiu = self._currentTypeBet;
              SmartFoxSDK.TaiXiuController.ZoneInstance.send(betRequest.toSRequest());
              self.TableBet.active = false;
              self.TanLoc.active = true;
              self.back();
            }
          },
          pop: true
        });
      } else {
        this.showToast(1, "Bạn không đủ Chip");
      }
    } else {
      // mm.Toast.showToast(1, "Hết thời gian đặt cược");
      this.showToast(1, "Hết thời gian đặt cược");
    }
  },
  eventShowDuaTop: function eventShowDuaTop() {
    this.show("UITaiXiuDuaTop", {
      pop: true,
      src: 'taixiu',
      data: "TheLe"
    });
  },
  eventXinLoc: function eventXinLoc() {
    var betRequest = new TaiXiuRequest.RutLocRequest();
    SmartFoxSDK.TaiXiuController.ZoneInstance.send(betRequest.toSRequest());
    this.btnXinLoc.getComponent(cc.Button).interactable = false;
  },
  eventTanLoc: function eventTanLoc() {
    this.show("UITaiXiuTanLoc", {
      pop: true,
      src: 'taixiu'
    });
  },
  eventRankTanLoc: function eventRankTanLoc() {
    this.show("UITaiXiuDuaTop", {
      pop: true,
      src: 'taixiu',
      data: "VinhDanh"
    });
  },
  eventHistoryTanLoc: function eventHistoryTanLoc() {
    this.show("UITaiXiuDuaTop", {
      pop: true,
      src: 'taixiu',
      data: "LichSu"
    });
  },
  getMaxDayThang: function getMaxDayThang() {
    var localStorage = cc.sys.localStorage;

    if (localStorage.getItem("f68_day_thang_max") === null || localStorage.getItem("f68_day_thang_max") === undefined) {
      localStorage.setItem("f68_day_thang_max", "0");
    }

    return parseInt(localStorage.getItem("f68_day_thang_max"));
  },
  setMaxDayThang: function setMaxDayThang(dayThang) {
    localStorage.setItem("f68_day_thang_max", dayThang);
  },
  getMaxDayThua: function getMaxDayThua() {
    var localStorage = cc.sys.localStorage;

    if (localStorage.getItem("f68_day_thua_max") === null || localStorage.getItem("f68_day_thua_max") === undefined) {
      localStorage.setItem("f68_day_thua_max", "0");
    }

    return parseInt(localStorage.getItem("f68_day_thua_max"));
  },
  setMaxDayThua: function setMaxDayThua(dayThua) {
    localStorage.setItem("f68_day_thua_max", dayThua);
  },
  showResultRutLoc: function showResultRutLoc(rutLocInfo) {
    if (rutLocInfo.chipTan > 0) {
      this.showToast(3, "Bạn đã nhận được lộc trị giá: " + Utils.addDotToNumber(rutLocInfo.chipTan) + "đ");
    } else {
      this.showToast(3, rutLocInfo.mesTan);
    }
  },
  updateChipAll: function updateChipAll(subChip) {
    SmartFoxSDK.TaiXiuController.onEventUpdateChip(subChip);
  },
  showReward: function showReward(wardInfo) {
    var msg = "Bạn đã nhận được phần thường sự kiện đua TOP \n Vị trí: " + wardInfo.top + "\n" + "Phần thưởng: " + Utils.addDotToNumber(wardInfo.reward);
    UIManger.show('UIDialogOne', {
      data: {
        content: msg,
        "cbYes": function cbYes() {}
      },
      pop: true
    });
  }
});

cc._RF.pop();
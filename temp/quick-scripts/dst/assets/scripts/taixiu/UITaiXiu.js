
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/taixiu/UITaiXiu.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdGFpeGl1XFxVSVRhaVhpdS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJUYWJsZUJldCIsIk5vZGUiLCJUYW5Mb2MiLCJidG5YaW5Mb2MiLCJydXRMb2NJbmZvIiwibGJEYXlUaGFuZyIsIkxhYmVsIiwibGJEYXlUaGFuZ01heCIsImxiRGF5VGh1YSIsImxiRGF5VGh1YU1heCIsIkRpY2VBbmltYXRpb24iLCJBbmltYXRpb24iLCJEMSIsIkQyIiwiRDMiLCJUaW1lciIsIlJlc3VsdE51bWJlciIsIl90aW1lIiwiX2N1cnJlbnRCZXQiLCJfY3VycmVudFR5cGVCZXQiLCJsaXN0Q2hpcEJldCIsInR5cGUiLCJsaXN0TXlDaGlwQmV0IiwibGlzdFByZXBhcmVCZXQiLCJsaXN0VXNlcnMiLCJDYXVOb2RlIiwiaW1nVGFpIiwiaW1nWGl1IiwiQmV0U2VsZWN0IiwiQmV0T3RoZXIiLCJjb250cm9sbGVyIiwibm9kZUNoYXQiLCJ0b2dnbGVDaGF0IiwiVG9nZ2xlIiwibGlzdERpY2VzTm9kZSIsIlNwcml0ZUZyYW1lIiwibGlzdFRhaVhpdVNwcml0ZSIsIm5vdGlOb2RlIiwidG9hc3ROb2RlIiwidGltZUVuZE5vZGUiLCJtb0JhdE5vZGUiLCJhbmltVXBCYXQiLCJxdWF5QmF0Tm9kZSIsImJnU2Vzc2lvbiIsImxiU2Vzc2lvbiIsImxiVGltZUVuZCIsIm1vbmV5V2luIiwibGJNb25leVdpbiIsIl9pc05hbiIsIl9pc0JldFRhaVhpdSIsIl90b3RhbFRpbWVFbmQiLCJfdG90YWxEYXlUaGFuZyIsIl90b3RhbERheVRodWEiLCJpc1BsYXllZEFuaW1hdGlvbiIsIm9uTG9hZCIsInNjaGVkdWxlIiwidXBkYXRlVGltZXIiLCJzZWxmIiwiZ2FtZSIsIm9uIiwiRVZFTlRfU0hPVyIsIm5vZGUiLCJyZXN1bWVHYW1lIiwiRXZlbnRUeXBlIiwiVE9VQ0hfTU9WRSIsImV2ZW50IiwiZGVsdGEiLCJnZXREZWx0YSIsIngiLCJ5Iiwib25FbmFibGUiLCJjb250ZW50IiwiZ2V0Q2hpbGRCeU5hbWUiLCJoaWRlM0QiLCJhY3RpdmUiLCJkaWNlcyIsImdldENvbXBvbmVudCIsImFkZEV2ZW50Q29tcGxldGUiLCJvbkNvbXBsZXRlZEFuaW1hdGlvbkRpY2UiLCJiaW5kIiwiaXNDaGVja2VkIiwiekluZGV4IiwibGFzdFpJbmRleCIsImN1cnJlbnRVSSIsInNldFRoYW5nVGh1YSIsIm1heFRoYW5nIiwiZ2V0TWF4RGF5VGhhbmciLCJtYXhUaHVhIiwic2V0TWF4RGF5VGhhbmciLCJzZXRNYXhEYXlUaHVhIiwic3RyaW5nIiwidXBkYXRlTGlzdENoYXQiLCJsaXN0Q2hhdCIsImxlbmd0aCIsIm5hbWUiLCJpbml0Q2hhdCIsIm9uUHVibGljTWVzc2FnZSIsIm1zZ0l0ZW0iLCJhZGRNZXNzYWdlIiwicmVzZXRCZXRUYWlYaXUiLCJzaG93R2FtZSIsImlzTG9jIiwicXV5TG9jIiwiQnV0dG9uIiwiaW50ZXJhY3RhYmxlIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsInVwZGF0ZURhdGFDYXUiLCJTbWFydEZveFNESyIsIlRhaVhpdUNvbnRyb2xsZXIiLCJtX3RhYmxlSW5mbyIsIml0ZW1DYXUiLCJsaXN0UmVzdWx0IiwicmVzdWx0IiwibGlzdENhdSIsInNlc3Npb25JZCIsInBhcnNlSW50IiwicG9pbnQiLCJwdXNoIiwic2hpZnQiLCJ1cGRhdGVMaXN0Q2F1Iiwic2l6ZURvdCIsIl9jaGlsZHJlbiIsInNsaWNlIiwiaSIsImNhdSIsImRhdGFDYXUiLCJ0eFNlc3Npb25JZCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiYTEiLCJmYWRlT3V0IiwiYTIiLCJmYWRlSW4iLCJydW5BY3Rpb24iLCJyZXBlYXQiLCJzZXF1ZW5jZSIsInVwZGF0ZVNlc3Npb25JZCIsImV2ZW50U2Vzc2lvbkRldGFpbCIsImRhdGEiLCJtbSIsIkxvYWRpbmciLCJzaG93IiwiVUlNYW5nZXIiLCJwb3AiLCJzcmMiLCJ0YXJnZXQiLCJ1cGRhdGVEYXRhU2Vzc2lvbkRldGFpbCIsImRhdGFTZXNzaW9uIiwidWkiLCJnZXRVSUZyb21OYW1lIiwiaW5pdCIsImV2ZW50U29pQ2F1IiwidXBkYXRlVGFpWGl1U29pQ2F1Iiwic2V0QWxsQ2F1Iiwib25EaXNhYmxlIiwic3RvcEFsbEFjdGlvbnMiLCJzZXRQcmVwYXJlQmV0IiwicHJlcGFyZUJldHMiLCJjb25zb2xlIiwiZXJyb3IiLCJydW5FZmZlY3RNb25leVdpbiIsImRlbGF5Iiwib3BhY2l0eSIsIm1vdmUiLCJtb3ZlVG8iLCJ2MiIsImRlbGF5VGltZSIsImNhbGxGdW5jIiwidXBkYXRlQ2hpcEFsbCIsInJ1bkVmZmVjdFJlZnVuZFdpbiIsInJlZnVuZENoaXAiLCJydW5FZmZlY3RSZXN1bHQiLCJudW1iZXIiLCJyZXBlYXRGb3JldmVyIiwic3RvcEVmZmVjdFJlc3VsdCIsImV2ZW50VG9nZ2xlQ2hhdCIsImV2ZW50TmFuIiwidGltZUxlZnQiLCJwb3NpdGlvbiIsInNob3dSZXN1bHRUYWlYaXUiLCJzaG93UmVzdWx0TnVtYmVyIiwiX2dldFVJRnJvbUluZGV4IiwiZXZlbnRHZXRBbGxDYXUiLCJ3aW5DaGlwIiwiY29sb3IiLCJDb2xvciIsIlJFRCIsImlzQmV0dGluZyIsIl90dXJuT25UaW1lIiwidGltZSIsIldISVRFIiwiX3R1cm5PZlRpbWUiLCJzaG93TGlzdENoaXBCZXQiLCJiZXRzIiwidXBkYXRlVGhhbmdUaHVhIiwidHlwZVdpbiIsIk1hdGgiLCJmbG9vciIsImxhc3RUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJoaWRlUmVzdWx0TnVtYmVyIiwiY2FuY3VhIiwic2NoZWR1bGVPbmNlIiwibGJfdGFpIiwibGJfeGl1IiwiYmFsYW5jZSIsIm1pbiIsInBhcnNlRmxvYXQiLCJzcGxpdCIsImpvaW4iLCJzaG93Tm90aSIsInJ1bkRpY2VBbmltYXRpb24iLCJzdG9wIiwic2hvd0xpc3RNeUNoaXBCZXQiLCJzaG93TGlzdFVzZXJzIiwidXNlcnMiLCJwbGF5Iiwic3AiLCJTa2VsZXRvbiIsInNldEFuaW1hdGlvbiIsImNsaWNrQmV0IiwiY3VhIiwic2hvd1RvYXN0IiwibGlzdE15Q2hpcFBvdCIsImNsaWNrSHV5IiwiY2xpY2tEb25nWSIsImJldFJlcXVlc3QiLCJUYWlYaXVSZXF1ZXN0IiwiQmV0UmVxdWVzdCIsInNldEJldENoaXAiLCJzZXRUeXBlUG90IiwiWm9uZUluc3RhbmNlIiwic2VuZCIsInRvU1JlcXVlc3QiLCJzZWxlY3RCZXQiLCJiZXQiLCJHYW1lVmFyaWFibGVzIiwiZ2V0Q2hpcCIsIm15U2VsZiIsInNlbGVjdEJldE90aGVyIiwicHJlQmV0Iiwic3Vic3RyIiwiUG9rZXIiLCJjbGlja090aGVyTnVtYmVyIiwiY2xpY2tFeGl0Um9vbSIsInJvb20iLCJnZXRSb29tQnlOYW1lIiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkxlYXZlUm9vbVJlcXVlc3QiLCJiYWNrIiwiY2xpY2tIZWxwZXIiLCJjbGlja0hpc3RvcnkiLCJpdGVtcyIsInVwZGF0ZURhdGFIaXN0b3J5IiwidXBkYXRlRGF0YSIsImNsaWNrUmFuayIsInVwZGF0ZURhdGFSYW5rIiwibWVzc2FnZSIsImV2ZW50QWxsSW4iLCJjYlllcyIsImV2ZW50U2hvd0R1YVRvcCIsImV2ZW50WGluTG9jIiwiUnV0TG9jUmVxdWVzdCIsImV2ZW50VGFuTG9jIiwiZXZlbnRSYW5rVGFuTG9jIiwiZXZlbnRIaXN0b3J5VGFuTG9jIiwibG9jYWxTdG9yYWdlIiwic3lzIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsInNldEl0ZW0iLCJkYXlUaGFuZyIsImdldE1heERheVRodWEiLCJkYXlUaHVhIiwic2hvd1Jlc3VsdFJ1dExvYyIsImNoaXBUYW4iLCJtZXNUYW4iLCJzdWJDaGlwIiwib25FdmVudFVwZGF0ZUNoaXAiLCJzaG93UmV3YXJkIiwid2FyZEluZm8iLCJtc2ciLCJ0b3AiLCJyZXdhcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0ws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QkFBUyxTQUFTdEIsS0FBVCxHQUFpQixDQUV6QjtBQUpDLE9BRG1CO0FBTXRCdkgsTUFBQUEsR0FBRyxFQUFFO0FBTmlCLEtBQTdCO0FBUUg7QUFqc0JJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIFRhYmxlQmV0ICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgVGFuTG9jICAgICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICBidG5YaW5Mb2MgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHJ1dExvY0luZm8gICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgbGJEYXlUaGFuZyAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJEYXlUaGFuZ01heCAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJEYXlUaHVhICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJEYXlUaHVhTWF4ICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgRGljZUFuaW1hdGlvbiAgIDogY2MuQW5pbWF0aW9uLFxyXG4gICAgICAgIEQxOiBjYy5Ob2RlLFxyXG4gICAgICAgIEQyOiBjYy5Ob2RlLFxyXG4gICAgICAgIEQzOiBjYy5Ob2RlLFxyXG4gICAgICAgIFRpbWVyOiBjYy5MYWJlbCxcclxuICAgICAgICBSZXN1bHROdW1iZXI6IGNjLk5vZGUsXHJcbiAgICAgICAgX3RpbWU6IDAsXHJcbiAgICAgICAgX2N1cnJlbnRCZXQ6IDAsXHJcbiAgICAgICAgX2N1cnJlbnRUeXBlQmV0OiAwLFxyXG4gICAgICAgIGxpc3RDaGlwQmV0IDoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5MYWJlbCxcclxuICAgICAgICAgICAgZGVmYXVsdDogW11cclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpc3RNeUNoaXBCZXQ6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBsaXN0UHJlcGFyZUJldDp7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbGlzdFVzZXJzOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IGNjLkxhYmVsLFxyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgQ2F1Tm9kZTogY2MuTm9kZSxcclxuICAgICAgICBpbWdUYWk6IGNjLk5vZGUsXHJcbiAgICAgICAgaW1nWGl1OiBjYy5Ob2RlLFxyXG4gICAgICAgIEJldFNlbGVjdDogY2MuTm9kZSxcclxuICAgICAgICBCZXRPdGhlcjogY2MuTm9kZSxcclxuICAgICAgICBjb250cm9sbGVyOiBudWxsLFxyXG4gICAgICAgIG5vZGVDaGF0OiBjYy5Ob2RlLFxyXG4gICAgICAgIHRvZ2dsZUNoYXQ6IGNjLlRvZ2dsZSxcclxuICAgICAgICBsaXN0RGljZXNOb2RlOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIGxpc3RUYWlYaXVTcHJpdGU6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgbm90aU5vZGUgICAgIDogY2MuTm9kZSxcclxuICAgICAgICB0b2FzdE5vZGUgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHRpbWVFbmROb2RlICA6IGNjLk5vZGUsXHJcbiAgICAgICAgbW9CYXROb2RlICAgIDogY2MuTm9kZSxcclxuICAgICAgICBhbmltVXBCYXQgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIHF1YXlCYXROb2RlICA6IGNjLk5vZGUsXHJcbiAgICAgICAgYmdTZXNzaW9uICAgIDogY2MuTm9kZSxcclxuICAgICAgICBsYlNlc3Npb24gICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYlRpbWVFbmQgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBtb25leVdpbiAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxiTW9uZXlXaW4gICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIF9pc05hbiAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgIF9pc0JldFRhaVhpdSAgICAgOiAtMSxcclxuICAgICAgICBfdG90YWxUaW1lRW5kICAgIDogMCxcclxuICAgICAgICBfdG90YWxEYXlUaGFuZyAgIDogMCxcclxuICAgICAgICBfdG90YWxEYXlUaHVhICAgIDogMCxcclxuICAgICAgICBpc1BsYXllZEFuaW1hdGlvbiA6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVUaW1lciwgMSk7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9TSE9XLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLm5vZGUgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHNlbGYucmVzdW1lR2FtZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMubW9CYXROb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBsZXQgZGVsdGEgPSBldmVudC5nZXREZWx0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1vQmF0Tm9kZS54ICs9IGRlbHRhLng7XHJcbiAgICAgICAgICAgIHRoaXMubW9CYXROb2RlLnkgKz0gZGVsdGEueTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XHJcbiAgICAgICAgdGhpcy5oaWRlM0QoKTtcclxuICAgICAgICB0aGlzLkRpY2VBbmltYXRpb24ubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLlRhYmxlQmV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuVGFuTG9jLmFjdGl2ZSAgID0gdHJ1ZTtcclxuICAgICAgICBsZXQgZGljZXMgPSB0aGlzLkRpY2VBbmltYXRpb24ubm9kZS5nZXRDb21wb25lbnQoXCJBbmltYXRpb25FdmVudFwiKTtcclxuICAgICAgICBkaWNlcy5hZGRFdmVudENvbXBsZXRlKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlZEFuaW1hdGlvbkRpY2UoMTApO1xyXG4gICAgICAgIH0uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLnkgPSAzNjA7XHJcbiAgICAgICAgdGhpcy5faXNOYW4gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnF1YXlCYXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm9kZUNoYXQuYWN0aXZlID0gIXRoaXMudG9nZ2xlQ2hhdC5pc0NoZWNrZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgIGNjLmxhc3RaSW5kZXggICArPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY2MuY3VycmVudFVJICA9IFwiVUlUYWlYaXVcIjtcclxuICAgICAgICB0aGlzLl90b3RhbERheVRoYW5nID0gMDtcclxuICAgICAgICB0aGlzLl90b3RhbERheVRodWEgID0gMDtcclxuICAgICAgICB0aGlzLnNldFRoYW5nVGh1YSgpO1xyXG4gICAgICAgIHRoaXMuaXNQbGF5ZWRBbmltYXRpb24gPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBzZXRUaGFuZ1RodWEoKXtcclxuICAgICAgICBsZXQgbWF4VGhhbmcgPSB0aGlzLmdldE1heERheVRoYW5nKCk7XHJcbiAgICAgICAgbGV0IG1heFRodWEgID0gdGhpcy5nZXRNYXhEYXlUaGFuZygpO1xyXG4gICAgICAgIGlmICh0aGlzLl90b3RhbERheVRoYW5nID4gbWF4VGhhbmcpe1xyXG4gICAgICAgICAgICBtYXhUaGFuZyA9IHRoaXMuX3RvdGFsRGF5VGhhbmc7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWF4RGF5VGhhbmcobWF4VGhhbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fdG90YWxEYXlUaHVhID4gbWF4VGh1YSl7XHJcbiAgICAgICAgICAgIG1heFRodWEgPSB0aGlzLl90b3RhbERheVRodWE7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWF4RGF5VGh1YShtYXhUaHVhKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxiRGF5VGhhbmcuc3RyaW5nICAgID0gdGhpcy5fdG90YWxEYXlUaGFuZztcclxuICAgICAgICB0aGlzLmxiRGF5VGhhbmdNYXguc3RyaW5nID0gbWF4VGhhbmc7XHJcbiAgICAgICAgdGhpcy5sYkRheVRodWEuc3RyaW5nICAgICA9IHRoaXMuX3RvdGFsRGF5VGh1YTtcclxuICAgICAgICB0aGlzLmxiRGF5VGh1YU1heC5zdHJpbmcgID0gbWF4VGh1YTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVMaXN0Q2hhdChsaXN0Q2hhdCkge1xyXG4gICAgICAgIGlmIChsaXN0Q2hhdC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlQ2hhdC5nZXRDb21wb25lbnQodGhpcy5ub2RlQ2hhdC5uYW1lKS5pbml0Q2hhdChsaXN0Q2hhdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uUHVibGljTWVzc2FnZShtc2dJdGVtKXtcclxuICAgICAgICB0aGlzLm5vZGVDaGF0LmdldENvbXBvbmVudCh0aGlzLm5vZGVDaGF0Lm5hbWUpLmFkZE1lc3NhZ2UobXNnSXRlbSk7XHJcbiAgICB9LFxyXG4gICAgcmVzZXRCZXRUYWlYaXUoKXtcclxuICAgICAgICB0aGlzLl9pc0JldFRhaVhpdSA9IC0xO1xyXG4gICAgICAgIHRoaXMudG9hc3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubm90aU5vZGUuYWN0aXZlICA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNob3dHYW1lKGlzTG9jLCBxdXlMb2MpIHtcclxuICAgICAgICBpZiAoaXNMb2MgIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5idG5YaW5Mb2MuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gaXNMb2M7XHJcbiAgICAgICAgdGhpcy5ydXRMb2NJbmZvLmdldENoaWxkQnlOYW1lKFwibGJNYXhOdW1iZXJUeHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAgVXRpbHMuYWRkRG90VG9OdW1iZXIocXV5TG9jKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVEYXRhQ2F1KCkge1xyXG4gICAgICAgIGlmKFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIubV90YWJsZUluZm8pe1xyXG4gICAgICAgICAgICBsZXQgaXRlbUNhdSA9IHt9O1xyXG4gICAgICAgICAgICBsZXQgbGlzdFJlc3VsdCA9IFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIubV90YWJsZUluZm8ucmVzdWx0O1xyXG4gICAgICAgICAgICBpZiAoY2MubGlzdENhdS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICAgICAgaXRlbUNhdS5zZXNzaW9uSWQgPSBwYXJzZUludChjYy5saXN0Q2F1W2NjLmxpc3RDYXUubGVuZ3RoLTFdLnNlc3Npb25JZCkgKyAxO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpdGVtQ2F1LnNlc3Npb25JZCA9IDE7XHJcbiAgICAgICAgICAgIGl0ZW1DYXUucG9pbnQgICAgID0gbGlzdFJlc3VsdFswXSsgbGlzdFJlc3VsdFsxXSArIGxpc3RSZXN1bHRbMl07XHJcbiAgICAgICAgICAgIGNjLmxpc3RDYXUucHVzaChpdGVtQ2F1KTtcclxuICAgICAgICAgICAgY2MubGlzdENhdS5zaGlmdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVMaXN0Q2F1KCl7XHJcbiAgICAgICAgaWYoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5tX3RhYmxlSW5mbyl7XHJcbiAgICAgICAgICAgIGlmICggdGhpcy5DYXVOb2RlICE9IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RDYXUgPSBjYy5saXN0Q2F1O1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpemVEb3QgID0gdGhpcy5DYXVOb2RlLl9jaGlsZHJlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBpZiAobGlzdENhdS5sZW5ndGggPiAxNilcclxuICAgICAgICAgICAgICAgICAgICBsaXN0Q2F1ID0gbGlzdENhdS5zbGljZShsaXN0Q2F1Lmxlbmd0aC0xNiwgbGlzdENhdS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3RDYXUubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaSA8IHNpemVEb3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2F1ID0gdGhpcy5DYXVOb2RlLl9jaGlsZHJlbltpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGFDYXUgPSBsaXN0Q2F1W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXUudHhTZXNzaW9uSWQgPSBkYXRhQ2F1LnNlc3Npb25JZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZGF0YUNhdS5wb2ludCA+PSAxMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RUYWlYaXVTcHJpdGVbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F1LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0VGFpWGl1U3ByaXRlWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGExID0gY2MuZmFkZU91dCgwLjIpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGEyID0gY2MuZmFkZUluKDAuMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJnU2Vzc2lvbi5ydW5BY3Rpb24oY2MucmVwZWF0KGNjLnNlcXVlbmNlKGExLCBhMiksIDUpKTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlU2Vzc2lvbklkKHNlc3Npb25JZCkge1xyXG4gICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiKyhwYXJzZUludChzZXNzaW9uSWQpKzEpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U2Vzc2lvbkRldGFpbChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIC8vIGNjLnR4Q3VycmVudFNlc3Npb24gICAgICA9IGV2ZW50LnRhcmdldC50eFNlc3Npb25JZDtcclxuICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlUYWlYaXVTZXNzaW9uRGV0YWlsXCIsIHtwb3A6IHRydWUsIHNyYzogJ3RhaXhpdScsIGRhdGE6ICBldmVudC50YXJnZXQudHhTZXNzaW9uSWR9KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVEYXRhU2Vzc2lvbkRldGFpbChkYXRhU2Vzc2lvbikge1xyXG4gICAgICAgIGxldCB1aSA9IHRoaXMuZ2V0VUlGcm9tTmFtZShcIlVJVGFpWGl1U2Vzc2lvbkRldGFpbFwiKTtcclxuICAgICAgICBpZiAodWkubmFtZSA9PSBcIlVJVGFpWGl1U2Vzc2lvbkRldGFpbFwiKXtcclxuICAgICAgICAgICAgdWkuZ2V0Q29tcG9uZW50KHVpLm5hbWUpLmluaXQoZGF0YVNlc3Npb24pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudFNvaUNhdSgpIHtcclxuICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcclxuICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlUYWlYaXVTb2lDYXVcIiwge3BvcDogdHJ1ZSwgc3JjOiAndGFpeGl1JywgZGF0YTogW119KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVUYWlYaXVTb2lDYXUobGlzdFJlc3VsdCl7XHJcbiAgICAgICAgbGV0IHVpID0gdGhpcy5nZXRVSUZyb21OYW1lKFwiVUlUYWlYaXVTb2lDYXVcIik7XHJcbiAgICAgICAgaWYgKHVpLm5hbWUgPT0gXCJVSVRhaVhpdVNvaUNhdVwiKXtcclxuICAgICAgICAgICAgdWkuZ2V0Q29tcG9uZW50KHVpLm5hbWUpLnNldEFsbENhdShsaXN0UmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICB9LFxyXG4gICAgc2V0UHJlcGFyZUJldChwcmVwYXJlQmV0cyl7XHJcbiAgICAgICAgaWYocHJlcGFyZUJldHMubGVuZ3RoICE9IDIpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgTGVuZ2h0IFwiK3ByZXBhcmVCZXRzLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGlzdFByZXBhcmVCZXQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RQcmVwYXJlQmV0Lmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UHJlcGFyZUJldFtpXS5zdHJpbmcgPSBwcmVwYXJlQmV0c1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBydW5FZmZlY3RNb25leVdpbihkZWxheSwgbW9uZXlXaW4pIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5tb25leVdpbi5hY3RpdmUgID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1vbmV5V2luLnkgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMubW9uZXlXaW4ub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLmxiTW9uZXlXaW4uc3RyaW5nID0gXCIrXCIrVXRpbHMuYWRkRG90VG9OdW1iZXIobW9uZXlXaW4pO1xyXG4gICAgICAgIGxldCBtb3ZlID0gY2MubW92ZVRvKDIsIGNjLnYyKHRoaXMubW9uZXlXaW4ueCwgdGhpcy5tb25leVdpbi55KzEwMCkpO1xyXG4gICAgICAgIGxldCBhMSAgID0gY2MuZmFkZU91dCgwLjEpO1xyXG4gICAgICAgIHRoaXMubW9uZXlXaW4uc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLm1vbmV5V2luLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoZGVsYXkpLCBtb3ZlLCBhMSwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzZWxmLm1vbmV5V2luLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pKSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDaGlwQWxsKDApO1xyXG4gICAgfSxcclxuICAgIHJ1bkVmZmVjdFJlZnVuZFdpbihkZWxheSwgcmVmdW5kQ2hpcCwgbW9uZXlXaW4pe1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm1vbmV5V2luLmFjdGl2ZSAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubW9uZXlXaW4ueSAgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5tb25leVdpbi5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgIHRoaXMubGJNb25leVdpbi5zdHJpbmcgPSBcIitcIitVdGlscy5hZGREb3RUb051bWJlcihyZWZ1bmRDaGlwKTtcclxuICAgICAgICBsZXQgbW92ZSA9IGNjLm1vdmVUbygyLCBjYy52Mih0aGlzLm1vbmV5V2luLngsIHRoaXMubW9uZXlXaW4ueSsxMDApKTtcclxuICAgICAgICBsZXQgYTEgICA9IGNjLmZhZGVPdXQoMC4xKTtcclxuICAgICAgICB0aGlzLm1vbmV5V2luLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5tb25leVdpbi5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGRlbGF5KSwgbW92ZSwgYTEsIGNjLmNhbGxGdW5jKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgc2VsZi5tb25leVdpbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KSkpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ2hpcEFsbChtb25leVdpbik7XHJcbiAgICB9LFxyXG4gICAgcnVuRWZmZWN0UmVzdWx0KG51bWJlcil7XHJcbiAgICAgICAgbGV0IGExID0gY2MuZmFkZU91dCgwLjEpO1xyXG4gICAgICAgIGxldCBhMiA9IGNjLmZhZGVJbigwLjEpO1xyXG4gICAgICAgIGlmKG51bWJlciA8PSAxMCl7XHJcbiAgICAgICAgICAgIC8vIFhJVVxyXG4gICAgICAgICAgICB0aGlzLmltZ1hpdS5ydW5BY3Rpb24oY2MucmVwZWF0Rm9yZXZlcihjYy5zZXF1ZW5jZShhMSwgYTIpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKG51bWJlciA+PSAxMSAmJiBudW1iZXIgPD0gMTgpe1xyXG4gICAgICAgICAgICAvLyBUQUlcclxuICAgICAgICAgICAgdGhpcy5pbWdUYWkucnVuQWN0aW9uKGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoYTEsIGEyKSkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzdG9wRWZmZWN0UmVzdWx0KCl7XHJcbiAgICAgICAgdGhpcy5pbWdUYWkuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLmltZ1hpdS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuRGljZUFuaW1hdGlvbi5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGltZUVuZE5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbWdYaXUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLmltZ1RhaS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgfSxcclxuICAgIGV2ZW50VG9nZ2xlQ2hhdChldmVudCl7XHJcbiAgICAgICAgdGhpcy5ub2RlQ2hhdC5hY3RpdmUgPSAhZXZlbnQuaXNDaGVja2VkO1xyXG4gICAgfSxcclxuICAgIGV2ZW50TmFuKGV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5faXNOYW4gPSAhZXZlbnQuaXNDaGVja2VkO1xyXG4gICAgfSxcclxuICAgIG9uQ29tcGxldGVkQW5pbWF0aW9uRGljZSh0aW1lTGVmdCl7XHJcbiAgICAgICAgaWYoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5tX3RhYmxlSW5mby5yZXN1bHQpe1xyXG4gICAgICAgICAgICAvLyBsb2FkIHJlc3VsdFxyXG4gICAgICAgICAgICB0aGlzLkQxLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0RGljZXNOb2RlW1NtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIubV90YWJsZUluZm8ucmVzdWx0WzBdLTFdO1xyXG4gICAgICAgICAgICB0aGlzLkQyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0RGljZXNOb2RlW1NtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIubV90YWJsZUluZm8ucmVzdWx0WzFdLTFdO1xyXG4gICAgICAgICAgICB0aGlzLkQzLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0RGljZXNOb2RlW1NtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIubV90YWJsZUluZm8ucmVzdWx0WzJdLTFdO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNOYW4pe1xyXG4gICAgICAgICAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb0JhdE5vZGUucG9zaXRpb24gPSBjYy52Mig0LjIxMywgLTQzLjU4OSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vQmF0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IGEyID0gY2MuZmFkZUluKDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vQmF0Tm9kZS5vcGFjaXR5ID0gMjU1O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb0JhdE5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgwLjIpLCBhMiwgY2MuY2FsbEZ1bmMoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuYW5pbVVwQmF0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSkpKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0VGFpWGl1KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5EMS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLkQyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuRDMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fdG90YWxUaW1lRW5kICAgICAgPSB0aW1lTGVmdDtcclxuICAgICAgICAgICAgdGhpcy50aW1lRW5kTm9kZS5hY3RpdmUgPSB0aW1lTGVmdD4gMDtcclxuICAgICAgICAgICAgaWYodGhpcy5fdG90YWxUaW1lRW5kIDwgMTApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYlRpbWVFbmQuc3RyaW5nID0gXCIwMDowXCIrdGhpcy5fdG90YWxUaW1lRW5kO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxiVGltZUVuZC5zdHJpbmcgPSBcIjAwOlwiK3RoaXMuX3RvdGFsVGltZUVuZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93UmVzdWx0VGFpWGl1KCkge1xyXG4gICAgICAgIGlmKFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIubV90YWJsZUluZm8ucmVzdWx0KSB7XHJcbiAgICAgICAgICAgIGxldCBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIubV90YWJsZUluZm8ucmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5tX3RhYmxlSW5mby5yZXN1bHRbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0TnVtYmVyKG51bWJlcik7XHJcbiAgICAgICAgICAgIHRoaXMucnVuRWZmZWN0UmVzdWx0KG51bWJlcik7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlTGlzdENhdSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRoYW5nVGh1YSgpO1xyXG4gICAgICAgICAgICBsZXQgdWkgPSB0aGlzLl9nZXRVSUZyb21JbmRleCgtMSk7XHJcbiAgICAgICAgICAgIGlmICh1aS5uYW1lID09IFwiVUlUYWlYaXVTb2lDYXVcIil7XHJcbiAgICAgICAgICAgICAgICB1aS5nZXRDb21wb25lbnQoXCJVSVRhaVhpdVNvaUNhdVwiKS5ldmVudEdldEFsbENhdSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLm1fdGFibGVJbmZvLndpbkNoaXAgPiAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucnVuRWZmZWN0TW9uZXlXaW4oMSwgU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5tX3RhYmxlSW5mby53aW5DaGlwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVUaW1lcigpe1xyXG4gICAgICAgIGlmICh0aGlzLlRpbWVyICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lLS07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl90aW1lID49IDAgKXtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX3RpbWUgPCAxMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UaW1lci5zdHJpbmcgPSBcIjBcIit0aGlzLl90aW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl90aW1lIDw9NSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuVGltZXIubm9kZS5jb2xvcj0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuVGltZXIuc3RyaW5nID0gdGhpcy5fdGltZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuVGltZXIubm9kZS5hY3RpdmUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UaW1lci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG90YWxUaW1lRW5kLS07XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fdG90YWxUaW1lRW5kID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVFbmROb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5fdG90YWxUaW1lRW5kIDwgMTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGltZUVuZC5zdHJpbmcgPSBcIjAwOjBcIit0aGlzLl90b3RhbFRpbWVFbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxiVGltZUVuZC5zdHJpbmcgPSBcIjAwOlwiK3RoaXMuX3RvdGFsVGltZUVuZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzTmFuKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3RvdGFsVGltZUVuZCA8IDUgJiYgdGhpcy5tb0JhdE5vZGUuYWN0aXZlKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubW9CYXROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UmVzdWx0VGFpWGl1KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lRW5kTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5jb250cm9sbGVyICE9IG51bGwgJiYgdGhpcy5jb250cm9sbGVyLm1fdGFibGVJbmZvICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1YXlCYXROb2RlLmFjdGl2ZSA9IHRoaXMuY29udHJvbGxlci5tX3RhYmxlSW5mby5pc0JldHRpbmcgJiYgdGhpcy5fdGltZSA+PSAwICYmIHRoaXMuX3RpbWUgPD0gMzA7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIF90dXJuT25UaW1lKHRpbWUpe1xyXG4gICAgICAgIGlmICh0aGlzLlRpbWVyICE9IG51bGwpe1xyXG4gICAgICAgICAgICB0aGlzLlRpbWVyLm5vZGUuYWN0aXZlID0gdGltZSA+MDtcclxuICAgICAgICAgICAgaWYgKHRpbWUgPD01KXtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGltZXIubm9kZS5jb2xvcj0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRpbWVyLm5vZGUuY29sb3I9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWUgPSB0aW1lO1xyXG4gICAgICAgICAgICBpZih0aGlzLl90aW1lID49IDAgJiYgdGhpcy5fdGltZSA8IDEwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuVGltZXIuc3RyaW5nID0gXCIwXCIrdGhpcy5fdGltZTtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRpbWVyLnN0cmluZyA9IHRoaXMuX3RpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgX3R1cm5PZlRpbWUoKXtcclxuICAgICAgICBpZiAodGhpcy5UaW1lciAhPSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLlRpbWVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgc2hvd0xpc3RDaGlwQmV0KGJldHMpe1xyXG4gICAgICAgIGlmICh0aGlzLmxpc3RDaGlwQmV0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoaXBCZXRbaV0uc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoYmV0c1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVGhhbmdUaHVhKHR5cGVXaW4pIHtcclxuICAgICAgICBpZiAodHlwZVdpbiA+MCl7XHJcbiAgICAgICAgICAgIGlmICh0eXBlV2luID09IDEpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG90YWxEYXlUaGFuZysrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG90YWxEYXlUaHVhID0gMDtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdG90YWxEYXlUaGFuZyA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl90b3RhbERheVRodWErKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByZXN1bWVHYW1lKCkge1xyXG4gICAgICAgIGlmIChTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLm1fdGFibGVJbmZvICE9IG51bGwpe1xyXG4gICAgICAgICAgICBTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLm1fdGFibGVJbmZvLnRpbWUgPSAgTWF0aC5mbG9vcihjYy5sYXN0VGltZSAtIG5ldyBEYXRlKCkuZ2V0VGltZSgpLzEwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl90dXJuT2ZUaW1lKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZVJlc3VsdE51bWJlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUzRCgpO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3BFZmZlY3RSZXN1bHQoKTtcclxuICAgICAgICAgICAgaWYoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5tX3RhYmxlSW5mby5pc0JldHRpbmcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdHVybk9uVGltZShTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLm1fdGFibGVJbmZvLnRpbWUpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuY3VhKFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIubV90YWJsZUluZm8udGltZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2FuY3VhKHRpbWVMZWZ0KXtcclxuICAgICAgICB0aGlzLl90dXJuT25UaW1lKHRpbWVMZWZ0LTEwKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKXtcclxuICAgICAgICAgICAgaWYgKCFTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLm1fdGFibGVJbmZvLmlzQmV0dGluZyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGJfdGFpID0gdGhpcy5saXN0Q2hpcEJldFswXS5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGJfeGl1ID0gdGhpcy5saXN0Q2hpcEJldFsxXS5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFsYW5jZSA9IE1hdGgubWluKHBhcnNlRmxvYXQobGJfdGFpLnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpKSwgcGFyc2VGbG9hdChsYl94aXUuc3BsaXQoXCIuXCIpLmpvaW4oXCJcIikpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdENoaXBCZXRbMF0uc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoYmFsYW5jZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDaGlwQmV0WzFdLnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGJhbGFuY2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIubV90YWJsZUluZm8ucmVmdW5kQ2hpcCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucnVuRWZmZWN0UmVmdW5kV2luKDEsIHRoaXMuY29udHJvbGxlci5tX3RhYmxlSW5mby5yZWZ1bmRDaGlwLCB0aGlzLmNvbnRyb2xsZXIubV90YWJsZUluZm8ud2luQ2hpcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxLjIpO1xyXG4gICAgICAgIGlmICh0aW1lTGVmdCA+IDE0KXtcclxuICAgICAgICAgICAgdGhpcy5zaG93Tm90aSgxLCBcIkLhuq90IMSR4bqndSBjw6JuIGPhu61hXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZUxlZnQgPiAxMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uICgpe1xyXG4gICAgICAgICAgICAgICAgaWYgKCFTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLm1fdGFibGVJbmZvLmlzQmV0dGluZyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UaW1lci5ub2RlLmFjdGl2ZSAgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJ1bkRpY2VBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGltZUxlZnQtMTApO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5EaWNlQW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlZEFuaW1hdGlvbkRpY2UodGltZUxlZnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93TGlzdE15Q2hpcEJldChiZXRzKXtcclxuICAgICAgICBpZiAodGhpcy5saXN0TXlDaGlwQmV0ICE9IG51bGwpe1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYmV0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE15Q2hpcEJldFtpXS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihiZXRzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93TGlzdFVzZXJzKHVzZXJzKXtcclxuICAgICAgICBpZiAodGhpcy5saXN0VXNlcnMgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aSA8IHVzZXJzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VXNlcnNbaV0uc3RyaW5nID0gXCIoXCIrdXNlcnNbaV0rXCIpXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdE51bWJlcihudW1iZXIpe1xyXG4gICAgICAgIHRoaXMuUmVzdWx0TnVtYmVyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5SZXN1bHROdW1iZXIuZ2V0Q2hpbGRCeU5hbWUoXCJyZXN1bHRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBudW1iZXI7XHJcbiAgICB9LFxyXG4gICAgaGlkZVJlc3VsdE51bWJlcigpe1xyXG4gICAgICAgIHRoaXMubW9CYXROb2RlLmFjdGl2ZSAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuUmVzdWx0TnVtYmVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGhpZGUzRCgpe1xyXG4gICAgICAgIHRoaXMuRDEuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5EMi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkQzLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIHJ1bkRpY2VBbmltYXRpb24oKXtcclxuICAgICAgICBpZiAoIXRoaXMuaXNQbGF5ZWRBbmltYXRpb24pe1xyXG4gICAgICAgICAgICB0aGlzLmlzUGxheWVkQW5pbWF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5oaWRlM0QoKTtcclxuICAgICAgICAgICAgdGhpcy5EaWNlQW5pbWF0aW9uLnN0b3AoKTtcclxuICAgICAgICAgICAgdGhpcy5EaWNlQW5pbWF0aW9uLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5EaWNlQW5pbWF0aW9uLnBsYXkoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmltVXBCYXQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5pbVVwQmF0LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsIFwiSWRsZVwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sIDAuMilcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xpY2tCZXQoZXZlbnQsIGN1YSl7XHJcbiAgICAgICAgaWYoIXRoaXMuY29udHJvbGxlci5tX3RhYmxlSW5mby5pc0JldHRpbmcpe1xyXG4gICAgICAgICAgICAvLyBtbS5Ub2FzdC5zaG93VG9hc3QoMiwgXCLEkOG7o2kgcGhpw6puIG3hu5tpIMSR4buDIMSR4bq3dFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoMSwgXCJI4bq/dCB0aOG7nWkgZ2lhbiDEkeG6t3QgY8aw4bujY1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdWEgPSBwYXJzZUludChjdWEpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0JldFRhaVhpdSA+PTAgJiYgdGhpcy5faXNCZXRUYWlYaXUgIT0gY3VhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KDEsIFwiS2jDtG5nIMSRxrDhu6NjIHBow6lwIMSR4bq3dCBuaGnhu4F1IGPhu61hXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmKHRoaXMubm9kZS55IDwgNDgwKVxyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUueSA9IDQ4MDtcclxuICAgICAgICB0aGlzLlRhYmxlQmV0LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5UYW5Mb2MuYWN0aXZlICAgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLkJldFNlbGVjdC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuQmV0T3RoZXIuYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCZXQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2hvd0xpc3RNeUNoaXBCZXQoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5tX3RhYmxlSW5mby5saXN0TXlDaGlwUG90KTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50VHlwZUJldCA9IGN1YTtcclxuXHJcbiAgICAgICAgLy8gdGFpXHJcbiAgICAgICAgaWYodGhpcy5fY3VycmVudFR5cGVCZXQgPT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFByZXBhcmVCZXRbMF0uc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFByZXBhcmVCZXRbMV0uc3RyaW5nID0gXCLEkOG6t3RcIjtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLl9jdXJyZW50VHlwZUJldCA9PSAxKXsgLy8geGl1XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFByZXBhcmVCZXRbMF0uc3RyaW5nID0gXCLEkOG6t3RcIjtcclxuICAgICAgICAgICAgdGhpcy5saXN0UHJlcGFyZUJldFsxXS5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xpY2tIdXkoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuVGFibGVCZXQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5UYW5Mb2MuYWN0aXZlICAgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2hvd0xpc3RNeUNoaXBCZXQoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5tX3RhYmxlSW5mby5saXN0TXlDaGlwUG90KTtcclxuICAgICAgICB0aGlzLnNldFByZXBhcmVCZXQoW1wixJDhurd0XCIsXCLEkOG6t3RcIl0pO1xyXG4gICAgfSxcclxuICAgIGNsaWNrRG9uZ1koZXZlbnQpe1xyXG4gICAgICAgIC8vIHNlbmQgYmV0IHJlcXVlc3RcclxuICAgICAgICBpZihTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLm1fdGFibGVJbmZvLmlzQmV0dGluZyl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50QmV0ID4gMCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmV0UmVxdWVzdCA9IG5ldyBUYWlYaXVSZXF1ZXN0LkJldFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgIGJldFJlcXVlc3Quc2V0QmV0Q2hpcCh0aGlzLl9jdXJyZW50QmV0KTtcclxuICAgICAgICAgICAgICAgIGJldFJlcXVlc3Quc2V0VHlwZVBvdCh0aGlzLl9jdXJyZW50VHlwZUJldCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0JldFRhaVhpdSAgICA9IHRoaXMuX2N1cnJlbnRUeXBlQmV0O1xyXG4gICAgICAgICAgICAgICAgU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChiZXRSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRhYmxlQmV0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5UYW5Mb2MuYWN0aXZlICAgPSB0cnVlO1xyXG4gICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUb2FzdCgxLCBcIlRp4buBbiBjxrDhu6NjIHBo4bqjaSBs4bubbiBoxqFuIDBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiSOG6v3QgdGjhu51pIGdpYW4gxJHhurd0IGPGsOG7o2NcIik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KDEsIFwiSOG6v3QgdGjhu51pIGdpYW4gxJHhurd0IGPGsOG7o2NcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlbGVjdEJldChldmVudCwgYmV0KXtcclxuICAgICAgICBpZihHYW1lVmFyaWFibGVzLmdldENoaXAoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSA8ICh0aGlzLl9jdXJyZW50QmV0ICsgcGFyc2VJbnQoYmV0KSkpe1xyXG4gICAgICAgICAgICAvLyBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJC4bqhbiBraMO0bmcgxJHhu6cgQ2hpcFwiKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoMSwgXCJC4bqhbiBraMO0bmcgxJHhu6cgQ2hpcFwiKTtcclxuICAgICAgICB9ZWxzZSBpZighU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5tX3RhYmxlSW5mby5pc0JldHRpbmcpe1xyXG4gICAgICAgICAgICAvLyBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJI4bq/dCB0aOG7nWkgZ2lhbiDEkeG6t3QgY8aw4bujY1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoMSwgXCJI4bq/dCB0aOG7nWkgZ2lhbiDEkeG6t3QgY8aw4bujY1wiKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudEJldCArPSBwYXJzZUludChiZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RQcmVwYXJlQmV0W3RoaXMuX2N1cnJlbnRUeXBlQmV0XS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9jdXJyZW50QmV0KTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0QmV0T3RoZXIoZXZlbnQsIG51bWJlcil7XHJcbiAgICAgICAgaWYodGhpcy5saXN0UHJlcGFyZUJldFt0aGlzLl9jdXJyZW50VHlwZUJldF0uc3RyaW5nID09IFwiMFwiIHx8IHRoaXMubGlzdFByZXBhcmVCZXRbdGhpcy5fY3VycmVudFR5cGVCZXRdLnN0cmluZyA9PSBcIsSQ4bq3dFwiKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0UHJlcGFyZUJldFt0aGlzLl9jdXJyZW50VHlwZUJldF0uc3RyaW5nID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHByZUJldCA9IFwiXCI7XHJcbiAgICAgICAgaWYobnVtYmVyID09ICdkZWwnKXtcclxuICAgICAgICAgICAgcHJlQmV0ID0gdGhpcy5saXN0UHJlcGFyZUJldFt0aGlzLl9jdXJyZW50VHlwZUJldF0uc3RyaW5nO1xyXG4gICAgICAgICAgICBwcmVCZXQgPSBwcmVCZXQuc3BsaXQoXCIuXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIHByZUJldCA9IHByZUJldC5zdWJzdHIoMCwgcHJlQmV0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RQcmVwYXJlQmV0W3RoaXMuX2N1cnJlbnRUeXBlQmV0XS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihwcmVCZXQpO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgcHJlQmV0ID0gdGhpcy5saXN0UHJlcGFyZUJldFt0aGlzLl9jdXJyZW50VHlwZUJldF0uc3RyaW5nO1xyXG4gICAgICAgICAgICBwcmVCZXQgPSBwcmVCZXQuc3BsaXQoXCIuXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgIHByZUJldCArPSBudW1iZXI7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFByZXBhcmVCZXRbdGhpcy5fY3VycmVudFR5cGVCZXRdLnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHByZUJldCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRCZXQgPSBwYXJzZUludChwcmVCZXQpO1xyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJlbnRCZXQgPiBHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSl7XHJcbiAgICAgICAgICAgIC8vIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIlPhu5EgZMawIGtow7RuZyDEkeG7p1wiKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93VG9hc3QoMSwgXCJT4buRIGTGsCBraMO0bmcgxJHhu6dcIik7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRCZXQgPSBHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UHJlcGFyZUJldFt0aGlzLl9jdXJyZW50VHlwZUJldF0uc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fY3VycmVudEJldCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNsaWNrT3RoZXJOdW1iZXIoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuQmV0U2VsZWN0LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuQmV0T3RoZXIuYWN0aXZlICA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5saXN0UHJlcGFyZUJldFt0aGlzLl9jdXJyZW50VHlwZUJldF0uc3RyaW5nID0gXCIwXCI7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tFeGl0Um9vbShldmVudCl7XHJcbiAgICAgICAgbGV0IHJvb20gPSBTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwidGFpeGl1XCIpO1xyXG4gICAgICAgIGlmKHJvb20pe1xyXG4gICAgICAgICAgICBTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uTGVhdmVSb29tUmVxdWVzdChyb29tKSk7XHJcbiAgICAgICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY2xpY2tIZWxwZXIoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuc2hvdyhcIlVJVGFpWGl1SGVscGVyXCIsIHtwb3A6IHRydWUsIHNyYzogJ3RhaXhpdSd9KTtcclxuICAgIH0sXHJcblxyXG4gICAgY2xpY2tIaXN0b3J5KGV2ZW50KXtcclxuICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcclxuICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlUYWlYaXVUcmFuc2FjdGlvblwiLCB7cG9wOiB0cnVlLCBzcmM6ICd0YWl4aXUnLCBkYXRhOiB7aXRlbXM6IFtdfX0pO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZURhdGFIaXN0b3J5KGl0ZW1zKSB7XHJcbiAgICAgICAgbGV0IHVpID0gdGhpcy5nZXRVSUZyb21OYW1lKFwiVUlUYWlYaXVUcmFuc2FjdGlvblwiKTtcclxuICAgICAgICBpZiAodWkgIT0gbnVsbCAmJiB1aS5uYW1lID09IFwiVUlUYWlYaXVUcmFuc2FjdGlvblwiKXtcclxuICAgICAgICAgICAgdWkuZ2V0Q29tcG9uZW50KHVpLm5hbWUpLnVwZGF0ZURhdGEoaXRlbXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGlja1JhbmsoZXZlbnQpe1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSVRhaVhpdVJhbmtcIiwge3BvcDogdHJ1ZSwgc3JjOiAndGFpeGl1JywgZGF0YToge2l0ZW1zOiBbXX19KTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVEYXRhUmFuayhpdGVtcykge1xyXG4gICAgICAgIGxldCB1aSA9IHRoaXMuZ2V0VUlGcm9tTmFtZShcIlVJVGFpWGl1UmFua1wiKTtcclxuICAgICAgICBpZiAodWkgIT0gbnVsbCAmJiB1aS5uYW1lID09IFwiVUlUYWlYaXVSYW5rXCIpe1xyXG4gICAgICAgICAgICB1aS5nZXRDb21wb25lbnQodWkubmFtZSkudXBkYXRlRGF0YShpdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dOb3RpKHRpbWUsIG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLm5vdGlOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5ub3RpTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiTm90aVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vdGlOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRpbWUpXHJcbiAgICB9LFxyXG4gICAgc2hvd1RvYXN0KHRpbWUsIG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLnRvYXN0Tm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMudG9hc3ROb2RlLmdldENoaWxkQnlOYW1lKFwibGJOb3RpXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9hc3ROb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRpbWUpXHJcbiAgICB9LFxyXG4gICAgZXZlbnRBbGxJbigpIHtcclxuICAgICAgICBpZihTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLm1fdGFibGVJbmZvLmlzQmV0dGluZyl7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRCZXQgPSBHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRCZXQgPiAwKXtcclxuICAgICAgICAgICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICAgICAgICAgIFVJTWFuZ2VyLnNob3coJ1VJRGlhbG9nVHdvJywge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJC4bqhbiBjw7MgbXXhu5FuIMSR4bq3dCB0b8OgbiBi4buZIHPhu5EgdGnhu4FuP1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNiWWVzXCI6IGZ1bmN0aW9uIGNiWWVzKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJldFJlcXVlc3QgPSBuZXcgVGFpWGl1UmVxdWVzdC5CZXRSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXRSZXF1ZXN0LnNldEJldENoaXAoc2VsZi5fY3VycmVudEJldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXRSZXF1ZXN0LnNldFR5cGVQb3Qoc2VsZi5fY3VycmVudFR5cGVCZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5faXNCZXRUYWlYaXUgICAgPSBzZWxmLl9jdXJyZW50VHlwZUJldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQoYmV0UmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5UYWJsZUJldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuVGFuTG9jLmFjdGl2ZSAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcG9wOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KDEsIFwiQuG6oW4ga2jDtG5nIMSR4bunIENoaXBcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIC8vIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIkjhur90IHRo4budaSBnaWFuIMSR4bq3dCBjxrDhu6NjXCIpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdCgxLCBcIkjhur90IHRo4budaSBnaWFuIMSR4bq3dCBjxrDhu6NjXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudFNob3dEdWFUb3AoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93KFwiVUlUYWlYaXVEdWFUb3BcIiwge3BvcDogdHJ1ZSwgc3JjOiAndGFpeGl1JywgZGF0YTogXCJUaGVMZVwifSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRYaW5Mb2MoKSB7XHJcbiAgICAgICAgbGV0IGJldFJlcXVlc3QgPSBuZXcgVGFpWGl1UmVxdWVzdC5SdXRMb2NSZXF1ZXN0KCk7XHJcbiAgICAgICAgU21hcnRGb3hTREsuVGFpWGl1Q29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChiZXRSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICAgICAgdGhpcy5idG5YaW5Mb2MuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbikuaW50ZXJhY3RhYmxlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRUYW5Mb2MoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93KFwiVUlUYWlYaXVUYW5Mb2NcIiwge3BvcDogdHJ1ZSwgc3JjOiAndGFpeGl1J30pO1xyXG4gICAgfSxcclxuICAgIGV2ZW50UmFua1RhbkxvYygpIHtcclxuICAgICAgICB0aGlzLnNob3coXCJVSVRhaVhpdUR1YVRvcFwiLCB7cG9wOiB0cnVlLCBzcmM6ICd0YWl4aXUnLCBkYXRhOiBcIlZpbmhEYW5oXCJ9KTtcclxuICAgIH0sXHJcbiAgICBldmVudEhpc3RvcnlUYW5Mb2MoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93KFwiVUlUYWlYaXVEdWFUb3BcIiwge3BvcDogdHJ1ZSwgc3JjOiAndGFpeGl1JywgZGF0YTogXCJMaWNoU3VcIn0pO1xyXG4gICAgfSxcclxuICAgIGdldE1heERheVRoYW5nKCl7XHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmNjhfZGF5X3RoYW5nX21heFwiKSA9PT0gbnVsbCB8fCBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImY2OF9kYXlfdGhhbmdfbWF4XCIpID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImY2OF9kYXlfdGhhbmdfbWF4XCIsIFwiMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZjY4X2RheV90aGFuZ19tYXhcIikpO1xyXG4gICAgfSxcclxuICAgIHNldE1heERheVRoYW5nKGRheVRoYW5nKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImY2OF9kYXlfdGhhbmdfbWF4XCIsIGRheVRoYW5nKTtcclxuICAgIH0sXHJcbiAgICBnZXRNYXhEYXlUaHVhKCl7XHJcbiAgICAgICAgbGV0IGxvY2FsU3RvcmFnZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2U7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmNjhfZGF5X3RodWFfbWF4XCIpID09PSBudWxsIHx8IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZjY4X2RheV90aHVhX21heFwiKSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmNjhfZGF5X3RodWFfbWF4XCIsIFwiMFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZjY4X2RheV90aHVhX21heFwiKSk7XHJcbiAgICB9LFxyXG4gICAgc2V0TWF4RGF5VGh1YShkYXlUaHVhKXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImY2OF9kYXlfdGh1YV9tYXhcIiwgZGF5VGh1YSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd1Jlc3VsdFJ1dExvYyhydXRMb2NJbmZvKSB7XHJcbiAgICAgICAgaWYgKHJ1dExvY0luZm8uY2hpcFRhbiA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUb2FzdCgzLCBcIkLhuqFuIMSRw6Mgbmjhuq1uIMSRxrDhu6NjIGzhu5ljIHRy4buLIGdpw6E6IFwiK1V0aWxzLmFkZERvdFRvTnVtYmVyKHJ1dExvY0luZm8uY2hpcFRhbikrXCLEkVwiKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1RvYXN0KDMsIHJ1dExvY0luZm8ubWVzVGFuKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlQ2hpcEFsbChzdWJDaGlwKXtcclxuICAgICAgICBTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyLm9uRXZlbnRVcGRhdGVDaGlwKHN1YkNoaXApO1xyXG4gICAgfSxcclxuICAgIHNob3dSZXdhcmQod2FyZEluZm8pIHtcclxuICAgICAgICBsZXQgbXNnID0gXCJC4bqhbiDEkcOjIG5o4bqtbiDEkcaw4bujYyBwaOG6p24gdGjGsOG7nW5nIHPhu7Ega2nhu4duIMSRdWEgVE9QIFxcbiBW4buLIHRyw606IFwiK3dhcmRJbmZvLnRvcCtcIlxcblwiICsgXCJQaOG6p24gdGjGsOG7n25nOiBcIitVdGlscy5hZGREb3RUb051bWJlcih3YXJkSW5mby5yZXdhcmQpO1xyXG4gICAgICAgIFVJTWFuZ2VyLnNob3coJ1VJRGlhbG9nT25lJywge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBtc2csXHJcbiAgICAgICAgICAgICAgICBcImNiWWVzXCI6IGZ1bmN0aW9uIGNiWWVzKCkge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgcG9wOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
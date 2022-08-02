
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/UIKimCuong.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '362d0FjdFFO55soj6Pzez87', 'UIKimCuong');
// scripts/kimcuong/UIKimCuong.js

"use strict";

var WinGame = require("KimCuongWinGame");

var Helper = require("Helper");

var reel = require("KimCuongReel");

var line = require("KimCuongLine");

var UtilsUI = require("UtilsUI");

var TrialResult = require("TrialResult");

var Language = require("kimcuongLanguage");

var ListRoom = cc.Enum({
  "1l": 1,
  "1k": 2,
  "10k": 3
});
cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    reels: {
      "default": [],
      type: reel
    },
    iconPrefab: cc.Prefab,
    noticeNode: cc.Node,
    btnQuay: cc.Node,
    btnQuayNhanh: cc.Node,
    btnStopQuay: cc.Node,
    btnAutoQuay: cc.Node,
    bangThuong: cc.Node,
    lbNumberLine: cc.Label,
    lbNumberStake: cc.Label,
    lbMoneyWin: cc.Label,
    lbSession: cc.Label,
    selectLines: line,
    WinGame: WinGame,
    listMainLines: cc.Node,
    // edtCheat           : cc.EditBox,
    isAuto: false,
    isFast: false,
    isSpin: false,
    isFreeSpin: false,
    red: true,
    lastResult: [],
    betSelect: 0,
    roomNumber: 0,
    posLineWin: 0,
    totalLineWin: 0,
    _TotalColumn: 5,
    lb_phong: cc.Label,
    lb_sodu: cc.Label,
    lb_hu: cc.Label,
    toggleMusic: cc.Toggle,
    toggleSound: cc.Toggle,
    bgSound: cc.AudioClip,
    soundSpinMis: cc.AudioClip,
    soundSpinWin: cc.AudioClip,
    soundBigWin: cc.AudioClip,
    soundJackpot: cc.AudioClip,
    soundBonus: cc.AudioClip,
    soundClick: cc.AudioClip,
    soundSpin: cc.AudioClip,
    menuSetting: cc.Node,
    _keyMusic: "music_kc",
    _keySound: "sound_kc",
    _musicSlotState: 0,
    _soundSlotState: 0,
    _isFreeTrial: false,
    _myMoneyTrial: 0,
    _mySession: 0
  },
  onLoad: function onLoad() {
    this._TotalColumn = 5;
    this.TotalItemRun = 20;
    this.totalSymbol = 7;
    this.winMoney = 0;
    this.freeSpin = 0;
    this.init();
    this.roomNumber = ListRoom["1l"];
    this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf));
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
    this.initSound();
  },
  initSound: function initSound() {
    var musicSave = cc.sys.localStorage.getItem(this._keyMusic);

    if (musicSave != null) {
      this._musicSlotState = parseInt(musicSave);
    } else {
      this._musicSlotState = 1;
      cc.sys.localStorage.setItem(this._keyMusic, "1");
    }

    var soundSave = cc.sys.localStorage.getItem(this._keySound);

    if (soundSave != null) {
      this._soundSlotState = parseInt(soundSave);
    } else {
      this._soundSlotState = 1;
      cc.sys.localStorage.setItem(this._keySound, "1");
    }

    if (this.bgSound != null && !this.toggleMusic.isChecked) {
      this.musicId = cc.audioEngine.play(this.bgSound, true, 1);
    } else {
      cc.audioEngine.pause(this.musicId);
    }
  },
  onDisable: function onDisable() {
    cc.audioEngine.pause(this.musicId);
  },
  eventMusic: function eventMusic() {
    this._musicSlotState = this.toggleSound.isChecked ? 0 : 1;

    if (!this.toggleMusic.isChecked) {
      cc.audioEngine.resume(this.musicId);
    } else cc.audioEngine.pause(this.musicId);

    cc.sys.localStorage.setItem(this._keyMusic, this._musicSlotState);
  },
  eventSound: function eventSound() {
    this._soundSlotState = this.toggleSound.isChecked ? 0 : 1;
    cc.sys.localStorage.setItem(this._keySound, this._soundSlotState);
  },
  playSpin: function playSpin() {
    if (this._soundSlotState == 1) {
      cc.audioEngine.play(this.soundSpin, false, 1);
    }
  },
  playSpinMis: function playSpinMis() {
    if (this._soundSlotState == 1) {
      cc.audioEngine.play(this.soundSpinMis, false, 1);
    }
  },
  playSpinWin: function playSpinWin() {
    if (this._soundSlotState == 1) {
      cc.audioEngine.play(this.soundSpinWin, false, 1);
    }
  },
  playBigWin: function playBigWin() {
    if (this._soundSlotState == 1) {
      cc.audioEngine.play(this.soundBigWin, false, 1);
    }
  },
  playJackpot: function playJackpot() {
    if (this._soundSlotState == 1) {
      cc.audioEngine.play(this.soundJackpot, false, 1);
    }
  },
  playBonus: function playBonus() {
    if (this._soundSlotState == 1) {
      cc.audioEngine.play(this.soundBonus, false, 1);
    }
  },
  playClick: function playClick() {
    if (this._soundSlotState == 1) {
      cc.audioEngine.play(this.soundClick, false, 1);
    }
  },
  updateJackpot: function updateJackpot() {
    var key = "kimcuong" + cc.betLevel;

    if (SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) {
      if (SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.KimCuongController.ZoneInstance.mySelf.getVariable(key);

        if (variableJackpot) {
          var jackpot = variableJackpot.value;
          var current_lb_jackpot = this.lb_hu.string;
          current_lb_jackpot = current_lb_jackpot.split(".").join("");
          var currentHu = parseFloat(current_lb_jackpot);
          Utils.numberTo(this.lb_hu, currentHu, jackpot, 1000, true);
        }
      }
    }
  },
  updateUserVariableSlot: function updateUserVariableSlot(event) {
    var key = "fskimcuong" + cc.betLevel;

    if (event.changedVars.indexOf(key) >= 0) {
      // get free spine of room in here
      //key: "fs" + "kimcuong1l" free spin of bet 100
      // key: "fs" + "kimcuong1k" free spin of bet 1000
      // key: "fs" + "kimcuong10k" free spin of bet 1000
      if (event.user.isItMe) {
        var freeSpin = SmartFoxSDK.KimCuongController.ZoneInstance.mySelf.getVariable(key).value;
        this.freeSpin = freeSpin;
        this.WinGame.updateFreeSpin();
      }
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    if (!this._isFreeTrial && cc.currentUI != "") this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) - subChip);
  },
  onEnable: function onEnable() {
    mm.audio.pauseMusic();

    if (cc.betLevel == "choithu") {
      this._isFreeTrial = true;
      this._myMoneyTrial = 50000000;
      this.lb_sodu.string = Utils.addDotToNumber(50000000);
      this._mySession = 0;
      this.lbSession.string = "#" + this._mySession;
    } else {
      this._myMoneyTrial = 0;
      this._isFreeTrial = false;
    }

    this.roomNumber = ListRoom[cc.betLevel];

    if (this.roomNumber === undefined) {
      cc.betLevel = "1l";
    }

    this.roomNumber = ListRoom[cc.betLevel];
    MiniGame;
    this.roomNumber = this.roomNumber % 4;
    this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
    this.lb_phong.string = Helper.numberWithCommas(this.getMoneyInRoom());
    UtilsUI.loadImageRes(this.node.getChildByName("bgGame").getComponent(cc.Sprite), "images/kimcuong/mainGameBg" + this.roomNumber);
    UtilsUI.loadImageRes(this.node.getChildByName("borderGame").getComponent(cc.Sprite), "images/kimcuong/border-phong" + this.roomNumber);
    this.selectLines.init(this);
    this.WinGame.init(this);
    this.lbMoneyWin.string = "0";
    this.showLineWin(false);
    mm.Loading.hide();
  },
  init: function init() {
    var self = this;
    var lineArr1 = [];
    var lineArr2 = [];
    var lineArr3 = [];
    Promise.all(this.reels.map(function (reel, index) {
      var lastArray = [];
      lastArray = self.initRandomItems(self.TotalItemRun);
      lineArr1.push(lastArray[lastArray.length - 1]);
      lineArr2.push(lastArray[lastArray.length - 2]);
      lineArr3.push(lastArray[lastArray.length - 3]);
      reel.init(self, lastArray);
    })).then(function (result) {
      self.lastResult = lineArr3.concat(lineArr2).concat(lineArr1);
    });
  },
  setNumberLines: function setNumberLines(totalLines) {
    this.lbNumberLine.string = totalLines;
  },
  setNumberStake: function setNumberStake(totalStake) {
    this.lbNumberStake.string = Helper.numberWithCommas(totalStake * this.getMoneyInRoom());
  },
  setMoneyWin: function setMoneyWin(totalMoney) {
    Helper.numberTo(this.lbMoneyWin, parseInt(this.lbMoneyWin.string), totalMoney, 1200, true);

    if (!this._isFreeTrial) {
      this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf));
    } else {
      this._myMoneyTrial = this._myMoneyTrial + this.winMoney;
      this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial);
    }

    this.isSpin = false;
  },
  updateDataPhong: function updateDataPhong(roomId) {},
  // update (dt) {},
  eventQuayNhanh: function eventQuayNhanh() {
    if (this._isFreeTrial) {
      this.addNotice(Language.getString("noti_not_trial"));
      return;
    }

    if (!this.checkEnoughMoney()) {
      this.addNotice(Language.getString("noti_not_money"));
      return;
    }

    if (this.isSpin) {
      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    this.isSpin = true;
    this.isFast = true;
    this.isAuto = true;
    this.pauseSystemEventNode(this.btnAutoQuay, false);
    this.pauseSystemEventNode(this.btnQuayNhanh, true);
    this.btnStopQuay.active = true;
    this.autoQuay();
  },
  eventAutoQuay: function eventAutoQuay() {
    if (this._isFreeTrial) {
      this.addNotice(Language.getString("noti_not_trial"));
      return;
    }

    if (!this.checkEnoughMoney()) {
      this.addNotice(Language.getString("noti_not_money"));
      return;
    }

    if (this.isSpin) {
      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    this.isSpin = true;
    this.isFast = false;
    this.isAuto = true;
    this.pauseSystemEventNode(this.btnAutoQuay, true);
    this.pauseSystemEventNode(this.btnQuayNhanh, false);
    this.btnStopQuay.active = true;
    this.autoQuay();
  },
  runQuay: function runQuay() {
    if (this._isFreeTrial) {
      this.isSpin = true;
      this._myMoneyTrial = this._myMoneyTrial - this.getTotalBet();
      if (this.freeSpin < 1) this.lb_sodu.string = Utils.addDotToNumber(this._myMoneyTrial);
      if (this._myMoneyTrial < 1) this.addNotice(Language.getString("noti_not_money"));
      this._mySession++;
      this.KimCuongRun(TrialResult.getItemTrial());
      this.freeSpin--;
    } else {
      this.playSpin();
      this.isSpin = true;
      var betRequest = new KimCuongRequest.BetRequest();
      this.showLineWin(false);
      betRequest.setBet(this.getMoneyInRoom());
      this.setLinesBet(betRequest);

      if (!this.checkEnoughMoney()) {
        this.addNotice(Language.getString("noti_not_money"));
        return;
      } // sub money


      if (this.freeSpin < 1) this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) - this.getTotalBet());
      SmartFoxSDK.KimCuongController.ZoneInstance.send(betRequest.toSRequest());
    }
  },
  eventStopQuay: function eventStopQuay() {
    this.isFast = false;
    this.isAuto = false;
    this.btnStopQuay.active = false;
    this.pauseSystemEventNode(this.btnAutoQuay, false);
    this.pauseSystemEventNode(this.btnQuayNhanh, false);
    var request = new KimCuongRequest.StopAutoPlayRequest();
    SmartFoxSDK.KimCuongController.ZoneInstance.send(request.toSRequest());
  },
  eventPhong: function eventPhong(event, data) {
    if (this._isFreeTrial) {
      this.addNotice(Language.getString("noti_not_trial"));
      return;
    }

    if (this.isSpin || this.isAuto || this.isFast) {
      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    this.roomNumber = (this.roomNumber + 1) % 4;
    this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
    this.lb_phong.string = Helper.numberWithCommas(this.getMoneyInRoom());
    UtilsUI.loadImageRes(this.node.getChildByName("bgGame").getComponent(cc.Sprite), "images/kimcuong/mainGameBg" + this.roomNumber);
    UtilsUI.loadImageRes(this.node.getChildByName("borderGame").getComponent(cc.Sprite), "images/kimcuong/border-phong" + this.roomNumber);
    this.setNumberStake(this.selectLines.getTotalLineSelect());

    if (this.roomNumber == 1) {
      cc.betLevel = "1l";
    } else if (this.roomNumber == 2) {
      cc.betLevel = "1k";
    } else if (this.roomNumber == 3) {
      cc.betLevel = "10k";
    }

    this.updateJackpot();
  },
  eventSelectLines: function eventSelectLines() {
    if (this._isFreeTrial) {
      this.addNotice(Language.getString("noti_not_trial"));
      return;
    }

    if (this.isSpin || this.isAuto || this.isFast) {
      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    this.selectLines.eventOpen();
  },
  checkEnoughMoney: function checkEnoughMoney() {
    var totalBet = this.getMoneyInRoom() * 25;

    switch (this.selectLines.typeLine) {
      case 1:
        totalBet = this.getMoneyInRoom() * 13;
        break;

      case 2:
        totalBet = this.getMoneyInRoom() * 12;
        break;

      case 3:
        var listLine = [];

        for (var i = 1; i < this.selectLines.data.length; i++) {
          if (this.selectLines.data[i]) {
            listLine.push(i);
          }
        }

        totalBet = this.getMoneyInRoom() * listLine.length;
        break;
    }

    if (GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) < totalBet) {
      return false;
    }

    return true;
  },
  autoQuay: function autoQuay() {
    if (this._isFreeTrial) {
      if (this.freeSpin > 0) {
        this.eventQuay();
      }
    } else {
      if (this.freeSpin < 1) {
        if (this.isAuto) {
          var request = new KimCuongRequest.AutoPlayRequest();
          request.setBet(this.getMoneyInRoom());
          this.setLinesBet(request);

          if (!this.checkEnoughMoney()) {
            this.addNotice(Language.getString("noti_not_money"));
            return;
          }

          SmartFoxSDK.KimCuongController.ZoneInstance.send(request.toSRequest());
          this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.KimCuongController.ZoneInstance.mySelf) - this.getTotalBet());
        }
      } else {
        this.eventQuay();
      }
    }
  },
  getTotalBet: function getTotalBet() {
    var bet = this.getMoneyInRoom();

    switch (this.selectLines.typeLine) {
      case 0:
        // all
        return this.selectLines.getTotalLine() * bet;

      case 1:
        // le
        return this.selectLines.getTotalLineLe() * bet;

      case 2:
        // chan
        return this.selectLines.getTotalLineChan() * bet;

      case 3:
        return this.selectLines.getTotalLineSelect() * bet;
    }

    return bet;
  },
  setLinesBet: function setLinesBet(request) {
    switch (this.selectLines.typeLine) {
      case 1:
        request.setLineLe();
        break;

      case 2:
        request.setLineChan();
        break;

      case 3:
        var listLine = [];

        for (var i = 1; i < this.selectLines.data.length; i++) {
          if (this.selectLines.data[i]) {
            listLine.push(i);
          }
        }

        request.setLine(listLine);
        break;
    }
  },
  eventQuay: function eventQuay() {
    if (!this._isFreeTrial && !this.checkEnoughMoney()) {
      mm.Toast.showToast(1, Language.getString("noti_not_money"));
      return;
    }

    this.pauseSystemEventNode(this.btnQuay, true);
    this.runQuay();
  },
  pauseSystemEventNode: function pauseSystemEventNode(nodeEvent, isPause) {
    Helper.setMaterialGray(nodeEvent.getComponent(cc.Sprite), isPause);

    if (isPause) {
      nodeEvent.pauseSystemEvents(true);
    } else nodeEvent.resumeSystemEvents(true);
  },
  eventBack: function eventBack() {
    if (this.isSpin || this.isAuto || this.isFast) {
      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    UIManger.show("UIKimCuongLobby", {
      pop: true,
      src: "kimcuong"
    });
  },
  eventSetting: function eventSetting() {
    this.menuSetting.active = !this.menuSetting.active;
  },
  eventVinhDanh: function eventVinhDanh() {
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.KimCuongController.ZoneInstance.send(request.toSRequest());
  },
  eventLichSuGiaoDich: function eventLichSuGiaoDich() {
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.KimCuongController.ZoneInstance.send(request.toSRequest());
  },
  eventBangThuong: function eventBangThuong() {
    this.bangThuong.active = true;
  },
  eventCloseBangThuong: function eventCloseBangThuong() {
    this.bangThuong.active = false;
  },
  KimCuongRun: function KimCuongRun(data) {
    this.showLineWin(false);
    var self = this;
    var result = this.getDataResult(data.result);
    Promise.all(result.map(function (cel, cel_index) {
      Promise.all(cel.map(function (icon, index) {
        self.reels[cel_index].icons[index].setIcon(icon, true);
      }));
    }));
    this.lineWin = data.lineWin;
    this.winMoney = data.winMoney;
    this.freeGift = data.freeGift;
    this.isBonus = data.isBonus;
    this.isFree = data.isFreeSpin;
    this.session = data.session;
    this.isNoHu = data.isNohu;
    this.isThangLon = data.isThangLon;
    this.freeSpin = data.freeSpin;
    this.type = data.type;
    this.runReels();
    if (!data.isFreeSpin) this.WinGame.updateFreeSpin();

    if (this._isFreeTrial) {
      this.lbSession.string = "#" + this._mySession;
    } else {
      this.lbSession.string = "#" + this.session;
    }
  },
  initRandomItems: function initRandomItems(numberItem) {
    var listItem = [];

    for (var i = 0; i < numberItem; i++) {
      listItem[i] = this.random();
    }

    return listItem;
  },
  getDataResult: function getDataResult(result) {
    var self = this;
    var newArray = [];

    for (var i = 0; i < this._TotalColumn; i++) {
      newArray[i] = [];
    }

    for (var _i = 0; _i < result.length; _i++) {
      newArray[_i % self._TotalColumn].push(result[_i]);
    }

    for (var _i2 = 0; _i2 < this._TotalColumn; _i2++) {
      var randomArr = this.initRandomItems(this.TotalItemRun - 6);
      newArray[_i2] = newArray[_i2].concat(randomArr);
    }

    for (var _i3 = 0; _i3 < this.lastResult.length; _i3++) {
      newArray[_i3 % self._TotalColumn].push(this.lastResult[_i3]);
    }

    this.lastResult = result;
    return newArray;
  },
  reformatResult: function reformatResult(result, size) {
    var res = [];

    for (var i = 0; i < result.length; i = i + size) {
      res.push(result.slice(i, i + size));
    }

    return res;
  },
  runActionWon: function runActionWon() {
    this.showLineWin(true);
    this.WinGame.runWinGame();
    this.pauseSystemEventNode(this.btnQuay, false);
  },
  resume: function resume() {
    if (this.winMoney > 0) {
      setTimeout(function () {
        this.WinGame.runWinGame();
      }.bind(this), 300);
    } else {
      this.WinGame.runWinGame();
    }
  },
  setEventMainLine: function setEventMainLine(isPause) {
    Promise.all(this.listMainLines.children.map(function (mainLine, index) {
      if (isPause) mainLine.pauseSystemEvents(true);else mainLine.resumeSystemEvents(true);
    }));
  },
  showLineWin: function showLineWin(isShow) {
    // add money
    var self = this;

    if (isShow) {
      this.setEventMainLine(isShow);
      this.totalLineWin = this.lineWin.length;
      this.posLineWin = 0;

      if (this.totalLineWin > 0) {
        Promise.all(this.lineWin.map(function (posLine) {
          self.listMainLines.children[posLine].getComponent("KimCuongMainLine").onEf();
        }));
        this.scheduleOnce(function () {
          Promise.all(self.lineWin.map(function (posLine) {
            self.listMainLines.children[posLine].getComponent("KimCuongMainLine").offEf();
          }));
          self.schedule(this.showMainLine, 1);
        }, 2);
      }
    } else {
      this.unschedule(this.showMainLine);

      if (this.lineWin && this.lineWin.length > 0) {
        Promise.all(this.lineWin.map(function (posLine) {
          self.listMainLines.children[posLine].getComponent("KimCuongMainLine").offhover();
          self.listMainLines.children[posLine].pauseSystemEvents(true);
        }));
      }
    }
  },
  showMainLine: function showMainLine() {
    if (this.lineWin.length > 0) {
      if (this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]] != undefined) this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]].getComponent("KimCuongMainLine").offEf();
      this.posLineWin = (this.posLineWin + 1) % this.totalLineWin;
      if (this.listMainLines.children[this.lineWin[this.posLineWin]] != undefined) this.listMainLines.children[this.lineWin[this.posLineWin]].getComponent("KimCuongMainLine").onEf();
    }
  },
  runReels: function runReels() {
    Promise.all(this.reels.map(function (reel, index) {
      reel.spin(index);
    }));
  },
  copy: function copy() {
    Promise.all(this.reels.map(function (reel) {
      reel.icons[reel.icons.length - 1].setIcon(reel.icons[2].data);
      reel.icons[reel.icons.length - 2].setIcon(reel.icons[1].data);
      reel.icons[reel.icons.length - 3].setIcon(reel.icons[0].data);
    }));
  },
  random: function random() {
    return ~~(Math.random() * this.totalSymbol);
  },
  getMoneyInRoom: function getMoneyInRoom() {
    return 10 * Math.pow(10, this.roomNumber);
  },
  checkHasMoney: function checkHasMoney() {
    return true;
  },
  addNotice: function addNotice(message) {
    var self = this;
    this.noticeNode.active = true;
    this.noticeNode.getChildByName("lb_noti").getComponent(cc.Label).string = message;
    setTimeout(function () {
      self.noticeNode.active = false;
    }, 1200);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXFVJS2ltQ3VvbmcuanMiXSwibmFtZXMiOlsiV2luR2FtZSIsInJlcXVpcmUiLCJIZWxwZXIiLCJyZWVsIiwibGluZSIsIlV0aWxzVUkiLCJUcmlhbFJlc3VsdCIsIkxhbmd1YWdlIiwiTGlzdFJvb20iLCJjYyIsIkVudW0iLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVlbHMiLCJ0eXBlIiwiaWNvblByZWZhYiIsIlByZWZhYiIsIm5vdGljZU5vZGUiLCJOb2RlIiwiYnRuUXVheSIsImJ0blF1YXlOaGFuaCIsImJ0blN0b3BRdWF5IiwiYnRuQXV0b1F1YXkiLCJiYW5nVGh1b25nIiwibGJOdW1iZXJMaW5lIiwiTGFiZWwiLCJsYk51bWJlclN0YWtlIiwibGJNb25leVdpbiIsImxiU2Vzc2lvbiIsInNlbGVjdExpbmVzIiwibGlzdE1haW5MaW5lcyIsImlzQXV0byIsImlzRmFzdCIsImlzU3BpbiIsImlzRnJlZVNwaW4iLCJyZWQiLCJsYXN0UmVzdWx0IiwiYmV0U2VsZWN0Iiwicm9vbU51bWJlciIsInBvc0xpbmVXaW4iLCJ0b3RhbExpbmVXaW4iLCJfVG90YWxDb2x1bW4iLCJsYl9waG9uZyIsImxiX3NvZHUiLCJsYl9odSIsInRvZ2dsZU11c2ljIiwiVG9nZ2xlIiwidG9nZ2xlU291bmQiLCJiZ1NvdW5kIiwiQXVkaW9DbGlwIiwic291bmRTcGluTWlzIiwic291bmRTcGluV2luIiwic291bmRCaWdXaW4iLCJzb3VuZEphY2twb3QiLCJzb3VuZEJvbnVzIiwic291bmRDbGljayIsInNvdW5kU3BpbiIsIm1lbnVTZXR0aW5nIiwiX2tleU11c2ljIiwiX2tleVNvdW5kIiwiX211c2ljU2xvdFN0YXRlIiwiX3NvdW5kU2xvdFN0YXRlIiwiX2lzRnJlZVRyaWFsIiwiX215TW9uZXlUcmlhbCIsIl9teVNlc3Npb24iLCJvbkxvYWQiLCJUb3RhbEl0ZW1SdW4iLCJ0b3RhbFN5bWJvbCIsIndpbk1vbmV5IiwiZnJlZVNwaW4iLCJpbml0Iiwic3RyaW5nIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsIkdhbWVWYXJpYWJsZXMiLCJQb2tlciIsImdldENoaXAiLCJTbWFydEZveFNESyIsIktpbUN1b25nQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsIm15U2VsZiIsInNjaGVkdWxlIiwidXBkYXRlSmFja3BvdCIsImluaXRTb3VuZCIsIm11c2ljU2F2ZSIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInNldEl0ZW0iLCJzb3VuZFNhdmUiLCJpc0NoZWNrZWQiLCJtdXNpY0lkIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicGF1c2UiLCJvbkRpc2FibGUiLCJldmVudE11c2ljIiwicmVzdW1lIiwiZXZlbnRTb3VuZCIsInBsYXlTcGluIiwicGxheVNwaW5NaXMiLCJwbGF5U3BpbldpbiIsInBsYXlCaWdXaW4iLCJwbGF5SmFja3BvdCIsInBsYXlCb251cyIsInBsYXlDbGljayIsImtleSIsImJldExldmVsIiwidmFyaWFibGVKYWNrcG90IiwiZ2V0VmFyaWFibGUiLCJqYWNrcG90IiwidmFsdWUiLCJjdXJyZW50X2xiX2phY2twb3QiLCJzcGxpdCIsImpvaW4iLCJjdXJyZW50SHUiLCJwYXJzZUZsb2F0IiwibnVtYmVyVG8iLCJ1cGRhdGVVc2VyVmFyaWFibGVTbG90IiwiZXZlbnQiLCJjaGFuZ2VkVmFycyIsImluZGV4T2YiLCJ1c2VyIiwiaXNJdE1lIiwidXBkYXRlRnJlZVNwaW4iLCJ1cGRhdGVVc2VyVmFyaWFibGUiLCJzdWJDaGlwIiwiY3VycmVudFVJIiwib25FbmFibGUiLCJtbSIsImF1ZGlvIiwicGF1c2VNdXNpYyIsInVuZGVmaW5lZCIsIk1pbmlHYW1lIiwibnVtYmVyV2l0aENvbW1hcyIsImdldE1vbmV5SW5Sb29tIiwibG9hZEltYWdlUmVzIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic2hvd0xpbmVXaW4iLCJMb2FkaW5nIiwiaGlkZSIsInNlbGYiLCJsaW5lQXJyMSIsImxpbmVBcnIyIiwibGluZUFycjMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaW5kZXgiLCJsYXN0QXJyYXkiLCJpbml0UmFuZG9tSXRlbXMiLCJwdXNoIiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsImNvbmNhdCIsInNldE51bWJlckxpbmVzIiwidG90YWxMaW5lcyIsInNldE51bWJlclN0YWtlIiwidG90YWxTdGFrZSIsInNldE1vbmV5V2luIiwidG90YWxNb25leSIsInVwZGF0ZURhdGFQaG9uZyIsInJvb21JZCIsImV2ZW50UXVheU5oYW5oIiwiYWRkTm90aWNlIiwiZ2V0U3RyaW5nIiwiY2hlY2tFbm91Z2hNb25leSIsInBhdXNlU3lzdGVtRXZlbnROb2RlIiwiYWN0aXZlIiwiYXV0b1F1YXkiLCJldmVudEF1dG9RdWF5IiwicnVuUXVheSIsImdldFRvdGFsQmV0IiwiS2ltQ3VvbmdSdW4iLCJnZXRJdGVtVHJpYWwiLCJiZXRSZXF1ZXN0IiwiS2ltQ3VvbmdSZXF1ZXN0IiwiQmV0UmVxdWVzdCIsInNldEJldCIsInNldExpbmVzQmV0Iiwic2VuZCIsInRvU1JlcXVlc3QiLCJldmVudFN0b3BRdWF5IiwicmVxdWVzdCIsIlN0b3BBdXRvUGxheVJlcXVlc3QiLCJldmVudFBob25nIiwiZGF0YSIsImdldFRvdGFsTGluZVNlbGVjdCIsImV2ZW50U2VsZWN0TGluZXMiLCJldmVudE9wZW4iLCJ0b3RhbEJldCIsInR5cGVMaW5lIiwibGlzdExpbmUiLCJpIiwiZXZlbnRRdWF5IiwiQXV0b1BsYXlSZXF1ZXN0IiwiYmV0IiwiZ2V0VG90YWxMaW5lIiwiZ2V0VG90YWxMaW5lTGUiLCJnZXRUb3RhbExpbmVDaGFuIiwic2V0TGluZUxlIiwic2V0TGluZUNoYW4iLCJzZXRMaW5lIiwiVG9hc3QiLCJzaG93VG9hc3QiLCJub2RlRXZlbnQiLCJpc1BhdXNlIiwic2V0TWF0ZXJpYWxHcmF5IiwicGF1c2VTeXN0ZW1FdmVudHMiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJldmVudEJhY2siLCJVSU1hbmdlciIsInNob3ciLCJwb3AiLCJzcmMiLCJldmVudFNldHRpbmciLCJldmVudFZpbmhEYW5oIiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImV2ZW50TGljaFN1R2lhb0RpY2giLCJIaXN0b3J5UmVxdWVzdCIsImV2ZW50QmFuZ1RodW9uZyIsImV2ZW50Q2xvc2VCYW5nVGh1b25nIiwiZ2V0RGF0YVJlc3VsdCIsImNlbCIsImNlbF9pbmRleCIsImljb24iLCJpY29ucyIsInNldEljb24iLCJsaW5lV2luIiwiZnJlZUdpZnQiLCJpc0JvbnVzIiwiaXNGcmVlIiwic2Vzc2lvbiIsImlzTm9IdSIsImlzTm9odSIsImlzVGhhbmdMb24iLCJydW5SZWVscyIsIm51bWJlckl0ZW0iLCJsaXN0SXRlbSIsInJhbmRvbSIsIm5ld0FycmF5IiwicmFuZG9tQXJyIiwicmVmb3JtYXRSZXN1bHQiLCJzaXplIiwicmVzIiwic2xpY2UiLCJydW5BY3Rpb25Xb24iLCJydW5XaW5HYW1lIiwic2V0VGltZW91dCIsImJpbmQiLCJzZXRFdmVudE1haW5MaW5lIiwiY2hpbGRyZW4iLCJtYWluTGluZSIsImlzU2hvdyIsInBvc0xpbmUiLCJvbkVmIiwic2NoZWR1bGVPbmNlIiwib2ZmRWYiLCJzaG93TWFpbkxpbmUiLCJ1bnNjaGVkdWxlIiwib2ZmaG92ZXIiLCJzcGluIiwiY29weSIsIk1hdGgiLCJwb3ciLCJjaGVja0hhc01vbmV5IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQU9DLE9BQU8sQ0FBQyxpQkFBRCxDQUF6Qjs7QUFDQSxJQUFJQyxNQUFNLEdBQVFELE9BQU8sQ0FBQyxRQUFELENBQXpCOztBQUNBLElBQUlFLElBQUksR0FBVUYsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUcsSUFBSSxHQUFVSCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJ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LElBQUksQ0FBQ3NPLEtBQUwsQ0FBVyxDQUFYLEVBQWN6QyxJQUF0RDtBQUNILEtBSlcsQ0FBWjtBQUtILEdBOWxCSTtBQStsQkxzRCxFQUFBQSxNQUFNLEVBQUUsa0JBQVU7QUFDZCxXQUFRLENBQUMsRUFBRXdCLElBQUksQ0FBQ3hCLE1BQUwsS0FBYyxLQUFLbEwsV0FBckIsQ0FBVDtBQUNILEdBam1CSTtBQWttQkxxRSxFQUFBQSxjQUFjLEVBQUUsMEJBQVc7QUFDdkIsV0FBTyxLQUFHcUksSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhLEtBQUt4TyxVQUFsQixDQUFWO0FBQ0gsR0FwbUJJO0FBcW1CTHlPLEVBQUFBLGFBQWEsRUFBRSx5QkFBVztBQUN0QixXQUFPLElBQVA7QUFDSCxHQXZtQkk7QUF3bUJMdEcsRUFBQUEsU0FBUyxFQUFFLG1CQUFVdUcsT0FBVixFQUFtQjtBQUMxQixRQUFJL0gsSUFBSSxHQUFHLElBQVg7QUFDQSxTQUFLaEksVUFBTCxDQUFnQjRKLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0EsU0FBSzVKLFVBQUwsQ0FBZ0IwSCxjQUFoQixDQUErQixTQUEvQixFQUEwQ0MsWUFBMUMsQ0FBdURwSSxFQUFFLENBQUNpQixLQUExRCxFQUFpRThDLE1BQWpFLEdBQTBFeU0sT0FBMUU7QUFDQWxCLElBQUFBLFVBQVUsQ0FBQyxZQUFVO0FBQ2pCN0csTUFBQUEsSUFBSSxDQUFDaEksVUFBTCxDQUFnQjRKLE1BQWhCLEdBQXlCLEtBQXpCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBL21CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgV2luR2FtZSAgICAgPSByZXF1aXJlKFwiS2ltQ3VvbmdXaW5HYW1lXCIpO1xyXG5sZXQgSGVscGVyICAgICAgPSByZXF1aXJlKFwiSGVscGVyXCIpO1xyXG5sZXQgcmVlbCAgICAgICAgPSByZXF1aXJlKFwiS2ltQ3VvbmdSZWVsXCIpO1xyXG5sZXQgbGluZSAgICAgICAgPSByZXF1aXJlKFwiS2ltQ3VvbmdMaW5lXCIpO1xyXG5sZXQgVXRpbHNVSSAgICAgPSByZXF1aXJlKFwiVXRpbHNVSVwiKTtcclxubGV0IFRyaWFsUmVzdWx0ID0gcmVxdWlyZShcIlRyaWFsUmVzdWx0XCIpO1xyXG5sZXQgTGFuZ3VhZ2UgICAgPSByZXF1aXJlKFwia2ltY3VvbmdMYW5ndWFnZVwiKTtcclxubGV0IExpc3RSb29tID0gY2MuRW51bSh7XHJcbiAgICBcIjFsXCIgICA6IDEsXHJcbiAgICBcIjFrXCIgICAgOiAyLFxyXG4gICAgXCIxMGtcIiAgIDogM1xyXG59KTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVlbHM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IHJlZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uUHJlZmFiICAgICAgICAgIDogY2MuUHJlZmFiLFxyXG4gICAgICAgIG5vdGljZU5vZGUgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0blF1YXkgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0blF1YXlOaGFuaCAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0blN0b3BRdWF5ICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0bkF1dG9RdWF5ICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJhbmdUaHVvbmcgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxiTnVtYmVyTGluZSAgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYk51bWJlclN0YWtlICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJNb25leVdpbiAgICAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiU2Vzc2lvbiAgICAgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBzZWxlY3RMaW5lcyAgICAgICAgIDogbGluZSxcclxuICAgICAgICBXaW5HYW1lICAgICAgICAgICAgIDogV2luR2FtZSxcclxuICAgICAgICBsaXN0TWFpbkxpbmVzICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICAvLyBlZHRDaGVhdCAgICAgICAgICAgOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIGlzQXV0byAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICBpc0Zhc3QgICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgaXNTcGluICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgIGlzRnJlZVNwaW4gICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICByZWQgICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgICBsYXN0UmVzdWx0ICAgICAgICAgIDogW10sXHJcbiAgICAgICAgYmV0U2VsZWN0ICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgcm9vbU51bWJlciAgICAgICAgICA6IDAsXHJcbiAgICAgICAgcG9zTGluZVdpbiAgICAgICAgICA6IDAsXHJcbiAgICAgICAgdG90YWxMaW5lV2luICAgICAgICA6IDAsXHJcbiAgICAgICAgX1RvdGFsQ29sdW1uICAgICAgICA6IDUsXHJcbiAgICAgICAgbGJfcGhvbmc6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiX3NvZHU6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiX2h1OiBjYy5MYWJlbCxcclxuICAgICAgICB0b2dnbGVNdXNpYzogY2MuVG9nZ2xlLFxyXG4gICAgICAgIHRvZ2dsZVNvdW5kOiBjYy5Ub2dnbGUsXHJcbiAgICAgICAgYmdTb3VuZDogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kU3Bpbk1pczogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kU3BpbldpbjogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kQmlnV2luOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRKYWNrcG90OiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRCb251czogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBzb3VuZFNwaW46IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBtZW51U2V0dGluZzogY2MuTm9kZSxcclxuICAgICAgICBfa2V5TXVzaWM6IFwibXVzaWNfa2NcIixcclxuICAgICAgICBfa2V5U291bmQ6IFwic291bmRfa2NcIixcclxuICAgICAgICBfbXVzaWNTbG90U3RhdGUgOiAwLFxyXG4gICAgICAgIF9zb3VuZFNsb3RTdGF0ZSA6IDAsXHJcbiAgICAgICAgX2lzRnJlZVRyaWFsIDogZmFsc2UsXHJcbiAgICAgICAgX215TW9uZXlUcmlhbCA6IDAsXHJcbiAgICAgICAgX215U2Vzc2lvbiA6IDAsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLl9Ub3RhbENvbHVtbiAgICAgPSA1O1xyXG4gICAgICAgIHRoaXMuVG90YWxJdGVtUnVuICAgICA9IDIwO1xyXG4gICAgICAgIHRoaXMudG90YWxTeW1ib2wgICAgICA9IDc7XHJcbiAgICAgICAgdGhpcy53aW5Nb25leSAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLmZyZWVTcGluICAgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMucm9vbU51bWJlciAgICAgICA9IExpc3RSb29tW1wiMWxcIl07XHJcbiAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5LaW1DdW9uZ0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVKYWNrcG90LCAzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoKTtcclxuICAgICAgICB0aGlzLmluaXRTb3VuZCgpO1xyXG4gICAgfSxcclxuICAgIGluaXRTb3VuZCgpIHtcclxuICAgICAgICB2YXIgbXVzaWNTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX2tleU11c2ljKTtcclxuICAgICAgICBpZiAobXVzaWNTYXZlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fbXVzaWNTbG90U3RhdGUgPSBwYXJzZUludChtdXNpY1NhdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljU2xvdFN0YXRlID0gMTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleU11c2ljLCBcIjFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc291bmRTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX2tleVNvdW5kKTtcclxuICAgICAgICBpZiAoc291bmRTYXZlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRTbG90U3RhdGUgPSBwYXJzZUludChzb3VuZFNhdmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kU2xvdFN0YXRlID0gMTtcclxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleVNvdW5kLCBcIjFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuYmdTb3VuZCAhPSBudWxsICYmICF0aGlzLnRvZ2dsZU11c2ljLmlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm11c2ljSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmdTb3VuZCwgdHJ1ZSwgMSk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMubXVzaWNJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uRGlzYWJsZSgpe1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMubXVzaWNJZCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRNdXNpYygpIHtcclxuICAgICAgICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSAgICAgICAgID0gdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQ/IDA6IDE7XHJcbiAgICAgICAgaWYgKCF0aGlzLnRvZ2dsZU11c2ljLmlzQ2hlY2tlZCl7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLm11c2ljSWQpO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMubXVzaWNJZCk7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleU11c2ljLCAgdGhpcy5fbXVzaWNTbG90U3RhdGUpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U291bmQoKSB7XHJcbiAgICAgICAgdGhpcy5fc291bmRTbG90U3RhdGUgPSB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZD8gMDogMTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5U291bmQsICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgcGxheVNwaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BpbiwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGF5U3Bpbk1pcygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluTWlzLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlTcGluV2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5XaW4sIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUJpZ1dpbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCaWdXaW4sIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUphY2twb3QoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSmFja3BvdCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGF5Qm9udXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQm9udXMsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUNsaWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZUphY2twb3QoKXtcclxuICAgICAgICBsZXQga2V5ID0gXCJraW1jdW9uZ1wiK2NjLmJldExldmVsO1xyXG4gICAgICAgIGlmKFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcclxuICAgICAgICAgICAgaWYoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlSmFja3BvdCA9IFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLmdldFZhcmlhYmxlKGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZih2YXJpYWJsZUphY2twb3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqYWNrcG90ID0gdmFyaWFibGVKYWNrcG90LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2xiX2phY2twb3QgPSB0aGlzLmxiX2h1LnN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2xiX2phY2twb3QgPSBjdXJyZW50X2xiX2phY2twb3Quc3BsaXQoXCIuXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRIdSA9IHBhcnNlRmxvYXQoY3VycmVudF9sYl9qYWNrcG90KTtcclxuICAgICAgICAgICAgICAgICAgICBVdGlscy5udW1iZXJUbyh0aGlzLmxiX2h1LCBjdXJyZW50SHUsIGphY2twb3QsIDEwMDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVVc2VyVmFyaWFibGVTbG90KGV2ZW50KXtcclxuICAgICAgICBsZXQga2V5ID0gXCJmc2tpbWN1b25nXCIrY2MuYmV0TGV2ZWw7XHJcbiAgICAgICAgaWYoZXZlbnQuY2hhbmdlZFZhcnMuaW5kZXhPZihrZXkpID49IDApe1xyXG4gICAgICAgICAgICAvLyBnZXQgZnJlZSBzcGluZSBvZiByb29tIGluIGhlcmVcclxuICAgICAgICAgICAgLy9rZXk6IFwiZnNcIiArIFwia2ltY3VvbmcxbFwiIGZyZWUgc3BpbiBvZiBiZXQgMTAwXHJcbiAgICAgICAgICAgIC8vIGtleTogXCJmc1wiICsgXCJraW1jdW9uZzFrXCIgZnJlZSBzcGluIG9mIGJldCAxMDAwXHJcbiAgICAgICAgICAgIC8vIGtleTogXCJmc1wiICsgXCJraW1jdW9uZzEwa1wiIGZyZWUgc3BpbiBvZiBiZXQgMTAwMFxyXG4gICAgICAgICAgICBpZihldmVudC51c2VyLmlzSXRNZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJlZVNwaW4gICAgPSBTbWFydEZveFNESy5LaW1DdW9uZ0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShrZXkpLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcmVlU3BpbiAgID0gZnJlZVNwaW47XHJcbiAgICAgICAgICAgICAgICB0aGlzLldpbkdhbWUudXBkYXRlRnJlZVNwaW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVVc2VyVmFyaWFibGUoc3ViQ2hpcCl7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0ZyZWVUcmlhbCAmJiBjYy5jdXJyZW50VUkgIT0gXCJcIilcclxuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5LaW1DdW9uZ0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZiktc3ViQ2hpcCk7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBtbS5hdWRpby5wYXVzZU11c2ljKCk7XHJcbiAgICAgICAgaWYgKGNjLmJldExldmVsID09IFwiY2hvaXRodVwiKXtcclxuICAgICAgICAgICAgdGhpcy5faXNGcmVlVHJpYWwgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsICAgID0gNTAwMDAwMDA7XHJcbiAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKDUwMDAwMDAwKTtcclxuICAgICAgICAgICAgdGhpcy5fbXlTZXNzaW9uICAgICAgID0gMDtcclxuICAgICAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nID0gXCIjXCIrdGhpcy5fbXlTZXNzaW9uO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLl9teU1vbmV5VHJpYWwgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9pc0ZyZWVUcmlhbCAgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gTGlzdFJvb21bY2MuYmV0TGV2ZWxdO1xyXG4gICAgICAgIGlmKHRoaXMucm9vbU51bWJlciA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFsXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IExpc3RSb29tW2NjLmJldExldmVsXTtNaW5pR2FtZVxyXG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9ICh0aGlzLnJvb21OdW1iZXIpJTQ7XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gdGhpcy5yb29tTnVtYmVyIDwgMSA/IDE6IHRoaXMucm9vbU51bWJlcjtcclxuICAgICAgICB0aGlzLmxiX3Bob25nLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XHJcbiAgICAgICAgVXRpbHNVSS5sb2FkSW1hZ2VSZXModGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdHYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBcImltYWdlcy9raW1jdW9uZy9tYWluR2FtZUJnXCIrdGhpcy5yb29tTnVtYmVyKTtcclxuICAgICAgICBVdGlsc1VJLmxvYWRJbWFnZVJlcyh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3JkZXJHYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBcImltYWdlcy9raW1jdW9uZy9ib3JkZXItcGhvbmdcIit0aGlzLnJvb21OdW1iZXIpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0TGluZXMuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLldpbkdhbWUuaW5pdCh0aGlzKTtcclxuICAgICAgICB0aGlzLmxiTW9uZXlXaW4uc3RyaW5nID0gXCIwXCI7XHJcbiAgICAgICAgdGhpcy5zaG93TGluZVdpbihmYWxzZSk7XHJcbiAgICAgICAgbW0uTG9hZGluZy5oaWRlKCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBsaW5lQXJyMSA9IFtdO1xyXG4gICAgICAgIGxldCBsaW5lQXJyMiA9IFtdO1xyXG4gICAgICAgIGxldCBsaW5lQXJyMyA9IFtdO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMucmVlbHMubWFwKGZ1bmN0aW9uKHJlZWwsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGxldCBsYXN0QXJyYXkgPSBbXTtcclxuICAgICAgICAgICAgbGFzdEFycmF5ID0gc2VsZi5pbml0UmFuZG9tSXRlbXMoc2VsZi5Ub3RhbEl0ZW1SdW4pO1xyXG5cclxuICAgICAgICAgICAgbGluZUFycjEucHVzaChsYXN0QXJyYXlbbGFzdEFycmF5Lmxlbmd0aC0xXSk7XHJcbiAgICAgICAgICAgIGxpbmVBcnIyLnB1c2gobGFzdEFycmF5W2xhc3RBcnJheS5sZW5ndGgtMl0pO1xyXG4gICAgICAgICAgICBsaW5lQXJyMy5wdXNoKGxhc3RBcnJheVtsYXN0QXJyYXkubGVuZ3RoLTNdKTtcclxuICAgICAgICAgICAgcmVlbC5pbml0KHNlbGYsIGxhc3RBcnJheSk7XHJcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgc2VsZi5sYXN0UmVzdWx0ID0gbGluZUFycjMuY29uY2F0KGxpbmVBcnIyKS5jb25jYXQobGluZUFycjEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNldE51bWJlckxpbmVzOiBmdW5jdGlvbih0b3RhbExpbmVzKSB7XHJcbiAgICAgICAgdGhpcy5sYk51bWJlckxpbmUuc3RyaW5nID0gdG90YWxMaW5lcztcclxuICAgIH0sXHJcbiAgICBzZXROdW1iZXJTdGFrZTogZnVuY3Rpb24odG90YWxTdGFrZSkge1xyXG4gICAgICAgIHRoaXMubGJOdW1iZXJTdGFrZS5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0b3RhbFN0YWtlKnRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XHJcbiAgICB9LFxyXG4gICAgc2V0TW9uZXlXaW46IGZ1bmN0aW9uKHRvdGFsTW9uZXkpIHtcclxuICAgICAgICBIZWxwZXIubnVtYmVyVG8odGhpcy5sYk1vbmV5V2luLCBwYXJzZUludCh0aGlzLmxiTW9uZXlXaW4uc3RyaW5nKSwgdG90YWxNb25leSwgMTIwMCwgdHJ1ZSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0ZyZWVUcmlhbCl7XHJcbiAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gdGhpcy5fbXlNb25leVRyaWFsICsgdGhpcy53aW5Nb25leTtcclxuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHRoaXMuX215TW9uZXlUcmlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTcGluICAgID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRGF0YVBob25nKHJvb21JZCkge1xyXG5cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIGV2ZW50UXVheU5oYW5oOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3Bpbil7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNTcGluID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzRmFzdCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0F1dG8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5BdXRvUXVheSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5TmhhbmgsIHRydWUpO1xyXG4gICAgICAgIHRoaXMuYnRuU3RvcFF1YXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmF1dG9RdWF5KCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRBdXRvUXVheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1NwaW4pe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTcGluID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlzRmFzdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNBdXRvID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuQXV0b1F1YXksIHRydWUpO1xyXG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5TmhhbmgsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmJ0blN0b3BRdWF5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hdXRvUXVheSgpO1xyXG4gICAgfSxcclxuICAgIHJ1blF1YXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5pc1NwaW4gICAgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9teU1vbmV5VHJpYWwgPSB0aGlzLl9teU1vbmV5VHJpYWwtdGhpcy5nZXRUb3RhbEJldCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA8IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fbXlNb25leVRyaWFsKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX215TW9uZXlUcmlhbCA8IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbisrO1xyXG4gICAgICAgICAgICB0aGlzLktpbUN1b25nUnVuKFRyaWFsUmVzdWx0LmdldEl0ZW1UcmlhbCgpKTtcclxuICAgICAgICAgICAgdGhpcy5mcmVlU3Bpbi0tO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlTcGluKCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTcGluICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGJldFJlcXVlc3QgPSBuZXcgS2ltQ3VvbmdSZXF1ZXN0LkJldFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93TGluZVdpbihmYWxzZSk7XHJcbiAgICAgICAgICAgIGJldFJlcXVlc3Quc2V0QmV0KHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGluZXNCZXQoYmV0UmVxdWVzdCk7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc3ViIG1vbmV5XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIC0gdGhpcy5nZXRUb3RhbEJldCgpKTtcclxuICAgICAgICAgICAgU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKGJldFJlcXVlc3QudG9TUmVxdWVzdCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTdG9wUXVheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQXV0byA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuU3RvcFF1YXkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0bkF1dG9RdWF5LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXlOaGFuaCwgZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBLaW1DdW9uZ1JlcXVlc3QuU3RvcEF1dG9QbGF5UmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRQaG9uZzogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9pc19wbGF5aW5nXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSAodGhpcy5yb29tTnVtYmVyICsgMSklNDtcclxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSB0aGlzLnJvb21OdW1iZXIgPCAxID8gMTogdGhpcy5yb29tTnVtYmVyO1xyXG4gICAgICAgIHRoaXMubGJfcGhvbmcuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy5nZXRNb25leUluUm9vbSgpKTtcclxuICAgICAgICBVdGlsc1VJLmxvYWRJbWFnZVJlcyh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ0dhbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIFwiaW1hZ2VzL2tpbWN1b25nL21haW5HYW1lQmdcIit0aGlzLnJvb21OdW1iZXIpO1xyXG4gICAgICAgIFV0aWxzVUkubG9hZEltYWdlUmVzKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvcmRlckdhbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIFwiaW1hZ2VzL2tpbWN1b25nL2JvcmRlci1waG9uZ1wiK3RoaXMucm9vbU51bWJlcik7XHJcbiAgICAgICAgdGhpcy5zZXROdW1iZXJTdGFrZSh0aGlzLnNlbGVjdExpbmVzLmdldFRvdGFsTGluZVNlbGVjdCgpKTtcclxuICAgICAgICBpZih0aGlzLnJvb21OdW1iZXIgPT0gMSl7XHJcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxbFwiO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucm9vbU51bWJlciA9PSAyKXtcclxuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFrXCI7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5yb29tTnVtYmVyID09IDMpe1xyXG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMTBrXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U2VsZWN0TGluZXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3BpbiB8fCB0aGlzLmlzQXV0byB8fCB0aGlzLmlzRmFzdCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RMaW5lcy5ldmVudE9wZW4oKTtcclxuICAgIH0sXHJcbiAgICBjaGVja0Vub3VnaE1vbmV5KCl7XHJcbiAgICAgICAgbGV0IHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMjU7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdExpbmVzLnR5cGVMaW5lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMTM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdG90YWxCZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCkgKiAxMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdExpbmUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MTsgaTwgdGhpcy5zZWxlY3RMaW5lcy5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RMaW5lcy5kYXRhW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExpbmUucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIGxpc3RMaW5lLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIDwgdG90YWxCZXQpe1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICAgIGF1dG9RdWF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluID4gMCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UXVheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA8IDEpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRvKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCAgICA9IG5ldyBLaW1DdW9uZ1JlcXVlc3QuQXV0b1BsYXlSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRCZXQodGhpcy5nZXRNb25leUluUm9vbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExpbmVzQmV0KHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBTbWFydEZveFNESy5LaW1DdW9uZ0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIC0gdGhpcy5nZXRUb3RhbEJldCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UXVheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRUb3RhbEJldCgpe1xyXG4gICAgICAgIGxldCBiZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdExpbmVzLnR5cGVMaW5lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy8gYWxsXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmUoKSAqIGJldDtcclxuICAgICAgICAgICAgY2FzZSAxOiAvLyBsZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lTGUoKSogYmV0O1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vIGNoYW5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdExpbmVzLmdldFRvdGFsTGluZUNoYW4oKSogYmV0O1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVTZWxlY3QoKSAqIGJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJldDtcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lc0JldChyZXF1ZXN0KXtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0TGluZXMudHlwZUxpbmUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRMaW5lTGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldExpbmVDaGFuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RMaW5lID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTE7IGk8IHRoaXMuc2VsZWN0TGluZXMuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TGluZXMuZGF0YVtpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RMaW5lLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRMaW5lKGxpc3RMaW5lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudFF1YXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLl9pc0ZyZWVUcmlhbCAmJiAhdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5LCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJ1blF1YXkoKTtcclxuICAgIH0sXHJcbiAgICBwYXVzZVN5c3RlbUV2ZW50Tm9kZTogZnVuY3Rpb24obm9kZUV2ZW50LCBpc1BhdXNlKSB7XHJcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSggbm9kZUV2ZW50LmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBpc1BhdXNlKTtcclxuICAgICAgICBpZiAoaXNQYXVzZSl7XHJcbiAgICAgICAgICAgIG5vZGVFdmVudC5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBub2RlRXZlbnQucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50QmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9pc19wbGF5aW5nXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlLaW1DdW9uZ0xvYmJ5XCIsIHtwb3A6IHRydWUsIHNyYzogXCJraW1jdW9uZ1wifSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTZXR0aW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm1lbnVTZXR0aW5nLmFjdGl2ZSA9ICF0aGlzLm1lbnVTZXR0aW5nLmFjdGl2ZTtcclxuICAgIH0sXHJcbiAgICBldmVudFZpbmhEYW5oOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0LkxlYWRlckJvYXJkUmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRMaWNoU3VHaWFvRGljaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5IaXN0b3J5UmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRCYW5nVGh1b25nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJhbmdUaHVvbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlQmFuZ1RodW9uZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5iYW5nVGh1b25nLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIEtpbUN1b25nUnVuOiBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICB0aGlzLnNob3dMaW5lV2luKGZhbHNlKTtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuZ2V0RGF0YVJlc3VsdChkYXRhLnJlc3VsdCk7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwocmVzdWx0Lm1hcChmdW5jdGlvbihjZWwsIGNlbF9pbmRleCl7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNlbC5tYXAoZnVuY3Rpb24oaWNvbiwgaW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5yZWVsc1tjZWxfaW5kZXhdLmljb25zW2luZGV4XS5zZXRJY29uKGljb24sIHRydWUpO1xyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMubGluZVdpbiAgICA9IGRhdGEubGluZVdpbjtcclxuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSBkYXRhLndpbk1vbmV5O1xyXG4gICAgICAgIHRoaXMuZnJlZUdpZnQgICA9IGRhdGEuZnJlZUdpZnQ7XHJcbiAgICAgICAgdGhpcy5pc0JvbnVzICAgID0gZGF0YS5pc0JvbnVzO1xyXG4gICAgICAgIHRoaXMuaXNGcmVlICAgICA9IGRhdGEuaXNGcmVlU3BpbjtcclxuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSBkYXRhLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5pc05vSHUgICAgID0gZGF0YS5pc05vaHU7XHJcbiAgICAgICAgdGhpcy5pc1RoYW5nTG9uID0gZGF0YS5pc1RoYW5nTG9uO1xyXG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGRhdGEuZnJlZVNwaW47XHJcbiAgICAgICAgdGhpcy50eXBlICAgICAgID0gZGF0YS50eXBlO1xyXG4gICAgICAgIHRoaXMucnVuUmVlbHMoKTtcclxuICAgICAgICBpZiAoIWRhdGEuaXNGcmVlU3BpbilcclxuICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnVwZGF0ZUZyZWVTcGluKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nID0gXCIjXCIrdGhpcy5fbXlTZXNzaW9uO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLnNlc3Npb247XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRSYW5kb21JdGVtczogZnVuY3Rpb24obnVtYmVySXRlbSkge1xyXG4gICAgICAgIGxldCBsaXN0SXRlbSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgbnVtYmVySXRlbTsgaSsrKXtcclxuICAgICAgICAgICAgbGlzdEl0ZW1baV0gPSB0aGlzLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdEl0ZW07XHJcbiAgICB9LFxyXG4gICAgZ2V0RGF0YVJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fVG90YWxDb2x1bW47IGkrKyl7XHJcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld0FycmF5W2klc2VsZi5fVG90YWxDb2x1bW5dLnB1c2gocmVzdWx0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLl9Ub3RhbENvbHVtbjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbUFyciA9IHRoaXMuaW5pdFJhbmRvbUl0ZW1zKHRoaXMuVG90YWxJdGVtUnVuLTYpO1xyXG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9IG5ld0FycmF5W2ldLmNvbmNhdChyYW5kb21BcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8ICB0aGlzLmxhc3RSZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3QXJyYXlbaSVzZWxmLl9Ub3RhbENvbHVtbl0ucHVzaCggdGhpcy5sYXN0UmVzdWx0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0UmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgIH0sXHJcbiAgICByZWZvcm1hdFJlc3VsdChyZXN1bHQsIHNpemUpIHtcclxuICAgICAgICBsZXQgcmVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aSA8IHJlc3VsdC5sZW5ndGg7IGkgPSBpK3NpemUpXHJcbiAgICAgICAgICAgIHJlcy5wdXNoKHJlc3VsdC5zbGljZShpLGkrc2l6ZSkpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9LFxyXG4gICAgcnVuQWN0aW9uV29uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNob3dMaW5lV2luKHRydWUpO1xyXG4gICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy53aW5Nb25leSA+IDApe1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLldpbkdhbWUucnVuV2luR2FtZSgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIDMwMCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLldpbkdhbWUucnVuV2luR2FtZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRFdmVudE1haW5MaW5lOiBmdW5jdGlvbihpc1BhdXNlKSB7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihtYWluTGluZSwgaW5kZXgpe1xyXG4gICAgICAgICAgICBpZiAoaXNQYXVzZSlcclxuICAgICAgICAgICAgICAgIG1haW5MaW5lLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBtYWluTGluZS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHNob3dMaW5lV2luOiBmdW5jdGlvbihpc1Nob3cpIHtcclxuICAgICAgICAvLyBhZGQgbW9uZXlcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGlzU2hvdyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXZlbnRNYWluTGluZShpc1Nob3cpO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsTGluZVdpbiAgID0gdGhpcy5saW5lV2luLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5wb3NMaW5lV2luICAgICA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsTGluZVdpbiA+IDApe1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saW5lV2luLm1hcChmdW5jdGlvbihwb3NMaW5lKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiS2ltQ3VvbmdNYWluTGluZVwiKS5vbkVmKCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHNlbGYubGluZVdpbi5tYXAoZnVuY3Rpb24ocG9zTGluZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5nZXRDb21wb25lbnQoXCJLaW1DdW9uZ01haW5MaW5lXCIpLm9mZkVmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2NoZWR1bGUoIHRoaXMuc2hvd01haW5MaW5lLCAxKTtcclxuICAgICAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaG93TWFpbkxpbmUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saW5lV2luICYmIHRoaXMubGluZVdpbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpbmVXaW4ubWFwKGZ1bmN0aW9uIChwb3NMaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3Bvc0xpbmVdLmdldENvbXBvbmVudChcIktpbUN1b25nTWFpbkxpbmVcIikub2ZmaG92ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0ucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd01haW5MaW5lOiBmdW5jdGlvbigpIHtcclxuICAgICAgIGlmICh0aGlzLmxpbmVXaW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bdGhpcy5saW5lV2luW3RoaXMucG9zTGluZVdpbiV0aGlzLnRvdGFsTGluZVdpbl1dICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE1haW5MaW5lcy5jaGlsZHJlblt0aGlzLmxpbmVXaW5bdGhpcy5wb3NMaW5lV2luJXRoaXMudG90YWxMaW5lV2luXV0uZ2V0Q29tcG9uZW50KFwiS2ltQ3VvbmdNYWluTGluZVwiKS5vZmZFZigpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc0xpbmVXaW4gPSAodGhpcy5wb3NMaW5lV2luKzEpJXRoaXMudG90YWxMaW5lV2luO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bdGhpcy5saW5lV2luW3RoaXMucG9zTGluZVdpbl1dLmdldENvbXBvbmVudChcIktpbUN1b25nTWFpbkxpbmVcIikub25FZigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBydW5SZWVsczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMucmVlbHMubWFwKGZ1bmN0aW9uKHJlZWwsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlZWwuc3BpbihpbmRleCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIGNvcHk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24ocmVlbCl7XHJcbiAgICAgICAgICAgIHJlZWwuaWNvbnNbcmVlbC5pY29ucy5sZW5ndGgtMV0uc2V0SWNvbihyZWVsLmljb25zWzJdLmRhdGEpO1xyXG4gICAgICAgICAgICByZWVsLmljb25zW3JlZWwuaWNvbnMubGVuZ3RoLTJdLnNldEljb24ocmVlbC5pY29uc1sxXS5kYXRhKTtcclxuICAgICAgICAgICAgcmVlbC5pY29uc1tyZWVsLmljb25zLmxlbmd0aC0zXS5zZXRJY29uKHJlZWwuaWNvbnNbMF0uZGF0YSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHJhbmRvbTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gIH5+KE1hdGgucmFuZG9tKCkqdGhpcy50b3RhbFN5bWJvbCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0TW9uZXlJblJvb206IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAxMCpNYXRoLnBvdygxMCwgdGhpcy5yb29tTnVtYmVyKTtcclxuICAgIH0sXHJcbiAgICBjaGVja0hhc01vbmV5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGROb3RpY2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubm90aWNlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm90aWNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiX25vdGlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBtZXNzYWdlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5ub3RpY2VOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEyMDApO1xyXG4gICAgfVxyXG59KTtcclxuIl19
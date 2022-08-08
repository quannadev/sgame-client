
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL1VJS2ltQ3VvbmcuanMiXSwibmFtZXMiOlsiV2luR2FtZSIsInJlcXVpcmUiLCJIZWxwZXIiLCJyZWVsIiwibGluZSIsIlV0aWxzVUkiLCJUcmlhbFJlc3VsdCIsIkxhbmd1YWdlIiwiTGlzdFJvb20iLCJjYyIsIkVudW0iLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVlbHMiLCJ0eXBlIiwiaWNvblByZWZhYiIsIlByZWZhYiIsIm5vdGljZU5vZGUiLCJOb2RlIiwiYnRuUXVheSIsImJ0blF1YXlOaGFuaCIsImJ0blN0b3BRdWF5IiwiYnRuQXV0b1F1YXkiLCJiYW5nVGh1b25nIiwibGJOdW1iZXJMaW5lIiwiTGFiZWwiLCJsYk51bWJlclN0YWtlIiwibGJNb25leVdpbiIsImxiU2Vzc2lvbiIsInNlbGVjdExpbmVzIiwibGlzdE1haW5MaW5lcyIsImlzQXV0byIsImlzRmFzdCIsImlzU3BpbiIsImlzRnJlZVNwaW4iLCJyZWQiLCJsYXN0UmVzdWx0IiwiYmV0U2VsZWN0Iiwicm9vbU51bWJlciIsInBvc0xpbmVXaW4iLCJ0b3RhbExpbmVXaW4iLCJfVG90YWxDb2x1bW4iLCJsYl9waG9uZyIsImxiX3NvZHUiLCJsYl9odSIsInRvZ2dsZU11c2ljIiwiVG9nZ2xlIiwidG9nZ2xlU291bmQiLCJiZ1NvdW5kIiwiQXVkaW9DbGlwIiwic291bmRTcGluTWlzIiwic291bmRTcGluV2luIiwic291bmRCaWdXaW4iLCJzb3VuZEphY2twb3QiLCJzb3VuZEJvbnVzIiwic291bmRDbGljayIsInNvdW5kU3BpbiIsIm1lbnVTZXR0aW5nIiwiX2tleU11c2ljIiwiX2tleVNvdW5kIiwiX211c2ljU2xvdFN0YXRlIiwiX3NvdW5kU2xvdFN0YXRlIiwiX2lzRnJlZVRyaWFsIiwiX215TW9uZXlUcmlhbCIsIl9teVNlc3Npb24iLCJvbkxvYWQiLCJUb3RhbEl0ZW1SdW4iLCJ0b3RhbFN5bWJvbCIsIndpbk1vbmV5IiwiZnJlZVNwaW4iLCJpbml0Iiwic3RyaW5nIiwiVXRpbHMiLCJhZGREb3RUb051bWJlciIsIkdhbWVWYXJpYWJsZXMiLCJQb2tlciIsImdldENoaXAiLCJTbWFydEZveFNESyIsIktpbUN1b25nQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsIm15U2VsZiIsInNjaGVkdWxlIiwidXBkYXRlSmFja3BvdCIsImluaXRTb3VuZCIsIm11c2ljU2F2ZSIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwYXJzZUludCIsInNldEl0ZW0iLCJzb3VuZFNhdmUiLCJpc0NoZWNrZWQiLCJtdXNpY0lkIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwicGF1c2UiLCJvbkRpc2FibGUiLCJldmVudE11c2ljIiwicmVzdW1lIiwiZXZlbnRTb3VuZCIsInBsYXlTcGluIiwicGxheVNwaW5NaXMiLCJwbGF5U3BpbldpbiIsInBsYXlCaWdXaW4iLCJwbGF5SmFja3BvdCIsInBsYXlCb251cyIsInBsYXlDbGljayIsImtleSIsImJldExldmVsIiwidmFyaWFibGVKYWNrcG90IiwiZ2V0VmFyaWFibGUiLCJqYWNrcG90IiwidmFsdWUiLCJjdXJyZW50X2xiX2phY2twb3QiLCJzcGxpdCIsImpvaW4iLCJjdXJyZW50SHUiLCJwYXJzZUZsb2F0IiwibnVtYmVyVG8iLCJ1cGRhdGVVc2VyVmFyaWFibGVTbG90IiwiZXZlbnQiLCJjaGFuZ2VkVmFycyIsImluZGV4T2YiLCJ1c2VyIiwiaXNJdE1lIiwidXBkYXRlRnJlZVNwaW4iLCJ1cGRhdGVVc2VyVmFyaWFibGUiLCJzdWJDaGlwIiwiY3VycmVudFVJIiwib25FbmFibGUiLCJtbSIsImF1ZGlvIiwicGF1c2VNdXNpYyIsInVuZGVmaW5lZCIsIk1pbmlHYW1lIiwibnVtYmVyV2l0aENvbW1hcyIsImdldE1vbmV5SW5Sb29tIiwibG9hZEltYWdlUmVzIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic2hvd0xpbmVXaW4iLCJMb2FkaW5nIiwiaGlkZSIsInNlbGYiLCJsaW5lQXJyMSIsImxpbmVBcnIyIiwibGluZUFycjMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaW5kZXgiLCJsYXN0QXJyYXkiLCJpbml0UmFuZG9tSXRlbXMiLCJwdXNoIiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsImNvbmNhdCIsInNldE51bWJlckxpbmVzIiwidG90YWxMaW5lcyIsInNldE51bWJlclN0YWtlIiwidG90YWxTdGFrZSIsInNldE1vbmV5V2luIiwidG90YWxNb25leSIsInVwZGF0ZURhdGFQaG9uZyIsInJvb21JZCIsImV2ZW50UXVheU5oYW5oIiwiYWRkTm90aWNlIiwiZ2V0U3RyaW5nIiwiY2hlY2tFbm91Z2hNb25leSIsInBhdXNlU3lzdGVtRXZlbnROb2RlIiwiYWN0aXZlIiwiYXV0b1F1YXkiLCJldmVudEF1dG9RdWF5IiwicnVuUXVheSIsImdldFRvdGFsQmV0IiwiS2ltQ3VvbmdSdW4iLCJnZXRJdGVtVHJpYWwiLCJiZXRSZXF1ZXN0IiwiS2ltQ3VvbmdSZXF1ZXN0IiwiQmV0UmVxdWVzdCIsInNldEJldCIsInNldExpbmVzQmV0Iiwic2VuZCIsInRvU1JlcXVlc3QiLCJldmVudFN0b3BRdWF5IiwicmVxdWVzdCIsIlN0b3BBdXRvUGxheVJlcXVlc3QiLCJldmVudFBob25nIiwiZGF0YSIsImdldFRvdGFsTGluZVNlbGVjdCIsImV2ZW50U2VsZWN0TGluZXMiLCJldmVudE9wZW4iLCJ0b3RhbEJldCIsInR5cGVMaW5lIiwibGlzdExpbmUiLCJpIiwiZXZlbnRRdWF5IiwiQXV0b1BsYXlSZXF1ZXN0IiwiYmV0IiwiZ2V0VG90YWxMaW5lIiwiZ2V0VG90YWxMaW5lTGUiLCJnZXRUb3RhbExpbmVDaGFuIiwic2V0TGluZUxlIiwic2V0TGluZUNoYW4iLCJzZXRMaW5lIiwiVG9hc3QiLCJzaG93VG9hc3QiLCJub2RlRXZlbnQiLCJpc1BhdXNlIiwic2V0TWF0ZXJpYWxHcmF5IiwicGF1c2VTeXN0ZW1FdmVudHMiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJldmVudEJhY2siLCJVSU1hbmdlciIsInNob3ciLCJwb3AiLCJzcmMiLCJldmVudFNldHRpbmciLCJldmVudFZpbmhEYW5oIiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImV2ZW50TGljaFN1R2lhb0RpY2giLCJIaXN0b3J5UmVxdWVzdCIsImV2ZW50QmFuZ1RodW9uZyIsImV2ZW50Q2xvc2VCYW5nVGh1b25nIiwiZ2V0RGF0YVJlc3VsdCIsImNlbCIsImNlbF9pbmRleCIsImljb24iLCJpY29ucyIsInNldEljb24iLCJsaW5lV2luIiwiZnJlZUdpZnQiLCJpc0JvbnVzIiwiaXNGcmVlIiwic2Vzc2lvbiIsImlzTm9IdSIsImlzTm9odSIsImlzVGhhbmdMb24iLCJydW5SZWVscyIsIm51bWJlckl0ZW0iLCJsaXN0SXRlbSIsInJhbmRvbSIsIm5ld0FycmF5IiwicmFuZG9tQXJyIiwicmVmb3JtYXRSZXN1bHQiLCJzaXplIiwicmVzIiwic2xpY2UiLCJydW5BY3Rpb25Xb24iLCJydW5XaW5HYW1lIiwic2V0VGltZW91dCIsImJpbmQiLCJzZXRFdmVudE1haW5MaW5lIiwiY2hpbGRyZW4iLCJtYWluTGluZSIsImlzU2hvdyIsInBvc0xpbmUiLCJvbkVmIiwic2NoZWR1bGVPbmNlIiwib2ZmRWYiLCJzaG93TWFpbkxpbmUiLCJ1bnNjaGVkdWxlIiwib2ZmaG92ZXIiLCJzcGluIiwiY29weSIsIk1hdGgiLCJwb3ciLCJjaGVja0hhc01vbmV5IiwibWVzc2FnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxPQUFPLEdBQU9DLE9BQU8sQ0FBQyxpQkFBRCxDQUF6Qjs7QUFDQSxJQUFJQyxNQUFNLEdBQVFELE9BQU8sQ0FBQyxRQUFELENBQXpCOztBQUNBLElBQUlFLElBQUksR0FBVUYsT0FBTyxDQUFDLGNBQUQsQ0FBekI7O0FBQ0EsSUFBSUcsSUFBSSxHQUFVSCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJSSxP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QUksQ0FBQ3NPLEtBQUwsQ0FBVyxDQUFYLEVBQWN6QyxJQUF0RDtBQUNILEtBSlcsQ0FBWjtBQUtILEdBOWxCSTtBQStsQkxzRCxFQUFBQSxNQUFNLEVBQUUsa0JBQVU7QUFDZCxXQUFRLENBQUMsRUFBRXdCLElBQUksQ0FBQ3hCLE1BQUwsS0FBYyxLQUFLbEwsV0FBckIsQ0FBVDtBQUNILEdBam1CSTtBQWttQkxxRSxFQUFBQSxjQUFjLEVBQUUsMEJBQVc7QUFDdkIsV0FBTyxLQUFHcUksSUFBSSxDQUFDQyxHQUFMLENBQVMsRUFBVCxFQUFhLEtBQUt4TyxVQUFsQixDQUFWO0FBQ0gsR0FwbUJJO0FBcW1CTHlPLEVBQUFBLGFBQWEsRUFBRSx5QkFBVztBQUN0QixXQUFPLElBQVA7QUFDSCxHQXZtQkk7QUF3bUJMdEcsRUFBQUEsU0FBUyxFQUFFLG1CQUFVdUcsT0FBVixFQUFtQjtBQUMxQixRQUFJL0gsSUFBSSxHQUFHLElBQVg7QUFDQSxTQUFLaEksVUFBTCxDQUFnQjRKLE1BQWhCLEdBQXlCLElBQXpCO0FBQ0EsU0FBSzVKLFVBQUwsQ0FBZ0IwSCxjQUFoQixDQUErQixTQUEvQixFQUEwQ0MsWUFBMUMsQ0FBdURwSSxFQUFFLENBQUNpQixLQUExRCxFQUFpRThDLE1BQWpFLEdBQTBFeU0sT0FBMUU7QUFDQWxCLElBQUFBLFVBQVUsQ0FBQyxZQUFVO0FBQ2pCN0csTUFBQUEsSUFBSSxDQUFDaEksVUFBTCxDQUFnQjRKLE1BQWhCLEdBQXlCLEtBQXpCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBL21CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgV2luR2FtZSAgICAgPSByZXF1aXJlKFwiS2ltQ3VvbmdXaW5HYW1lXCIpO1xubGV0IEhlbHBlciAgICAgID0gcmVxdWlyZShcIkhlbHBlclwiKTtcbmxldCByZWVsICAgICAgICA9IHJlcXVpcmUoXCJLaW1DdW9uZ1JlZWxcIik7XG5sZXQgbGluZSAgICAgICAgPSByZXF1aXJlKFwiS2ltQ3VvbmdMaW5lXCIpO1xubGV0IFV0aWxzVUkgICAgID0gcmVxdWlyZShcIlV0aWxzVUlcIik7XG5sZXQgVHJpYWxSZXN1bHQgPSByZXF1aXJlKFwiVHJpYWxSZXN1bHRcIik7XG5sZXQgTGFuZ3VhZ2UgICAgPSByZXF1aXJlKFwia2ltY3VvbmdMYW5ndWFnZVwiKTtcbmxldCBMaXN0Um9vbSA9IGNjLkVudW0oe1xuICAgIFwiMWxcIiAgIDogMSxcbiAgICBcIjFrXCIgICAgOiAyLFxuICAgIFwiMTBrXCIgICA6IDNcbn0pO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHJlZWxzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IHJlZWwsXG4gICAgICAgIH0sXG4gICAgICAgIGljb25QcmVmYWIgICAgICAgICAgOiBjYy5QcmVmYWIsXG4gICAgICAgIG5vdGljZU5vZGUgICAgICAgICAgICAgOiBjYy5Ob2RlLFxuICAgICAgICBidG5RdWF5ICAgICAgICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgYnRuUXVheU5oYW5oICAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIGJ0blN0b3BRdWF5ICAgICAgICAgOiBjYy5Ob2RlLFxuICAgICAgICBidG5BdXRvUXVheSAgICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgYmFuZ1RodW9uZyAgICAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIGxiTnVtYmVyTGluZSAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJOdW1iZXJTdGFrZSAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk1vbmV5V2luICAgICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiU2Vzc2lvbiAgICAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgc2VsZWN0TGluZXMgICAgICAgICA6IGxpbmUsXG4gICAgICAgIFdpbkdhbWUgICAgICAgICAgICAgOiBXaW5HYW1lLFxuICAgICAgICBsaXN0TWFpbkxpbmVzICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgLy8gZWR0Q2hlYXQgICAgICAgICAgIDogY2MuRWRpdEJveCxcbiAgICAgICAgaXNBdXRvICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICBpc0Zhc3QgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIGlzU3BpbiAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgaXNGcmVlU3BpbiAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICByZWQgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgbGFzdFJlc3VsdCAgICAgICAgICA6IFtdLFxuICAgICAgICBiZXRTZWxlY3QgICAgICAgICAgIDogMCxcbiAgICAgICAgcm9vbU51bWJlciAgICAgICAgICA6IDAsXG4gICAgICAgIHBvc0xpbmVXaW4gICAgICAgICAgOiAwLFxuICAgICAgICB0b3RhbExpbmVXaW4gICAgICAgIDogMCxcbiAgICAgICAgX1RvdGFsQ29sdW1uICAgICAgICA6IDUsXG4gICAgICAgIGxiX3Bob25nOiBjYy5MYWJlbCxcbiAgICAgICAgbGJfc29kdTogY2MuTGFiZWwsXG4gICAgICAgIGxiX2h1OiBjYy5MYWJlbCxcbiAgICAgICAgdG9nZ2xlTXVzaWM6IGNjLlRvZ2dsZSxcbiAgICAgICAgdG9nZ2xlU291bmQ6IGNjLlRvZ2dsZSxcbiAgICAgICAgYmdTb3VuZDogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzb3VuZFNwaW5NaXM6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgc291bmRTcGluV2luOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kQmlnV2luOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kSmFja3BvdDogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzb3VuZEJvbnVzOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgc291bmRTcGluOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIG1lbnVTZXR0aW5nOiBjYy5Ob2RlLFxuICAgICAgICBfa2V5TXVzaWM6IFwibXVzaWNfa2NcIixcbiAgICAgICAgX2tleVNvdW5kOiBcInNvdW5kX2tjXCIsXG4gICAgICAgIF9tdXNpY1Nsb3RTdGF0ZSA6IDAsXG4gICAgICAgIF9zb3VuZFNsb3RTdGF0ZSA6IDAsXG4gICAgICAgIF9pc0ZyZWVUcmlhbCA6IGZhbHNlLFxuICAgICAgICBfbXlNb25leVRyaWFsIDogMCxcbiAgICAgICAgX215U2Vzc2lvbiA6IDAsXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLl9Ub3RhbENvbHVtbiAgICAgPSA1O1xuICAgICAgICB0aGlzLlRvdGFsSXRlbVJ1biAgICAgPSAyMDtcbiAgICAgICAgdGhpcy50b3RhbFN5bWJvbCAgICAgID0gNztcbiAgICAgICAgdGhpcy53aW5Nb25leSAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5mcmVlU3BpbiAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMucm9vbU51bWJlciAgICAgICA9IExpc3RSb29tW1wiMWxcIl07XG4gICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUphY2twb3QsIDMpO1xuICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoKTtcbiAgICAgICAgdGhpcy5pbml0U291bmQoKTtcbiAgICB9LFxuICAgIGluaXRTb3VuZCgpIHtcbiAgICAgICAgdmFyIG11c2ljU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9rZXlNdXNpYyk7XG4gICAgICAgIGlmIChtdXNpY1NhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fbXVzaWNTbG90U3RhdGUgPSBwYXJzZUludChtdXNpY1NhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fbXVzaWNTbG90U3RhdGUgPSAxO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleU11c2ljLCBcIjFcIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc291bmRTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX2tleVNvdW5kKTtcbiAgICAgICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9IHBhcnNlSW50KHNvdW5kU2F2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9IDE7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5U291bmQsIFwiMVwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmJnU291bmQgIT0gbnVsbCAmJiAhdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQpIHtcbiAgICAgICAgICAgIHRoaXMubXVzaWNJZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ1NvdW5kLCB0cnVlLCAxKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkRpc2FibGUoKXtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5tdXNpY0lkKTtcbiAgICB9LFxuICAgIGV2ZW50TXVzaWMoKSB7XG4gICAgICAgIHRoaXMuX211c2ljU2xvdFN0YXRlICAgICAgICAgPSB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZD8gMDogMTtcbiAgICAgICAgaWYgKCF0aGlzLnRvZ2dsZU11c2ljLmlzQ2hlY2tlZCl7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5tdXNpY0lkKTtcbiAgICAgICAgfWVsc2VcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMubXVzaWNJZCk7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlNdXNpYywgIHRoaXMuX211c2ljU2xvdFN0YXRlKTtcbiAgICB9LFxuICAgIGV2ZW50U291bmQoKSB7XG4gICAgICAgIHRoaXMuX3NvdW5kU2xvdFN0YXRlID0gdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQ/IDA6IDE7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlTb3VuZCwgIHRoaXMuX3NvdW5kU2xvdFN0YXRlKTtcbiAgICB9LFxuICAgIHBsYXlTcGluKCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BpbiwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGF5U3Bpbk1pcygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5NaXMsIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxheVNwaW5XaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluV2luLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlCaWdXaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCaWdXaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxheUphY2twb3QoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRKYWNrcG90LCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlCb251cygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJvbnVzLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlDbGljaygpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZENsaWNrLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZUphY2twb3QoKXtcbiAgICAgICAgbGV0IGtleSA9IFwia2ltY3VvbmdcIitjYy5iZXRMZXZlbDtcbiAgICAgICAgaWYoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpe1xuICAgICAgICAgICAgaWYoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpe1xuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZUphY2twb3QgPSBTbWFydEZveFNESy5LaW1DdW9uZ0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShrZXkpO1xuICAgICAgICAgICAgICAgIGlmKHZhcmlhYmxlSmFja3BvdCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBqYWNrcG90ID0gdmFyaWFibGVKYWNrcG90LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9sYl9qYWNrcG90ID0gdGhpcy5sYl9odS5zdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfbGJfamFja3BvdCA9IGN1cnJlbnRfbGJfamFja3BvdC5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRIdSA9IHBhcnNlRmxvYXQoY3VycmVudF9sYl9qYWNrcG90KTtcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMubnVtYmVyVG8odGhpcy5sYl9odSwgY3VycmVudEh1LCBqYWNrcG90LCAxMDAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVXNlclZhcmlhYmxlU2xvdChldmVudCl7XG4gICAgICAgIGxldCBrZXkgPSBcImZza2ltY3VvbmdcIitjYy5iZXRMZXZlbDtcbiAgICAgICAgaWYoZXZlbnQuY2hhbmdlZFZhcnMuaW5kZXhPZihrZXkpID49IDApe1xuICAgICAgICAgICAgLy8gZ2V0IGZyZWUgc3BpbmUgb2Ygcm9vbSBpbiBoZXJlXG4gICAgICAgICAgICAvL2tleTogXCJmc1wiICsgXCJraW1jdW9uZzFsXCIgZnJlZSBzcGluIG9mIGJldCAxMDBcbiAgICAgICAgICAgIC8vIGtleTogXCJmc1wiICsgXCJraW1jdW9uZzFrXCIgZnJlZSBzcGluIG9mIGJldCAxMDAwXG4gICAgICAgICAgICAvLyBrZXk6IFwiZnNcIiArIFwia2ltY3VvbmcxMGtcIiBmcmVlIHNwaW4gb2YgYmV0IDEwMDBcbiAgICAgICAgICAgIGlmKGV2ZW50LnVzZXIuaXNJdE1lKXtcbiAgICAgICAgICAgICAgICBsZXQgZnJlZVNwaW4gICAgPSBTbWFydEZveFNESy5LaW1DdW9uZ0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShrZXkpLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGZyZWVTcGluO1xuICAgICAgICAgICAgICAgIHRoaXMuV2luR2FtZS51cGRhdGVGcmVlU3BpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVVc2VyVmFyaWFibGUoc3ViQ2hpcCl7XG4gICAgICAgIGlmICghdGhpcy5faXNGcmVlVHJpYWwgJiYgY2MuY3VycmVudFVJICE9IFwiXCIpXG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKS1zdWJDaGlwKTtcbiAgICB9LFxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIG1tLmF1ZGlvLnBhdXNlTXVzaWMoKTtcbiAgICAgICAgaWYgKGNjLmJldExldmVsID09IFwiY2hvaXRodVwiKXtcbiAgICAgICAgICAgIHRoaXMuX2lzRnJlZVRyaWFsICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9teU1vbmV5VHJpYWwgICAgPSA1MDAwMDAwMDtcbiAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKDUwMDAwMDAwKTtcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbiAgICAgICA9IDA7XG4gICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLl9teVNlc3Npb247XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2lzRnJlZVRyaWFsICA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IExpc3RSb29tW2NjLmJldExldmVsXTtcbiAgICAgICAgaWYodGhpcy5yb29tTnVtYmVyID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFsXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gTGlzdFJvb21bY2MuYmV0TGV2ZWxdO01pbmlHYW1lXG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9ICh0aGlzLnJvb21OdW1iZXIpJTQ7XG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IHRoaXMucm9vbU51bWJlciA8IDEgPyAxOiB0aGlzLnJvb21OdW1iZXI7XG4gICAgICAgIHRoaXMubGJfcGhvbmcuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICAgICAgVXRpbHNVSS5sb2FkSW1hZ2VSZXModGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdHYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBcImltYWdlcy9raW1jdW9uZy9tYWluR2FtZUJnXCIrdGhpcy5yb29tTnVtYmVyKTtcbiAgICAgICAgVXRpbHNVSS5sb2FkSW1hZ2VSZXModGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9yZGVyR2FtZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgXCJpbWFnZXMva2ltY3VvbmcvYm9yZGVyLXBob25nXCIrdGhpcy5yb29tTnVtYmVyKTtcbiAgICAgICAgdGhpcy5zZWxlY3RMaW5lcy5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLldpbkdhbWUuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5sYk1vbmV5V2luLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLnNob3dMaW5lV2luKGZhbHNlKTtcbiAgICAgICAgbW0uTG9hZGluZy5oaWRlKCk7XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgbGluZUFycjEgPSBbXTtcbiAgICAgICAgbGV0IGxpbmVBcnIyID0gW107XG4gICAgICAgIGxldCBsaW5lQXJyMyA9IFtdO1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsLCBpbmRleCkge1xuICAgICAgICAgICAgbGV0IGxhc3RBcnJheSA9IFtdO1xuICAgICAgICAgICAgbGFzdEFycmF5ID0gc2VsZi5pbml0UmFuZG9tSXRlbXMoc2VsZi5Ub3RhbEl0ZW1SdW4pO1xuXG4gICAgICAgICAgICBsaW5lQXJyMS5wdXNoKGxhc3RBcnJheVtsYXN0QXJyYXkubGVuZ3RoLTFdKTtcbiAgICAgICAgICAgIGxpbmVBcnIyLnB1c2gobGFzdEFycmF5W2xhc3RBcnJheS5sZW5ndGgtMl0pO1xuICAgICAgICAgICAgbGluZUFycjMucHVzaChsYXN0QXJyYXlbbGFzdEFycmF5Lmxlbmd0aC0zXSk7XG4gICAgICAgICAgICByZWVsLmluaXQoc2VsZiwgbGFzdEFycmF5KTtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHNlbGYubGFzdFJlc3VsdCA9IGxpbmVBcnIzLmNvbmNhdChsaW5lQXJyMikuY29uY2F0KGxpbmVBcnIxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXROdW1iZXJMaW5lczogZnVuY3Rpb24odG90YWxMaW5lcykge1xuICAgICAgICB0aGlzLmxiTnVtYmVyTGluZS5zdHJpbmcgPSB0b3RhbExpbmVzO1xuICAgIH0sXG4gICAgc2V0TnVtYmVyU3Rha2U6IGZ1bmN0aW9uKHRvdGFsU3Rha2UpIHtcbiAgICAgICAgdGhpcy5sYk51bWJlclN0YWtlLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRvdGFsU3Rha2UqdGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICB9LFxuICAgIHNldE1vbmV5V2luOiBmdW5jdGlvbih0b3RhbE1vbmV5KSB7XG4gICAgICAgIEhlbHBlci5udW1iZXJUbyh0aGlzLmxiTW9uZXlXaW4sIHBhcnNlSW50KHRoaXMubGJNb25leVdpbi5zdHJpbmcpLCB0b3RhbE1vbmV5LCAxMjAwLCB0cnVlKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gdGhpcy5fbXlNb25leVRyaWFsICsgdGhpcy53aW5Nb25leTtcbiAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9teU1vbmV5VHJpYWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTcGluICAgID0gZmFsc2U7XG4gICAgfSxcbiAgICB1cGRhdGVEYXRhUGhvbmcocm9vbUlkKSB7XG5cbiAgICB9LFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuICAgIGV2ZW50UXVheU5oYW5oOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X3RyaWFsXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3Bpbil7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1NwaW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFzdCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNBdXRvID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0bkF1dG9RdWF5LCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5TmhhbmgsIHRydWUpO1xuICAgICAgICB0aGlzLmJ0blN0b3BRdWF5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0b1F1YXkoKTtcbiAgICB9LFxuICAgIGV2ZW50QXV0b1F1YXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTcGluKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1NwaW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQXV0byA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5BdXRvUXVheSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5TmhhbmgsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5idG5TdG9wUXVheS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9RdWF5KCk7XG4gICAgfSxcbiAgICBydW5RdWF5KCkge1xuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5pc1NwaW4gICAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gdGhpcy5fbXlNb25leVRyaWFsLXRoaXMuZ2V0VG90YWxCZXQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fbXlNb25leVRyaWFsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9teU1vbmV5VHJpYWwgPCAxKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbisrO1xuICAgICAgICAgICAgdGhpcy5LaW1DdW9uZ1J1bihUcmlhbFJlc3VsdC5nZXRJdGVtVHJpYWwoKSk7XG4gICAgICAgICAgICB0aGlzLmZyZWVTcGluLS07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5wbGF5U3BpbigpO1xuICAgICAgICAgICAgdGhpcy5pc1NwaW4gICAgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGJldFJlcXVlc3QgPSBuZXcgS2ltQ3VvbmdSZXF1ZXN0LkJldFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xuICAgICAgICAgICAgYmV0UmVxdWVzdC5zZXRCZXQodGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGluZXNCZXQoYmV0UmVxdWVzdCk7XG4gICAgICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzdWIgbW9uZXlcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSAtIHRoaXMuZ2V0VG90YWxCZXQoKSk7XG4gICAgICAgICAgICBTbWFydEZveFNESy5LaW1DdW9uZ0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQoYmV0UmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBldmVudFN0b3BRdWF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0F1dG8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5TdG9wUXVheS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0bkF1dG9RdWF5LCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5TmhhbmgsIGZhbHNlKTtcblxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBLaW1DdW9uZ1JlcXVlc3QuU3RvcEF1dG9QbGF5UmVxdWVzdCgpO1xuICAgICAgICBTbWFydEZveFNESy5LaW1DdW9uZ0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xuICAgIH0sXG4gICAgZXZlbnRQaG9uZzogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X3RyaWFsXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1NwaW4gfHwgdGhpcy5pc0F1dG8gfHwgdGhpcy5pc0Zhc3Qpe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9pc19wbGF5aW5nXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSAodGhpcy5yb29tTnVtYmVyICsgMSklNDtcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gdGhpcy5yb29tTnVtYmVyIDwgMSA/IDE6IHRoaXMucm9vbU51bWJlcjtcbiAgICAgICAgdGhpcy5sYl9waG9uZy5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLmdldE1vbmV5SW5Sb29tKCkpO1xuICAgICAgICBVdGlsc1VJLmxvYWRJbWFnZVJlcyh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ0dhbWVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIFwiaW1hZ2VzL2tpbWN1b25nL21haW5HYW1lQmdcIit0aGlzLnJvb21OdW1iZXIpO1xuICAgICAgICBVdGlsc1VJLmxvYWRJbWFnZVJlcyh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3JkZXJHYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBcImltYWdlcy9raW1jdW9uZy9ib3JkZXItcGhvbmdcIit0aGlzLnJvb21OdW1iZXIpO1xuICAgICAgICB0aGlzLnNldE51bWJlclN0YWtlKHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lU2VsZWN0KCkpO1xuICAgICAgICBpZih0aGlzLnJvb21OdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMWxcIjtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5yb29tTnVtYmVyID09IDIpe1xuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFrXCI7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucm9vbU51bWJlciA9PSAzKXtcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxMGtcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoKTtcbiAgICB9LFxuICAgIGV2ZW50U2VsZWN0TGluZXM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RMaW5lcy5ldmVudE9wZW4oKTtcbiAgICB9LFxuICAgIGNoZWNrRW5vdWdoTW9uZXkoKXtcbiAgICAgICAgbGV0IHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMjU7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMTM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdG90YWxCZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCkgKiAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBsZXQgbGlzdExpbmUgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTE7IGk8IHRoaXMuc2VsZWN0TGluZXMuZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdExpbmVzLmRhdGFbaV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExpbmUucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIGxpc3RMaW5lLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIDwgdG90YWxCZXQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgYXV0b1F1YXkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA+IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRRdWF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRvKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgICAgPSBuZXcgS2ltQ3VvbmdSZXF1ZXN0LkF1dG9QbGF5UmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldEJldCh0aGlzLmdldE1vbmV5SW5Sb29tKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExpbmVzQmV0KHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIC0gdGhpcy5nZXRUb3RhbEJldCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UXVheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldFRvdGFsQmV0KCl7XG4gICAgICAgIGxldCBiZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xuICAgICAgICAgICAgY2FzZSAwOiAvLyBhbGxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmUoKSAqIGJldDtcbiAgICAgICAgICAgIGNhc2UgMTogLy8gbGVcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVMZSgpKiBiZXQ7XG4gICAgICAgICAgICBjYXNlIDI6IC8vIGNoYW5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVDaGFuKCkqIGJldDtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVTZWxlY3QoKSAqIGJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmV0O1xuICAgIH0sXG4gICAgc2V0TGluZXNCZXQocmVxdWVzdCl7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0TGluZUxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRMaW5lQ2hhbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGxldCBsaXN0TGluZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MTsgaTwgdGhpcy5zZWxlY3RMaW5lcy5kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TGluZXMuZGF0YVtpXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0TGluZS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0TGluZShsaXN0TGluZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50UXVheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCF0aGlzLl9pc0ZyZWVUcmlhbCAmJiAhdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucnVuUXVheSgpO1xuICAgIH0sXG4gICAgcGF1c2VTeXN0ZW1FdmVudE5vZGU6IGZ1bmN0aW9uKG5vZGVFdmVudCwgaXNQYXVzZSkge1xuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KCBub2RlRXZlbnQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIGlzUGF1c2UpO1xuICAgICAgICBpZiAoaXNQYXVzZSl7XG4gICAgICAgICAgICBub2RlRXZlbnQucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICBub2RlRXZlbnQucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xuICAgIH0sXG4gICAgZXZlbnRCYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgVUlNYW5nZXIuc2hvdyhcIlVJS2ltQ3VvbmdMb2JieVwiLCB7cG9wOiB0cnVlLCBzcmM6IFwia2ltY3VvbmdcIn0pO1xuICAgIH0sXG4gICAgZXZlbnRTZXR0aW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5tZW51U2V0dGluZy5hY3RpdmUgPSAhdGhpcy5tZW51U2V0dGluZy5hY3RpdmU7XG4gICAgfSxcbiAgICBldmVudFZpbmhEYW5oOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5MZWFkZXJCb2FyZFJlcXVlc3QoKTtcbiAgICAgICAgU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICB9LFxuICAgIGV2ZW50TGljaFN1R2lhb0RpY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0Lkhpc3RvcnlSZXF1ZXN0KCk7XG4gICAgICAgIFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgfSxcbiAgICBldmVudEJhbmdUaHVvbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmJhbmdUaHVvbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGV2ZW50Q2xvc2VCYW5nVGh1b25nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iYW5nVGh1b25nLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgS2ltQ3VvbmdSdW46IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICB0aGlzLnNob3dMaW5lV2luKGZhbHNlKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5nZXREYXRhUmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICAgICAgUHJvbWlzZS5hbGwocmVzdWx0Lm1hcChmdW5jdGlvbihjZWwsIGNlbF9pbmRleCl7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChjZWwubWFwKGZ1bmN0aW9uKGljb24sIGluZGV4KXtcbiAgICAgICAgICAgICAgICBzZWxmLnJlZWxzW2NlbF9pbmRleF0uaWNvbnNbaW5kZXhdLnNldEljb24oaWNvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5saW5lV2luICAgID0gZGF0YS5saW5lV2luO1xuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSBkYXRhLndpbk1vbmV5O1xuICAgICAgICB0aGlzLmZyZWVHaWZ0ICAgPSBkYXRhLmZyZWVHaWZ0O1xuICAgICAgICB0aGlzLmlzQm9udXMgICAgPSBkYXRhLmlzQm9udXM7XG4gICAgICAgIHRoaXMuaXNGcmVlICAgICA9IGRhdGEuaXNGcmVlU3BpbjtcbiAgICAgICAgdGhpcy5zZXNzaW9uICAgID0gZGF0YS5zZXNzaW9uO1xuICAgICAgICB0aGlzLmlzTm9IdSAgICAgPSBkYXRhLmlzTm9odTtcbiAgICAgICAgdGhpcy5pc1RoYW5nTG9uID0gZGF0YS5pc1RoYW5nTG9uO1xuICAgICAgICB0aGlzLmZyZWVTcGluICAgPSBkYXRhLmZyZWVTcGluO1xuICAgICAgICB0aGlzLnR5cGUgICAgICAgPSBkYXRhLnR5cGU7XG4gICAgICAgIHRoaXMucnVuUmVlbHMoKTtcbiAgICAgICAgaWYgKCFkYXRhLmlzRnJlZVNwaW4pXG4gICAgICAgICAgICB0aGlzLldpbkdhbWUudXBkYXRlRnJlZVNwaW4oKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuX215U2Vzc2lvbjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLnNlc3Npb247XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXRSYW5kb21JdGVtczogZnVuY3Rpb24obnVtYmVySXRlbSkge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBudW1iZXJJdGVtOyBpKyspe1xuICAgICAgICAgICAgbGlzdEl0ZW1baV0gPSB0aGlzLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0SXRlbTtcbiAgICB9LFxuICAgIGdldERhdGFSZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuX1RvdGFsQ29sdW1uOyBpKyspe1xuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3QXJyYXlbaSVzZWxmLl9Ub3RhbENvbHVtbl0ucHVzaChyZXN1bHRbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fVG90YWxDb2x1bW47IGkrKyl7XG4gICAgICAgICAgICBsZXQgcmFuZG9tQXJyID0gdGhpcy5pbml0UmFuZG9tSXRlbXModGhpcy5Ub3RhbEl0ZW1SdW4tNik7XG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9IG5ld0FycmF5W2ldLmNvbmNhdChyYW5kb21BcnIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgIHRoaXMubGFzdFJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3QXJyYXlbaSVzZWxmLl9Ub3RhbENvbHVtbl0ucHVzaCggdGhpcy5sYXN0UmVzdWx0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9LFxuICAgIHJlZm9ybWF0UmVzdWx0KHJlc3VsdCwgc2l6ZSkge1xuICAgICAgICBsZXQgcmVzID0gW107XG4gICAgICAgIGZvcihsZXQgaT0wO2kgPCByZXN1bHQubGVuZ3RoOyBpID0gaStzaXplKVxuICAgICAgICAgICAgcmVzLnB1c2gocmVzdWx0LnNsaWNlKGksaStzaXplKSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSxcbiAgICBydW5BY3Rpb25Xb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNob3dMaW5lV2luKHRydWUpO1xuICAgICAgIHRoaXMuV2luR2FtZS5ydW5XaW5HYW1lKCk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5LCBmYWxzZSk7XG4gICAgfSxcbiAgICByZXN1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLndpbk1vbmV5ID4gMCl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgMzAwKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0RXZlbnRNYWluTGluZTogZnVuY3Rpb24oaXNQYXVzZSkge1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG1haW5MaW5lLCBpbmRleCl7XG4gICAgICAgICAgICBpZiAoaXNQYXVzZSlcbiAgICAgICAgICAgICAgICBtYWluTGluZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtYWluTGluZS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIHNob3dMaW5lV2luOiBmdW5jdGlvbihpc1Nob3cpIHtcbiAgICAgICAgLy8gYWRkIG1vbmV5XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGlzU2hvdyl7XG4gICAgICAgICAgICB0aGlzLnNldEV2ZW50TWFpbkxpbmUoaXNTaG93KTtcbiAgICAgICAgICAgIHRoaXMudG90YWxMaW5lV2luICAgPSB0aGlzLmxpbmVXaW4ubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5wb3NMaW5lV2luICAgICA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbExpbmVXaW4gPiAwKXtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpbmVXaW4ubWFwKGZ1bmN0aW9uKHBvc0xpbmUpe1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiS2ltQ3VvbmdNYWluTGluZVwiKS5vbkVmKCk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHNlbGYubGluZVdpbi5tYXAoZnVuY3Rpb24ocG9zTGluZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiS2ltQ3VvbmdNYWluTGluZVwiKS5vZmZFZigpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2NoZWR1bGUoIHRoaXMuc2hvd01haW5MaW5lLCAxKTtcbiAgICAgICAgICAgICAgICB9LCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2hvd01haW5MaW5lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbmVXaW4gJiYgdGhpcy5saW5lV2luLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpbmVXaW4ubWFwKGZ1bmN0aW9uIChwb3NMaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5nZXRDb21wb25lbnQoXCJLaW1DdW9uZ01haW5MaW5lXCIpLm9mZmhvdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNYWluTGluZTogZnVuY3Rpb24oKSB7XG4gICAgICAgaWYgKHRoaXMubGluZVdpbi5sZW5ndGggPiAwKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bdGhpcy5saW5lV2luW3RoaXMucG9zTGluZVdpbiV0aGlzLnRvdGFsTGluZVdpbl1dICE9IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bdGhpcy5saW5lV2luW3RoaXMucG9zTGluZVdpbiV0aGlzLnRvdGFsTGluZVdpbl1dLmdldENvbXBvbmVudChcIktpbUN1b25nTWFpbkxpbmVcIikub2ZmRWYoKTtcbiAgICAgICAgICAgIHRoaXMucG9zTGluZVdpbiA9ICh0aGlzLnBvc0xpbmVXaW4rMSkldGhpcy50b3RhbExpbmVXaW47XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXS5nZXRDb21wb25lbnQoXCJLaW1DdW9uZ01haW5MaW5lXCIpLm9uRWYoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcnVuUmVlbHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24ocmVlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJlZWwuc3BpbihpbmRleCk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIGNvcHk6IGZ1bmN0aW9uKCl7XG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMucmVlbHMubWFwKGZ1bmN0aW9uKHJlZWwpe1xuICAgICAgICAgICAgcmVlbC5pY29uc1tyZWVsLmljb25zLmxlbmd0aC0xXS5zZXRJY29uKHJlZWwuaWNvbnNbMl0uZGF0YSk7XG4gICAgICAgICAgICByZWVsLmljb25zW3JlZWwuaWNvbnMubGVuZ3RoLTJdLnNldEljb24ocmVlbC5pY29uc1sxXS5kYXRhKTtcbiAgICAgICAgICAgIHJlZWwuaWNvbnNbcmVlbC5pY29ucy5sZW5ndGgtM10uc2V0SWNvbihyZWVsLmljb25zWzBdLmRhdGEpO1xuICAgICAgICB9KSk7XG4gICAgfSxcbiAgICByYW5kb206IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiAgfn4oTWF0aC5yYW5kb20oKSp0aGlzLnRvdGFsU3ltYm9sKTtcbiAgICB9LFxuICAgIGdldE1vbmV5SW5Sb29tOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIDEwKk1hdGgucG93KDEwLCB0aGlzLnJvb21OdW1iZXIpO1xuICAgIH0sXG4gICAgY2hlY2tIYXNNb25leTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgYWRkTm90aWNlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm90aWNlTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vdGljZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9ub3RpXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbWVzc2FnZTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgc2VsZi5ub3RpY2VOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9LCAxMjAwKTtcbiAgICB9XG59KTtcbiJdfQ==
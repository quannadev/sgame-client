
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/UISinbad.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69978sfarxAeYye/Zjm+Ihs', 'UISinbad');
// scripts/sinbad/UISinbad.js

"use strict";

var WinGame = require("SinbadWinGame");

var Helper = require("Helper");

var reel = require("SinbadReel");

var line = require("SinbadLine");

var UtilsUI = require("UtilsUI");

var TrialResult = require("TrialResult");

var Language = require("sinbadLanguage");

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
    bgBangThuong: cc.Node,
    btnQuay: cc.Node,
    btnQuayNhanh: cc.Node,
    btnStopQuay: cc.Node,
    btnAutoQuay: cc.Node,
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
    this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf));
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
    var key = "sinbad" + cc.betLevel;

    if (SmartFoxSDK.SinbadController.ZoneInstance.mySelf) {
      if (SmartFoxSDK.SinbadController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.SinbadController.ZoneInstance.mySelf.getVariable(key);

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
    var key = "fssinbad" + cc.betLevel;

    if (event.changedVars.indexOf(key) >= 0) {
      // get free spine of room in here
      //key: "fs" + "sinbad1l" free spin of bet 100
      // key: "fs" + "sinbad1k" free spin of bet 1000
      // key: "fs" + "sinbad10k" free spin of bet 1000
      if (event.user.isItMe) {
        var freeSpin = SmartFoxSDK.SinbadController.ZoneInstance.mySelf.getVariable(key).value;
        this.freeSpin = freeSpin;
        this.WinGame.updateFreeSpin();
      }
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    if (!this._isFreeTrial && cc.currentUI != "") this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) - subChip);
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
    this.roomNumber = this.roomNumber % 4;
    this.roomNumber = this.roomNumber < 1 ? 1 : this.roomNumber;
    this.lb_phong.string = Helper.numberWithCommas(this.getMoneyInRoom());
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
      this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf));
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
      mm.Toast.showToast(1, Language.getString("noti_not_money"));
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
      mm.Toast.showToast(1, Language.getString("noti_not_money"));
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
      if (this._myMoneyTrial < 1) mm.Toast.showToast(1, Language.getString("noti_not_money"));
      this._mySession++;
      this.SinbadRun(TrialResult.getItemTrial());
      this.freeSpin--;
    } else {
      this.playSpin();
      this.isSpin = true;
      var betRequest = new SinbadRequest.BetRequest();
      this.showLineWin(false);
      betRequest.setBet(this.getMoneyInRoom());
      this.setLinesBet(betRequest);

      if (!this.checkEnoughMoney()) {
        mm.Toast.showToast(1, Language.getString("noti_not_money"));
        return;
      }

      SmartFoxSDK.SinbadController.ZoneInstance.send(betRequest.toSRequest()); // sub money

      if (this.freeSpin < 1) this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) - this.getTotalBet());
    }
  },
  eventStopQuay: function eventStopQuay() {
    this.isFast = false;
    this.isAuto = false;
    this.btnStopQuay.active = false;
    this.pauseSystemEventNode(this.btnAutoQuay, false);
    this.pauseSystemEventNode(this.btnQuayNhanh, false);
    var request = new SinbadRequest.StopAutoPlayRequest();
    SmartFoxSDK.SinbadController.ZoneInstance.send(request.toSRequest());
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
    UtilsUI.loadImageRes(this.node.getChildByName("bgGame").getComponent(cc.Sprite), "images/sinbad/mainGameBg" + this.roomNumber);
    UtilsUI.loadImageRes(this.node.getChildByName("borderGame").getComponent(cc.Sprite), "images/sinbad/border-phong" + this.roomNumber);
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

    if (GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) < totalBet) {
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
          var request = new SinbadRequest.AutoPlayRequest();
          request.setBet(this.getMoneyInRoom());
          this.setLinesBet(request);

          if (!this.checkEnoughMoney()) {
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
          }

          SmartFoxSDK.SinbadController.ZoneInstance.send(request.toSRequest());
          this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.SinbadController.ZoneInstance.mySelf) - this.getTotalBet());
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

    UIManger.show("UISinbadLobby", {
      pop: true,
      src: "sinbad"
    });
  },
  eventSetting: function eventSetting() {
    this.menuSetting.active = !this.menuSetting.active;
  },
  eventVinhDanh: function eventVinhDanh() {
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.SinbadController.ZoneInstance.send(request.toSRequest());
  },
  eventLichSuGiaoDich: function eventLichSuGiaoDich() {
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.SinbadController.ZoneInstance.send(request.toSRequest());
  },
  eventBangThuong: function eventBangThuong() {
    this.bgBangThuong.active = true;
  },
  eventCloseBangThuong: function eventCloseBangThuong() {
    this.bgBangThuong.active = false;
  },
  SinbadRun: function SinbadRun(data) {
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
          self.listMainLines.children[posLine].getComponent("SinbadMainLine").onEf();
        }));
        this.scheduleOnce(function () {
          Promise.all(self.lineWin.map(function (posLine) {
            self.listMainLines.children[posLine].getComponent("SinbadMainLine").offEf();
          }));
          self.schedule(this.showMainLine, 1);
        }, 2);
      }
    } else {
      this.unschedule(this.showMainLine);

      if (this.lineWin && this.lineWin.length > 0) {
        Promise.all(this.lineWin.map(function (posLine) {
          self.listMainLines.children[posLine].getComponent("SinbadMainLine").offhover();
          self.listMainLines.children[posLine].pauseSystemEvents(true);
        }));
      }
    }
  },
  showMainLine: function showMainLine() {
    if (this.lineWin.length > 0) {
      if (this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]] != undefined) this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]].getComponent("SinbadMainLine").offEf();
      this.posLineWin = (this.posLineWin + 1) % this.totalLineWin;
      if (this.listMainLines.children[this.lineWin[this.posLineWin]] != undefined) this.listMainLines.children[this.lineWin[this.posLineWin]].getComponent("SinbadMainLine").onEf();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9VSVNpbmJhZC5qcyJdLCJuYW1lcyI6WyJXaW5HYW1lIiwicmVxdWlyZSIsIkhlbHBlciIsInJlZWwiLCJsaW5lIiwiVXRpbHNVSSIsIlRyaWFsUmVzdWx0IiwiTGFuZ3VhZ2UiLCJMaXN0Um9vbSIsImNjIiwiRW51bSIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyZWVscyIsInR5cGUiLCJpY29uUHJlZmFiIiwiUHJlZmFiIiwibm90aWNlTm9kZSIsIk5vZGUiLCJiZ0JhbmdUaHVvbmciLCJidG5RdWF5IiwiYnRuUXVheU5oYW5oIiwiYnRuU3RvcFF1YXkiLCJidG5BdXRvUXVheSIsImxiTnVtYmVyTGluZSIsIkxhYmVsIiwibGJOdW1iZXJTdGFrZSIsImxiTW9uZXlXaW4iLCJsYlNlc3Npb24iLCJzZWxlY3RMaW5lcyIsImxpc3RNYWluTGluZXMiLCJpc0F1dG8iLCJpc0Zhc3QiLCJpc1NwaW4iLCJpc0ZyZWVTcGluIiwicmVkIiwibGFzdFJlc3VsdCIsImJldFNlbGVjdCIsInJvb21OdW1iZXIiLCJwb3NMaW5lV2luIiwidG90YWxMaW5lV2luIiwiX1RvdGFsQ29sdW1uIiwibGJfcGhvbmciLCJsYl9zb2R1IiwibGJfaHUiLCJ0b2dnbGVNdXNpYyIsIlRvZ2dsZSIsInRvZ2dsZVNvdW5kIiwiYmdTb3VuZCIsIkF1ZGlvQ2xpcCIsInNvdW5kU3Bpbk1pcyIsInNvdW5kU3BpbldpbiIsInNvdW5kQmlnV2luIiwic291bmRKYWNrcG90Iiwic291bmRCb251cyIsInNvdW5kQ2xpY2siLCJzb3VuZFNwaW4iLCJtZW51U2V0dGluZyIsIl9rZXlNdXNpYyIsIl9rZXlTb3VuZCIsIl9tdXNpY1Nsb3RTdGF0ZSIsIl9zb3VuZFNsb3RTdGF0ZSIsIl9pc0ZyZWVUcmlhbCIsIl9teU1vbmV5VHJpYWwiLCJfbXlTZXNzaW9uIiwib25Mb2FkIiwiVG90YWxJdGVtUnVuIiwidG90YWxTeW1ib2wiLCJ3aW5Nb25leSIsImZyZWVTcGluIiwiaW5pdCIsInN0cmluZyIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJHYW1lVmFyaWFibGVzIiwiUG9rZXIiLCJnZXRDaGlwIiwiU21hcnRGb3hTREsiLCJTaW5iYWRDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwic2NoZWR1bGUiLCJ1cGRhdGVKYWNrcG90IiwiaW5pdFNvdW5kIiwibXVzaWNTYXZlIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50Iiwic2V0SXRlbSIsInNvdW5kU2F2ZSIsImlzQ2hlY2tlZCIsIm11c2ljSWQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJwYXVzZSIsIm9uRGlzYWJsZSIsImV2ZW50TXVzaWMiLCJyZXN1bWUiLCJldmVudFNvdW5kIiwicGxheVNwaW4iLCJwbGF5U3Bpbk1pcyIsInBsYXlTcGluV2luIiwicGxheUJpZ1dpbiIsInBsYXlKYWNrcG90IiwicGxheUJvbnVzIiwicGxheUNsaWNrIiwia2V5IiwiYmV0TGV2ZWwiLCJ2YXJpYWJsZUphY2twb3QiLCJnZXRWYXJpYWJsZSIsImphY2twb3QiLCJ2YWx1ZSIsImN1cnJlbnRfbGJfamFja3BvdCIsInNwbGl0Iiwiam9pbiIsImN1cnJlbnRIdSIsInBhcnNlRmxvYXQiLCJudW1iZXJUbyIsInVwZGF0ZVVzZXJWYXJpYWJsZVNsb3QiLCJldmVudCIsImNoYW5nZWRWYXJzIiwiaW5kZXhPZiIsInVzZXIiLCJpc0l0TWUiLCJ1cGRhdGVGcmVlU3BpbiIsInVwZGF0ZVVzZXJWYXJpYWJsZSIsInN1YkNoaXAiLCJjdXJyZW50VUkiLCJvbkVuYWJsZSIsIm1tIiwiYXVkaW8iLCJwYXVzZU11c2ljIiwidW5kZWZpbmVkIiwibnVtYmVyV2l0aENvbW1hcyIsImdldE1vbmV5SW5Sb29tIiwic2hvd0xpbmVXaW4iLCJMb2FkaW5nIiwiaGlkZSIsInNlbGYiLCJsaW5lQXJyMSIsImxpbmVBcnIyIiwibGluZUFycjMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaW5kZXgiLCJsYXN0QXJyYXkiLCJpbml0UmFuZG9tSXRlbXMiLCJwdXNoIiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsImNvbmNhdCIsInNldE51bWJlckxpbmVzIiwidG90YWxMaW5lcyIsInNldE51bWJlclN0YWtlIiwidG90YWxTdGFrZSIsInNldE1vbmV5V2luIiwidG90YWxNb25leSIsInVwZGF0ZURhdGFQaG9uZyIsInJvb21JZCIsImV2ZW50UXVheU5oYW5oIiwiYWRkTm90aWNlIiwiZ2V0U3RyaW5nIiwiY2hlY2tFbm91Z2hNb25leSIsIlRvYXN0Iiwic2hvd1RvYXN0IiwicGF1c2VTeXN0ZW1FdmVudE5vZGUiLCJhY3RpdmUiLCJhdXRvUXVheSIsImV2ZW50QXV0b1F1YXkiLCJydW5RdWF5IiwiZ2V0VG90YWxCZXQiLCJTaW5iYWRSdW4iLCJnZXRJdGVtVHJpYWwiLCJiZXRSZXF1ZXN0IiwiU2luYmFkUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJzZXRCZXQiLCJzZXRMaW5lc0JldCIsInNlbmQiLCJ0b1NSZXF1ZXN0IiwiZXZlbnRTdG9wUXVheSIsInJlcXVlc3QiLCJTdG9wQXV0b1BsYXlSZXF1ZXN0IiwiZXZlbnRQaG9uZyIsImRhdGEiLCJsb2FkSW1hZ2VSZXMiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJnZXRUb3RhbExpbmVTZWxlY3QiLCJldmVudFNlbGVjdExpbmVzIiwiZXZlbnRPcGVuIiwidG90YWxCZXQiLCJ0eXBlTGluZSIsImxpc3RMaW5lIiwiaSIsImV2ZW50UXVheSIsIkF1dG9QbGF5UmVxdWVzdCIsImJldCIsImdldFRvdGFsTGluZSIsImdldFRvdGFsTGluZUxlIiwiZ2V0VG90YWxMaW5lQ2hhbiIsInNldExpbmVMZSIsInNldExpbmVDaGFuIiwic2V0TGluZSIsIm5vZGVFdmVudCIsImlzUGF1c2UiLCJzZXRNYXRlcmlhbEdyYXkiLCJwYXVzZVN5c3RlbUV2ZW50cyIsInJlc3VtZVN5c3RlbUV2ZW50cyIsImV2ZW50QmFjayIsIlVJTWFuZ2VyIiwic2hvdyIsInBvcCIsInNyYyIsImV2ZW50U2V0dGluZyIsImV2ZW50VmluaERhbmgiLCJDYXNpbm9SZXF1ZXN0IiwiTGVhZGVyQm9hcmRSZXF1ZXN0IiwiZXZlbnRMaWNoU3VHaWFvRGljaCIsIkhpc3RvcnlSZXF1ZXN0IiwiZXZlbnRCYW5nVGh1b25nIiwiZXZlbnRDbG9zZUJhbmdUaHVvbmciLCJnZXREYXRhUmVzdWx0IiwiY2VsIiwiY2VsX2luZGV4IiwiaWNvbiIsImljb25zIiwic2V0SWNvbiIsImxpbmVXaW4iLCJmcmVlR2lmdCIsImlzQm9udXMiLCJpc0ZyZWUiLCJzZXNzaW9uIiwiaXNOb0h1IiwiaXNOb2h1IiwiaXNUaGFuZ0xvbiIsInJ1blJlZWxzIiwibnVtYmVySXRlbSIsImxpc3RJdGVtIiwicmFuZG9tIiwibmV3QXJyYXkiLCJyYW5kb21BcnIiLCJyZWZvcm1hdFJlc3VsdCIsInNpemUiLCJyZXMiLCJzbGljZSIsInJ1bkFjdGlvbldvbiIsInJ1bldpbkdhbWUiLCJzZXRUaW1lb3V0IiwiYmluZCIsInNldEV2ZW50TWFpbkxpbmUiLCJjaGlsZHJlbiIsIm1haW5MaW5lIiwiaXNTaG93IiwicG9zTGluZSIsIm9uRWYiLCJzY2hlZHVsZU9uY2UiLCJvZmZFZiIsInNob3dNYWluTGluZSIsInVuc2NoZWR1bGUiLCJvZmZob3ZlciIsInNwaW4iLCJjb3B5IiwiTWF0aCIsInBvdyIsImNoZWNrSGFzTW9uZXkiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBT0MsT0FBTyxDQUFDLGVBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFRRCxPQUFPLENBQUMsUUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxJQUFJLEdBQVVGLE9BQU8sQ0FBQyxZQUFELENBQXpCOztBQUNBLElBQUlHLElBQUksR0FBVUgsT0FBTyxDQUFDLFlBQUQsQ0FBekI7O0FBQ0EsSUFBSUksT0FBTyxHQUFPSixPQUFPLENBQUMs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QUFjLEtBQUtqTCxXQUFyQixDQUFUO0FBQ0gsR0EvbEJJO0FBZ21CTG9FLEVBQUFBLGNBQWMsRUFBRSwwQkFBVztBQUN2QixXQUFPLEtBQUdxSSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxFQUFULEVBQWEsS0FBS3ZPLFVBQWxCLENBQVY7QUFDSCxHQWxtQkk7QUFtbUJMd08sRUFBQUEsYUFBYSxFQUFFLHlCQUFXO0FBQ3RCLFdBQU8sSUFBUDtBQUNILEdBcm1CSTtBQXNtQkwzRyxFQUFBQSxTQUFTLEVBQUUsbUJBQVU0RyxPQUFWLEVBQW1CO0FBQzFCLFFBQUlwSSxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQUsxSCxVQUFMLENBQWdCd0osTUFBaEIsR0FBeUIsSUFBekI7QUFDQSxTQUFLeEosVUFBTCxDQUFnQjZLLGNBQWhCLENBQStCLFNBQS9CLEVBQTBDQyxZQUExQyxDQUF1RHZMLEVBQUUsQ0FBQ2lCLEtBQTFELEVBQWlFOEMsTUFBakUsR0FBMEV3TSxPQUExRTtBQUNBbEIsSUFBQUEsVUFBVSxDQUFDLFlBQVU7QUFDakJsSCxNQUFBQSxJQUFJLENBQUMxSCxVQUFMLENBQWdCd0osTUFBaEIsR0FBeUIsS0FBekI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUE3bUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBXaW5HYW1lICAgICA9IHJlcXVpcmUoXCJTaW5iYWRXaW5HYW1lXCIpO1xubGV0IEhlbHBlciAgICAgID0gcmVxdWlyZShcIkhlbHBlclwiKTtcbmxldCByZWVsICAgICAgICA9IHJlcXVpcmUoXCJTaW5iYWRSZWVsXCIpO1xubGV0IGxpbmUgICAgICAgID0gcmVxdWlyZShcIlNpbmJhZExpbmVcIik7XG5sZXQgVXRpbHNVSSAgICAgPSByZXF1aXJlKFwiVXRpbHNVSVwiKTtcbmxldCBUcmlhbFJlc3VsdCA9IHJlcXVpcmUoXCJUcmlhbFJlc3VsdFwiKTtcbmxldCBMYW5ndWFnZSAgICA9IHJlcXVpcmUoXCJzaW5iYWRMYW5ndWFnZVwiKTtcbmxldCBMaXN0Um9vbSA9IGNjLkVudW0oe1xuICAgIFwiMWxcIiAgIDogMSxcbiAgICBcIjFrXCIgICAgOiAyLFxuICAgIFwiMTBrXCIgICA6IDNcbn0pO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHJlZWxzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IHJlZWwsXG4gICAgICAgIH0sXG4gICAgICAgIGljb25QcmVmYWIgICAgICAgICAgOiBjYy5QcmVmYWIsXG4gICAgICAgIG5vdGljZU5vZGUgICAgICAgICAgICAgOiBjYy5Ob2RlLFxuICAgICAgICBiZ0JhbmdUaHVvbmcgICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgYnRuUXVheSAgICAgICAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIGJ0blF1YXlOaGFuaCAgICAgICAgOiBjYy5Ob2RlLFxuICAgICAgICBidG5TdG9wUXVheSAgICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgYnRuQXV0b1F1YXkgICAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIGxiTnVtYmVyTGluZSAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJOdW1iZXJTdGFrZSAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk1vbmV5V2luICAgICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiU2Vzc2lvbiAgICAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgc2VsZWN0TGluZXMgICAgICAgICA6IGxpbmUsXG4gICAgICAgIFdpbkdhbWUgICAgICAgICAgICAgOiBXaW5HYW1lLFxuICAgICAgICBsaXN0TWFpbkxpbmVzICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgLy8gZWR0Q2hlYXQgICAgICAgICAgIDogY2MuRWRpdEJveCxcbiAgICAgICAgaXNBdXRvICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICBpc0Zhc3QgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIGlzU3BpbiAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgaXNGcmVlU3BpbiAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICByZWQgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgbGFzdFJlc3VsdCAgICAgICAgICA6IFtdLFxuICAgICAgICBiZXRTZWxlY3QgICAgICAgICAgIDogMCxcbiAgICAgICAgcm9vbU51bWJlciAgICAgICAgICA6IDAsXG4gICAgICAgIHBvc0xpbmVXaW4gICAgICAgICAgOiAwLFxuICAgICAgICB0b3RhbExpbmVXaW4gICAgICAgIDogMCxcbiAgICAgICAgX1RvdGFsQ29sdW1uICAgICAgICA6IDUsXG4gICAgICAgIGxiX3Bob25nOiBjYy5MYWJlbCxcbiAgICAgICAgbGJfc29kdTogY2MuTGFiZWwsXG4gICAgICAgIGxiX2h1OiBjYy5MYWJlbCxcbiAgICAgICAgdG9nZ2xlTXVzaWM6IGNjLlRvZ2dsZSxcbiAgICAgICAgdG9nZ2xlU291bmQ6IGNjLlRvZ2dsZSxcbiAgICAgICAgYmdTb3VuZDogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzb3VuZFNwaW5NaXM6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgc291bmRTcGluV2luOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kQmlnV2luOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kSmFja3BvdDogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzb3VuZEJvbnVzOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgc291bmRTcGluOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIG1lbnVTZXR0aW5nOiBjYy5Ob2RlLFxuICAgICAgICBfa2V5TXVzaWM6IFwibXVzaWNfa2NcIixcbiAgICAgICAgX2tleVNvdW5kOiBcInNvdW5kX2tjXCIsXG4gICAgICAgIF9tdXNpY1Nsb3RTdGF0ZSA6IDAsXG4gICAgICAgIF9zb3VuZFNsb3RTdGF0ZSA6IDAsXG4gICAgICAgIF9pc0ZyZWVUcmlhbCA6IGZhbHNlLFxuICAgICAgICBfbXlNb25leVRyaWFsIDogMCxcbiAgICAgICAgX215U2Vzc2lvbiA6IDAsXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLl9Ub3RhbENvbHVtbiAgICAgPSA1O1xuICAgICAgICB0aGlzLlRvdGFsSXRlbVJ1biAgICAgPSAyMDtcbiAgICAgICAgdGhpcy50b3RhbFN5bWJvbCAgICAgID0gNztcbiAgICAgICAgdGhpcy53aW5Nb25leSAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5mcmVlU3BpbiAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMucm9vbU51bWJlciAgICAgICA9IExpc3RSb29tW1wiMWxcIl07XG4gICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVKYWNrcG90LCAzKTtcbiAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KCk7XG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKCk7XG4gICAgfSxcbiAgICBpbml0U291bmQoKSB7XG4gICAgICAgIHZhciBtdXNpY1NhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fa2V5TXVzaWMpO1xuICAgICAgICBpZiAobXVzaWNTYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX211c2ljU2xvdFN0YXRlID0gcGFyc2VJbnQobXVzaWNTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX211c2ljU2xvdFN0YXRlID0gMTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlNdXNpYywgXCIxXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNvdW5kU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9rZXlTb3VuZCk7XG4gICAgICAgIGlmIChzb3VuZFNhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc291bmRTbG90U3RhdGUgPSBwYXJzZUludChzb3VuZFNhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc291bmRTbG90U3RhdGUgPSAxO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleVNvdW5kLCBcIjFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5iZ1NvdW5kICE9IG51bGwgJiYgIXRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmdTb3VuZCwgdHJ1ZSwgMSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5tdXNpY0lkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25EaXNhYmxlKCl7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMubXVzaWNJZCk7XG4gICAgfSxcbiAgICBldmVudE11c2ljKCkge1xuICAgICAgICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSAgICAgICAgID0gdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQ/IDA6IDE7XG4gICAgICAgIGlmICghdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQpe1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMubXVzaWNJZCk7XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5TXVzaWMsICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSk7XG4gICAgfSxcbiAgICBldmVudFNvdW5kKCkge1xuICAgICAgICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9IHRoaXMudG9nZ2xlU291bmQuaXNDaGVja2VkPyAwOiAxO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5U291bmQsICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSk7XG4gICAgfSxcbiAgICBwbGF5U3BpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxheVNwaW5NaXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluTWlzLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlTcGluV2luKCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BpbldpbiwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGF5QmlnV2luKCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmlnV2luLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlKYWNrcG90KCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSmFja3BvdCwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGF5Qm9udXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCb251cywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGF5Q2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVKYWNrcG90KCl7XG4gICAgICAgIGxldCBrZXkgPSBcInNpbmJhZFwiK2NjLmJldExldmVsO1xuICAgICAgICBpZihTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpe1xuICAgICAgICAgICAgaWYoU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGVKYWNrcG90ID0gU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLmdldFZhcmlhYmxlKGtleSk7XG4gICAgICAgICAgICAgICAgaWYodmFyaWFibGVKYWNrcG90KXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGphY2twb3QgPSB2YXJpYWJsZUphY2twb3QudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2xiX2phY2twb3QgPSB0aGlzLmxiX2h1LnN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9sYl9qYWNrcG90ID0gY3VycmVudF9sYl9qYWNrcG90LnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEh1ID0gcGFyc2VGbG9hdChjdXJyZW50X2xiX2phY2twb3QpO1xuICAgICAgICAgICAgICAgICAgICBVdGlscy5udW1iZXJUbyh0aGlzLmxiX2h1LCBjdXJyZW50SHUsIGphY2twb3QsIDEwMDAsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVVc2VyVmFyaWFibGVTbG90KGV2ZW50KXtcbiAgICAgICAgbGV0IGtleSA9IFwiZnNzaW5iYWRcIitjYy5iZXRMZXZlbDtcbiAgICAgICAgaWYoZXZlbnQuY2hhbmdlZFZhcnMuaW5kZXhPZihrZXkpID49IDApe1xuICAgICAgICAgICAgLy8gZ2V0IGZyZWUgc3BpbmUgb2Ygcm9vbSBpbiBoZXJlXG4gICAgICAgICAgICAvL2tleTogXCJmc1wiICsgXCJzaW5iYWQxbFwiIGZyZWUgc3BpbiBvZiBiZXQgMTAwXG4gICAgICAgICAgICAvLyBrZXk6IFwiZnNcIiArIFwic2luYmFkMWtcIiBmcmVlIHNwaW4gb2YgYmV0IDEwMDBcbiAgICAgICAgICAgIC8vIGtleTogXCJmc1wiICsgXCJzaW5iYWQxMGtcIiBmcmVlIHNwaW4gb2YgYmV0IDEwMDBcbiAgICAgICAgICAgIGlmKGV2ZW50LnVzZXIuaXNJdE1lKXtcbiAgICAgICAgICAgICAgICBsZXQgZnJlZVNwaW4gICAgPSBTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYuZ2V0VmFyaWFibGUoa2V5KS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVTcGluICAgPSBmcmVlU3BpbjtcbiAgICAgICAgICAgICAgICB0aGlzLldpbkdhbWUudXBkYXRlRnJlZVNwaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVXNlclZhcmlhYmxlKHN1YkNoaXApe1xuICAgICAgICBpZiAoIXRoaXMuX2lzRnJlZVRyaWFsICYmIGNjLmN1cnJlbnRVSSAhPSBcIlwiKVxuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpLXN1YkNoaXApO1xuICAgIH0sXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgbW0uYXVkaW8ucGF1c2VNdXNpYygpO1xuICAgICAgICBpZiAoY2MuYmV0TGV2ZWwgPT0gXCJjaG9pdGh1XCIpe1xuICAgICAgICAgICAgdGhpcy5faXNGcmVlVHJpYWwgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX215TW9uZXlUcmlhbCAgICA9IDUwMDAwMDAwO1xuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoNTAwMDAwMDApO1xuICAgICAgICAgICAgdGhpcy5fbXlTZXNzaW9uICAgICAgID0gMDtcbiAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuX215U2Vzc2lvbjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLl9teU1vbmV5VHJpYWwgPSAwO1xuICAgICAgICAgICAgdGhpcy5faXNGcmVlVHJpYWwgID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gTGlzdFJvb21bY2MuYmV0TGV2ZWxdO1xuICAgICAgICBpZih0aGlzLnJvb21OdW1iZXIgPT09IHVuZGVmaW5lZCl7XG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMWxcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSBMaXN0Um9vbVtjYy5iZXRMZXZlbF07XG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9ICh0aGlzLnJvb21OdW1iZXIpJTQ7XG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IHRoaXMucm9vbU51bWJlciA8IDEgPyAxOiB0aGlzLnJvb21OdW1iZXI7XG4gICAgICAgIHRoaXMubGJfcGhvbmcuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICAgICAgdGhpcy5zZWxlY3RMaW5lcy5pbml0KHRoaXMpO1xuICAgICAgICB0aGlzLldpbkdhbWUuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5sYk1vbmV5V2luLnN0cmluZyA9IFwiMFwiO1xuICAgICAgICB0aGlzLnNob3dMaW5lV2luKGZhbHNlKTtcbiAgICAgICAgbW0uTG9hZGluZy5oaWRlKCk7XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgbGluZUFycjEgPSBbXTtcbiAgICAgICAgbGV0IGxpbmVBcnIyID0gW107XG4gICAgICAgIGxldCBsaW5lQXJyMyA9IFtdO1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsLCBpbmRleCkge1xuICAgICAgICAgICAgbGV0IGxhc3RBcnJheSA9IFtdO1xuICAgICAgICAgICAgbGFzdEFycmF5ID0gc2VsZi5pbml0UmFuZG9tSXRlbXMoc2VsZi5Ub3RhbEl0ZW1SdW4pO1xuXG4gICAgICAgICAgICBsaW5lQXJyMS5wdXNoKGxhc3RBcnJheVtsYXN0QXJyYXkubGVuZ3RoLTFdKTtcbiAgICAgICAgICAgIGxpbmVBcnIyLnB1c2gobGFzdEFycmF5W2xhc3RBcnJheS5sZW5ndGgtMl0pO1xuICAgICAgICAgICAgbGluZUFycjMucHVzaChsYXN0QXJyYXlbbGFzdEFycmF5Lmxlbmd0aC0zXSk7XG4gICAgICAgICAgICByZWVsLmluaXQoc2VsZiwgbGFzdEFycmF5KTtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHNlbGYubGFzdFJlc3VsdCA9IGxpbmVBcnIzLmNvbmNhdChsaW5lQXJyMikuY29uY2F0KGxpbmVBcnIxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXROdW1iZXJMaW5lczogZnVuY3Rpb24odG90YWxMaW5lcykge1xuICAgICAgICB0aGlzLmxiTnVtYmVyTGluZS5zdHJpbmcgPSB0b3RhbExpbmVzO1xuICAgIH0sXG4gICAgc2V0TnVtYmVyU3Rha2U6IGZ1bmN0aW9uKHRvdGFsU3Rha2UpIHtcbiAgICAgICAgdGhpcy5sYk51bWJlclN0YWtlLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRvdGFsU3Rha2UqdGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICB9LFxuICAgIHNldE1vbmV5V2luOiBmdW5jdGlvbih0b3RhbE1vbmV5KSB7XG4gICAgICAgIEhlbHBlci5udW1iZXJUbyh0aGlzLmxiTW9uZXlXaW4sIHBhcnNlSW50KHRoaXMubGJNb25leVdpbi5zdHJpbmcpLCB0b3RhbE1vbmV5LCAxMjAwLCB0cnVlKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlNpbmJhZENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuX215TW9uZXlUcmlhbCA9IHRoaXMuX215TW9uZXlUcmlhbCArIHRoaXMud2luTW9uZXk7XG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fbXlNb25leVRyaWFsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU3BpbiAgICA9IGZhbHNlO1xuICAgIH0sXG4gICAgdXBkYXRlRGF0YVBob25nKHJvb21JZCkge1xuXG4gICAgfSxcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcbiAgICBldmVudFF1YXlOaGFuaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTcGluKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmlzU3BpbiA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYXN0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0F1dG8gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuQXV0b1F1YXksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXlOaGFuaCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuYnRuU3RvcFF1YXkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRvUXVheSgpO1xuICAgIH0sXG4gICAgZXZlbnRBdXRvUXVheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTcGluKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1NwaW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQXV0byA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5BdXRvUXVheSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5TmhhbmgsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5idG5TdG9wUXVheS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9RdWF5KCk7XG4gICAgfSxcbiAgICBydW5RdWF5KCkge1xuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5pc1NwaW4gICAgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gdGhpcy5fbXlNb25leVRyaWFsLXRoaXMuZ2V0VG90YWxCZXQoKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fbXlNb25leVRyaWFsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9teU1vbmV5VHJpYWwgPCAxKVxuICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XG4gICAgICAgICAgICB0aGlzLl9teVNlc3Npb24rKztcbiAgICAgICAgICAgIHRoaXMuU2luYmFkUnVuKFRyaWFsUmVzdWx0LmdldEl0ZW1UcmlhbCgpKTtcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4tLTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnBsYXlTcGluKCk7XG4gICAgICAgICAgICB0aGlzLmlzU3BpbiAgICA9IHRydWU7XG4gICAgICAgICAgICBsZXQgYmV0UmVxdWVzdCA9IG5ldyBTaW5iYWRSZXF1ZXN0LkJldFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xuICAgICAgICAgICAgYmV0UmVxdWVzdC5zZXRCZXQodGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGluZXNCZXQoYmV0UmVxdWVzdCk7XG4gICAgICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChiZXRSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgICAgICAgICAvLyBzdWIgbW9uZXlcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSlcbiAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlNpbmJhZENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgLSB0aGlzLmdldFRvdGFsQmV0KCkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBldmVudFN0b3BRdWF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0F1dG8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5TdG9wUXVheS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0bkF1dG9RdWF5LCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5TmhhbmgsIGZhbHNlKTtcblxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBTaW5iYWRSZXF1ZXN0LlN0b3BBdXRvUGxheVJlcXVlc3QoKTtcbiAgICAgICAgU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgfSxcbiAgICBldmVudFBob25nOiBmdW5jdGlvbihldmVudCwgZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3BpbiB8fCB0aGlzLmlzQXV0byB8fCB0aGlzLmlzRmFzdCl7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9ICh0aGlzLnJvb21OdW1iZXIgKyAxKSU0O1xuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSB0aGlzLnJvb21OdW1iZXIgPCAxID8gMTogdGhpcy5yb29tTnVtYmVyO1xuICAgICAgICB0aGlzLmxiX3Bob25nLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XG4gICAgICAgIFV0aWxzVUkubG9hZEltYWdlUmVzKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnR2FtZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgXCJpbWFnZXMvc2luYmFkL21haW5HYW1lQmdcIit0aGlzLnJvb21OdW1iZXIpO1xuICAgICAgICBVdGlsc1VJLmxvYWRJbWFnZVJlcyh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib3JkZXJHYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBcImltYWdlcy9zaW5iYWQvYm9yZGVyLXBob25nXCIrdGhpcy5yb29tTnVtYmVyKTtcbiAgICAgICAgdGhpcy5zZXROdW1iZXJTdGFrZSh0aGlzLnNlbGVjdExpbmVzLmdldFRvdGFsTGluZVNlbGVjdCgpKTtcbiAgICAgICAgaWYodGhpcy5yb29tTnVtYmVyID09IDEpe1xuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFsXCI7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucm9vbU51bWJlciA9PSAyKXtcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxa1wiO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnJvb21OdW1iZXIgPT0gMyl7XG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMTBrXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KCk7XG4gICAgfSxcbiAgICBldmVudFNlbGVjdExpbmVzOiBmdW5jdGlvbigpe1xuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3BpbiB8fCB0aGlzLmlzQXV0byB8fCB0aGlzLmlzRmFzdCl7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0TGluZXMuZXZlbnRPcGVuKCk7XG4gICAgfSxcbiAgICBjaGVja0Vub3VnaE1vbmV5KCl7XG4gICAgICAgIGxldCB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIDI1O1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0TGluZXMudHlwZUxpbmUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIDEzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMTI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RMaW5lID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0xOyBpPCB0aGlzLnNlbGVjdExpbmVzLmRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RMaW5lcy5kYXRhW2ldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RMaW5lLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG90YWxCZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCkgKiBsaXN0TGluZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlNpbmJhZENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgPCB0b3RhbEJldCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhdXRvUXVheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluID4gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudFF1YXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZnJlZVNwaW4gPCAxKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG8pe1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCAgICA9IG5ldyBTaW5iYWRSZXF1ZXN0LkF1dG9QbGF5UmVxdWVzdCgpO1xuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldEJldCh0aGlzLmdldE1vbmV5SW5Sb29tKCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExpbmVzQmV0KHJlcXVlc3QpO1xuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIC0gdGhpcy5nZXRUb3RhbEJldCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UXVheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldFRvdGFsQmV0KCl7XG4gICAgICAgIGxldCBiZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xuICAgICAgICAgICAgY2FzZSAwOiAvLyBhbGxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmUoKSAqIGJldDtcbiAgICAgICAgICAgIGNhc2UgMTogLy8gbGVcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVMZSgpKiBiZXQ7XG4gICAgICAgICAgICBjYXNlIDI6IC8vIGNoYW5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVDaGFuKCkqIGJldDtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVTZWxlY3QoKSAqIGJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmV0O1xuICAgIH0sXG4gICAgc2V0TGluZXNCZXQocmVxdWVzdCl7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0TGluZUxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRMaW5lQ2hhbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGxldCBsaXN0TGluZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MTsgaTwgdGhpcy5zZWxlY3RMaW5lcy5kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TGluZXMuZGF0YVtpXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0TGluZS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0TGluZShsaXN0TGluZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50UXVheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCF0aGlzLl9pc0ZyZWVUcmlhbCAmJiAhdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucnVuUXVheSgpO1xuICAgIH0sXG4gICAgcGF1c2VTeXN0ZW1FdmVudE5vZGU6IGZ1bmN0aW9uKG5vZGVFdmVudCwgaXNQYXVzZSkge1xuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KCBub2RlRXZlbnQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIGlzUGF1c2UpO1xuICAgICAgICBpZiAoaXNQYXVzZSl7XG4gICAgICAgICAgICBub2RlRXZlbnQucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICBub2RlRXZlbnQucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xuICAgIH0sXG4gICAgZXZlbnRCYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgVUlNYW5nZXIuc2hvdyhcIlVJU2luYmFkTG9iYnlcIiwge3BvcDogdHJ1ZSwgc3JjOiBcInNpbmJhZFwifSk7XG4gICAgfSxcbiAgICBldmVudFNldHRpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm1lbnVTZXR0aW5nLmFjdGl2ZSA9ICF0aGlzLm1lbnVTZXR0aW5nLmFjdGl2ZTtcbiAgICB9LFxuICAgIGV2ZW50VmluaERhbmg6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0LkxlYWRlckJvYXJkUmVxdWVzdCgpO1xuICAgICAgICBTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICB9LFxuICAgIGV2ZW50TGljaFN1R2lhb0RpY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0Lkhpc3RvcnlSZXF1ZXN0KCk7XG4gICAgICAgIFNtYXJ0Rm94U0RLLlNpbmJhZENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xuICAgIH0sXG4gICAgZXZlbnRCYW5nVGh1b25nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iZ0JhbmdUaHVvbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGV2ZW50Q2xvc2VCYW5nVGh1b25nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5iZ0JhbmdUaHVvbmcuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBTaW5iYWRSdW46IGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICB0aGlzLnNob3dMaW5lV2luKGZhbHNlKTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5nZXREYXRhUmVzdWx0KGRhdGEucmVzdWx0KTtcbiAgICAgICAgUHJvbWlzZS5hbGwocmVzdWx0Lm1hcChmdW5jdGlvbihjZWwsIGNlbF9pbmRleCl7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChjZWwubWFwKGZ1bmN0aW9uKGljb24sIGluZGV4KXtcbiAgICAgICAgICAgICAgICBzZWxmLnJlZWxzW2NlbF9pbmRleF0uaWNvbnNbaW5kZXhdLnNldEljb24oaWNvbiwgdHJ1ZSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5saW5lV2luICAgID0gZGF0YS5saW5lV2luO1xuICAgICAgICB0aGlzLndpbk1vbmV5ICAgPSBkYXRhLndpbk1vbmV5O1xuICAgICAgICB0aGlzLmZyZWVHaWZ0ICAgPSBkYXRhLmZyZWVHaWZ0O1xuICAgICAgICB0aGlzLmlzQm9udXMgICAgPSBkYXRhLmlzQm9udXM7XG4gICAgICAgIHRoaXMuaXNGcmVlICAgICA9IGRhdGEuaXNGcmVlU3BpbjtcbiAgICAgICAgdGhpcy5zZXNzaW9uICAgID0gZGF0YS5zZXNzaW9uO1xuICAgICAgICB0aGlzLmlzTm9IdSAgICAgPSBkYXRhLmlzTm9odTtcbiAgICAgICAgdGhpcy5pc1RoYW5nTG9uID0gZGF0YS5pc1RoYW5nTG9uO1xuICAgICAgICB0aGlzLmZyZWVTcGluICAgPSBkYXRhLmZyZWVTcGluO1xuICAgICAgICB0aGlzLnR5cGUgICAgICAgPSBkYXRhLnR5cGU7XG4gICAgICAgIHRoaXMucnVuUmVlbHMoKTtcbiAgICAgICAgaWYgKCFkYXRhLmlzRnJlZVNwaW4pXG4gICAgICAgICAgICB0aGlzLldpbkdhbWUudXBkYXRlRnJlZVNwaW4oKTtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuX215U2Vzc2lvbjtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLnNlc3Npb247XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXRSYW5kb21JdGVtczogZnVuY3Rpb24obnVtYmVySXRlbSkge1xuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBudW1iZXJJdGVtOyBpKyspe1xuICAgICAgICAgICAgbGlzdEl0ZW1baV0gPSB0aGlzLnJhbmRvbSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXN0SXRlbTtcbiAgICB9LFxuICAgIGdldERhdGFSZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuX1RvdGFsQ29sdW1uOyBpKyspe1xuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3QXJyYXlbaSVzZWxmLl9Ub3RhbENvbHVtbl0ucHVzaChyZXN1bHRbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fVG90YWxDb2x1bW47IGkrKyl7XG4gICAgICAgICAgICBsZXQgcmFuZG9tQXJyID0gdGhpcy5pbml0UmFuZG9tSXRlbXModGhpcy5Ub3RhbEl0ZW1SdW4tNik7XG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9IG5ld0FycmF5W2ldLmNvbmNhdChyYW5kb21BcnIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgIHRoaXMubGFzdFJlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV3QXJyYXlbaSVzZWxmLl9Ub3RhbENvbHVtbl0ucHVzaCggdGhpcy5sYXN0UmVzdWx0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcbiAgICB9LFxuICAgIHJlZm9ybWF0UmVzdWx0KHJlc3VsdCwgc2l6ZSkge1xuICAgICAgICBsZXQgcmVzID0gW107XG4gICAgICAgIGZvcihsZXQgaT0wO2kgPCByZXN1bHQubGVuZ3RoOyBpID0gaStzaXplKVxuICAgICAgICAgICAgcmVzLnB1c2gocmVzdWx0LnNsaWNlKGksaStzaXplKSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSxcbiAgICBydW5BY3Rpb25Xb246IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNob3dMaW5lV2luKHRydWUpO1xuICAgICAgICB0aGlzLldpbkdhbWUucnVuV2luR2FtZSgpO1xuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheSwgZmFsc2UpO1xuICAgIH0sXG4gICAgcmVzdW1lKCkge1xuICAgICAgICBpZiAodGhpcy53aW5Nb25leSA+IDApe1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHRoaXMuV2luR2FtZS5ydW5XaW5HYW1lKCk7XG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIDMwMCk7XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMuV2luR2FtZS5ydW5XaW5HYW1lKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNldEV2ZW50TWFpbkxpbmU6IGZ1bmN0aW9uKGlzUGF1c2UpIHtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihtYWluTGluZSwgaW5kZXgpe1xuICAgICAgICAgICAgaWYgKGlzUGF1c2UpXG4gICAgICAgICAgICAgICAgbWFpbkxpbmUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbWFpbkxpbmUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xuICAgICAgICB9KSk7XG4gICAgfSxcbiAgICBzaG93TGluZVdpbjogZnVuY3Rpb24oaXNTaG93KSB7XG4gICAgICAgIC8vIGFkZCBtb25leVxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChpc1Nob3cpe1xuICAgICAgICAgICAgdGhpcy5zZXRFdmVudE1haW5MaW5lKGlzU2hvdyk7XG4gICAgICAgICAgICB0aGlzLnRvdGFsTGluZVdpbiAgID0gdGhpcy5saW5lV2luLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMucG9zTGluZVdpbiAgICAgPSAwO1xuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxMaW5lV2luID4gMCl7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saW5lV2luLm1hcChmdW5jdGlvbihwb3NMaW5lKXtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3Bvc0xpbmVdLmdldENvbXBvbmVudChcIlNpbmJhZE1haW5MaW5lXCIpLm9uRWYoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoc2VsZi5saW5lV2luLm1hcChmdW5jdGlvbihwb3NMaW5lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5nZXRDb21wb25lbnQoXCJTaW5iYWRNYWluTGluZVwiKS5vZmZFZigpO1xuICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2NoZWR1bGUoIHRoaXMuc2hvd01haW5MaW5lLCAxKTtcbiAgICAgICAgICAgICAgICB9LCAyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuc2hvd01haW5MaW5lKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbmVXaW4gJiYgdGhpcy5saW5lV2luLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpbmVXaW4ubWFwKGZ1bmN0aW9uIChwb3NMaW5lKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5nZXRDb21wb25lbnQoXCJTaW5iYWRNYWluTGluZVwiKS5vZmZob3ZlcigpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0ucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzaG93TWFpbkxpbmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5saW5lV2luLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgaWYgKHRoaXMubGlzdE1haW5MaW5lcy5jaGlsZHJlblt0aGlzLmxpbmVXaW5bdGhpcy5wb3NMaW5lV2luJXRoaXMudG90YWxMaW5lV2luXV0gIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE1haW5MaW5lcy5jaGlsZHJlblt0aGlzLmxpbmVXaW5bdGhpcy5wb3NMaW5lV2luJXRoaXMudG90YWxMaW5lV2luXV0uZ2V0Q29tcG9uZW50KFwiU2luYmFkTWFpbkxpbmVcIikub2ZmRWYoKTtcbiAgICAgICAgICAgIHRoaXMucG9zTGluZVdpbiA9ICh0aGlzLnBvc0xpbmVXaW4rMSkldGhpcy50b3RhbExpbmVXaW47XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXS5nZXRDb21wb25lbnQoXCJTaW5iYWRNYWluTGluZVwiKS5vbkVmKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHJ1blJlZWxzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMucmVlbHMubWFwKGZ1bmN0aW9uKHJlZWwsIGluZGV4KSB7XG4gICAgICAgICAgICByZWVsLnNwaW4oaW5kZXgpO1xuICAgICAgICB9KSk7XG4gICAgfSxcbiAgICBjb3B5OiBmdW5jdGlvbigpe1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsKXtcbiAgICAgICAgICAgIHJlZWwuaWNvbnNbcmVlbC5pY29ucy5sZW5ndGgtMV0uc2V0SWNvbihyZWVsLmljb25zWzJdLmRhdGEpO1xuICAgICAgICAgICAgcmVlbC5pY29uc1tyZWVsLmljb25zLmxlbmd0aC0yXS5zZXRJY29uKHJlZWwuaWNvbnNbMV0uZGF0YSk7XG4gICAgICAgICAgICByZWVsLmljb25zW3JlZWwuaWNvbnMubGVuZ3RoLTNdLnNldEljb24ocmVlbC5pY29uc1swXS5kYXRhKTtcbiAgICAgICAgfSkpO1xuICAgIH0sXG4gICAgcmFuZG9tOiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gIH5+KE1hdGgucmFuZG9tKCkqdGhpcy50b3RhbFN5bWJvbCk7XG4gICAgfSxcbiAgICBnZXRNb25leUluUm9vbTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAxMCpNYXRoLnBvdygxMCwgdGhpcy5yb29tTnVtYmVyKTtcbiAgICB9LFxuICAgIGNoZWNrSGFzTW9uZXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGFkZE5vdGljZTogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm5vdGljZU5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub3RpY2VOb2RlLmdldENoaWxkQnlOYW1lKFwibGJfbm90aVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IG1lc3NhZ2U7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHNlbGYubm90aWNlTm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSwgMTIwMCk7XG4gICAgfVxufSk7XG4iXX0=
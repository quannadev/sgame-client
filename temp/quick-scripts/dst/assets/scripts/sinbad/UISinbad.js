
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxVSVNpbmJhZC5qcyJdLCJuYW1lcyI6WyJXaW5HYW1lIiwicmVxdWlyZSIsIkhlbHBlciIsInJlZWwiLCJsaW5lIiwiVXRpbHNVSSIsIlRyaWFsUmVzdWx0IiwiTGFuZ3VhZ2UiLCJMaXN0Um9vbSIsImNjIiwiRW51bSIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJyZWVscyIsInR5cGUiLCJpY29uUHJlZmFiIiwiUHJlZmFiIiwibm90aWNlTm9kZSIsIk5vZGUiLCJiZ0JhbmdUaHVvbmciLCJidG5RdWF5IiwiYnRuUXVheU5oYW5oIiwiYnRuU3RvcFF1YXkiLCJidG5BdXRvUXVheSIsImxiTnVtYmVyTGluZSIsIkxhYmVsIiwibGJOdW1iZXJTdGFrZSIsImxiTW9uZXlXaW4iLCJsYlNlc3Npb24iLCJzZWxlY3RMaW5lcyIsImxpc3RNYWluTGluZXMiLCJpc0F1dG8iLCJpc0Zhc3QiLCJpc1NwaW4iLCJpc0ZyZWVTcGluIiwicmVkIiwibGFzdFJlc3VsdCIsImJldFNlbGVjdCIsInJvb21OdW1iZXIiLCJwb3NMaW5lV2luIiwidG90YWxMaW5lV2luIiwiX1RvdGFsQ29sdW1uIiwibGJfcGhvbmciLCJsYl9zb2R1IiwibGJfaHUiLCJ0b2dnbGVNdXNpYyIsIlRvZ2dsZSIsInRvZ2dsZVNvdW5kIiwiYmdTb3VuZCIsIkF1ZGlvQ2xpcCIsInNvdW5kU3Bpbk1pcyIsInNvdW5kU3BpbldpbiIsInNvdW5kQmlnV2luIiwic291bmRKYWNrcG90Iiwic291bmRCb251cyIsInNvdW5kQ2xpY2siLCJzb3VuZFNwaW4iLCJtZW51U2V0dGluZyIsIl9rZXlNdXNpYyIsIl9rZXlTb3VuZCIsIl9tdXNpY1Nsb3RTdGF0ZSIsIl9zb3VuZFNsb3RTdGF0ZSIsIl9pc0ZyZWVUcmlhbCIsIl9teU1vbmV5VHJpYWwiLCJfbXlTZXNzaW9uIiwib25Mb2FkIiwiVG90YWxJdGVtUnVuIiwidG90YWxTeW1ib2wiLCJ3aW5Nb25leSIsImZyZWVTcGluIiwiaW5pdCIsInN0cmluZyIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJHYW1lVmFyaWFibGVzIiwiUG9rZXIiLCJnZXRDaGlwIiwiU21hcnRGb3hTREsiLCJTaW5iYWRDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwibXlTZWxmIiwic2NoZWR1bGUiLCJ1cGRhdGVKYWNrcG90IiwiaW5pdFNvdW5kIiwibXVzaWNTYXZlIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInBhcnNlSW50Iiwic2V0SXRlbSIsInNvdW5kU2F2ZSIsImlzQ2hlY2tlZCIsIm11c2ljSWQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJwYXVzZSIsIm9uRGlzYWJsZSIsImV2ZW50TXVzaWMiLCJyZXN1bWUiLCJldmVudFNvdW5kIiwicGxheVNwaW4iLCJwbGF5U3Bpbk1pcyIsInBsYXlTcGluV2luIiwicGxheUJpZ1dpbiIsInBsYXlKYWNrcG90IiwicGxheUJvbnVzIiwicGxheUNsaWNrIiwia2V5IiwiYmV0TGV2ZWwiLCJ2YXJpYWJsZUphY2twb3QiLCJnZXRWYXJpYWJsZSIsImphY2twb3QiLCJ2YWx1ZSIsImN1cnJlbnRfbGJfamFja3BvdCIsInNwbGl0Iiwiam9pbiIsImN1cnJlbnRIdSIsInBhcnNlRmxvYXQiLCJudW1iZXJUbyIsInVwZGF0ZVVzZXJWYXJpYWJsZVNsb3QiLCJldmVudCIsImNoYW5nZWRWYXJzIiwiaW5kZXhPZiIsInVzZXIiLCJpc0l0TWUiLCJ1cGRhdGVGcmVlU3BpbiIsInVwZGF0ZVVzZXJWYXJpYWJsZSIsInN1YkNoaXAiLCJjdXJyZW50VUkiLCJvbkVuYWJsZSIsIm1tIiwiYXVkaW8iLCJwYXVzZU11c2ljIiwidW5kZWZpbmVkIiwibnVtYmVyV2l0aENvbW1hcyIsImdldE1vbmV5SW5Sb29tIiwic2hvd0xpbmVXaW4iLCJMb2FkaW5nIiwiaGlkZSIsInNlbGYiLCJsaW5lQXJyMSIsImxpbmVBcnIyIiwibGluZUFycjMiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiaW5kZXgiLCJsYXN0QXJyYXkiLCJpbml0UmFuZG9tSXRlbXMiLCJwdXNoIiwibGVuZ3RoIiwidGhlbiIsInJlc3VsdCIsImNvbmNhdCIsInNldE51bWJlckxpbmVzIiwidG90YWxMaW5lcyIsInNldE51bWJlclN0YWtlIiwidG90YWxTdGFrZSIsInNldE1vbmV5V2luIiwidG90YWxNb25leSIsInVwZGF0ZURhdGFQaG9uZyIsInJvb21JZCIsImV2ZW50UXVheU5oYW5oIiwiYWRkTm90aWNlIiwiZ2V0U3RyaW5nIiwiY2hlY2tFbm91Z2hNb25leSIsIlRvYXN0Iiwic2hvd1RvYXN0IiwicGF1c2VTeXN0ZW1FdmVudE5vZGUiLCJhY3RpdmUiLCJhdXRvUXVheSIsImV2ZW50QXV0b1F1YXkiLCJydW5RdWF5IiwiZ2V0VG90YWxCZXQiLCJTaW5iYWRSdW4iLCJnZXRJdGVtVHJpYWwiLCJiZXRSZXF1ZXN0IiwiU2luYmFkUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJzZXRCZXQiLCJzZXRMaW5lc0JldCIsInNlbmQiLCJ0b1NSZXF1ZXN0IiwiZXZlbnRTdG9wUXVheSIsInJlcXVlc3QiLCJTdG9wQXV0b1BsYXlSZXF1ZXN0IiwiZXZlbnRQaG9uZyIsImRhdGEiLCJsb2FkSW1hZ2VSZXMiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJnZXRUb3RhbExpbmVTZWxlY3QiLCJldmVudFNlbGVjdExpbmVzIiwiZXZlbnRPcGVuIiwidG90YWxCZXQiLCJ0eXBlTGluZSIsImxpc3RMaW5lIiwiaSIsImV2ZW50UXVheSIsIkF1dG9QbGF5UmVxdWVzdCIsImJldCIsImdldFRvdGFsTGluZSIsImdldFRvdGFsTGluZUxlIiwiZ2V0VG90YWxMaW5lQ2hhbiIsInNldExpbmVMZSIsInNldExpbmVDaGFuIiwic2V0TGluZSIsIm5vZGVFdmVudCIsImlzUGF1c2UiLCJzZXRNYXRlcmlhbEdyYXkiLCJwYXVzZVN5c3RlbUV2ZW50cyIsInJlc3VtZVN5c3RlbUV2ZW50cyIsImV2ZW50QmFjayIsIlVJTWFuZ2VyIiwic2hvdyIsInBvcCIsInNyYyIsImV2ZW50U2V0dGluZyIsImV2ZW50VmluaERhbmgiLCJDYXNpbm9SZXF1ZXN0IiwiTGVhZGVyQm9hcmRSZXF1ZXN0IiwiZXZlbnRMaWNoU3VHaWFvRGljaCIsIkhpc3RvcnlSZXF1ZXN0IiwiZXZlbnRCYW5nVGh1b25nIiwiZXZlbnRDbG9zZUJhbmdUaHVvbmciLCJnZXREYXRhUmVzdWx0IiwiY2VsIiwiY2VsX2luZGV4IiwiaWNvbiIsImljb25zIiwic2V0SWNvbiIsImxpbmVXaW4iLCJmcmVlR2lmdCIsImlzQm9udXMiLCJpc0ZyZWUiLCJzZXNzaW9uIiwiaXNOb0h1IiwiaXNOb2h1IiwiaXNUaGFuZ0xvbiIsInJ1blJlZWxzIiwibnVtYmVySXRlbSIsImxpc3RJdGVtIiwicmFuZG9tIiwibmV3QXJyYXkiLCJyYW5kb21BcnIiLCJyZWZvcm1hdFJlc3VsdCIsInNpemUiLCJyZXMiLCJzbGljZSIsInJ1bkFjdGlvbldvbiIsInJ1bldpbkdhbWUiLCJzZXRUaW1lb3V0IiwiYmluZCIsInNldEV2ZW50TWFpbkxpbmUiLCJjaGlsZHJlbiIsIm1haW5MaW5lIiwiaXNTaG93IiwicG9zTGluZSIsIm9uRWYiLCJzY2hlZHVsZU9uY2UiLCJvZmZFZiIsInNob3dNYWluTGluZSIsInVuc2NoZWR1bGUiLCJvZmZob3ZlciIsInNwaW4iLCJjb3B5IiwiTWF0aCIsInBvdyIsImNoZWNrSGFzTW9uZXkiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBT0MsT0FBTyxDQUFDLGVBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFRRCxPQUFPLENBQUMsUUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxJQUFJLEdBQVVGLE9BQU8sQ0FBQyxZQUFELENBQXpCOztBQUNBLElBQUlHLElBQUksR0FBVUgsT0FBTyxDQUFDLFlBQUQsQ0FBekI7O0FBQ0EsSUFBSUksT0FBTyxHQUFPSixPQUFPLENB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TCxLQUFjLEtBQUtqTCxXQUFyQixDQUFUO0FBQ0gsR0EvbEJJO0FBZ21CTG9FLEVBQUFBLGNBQWMsRUFBRSwwQkFBVztBQUN2QixXQUFPLEtBQUdxSSxJQUFJLENBQUNDLEdBQUwsQ0FBUyxFQUFULEVBQWEsS0FBS3ZPLFVBQWxCLENBQVY7QUFDSCxHQWxtQkk7QUFtbUJMd08sRUFBQUEsYUFBYSxFQUFFLHlCQUFXO0FBQ3RCLFdBQU8sSUFBUDtBQUNILEdBcm1CSTtBQXNtQkwzRyxFQUFBQSxTQUFTLEVBQUUsbUJBQVU0RyxPQUFWLEVBQW1CO0FBQzFCLFFBQUlwSSxJQUFJLEdBQUcsSUFBWDtBQUNBLFNBQUsxSCxVQUFMLENBQWdCd0osTUFBaEIsR0FBeUIsSUFBekI7QUFDQSxTQUFLeEosVUFBTCxDQUFnQjZLLGNBQWhCLENBQStCLFNBQS9CLEVBQTBDQyxZQUExQyxDQUF1RHZMLEVBQUUsQ0FBQ2lCLEtBQTFELEVBQWlFOEMsTUFBakUsR0FBMEV3TSxPQUExRTtBQUNBbEIsSUFBQUEsVUFBVSxDQUFDLFlBQVU7QUFDakJsSCxNQUFBQSxJQUFJLENBQUMxSCxVQUFMLENBQWdCd0osTUFBaEIsR0FBeUIsS0FBekI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUE3bUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBXaW5HYW1lICAgICA9IHJlcXVpcmUoXCJTaW5iYWRXaW5HYW1lXCIpO1xyXG5sZXQgSGVscGVyICAgICAgPSByZXF1aXJlKFwiSGVscGVyXCIpO1xyXG5sZXQgcmVlbCAgICAgICAgPSByZXF1aXJlKFwiU2luYmFkUmVlbFwiKTtcclxubGV0IGxpbmUgICAgICAgID0gcmVxdWlyZShcIlNpbmJhZExpbmVcIik7XHJcbmxldCBVdGlsc1VJICAgICA9IHJlcXVpcmUoXCJVdGlsc1VJXCIpO1xyXG5sZXQgVHJpYWxSZXN1bHQgPSByZXF1aXJlKFwiVHJpYWxSZXN1bHRcIik7XHJcbmxldCBMYW5ndWFnZSAgICA9IHJlcXVpcmUoXCJzaW5iYWRMYW5ndWFnZVwiKTtcclxubGV0IExpc3RSb29tID0gY2MuRW51bSh7XHJcbiAgICBcIjFsXCIgICA6IDEsXHJcbiAgICBcIjFrXCIgICAgOiAyLFxyXG4gICAgXCIxMGtcIiAgIDogM1xyXG59KTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVlbHM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IHJlZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uUHJlZmFiICAgICAgICAgIDogY2MuUHJlZmFiLFxyXG4gICAgICAgIG5vdGljZU5vZGUgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJnQmFuZ1RodW9uZyAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0blF1YXkgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0blF1YXlOaGFuaCAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0blN0b3BRdWF5ICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0bkF1dG9RdWF5ICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxiTnVtYmVyTGluZSAgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYk51bWJlclN0YWtlICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJNb25leVdpbiAgICAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiU2Vzc2lvbiAgICAgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBzZWxlY3RMaW5lcyAgICAgICAgIDogbGluZSxcclxuICAgICAgICBXaW5HYW1lICAgICAgICAgICAgIDogV2luR2FtZSxcclxuICAgICAgICBsaXN0TWFpbkxpbmVzICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICAvLyBlZHRDaGVhdCAgICAgICAgICAgOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIGlzQXV0byAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICBpc0Zhc3QgICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgaXNTcGluICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgIGlzRnJlZVNwaW4gICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICByZWQgICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgICBsYXN0UmVzdWx0ICAgICAgICAgIDogW10sXHJcbiAgICAgICAgYmV0U2VsZWN0ICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgcm9vbU51bWJlciAgICAgICAgICA6IDAsXHJcbiAgICAgICAgcG9zTGluZVdpbiAgICAgICAgICA6IDAsXHJcbiAgICAgICAgdG90YWxMaW5lV2luICAgICAgICA6IDAsXHJcbiAgICAgICAgX1RvdGFsQ29sdW1uICAgICAgICA6IDUsXHJcbiAgICAgICAgbGJfcGhvbmc6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiX3NvZHU6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiX2h1OiBjYy5MYWJlbCxcclxuICAgICAgICB0b2dnbGVNdXNpYzogY2MuVG9nZ2xlLFxyXG4gICAgICAgIHRvZ2dsZVNvdW5kOiBjYy5Ub2dnbGUsXHJcbiAgICAgICAgYmdTb3VuZDogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kU3Bpbk1pczogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kU3BpbldpbjogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kQmlnV2luOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRKYWNrcG90OiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRCb251czogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBzb3VuZFNwaW46IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBtZW51U2V0dGluZzogY2MuTm9kZSxcclxuICAgICAgICBfa2V5TXVzaWM6IFwibXVzaWNfa2NcIixcclxuICAgICAgICBfa2V5U291bmQ6IFwic291bmRfa2NcIixcclxuICAgICAgICBfbXVzaWNTbG90U3RhdGUgOiAwLFxyXG4gICAgICAgIF9zb3VuZFNsb3RTdGF0ZSA6IDAsXHJcbiAgICAgICAgX2lzRnJlZVRyaWFsIDogZmFsc2UsXHJcbiAgICAgICAgX215TW9uZXlUcmlhbCA6IDAsXHJcbiAgICAgICAgX215U2Vzc2lvbiA6IDAsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLl9Ub3RhbENvbHVtbiAgICAgPSA1O1xyXG4gICAgICAgIHRoaXMuVG90YWxJdGVtUnVuICAgICA9IDIwO1xyXG4gICAgICAgIHRoaXMudG90YWxTeW1ib2wgICAgICA9IDc7XHJcbiAgICAgICAgdGhpcy53aW5Nb25leSAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLmZyZWVTcGluICAgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMucm9vbU51bWJlciAgICAgICA9IExpc3RSb29tW1wiMWxcIl07XHJcbiAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlSmFja3BvdCwgMyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KCk7XHJcbiAgICAgICAgdGhpcy5pbml0U291bmQoKTtcclxuICAgIH0sXHJcbiAgICBpbml0U291bmQoKSB7XHJcbiAgICAgICAgdmFyIG11c2ljU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9rZXlNdXNpYyk7XHJcbiAgICAgICAgaWYgKG11c2ljU2F2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljU2xvdFN0YXRlID0gcGFyc2VJbnQobXVzaWNTYXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlNdXNpYywgXCIxXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNvdW5kU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9rZXlTb3VuZCk7XHJcbiAgICAgICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kU2xvdFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlTb3VuZCwgXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmJnU291bmQgIT0gbnVsbCAmJiAhdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJnU291bmQsIHRydWUsIDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRpc2FibGUoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50TXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5fbXVzaWNTbG90U3RhdGUgICAgICAgICA9IHRoaXMudG9nZ2xlU291bmQuaXNDaGVja2VkPyAwOiAxO1xyXG4gICAgICAgIGlmICghdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5tdXNpY0lkKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlNdXNpYywgIHRoaXMuX211c2ljU2xvdFN0YXRlKTtcclxuICAgIH0sXHJcbiAgICBldmVudFNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuX3NvdW5kU2xvdFN0YXRlID0gdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQ/IDA6IDE7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleVNvdW5kLCAgdGhpcy5fc291bmRTbG90U3RhdGUpO1xyXG4gICAgfSxcclxuICAgIHBsYXlTcGluKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW4sIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheVNwaW5NaXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3Bpbk1pcywgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGF5U3BpbldpbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluV2luLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlCaWdXaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmlnV2luLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlKYWNrcG90KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEphY2twb3QsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUJvbnVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJvbnVzLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlDbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVKYWNrcG90KCl7XHJcbiAgICAgICAgbGV0IGtleSA9IFwic2luYmFkXCIrY2MuYmV0TGV2ZWw7XHJcbiAgICAgICAgaWYoU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcclxuICAgICAgICAgICAgaWYoU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcclxuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZUphY2twb3QgPSBTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYuZ2V0VmFyaWFibGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIGlmKHZhcmlhYmxlSmFja3BvdCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGphY2twb3QgPSB2YXJpYWJsZUphY2twb3QudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfbGJfamFja3BvdCA9IHRoaXMubGJfaHUuc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfbGJfamFja3BvdCA9IGN1cnJlbnRfbGJfamFja3BvdC5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudEh1ID0gcGFyc2VGbG9hdChjdXJyZW50X2xiX2phY2twb3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLm51bWJlclRvKHRoaXMubGJfaHUsIGN1cnJlbnRIdSwgamFja3BvdCwgMTAwMCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVVzZXJWYXJpYWJsZVNsb3QoZXZlbnQpe1xyXG4gICAgICAgIGxldCBrZXkgPSBcImZzc2luYmFkXCIrY2MuYmV0TGV2ZWw7XHJcbiAgICAgICAgaWYoZXZlbnQuY2hhbmdlZFZhcnMuaW5kZXhPZihrZXkpID49IDApe1xyXG4gICAgICAgICAgICAvLyBnZXQgZnJlZSBzcGluZSBvZiByb29tIGluIGhlcmVcclxuICAgICAgICAgICAgLy9rZXk6IFwiZnNcIiArIFwic2luYmFkMWxcIiBmcmVlIHNwaW4gb2YgYmV0IDEwMFxyXG4gICAgICAgICAgICAvLyBrZXk6IFwiZnNcIiArIFwic2luYmFkMWtcIiBmcmVlIHNwaW4gb2YgYmV0IDEwMDBcclxuICAgICAgICAgICAgLy8ga2V5OiBcImZzXCIgKyBcInNpbmJhZDEwa1wiIGZyZWUgc3BpbiBvZiBiZXQgMTAwMFxyXG4gICAgICAgICAgICBpZihldmVudC51c2VyLmlzSXRNZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJlZVNwaW4gICAgPSBTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYuZ2V0VmFyaWFibGUoa2V5KS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGZyZWVTcGluO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnVwZGF0ZUZyZWVTcGluKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVXNlclZhcmlhYmxlKHN1YkNoaXApe1xyXG4gICAgICAgIGlmICghdGhpcy5faXNGcmVlVHJpYWwgJiYgY2MuY3VycmVudFVJICE9IFwiXCIpXHJcbiAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKS1zdWJDaGlwKTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICBpZiAoY2MuYmV0TGV2ZWwgPT0gXCJjaG9pdGh1XCIpe1xyXG4gICAgICAgICAgICB0aGlzLl9pc0ZyZWVUcmlhbCAgICAgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLl9teU1vbmV5VHJpYWwgICAgPSA1MDAwMDAwMDtcclxuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyAgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoNTAwMDAwMDApO1xyXG4gICAgICAgICAgICB0aGlzLl9teVNlc3Npb24gICAgICAgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLl9teVNlc3Npb247XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuX215TW9uZXlUcmlhbCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRnJlZVRyaWFsICA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSBMaXN0Um9vbVtjYy5iZXRMZXZlbF07XHJcbiAgICAgICAgaWYodGhpcy5yb29tTnVtYmVyID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMWxcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gTGlzdFJvb21bY2MuYmV0TGV2ZWxdO1xyXG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9ICh0aGlzLnJvb21OdW1iZXIpJTQ7XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gdGhpcy5yb29tTnVtYmVyIDwgMSA/IDE6IHRoaXMucm9vbU51bWJlcjtcclxuICAgICAgICB0aGlzLmxiX3Bob25nLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RMaW5lcy5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuV2luR2FtZS5pbml0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMubGJNb25leVdpbi5zdHJpbmcgPSBcIjBcIjtcclxuICAgICAgICB0aGlzLnNob3dMaW5lV2luKGZhbHNlKTtcclxuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgIH0sXHJcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGxpbmVBcnIxID0gW107XHJcbiAgICAgICAgbGV0IGxpbmVBcnIyID0gW107XHJcbiAgICAgICAgbGV0IGxpbmVBcnIzID0gW107XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24ocmVlbCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgbGV0IGxhc3RBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICBsYXN0QXJyYXkgPSBzZWxmLmluaXRSYW5kb21JdGVtcyhzZWxmLlRvdGFsSXRlbVJ1bik7XHJcblxyXG4gICAgICAgICAgICBsaW5lQXJyMS5wdXNoKGxhc3RBcnJheVtsYXN0QXJyYXkubGVuZ3RoLTFdKTtcclxuICAgICAgICAgICAgbGluZUFycjIucHVzaChsYXN0QXJyYXlbbGFzdEFycmF5Lmxlbmd0aC0yXSk7XHJcbiAgICAgICAgICAgIGxpbmVBcnIzLnB1c2gobGFzdEFycmF5W2xhc3RBcnJheS5sZW5ndGgtM10pO1xyXG4gICAgICAgICAgICByZWVsLmluaXQoc2VsZiwgbGFzdEFycmF5KTtcclxuICAgICAgICB9KSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICBzZWxmLmxhc3RSZXN1bHQgPSBsaW5lQXJyMy5jb25jYXQobGluZUFycjIpLmNvbmNhdChsaW5lQXJyMSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2V0TnVtYmVyTGluZXM6IGZ1bmN0aW9uKHRvdGFsTGluZXMpIHtcclxuICAgICAgICB0aGlzLmxiTnVtYmVyTGluZS5zdHJpbmcgPSB0b3RhbExpbmVzO1xyXG4gICAgfSxcclxuICAgIHNldE51bWJlclN0YWtlOiBmdW5jdGlvbih0b3RhbFN0YWtlKSB7XHJcbiAgICAgICAgdGhpcy5sYk51bWJlclN0YWtlLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRvdGFsU3Rha2UqdGhpcy5nZXRNb25leUluUm9vbSgpKTtcclxuICAgIH0sXHJcbiAgICBzZXRNb25leVdpbjogZnVuY3Rpb24odG90YWxNb25leSkge1xyXG4gICAgICAgIEhlbHBlci5udW1iZXJUbyh0aGlzLmxiTW9uZXlXaW4sIHBhcnNlSW50KHRoaXMubGJNb25leVdpbi5zdHJpbmcpLCB0b3RhbE1vbmV5LCAxMjAwLCB0cnVlKTtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gdGhpcy5fbXlNb25leVRyaWFsICsgdGhpcy53aW5Nb25leTtcclxuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHRoaXMuX215TW9uZXlUcmlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTcGluICAgID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRGF0YVBob25nKHJvb21JZCkge1xyXG5cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIGV2ZW50UXVheU5oYW5oOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1NwaW4pe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzU3BpbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNBdXRvID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuQXV0b1F1YXksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheU5oYW5oLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmJ0blN0b3BRdWF5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hdXRvUXVheSgpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50QXV0b1F1YXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X3RyaWFsXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3Bpbil7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1NwaW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNGYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0F1dG8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5BdXRvUXVheSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXlOaGFuaCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYnRuU3RvcFF1YXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmF1dG9RdWF5KCk7XHJcbiAgICB9LFxyXG4gICAgcnVuUXVheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmlzU3BpbiAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX215TW9uZXlUcmlhbCA9IHRoaXMuX215TW9uZXlUcmlhbC10aGlzLmdldFRvdGFsQmV0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9teU1vbmV5VHJpYWwpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbXlNb25leVRyaWFsIDwgMSlcclxuICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbisrO1xyXG4gICAgICAgICAgICB0aGlzLlNpbmJhZFJ1bihUcmlhbFJlc3VsdC5nZXRJdGVtVHJpYWwoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4tLTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wbGF5U3BpbigpO1xyXG4gICAgICAgICAgICB0aGlzLmlzU3BpbiAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIGxldCBiZXRSZXF1ZXN0ID0gbmV3IFNpbmJhZFJlcXVlc3QuQmV0UmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMaW5lV2luKGZhbHNlKTtcclxuICAgICAgICAgICAgYmV0UmVxdWVzdC5zZXRCZXQodGhpcy5nZXRNb25leUluUm9vbSgpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRMaW5lc0JldChiZXRSZXF1ZXN0KTtcclxuICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcclxuICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChiZXRSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICAgICAgICAgIC8vIHN1YiBtb25leVxyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA8IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlNpbmJhZENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgLSB0aGlzLmdldFRvdGFsQmV0KCkpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudFN0b3BRdWF5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmlzRmFzdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNBdXRvID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5idG5TdG9wUXVheS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuQXV0b1F1YXksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheU5oYW5oLCBmYWxzZSk7XHJcblxyXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFNpbmJhZFJlcXVlc3QuU3RvcEF1dG9QbGF5UmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlNpbmJhZENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50UGhvbmc6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3BpbiB8fCB0aGlzLmlzQXV0byB8fCB0aGlzLmlzRmFzdCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gKHRoaXMucm9vbU51bWJlciArIDEpJTQ7XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gdGhpcy5yb29tTnVtYmVyIDwgMSA/IDE6IHRoaXMucm9vbU51bWJlcjtcclxuICAgICAgICB0aGlzLmxiX3Bob25nLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XHJcbiAgICAgICAgVXRpbHNVSS5sb2FkSW1hZ2VSZXModGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmdHYW1lXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBcImltYWdlcy9zaW5iYWQvbWFpbkdhbWVCZ1wiK3RoaXMucm9vbU51bWJlcik7XHJcbiAgICAgICAgVXRpbHNVSS5sb2FkSW1hZ2VSZXModGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9yZGVyR2FtZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKSwgXCJpbWFnZXMvc2luYmFkL2JvcmRlci1waG9uZ1wiK3RoaXMucm9vbU51bWJlcik7XHJcbiAgICAgICAgdGhpcy5zZXROdW1iZXJTdGFrZSh0aGlzLnNlbGVjdExpbmVzLmdldFRvdGFsTGluZVNlbGVjdCgpKTtcclxuICAgICAgICBpZih0aGlzLnJvb21OdW1iZXIgPT0gMSl7XHJcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxbFwiO1xyXG4gICAgICAgIH1lbHNlIGlmKHRoaXMucm9vbU51bWJlciA9PSAyKXtcclxuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFrXCI7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5yb29tTnVtYmVyID09IDMpe1xyXG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMTBrXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U2VsZWN0TGluZXM6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3BpbiB8fCB0aGlzLmlzQXV0byB8fCB0aGlzLmlzRmFzdCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RMaW5lcy5ldmVudE9wZW4oKTtcclxuICAgIH0sXHJcbiAgICBjaGVja0Vub3VnaE1vbmV5KCl7XHJcbiAgICAgICAgbGV0IHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMjU7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdExpbmVzLnR5cGVMaW5lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMTM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdG90YWxCZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCkgKiAxMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdExpbmUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MTsgaTwgdGhpcy5zZWxlY3RMaW5lcy5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RMaW5lcy5kYXRhW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExpbmUucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIGxpc3RMaW5lLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSA8IHRvdGFsQmV0KXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhdXRvUXVheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA+IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudFF1YXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJlZVNwaW4gPCAxKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQXV0byl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgICAgPSBuZXcgU2luYmFkUmVxdWVzdC5BdXRvUGxheVJlcXVlc3QoKTtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0LnNldEJldCh0aGlzLmdldE1vbmV5SW5Sb29tKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TGluZXNCZXQocmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlNpbmJhZENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgLSB0aGlzLmdldFRvdGFsQmV0KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRRdWF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFRvdGFsQmV0KCl7XHJcbiAgICAgICAgbGV0IGJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0TGluZXMudHlwZUxpbmUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvLyBhbGxcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdExpbmVzLmdldFRvdGFsTGluZSgpICogYmV0O1xyXG4gICAgICAgICAgICBjYXNlIDE6IC8vIGxlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVMZSgpKiBiZXQ7XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy8gY2hhblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lQ2hhbigpKiBiZXQ7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdExpbmVzLmdldFRvdGFsTGluZVNlbGVjdCgpICogYmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmV0O1xyXG4gICAgfSxcclxuICAgIHNldExpbmVzQmV0KHJlcXVlc3Qpe1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldExpbmVMZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0TGluZUNoYW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdExpbmUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MTsgaTwgdGhpcy5zZWxlY3RMaW5lcy5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RMaW5lcy5kYXRhW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExpbmUucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldExpbmUobGlzdExpbmUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50UXVheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuX2lzRnJlZVRyaWFsICYmICF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXksIHRydWUpO1xyXG4gICAgICAgIHRoaXMucnVuUXVheSgpO1xyXG4gICAgfSxcclxuICAgIHBhdXNlU3lzdGVtRXZlbnROb2RlOiBmdW5jdGlvbihub2RlRXZlbnQsIGlzUGF1c2UpIHtcclxuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KCBub2RlRXZlbnQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIGlzUGF1c2UpO1xyXG4gICAgICAgIGlmIChpc1BhdXNlKXtcclxuICAgICAgICAgICAgbm9kZUV2ZW50LnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIG5vZGVFdmVudC5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRCYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NwaW4gfHwgdGhpcy5pc0F1dG8gfHwgdGhpcy5pc0Zhc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSVNpbmJhZExvYmJ5XCIsIHtwb3A6IHRydWUsIHNyYzogXCJzaW5iYWRcIn0pO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U2V0dGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5tZW51U2V0dGluZy5hY3RpdmUgPSAhdGhpcy5tZW51U2V0dGluZy5hY3RpdmU7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRWaW5oRGFuaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5MZWFkZXJCb2FyZFJlcXVlc3QoKTtcclxuICAgICAgICBTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcclxuICAgIH0sXHJcbiAgICBldmVudExpY2hTdUdpYW9EaWNoOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0Lkhpc3RvcnlSZXF1ZXN0KCk7XHJcbiAgICAgICAgU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRCYW5nVGh1b25nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJnQmFuZ1RodW9uZy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2VCYW5nVGh1b25nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmJnQmFuZ1RodW9uZy5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH0sXHJcbiAgICBTaW5iYWRSdW46IGZ1bmN0aW9uKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5nZXREYXRhUmVzdWx0KGRhdGEucmVzdWx0KTtcclxuICAgICAgICBQcm9taXNlLmFsbChyZXN1bHQubWFwKGZ1bmN0aW9uKGNlbCwgY2VsX2luZGV4KXtcclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoY2VsLm1hcChmdW5jdGlvbihpY29uLCBpbmRleCl7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnJlZWxzW2NlbF9pbmRleF0uaWNvbnNbaW5kZXhdLnNldEljb24oaWNvbiwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5saW5lV2luICAgID0gZGF0YS5saW5lV2luO1xyXG4gICAgICAgIHRoaXMud2luTW9uZXkgICA9IGRhdGEud2luTW9uZXk7XHJcbiAgICAgICAgdGhpcy5mcmVlR2lmdCAgID0gZGF0YS5mcmVlR2lmdDtcclxuICAgICAgICB0aGlzLmlzQm9udXMgICAgPSBkYXRhLmlzQm9udXM7XHJcbiAgICAgICAgdGhpcy5pc0ZyZWUgICAgID0gZGF0YS5pc0ZyZWVTcGluO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbiAgICA9IGRhdGEuc2Vzc2lvbjtcclxuICAgICAgICB0aGlzLmlzTm9IdSAgICAgPSBkYXRhLmlzTm9odTtcclxuICAgICAgICB0aGlzLmlzVGhhbmdMb24gPSBkYXRhLmlzVGhhbmdMb247XHJcbiAgICAgICAgdGhpcy5mcmVlU3BpbiAgID0gZGF0YS5mcmVlU3BpbjtcclxuICAgICAgICB0aGlzLnR5cGUgICAgICAgPSBkYXRhLnR5cGU7XHJcbiAgICAgICAgdGhpcy5ydW5SZWVscygpO1xyXG4gICAgICAgIGlmICghZGF0YS5pc0ZyZWVTcGluKVxyXG4gICAgICAgICAgICB0aGlzLldpbkdhbWUudXBkYXRlRnJlZVNwaW4oKTtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLl9teVNlc3Npb247XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuc2Vzc2lvbjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgaW5pdFJhbmRvbUl0ZW1zOiBmdW5jdGlvbihudW1iZXJJdGVtKSB7XHJcbiAgICAgICAgbGV0IGxpc3RJdGVtID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCBudW1iZXJJdGVtOyBpKyspe1xyXG4gICAgICAgICAgICBsaXN0SXRlbVtpXSA9IHRoaXMucmFuZG9tKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0SXRlbTtcclxuICAgIH0sXHJcbiAgICBnZXREYXRhUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLl9Ub3RhbENvbHVtbjsgaSsrKXtcclxuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3QXJyYXlbaSVzZWxmLl9Ub3RhbENvbHVtbl0ucHVzaChyZXN1bHRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuX1RvdGFsQ29sdW1uOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgcmFuZG9tQXJyID0gdGhpcy5pbml0UmFuZG9tSXRlbXModGhpcy5Ub3RhbEl0ZW1SdW4tNik7XHJcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gbmV3QXJyYXlbaV0uY29uY2F0KHJhbmRvbUFycik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgIHRoaXMubGFzdFJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXdBcnJheVtpJXNlbGYuX1RvdGFsQ29sdW1uXS5wdXNoKCB0aGlzLmxhc3RSZXN1bHRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxhc3RSZXN1bHQgPSByZXN1bHQ7XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgfSxcclxuICAgIHJlZm9ybWF0UmVzdWx0KHJlc3VsdCwgc2l6ZSkge1xyXG4gICAgICAgIGxldCByZXMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGk9MDtpIDwgcmVzdWx0Lmxlbmd0aDsgaSA9IGkrc2l6ZSlcclxuICAgICAgICAgICAgcmVzLnB1c2gocmVzdWx0LnNsaWNlKGksaStzaXplKSk7XHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH0sXHJcbiAgICBydW5BY3Rpb25Xb246IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0xpbmVXaW4odHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheSwgZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIHJlc3VtZSgpIHtcclxuICAgICAgICBpZiAodGhpcy53aW5Nb25leSA+IDApe1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLldpbkdhbWUucnVuV2luR2FtZSgpO1xyXG4gICAgICAgICAgICB9LmJpbmQodGhpcyksIDMwMCk7XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLldpbkdhbWUucnVuV2luR2FtZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRFdmVudE1haW5MaW5lOiBmdW5jdGlvbihpc1BhdXNlKSB7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuLm1hcChmdW5jdGlvbihtYWluTGluZSwgaW5kZXgpe1xyXG4gICAgICAgICAgICBpZiAoaXNQYXVzZSlcclxuICAgICAgICAgICAgICAgIG1haW5MaW5lLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBtYWluTGluZS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHNob3dMaW5lV2luOiBmdW5jdGlvbihpc1Nob3cpIHtcclxuICAgICAgICAvLyBhZGQgbW9uZXlcclxuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgaWYgKGlzU2hvdyl7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RXZlbnRNYWluTGluZShpc1Nob3cpO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsTGluZVdpbiAgID0gdGhpcy5saW5lV2luLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5wb3NMaW5lV2luICAgICA9IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRvdGFsTGluZVdpbiA+IDApe1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saW5lV2luLm1hcChmdW5jdGlvbihwb3NMaW5lKXtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiU2luYmFkTWFpbkxpbmVcIikub25FZigpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChzZWxmLmxpbmVXaW4ubWFwKGZ1bmN0aW9uKHBvc0xpbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiU2luYmFkTWFpbkxpbmVcIikub2ZmRWYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zY2hlZHVsZSggdGhpcy5zaG93TWFpbkxpbmUsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNob3dNYWluTGluZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbmVXaW4gJiYgdGhpcy5saW5lV2luLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHRoaXMubGluZVdpbi5tYXAoZnVuY3Rpb24gKHBvc0xpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiU2luYmFkTWFpbkxpbmVcIikub2ZmaG92ZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0ucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd01haW5MaW5lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5saW5lV2luLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW4ldGhpcy50b3RhbExpbmVXaW5dXSAhPSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bdGhpcy5saW5lV2luW3RoaXMucG9zTGluZVdpbiV0aGlzLnRvdGFsTGluZVdpbl1dLmdldENvbXBvbmVudChcIlNpbmJhZE1haW5MaW5lXCIpLm9mZkVmKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zTGluZVdpbiA9ICh0aGlzLnBvc0xpbmVXaW4rMSkldGhpcy50b3RhbExpbmVXaW47XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bdGhpcy5saW5lV2luW3RoaXMucG9zTGluZVdpbl1dICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE1haW5MaW5lcy5jaGlsZHJlblt0aGlzLmxpbmVXaW5bdGhpcy5wb3NMaW5lV2luXV0uZ2V0Q29tcG9uZW50KFwiU2luYmFkTWFpbkxpbmVcIikub25FZigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBydW5SZWVsczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMucmVlbHMubWFwKGZ1bmN0aW9uKHJlZWwsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlZWwuc3BpbihpbmRleCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIGNvcHk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24ocmVlbCl7XHJcbiAgICAgICAgICAgIHJlZWwuaWNvbnNbcmVlbC5pY29ucy5sZW5ndGgtMV0uc2V0SWNvbihyZWVsLmljb25zWzJdLmRhdGEpO1xyXG4gICAgICAgICAgICByZWVsLmljb25zW3JlZWwuaWNvbnMubGVuZ3RoLTJdLnNldEljb24ocmVlbC5pY29uc1sxXS5kYXRhKTtcclxuICAgICAgICAgICAgcmVlbC5pY29uc1tyZWVsLmljb25zLmxlbmd0aC0zXS5zZXRJY29uKHJlZWwuaWNvbnNbMF0uZGF0YSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHJhbmRvbTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gIH5+KE1hdGgucmFuZG9tKCkqdGhpcy50b3RhbFN5bWJvbCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0TW9uZXlJblJvb206IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAxMCpNYXRoLnBvdygxMCwgdGhpcy5yb29tTnVtYmVyKTtcclxuICAgIH0sXHJcbiAgICBjaGVja0hhc01vbmV5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGROb3RpY2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubm90aWNlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm90aWNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiX25vdGlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBtZXNzYWdlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5ub3RpY2VOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEyMDApO1xyXG4gICAgfVxyXG59KTtcclxuIl19
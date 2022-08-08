
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/UIVampire.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7de3eA7U7hPfoKuuY4sIL9i', 'UIVampire');
// scripts/vampire/UIVampire.js

"use strict";

var WinGame = require("VampireWinGame");

var Helper = require("Helper");

var reel = require("VampireReel");

var line = require("VampireLine");

var TrialResult = require("TrialResult");

var Language = require("vampireLanguage");

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
    this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf));
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
    var key = "vampire" + cc.betLevel;

    if (SmartFoxSDK.VampireController.ZoneInstance.mySelf) {
      if (SmartFoxSDK.VampireController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(key);

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
    var key = "fsvampire" + cc.betLevel;

    if (event.changedVars.indexOf(key) >= 0) {
      // get free spine of room in here
      //key: "fs" + "vampire1l" free spin of bet 100
      // key: "fs" + "vampire1k" free spin of bet 1000
      // key: "fs" + "vampire10k" free spin of bet 1000
      if (event.user.isItMe) {
        var freeSpin = SmartFoxSDK.VampireController.ZoneInstance.mySelf.getVariable(key).value;
        this.freeSpin = freeSpin;
        this.WinGame.updateFreeSpin();
      }
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    if (!this._isFreeTrial && cc.currentUI != "") this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) - subChip);
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
      this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf));
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
      this.VampireRun(TrialResult.getItemTrial());
      this.freeSpin--;
    } else {
      this.playSpin();
      this.isSpin = true;
      var betRequest = new VampireRequest.BetRequest();
      this.showLineWin(false);
      betRequest.setBet(this.getMoneyInRoom());
      this.setLinesBet(betRequest);

      if (!this.checkEnoughMoney()) {
        mm.Toast.showToast(1, Language.getString("noti_not_money"));
        return;
      }

      SmartFoxSDK.VampireController.ZoneInstance.send(betRequest.toSRequest()); // sub money

      if (this.freeSpin < 1) this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) - this.getTotalBet());
    }
  },
  eventStopQuay: function eventStopQuay() {
    this.isFast = false;
    this.isAuto = false;
    this.btnStopQuay.active = false;
    this.pauseSystemEventNode(this.btnAutoQuay, false);
    this.pauseSystemEventNode(this.btnQuayNhanh, false);
    var request = new VampireRequest.StopAutoPlayRequest();
    SmartFoxSDK.VampireController.ZoneInstance.send(request.toSRequest());
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

    if (GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) < totalBet) {
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
          var request = new VampireRequest.AutoPlayRequest();
          request.setBet(this.getMoneyInRoom());
          this.setLinesBet(request);

          if (!this.checkEnoughMoney()) {
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
          }

          SmartFoxSDK.VampireController.ZoneInstance.send(request.toSRequest());
          this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.VampireController.ZoneInstance.mySelf) - this.getTotalBet());
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

    UIManger.show("UIVampireLobby", {
      pop: true,
      src: "vampire"
    });
  },
  eventSetting: function eventSetting() {
    this.menuSetting.active = !this.menuSetting.active;
  },
  eventVinhDanh: function eventVinhDanh() {
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.VampireController.ZoneInstance.send(request.toSRequest());
  },
  eventLichSuGiaoDich: function eventLichSuGiaoDich() {
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.VampireController.ZoneInstance.send(request.toSRequest());
  },
  eventBangThuong: function eventBangThuong() {
    this.bgBangThuong.active = true;
  },
  eventCloseBangThuong: function eventCloseBangThuong() {
    this.bgBangThuong.active = false;
  },
  VampireRun: function VampireRun(data) {
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
          self.listMainLines.children[posLine].getComponent("VampireMainLine").onEf();
        }));
        this.scheduleOnce(function () {
          Promise.all(self.lineWin.map(function (posLine) {
            self.listMainLines.children[posLine].getComponent("VampireMainLine").offEf();
          }));
          self.schedule(this.showMainLine, 1);
        }, 2);
      }
    } else {
      this.unschedule(this.showMainLine);

      if (this.lineWin && this.lineWin.length > 0) {
        Promise.all(this.lineWin.map(function (posLine) {
          self.listMainLines.children[posLine].getComponent("VampireMainLine").offhover();
          self.listMainLines.children[posLine].pauseSystemEvents(true);
        }));
      }
    }
  },
  showMainLine: function showMainLine() {
    if (this.lineWin.length > 0) {
      if (this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]] != undefined) this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]].getComponent("VampireMainLine").offEf();
      this.posLineWin = (this.posLineWin + 1) % this.totalLineWin;
      if (this.listMainLines.children[this.lineWin[this.posLineWin]] != undefined) this.listMainLines.children[this.lineWin[this.posLineWin]].getComponent("VampireMainLine").onEf();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVUlWYW1waXJlLmpzIl0sIm5hbWVzIjpbIldpbkdhbWUiLCJyZXF1aXJlIiwiSGVscGVyIiwicmVlbCIsImxpbmUiLCJUcmlhbFJlc3VsdCIsIkxhbmd1YWdlIiwiTGlzdFJvb20iLCJjYyIsIkVudW0iLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVlbHMiLCJ0eXBlIiwiaWNvblByZWZhYiIsIlByZWZhYiIsIm5vdGljZU5vZGUiLCJOb2RlIiwiYmdCYW5nVGh1b25nIiwiYnRuUXVheSIsImJ0blF1YXlOaGFuaCIsImJ0blN0b3BRdWF5IiwiYnRuQXV0b1F1YXkiLCJsYk51bWJlckxpbmUiLCJMYWJlbCIsImxiTnVtYmVyU3Rha2UiLCJsYk1vbmV5V2luIiwibGJTZXNzaW9uIiwic2VsZWN0TGluZXMiLCJsaXN0TWFpbkxpbmVzIiwiaXNBdXRvIiwiaXNGYXN0IiwiaXNTcGluIiwiaXNGcmVlU3BpbiIsInJlZCIsImxhc3RSZXN1bHQiLCJiZXRTZWxlY3QiLCJyb29tTnVtYmVyIiwicG9zTGluZVdpbiIsInRvdGFsTGluZVdpbiIsIl9Ub3RhbENvbHVtbiIsImxiX3Bob25nIiwibGJfc29kdSIsImxiX2h1IiwidG9nZ2xlTXVzaWMiLCJUb2dnbGUiLCJ0b2dnbGVTb3VuZCIsImJnU291bmQiLCJBdWRpb0NsaXAiLCJzb3VuZFNwaW5NaXMiLCJzb3VuZFNwaW5XaW4iLCJzb3VuZEJpZ1dpbiIsInNvdW5kSmFja3BvdCIsInNvdW5kQm9udXMiLCJzb3VuZENsaWNrIiwic291bmRTcGluIiwibWVudVNldHRpbmciLCJfa2V5TXVzaWMiLCJfa2V5U291bmQiLCJfbXVzaWNTbG90U3RhdGUiLCJfc291bmRTbG90U3RhdGUiLCJfaXNGcmVlVHJpYWwiLCJfbXlNb25leVRyaWFsIiwiX215U2Vzc2lvbiIsIm9uTG9hZCIsIlRvdGFsSXRlbVJ1biIsInRvdGFsU3ltYm9sIiwid2luTW9uZXkiLCJmcmVlU3BpbiIsImluaXQiLCJzdHJpbmciLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwiR2FtZVZhcmlhYmxlcyIsIlBva2VyIiwiZ2V0Q2hpcCIsIlNtYXJ0Rm94U0RLIiwiVmFtcGlyZUNvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJteVNlbGYiLCJzY2hlZHVsZSIsInVwZGF0ZUphY2twb3QiLCJpbml0U291bmQiLCJtdXNpY1NhdmUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJzZXRJdGVtIiwic291bmRTYXZlIiwiaXNDaGVja2VkIiwibXVzaWNJZCIsImF1ZGlvRW5naW5lIiwicGxheSIsInBhdXNlIiwib25EaXNhYmxlIiwiZXZlbnRNdXNpYyIsInJlc3VtZSIsImV2ZW50U291bmQiLCJwbGF5U3BpbiIsInBsYXlTcGluTWlzIiwicGxheVNwaW5XaW4iLCJwbGF5QmlnV2luIiwicGxheUphY2twb3QiLCJwbGF5Qm9udXMiLCJwbGF5Q2xpY2siLCJrZXkiLCJiZXRMZXZlbCIsInZhcmlhYmxlSmFja3BvdCIsImdldFZhcmlhYmxlIiwiamFja3BvdCIsInZhbHVlIiwiY3VycmVudF9sYl9qYWNrcG90Iiwic3BsaXQiLCJqb2luIiwiY3VycmVudEh1IiwicGFyc2VGbG9hdCIsIm51bWJlclRvIiwidXBkYXRlVXNlclZhcmlhYmxlU2xvdCIsImV2ZW50IiwiY2hhbmdlZFZhcnMiLCJpbmRleE9mIiwidXNlciIsImlzSXRNZSIsInVwZGF0ZUZyZWVTcGluIiwidXBkYXRlVXNlclZhcmlhYmxlIiwic3ViQ2hpcCIsImN1cnJlbnRVSSIsIm9uRW5hYmxlIiwibW0iLCJhdWRpbyIsInBhdXNlTXVzaWMiLCJ1bmRlZmluZWQiLCJudW1iZXJXaXRoQ29tbWFzIiwiZ2V0TW9uZXlJblJvb20iLCJzaG93TGluZVdpbiIsIkxvYWRpbmciLCJoaWRlIiwic2VsZiIsImxpbmVBcnIxIiwibGluZUFycjIiLCJsaW5lQXJyMyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsImxhc3RBcnJheSIsImluaXRSYW5kb21JdGVtcyIsInB1c2giLCJsZW5ndGgiLCJ0aGVuIiwicmVzdWx0IiwiY29uY2F0Iiwic2V0TnVtYmVyTGluZXMiLCJ0b3RhbExpbmVzIiwic2V0TnVtYmVyU3Rha2UiLCJ0b3RhbFN0YWtlIiwic2V0TW9uZXlXaW4iLCJ0b3RhbE1vbmV5IiwidXBkYXRlRGF0YVBob25nIiwicm9vbUlkIiwiZXZlbnRRdWF5TmhhbmgiLCJhZGROb3RpY2UiLCJnZXRTdHJpbmciLCJjaGVja0Vub3VnaE1vbmV5IiwiVG9hc3QiLCJzaG93VG9hc3QiLCJwYXVzZVN5c3RlbUV2ZW50Tm9kZSIsImFjdGl2ZSIsImF1dG9RdWF5IiwiZXZlbnRBdXRvUXVheSIsInJ1blF1YXkiLCJnZXRUb3RhbEJldCIsIlZhbXBpcmVSdW4iLCJnZXRJdGVtVHJpYWwiLCJiZXRSZXF1ZXN0IiwiVmFtcGlyZVJlcXVlc3QiLCJCZXRSZXF1ZXN0Iiwic2V0QmV0Iiwic2V0TGluZXNCZXQiLCJzZW5kIiwidG9TUmVxdWVzdCIsImV2ZW50U3RvcFF1YXkiLCJyZXF1ZXN0IiwiU3RvcEF1dG9QbGF5UmVxdWVzdCIsImV2ZW50UGhvbmciLCJkYXRhIiwiZ2V0VG90YWxMaW5lU2VsZWN0IiwiZXZlbnRTZWxlY3RMaW5lcyIsImV2ZW50T3BlbiIsInRvdGFsQmV0IiwidHlwZUxpbmUiLCJsaXN0TGluZSIsImkiLCJldmVudFF1YXkiLCJBdXRvUGxheVJlcXVlc3QiLCJiZXQiLCJnZXRUb3RhbExpbmUiLCJnZXRUb3RhbExpbmVMZSIsImdldFRvdGFsTGluZUNoYW4iLCJzZXRMaW5lTGUiLCJzZXRMaW5lQ2hhbiIsInNldExpbmUiLCJub2RlRXZlbnQiLCJpc1BhdXNlIiwic2V0TWF0ZXJpYWxHcmF5IiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJldmVudEJhY2siLCJVSU1hbmdlciIsInNob3ciLCJwb3AiLCJzcmMiLCJldmVudFNldHRpbmciLCJldmVudFZpbmhEYW5oIiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImV2ZW50TGljaFN1R2lhb0RpY2giLCJIaXN0b3J5UmVxdWVzdCIsImV2ZW50QmFuZ1RodW9uZyIsImV2ZW50Q2xvc2VCYW5nVGh1b25nIiwiZ2V0RGF0YVJlc3VsdCIsImNlbCIsImNlbF9pbmRleCIsImljb24iLCJpY29ucyIsInNldEljb24iLCJsaW5lV2luIiwiZnJlZUdpZnQiLCJpc0JvbnVzIiwiaXNGcmVlIiwic2Vzc2lvbiIsImlzTm9IdSIsImlzTm9odSIsImlzVGhhbmdMb24iLCJydW5SZWVscyIsIm51bWJlckl0ZW0iLCJsaXN0SXRlbSIsInJhbmRvbSIsIm5ld0FycmF5IiwicmFuZG9tQXJyIiwicmVmb3JtYXRSZXN1bHQiLCJzaXplIiwicmVzIiwic2xpY2UiLCJydW5BY3Rpb25Xb24iLCJydW5XaW5HYW1lIiwic2V0VGltZW91dCIsImJpbmQiLCJzZXRFdmVudE1haW5MaW5lIiwiY2hpbGRyZW4iLCJtYWluTGluZSIsImlzU2hvdyIsInBvc0xpbmUiLCJvbkVmIiwic2NoZWR1bGVPbmNlIiwib2ZmRWYiLCJzaG93TWFpbkxpbmUiLCJ1bnNjaGVkdWxlIiwib2ZmaG92ZXIiLCJzcGluIiwiY29weSIsIk1hdGgiLCJwb3ciLCJjaGVja0hhc01vbmV5IiwibWVzc2FnZSIsImdldENoaWxkQnlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBT0MsT0FBTyxDQUFDLGdCQUFELENBQXpCOztBQUNBLElBQUlDLE1BQU0sR0FBUUQsT0FBTyxDQUFDLFFBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsSUFBSSxHQUFVRixPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJRyxJQUFJLEdBQVVILE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBLElBQUlJLFdBQVcsR0FBR0osT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUssUUFB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K0IsU0FBL0IsRUFBMEM5RCxZQUExQyxDQUF1RHZNLEVBQUUsQ0FBQ2lCLEtBQTFELEVBQWlFOEMsTUFBakUsR0FBMEVxTSxPQUExRTtBQUNBbEIsSUFBQUEsVUFBVSxDQUFDLFlBQVU7QUFDakIvRyxNQUFBQSxJQUFJLENBQUMxSCxVQUFMLENBQWdCd0osTUFBaEIsR0FBeUIsS0FBekI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUEzbUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBXaW5HYW1lICAgICA9IHJlcXVpcmUoXCJWYW1waXJlV2luR2FtZVwiKTtcbmxldCBIZWxwZXIgICAgICA9IHJlcXVpcmUoXCJIZWxwZXJcIik7XG5sZXQgcmVlbCAgICAgICAgPSByZXF1aXJlKFwiVmFtcGlyZVJlZWxcIik7XG5sZXQgbGluZSAgICAgICAgPSByZXF1aXJlKFwiVmFtcGlyZUxpbmVcIik7XG5sZXQgVHJpYWxSZXN1bHQgPSByZXF1aXJlKFwiVHJpYWxSZXN1bHRcIik7XG5sZXQgTGFuZ3VhZ2UgICAgPSByZXF1aXJlKFwidmFtcGlyZUxhbmd1YWdlXCIpO1xubGV0IExpc3RSb29tID0gY2MuRW51bSh7XG4gICAgXCIxbFwiICAgOiAxLFxuICAgIFwiMWtcIiAgICA6IDIsXG4gICAgXCIxMGtcIiAgIDogM1xufSk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgcmVlbHM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogcmVlbCxcbiAgICAgICAgfSxcbiAgICAgICAgaWNvblByZWZhYiAgICAgICAgICA6IGNjLlByZWZhYixcbiAgICAgICAgbm90aWNlTm9kZSAgICAgICAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIGJnQmFuZ1RodW9uZyAgICAgICAgOiBjYy5Ob2RlLFxuICAgICAgICBidG5RdWF5ICAgICAgICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgYnRuUXVheU5oYW5oICAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIGJ0blN0b3BRdWF5ICAgICAgICAgOiBjYy5Ob2RlLFxuICAgICAgICBidG5BdXRvUXVheSAgICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgbGJOdW1iZXJMaW5lICAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk51bWJlclN0YWtlICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiTW9uZXlXaW4gICAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJTZXNzaW9uICAgICAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBzZWxlY3RMaW5lcyAgICAgICAgIDogbGluZSxcbiAgICAgICAgV2luR2FtZSAgICAgICAgICAgICA6IFdpbkdhbWUsXG4gICAgICAgIGxpc3RNYWluTGluZXMgICAgICAgOiBjYy5Ob2RlLFxuICAgICAgICAvLyBlZHRDaGVhdCAgICAgICAgICAgOiBjYy5FZGl0Qm94LFxuICAgICAgICBpc0F1dG8gICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIGlzRmFzdCAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgaXNTcGluICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICBpc0ZyZWVTcGluICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIHJlZCAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICBsYXN0UmVzdWx0ICAgICAgICAgIDogW10sXG4gICAgICAgIGJldFNlbGVjdCAgICAgICAgICAgOiAwLFxuICAgICAgICByb29tTnVtYmVyICAgICAgICAgIDogMCxcbiAgICAgICAgcG9zTGluZVdpbiAgICAgICAgICA6IDAsXG4gICAgICAgIHRvdGFsTGluZVdpbiAgICAgICAgOiAwLFxuICAgICAgICBfVG90YWxDb2x1bW4gICAgICAgIDogNSxcbiAgICAgICAgbGJfcGhvbmc6IGNjLkxhYmVsLFxuICAgICAgICBsYl9zb2R1OiBjYy5MYWJlbCxcbiAgICAgICAgbGJfaHU6IGNjLkxhYmVsLFxuICAgICAgICB0b2dnbGVNdXNpYzogY2MuVG9nZ2xlLFxuICAgICAgICB0b2dnbGVTb3VuZDogY2MuVG9nZ2xlLFxuICAgICAgICBiZ1NvdW5kOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kU3Bpbk1pczogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzb3VuZFNwaW5XaW46IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgc291bmRCaWdXaW46IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgc291bmRKYWNrcG90OiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kQm9udXM6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzb3VuZFNwaW46IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgbWVudVNldHRpbmc6IGNjLk5vZGUsXG4gICAgICAgIF9rZXlNdXNpYzogXCJtdXNpY19rY1wiLFxuICAgICAgICBfa2V5U291bmQ6IFwic291bmRfa2NcIixcbiAgICAgICAgX211c2ljU2xvdFN0YXRlIDogMCxcbiAgICAgICAgX3NvdW5kU2xvdFN0YXRlIDogMCxcbiAgICAgICAgX2lzRnJlZVRyaWFsIDogZmFsc2UsXG4gICAgICAgIF9teU1vbmV5VHJpYWwgOiAwLFxuICAgICAgICBfbXlTZXNzaW9uIDogMCxcbiAgICB9LFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIHRoaXMuX1RvdGFsQ29sdW1uICAgICA9IDU7XG4gICAgICAgIHRoaXMuVG90YWxJdGVtUnVuICAgICA9IDIwO1xuICAgICAgICB0aGlzLnRvdGFsU3ltYm9sICAgICAgPSA3O1xuICAgICAgICB0aGlzLndpbk1vbmV5ICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLmZyZWVTcGluICAgICAgICAgPSAwO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyICAgICAgID0gTGlzdFJvb21bXCIxbFwiXTtcbiAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy51cGRhdGVKYWNrcG90LCAzKTtcbiAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KCk7XG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKCk7XG4gICAgfSxcbiAgICBpbml0U291bmQoKSB7XG4gICAgICAgIHZhciBtdXNpY1NhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fa2V5TXVzaWMpO1xuICAgICAgICBpZiAobXVzaWNTYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX211c2ljU2xvdFN0YXRlID0gcGFyc2VJbnQobXVzaWNTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX211c2ljU2xvdFN0YXRlID0gMTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlNdXNpYywgXCIxXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNvdW5kU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9rZXlTb3VuZCk7XG4gICAgICAgIGlmIChzb3VuZFNhdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5fc291bmRTbG90U3RhdGUgPSBwYXJzZUludChzb3VuZFNhdmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc291bmRTbG90U3RhdGUgPSAxO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleVNvdW5kLCBcIjFcIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5iZ1NvdW5kICE9IG51bGwgJiYgIXRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljSWQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuYmdTb3VuZCwgdHJ1ZSwgMSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5tdXNpY0lkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25EaXNhYmxlKCl7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMubXVzaWNJZCk7XG4gICAgfSxcbiAgICBldmVudE11c2ljKCkge1xuICAgICAgICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSAgICAgICAgID0gdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQ/IDA6IDE7XG4gICAgICAgIGlmICghdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQpe1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMubXVzaWNJZCk7XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5TXVzaWMsICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSk7XG4gICAgfSxcbiAgICBldmVudFNvdW5kKCkge1xuICAgICAgICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9IHRoaXMudG9nZ2xlU291bmQuaXNDaGVja2VkPyAwOiAxO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5U291bmQsICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSk7XG4gICAgfSxcbiAgICBwbGF5U3BpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxheVNwaW5NaXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluTWlzLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlTcGluV2luKCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BpbldpbiwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGF5QmlnV2luKCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmlnV2luLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlKYWNrcG90KCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kSmFja3BvdCwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGF5Qm9udXMoKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCb251cywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGF5Q2xpY2soKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVKYWNrcG90KCl7XG4gICAgICAgIGxldCBrZXkgPSBcInZhbXBpcmVcIitjYy5iZXRMZXZlbDtcbiAgICAgICAgaWYoU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZil7XG4gICAgICAgICAgICBpZihTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGVKYWNrcG90ID0gU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShrZXkpO1xuICAgICAgICAgICAgICAgIGlmKHZhcmlhYmxlSmFja3BvdCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBqYWNrcG90ID0gdmFyaWFibGVKYWNrcG90LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9sYl9qYWNrcG90ID0gdGhpcy5sYl9odS5zdHJpbmc7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRfbGJfamFja3BvdCA9IGN1cnJlbnRfbGJfamFja3BvdC5zcGxpdChcIi5cIikuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRIdSA9IHBhcnNlRmxvYXQoY3VycmVudF9sYl9qYWNrcG90KTtcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMubnVtYmVyVG8odGhpcy5sYl9odSwgY3VycmVudEh1LCBqYWNrcG90LCAxMDAwLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVXNlclZhcmlhYmxlU2xvdChldmVudCl7XG4gICAgICAgIGxldCBrZXkgPSBcImZzdmFtcGlyZVwiK2NjLmJldExldmVsO1xuICAgICAgICBpZihldmVudC5jaGFuZ2VkVmFycy5pbmRleE9mKGtleSkgPj0gMCl7XG4gICAgICAgICAgICAvLyBnZXQgZnJlZSBzcGluZSBvZiByb29tIGluIGhlcmVcbiAgICAgICAgICAgIC8va2V5OiBcImZzXCIgKyBcInZhbXBpcmUxbFwiIGZyZWUgc3BpbiBvZiBiZXQgMTAwXG4gICAgICAgICAgICAvLyBrZXk6IFwiZnNcIiArIFwidmFtcGlyZTFrXCIgZnJlZSBzcGluIG9mIGJldCAxMDAwXG4gICAgICAgICAgICAvLyBrZXk6IFwiZnNcIiArIFwidmFtcGlyZTEwa1wiIGZyZWUgc3BpbiBvZiBiZXQgMTAwMFxuICAgICAgICAgICAgaWYoZXZlbnQudXNlci5pc0l0TWUpe1xuICAgICAgICAgICAgICAgIGxldCBmcmVlU3BpbiAgICA9IFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYuZ2V0VmFyaWFibGUoa2V5KS52YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVTcGluICAgPSBmcmVlU3BpbjtcbiAgICAgICAgICAgICAgICB0aGlzLldpbkdhbWUudXBkYXRlRnJlZVNwaW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlVXNlclZhcmlhYmxlKHN1YkNoaXApe1xuICAgICAgICBpZiAoIXRoaXMuX2lzRnJlZVRyaWFsICYmIGNjLmN1cnJlbnRVSSAhPSBcIlwiKVxuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKS1zdWJDaGlwKTtcbiAgICB9LFxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIG1tLmF1ZGlvLnBhdXNlTXVzaWMoKTtcbiAgICAgICAgaWYgKGNjLmJldExldmVsID09IFwiY2hvaXRodVwiKXtcbiAgICAgICAgICAgIHRoaXMuX2lzRnJlZVRyaWFsICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9teU1vbmV5VHJpYWwgICAgPSA1MDAwMDAwMDtcbiAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKDUwMDAwMDAwKTtcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbiAgICAgICA9IDA7XG4gICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLl9teVNlc3Npb247XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2lzRnJlZVRyaWFsICA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IExpc3RSb29tW2NjLmJldExldmVsXTtcbiAgICAgICAgaWYodGhpcy5yb29tTnVtYmVyID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFsXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gTGlzdFJvb21bY2MuYmV0TGV2ZWxdO1xuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSAodGhpcy5yb29tTnVtYmVyKSU0O1xuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSB0aGlzLnJvb21OdW1iZXIgPCAxID8gMTogdGhpcy5yb29tTnVtYmVyO1xuICAgICAgICB0aGlzLmxiX3Bob25nLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0TGluZXMuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5XaW5HYW1lLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMubGJNb25leVdpbi5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zaG93TGluZVdpbihmYWxzZSk7XG4gICAgICAgIG1tLkxvYWRpbmcuaGlkZSgpO1xuICAgIH0sXG4gICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IGxpbmVBcnIxID0gW107XG4gICAgICAgIGxldCBsaW5lQXJyMiA9IFtdO1xuICAgICAgICBsZXQgbGluZUFycjMgPSBbXTtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24ocmVlbCwgaW5kZXgpIHtcbiAgICAgICAgICAgIGxldCBsYXN0QXJyYXkgPSBbXTtcbiAgICAgICAgICAgIGxhc3RBcnJheSA9IHNlbGYuaW5pdFJhbmRvbUl0ZW1zKHNlbGYuVG90YWxJdGVtUnVuKTtcblxuICAgICAgICAgICAgbGluZUFycjEucHVzaChsYXN0QXJyYXlbbGFzdEFycmF5Lmxlbmd0aC0xXSk7XG4gICAgICAgICAgICBsaW5lQXJyMi5wdXNoKGxhc3RBcnJheVtsYXN0QXJyYXkubGVuZ3RoLTJdKTtcbiAgICAgICAgICAgIGxpbmVBcnIzLnB1c2gobGFzdEFycmF5W2xhc3RBcnJheS5sZW5ndGgtM10pO1xuICAgICAgICAgICAgcmVlbC5pbml0KHNlbGYsIGxhc3RBcnJheSk7XG4gICAgICAgIH0pKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICBzZWxmLmxhc3RSZXN1bHQgPSBsaW5lQXJyMy5jb25jYXQobGluZUFycjIpLmNvbmNhdChsaW5lQXJyMSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2V0TnVtYmVyTGluZXM6IGZ1bmN0aW9uKHRvdGFsTGluZXMpIHtcbiAgICAgICAgdGhpcy5sYk51bWJlckxpbmUuc3RyaW5nID0gdG90YWxMaW5lcztcbiAgICB9LFxuICAgIHNldE51bWJlclN0YWtlOiBmdW5jdGlvbih0b3RhbFN0YWtlKSB7XG4gICAgICAgIHRoaXMubGJOdW1iZXJTdGFrZS5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0b3RhbFN0YWtlKnRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XG4gICAgfSxcbiAgICBzZXRNb25leVdpbjogZnVuY3Rpb24odG90YWxNb25leSkge1xuICAgICAgICBIZWxwZXIubnVtYmVyVG8odGhpcy5sYk1vbmV5V2luLCBwYXJzZUludCh0aGlzLmxiTW9uZXlXaW4uc3RyaW5nKSwgdG90YWxNb25leSwgMTIwMCwgdHJ1ZSk7XG4gICAgICAgIGlmICghdGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gdGhpcy5fbXlNb25leVRyaWFsICsgdGhpcy53aW5Nb25leTtcbiAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9teU1vbmV5VHJpYWwpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTcGluICAgID0gZmFsc2U7XG4gICAgfSxcbiAgICB1cGRhdGVEYXRhUGhvbmcocm9vbUlkKSB7XG5cbiAgICB9LFxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxuICAgIGV2ZW50UXVheU5oYW5oOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X3RyaWFsXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1NwaW4pe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9pc19wbGF5aW5nXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNTcGluID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSB0cnVlO1xuICAgICAgICB0aGlzLmlzQXV0byA9IHRydWU7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5BdXRvUXVheSwgZmFsc2UpO1xuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheU5oYW5oLCB0cnVlKTtcbiAgICAgICAgdGhpcy5idG5TdG9wUXVheS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmF1dG9RdWF5KCk7XG4gICAgfSxcbiAgICBldmVudEF1dG9RdWF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X3RyaWFsXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1NwaW4pe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9pc19wbGF5aW5nXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzU3BpbiA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYXN0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuaXNBdXRvID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0bkF1dG9RdWF5LCB0cnVlKTtcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXlOaGFuaCwgZmFsc2UpO1xuICAgICAgICB0aGlzLmJ0blN0b3BRdWF5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0b1F1YXkoKTtcbiAgICB9LFxuICAgIHJ1blF1YXkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICB0aGlzLmlzU3BpbiAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9teU1vbmV5VHJpYWwgPSB0aGlzLl9teU1vbmV5VHJpYWwtdGhpcy5nZXRUb3RhbEJldCgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZnJlZVNwaW4gPCAxKVxuICAgICAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9teU1vbmV5VHJpYWwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX215TW9uZXlUcmlhbCA8IDEpXG4gICAgICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbisrO1xuICAgICAgICAgICAgdGhpcy5WYW1waXJlUnVuKFRyaWFsUmVzdWx0LmdldEl0ZW1UcmlhbCgpKTtcbiAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4tLTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLnBsYXlTcGluKCk7XG4gICAgICAgICAgICB0aGlzLmlzU3BpbiAgICA9IHRydWU7XG4gICAgICAgICAgICBsZXQgYmV0UmVxdWVzdCA9IG5ldyBWYW1waXJlUmVxdWVzdC5CZXRSZXF1ZXN0KCk7XG4gICAgICAgICAgICB0aGlzLnNob3dMaW5lV2luKGZhbHNlKTtcbiAgICAgICAgICAgIGJldFJlcXVlc3Quc2V0QmV0KHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XG4gICAgICAgICAgICB0aGlzLnNldExpbmVzQmV0KGJldFJlcXVlc3QpO1xuICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcbiAgICAgICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKGJldFJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICAgICAgICAgIC8vIHN1YiBtb25leVxuICAgICAgICAgICAgaWYgKHRoaXMuZnJlZVNwaW4gPCAxKVxuICAgICAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgLSB0aGlzLmdldFRvdGFsQmV0KCkpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBldmVudFN0b3BRdWF5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0F1dG8gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idG5TdG9wUXVheS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0bkF1dG9RdWF5LCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5TmhhbmgsIGZhbHNlKTtcblxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBWYW1waXJlUmVxdWVzdC5TdG9wQXV0b1BsYXlSZXF1ZXN0KCk7XG4gICAgICAgIFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICB9LFxuICAgIGV2ZW50UGhvbmc6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gKHRoaXMucm9vbU51bWJlciArIDEpJTQ7XG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IHRoaXMucm9vbU51bWJlciA8IDEgPyAxOiB0aGlzLnJvb21OdW1iZXI7XG4gICAgICAgIHRoaXMubGJfcGhvbmcuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICAgICB0aGlzLnNldE51bWJlclN0YWtlKHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lU2VsZWN0KCkpO1xuICAgICAgICBpZih0aGlzLnJvb21OdW1iZXIgPT0gMSl7XG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMWxcIjtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5yb29tTnVtYmVyID09IDIpe1xuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFrXCI7XG4gICAgICAgIH1lbHNlIGlmKHRoaXMucm9vbU51bWJlciA9PSAzKXtcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxMGtcIjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVwZGF0ZUphY2twb3QoKTtcbiAgICB9LFxuICAgIGV2ZW50U2VsZWN0TGluZXM6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RMaW5lcy5ldmVudE9wZW4oKTtcbiAgICB9LFxuICAgIGNoZWNrRW5vdWdoTW9uZXkoKXtcbiAgICAgICAgbGV0IHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMjU7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMTM7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgdG90YWxCZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCkgKiAxMjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBsZXQgbGlzdExpbmUgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTE7IGk8IHRoaXMuc2VsZWN0TGluZXMuZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdExpbmVzLmRhdGFbaV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExpbmUucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIGxpc3RMaW5lLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgPCB0b3RhbEJldCl7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhdXRvUXVheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluID4gMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudFF1YXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZnJlZVNwaW4gPCAxKXtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG8pe1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdCAgICA9IG5ldyBWYW1waXJlUmVxdWVzdC5BdXRvUGxheVJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRCZXQodGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMaW5lc0JldChyZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIC0gdGhpcy5nZXRUb3RhbEJldCgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UXVheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGdldFRvdGFsQmV0KCl7XG4gICAgICAgIGxldCBiZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCk7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xuICAgICAgICAgICAgY2FzZSAwOiAvLyBhbGxcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmUoKSAqIGJldDtcbiAgICAgICAgICAgIGNhc2UgMTogLy8gbGVcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVMZSgpKiBiZXQ7XG4gICAgICAgICAgICBjYXNlIDI6IC8vIGNoYW5cbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVDaGFuKCkqIGJldDtcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVTZWxlY3QoKSAqIGJldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmV0O1xuICAgIH0sXG4gICAgc2V0TGluZXNCZXQocmVxdWVzdCl7XG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0TGluZUxlKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRMaW5lQ2hhbigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIGxldCBsaXN0TGluZSA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MTsgaTwgdGhpcy5zZWxlY3RMaW5lcy5kYXRhLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TGluZXMuZGF0YVtpXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0TGluZS5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0TGluZShsaXN0TGluZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50UXVheTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmKCF0aGlzLl9pc0ZyZWVUcmlhbCAmJiAhdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheSwgdHJ1ZSk7XG4gICAgICAgIHRoaXMucnVuUXVheSgpO1xuICAgIH0sXG4gICAgcGF1c2VTeXN0ZW1FdmVudE5vZGU6IGZ1bmN0aW9uKG5vZGVFdmVudCwgaXNQYXVzZSkge1xuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KCBub2RlRXZlbnQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIGlzUGF1c2UpO1xuICAgICAgICBpZiAoaXNQYXVzZSl7XG4gICAgICAgICAgICBub2RlRXZlbnQucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XG4gICAgICAgIH1lbHNlXG4gICAgICAgICAgICBub2RlRXZlbnQucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xuICAgIH0sXG4gICAgZXZlbnRCYWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgVUlNYW5nZXIuc2hvdyhcIlVJVmFtcGlyZUxvYmJ5XCIsIHtwb3A6IHRydWUsIHNyYzogXCJ2YW1waXJlXCJ9KTtcbiAgICB9LFxuICAgIGV2ZW50U2V0dGluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMubWVudVNldHRpbmcuYWN0aXZlID0gIXRoaXMubWVudVNldHRpbmcuYWN0aXZlO1xuICAgIH0sXG4gICAgZXZlbnRWaW5oRGFuaDogZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IENhc2lub1JlcXVlc3QuTGVhZGVyQm9hcmRSZXF1ZXN0KCk7XG4gICAgICAgIFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICB9LFxuICAgIGV2ZW50TGljaFN1R2lhb0RpY2g6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0Lkhpc3RvcnlSZXF1ZXN0KCk7XG4gICAgICAgIFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICB9LFxuICAgIGV2ZW50QmFuZ1RodW9uZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmdCYW5nVGh1b25nLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBldmVudENsb3NlQmFuZ1RodW9uZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuYmdCYW5nVGh1b25nLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgVmFtcGlyZVJ1bjogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldERhdGFSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgICAgICBQcm9taXNlLmFsbChyZXN1bHQubWFwKGZ1bmN0aW9uKGNlbCwgY2VsX2luZGV4KXtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNlbC5tYXAoZnVuY3Rpb24oaWNvbiwgaW5kZXgpe1xuICAgICAgICAgICAgICAgIHNlbGYucmVlbHNbY2VsX2luZGV4XS5pY29uc1tpbmRleF0uc2V0SWNvbihpY29uLCB0cnVlKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBkYXRhLmxpbmVXaW47XG4gICAgICAgIHRoaXMud2luTW9uZXkgICA9IGRhdGEud2luTW9uZXk7XG4gICAgICAgIHRoaXMuZnJlZUdpZnQgICA9IGRhdGEuZnJlZUdpZnQ7XG4gICAgICAgIHRoaXMuaXNCb251cyAgICA9IGRhdGEuaXNCb251cztcbiAgICAgICAgdGhpcy5pc0ZyZWUgICAgID0gZGF0YS5pc0ZyZWVTcGluO1xuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSBkYXRhLnNlc3Npb247XG4gICAgICAgIHRoaXMuaXNOb0h1ICAgICA9IGRhdGEuaXNOb2h1O1xuICAgICAgICB0aGlzLmlzVGhhbmdMb24gPSBkYXRhLmlzVGhhbmdMb247XG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGRhdGEuZnJlZVNwaW47XG4gICAgICAgIHRoaXMudHlwZSAgICAgICA9IGRhdGEudHlwZTtcbiAgICAgICAgdGhpcy5ydW5SZWVscygpO1xuICAgICAgICBpZiAoIWRhdGEuaXNGcmVlU3BpbilcbiAgICAgICAgICAgIHRoaXMuV2luR2FtZS51cGRhdGVGcmVlU3BpbigpO1xuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nID0gXCIjXCIrdGhpcy5fbXlTZXNzaW9uO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuc2Vzc2lvbjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaW5pdFJhbmRvbUl0ZW1zOiBmdW5jdGlvbihudW1iZXJJdGVtKSB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IG51bWJlckl0ZW07IGkrKyl7XG4gICAgICAgICAgICBsaXN0SXRlbVtpXSA9IHRoaXMucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RJdGVtO1xuICAgIH0sXG4gICAgZ2V0RGF0YVJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fVG90YWxDb2x1bW47IGkrKyl7XG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdBcnJheVtpJXNlbGYuX1RvdGFsQ29sdW1uXS5wdXNoKHJlc3VsdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLl9Ub3RhbENvbHVtbjsgaSsrKXtcbiAgICAgICAgICAgIGxldCByYW5kb21BcnIgPSB0aGlzLmluaXRSYW5kb21JdGVtcyh0aGlzLlRvdGFsSXRlbVJ1bi02KTtcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gbmV3QXJyYXlbaV0uY29uY2F0KHJhbmRvbUFycik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCAgdGhpcy5sYXN0UmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdBcnJheVtpJXNlbGYuX1RvdGFsQ29sdW1uXS5wdXNoKCB0aGlzLmxhc3RSZXN1bHRbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0sXG4gICAgcmVmb3JtYXRSZXN1bHQocmVzdWx0LCBzaXplKSB7XG4gICAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7aSA8IHJlc3VsdC5sZW5ndGg7IGkgPSBpK3NpemUpXG4gICAgICAgICAgICByZXMucHVzaChyZXN1bHQuc2xpY2UoaSxpK3NpemUpKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LFxuICAgIHJ1bkFjdGlvbldvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hvd0xpbmVXaW4odHJ1ZSk7XG4gICAgICAgIHRoaXMuV2luR2FtZS5ydW5XaW5HYW1lKCk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5LCBmYWxzZSk7XG4gICAgfSxcbiAgICByZXN1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLndpbk1vbmV5ID4gMCl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgMzAwKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0RXZlbnRNYWluTGluZTogZnVuY3Rpb24oaXNQYXVzZSkge1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG1haW5MaW5lLCBpbmRleCl7XG4gICAgICAgICAgICBpZiAoaXNQYXVzZSlcbiAgICAgICAgICAgICAgICBtYWluTGluZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtYWluTGluZS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIHNob3dMaW5lV2luOiBmdW5jdGlvbihpc1Nob3cpIHtcbiAgICAgICAgLy8gYWRkIG1vbmV5XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGlzU2hvdyl7XG4gICAgICAgICAgICB0aGlzLnNldEV2ZW50TWFpbkxpbmUoaXNTaG93KTtcbiAgICAgICAgICAgIHRoaXMudG90YWxMaW5lV2luICAgPSB0aGlzLmxpbmVXaW4ubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5wb3NMaW5lV2luICAgICA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbExpbmVXaW4gPiAwKXtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpbmVXaW4ubWFwKGZ1bmN0aW9uKHBvc0xpbmUpe1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiVmFtcGlyZU1haW5MaW5lXCIpLm9uRWYoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoc2VsZi5saW5lV2luLm1hcChmdW5jdGlvbihwb3NMaW5lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5nZXRDb21wb25lbnQoXCJWYW1waXJlTWFpbkxpbmVcIikub2ZmRWYoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNjaGVkdWxlKCB0aGlzLnNob3dNYWluTGluZSwgMSk7XG4gICAgICAgICAgICAgICAgfSwgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNob3dNYWluTGluZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5saW5lV2luICYmIHRoaXMubGluZVdpbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saW5lV2luLm1hcChmdW5jdGlvbiAocG9zTGluZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiVmFtcGlyZU1haW5MaW5lXCIpLm9mZmhvdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNYWluTGluZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmxpbmVXaW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW4ldGhpcy50b3RhbExpbmVXaW5dXSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW4ldGhpcy50b3RhbExpbmVXaW5dXS5nZXRDb21wb25lbnQoXCJWYW1waXJlTWFpbkxpbmVcIikub2ZmRWYoKTtcbiAgICAgICAgICAgIHRoaXMucG9zTGluZVdpbiA9ICh0aGlzLnBvc0xpbmVXaW4rMSkldGhpcy50b3RhbExpbmVXaW47XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXS5nZXRDb21wb25lbnQoXCJWYW1waXJlTWFpbkxpbmVcIikub25FZigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBydW5SZWVsczogZnVuY3Rpb24gKCkge1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsLCBpbmRleCkge1xuICAgICAgICAgICAgcmVlbC5zcGluKGluZGV4KTtcbiAgICAgICAgfSkpO1xuICAgIH0sXG4gICAgY29weTogZnVuY3Rpb24oKXtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24ocmVlbCl7XG4gICAgICAgICAgICByZWVsLmljb25zW3JlZWwuaWNvbnMubGVuZ3RoLTFdLnNldEljb24ocmVlbC5pY29uc1syXS5kYXRhKTtcbiAgICAgICAgICAgIHJlZWwuaWNvbnNbcmVlbC5pY29ucy5sZW5ndGgtMl0uc2V0SWNvbihyZWVsLmljb25zWzFdLmRhdGEpO1xuICAgICAgICAgICAgcmVlbC5pY29uc1tyZWVsLmljb25zLmxlbmd0aC0zXS5zZXRJY29uKHJlZWwuaWNvbnNbMF0uZGF0YSk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIHJhbmRvbTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuICB+fihNYXRoLnJhbmRvbSgpKnRoaXMudG90YWxTeW1ib2wpO1xuICAgIH0sXG4gICAgZ2V0TW9uZXlJblJvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gMTAqTWF0aC5wb3coMTAsIHRoaXMucm9vbU51bWJlcik7XG4gICAgfSxcbiAgICBjaGVja0hhc01vbmV5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhZGROb3RpY2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm90aWNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiX25vdGlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBtZXNzYWdlO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLm5vdGljZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDEyMDApO1xuICAgIH1cbn0pO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVUlWYW1waXJlLmpzIl0sIm5hbWVzIjpbIldpbkdhbWUiLCJyZXF1aXJlIiwiSGVscGVyIiwicmVlbCIsImxpbmUiLCJUcmlhbFJlc3VsdCIsIkxhbmd1YWdlIiwiTGlzdFJvb20iLCJjYyIsIkVudW0iLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVlbHMiLCJ0eXBlIiwiaWNvblByZWZhYiIsIlByZWZhYiIsIm5vdGljZU5vZGUiLCJOb2RlIiwiYmdCYW5nVGh1b25nIiwiYnRuUXVheSIsImJ0blF1YXlOaGFuaCIsImJ0blN0b3BRdWF5IiwiYnRuQXV0b1F1YXkiLCJsYk51bWJlckxpbmUiLCJMYWJlbCIsImxiTnVtYmVyU3Rha2UiLCJsYk1vbmV5V2luIiwibGJTZXNzaW9uIiwic2VsZWN0TGluZXMiLCJsaXN0TWFpbkxpbmVzIiwiaXNBdXRvIiwiaXNGYXN0IiwiaXNTcGluIiwiaXNGcmVlU3BpbiIsInJlZCIsImxhc3RSZXN1bHQiLCJiZXRTZWxlY3QiLCJyb29tTnVtYmVyIiwicG9zTGluZVdpbiIsInRvdGFsTGluZVdpbiIsIl9Ub3RhbENvbHVtbiIsImxiX3Bob25nIiwibGJfc29kdSIsImxiX2h1IiwidG9nZ2xlTXVzaWMiLCJUb2dnbGUiLCJ0b2dnbGVTb3VuZCIsImJnU291bmQiLCJBdWRpb0NsaXAiLCJzb3VuZFNwaW5NaXMiLCJzb3VuZFNwaW5XaW4iLCJzb3VuZEJpZ1dpbiIsInNvdW5kSmFja3BvdCIsInNvdW5kQm9udXMiLCJzb3VuZENsaWNrIiwic291bmRTcGluIiwibWVudVNldHRpbmciLCJfa2V5TXVzaWMiLCJfa2V5U291bmQiLCJfbXVzaWNTbG90U3RhdGUiLCJfc291bmRTbG90U3RhdGUiLCJfaXNGcmVlVHJpYWwiLCJfbXlNb25leVRyaWFsIiwiX215U2Vzc2lvbiIsIm9uTG9hZCIsIlRvdGFsSXRlbVJ1biIsInRvdGFsU3ltYm9sIiwid2luTW9uZXkiLCJmcmVlU3BpbiIsImluaXQiLCJzdHJpbmciLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwiR2FtZVZhcmlhYmxlcyIsIlBva2VyIiwiZ2V0Q2hpcCIsIlNtYXJ0Rm94U0RLIiwiVmFtcGlyZUNvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJteVNlbGYiLCJzY2hlZHVsZSIsInVwZGF0ZUphY2twb3QiLCJpbml0U291bmQiLCJtdXNpY1NhdmUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJzZXRJdGVtIiwic291bmRTYXZlIiwiaXNDaGVja2VkIiwibXVzaWNJZCIsImF1ZGlvRW5naW5lIiwicGxheSIsInBhdXNlIiwib25EaXNhYmxlIiwiZXZlbnRNdXNpYyIsInJlc3VtZSIsImV2ZW50U291bmQiLCJwbGF5U3BpbiIsInBsYXlTcGluTWlzIiwicGxheVNwaW5XaW4iLCJwbGF5QmlnV2luIiwicGxheUphY2twb3QiLCJwbGF5Qm9udXMiLCJwbGF5Q2xpY2siLCJrZXkiLCJiZXRMZXZlbCIsInZhcmlhYmxlSmFja3BvdCIsImdldFZhcmlhYmxlIiwiamFja3BvdCIsInZhbHVlIiwiY3VycmVudF9sYl9qYWNrcG90Iiwic3BsaXQiLCJqb2luIiwiY3VycmVudEh1IiwicGFyc2VGbG9hdCIsIm51bWJlclRvIiwidXBkYXRlVXNlclZhcmlhYmxlU2xvdCIsImV2ZW50IiwiY2hhbmdlZFZhcnMiLCJpbmRleE9mIiwidXNlciIsImlzSXRNZSIsInVwZGF0ZUZyZWVTcGluIiwidXBkYXRlVXNlclZhcmlhYmxlIiwic3ViQ2hpcCIsImN1cnJlbnRVSSIsIm9uRW5hYmxlIiwibW0iLCJhdWRpbyIsInBhdXNlTXVzaWMiLCJ1bmRlZmluZWQiLCJudW1iZXJXaXRoQ29tbWFzIiwiZ2V0TW9uZXlJblJvb20iLCJzaG93TGluZVdpbiIsIkxvYWRpbmciLCJoaWRlIiwic2VsZiIsImxpbmVBcnIxIiwibGluZUFycjIiLCJsaW5lQXJyMyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsImxhc3RBcnJheSIsImluaXRSYW5kb21JdGVtcyIsInB1c2giLCJsZW5ndGgiLCJ0aGVuIiwicmVzdWx0IiwiY29uY2F0Iiwic2V0TnVtYmVyTGluZXMiLCJ0b3RhbExpbmVzIiwic2V0TnVtYmVyU3Rha2UiLCJ0b3RhbFN0YWtlIiwic2V0TW9uZXlXaW4iLCJ0b3RhbE1vbmV5IiwidXBkYXRlRGF0YVBob25nIiwicm9vbUlkIiwiZXZlbnRRdWF5TmhhbmgiLCJhZGROb3RpY2UiLCJnZXRTdHJpbmciLCJjaGVja0Vub3VnaE1vbmV5IiwiVG9hc3QiLCJzaG93VG9hc3QiLCJwYXVzZVN5c3RlbUV2ZW50Tm9kZSIsImFjdGl2ZSIsImF1dG9RdWF5IiwiZXZlbnRBdXRvUXVheSIsInJ1blF1YXkiLCJnZXRUb3RhbEJldCIsIlZhbXBpcmVSdW4iLCJnZXRJdGVtVHJpYWwiLCJiZXRSZXF1ZXN0IiwiVmFtcGlyZVJlcXVlc3QiLCJCZXRSZXF1ZXN0Iiwic2V0QmV0Iiwic2V0TGluZXNCZXQiLCJzZW5kIiwidG9TUmVxdWVzdCIsImV2ZW50U3RvcFF1YXkiLCJyZXF1ZXN0IiwiU3RvcEF1dG9QbGF5UmVxdWVzdCIsImV2ZW50UGhvbmciLCJkYXRhIiwiZ2V0VG90YWxMaW5lU2VsZWN0IiwiZXZlbnRTZWxlY3RMaW5lcyIsImV2ZW50T3BlbiIsInRvdGFsQmV0IiwidHlwZUxpbmUiLCJsaXN0TGluZSIsImkiLCJldmVudFF1YXkiLCJBdXRvUGxheVJlcXVlc3QiLCJiZXQiLCJnZXRUb3RhbExpbmUiLCJnZXRUb3RhbExpbmVMZSIsImdldFRvdGFsTGluZUNoYW4iLCJzZXRMaW5lTGUiLCJzZXRMaW5lQ2hhbiIsInNldExpbmUiLCJub2RlRXZlbnQiLCJpc1BhdXNlIiwic2V0TWF0ZXJpYWxHcmF5IiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJldmVudEJhY2siLCJVSU1hbmdlciIsInNob3ciLCJwb3AiLCJzcmMiLCJldmVudFNldHRpbmciLCJldmVudFZpbmhEYW5oIiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImV2ZW50TGljaFN1R2lhb0RpY2giLCJIaXN0b3J5UmVxdWVzdCIsImV2ZW50QmFuZ1RodW9uZyIsImV2ZW50Q2xvc2VCYW5nVGh1b25nIiwiZ2V0RGF0YVJlc3VsdCIsImNlbCIsImNlbF9pbmRleCIsImljb24iLCJpY29ucyIsInNldEljb24iLCJsaW5lV2luIiwiZnJlZUdpZnQiLCJpc0JvbnVzIiwiaXNGcmVlIiwic2Vzc2lvbiIsImlzTm9IdSIsImlzTm9odSIsImlzVGhhbmdMb24iLCJydW5SZWVscyIsIm51bWJlckl0ZW0iLCJsaXN0SXRlbSIsInJhbmRvbSIsIm5ld0FycmF5IiwicmFuZG9tQXJyIiwicmVmb3JtYXRSZXN1bHQiLCJzaXplIiwicmVzIiwic2xpY2UiLCJydW5BY3Rpb25Xb24iLCJydW5XaW5HYW1lIiwic2V0VGltZW91dCIsImJpbmQiLCJzZXRFdmVudE1haW5MaW5lIiwiY2hpbGRyZW4iLCJtYWluTGluZSIsImlzU2hvdyIsInBvc0xpbmUiLCJvbkVmIiwic2NoZWR1bGVPbmNlIiwib2ZmRWYiLCJzaG93TWFpbkxpbmUiLCJ1bnNjaGVkdWxlIiwib2ZmaG92ZXIiLCJzcGluIiwiY29weSIsIk1hdGgiLCJwb3ciLCJjaGVja0hhc01vbmV5IiwibWVzc2FnZSIsImdldENoaWxkQnlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBT0MsT0FBTyxDQUFDLGdCQUFELENBQXpCOztBQUNBLElBQUlDLE1BQU0sR0FBUUQsT0FBTyxDQUFDLFFBQUQsQ0FBekI7O0FBQ0EsSUFBSUUsSUFBSSxHQUFVRixPQUFPLENBQUMsYUFBRCxDQUF6Qjs7QUFDQSxJQUFJRyxJQUFJLEdBQVVILE9BQU8sQ0FBQyxhQUFELENBQXpCOztBQUNBLElBQUlJLFdBQVcsR0FBR0osT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUss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Q0FBK0IsU0FBL0IsRUFBMEM5RCxZQUExQyxDQUF1RHZNLEVBQUUsQ0FBQ2lCLEtBQTFELEVBQWlFOEMsTUFBakUsR0FBMEVxTSxPQUExRTtBQUNBbEIsSUFBQUEsVUFBVSxDQUFDLFlBQVU7QUFDakIvRyxNQUFBQSxJQUFJLENBQUMxSCxVQUFMLENBQWdCd0osTUFBaEIsR0FBeUIsS0FBekI7QUFDSCxLQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0g7QUEzbUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBXaW5HYW1lICAgICA9IHJlcXVpcmUoXCJWYW1waXJlV2luR2FtZVwiKTtcclxubGV0IEhlbHBlciAgICAgID0gcmVxdWlyZShcIkhlbHBlclwiKTtcclxubGV0IHJlZWwgICAgICAgID0gcmVxdWlyZShcIlZhbXBpcmVSZWVsXCIpO1xyXG5sZXQgbGluZSAgICAgICAgPSByZXF1aXJlKFwiVmFtcGlyZUxpbmVcIik7XHJcbmxldCBUcmlhbFJlc3VsdCA9IHJlcXVpcmUoXCJUcmlhbFJlc3VsdFwiKTtcclxubGV0IExhbmd1YWdlICAgID0gcmVxdWlyZShcInZhbXBpcmVMYW5ndWFnZVwiKTtcclxubGV0IExpc3RSb29tID0gY2MuRW51bSh7XHJcbiAgICBcIjFsXCIgICA6IDEsXHJcbiAgICBcIjFrXCIgICAgOiAyLFxyXG4gICAgXCIxMGtcIiAgIDogM1xyXG59KTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVlbHM6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogW10sXHJcbiAgICAgICAgICAgIHR5cGU6IHJlZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBpY29uUHJlZmFiICAgICAgICAgIDogY2MuUHJlZmFiLFxyXG4gICAgICAgIG5vdGljZU5vZGUgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJnQmFuZ1RodW9uZyAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0blF1YXkgICAgICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0blF1YXlOaGFuaCAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0blN0b3BRdWF5ICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJ0bkF1dG9RdWF5ICAgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxiTnVtYmVyTGluZSAgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYk51bWJlclN0YWtlICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJNb25leVdpbiAgICAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiU2Vzc2lvbiAgICAgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBzZWxlY3RMaW5lcyAgICAgICAgIDogbGluZSxcclxuICAgICAgICBXaW5HYW1lICAgICAgICAgICAgIDogV2luR2FtZSxcclxuICAgICAgICBsaXN0TWFpbkxpbmVzICAgICAgIDogY2MuTm9kZSxcclxuICAgICAgICAvLyBlZHRDaGVhdCAgICAgICAgICAgOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIGlzQXV0byAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICBpc0Zhc3QgICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgaXNTcGluICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgIGlzRnJlZVNwaW4gICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICByZWQgICAgICAgICAgICAgICAgIDogdHJ1ZSxcclxuICAgICAgICBsYXN0UmVzdWx0ICAgICAgICAgIDogW10sXHJcbiAgICAgICAgYmV0U2VsZWN0ICAgICAgICAgICA6IDAsXHJcbiAgICAgICAgcm9vbU51bWJlciAgICAgICAgICA6IDAsXHJcbiAgICAgICAgcG9zTGluZVdpbiAgICAgICAgICA6IDAsXHJcbiAgICAgICAgdG90YWxMaW5lV2luICAgICAgICA6IDAsXHJcbiAgICAgICAgX1RvdGFsQ29sdW1uICAgICAgICA6IDUsXHJcbiAgICAgICAgbGJfcGhvbmc6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiX3NvZHU6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiX2h1OiBjYy5MYWJlbCxcclxuICAgICAgICB0b2dnbGVNdXNpYzogY2MuVG9nZ2xlLFxyXG4gICAgICAgIHRvZ2dsZVNvdW5kOiBjYy5Ub2dnbGUsXHJcbiAgICAgICAgYmdTb3VuZDogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kU3Bpbk1pczogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kU3BpbldpbjogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kQmlnV2luOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRKYWNrcG90OiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRCb251czogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBzb3VuZFNwaW46IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBtZW51U2V0dGluZzogY2MuTm9kZSxcclxuICAgICAgICBfa2V5TXVzaWM6IFwibXVzaWNfa2NcIixcclxuICAgICAgICBfa2V5U291bmQ6IFwic291bmRfa2NcIixcclxuICAgICAgICBfbXVzaWNTbG90U3RhdGUgOiAwLFxyXG4gICAgICAgIF9zb3VuZFNsb3RTdGF0ZSA6IDAsXHJcbiAgICAgICAgX2lzRnJlZVRyaWFsIDogZmFsc2UsXHJcbiAgICAgICAgX215TW9uZXlUcmlhbCA6IDAsXHJcbiAgICAgICAgX215U2Vzc2lvbiA6IDAsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICB0aGlzLl9Ub3RhbENvbHVtbiAgICAgPSA1O1xyXG4gICAgICAgIHRoaXMuVG90YWxJdGVtUnVuICAgICA9IDIwO1xyXG4gICAgICAgIHRoaXMudG90YWxTeW1ib2wgICAgICA9IDc7XHJcbiAgICAgICAgdGhpcy53aW5Nb25leSAgICAgICAgID0gMDtcclxuICAgICAgICB0aGlzLmZyZWVTcGluICAgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMucm9vbU51bWJlciAgICAgICA9IExpc3RSb29tW1wiMWxcIl07XHJcbiAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLnVwZGF0ZUphY2twb3QsIDMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xyXG4gICAgICAgIHRoaXMuaW5pdFNvdW5kKCk7XHJcbiAgICB9LFxyXG4gICAgaW5pdFNvdW5kKCkge1xyXG4gICAgICAgIHZhciBtdXNpY1NhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fa2V5TXVzaWMpO1xyXG4gICAgICAgIGlmIChtdXNpY1NhdmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSA9IHBhcnNlSW50KG11c2ljU2F2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fbXVzaWNTbG90U3RhdGUgPSAxO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5TXVzaWMsIFwiMVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzb3VuZFNhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fa2V5U291bmQpO1xyXG4gICAgICAgIGlmIChzb3VuZFNhdmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9IHBhcnNlSW50KHNvdW5kU2F2ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fc291bmRTbG90U3RhdGUgPSAxO1xyXG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5U291bmQsIFwiMVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5iZ1NvdW5kICE9IG51bGwgJiYgIXRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubXVzaWNJZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5iZ1NvdW5kLCB0cnVlLCAxKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5tdXNpY0lkKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25EaXNhYmxlKCl7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5tdXNpY0lkKTtcclxuICAgIH0sXHJcbiAgICBldmVudE11c2ljKCkge1xyXG4gICAgICAgIHRoaXMuX211c2ljU2xvdFN0YXRlICAgICAgICAgPSB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZD8gMDogMTtcclxuICAgICAgICBpZiAoIXRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkKXtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMubXVzaWNJZCk7XHJcbiAgICAgICAgfWVsc2VcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5tdXNpY0lkKTtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5TXVzaWMsICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTb3VuZCgpIHtcclxuICAgICAgICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9IHRoaXMudG9nZ2xlU291bmQuaXNDaGVja2VkPyAwOiAxO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlTb3VuZCwgIHRoaXMuX3NvdW5kU2xvdFN0YXRlKTtcclxuICAgIH0sXHJcbiAgICBwbGF5U3BpbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlTcGluTWlzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5NaXMsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheVNwaW5XaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3BpbldpbiwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGF5QmlnV2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJpZ1dpbiwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGF5SmFja3BvdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRKYWNrcG90LCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlCb251cygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRCb251cywgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGF5Q2xpY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlSmFja3BvdCgpe1xyXG4gICAgICAgIGxldCBrZXkgPSBcInZhbXBpcmVcIitjYy5iZXRMZXZlbDtcclxuICAgICAgICBpZihTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcclxuICAgICAgICAgICAgaWYoU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZil7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFyaWFibGVKYWNrcG90ID0gU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYodmFyaWFibGVKYWNrcG90KXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgamFja3BvdCA9IHZhcmlhYmxlSmFja3BvdC52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudF9sYl9qYWNrcG90ID0gdGhpcy5sYl9odS5zdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudF9sYl9qYWNrcG90ID0gY3VycmVudF9sYl9qYWNrcG90LnNwbGl0KFwiLlwiKS5qb2luKFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SHUgPSBwYXJzZUZsb2F0KGN1cnJlbnRfbGJfamFja3BvdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgVXRpbHMubnVtYmVyVG8odGhpcy5sYl9odSwgY3VycmVudEh1LCBqYWNrcG90LCAxMDAwLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVXNlclZhcmlhYmxlU2xvdChldmVudCl7XHJcbiAgICAgICAgbGV0IGtleSA9IFwiZnN2YW1waXJlXCIrY2MuYmV0TGV2ZWw7XHJcbiAgICAgICAgaWYoZXZlbnQuY2hhbmdlZFZhcnMuaW5kZXhPZihrZXkpID49IDApe1xyXG4gICAgICAgICAgICAvLyBnZXQgZnJlZSBzcGluZSBvZiByb29tIGluIGhlcmVcclxuICAgICAgICAgICAgLy9rZXk6IFwiZnNcIiArIFwidmFtcGlyZTFsXCIgZnJlZSBzcGluIG9mIGJldCAxMDBcclxuICAgICAgICAgICAgLy8ga2V5OiBcImZzXCIgKyBcInZhbXBpcmUxa1wiIGZyZWUgc3BpbiBvZiBiZXQgMTAwMFxyXG4gICAgICAgICAgICAvLyBrZXk6IFwiZnNcIiArIFwidmFtcGlyZTEwa1wiIGZyZWUgc3BpbiBvZiBiZXQgMTAwMFxyXG4gICAgICAgICAgICBpZihldmVudC51c2VyLmlzSXRNZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJlZVNwaW4gICAgPSBTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLmdldFZhcmlhYmxlKGtleSkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVTcGluICAgPSBmcmVlU3BpbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuV2luR2FtZS51cGRhdGVGcmVlU3BpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVVzZXJWYXJpYWJsZShzdWJDaGlwKXtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzRnJlZVRyaWFsICYmIGNjLmN1cnJlbnRVSSAhPSBcIlwiKVxyXG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpLXN1YkNoaXApO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGF1c2VNdXNpYygpO1xyXG4gICAgICAgIGlmIChjYy5iZXRMZXZlbCA9PSBcImNob2l0aHVcIil7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRnJlZVRyaWFsICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX215TW9uZXlUcmlhbCAgICA9IDUwMDAwMDAwO1xyXG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nICAgPSBVdGlscy5hZGREb3RUb051bWJlcig1MDAwMDAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbiAgICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuX215U2Vzc2lvbjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gMDtcclxuICAgICAgICAgICAgdGhpcy5faXNGcmVlVHJpYWwgID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IExpc3RSb29tW2NjLmJldExldmVsXTtcclxuICAgICAgICBpZih0aGlzLnJvb21OdW1iZXIgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSBMaXN0Um9vbVtjYy5iZXRMZXZlbF07XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gKHRoaXMucm9vbU51bWJlciklNDtcclxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSB0aGlzLnJvb21OdW1iZXIgPCAxID8gMTogdGhpcy5yb29tTnVtYmVyO1xyXG4gICAgICAgIHRoaXMubGJfcGhvbmcuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy5nZXRNb25leUluUm9vbSgpKTtcclxuICAgICAgICB0aGlzLnNlbGVjdExpbmVzLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5XaW5HYW1lLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5sYk1vbmV5V2luLnN0cmluZyA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xyXG4gICAgICAgIG1tLkxvYWRpbmcuaGlkZSgpO1xyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbGluZUFycjEgPSBbXTtcclxuICAgICAgICBsZXQgbGluZUFycjIgPSBbXTtcclxuICAgICAgICBsZXQgbGluZUFycjMgPSBbXTtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsLCBpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdEFycmF5ID0gW107XHJcbiAgICAgICAgICAgIGxhc3RBcnJheSA9IHNlbGYuaW5pdFJhbmRvbUl0ZW1zKHNlbGYuVG90YWxJdGVtUnVuKTtcclxuXHJcbiAgICAgICAgICAgIGxpbmVBcnIxLnB1c2gobGFzdEFycmF5W2xhc3RBcnJheS5sZW5ndGgtMV0pO1xyXG4gICAgICAgICAgICBsaW5lQXJyMi5wdXNoKGxhc3RBcnJheVtsYXN0QXJyYXkubGVuZ3RoLTJdKTtcclxuICAgICAgICAgICAgbGluZUFycjMucHVzaChsYXN0QXJyYXlbbGFzdEFycmF5Lmxlbmd0aC0zXSk7XHJcbiAgICAgICAgICAgIHJlZWwuaW5pdChzZWxmLCBsYXN0QXJyYXkpO1xyXG4gICAgICAgIH0pKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYubGFzdFJlc3VsdCA9IGxpbmVBcnIzLmNvbmNhdChsaW5lQXJyMikuY29uY2F0KGxpbmVBcnIxKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXROdW1iZXJMaW5lczogZnVuY3Rpb24odG90YWxMaW5lcykge1xyXG4gICAgICAgIHRoaXMubGJOdW1iZXJMaW5lLnN0cmluZyA9IHRvdGFsTGluZXM7XHJcbiAgICB9LFxyXG4gICAgc2V0TnVtYmVyU3Rha2U6IGZ1bmN0aW9uKHRvdGFsU3Rha2UpIHtcclxuICAgICAgICB0aGlzLmxiTnVtYmVyU3Rha2Uuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXModG90YWxTdGFrZSp0aGlzLmdldE1vbmV5SW5Sb29tKCkpO1xyXG4gICAgfSxcclxuICAgIHNldE1vbmV5V2luOiBmdW5jdGlvbih0b3RhbE1vbmV5KSB7XHJcbiAgICAgICAgSGVscGVyLm51bWJlclRvKHRoaXMubGJNb25leVdpbiwgcGFyc2VJbnQodGhpcy5sYk1vbmV5V2luLnN0cmluZyksIHRvdGFsTW9uZXksIDEyMDAsIHRydWUpO1xyXG4gICAgICAgIGlmICghdGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gdGhpcy5fbXlNb25leVRyaWFsICsgdGhpcy53aW5Nb25leTtcclxuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHRoaXMuX215TW9uZXlUcmlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTcGluICAgID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRGF0YVBob25nKHJvb21JZCkge1xyXG5cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIGV2ZW50UXVheU5oYW5oOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1NwaW4pe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzU3BpbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNBdXRvID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuQXV0b1F1YXksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheU5oYW5oLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmJ0blN0b3BRdWF5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hdXRvUXVheSgpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50QXV0b1F1YXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X3RyaWFsXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3Bpbil7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1NwaW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNGYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0F1dG8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5BdXRvUXVheSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXlOaGFuaCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYnRuU3RvcFF1YXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmF1dG9RdWF5KCk7XHJcbiAgICB9LFxyXG4gICAgcnVuUXVheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmlzU3BpbiAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX215TW9uZXlUcmlhbCA9IHRoaXMuX215TW9uZXlUcmlhbC10aGlzLmdldFRvdGFsQmV0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9teU1vbmV5VHJpYWwpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbXlNb25leVRyaWFsIDwgMSlcclxuICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbisrO1xyXG4gICAgICAgICAgICB0aGlzLlZhbXBpcmVSdW4oVHJpYWxSZXN1bHQuZ2V0SXRlbVRyaWFsKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmZyZWVTcGluLS07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVNwaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5pc1NwaW4gICAgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgYmV0UmVxdWVzdCA9IG5ldyBWYW1waXJlUmVxdWVzdC5CZXRSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xyXG4gICAgICAgICAgICBiZXRSZXF1ZXN0LnNldEJldCh0aGlzLmdldE1vbmV5SW5Sb29tKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExpbmVzQmV0KGJldFJlcXVlc3QpO1xyXG4gICAgICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xyXG4gICAgICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChiZXRSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICAgICAgICAgIC8vIHN1YiBtb25leVxyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA8IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIC0gdGhpcy5nZXRUb3RhbEJldCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTdG9wUXVheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQXV0byA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuU3RvcFF1YXkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0bkF1dG9RdWF5LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXlOaGFuaCwgZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBWYW1waXJlUmVxdWVzdC5TdG9wQXV0b1BsYXlSZXF1ZXN0KCk7XHJcbiAgICAgICAgU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50UGhvbmc6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3BpbiB8fCB0aGlzLmlzQXV0byB8fCB0aGlzLmlzRmFzdCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gKHRoaXMucm9vbU51bWJlciArIDEpJTQ7XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gdGhpcy5yb29tTnVtYmVyIDwgMSA/IDE6IHRoaXMucm9vbU51bWJlcjtcclxuICAgICAgICB0aGlzLmxiX3Bob25nLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XHJcbiAgICAgICB0aGlzLnNldE51bWJlclN0YWtlKHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lU2VsZWN0KCkpO1xyXG4gICAgICAgIGlmKHRoaXMucm9vbU51bWJlciA9PSAxKXtcclxuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFsXCI7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5yb29tTnVtYmVyID09IDIpe1xyXG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMWtcIjtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnJvb21OdW1iZXIgPT0gMyl7XHJcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxMGtcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTZWxlY3RMaW5lczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9pc19wbGF5aW5nXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdExpbmVzLmV2ZW50T3BlbigpO1xyXG4gICAgfSxcclxuICAgIGNoZWNrRW5vdWdoTW9uZXkoKXtcclxuICAgICAgICBsZXQgdG90YWxCZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCkgKiAyNTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0TGluZXMudHlwZUxpbmUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgdG90YWxCZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCkgKiAxMztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIDEyO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIGxldCBsaXN0TGluZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0xOyBpPCB0aGlzLnNlbGVjdExpbmVzLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdExpbmVzLmRhdGFbaV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0TGluZS5wdXNoKGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogbGlzdExpbmUubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5WYW1waXJlQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSA8IHRvdGFsQmV0KXtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhdXRvUXVheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA+IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudFF1YXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJlZVNwaW4gPCAxKXtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQXV0byl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgICAgPSBuZXcgVmFtcGlyZVJlcXVlc3QuQXV0b1BsYXlSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRCZXQodGhpcy5nZXRNb25leUluUm9vbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExpbmVzQmV0KHJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgLSB0aGlzLmdldFRvdGFsQmV0KCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRRdWF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGdldFRvdGFsQmV0KCl7XHJcbiAgICAgICAgbGV0IGJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKTtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0TGluZXMudHlwZUxpbmUpIHtcclxuICAgICAgICAgICAgY2FzZSAwOiAvLyBhbGxcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdExpbmVzLmdldFRvdGFsTGluZSgpICogYmV0O1xyXG4gICAgICAgICAgICBjYXNlIDE6IC8vIGxlXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVMZSgpKiBiZXQ7XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy8gY2hhblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lQ2hhbigpKiBiZXQ7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdExpbmVzLmdldFRvdGFsTGluZVNlbGVjdCgpICogYmV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmV0O1xyXG4gICAgfSxcclxuICAgIHNldExpbmVzQmV0KHJlcXVlc3Qpe1xyXG4gICAgICAgIHN3aXRjaCAodGhpcy5zZWxlY3RMaW5lcy50eXBlTGluZSkge1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldExpbmVMZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0TGluZUNoYW4oKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdExpbmUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MTsgaTwgdGhpcy5zZWxlY3RMaW5lcy5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RMaW5lcy5kYXRhW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExpbmUucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldExpbmUobGlzdExpbmUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50UXVheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuX2lzRnJlZVRyaWFsICYmICF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXksIHRydWUpO1xyXG4gICAgICAgIHRoaXMucnVuUXVheSgpO1xyXG4gICAgfSxcclxuICAgIHBhdXNlU3lzdGVtRXZlbnROb2RlOiBmdW5jdGlvbihub2RlRXZlbnQsIGlzUGF1c2UpIHtcclxuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KCBub2RlRXZlbnQuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSksIGlzUGF1c2UpO1xyXG4gICAgICAgIGlmIChpc1BhdXNlKXtcclxuICAgICAgICAgICAgbm9kZUV2ZW50LnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIH1lbHNlXHJcbiAgICAgICAgICAgIG5vZGVFdmVudC5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRCYWNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NwaW4gfHwgdGhpcy5pc0F1dG8gfHwgdGhpcy5pc0Zhc3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSVZhbXBpcmVMb2JieVwiLCB7cG9wOiB0cnVlLCBzcmM6IFwidmFtcGlyZVwifSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTZXR0aW5nOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLm1lbnVTZXR0aW5nLmFjdGl2ZSA9ICF0aGlzLm1lbnVTZXR0aW5nLmFjdGl2ZTtcclxuICAgIH0sXHJcbiAgICBldmVudFZpbmhEYW5oOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0LkxlYWRlckJvYXJkUmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcclxuICAgIH0sXHJcbiAgICBldmVudExpY2hTdUdpYW9EaWNoOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0Lkhpc3RvcnlSZXF1ZXN0KCk7XHJcbiAgICAgICAgU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50QmFuZ1RodW9uZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5iZ0JhbmdUaHVvbmcuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlQmFuZ1RodW9uZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5iZ0JhbmdUaHVvbmcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgVmFtcGlyZVJ1bjogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgdGhpcy5zaG93TGluZVdpbihmYWxzZSk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldERhdGFSZXN1bHQoZGF0YS5yZXN1bHQpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHJlc3VsdC5tYXAoZnVuY3Rpb24oY2VsLCBjZWxfaW5kZXgpe1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjZWwubWFwKGZ1bmN0aW9uKGljb24sIGluZGV4KXtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVlbHNbY2VsX2luZGV4XS5pY29uc1tpbmRleF0uc2V0SWNvbihpY29uLCB0cnVlKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBkYXRhLmxpbmVXaW47XHJcbiAgICAgICAgdGhpcy53aW5Nb25leSAgID0gZGF0YS53aW5Nb25leTtcclxuICAgICAgICB0aGlzLmZyZWVHaWZ0ICAgPSBkYXRhLmZyZWVHaWZ0O1xyXG4gICAgICAgIHRoaXMuaXNCb251cyAgICA9IGRhdGEuaXNCb251cztcclxuICAgICAgICB0aGlzLmlzRnJlZSAgICAgPSBkYXRhLmlzRnJlZVNwaW47XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uICAgID0gZGF0YS5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMuaXNOb0h1ICAgICA9IGRhdGEuaXNOb2h1O1xyXG4gICAgICAgIHRoaXMuaXNUaGFuZ0xvbiA9IGRhdGEuaXNUaGFuZ0xvbjtcclxuICAgICAgICB0aGlzLmZyZWVTcGluICAgPSBkYXRhLmZyZWVTcGluO1xyXG4gICAgICAgIHRoaXMudHlwZSAgICAgICA9IGRhdGEudHlwZTtcclxuICAgICAgICB0aGlzLnJ1blJlZWxzKCk7XHJcbiAgICAgICAgaWYgKCFkYXRhLmlzRnJlZVNwaW4pXHJcbiAgICAgICAgICAgIHRoaXMuV2luR2FtZS51cGRhdGVGcmVlU3BpbigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XHJcbiAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuX215U2Vzc2lvbjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nID0gXCIjXCIrdGhpcy5zZXNzaW9uO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBpbml0UmFuZG9tSXRlbXM6IGZ1bmN0aW9uKG51bWJlckl0ZW0pIHtcclxuICAgICAgICBsZXQgbGlzdEl0ZW0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IG51bWJlckl0ZW07IGkrKyl7XHJcbiAgICAgICAgICAgIGxpc3RJdGVtW2ldID0gdGhpcy5yYW5kb20oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3RJdGVtO1xyXG4gICAgfSxcclxuICAgIGdldERhdGFSZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbmV3QXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuX1RvdGFsQ29sdW1uOyBpKyspe1xyXG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHJlc3VsdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBuZXdBcnJheVtpJXNlbGYuX1RvdGFsQ29sdW1uXS5wdXNoKHJlc3VsdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fVG90YWxDb2x1bW47IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCByYW5kb21BcnIgPSB0aGlzLmluaXRSYW5kb21JdGVtcyh0aGlzLlRvdGFsSXRlbVJ1bi02KTtcclxuICAgICAgICAgICAgbmV3QXJyYXlbaV0gPSBuZXdBcnJheVtpXS5jb25jYXQocmFuZG9tQXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCAgdGhpcy5sYXN0UmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld0FycmF5W2klc2VsZi5fVG90YWxDb2x1bW5dLnB1c2goIHRoaXMubGFzdFJlc3VsdFtpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IHJlc3VsdDtcclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9LFxyXG4gICAgcmVmb3JtYXRSZXN1bHQocmVzdWx0LCBzaXplKSB7XHJcbiAgICAgICAgbGV0IHJlcyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaT0wO2kgPCByZXN1bHQubGVuZ3RoOyBpID0gaStzaXplKVxyXG4gICAgICAgICAgICByZXMucHVzaChyZXN1bHQuc2xpY2UoaSxpK3NpemUpKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfSxcclxuICAgIHJ1bkFjdGlvbldvbjogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5zaG93TGluZVdpbih0cnVlKTtcclxuICAgICAgICB0aGlzLldpbkdhbWUucnVuV2luR2FtZSgpO1xyXG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5LCBmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgcmVzdW1lKCkge1xyXG4gICAgICAgIGlmICh0aGlzLndpbk1vbmV5ID4gMCl7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuV2luR2FtZS5ydW5XaW5HYW1lKCk7XHJcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgMzAwKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuV2luR2FtZS5ydW5XaW5HYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNldEV2ZW50TWFpbkxpbmU6IGZ1bmN0aW9uKGlzUGF1c2UpIHtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG1haW5MaW5lLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGlmIChpc1BhdXNlKVxyXG4gICAgICAgICAgICAgICAgbWFpbkxpbmUucGF1c2VTeXN0ZW1FdmVudHModHJ1ZSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIG1haW5MaW5lLnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICB9KSk7XHJcbiAgICB9LFxyXG4gICAgc2hvd0xpbmVXaW46IGZ1bmN0aW9uKGlzU2hvdykge1xyXG4gICAgICAgIC8vIGFkZCBtb25leVxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBpZiAoaXNTaG93KXtcclxuICAgICAgICAgICAgdGhpcy5zZXRFdmVudE1haW5MaW5lKGlzU2hvdyk7XHJcbiAgICAgICAgICAgIHRoaXMudG90YWxMaW5lV2luICAgPSB0aGlzLmxpbmVXaW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnBvc0xpbmVXaW4gICAgID0gMDtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG90YWxMaW5lV2luID4gMCl7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpbmVXaW4ubWFwKGZ1bmN0aW9uKHBvc0xpbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5nZXRDb21wb25lbnQoXCJWYW1waXJlTWFpbkxpbmVcIikub25FZigpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChzZWxmLmxpbmVXaW4ubWFwKGZ1bmN0aW9uKHBvc0xpbmUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiVmFtcGlyZU1haW5MaW5lXCIpLm9mZkVmKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuc2NoZWR1bGUoIHRoaXMuc2hvd01haW5MaW5lLCAxKTtcclxuICAgICAgICAgICAgICAgIH0sIDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5zaG93TWFpbkxpbmUpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5saW5lV2luICYmIHRoaXMubGluZVdpbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpbmVXaW4ubWFwKGZ1bmN0aW9uIChwb3NMaW5lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3Bvc0xpbmVdLmdldENvbXBvbmVudChcIlZhbXBpcmVNYWluTGluZVwiKS5vZmZob3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzaG93TWFpbkxpbmU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxpbmVXaW4ubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bdGhpcy5saW5lV2luW3RoaXMucG9zTGluZVdpbiV0aGlzLnRvdGFsTGluZVdpbl1dICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE1haW5MaW5lcy5jaGlsZHJlblt0aGlzLmxpbmVXaW5bdGhpcy5wb3NMaW5lV2luJXRoaXMudG90YWxMaW5lV2luXV0uZ2V0Q29tcG9uZW50KFwiVmFtcGlyZU1haW5MaW5lXCIpLm9mZkVmKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zTGluZVdpbiA9ICh0aGlzLnBvc0xpbmVXaW4rMSkldGhpcy50b3RhbExpbmVXaW47XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bdGhpcy5saW5lV2luW3RoaXMucG9zTGluZVdpbl1dICE9IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdE1haW5MaW5lcy5jaGlsZHJlblt0aGlzLmxpbmVXaW5bdGhpcy5wb3NMaW5lV2luXV0uZ2V0Q29tcG9uZW50KFwiVmFtcGlyZU1haW5MaW5lXCIpLm9uRWYoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcnVuUmVlbHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsLCBpbmRleCkge1xyXG4gICAgICAgICAgICByZWVsLnNwaW4oaW5kZXgpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICBjb3B5OiBmdW5jdGlvbigpe1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMucmVlbHMubWFwKGZ1bmN0aW9uKHJlZWwpe1xyXG4gICAgICAgICAgICByZWVsLmljb25zW3JlZWwuaWNvbnMubGVuZ3RoLTFdLnNldEljb24ocmVlbC5pY29uc1syXS5kYXRhKTtcclxuICAgICAgICAgICAgcmVlbC5pY29uc1tyZWVsLmljb25zLmxlbmd0aC0yXS5zZXRJY29uKHJlZWwuaWNvbnNbMV0uZGF0YSk7XHJcbiAgICAgICAgICAgIHJlZWwuaWNvbnNbcmVlbC5pY29ucy5sZW5ndGgtM10uc2V0SWNvbihyZWVsLmljb25zWzBdLmRhdGEpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICByYW5kb206IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgcmV0dXJuICB+fihNYXRoLnJhbmRvbSgpKnRoaXMudG90YWxTeW1ib2wpO1xyXG4gICAgfSxcclxuICAgIGdldE1vbmV5SW5Sb29tOiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gMTAqTWF0aC5wb3coMTAsIHRoaXMucm9vbU51bWJlcik7XHJcbiAgICB9LFxyXG4gICAgY2hlY2tIYXNNb25leTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgYWRkTm90aWNlOiBmdW5jdGlvbiAobWVzc2FnZSkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLm5vdGljZU5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vdGljZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYl9ub3RpXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gbWVzc2FnZTtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHNlbGYubm90aWNlTm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9LCAxMjAwKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
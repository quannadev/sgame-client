
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/UIZeus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2a374jURU5KXaNA1qEki+6u', 'UIZeus');
// scripts/zeus/UIZeus.js

"use strict";

var WinGame = require("ZeusWinGame");

var Helper = require("Helper");

var reel = require("ZeusReel");

var line = require("ZeusLine");

var TrialResult = require("ZeusTrialResult");

var Language = require("zeusLanguage");

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
    this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf));
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
    var key = "zeus" + cc.betLevel;

    if (SmartFoxSDK.ZeusController.ZoneInstance.mySelf) {
      if (SmartFoxSDK.ZeusController.ZoneInstance.mySelf) {
        var variableJackpot = SmartFoxSDK.ZeusController.ZoneInstance.mySelf.getVariable(key);

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
    var key = "fszeus" + cc.betLevel;

    if (event.changedVars.indexOf(key) >= 0) {
      // get free spine of room in here
      //key: "fs" + "zeus1l" free spin of bet 100
      // key: "fs" + "zeus1k" free spin of bet 1000
      // key: "fs" + "zeus10k" free spin of bet 1000
      if (event.user.isItMe) {
        var freeSpin = SmartFoxSDK.ZeusController.ZoneInstance.mySelf.getVariable(key).value;
        this.freeSpin = freeSpin;
        this.WinGame.updateFreeSpin();
      }
    }
  },
  updateUserVariable: function updateUserVariable(subChip) {
    if (!this._isFreeTrial && cc.currentUI != "") this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) - subChip);
  },
  onEnable: function onEnable() {
    mm.audio.pauseMusic();
    mm.Loading.hide();

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
      this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf));
    } else {
      this._myMoneyTrial = this._myMoneyTrial + totalMoney;
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
      this.ZeusRun(TrialResult.getItemTrial());
      this.freeSpin--;
    } else {
      this.playSpin();
      this.isSpin = true;
      var betRequest = new ZeusRequest.BetRequest();
      this.showLineWin(false);
      betRequest.setBet(this.getMoneyInRoom());
      this.setLinesBet(betRequest);

      if (!this.checkEnoughMoney()) {
        mm.Toast.showToast(1, Language.getString("noti_not_money"));
        return;
      }

      SmartFoxSDK.ZeusController.ZoneInstance.send(betRequest.toSRequest()); // sub money

      if (this.freeSpin < 1) this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) - this.getTotalBet());
    }
  },
  eventStopQuay: function eventStopQuay() {
    this.isFast = false;
    this.isAuto = false;
    this.btnStopQuay.active = false;
    this.pauseSystemEventNode(this.btnAutoQuay, false);
    this.pauseSystemEventNode(this.btnQuayNhanh, false);
    var request = new ZeusRequest.StopAutoPlayRequest();
    SmartFoxSDK.ZeusController.ZoneInstance.send(request.toSRequest());
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

    if (GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) < totalBet) {
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
          var request = new ZeusRequest.AutoPlayRequest();
          request.setBet(this.getMoneyInRoom());
          this.setLinesBet(request);

          if (!this.checkEnoughMoney()) {
            mm.Toast.showToast(1, Language.getString("noti_not_money"));
            return;
          }

          SmartFoxSDK.ZeusController.ZoneInstance.send(request.toSRequest());
          this.lb_sodu.string = Utils.addDotToNumber(GameVariables.Poker.getChip(SmartFoxSDK.ZeusController.ZoneInstance.mySelf) - this.getTotalBet());
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

    UIManger.show("UIZeusLobby", {
      pop: true,
      src: "zeus"
    });
  },
  eventSetting: function eventSetting() {
    this.menuSetting.active = !this.menuSetting.active;
  },
  eventVinhDanh: function eventVinhDanh() {
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.ZeusController.ZoneInstance.send(request.toSRequest());
  },
  eventLichSuGiaoDich: function eventLichSuGiaoDich() {
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.ZeusController.ZoneInstance.send(request.toSRequest());
  },
  eventBangThuong: function eventBangThuong() {
    this.show("UIZeusHelper", {
      pop: true,
      src: "zeus"
    });
  },
  ZeusRun: function ZeusRun(data) {
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
    this.xSpecial = data.xSpecial;
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
          self.listMainLines.children[posLine].getComponent("ZeusMainLine").onEf();
        }));
        this.scheduleOnce(function () {
          Promise.all(self.lineWin.map(function (posLine) {
            self.listMainLines.children[posLine].getComponent("ZeusMainLine").offEf();
          }));
          self.schedule(this.showMainLine, 1);
        }, 2);
      }
    } else {
      this.unschedule(this.showMainLine);

      if (this.lineWin && this.lineWin.length > 0) {
        Promise.all(this.lineWin.map(function (posLine) {
          self.listMainLines.children[posLine].getComponent("ZeusMainLine").offhover();
          self.listMainLines.children[posLine].pauseSystemEvents(true);
        }));
      }
    }
  },
  showMainLine: function showMainLine() {
    if (this.lineWin.length > 0) {
      if (this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]] != undefined) this.listMainLines.children[this.lineWin[this.posLineWin % this.totalLineWin]].getComponent("ZeusMainLine").offEf();
      this.posLineWin = (this.posLineWin + 1) % this.totalLineWin;
      if (this.listMainLines.children[this.lineWin[this.posLineWin]] != undefined) this.listMainLines.children[this.lineWin[this.posLineWin]].getComponent("ZeusMainLine").onEf();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3pldXMvVUlaZXVzLmpzIl0sIm5hbWVzIjpbIldpbkdhbWUiLCJyZXF1aXJlIiwiSGVscGVyIiwicmVlbCIsImxpbmUiLCJUcmlhbFJlc3VsdCIsIkxhbmd1YWdlIiwiTGlzdFJvb20iLCJjYyIsIkVudW0iLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVlbHMiLCJ0eXBlIiwiaWNvblByZWZhYiIsIlByZWZhYiIsIm5vdGljZU5vZGUiLCJOb2RlIiwiYnRuUXVheSIsImJ0blF1YXlOaGFuaCIsImJ0blN0b3BRdWF5IiwiYnRuQXV0b1F1YXkiLCJsYk51bWJlckxpbmUiLCJMYWJlbCIsImxiTnVtYmVyU3Rha2UiLCJsYk1vbmV5V2luIiwibGJTZXNzaW9uIiwic2VsZWN0TGluZXMiLCJsaXN0TWFpbkxpbmVzIiwiaXNBdXRvIiwiaXNGYXN0IiwiaXNTcGluIiwiaXNGcmVlU3BpbiIsInJlZCIsImxhc3RSZXN1bHQiLCJiZXRTZWxlY3QiLCJyb29tTnVtYmVyIiwicG9zTGluZVdpbiIsInRvdGFsTGluZVdpbiIsIl9Ub3RhbENvbHVtbiIsImxiX3Bob25nIiwibGJfc29kdSIsImxiX2h1IiwidG9nZ2xlTXVzaWMiLCJUb2dnbGUiLCJ0b2dnbGVTb3VuZCIsImJnU291bmQiLCJBdWRpb0NsaXAiLCJzb3VuZFNwaW5NaXMiLCJzb3VuZFNwaW5XaW4iLCJzb3VuZEJpZ1dpbiIsInNvdW5kSmFja3BvdCIsInNvdW5kQm9udXMiLCJzb3VuZENsaWNrIiwic291bmRTcGluIiwibWVudVNldHRpbmciLCJfa2V5TXVzaWMiLCJfa2V5U291bmQiLCJfbXVzaWNTbG90U3RhdGUiLCJfc291bmRTbG90U3RhdGUiLCJfaXNGcmVlVHJpYWwiLCJfbXlNb25leVRyaWFsIiwiX215U2Vzc2lvbiIsIm9uTG9hZCIsIlRvdGFsSXRlbVJ1biIsInRvdGFsU3ltYm9sIiwid2luTW9uZXkiLCJmcmVlU3BpbiIsImluaXQiLCJzdHJpbmciLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwiR2FtZVZhcmlhYmxlcyIsIlBva2VyIiwiZ2V0Q2hpcCIsIlNtYXJ0Rm94U0RLIiwiWmV1c0NvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJteVNlbGYiLCJzY2hlZHVsZSIsInVwZGF0ZUphY2twb3QiLCJpbml0U291bmQiLCJtdXNpY1NhdmUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJzZXRJdGVtIiwic291bmRTYXZlIiwiaXNDaGVja2VkIiwibXVzaWNJZCIsImF1ZGlvRW5naW5lIiwicGxheSIsInBhdXNlIiwib25EaXNhYmxlIiwiZXZlbnRNdXNpYyIsInJlc3VtZSIsImV2ZW50U291bmQiLCJwbGF5U3BpbiIsInBsYXlTcGluTWlzIiwicGxheVNwaW5XaW4iLCJwbGF5QmlnV2luIiwicGxheUphY2twb3QiLCJwbGF5Qm9udXMiLCJwbGF5Q2xpY2siLCJrZXkiLCJiZXRMZXZlbCIsInZhcmlhYmxlSmFja3BvdCIsImdldFZhcmlhYmxlIiwiamFja3BvdCIsInZhbHVlIiwiY3VycmVudF9sYl9qYWNrcG90Iiwic3BsaXQiLCJqb2luIiwiY3VycmVudEh1IiwicGFyc2VGbG9hdCIsIm51bWJlclRvIiwidXBkYXRlVXNlclZhcmlhYmxlU2xvdCIsImV2ZW50IiwiY2hhbmdlZFZhcnMiLCJpbmRleE9mIiwidXNlciIsImlzSXRNZSIsInVwZGF0ZUZyZWVTcGluIiwidXBkYXRlVXNlclZhcmlhYmxlIiwic3ViQ2hpcCIsImN1cnJlbnRVSSIsIm9uRW5hYmxlIiwibW0iLCJhdWRpbyIsInBhdXNlTXVzaWMiLCJMb2FkaW5nIiwiaGlkZSIsInVuZGVmaW5lZCIsIm51bWJlcldpdGhDb21tYXMiLCJnZXRNb25leUluUm9vbSIsInNob3dMaW5lV2luIiwic2VsZiIsImxpbmVBcnIxIiwibGluZUFycjIiLCJsaW5lQXJyMyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsImxhc3RBcnJheSIsImluaXRSYW5kb21JdGVtcyIsInB1c2giLCJsZW5ndGgiLCJ0aGVuIiwicmVzdWx0IiwiY29uY2F0Iiwic2V0TnVtYmVyTGluZXMiLCJ0b3RhbExpbmVzIiwic2V0TnVtYmVyU3Rha2UiLCJ0b3RhbFN0YWtlIiwic2V0TW9uZXlXaW4iLCJ0b3RhbE1vbmV5IiwidXBkYXRlRGF0YVBob25nIiwicm9vbUlkIiwiZXZlbnRRdWF5TmhhbmgiLCJhZGROb3RpY2UiLCJnZXRTdHJpbmciLCJjaGVja0Vub3VnaE1vbmV5IiwiVG9hc3QiLCJzaG93VG9hc3QiLCJwYXVzZVN5c3RlbUV2ZW50Tm9kZSIsImFjdGl2ZSIsImF1dG9RdWF5IiwiZXZlbnRBdXRvUXVheSIsInJ1blF1YXkiLCJnZXRUb3RhbEJldCIsIlpldXNSdW4iLCJnZXRJdGVtVHJpYWwiLCJiZXRSZXF1ZXN0IiwiWmV1c1JlcXVlc3QiLCJCZXRSZXF1ZXN0Iiwic2V0QmV0Iiwic2V0TGluZXNCZXQiLCJzZW5kIiwidG9TUmVxdWVzdCIsImV2ZW50U3RvcFF1YXkiLCJyZXF1ZXN0IiwiU3RvcEF1dG9QbGF5UmVxdWVzdCIsImV2ZW50UGhvbmciLCJkYXRhIiwiZ2V0VG90YWxMaW5lU2VsZWN0IiwiZXZlbnRTZWxlY3RMaW5lcyIsImV2ZW50T3BlbiIsInRvdGFsQmV0IiwidHlwZUxpbmUiLCJsaXN0TGluZSIsImkiLCJldmVudFF1YXkiLCJBdXRvUGxheVJlcXVlc3QiLCJiZXQiLCJnZXRUb3RhbExpbmUiLCJnZXRUb3RhbExpbmVMZSIsImdldFRvdGFsTGluZUNoYW4iLCJzZXRMaW5lTGUiLCJzZXRMaW5lQ2hhbiIsInNldExpbmUiLCJub2RlRXZlbnQiLCJpc1BhdXNlIiwic2V0TWF0ZXJpYWxHcmF5IiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJldmVudEJhY2siLCJVSU1hbmdlciIsInNob3ciLCJwb3AiLCJzcmMiLCJldmVudFNldHRpbmciLCJldmVudFZpbmhEYW5oIiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImV2ZW50TGljaFN1R2lhb0RpY2giLCJIaXN0b3J5UmVxdWVzdCIsImV2ZW50QmFuZ1RodW9uZyIsImdldERhdGFSZXN1bHQiLCJjZWwiLCJjZWxfaW5kZXgiLCJpY29uIiwiaWNvbnMiLCJzZXRJY29uIiwibGluZVdpbiIsImZyZWVHaWZ0IiwieFNwZWNpYWwiLCJpc0JvbnVzIiwiaXNGcmVlIiwic2Vzc2lvbiIsImlzTm9IdSIsImlzTm9odSIsImlzVGhhbmdMb24iLCJydW5SZWVscyIsIm51bWJlckl0ZW0iLCJsaXN0SXRlbSIsInJhbmRvbSIsIm5ld0FycmF5IiwicmFuZG9tQXJyIiwicmVmb3JtYXRSZXN1bHQiLCJzaXplIiwicmVzIiwic2xpY2UiLCJydW5BY3Rpb25Xb24iLCJydW5XaW5HYW1lIiwic2V0VGltZW91dCIsImJpbmQiLCJzZXRFdmVudE1haW5MaW5lIiwiY2hpbGRyZW4iLCJtYWluTGluZSIsImlzU2hvdyIsInBvc0xpbmUiLCJvbkVmIiwic2NoZWR1bGVPbmNlIiwib2ZmRWYiLCJzaG93TWFpbkxpbmUiLCJ1bnNjaGVkdWxlIiwib2ZmaG92ZXIiLCJzcGluIiwiY29weSIsIk1hdGgiLCJwb3ciLCJjaGVja0hhc01vbmV5IiwibWVzc2FnZSIsImdldENoaWxkQnlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBT0MsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFRRCxPQUFPLENBQUMsUUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxJQUFJLEdBQVVGLE9BQU8sQ0FBQyxVQUFELENBQXpCOztBQUNBLElBQUlHLElBQUksR0FBVUgsT0FBTyxDQUFDLFVBQUQsQ0FBekI7O0FBQ0EsSUFBSUksV0FBVyxHQUFHSixPQUFPLENBQUMsaUJBQUQsQ0FBekI7O0FBQ0EsSUFBSUssUUFBUSxHQUFNTCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJTSxR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Q2pCL0csTUFBQUEsSUFBSSxDQUFDekgsVUFBTCxDQUFnQnVKLE1BQWhCLEdBQXlCLEtBQXpCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBem1CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgV2luR2FtZSAgICAgPSByZXF1aXJlKFwiWmV1c1dpbkdhbWVcIik7XG5sZXQgSGVscGVyICAgICAgPSByZXF1aXJlKFwiSGVscGVyXCIpO1xubGV0IHJlZWwgICAgICAgID0gcmVxdWlyZShcIlpldXNSZWVsXCIpO1xubGV0IGxpbmUgICAgICAgID0gcmVxdWlyZShcIlpldXNMaW5lXCIpO1xubGV0IFRyaWFsUmVzdWx0ID0gcmVxdWlyZShcIlpldXNUcmlhbFJlc3VsdFwiKTtcbmxldCBMYW5ndWFnZSAgICA9IHJlcXVpcmUoXCJ6ZXVzTGFuZ3VhZ2VcIik7XG5sZXQgTGlzdFJvb20gPSBjYy5FbnVtKHtcbiAgICBcIjFsXCIgICA6IDEsXG4gICAgXCIxa1wiICAgIDogMixcbiAgICBcIjEwa1wiICAgOiAzXG59KTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByZWVsczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiByZWVsLFxuICAgICAgICB9LFxuICAgICAgICBpY29uUHJlZmFiICAgICAgICAgIDogY2MuUHJlZmFiLFxuICAgICAgICBub3RpY2VOb2RlICAgICAgICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgYnRuUXVheSAgICAgICAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIGJ0blF1YXlOaGFuaCAgICAgICAgOiBjYy5Ob2RlLFxuICAgICAgICBidG5TdG9wUXVheSAgICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgYnRuQXV0b1F1YXkgICAgICAgICA6IGNjLk5vZGUsXG4gICAgICAgIGxiTnVtYmVyTGluZSAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJOdW1iZXJTdGFrZSAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk1vbmV5V2luICAgICAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiU2Vzc2lvbiAgICAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgc2VsZWN0TGluZXMgICAgICAgICA6IGxpbmUsXG4gICAgICAgIFdpbkdhbWUgICAgICAgICAgICAgOiBXaW5HYW1lLFxuICAgICAgICBsaXN0TWFpbkxpbmVzICAgICAgIDogY2MuTm9kZSxcbiAgICAgICAgLy8gZWR0Q2hlYXQgICAgICAgICAgIDogY2MuRWRpdEJveCxcbiAgICAgICAgaXNBdXRvICAgICAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICBpc0Zhc3QgICAgICAgICAgICAgIDogZmFsc2UsXG4gICAgICAgIGlzU3BpbiAgICAgICAgICAgICAgOiBmYWxzZSxcbiAgICAgICAgaXNGcmVlU3BpbiAgICAgICAgICA6IGZhbHNlLFxuICAgICAgICByZWQgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgbGFzdFJlc3VsdCAgICAgICAgICA6IFtdLFxuICAgICAgICBiZXRTZWxlY3QgICAgICAgICAgIDogMCxcbiAgICAgICAgcm9vbU51bWJlciAgICAgICAgICA6IDAsXG4gICAgICAgIHBvc0xpbmVXaW4gICAgICAgICAgOiAwLFxuICAgICAgICB0b3RhbExpbmVXaW4gICAgICAgIDogMCxcbiAgICAgICAgX1RvdGFsQ29sdW1uICAgICAgICA6IDUsXG4gICAgICAgIGxiX3Bob25nOiBjYy5MYWJlbCxcbiAgICAgICAgbGJfc29kdTogY2MuTGFiZWwsXG4gICAgICAgIGxiX2h1OiBjYy5MYWJlbCxcbiAgICAgICAgdG9nZ2xlTXVzaWM6IGNjLlRvZ2dsZSxcbiAgICAgICAgdG9nZ2xlU291bmQ6IGNjLlRvZ2dsZSxcbiAgICAgICAgYmdTb3VuZDogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzb3VuZFNwaW5NaXM6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgc291bmRTcGluV2luOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kQmlnV2luOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kSmFja3BvdDogY2MuQXVkaW9DbGlwLFxuICAgICAgICBzb3VuZEJvbnVzOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIHNvdW5kQ2xpY2s6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgc291bmRTcGluOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgIG1lbnVTZXR0aW5nOiBjYy5Ob2RlLFxuICAgICAgICBfa2V5TXVzaWM6IFwibXVzaWNfa2NcIixcbiAgICAgICAgX2tleVNvdW5kOiBcInNvdW5kX2tjXCIsXG4gICAgICAgIF9tdXNpY1Nsb3RTdGF0ZSA6IDAsXG4gICAgICAgIF9zb3VuZFNsb3RTdGF0ZSA6IDAsXG4gICAgICAgIF9pc0ZyZWVUcmlhbCA6IGZhbHNlLFxuICAgICAgICBfbXlNb25leVRyaWFsIDogMCxcbiAgICAgICAgX215U2Vzc2lvbiA6IDAsXG4gICAgfSxcbiAgICBvbkxvYWQgKCkge1xuICAgICAgICB0aGlzLl9Ub3RhbENvbHVtbiAgICAgPSA1O1xuICAgICAgICB0aGlzLlRvdGFsSXRlbVJ1biAgICAgPSAyMDtcbiAgICAgICAgdGhpcy50b3RhbFN5bWJvbCAgICAgID0gNztcbiAgICAgICAgdGhpcy53aW5Nb25leSAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5mcmVlU3BpbiAgICAgICAgID0gMDtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIHRoaXMucm9vbU51bWJlciAgICAgICA9IExpc3RSb29tW1wiMWxcIl07XG4gICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikpO1xuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlSmFja3BvdCwgMyk7XG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xuICAgICAgICB0aGlzLmluaXRTb3VuZCgpO1xuICAgIH0sXG4gICAgaW5pdFNvdW5kKCkge1xuICAgICAgICB2YXIgbXVzaWNTYXZlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuX2tleU11c2ljKTtcbiAgICAgICAgaWYgKG11c2ljU2F2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSA9IHBhcnNlSW50KG11c2ljU2F2ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSA9IDE7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5fa2V5TXVzaWMsIFwiMVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzb3VuZFNhdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5fa2V5U291bmQpO1xuICAgICAgICBpZiAoc291bmRTYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kU2xvdFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kU2xvdFN0YXRlID0gMTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlTb3VuZCwgXCIxXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYmdTb3VuZCAhPSBudWxsICYmICF0aGlzLnRvZ2dsZU11c2ljLmlzQ2hlY2tlZCkge1xuICAgICAgICAgICAgdGhpcy5tdXNpY0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJnU291bmQsIHRydWUsIDEpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMubXVzaWNJZCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uRGlzYWJsZSgpe1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xuICAgIH0sXG4gICAgZXZlbnRNdXNpYygpIHtcbiAgICAgICAgdGhpcy5fbXVzaWNTbG90U3RhdGUgICAgICAgICA9IHRoaXMudG9nZ2xlU291bmQuaXNDaGVja2VkPyAwOiAxO1xuICAgICAgICBpZiAoIXRoaXMudG9nZ2xlTXVzaWMuaXNDaGVja2VkKXtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLm11c2ljSWQpO1xuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5tdXNpY0lkKTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleU11c2ljLCAgdGhpcy5fbXVzaWNTbG90U3RhdGUpO1xuICAgIH0sXG4gICAgZXZlbnRTb3VuZCgpIHtcbiAgICAgICAgdGhpcy5fc291bmRTbG90U3RhdGUgPSB0aGlzLnRvZ2dsZVNvdW5kLmlzQ2hlY2tlZD8gMDogMTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleVNvdW5kLCAgdGhpcy5fc291bmRTbG90U3RhdGUpO1xuICAgIH0sXG4gICAgcGxheVNwaW4oKSB7XG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluLCBmYWxzZSwgMSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHBsYXlTcGluTWlzKCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3Bpbk1pcywgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGF5U3BpbldpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW5XaW4sIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxheUJpZ1dpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJpZ1dpbiwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwbGF5SmFja3BvdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEphY2twb3QsIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxheUJvbnVzKCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQm9udXMsIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgcGxheUNsaWNrKCkge1xuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQ2xpY2ssIGZhbHNlLCAxKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlSmFja3BvdCgpe1xuICAgICAgICBsZXQga2V5ID0gXCJ6ZXVzXCIrY2MuYmV0TGV2ZWw7XG4gICAgICAgIGlmKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpe1xuICAgICAgICAgICAgaWYoU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZil7XG4gICAgICAgICAgICAgICAgbGV0IHZhcmlhYmxlSmFja3BvdCA9IFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYuZ2V0VmFyaWFibGUoa2V5KTtcbiAgICAgICAgICAgICAgICBpZih2YXJpYWJsZUphY2twb3Qpe1xuICAgICAgICAgICAgICAgICAgICBsZXQgamFja3BvdCA9IHZhcmlhYmxlSmFja3BvdC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRfbGJfamFja3BvdCA9IHRoaXMubGJfaHUuc3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2xiX2phY2twb3QgPSBjdXJyZW50X2xiX2phY2twb3Quc3BsaXQoXCIuXCIpLmpvaW4oXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50SHUgPSBwYXJzZUZsb2F0KGN1cnJlbnRfbGJfamFja3BvdCk7XG4gICAgICAgICAgICAgICAgICAgIFV0aWxzLm51bWJlclRvKHRoaXMubGJfaHUsIGN1cnJlbnRIdSwgamFja3BvdCwgMTAwMCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHVwZGF0ZVVzZXJWYXJpYWJsZVNsb3QoZXZlbnQpIHtcbiAgICAgICAgbGV0IGtleSA9IFwiZnN6ZXVzXCIrY2MuYmV0TGV2ZWw7XG4gICAgICAgIGlmKGV2ZW50LmNoYW5nZWRWYXJzLmluZGV4T2Yoa2V5KSA+PSAwKXtcbiAgICAgICAgICAgIC8vIGdldCBmcmVlIHNwaW5lIG9mIHJvb20gaW4gaGVyZVxuICAgICAgICAgICAgLy9rZXk6IFwiZnNcIiArIFwiemV1czFsXCIgZnJlZSBzcGluIG9mIGJldCAxMDBcbiAgICAgICAgICAgIC8vIGtleTogXCJmc1wiICsgXCJ6ZXVzMWtcIiBmcmVlIHNwaW4gb2YgYmV0IDEwMDBcbiAgICAgICAgICAgIC8vIGtleTogXCJmc1wiICsgXCJ6ZXVzMTBrXCIgZnJlZSBzcGluIG9mIGJldCAxMDAwXG4gICAgICAgICAgICBpZihldmVudC51c2VyLmlzSXRNZSl7XG4gICAgICAgICAgICAgICAgbGV0IGZyZWVTcGluICAgID0gU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZi5nZXRWYXJpYWJsZShrZXkpLnZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGZyZWVTcGluO1xuICAgICAgICAgICAgICAgIHRoaXMuV2luR2FtZS51cGRhdGVGcmVlU3BpbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICB1cGRhdGVVc2VyVmFyaWFibGUoc3ViQ2hpcCl7XG4gICAgICAgIGlmICghdGhpcy5faXNGcmVlVHJpYWwgJiYgY2MuY3VycmVudFVJICE9IFwiXCIpXG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpLXN1YkNoaXApO1xuICAgIH0sXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgbW0uYXVkaW8ucGF1c2VNdXNpYygpO1xuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgaWYgKGNjLmJldExldmVsID09IFwiY2hvaXRodVwiKXtcbiAgICAgICAgICAgIHRoaXMuX2lzRnJlZVRyaWFsICAgICA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLl9teU1vbmV5VHJpYWwgICAgPSA1MDAwMDAwMDtcbiAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKDUwMDAwMDAwKTtcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbiAgICAgICA9IDA7XG4gICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLl9teVNlc3Npb247XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gMDtcbiAgICAgICAgICAgIHRoaXMuX2lzRnJlZVRyaWFsICA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IExpc3RSb29tW2NjLmJldExldmVsXTtcbiAgICAgICAgaWYodGhpcy5yb29tTnVtYmVyID09PSB1bmRlZmluZWQpe1xuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFsXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gTGlzdFJvb21bY2MuYmV0TGV2ZWxdO1xuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSAodGhpcy5yb29tTnVtYmVyKSU0O1xuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSB0aGlzLnJvb21OdW1iZXIgPCAxID8gMTogdGhpcy5yb29tTnVtYmVyO1xuICAgICAgICB0aGlzLmxiX3Bob25nLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XG4gICAgICAgIHRoaXMuc2VsZWN0TGluZXMuaW5pdCh0aGlzKTtcbiAgICAgICAgdGhpcy5XaW5HYW1lLmluaXQodGhpcyk7XG4gICAgICAgIHRoaXMubGJNb25leVdpbi5zdHJpbmcgPSBcIjBcIjtcbiAgICAgICAgdGhpcy5zaG93TGluZVdpbihmYWxzZSk7XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgICAgICBsZXQgbGluZUFycjEgPSBbXTtcbiAgICAgICAgbGV0IGxpbmVBcnIyID0gW107XG4gICAgICAgIGxldCBsaW5lQXJyMyA9IFtdO1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsLCBpbmRleCkge1xuICAgICAgICAgICAgbGV0IGxhc3RBcnJheSA9IFtdO1xuICAgICAgICAgICAgbGFzdEFycmF5ID0gc2VsZi5pbml0UmFuZG9tSXRlbXMoc2VsZi5Ub3RhbEl0ZW1SdW4pO1xuXG4gICAgICAgICAgICBsaW5lQXJyMS5wdXNoKGxhc3RBcnJheVtsYXN0QXJyYXkubGVuZ3RoLTFdKTtcbiAgICAgICAgICAgIGxpbmVBcnIyLnB1c2gobGFzdEFycmF5W2xhc3RBcnJheS5sZW5ndGgtMl0pO1xuICAgICAgICAgICAgbGluZUFycjMucHVzaChsYXN0QXJyYXlbbGFzdEFycmF5Lmxlbmd0aC0zXSk7XG4gICAgICAgICAgICByZWVsLmluaXQoc2VsZiwgbGFzdEFycmF5KTtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgIHNlbGYubGFzdFJlc3VsdCA9IGxpbmVBcnIzLmNvbmNhdChsaW5lQXJyMikuY29uY2F0KGxpbmVBcnIxKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzZXROdW1iZXJMaW5lczogZnVuY3Rpb24odG90YWxMaW5lcykge1xuICAgICAgICB0aGlzLmxiTnVtYmVyTGluZS5zdHJpbmcgPSB0b3RhbExpbmVzO1xuICAgIH0sXG4gICAgc2V0TnVtYmVyU3Rha2U6IGZ1bmN0aW9uKHRvdGFsU3Rha2UpIHtcbiAgICAgICAgdGhpcy5sYk51bWJlclN0YWtlLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRvdGFsU3Rha2UqdGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICB9LFxuICAgIHNldE1vbmV5V2luOiBmdW5jdGlvbih0b3RhbE1vbmV5KSB7XG4gICAgICAgIEhlbHBlci5udW1iZXJUbyh0aGlzLmxiTW9uZXlXaW4sIHBhcnNlSW50KHRoaXMubGJNb25leVdpbi5zdHJpbmcpLCB0b3RhbE1vbmV5LCAxMjAwLCB0cnVlKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aGlzLl9teU1vbmV5VHJpYWwgPSB0aGlzLl9teU1vbmV5VHJpYWwgKyB0b3RhbE1vbmV5O1xuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHRoaXMuX215TW9uZXlUcmlhbCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pc1NwaW4gICAgPSBmYWxzZTtcbiAgICB9LFxuICAgIHVwZGF0ZURhdGFQaG9uZyhyb29tSWQpIHtcblxuICAgIH0sXG4gICAgLy8gdXBkYXRlIChkdCkge30sXG4gICAgZXZlbnRRdWF5Tmhhbmg6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3Bpbil7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pc1NwaW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmlzRmFzdCA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNBdXRvID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0bkF1dG9RdWF5LCBmYWxzZSk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5TmhhbmgsIHRydWUpO1xuICAgICAgICB0aGlzLmJ0blN0b3BRdWF5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuYXV0b1F1YXkoKTtcbiAgICB9LFxuICAgIGV2ZW50QXV0b1F1YXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKCF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzU3Bpbil7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNTcGluID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pc0F1dG8gPSB0cnVlO1xuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuQXV0b1F1YXksIHRydWUpO1xuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheU5oYW5oLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuYnRuU3RvcFF1YXkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5hdXRvUXVheSgpO1xuICAgIH0sXG4gICAgcnVuUXVheSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHRoaXMuaXNTcGluICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX215TW9uZXlUcmlhbCA9IHRoaXMuX215TW9uZXlUcmlhbC10aGlzLmdldFRvdGFsQmV0KCk7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA8IDEpXG4gICAgICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHRoaXMuX215TW9uZXlUcmlhbCk7XG4gICAgICAgICAgICBpZiAodGhpcy5fbXlNb25leVRyaWFsIDwgMSlcbiAgICAgICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xuICAgICAgICAgICAgdGhpcy5fbXlTZXNzaW9uKys7XG4gICAgICAgICAgICB0aGlzLlpldXNSdW4oVHJpYWxSZXN1bHQuZ2V0SXRlbVRyaWFsKCkpO1xuICAgICAgICAgICAgdGhpcy5mcmVlU3Bpbi0tO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMucGxheVNwaW4oKTtcbiAgICAgICAgICAgIHRoaXMuaXNTcGluICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBiZXRSZXF1ZXN0ID0gbmV3IFpldXNSZXF1ZXN0LkJldFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xuICAgICAgICAgICAgYmV0UmVxdWVzdC5zZXRCZXQodGhpcy5nZXRNb25leUluUm9vbSgpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGluZXNCZXQoYmV0UmVxdWVzdCk7XG4gICAgICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xuICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQoYmV0UmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xuICAgICAgICAgICAgLy8gc3ViIG1vbmV5XG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA8IDEpXG4gICAgICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSAtIHRoaXMuZ2V0VG90YWxCZXQoKSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50U3RvcFF1YXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLmlzRmFzdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmlzQXV0byA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ0blN0b3BRdWF5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuQXV0b1F1YXksIGZhbHNlKTtcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXlOaGFuaCwgZmFsc2UpO1xuXG4gICAgICAgIGxldCByZXF1ZXN0ID0gbmV3IFpldXNSZXF1ZXN0LlN0b3BBdXRvUGxheVJlcXVlc3QoKTtcbiAgICAgICAgU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xuICAgIH0sXG4gICAgZXZlbnRQaG9uZzogZnVuY3Rpb24oZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X3RyaWFsXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1NwaW4gfHwgdGhpcy5pc0F1dG8gfHwgdGhpcy5pc0Zhc3Qpe1xuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9pc19wbGF5aW5nXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSAodGhpcy5yb29tTnVtYmVyICsgMSklNDtcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gdGhpcy5yb29tTnVtYmVyIDwgMSA/IDE6IHRoaXMucm9vbU51bWJlcjtcbiAgICAgICAgdGhpcy5sYl9waG9uZy5zdHJpbmcgPSBIZWxwZXIubnVtYmVyV2l0aENvbW1hcyh0aGlzLmdldE1vbmV5SW5Sb29tKCkpO1xuICAgICAgIHRoaXMuc2V0TnVtYmVyU3Rha2UodGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVTZWxlY3QoKSk7XG4gICAgICAgIGlmKHRoaXMucm9vbU51bWJlciA9PSAxKXtcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxbFwiO1xuICAgICAgICB9ZWxzZSBpZih0aGlzLnJvb21OdW1iZXIgPT0gMil7XG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMWtcIjtcbiAgICAgICAgfWVsc2UgaWYodGhpcy5yb29tTnVtYmVyID09IDMpe1xuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjEwa1wiO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlSmFja3BvdCgpO1xuICAgIH0sXG4gICAgZXZlbnRTZWxlY3RMaW5lczogZnVuY3Rpb24oKXtcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X3RyaWFsXCIpKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5pc1NwaW4gfHwgdGhpcy5pc0F1dG8gfHwgdGhpcy5pc0Zhc3Qpe1xuXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0TGluZXMuZXZlbnRPcGVuKCk7XG4gICAgfSxcbiAgICBjaGVja0Vub3VnaE1vbmV5KCl7XG4gICAgICAgIGxldCB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIDI1O1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0TGluZXMudHlwZUxpbmUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIDEzO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMTI7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgbGV0IGxpc3RMaW5lID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaT0xOyBpPCB0aGlzLnNlbGVjdExpbmVzLmRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RMaW5lcy5kYXRhW2ldKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RMaW5lLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdG90YWxCZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCkgKiBsaXN0TGluZS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIDwgdG90YWxCZXQpe1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG4gICAgYXV0b1F1YXkoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA+IDApe1xuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRRdWF5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSl7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNBdXRvKXtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgICAgPSBuZXcgWmV1c1JlcXVlc3QuQXV0b1BsYXlSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0QmV0KHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TGluZXNCZXQocmVxdWVzdCk7XG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLmNoZWNrRW5vdWdoTW9uZXkoKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKEdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0Q2hpcChTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSAtIHRoaXMuZ2V0VG90YWxCZXQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudFF1YXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBnZXRUb3RhbEJldCgpe1xuICAgICAgICBsZXQgYmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpO1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0TGluZXMudHlwZUxpbmUpIHtcbiAgICAgICAgICAgIGNhc2UgMDogLy8gYWxsXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lKCkgKiBiZXQ7XG4gICAgICAgICAgICBjYXNlIDE6IC8vIGxlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lTGUoKSogYmV0O1xuICAgICAgICAgICAgY2FzZSAyOiAvLyBjaGFuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lQ2hhbigpKiBiZXQ7XG4gICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lU2VsZWN0KCkgKiBiZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJldDtcbiAgICB9LFxuICAgIHNldExpbmVzQmV0KHJlcXVlc3Qpe1xuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0TGluZXMudHlwZUxpbmUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldExpbmVMZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0TGluZUNoYW4oKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICBsZXQgbGlzdExpbmUgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTE7IGk8IHRoaXMuc2VsZWN0TGluZXMuZGF0YS5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdExpbmVzLmRhdGFbaV0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExpbmUucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldExpbmUobGlzdExpbmUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBldmVudFF1YXk6IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZighdGhpcy5faXNGcmVlVHJpYWwgJiYgIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXksIHRydWUpO1xuICAgICAgICB0aGlzLnJ1blF1YXkoKTtcbiAgICB9LFxuICAgIHBhdXNlU3lzdGVtRXZlbnROb2RlOiBmdW5jdGlvbihub2RlRXZlbnQsIGlzUGF1c2UpIHtcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSggbm9kZUV2ZW50LmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBpc1BhdXNlKTtcbiAgICAgICAgaWYgKGlzUGF1c2Upe1xuICAgICAgICAgICAgbm9kZUV2ZW50LnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xuICAgICAgICB9ZWxzZVxuICAgICAgICAgICAgbm9kZUV2ZW50LnJlc3VtZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICB9LFxuICAgIGV2ZW50QmFjazogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzU3BpbiB8fCB0aGlzLmlzQXV0byB8fCB0aGlzLmlzRmFzdCl7XG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSVpldXNMb2JieVwiLCB7cG9wOiB0cnVlLCBzcmM6IFwiemV1c1wifSk7XG4gICAgfSxcbiAgICBldmVudFNldHRpbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLm1lbnVTZXR0aW5nLmFjdGl2ZSA9ICF0aGlzLm1lbnVTZXR0aW5nLmFjdGl2ZTtcbiAgICB9LFxuICAgIGV2ZW50VmluaERhbmg6IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0LkxlYWRlckJvYXJkUmVxdWVzdCgpO1xuICAgICAgICBTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgfSxcbiAgICBldmVudExpY2hTdUdpYW9EaWNoOiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5IaXN0b3J5UmVxdWVzdCgpO1xuICAgICAgICBTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgfSxcbiAgICBldmVudEJhbmdUaHVvbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNob3coXCJVSVpldXNIZWxwZXJcIiwge3BvcDogdHJ1ZSwgc3JjOiBcInpldXNcIn0pO1xuICAgIH0sXG4gICAgWmV1c1J1bjogZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldERhdGFSZXN1bHQoZGF0YS5yZXN1bHQpO1xuICAgICAgICBQcm9taXNlLmFsbChyZXN1bHQubWFwKGZ1bmN0aW9uKGNlbCwgY2VsX2luZGV4KXtcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNlbC5tYXAoZnVuY3Rpb24oaWNvbiwgaW5kZXgpe1xuICAgICAgICAgICAgICAgIHNlbGYucmVlbHNbY2VsX2luZGV4XS5pY29uc1tpbmRleF0uc2V0SWNvbihpY29uLCB0cnVlKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBkYXRhLmxpbmVXaW47XG4gICAgICAgIHRoaXMud2luTW9uZXkgICA9IGRhdGEud2luTW9uZXk7XG4gICAgICAgIHRoaXMuZnJlZUdpZnQgICA9IGRhdGEuZnJlZUdpZnQ7XG4gICAgICAgIHRoaXMueFNwZWNpYWwgICA9IGRhdGEueFNwZWNpYWw7XG4gICAgICAgIHRoaXMuaXNCb251cyAgICA9IGRhdGEuaXNCb251cztcbiAgICAgICAgdGhpcy5pc0ZyZWUgICAgID0gZGF0YS5pc0ZyZWVTcGluO1xuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSBkYXRhLnNlc3Npb247XG4gICAgICAgIHRoaXMuaXNOb0h1ICAgICA9IGRhdGEuaXNOb2h1O1xuICAgICAgICB0aGlzLmlzVGhhbmdMb24gPSBkYXRhLmlzVGhhbmdMb247XG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGRhdGEuZnJlZVNwaW47XG4gICAgICAgIHRoaXMudHlwZSAgICAgICA9IGRhdGEudHlwZTtcbiAgICAgICAgdGhpcy5ydW5SZWVscygpO1xuICAgICAgICBpZiAoIWRhdGEuaXNGcmVlU3BpbilcbiAgICAgICAgICAgIHRoaXMuV2luR2FtZS51cGRhdGVGcmVlU3BpbigpO1xuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xuICAgICAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nID0gXCIjXCIrdGhpcy5fbXlTZXNzaW9uO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuc2Vzc2lvbjtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaW5pdFJhbmRvbUl0ZW1zOiBmdW5jdGlvbihudW1iZXJJdGVtKSB7XG4gICAgICAgIGxldCBsaXN0SXRlbSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IG51bWJlckl0ZW07IGkrKyl7XG4gICAgICAgICAgICBsaXN0SXRlbVtpXSA9IHRoaXMucmFuZG9tKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpc3RJdGVtO1xuICAgIH0sXG4gICAgZ2V0RGF0YVJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgbGV0IG5ld0FycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fVG90YWxDb2x1bW47IGkrKyl7XG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdBcnJheVtpJXNlbGYuX1RvdGFsQ29sdW1uXS5wdXNoKHJlc3VsdFtpXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLl9Ub3RhbENvbHVtbjsgaSsrKXtcbiAgICAgICAgICAgIGxldCByYW5kb21BcnIgPSB0aGlzLmluaXRSYW5kb21JdGVtcyh0aGlzLlRvdGFsSXRlbVJ1bi02KTtcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gbmV3QXJyYXlbaV0uY29uY2F0KHJhbmRvbUFycik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCAgdGhpcy5sYXN0UmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdBcnJheVtpJXNlbGYuX1RvdGFsQ29sdW1uXS5wdXNoKCB0aGlzLmxhc3RSZXN1bHRbaV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGFzdFJlc3VsdCA9IHJlc3VsdDtcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xuICAgIH0sXG4gICAgcmVmb3JtYXRSZXN1bHQocmVzdWx0LCBzaXplKSB7XG4gICAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBpPTA7aSA8IHJlc3VsdC5sZW5ndGg7IGkgPSBpK3NpemUpXG4gICAgICAgICAgICByZXMucHVzaChyZXN1bHQuc2xpY2UoaSxpK3NpemUpKTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LFxuICAgIHJ1bkFjdGlvbldvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hvd0xpbmVXaW4odHJ1ZSk7XG4gICAgICAgIHRoaXMuV2luR2FtZS5ydW5XaW5HYW1lKCk7XG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5LCBmYWxzZSk7XG4gICAgfSxcbiAgICByZXN1bWUoKSB7XG4gICAgICAgIGlmICh0aGlzLndpbk1vbmV5ID4gMCl7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcbiAgICAgICAgICAgIH0uYmluZCh0aGlzKSwgMzAwKTtcbiAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2V0RXZlbnRNYWluTGluZTogZnVuY3Rpb24oaXNQYXVzZSkge1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpc3RNYWluTGluZXMuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG1haW5MaW5lLCBpbmRleCl7XG4gICAgICAgICAgICBpZiAoaXNQYXVzZSlcbiAgICAgICAgICAgICAgICBtYWluTGluZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBtYWluTGluZS5yZXN1bWVTeXN0ZW1FdmVudHModHJ1ZSk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIHNob3dMaW5lV2luOiBmdW5jdGlvbihpc1Nob3cpIHtcbiAgICAgICAgLy8gYWRkIG1vbmV5XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgaWYgKGlzU2hvdyl7XG4gICAgICAgICAgICB0aGlzLnNldEV2ZW50TWFpbkxpbmUoaXNTaG93KTtcbiAgICAgICAgICAgIHRoaXMudG90YWxMaW5lV2luICAgPSB0aGlzLmxpbmVXaW4ubGVuZ3RoO1xuICAgICAgICAgICAgdGhpcy5wb3NMaW5lV2luICAgICA9IDA7XG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbExpbmVXaW4gPiAwKXtcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbCh0aGlzLmxpbmVXaW4ubWFwKGZ1bmN0aW9uKHBvc0xpbmUpe1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiWmV1c01haW5MaW5lXCIpLm9uRWYoKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoc2VsZi5saW5lV2luLm1hcChmdW5jdGlvbihwb3NMaW5lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5nZXRDb21wb25lbnQoXCJaZXVzTWFpbkxpbmVcIikub2ZmRWYoKTtcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnNjaGVkdWxlKCB0aGlzLnNob3dNYWluTGluZSwgMSk7XG4gICAgICAgICAgICAgICAgfSwgMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNob3dNYWluTGluZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5saW5lV2luICYmIHRoaXMubGluZVdpbi5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5saW5lV2luLm1hcChmdW5jdGlvbiAocG9zTGluZSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiWmV1c01haW5MaW5lXCIpLm9mZmhvdmVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNYWluTGluZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh0aGlzLmxpbmVXaW4ubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW4ldGhpcy50b3RhbExpbmVXaW5dXSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW4ldGhpcy50b3RhbExpbmVXaW5dXS5nZXRDb21wb25lbnQoXCJaZXVzTWFpbkxpbmVcIikub2ZmRWYoKTtcbiAgICAgICAgICAgIHRoaXMucG9zTGluZVdpbiA9ICh0aGlzLnBvc0xpbmVXaW4rMSkldGhpcy50b3RhbExpbmVXaW47XG4gICAgICAgICAgICBpZiAodGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXSAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXS5nZXRDb21wb25lbnQoXCJaZXVzTWFpbkxpbmVcIikub25FZigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBydW5SZWVsczogZnVuY3Rpb24gKCkge1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsLCBpbmRleCkge1xuICAgICAgICAgICAgcmVlbC5zcGluKGluZGV4KTtcbiAgICAgICAgfSkpO1xuICAgIH0sXG4gICAgY29weTogZnVuY3Rpb24oKXtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24ocmVlbCl7XG4gICAgICAgICAgICByZWVsLmljb25zW3JlZWwuaWNvbnMubGVuZ3RoLTFdLnNldEljb24ocmVlbC5pY29uc1syXS5kYXRhKTtcbiAgICAgICAgICAgIHJlZWwuaWNvbnNbcmVlbC5pY29ucy5sZW5ndGgtMl0uc2V0SWNvbihyZWVsLmljb25zWzFdLmRhdGEpO1xuICAgICAgICAgICAgcmVlbC5pY29uc1tyZWVsLmljb25zLmxlbmd0aC0zXS5zZXRJY29uKHJlZWwuaWNvbnNbMF0uZGF0YSk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxuICAgIHJhbmRvbTogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuICB+fihNYXRoLnJhbmRvbSgpKnRoaXMudG90YWxTeW1ib2wpO1xuICAgIH0sXG4gICAgZ2V0TW9uZXlJblJvb206IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gMTAqTWF0aC5wb3coMTAsIHRoaXMucm9vbU51bWJlcik7XG4gICAgfSxcbiAgICBjaGVja0hhc01vbmV5OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcbiAgICBhZGROb3RpY2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5ub3RpY2VOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm90aWNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiX25vdGlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBtZXNzYWdlO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBzZWxmLm5vdGljZU5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0sIDEyMDApO1xuICAgIH1cbn0pO1xuIl19
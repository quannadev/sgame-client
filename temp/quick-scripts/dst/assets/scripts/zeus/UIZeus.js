
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcVUlaZXVzLmpzIl0sIm5hbWVzIjpbIldpbkdhbWUiLCJyZXF1aXJlIiwiSGVscGVyIiwicmVlbCIsImxpbmUiLCJUcmlhbFJlc3VsdCIsIkxhbmd1YWdlIiwiTGlzdFJvb20iLCJjYyIsIkVudW0iLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVlbHMiLCJ0eXBlIiwiaWNvblByZWZhYiIsIlByZWZhYiIsIm5vdGljZU5vZGUiLCJOb2RlIiwiYnRuUXVheSIsImJ0blF1YXlOaGFuaCIsImJ0blN0b3BRdWF5IiwiYnRuQXV0b1F1YXkiLCJsYk51bWJlckxpbmUiLCJMYWJlbCIsImxiTnVtYmVyU3Rha2UiLCJsYk1vbmV5V2luIiwibGJTZXNzaW9uIiwic2VsZWN0TGluZXMiLCJsaXN0TWFpbkxpbmVzIiwiaXNBdXRvIiwiaXNGYXN0IiwiaXNTcGluIiwiaXNGcmVlU3BpbiIsInJlZCIsImxhc3RSZXN1bHQiLCJiZXRTZWxlY3QiLCJyb29tTnVtYmVyIiwicG9zTGluZVdpbiIsInRvdGFsTGluZVdpbiIsIl9Ub3RhbENvbHVtbiIsImxiX3Bob25nIiwibGJfc29kdSIsImxiX2h1IiwidG9nZ2xlTXVzaWMiLCJUb2dnbGUiLCJ0b2dnbGVTb3VuZCIsImJnU291bmQiLCJBdWRpb0NsaXAiLCJzb3VuZFNwaW5NaXMiLCJzb3VuZFNwaW5XaW4iLCJzb3VuZEJpZ1dpbiIsInNvdW5kSmFja3BvdCIsInNvdW5kQm9udXMiLCJzb3VuZENsaWNrIiwic291bmRTcGluIiwibWVudVNldHRpbmciLCJfa2V5TXVzaWMiLCJfa2V5U291bmQiLCJfbXVzaWNTbG90U3RhdGUiLCJfc291bmRTbG90U3RhdGUiLCJfaXNGcmVlVHJpYWwiLCJfbXlNb25leVRyaWFsIiwiX215U2Vzc2lvbiIsIm9uTG9hZCIsIlRvdGFsSXRlbVJ1biIsInRvdGFsU3ltYm9sIiwid2luTW9uZXkiLCJmcmVlU3BpbiIsImluaXQiLCJzdHJpbmciLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwiR2FtZVZhcmlhYmxlcyIsIlBva2VyIiwiZ2V0Q2hpcCIsIlNtYXJ0Rm94U0RLIiwiWmV1c0NvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJteVNlbGYiLCJzY2hlZHVsZSIsInVwZGF0ZUphY2twb3QiLCJpbml0U291bmQiLCJtdXNpY1NhdmUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFyc2VJbnQiLCJzZXRJdGVtIiwic291bmRTYXZlIiwiaXNDaGVja2VkIiwibXVzaWNJZCIsImF1ZGlvRW5naW5lIiwicGxheSIsInBhdXNlIiwib25EaXNhYmxlIiwiZXZlbnRNdXNpYyIsInJlc3VtZSIsImV2ZW50U291bmQiLCJwbGF5U3BpbiIsInBsYXlTcGluTWlzIiwicGxheVNwaW5XaW4iLCJwbGF5QmlnV2luIiwicGxheUphY2twb3QiLCJwbGF5Qm9udXMiLCJwbGF5Q2xpY2siLCJrZXkiLCJiZXRMZXZlbCIsInZhcmlhYmxlSmFja3BvdCIsImdldFZhcmlhYmxlIiwiamFja3BvdCIsInZhbHVlIiwiY3VycmVudF9sYl9qYWNrcG90Iiwic3BsaXQiLCJqb2luIiwiY3VycmVudEh1IiwicGFyc2VGbG9hdCIsIm51bWJlclRvIiwidXBkYXRlVXNlclZhcmlhYmxlU2xvdCIsImV2ZW50IiwiY2hhbmdlZFZhcnMiLCJpbmRleE9mIiwidXNlciIsImlzSXRNZSIsInVwZGF0ZUZyZWVTcGluIiwidXBkYXRlVXNlclZhcmlhYmxlIiwic3ViQ2hpcCIsImN1cnJlbnRVSSIsIm9uRW5hYmxlIiwibW0iLCJhdWRpbyIsInBhdXNlTXVzaWMiLCJMb2FkaW5nIiwiaGlkZSIsInVuZGVmaW5lZCIsIm51bWJlcldpdGhDb21tYXMiLCJnZXRNb25leUluUm9vbSIsInNob3dMaW5lV2luIiwic2VsZiIsImxpbmVBcnIxIiwibGluZUFycjIiLCJsaW5lQXJyMyIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpbmRleCIsImxhc3RBcnJheSIsImluaXRSYW5kb21JdGVtcyIsInB1c2giLCJsZW5ndGgiLCJ0aGVuIiwicmVzdWx0IiwiY29uY2F0Iiwic2V0TnVtYmVyTGluZXMiLCJ0b3RhbExpbmVzIiwic2V0TnVtYmVyU3Rha2UiLCJ0b3RhbFN0YWtlIiwic2V0TW9uZXlXaW4iLCJ0b3RhbE1vbmV5IiwidXBkYXRlRGF0YVBob25nIiwicm9vbUlkIiwiZXZlbnRRdWF5TmhhbmgiLCJhZGROb3RpY2UiLCJnZXRTdHJpbmciLCJjaGVja0Vub3VnaE1vbmV5IiwiVG9hc3QiLCJzaG93VG9hc3QiLCJwYXVzZVN5c3RlbUV2ZW50Tm9kZSIsImFjdGl2ZSIsImF1dG9RdWF5IiwiZXZlbnRBdXRvUXVheSIsInJ1blF1YXkiLCJnZXRUb3RhbEJldCIsIlpldXNSdW4iLCJnZXRJdGVtVHJpYWwiLCJiZXRSZXF1ZXN0IiwiWmV1c1JlcXVlc3QiLCJCZXRSZXF1ZXN0Iiwic2V0QmV0Iiwic2V0TGluZXNCZXQiLCJzZW5kIiwidG9TUmVxdWVzdCIsImV2ZW50U3RvcFF1YXkiLCJyZXF1ZXN0IiwiU3RvcEF1dG9QbGF5UmVxdWVzdCIsImV2ZW50UGhvbmciLCJkYXRhIiwiZ2V0VG90YWxMaW5lU2VsZWN0IiwiZXZlbnRTZWxlY3RMaW5lcyIsImV2ZW50T3BlbiIsInRvdGFsQmV0IiwidHlwZUxpbmUiLCJsaXN0TGluZSIsImkiLCJldmVudFF1YXkiLCJBdXRvUGxheVJlcXVlc3QiLCJiZXQiLCJnZXRUb3RhbExpbmUiLCJnZXRUb3RhbExpbmVMZSIsImdldFRvdGFsTGluZUNoYW4iLCJzZXRMaW5lTGUiLCJzZXRMaW5lQ2hhbiIsInNldExpbmUiLCJub2RlRXZlbnQiLCJpc1BhdXNlIiwic2V0TWF0ZXJpYWxHcmF5IiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwicGF1c2VTeXN0ZW1FdmVudHMiLCJyZXN1bWVTeXN0ZW1FdmVudHMiLCJldmVudEJhY2siLCJVSU1hbmdlciIsInNob3ciLCJwb3AiLCJzcmMiLCJldmVudFNldHRpbmciLCJldmVudFZpbmhEYW5oIiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImV2ZW50TGljaFN1R2lhb0RpY2giLCJIaXN0b3J5UmVxdWVzdCIsImV2ZW50QmFuZ1RodW9uZyIsImdldERhdGFSZXN1bHQiLCJjZWwiLCJjZWxfaW5kZXgiLCJpY29uIiwiaWNvbnMiLCJzZXRJY29uIiwibGluZVdpbiIsImZyZWVHaWZ0IiwieFNwZWNpYWwiLCJpc0JvbnVzIiwiaXNGcmVlIiwic2Vzc2lvbiIsImlzTm9IdSIsImlzTm9odSIsImlzVGhhbmdMb24iLCJydW5SZWVscyIsIm51bWJlckl0ZW0iLCJsaXN0SXRlbSIsInJhbmRvbSIsIm5ld0FycmF5IiwicmFuZG9tQXJyIiwicmVmb3JtYXRSZXN1bHQiLCJzaXplIiwicmVzIiwic2xpY2UiLCJydW5BY3Rpb25Xb24iLCJydW5XaW5HYW1lIiwic2V0VGltZW91dCIsImJpbmQiLCJzZXRFdmVudE1haW5MaW5lIiwiY2hpbGRyZW4iLCJtYWluTGluZSIsImlzU2hvdyIsInBvc0xpbmUiLCJvbkVmIiwic2NoZWR1bGVPbmNlIiwib2ZmRWYiLCJzaG93TWFpbkxpbmUiLCJ1bnNjaGVkdWxlIiwib2ZmaG92ZXIiLCJzcGluIiwiY29weSIsIk1hdGgiLCJwb3ciLCJjaGVja0hhc01vbmV5IiwibWVzc2FnZSIsImdldENoaWxkQnlOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE9BQU8sR0FBT0MsT0FBTyxDQUFDLGFBQUQsQ0FBekI7O0FBQ0EsSUFBSUMsTUFBTSxHQUFRRCxPQUFPLENBQUMsUUFBRCxDQUF6Qjs7QUFDQSxJQUFJRSxJQUFJLEdBQVVGLE9BQU8sQ0FBQyxVQUFELENBQXpCOztBQUNBLElBQUlHLElBQUksR0FBVUgsT0FBTyxDQUFDLFVBQUQsQ0FBekI7O0FBQ0EsSUFBSUksV0FBVyxHQUFHSixPQUFPLENBQUMsaUJBQUQsQ0FBekI7O0FBQ0EsSUFBSUssUUFBUSxHQUFNTCxPQUFPLENBQUMsY0FBRCxDQUF6Qjs7QUFDQSxJQUFJ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O0FBQ2pCL0csTUFBQUEsSUFBSSxDQUFDekgsVUFBTCxDQUFnQnVKLE1BQWhCLEdBQXlCLEtBQXpCO0FBQ0gsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdIO0FBem1CSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgV2luR2FtZSAgICAgPSByZXF1aXJlKFwiWmV1c1dpbkdhbWVcIik7XHJcbmxldCBIZWxwZXIgICAgICA9IHJlcXVpcmUoXCJIZWxwZXJcIik7XHJcbmxldCByZWVsICAgICAgICA9IHJlcXVpcmUoXCJaZXVzUmVlbFwiKTtcclxubGV0IGxpbmUgICAgICAgID0gcmVxdWlyZShcIlpldXNMaW5lXCIpO1xyXG5sZXQgVHJpYWxSZXN1bHQgPSByZXF1aXJlKFwiWmV1c1RyaWFsUmVzdWx0XCIpO1xyXG5sZXQgTGFuZ3VhZ2UgICAgPSByZXF1aXJlKFwiemV1c0xhbmd1YWdlXCIpO1xyXG5sZXQgTGlzdFJvb20gPSBjYy5FbnVtKHtcclxuICAgIFwiMWxcIiAgIDogMSxcclxuICAgIFwiMWtcIiAgICA6IDIsXHJcbiAgICBcIjEwa1wiICAgOiAzXHJcbn0pO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZWVsczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogcmVlbCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGljb25QcmVmYWIgICAgICAgICAgOiBjYy5QcmVmYWIsXHJcbiAgICAgICAgbm90aWNlTm9kZSAgICAgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgYnRuUXVheSAgICAgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgYnRuUXVheU5oYW5oICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgYnRuU3RvcFF1YXkgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgYnRuQXV0b1F1YXkgICAgICAgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgbGJOdW1iZXJMaW5lICAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTnVtYmVyU3Rha2UgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYk1vbmV5V2luICAgICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJTZXNzaW9uICAgICAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIHNlbGVjdExpbmVzICAgICAgICAgOiBsaW5lLFxyXG4gICAgICAgIFdpbkdhbWUgICAgICAgICAgICAgOiBXaW5HYW1lLFxyXG4gICAgICAgIGxpc3RNYWluTGluZXMgICAgICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIC8vIGVkdENoZWF0ICAgICAgICAgICA6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgaXNBdXRvICAgICAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgIGlzRmFzdCAgICAgICAgICAgICAgOiBmYWxzZSxcclxuICAgICAgICBpc1NwaW4gICAgICAgICAgICAgIDogZmFsc2UsXHJcbiAgICAgICAgaXNGcmVlU3BpbiAgICAgICAgICA6IGZhbHNlLFxyXG4gICAgICAgIHJlZCAgICAgICAgICAgICAgICAgOiB0cnVlLFxyXG4gICAgICAgIGxhc3RSZXN1bHQgICAgICAgICAgOiBbXSxcclxuICAgICAgICBiZXRTZWxlY3QgICAgICAgICAgIDogMCxcclxuICAgICAgICByb29tTnVtYmVyICAgICAgICAgIDogMCxcclxuICAgICAgICBwb3NMaW5lV2luICAgICAgICAgIDogMCxcclxuICAgICAgICB0b3RhbExpbmVXaW4gICAgICAgIDogMCxcclxuICAgICAgICBfVG90YWxDb2x1bW4gICAgICAgIDogNSxcclxuICAgICAgICBsYl9waG9uZzogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJfc29kdTogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJfaHU6IGNjLkxhYmVsLFxyXG4gICAgICAgIHRvZ2dsZU11c2ljOiBjYy5Ub2dnbGUsXHJcbiAgICAgICAgdG9nZ2xlU291bmQ6IGNjLlRvZ2dsZSxcclxuICAgICAgICBiZ1NvdW5kOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRTcGluTWlzOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRTcGluV2luOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRCaWdXaW46IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBzb3VuZEphY2twb3Q6IGNjLkF1ZGlvQ2xpcCxcclxuICAgICAgICBzb3VuZEJvbnVzOiBjYy5BdWRpb0NsaXAsXHJcbiAgICAgICAgc291bmRDbGljazogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIHNvdW5kU3BpbjogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIG1lbnVTZXR0aW5nOiBjYy5Ob2RlLFxyXG4gICAgICAgIF9rZXlNdXNpYzogXCJtdXNpY19rY1wiLFxyXG4gICAgICAgIF9rZXlTb3VuZDogXCJzb3VuZF9rY1wiLFxyXG4gICAgICAgIF9tdXNpY1Nsb3RTdGF0ZSA6IDAsXHJcbiAgICAgICAgX3NvdW5kU2xvdFN0YXRlIDogMCxcclxuICAgICAgICBfaXNGcmVlVHJpYWwgOiBmYWxzZSxcclxuICAgICAgICBfbXlNb25leVRyaWFsIDogMCxcclxuICAgICAgICBfbXlTZXNzaW9uIDogMCxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuX1RvdGFsQ29sdW1uICAgICA9IDU7XHJcbiAgICAgICAgdGhpcy5Ub3RhbEl0ZW1SdW4gICAgID0gMjA7XHJcbiAgICAgICAgdGhpcy50b3RhbFN5bWJvbCAgICAgID0gNztcclxuICAgICAgICB0aGlzLndpbk1vbmV5ICAgICAgICAgPSAwO1xyXG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICAgICAgICA9IDA7XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyICAgICAgID0gTGlzdFJvb21bXCIxbFwiXTtcclxuICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudXBkYXRlSmFja3BvdCwgMyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KCk7XHJcbiAgICAgICAgdGhpcy5pbml0U291bmQoKTtcclxuICAgIH0sXHJcbiAgICBpbml0U291bmQoKSB7XHJcbiAgICAgICAgdmFyIG11c2ljU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9rZXlNdXNpYyk7XHJcbiAgICAgICAgaWYgKG11c2ljU2F2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX211c2ljU2xvdFN0YXRlID0gcGFyc2VJbnQobXVzaWNTYXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9tdXNpY1Nsb3RTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlNdXNpYywgXCIxXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNvdW5kU2F2ZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9rZXlTb3VuZCk7XHJcbiAgICAgICAgaWYgKHNvdW5kU2F2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3NvdW5kU2xvdFN0YXRlID0gcGFyc2VJbnQoc291bmRTYXZlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9IDE7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlTb3VuZCwgXCIxXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmJnU291bmQgIT0gbnVsbCAmJiAhdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5tdXNpY0lkID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmJnU291bmQsIHRydWUsIDEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkRpc2FibGUoKXtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50TXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5fbXVzaWNTbG90U3RhdGUgICAgICAgICA9IHRoaXMudG9nZ2xlU291bmQuaXNDaGVja2VkPyAwOiAxO1xyXG4gICAgICAgIGlmICghdGhpcy50b2dnbGVNdXNpYy5pc0NoZWNrZWQpe1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5tdXNpY0lkKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLm11c2ljSWQpO1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9rZXlNdXNpYywgIHRoaXMuX211c2ljU2xvdFN0YXRlKTtcclxuICAgIH0sXHJcbiAgICBldmVudFNvdW5kKCkge1xyXG4gICAgICAgIHRoaXMuX3NvdW5kU2xvdFN0YXRlID0gdGhpcy50b2dnbGVTb3VuZC5pc0NoZWNrZWQ/IDA6IDE7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuX2tleVNvdW5kLCAgdGhpcy5fc291bmRTbG90U3RhdGUpO1xyXG4gICAgfSxcclxuICAgIHBsYXlTcGluKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZFNwaW4sIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheVNwaW5NaXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kU3Bpbk1pcywgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBwbGF5U3BpbldpbigpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRTcGluV2luLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlCaWdXaW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3NvdW5kU2xvdFN0YXRlID09IDEpIHtcclxuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLnNvdW5kQmlnV2luLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlKYWNrcG90KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEphY2twb3QsIGZhbHNlLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcGxheUJvbnVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFNsb3RTdGF0ZSA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5zb3VuZEJvbnVzLCBmYWxzZSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHBsYXlDbGljaygpIHtcclxuICAgICAgICBpZiAodGhpcy5fc291bmRTbG90U3RhdGUgPT0gMSkge1xyXG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuc291bmRDbGljaywgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVKYWNrcG90KCl7XHJcbiAgICAgICAgbGV0IGtleSA9IFwiemV1c1wiK2NjLmJldExldmVsO1xyXG4gICAgICAgIGlmKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpe1xyXG4gICAgICAgICAgICBpZihTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKXtcclxuICAgICAgICAgICAgICAgIGxldCB2YXJpYWJsZUphY2twb3QgPSBTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLmdldFZhcmlhYmxlKGtleSk7XHJcbiAgICAgICAgICAgICAgICBpZih2YXJpYWJsZUphY2twb3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBqYWNrcG90ID0gdmFyaWFibGVKYWNrcG90LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50X2xiX2phY2twb3QgPSB0aGlzLmxiX2h1LnN0cmluZztcclxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50X2xiX2phY2twb3QgPSBjdXJyZW50X2xiX2phY2twb3Quc3BsaXQoXCIuXCIpLmpvaW4oXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnRIdSA9IHBhcnNlRmxvYXQoY3VycmVudF9sYl9qYWNrcG90KTtcclxuICAgICAgICAgICAgICAgICAgICBVdGlscy5udW1iZXJUbyh0aGlzLmxiX2h1LCBjdXJyZW50SHUsIGphY2twb3QsIDEwMDAsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB1cGRhdGVVc2VyVmFyaWFibGVTbG90KGV2ZW50KSB7XHJcbiAgICAgICAgbGV0IGtleSA9IFwiZnN6ZXVzXCIrY2MuYmV0TGV2ZWw7XHJcbiAgICAgICAgaWYoZXZlbnQuY2hhbmdlZFZhcnMuaW5kZXhPZihrZXkpID49IDApe1xyXG4gICAgICAgICAgICAvLyBnZXQgZnJlZSBzcGluZSBvZiByb29tIGluIGhlcmVcclxuICAgICAgICAgICAgLy9rZXk6IFwiZnNcIiArIFwiemV1czFsXCIgZnJlZSBzcGluIG9mIGJldCAxMDBcclxuICAgICAgICAgICAgLy8ga2V5OiBcImZzXCIgKyBcInpldXMxa1wiIGZyZWUgc3BpbiBvZiBiZXQgMTAwMFxyXG4gICAgICAgICAgICAvLyBrZXk6IFwiZnNcIiArIFwiemV1czEwa1wiIGZyZWUgc3BpbiBvZiBiZXQgMTAwMFxyXG4gICAgICAgICAgICBpZihldmVudC51c2VyLmlzSXRNZSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgZnJlZVNwaW4gICAgPSBTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLmdldFZhcmlhYmxlKGtleSkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWVTcGluICAgPSBmcmVlU3BpbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuV2luR2FtZS51cGRhdGVGcmVlU3BpbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHVwZGF0ZVVzZXJWYXJpYWJsZShzdWJDaGlwKXtcclxuICAgICAgICBpZiAoIXRoaXMuX2lzRnJlZVRyaWFsICYmIGNjLmN1cnJlbnRVSSAhPSBcIlwiKVxyXG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpLXN1YkNoaXApO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGF1c2VNdXNpYygpO1xyXG4gICAgICAgIG1tLkxvYWRpbmcuaGlkZSgpO1xyXG4gICAgICAgIGlmIChjYy5iZXRMZXZlbCA9PSBcImNob2l0aHVcIil7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRnJlZVRyaWFsICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX215TW9uZXlUcmlhbCAgICA9IDUwMDAwMDAwO1xyXG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nICAgPSBVdGlscy5hZGREb3RUb051bWJlcig1MDAwMDAwMCk7XHJcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbiAgICAgICA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMubGJTZXNzaW9uLnN0cmluZyA9IFwiI1wiK3RoaXMuX215U2Vzc2lvbjtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gMDtcclxuICAgICAgICAgICAgdGhpcy5faXNGcmVlVHJpYWwgID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm9vbU51bWJlciA9IExpc3RSb29tW2NjLmJldExldmVsXTtcclxuICAgICAgICBpZih0aGlzLnJvb21OdW1iZXIgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSBMaXN0Um9vbVtjYy5iZXRMZXZlbF07XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gKHRoaXMucm9vbU51bWJlciklNDtcclxuICAgICAgICB0aGlzLnJvb21OdW1iZXIgPSB0aGlzLnJvb21OdW1iZXIgPCAxID8gMTogdGhpcy5yb29tTnVtYmVyO1xyXG4gICAgICAgIHRoaXMubGJfcGhvbmcuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXModGhpcy5nZXRNb25leUluUm9vbSgpKTtcclxuICAgICAgICB0aGlzLnNlbGVjdExpbmVzLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5XaW5HYW1lLmluaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5sYk1vbmV5V2luLnN0cmluZyA9IFwiMFwiO1xyXG4gICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xyXG4gICAgfSxcclxuICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGxldCBzZWxmID0gdGhpcztcclxuICAgICAgICBsZXQgbGluZUFycjEgPSBbXTtcclxuICAgICAgICBsZXQgbGluZUFycjIgPSBbXTtcclxuICAgICAgICBsZXQgbGluZUFycjMgPSBbXTtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihyZWVsLCBpbmRleCkge1xyXG4gICAgICAgICAgICBsZXQgbGFzdEFycmF5ID0gW107XHJcbiAgICAgICAgICAgIGxhc3RBcnJheSA9IHNlbGYuaW5pdFJhbmRvbUl0ZW1zKHNlbGYuVG90YWxJdGVtUnVuKTtcclxuXHJcbiAgICAgICAgICAgIGxpbmVBcnIxLnB1c2gobGFzdEFycmF5W2xhc3RBcnJheS5sZW5ndGgtMV0pO1xyXG4gICAgICAgICAgICBsaW5lQXJyMi5wdXNoKGxhc3RBcnJheVtsYXN0QXJyYXkubGVuZ3RoLTJdKTtcclxuICAgICAgICAgICAgbGluZUFycjMucHVzaChsYXN0QXJyYXlbbGFzdEFycmF5Lmxlbmd0aC0zXSk7XHJcbiAgICAgICAgICAgIHJlZWwuaW5pdChzZWxmLCBsYXN0QXJyYXkpO1xyXG4gICAgICAgIH0pKS50aGVuKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHNlbGYubGFzdFJlc3VsdCA9IGxpbmVBcnIzLmNvbmNhdChsaW5lQXJyMikuY29uY2F0KGxpbmVBcnIxKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBzZXROdW1iZXJMaW5lczogZnVuY3Rpb24odG90YWxMaW5lcykge1xyXG4gICAgICAgIHRoaXMubGJOdW1iZXJMaW5lLnN0cmluZyA9IHRvdGFsTGluZXM7XHJcbiAgICB9LFxyXG4gICAgc2V0TnVtYmVyU3Rha2U6IGZ1bmN0aW9uKHRvdGFsU3Rha2UpIHtcclxuICAgICAgICB0aGlzLmxiTnVtYmVyU3Rha2Uuc3RyaW5nID0gSGVscGVyLm51bWJlcldpdGhDb21tYXModG90YWxTdGFrZSp0aGlzLmdldE1vbmV5SW5Sb29tKCkpO1xyXG4gICAgfSxcclxuICAgIHNldE1vbmV5V2luOiBmdW5jdGlvbih0b3RhbE1vbmV5KSB7XHJcbiAgICAgICAgSGVscGVyLm51bWJlclRvKHRoaXMubGJNb25leVdpbiwgcGFyc2VJbnQodGhpcy5sYk1vbmV5V2luLnN0cmluZyksIHRvdGFsTW9uZXksIDEyMDAsIHRydWUpO1xyXG4gICAgICAgIGlmICghdGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5fbXlNb25leVRyaWFsID0gdGhpcy5fbXlNb25leVRyaWFsICsgdG90YWxNb25leTtcclxuICAgICAgICAgICAgdGhpcy5sYl9zb2R1LnN0cmluZyA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKHRoaXMuX215TW9uZXlUcmlhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNTcGluICAgID0gZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlRGF0YVBob25nKHJvb21JZCkge1xyXG5cclxuICAgIH0sXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuICAgIGV2ZW50UXVheU5oYW5oOiBmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIXRoaXMuY2hlY2tFbm91Z2hNb25leSgpKXtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1NwaW4pe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX2lzX3BsYXlpbmdcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzU3BpbiA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNBdXRvID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuQXV0b1F1YXksIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnBhdXNlU3lzdGVtRXZlbnROb2RlKHRoaXMuYnRuUXVheU5oYW5oLCB0cnVlKTtcclxuICAgICAgICB0aGlzLmJ0blN0b3BRdWF5LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5hdXRvUXVheSgpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50QXV0b1F1YXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0ZyZWVUcmlhbCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X3RyaWFsXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3Bpbil7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1NwaW4gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNGYXN0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc0F1dG8gPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5BdXRvUXVheSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXlOaGFuaCwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuYnRuU3RvcFF1YXkuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmF1dG9RdWF5KCk7XHJcbiAgICB9LFxyXG4gICAgcnVuUXVheSgpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmlzU3BpbiAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuX215TW9uZXlUcmlhbCA9IHRoaXMuX215TW9uZXlUcmlhbC10aGlzLmdldFRvdGFsQmV0KCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSlcclxuICAgICAgICAgICAgICAgIHRoaXMubGJfc29kdS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9teU1vbmV5VHJpYWwpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fbXlNb25leVRyaWFsIDwgMSlcclxuICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF9tb25leVwiKSk7XHJcbiAgICAgICAgICAgIHRoaXMuX215U2Vzc2lvbisrO1xyXG4gICAgICAgICAgICB0aGlzLlpldXNSdW4oVHJpYWxSZXN1bHQuZ2V0SXRlbVRyaWFsKCkpO1xyXG4gICAgICAgICAgICB0aGlzLmZyZWVTcGluLS07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucGxheVNwaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5pc1NwaW4gICAgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgYmV0UmVxdWVzdCA9IG5ldyBaZXVzUmVxdWVzdC5CZXRSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0xpbmVXaW4oZmFsc2UpO1xyXG4gICAgICAgICAgICBiZXRSZXF1ZXN0LnNldEJldCh0aGlzLmdldE1vbmV5SW5Sb29tKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNldExpbmVzQmV0KGJldFJlcXVlc3QpO1xyXG4gICAgICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xyXG4gICAgICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfbm90X21vbmV5XCIpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChiZXRSZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICAgICAgICAgIC8vIHN1YiBtb25leVxyXG4gICAgICAgICAgICBpZiAodGhpcy5mcmVlU3BpbiA8IDEpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIC0gdGhpcy5nZXRUb3RhbEJldCgpKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTdG9wUXVheTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5pc0Zhc3QgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlzQXV0byA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYnRuU3RvcFF1YXkuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0bkF1dG9RdWF5LCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXlOaGFuaCwgZmFsc2UpO1xyXG5cclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBaZXVzUmVxdWVzdC5TdG9wQXV0b1BsYXlSZXF1ZXN0KCk7XHJcbiAgICAgICAgU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50UGhvbmc6IGZ1bmN0aW9uKGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfdHJpYWxcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzU3BpbiB8fCB0aGlzLmlzQXV0byB8fCB0aGlzLmlzRmFzdCl7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gKHRoaXMucm9vbU51bWJlciArIDEpJTQ7XHJcbiAgICAgICAgdGhpcy5yb29tTnVtYmVyID0gdGhpcy5yb29tTnVtYmVyIDwgMSA/IDE6IHRoaXMucm9vbU51bWJlcjtcclxuICAgICAgICB0aGlzLmxiX3Bob25nLnN0cmluZyA9IEhlbHBlci5udW1iZXJXaXRoQ29tbWFzKHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XHJcbiAgICAgICB0aGlzLnNldE51bWJlclN0YWtlKHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lU2VsZWN0KCkpO1xyXG4gICAgICAgIGlmKHRoaXMucm9vbU51bWJlciA9PSAxKXtcclxuICAgICAgICAgICAgY2MuYmV0TGV2ZWwgPSBcIjFsXCI7XHJcbiAgICAgICAgfWVsc2UgaWYodGhpcy5yb29tTnVtYmVyID09IDIpe1xyXG4gICAgICAgICAgICBjYy5iZXRMZXZlbCA9IFwiMWtcIjtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLnJvb21OdW1iZXIgPT0gMyl7XHJcbiAgICAgICAgICAgIGNjLmJldExldmVsID0gXCIxMGtcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVKYWNrcG90KCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRTZWxlY3RMaW5lczogZnVuY3Rpb24oKXtcclxuICAgICAgICBpZiAodGhpcy5faXNGcmVlVHJpYWwpe1xyXG4gICAgICAgICAgICB0aGlzLmFkZE5vdGljZShMYW5ndWFnZS5nZXRTdHJpbmcoXCJub3RpX25vdF90cmlhbFwiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWRkTm90aWNlKExhbmd1YWdlLmdldFN0cmluZyhcIm5vdGlfaXNfcGxheWluZ1wiKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZWxlY3RMaW5lcy5ldmVudE9wZW4oKTtcclxuICAgIH0sXHJcbiAgICBjaGVja0Vub3VnaE1vbmV5KCl7XHJcbiAgICAgICAgbGV0IHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMjU7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdExpbmVzLnR5cGVMaW5lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHRvdGFsQmV0ID0gdGhpcy5nZXRNb25leUluUm9vbSgpICogMTM7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgdG90YWxCZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCkgKiAxMjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdExpbmUgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGk9MTsgaTwgdGhpcy5zZWxlY3RMaW5lcy5kYXRhLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RMaW5lcy5kYXRhW2ldKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdExpbmUucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0b3RhbEJldCA9IHRoaXMuZ2V0TW9uZXlJblJvb20oKSAqIGxpc3RMaW5lLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihHYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAoU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZikgPCB0b3RhbEJldCl7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9LFxyXG4gICAgYXV0b1F1YXkoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJlZVNwaW4gPiAwKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRRdWF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZyZWVTcGluIDwgMSl7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F1dG8pe1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXF1ZXN0ICAgID0gbmV3IFpldXNSZXF1ZXN0LkF1dG9QbGF5UmVxdWVzdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Quc2V0QmV0KHRoaXMuZ2V0TW9uZXlJblJvb20oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMaW5lc0JldChyZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiX3NvZHUuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRDaGlwKFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5teVNlbGYpIC0gdGhpcy5nZXRUb3RhbEJldCgpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50UXVheSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBnZXRUb3RhbEJldCgpe1xyXG4gICAgICAgIGxldCBiZXQgPSB0aGlzLmdldE1vbmV5SW5Sb29tKCk7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLnNlbGVjdExpbmVzLnR5cGVMaW5lKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy8gYWxsXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmUoKSAqIGJldDtcclxuICAgICAgICAgICAgY2FzZSAxOiAvLyBsZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VsZWN0TGluZXMuZ2V0VG90YWxMaW5lTGUoKSogYmV0O1xyXG4gICAgICAgICAgICBjYXNlIDI6IC8vIGNoYW5cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdExpbmVzLmdldFRvdGFsTGluZUNoYW4oKSogYmV0O1xyXG4gICAgICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RMaW5lcy5nZXRUb3RhbExpbmVTZWxlY3QoKSAqIGJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJldDtcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lc0JldChyZXF1ZXN0KXtcclxuICAgICAgICBzd2l0Y2ggKHRoaXMuc2VsZWN0TGluZXMudHlwZUxpbmUpIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRMaW5lTGUoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0LnNldExpbmVDaGFuKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgbGV0IGxpc3RMaW5lID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpPTE7IGk8IHRoaXMuc2VsZWN0TGluZXMuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0TGluZXMuZGF0YVtpXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RMaW5lLnB1c2goaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5zZXRMaW5lKGxpc3RMaW5lKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudFF1YXk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKCF0aGlzLl9pc0ZyZWVUcmlhbCAmJiAhdGhpcy5jaGVja0Vub3VnaE1vbmV5KCkpe1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9ub3RfbW9uZXlcIikpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGF1c2VTeXN0ZW1FdmVudE5vZGUodGhpcy5idG5RdWF5LCB0cnVlKTtcclxuICAgICAgICB0aGlzLnJ1blF1YXkoKTtcclxuICAgIH0sXHJcbiAgICBwYXVzZVN5c3RlbUV2ZW50Tm9kZTogZnVuY3Rpb24obm9kZUV2ZW50LCBpc1BhdXNlKSB7XHJcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSggbm9kZUV2ZW50LmdldENvbXBvbmVudChjYy5TcHJpdGUpLCBpc1BhdXNlKTtcclxuICAgICAgICBpZiAoaXNQYXVzZSl7XHJcbiAgICAgICAgICAgIG5vZGVFdmVudC5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICB9ZWxzZVxyXG4gICAgICAgICAgICBub2RlRXZlbnQucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50QmFjazogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTcGluIHx8IHRoaXMuaXNBdXRvIHx8IHRoaXMuaXNGYXN0KXtcclxuICAgICAgICAgICAgdGhpcy5hZGROb3RpY2UoTGFuZ3VhZ2UuZ2V0U3RyaW5nKFwibm90aV9pc19wbGF5aW5nXCIpKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlaZXVzTG9iYnlcIiwge3BvcDogdHJ1ZSwgc3JjOiBcInpldXNcIn0pO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U2V0dGluZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5tZW51U2V0dGluZy5hY3RpdmUgPSAhdGhpcy5tZW51U2V0dGluZy5hY3RpdmU7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRWaW5oRGFuaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5MZWFkZXJCb2FyZFJlcXVlc3QoKTtcclxuICAgICAgICBTbWFydEZveFNESy5aZXVzQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRMaWNoU3VHaWFvRGljaDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5IaXN0b3J5UmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlpldXNDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcclxuICAgIH0sXHJcbiAgICBldmVudEJhbmdUaHVvbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuc2hvdyhcIlVJWmV1c0hlbHBlclwiLCB7cG9wOiB0cnVlLCBzcmM6IFwiemV1c1wifSk7XHJcbiAgICB9LFxyXG4gICAgWmV1c1J1bjogZnVuY3Rpb24oZGF0YSl7XHJcbiAgICAgICAgdGhpcy5zaG93TGluZVdpbihmYWxzZSk7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLmdldERhdGFSZXN1bHQoZGF0YS5yZXN1bHQpO1xyXG4gICAgICAgIFByb21pc2UuYWxsKHJlc3VsdC5tYXAoZnVuY3Rpb24oY2VsLCBjZWxfaW5kZXgpe1xyXG4gICAgICAgICAgICBQcm9taXNlLmFsbChjZWwubWFwKGZ1bmN0aW9uKGljb24sIGluZGV4KXtcclxuICAgICAgICAgICAgICAgIHNlbGYucmVlbHNbY2VsX2luZGV4XS5pY29uc1tpbmRleF0uc2V0SWNvbihpY29uLCB0cnVlKTtcclxuICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmxpbmVXaW4gICAgPSBkYXRhLmxpbmVXaW47XHJcbiAgICAgICAgdGhpcy53aW5Nb25leSAgID0gZGF0YS53aW5Nb25leTtcclxuICAgICAgICB0aGlzLmZyZWVHaWZ0ICAgPSBkYXRhLmZyZWVHaWZ0O1xyXG4gICAgICAgIHRoaXMueFNwZWNpYWwgICA9IGRhdGEueFNwZWNpYWw7XHJcbiAgICAgICAgdGhpcy5pc0JvbnVzICAgID0gZGF0YS5pc0JvbnVzO1xyXG4gICAgICAgIHRoaXMuaXNGcmVlICAgICA9IGRhdGEuaXNGcmVlU3BpbjtcclxuICAgICAgICB0aGlzLnNlc3Npb24gICAgPSBkYXRhLnNlc3Npb247XHJcbiAgICAgICAgdGhpcy5pc05vSHUgICAgID0gZGF0YS5pc05vaHU7XHJcbiAgICAgICAgdGhpcy5pc1RoYW5nTG9uID0gZGF0YS5pc1RoYW5nTG9uO1xyXG4gICAgICAgIHRoaXMuZnJlZVNwaW4gICA9IGRhdGEuZnJlZVNwaW47XHJcbiAgICAgICAgdGhpcy50eXBlICAgICAgID0gZGF0YS50eXBlO1xyXG4gICAgICAgIHRoaXMucnVuUmVlbHMoKTtcclxuICAgICAgICBpZiAoIWRhdGEuaXNGcmVlU3BpbilcclxuICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnVwZGF0ZUZyZWVTcGluKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzRnJlZVRyaWFsKXtcclxuICAgICAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nID0gXCIjXCIrdGhpcy5fbXlTZXNzaW9uO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLnNlc3Npb247XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRSYW5kb21JdGVtczogZnVuY3Rpb24obnVtYmVySXRlbSkge1xyXG4gICAgICAgIGxldCBsaXN0SXRlbSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgbnVtYmVySXRlbTsgaSsrKXtcclxuICAgICAgICAgICAgbGlzdEl0ZW1baV0gPSB0aGlzLnJhbmRvbSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdEl0ZW07XHJcbiAgICB9LFxyXG4gICAgZ2V0RGF0YVJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgdGhpcy5fVG90YWxDb2x1bW47IGkrKyl7XHJcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld0FycmF5W2klc2VsZi5fVG90YWxDb2x1bW5dLnB1c2gocmVzdWx0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCB0aGlzLl9Ub3RhbENvbHVtbjsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHJhbmRvbUFyciA9IHRoaXMuaW5pdFJhbmRvbUl0ZW1zKHRoaXMuVG90YWxJdGVtUnVuLTYpO1xyXG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9IG5ld0FycmF5W2ldLmNvbmNhdChyYW5kb21BcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8ICB0aGlzLmxhc3RSZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbmV3QXJyYXlbaSVzZWxmLl9Ub3RhbENvbHVtbl0ucHVzaCggdGhpcy5sYXN0UmVzdWx0W2ldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYXN0UmVzdWx0ID0gcmVzdWx0O1xyXG4gICAgICAgIHJldHVybiBuZXdBcnJheTtcclxuICAgIH0sXHJcbiAgICByZWZvcm1hdFJlc3VsdChyZXN1bHQsIHNpemUpIHtcclxuICAgICAgICBsZXQgcmVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aSA8IHJlc3VsdC5sZW5ndGg7IGkgPSBpK3NpemUpXHJcbiAgICAgICAgICAgIHJlcy5wdXNoKHJlc3VsdC5zbGljZShpLGkrc2l6ZSkpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9LFxyXG4gICAgcnVuQWN0aW9uV29uOiBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLnNob3dMaW5lV2luKHRydWUpO1xyXG4gICAgICAgIHRoaXMuV2luR2FtZS5ydW5XaW5HYW1lKCk7XHJcbiAgICAgICAgdGhpcy5wYXVzZVN5c3RlbUV2ZW50Tm9kZSh0aGlzLmJ0blF1YXksIGZhbHNlKTtcclxuICAgIH0sXHJcbiAgICByZXN1bWUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMud2luTW9uZXkgPiAwKXtcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcclxuICAgICAgICAgICAgfS5iaW5kKHRoaXMpLCAzMDApO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5XaW5HYW1lLnJ1bldpbkdhbWUoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0RXZlbnRNYWluTGluZTogZnVuY3Rpb24oaXNQYXVzZSkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubGlzdE1haW5MaW5lcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obWFpbkxpbmUsIGluZGV4KXtcclxuICAgICAgICAgICAgaWYgKGlzUGF1c2UpXHJcbiAgICAgICAgICAgICAgICBtYWluTGluZS5wYXVzZVN5c3RlbUV2ZW50cyh0cnVlKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbWFpbkxpbmUucmVzdW1lU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICBzaG93TGluZVdpbjogZnVuY3Rpb24oaXNTaG93KSB7XHJcbiAgICAgICAgLy8gYWRkIG1vbmV5XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIGlmIChpc1Nob3cpe1xyXG4gICAgICAgICAgICB0aGlzLnNldEV2ZW50TWFpbkxpbmUoaXNTaG93KTtcclxuICAgICAgICAgICAgdGhpcy50b3RhbExpbmVXaW4gICA9IHRoaXMubGluZVdpbi5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMucG9zTGluZVdpbiAgICAgPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b3RhbExpbmVXaW4gPiAwKXtcclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHRoaXMubGluZVdpbi5tYXAoZnVuY3Rpb24ocG9zTGluZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3Bvc0xpbmVdLmdldENvbXBvbmVudChcIlpldXNNYWluTGluZVwiKS5vbkVmKCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZShmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHNlbGYubGluZVdpbi5tYXAoZnVuY3Rpb24ocG9zTGluZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubGlzdE1haW5MaW5lcy5jaGlsZHJlbltwb3NMaW5lXS5nZXRDb21wb25lbnQoXCJaZXVzTWFpbkxpbmVcIikub2ZmRWYoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5zY2hlZHVsZSggdGhpcy5zaG93TWFpbkxpbmUsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSwgMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnNob3dNYWluTGluZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmxpbmVXaW4gJiYgdGhpcy5saW5lV2luLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHRoaXMubGluZVdpbi5tYXAoZnVuY3Rpb24gKHBvc0xpbmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmxpc3RNYWluTGluZXMuY2hpbGRyZW5bcG9zTGluZV0uZ2V0Q29tcG9uZW50KFwiWmV1c01haW5MaW5lXCIpLm9mZmhvdmVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3Bvc0xpbmVdLnBhdXNlU3lzdGVtRXZlbnRzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNob3dNYWluTGluZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubGluZVdpbi5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdE1haW5MaW5lcy5jaGlsZHJlblt0aGlzLmxpbmVXaW5bdGhpcy5wb3NMaW5lV2luJXRoaXMudG90YWxMaW5lV2luXV0gIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW4ldGhpcy50b3RhbExpbmVXaW5dXS5nZXRDb21wb25lbnQoXCJaZXVzTWFpbkxpbmVcIikub2ZmRWYoKTtcclxuICAgICAgICAgICAgdGhpcy5wb3NMaW5lV2luID0gKHRoaXMucG9zTGluZVdpbisxKSV0aGlzLnRvdGFsTGluZVdpbjtcclxuICAgICAgICAgICAgaWYgKHRoaXMubGlzdE1haW5MaW5lcy5jaGlsZHJlblt0aGlzLmxpbmVXaW5bdGhpcy5wb3NMaW5lV2luXV0gIT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0TWFpbkxpbmVzLmNoaWxkcmVuW3RoaXMubGluZVdpblt0aGlzLnBvc0xpbmVXaW5dXS5nZXRDb21wb25lbnQoXCJaZXVzTWFpbkxpbmVcIikub25FZigpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBydW5SZWVsczogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMucmVlbHMubWFwKGZ1bmN0aW9uKHJlZWwsIGluZGV4KSB7XHJcbiAgICAgICAgICAgIHJlZWwuc3BpbihpbmRleCk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIGNvcHk6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24ocmVlbCl7XHJcbiAgICAgICAgICAgIHJlZWwuaWNvbnNbcmVlbC5pY29ucy5sZW5ndGgtMV0uc2V0SWNvbihyZWVsLmljb25zWzJdLmRhdGEpO1xyXG4gICAgICAgICAgICByZWVsLmljb25zW3JlZWwuaWNvbnMubGVuZ3RoLTJdLnNldEljb24ocmVlbC5pY29uc1sxXS5kYXRhKTtcclxuICAgICAgICAgICAgcmVlbC5pY29uc1tyZWVsLmljb25zLmxlbmd0aC0zXS5zZXRJY29uKHJlZWwuaWNvbnNbMF0uZGF0YSk7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgfSxcclxuICAgIHJhbmRvbTogZnVuY3Rpb24oKXtcclxuICAgICAgICByZXR1cm4gIH5+KE1hdGgucmFuZG9tKCkqdGhpcy50b3RhbFN5bWJvbCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0TW9uZXlJblJvb206IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHJldHVybiAxMCpNYXRoLnBvdygxMCwgdGhpcy5yb29tTnVtYmVyKTtcclxuICAgIH0sXHJcbiAgICBjaGVja0hhc01vbmV5OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBhZGROb3RpY2U6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubm90aWNlTm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubm90aWNlTm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiX25vdGlcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBtZXNzYWdlO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgc2VsZi5ub3RpY2VOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDEyMDApO1xyXG4gICAgfVxyXG59KTtcclxuIl19
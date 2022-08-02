"use strict";
cc._RF.push(module, '963ff+MhhRHILpPWMNfXlWl', 'UISieuXe');
// scripts/sieuxe/UISieuXe.js

"use strict";

var WinGame = require("SieuXeWinGame");

var Helper = require("Helper");

var reel = require("SieuXeReel");

var Language = require("sieuxeLanguage");

var ListRoom = cc.Enum({
  "1l": 100,
  "1k": 1000,
  "5k": 5000,
  "10k": 10000
});
cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    reels: {
      "default": [],
      type: reel
    },
    listRoomNode: {
      "default": [],
      type: cc.Toggle
    },
    iconPrefab: cc.Prefab,
    noticeNode: cc.Node,
    btnQuay: cc.Node,
    btnQuayNhanh: cc.Node,
    btnStopSieuToc: cc.Node,
    btnStopQuay: cc.Node,
    btnAutoQuay: cc.Node,
    WinGame: WinGame,
    listMainLines: cc.Node,
    edtCheat: cc.EditBox,
    isAuto: false,
    isFast: false,
    isSpin: false,
    red: true,
    lastResult: [],
    betSelect: 0,
    roomNumber: 0,
    posLineWin: 0,
    totalLineWin: 0,
    TotalItemRun: 15,
    TotalColumn: 5,
    lb_hu: cc.Label,
    betLevel: "1l"
  },
  onLoad: function onLoad() {
    this.initSieuXe();
    this.WinGame.init(this);
    this.betLevel = "1k";
    this.roomNumber = ListRoom["1k"];
    this.listRoomNode[1].isChecked = true;
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      cc.lastZIndex += 1;
      this.node.zIndex = cc.lastZIndex;
    }

    cc.currentUI = "UISieuXe";
  },
  showGame: function showGame() {
    this.node.getChildByName("content").active = true;
  },
  updateJackpot: function updateJackpot() {
    var key = "sieuxe" + this.betLevel;

    if (SmartFoxSDK.SieuXeController.ZoneInstance.mySelf) {
      var variableJackpot = SmartFoxSDK.SieuXeController.ZoneInstance.mySelf.getVariable(key);

      if (variableJackpot) {
        var jackpot = variableJackpot.value;
        var current_lb_jackpot = this.lb_hu.string;
        current_lb_jackpot = current_lb_jackpot.split(".").join("");
        var currentHu = parseFloat(current_lb_jackpot);
        Utils.numberTo(this.lb_hu, currentHu, jackpot, 1000, true);
      }
    }
  },
  onDisable: function onDisable() {
    this.node.stopAllActions();
  },
  initSieuXe: function initSieuXe() {
    var self = this;
    var lineArr1 = [];
    var lineArr2 = [];
    var lineArr3 = [];
    Promise.all(this.reels.map(function (reel, index) {
      var lastArray = [];

      if (index < 3) {
        lastArray = self.initRandomItems(self.TotalItemRun, 0, 6);
      } else {
        lastArray = self.initRandomItems(self.TotalItemRun, 6, 4);
      }

      lineArr1.push(lastArray[lastArray.length - 1]);
      lineArr2.push(lastArray[lastArray.length - 2]);
      lineArr3.push(lastArray[lastArray.length - 3]);
      reel.init(self, lastArray);
    })).then(function (result) {
      self.lastResult = lineArr3.concat(lineArr2).concat(lineArr1);
    });
  },
  setMoneyWin: function setMoneyWin(totalMoney) {},
  updateDataPhong: function updateDataPhong(roomId) {},
  // update (dt) {},
  eventSieuToc: function eventSieuToc() {
    if (!this.checkEnoughMoney()) {
      mm.Toast.showToast(1, Language.getString("noti_not_money"));
      return;
    }

    this.isSpin = true;
    this.isFast = true;
    this.isAuto = true;
    this.btnStopSieuToc.active = true;
    this.btnStopQuay.active = false;
    this.pauseSystemEventNode(this.btnQuay, true);
    this.autoQuay();
  },
  eventAutoQuay: function eventAutoQuay() {
    if (!this.checkEnoughMoney()) {
      mm.Toast.showToast(1, Language.getString("noti_not_money"));
      return;
    }

    this.isSpin = true;
    this.isAuto = true;
    this.isFast = false;
    this.btnStopSieuToc.active = false;
    this.btnStopQuay.active = true;
    this.pauseSystemEventNode(this.btnQuay, true);
    this.autoQuay();
  },
  eventStopAuto: function eventStopAuto() {
    this.isAuto = false;
    this.btnStopQuay.active = false;
    this.pauseSystemEventNode(this.btnQuay, false);
  },
  eventStopSieuToc: function eventStopSieuToc() {
    this.isFast = false;
    this.isAuto = false;
    this.btnStopSieuToc.active = false;
    this.pauseSystemEventNode(this.btnQuay, false);
  },
  eventPhong: function eventPhong(event, data) {
    if (this.isSpin) {
      if (this.roomNumber == 100) {
        this.listRoomNode[0].isChecked = true;
      } else if (this.roomNumber == 1000) {
        this.listRoomNode[1].isChecked = true;
      } else if (this.roomNumber == 5000) {
        this.listRoomNode[2].isChecked = true;
      } else if (this.roomNumber == 10000) {
        this.listRoomNode[3].isChecked = true;
      }

      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    this.roomNumber = parseInt(data);

    if (this.roomNumber == 100) {
      this.betLevel = "1l";
    } else if (this.roomNumber == 1000) {
      this.betLevel = "1k";
    } else if (this.roomNumber == 5000) {
      this.betLevel = "5k";
    } else if (this.roomNumber == 10000) {
      this.betLevel = "10k";
    }

    this.updateJackpot();
  },
  checkEnoughMoney: function checkEnoughMoney() {
    if (GameVariables.Poker.getChip(SmartFoxSDK.SieuXeController.ZoneInstance.mySelf) < this.roomNumber) {
      return false;
    }

    return true;
  },
  eventQuay: function eventQuay() {
    if (!this.checkEnoughMoney()) {
      mm.Toast.showToast(1, Language.getString("noti_not_money"));
      return;
    }

    this.isSpin = true;
    var betRequest = new SieuXeRequest.BetRequest();
    this.showLineWin(false);
    this.pauseSystemEventNode(this.btnQuay, true);
    betRequest.setBet(this.roomNumber);
    SmartFoxSDK.SieuXeController.ZoneInstance.send(betRequest.toSRequest());
    this.updateChipAll(this.roomNumber);
  },
  pauseSystemEventNode: function pauseSystemEventNode(nodeEvent, isPause) {
    Helper.setMaterialGray(nodeEvent.getComponent(cc.Sprite), isPause);

    if (isPause) {
      nodeEvent.pauseSystemEvents(true);
    } else nodeEvent.resumeSystemEvents(true);
  },
  eventBack: function eventBack() {
    if (this.isSpin) {
      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    var room = SmartFoxSDK.SieuXeController.ZoneInstance.getRoomByName("sieuxe");

    if (room) {
      SmartFoxSDK.SieuXeController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.back();
    }
  },
  eventSetting: function eventSetting() {},
  eventVinhDanh: function eventVinhDanh() {
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.SieuXeController.ZoneInstance.send(request.toSRequest());
  },
  eventLichSuGiaoDich: function eventLichSuGiaoDich() {
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.SieuXeController.ZoneInstance.send(request.toSRequest());
  },
  eventOpenHelper: function eventOpenHelper() {
    this.show("UISieuXeHelper", {
      pop: true,
      src: 'sieuxe'
    });
  },
  finishSpin: function finishSpin() {
    this.isSpin = false;
  },
  SieuXeRun: function SieuXeRun(data) {
    var self = this;

    if (void 0 !== data.status) {
      if (data.status === 1) {
        //reformat data
        for (var i = 0; i < data.result.length; i++) {
          var count = i % 5;

          if (count > 2) {
            data.result[i] = data.result[i] + 1;
          }
        }

        data.result = this.getDataResult(data.result);
        Promise.all(data.result.map(function (cel, cel_index) {
          Promise.all(cel.map(function (icon, index) {
            self.reels[cel_index].icons[index].setIcon(icon, true);
          }));
        })).then(function (result) {
          self.runReels();
        });
        this.lineWin = data.lineWin;
        this.winMoney = data.winMoney;
        this.isNoHu = data.isNohu;
        this.isThangLon = data.isThangLon;
      } else {
        this.resetSpin();
      }
    }
  },
  initRandomItems: function initRandomItems(numberItem, min, maxRandom) {
    var listItem = [];

    for (var i = 0; i < numberItem; i++) {
      listItem[i] = this.random(min, maxRandom);
    }

    return listItem;
  },
  getDataResult: function getDataResult(result) {
    var self = this;
    var newArray = [];

    for (var i = 0; i < this.TotalColumn; i++) {
      newArray[i] = [];
    }

    for (var _i = 0; _i < result.length; _i++) {
      newArray[_i % self.TotalColumn].push(result[_i]);
    }

    for (var _i2 = 0; _i2 < this.TotalColumn; _i2++) {
      var randomArr = [];

      if (_i2 < 3) {
        randomArr = this.initRandomItems(this.TotalItemRun - 6, 0, 6);
      } else {
        randomArr = this.initRandomItems(this.TotalItemRun - 6, 6, 4);
      }

      newArray[_i2] = newArray[_i2].concat(randomArr);
    }

    for (var _i3 = 0; _i3 < this.lastResult.length; _i3++) {
      newArray[_i3 % self.TotalColumn].push(this.lastResult[_i3]);
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
    this.WinGame.runWinGame();
    this.showLineWin(true);
    if (!this.isAuto) this.pauseSystemEventNode(this.btnQuay, false);
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
  autoQuay: function autoQuay() {
    if (this.isAuto) {
      this.timeOut = setTimeout(function () {
        this.eventQuay();
      }.bind(this), 500);
    }
  },
  showLineWin: function showLineWin(isShow) {
    var _this = this;

    var self = this;

    if (isShow) {
      this.totalLineWin = this.lineWin.length;
      this.posLineWin = 0;

      if (this.totalLineWin > 0) {
        Promise.all(this.lineWin.map(function (posLine) {
          self.listMainLines.children[posLine].active = true;
        }));
        this.scheduleOnce(function () {}, 2);
        Promise.all(self.lineWin.map(function (posLine) {
          self.listMainLines.children[posLine].active = false;
        })).then(function (result) {
          self.schedule(_this.showMainLine, 1.5);
        });
      }
    } else {
      for (var i = 0; i < this.listMainLines.childrenCount; i++) {
        if (this.listMainLines.children[i].active) this.listMainLines.children[i].active = false;
      }

      self.unschedule(this.showMainLine);
    }
  },
  showMainLine: function showMainLine() {
    var _this2 = this;

    Promise.all(this.listMainLines.children.map(function (line, index) {
      if (line.active) line.active = false;
    })).then(function (result) {
      _this2.totalLineWin = _this2.lineWin.length;

      if (_this2.totalLineWin > 0) {
        _this2.posLineWin = (_this2.posLineWin + 1) % _this2.totalLineWin;
        _this2.listMainLines.children[_this2.lineWin[_this2.posLineWin]].active = true;
      }
    }, this);
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
  random: function random(min, max) {
    return min + ~~(Math.random() * max);
  },
  resetSpin: function resetSpin() {},
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
  },
  updateChipAll: function updateChipAll(subChip) {
    SmartFoxSDK.SieuXeController.onEventUpdateChip(subChip);
  }
});

cc._RF.pop();
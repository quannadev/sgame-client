"use strict";
cc._RF.push(module, 'ae9f1M24aFHxKf97fCiKsbM', 'UIMiniPoker');
// scripts/minipoker/UIMiniPoker.js

"use strict";

var WinGame = require("MiniPokerWinGame");

var Helper = require("Helper");

var reel = require("MiniPokerReel");

var UtilsUI = require("UtilsUI");

var PokerCard = require("PokerCard");

var Language = require("sinbadLanguage");

var ListRoom = cc.Enum({
  "1l": 100,
  "1k": 1000,
  "10k": 10000
});
cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    reels: {
      "default": [],
      type: reel
    },
    iconPrefab: cc.Prefab,
    selectRoom: cc.Node,
    noticeNode: cc.Node,
    btnQuay: cc.Node,
    btnQuayNhanh: cc.Node,
    btnStopQuayNhanh: cc.Node,
    btnAutoQuay: cc.Node,
    btnStopAutoQuay: cc.Node,
    WinGame: WinGame,
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
    _TotalColumn: 5,
    ListCard: [],
    _isQuay: true,
    lb_hu: cc.Label,
    betLevel: "1l"
  },
  onLoad: function onLoad() {
    this._TotalColumn = 5;
    this.TotalItemRun = 15;
    this.isFast = false;
    this._isQuay = false;
    this.isAuto = false;
    cc.loader.loadRes("images/minigame/minipoker/card2d", cc.SpriteAtlas, function (err, atlas) {
      if (err) {
        console.log(err);
        return;
      }

      this.ListCard = atlas;
      this.initMiniPoker();
      this.WinGame.init(this);
    }.bind(this));
    var self = this;
    Promise.all(this.selectRoom.children.map(function (room, index) {
      Helper.setMaterialGray(room.getComponent(cc.Sprite), true);
    })).then(function (result) {
      Helper.setMaterialGray(self.selectRoom.children[0].getComponent(cc.Sprite), false);
    });
    this.betLevel = "1l";
    this.roomNumber = ListRoom["1l"];
    this.schedule(this.updateJackpot, 3);
    this.updateJackpot();
  },
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      cc.lastZIndex += 1;
      this.node.zIndex = cc.lastZIndex;
    }

    cc.currentUI = "UIMiniPoker";
    mm.Loading.hide();
  },
  onDisable: function onDisable() {
    this.node.stopAllActions();
  },
  updateJackpot: function updateJackpot() {
    var key = "minipoker" + this.betLevel;
    var variableJackpot = SmartFoxSDK.MiniPokerController.ZoneInstance.mySelf.getVariable(key);

    if (variableJackpot) {
      var jackpot = variableJackpot.value;
      var current_lb_jackpot = this.lb_hu.string;
      current_lb_jackpot = current_lb_jackpot.split(".").join("");
      var currentHu = parseFloat(current_lb_jackpot);
      Utils.numberTo(this.lb_hu, currentHu, jackpot, 1000, true);
    }
  },
  initMiniPoker: function initMiniPoker() {
    var self = this;
    self.lastResult = [];
    Promise.all(this.reels.map(function (reel, index) {
      var lastArray = self.initRandomItems(self.TotalItemRun, 1, 52);
      self.lastResult.push(lastArray[lastArray.length - 1]);
      reel.init(self, lastArray);
    }));
  },
  setMoneyWin: function setMoneyWin(totalMoney) {},
  updateDataPhong: function updateDataPhong(roomId) {},
  // update (dt) {},
  eventSieuToc: function eventSieuToc() {
    this.isFast = true;
    this.isAuto = true;
    this.btnStopAutoQuay.active = false;
    this.btnStopQuayNhanh.active = true;
    this.autoQuay();
  },
  eventAutoQuay: function eventAutoQuay() {
    this.isAuto = true;
    this.isFast = false;
    this.btnStopAutoQuay.active = true;
    this.btnQuayNhanh.active = true;
    this.autoQuay();
  },
  eventStopAuto: function eventStopAuto() {
    this.isAuto = false;
    this.btnAutoQuay.active = true;
    this.btnStopAutoQuay.active = false;
  },
  eventStopSieuToc: function eventStopSieuToc() {
    this.isFast = false;
    this.isAuto = false;
    this.btnQuayNhanh.active = true;
    this.btnStopQuayNhanh.active = false;
  },
  eventPhong: function eventPhong(event, data) {
    mm.audio.playButton();

    if (this._isQuay) {
      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    Promise.all(this.selectRoom.children.map(function (room, index) {
      Helper.setMaterialGray(room.getComponent(cc.Sprite), true);
    })).then(function (result) {
      Helper.setMaterialGray(event.target.getComponent(cc.Sprite), false);
    });
    this.roomNumber = parseInt(data);

    if (this.roomNumber == 100) {
      this.betLevel = "1l";
    } else if (this.roomNumber == 1000) {
      this.betLevel = "1k";
    } else if (this.roomNumber == 10000) {
      this.betLevel = "10k";
    }

    this.updateJackpot();
  },
  checkEnoughMoney: function checkEnoughMoney() {
    if (GameVariables.Poker.getChip(SmartFoxSDK.MiniPokerController.ZoneInstance.mySelf) < this.roomNumber) {
      return false;
    }

    return true;
  },
  eventQuay: function eventQuay() {
    if (!this.checkEnoughMoney()) {
      mm.Toast.showToast(1, Language.getString("noti_not_money"));
      return;
    }

    if (this._isQuay) {
      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    this._isQuay = true;
    this.btnQuay.getComponent(sp.Skeleton).setAnimation(0, "Spine", false);
    var betRequest = new MiniPokerRequest.BetRequest();
    betRequest.setBet(this.roomNumber);
    this.updateChipAll(this.roomNumber);
    SmartFoxSDK.MiniPokerController.ZoneInstance.send(betRequest.toSRequest());
  },
  pauseSystemEventNode: function pauseSystemEventNode(nodeEvent, isPause) {
    Helper.setMaterialGray(nodeEvent.getComponent(cc.Sprite), isPause);

    if (isPause) {
      nodeEvent.pauseSystemEvents(true);
    } else nodeEvent.resumeSystemEvents(true);
  },
  eventBack: function eventBack() {
    mm.audio.playButton();

    if (this._isQuay) {
      this.addNotice(Language.getString("noti_is_playing"));
      return;
    }

    var room = SmartFoxSDK.MiniPokerController.ZoneInstance.getRoomByName("minipoker");

    if (room) {
      SmartFoxSDK.MiniPokerController.ZoneInstance.send(new SmartFoxSDK.SmartFox.Requests.System.LeaveRoomRequest(room));
    } else {
      this.back();
    }
  },
  eventSetting: function eventSetting() {
    mm.audio.playButton();
  },
  eventVinhDanh: function eventVinhDanh() {
    mm.audio.playButton();
    mm.Loading.show();
    var request = new CasinoRequest.LeaderBoardRequest();
    SmartFoxSDK.MiniPokerController.ZoneInstance.send(request.toSRequest());
  },
  eventLichSuGiaoDich: function eventLichSuGiaoDich() {
    mm.audio.playButton();
    mm.Loading.show();
    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.MiniPokerController.ZoneInstance.send(request.toSRequest());
  },
  eventOpenHelper: function eventOpenHelper() {
    mm.audio.playButton();
    this.show("UIMiniPokerHelper", {
      pop: true,
      src: 'minipoker'
    });
  },
  MiniPokerRun: function MiniPokerRun(data) {
    var self = this;

    var newResult = this._convertPosCard(data.result);

    newResult = this.getDataResult(newResult);
    Promise.all(newResult.map(function (cel, cel_index) {
      Promise.all(cel.map(function (icon, index) {
        self.reels[cel_index].icons[index].setIcon(icon, true);
      }));
    })).then(function (result) {
      self.runReels();
    });
    this.winMoney = data.winMoney;
    this.isNoHu = data.noHu;
    this.handWinType = data.handWinType;
  },
  _convertPosCard: function _convertPosCard(result) {
    var newResult = [];

    for (var i = 0; i < result.length; i++) {
      var card = new PokerCard.Card(result[i]);
      newResult.push(card.nameFile);
    }

    return newResult;
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

    for (var i = 0; i < this._TotalColumn; i++) {
      newArray[i] = [];
    }

    for (var _i = 0; _i < result.length; _i++) {
      newArray[_i % self._TotalColumn].push(result[_i]);
    }

    for (var _i2 = 0; _i2 < this._TotalColumn; _i2++) {
      var randomArr = this.initRandomItems(this.TotalItemRun - 2, 1, 52);
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
    this._isQuay = false;
    this.WinGame.runWinGame();
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
    if (!this.checkEnoughMoney()) {
      mm.Toast.showToast(1, Language.getString("noti_not_money"));
      return;
    }

    if (this.isAuto) {
      this.eventQuay();
    }
  },
  runReels: function runReels() {
    Promise.all(this.reels.map(function (reel, index) {
      reel.spin(index);
    }));
  },
  copy: function copy() {
    Promise.all(this.reels.map(function (reel) {
      reel.icons[reel.icons.length - 1].setIcon(reel.icons[0].data);
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
    SmartFoxSDK.MiniPokerController.onEventUpdateChip(subChip);
  }
});

cc._RF.pop();
"use strict";
cc._RF.push(module, '9f07dXgZAVCLKVdme6WzfaT', 'MiniPokerLine');
// scripts/minipoker/MiniPokerLine.js

"use strict";

var helper = require('Helper');

cc.Class({
  "extends": cc.Component,
  properties: {
    nodeLine: cc.Node,
    typeLine: 0
  },
  init: function init(obj) {
    this.CDV = obj;
    this.eventSelectAll();
  },
  eventOpen: function eventOpen() {
    mm.audio.playButton();
    this.node.active = true;
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    var total = this.getTotalLineSelect();

    if (this.node.active && total < 1) {
      this.CDV.addNotice('Chọn ít nhất 1 dòng');
    } else {
      this.node.active = false;
    }
  },
  eventSelect: function eventSelect(event, numberStr) {
    mm.audio.playButton();
    var numberLine = parseInt(numberStr);
    helper.setMaterialGray(event.target.getComponent(cc.Sprite), helper.isMaterialGray(event.target.getComponent(cc.Sprite)));
    this.data[numberLine] = helper.isMaterialGray(event.target.getComponent(cc.Sprite));
    this.updateString();
    this.typeLine = 3;
  },
  eventBoChon: function eventBoChon() {
    var _this = this;

    mm.audio.playButton();
    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), true);
      return false;
    })).then(function (result) {
      _this.data = result;
      _this.typeLine = -1;
    });
  },
  eventSelectChan: function eventSelectChan() {
    var _this2 = this;

    mm.audio.playButton();
    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), index % 2 == 1);
      return index % 2 != 1;
    })).then(function (result) {
      _this2.data = result;

      _this2.updateString();
    });
    this.typeLine = 2;
  },
  eventSelectLe: function eventSelectLe() {
    var _this3 = this;

    mm.audio.playButton();
    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), index % 2 == 0);
      return index % 2 != 0;
    })).then(function (result) {
      _this3.data = result;

      _this3.updateString();
    });
    this.typeLine = 1;
  },
  eventSelectAll: function eventSelectAll(e, select) {
    var _this4 = this;

    mm.audio.playButton();
    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), false);
      return true;
    })).then(function (result) {
      _this4.data = result;

      _this4.updateString();
    });
    this.typeLine = 0;
  },
  updateString: function updateString() {
    var total = this.getTotalLineSelect();
    this.CDV.setNumberLines(total);
  },
  getTotalLineSelect: function getTotalLineSelect() {
    var total = 0;

    for (var i = 1; i < this.data.length; i++) {
      if (this.data[i]) total++;
    }

    return total;
  }
});

cc._RF.pop();
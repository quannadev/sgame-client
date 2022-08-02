"use strict";
cc._RF.push(module, 'd89ceMvFbZFzJv37PqjxViB', 'SinbadLine');
// scripts/sinbad/SinbadLine.js

"use strict";

var helper = require('Helper');

cc.Class({
  "extends": cc.Component,
  properties: {
    nodeLine: cc.Node,
    typeLine: 0
  },
  init: function init(obj) {
    this.KCV = obj;
    this.eventSelectAll();
  },
  eventOpen: function eventOpen() {
    this.node.active = true;
  },
  eventClose: function eventClose() {
    var total = this.getTotalLineSelect();

    if (this.node.active && total < 1) {
      this.KCV.addNotice('Chọn ít nhất 1 dòng');
    } else {
      this.node.active = false;
    }
  },
  eventSelect: function eventSelect(event, numberStr) {
    var numberLine = parseInt(numberStr);
    helper.setMaterialGray(event.target.getComponent(cc.Sprite), helper.isMaterialGray(event.target.getComponent(cc.Sprite)));
    this.data[numberLine] = helper.isMaterialGray(event.target.getComponent(cc.Sprite));
    this.updateString();
    this.typeLine = 3;
  },
  eventBoChon: function eventBoChon() {
    var _this = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), true);
      return false;
    })).then(function (result) {
      _this.data = result;
      _this.typeLine = -1;

      _this.updateString();
    });
  },
  eventSelectChan: function eventSelectChan() {
    var _this2 = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), index % 2 == 1);
      return index % 2 != 1;
    })).then(function (result) {
      _this2.data = result;
      _this2.typeLine = 2;

      _this2.updateString();
    });
  },
  eventSelectLe: function eventSelectLe() {
    var _this3 = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), index % 2 == 0);
      return index % 2 != 0;
    })).then(function (result) {
      _this3.data = result;
      _this3.typeLine = 1;

      _this3.updateString();
    });
  },
  eventSelectAll: function eventSelectAll(e, select) {
    var _this4 = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), false);
      return true;
    })).then(function (result) {
      _this4.typeLine = 0;
      _this4.data = result;

      _this4.updateString();
    });
  },
  updateString: function updateString() {
    var total = this.getTotalLineSelect();
    this.KCV.setNumberLines(total);
    this.KCV.setNumberStake(total);
  },
  getTotalLineChan: function getTotalLineChan() {
    return 10;
  },
  getTotalLineLe: function getTotalLineLe() {
    return 10;
  },
  getTotalLine: function getTotalLine() {
    return 20;
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
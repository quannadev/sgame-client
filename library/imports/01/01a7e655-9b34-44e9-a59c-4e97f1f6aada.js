"use strict";
cc._RF.push(module, '01a7eZVmzRE6aWcTpfx9qra', 'SieuXeLine');
// scripts/sieuxe/SieuXeLine.js

"use strict";

var helper = require('Helper');

cc.Class({
  "extends": cc.Component,
  properties: {
    nodeLine: cc.Node,
    typeLine: 0
  },
  init: function init(obj) {
    this.lines = {
      '1': [0, 0, 0],
      '2': [0, 0, 1],
      '3': [0, 0, 2],
      '4': [0, 1, 0],
      '5': [0, 1, 1],
      '6': [0, 1, 2],
      '7': [0, 2, 0],
      '8': [0, 2, 1],
      '9': [0, 2, 2],
      '10': [1, 0, 0],
      '11': [1, 0, 1],
      '12': [1, 0, 2],
      '13': [1, 1, 0],
      '14': [1, 1, 1],
      '15': [1, 1, 2],
      '16': [1, 2, 0],
      '17': [1, 2, 1],
      '18': [1, 2, 2],
      '19': [2, 0, 0],
      '20': [2, 0, 1],
      '21': [2, 0, 2],
      '22': [2, 1, 0],
      '23': [2, 1, 1],
      '24': [2, 1, 2],
      '25': [2, 2, 0],
      '26': [2, 2, 1],
      '27': [2, 2, 2]
    };
    this.SXV = obj;
    this.eventSelectAll();
  },
  eventOpen: function eventOpen() {
    this.node.active = true;
  },
  eventClose: function eventClose() {
    var total = this.getTotalLineSelect();

    if (this.node.active && total < 1) {
      this.SXV.addNotice('Chọn ít nhất 1 dòng');
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
    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), true);
      return false;
    }));
    this.typeLine = -1;
    this.updateString();
  },
  eventSelectChan: function eventSelectChan() {
    var _this = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), index % 2 == 1);
      return index % 2 != 1;
    })).then(function (result) {
      _this.data = result;

      _this.updateString();
    });
    this.typeLine = 2;
  },
  eventSelectLe: function eventSelectLe() {
    var _this2 = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), index % 2 == 0);
      return index % 2 != 0;
    })).then(function (result) {
      _this2.data = result;

      _this2.updateString();
    });
    this.typeLine = 1;
  },
  eventSelectAll: function eventSelectAll(e, select) {
    var _this3 = this;

    Promise.all(this.nodeLine.children.map(function (line, index) {
      helper.setMaterialGray(line.getComponent(cc.Sprite), false);
      return true;
    })).then(function (result) {
      _this3.data = result;

      _this3.updateString();
    });
    this.typeLine = 0;
  },
  updateString: function updateString() {
    var total = this.getTotalLineSelect();
    this.SXV.setNumberLines(total);
    this.SXV.setNumberStake(total);
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
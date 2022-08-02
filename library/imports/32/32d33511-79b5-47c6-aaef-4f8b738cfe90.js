"use strict";
cc._RF.push(module, '32d33URebVHxqrvT4tzjP6Q', 'UITaiXiuSoiCau');
// scripts/taixiu/UITaiXiuSoiCau.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    totalTai: cc.Label,
    totalXiu: cc.Label,
    cauTai: cc.SpriteFrame,
    cauXiu: cc.SpriteFrame,
    listviewCau1: Listview,
    listviewCau2: Listview,
    lineTemplate: cc.Node,
    iconXX1Template: cc.Node,
    iconXX2Template: cc.Node,
    iconXX3Template: cc.Node,
    iconTaiTemplate: cc.Node,
    iconXiuTemplate: cc.Node,
    xx1Draw: cc.Node,
    xx2Draw: cc.Node,
    xx3Draw: cc.Node,
    xx123Draw: cc.Node,
    btnBack: cc.Node,
    btnNext: cc.Node,
    soiCau1: cc.Node,
    soiCau2: cc.Node,
    listCau1: null,
    listCau2: null,
    totalTaiValue: 0,
    totalXiuValue: 0,
    _isDraw2: false
  },
  onEnable: function onEnable() {
    this._isDraw2 = false;

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }

    this.drawPage2();
    this.btnBack.active = false;
    this.btnNext.active = true;
    this.eventGetAllCau();
  },
  eventGetAllCau: function eventGetAllCau() {
    var soiCauRequest = new TaiXiuRequest.SoiCauRequest();
    SmartFoxSDK.TaiXiuController.ZoneInstance.send(soiCauRequest.toSRequest());
  },
  drawPage2: function drawPage2() {
    var _this = this;

    var self = this;
    this.listCau1 = [];
    this.listCau2 = [];
    var subCau1 = [];
    var subCau2 = [];
    var total = 0;
    this.totalTaiValue = 0;
    this.totalXiuValue = 0;
    Promise.all(this._data.map(function (session, index) {
      total = 0;

      for (var i = 0; i < session.dices.length; i++) {
        total += session.dices[i];
      } //Cau 1


      if (subCau1.length < 4) subCau1.push(total);else {
        subCau1.push(total);
        self.listCau1.push(subCau1);
        subCau1 = [];
      } //Cau 2

      if (total <= 10) {
        self.totalXiuValue++;

        if (subCau2.length > 0) {
          if (subCau2[0] <= 10) {
            subCau2.push(total);
          } else {
            if (subCau2.length < 7) {
              self.listCau2.push(subCau2);
            } else {
              for (var _i2 = 0; _i2 < subCau2.length; _i2 = _i2 + 6) {
                self.listCau2.push(subCau2.slice(_i2, _i2 + 6));
              }
            }

            subCau2 = [];
            subCau2.push(total);
          }
        } else {
          subCau2.push(total);
        }
      } else {
        self.totalTaiValue++;

        if (subCau2.length > 0) {
          if (subCau2[0] > 10) {
            subCau2.push(total);
          } else {
            if (subCau2.length < 7) {
              self.listCau2.push(subCau2);
            } else {
              for (var _i3 = 0; _i3 < subCau2.length; _i3 = _i3 + 6) {
                self.listCau2.push(subCau2.slice(_i3, _i3 + 6));
              }
            }

            subCau2 = [];
            subCau2.push(total);
          }
        } else {
          subCau2.push(total);
        }
      }
    })).then(function (result) {
      if (subCau1.length > 0) self.listCau1.push(subCau1);

      if (subCau2.length < 7) {
        self.listCau2.push(subCau2);
      } else {
        for (var i = 0; i < subCau2.length; i = i + 6) {
          self.listCau2.push(subCau2.slice(i, i + 6));
        }
      }

      self.listviewCau1.numItems = _this.listCau1.length;
      self.listviewCau2.numItems = _this.listCau2.length;
      self.totalXiu.string = self.totalXiuValue;
      self.totalTai.string = self.totalTaiValue;
      self.listviewCau2.node.getComponent(cc.ScrollView).scrollToRight(1);
    });
  },
  setAllCau: function setAllCau(allCau) {
    mm.Loading.hide();
    this._data = allCau;
    this.drawPage1();
    this.drawPage2();
  },
  updateDataCau: function updateDataCau(dice) {
    this._data.push({
      dices: dice
    });

    this._data.shift();

    this.drawPage1();
    this.drawPage2();
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  },
  onListRenderCau1: function onListRenderCau1(item, idx) {
    var self = this;
    var cau1 = this.listCau1[idx];
    Promise.all(item.children.map(function (itemCau, index) {
      itemCau.active = false;
    })).then(function () {
      Promise.all(cau1.map(function (taiXiu, index) {
        item.children[index].active = true;

        if (taiXiu <= 10) {
          item.children[index].getComponent(cc.Sprite).spriteFrame = self.cauXiu;
        } else item.children[index].getComponent(cc.Sprite).spriteFrame = self.cauTai;
      }));
    });
  },
  onListRenderCau2: function onListRenderCau2(itemAll, idx) {
    var self = this;
    var cau2 = this.listCau2[idx];
    Promise.all(itemAll.children.map(function (itemCau, index) {
      itemCau.active = false;
    })).then(function () {
      Promise.all(cau2.map(function (taiXiu, index) {
        itemAll.children[index].active = true;
        var lbResult = itemAll.children[index].getChildByName("lbResult");
        lbResult.getComponent(cc.Label).string = taiXiu;

        if (taiXiu < 11) {
          lbResult.color = cc.Color.BLACK;
          itemAll.children[index].getComponent(cc.Sprite).spriteFrame = self.cauXiu;
        } else {
          lbResult.color = cc.Color.WHITE;
          itemAll.children[index].getComponent(cc.Sprite).spriteFrame = self.cauTai;
        }
      }));
    });
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;
    var list = item.listItem._list;
    var str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;

    if (list.selectedMode == 2) {
      //Nếu nó là chế độ đa lựa chọn
      str += '，Giá trị hiện tại：' + val;
    }
  },
  eventShowHideCau3: function eventShowHideCau3(target) {
    this.xx123Draw.active = target.isChecked;
  },
  eventShowHideCau41: function eventShowHideCau41(target) {
    this.xx1Draw.active = target.isChecked;
  },
  eventShowHideCau42: function eventShowHideCau42(target) {
    this.xx2Draw.active = target.isChecked;
  },
  eventShowHideCau43: function eventShowHideCau43(target) {
    this.xx3Draw.active = target.isChecked;
  },
  drawPage1: function drawPage1() {
    this._isDraw2 = true;
    var data = this._data;
    var endPosX = 422;
    var startPosY = -222;
    var startPosY123 = 16;
    var _i = 0;
    var spacingX = 38;
    var spacingY = 38;
    this.xx1Draw.removeAllChildren();
    this.xx2Draw.removeAllChildren();
    this.xx3Draw.removeAllChildren();
    this.xx123Draw.removeAllChildren();

    for (var i = data.length - 1; i >= 0; i--) {
      var dices = data[i].dices;
      var score = dices[0] + dices[1] + dices[2];
      var startPosXX1 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[0] - 1) * spacingY);
      var startPosXX2 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[1] - 1) * spacingY);
      var startPosXX3 = cc.v2(endPosX - _i * spacingX, startPosY + (dices[2] - 1) * spacingY);
      var startPosXX123 = cc.v2(endPosX - _i * spacingX, startPosY123 + (score - 3) * (spacingY / 3));
      var iconXX1 = cc.instantiate(this.iconXX1Template);
      iconXX1.parent = this.xx1Draw;
      iconXX1.position = startPosXX1;
      var iconXX2 = cc.instantiate(this.iconXX2Template);
      iconXX2.parent = this.xx2Draw;
      iconXX2.position = startPosXX2;
      var iconXX3 = cc.instantiate(this.iconXX3Template);
      iconXX3.parent = this.xx3Draw;
      iconXX3.position = startPosXX3;
      var iconXX123 = cc.instantiate(score >= 11 ? this.iconTaiTemplate : this.iconXiuTemplate);
      iconXX123.parent = this.xx123Draw;
      iconXX123.position = startPosXX123;

      if (_i > 0) {
        dices = data[i + 1].dices;
        score = dices[0] + dices[1] + dices[2];
        var endPosXX1 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[0] - 1) * spacingY);
        var endPosXX2 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[1] - 1) * spacingY);
        var endPosXX3 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY + (dices[2] - 1) * spacingY);
        var endPosXX123 = cc.v2(endPosX - (_i - 1) * spacingX, startPosY123 + (score - 3) * (spacingY / 3));
        var line = cc.instantiate(this.lineTemplate);
        line.parent = this.xx1Draw;
        line.width = Utils.v2Distance(startPosXX1, endPosXX1);
        line.position = startPosXX1;
        line.angle = Utils.v2Degrees(startPosXX1, endPosXX1);
        line.color = cc.Color.BLACK.fromHEX("#ed145b");
        line.zIndex = 0;
        line = cc.instantiate(this.lineTemplate);
        line.parent = this.xx2Draw;
        line.width = Utils.v2Distance(startPosXX2, endPosXX2);
        line.position = startPosXX2;
        line.angle = Utils.v2Degrees(startPosXX2, endPosXX2);
        line.color = cc.Color.BLACK.fromHEX("#598527");
        line.zIndex = 0;
        line = cc.instantiate(this.lineTemplate);
        line.parent = this.xx3Draw;
        line.width = Utils.v2Distance(startPosXX3, endPosXX3);
        line.position = startPosXX3;
        line.angle = Utils.v2Degrees(startPosXX3, endPosXX3);
        line.color = cc.Color.BLACK.fromHEX("#f06eaa");
        line.zIndex = 0;
        line = cc.instantiate(this.lineTemplate);
        line.parent = this.xx123Draw;
        line.width = Utils.v2Distance(startPosXX123, endPosXX123);
        line.position = startPosXX123;
        line.angle = Utils.v2Degrees(startPosXX123, endPosXX123);
        line.color = cc.Color.BLACK.fromHEX("#fedd99");
        line.zIndex = -1;
      }

      _i++;
    }
  },
  eventGotoPage2: function eventGotoPage2() {
    this.soiCau1.active = false;
    this.soiCau2.active = true;
    this.btnBack.active = true;
    this.btnNext.active = false;
    if (!this._isDraw2) this.drawPage1();
  },
  eventGotoPage1: function eventGotoPage1() {
    this.btnBack.active = false;
    this.btnNext.active = true;
    this.soiCau1.active = true;
    this.soiCau2.active = false;
  }
});

cc._RF.pop();
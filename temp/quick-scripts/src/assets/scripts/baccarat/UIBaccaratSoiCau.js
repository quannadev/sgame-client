"use strict";
cc._RF.push(module, '369b8hYrj1FiJNRTKiGltw+', 'UIBaccaratSoiCau');
// scripts/baccarat/UIBaccaratSoiCau.js

"use strict";

var NHA_CON = 0;
var NHA_CAI = 1;
var HOA = 2;
var CON_DOI = 3;
var CAI_DOI = 4;
cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    dishRoad: cc.Node,
    bigRoad: cc.Node,
    thongKe: cc.Node,
    scoreRoad: cc.Node,
    bigEyeRoad: cc.Node,
    smallRoad: cc.Node,
    cockRoach: cc.Node,
    allPage: cc.PageView,
    _MaxRow: 6,
    bgDishBoard: {
      type: cc.SpriteFrame,
      "default": []
    },
    bgBigRoad: {
      type: cc.SpriteFrame,
      "default": []
    },
    bgScoreRoad: {
      type: cc.SpriteFrame,
      "default": []
    },
    bgCockRoad: {
      type: cc.SpriteFrame,
      "default": []
    },
    listCauNew: [],
    _lastType: 0,
    listColor: {
      type: cc.Color,
      "default": []
    },
    _isFirst: true
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  },
  onEnable: function onEnable() {
    mm.Loading.hide();
    this.MaxRow = 6;
    this.setDataDishRoad();
    this.reformatDataCau(this._data);
    this.setDatBigRoad();
    this.setDataStatistical();
    this._isFirst = true;
    this.allPage.node.on('scroll-ended', function () {
      this.setDataForPage2();
    }, this);
  },
  setDataDishRoad: function setDataDishRoad() {
    var self = this;
    var total = this._data.length;
    var totalCol = Math.ceil(total / this.MaxRow);
    var startPos = total - 72;
    if (startPos < 0) startPos = 0;
    Promise.all(this.dishRoad.children.map(function (nodeDish, indexDish) {
      if (indexDish < totalCol) {
        if (!nodeDish.active) nodeDish.active = true;
        Promise.all(nodeDish.children.map(function (nodeCau, index) {
          if (!nodeCau.active) nodeCau.active = true;
          var pos = startPos + indexDish * self.MaxRow + index;

          if (pos < total) {
            var type = self._data[pos].type;
            self.setCauInfo(type, nodeCau);
          } else {
            nodeCau.active = false;
          }
        }));
      } else {
        nodeDish.active = false;
      }
    }));
  },
  setDatBigRoad: function setDatBigRoad() {
    var self = this;
    var totalBig = this.listCauNew.length;
    var startPosBig = totalBig - 29;
    if (startPosBig < 0) startPosBig = 0;
    Promise.all(this.bigRoad.children.map(function (nodeBig, indexBig) {
      if (indexBig < totalBig) {
        if (!nodeBig.active) nodeBig.active = true;
        var colCauData = self.listCauNew[indexBig + startPosBig];
        var totalData = colCauData.length;
        Promise.all(nodeBig.children.map(function (nodeCau, index) {
          if (!nodeCau.active) nodeCau.active = true;

          if (index < totalData) {
            self.setCauBigInfo(colCauData[index].type, nodeCau);
          } else {
            nodeCau.active = false;
          }
        }));
      } else {
        nodeBig.active = false;
      }
    }));
  },
  setDataStatistical: function setDataStatistical() {
    var caiWin = 0;
    var conWin = 0;
    var hoa = 0;
    var caiDoi = 0;
    var conDoi = 0;
    var total = this._data.length;
    var self = this;
    Promise.all(this._data.map(function (typeCau, index) {
      Promise.all(typeCau.type.map(function (type, index) {
        if (type == NHA_CAI) caiWin++;
        if (type == NHA_CON) conWin++;
        if (type == HOA) hoa++;
        if (type == CAI_DOI) caiDoi++;
        if (type == CON_DOI) conDoi++;
      }));
    })).then(function (result) {
      self.thongKe.getChildByName("lb_cai_thang").getComponent(cc.Label).string = caiWin;
      self.thongKe.getChildByName("lb_con_thang").getComponent(cc.Label).string = conWin;
      self.thongKe.getChildByName("lb_hoa").getComponent(cc.Label).string = hoa;
      self.thongKe.getChildByName("lb_cai_doi").getComponent(cc.Label).string = caiDoi;
      self.thongKe.getChildByName("lb_con_doi").getComponent(cc.Label).string = conDoi;
      self.thongKe.getChildByName("lb_total").getComponent(cc.Label).string = total;
      self.thongKe.getChildByName("lb_cai_thang_percent").getComponent(cc.Label).string = Math.round(caiWin / total * 100) + "%";
      self.thongKe.getChildByName("lb_con_thang_percent").getComponent(cc.Label).string = Math.round(conWin / total * 100) + "%";
      self.thongKe.getChildByName("lb_hoa_percent").getComponent(cc.Label).string = Math.round(hoa / total * 100) + "%";
      self.thongKe.getChildByName("lb_cai_doi_percent").getComponent(cc.Label).string = Math.round(caiDoi / total * 100) + "%";
      self.thongKe.getChildByName("lb_con_doi_percent").getComponent(cc.Label).string = Math.round(conDoi / total * 100) + "%";
    });
  },
  setDataSmallRoad: function setDataSmallRoad() {
    var self = this;
    var totalBig = this.listCauNew.length;
    var startPosBig = totalBig - 13;
    if (startPosBig < 0) startPosBig = 0;
    Promise.all(this.smallRoad.children.map(function (nodeBig, indexBig) {
      if (indexBig < totalBig) {
        if (!nodeBig.active) nodeBig.active = true;
        var colCauData = self.listCauNew[indexBig + startPosBig];
        var totalData = colCauData.length;
        Promise.all(nodeBig.children.map(function (nodeCau, index) {
          nodeCau.active = false;

          if (index < totalData) {
            var type = self.getTypeCau(colCauData[index].type);

            if (type != HOA) {
              self.setCauSmallInfo(colCauData[index].type, nodeCau);
              nodeCau.active = true;
            }
          }
        }));
      } else {
        nodeBig.active = false;
      }
    }));
  },
  setBigEyeRoad: function setBigEyeRoad() {
    var self = this;
    var totalBig = this.listCauNew.length;
    var startPosBig = totalBig - 13;
    if (startPosBig < 0) startPosBig = 0;
    Promise.all(this.bigEyeRoad.children.map(function (nodeBig, indexBig) {
      if (indexBig < totalBig) {
        if (!nodeBig.active) nodeBig.active = true;
        var colCauData = self.listCauNew[indexBig + startPosBig];
        var totalData = colCauData.length;
        Promise.all(nodeBig.children.map(function (nodeCau, index) {
          nodeCau.active = false;

          if (index < totalData) {
            var type = self.getTypeCau(colCauData[index].type);

            if (type != HOA) {
              self.setCauBigEye(colCauData[index].type, nodeCau);
              nodeCau.active = true;
            }
          }
        }));
      } else {
        nodeBig.active = false;
      }
    }));
  },
  setCockRoad: function setCockRoad() {
    var self = this;
    var totalBig = this.listCauNew.length;
    var startPosBig = totalBig - 13;
    if (startPosBig < 0) startPosBig = 0;
    Promise.all(this.cockRoach.children.map(function (nodeBig, indexBig) {
      if (indexBig < totalBig) {
        if (!nodeBig.active) nodeBig.active = true;
        var colCauData = self.listCauNew[indexBig + startPosBig];
        var totalData = colCauData.length;
        Promise.all(nodeBig.children.map(function (nodeCau, index) {
          nodeCau.active = false;

          if (index < totalData) {
            var type = self.getTypeCau(colCauData[index].type);

            if (type != HOA) {
              self.setCauCockInfo(colCauData[index].type, nodeCau);
              nodeCau.active = true;
            }
          }
        }));
      } else {
        nodeBig.active = false;
      }
    }));
  },
  setScoreRoad: function setScoreRoad() {
    var self = this;
    var totalBig = this.listCauNew.length;
    var startPosBig = totalBig - 13;
    if (startPosBig < 0) startPosBig = 0;
    Promise.all(this.scoreRoad.children.map(function (nodeBig, indexBig) {
      if (indexBig < totalBig) {
        if (!nodeBig.active) nodeBig.active = true;
        var colCauData = self.listCauNew[indexBig + startPosBig];
        var totalData = colCauData.length;
        Promise.all(nodeBig.children.map(function (nodeCau, index) {
          nodeCau.active = false;

          if (index < totalData) {
            self.setScoreInfo(colCauData[index], nodeCau);
            nodeCau.active = true;
          }
        }));
      } else {
        nodeBig.active = false;
      }
    }));
  },
  eventBackPage: function eventBackPage() {
    mm.audio.playButton();
    this.setDataForPage2();
    this.allPage.scrollToPage((this.allPage.getCurrentPageIndex() + 1) % 2);
  },
  eventNextPage: function eventNextPage() {
    mm.audio.playButton();
    this.setDataForPage2();
    this.allPage.scrollToPage((this.allPage.getCurrentPageIndex() + 1) % 2);
  },
  setDataForPage2: function setDataForPage2() {
    if (this._isFirst) {
      this.setDataSmallRoad();
      this.setCockRoad();
      this.setBigEyeRoad();
      this.setScoreRoad();
    }

    this._isFirst = false;
  },
  reformatDataCau: function reformatDataCau(listCau) {
    this.listCauNew = [];
    var rowCau = [];
    var lastType = -1;

    for (var i = 0; i < listCau.length; i++) {
      var typeCau = listCau[i];
      var type = this.getTypeCau(typeCau.type);

      if (lastType < 0) {
        if (type != HOA) {
          rowCau.push(typeCau);
          lastType = type;
        }
      } else {
        if (type == HOA) {
          rowCau.push(typeCau);
        } else {
          if (type == lastType) {
            rowCau.push(typeCau);
          } else {
            if (rowCau.length <= this.MaxRow) {
              this.listCauNew.push(rowCau);
            } else {
              var maxCat = Math.ceil(rowCau.length / this.MaxRow);

              for (var j = 0; j < maxCat; j++) {
                this.listCauNew.push(rowCau.slice(j, j + this.MaxRow));
              }
            }

            rowCau = [];
            rowCau.push(typeCau);
            lastType = type;
          }
        }
      }
    }

    if (rowCau.length <= this.MaxRow) {
      this.listCauNew.push(rowCau);
    } else {
      var _maxCat = Math.ceil(rowCau.length / this.MaxRow);

      for (var _j = 0; _j < _maxCat; _j++) {
        this.listCauNew.push(rowCau.slice(_j, _j + this.MaxRow));
      }
    }
  },
  getTypeCau: function getTypeCau(typeCau) {
    if (typeCau.length < 2) return typeCau[0];

    for (var i = 0; i < typeCau.length; i++) {
      if (typeCau[i] < 3) return typeCau[i];
    }

    return HOA;
  },
  setCauInfo: function setCauInfo(type, nodeCau) {
    var cai = nodeCau.getChildByName("cai");
    var con = nodeCau.getChildByName("con");
    cai.active = false;
    con.active = false;

    for (var i = 0; i < type.length; i++) {
      if (type[i] > 2) {
        if (type == 3) {
          con.active = true;
        } else {
          cai.active = true;
        }
      } else {
        nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgDishBoard[type[i]];
      }
    }
  },
  setCauSmallInfo: function setCauSmallInfo(type, nodeCau) {
    for (var i = 0; i < type.length; i++) {
      if (type[i] < 2) {
        nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgDishBoard[type[i]];
      }
    }
  },
  setCauBigInfo: function setCauBigInfo(type, nodeCau) {
    var cai = nodeCau.getChildByName("cai");
    var con = nodeCau.getChildByName("con");
    cai.active = false;
    con.active = false;

    for (var i = 0; i < type.length; i++) {
      if (type[i] > 2) {
        if (type == 3) {
          con.active = true;
        } else {
          cai.active = true;
        }
      } else {
        if (type[i] == 2) {
          type[i] = this._lastType + 2;
        } else {
          if (type[i] < 2) this._lastType == type[i];
        }

        nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgBigRoad[type[i]];
      }
    }
  },
  setCauBigEye: function setCauBigEye(type, nodeCau) {
    for (var i = 0; i < type.length; i++) {
      if (type[i] < 2) {
        nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgBigRoad[type[i]];
      }
    }
  },
  setCauCockInfo: function setCauCockInfo(type, nodeCau) {
    for (var i = 0; i < type.length; i++) {
      if (type[i] < 2) {
        nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgCockRoad[type[i]];
      }
    }
  },
  setScoreInfo: function setScoreInfo(cauInfo, nodeCau) {
    var type = cauInfo.type;

    for (var i = 0; i < type.length; i++) {
      if (type[i] < 3) {
        nodeCau.getComponent(cc.Sprite).spriteFrame = this.bgScoreRoad[type[i]];
        nodeCau.getChildByName("lb_win").color = this.listColor[type[i]];
        nodeCau.getChildByName("lb_win").getComponent(cc.Label).string = cauInfo.con;
        nodeCau.getChildByName("lb_lose").getComponent(cc.Label).string = cauInfo.cai;
      }
    }
  }
});

cc._RF.pop();
"use strict";
cc._RF.push(module, '45cb2a+6MRD9q9mtU7iInxH', 'UIXocDiaSoiCau');
// scripts/xocdia/UIXocDiaSoiCau.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview,
    MaxRow: 5
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  },
  onEnable: function onEnable() {
    mm.Loading.hide();

    this._reformatDataCau();

    this.listview.numItems = this.listCau.length;
    this.listview.node.getComponent(cc.ScrollView).scrollToRight(1);
  },
  _reformatDataCau: function _reformatDataCau() {
    this.listCau = [];
    var cauCol = [];
    var isChan = true;
    isChan = this._data[0] % 2 == 0;
    cauCol.push(this._data[0]);

    for (var i = 1; i < this._data.length; i++) {
      if (isChan) {
        isChan = this._data[i] % 2 == 0;

        if (isChan) {
          cauCol.push(this._data[i]);
        } else {
          if (cauCol.length <= this.MaxRow) {
            this.listCau.push(cauCol);
          } else {
            var maxCat = Math.ceil(cauCol.length / this.MaxRow);

            for (var j = 0; j < maxCat; j++) {
              this.listCau.push(cauCol.slice(j * this.MaxRow, (j + 1) * this.MaxRow));
            }

            if (cauCol.length > maxCat * this.MaxRow) {
              this.listCau.push(cauCol.slice(maxCat * this.MaxRow, cauCol.length));
            }
          }

          cauCol = [];
          cauCol.push(this._data[i]);
        }
      } else {
        isChan = this._data[i] % 2 == 0;

        if (!isChan) {
          cauCol.push(this._data[i]);
        } else {
          if (cauCol.length <= this.MaxRow) {
            this.listCau.push(cauCol);
          } else {
            var _maxCat = Math.ceil(cauCol.length / this.MaxRow);

            for (var _j = 0; _j < _maxCat; _j++) {
              this.listCau.push(cauCol.slice(_j * this.MaxRow, (_j + 1) * this.MaxRow));
            }

            if (cauCol.length > _maxCat * this.MaxRow) {
              this.listCau.push(cauCol.slice(_maxCat * this.MaxRow, cauCol.length));
            }
          }

          cauCol = [];
          cauCol.push(this._data[i]);
        }
      }
    }

    if (cauCol.length <= this.MaxRow) {
      this.listCau.push(cauCol);
    } else {
      var _maxCat2 = Math.ceil(cauCol.length / this.MaxRow);

      for (var _j2 = 0; _j2 < _maxCat2; _j2++) {
        this.listCau.push(cauCol.slice(_j2 * this.MaxRow, (_j2 + 1) * this.MaxRow));
      }

      if (cauCol.length > _maxCat2 * this.MaxRow) {
        this.listCau.push(cauCol.slice(_maxCat2 * this.MaxRow, cauCol.length));
      }
    }
  },
  onListRender: function onListRender(item, idx) {
    var cau = this.listCau[idx];
    item.getComponent(item.name).init(cau);
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;
    var list = item.listItem._list;
    var str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;

    if (list.selectedMode == 2) {
      //Nếu nó là chế độ đa lựa chọn
      str += '，Giá trị hiện tại：' + val;
    }

    console.log(str);
  }
});

cc._RF.pop();
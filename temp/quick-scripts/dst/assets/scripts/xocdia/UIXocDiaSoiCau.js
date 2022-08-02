
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/xocdia/UIXocDiaSoiCau.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xceG9jZGlhXFxVSVhvY0RpYVNvaUNhdS5qcyJdLCJuYW1lcyI6WyJMaXN0dmlldyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0dmlldyIsIk1heFJvdyIsImV2ZW50Q2xvc2UiLCJtbSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsImJhY2siLCJvbkVuYWJsZSIsIkxvYWRpbmciLCJoaWRlIiwiX3JlZm9ybWF0RGF0YUNhdSIsIm51bUl0ZW1zIiwibGlzdENhdSIsImxlbmd0aCIsIm5vZGUiLCJnZXRDb21wb25lbnQiLCJTY3JvbGxWaWV3Iiwic2Nyb2xsVG9SaWdodCIsImNhdUNvbCIsImlzQ2hhbiIsIl9kYXRhIiwicHVzaCIsImkiLCJtYXhDYXQiLCJNYXRoIiwiY2VpbCIsImoiLCJzbGljZSIsIm9uTGlzdFJlbmRlciIsIml0ZW0iLCJpZHgiLCJjYXUiLCJuYW1lIiwiaW5pdCIsIm9uTGlzdFNlbGVjdGVkIiwic2VsZWN0ZWRJZCIsImxhc3RTZWxlY3RlZElkIiwidmFsIiwibGlzdCIsImxpc3RJdGVtIiwiX2xpc3QiLCJzdHIiLCJzZWxlY3RlZE1vZGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTixRQUROO0FBRVJPLElBQUFBLE1BQU0sRUFBUTtBQUZOLEdBSFA7QUFPTEMsRUFBQUEsVUFQSyx3QkFPUTtBQUNUQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQVZJO0FBV0xDLEVBQUFBLFFBWEssc0JBV007QUFD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QjtBQUNIOztBQUNELFVBQUlpQixNQUFNLENBQUNMLE1BQVAsR0FBY1UsUUFBTSxHQUFDLEtBQUt0QixNQUE5QixFQUFxQztBQUNqQyxhQUFLVyxPQUFMLENBQWFTLElBQWIsQ0FBa0JILE1BQU0sQ0FBQ1MsS0FBUCxDQUFhSixRQUFNLEdBQUMsS0FBS3RCLE1BQXpCLEVBQWlDaUIsTUFBTSxDQUFDTCxNQUF4QyxDQUFsQjtBQUNIO0FBQ0o7QUFDSixHQTVFSTtBQTZFTGUsRUFBQUEsWUE3RUssd0JBNkVRQyxJQTdFUixFQTZFY0MsR0E3RWQsRUE2RW1CO0FBQ3BCLFFBQUlDLEdBQUcsR0FBRyxLQUFLbkIsT0FBTCxDQUFha0IsR0FBYixDQUFWO0FBQ0FELElBQUFBLElBQUksQ0FBQ2QsWUFBTCxDQUFrQmMsSUFBSSxDQUFDRyxJQUF2QixFQUE2QkMsSUFBN0IsQ0FBa0NGLEdBQWxDO0FBQ0gsR0FoRkk7QUFpRkxHLEVBQUFBLGNBakZLLDBCQWlGVUwsSUFqRlYsRUFpRmdCTSxVQWpGaEIsRUFpRjRCQyxjQWpGNUIsRUFpRjRDQyxHQWpGNUMsRUFpRmlEO0FBQ2xELFFBQUksQ0FBQ1IsSUFBTCxFQUNJO0FBQ0osUUFBSVMsSUFBSSxHQUFHVCxJQUFJLENBQUNVLFFBQUwsQ0FBY0MsS0FBekI7QUFDQSxRQUFJQyxHQUFHLEdBQUcscUNBQXFDSCxJQUFJLENBQUN4QixJQUFMLENBQVVrQixJQUEvQyxHQUFzRCx3QkFBdEQsR0FBaUZHLFVBQWpGLEdBQThGLHlCQUE5RixHQUEwSEMsY0FBcEk7O0FBQ0EsUUFBSUUsSUFBSSxDQUFDSSxZQUFMLElBQXFCLENBQXpCLEVBQTRCO0FBQUU7QUFDMUJELE1BQUFBLEdBQUcsSUFBSSx1QkFBdUJKLEdBQTlCO0FBQ0g7O0FBQ0RNLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0g7QUExRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdHZpZXcgPSByZXF1aXJlKCdMaXN0dmlldycpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxyXG4gICAgICAgIE1heFJvdyAgICAgIDogNSxcclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlKCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICB0aGlzLl9yZWZvcm1hdERhdGFDYXUoKTtcclxuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0Q2F1Lmxlbmd0aDtcclxuICAgICAgICB0aGlzLmxpc3R2aWV3Lm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNjcm9sbFZpZXcpLnNjcm9sbFRvUmlnaHQoMSk7XHJcblxyXG4gICAgfSxcclxuICAgIF9yZWZvcm1hdERhdGFDYXUoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0Q2F1ID0gW107XHJcbiAgICAgICAgbGV0IGNhdUNvbCA9IFtdO1xyXG4gICAgICAgIGxldCBpc0NoYW4gPSB0cnVlO1xyXG4gICAgICAgIGlzQ2hhbiA9IHRoaXMuX2RhdGFbMF0gJTIgPT0wO1xyXG4gICAgICAgIGNhdUNvbC5wdXNoKHRoaXMuX2RhdGFbMF0pO1xyXG4gICAgICAgIGZvciAobGV0IGk9MTsgaTwgdGhpcy5fZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmIChpc0NoYW4pe1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuID0gdGhpcy5fZGF0YVtpXSAlMiA9PTA7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNDaGFuKXtcclxuICAgICAgICAgICAgICAgICAgICBjYXVDb2wucHVzaCh0aGlzLl9kYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2F1Q29sLmxlbmd0aCA8PSB0aGlzLk1heFJvdyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENhdS5wdXNoKGNhdUNvbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF4Q2F0ID0gTWF0aC5jZWlsKGNhdUNvbC5sZW5ndGggLyB0aGlzLk1heFJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajwgbWF4Q2F0OyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2F1LnB1c2goY2F1Q29sLnNsaWNlKGoqdGhpcy5NYXhSb3csIChqKzEpKnRoaXMuTWF4Um93KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNhdUNvbC5sZW5ndGg+bWF4Q2F0KnRoaXMuTWF4Um93KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENhdS5wdXNoKGNhdUNvbC5zbGljZShtYXhDYXQqdGhpcy5NYXhSb3csIGNhdUNvbC5sZW5ndGgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjYXVDb2wgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBjYXVDb2wucHVzaCh0aGlzLl9kYXRhW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaXNDaGFuID0gdGhpcy5fZGF0YVtpXSAlMiA9PSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFpc0NoYW4pe1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdUNvbC5wdXNoKHRoaXMuX2RhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYXVDb2wubGVuZ3RoIDw9IHRoaXMuTWF4Um93KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2F1LnB1c2goY2F1Q29sKTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXhDYXQgPSBNYXRoLmNlaWwoY2F1Q29sLmxlbmd0aCAvIHRoaXMuTWF4Um93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPCBtYXhDYXQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXUucHVzaChjYXVDb2wuc2xpY2Uoaip0aGlzLk1heFJvdywgKGorMSkqdGhpcy5NYXhSb3cpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2F1Q29sLmxlbmd0aD5tYXhDYXQqdGhpcy5NYXhSb3cpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2F1LnB1c2goY2F1Q29sLnNsaWNlKG1heENhdCp0aGlzLk1heFJvdywgY2F1Q29sLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNhdUNvbCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdUNvbC5wdXNoKHRoaXMuX2RhdGFbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjYXVDb2wubGVuZ3RoIDw9IHRoaXMuTWF4Um93KXtcclxuICAgICAgICAgICAgdGhpcy5saXN0Q2F1LnB1c2goY2F1Q29sKTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBtYXhDYXQgPSBNYXRoLmNlaWwoY2F1Q29sLmxlbmd0aCAvIHRoaXMuTWF4Um93KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPCBtYXhDYXQ7IGorKyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RDYXUucHVzaChjYXVDb2wuc2xpY2Uoaip0aGlzLk1heFJvdywgKGorMSkqdGhpcy5NYXhSb3cpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2F1Q29sLmxlbmd0aD5tYXhDYXQqdGhpcy5NYXhSb3cpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0Q2F1LnB1c2goY2F1Q29sLnNsaWNlKG1heENhdCp0aGlzLk1heFJvdywgY2F1Q29sLmxlbmd0aCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgY2F1ID0gdGhpcy5saXN0Q2F1W2lkeF07XHJcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoaXRlbS5uYW1lKS5pbml0KGNhdSk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0U2VsZWN0ZWQoaXRlbSwgc2VsZWN0ZWRJZCwgbGFzdFNlbGVjdGVkSWQsIHZhbCkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsaXN0ID0gaXRlbS5saXN0SXRlbS5fbGlzdDtcclxuICAgICAgICBsZXQgc3RyID0gJ0Rhbmggc8OhY2ggaG/huqF0IMSR4buZbmcgaGnhu4duIHThuqFpIGzDoDonICsgbGlzdC5ub2RlLm5hbWUgKyAn77yMTOG7sWEgY2jhu41uIGhp4buHbiB04bqhaSBsw6DvvJonICsgc2VsZWN0ZWRJZCArICfvvIxM4buxYSBjaOG7jW4gY3Xhu5FpIGPDuW5nIGzDoO+8micgKyBsYXN0U2VsZWN0ZWRJZDtcclxuICAgICAgICBpZiAobGlzdC5zZWxlY3RlZE1vZGUgPT0gMikgeyAvL07hur91IG7DsyBsw6AgY2jhur8gxJHhu5kgxJFhIGzhu7FhIGNo4buNblxyXG4gICAgICAgICAgICBzdHIgKz0gJ++8jEdpw6EgdHLhu4sgaGnhu4duIHThuqFp77yaJyArIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
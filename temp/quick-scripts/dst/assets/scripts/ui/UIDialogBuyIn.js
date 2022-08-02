
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/UIDialogBuyIn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b7796eLjnRGcL/r3+Y0QbkD', 'UIDialogBuyIn');
// scripts/ui/UIDialogBuyIn.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    _distance: 100,
    _current: 0,
    _max: 0,
    _min: 0,
    _sizeDesk: 6,
    _remainChip: 0,
    lb_min: cc.Label,
    lb_max: cc.Label,
    lb_current: cc.Label,
    lb_remain: cc.Label,
    SliderRaise: cc.Slider,
    cbYes: null
  },
  onEnable: function onEnable() {
    this.cbYes = this._data.cbYes;
    this.initSlider(this._data.distance, this._data.remainChip, this._data.currentChip, this._data.min, this._data.max);

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  initSlider: function initSlider(distance, remainChip, currentChip, min, max) {
    this._max = max;
    this._min = min;
    this._distance = distance;
    this._current = currentChip;
    this._remainChip = remainChip;
    this.lb_remain.string = Utils.formatCurrency(remainChip);
    this.updateSlider();
  },
  updateSlider: function updateSlider() {
    var currentProcess = this._current / this._max;
    this.SliderRaise.progress = currentProcess;
    this.lb_current.string = Utils.addDotToNumber(this._current);
    this.lb_min.string = Utils.formatCurrency(this._min);
    this.lb_max.string = Utils.formatCurrency(this._max);
  },
  eventPlus: function eventPlus() {
    mm.audio.playButton();
    this._current += this._distance;

    if (this._current > this._max) {
      this._current = this._max;
    }

    this.updateSlider();
  },
  eventSub: function eventSub() {
    mm.audio.playButton();
    this._current -= this._distance;

    if (this._current < this._min) {
      this._current = this._min;
    }

    this.updateSlider();
  },
  onSliderRaise: function onSliderRaise(slider) {
    var process = slider.progress;
    this._current = Math.floor(parseFloat(process).toFixed(1) * this._max);

    if (this._current > this._remainChip) {
      this._current = this._remainChip;
    }

    if (this._current < this._min) {
      this._current = this._min;
    }

    this.lb_current.string = Utils.addDotToNumber(this._current);
  },
  onToggleGroup: function onToggleGroup(event, sizeDesk) {
    mm.audio.playButton();
    this._sizeDesk = sizeDesk;
  },
  eventConfirm: function eventConfirm() {
    mm.audio.playButton();

    if (this.cbYes) {
      this.cbYes.call(this);
    }
  },
  getBuyIn: function getBuyIn() {
    return this._current;
  },
  getMinBet: function getMinBet() {
    return this._distance;
  },
  eventCancel: function eventCancel() {
    mm.audio.playButton();
    this.back();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXFVJRGlhbG9nQnV5SW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiX2Rpc3RhbmNlIiwiX2N1cnJlbnQiLCJfbWF4IiwiX21pbiIsIl9zaXplRGVzayIsIl9yZW1haW5DaGlwIiwibGJfbWluIiwiTGFiZWwiLCJsYl9tYXgiLCJsYl9jdXJyZW50IiwibGJfcmVtYWluIiwiU2xpZGVyUmFpc2UiLCJTbGlkZXIiLCJjYlllcyIsIm9uRW5hYmxlIiwiX2RhdGEiLCJpbml0U2xpZGVyIiwiZGlzdGFuY2UiLCJyZW1haW5DaGlwIiwiY3VycmVudENoaXAiLCJtaW4iLCJtYXgiLCJub2RlIiwiekluZGV4IiwibGFzdFpJbmRleCIsInN0cmluZyIsIlV0aWxzIiwiZm9ybWF0Q3VycmVuY3kiLCJ1cGRhdGVTbGlkZXIiLCJjdXJyZW50UHJvY2VzcyIsInByb2dyZXNzIiwiYWRkRG90VG9OdW1iZXIiLCJldmVudFBsdXMiLCJtbSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsImV2ZW50U3ViIiwib25TbGlkZXJSYWlzZSIsInNsaWRlciIsInByb2Nlc3MiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIm9uVG9nZ2xlR3JvdXAiLCJldmVudCIsInNpemVEZXNrIiwiZXZlbnRDb25maXJtIiwiY2FsbCIsImdldEJ1eUluIiwiZ2V0TWluQmV0IiwiZXZlbnRDYW5jZWwiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRSxHQURIO0FBRVJDLElBQUFBLFFBQVEsRUFBRSxDQUZGO0FBR1JDLElBQUFBLElBQUksRUFBRSxDQUhFO0FBSVJDLElBQUFBLElBQUksRUFB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VGxCLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS2lCLElBQUw7QUFDSDtBQXRGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBfZGlzdGFuY2U6IDEwMCxcclxuICAgICAgICBfY3VycmVudDogMCxcclxuICAgICAgICBfbWF4OiAwLFxyXG4gICAgICAgIF9taW46IDAsXHJcbiAgICAgICAgX3NpemVEZXNrOiA2LFxyXG4gICAgICAgIF9yZW1haW5DaGlwOiAwLFxyXG4gICAgICAgIGxiX21pbjogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJfbWF4OiBjYy5MYWJlbCxcclxuICAgICAgICBsYl9jdXJyZW50OiBjYy5MYWJlbCxcclxuICAgICAgICBsYl9yZW1haW46IGNjLkxhYmVsLFxyXG4gICAgICAgIFNsaWRlclJhaXNlOiBjYy5TbGlkZXIsXHJcbiAgICAgICAgY2JZZXM6IG51bGxcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMuY2JZZXMgPSB0aGlzLl9kYXRhLmNiWWVzO1xyXG4gICAgICAgIHRoaXMuaW5pdFNsaWRlcih0aGlzLl9kYXRhLmRpc3RhbmNlLCB0aGlzLl9kYXRhLnJlbWFpbkNoaXAsIHRoaXMuX2RhdGEuY3VycmVudENoaXAsIHRoaXMuX2RhdGEubWluLCB0aGlzLl9kYXRhLm1heCk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBjYy5sYXN0WkluZGV4KzE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluaXRTbGlkZXIoZGlzdGFuY2UsIHJlbWFpbkNoaXAsIGN1cnJlbnRDaGlwLCBtaW4sICBtYXgpe1xyXG4gICAgICAgIHRoaXMuX21heCA9IG1heDtcclxuICAgICAgICB0aGlzLl9taW4gPSBtaW47XHJcbiAgICAgICAgdGhpcy5fZGlzdGFuY2UgPSBkaXN0YW5jZTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50ID0gY3VycmVudENoaXA7XHJcbiAgICAgICAgdGhpcy5fcmVtYWluQ2hpcCA9IHJlbWFpbkNoaXA7XHJcbiAgICAgICAgdGhpcy5sYl9yZW1haW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0Q3VycmVuY3kocmVtYWluQ2hpcCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoKTtcclxuICAgIH0sXHJcbiAgICB1cGRhdGVTbGlkZXIoKXtcclxuICAgICAgICBsZXQgY3VycmVudFByb2Nlc3MgPSB0aGlzLl9jdXJyZW50IC8gdGhpcy5fbWF4O1xyXG4gICAgICAgIHRoaXMuU2xpZGVyUmFpc2UucHJvZ3Jlc3MgPSBjdXJyZW50UHJvY2VzcztcclxuICAgICAgICB0aGlzLmxiX2N1cnJlbnQuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fY3VycmVudCk7XHJcbiAgICAgICAgdGhpcy5sYl9taW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0Q3VycmVuY3kodGhpcy5fbWluKTtcclxuICAgICAgICB0aGlzLmxiX21heC5zdHJpbmcgPSBVdGlscy5mb3JtYXRDdXJyZW5jeSh0aGlzLl9tYXgpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50UGx1cygpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLl9jdXJyZW50ICs9IHRoaXMuX2Rpc3RhbmNlO1xyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJlbnQgPiB0aGlzLl9tYXgpe1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fbWF4O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZVNsaWRlcigpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50U3ViKCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgLT0gdGhpcy5fZGlzdGFuY2U7XHJcbiAgICAgICAgaWYodGhpcy5fY3VycmVudCA8IHRoaXMuX21pbil7XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSB0aGlzLl9taW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKCk7XHJcbiAgICB9LFxyXG4gICAgb25TbGlkZXJSYWlzZShzbGlkZXIpe1xyXG4gICAgICAgIGxldCBwcm9jZXNzID0gc2xpZGVyLnByb2dyZXNzO1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnQgPSBNYXRoLmZsb29yKHBhcnNlRmxvYXQocHJvY2VzcykudG9GaXhlZCgxKSAgKiB0aGlzLl9tYXgpO1xyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJlbnQgPiB0aGlzLl9yZW1haW5DaGlwKXtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IHRoaXMuX3JlbWFpbkNoaXA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuX2N1cnJlbnQgPCB0aGlzLl9taW4pe1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fbWluO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxiX2N1cnJlbnQuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fY3VycmVudCk7XHJcbiAgICB9LFxyXG4gICAgb25Ub2dnbGVHcm91cChldmVudCwgc2l6ZURlc2spe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLl9zaXplRGVzayA9IHNpemVEZXNrO1xyXG4gICAgfSxcclxuICAgIGV2ZW50Q29uZmlybSgpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBpZih0aGlzLmNiWWVzKXtcclxuICAgICAgICAgICAgdGhpcy5jYlllcy5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXRCdXlJbigpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50O1xyXG4gICAgfSxcclxuICAgIGdldE1pbkJldCgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXN0YW5jZTtcclxuICAgIH0sXHJcbiAgICBldmVudENhbmNlbCgpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
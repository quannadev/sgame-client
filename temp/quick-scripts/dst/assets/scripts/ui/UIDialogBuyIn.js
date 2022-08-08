
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1VJRGlhbG9nQnV5SW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiX2Rpc3RhbmNlIiwiX2N1cnJlbnQiLCJfbWF4IiwiX21pbiIsIl9zaXplRGVzayIsIl9yZW1haW5DaGlwIiwibGJfbWluIiwiTGFiZWwiLCJsYl9tYXgiLCJsYl9jdXJyZW50IiwibGJfcmVtYWluIiwiU2xpZGVyUmFpc2UiLCJTbGlkZXIiLCJjYlllcyIsIm9uRW5hYmxlIiwiX2RhdGEiLCJpbml0U2xpZGVyIiwiZGlzdGFuY2UiLCJyZW1haW5DaGlwIiwiY3VycmVudENoaXAiLCJtaW4iLCJtYXgiLCJub2RlIiwiekluZGV4IiwibGFzdFpJbmRleCIsInN0cmluZyIsIlV0aWxzIiwiZm9ybWF0Q3VycmVuY3kiLCJ1cGRhdGVTbGlkZXIiLCJjdXJyZW50UHJvY2VzcyIsInByb2dyZXNzIiwiYWRkRG90VG9OdW1iZXIiLCJldmVudFBsdXMiLCJtbSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsImV2ZW50U3ViIiwib25TbGlkZXJSYWlzZSIsInNsaWRlciIsInByb2Nlc3MiLCJNYXRoIiwiZmxvb3IiLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsIm9uVG9nZ2xlR3JvdXAiLCJldmVudCIsInNpemVEZXNrIiwiZXZlbnRDb25maXJtIiwiY2FsbCIsImdldEJ1eUluIiwiZ2V0TWluQmV0IiwiZXZlbnRDYW5jZWwiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFNBQVMsRUFBRSxHQURIO0FBRVJDLElBQUFBLFFBQVEsRUFBRSxDQUZGO0FBR1JDLElBQUFBLElBQUksRUFBRSxDQUhFO0FBSVJDLElBQUFBLElBQUksRUFBRSxD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LElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS2lCLElBQUw7QUFDSDtBQXRGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgX2Rpc3RhbmNlOiAxMDAsXG4gICAgICAgIF9jdXJyZW50OiAwLFxuICAgICAgICBfbWF4OiAwLFxuICAgICAgICBfbWluOiAwLFxuICAgICAgICBfc2l6ZURlc2s6IDYsXG4gICAgICAgIF9yZW1haW5DaGlwOiAwLFxuICAgICAgICBsYl9taW46IGNjLkxhYmVsLFxuICAgICAgICBsYl9tYXg6IGNjLkxhYmVsLFxuICAgICAgICBsYl9jdXJyZW50OiBjYy5MYWJlbCxcbiAgICAgICAgbGJfcmVtYWluOiBjYy5MYWJlbCxcbiAgICAgICAgU2xpZGVyUmFpc2U6IGNjLlNsaWRlcixcbiAgICAgICAgY2JZZXM6IG51bGxcbiAgICB9LFxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIHRoaXMuY2JZZXMgPSB0aGlzLl9kYXRhLmNiWWVzO1xuICAgICAgICB0aGlzLmluaXRTbGlkZXIodGhpcy5fZGF0YS5kaXN0YW5jZSwgdGhpcy5fZGF0YS5yZW1haW5DaGlwLCB0aGlzLl9kYXRhLmN1cnJlbnRDaGlwLCB0aGlzLl9kYXRhLm1pbiwgdGhpcy5fZGF0YS5tYXgpO1xuICAgICAgICBpZiAodGhpcy5ub2RlLnpJbmRleCA8PSBjYy5sYXN0WkluZGV4KXtcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBjYy5sYXN0WkluZGV4KzE7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGluaXRTbGlkZXIoZGlzdGFuY2UsIHJlbWFpbkNoaXAsIGN1cnJlbnRDaGlwLCBtaW4sICBtYXgpe1xuICAgICAgICB0aGlzLl9tYXggPSBtYXg7XG4gICAgICAgIHRoaXMuX21pbiA9IG1pbjtcbiAgICAgICAgdGhpcy5fZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgdGhpcy5fY3VycmVudCA9IGN1cnJlbnRDaGlwO1xuICAgICAgICB0aGlzLl9yZW1haW5DaGlwID0gcmVtYWluQ2hpcDtcbiAgICAgICAgdGhpcy5sYl9yZW1haW4uc3RyaW5nID0gVXRpbHMuZm9ybWF0Q3VycmVuY3kocmVtYWluQ2hpcCk7XG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKCk7XG4gICAgfSxcbiAgICB1cGRhdGVTbGlkZXIoKXtcbiAgICAgICAgbGV0IGN1cnJlbnRQcm9jZXNzID0gdGhpcy5fY3VycmVudCAvIHRoaXMuX21heDtcbiAgICAgICAgdGhpcy5TbGlkZXJSYWlzZS5wcm9ncmVzcyA9IGN1cnJlbnRQcm9jZXNzO1xuICAgICAgICB0aGlzLmxiX2N1cnJlbnQuc3RyaW5nID0gVXRpbHMuYWRkRG90VG9OdW1iZXIodGhpcy5fY3VycmVudCk7XG4gICAgICAgIHRoaXMubGJfbWluLnN0cmluZyA9IFV0aWxzLmZvcm1hdEN1cnJlbmN5KHRoaXMuX21pbik7XG4gICAgICAgIHRoaXMubGJfbWF4LnN0cmluZyA9IFV0aWxzLmZvcm1hdEN1cnJlbmN5KHRoaXMuX21heCk7XG4gICAgfSxcbiAgICBldmVudFBsdXMoKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICB0aGlzLl9jdXJyZW50ICs9IHRoaXMuX2Rpc3RhbmNlO1xuICAgICAgICBpZih0aGlzLl9jdXJyZW50ID4gdGhpcy5fbWF4KXtcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnQgPSB0aGlzLl9tYXg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51cGRhdGVTbGlkZXIoKTtcbiAgICB9LFxuICAgIGV2ZW50U3ViKCl7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgdGhpcy5fY3VycmVudCAtPSB0aGlzLl9kaXN0YW5jZTtcbiAgICAgICAgaWYodGhpcy5fY3VycmVudCA8IHRoaXMuX21pbil7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fbWluO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudXBkYXRlU2xpZGVyKCk7XG4gICAgfSxcbiAgICBvblNsaWRlclJhaXNlKHNsaWRlcil7XG4gICAgICAgIGxldCBwcm9jZXNzID0gc2xpZGVyLnByb2dyZXNzO1xuICAgICAgICB0aGlzLl9jdXJyZW50ID0gTWF0aC5mbG9vcihwYXJzZUZsb2F0KHByb2Nlc3MpLnRvRml4ZWQoMSkgICogdGhpcy5fbWF4KTtcbiAgICAgICAgaWYodGhpcy5fY3VycmVudCA+IHRoaXMuX3JlbWFpbkNoaXApe1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudCA9IHRoaXMuX3JlbWFpbkNoaXA7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5fY3VycmVudCA8IHRoaXMuX21pbil7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50ID0gdGhpcy5fbWluO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGJfY3VycmVudC5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9jdXJyZW50KTtcbiAgICB9LFxuICAgIG9uVG9nZ2xlR3JvdXAoZXZlbnQsIHNpemVEZXNrKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICB0aGlzLl9zaXplRGVzayA9IHNpemVEZXNrO1xuICAgIH0sXG4gICAgZXZlbnRDb25maXJtKCl7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgaWYodGhpcy5jYlllcyl7XG4gICAgICAgICAgICB0aGlzLmNiWWVzLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldEJ1eUluKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9jdXJyZW50O1xuICAgIH0sXG4gICAgZ2V0TWluQmV0KCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXN0YW5jZTtcbiAgICB9LFxuICAgIGV2ZW50Q2FuY2VsKCl7XG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcbiAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfVxufSk7XG4iXX0=
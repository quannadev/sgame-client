
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/RouletteSoiCauItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a76a5y2byBLv79pwjGpc9Sn', 'RouletteSoiCauItem');
// scripts/roulette/RouletteSoiCauItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bgRed: cc.Node,
    bgBlack: cc.Node,
    lbCau: cc.Label,
    MaxCount: 4,
    _ListRed: []
  },
  onLoad: function onLoad() {
    this._ListRed = [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36];
  },
  init: function init(dataCau) {
    dataCau = parseInt(dataCau);

    if (this._ListRed.indexOf(dataCau) >= 0) {
      this.bgRed.active = true;
      this.bgBlack.active = false;
    } else {
      this.bgRed.active = false;
      this.bgBlack.active = true;
    }

    this.lbCau.string = dataCau;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3JvdWxldHRlL1JvdWxldHRlU29pQ2F1SXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJnUmVkIiwiTm9kZSIsImJnQmxhY2siLCJsYkNhdSIsIkxhYmVsIiwiTWF4Q291bnQiLCJfTGlzdFJlZCIsIm9uTG9hZCIsImluaXQiLCJkYXRhQ2F1IiwicGFyc2VJbnQiLCJpbmRleE9mIiwiYWN0aXZlIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFLSixFQUFFLENBQUNLLElBREw7QUFFUkMsSUFBQUEsT0FBTyxFQUFHTixFQUFFLENBQUNLLElBRkw7QUFHUkUsSUFBQUEsS0FBSyxFQUFPUCxFQUFFLENBQUNRLEtBSFA7QUFJUkMsSUFBQUEsUUFBUSxFQUFJLENBSko7QUFLUkMsSUFBQUEsUUFBUSxFQUFNO0FBTE4sR0FIUDtBQVVMQyxFQUFBQSxNQVZLLG9CQVVJO0FBQ0wsU0FBS0QsUUFBTCxHQUFrQixDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLEVBQWhCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLEVBQTRCLEVBQTVCLEVBQWdDLEVBQWhDLEVBQW9DLEVBQXBDLEVBQXdDLEVBQXhDLEVBQTRDLEVBQTVDLEVBQWdELEVBQWhELEVBQW9ELEVBQXBELEVBQXdELEVBQXhELEVBQTRELEVBQTVELEVBQWdFLEVBQWhFLENBQWxCO0FBQ0gsR0FaSTtBQWFMRSxFQUFBQSxJQWJLLGdCQWFBQyxPQWJBLEVBYVM7QUFDVkEsSUFBQUEsT0FBTyxHQUFPQyxRQUFRLENBQUNELE9BQUQsQ0FBdEI7O0FBQ0EsUUFBSSxLQUFLSCxRQUFMLENBQWNLLE9BQWQsQ0FBc0JGLE9BQXRCLEtBQWlDLENBQXJDLEVBQXVDO0FBQ25DLFdBQUtULEtBQUwsQ0FBV1ksTUFBWCxHQUE2QixJQUE3QjtBQUNBLFdBQUtWLE9BQUwsQ0FBYVUsTUFBYixHQUE2QixLQUE3QjtBQUNILEtBSEQsTUFHTTtBQUNGLFdBQUtaLEtBQUwsQ0FBV1ksTUFBWCxHQUE2QixLQUE3QjtBQUNBLFdBQUtWLE9BQUwsQ0FBYVUsTUFBYixHQUE2QixJQUE3QjtBQUNIOztBQUNELFNBQUtULEtBQUwsQ0FBV1UsTUFBWCxHQUEyQkosT0FBM0I7QUFDSDtBQXZCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBiZ1JlZCAgIDogY2MuTm9kZSxcbiAgICAgICAgYmdCbGFjayA6IGNjLk5vZGUsXG4gICAgICAgIGxiQ2F1ICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBNYXhDb3VudCAgOiA0LFxuICAgICAgICBfTGlzdFJlZCAgICA6IFtdLFxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLl9MaXN0UmVkICAgPSBbMSwgMywgNSwgNywgOSwgMTIsIDE0LCAxNiwgMTgsIDE5LCAyMSwgMjMsIDI1LCAyNywgMzAsIDMyLCAzNCwgMzZdO1xuICAgIH0sXG4gICAgaW5pdChkYXRhQ2F1KSB7XG4gICAgICAgIGRhdGFDYXUgICAgID0gcGFyc2VJbnQoZGF0YUNhdSk7XG4gICAgICAgIGlmICh0aGlzLl9MaXN0UmVkLmluZGV4T2YoZGF0YUNhdSkgPj0wKXtcbiAgICAgICAgICAgIHRoaXMuYmdSZWQuYWN0aXZlICAgICAgICAgID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYmdCbGFjay5hY3RpdmUgICAgICAgID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZXtcbiAgICAgICAgICAgIHRoaXMuYmdSZWQuYWN0aXZlICAgICAgICAgID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJnQmxhY2suYWN0aXZlICAgICAgICA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYkNhdS5zdHJpbmcgICAgICAgID0gZGF0YUNhdTtcbiAgICB9LFxufSk7XG4iXX0=
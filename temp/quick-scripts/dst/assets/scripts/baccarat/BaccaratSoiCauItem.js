
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/baccarat/BaccaratSoiCauItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8cbaeUw6shK9ZqTo7JJqS+S', 'BaccaratSoiCauItem');
// scripts/baccarat/BaccaratSoiCauItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    bgCauLe: cc.Node,
    bgCauChan: cc.Node,
    lbCau: cc.Label,
    MaxCount: 4
  },
  init: function init(dataCau) {
    dataCau = parseInt(dataCau);
    var isBlack = dataCau % 2 == 1;

    if (isBlack) {
      this.bgCauLe.active = true;
      this.bgCauChan.active = false;
      this.lbCau.string = dataCau;
      this.lbCau.node.color = cc.Color.WHITE;
    } else {
      this.bgCauLe.active = false;
      this.bgCauChan.active = true;
      this.lbCau.string = this.MaxCount - dataCau;
      this.lbCau.node.color = cc.Color.BLACK;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFjY2FyYXRcXEJhY2NhcmF0U29pQ2F1SXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImJnQ2F1TGUiLCJOb2RlIiwiYmdDYXVDaGFuIiwibGJDYXUiLCJMYWJlbCIsIk1heENvdW50IiwiaW5pdCIsImRhdGFDYXUiLCJwYXJzZUludCIsImlzQmxhY2siLCJhY3RpdmUiLCJzdHJpbmciLCJub2RlIiwiY29sb3IiLCJDb2xvciIsIldISVRFIiwiQkxBQ0siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUtKLEVBQUUsQ0FBQ0ssSUFEUDtBQUVSQyxJQUFBQSxTQUFTLEVBQUdOLEVBQUUsQ0FBQ0ssSUFGUDtBQUdSRSxJQUFBQSxLQUFLLEVBQU9QLEVBQUUsQ0FBQ1EsS0FIUDtBQUlSQyxJQUFBQSxRQUFRLEVBQUk7QUFKSixHQUhQO0FBU0xDLEVBQUFBLElBVEssZ0JBU0FDLE9BVEEsRUFTUztBQUNWQSxJQUFBQSxPQUFPLEdBQUdDLFFBQVEsQ0FBQ0QsT0FBRCxDQUFsQjtBQUNBLFFBQUlFLE9BQU8sR0FBR0YsT0FBTyxHQUFHLENBQVYsSUFBZSxDQUE3Qjs7QUFDQSxRQUFJRSxPQUFKLEVBQVk7QUFDUixXQUFLVCxPQUFMLENBQWFVLE1BQWIsR0FBMEIsSUFBMUI7QUFDQSxXQUFLUixTQUFMLENBQWVRLE1BQWYsR0FBMEIsS0FBMUI7QUFDQSxXQUFLUCxLQUFMLENBQVdRLE1BQVgsR0FBMEJKLE9BQTFCO0FBQ0EsV0FBS0osS0FBTCxDQUFXUyxJQUFYLENBQWdCQyxLQUFoQixHQUEwQmpCLEVBQUUsQ0FBQ2tCLEtBQUgsQ0FBU0MsS0FBbkM7QUFDSCxLQUxELE1BS007QUFDRixXQUFLZixPQUFMLENBQWFVLE1BQWIsR0FBMEIsS0FBMUI7QUFDQSxXQUFLUixTQUFMLENBQWVRLE1BQWYsR0FBMEIsSUFBMUI7QUFDQSxXQUFLUCxLQUFMLENBQVdRLE1BQVgsR0FBMEIsS0FBS04sUUFBTCxHQUFnQkUsT0FBMUM7QUFDQSxXQUFLSixLQUFMLENBQVdTLElBQVgsQ0FBZ0JDLEtBQWhCLEdBQTBCakIsRUFBRSxDQUFDa0IsS0FBSCxDQUFTRSxLQUFuQztBQUNIO0FBQ0o7QUF2QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBiZ0NhdUxlICAgOiBjYy5Ob2RlLFxyXG4gICAgICAgIGJnQ2F1Q2hhbiA6IGNjLk5vZGUsXHJcbiAgICAgICAgbGJDYXUgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgTWF4Q291bnQgIDogNFxyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YUNhdSkge1xyXG4gICAgICAgIGRhdGFDYXUgPSBwYXJzZUludChkYXRhQ2F1KTtcclxuICAgICAgICBsZXQgaXNCbGFjayA9IGRhdGFDYXUgJSAyID09IDE7XHJcbiAgICAgICAgaWYgKGlzQmxhY2spe1xyXG4gICAgICAgICAgICB0aGlzLmJnQ2F1TGUuYWN0aXZlICAgICA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYmdDYXVDaGFuLmFjdGl2ZSAgID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGJDYXUuc3RyaW5nICAgICAgID0gZGF0YUNhdTtcclxuICAgICAgICAgICAgdGhpcy5sYkNhdS5ub2RlLmNvbG9yICAgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmdDYXVMZS5hY3RpdmUgICAgID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYmdDYXVDaGFuLmFjdGl2ZSAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYkNhdS5zdHJpbmcgICAgICAgPSB0aGlzLk1heENvdW50IC0gZGF0YUNhdTtcclxuICAgICAgICAgICAgdGhpcy5sYkNhdS5ub2RlLmNvbG9yICAgPSBjYy5Db2xvci5CTEFDSztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
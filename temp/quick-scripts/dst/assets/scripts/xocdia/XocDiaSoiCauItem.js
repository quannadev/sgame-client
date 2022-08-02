
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/xocdia/XocDiaSoiCauItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69c92IEkJRDeafCU1znnby7', 'XocDiaSoiCauItem');
// scripts/xocdia/XocDiaSoiCauItem.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xceG9jZGlhXFxYb2NEaWFTb2lDYXVJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYmdDYXVMZSIsIk5vZGUiLCJiZ0NhdUNoYW4iLCJsYkNhdSIsIkxhYmVsIiwiTWF4Q291bnQiLCJpbml0IiwiZGF0YUNhdSIsInBhcnNlSW50IiwiaXNCbGFjayIsImFjdGl2ZSIsInN0cmluZyIsIm5vZGUiLCJjb2xvciIsIkNvbG9yIiwiV0hJVEUiLCJCTEFDSyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBS0osRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFNBQVMsRUFBR04sRUFBRSxDQUFDSyxJQUZQO0FBR1JFLElBQUFBLEtBQUssRUFBT1AsRUFBRSxDQUFDUSxLQUhQO0FBSVJDLElBQUFBLFFBQVEsRUFBSTtBQUpKLEdBSFA7QUFTTEMsRUFBQUEsSUFUSyxnQkFTQUMsT0FUQSxFQVNTO0FBQ1ZBLElBQUFBLE9BQU8sR0FBR0MsUUFBUSxDQUFDRCxPQUFELENBQWxCO0FBQ0EsUUFBSUUsT0FBTyxHQUFHRixPQUFPLEdBQUcsQ0FBVixJQUFlLENBQTdCOztBQUNBLFFBQUlFLE9BQUosRUFBWTtBQUNSLFdBQUtULE9BQUwsQ0FBYVUsTUFBYixHQUEwQixJQUExQjtBQUNBLFdBQUtSLFNBQUwsQ0FBZVEsTUFBZixHQUEwQixLQUExQjtBQUNBLFdBQUtQLEtBQUwsQ0FBV1EsTUFBWCxHQUEwQkosT0FBMUI7QUFDQSxXQUFLSixLQUFMLENBQVdTLElBQVgsQ0FBZ0JDLEtBQWhCLEdBQTBCakIsRUFBRSxDQUFDa0IsS0FBSCxDQUFTQyxLQUFuQztBQUNILEtBTEQsTUFLTTtBQUNGLFdBQUtmLE9BQUwsQ0FBYVUsTUFBYixHQUEwQixLQUExQjtBQUNBLFdBQUtSLFNBQUwsQ0FBZVEsTUFBZixHQUEwQixJQUExQjtBQUNBLFdBQUtQLEtBQUwsQ0FBV1EsTUFBWCxHQUEwQixLQUFLTixRQUFMLEdBQWdCRSxPQUExQztBQUNBLFdBQUtKLEtBQUwsQ0FBV1MsSUFBWCxDQUFnQkMsS0FBaEIsR0FBMEJqQixFQUFFLENBQUNrQixLQUFILENBQVNFLEtBQW5DO0FBQ0g7QUFDSjtBQXZCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGJnQ2F1TGUgICA6IGNjLk5vZGUsXHJcbiAgICAgICAgYmdDYXVDaGFuIDogY2MuTm9kZSxcclxuICAgICAgICBsYkNhdSAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBNYXhDb3VudCAgOiA0XHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhQ2F1KSB7XHJcbiAgICAgICAgZGF0YUNhdSA9IHBhcnNlSW50KGRhdGFDYXUpO1xyXG4gICAgICAgIGxldCBpc0JsYWNrID0gZGF0YUNhdSAlIDIgPT0gMTtcclxuICAgICAgICBpZiAoaXNCbGFjayl7XHJcbiAgICAgICAgICAgIHRoaXMuYmdDYXVMZS5hY3RpdmUgICAgID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5iZ0NhdUNoYW4uYWN0aXZlICAgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sYkNhdS5zdHJpbmcgICAgICAgPSBkYXRhQ2F1O1xyXG4gICAgICAgICAgICB0aGlzLmxiQ2F1Lm5vZGUuY29sb3IgICA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5iZ0NhdUxlLmFjdGl2ZSAgICAgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5iZ0NhdUNoYW4uYWN0aXZlICAgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxiQ2F1LnN0cmluZyAgICAgICA9IHRoaXMuTWF4Q291bnQgLSBkYXRhQ2F1O1xyXG4gICAgICAgICAgICB0aGlzLmxiQ2F1Lm5vZGUuY29sb3IgICA9IGNjLkNvbG9yLkJMQUNLO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
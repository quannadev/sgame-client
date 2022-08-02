
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/baccarat/BaccaratRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2ac96EVZCVJFZWhoobOgmCa', 'BaccaratRankItem');
// scripts/baccarat/BaccaratRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    listRank: [cc.SpriteFrame],
    listFont: [cc.Font],
    spRank: cc.Sprite,
    lbRank: cc.Label,
    lbName: cc.Label,
    lbWin: cc.Label
  },
  init: function init(dataRank, stt) {
    if (stt < 3) {
      this.spRank.node.active = true;
      this.lbRank.node.active = false;
      this.spRank.spriteFrame = this.listRank[stt];
      this.lbRank.font = this.listFont[0];
      this.lbWin.font = this.listFont[0];
      this.lbName.font = this.listFont[0];
    } else {
      this.spRank.node.active = false;
      this.lbRank.node.active = true;
      this.lbRank.string = stt + 1;
      this.lbRank.font = this.listFont[1];
      this.lbWin.font = this.listFont[1];
      this.lbName.font = this.listFont[1];
    }

    this.lbName.string = dataRank.account;
    this.lbWin.string = Utils.addDotToNumber(dataRank.win);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFjY2FyYXRcXEJhY2NhcmF0UmFua0l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxpc3RSYW5rIiwiU3ByaXRlRnJhbWUiLCJsaXN0Rm9udCIsIkZvbnQiLCJzcFJhbmsiLCJTcHJpdGUiLCJsYlJhbmsiLCJMYWJlbCIsImxiTmFtZSIsImxiV2luIiwiaW5pdCIsImRhdGFSYW5rIiwic3R0Iiwibm9kZSIsImFjdGl2ZSIsInNwcml0ZUZyYW1lIiwiZm9udCIsInN0cmluZyIsImFjY291bnQiLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwid2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFRLENBQUNKLEVBQUUsQ0FBQ0ssV0FBSixDQURSO0FBRVJDLElBQUFBLFFBQVEsRUFBUSxDQUFDTixFQUFFLENBQUNPLElBQUosQ0FGUjtBQUdSQyxJQUFBQSxNQUFNLEVBQVVSLEVBQUUsQ0FBQ1MsTUFIWDtBQUlSQyxJQUFBQSxNQUFNLEVBQVVWLEVBQUUsQ0FBQ1csS0FKWDtBQUtSQyxJQUFBQSxNQUFNLEVBQVNaLEVBQUUsQ0FBQ1csS0FMVjtBQU1SRSxJQUFBQSxLQUFLLEVBQVNiLEVBQUUsQ0FBQ1c7QUFOVCxHQUhQO0FBV0xHLEVBQUFBLElBWEssZ0JBV0FDLFFBWEEsRUFXVUMsR0FYVixFQVdlO0FBQ2hCLFFBQUlBLEdBQUcsR0FBRyxDQUFWLEVBQVk7QUFDUixXQUFLUixNQUFMLENBQVlTLElBQVosQ0FBaUJDLE1BQWpCLEdBQTBCLElBQTFCO0FBQ0EsV0FBS1IsTUFBTCxDQUFZTyxJQUFaLENBQWlCQyxNQUFqQixHQUEwQixLQUExQjtBQUNBLFdBQUtWLE1BQUwsQ0FBWVcsV0FBWixHQUEwQixLQUFLZixRQUFMLENBQWNZLEdBQWQsQ0FBMUI7QUFDQSxXQUFLTixNQUFMLENBQVlVLElBQVosR0FBd0IsS0FBS2QsUUFBTCxDQUFjLENBQWQsQ0FBeEI7QUFDQSxXQUFLTyxLQUFMLENBQVdPLElBQVgsR0FBd0IsS0FBS2QsUUFBTCxDQUFjLENBQWQsQ0FBeEI7QUFDQSxXQUFLTSxNQUFMLENBQVlRLElBQVosR0FBd0IsS0FBS2QsUUFBTCxDQUFjLENBQWQsQ0FBeEI7QUFDSCxLQVBELE1BT0s7QUFDRCxXQUFLRSxNQUFMLENBQVlTLElBQVosQ0FBaUJDLE1BQWpCLEdBQTBCLEtBQTFCO0FBQ0EsV0FBS1IsTUFBTCxDQUFZTyxJQUFaLENBQWlCQyxNQUFqQixHQUEwQixJQUExQjtBQUNBLFdBQUtSLE1BQUwsQ0FBWVcsTUFBWixHQUEyQkwsR0FBRyxHQUFHLENBQWpDO0FBQ0EsV0FBS04sTUFBTCxDQUFZVSxJQUFaLEdBQTBCLEtBQUtkLFFBQUwsQ0FBYyxDQUFkLENBQTFCO0FBQ0EsV0FBS08sS0FBTCxDQUFXTyxJQUFYLEdBQTBCLEtBQUtkLFFBQUwsQ0FBYyxDQUFkLENBQTFCO0FBQ0EsV0FBS00sTUFBTCxDQUFZUSxJQUFaLEdBQTBCLEtBQUtkLFFBQUwsQ0FBYyxDQUFkLENBQTFCO0FBQ0g7O0FBQ0QsU0FBS00sTUFBTCxDQUFZUyxNQUFaLEdBQXFCTixRQUFRLENBQUNPLE9BQTlCO0FBQ0EsU0FBS1QsS0FBTCxDQUFXUSxNQUFYLEdBQXFCRSxLQUFLLENBQUNDLGNBQU4sQ0FBcUJULFFBQVEsQ0FBQ1UsR0FBOUIsQ0FBckI7QUFDSDtBQTdCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGlzdFJhbmsgICAgICA6IFtjYy5TcHJpdGVGcmFtZV0sXHJcbiAgICAgICAgbGlzdEZvbnQgICAgICA6IFtjYy5Gb250XSxcclxuICAgICAgICBzcFJhbmsgICAgICAgIDogY2MuU3ByaXRlLFxyXG4gICAgICAgIGxiUmFuayAgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYk5hbWUgICAgICAgOiBjYy5MYWJlbCxcclxuICAgICAgICBsYldpbiAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YVJhbmssIHN0dCkge1xyXG4gICAgICAgIGlmIChzdHQgPCAzKXtcclxuICAgICAgICAgICAgdGhpcy5zcFJhbmsubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxiUmFuay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNwUmFuay5zcHJpdGVGcmFtZSA9IHRoaXMubGlzdFJhbmtbc3R0XTtcclxuICAgICAgICAgICAgdGhpcy5sYlJhbmsuZm9udCAgICAgID0gdGhpcy5saXN0Rm9udFswXTtcclxuICAgICAgICAgICAgdGhpcy5sYldpbi5mb250ICAgICAgID0gdGhpcy5saXN0Rm9udFswXTtcclxuICAgICAgICAgICAgdGhpcy5sYk5hbWUuZm9udCAgICAgID0gdGhpcy5saXN0Rm9udFswXTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5zcFJhbmsubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5sYlJhbmsubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxiUmFuay5zdHJpbmcgICAgICA9IChzdHQgKyAxKTtcclxuICAgICAgICAgICAgdGhpcy5sYlJhbmsuZm9udCAgICAgICAgPSB0aGlzLmxpc3RGb250WzFdO1xyXG4gICAgICAgICAgICB0aGlzLmxiV2luLmZvbnQgICAgICAgICA9IHRoaXMubGlzdEZvbnRbMV07XHJcbiAgICAgICAgICAgIHRoaXMubGJOYW1lLmZvbnQgICAgICAgID0gdGhpcy5saXN0Rm9udFsxXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5sYk5hbWUuc3RyaW5nID0gZGF0YVJhbmsuYWNjb3VudDtcclxuICAgICAgICB0aGlzLmxiV2luLnN0cmluZyAgPSBVdGlscy5hZGREb3RUb051bWJlcihkYXRhUmFuay53aW4pO1xyXG4gICAgfVxyXG59KTtcclxuIl19
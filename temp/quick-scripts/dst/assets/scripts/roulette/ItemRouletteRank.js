
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/ItemRouletteRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09f27lk1eZGrYdg3z8e0Zpv', 'ItemRouletteRank');
// scripts/roulette/ItemRouletteRank.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    listRank: [cc.SpriteFrame],
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
    } else {
      this.spRank.node.active = false;
      this.lbRank.node.active = true;
      this.lbRank.string = stt + 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm91bGV0dGVcXEl0ZW1Sb3VsZXR0ZVJhbmsuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxpc3RSYW5rIiwiU3ByaXRlRnJhbWUiLCJzcFJhbmsiLCJTcHJpdGUiLCJsYlJhbmsiLCJMYWJlbCIsImxiTmFtZSIsImxiV2luIiwiaW5pdCIsImRhdGFSYW5rIiwic3R0Iiwibm9kZSIsImFjdGl2ZSIsInNwcml0ZUZyYW1lIiwic3RyaW5nIiwiYWNjb3VudCIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQVEsQ0FBQ0osRUFBRSxDQUFDSyxXQUFKLENBRFI7QUFFUkMsSUFBQUEsTUFBTSxFQUFVTixFQUFFLENBQUNPLE1BRlg7QUFHUkMsSUFBQUEsTUFBTSxFQUFVUixFQUFFLENBQUNTLEtBSFg7QUFJUkMsSUFBQUEsTUFBTSxFQUFTVixFQUFFLENBQUNTLEtBSlY7QUFLUkUsSUFBQUEsS0FBSyxFQUFTWCxFQUFFLENBQUNTO0FBTFQsR0FIUDtBQVVMRyxFQUFBQSxJQVZLLGdCQVVBQyxRQVZBLEVBVVVDLEdBVlYsRUFVZTtBQUNoQixRQUFJQSxHQUFHLEdBQUcsQ0FBVixFQUFZO0FBQ1IsV0FBS1IsTUFBTCxDQUFZUyxJQUFaLENBQWlCQyxNQUFqQixHQUEwQixJQUExQjtBQUNBLFdBQUtSLE1BQUwsQ0FBWU8sSUFBWixDQUFpQkMsTUFBakIsR0FBMEIsS0FBMUI7QUFDQSxXQUFLVixNQUFMLENBQVlXLFdBQVosR0FBMEIsS0FBS2IsUUFBTCxDQUFjVSxHQUFkLENBQTFCO0FBQ0gsS0FKRCxNQUlLO0FBQ0QsV0FBS1IsTUFBTCxDQUFZUyxJQUFaLENBQWlCQyxNQUFqQixHQUEwQixLQUExQjtBQUNBLFdBQUtSLE1BQUwsQ0FBWU8sSUFBWixDQUFpQkMsTUFBakIsR0FBMEIsSUFBMUI7QUFDQSxXQUFLUixNQUFMLENBQVlVLE1BQVosR0FBMkJKLEdBQUcsR0FBRyxDQUFqQztBQUNIOztBQUNELFNBQUtKLE1BQUwsQ0FBWVEsTUFBWixHQUFxQkwsUUFBUSxDQUFDTSxPQUE5QjtBQUNBLFNBQUtSLEtBQUwsQ0FBV08sTUFBWCxHQUFxQkUsS0FBSyxDQUFDQyxjQUFOLENBQXFCUixRQUFRLENBQUNTLEdBQTlCLENBQXJCO0FBQ0g7QUF0QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3RSYW5rICAgICAgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIHNwUmFuayAgICAgICAgOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgbGJSYW5rICAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTmFtZSAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiV2luICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICB9LFxyXG4gICAgaW5pdChkYXRhUmFuaywgc3R0KSB7XHJcbiAgICAgICAgaWYgKHN0dCA8IDMpe1xyXG4gICAgICAgICAgICB0aGlzLnNwUmFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGJSYW5rLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3BSYW5rLnNwcml0ZUZyYW1lID0gdGhpcy5saXN0UmFua1tzdHRdO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLnNwUmFuay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxiUmFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGJSYW5rLnN0cmluZyAgICAgID0gKHN0dCArIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxiTmFtZS5zdHJpbmcgPSBkYXRhUmFuay5hY2NvdW50O1xyXG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLndpbik7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
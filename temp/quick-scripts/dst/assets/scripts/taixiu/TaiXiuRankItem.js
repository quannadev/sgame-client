
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/taixiu/TaiXiuRankItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '46addziMv5OoKBZ7APa5FSX', 'TaiXiuRankItem');
// scripts/taixiu/TaiXiuRankItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    listRank: [cc.SpriteFrame],
    spRank: cc.Sprite,
    lbRank: cc.Label,
    lbName: cc.Label,
    lbWin: cc.Label,
    bgItem: cc.Node
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

    this.bgItem.active = stt % 2 == 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3RhaXhpdS9UYWlYaXVSYW5rSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGlzdFJhbmsiLCJTcHJpdGVGcmFtZSIsInNwUmFuayIsIlNwcml0ZSIsImxiUmFuayIsIkxhYmVsIiwibGJOYW1lIiwibGJXaW4iLCJiZ0l0ZW0iLCJOb2RlIiwiaW5pdCIsImRhdGFSYW5rIiwic3R0Iiwibm9kZSIsImFjdGl2ZSIsInNwcml0ZUZyYW1lIiwic3RyaW5nIiwiYWNjb3VudCIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQVEsQ0FBQ0osRUFBRSxDQUFDSyxXQUFKLENBRFI7QUFFUkMsSUFBQUEsTUFBTSxFQUFVTixFQUFFLENBQUNPLE1BRlg7QUFHUkMsSUFBQUEsTUFBTSxFQUFVUixFQUFFLENBQUNTLEtBSFg7QUFJUkMsSUFBQUEsTUFBTSxFQUFTVixFQUFFLENBQUNTLEtBSlY7QUFLUkUsSUFBQUEsS0FBSyxFQUFTWCxFQUFFLENBQUNTLEtBTFQ7QUFNUkcsSUFBQUEsTUFBTSxFQUFTWixFQUFFLENBQUNhO0FBTlYsR0FIUDtBQVdMQyxFQUFBQSxJQVhLLGdCQVdBQyxRQVhBLEVBV1VDLEdBWFYsRUFXZTtBQUNoQixRQUFJQSxHQUFHLEdBQUcsQ0FBVixFQUFZO0FBQ1IsV0FBS1YsTUFBTCxDQUFZVyxJQUFaLENBQWlCQyxNQUFqQixHQUEwQixJQUExQjtBQUNBLFdBQUtWLE1BQUwsQ0FBWVMsSUFBWixDQUFpQkMsTUFBakIsR0FBMEIsS0FBMUI7QUFDQSxXQUFLWixNQUFMLENBQVlhLFdBQVosR0FBMEIsS0FBS2YsUUFBTCxDQUFjWSxHQUFkLENBQTFCO0FBQ0gsS0FKRCxNQUlLO0FBQ0QsV0FBS1YsTUFBTCxDQUFZVyxJQUFaLENBQWlCQyxNQUFqQixHQUEwQixLQUExQjtBQUNBLFdBQUtWLE1BQUwsQ0FBWVMsSUFBWixDQUFpQkMsTUFBakIsR0FBMEIsSUFBMUI7QUFDQSxXQUFLVixNQUFMLENBQVlZLE1BQVosR0FBMkJKLEdBQUcsR0FBRyxDQUFqQztBQUNIOztBQUNELFNBQUtKLE1BQUwsQ0FBWU0sTUFBWixHQUFzQkYsR0FBRyxHQUFDLENBQUosSUFBUyxDQUEvQjtBQUNBLFNBQUtOLE1BQUwsQ0FBWVUsTUFBWixHQUFxQkwsUUFBUSxDQUFDTSxPQUE5QjtBQUNBLFNBQUtWLEtBQUwsQ0FBV1MsTUFBWCxHQUFxQkUsS0FBSyxDQUFDQyxjQUFOLENBQXFCUixRQUFRLENBQUNTLEdBQTlCLENBQXJCO0FBQ0g7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsaXN0UmFuayAgICAgIDogW2NjLlNwcml0ZUZyYW1lXSxcbiAgICAgICAgc3BSYW5rICAgICAgICA6IGNjLlNwcml0ZSxcbiAgICAgICAgbGJSYW5rICAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk5hbWUgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJXaW4gICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgYmdJdGVtICAgICAgIDogY2MuTm9kZSxcbiAgICB9LFxuICAgIGluaXQoZGF0YVJhbmssIHN0dCkge1xuICAgICAgICBpZiAoc3R0IDwgMyl7XG4gICAgICAgICAgICB0aGlzLnNwUmFuay5ub2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmxiUmFuay5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zcFJhbmsuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RSYW5rW3N0dF07XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGhpcy5zcFJhbmsubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubGJSYW5rLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMubGJSYW5rLnN0cmluZyAgICAgID0gKHN0dCArIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmdJdGVtLmFjdGl2ZSA9IChzdHQlMiA9PSAwKTtcbiAgICAgICAgdGhpcy5sYk5hbWUuc3RyaW5nID0gZGF0YVJhbmsuYWNjb3VudDtcbiAgICAgICAgdGhpcy5sYldpbi5zdHJpbmcgID0gVXRpbHMuYWRkRG90VG9OdW1iZXIoZGF0YVJhbmsud2luKTtcbiAgICB9XG59KTtcbiJdfQ==
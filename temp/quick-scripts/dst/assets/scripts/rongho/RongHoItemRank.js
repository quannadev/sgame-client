
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rongho/RongHoItemRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fde56TYwKFBkaMdN24wwGVr', 'RongHoItemRank');
// scripts/rongho/RongHoItemRank.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm9uZ2hvXFxSb25nSG9JdGVtUmFuay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGlzdFJhbmsiLCJTcHJpdGVGcmFtZSIsInNwUmFuayIsIlNwcml0ZSIsImxiUmFuayIsIkxhYmVsIiwibGJOYW1lIiwibGJXaW4iLCJiZ0l0ZW0iLCJOb2RlIiwiaW5pdCIsImRhdGFSYW5rIiwic3R0Iiwibm9kZSIsImFjdGl2ZSIsInNwcml0ZUZyYW1lIiwic3RyaW5nIiwiYWNjb3VudCIsIlV0aWxzIiwiYWRkRG90VG9OdW1iZXIiLCJ3aW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQVEsQ0FBQ0osRUFBRSxDQUFDSyxXQUFKLENBRFI7QUFFUkMsSUFBQUEsTUFBTSxFQUFVTixFQUFFLENBQUNPLE1BRlg7QUFHUkMsSUFBQUEsTUFBTSxFQUFVUixFQUFFLENBQUNTLEtBSFg7QUFJUkMsSUFBQUEsTUFBTSxFQUFTVixFQUFFLENBQUNTLEtBSlY7QUFLUkUsSUFBQUEsS0FBSyxFQUFTWCxFQUFFLENBQUNTLEtBTFQ7QUFNUkcsSUFBQUEsTUFBTSxFQUFTWixFQUFFLENBQUNhO0FBTlYsR0FIUDtBQVdMQyxFQUFBQSxJQVhLLGdCQVdBQyxRQVhBLEVBV1VDLEdBWFYsRUFXZTtBQUNoQixRQUFJQSxHQUFHLEdBQUcsQ0FBVixFQUFZO0FBQ1IsV0FBS1YsTUFBTCxDQUFZVyxJQUFaLENBQWlCQyxNQUFqQixHQUEwQixJQUExQjtBQUNBLFdBQUtWLE1BQUwsQ0FBWVMsSUFBWixDQUFpQkMsTUFBakIsR0FBMEIsS0FBMUI7QUFDQSxXQUFLWixNQUFMLENBQVlhLFdBQVosR0FBMEIsS0FBS2YsUUFBTCxDQUFjWSxHQUFkLENBQTFCO0FBQ0gsS0FKRCxNQUlLO0FBQ0QsV0FBS1YsTUFBTCxDQUFZVyxJQUFaLENBQWlCQyxNQUFqQixHQUEwQixLQUExQjtBQUNBLFdBQUtWLE1BQUwsQ0FBWVMsSUFBWixDQUFpQkMsTUFBakIsR0FBMEIsSUFBMUI7QUFDQSxXQUFLVixNQUFMLENBQVlZLE1BQVosR0FBMkJKLEdBQUcsR0FBRyxDQUFqQztBQUNIOztBQUNELFNBQUtKLE1BQUwsQ0FBWU0sTUFBWixHQUFzQkYsR0FBRyxHQUFDLENBQUosSUFBUyxDQUEvQjtBQUNBLFNBQUtOLE1BQUwsQ0FBWVUsTUFBWixHQUFxQkwsUUFBUSxDQUFDTSxPQUE5QjtBQUNBLFNBQUtWLEtBQUwsQ0FBV1MsTUFBWCxHQUFxQkUsS0FBSyxDQUFDQyxjQUFOLENBQXFCUixRQUFRLENBQUNTLEdBQTlCLENBQXJCO0FBQ0g7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3RSYW5rICAgICAgOiBbY2MuU3ByaXRlRnJhbWVdLFxyXG4gICAgICAgIHNwUmFuayAgICAgICAgOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgbGJSYW5rICAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiTmFtZSAgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiV2luICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgYmdJdGVtICAgICAgIDogY2MuTm9kZSxcclxuICAgIH0sXHJcbiAgICBpbml0KGRhdGFSYW5rLCBzdHQpIHtcclxuICAgICAgICBpZiAoc3R0IDwgMyl7XHJcbiAgICAgICAgICAgIHRoaXMuc3BSYW5rLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYlJhbmsubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zcFJhbmsuc3ByaXRlRnJhbWUgPSB0aGlzLmxpc3RSYW5rW3N0dF07XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuc3BSYW5rLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGJSYW5rLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYlJhbmsuc3RyaW5nICAgICAgPSAoc3R0ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmdJdGVtLmFjdGl2ZSA9IChzdHQlMiA9PSAwKTtcclxuICAgICAgICB0aGlzLmxiTmFtZS5zdHJpbmcgPSBkYXRhUmFuay5hY2NvdW50O1xyXG4gICAgICAgIHRoaXMubGJXaW4uc3RyaW5nICA9IFV0aWxzLmFkZERvdFRvTnVtYmVyKGRhdGFSYW5rLndpbik7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
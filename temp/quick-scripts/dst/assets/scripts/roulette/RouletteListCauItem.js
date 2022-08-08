
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/RouletteListCauItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3be66XyU9JNJ4aipqcByYsz', 'RouletteListCauItem');
// scripts/roulette/RouletteListCauItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    cauItem: cc.Prefab,
    listCau: cc.Node
  },
  init: function init(listCau) {
    var self = this;
    this.listCau.removeAllChildren(true);
    Promise.all(listCau.map(function (cauData, index) {
      var cauPrefab = cc.instantiate(self.cauItem);
      self.listCau.addChild(cauPrefab);
      cauPrefab.getComponent(cauPrefab.name).init(cauData);
    }));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3JvdWxldHRlL1JvdWxldHRlTGlzdENhdUl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImNhdUl0ZW0iLCJQcmVmYWIiLCJsaXN0Q2F1IiwiTm9kZSIsImluaXQiLCJzZWxmIiwicmVtb3ZlQWxsQ2hpbGRyZW4iLCJQcm9taXNlIiwiYWxsIiwibWFwIiwiY2F1RGF0YSIsImluZGV4IiwiY2F1UHJlZmFiIiwiaW5zdGFudGlhdGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxjQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUdKLEVBQUUsQ0FBQ0ssTUFETDtBQUVSQyxJQUFBQSxPQUFPLEVBQUdOLEVBQUUsQ0FBQ087QUFGTCxHQUhQO0FBT0xDLEVBQUFBLElBUEssZ0JBT0FGLE9BUEEsRUFPUztBQUNWLFFBQUlHLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS0gsT0FBTCxDQUFhSSxpQkFBYixDQUErQixJQUEvQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWU4sT0FBTyxDQUFDTyxHQUFSLENBQVksVUFBU0MsT0FBVCxFQUFrQkMsS0FBbEIsRUFBd0I7QUFDNUMsVUFBSUMsU0FBUyxHQUFHaEIsRUFBRSxDQUFDaUIsV0FBSCxDQUFlUixJQUFJLENBQUNMLE9BQXBCLENBQWhCO0FBQ0FLLE1BQUFBLElBQUksQ0FBQ0gsT0FBTCxDQUFhWSxRQUFiLENBQXNCRixTQUF0QjtBQUNBQSxNQUFBQSxTQUFTLENBQUNHLFlBQVYsQ0FBdUJILFNBQVMsQ0FBQ0ksSUFBakMsRUFBdUNaLElBQXZDLENBQTRDTSxPQUE1QztBQUNILEtBSlcsQ0FBWjtBQUtIO0FBZkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBjYXVJdGVtIDogY2MuUHJlZmFiLFxuICAgICAgICBsaXN0Q2F1IDogY2MuTm9kZSxcbiAgICB9LFxuICAgIGluaXQobGlzdENhdSkge1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubGlzdENhdS5yZW1vdmVBbGxDaGlsZHJlbih0cnVlKTtcbiAgICAgICAgUHJvbWlzZS5hbGwobGlzdENhdS5tYXAoZnVuY3Rpb24oY2F1RGF0YSwgaW5kZXgpe1xuICAgICAgICAgICAgbGV0IGNhdVByZWZhYiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuY2F1SXRlbSk7XG4gICAgICAgICAgICBzZWxmLmxpc3RDYXUuYWRkQ2hpbGQoY2F1UHJlZmFiKTtcbiAgICAgICAgICAgIGNhdVByZWZhYi5nZXRDb21wb25lbnQoY2F1UHJlZmFiLm5hbWUpLmluaXQoY2F1RGF0YSk7XG4gICAgICAgIH0pKTtcbiAgICB9LFxufSk7XG4iXX0=
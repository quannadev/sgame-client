
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/VampireReel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4aa6aTnCmVHmKQ/V/OOpr1u', 'VampireReel');
// scripts/vampire/VampireReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {},
  onEnable: function onEnable() {},
  init: function init(obj, data) {
    var _this = this;

    this.SLV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.SLV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('VampireItem');
      icon.init(self.SLV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index) {
    this.node.stopAllActions();
    var self = this;
    var d = cc.moveTo(1.8, cc.v2(this.node.x, -(this.node.height - 418))).easing(cc.easeInOut(3));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.SLV.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 4) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.SLV.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(cc.delayTime(index * 0.2), d, EF));
    } else this.node.runAction(cc.sequence(cc.delayTime(index * 0.2), d, p2));
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.SLV.copy();
    this.node.y = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVmFtcGlyZVJlZWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJvbkVuYWJsZSIsImluaXQiLCJvYmoiLCJkYXRhIiwiU0xWIiwiaWNvbnMiLCJzZWxmIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIml0ZW1UeXBlIiwiaW5kZXgiLCJpY29uIiwiaW5zdGFudGlhdGUiLCJpY29uUHJlZmFiIiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwidGhlbiIsInJlc3VsdCIsInNwaW4iLCJzdG9wQWxsQWN0aW9ucyIsImQiLCJtb3ZlVG8iLCJ2MiIsIngiLCJoZWlnaHQiLCJlYXNpbmciLCJlYXNlSW5PdXQiLCJwMiIsImNhbGxGdW5jIiwiY29weSIsInkiLCJFRiIsInJ1bkFjdGlvbldvbiIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSyxDQUVULENBVEk7QUFVTEMsRUFBQUEsUUFWSyxzQkFVTyxDQUFFLENBVlQ7QUFZTEMsRUFBQUEsSUFaSyxnQkFZQUMsR0FaQSxFQVlLQyxJQVpMLEVBWVU7QUFBQTs7QUFDWCxTQUFLQyxHQUFMLEdBQVdGLEdBQVg7QUFDQSxTQUFLRyxLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUF5QjtBQUMxQyxVQUFJQyxJQUFJLEdBQUdqQixFQUFFLENBQUNrQixXQUFILENBQWVQLElBQUksQ0FBQ0YsR0FBTCxDQUFTVSxVQUF4QixDQUFYO0FBQ0FSLE1BQUFBLElBQUksQ0FBQ1MsSUFBTCxDQUFVQyxRQUFWLENBQW1CSixJQUFuQjtBQUNBQSxNQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixhQUFsQixDQUFQO0FBQ0FMLE1BQUFBLElBQUksQ0FBQ1gsSUFBTCxDQUFVSyxJQUFJLENBQUNGLEdBQWYsRUFBb0JNLFFBQXBCO0FBQ0EsYUFBT0UsSUFBUDtBQUNILEtBTlcsQ0FBWixFQU9LTSxJQVBMLENBT1UsVUFBQUMsTUFBTSxFQUFJO0FBQ1osTUFBQSxLQUFJLENBQUNkLEtBQUwsR0FBYWMsTUFBYjtBQUNILEtBVEw7QUFVSCxHQTFCSTtBQTJCTEMsRUFBQUEsSUFBSSxFQUFFLGNBQVNULEtBQVQsRUFBZTtBQUNqQixTQUFLSSxJQUFMLENBQVVNLGNBQVY7QUFDQSxRQUFJZixJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUlnQixDQUFDLEdBQUczQixFQUFFLENBQUM0QixNQUFILENBQVUsR0FBVixFQUFlNUIsRUFBRSxDQUFDNkIsRUFBSCxDQUFNLEtBQUtULElBQUwsQ0FBVVUsQ0FBaEIsRUFBa0IsRUFBRSxLQUFLVixJQUFMLENBQVVXLE1BQVYsR0FBaUIsR0FBbkIsQ0FBbEIsQ0FBZixFQUEyREMsTUFBM0QsQ0FBa0VoQyxFQUFFLENBQUNpQyxTQUFILENBQWEsQ0FBYixDQUFsRSxDQUFSO0FBQ0EsUUFBSUMsRUFBRSxHQUFHbEMsRUFBRSxDQUFDbUMsUUFBSCxDQUFZLFlBQVc7QUFDNUIsVUFBSW5CLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsYUFBS1AsR0FBTCxDQUFTMkIsSUFBVDtBQUNIOztBQUNELFdBQUtoQixJQUFMLENBQVVpQixDQUFWLEdBQWMsQ0FBZDtBQUNILEtBTFEsRUFLTixJQUxNLENBQVQ7O0FBT0EsUUFBSXJCLEtBQUssS0FBSyxDQUFkLEVBQWdCO0FBQ1osVUFBSXNCLEVBQUUsR0FBR3RDLEVBQUUsQ0FBQ21DLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLGFBQUtmLElBQUwsQ0FBVWlCLENBQVYsR0FBYyxDQUFkO0FBQ0EsYUFBSzVCLEdBQUwsQ0FBUzhCLFlBQVQ7QUFDSCxPQUhRLEVBR04sSUFITSxDQUFUO0FBSUEsV0FBS25CLElBQUwsQ0FBVW9CLFNBQVYsQ0FBb0J4QyxFQUFFLENBQUN5QyxRQUFILENBQVl6QyxFQUFFLENBQUMwQyxTQUFILENBQWExQixLQUFLLEdBQUMsR0FBbkIsQ0FBWixFQUFxQ1csQ0FBckMsRUFBd0NXLEVBQXhDLENBQXBCO0FBQ0gsS0FORCxNQU9JLEtBQUtsQixJQUFMLENBQVVvQixTQUFWLENBQW9CeEMsRUFBRSxDQUFDeUMsUUFBSCxDQUFZekMsRUFBRSxDQUFDMEMsU0FBSCxDQUFhMUIsS0FBSyxHQUFDLEdBQW5CLENBQVosRUFBcUNXLENBQXJDLEVBQXdDTyxFQUF4QyxDQUFwQjtBQUNQLEdBOUNJO0FBK0NMUyxFQUFBQSxJQUFJLEVBQUUsZ0JBQVU7QUFDWixTQUFLdkIsSUFBTCxDQUFVTSxjQUFWO0FBQ0EsU0FBS2pCLEdBQUwsQ0FBUzJCLElBQVQ7QUFDQSxTQUFLaEIsSUFBTCxDQUFVaUIsQ0FBVixHQUFjLENBQWQ7QUFDSDtBQW5ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlICgpIHt9LFxyXG5cclxuICAgIGluaXQob2JqLCBkYXRhKXtcclxuICAgICAgICB0aGlzLlNMViA9IG9iajtcclxuICAgICAgICB0aGlzLmljb25zID0gW107XHJcbiAgICAgICAgdmFyIHNlbGYgID0gdGhpcztcclxuICAgICAgICBQcm9taXNlLmFsbChkYXRhLm1hcChmdW5jdGlvbihpdGVtVHlwZSwgaW5kZXgpe1xyXG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuU0xWLmljb25QcmVmYWIpO1xyXG4gICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQoaWNvbik7XHJcbiAgICAgICAgICAgIGljb24gPSBpY29uLmdldENvbXBvbmVudCgnVmFtcGlyZUl0ZW0nKTtcclxuICAgICAgICAgICAgaWNvbi5pbml0KHNlbGYuU0xWLCBpdGVtVHlwZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpY29uO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29ucyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3BpbjogZnVuY3Rpb24oaW5kZXgpe1xyXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgZCA9IGNjLm1vdmVUbygxLjgsIGNjLnYyKHRoaXMubm9kZS54LC0odGhpcy5ub2RlLmhlaWdodC00MTgpKSkuZWFzaW5nKGNjLmVhc2VJbk91dCgzKSk7XHJcbiAgICAgICAgdmFyIHAyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TTFYuY29weSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSA0KXtcclxuICAgICAgICAgICAgdmFyIEVGID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNMVi5ydW5BY3Rpb25Xb24oKTtcclxuICAgICAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KjAuMiksIGQsIEVGICkpO1xyXG4gICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCowLjIpLCBkLCBwMikpO1xyXG4gICAgfSxcclxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgdGhpcy5TTFYuY29weSgpO1xyXG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
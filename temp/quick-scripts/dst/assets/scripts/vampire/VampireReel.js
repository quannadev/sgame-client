
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVmFtcGlyZVJlZWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJvbkVuYWJsZSIsImluaXQiLCJvYmoiLCJkYXRhIiwiU0xWIiwiaWNvbnMiLCJzZWxmIiwiUHJvbWlzZSIsImFsbCIsIm1hcCIsIml0ZW1UeXBlIiwiaW5kZXgiLCJpY29uIiwiaW5zdGFudGlhdGUiLCJpY29uUHJlZmFiIiwibm9kZSIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwidGhlbiIsInJlc3VsdCIsInNwaW4iLCJzdG9wQWxsQWN0aW9ucyIsImQiLCJtb3ZlVG8iLCJ2MiIsIngiLCJoZWlnaHQiLCJlYXNpbmciLCJlYXNlSW5PdXQiLCJwMiIsImNhbGxGdW5jIiwiY29weSIsInkiLCJFRiIsInJ1bkFjdGlvbldvbiIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsTUFQSyxvQkFPSyxDQUVULENBVEk7QUFVTEMsRUFBQUEsUUFWSyxzQkFVTyxDQUFFLENBVlQ7QUFZTEMsRUFBQUEsSUFaSyxnQkFZQUMsR0FaQSxFQVlLQyxJQVpMLEVBWVU7QUFBQTs7QUFDWCxTQUFLQyxHQUFMLEdBQVdGLEdBQVg7QUFDQSxTQUFLRyxLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUF5QjtBQUMxQyxVQUFJQyxJQUFJLEdBQUdqQixFQUFFLENBQUNrQixXQUFILENBQWVQLElBQUksQ0FBQ0YsR0FBTCxDQUFTVSxVQUF4QixDQUFYO0FBQ0FSLE1BQUFBLElBQUksQ0FBQ1MsSUFBTCxDQUFVQyxRQUFWLENBQW1CSixJQUFuQjtBQUNBQSxNQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ssWUFBTCxDQUFrQixhQUFsQixDQUFQO0FBQ0FMLE1BQUFBLElBQUksQ0FBQ1gsSUFBTCxDQUFVSyxJQUFJLENBQUNGLEdBQWYsRUFBb0JNLFFBQXBCO0FBQ0EsYUFBT0UsSUFBUDtBQUNILEtBTlcsQ0FBWixFQU9LTSxJQVBMLENBT1UsVUFBQUMsTUFBTSxFQUFJO0FBQ1osTUFBQSxLQUFJLENBQUNkLEtBQUwsR0FBYWMsTUFBYjtBQUNILEtBVEw7QUFVSCxHQTFCSTtBQTJCTEMsRUFBQUEsSUFBSSxFQUFFLGNBQVNULEtBQVQsRUFBZTtBQUNqQixTQUFLSSxJQUFMLENBQVVNLGNBQVY7QUFDQSxRQUFJZixJQUFJLEdBQUcsSUFBWDtBQUNBLFFBQUlnQixDQUFDLEdBQUczQixFQUFFLENBQUM0QixNQUFILENBQVUsR0FBVixFQUFlNUIsRUFBRSxDQUFDNkIsRUFBSCxDQUFNLEtBQUtULElBQUwsQ0FBVVUsQ0FBaEIsRUFBa0IsRUFBRSxLQUFLVixJQUFMLENBQVVXLE1BQVYsR0FBaUIsR0FBbkIsQ0FBbEIsQ0FBZixFQUEyREMsTUFBM0QsQ0FBa0VoQyxFQUFFLENBQUNpQyxTQUFILENBQWEsQ0FBYixDQUFsRSxDQUFSO0FBQ0EsUUFBSUMsRUFBRSxHQUFHbEMsRUFBRSxDQUFDbUMsUUFBSCxDQUFZLFlBQVc7QUFDNUIsVUFBSW5CLEtBQUssS0FBSyxDQUFkLEVBQWlCO0FBQ2IsYUFBS1AsR0FBTCxDQUFTMkIsSUFBVDtBQUNIOztBQUNELFdBQUtoQixJQUFMLENBQVVpQixDQUFWLEdBQWMsQ0FBZDtBQUNILEtBTFEsRUFLTixJQUxNLENBQVQ7O0FBT0EsUUFBSXJCLEtBQUssS0FBSyxDQUFkLEVBQWdCO0FBQ1osVUFBSXNCLEVBQUUsR0FBR3RDLEVBQUUsQ0FBQ21DLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLGFBQUtmLElBQUwsQ0FBVWlCLENBQVYsR0FBYyxDQUFkO0FBQ0EsYUFBSzVCLEdBQUwsQ0FBUzhCLFlBQVQ7QUFDSCxPQUhRLEVBR04sSUFITSxDQUFUO0FBSUEsV0FBS25CLElBQUwsQ0FBVW9CLFNBQVYsQ0FBb0J4QyxFQUFFLENBQUN5QyxRQUFILENBQVl6QyxFQUFFLENBQUMwQyxTQUFILENBQWExQixLQUFLLEdBQUMsR0FBbkIsQ0FBWixFQUFxQ1csQ0FBckMsRUFBd0NXLEVBQXhDLENBQXBCO0FBQ0gsS0FORCxNQU9JLEtBQUtsQixJQUFMLENBQVVvQixTQUFWLENBQW9CeEMsRUFBRSxDQUFDeUMsUUFBSCxDQUFZekMsRUFBRSxDQUFDMEMsU0FBSCxDQUFhMUIsS0FBSyxHQUFDLEdBQW5CLENBQVosRUFBcUNXLENBQXJDLEVBQXdDTyxFQUF4QyxDQUFwQjtBQUNQLEdBOUNJO0FBK0NMUyxFQUFBQSxJQUFJLEVBQUUsZ0JBQVU7QUFDWixTQUFLdkIsSUFBTCxDQUFVTSxjQUFWO0FBQ0EsU0FBS2pCLEdBQUwsQ0FBUzJCLElBQVQ7QUFDQSxTQUFLaEIsSUFBTCxDQUFVaUIsQ0FBVixHQUFjLENBQWQ7QUFDSDtBQW5ESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgb25Mb2FkICgpIHtcblxuICAgIH0sXG4gICAgb25FbmFibGUgKCkge30sXG5cbiAgICBpbml0KG9iaiwgZGF0YSl7XG4gICAgICAgIHRoaXMuU0xWID0gb2JqO1xuICAgICAgICB0aGlzLmljb25zID0gW107XG4gICAgICAgIHZhciBzZWxmICA9IHRoaXM7XG4gICAgICAgIFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKGl0ZW1UeXBlLCBpbmRleCl7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuU0xWLmljb25QcmVmYWIpO1xuICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGljb24pO1xuICAgICAgICAgICAgaWNvbiA9IGljb24uZ2V0Q29tcG9uZW50KCdWYW1waXJlSXRlbScpO1xuICAgICAgICAgICAgaWNvbi5pbml0KHNlbGYuU0xWLCBpdGVtVHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgICAgfSkpXG4gICAgICAgICAgICAudGhlbihyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaWNvbnMgPSByZXN1bHQ7XG4gICAgICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNwaW46IGZ1bmN0aW9uKGluZGV4KXtcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGQgPSBjYy5tb3ZlVG8oMS44LCBjYy52Mih0aGlzLm5vZGUueCwtKHRoaXMubm9kZS5oZWlnaHQtNDE4KSkpLmVhc2luZyhjYy5lYXNlSW5PdXQoMykpO1xuICAgICAgICB2YXIgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuU0xWLmNvcHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSA0KXtcbiAgICAgICAgICAgIHZhciBFRiA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLlNMVi5ydW5BY3Rpb25Xb24oKTtcbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqMC4yKSwgZCwgRUYgKSk7XG4gICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqMC4yKSwgZCwgcDIpKTtcbiAgICB9LFxuICAgIHN0b3A6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aGlzLlNMVi5jb3B5KCk7XG4gICAgICAgIHRoaXMubm9kZS55ID0gMDtcbiAgICB9LFxufSk7XG4iXX0=
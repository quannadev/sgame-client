
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sieuxe/SieuXeReel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2860cvS59Co5TTs1MoU1BF', 'SieuXeReel');
// scripts/sieuxe/SieuXeReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    HeightReel: 300
  },
  onLoad: function onLoad() {
    this.HeightReel = this.node.height - 5;
  },
  init: function init(obj, data) {
    var _this = this;

    this.SXV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.SXV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('SieuXeItem');
      icon.init(self.SXV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index, isFast) {
    var timeDelay = 0.2;
    var timeMove = 2;

    if (this.SXV.isFast) {
      timeDelay = 0.1;
      timeMove = 0.2;
    }

    this.node.stopAllActions();
    var d = cc.moveTo(timeMove, cc.v2(this.node.x, -(this.node.height - this.HeightReel))).easing(cc.easeInOut(0.5));
    var p2 = cc.callFunc(function () {
      if (index === 0) {
        this.SXV.copy();
      }

      this.node.y = 0;
    }, this);

    if (index === 4) {
      var EF = cc.callFunc(function () {
        this.node.y = 0;
        this.SXV.runActionWon();
      }, this);
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, EF));
    } else {
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, p2));
    }
  },
  stop: function stop() {
    this.node.stopAllActions();
    this.SXV.copy();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2lldXhlXFxTaWV1WGVSZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiSGVpZ2h0UmVlbCIsIm9uTG9hZCIsIm5vZGUiLCJoZWlnaHQiLCJpbml0Iiwib2JqIiwiZGF0YSIsIlNYViIsImljb25zIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtVHlwZSIsImluZGV4IiwiaWNvbiIsImluc3RhbnRpYXRlIiwiaWNvblByZWZhYiIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwidGhlbiIsInJlc3VsdCIsInNwaW4iLCJpc0Zhc3QiLCJ0aW1lRGVsYXkiLCJ0aW1lTW92ZSIsInN0b3BBbGxBY3Rpb25zIiwiZCIsIm1vdmVUbyIsInYyIiwieCIsImVhc2luZyIsImVhc2VJbk91dCIsInAyIiwiY2FsbEZ1bmMiLCJjb3B5IiwieSIsIkVGIiwicnVuQWN0aW9uV29uIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFO0FBREosR0FIUDtBQU1MQyxFQUFBQSxNQU5LLG9CQU1JO0FBQ0wsU0FBS0QsVUFBTCxHQUFrQixLQUFLRSxJQUFMLENBQVVDLE1BQVYsR0FBaUIsQ0FBbkM7QUFDSCxHQVJJO0FBU0xDLEVBQUFBLElBVEssZ0JBU0FDLEdBVEEsRUFTS0MsSUFUTCxFQVNVO0FBQUE7O0FBQ1gsU0FBS0MsR0FBTCxHQUFXRixHQUFYO0FBQ0EsU0FBS0csS0FBTCxHQUFhLEVBQWI7QUFDQSxRQUFJQyxJQUFJLEdBQUksSUFBWjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBU0MsUUFBVCxFQUFtQkMsS0FBbkIsRUFBeUI7QUFDMUMsVUFBSUMsSUFBSSxHQUFHbkIsRUFBRSxDQUFDb0IsV0FBSCxDQUFlUCxJQUFJLENBQUNGLEdBQUwsQ0FBU1UsVUFBeEIsQ0FBWDtBQUNBUixNQUFBQSxJQUFJLENBQUNQLElBQUwsQ0FBVWdCLFFBQVYsQ0FBbUJILElBQW5CO0FBQ0FBLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDSSxZQUFMLENBQWtCLFlBQWxCLENBQVA7QUFDQUosTUFBQUEsSUFBSSxDQUFDWCxJQUFMLENBQVVLLElBQUksQ0FBQ0YsR0FBZixFQUFvQk0sUUFBcEI7QUFDQSxhQUFPRSxJQUFQO0FBQ0gsS0FOVyxDQUFaLEVBTUlLLElBTkosQ0FNUyxVQUFBQyxNQUFNLEVBQUk7QUFDWCxNQUFBLEtBQUksQ0FBQ2IsS0FBTCxHQUFhYSxNQUFiO0FBQ0gsS0FSTDtBQVNILEdBdEJJO0FBdUJMQyxFQUFBQSxJQUFJLEVBQUUsY0FBU1IsS0FBVCxFQUFnQlMsTUFBaEIsRUFBdUI7QUFDekIsUUFBSUMsU0FBUyxHQUFHLEdBQWhCO0FBQ0EsUUFBSUMsUUFBUSxHQUFJLENBQWhCOztBQUNBLFFBQUssS0FBS2xCLEdBQUwsQ0FBU2dCLE1BQWQsRUFBcUI7QUFDakJDLE1BQUFBLFNBQVMsR0FBRyxHQUFaO0FBQ0FDLE1BQUFBLFFBQVEsR0FBSSxHQUFaO0FBQ0g7O0FBRUQsU0FBS3ZCLElBQUwsQ0FBVXdCLGNBQVY7QUFDQSxRQUFJQyxDQUFDLEdBQUcvQixFQUFFLENBQUNnQyxNQUFILENBQVVILFFBQVYsRUFBb0I3QixFQUFFLENBQUNpQyxFQUFILENBQU0sS0FBSzNCLElBQUwsQ0FBVTRCLENBQWhCLEVBQWtCLEVBQUUsS0FBSzVCLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFLSCxVQUF6QixDQUFsQixDQUFwQixFQUE2RStCLE1BQTdFLENBQW9GbkMsRUFBRSxDQUFDb0MsU0FBSCxDQUFhLEdBQWIsQ0FBcEYsQ0FBUjtBQUNBLFFBQUlDLEVBQUUsR0FBR3JDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLFVBQUlwQixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLGFBQUtQLEdBQUwsQ0FBUzRCLElBQVQ7QUFDSDs7QUFDRCxXQUFLakMsSUFBTCxDQUFVa0MsQ0FBVixHQUFjLENBQWQ7QUFDSCxLQUxRLEVBS04sSUFMTSxDQUFUOztBQU1BLFFBQUl0QixLQUFLLEtBQUssQ0FBZCxFQUFnQjtBQUNaLFVBQUl1QixFQUFFLEdBQUd6QyxFQUFFLENBQUNzQyxRQUFILENBQVksWUFBVztBQUM1QixhQUFLaEMsSUFBTCxDQUFVa0MsQ0FBVixHQUFjLENBQWQ7QUFDQSxhQUFLN0IsR0FBTCxDQUFTK0IsWUFBVDtBQUNILE9BSFEsRUFHTixJQUhNLENBQVQ7QUFJQSxXQUFLcEMsSUFBTCxDQUFVcUMsU0FBVixDQUFvQjNDLEVBQUUsQ0FBQzRDLFFBQUgsQ0FBWTVDLEVBQUUsQ0FBQzZDLFNBQUgsQ0FBYTNCLEtBQUssR0FBQ1UsU0FBbkIsQ0FBWixFQUEyQ0csQ0FBM0MsRUFBOENVLEVBQTlDLENBQXBCO0FBQ0gsS0FORCxNQU1NO0FBQ0YsV0FBS25DLElBQUwsQ0FBVXFDLFNBQVYsQ0FBb0IzQyxFQUFFLENBQUM0QyxRQUFILENBQVk1QyxFQUFFLENBQUM2QyxTQUFILENBQWEzQixLQUFLLEdBQUNVLFNBQW5CLENBQVosRUFBMkNHLENBQTNDLEVBQThDTSxFQUE5QyxDQUFwQjtBQUNIO0FBRUosR0FqREk7QUFrRExTLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUt4QyxJQUFMLENBQVV3QixjQUFWO0FBQ0EsU0FBS25CLEdBQUwsQ0FBUzRCLElBQVQ7QUFDQSxTQUFLakMsSUFBTCxDQUFVa0MsQ0FBVixHQUFjLENBQWQ7QUFDSDtBQXRESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIEhlaWdodFJlZWw6IDMwMFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLkhlaWdodFJlZWwgPSB0aGlzLm5vZGUuaGVpZ2h0LTU7XHJcbiAgICB9LFxyXG4gICAgaW5pdChvYmosIGRhdGEpe1xyXG4gICAgICAgIHRoaXMuU1hWID0gb2JqO1xyXG4gICAgICAgIHRoaXMuaWNvbnMgPSBbXTtcclxuICAgICAgICBsZXQgc2VsZiAgPSB0aGlzO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKGl0ZW1UeXBlLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gY2MuaW5zdGFudGlhdGUoc2VsZi5TWFYuaWNvblByZWZhYik7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcclxuICAgICAgICAgICAgaWNvbiA9IGljb24uZ2V0Q29tcG9uZW50KCdTaWV1WGVJdGVtJyk7XHJcbiAgICAgICAgICAgIGljb24uaW5pdChzZWxmLlNYViwgaXRlbVR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcclxuICAgICAgICB9KSkudGhlbihyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pY29ucyA9IHJlc3VsdDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc3BpbjogZnVuY3Rpb24oaW5kZXgsIGlzRmFzdCl7XHJcbiAgICAgICAgbGV0IHRpbWVEZWxheSA9IDAuMjtcclxuICAgICAgICBsZXQgdGltZU1vdmUgID0gMjtcclxuICAgICAgICBpZiAoIHRoaXMuU1hWLmlzRmFzdCl7XHJcbiAgICAgICAgICAgIHRpbWVEZWxheSA9IDAuMTtcclxuICAgICAgICAgICAgdGltZU1vdmUgID0gMC4yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAgICAgbGV0IGQgPSBjYy5tb3ZlVG8odGltZU1vdmUsIGNjLnYyKHRoaXMubm9kZS54LC0odGhpcy5ub2RlLmhlaWdodC0gdGhpcy5IZWlnaHRSZWVsKSkpLmVhc2luZyhjYy5lYXNlSW5PdXQoMC41KSk7XHJcbiAgICAgICAgbGV0IHAyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TWFYuY29weSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IDQpe1xyXG4gICAgICAgICAgICBsZXQgRUYgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuU1hWLnJ1bkFjdGlvbldvbigpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqdGltZURlbGF5KSwgZCwgRUYgKSk7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCp0aW1lRGVsYXkpLCBkLCBwMikpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9LFxyXG4gICAgc3RvcDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLlNYVi5jb3B5KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
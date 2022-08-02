
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/ZeusReel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4300e0hteBBP5YX06aNN+Dp', 'ZeusReel');
// scripts/zeus/ZeusReel.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, data) {
    var _this = this;

    this.SLV = obj;
    this.icons = [];
    var self = this;
    Promise.all(data.map(function (itemType, index) {
      var icon = cc.instantiate(self.SLV.iconPrefab);
      self.node.addChild(icon);
      icon = icon.getComponent('ZeusItem');
      icon.init(self.SLV, itemType);
      return icon;
    })).then(function (result) {
      _this.icons = result;
    });
  },
  spin: function spin(index) {
    this.node.stopAllActions();
    var timeDelay = 0.4;
    var timeMove = 2;

    if (this.SLV.isFast) {
      timeDelay = 0.2;
      timeMove = 1;
    }

    var d = cc.moveTo(timeMove, cc.v2(this.node.x, -(this.node.height - 420))).easing(cc.easeInOut(1));
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
      this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, EF));
    } else this.node.runAction(cc.sequence(cc.delayTime(index * timeDelay), d, p2));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcWmV1c1JlZWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbml0Iiwib2JqIiwiZGF0YSIsIlNMViIsImljb25zIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtVHlwZSIsImluZGV4IiwiaWNvbiIsImluc3RhbnRpYXRlIiwiaWNvblByZWZhYiIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bHQiLCJzcGluIiwic3RvcEFsbEFjdGlvbnMiLCJ0aW1lRGVsYXkiLCJ0aW1lTW92ZSIsImlzRmFzdCIsImQiLCJtb3ZlVG8iLCJ2MiIsIngiLCJoZWlnaHQiLCJlYXNpbmciLCJlYXNlSW5PdXQiLCJwMiIsImNhbGxGdW5jIiwiY29weSIsInkiLCJFRiIsInJ1bkFjdGlvbldvbiIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsSUFQSyxnQkFPQUMsR0FQQSxFQU9LQyxJQVBMLEVBT1U7QUFBQTs7QUFDWCxTQUFLQyxHQUFMLEdBQVdGLEdBQVg7QUFDQSxTQUFLRyxLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUF5QjtBQUMxQyxVQUFJQyxJQUFJLEdBQUdmLEVBQUUsQ0FBQ2dCLFdBQUgsQ0FBZVAsSUFBSSxDQUFDRixHQUFMLENBQVNVLFVBQXhCLENBQVg7QUFDQVIsTUFBQUEsSUFBSSxDQUFDUyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJKLElBQW5CO0FBQ0FBLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDSyxZQUFMLENBQWtCLFVBQWxCLENBQVA7QUFDQUwsTUFBQUEsSUFBSSxDQUFDWCxJQUFMLENBQVVLLElBQUksQ0FBQ0YsR0FBZixFQUFvQk0sUUFBcEI7QUFDQSxhQUFPRSxJQUFQO0FBQ0gsS0FOVyxDQUFaLEVBTUlNLElBTkosQ0FNUyxVQUFBQyxNQUFNLEVBQUk7QUFDWCxNQUFBLEtBQUksQ0FBQ2QsS0FBTCxHQUFhYyxNQUFiO0FBQ0gsS0FSTDtBQVNILEdBcEJJO0FBcUJMQyxFQUFBQSxJQUFJLEVBQUUsY0FBU1QsS0FBVCxFQUFlO0FBQ2pCLFNBQUtJLElBQUwsQ0FBVU0sY0FBVjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxHQUFoQjtBQUNBLFFBQUlDLFFBQVEsR0FBSSxDQUFoQjs7QUFDQSxRQUFLLEtBQUtuQixHQUFMLENBQVNvQixNQUFkLEVBQXFCO0FBQ2pCRixNQUFBQSxTQUFTLEdBQUcsR0FBWjtBQUNBQyxNQUFBQSxRQUFRLEdBQUksQ0FBWjtBQUNIOztBQUNELFFBQUlFLENBQUMsR0FBRzVCLEVBQUUsQ0FBQzZCLE1BQUgsQ0FBVUgsUUFBVixFQUFvQjFCLEVBQUUsQ0FBQzhCLEVBQUgsQ0FBTSxLQUFLWixJQUFMLENBQVVhLENBQWhCLEVBQWtCLEVBQUUsS0FBS2IsSUFBTCxDQUFVYyxNQUFWLEdBQWlCLEdBQW5CLENBQWxCLENBQXBCLEVBQWdFQyxNQUFoRSxDQUF1RWpDLEVBQUUsQ0FBQ2tDLFNBQUgsQ0FBYSxDQUFiLENBQXZFLENBQVI7QUFDQSxRQUFJQyxFQUFFLEdBQUduQyxFQUFFLENBQUNvQyxRQUFILENBQVksWUFBVztBQUM1QixVQUFJdEIsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixhQUFLUCxHQUFMLENBQVM4QixJQUFUO0FBQ0g7O0FBQ0QsV0FBS25CLElBQUwsQ0FBVW9CLENBQVYsR0FBYyxDQUFkO0FBQ0gsS0FMUSxFQUtOLElBTE0sQ0FBVDs7QUFPQSxRQUFJeEIsS0FBSyxLQUFLLENBQWQsRUFBZ0I7QUFDWixVQUFJeUIsRUFBRSxHQUFHdkMsRUFBRSxDQUFDb0MsUUFBSCxDQUFZLFlBQVc7QUFDNUIsYUFBS2xCLElBQUwsQ0FBVW9CLENBQVYsR0FBYyxDQUFkO0FBQ0EsYUFBSy9CLEdBQUwsQ0FBU2lDLFlBQVQ7QUFDSCxPQUhRLEVBR04sSUFITSxDQUFUO0FBSUEsV0FBS3RCLElBQUwsQ0FBVXVCLFNBQVYsQ0FBb0J6QyxFQUFFLENBQUMwQyxRQUFILENBQVkxQyxFQUFFLENBQUMyQyxTQUFILENBQWE3QixLQUFLLEdBQUNXLFNBQW5CLENBQVosRUFBMkNHLENBQTNDLEVBQThDVyxFQUE5QyxDQUFwQjtBQUNILEtBTkQsTUFPSSxLQUFLckIsSUFBTCxDQUFVdUIsU0FBVixDQUFvQnpDLEVBQUUsQ0FBQzBDLFFBQUgsQ0FBWTFDLEVBQUUsQ0FBQzJDLFNBQUgsQ0FBYTdCLEtBQUssR0FBQ1csU0FBbkIsQ0FBWixFQUEyQ0csQ0FBM0MsRUFBOENPLEVBQTlDLENBQXBCO0FBQ1AsR0E3Q0k7QUE4Q0xTLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUsxQixJQUFMLENBQVVNLGNBQVY7QUFDQSxTQUFLakIsR0FBTCxDQUFTOEIsSUFBVDtBQUNBLFNBQUtuQixJQUFMLENBQVVvQixDQUFWLEdBQWMsQ0FBZDtBQUNIO0FBbERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgaW5pdChvYmosIGRhdGEpe1xyXG4gICAgICAgIHRoaXMuU0xWID0gb2JqO1xyXG4gICAgICAgIHRoaXMuaWNvbnMgPSBbXTtcclxuICAgICAgICB2YXIgc2VsZiAgPSB0aGlzO1xyXG4gICAgICAgIFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKGl0ZW1UeXBlLCBpbmRleCl7XHJcbiAgICAgICAgICAgIGxldCBpY29uID0gY2MuaW5zdGFudGlhdGUoc2VsZi5TTFYuaWNvblByZWZhYik7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcclxuICAgICAgICAgICAgaWNvbiA9IGljb24uZ2V0Q29tcG9uZW50KCdaZXVzSXRlbScpO1xyXG4gICAgICAgICAgICBpY29uLmluaXQoc2VsZi5TTFYsIGl0ZW1UeXBlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGljb247XHJcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWNvbnMgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNwaW46IGZ1bmN0aW9uKGluZGV4KXtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICBsZXQgdGltZURlbGF5ID0gMC40O1xyXG4gICAgICAgIGxldCB0aW1lTW92ZSAgPSAyO1xyXG4gICAgICAgIGlmICggdGhpcy5TTFYuaXNGYXN0KXtcclxuICAgICAgICAgICAgdGltZURlbGF5ID0gMC4yO1xyXG4gICAgICAgICAgICB0aW1lTW92ZSAgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZCA9IGNjLm1vdmVUbyh0aW1lTW92ZSwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LTQyMCkpKS5lYXNpbmcoY2MuZWFzZUluT3V0KDEpKTtcclxuICAgICAgICB2YXIgcDIgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNMVi5jb3B5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IDQpe1xyXG4gICAgICAgICAgICB2YXIgRUYgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS55ID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuU0xWLnJ1bkFjdGlvbldvbigpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqdGltZURlbGF5KSwgZCwgRUYgKSk7XHJcbiAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KnRpbWVEZWxheSksIGQsIHAyKSk7XHJcbiAgICB9LFxyXG4gICAgc3RvcDogZnVuY3Rpb24oKXtcclxuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcclxuICAgICAgICB0aGlzLlNMVi5jb3B5KCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
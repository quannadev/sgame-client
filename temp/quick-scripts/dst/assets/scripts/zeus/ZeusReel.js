
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3pldXMvWmV1c1JlZWwuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbml0Iiwib2JqIiwiZGF0YSIsIlNMViIsImljb25zIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtVHlwZSIsImluZGV4IiwiaWNvbiIsImluc3RhbnRpYXRlIiwiaWNvblByZWZhYiIsIm5vZGUiLCJhZGRDaGlsZCIsImdldENvbXBvbmVudCIsInRoZW4iLCJyZXN1bHQiLCJzcGluIiwic3RvcEFsbEFjdGlvbnMiLCJ0aW1lRGVsYXkiLCJ0aW1lTW92ZSIsImlzRmFzdCIsImQiLCJtb3ZlVG8iLCJ2MiIsIngiLCJoZWlnaHQiLCJlYXNpbmciLCJlYXNlSW5PdXQiLCJwMiIsImNhbGxGdW5jIiwiY29weSIsInkiLCJFRiIsInJ1bkFjdGlvbldvbiIsInJ1bkFjdGlvbiIsInNlcXVlbmNlIiwiZGVsYXlUaW1lIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTEMsRUFBQUEsSUFQSyxnQkFPQUMsR0FQQSxFQU9LQyxJQVBMLEVBT1U7QUFBQTs7QUFDWCxTQUFLQyxHQUFMLEdBQVdGLEdBQVg7QUFDQSxTQUFLRyxLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUlDLElBQUksR0FBSSxJQUFaO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxJQUFJLENBQUNNLEdBQUwsQ0FBUyxVQUFTQyxRQUFULEVBQW1CQyxLQUFuQixFQUF5QjtBQUMxQyxVQUFJQyxJQUFJLEdBQUdmLEVBQUUsQ0FBQ2dCLFdBQUgsQ0FBZVAsSUFBSSxDQUFDRixHQUFMLENBQVNVLFVBQXhCLENBQVg7QUFDQVIsTUFBQUEsSUFBSSxDQUFDUyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJKLElBQW5CO0FBQ0FBLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDSyxZQUFMLENBQWtCLFVBQWxCLENBQVA7QUFDQUwsTUFBQUEsSUFBSSxDQUFDWCxJQUFMLENBQVVLLElBQUksQ0FBQ0YsR0FBZixFQUFvQk0sUUFBcEI7QUFDQSxhQUFPRSxJQUFQO0FBQ0gsS0FOVyxDQUFaLEVBTUlNLElBTkosQ0FNUyxVQUFBQyxNQUFNLEVBQUk7QUFDWCxNQUFBLEtBQUksQ0FBQ2QsS0FBTCxHQUFhYyxNQUFiO0FBQ0gsS0FSTDtBQVNILEdBcEJJO0FBcUJMQyxFQUFBQSxJQUFJLEVBQUUsY0FBU1QsS0FBVCxFQUFlO0FBQ2pCLFNBQUtJLElBQUwsQ0FBVU0sY0FBVjtBQUNBLFFBQUlDLFNBQVMsR0FBRyxHQUFoQjtBQUNBLFFBQUlDLFFBQVEsR0FBSSxDQUFoQjs7QUFDQSxRQUFLLEtBQUtuQixHQUFMLENBQVNvQixNQUFkLEVBQXFCO0FBQ2pCRixNQUFBQSxTQUFTLEdBQUcsR0FBWjtBQUNBQyxNQUFBQSxRQUFRLEdBQUksQ0FBWjtBQUNIOztBQUNELFFBQUlFLENBQUMsR0FBRzVCLEVBQUUsQ0FBQzZCLE1BQUgsQ0FBVUgsUUFBVixFQUFvQjFCLEVBQUUsQ0FBQzhCLEVBQUgsQ0FBTSxLQUFLWixJQUFMLENBQVVhLENBQWhCLEVBQWtCLEVBQUUsS0FBS2IsSUFBTCxDQUFVYyxNQUFWLEdBQWlCLEdBQW5CLENBQWxCLENBQXBCLEVBQWdFQyxNQUFoRSxDQUF1RWpDLEVBQUUsQ0FBQ2tDLFNBQUgsQ0FBYSxDQUFiLENBQXZFLENBQVI7QUFDQSxRQUFJQyxFQUFFLEdBQUduQyxFQUFFLENBQUNvQyxRQUFILENBQVksWUFBVztBQUM1QixVQUFJdEIsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixhQUFLUCxHQUFMLENBQVM4QixJQUFUO0FBQ0g7O0FBQ0QsV0FBS25CLElBQUwsQ0FBVW9CLENBQVYsR0FBYyxDQUFkO0FBQ0gsS0FMUSxFQUtOLElBTE0sQ0FBVDs7QUFPQSxRQUFJeEIsS0FBSyxLQUFLLENBQWQsRUFBZ0I7QUFDWixVQUFJeUIsRUFBRSxHQUFHdkMsRUFBRSxDQUFDb0MsUUFBSCxDQUFZLFlBQVc7QUFDNUIsYUFBS2xCLElBQUwsQ0FBVW9CLENBQVYsR0FBYyxDQUFkO0FBQ0EsYUFBSy9CLEdBQUwsQ0FBU2lDLFlBQVQ7QUFDSCxPQUhRLEVBR04sSUFITSxDQUFUO0FBSUEsV0FBS3RCLElBQUwsQ0FBVXVCLFNBQVYsQ0FBb0J6QyxFQUFFLENBQUMwQyxRQUFILENBQVkxQyxFQUFFLENBQUMyQyxTQUFILENBQWE3QixLQUFLLEdBQUNXLFNBQW5CLENBQVosRUFBMkNHLENBQTNDLEVBQThDVyxFQUE5QyxDQUFwQjtBQUNILEtBTkQsTUFPSSxLQUFLckIsSUFBTCxDQUFVdUIsU0FBVixDQUFvQnpDLEVBQUUsQ0FBQzBDLFFBQUgsQ0FBWTFDLEVBQUUsQ0FBQzJDLFNBQUgsQ0FBYTdCLEtBQUssR0FBQ1csU0FBbkIsQ0FBWixFQUEyQ0csQ0FBM0MsRUFBOENPLEVBQTlDLENBQXBCO0FBQ1AsR0E3Q0k7QUE4Q0xTLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUsxQixJQUFMLENBQVVNLGNBQVY7QUFDQSxTQUFLakIsR0FBTCxDQUFTOEIsSUFBVDtBQUNBLFNBQUtuQixJQUFMLENBQVVvQixDQUFWLEdBQWMsQ0FBZDtBQUNIO0FBbERJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgIH0sXG5cbiAgICBpbml0KG9iaiwgZGF0YSl7XG4gICAgICAgIHRoaXMuU0xWID0gb2JqO1xuICAgICAgICB0aGlzLmljb25zID0gW107XG4gICAgICAgIHZhciBzZWxmICA9IHRoaXM7XG4gICAgICAgIFByb21pc2UuYWxsKGRhdGEubWFwKGZ1bmN0aW9uKGl0ZW1UeXBlLCBpbmRleCl7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGNjLmluc3RhbnRpYXRlKHNlbGYuU0xWLmljb25QcmVmYWIpO1xuICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGljb24pO1xuICAgICAgICAgICAgaWNvbiA9IGljb24uZ2V0Q29tcG9uZW50KCdaZXVzSXRlbScpO1xuICAgICAgICAgICAgaWNvbi5pbml0KHNlbGYuU0xWLCBpdGVtVHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25zID0gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzcGluOiBmdW5jdGlvbihpbmRleCl7XG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBsZXQgdGltZURlbGF5ID0gMC40O1xuICAgICAgICBsZXQgdGltZU1vdmUgID0gMjtcbiAgICAgICAgaWYgKCB0aGlzLlNMVi5pc0Zhc3Qpe1xuICAgICAgICAgICAgdGltZURlbGF5ID0gMC4yO1xuICAgICAgICAgICAgdGltZU1vdmUgID0gMTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgZCA9IGNjLm1vdmVUbyh0aW1lTW92ZSwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LTQyMCkpKS5lYXNpbmcoY2MuZWFzZUluT3V0KDEpKTtcbiAgICAgICAgdmFyIHAyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNMVi5jb3B5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IDA7XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gNCl7XG4gICAgICAgICAgICB2YXIgRUYgPSBjYy5jYWxsRnVuYyhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUueSA9IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5TTFYucnVuQWN0aW9uV29uKCk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KnRpbWVEZWxheSksIGQsIEVGICkpO1xuICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKGluZGV4KnRpbWVEZWxheSksIGQsIHAyKSk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5TTFYuY29weSgpO1xuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XG4gICAgfSxcbn0pO1xuIl19
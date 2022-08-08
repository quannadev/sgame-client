
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpZXV4ZS9TaWV1WGVSZWVsLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiSGVpZ2h0UmVlbCIsIm9uTG9hZCIsIm5vZGUiLCJoZWlnaHQiLCJpbml0Iiwib2JqIiwiZGF0YSIsIlNYViIsImljb25zIiwic2VsZiIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJpdGVtVHlwZSIsImluZGV4IiwiaWNvbiIsImluc3RhbnRpYXRlIiwiaWNvblByZWZhYiIsImFkZENoaWxkIiwiZ2V0Q29tcG9uZW50IiwidGhlbiIsInJlc3VsdCIsInNwaW4iLCJpc0Zhc3QiLCJ0aW1lRGVsYXkiLCJ0aW1lTW92ZSIsInN0b3BBbGxBY3Rpb25zIiwiZCIsIm1vdmVUbyIsInYyIiwieCIsImVhc2luZyIsImVhc2VJbk91dCIsInAyIiwiY2FsbEZ1bmMiLCJjb3B5IiwieSIsIkVGIiwicnVuQWN0aW9uV29uIiwicnVuQWN0aW9uIiwic2VxdWVuY2UiLCJkZWxheVRpbWUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsVUFBVSxFQUFFO0FBREosR0FIUDtBQU1MQyxFQUFBQSxNQU5LLG9CQU1JO0FBQ0wsU0FBS0QsVUFBTCxHQUFrQixLQUFLRSxJQUFMLENBQVVDLE1BQVYsR0FBaUIsQ0FBbkM7QUFDSCxHQVJJO0FBU0xDLEVBQUFBLElBVEssZ0JBU0FDLEdBVEEsRUFTS0MsSUFUTCxFQVNVO0FBQUE7O0FBQ1gsU0FBS0MsR0FBTCxHQUFXRixHQUFYO0FBQ0EsU0FBS0csS0FBTCxHQUFhLEVBQWI7QUFDQSxRQUFJQyxJQUFJLEdBQUksSUFBWjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsSUFBSSxDQUFDTSxHQUFMLENBQVMsVUFBU0MsUUFBVCxFQUFtQkMsS0FBbkIsRUFBeUI7QUFDMUMsVUFBSUMsSUFBSSxHQUFHbkIsRUFBRSxDQUFDb0IsV0FBSCxDQUFlUCxJQUFJLENBQUNGLEdBQUwsQ0FBU1UsVUFBeEIsQ0FBWDtBQUNBUixNQUFBQSxJQUFJLENBQUNQLElBQUwsQ0FBVWdCLFFBQVYsQ0FBbUJILElBQW5CO0FBQ0FBLE1BQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDSSxZQUFMLENBQWtCLFlBQWxCLENBQVA7QUFDQUosTUFBQUEsSUFBSSxDQUFDWCxJQUFMLENBQVVLLElBQUksQ0FBQ0YsR0FBZixFQUFvQk0sUUFBcEI7QUFDQSxhQUFPRSxJQUFQO0FBQ0gsS0FOVyxDQUFaLEVBTUlLLElBTkosQ0FNUyxVQUFBQyxNQUFNLEVBQUk7QUFDWCxNQUFBLEtBQUksQ0FBQ2IsS0FBTCxHQUFhYSxNQUFiO0FBQ0gsS0FSTDtBQVNILEdBdEJJO0FBdUJMQyxFQUFBQSxJQUFJLEVBQUUsY0FBU1IsS0FBVCxFQUFnQlMsTUFBaEIsRUFBdUI7QUFDekIsUUFBSUMsU0FBUyxHQUFHLEdBQWhCO0FBQ0EsUUFBSUMsUUFBUSxHQUFJLENBQWhCOztBQUNBLFFBQUssS0FBS2xCLEdBQUwsQ0FBU2dCLE1BQWQsRUFBcUI7QUFDakJDLE1BQUFBLFNBQVMsR0FBRyxHQUFaO0FBQ0FDLE1BQUFBLFFBQVEsR0FBSSxHQUFaO0FBQ0g7O0FBRUQsU0FBS3ZCLElBQUwsQ0FBVXdCLGNBQVY7QUFDQSxRQUFJQyxDQUFDLEdBQUcvQixFQUFFLENBQUNnQyxNQUFILENBQVVILFFBQVYsRUFBb0I3QixFQUFFLENBQUNpQyxFQUFILENBQU0sS0FBSzNCLElBQUwsQ0FBVTRCLENBQWhCLEVBQWtCLEVBQUUsS0FBSzVCLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFLSCxVQUF6QixDQUFsQixDQUFwQixFQUE2RStCLE1BQTdFLENBQW9GbkMsRUFBRSxDQUFDb0MsU0FBSCxDQUFhLEdBQWIsQ0FBcEYsQ0FBUjtBQUNBLFFBQUlDLEVBQUUsR0FBR3JDLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWSxZQUFXO0FBQzVCLFVBQUlwQixLQUFLLEtBQUssQ0FBZCxFQUFpQjtBQUNiLGFBQUtQLEdBQUwsQ0FBUzRCLElBQVQ7QUFDSDs7QUFDRCxXQUFLakMsSUFBTCxDQUFVa0MsQ0FBVixHQUFjLENBQWQ7QUFDSCxLQUxRLEVBS04sSUFMTSxDQUFUOztBQU1BLFFBQUl0QixLQUFLLEtBQUssQ0FBZCxFQUFnQjtBQUNaLFVBQUl1QixFQUFFLEdBQUd6QyxFQUFFLENBQUNzQyxRQUFILENBQVksWUFBVztBQUM1QixhQUFLaEMsSUFBTCxDQUFVa0MsQ0FBVixHQUFjLENBQWQ7QUFDQSxhQUFLN0IsR0FBTCxDQUFTK0IsWUFBVDtBQUNILE9BSFEsRUFHTixJQUhNLENBQVQ7QUFJQSxXQUFLcEMsSUFBTCxDQUFVcUMsU0FBVixDQUFvQjNDLEVBQUUsQ0FBQzRDLFFBQUgsQ0FBWTVDLEVBQUUsQ0FBQzZDLFNBQUgsQ0FBYTNCLEtBQUssR0FBQ1UsU0FBbkIsQ0FBWixFQUEyQ0csQ0FBM0MsRUFBOENVLEVBQTlDLENBQXBCO0FBQ0gsS0FORCxNQU1NO0FBQ0YsV0FBS25DLElBQUwsQ0FBVXFDLFNBQVYsQ0FBb0IzQyxFQUFFLENBQUM0QyxRQUFILENBQVk1QyxFQUFFLENBQUM2QyxTQUFILENBQWEzQixLQUFLLEdBQUNVLFNBQW5CLENBQVosRUFBMkNHLENBQTNDLEVBQThDTSxFQUE5QyxDQUFwQjtBQUNIO0FBRUosR0FqREk7QUFrRExTLEVBQUFBLElBQUksRUFBRSxnQkFBVTtBQUNaLFNBQUt4QyxJQUFMLENBQVV3QixjQUFWO0FBQ0EsU0FBS25CLEdBQUwsQ0FBUzRCLElBQVQ7QUFDQSxTQUFLakMsSUFBTCxDQUFVa0MsQ0FBVixHQUFjLENBQWQ7QUFDSDtBQXRESSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBIZWlnaHRSZWVsOiAzMDBcbiAgICB9LFxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5IZWlnaHRSZWVsID0gdGhpcy5ub2RlLmhlaWdodC01O1xuICAgIH0sXG4gICAgaW5pdChvYmosIGRhdGEpe1xuICAgICAgICB0aGlzLlNYViA9IG9iajtcbiAgICAgICAgdGhpcy5pY29ucyA9IFtdO1xuICAgICAgICBsZXQgc2VsZiAgPSB0aGlzO1xuICAgICAgICBQcm9taXNlLmFsbChkYXRhLm1hcChmdW5jdGlvbihpdGVtVHlwZSwgaW5kZXgpe1xuICAgICAgICAgICAgbGV0IGljb24gPSBjYy5pbnN0YW50aWF0ZShzZWxmLlNYVi5pY29uUHJlZmFiKTtcbiAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChpY29uKTtcbiAgICAgICAgICAgIGljb24gPSBpY29uLmdldENvbXBvbmVudCgnU2lldVhlSXRlbScpO1xuICAgICAgICAgICAgaWNvbi5pbml0KHNlbGYuU1hWLCBpdGVtVHlwZSk7XG4gICAgICAgICAgICByZXR1cm4gaWNvbjtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmljb25zID0gcmVzdWx0O1xuICAgICAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzcGluOiBmdW5jdGlvbihpbmRleCwgaXNGYXN0KXtcbiAgICAgICAgbGV0IHRpbWVEZWxheSA9IDAuMjtcbiAgICAgICAgbGV0IHRpbWVNb3ZlICA9IDI7XG4gICAgICAgIGlmICggdGhpcy5TWFYuaXNGYXN0KXtcbiAgICAgICAgICAgIHRpbWVEZWxheSA9IDAuMTtcbiAgICAgICAgICAgIHRpbWVNb3ZlICA9IDAuMjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubm9kZS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBsZXQgZCA9IGNjLm1vdmVUbyh0aW1lTW92ZSwgY2MudjIodGhpcy5ub2RlLngsLSh0aGlzLm5vZGUuaGVpZ2h0LSB0aGlzLkhlaWdodFJlZWwpKSkuZWFzaW5nKGNjLmVhc2VJbk91dCgwLjUpKTtcbiAgICAgICAgbGV0IHAyID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLlNYVi5jb3B5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm5vZGUueSA9IDA7XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBpZiAoaW5kZXggPT09IDQpe1xuICAgICAgICAgICAgbGV0IEVGID0gY2MuY2FsbEZ1bmMoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuU1hWLnJ1bkFjdGlvbldvbigpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZShpbmRleCp0aW1lRGVsYXkpLCBkLCBFRiApKTtcbiAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoaW5kZXgqdGltZURlbGF5KSwgZCwgcDIpKTtcbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5TWFYuY29weSgpO1xuICAgICAgICB0aGlzLm5vZGUueSA9IDA7XG4gICAgfSxcbn0pO1xuIl19
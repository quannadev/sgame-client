
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sieuxe/UISieuXeRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30fc2XOcLhDeqlWuYNuog4D', 'UISieuXeRank');
// scripts/sieuxe/UISieuXeRank.js

"use strict";

var Listview = require('Listview');

var Helper = require('Helper');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview,
    allRank: cc.Sprite,
    allHu: cc.Sprite,
    listRank: [],
    listHu: []
  },
  onEnable: function onEnable() {
    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank, idx);
  },
  eventClose: function eventClose() {
    this.back();
  },
  eventAllRank: function eventAllRank() {
    Helper.setMaterialGray(this.allRank, false);
    Helper.setMaterialGray(this.allHu, true);

    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }
  },
  eventHu: function eventHu() {
    Helper.setMaterialGray(this.allRank, true);
    Helper.setMaterialGray(this.allHu, false);

    if (this._data && this._data.items) {
      this.listHu = [];
      this.listview.numItems = this.listHu.length;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpZXV4ZS9VSVNpZXVYZVJhbmsuanMiXSwibmFtZXMiOlsiTGlzdHZpZXciLCJyZXF1aXJlIiwiSGVscGVyIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGlzdHZpZXciLCJhbGxSYW5rIiwiU3ByaXRlIiwiYWxsSHUiLCJsaXN0UmFuayIsImxpc3RIdSIsIm9uRW5hYmxlIiwiX2RhdGEiLCJpdGVtcyIsIm51bUl0ZW1zIiwibGVuZ3RoIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwicmFuayIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0IiwiZXZlbnRDbG9zZSIsImJhY2siLCJldmVudEFsbFJhbmsiLCJzZXRNYXRlcmlhbEdyYXkiLCJldmVudEh1Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFLRCxPQUFPLENBQUMsUUFBRCxDQUF4Qjs7QUFDQUUsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBRUxDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1QLFFBRE47QUFFUlEsSUFBQUEsT0FBTyxFQUFPTCxFQUFFLENBQUNNLE1BRlQ7QUFHUkMsSUFBQUEsS0FBSyxFQUFTUCxFQUFFLENBQUNNLE1BSFQ7QUFJUkUsSUFBQUEsUUFBUSxFQUFFLEVBSkY7QUFLUkMsSUFBQUEsTUFBTSxFQUFFO0FBTEEsR0FGUDtBQVNMQyxFQUFBQSxRQVRLLHNCQVNLO0FBQ04sUUFBRyxLQUFLQyxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxLQUE1QixFQUFrQztBQUM5QixXQUFLSixRQUFMLEdBQWdCLEtBQUtHLEtBQUwsQ0FBV0MsS0FBM0I7QUFDQSxXQUFLUixRQUFMLENBQWNTLFFBQWQsR0FBeUIsS0FBS0wsUUFBTCxDQUFjTSxNQUF2QztBQUNIOztBQUNELFFBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFWLElBQW9CaEIsRUFBRSxDQUFDaUIsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CaEIsRUFBRSxDQUFDaUIsVUFBdEI7QUFDSDtBQUNKLEdBakJJO0FBa0JMQyxFQUFBQSxZQWxCSyx3QkFrQlFDLElBbEJSLEVBa0JjQyxHQWxCZCxFQWtCbUI7QUFDcEIsUUFBSUMsSUFBSSxHQUFHLEtBQUtiLFFBQUwsQ0FBY1ksR0FBZCxDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQkgsSUFBSSxDQUFDSSxJQUF2QixFQUE2QkMsSUFBN0IsQ0FBa0NILElBQWxDLEVBQXdDRCxHQUF4QztBQUNILEdBckJJO0FBc0JMSyxFQUFBQSxVQXRCSyx3QkFzQlE7QUFDVCxTQUFLQyxJQUFMO0FBQ0gsR0F4Qkk7QUF5QkxDLEVBQUFBLFlBekJLLDBCQXlCVTtBQUNYNUIsSUFBQUEsTUFBTSxDQUFDNkIsZUFBUCxDQUF1QixLQUFLdkIsT0FBNUIsRUFBcUMsS0FBckM7QUFDQU4sSUFBQUEsTUFBTSxDQUFDNkIsZUFBUCxDQUF1QixLQUFLckIsS0FBNUIsRUFBbUMsSUFBbkM7O0FBQ0EsUUFBRyxLQUFLSSxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxLQUE1QixFQUFrQztBQUM5QixXQUFLSixRQUFMLEdBQWdCLEtBQUtHLEtBQUwsQ0FBV0MsS0FBM0I7QUFDQSxXQUFLUixRQUFMLENBQWNTLFFBQWQsR0FBeUIsS0FBS0wsUUFBTCxDQUFjTSxNQUF2QztBQUNIO0FBQ0osR0FoQ0k7QUFpQ0xlLEVBQUFBLE9BakNLLHFCQWlDSztBQUNOOUIsSUFBQUEsTUFBTSxDQUFDNkIsZUFBUCxDQUF1QixLQUFLdkIsT0FBNUIsRUFBcUMsSUFBckM7QUFDQU4sSUFBQUEsTUFBTSxDQUFDNkIsZUFBUCxDQUF1QixLQUFLckIsS0FBNUIsRUFBbUMsS0FBbkM7O0FBQ0EsUUFBRyxLQUFLSSxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxLQUE1QixFQUFrQztBQUM5QixXQUFLSCxNQUFMLEdBQWMsRUFBZDtBQUNBLFdBQUtMLFFBQUwsQ0FBY1MsUUFBZCxHQUF5QixLQUFLSixNQUFMLENBQVlLLE1BQXJDO0FBQ0g7QUFDSjtBQXhDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XG5jb25zdCBIZWxwZXIgICA9IHJlcXVpcmUoJ0hlbHBlcicpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxuICAgICAgICBhbGxSYW5rICAgICA6IGNjLlNwcml0ZSxcbiAgICAgICAgYWxsSHUgICAgICAgOiBjYy5TcHJpdGUsXG4gICAgICAgIGxpc3RSYW5rOiBbXSxcbiAgICAgICAgbGlzdEh1OiBbXVxuICAgIH0sXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcbiAgICAgICAgICAgIHRoaXMubGlzdFJhbmsgPSB0aGlzLl9kYXRhLml0ZW1zO1xuICAgICAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLmxhc3RaSW5kZXg7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcbiAgICAgICAgbGV0IHJhbmsgPSB0aGlzLmxpc3RSYW5rW2lkeF07XG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuaW5pdChyYW5rLCBpZHgpO1xuICAgIH0sXG4gICAgZXZlbnRDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfSxcbiAgICBldmVudEFsbFJhbmsoKSB7XG4gICAgICAgIEhlbHBlci5zZXRNYXRlcmlhbEdyYXkodGhpcy5hbGxSYW5rLCBmYWxzZSk7XG4gICAgICAgIEhlbHBlci5zZXRNYXRlcmlhbEdyYXkodGhpcy5hbGxIdSwgdHJ1ZSk7XG4gICAgICAgIGlmKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcyl7XG4gICAgICAgICAgICB0aGlzLmxpc3RSYW5rID0gdGhpcy5fZGF0YS5pdGVtcztcbiAgICAgICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmxpc3RSYW5rLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZXZlbnRIdSgpIHtcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSh0aGlzLmFsbFJhbmssIHRydWUpO1xuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KHRoaXMuYWxsSHUsIGZhbHNlKTtcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcbiAgICAgICAgICAgIHRoaXMubGlzdEh1ID0gW107XG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0SHUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
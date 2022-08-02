
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/UIKimCuongRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48a34FzAUxMT7uWTPE0cZ4M', 'UIKimCuongRank');
// scripts/kimcuong/UIKimCuongRank.js

"use strict";

var Listview = require('Listview');

var Helper = require('Helper');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview,
    lbTitle: cc.Label,
    allRank: cc.Sprite,
    allHu: cc.Sprite,
    listRank: [],
    listHu: []
  },
  onEnable: function onEnable() {
    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
      this.lbTitle.string = "Bảng Vinh Danh";
    }
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(idx, rank);
  },
  eventClose: function eventClose() {
    this.back();
  },
  eventAllRank: function eventAllRank() {
    this.lbTitle.string = "Bảng Vinh Danh";
    Helper.setMaterialGray(this.allRank, false);
    Helper.setMaterialGray(this.allHu, true);

    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }
  },
  eventHu: function eventHu() {
    this.lbTitle.string = "Lịch Sử Hũ";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXFVJS2ltQ3VvbmdSYW5rLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsIkhlbHBlciIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3IiwibGJUaXRsZSIsIkxhYmVsIiwiYWxsUmFuayIsIlNwcml0ZSIsImFsbEh1IiwibGlzdFJhbmsiLCJsaXN0SHUiLCJvbkVuYWJsZSIsIl9kYXRhIiwiaXRlbXMiLCJudW1JdGVtcyIsImxlbmd0aCIsInN0cmluZyIsIm9uTGlzdFJlbmRlciIsIml0ZW0iLCJpZHgiLCJyYW5rIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsImluaXQiLCJldmVudENsb3NlIiwiYmFjayIsImV2ZW50QWxsUmFuayIsInNldE1hdGVyaWFsR3JheSIsImV2ZW50SHUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQSxJQUFNQyxNQUFNLEdBQUtELE9BQU8sQ0FBQyxRQUFELENBQXhCOztBQUNBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBTVAsUUFETjtBQUVSUSxJQUFBQSxPQUFPLEVBQU9MLEVBQUUsQ0FBQ00sS0FGVDtBQUdSQyxJQUFBQSxPQUFPLEVBQU9QLEVBQUUsQ0FBQ1EsTUFIVDtBQUlSQyxJQUFBQSxLQUFLLEVBQVNULEVBQUUsQ0FBQ1EsTUFKVDtBQUtSRSxJQUFBQSxRQUFRLEVBQUUsRUFMRjtBQU1SQyxJQUFBQSxNQUFNLEVBQUU7QUFOQSxHQUZQO0FBVUxDLEVBQUFBLFFBVkssc0JBVUs7QUFDTixRQUFHLEtBQUtDLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdDLEtBQTVCLEVBQWtDO0FBQzlCLFdBQUtKLFFBQUwsR0FBZ0IsS0FBS0csS0FBTCxDQUFXQyxLQUEzQjtBQUNBLFdBQUtWLFFBQUwsQ0FBY1csUUFBZCxHQUF5QixLQUFLTCxRQUFMLENBQWNNLE1BQXZDO0FBQ0EsV0FBS1gsT0FBTCxDQUFhWSxNQUFiLEdBQXlCLGdCQUF6QjtBQUNIO0FBQ0osR0FoQkk7QUFpQkxDLEVBQUFBLFlBakJLLHdCQWlCUUMsSUFqQlIsRUFpQmNDLEdBakJkLEVBaUJtQjtBQUNwQixRQUFJQyxJQUFJLEdBQUcsS0FBS1gsUUFBTCxDQUFjVSxHQUFkLENBQVg7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRyxZQUFMLENBQWtCSCxJQUFJLENBQUNJLElBQXZCLEVBQTZCQyxJQUE3QixDQUFrQ0osR0FBbEMsRUFBdUNDLElBQXZDO0FBQ0gsR0FwQkk7QUFxQkxJLEVBQUFBLFVBckJLLHdCQXFCUTtBQUNULFNBQUtDLElBQUw7QUFDSCxHQXZCSTtBQXdCTEMsRUFBQUEsWUF4QkssMEJBd0JVO0FBQ1gsU0FBS3RCLE9BQUwsQ0FBYVksTUFBYixHQUF5QixnQkFBekI7QUFDQWxCLElBQUFBLE1BQU0sQ0FBQzZCLGVBQVAsQ0FBdUIsS0FBS3JCLE9BQTVCLEVBQXFDLEtBQXJDO0FBQ0FSLElBQUFBLE1BQU0sQ0FBQzZCLGVBQVAsQ0FBdUIsS0FBS25CLEtBQTVCLEVBQW1DLElBQW5DOztBQUNBLFFBQUcsS0FBS0ksS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0MsS0FBNUIsRUFBa0M7QUFDOUIsV0FBS0osUUFBTCxHQUFnQixLQUFLRyxLQUFMLENBQVdDLEtBQTNCO0FBQ0EsV0FBS1YsUUFBTCxDQUFjVyxRQUFkLEdBQXlCLEtBQUtMLFFBQUwsQ0FBY00sTUFBdkM7QUFDSDtBQUNKLEdBaENJO0FBaUNMYSxFQUFBQSxPQWpDSyxxQkFpQ0s7QUFDTixTQUFLeEIsT0FBTCxDQUFhWSxNQUFiLEdBQXlCLFlBQXpCO0FBQ0FsQixJQUFBQSxNQUFNLENBQUM2QixlQUFQLENBQXVCLEtBQUtyQixPQUE1QixFQUFxQyxJQUFyQztBQUNBUixJQUFBQSxNQUFNLENBQUM2QixlQUFQLENBQXVCLEtBQUtuQixLQUE1QixFQUFtQyxLQUFuQzs7QUFDQSxRQUFHLEtBQUtJLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdDLEtBQTVCLEVBQWtDO0FBQzlCLFdBQUtILE1BQUwsR0FBYyxFQUFkO0FBQ0EsV0FBS1AsUUFBTCxDQUFjVyxRQUFkLEdBQXlCLEtBQUtKLE1BQUwsQ0FBWUssTUFBckM7QUFDSDtBQUNKO0FBekNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpc3R2aWV3ID0gcmVxdWlyZSgnTGlzdHZpZXcnKTtcclxuY29uc3QgSGVscGVyICAgPSByZXF1aXJlKCdIZWxwZXInKTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxyXG4gICAgICAgIGxiVGl0bGUgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgYWxsUmFuayAgICAgOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgYWxsSHUgICAgICAgOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgbGlzdFJhbms6IFtdLFxyXG4gICAgICAgIGxpc3RIdTogW11cclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcyl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJhbmsgPSB0aGlzLl9kYXRhLml0ZW1zO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMubGJUaXRsZS5zdHJpbmcgICAgPSBcIkLhuqNuZyBWaW5oIERhbmhcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25MaXN0UmVuZGVyKGl0ZW0sIGlkeCkge1xyXG4gICAgICAgIGxldCByYW5rID0gdGhpcy5saXN0UmFua1tpZHhdO1xyXG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuaW5pdChpZHgsIHJhbmspO1xyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRBbGxSYW5rKCkge1xyXG4gICAgICAgIHRoaXMubGJUaXRsZS5zdHJpbmcgICAgPSBcIkLhuqNuZyBWaW5oIERhbmhcIjtcclxuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KHRoaXMuYWxsUmFuaywgZmFsc2UpO1xyXG4gICAgICAgIEhlbHBlci5zZXRNYXRlcmlhbEdyYXkodGhpcy5hbGxIdSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmFuayA9IHRoaXMuX2RhdGEuaXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmxpc3RSYW5rLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRIdSgpIHtcclxuICAgICAgICB0aGlzLmxiVGl0bGUuc3RyaW5nICAgID0gXCJM4buLY2ggU+G7rSBIxalcIjtcclxuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KHRoaXMuYWxsUmFuaywgdHJ1ZSk7XHJcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSh0aGlzLmFsbEh1LCBmYWxzZSk7XHJcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0SHUgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdEh1Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
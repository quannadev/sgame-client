
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL1VJS2ltQ3VvbmdSYW5rLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsIkhlbHBlciIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3IiwibGJUaXRsZSIsIkxhYmVsIiwiYWxsUmFuayIsIlNwcml0ZSIsImFsbEh1IiwibGlzdFJhbmsiLCJsaXN0SHUiLCJvbkVuYWJsZSIsIl9kYXRhIiwiaXRlbXMiLCJudW1JdGVtcyIsImxlbmd0aCIsInN0cmluZyIsIm9uTGlzdFJlbmRlciIsIml0ZW0iLCJpZHgiLCJyYW5rIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsImluaXQiLCJldmVudENsb3NlIiwiYmFjayIsImV2ZW50QWxsUmFuayIsInNldE1hdGVyaWFsR3JheSIsImV2ZW50SHUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQSxJQUFNQyxNQUFNLEdBQUtELE9BQU8sQ0FBQyxRQUFELENBQXhCOztBQUNBRSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFFTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBTVAsUUFETjtBQUVSUSxJQUFBQSxPQUFPLEVBQU9MLEVBQUUsQ0FBQ00sS0FGVDtBQUdSQyxJQUFBQSxPQUFPLEVBQU9QLEVBQUUsQ0FBQ1EsTUFIVDtBQUlSQyxJQUFBQSxLQUFLLEVBQVNULEVBQUUsQ0FBQ1EsTUFKVDtBQUtSRSxJQUFBQSxRQUFRLEVBQUUsRUFMRjtBQU1SQyxJQUFBQSxNQUFNLEVBQUU7QUFOQSxHQUZQO0FBVUxDLEVBQUFBLFFBVkssc0JBVUs7QUFDTixRQUFHLEtBQUtDLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdDLEtBQTVCLEVBQWtDO0FBQzlCLFdBQUtKLFFBQUwsR0FBZ0IsS0FBS0csS0FBTCxDQUFXQyxLQUEzQjtBQUNBLFdBQUtWLFFBQUwsQ0FBY1csUUFBZCxHQUF5QixLQUFLTCxRQUFMLENBQWNNLE1BQXZDO0FBQ0EsV0FBS1gsT0FBTCxDQUFhWSxNQUFiLEdBQXlCLGdCQUF6QjtBQUNIO0FBQ0osR0FoQkk7QUFpQkxDLEVBQUFBLFlBakJLLHdCQWlCUUMsSUFqQlIsRUFpQmNDLEdBakJkLEVBaUJtQjtBQUNwQixRQUFJQyxJQUFJLEdBQUcsS0FBS1gsUUFBTCxDQUFjVSxHQUFkLENBQVg7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRyxZQUFMLENBQWtCSCxJQUFJLENBQUNJLElBQXZCLEVBQTZCQyxJQUE3QixDQUFrQ0osR0FBbEMsRUFBdUNDLElBQXZDO0FBQ0gsR0FwQkk7QUFxQkxJLEVBQUFBLFVBckJLLHdCQXFCUTtBQUNULFNBQUtDLElBQUw7QUFDSCxHQXZCSTtBQXdCTEMsRUFBQUEsWUF4QkssMEJBd0JVO0FBQ1gsU0FBS3RCLE9BQUwsQ0FBYVksTUFBYixHQUF5QixnQkFBekI7QUFDQWxCLElBQUFBLE1BQU0sQ0FBQzZCLGVBQVAsQ0FBdUIsS0FBS3JCLE9BQTVCLEVBQXFDLEtBQXJDO0FBQ0FSLElBQUFBLE1BQU0sQ0FBQzZCLGVBQVAsQ0FBdUIsS0FBS25CLEtBQTVCLEVBQW1DLElBQW5DOztBQUNBLFFBQUcsS0FBS0ksS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0MsS0FBNUIsRUFBa0M7QUFDOUIsV0FBS0osUUFBTCxHQUFnQixLQUFLRyxLQUFMLENBQVdDLEtBQTNCO0FBQ0EsV0FBS1YsUUFBTCxDQUFjVyxRQUFkLEdBQXlCLEtBQUtMLFFBQUwsQ0FBY00sTUFBdkM7QUFDSDtBQUNKLEdBaENJO0FBaUNMYSxFQUFBQSxPQWpDSyxxQkFpQ0s7QUFDTixTQUFLeEIsT0FBTCxDQUFhWSxNQUFiLEdBQXlCLFlBQXpCO0FBQ0FsQixJQUFBQSxNQUFNLENBQUM2QixlQUFQLENBQXVCLEtBQUtyQixPQUE1QixFQUFxQyxJQUFyQztBQUNBUixJQUFBQSxNQUFNLENBQUM2QixlQUFQLENBQXVCLEtBQUtuQixLQUE1QixFQUFtQyxLQUFuQzs7QUFDQSxRQUFHLEtBQUtJLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdDLEtBQTVCLEVBQWtDO0FBQzlCLFdBQUtILE1BQUwsR0FBYyxFQUFkO0FBQ0EsV0FBS1AsUUFBTCxDQUFjVyxRQUFkLEdBQXlCLEtBQUtKLE1BQUwsQ0FBWUssTUFBckM7QUFDSDtBQUNKO0FBekNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpc3R2aWV3ID0gcmVxdWlyZSgnTGlzdHZpZXcnKTtcbmNvbnN0IEhlbHBlciAgID0gcmVxdWlyZSgnSGVscGVyJyk7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXG4gICAgICAgIGxiVGl0bGUgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGFsbFJhbmsgICAgIDogY2MuU3ByaXRlLFxuICAgICAgICBhbGxIdSAgICAgICA6IGNjLlNwcml0ZSxcbiAgICAgICAgbGlzdFJhbms6IFtdLFxuICAgICAgICBsaXN0SHU6IFtdXG4gICAgfSxcbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICBpZih0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEuaXRlbXMpe1xuICAgICAgICAgICAgdGhpcy5saXN0UmFuayA9IHRoaXMuX2RhdGEuaXRlbXM7XG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XG4gICAgICAgICAgICB0aGlzLmxiVGl0bGUuc3RyaW5nICAgID0gXCJC4bqjbmcgVmluaCBEYW5oXCI7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcbiAgICAgICAgbGV0IHJhbmsgPSB0aGlzLmxpc3RSYW5rW2lkeF07XG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuaW5pdChpZHgsIHJhbmspO1xuICAgIH0sXG4gICAgZXZlbnRDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfSxcbiAgICBldmVudEFsbFJhbmsoKSB7XG4gICAgICAgIHRoaXMubGJUaXRsZS5zdHJpbmcgICAgPSBcIkLhuqNuZyBWaW5oIERhbmhcIjtcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSh0aGlzLmFsbFJhbmssIGZhbHNlKTtcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSh0aGlzLmFsbEh1LCB0cnVlKTtcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcbiAgICAgICAgICAgIHRoaXMubGlzdFJhbmsgPSB0aGlzLl9kYXRhLml0ZW1zO1xuICAgICAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBldmVudEh1KCkge1xuICAgICAgICB0aGlzLmxiVGl0bGUuc3RyaW5nICAgID0gXCJM4buLY2ggU+G7rSBIxalcIjtcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSh0aGlzLmFsbFJhbmssIHRydWUpO1xuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KHRoaXMuYWxsSHUsIGZhbHNlKTtcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcbiAgICAgICAgICAgIHRoaXMubGlzdEh1ID0gW107XG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0SHUubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
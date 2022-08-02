
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/UICandyRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd33f5yzFBNHJLAXySgDSj13', 'UICandyRank');
// scripts/candy/UICandyRank.js

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FuZHlcXFVJQ2FuZHlSYW5rLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsIkhlbHBlciIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3IiwiYWxsUmFuayIsIlNwcml0ZSIsImFsbEh1IiwibGlzdFJhbmsiLCJsaXN0SHUiLCJvbkVuYWJsZSIsIl9kYXRhIiwiaXRlbXMiLCJudW1JdGVtcyIsImxlbmd0aCIsIm5vZGUiLCJ6SW5kZXgiLCJsYXN0WkluZGV4Iiwib25MaXN0UmVuZGVyIiwiaXRlbSIsImlkeCIsInJhbmsiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiaW5pdCIsImV2ZW50Q2xvc2UiLCJiYWNrIiwiZXZlbnRBbGxSYW5rIiwic2V0TWF0ZXJpYWxHcmF5IiwiZXZlbnRIdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUNBLElBQU1DLE1BQU0sR0FBS0QsT0FBTyxDQUFDLFFBQUQsQ0FBeEI7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNUCxRQUROO0FBRVJRLElBQUFBLE9BQU8sRUFBT0wsRUFBRSxDQUFDTSxNQUZUO0FBR1JDLElBQUFBLEtBQUssRUFBU1AsRUFBRSxDQUFDTSxNQUhUO0FBSVJFLElBQUFBLFFBQVEsRUFBRSxFQUpGO0FBS1JDLElBQUFBLE1BQU0sRUFBRTtBQUxBLEdBRlA7QUFTTEMsRUFBQUEsUUFUSyxzQkFTSztBQUNOLFFBQUcsS0FBS0MsS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0MsS0FBNUIsRUFBa0M7QUFDOUIsV0FBS0osUUFBTCxHQUFnQixLQUFLRyxLQUFMLENBQVdDLEtBQTNCO0FBQ0EsV0FBS1IsUUFBTCxDQUFjUyxRQUFkLEdBQXlCLEtBQUtMLFFBQUwsQ0FBY00sTUFBdkM7QUFDSDs7QUFDRCxRQUFJLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixJQUFvQmhCLEVBQUUsQ0FBQ2lCLFVBQTNCLEVBQXNDO0FBQ2xDLFdBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFtQmhCLEVBQUUsQ0FBQ2lCLFVBQXRCO0FBQ0g7QUFDSixHQWpCSTtBQWtCTEMsRUFBQUEsWUFsQkssd0JBa0JRQyxJQWxCUixFQWtCY0MsR0FsQmQsRUFrQm1CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLYixRQUFMLENBQWNZLEdBQWQsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQyxFQUF3Q0QsR0FBeEM7QUFDSCxHQXJCSTtBQXNCTEssRUFBQUEsVUF0Qkssd0JBc0JRO0FBQ1QsU0FBS0MsSUFBTDtBQUNILEdBeEJJO0FBeUJMQyxFQUFBQSxZQXpCSywwQkF5QlU7QUFDWDVCLElBQUFBLE1BQU0sQ0FBQzZCLGVBQVAsQ0FBdUIsS0FBS3ZCLE9BQTVCLEVBQXFDLEtBQXJDO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQzZCLGVBQVAsQ0FBdUIsS0FBS3JCLEtBQTVCLEVBQW1DLElBQW5DOztBQUNBLFFBQUcsS0FBS0ksS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0MsS0FBNUIsRUFBa0M7QUFDOUIsV0FBS0osUUFBTCxHQUFnQixLQUFLRyxLQUFMLENBQVdDLEtBQTNCO0FBQ0EsV0FBS1IsUUFBTCxDQUFjUyxRQUFkLEdBQXlCLEtBQUtMLFFBQUwsQ0FBY00sTUFBdkM7QUFDSDtBQUNKLEdBaENJO0FBaUNMZSxFQUFBQSxPQWpDSyxxQkFpQ0s7QUFDTjlCLElBQUFBLE1BQU0sQ0FBQzZCLGVBQVAsQ0FBdUIsS0FBS3ZCLE9BQTVCLEVBQXFDLElBQXJDO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQzZCLGVBQVAsQ0FBdUIsS0FBS3JCLEtBQTVCLEVBQW1DLEtBQW5DOztBQUNBLFFBQUcsS0FBS0ksS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0MsS0FBNUIsRUFBa0M7QUFDOUIsV0FBS0gsTUFBTCxHQUFjLEVBQWQ7QUFDQSxXQUFLTCxRQUFMLENBQWNTLFFBQWQsR0FBeUIsS0FBS0osTUFBTCxDQUFZSyxNQUFyQztBQUNIO0FBQ0o7QUF4Q0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdHZpZXcgPSByZXF1aXJlKCdMaXN0dmlldycpO1xyXG5jb25zdCBIZWxwZXIgICA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXHJcbiAgICAgICAgYWxsUmFuayAgICAgOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgYWxsSHUgICAgICAgOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgbGlzdFJhbms6IFtdLFxyXG4gICAgICAgIGxpc3RIdTogW11cclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcyl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJhbmsgPSB0aGlzLl9kYXRhLml0ZW1zO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25MaXN0UmVuZGVyKGl0ZW0sIGlkeCkge1xyXG4gICAgICAgIGxldCByYW5rID0gdGhpcy5saXN0UmFua1tpZHhdO1xyXG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuaW5pdChyYW5rLCBpZHgpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRBbGxSYW5rKCkge1xyXG4gICAgICAgIEhlbHBlci5zZXRNYXRlcmlhbEdyYXkodGhpcy5hbGxSYW5rLCBmYWxzZSk7XHJcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSh0aGlzLmFsbEh1LCB0cnVlKTtcclxuICAgICAgICBpZih0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEuaXRlbXMpe1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSYW5rID0gdGhpcy5fZGF0YS5pdGVtcztcclxuICAgICAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudEh1KCkge1xyXG4gICAgICAgIEhlbHBlci5zZXRNYXRlcmlhbEdyYXkodGhpcy5hbGxSYW5rLCB0cnVlKTtcclxuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KHRoaXMuYWxsSHUsIGZhbHNlKTtcclxuICAgICAgICBpZih0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEuaXRlbXMpe1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RIdSA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0SHUubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
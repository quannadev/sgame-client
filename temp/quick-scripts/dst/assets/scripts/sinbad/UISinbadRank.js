
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/UISinbadRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e41b0UlffxD6ZvdHoZHP5tl', 'UISinbadRank');
// scripts/sinbad/UISinbadRank.js

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
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(idx, rank);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxVSVNpbmJhZFJhbmsuanMiXSwibmFtZXMiOlsiTGlzdHZpZXciLCJyZXF1aXJlIiwiSGVscGVyIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGlzdHZpZXciLCJhbGxSYW5rIiwiU3ByaXRlIiwiYWxsSHUiLCJsaXN0UmFuayIsImxpc3RIdSIsIm9uRW5hYmxlIiwiX2RhdGEiLCJpdGVtcyIsIm51bUl0ZW1zIiwibGVuZ3RoIiwib25MaXN0UmVuZGVyIiwiaXRlbSIsImlkeCIsInJhbmsiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiaW5pdCIsImV2ZW50Q2xvc2UiLCJiYWNrIiwiZXZlbnRBbGxSYW5rIiwic2V0TWF0ZXJpYWxHcmF5IiwiZXZlbnRIdSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUNBLElBQU1DLE1BQU0sR0FBS0QsT0FBTyxDQUFDLFFBQUQsQ0FBeEI7O0FBQ0FFLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUVMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNUCxRQUROO0FBRVJRLElBQUFBLE9BQU8sRUFBT0wsRUFBRSxDQUFDTSxNQUZUO0FBR1JDLElBQUFBLEtBQUssRUFBU1AsRUFBRSxDQUFDTSxNQUhUO0FBSVJFLElBQUFBLFFBQVEsRUFBRSxFQUpGO0FBS1JDLElBQUFBLE1BQU0sRUFBRTtBQUxBLEdBRlA7QUFTTEMsRUFBQUEsUUFUSyxzQkFTSztBQUNOLFFBQUcsS0FBS0MsS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0MsS0FBNUIsRUFBa0M7QUFDOUIsV0FBS0osUUFBTCxHQUFnQixLQUFLRyxLQUFMLENBQVdDLEtBQTNCO0FBQ0EsV0FBS1IsUUFBTCxDQUFjUyxRQUFkLEdBQXlCLEtBQUtMLFFBQUwsQ0FBY00sTUFBdkM7QUFDSDtBQUNKLEdBZEk7QUFlTEMsRUFBQUEsWUFmSyx3QkFlUUMsSUFmUixFQWVjQyxHQWZkLEVBZW1CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLVixRQUFMLENBQWNTLEdBQWQsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSixHQUFsQyxFQUF1Q0MsSUFBdkM7QUFDSCxHQWxCSTtBQW1CTEksRUFBQUEsVUFuQkssd0JBbUJRO0FBQ1QsU0FBS0MsSUFBTDtBQUNILEdBckJJO0FBc0JMQyxFQUFBQSxZQXRCSywwQkFzQlU7QUFDWHpCLElBQUFBLE1BQU0sQ0FBQzBCLGVBQVAsQ0FBdUIsS0FBS3BCLE9BQTVCLEVBQXFDLEtBQXJDO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQzBCLGVBQVAsQ0FBdUIsS0FBS2xCLEtBQTVCLEVBQW1DLElBQW5DOztBQUNBLFFBQUcsS0FBS0ksS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0MsS0FBNUIsRUFBa0M7QUFDOUIsV0FBS0osUUFBTCxHQUFnQixLQUFLRyxLQUFMLENBQVdDLEtBQTNCO0FBQ0EsV0FBS1IsUUFBTCxDQUFjUyxRQUFkLEdBQXlCLEtBQUtMLFFBQUwsQ0FBY00sTUFBdkM7QUFDSDtBQUNKLEdBN0JJO0FBOEJMWSxFQUFBQSxPQTlCSyxxQkE4Qks7QUFDTjNCLElBQUFBLE1BQU0sQ0FBQzBCLGVBQVAsQ0FBdUIsS0FBS3BCLE9BQTVCLEVBQXFDLElBQXJDO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQzBCLGVBQVAsQ0FBdUIsS0FBS2xCLEtBQTVCLEVBQW1DLEtBQW5DOztBQUNBLFFBQUcsS0FBS0ksS0FBTCxJQUFjLEtBQUtBLEtBQUwsQ0FBV0MsS0FBNUIsRUFBa0M7QUFDOUIsV0FBS0gsTUFBTCxHQUFjLEVBQWQ7QUFDQSxXQUFLTCxRQUFMLENBQWNTLFFBQWQsR0FBeUIsS0FBS0osTUFBTCxDQUFZSyxNQUFyQztBQUNIO0FBQ0o7QUFyQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdHZpZXcgPSByZXF1aXJlKCdMaXN0dmlldycpO1xyXG5jb25zdCBIZWxwZXIgICA9IHJlcXVpcmUoJ0hlbHBlcicpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXHJcbiAgICAgICAgYWxsUmFuayAgICAgOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgYWxsSHUgICAgICAgOiBjYy5TcHJpdGUsXHJcbiAgICAgICAgbGlzdFJhbms6IFtdLFxyXG4gICAgICAgIGxpc3RIdTogW11cclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIGlmKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcyl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJhbmsgPSB0aGlzLl9kYXRhLml0ZW1zO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdFJhbmtbaWR4XTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQoaWR4LCByYW5rKTtcclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50QWxsUmFuaygpIHtcclxuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KHRoaXMuYWxsUmFuaywgZmFsc2UpO1xyXG4gICAgICAgIEhlbHBlci5zZXRNYXRlcmlhbEdyYXkodGhpcy5hbGxIdSwgdHJ1ZSk7XHJcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmFuayA9IHRoaXMuX2RhdGEuaXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmxpc3RSYW5rLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRIdSgpIHtcclxuICAgICAgICBIZWxwZXIuc2V0TWF0ZXJpYWxHcmF5KHRoaXMuYWxsUmFuaywgdHJ1ZSk7XHJcbiAgICAgICAgSGVscGVyLnNldE1hdGVyaWFsR3JheSh0aGlzLmFsbEh1LCBmYWxzZSk7XHJcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0SHUgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdEh1Lmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
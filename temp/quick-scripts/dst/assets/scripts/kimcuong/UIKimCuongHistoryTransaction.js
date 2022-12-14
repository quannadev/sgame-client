
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/UIKimCuongHistoryTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7d052LJhlNfoLv1LMTXkXD', 'UIKimCuongHistoryTransaction');
// scripts/kimcuong/UIKimCuongHistoryTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listRank = [];
  },
  onEnable: function onEnable() {
    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank);
  },
  eventClose: function eventClose() {
    this.back();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL1VJS2ltQ3VvbmdIaXN0b3J5VHJhbnNhY3Rpb24uanMiXSwibmFtZXMiOlsiTGlzdHZpZXciLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGlzdHZpZXciLCJvbkxvYWQiLCJsaXN0UmFuayIsIm9uRW5hYmxlIiwiX2RhdGEiLCJpdGVtcyIsIm51bUl0ZW1zIiwibGVuZ3RoIiwib25MaXN0UmVuZGVyIiwiaXRlbSIsImlkeCIsInJhbmsiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiaW5pdCIsImV2ZW50Q2xvc2UiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTjtBQUROLEdBSFA7QUFNTE8sRUFBQUEsTUFOSyxvQkFNSztBQUNOLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDSCxHQVJJO0FBU0xDLEVBQUFBLFFBVEssc0JBU0s7QUFDTixRQUFHLEtBQUtDLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdDLEtBQTVCLEVBQWtDO0FBQzlCLFdBQUtILFFBQUwsR0FBZ0IsS0FBS0UsS0FBTCxDQUFXQyxLQUEzQjtBQUNBLFdBQUtMLFFBQUwsQ0FBY00sUUFBZCxHQUF5QixLQUFLSixRQUFMLENBQWNLLE1BQXZDO0FBQ0g7QUFDSixHQWRJO0FBZUxDLEVBQUFBLFlBZkssd0JBZVFDLElBZlIsRUFlY0MsR0FmZCxFQWVtQjtBQUNwQixRQUFJQyxJQUFJLEdBQUcsS0FBS1QsUUFBTCxDQUFjUSxHQUFkLENBQVg7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRyxZQUFMLENBQWtCSCxJQUFJLENBQUNJLElBQXZCLEVBQTZCQyxJQUE3QixDQUFrQ0gsSUFBbEM7QUFDSCxHQWxCSTtBQW1CTEksRUFBQUEsVUFuQkssd0JBbUJRO0FBQ1QsU0FBS0MsSUFBTDtBQUNIO0FBckJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpc3R2aWV3ID0gcmVxdWlyZSgnTGlzdHZpZXcnKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxuICAgIH0sXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgdGhpcy5saXN0UmFuayA9IFtdO1xuICAgIH0sXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcbiAgICAgICAgICAgIHRoaXMubGlzdFJhbmsgPSB0aGlzLl9kYXRhLml0ZW1zO1xuICAgICAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkxpc3RSZW5kZXIoaXRlbSwgaWR4KSB7XG4gICAgICAgIGxldCByYW5rID0gdGhpcy5saXN0UmFua1tpZHhdO1xuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQocmFuayk7XG4gICAgfSxcbiAgICBldmVudENsb3NlKCkge1xuICAgICAgICB0aGlzLmJhY2soKTtcbiAgICB9XG59KTtcbiJdfQ==
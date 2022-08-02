
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/UIBankLog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4b2fba6ajxAuLNeGszWH4MI', 'UIBankLog');
// scripts/portal/UIBankLog.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listRank = [];
    this.listview.numItems = this.listRank.length;
  },
  onEnable: function onEnable() {
    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxVSUJhbmtMb2cuanMiXSwibmFtZXMiOlsiTGlzdHZpZXciLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGlzdHZpZXciLCJvbkxvYWQiLCJsaXN0UmFuayIsIm51bUl0ZW1zIiwibGVuZ3RoIiwib25FbmFibGUiLCJfZGF0YSIsIml0ZW1zIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJldmVudENsb3NlIiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJiYWNrIiwib25MaXN0UmVuZGVyIiwiaXRlbSIsImlkeCIsInJhbmsiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUdDLE9BQU8sQ0FBQyxVQUFELENBQXhCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFFBQVEsRUFBTU47QUFETixHQUhQO0FBTUxPLEVBQUFBLE1BTkssb0JBTUk7QUFDTCxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS0YsUUFBTCxDQUFjRyxRQUFkLEdBQXlCLEtBQUtELFFBQUwsQ0FBY0UsTUFBdkM7QUFDSCxHQVRJO0FBVUxDLEVBQUFBLFFBVkssc0JBVUs7QUFDTixRQUFHLEtBQUtDLEtBQUwsSUFBYyxLQUFLQSxLQUFMLENBQVdDLEtBQTVCLEVBQWtDO0FBQzlCLFdBQUtMLFFBQUwsR0FBZ0IsS0FBS0ksS0FBTCxDQUFXQyxLQUEzQjtBQUNBLFdBQUtQLFFBQUwsQ0FBY0csUUFBZCxHQUF5QixLQUFLRCxRQUFMLENBQWNFLE1BQXZDO0FBQ0g7O0FBQ0QsUUFBSSxLQUFLSSxJQUFMLENBQVVDLE1BQVYsSUFBb0JiLEVBQUUsQ0FBQ2MsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CYixFQUFFLENBQUNjLFVBQUgsR0FBYyxDQUFqQztBQUNIO0FBQ0osR0FsQkk7QUFtQkxDLEVBQUFBLFVBbkJLLHdCQW1CUTtBQUNUQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQXRCSTtBQXVCTEMsRUFBQUEsWUF2Qkssd0JBdUJRQyxJQXZCUixFQXVCY0MsR0F2QmQsRUF1Qm1CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLakIsUUFBTCxDQUFjZ0IsR0FBZCxDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQkgsSUFBSSxDQUFDSSxJQUF2QixFQUE2QkMsSUFBN0IsQ0FBa0NILElBQWxDO0FBQ0g7QUExQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdHZpZXcgPSByZXF1aXJlKCdMaXN0dmlldycpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLmxpc3RSYW5rID0gW107XHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmFuayA9IHRoaXMuX2RhdGEuaXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmxpc3RSYW5rLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBjYy5sYXN0WkluZGV4KzE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdFJhbmtbaWR4XTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQocmFuayk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
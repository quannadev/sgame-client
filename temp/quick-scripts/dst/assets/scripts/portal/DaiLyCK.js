
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/DaiLyCK.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4d6e5Mp9lhCY7n39obibtKI', 'DaiLyCK');
// scripts/portal/DaiLyCK.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listDaiLy = [];
    this.listview.numItems = this.listDaiLy.length;
  },
  eventClose: function eventClose() {
    this.back();
  },
  updateItems: function updateItems(listAgency) {
    this.listDaiLy = listAgency;
    this.listview.numItems = this.listDaiLy.length;
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listDaiLy[idx];
    item.getComponent(item.name).init(rank);
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;

    if (this.cb) {
      selectedId = parseInt(selectedId);
      this.cb(this.listDaiLy[selectedId]);
      item.getComponent(item.name).showMenuChon(true);

      if (lastSelectedId != null) {
        lastSelectedId = parseInt(lastSelectedId);
        if (this.listview.getItemByListId(lastSelectedId)) this.listview.getItemByListId(lastSelectedId).getComponent(item.name).showMenuChon(false);
      }
    }
  },
  addEventSelect: function addEventSelect(callBack) {
    this.cb = callBack;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BvcnRhbC9EYWlMeUNLLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3Iiwib25Mb2FkIiwibGlzdERhaUx5IiwibnVtSXRlbXMiLCJsZW5ndGgiLCJldmVudENsb3NlIiwiYmFjayIsInVwZGF0ZUl0ZW1zIiwibGlzdEFnZW5jeSIsIm9uTGlzdFJlbmRlciIsIml0ZW0iLCJpZHgiLCJyYW5rIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsImluaXQiLCJvbkxpc3RTZWxlY3RlZCIsInNlbGVjdGVkSWQiLCJsYXN0U2VsZWN0ZWRJZCIsInZhbCIsImNiIiwicGFyc2VJbnQiLCJzaG93TWVudUNob24iLCJnZXRJdGVtQnlMaXN0SWQiLCJhZGRFdmVudFNlbGVjdCIsImNhbGxCYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTjtBQUROLEdBSFA7QUFNTE8sRUFBQUEsTUFOSyxvQkFNSTtBQUNMLFNBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLRixRQUFMLENBQWNHLFFBQWQsR0FBeUIsS0FBS0QsU0FBTCxDQUFlRSxNQUF4QztBQUNILEdBVEk7QUFVTEMsRUFBQUEsVUFWSyx3QkFVUTtBQUNULFNBQUtDLElBQUw7QUFDSCxHQVpJO0FBYUxDLEVBQUFBLFdBYkssdUJBYU9DLFVBYlAsRUFha0I7QUFDbkIsU0FBS04sU0FBTCxHQUFpQk0sVUFBakI7QUFDQSxTQUFLUixRQUFMLENBQWNHLFFBQWQsR0FBeUIsS0FBS0QsU0FBTCxDQUFlRSxNQUF4QztBQUNILEdBaEJJO0FBaUJMSyxFQUFBQSxZQWpCSyx3QkFpQlFDLElBakJSLEVBaUJjQyxHQWpCZCxFQWlCbUI7QUFDcEIsUUFBSUMsSUFBSSxHQUFHLEtBQUtWLFNBQUwsQ0FBZVMsR0FBZixDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQkgsSUFBSSxDQUFDSSxJQUF2QixFQUE2QkMsSUFBN0IsQ0FBa0NILElBQWxDO0FBQ0gsR0FwQkk7QUFzQkxJLEVBQUFBLGNBdEJLLDBCQXNCVU4sSUF0QlYsRUFzQmdCTyxVQXRCaEIsRUFzQjRCQyxjQXRCNUIsRUFzQjRDQyxHQXRCNUMsRUFzQmlEO0FBQ2xELFFBQUksQ0FBQ1QsSUFBTCxFQUNJOztBQUNKLFFBQUksS0FBS1UsRUFBVCxFQUFZO0FBQ1JILE1BQUFBLFVBQVUsR0FBT0ksUUFBUSxDQUFDSixVQUFELENBQXpCO0FBQ0EsV0FBS0csRUFBTCxDQUFRLEtBQUtsQixTQUFMLENBQWVlLFVBQWYsQ0FBUjtBQUNBUCxNQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJRLFlBQTdCLENBQTBDLElBQTFDOztBQUNBLFVBQUlKLGNBQWMsSUFBSSxJQUF0QixFQUEyQjtBQUN2QkEsUUFBQUEsY0FBYyxHQUFHRyxRQUFRLENBQUNILGNBQUQsQ0FBekI7QUFDQSxZQUFLLEtBQUtsQixRQUFMLENBQWN1QixlQUFkLENBQThCTCxjQUE5QixDQUFMLEVBQ0ksS0FBS2xCLFFBQUwsQ0FBY3VCLGVBQWQsQ0FBOEJMLGNBQTlCLEVBQThDTCxZQUE5QyxDQUEyREgsSUFBSSxDQUFDSSxJQUFoRSxFQUFzRVEsWUFBdEUsQ0FBbUYsS0FBbkY7QUFDUDtBQUNKO0FBRUosR0FwQ0k7QUFxQ0xFLEVBQUFBLGNBckNLLDBCQXFDVUMsUUFyQ1YsRUFxQ29CO0FBQ3JCLFNBQUtMLEVBQUwsR0FBVUssUUFBVjtBQUNIO0FBdkNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpc3R2aWV3ID0gcmVxdWlyZSgnTGlzdHZpZXcnKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxuICAgIH0sXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLmxpc3REYWlMeSA9IFtdO1xuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0RGFpTHkubGVuZ3RoO1xuICAgIH0sXG4gICAgZXZlbnRDbG9zZSgpIHtcbiAgICAgICAgdGhpcy5iYWNrKCk7XG4gICAgfSxcbiAgICB1cGRhdGVJdGVtcyhsaXN0QWdlbmN5KXtcbiAgICAgICAgdGhpcy5saXN0RGFpTHkgPSBsaXN0QWdlbmN5O1xuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0RGFpTHkubGVuZ3RoO1xuICAgIH0sXG4gICAgb25MaXN0UmVuZGVyKGl0ZW0sIGlkeCkge1xuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdERhaUx5W2lkeF07XG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuaW5pdChyYW5rKTtcbiAgICB9LFxuXG4gICAgb25MaXN0U2VsZWN0ZWQoaXRlbSwgc2VsZWN0ZWRJZCwgbGFzdFNlbGVjdGVkSWQsIHZhbCkge1xuICAgICAgICBpZiAoIWl0ZW0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICh0aGlzLmNiKXtcbiAgICAgICAgICAgIHNlbGVjdGVkSWQgICAgID0gcGFyc2VJbnQoc2VsZWN0ZWRJZCk7XG4gICAgICAgICAgICB0aGlzLmNiKHRoaXMubGlzdERhaUx5W3NlbGVjdGVkSWRdKTtcbiAgICAgICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuc2hvd01lbnVDaG9uKHRydWUpO1xuICAgICAgICAgICAgaWYgKGxhc3RTZWxlY3RlZElkICE9IG51bGwpe1xuICAgICAgICAgICAgICAgIGxhc3RTZWxlY3RlZElkID0gcGFyc2VJbnQobGFzdFNlbGVjdGVkSWQpO1xuICAgICAgICAgICAgICAgIGlmICggdGhpcy5saXN0dmlldy5nZXRJdGVtQnlMaXN0SWQobGFzdFNlbGVjdGVkSWQpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3R2aWV3LmdldEl0ZW1CeUxpc3RJZChsYXN0U2VsZWN0ZWRJZCkuZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuc2hvd01lbnVDaG9uKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBhZGRFdmVudFNlbGVjdChjYWxsQmFjaykge1xuICAgICAgICB0aGlzLmNiID0gY2FsbEJhY2s7XG4gICAgfVxufSk7XG4iXX0=
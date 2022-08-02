
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rongho/UIRongHoTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e239915Zz1C6ahqoqk8Oirz', 'UIRongHoTransaction');
// scripts/rongho/UIRongHoTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onEnable: function onEnable() {
    mm.Loading.hide();
    this.listTrans = this._data.items;
    this.listview.numItems = this.listTrans.length;
  },
  eventClose: function eventClose() {
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listTrans[idx];
    item.getComponent(item.name).init(rank);
  },
  onListSelected: function onListSelected(item, selectedId, lastSelectedId, val) {
    if (!item) return;
    var list = item.listItem._list;
    var str = 'Danh sách hoạt động hiện tại là:' + list.node.name + '，Lựa chọn hiện tại là：' + selectedId + '，Lựa chọn cuối cùng là：' + lastSelectedId;

    if (list.selectedMode == 2) {
      //Nếu nó là chế độ đa lựa chọn
      str += '，Giá trị hiện tại：' + val;
    }

    console.log(str);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm9uZ2hvXFxVSVJvbmdIb1RyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3Iiwib25FbmFibGUiLCJtbSIsIkxvYWRpbmciLCJoaWRlIiwibGlzdFRyYW5zIiwiX2RhdGEiLCJpdGVtcyIsIm51bUl0ZW1zIiwibGVuZ3RoIiwiZXZlbnRDbG9zZSIsImJhY2siLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwicmFuayIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0Iiwib25MaXN0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwibGFzdFNlbGVjdGVkSWQiLCJ2YWwiLCJsaXN0IiwibGlzdEl0ZW0iLCJfbGlzdCIsInN0ciIsIm5vZGUiLCJzZWxlY3RlZE1vZGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTjtBQUROLEdBSFA7QUFNTE8sRUFBQUEsUUFOSyxzQkFNSztBQUNOQyxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsSUFBWDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0MsS0FBTCxDQUFXQyxLQUE1QjtBQUNBLFNBQUtQLFFBQUwsQ0FBY1EsUUFBZCxHQUF5QixLQUFLSCxTQUFMLENBQWVJLE1BQXhDO0FBQ0gsR0FWSTtBQVdMQyxFQUFBQSxVQVhLLHdCQVdRO0FBQ1QsU0FBS0MsSUFBTDtBQUNILEdBYkk7QUFjTEMsRUFBQUEsWUFkSyx3QkFjUUMsSUFkUixFQWNjQyxHQWRkLEVBY21CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLVixTQUFMLENBQWVTLEdBQWYsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQztBQUNILEdBakJJO0FBa0JMSSxFQUFBQSxjQWxCSywwQkFrQlVOLElBbEJWLEVBa0JnQk8sVUFsQmhCLEVBa0I0QkMsY0FsQjVCLEVBa0I0Q0MsR0FsQjVDLEVBa0JpRDtBQUNsRCxRQUFJLENBQUNULElBQUwsRUFDSTtBQUNKLFFBQUlVLElBQUksR0FBR1YsSUFBSSxDQUFDVyxRQUFMLENBQWNDLEtBQXpCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLHFDQUFxQ0gsSUFBSSxDQUFDSSxJQUFMLENBQVVWLElBQS9DLEdBQXNELHdCQUF0RCxHQUFpRkcsVUFBakYsR0FBOEYseUJBQTlGLEdBQTBIQyxjQUFwSTs7QUFDQSxRQUFJRSxJQUFJLENBQUNLLFlBQUwsSUFBcUIsQ0FBekIsRUFBNEI7QUFBRTtBQUMxQkYsTUFBQUEsR0FBRyxJQUFJLHVCQUF1QkosR0FBOUI7QUFDSDs7QUFDRE8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQVo7QUFDSDtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmxpc3RUcmFucyA9IHRoaXMuX2RhdGEuaXRlbXM7XHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFRyYW5zLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdFRyYW5zW2lkeF07XHJcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoaXRlbS5uYW1lKS5pbml0KHJhbmspO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFNlbGVjdGVkKGl0ZW0sIHNlbGVjdGVkSWQsIGxhc3RTZWxlY3RlZElkLCB2YWwpIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgbGlzdCA9IGl0ZW0ubGlzdEl0ZW0uX2xpc3Q7XHJcbiAgICAgICAgbGV0IHN0ciA9ICdEYW5oIHPDoWNoIGhv4bqhdCDEkeG7mW5nIGhp4buHbiB04bqhaSBsw6A6JyArIGxpc3Qubm9kZS5uYW1lICsgJ++8jEzhu7FhIGNo4buNbiBoaeG7h24gdOG6oWkgbMOg77yaJyArIHNlbGVjdGVkSWQgKyAn77yMTOG7sWEgY2jhu41uIGN14buRaSBjw7luZyBsw6DvvJonICsgbGFzdFNlbGVjdGVkSWQ7XHJcbiAgICAgICAgaWYgKGxpc3Quc2VsZWN0ZWRNb2RlID09IDIpIHsgLy9O4bq/dSBuw7MgbMOgIGNo4bq/IMSR4buZIMSRYSBs4buxYSBjaOG7jW5cclxuICAgICAgICAgICAgc3RyICs9ICfvvIxHacOhIHRy4buLIGhp4buHbiB04bqhae+8micgKyB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
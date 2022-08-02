
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rongho/UIRongHoRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '32b80HpW6hOYYs9rKGAtfRP', 'UIRongHoRank');
// scripts/rongho/UIRongHoRank.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onEnable: function onEnable() {
    mm.Loading.hide();
    this.listRank = this._data.items;
    this.listview.numItems = this.listRank.length;
  },
  eventClose: function eventClose() {
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
    item.getComponent(item.name).init(rank, idx);
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
  },
  eventHistoryWin: function eventHistoryWin() {},
  eventAll: function eventAll() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm9uZ2hvXFxVSVJvbmdIb1JhbmsuanMiXSwibmFtZXMiOlsiTGlzdHZpZXciLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGlzdHZpZXciLCJvbkVuYWJsZSIsIm1tIiwiTG9hZGluZyIsImhpZGUiLCJsaXN0UmFuayIsIl9kYXRhIiwiaXRlbXMiLCJudW1JdGVtcyIsImxlbmd0aCIsImV2ZW50Q2xvc2UiLCJiYWNrIiwib25MaXN0UmVuZGVyIiwiaXRlbSIsImlkeCIsInJhbmsiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiaW5pdCIsIm9uTGlzdFNlbGVjdGVkIiwic2VsZWN0ZWRJZCIsImxhc3RTZWxlY3RlZElkIiwidmFsIiwibGlzdCIsImxpc3RJdGVtIiwiX2xpc3QiLCJzdHIiLCJub2RlIiwic2VsZWN0ZWRNb2RlIiwiY29uc29sZSIsImxvZyIsImV2ZW50SGlzdG9yeVdpbiIsImV2ZW50QWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTjtBQUROLEdBSFA7QUFNTE8sRUFBQUEsUUFOSyxzQkFNSztBQUNOQyxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsS0FBTCxDQUFXQyxLQUEzQjtBQUNBLFNBQUtQLFFBQUwsQ0FBY1EsUUFBZCxHQUF5QixLQUFLSCxRQUFMLENBQWNJLE1BQXZDO0FBQ0gsR0FWSTtBQVdMQyxFQUFBQSxVQVhLLHdCQVdRO0FBQ1QsU0FBS0MsSUFBTDtBQUNILEdBYkk7QUFjTEMsRUFBQUEsWUFkSyx3QkFjUUMsSUFkUixFQWNjQyxHQWRkLEVBY21CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLVixRQUFMLENBQWNTLEdBQWQsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQyxFQUF3Q0QsR0FBeEM7QUFDSCxHQWpCSTtBQWtCTEssRUFBQUEsY0FsQkssMEJBa0JVTixJQWxCVixFQWtCZ0JPLFVBbEJoQixFQWtCNEJDLGNBbEI1QixFQWtCNENDLEdBbEI1QyxFQWtCaUQ7QUFDbEQsUUFBSSxDQUFDVCxJQUFMLEVBQ0k7QUFDSixRQUFJVSxJQUFJLEdBQUdWLElBQUksQ0FBQ1csUUFBTCxDQUFjQyxLQUF6QjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxxQ0FBcUNILElBQUksQ0FBQ0ksSUFBTCxDQUFVVixJQUEvQyxHQUFzRCx3QkFBdEQsR0FBaUZHLFVBQWpGLEdBQThGLHlCQUE5RixHQUEwSEMsY0FBcEk7O0FBQ0EsUUFBSUUsSUFBSSxDQUFDSyxZQUFMLElBQXFCLENBQXpCLEVBQTRCO0FBQUU7QUFDMUJGLE1BQUFBLEdBQUcsSUFBSSx1QkFBdUJKLEdBQTlCO0FBQ0g7O0FBQ0RPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0FBQ0gsR0EzQkk7QUE0QkxLLEVBQUFBLGVBNUJLLDZCQTRCYSxDQUVqQixDQTlCSTtBQStCTEMsRUFBQUEsUUEvQkssc0JBK0JNLENBRVY7QUFqQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdHZpZXcgPSByZXF1aXJlKCdMaXN0dmlldycpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgbW0uTG9hZGluZy5oaWRlKCk7XHJcbiAgICAgICAgdGhpcy5saXN0UmFuayA9IHRoaXMuX2RhdGEuaXRlbXM7XHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0UmVuZGVyKGl0ZW0sIGlkeCkge1xyXG4gICAgICAgIGxldCByYW5rID0gdGhpcy5saXN0UmFua1tpZHhdO1xyXG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuaW5pdChyYW5rLCBpZHgpO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFNlbGVjdGVkKGl0ZW0sIHNlbGVjdGVkSWQsIGxhc3RTZWxlY3RlZElkLCB2YWwpIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgbGlzdCA9IGl0ZW0ubGlzdEl0ZW0uX2xpc3Q7XHJcbiAgICAgICAgbGV0IHN0ciA9ICdEYW5oIHPDoWNoIGhv4bqhdCDEkeG7mW5nIGhp4buHbiB04bqhaSBsw6A6JyArIGxpc3Qubm9kZS5uYW1lICsgJ++8jEzhu7FhIGNo4buNbiBoaeG7h24gdOG6oWkgbMOg77yaJyArIHNlbGVjdGVkSWQgKyAn77yMTOG7sWEgY2jhu41uIGN14buRaSBjw7luZyBsw6DvvJonICsgbGFzdFNlbGVjdGVkSWQ7XHJcbiAgICAgICAgaWYgKGxpc3Quc2VsZWN0ZWRNb2RlID09IDIpIHsgLy9O4bq/dSBuw7MgbMOgIGNo4bq/IMSR4buZIMSRYSBs4buxYSBjaOG7jW5cclxuICAgICAgICAgICAgc3RyICs9ICfvvIxHacOhIHRy4buLIGhp4buHbiB04bqhae+8micgKyB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRIaXN0b3J5V2luKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBldmVudEFsbCgpIHtcclxuXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
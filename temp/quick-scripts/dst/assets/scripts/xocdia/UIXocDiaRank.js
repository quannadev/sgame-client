
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/xocdia/UIXocDiaRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a4ddcqvLqVM657uunwm0gwG', 'UIXocDiaRank');
// scripts/xocdia/UIXocDiaRank.js

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
    mm.audio.playButton();
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
  eventHistoryWin: function eventHistoryWin() {
    mm.audio.playButton();
  },
  eventAll: function eventAll() {
    mm.audio.playButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xceG9jZGlhXFxVSVhvY0RpYVJhbmsuanMiXSwibmFtZXMiOlsiTGlzdHZpZXciLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGlzdHZpZXciLCJvbkVuYWJsZSIsIm1tIiwiTG9hZGluZyIsImhpZGUiLCJsaXN0UmFuayIsIl9kYXRhIiwiaXRlbXMiLCJudW1JdGVtcyIsImxlbmd0aCIsImV2ZW50Q2xvc2UiLCJhdWRpbyIsInBsYXlCdXR0b24iLCJiYWNrIiwib25MaXN0UmVuZGVyIiwiaXRlbSIsImlkeCIsInJhbmsiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiaW5pdCIsIm9uTGlzdFNlbGVjdGVkIiwic2VsZWN0ZWRJZCIsImxhc3RTZWxlY3RlZElkIiwidmFsIiwibGlzdCIsImxpc3RJdGVtIiwiX2xpc3QiLCJzdHIiLCJub2RlIiwic2VsZWN0ZWRNb2RlIiwiY29uc29sZSIsImxvZyIsImV2ZW50SGlzdG9yeVdpbiIsImV2ZW50QWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTjtBQUROLEdBSFA7QUFNTE8sRUFBQUEsUUFOSyxzQkFNSztBQUNOQyxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsSUFBWDtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsS0FBTCxDQUFXQyxLQUEzQjtBQUNBLFNBQUtQLFFBQUwsQ0FBY1EsUUFBZCxHQUF5QixLQUFLSCxRQUFMLENBQWNJLE1BQXZDO0FBQ0gsR0FWSTtBQVdMQyxFQUFBQSxVQVhLLHdCQVdRO0FBQ1RSLElBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS0MsSUFBTDtBQUNILEdBZEk7QUFlTEMsRUFBQUEsWUFmSyx3QkFlUUMsSUFmUixFQWVjQyxHQWZkLEVBZW1CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLWixRQUFMLENBQWNXLEdBQWQsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQyxFQUF3Q0QsR0FBeEM7QUFDSCxHQWxCSTtBQW1CTEssRUFBQUEsY0FuQkssMEJBbUJVTixJQW5CVixFQW1CZ0JPLFVBbkJoQixFQW1CNEJDLGNBbkI1QixFQW1CNENDLEdBbkI1QyxFQW1CaUQ7QUFDbEQsUUFBSSxDQUFDVCxJQUFMLEVBQ0k7QUFDSixRQUFJVSxJQUFJLEdBQUdWLElBQUksQ0FBQ1csUUFBTCxDQUFjQyxLQUF6QjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxxQ0FBcUNILElBQUksQ0FBQ0ksSUFBTCxDQUFVVixJQUEvQyxHQUFzRCx3QkFBdEQsR0FBaUZHLFVBQWpGLEdBQThGLHlCQUE5RixHQUEwSEMsY0FBcEk7O0FBQ0EsUUFBSUUsSUFBSSxDQUFDSyxZQUFMLElBQXFCLENBQXpCLEVBQTRCO0FBQUU7QUFDMUJGLE1BQUFBLEdBQUcsSUFBSSx1QkFBdUJKLEdBQTlCO0FBQ0g7O0FBQ0RPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0FBQ0gsR0E1Qkk7QUE2QkxLLEVBQUFBLGVBN0JLLDZCQTZCYTtBQUNkL0IsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVNDLFVBQVQ7QUFDSCxHQS9CSTtBQWdDTHNCLEVBQUFBLFFBaENLLHNCQWdDTTtBQUNQaEMsSUFBQUEsRUFBRSxDQUFDUyxLQUFILENBQVNDLFVBQVQ7QUFDSDtBQWxDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmxpc3RSYW5rID0gdGhpcy5fZGF0YS5pdGVtcztcclxuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpIHtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0UmVuZGVyKGl0ZW0sIGlkeCkge1xyXG4gICAgICAgIGxldCByYW5rID0gdGhpcy5saXN0UmFua1tpZHhdO1xyXG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuaW5pdChyYW5rLCBpZHgpO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFNlbGVjdGVkKGl0ZW0sIHNlbGVjdGVkSWQsIGxhc3RTZWxlY3RlZElkLCB2YWwpIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgbGlzdCA9IGl0ZW0ubGlzdEl0ZW0uX2xpc3Q7XHJcbiAgICAgICAgbGV0IHN0ciA9ICdEYW5oIHPDoWNoIGhv4bqhdCDEkeG7mW5nIGhp4buHbiB04bqhaSBsw6A6JyArIGxpc3Qubm9kZS5uYW1lICsgJ++8jEzhu7FhIGNo4buNbiBoaeG7h24gdOG6oWkgbMOg77yaJyArIHNlbGVjdGVkSWQgKyAn77yMTOG7sWEgY2jhu41uIGN14buRaSBjw7luZyBsw6DvvJonICsgbGFzdFNlbGVjdGVkSWQ7XHJcbiAgICAgICAgaWYgKGxpc3Quc2VsZWN0ZWRNb2RlID09IDIpIHsgLy9O4bq/dSBuw7MgbMOgIGNo4bq/IMSR4buZIMSRYSBs4buxYSBjaOG7jW5cclxuICAgICAgICAgICAgc3RyICs9ICfvvIxHacOhIHRy4buLIGhp4buHbiB04bqhae+8micgKyB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRIaXN0b3J5V2luKCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgIH0sXHJcbiAgICBldmVudEFsbCgpIHtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
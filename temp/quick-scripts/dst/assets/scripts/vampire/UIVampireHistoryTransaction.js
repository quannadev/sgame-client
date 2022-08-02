
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/UIVampireHistoryTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dec891DBAVHNKiIi/fo7/XM', 'UIVampireHistoryTransaction');
// scripts/vampire/UIVampireHistoryTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onEnable: function onEnable() {
    if (this._data && this._data.items) {
      this.listTransaction = this._data.items;
      this.listview.numItems = this.listTransaction.length;
    }
  },
  eventClose: function eventClose() {
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listTransaction[idx];
    item.getComponent(item.name).init(idx, rank);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVUlWYW1waXJlSGlzdG9yeVRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3Iiwib25FbmFibGUiLCJfZGF0YSIsIml0ZW1zIiwibGlzdFRyYW5zYWN0aW9uIiwibnVtSXRlbXMiLCJsZW5ndGgiLCJldmVudENsb3NlIiwiYmFjayIsIm9uTGlzdFJlbmRlciIsIml0ZW0iLCJpZHgiLCJyYW5rIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsImluaXQiLCJvbkxpc3RTZWxlY3RlZCIsInNlbGVjdGVkSWQiLCJsYXN0U2VsZWN0ZWRJZCIsInZhbCIsImxpc3QiLCJsaXN0SXRlbSIsIl9saXN0Iiwic3RyIiwibm9kZSIsInNlbGVjdGVkTW9kZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1OO0FBRE4sR0FIUDtBQU1MTyxFQUFBQSxRQU5LLHNCQU1LO0FBQ04sUUFBRyxLQUFLQyxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxLQUE1QixFQUFrQztBQUM5QixXQUFLQyxlQUFMLEdBQXVCLEtBQUtGLEtBQUwsQ0FBV0MsS0FBbEM7QUFDQSxXQUFLSCxRQUFMLENBQWNLLFFBQWQsR0FBeUIsS0FBS0QsZUFBTCxDQUFxQkUsTUFBOUM7QUFDSDtBQUNKLEdBWEk7QUFZTEMsRUFBQUEsVUFaSyx3QkFZUTtBQUNULFNBQUtDLElBQUw7QUFDSCxHQWRJO0FBZUxDLEVBQUFBLFlBZkssd0JBZVFDLElBZlIsRUFlY0MsR0FmZCxFQWVtQjtBQUNwQixRQUFJQyxJQUFJLEdBQUcsS0FBS1IsZUFBTCxDQUFxQk8sR0FBckIsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSixHQUFsQyxFQUF1Q0MsSUFBdkM7QUFDSCxHQWxCSTtBQW1CTEksRUFBQUEsY0FuQkssMEJBbUJVTixJQW5CVixFQW1CZ0JPLFVBbkJoQixFQW1CNEJDLGNBbkI1QixFQW1CNENDLEdBbkI1QyxFQW1CaUQ7QUFDbEQsUUFBSSxDQUFDVCxJQUFMLEVBQ0k7QUFDSixRQUFJVSxJQUFJLEdBQUdWLElBQUksQ0FBQ1csUUFBTCxDQUFjQyxLQUF6QjtBQUNBLFFBQUlDLEdBQUcsR0FBRyxxQ0FBcUNILElBQUksQ0FBQ0ksSUFBTCxDQUFVVixJQUEvQyxHQUFzRCx3QkFBdEQsR0FBaUZHLFVBQWpGLEdBQThGLHlCQUE5RixHQUEwSEMsY0FBcEk7O0FBQ0EsUUFBSUUsSUFBSSxDQUFDSyxZQUFMLElBQXFCLENBQXpCLEVBQTRCO0FBQUU7QUFDMUJGLE1BQUFBLEdBQUcsSUFBSSx1QkFBdUJKLEdBQTlCO0FBQ0g7O0FBQ0RPLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixHQUFaO0FBQ0g7QUE1QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdHZpZXcgPSByZXF1aXJlKCdMaXN0dmlldycpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgaWYodGhpcy5fZGF0YSAmJiB0aGlzLl9kYXRhLml0ZW1zKXtcclxuICAgICAgICAgICAgdGhpcy5saXN0VHJhbnNhY3Rpb24gPSB0aGlzLl9kYXRhLml0ZW1zO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0VHJhbnNhY3Rpb24ubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlKCkge1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdFRyYW5zYWN0aW9uW2lkeF07XHJcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoaXRlbS5uYW1lKS5pbml0KGlkeCwgcmFuayk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0U2VsZWN0ZWQoaXRlbSwgc2VsZWN0ZWRJZCwgbGFzdFNlbGVjdGVkSWQsIHZhbCkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsaXN0ID0gaXRlbS5saXN0SXRlbS5fbGlzdDtcclxuICAgICAgICBsZXQgc3RyID0gJ0Rhbmggc8OhY2ggaG/huqF0IMSR4buZbmcgaGnhu4duIHThuqFpIGzDoDonICsgbGlzdC5ub2RlLm5hbWUgKyAn77yMTOG7sWEgY2jhu41uIGhp4buHbiB04bqhaSBsw6DvvJonICsgc2VsZWN0ZWRJZCArICfvvIxM4buxYSBjaOG7jW4gY3Xhu5FpIGPDuW5nIGzDoO+8micgKyBsYXN0U2VsZWN0ZWRJZDtcclxuICAgICAgICBpZiAobGlzdC5zZWxlY3RlZE1vZGUgPT0gMikgeyAvL07hur91IG7DsyBsw6AgY2jhur8gxJHhu5kgxJFhIGzhu7FhIGNo4buNblxyXG4gICAgICAgICAgICBzdHIgKz0gJ++8jEdpw6EgdHLhu4sgaGnhu4duIHThuqFp77yaJyArIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/UICandyTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f98531e1DxDy5E4Lq5Kg57G', 'UICandyTransaction');
// scripts/candy/UICandyTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onEnable: function onEnable() {
    this.listRank = this._data.items;
    this.listview.numItems = this.listRank.length;

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }
  },
  eventClose: function eventClose() {
    this.back();
  },
  onListRender: function onListRender(item, idx) {
    var rank = this.listRank[idx];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FuZHlcXFVJQ2FuZHlUcmFuc2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJMaXN0dmlldyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0dmlldyIsIm9uRW5hYmxlIiwibGlzdFJhbmsiLCJfZGF0YSIsIml0ZW1zIiwibnVtSXRlbXMiLCJsZW5ndGgiLCJub2RlIiwiekluZGV4IiwibGFzdFpJbmRleCIsImV2ZW50Q2xvc2UiLCJiYWNrIiwib25MaXN0UmVuZGVyIiwiaXRlbSIsImlkeCIsInJhbmsiLCJnZXRDb21wb25lbnQiLCJuYW1lIiwiaW5pdCIsIm9uTGlzdFNlbGVjdGVkIiwic2VsZWN0ZWRJZCIsImxhc3RTZWxlY3RlZElkIiwidmFsIiwibGlzdCIsImxpc3RJdGVtIiwiX2xpc3QiLCJzdHIiLCJzZWxlY3RlZE1vZGUiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRIaXN0b3J5V2luIiwiZXZlbnRBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1OO0FBRE4sR0FIUDtBQU1MTyxFQUFBQSxRQU5LLHNCQU1LO0FBQ04sU0FBS0MsUUFBTCxHQUFnQixLQUFLQyxLQUFMLENBQVdDLEtBQTNCO0FBQ0EsU0FBS0osUUFBTCxDQUFjSyxRQUFkLEdBQXlCLEtBQUtILFFBQUwsQ0FBY0ksTUFBdkM7O0FBQ0EsUUFBSSxLQUFLQyxJQUFMLENBQVVDLE1BQVYsSUFBb0JaLEVBQUUsQ0FBQ2EsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CWixFQUFFLENBQUNhLFVBQXRCO0FBQ0g7QUFDSixHQVpJO0FBYUxDLEVBQUFBLFVBYkssd0JBYVE7QUFDVCxTQUFLQyxJQUFMO0FBQ0gsR0FmSTtBQWdCTEMsRUFBQUEsWUFoQkssd0JBZ0JRQyxJQWhCUixFQWdCY0MsR0FoQmQsRUFnQm1CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLYixRQUFMLENBQWNZLEdBQWQsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQztBQUNILEdBbkJJO0FBb0JMSSxFQUFBQSxjQXBCSywwQkFvQlVOLElBcEJWLEVBb0JnQk8sVUFwQmhCLEVBb0I0QkMsY0FwQjVCLEVBb0I0Q0MsR0FwQjVDLEVBb0JpRDtBQUNsRCxRQUFJLENBQUNULElBQUwsRUFDSTtBQUNKLFFBQUlVLElBQUksR0FBR1YsSUFBSSxDQUFDVyxRQUFMLENBQWNDLEtBQXpCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLHFDQUFxQ0gsSUFBSSxDQUFDaEIsSUFBTCxDQUFVVSxJQUEvQyxHQUFzRCx3QkFBdEQsR0FBaUZHLFVBQWpGLEdBQThGLHlCQUE5RixHQUEwSEMsY0FBcEk7O0FBQ0EsUUFBSUUsSUFBSSxDQUFDSSxZQUFMLElBQXFCLENBQXpCLEVBQTRCO0FBQUU7QUFDMUJELE1BQUFBLEdBQUcsSUFBSSx1QkFBdUJKLEdBQTlCO0FBQ0g7O0FBQ0RNLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFaO0FBQ0gsR0E3Qkk7QUE4QkxJLEVBQUFBLGVBOUJLLDZCQThCYSxDQUVqQixDQWhDSTtBQWlDTEMsRUFBQUEsUUFqQ0ssc0JBaUNNLENBRVY7QUFuQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdHZpZXcgPSByZXF1aXJlKCdMaXN0dmlldycpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgdGhpcy5saXN0UmFuayA9IHRoaXMuX2RhdGEuaXRlbXM7XHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH0sXHJcbiAgICBvbkxpc3RSZW5kZXIoaXRlbSwgaWR4KSB7XHJcbiAgICAgICAgbGV0IHJhbmsgPSB0aGlzLmxpc3RSYW5rW2lkeF07XHJcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoaXRlbS5uYW1lKS5pbml0KHJhbmspO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFNlbGVjdGVkKGl0ZW0sIHNlbGVjdGVkSWQsIGxhc3RTZWxlY3RlZElkLCB2YWwpIHtcclxuICAgICAgICBpZiAoIWl0ZW0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBsZXQgbGlzdCA9IGl0ZW0ubGlzdEl0ZW0uX2xpc3Q7XHJcbiAgICAgICAgbGV0IHN0ciA9ICdEYW5oIHPDoWNoIGhv4bqhdCDEkeG7mW5nIGhp4buHbiB04bqhaSBsw6A6JyArIGxpc3Qubm9kZS5uYW1lICsgJ++8jEzhu7FhIGNo4buNbiBoaeG7h24gdOG6oWkgbMOg77yaJyArIHNlbGVjdGVkSWQgKyAn77yMTOG7sWEgY2jhu41uIGN14buRaSBjw7luZyBsw6DvvJonICsgbGFzdFNlbGVjdGVkSWQ7XHJcbiAgICAgICAgaWYgKGxpc3Quc2VsZWN0ZWRNb2RlID09IDIpIHsgLy9O4bq/dSBuw7MgbMOgIGNo4bq/IMSR4buZIMSRYSBs4buxYSBjaOG7jW5cclxuICAgICAgICAgICAgc3RyICs9ICfvvIxHacOhIHRy4buLIGhp4buHbiB04bqhae+8micgKyB2YWw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cik7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRIaXN0b3J5V2luKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBldmVudEFsbCgpIHtcclxuXHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
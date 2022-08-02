
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/minipoker/UIMiniPokerTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '48cb25ghjBDbpaDeyKvzI5v', 'UIMiniPokerTransaction');
// scripts/minipoker/UIMiniPokerTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview,
    ListCard: []
  },
  onLoad: function onLoad() {
    this.listRank = [];
    this.listview.numItems = this.listRank.length;
  },
  onEnable: function onEnable() {
    mm.Loading.hide();

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }

    if (this._data && this._data.items) {
      this.listRank = this._data.items;
      this.listview.numItems = this.listRank.length;
    }
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaXBva2VyXFxVSU1pbmlQb2tlclRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3IiwiTGlzdENhcmQiLCJvbkxvYWQiLCJsaXN0UmFuayIsIm51bUl0ZW1zIiwibGVuZ3RoIiwib25FbmFibGUiLCJtbSIsIkxvYWRpbmciLCJoaWRlIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJfZGF0YSIsIml0ZW1zIiwiZXZlbnRDbG9zZSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsImJhY2siLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwicmFuayIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0Iiwib25MaXN0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwibGFzdFNlbGVjdGVkSWQiLCJ2YWwiLCJsaXN0IiwibGlzdEl0ZW0iLCJfbGlzdCIsInN0ciIsInNlbGVjdGVkTW9kZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1OLFFBRE47QUFFUk8sSUFBQUEsUUFBUSxFQUFNO0FBRk4sR0FIUDtBQU9MQyxFQUFBQSxNQVBLLG9CQU9JO0FBQ0wsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtILFFBQUwsQ0FBY0ksUUFBZCxHQUF5QixLQUFLRCxRQUFMLENBQWNFLE1BQXZDO0FBQ0gsR0FWSTtBQVdMQyxFQUFBQSxRQVhLLHNCQVdNO0FBQ1BDLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXQyxJQUFYOztBQUNBLFFBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFWLElBQW9CZixFQUFFLENBQUNnQixVQUEzQixFQUFzQztBQUNsQyxXQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBbUJmLEVBQUUsQ0FBQ2dCLFVBQXRCO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLQyxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxLQUE1QixFQUFrQztBQUM5QixXQUFLWCxRQUFMLEdBQWdCLEtBQUtVLEtBQUwsQ0FBV0MsS0FBM0I7QUFDQSxXQUFLZCxRQUFMLENBQWNJLFFBQWQsR0FBeUIsS0FBS0QsUUFBTCxDQUFjRSxNQUF2QztBQUNIO0FBQ0osR0FwQkk7QUFxQkxVLEVBQUFBLFVBckJLLHdCQXFCUTtBQUNUUixJQUFBQSxFQUFFLENBQUNTLEtBQUgsQ0FBU0MsVUFBVDtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQXhCSTtBQXlCTEMsRUFBQUEsWUF6Qkssd0JBeUJRQyxJQXpCUixFQXlCY0MsR0F6QmQsRUF5Qm1CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLbkIsUUFBTCxDQUFja0IsR0FBZCxDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQkgsSUFBSSxDQUFDSSxJQUF2QixFQUE2QkMsSUFBN0IsQ0FBa0NILElBQWxDO0FBQ0gsR0E1Qkk7QUE2QkxJLEVBQUFBLGNBN0JLLDBCQTZCVU4sSUE3QlYsRUE2QmdCTyxVQTdCaEIsRUE2QjRCQyxjQTdCNUIsRUE2QjRDQyxHQTdCNUMsRUE2QmlEO0FBQ2xELFFBQUksQ0FBQ1QsSUFBTCxFQUNJO0FBQ0osUUFBSVUsSUFBSSxHQUFHVixJQUFJLENBQUNXLFFBQUwsQ0FBY0MsS0FBekI7QUFDQSxRQUFJQyxHQUFHLEdBQUcscUNBQXFDSCxJQUFJLENBQUNwQixJQUFMLENBQVVjLElBQS9DLEdBQXNELHdCQUF0RCxHQUFpRkcsVUFBakYsR0FBOEYseUJBQTlGLEdBQTBIQyxjQUFwSTs7QUFDQSxRQUFJRSxJQUFJLENBQUNJLFlBQUwsSUFBcUIsQ0FBekIsRUFBNEI7QUFBRTtBQUMxQkQsTUFBQUEsR0FBRyxJQUFJLHVCQUF1QkosR0FBOUI7QUFDSDs7QUFDRE0sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVo7QUFDSDtBQXRDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXHJcbiAgICAgICAgTGlzdENhcmQgICAgOiBbXSxcclxuICAgIH0sXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0UmFuayA9IFtdO1xyXG4gICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmxpc3RSYW5rLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpIHtcclxuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLnpJbmRleCA8PSBjYy5sYXN0WkluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLmxhc3RaSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuX2RhdGEgJiYgdGhpcy5fZGF0YS5pdGVtcyl7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJhbmsgPSB0aGlzLl9kYXRhLml0ZW1zO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdFJhbmtbaWR4XTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQocmFuayk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0U2VsZWN0ZWQoaXRlbSwgc2VsZWN0ZWRJZCwgbGFzdFNlbGVjdGVkSWQsIHZhbCkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsaXN0ID0gaXRlbS5saXN0SXRlbS5fbGlzdDtcclxuICAgICAgICBsZXQgc3RyID0gJ0Rhbmggc8OhY2ggaG/huqF0IMSR4buZbmcgaGnhu4duIHThuqFpIGzDoDonICsgbGlzdC5ub2RlLm5hbWUgKyAn77yMTOG7sWEgY2jhu41uIGhp4buHbiB04bqhaSBsw6DvvJonICsgc2VsZWN0ZWRJZCArICfvvIxM4buxYSBjaOG7jW4gY3Xhu5FpIGPDuW5nIGzDoO+8micgKyBsYXN0U2VsZWN0ZWRJZDtcclxuICAgICAgICBpZiAobGlzdC5zZWxlY3RlZE1vZGUgPT0gMikgeyAvL07hur91IG7DsyBsw6AgY2jhur8gxJHhu5kgxJFhIGzhu7FhIGNo4buNblxyXG4gICAgICAgICAgICBzdHIgKz0gJ++8jEdpw6EgdHLhu4sgaGnhu4duIHThuqFp77yaJyArIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/taixiu/UITaiXiuTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '02a87MT4T5N255G4NPOVlKG', 'UITaiXiuTransaction');
// scripts/taixiu/UITaiXiuTransaction.js

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

    var request = new CasinoRequest.HistoryRequest();
    SmartFoxSDK.TaiXiuController.ZoneInstance.send(request.toSRequest());
  },
  updateData: function updateData(items) {
    mm.Loading.hide();
    this.listRank = items;
    this.listview.numItems = this.listRank.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdGFpeGl1XFxVSVRhaVhpdVRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3Iiwib25FbmFibGUiLCJsaXN0UmFuayIsIl9kYXRhIiwiaXRlbXMiLCJudW1JdGVtcyIsImxlbmd0aCIsIm5vZGUiLCJ6SW5kZXgiLCJsYXN0WkluZGV4IiwicmVxdWVzdCIsIkNhc2lub1JlcXVlc3QiLCJIaXN0b3J5UmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiVGFpWGl1Q29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsInNlbmQiLCJ0b1NSZXF1ZXN0IiwidXBkYXRlRGF0YSIsIm1tIiwiTG9hZGluZyIsImhpZGUiLCJldmVudENsb3NlIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwiYmFjayIsIm9uTGlzdFJlbmRlciIsIml0ZW0iLCJpZHgiLCJyYW5rIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsImluaXQiLCJvbkxpc3RTZWxlY3RlZCIsInNlbGVjdGVkSWQiLCJsYXN0U2VsZWN0ZWRJZCIsInZhbCIsImxpc3QiLCJsaXN0SXRlbSIsIl9saXN0Iiwic3RyIiwic2VsZWN0ZWRNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTjtBQUROLEdBSFA7QUFNTE8sRUFBQUEsUUFOSyxzQkFNSztBQUNOLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsS0FBTCxDQUFXQyxLQUEzQjtBQUNBLFNBQUtKLFFBQUwsQ0FBY0ssUUFBZCxHQUF5QixLQUFLSCxRQUFMLENBQWNJLE1BQXZDOztBQUNBLFFBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFWLElBQW9CWixFQUFFLENBQUNhLFVBQTNCLEVBQXNDO0FBQ2xDLFdBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFtQlosRUFBRSxDQUFDYSxVQUF0QjtBQUNIOztBQUNELFFBQUlDLE9BQU8sR0FBRyxJQUFJQyxhQUFhLENBQUNDLGNBQWxCLEVBQWQ7QUFDQUMsSUFBQUEsV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLElBQTFDLENBQStDTixPQUFPLENBQUNPLFVBQVIsRUFBL0M7QUFDSCxHQWRJO0FBZUxDLEVBQUFBLFVBZkssc0JBZU1kLEtBZk4sRUFlYTtBQUNkZSxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsSUFBWDtBQUNBLFNBQUtuQixRQUFMLEdBQWdCRSxLQUFoQjtBQUNBLFNBQUtKLFFBQUwsQ0FBY0ssUUFBZCxHQUF5QixLQUFLSCxRQUFMLENBQWNJLE1BQXZDO0FBQ0gsR0FuQkk7QUFvQkxnQixFQUFBQSxVQXBCSyx3QkFvQlE7QUFDVEgsSUFBQUEsRUFBRSxDQUFDSSxLQUFILENBQVNDLFVBQVQ7QUFDQSxTQUFLQyxJQUFMO0FBQ0gsR0F2Qkk7QUF3QkxDLEVBQUFBLFlBeEJLLHdCQXdCUUMsSUF4QlIsRUF3QmNDLEdBeEJkLEVBd0JtQjtBQUNwQixRQUFJQyxJQUFJLEdBQUcsS0FBSzNCLFFBQUwsQ0FBYzBCLEdBQWQsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQztBQUNILEdBM0JJO0FBNEJMSSxFQUFBQSxjQTVCSywwQkE0QlVOLElBNUJWLEVBNEJnQk8sVUE1QmhCLEVBNEI0QkMsY0E1QjVCLEVBNEI0Q0MsR0E1QjVDLEVBNEJpRDtBQUNsRCxRQUFJLENBQUNULElBQUwsRUFDSTtBQUNKLFFBQUlVLElBQUksR0FBR1YsSUFBSSxDQUFDVyxRQUFMLENBQWNDLEtBQXpCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLHFDQUFxQ0gsSUFBSSxDQUFDOUIsSUFBTCxDQUFVd0IsSUFBL0MsR0FBc0Qsd0JBQXRELEdBQWlGRyxVQUFqRixHQUE4Rix5QkFBOUYsR0FBMEhDLGNBQXBJOztBQUNBLFFBQUlFLElBQUksQ0FBQ0ksWUFBTCxJQUFxQixDQUF6QixFQUE0QjtBQUFFO0FBQzFCRCxNQUFBQSxHQUFHLElBQUksdUJBQXVCSixHQUE5QjtBQUNIO0FBQ0o7QUFwQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdHZpZXcgPSByZXF1aXJlKCdMaXN0dmlldycpO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsaXN0dmlldyAgICA6IExpc3R2aWV3LFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgdGhpcy5saXN0UmFuayA9IHRoaXMuX2RhdGEuaXRlbXM7XHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5IaXN0b3J5UmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZURhdGEoaXRlbXMpIHtcclxuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmxpc3RSYW5rID0gaXRlbXM7XHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdFJhbmtbaWR4XTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQocmFuayk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0U2VsZWN0ZWQoaXRlbSwgc2VsZWN0ZWRJZCwgbGFzdFNlbGVjdGVkSWQsIHZhbCkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsaXN0ID0gaXRlbS5saXN0SXRlbS5fbGlzdDtcclxuICAgICAgICBsZXQgc3RyID0gJ0Rhbmggc8OhY2ggaG/huqF0IMSR4buZbmcgaGnhu4duIHThuqFpIGzDoDonICsgbGlzdC5ub2RlLm5hbWUgKyAn77yMTOG7sWEgY2jhu41uIGhp4buHbiB04bqhaSBsw6DvvJonICsgc2VsZWN0ZWRJZCArICfvvIxM4buxYSBjaOG7jW4gY3Xhu5FpIGPDuW5nIGzDoO+8micgKyBsYXN0U2VsZWN0ZWRJZDtcclxuICAgICAgICBpZiAobGlzdC5zZWxlY3RlZE1vZGUgPT0gMikgeyAvL07hur91IG7DsyBsw6AgY2jhur8gxJHhu5kgxJFhIGzhu7FhIGNo4buNblxyXG4gICAgICAgICAgICBzdHIgKz0gJ++8jEdpw6EgdHLhu4sgaGnhu4duIHThuqFp77yaJyArIHZhbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuIl19
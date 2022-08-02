
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/taixiu/UITaiXiuRank.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cfdf1heouZIur8R+1seb+OH', 'UITaiXiuRank');
// scripts/taixiu/UITaiXiuRank.js

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

    var request = new CasinoRequest.LeaderBoardRequest();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdGFpeGl1XFxVSVRhaVhpdVJhbmsuanMiXSwibmFtZXMiOlsiTGlzdHZpZXciLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibGlzdHZpZXciLCJvbkVuYWJsZSIsImxpc3RSYW5rIiwiX2RhdGEiLCJpdGVtcyIsIm51bUl0ZW1zIiwibGVuZ3RoIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJyZXF1ZXN0IiwiQ2FzaW5vUmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiVGFpWGl1Q29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsInNlbmQiLCJ0b1NSZXF1ZXN0IiwidXBkYXRlRGF0YSIsIm1tIiwiTG9hZGluZyIsImhpZGUiLCJldmVudENsb3NlIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwiYmFjayIsIm9uTGlzdFJlbmRlciIsIml0ZW0iLCJpZHgiLCJyYW5rIiwiZ2V0Q29tcG9uZW50IiwibmFtZSIsImluaXQiLCJvbkxpc3RTZWxlY3RlZCIsInNlbGVjdGVkSWQiLCJsYXN0U2VsZWN0ZWRJZCIsInZhbCIsImxpc3QiLCJsaXN0SXRlbSIsIl9saXN0Iiwic3RyIiwic2VsZWN0ZWRNb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTjtBQUROLEdBSFA7QUFNTE8sRUFBQUEsUUFOSyxzQkFNSztBQUNOLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsS0FBTCxDQUFXQyxLQUEzQjtBQUNBLFNBQUtKLFFBQUwsQ0FBY0ssUUFBZCxHQUF5QixLQUFLSCxRQUFMLENBQWNJLE1BQXZDOztBQUNBLFFBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFWLElBQW9CWixFQUFFLENBQUNhLFVBQTNCLEVBQXNDO0FBQ2xDLFdBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFtQlosRUFBRSxDQUFDYSxVQUF0QjtBQUNIOztBQUNELFFBQUlDLE9BQU8sR0FBRyxJQUFJQyxhQUFhLENBQUNDLGtCQUFsQixFQUFkO0FBQ0FDLElBQUFBLFdBQVcsQ0FBQ0MsZ0JBQVosQ0FBNkJDLFlBQTdCLENBQTBDQyxJQUExQyxDQUErQ04sT0FBTyxDQUFDTyxVQUFSLEVBQS9DO0FBQ0gsR0FkSTtBQWVMQyxFQUFBQSxVQWZLLHNCQWVNZCxLQWZOLEVBZWE7QUFDZGUsSUFBQUEsRUFBRSxDQUFDQyxPQUFILENBQVdDLElBQVg7QUFDQSxTQUFLbkIsUUFBTCxHQUFnQkUsS0FBaEI7QUFDQSxTQUFLSixRQUFMLENBQWNLLFFBQWQsR0FBeUIsS0FBS0gsUUFBTCxDQUFjSSxNQUF2QztBQUNILEdBbkJJO0FBb0JMZ0IsRUFBQUEsVUFwQkssd0JBb0JRO0FBQ1RILElBQUFBLEVBQUUsQ0FBQ0ksS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS0MsSUFBTDtBQUNILEdBdkJJO0FBd0JMQyxFQUFBQSxZQXhCSyx3QkF3QlFDLElBeEJSLEVBd0JjQyxHQXhCZCxFQXdCbUI7QUFDcEIsUUFBSUMsSUFBSSxHQUFHLEtBQUszQixRQUFMLENBQWMwQixHQUFkLENBQVg7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRyxZQUFMLENBQWtCSCxJQUFJLENBQUNJLElBQXZCLEVBQTZCQyxJQUE3QixDQUFrQ0gsSUFBbEMsRUFBd0NELEdBQXhDO0FBQ0gsR0EzQkk7QUE0QkxLLEVBQUFBLGNBNUJLLDBCQTRCVU4sSUE1QlYsRUE0QmdCTyxVQTVCaEIsRUE0QjRCQyxjQTVCNUIsRUE0QjRDQyxHQTVCNUMsRUE0QmlEO0FBQ2xELFFBQUksQ0FBQ1QsSUFBTCxFQUNJO0FBQ0osUUFBSVUsSUFBSSxHQUFHVixJQUFJLENBQUNXLFFBQUwsQ0FBY0MsS0FBekI7QUFDQSxRQUFJQyxHQUFHLEdBQUcscUNBQXFDSCxJQUFJLENBQUM5QixJQUFMLENBQVV3QixJQUEvQyxHQUFzRCx3QkFBdEQsR0FBaUZHLFVBQWpGLEdBQThGLHlCQUE5RixHQUEwSEMsY0FBcEk7O0FBQ0EsUUFBSUUsSUFBSSxDQUFDSSxZQUFMLElBQXFCLENBQXpCLEVBQTRCO0FBQUU7QUFDMUJELE1BQUFBLEdBQUcsSUFBSSx1QkFBdUJKLEdBQTlCO0FBQ0g7QUFDSjtBQXBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICB0aGlzLmxpc3RSYW5rID0gdGhpcy5fZGF0YS5pdGVtcztcclxuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBjYy5sYXN0WkluZGV4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0LkxlYWRlckJvYXJkUmVxdWVzdCgpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlRhaVhpdUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIHVwZGF0ZURhdGEoaXRlbXMpIHtcclxuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmxpc3RSYW5rID0gaXRlbXM7XHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgfSxcclxuICAgIG9uTGlzdFJlbmRlcihpdGVtLCBpZHgpIHtcclxuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdFJhbmtbaWR4XTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQocmFuaywgaWR4KTtcclxuICAgIH0sXHJcbiAgICBvbkxpc3RTZWxlY3RlZChpdGVtLCBzZWxlY3RlZElkLCBsYXN0U2VsZWN0ZWRJZCwgdmFsKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGxpc3QgPSBpdGVtLmxpc3RJdGVtLl9saXN0O1xyXG4gICAgICAgIGxldCBzdHIgPSAnRGFuaCBzw6FjaCBob+G6oXQgxJHhu5luZyBoaeG7h24gdOG6oWkgbMOgOicgKyBsaXN0Lm5vZGUubmFtZSArICfvvIxM4buxYSBjaOG7jW4gaGnhu4duIHThuqFpIGzDoO+8micgKyBzZWxlY3RlZElkICsgJ++8jEzhu7FhIGNo4buNbiBjdeG7kWkgY8O5bmcgbMOg77yaJyArIGxhc3RTZWxlY3RlZElkO1xyXG4gICAgICAgIGlmIChsaXN0LnNlbGVjdGVkTW9kZSA9PSAyKSB7IC8vTuG6v3UgbsOzIGzDoCBjaOG6vyDEkeG7mSDEkWEgbOG7sWEgY2jhu41uXHJcbiAgICAgICAgICAgIHN0ciArPSAn77yMR2nDoSB0cuG7iyBoaeG7h24gdOG6oWnvvJonICsgdmFsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSk7XHJcblxyXG4iXX0=
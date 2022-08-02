
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/xocdia/UIXocDiaTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd6386qfl9lItLDf/mWiMEbf', 'UIXocDiaTransaction');
// scripts/xocdia/UIXocDiaTransaction.js

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
    mm.audio.playButton();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xceG9jZGlhXFxVSVhvY0RpYVRyYW5zYWN0aW9uLmpzIl0sIm5hbWVzIjpbIkxpc3R2aWV3IiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxpc3R2aWV3Iiwib25FbmFibGUiLCJtbSIsIkxvYWRpbmciLCJoaWRlIiwibGlzdFRyYW5zIiwiX2RhdGEiLCJpdGVtcyIsIm51bUl0ZW1zIiwibGVuZ3RoIiwiZXZlbnRDbG9zZSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsImJhY2siLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwicmFuayIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0Iiwib25MaXN0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwibGFzdFNlbGVjdGVkSWQiLCJ2YWwiLCJsaXN0IiwibGlzdEl0ZW0iLCJfbGlzdCIsInN0ciIsIm5vZGUiLCJzZWxlY3RlZE1vZGUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFFBQVEsR0FBR0MsT0FBTyxDQUFDLFVBQUQsQ0FBeEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFNTjtBQUROLEdBSFA7QUFNTE8sRUFBQUEsUUFOSyxzQkFNSztBQUNOQyxJQUFBQSxFQUFFLENBQUNDLE9BQUgsQ0FBV0MsSUFBWDtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBS0MsS0FBTCxDQUFXQyxLQUE1QjtBQUNBLFNBQUtQLFFBQUwsQ0FBY1EsUUFBZCxHQUF5QixLQUFLSCxTQUFMLENBQWVJLE1BQXhDO0FBQ0gsR0FWSTtBQVdMQyxFQUFBQSxVQVhLLHdCQVdRO0FBQ1RSLElBQUFBLEVBQUUsQ0FBQ1MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS0MsSUFBTDtBQUNILEdBZEk7QUFlTEMsRUFBQUEsWUFmSyx3QkFlUUMsSUFmUixFQWVjQyxHQWZkLEVBZW1CO0FBQ3BCLFFBQUlDLElBQUksR0FBRyxLQUFLWixTQUFMLENBQWVXLEdBQWYsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQztBQUNILEdBbEJJO0FBbUJMSSxFQUFBQSxjQW5CSywwQkFtQlVOLElBbkJWLEVBbUJnQk8sVUFuQmhCLEVBbUI0QkMsY0FuQjVCLEVBbUI0Q0MsR0FuQjVDLEVBbUJpRDtBQUNsRCxRQUFJLENBQUNULElBQUwsRUFDSTtBQUNKLFFBQUlVLElBQUksR0FBR1YsSUFBSSxDQUFDVyxRQUFMLENBQWNDLEtBQXpCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLHFDQUFxQ0gsSUFBSSxDQUFDSSxJQUFMLENBQVVWLElBQS9DLEdBQXNELHdCQUF0RCxHQUFpRkcsVUFBakYsR0FBOEYseUJBQTlGLEdBQTBIQyxjQUFwSTs7QUFDQSxRQUFJRSxJQUFJLENBQUNLLFlBQUwsSUFBcUIsQ0FBekIsRUFBNEI7QUFBRTtBQUMxQkYsTUFBQUEsR0FBRyxJQUFJLHVCQUF1QkosR0FBOUI7QUFDSDs7QUFDRE8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQVo7QUFDSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcclxuICAgICAgICB0aGlzLmxpc3RUcmFucyA9IHRoaXMuX2RhdGEuaXRlbXM7XHJcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFRyYW5zLmxlbmd0aDtcclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlKCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH0sXHJcbiAgICBvbkxpc3RSZW5kZXIoaXRlbSwgaWR4KSB7XHJcbiAgICAgICAgbGV0IHJhbmsgPSB0aGlzLmxpc3RUcmFuc1tpZHhdO1xyXG4gICAgICAgIGl0ZW0uZ2V0Q29tcG9uZW50KGl0ZW0ubmFtZSkuaW5pdChyYW5rKTtcclxuICAgIH0sXHJcbiAgICBvbkxpc3RTZWxlY3RlZChpdGVtLCBzZWxlY3RlZElkLCBsYXN0U2VsZWN0ZWRJZCwgdmFsKSB7XHJcbiAgICAgICAgaWYgKCFpdGVtKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IGxpc3QgPSBpdGVtLmxpc3RJdGVtLl9saXN0O1xyXG4gICAgICAgIGxldCBzdHIgPSAnRGFuaCBzw6FjaCBob+G6oXQgxJHhu5luZyBoaeG7h24gdOG6oWkgbMOgOicgKyBsaXN0Lm5vZGUubmFtZSArICfvvIxM4buxYSBjaOG7jW4gaGnhu4duIHThuqFpIGzDoO+8micgKyBzZWxlY3RlZElkICsgJ++8jEzhu7FhIGNo4buNbiBjdeG7kWkgY8O5bmcgbMOg77yaJyArIGxhc3RTZWxlY3RlZElkO1xyXG4gICAgICAgIGlmIChsaXN0LnNlbGVjdGVkTW9kZSA9PSAyKSB7IC8vTuG6v3UgbsOzIGzDoCBjaOG6vyDEkeG7mSDEkWEgbOG7sWEgY2jhu41uXHJcbiAgICAgICAgICAgIHN0ciArPSAn77yMR2nDoSB0cuG7iyBoaeG7h24gdOG6oWnvvJonICsgdmFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zb2xlLmxvZyhzdHIpO1xyXG4gICAgfVxyXG59KTtcclxuIl19
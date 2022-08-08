
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/UIRouletteTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8afe49fZYBET5yoqw5KoFiP', 'UIRouletteTransaction');
// scripts/roulette/UIRouletteTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listRank = [];
    this.listview.numItems = this.listRank.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3JvdWxldHRlL1VJUm91bGV0dGVUcmFuc2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJMaXN0dmlldyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0dmlldyIsIm9uTG9hZCIsImxpc3RSYW5rIiwibnVtSXRlbXMiLCJsZW5ndGgiLCJvbkVuYWJsZSIsIm1tIiwiTG9hZGluZyIsImhpZGUiLCJfZGF0YSIsIml0ZW1zIiwiZXZlbnRDbG9zZSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsImJhY2siLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwicmFuayIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0Iiwib25MaXN0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwibGFzdFNlbGVjdGVkSWQiLCJ2YWwiLCJsaXN0IiwibGlzdEl0ZW0iLCJfbGlzdCIsInN0ciIsIm5vZGUiLCJzZWxlY3RlZE1vZGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1OO0FBRE4sR0FIUDtBQU1MTyxFQUFBQSxNQU5LLG9CQU1JO0FBQ0wsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtGLFFBQUwsQ0FBY0csUUFBZCxHQUF5QixLQUFLRCxRQUFMLENBQWNFLE1BQXZDO0FBQ0gsR0FUSTtBQVVMQyxFQUFBQSxRQVZLLHNCQVVLO0FBQ05DLElBQUFBLEVBQUUsQ0FBQ0MsT0FBSCxDQUFXQyxJQUFYO0FBQ0EsU0FBS04sUUFBTCxHQUFnQixLQUFLTyxLQUFMLENBQVdDLEtBQTNCO0FBQ0EsU0FBS1YsUUFBTCxDQUFjRyxRQUFkLEdBQXlCLEtBQUtELFFBQUwsQ0FBY0UsTUFBdkM7QUFDSCxHQWRJO0FBZUxPLEVBQUFBLFVBZkssd0JBZVE7QUFDVEwsSUFBQUEsRUFBRSxDQUFDTSxLQUFILENBQVNDLFVBQVQ7QUFDQSxTQUFLQyxJQUFMO0FBQ0gsR0FsQkk7QUFtQkxDLEVBQUFBLFlBbkJLLHdCQW1CUUMsSUFuQlIsRUFtQmNDLEdBbkJkLEVBbUJtQjtBQUNwQixRQUFJQyxJQUFJLEdBQUcsS0FBS2hCLFFBQUwsQ0FBY2UsR0FBZCxDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0csWUFBTCxDQUFrQkgsSUFBSSxDQUFDSSxJQUF2QixFQUE2QkMsSUFBN0IsQ0FBa0NILElBQWxDO0FBQ0gsR0F0Qkk7QUF1QkxJLEVBQUFBLGNBdkJLLDBCQXVCVU4sSUF2QlYsRUF1QmdCTyxVQXZCaEIsRUF1QjRCQyxjQXZCNUIsRUF1QjRDQyxHQXZCNUMsRUF1QmlEO0FBQ2xELFFBQUksQ0FBQ1QsSUFBTCxFQUNJO0FBQ0osUUFBSVUsSUFBSSxHQUFHVixJQUFJLENBQUNXLFFBQUwsQ0FBY0MsS0FBekI7QUFDQSxRQUFJQyxHQUFHLEdBQUcscUNBQXFDSCxJQUFJLENBQUNJLElBQUwsQ0FBVVYsSUFBL0MsR0FBc0Qsd0JBQXRELEdBQWlGRyxVQUFqRixHQUE4Rix5QkFBOUYsR0FBMEhDLGNBQXBJOztBQUNBLFFBQUlFLElBQUksQ0FBQ0ssWUFBTCxJQUFxQixDQUF6QixFQUE0QjtBQUFFO0FBQzFCRixNQUFBQSxHQUFHLElBQUksdUJBQXVCSixHQUE5QjtBQUNIO0FBQ0o7QUEvQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgTGlzdHZpZXcgPSByZXF1aXJlKCdMaXN0dmlldycpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXG4gICAgfSxcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMubGlzdFJhbmsgPSBbXTtcbiAgICAgICAgdGhpcy5saXN0dmlldy5udW1JdGVtcyA9IHRoaXMubGlzdFJhbmsubGVuZ3RoO1xuICAgIH0sXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgbW0uTG9hZGluZy5oaWRlKCk7XG4gICAgICAgIHRoaXMubGlzdFJhbmsgPSB0aGlzLl9kYXRhLml0ZW1zO1xuICAgICAgICB0aGlzLmxpc3R2aWV3Lm51bUl0ZW1zID0gdGhpcy5saXN0UmFuay5sZW5ndGg7XG4gICAgfSxcbiAgICBldmVudENsb3NlKCkge1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuYmFjaygpO1xuICAgIH0sXG4gICAgb25MaXN0UmVuZGVyKGl0ZW0sIGlkeCkge1xuICAgICAgICBsZXQgcmFuayA9IHRoaXMubGlzdFJhbmtbaWR4XTtcbiAgICAgICAgaXRlbS5nZXRDb21wb25lbnQoaXRlbS5uYW1lKS5pbml0KHJhbmspO1xuICAgIH0sXG4gICAgb25MaXN0U2VsZWN0ZWQoaXRlbSwgc2VsZWN0ZWRJZCwgbGFzdFNlbGVjdGVkSWQsIHZhbCkge1xuICAgICAgICBpZiAoIWl0ZW0pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGxldCBsaXN0ID0gaXRlbS5saXN0SXRlbS5fbGlzdDtcbiAgICAgICAgbGV0IHN0ciA9ICdEYW5oIHPDoWNoIGhv4bqhdCDEkeG7mW5nIGhp4buHbiB04bqhaSBsw6A6JyArIGxpc3Qubm9kZS5uYW1lICsgJ++8jEzhu7FhIGNo4buNbiBoaeG7h24gdOG6oWkgbMOg77yaJyArIHNlbGVjdGVkSWQgKyAn77yMTOG7sWEgY2jhu41uIGN14buRaSBjw7luZyBsw6DvvJonICsgbGFzdFNlbGVjdGVkSWQ7XG4gICAgICAgIGlmIChsaXN0LnNlbGVjdGVkTW9kZSA9PSAyKSB7IC8vTuG6v3UgbsOzIGzDoCBjaOG6vyDEkeG7mSDEkWEgbOG7sWEgY2jhu41uXG4gICAgICAgICAgICBzdHIgKz0gJ++8jEdpw6EgdHLhu4sgaGnhu4duIHThuqFp77yaJyArIHZhbDtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuXG4iXX0=
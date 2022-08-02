
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/UISinbadHistoryTransaction.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2d0cfAstC5MnplBOYUrsRWa', 'UISinbadHistoryTransaction');
// scripts/sinbad/UISinbadHistoryTransaction.js

"use strict";

var Listview = require('Listview');

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    listview: Listview
  },
  onLoad: function onLoad() {
    this.listTransaction = [{
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }, {
      "session": "1234567",
      "time": "22/07/2020 19: 04",
      "stakes": "1000",
      "win": "10.000"
    }];
    this.listview.numItems = this.listTransaction.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxVSVNpbmJhZEhpc3RvcnlUcmFuc2FjdGlvbi5qcyJdLCJuYW1lcyI6WyJMaXN0dmlldyIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiVm96QmFzZUNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJsaXN0dmlldyIsIm9uTG9hZCIsImxpc3RUcmFuc2FjdGlvbiIsIm51bUl0ZW1zIiwibGVuZ3RoIiwib25FbmFibGUiLCJfZGF0YSIsIml0ZW1zIiwiZXZlbnRDbG9zZSIsImJhY2siLCJvbkxpc3RSZW5kZXIiLCJpdGVtIiwiaWR4IiwicmFuayIsImdldENvbXBvbmVudCIsIm5hbWUiLCJpbml0Iiwib25MaXN0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwibGFzdFNlbGVjdGVkSWQiLCJ2YWwiLCJsaXN0IiwibGlzdEl0ZW0iLCJfbGlzdCIsInN0ciIsIm5vZGUiLCJzZWxlY3RlZE1vZGUiLCJjb25zb2xlIiwibG9nIiwiZXZlbnRIaXN0b3J5V2luIiwiZXZlbnRBbGwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF4Qjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxRQUFRLEVBQU1OO0FBRE4sR0FIUDtBQU1MTyxFQUFBQSxNQU5LLG9CQU1JO0FBQ0wsU0FBS0MsZUFBTCxHQUF1QixDQUNuQjtBQUNJLGlCQUFnQixTQURwQjtBQUVJLGNBQWMsbUJBRmxCO0FBR0ksZ0JBQWEsTUFIakI7QUFJSSxhQUFjO0FBSmxCLEtBRG1CLEVBT25CO0FBQ0ksaUJBQWdCLFNBRHBCO0FBRUksY0FBYyxtQkFGbEI7QUFHSSxnQkFBYSxNQUhqQjtBQUlJLGFBQWM7QUFKbEIsS0FQbUIsRUFhbkI7QUFDSSxpQkFBZ0IsU0FEcEI7QUFFSSxjQUFjLG1CQUZsQjtBQUdJLGdCQUFhLE1BSGpCO0FBSUksYUFBYztBQUpsQixLQWJtQixFQW1CbkI7QUFDSSxpQkFBZ0IsU0FEcEI7QUFFSSxjQUFjLG1CQUZsQjtBQUdJLGdCQUFhLE1BSGpCO0FBSUksYUFBYztBQUpsQixLQW5CbUIsRUF5Qm5CO0FBQ0ksaUJBQWdCLFNBRHBCO0FBRUksY0FBYyxtQkFGbEI7QUFHSSxnQkFBYSxNQUhqQjtBQUlJLGFBQWM7QUFKbEIsS0F6Qm1CLEVBK0JuQjtBQUNJLGlCQUFnQixTQURwQjtBQUVJLGNBQWMsbUJBRmxCO0FBR0ksZ0JBQWEsTUFIakI7QUFJSSxhQUFjO0FBSmxCLEtBL0JtQixDQUF2QjtBQXVDQSxTQUFLRixRQUFMLENBQWNHLFFBQWQsR0FBeUIsS0FBS0QsZUFBTCxDQUFxQkUsTUFBOUM7QUFDSCxHQS9DSTtBQWdETEMsRUFBQUEsUUFoREssc0JBZ0RLO0FBQ04sUUFBRyxLQUFLQyxLQUFMLElBQWMsS0FBS0EsS0FBTCxDQUFXQyxLQUE1QixFQUFrQztBQUM5QixXQUFLTCxlQUFMLEdBQXVCLEtBQUtJLEtBQUwsQ0FBV0MsS0FBbEM7QUFDQSxXQUFLUCxRQUFMLENBQWNHLFFBQWQsR0FBeUIsS0FBS0QsZUFBTCxDQUFxQkUsTUFBOUM7QUFDSDtBQUNKLEdBckRJO0FBc0RMSSxFQUFBQSxVQXRESyx3QkFzRFE7QUFDVCxTQUFLQyxJQUFMO0FBQ0gsR0F4REk7QUF5RExDLEVBQUFBLFlBekRLLHdCQXlEUUMsSUF6RFIsRUF5RGNDLEdBekRkLEVBeURtQjtBQUNwQixRQUFJQyxJQUFJLEdBQUcsS0FBS1gsZUFBTCxDQUFxQlUsR0FBckIsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNHLFlBQUwsQ0FBa0JILElBQUksQ0FBQ0ksSUFBdkIsRUFBNkJDLElBQTdCLENBQWtDSCxJQUFsQztBQUNILEdBNURJO0FBNkRMSSxFQUFBQSxjQTdESywwQkE2RFVOLElBN0RWLEVBNkRnQk8sVUE3RGhCLEVBNkQ0QkMsY0E3RDVCLEVBNkQ0Q0MsR0E3RDVDLEVBNkRpRDtBQUNsRCxRQUFJLENBQUNULElBQUwsRUFDSTtBQUNKLFFBQUlVLElBQUksR0FBR1YsSUFBSSxDQUFDVyxRQUFMLENBQWNDLEtBQXpCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHLHFDQUFxQ0gsSUFBSSxDQUFDSSxJQUFMLENBQVVWLElBQS9DLEdBQXNELHdCQUF0RCxHQUFpRkcsVUFBakYsR0FBOEYseUJBQTlGLEdBQTBIQyxjQUFwSTs7QUFDQSxRQUFJRSxJQUFJLENBQUNLLFlBQUwsSUFBcUIsQ0FBekIsRUFBNEI7QUFBRTtBQUMxQkYsTUFBQUEsR0FBRyxJQUFJLHVCQUF1QkosR0FBOUI7QUFDSDs7QUFDRE8sSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlKLEdBQVo7QUFDSCxHQXRFSTtBQXVFTEssRUFBQUEsZUF2RUssNkJBdUVhLENBRWpCLENBekVJO0FBMEVMQyxFQUFBQSxRQTFFSyxzQkEwRU0sQ0FFVjtBQTVFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMaXN0dmlldyA9IHJlcXVpcmUoJ0xpc3R2aWV3Jyk7XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxpc3R2aWV3ICAgIDogTGlzdHZpZXcsXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubGlzdFRyYW5zYWN0aW9uID0gW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInNlc3Npb25cIiAgICAgOiBcIjEyMzQ1NjdcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiICAgICAgOiBcIjIyLzA3LzIwMjAgMTk6IDA0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YWtlc1wiICAgOiBcIjEwMDBcIixcclxuICAgICAgICAgICAgICAgIFwid2luXCIgICAgICAgOiBcIjEwLjAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwic2Vzc2lvblwiICAgICA6IFwiMTIzNDU2N1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCIgICAgICA6IFwiMjIvMDcvMjAyMCAxOTogMDRcIixcclxuICAgICAgICAgICAgICAgIFwic3Rha2VzXCIgICA6IFwiMTAwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aW5cIiAgICAgICA6IFwiMTAuMDAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJzZXNzaW9uXCIgICAgIDogXCIxMjM0NTY3XCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIiAgICAgIDogXCIyMi8wNy8yMDIwIDE5OiAwNFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGFrZXNcIiAgIDogXCIxMDAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpblwiICAgICAgIDogXCIxMC4wMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInNlc3Npb25cIiAgICAgOiBcIjEyMzQ1NjdcIixcclxuICAgICAgICAgICAgICAgIFwidGltZVwiICAgICAgOiBcIjIyLzA3LzIwMjAgMTk6IDA0XCIsXHJcbiAgICAgICAgICAgICAgICBcInN0YWtlc1wiICAgOiBcIjEwMDBcIixcclxuICAgICAgICAgICAgICAgIFwid2luXCIgICAgICAgOiBcIjEwLjAwMFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwic2Vzc2lvblwiICAgICA6IFwiMTIzNDU2N1wiLFxyXG4gICAgICAgICAgICAgICAgXCJ0aW1lXCIgICAgICA6IFwiMjIvMDcvMjAyMCAxOTogMDRcIixcclxuICAgICAgICAgICAgICAgIFwic3Rha2VzXCIgICA6IFwiMTAwMFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ3aW5cIiAgICAgICA6IFwiMTAuMDAwXCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJzZXNzaW9uXCIgICAgIDogXCIxMjM0NTY3XCIsXHJcbiAgICAgICAgICAgICAgICBcInRpbWVcIiAgICAgIDogXCIyMi8wNy8yMDIwIDE5OiAwNFwiLFxyXG4gICAgICAgICAgICAgICAgXCJzdGFrZXNcIiAgIDogXCIxMDAwXCIsXHJcbiAgICAgICAgICAgICAgICBcIndpblwiICAgICAgIDogXCIxMC4wMDBcIlxyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICBdO1xyXG4gICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmxpc3RUcmFuc2FjdGlvbi5sZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBpZih0aGlzLl9kYXRhICYmIHRoaXMuX2RhdGEuaXRlbXMpe1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RUcmFuc2FjdGlvbiA9IHRoaXMuX2RhdGEuaXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdHZpZXcubnVtSXRlbXMgPSB0aGlzLmxpc3RUcmFuc2FjdGlvbi5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0UmVuZGVyKGl0ZW0sIGlkeCkge1xyXG4gICAgICAgIGxldCByYW5rID0gdGhpcy5saXN0VHJhbnNhY3Rpb25baWR4XTtcclxuICAgICAgICBpdGVtLmdldENvbXBvbmVudChpdGVtLm5hbWUpLmluaXQocmFuayk7XHJcbiAgICB9LFxyXG4gICAgb25MaXN0U2VsZWN0ZWQoaXRlbSwgc2VsZWN0ZWRJZCwgbGFzdFNlbGVjdGVkSWQsIHZhbCkge1xyXG4gICAgICAgIGlmICghaXRlbSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGxldCBsaXN0ID0gaXRlbS5saXN0SXRlbS5fbGlzdDtcclxuICAgICAgICBsZXQgc3RyID0gJ0Rhbmggc8OhY2ggaG/huqF0IMSR4buZbmcgaGnhu4duIHThuqFpIGzDoDonICsgbGlzdC5ub2RlLm5hbWUgKyAn77yMTOG7sWEgY2jhu41uIGhp4buHbiB04bqhaSBsw6DvvJonICsgc2VsZWN0ZWRJZCArICfvvIxM4buxYSBjaOG7jW4gY3Xhu5FpIGPDuW5nIGzDoO+8micgKyBsYXN0U2VsZWN0ZWRJZDtcclxuICAgICAgICBpZiAobGlzdC5zZWxlY3RlZE1vZGUgPT0gMikgeyAvL07hur91IG7DsyBsw6AgY2jhur8gxJHhu5kgxJFhIGzhu7FhIGNo4buNblxyXG4gICAgICAgICAgICBzdHIgKz0gJ++8jEdpw6EgdHLhu4sgaGnhu4duIHThuqFp77yaJyArIHZhbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coc3RyKTtcclxuICAgIH0sXHJcbiAgICBldmVudEhpc3RvcnlXaW4oKSB7XHJcblxyXG4gICAgfSxcclxuICAgIGV2ZW50QWxsKCkge1xyXG5cclxuICAgIH1cclxufSk7XHJcbiJdfQ==
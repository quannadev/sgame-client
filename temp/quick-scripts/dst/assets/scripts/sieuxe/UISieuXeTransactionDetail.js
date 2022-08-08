
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sieuxe/UISieuXeTransactionDetail.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78611ZfwltNUJrAyJOj63zL', 'UISieuXeTransactionDetail');
// scripts/sieuxe/UISieuXeTransactionDetail.js

"use strict";

var reel = require("SieuXeReel");

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    reels: {
      "default": [],
      type: cc.Node
    },
    lbSession: cc.Label,
    lbTotalWin: cc.Label,
    TotalItemRun: 20,
    TotalColumn: 5
  },
  onEnable: function onEnable() {
    this.TotalItemRun = 20;
    this.lbSession.string = "#" + this._data.session;
    this.lbTotalWin.string = Utils.addDotToNumber(this._data.win);
    var result = this._data.map; // reformat

    for (var i = 0; i < result.length; i++) {
      var count = i % 5;

      if (count > 2) {
        result[i] = result[i] + 1;
      }
    }

    result = this.getDataResult(result);
    Promise.all(this.reels.map(function (itemReel, pos) {
      Promise.all(itemReel.children.map(function (itemXe, index) {
        itemXe.getComponent("SieuXeItem").init(this, result[pos][index]);
      }));
    }));

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex;
    }
  },
  getDataResult: function getDataResult(result) {
    var newArray = [];

    for (var i = 0; i < this.TotalColumn; i++) {
      newArray[i] = [];
    }

    for (var _i = 0; _i < result.length; _i++) {
      newArray[_i % this.TotalColumn].push(result[_i]);
    }

    return newArray;
  },
  eventClose: function eventClose() {
    this.back();
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpZXV4ZS9VSVNpZXVYZVRyYW5zYWN0aW9uRGV0YWlsLmpzIl0sIm5hbWVzIjpbInJlZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVlbHMiLCJ0eXBlIiwiTm9kZSIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUb3RhbFdpbiIsIlRvdGFsSXRlbVJ1biIsIlRvdGFsQ29sdW1uIiwib25FbmFibGUiLCJzdHJpbmciLCJfZGF0YSIsInNlc3Npb24iLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwid2luIiwicmVzdWx0IiwibWFwIiwiaSIsImxlbmd0aCIsImNvdW50IiwiZ2V0RGF0YVJlc3VsdCIsIlByb21pc2UiLCJhbGwiLCJpdGVtUmVlbCIsInBvcyIsImNoaWxkcmVuIiwiaXRlbVhlIiwiaW5kZXgiLCJnZXRDb21wb25lbnQiLCJpbml0Iiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJuZXdBcnJheSIsInB1c2giLCJldmVudENsb3NlIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQVVDLE9BQU8sQ0FBQyxZQUFELENBQXpCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLEVBRE47QUFFSEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRk4sS0FEQztBQUtSQyxJQUFBQSxTQUFTLEVBQUtQLEVBQUUsQ0FBQ1EsS0FMVDtBQU1SQyxJQUFBQSxVQUFVLEVBQUlULEVBQUUsQ0FBQ1EsS0FOVDtBQU9SRSxJQUFBQSxZQUFZLEVBQUksRUFQUjtBQVFSQyxJQUFBQSxXQUFXLEVBQVc7QUFSZCxHQUhQO0FBYUxDLEVBQUFBLFFBYkssc0JBYU87QUFDUixTQUFLRixZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsU0FBS0gsU0FBTCxDQUFlTSxNQUFmLEdBQXdCLE1BQUksS0FBS0MsS0FBTCxDQUFXQyxPQUF2QztBQUNBLFNBQUtOLFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUIsS0FBS0gsS0FBTCxDQUFXSSxHQUFoQyxDQUF6QjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxLQUFLTCxLQUFMLENBQVdNLEdBQXhCLENBSlEsQ0FLUjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUYsTUFBTSxDQUFDRyxNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFvQztBQUNoQyxVQUFJRSxLQUFLLEdBQUdGLENBQUMsR0FBQyxDQUFkOztBQUNBLFVBQUlFLEtBQUssR0FBRyxDQUFaLEVBQWM7QUFDVkosUUFBQUEsTUFBTSxDQUFDRSxDQUFELENBQU4sR0FBWUYsTUFBTSxDQUFDRSxDQUFELENBQU4sR0FBWSxDQUF4QjtBQUNIO0FBQ0o7O0FBQ0RGLElBQUFBLE1BQU0sR0FBRyxLQUFLSyxhQUFMLENBQW1CTCxNQUFuQixDQUFUO0FBQ0FNLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt0QixLQUFMLENBQVdnQixHQUFYLENBQWUsVUFBU08sUUFBVCxFQUFtQkMsR0FBbkIsRUFBd0I7QUFDL0NILE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFRLENBQUNFLFFBQVQsQ0FBa0JULEdBQWxCLENBQXNCLFVBQVNVLE1BQVQsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ3RERCxRQUFBQSxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsWUFBcEIsRUFBa0NDLElBQWxDLENBQXVDLElBQXZDLEVBQTZDZCxNQUFNLENBQUNTLEdBQUQsQ0FBTixDQUFZRyxLQUFaLENBQTdDO0FBQ0gsT0FGVyxDQUFaO0FBR0gsS0FKVyxDQUFaOztBQUtBLFFBQUksS0FBS0csSUFBTCxDQUFVQyxNQUFWLElBQW9CbkMsRUFBRSxDQUFDb0MsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CbkMsRUFBRSxDQUFDb0MsVUFBdEI7QUFDSDtBQUNKLEdBbENJO0FBbUNMWixFQUFBQSxhQUFhLEVBQUUsdUJBQVNMLE1BQVQsRUFBaUI7QUFDNUIsUUFBSWtCLFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSWhCLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRSxLQUFLVixXQUF0QixFQUFtQ1UsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQ2dCLE1BQUFBLFFBQVEsQ0FBQ2hCLENBQUQsQ0FBUixHQUFjLEVBQWQ7QUFDSDs7QUFDRCxTQUFLLElBQUlBLEVBQUMsR0FBQyxDQUFYLEVBQWNBLEVBQUMsR0FBRUYsTUFBTSxDQUFDRyxNQUF4QixFQUFnQ0QsRUFBQyxFQUFqQyxFQUFxQztBQUNqQ2dCLE1BQUFBLFFBQVEsQ0FBQ2hCLEVBQUMsR0FBQyxLQUFLVixXQUFSLENBQVIsQ0FBNkIyQixJQUE3QixDQUFrQ25CLE1BQU0sQ0FBQ0UsRUFBRCxDQUF4QztBQUNIOztBQUNELFdBQU9nQixRQUFQO0FBQ0gsR0E1Q0k7QUE2Q0xFLEVBQUFBLFVBN0NLLHdCQTZDUTtBQUNULFNBQUtDLElBQUw7QUFDSCxHQS9DSSxDQWdETDs7QUFoREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHJlZWwgICAgICAgID0gcmVxdWlyZShcIlNpZXVYZVJlZWxcIik7XG5cbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICByZWVsczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICB9LFxuICAgICAgICBsYlNlc3Npb24gICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlRvdGFsV2luICA6IGNjLkxhYmVsLFxuICAgICAgICBUb3RhbEl0ZW1SdW4gIDogMjAsXG4gICAgICAgIFRvdGFsQ29sdW1uICAgICAgICAgOiA1LFxuICAgIH0sXG4gICAgb25FbmFibGUgKCkge1xuICAgICAgICB0aGlzLlRvdGFsSXRlbVJ1biA9IDIwO1xuICAgICAgICB0aGlzLmxiU2Vzc2lvbi5zdHJpbmcgPSBcIiNcIit0aGlzLl9kYXRhLnNlc3Npb247XG4gICAgICAgIHRoaXMubGJUb3RhbFdpbi5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9kYXRhLndpbik7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9kYXRhLm1hcDtcbiAgICAgICAgLy8gcmVmb3JtYXRcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCByZXN1bHQubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IGNvdW50ID0gaSU1O1xuICAgICAgICAgICAgaWYgKGNvdW50ID4gMil7XG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gcmVzdWx0W2ldICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSB0aGlzLmdldERhdGFSZXN1bHQocmVzdWx0KTtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5yZWVscy5tYXAoZnVuY3Rpb24oaXRlbVJlZWwsIHBvcykge1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoaXRlbVJlZWwuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKGl0ZW1YZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpdGVtWGUuZ2V0Q29tcG9uZW50KFwiU2lldVhlSXRlbVwiKS5pbml0KHRoaXMsIHJlc3VsdFtwb3NdW2luZGV4XSk7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0RGF0YVJlc3VsdDogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIGxldCBuZXdBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuVG90YWxDb2x1bW47IGkrKyl7XG4gICAgICAgICAgICBuZXdBcnJheVtpXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuZXdBcnJheVtpJXRoaXMuVG90YWxDb2x1bW5dLnB1c2gocmVzdWx0W2ldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XG4gICAgfSxcbiAgICBldmVudENsb3NlKCkge1xuICAgICAgICB0aGlzLmJhY2soKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge30sXG59KTtcbiJdfQ==
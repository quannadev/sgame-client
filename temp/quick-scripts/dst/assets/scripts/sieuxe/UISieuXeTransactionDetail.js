
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2lldXhlXFxVSVNpZXVYZVRyYW5zYWN0aW9uRGV0YWlsLmpzIl0sIm5hbWVzIjpbInJlZWwiLCJyZXF1aXJlIiwiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVlbHMiLCJ0eXBlIiwiTm9kZSIsImxiU2Vzc2lvbiIsIkxhYmVsIiwibGJUb3RhbFdpbiIsIlRvdGFsSXRlbVJ1biIsIlRvdGFsQ29sdW1uIiwib25FbmFibGUiLCJzdHJpbmciLCJfZGF0YSIsInNlc3Npb24iLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwid2luIiwicmVzdWx0IiwibWFwIiwiaSIsImxlbmd0aCIsImNvdW50IiwiZ2V0RGF0YVJlc3VsdCIsIlByb21pc2UiLCJhbGwiLCJpdGVtUmVlbCIsInBvcyIsImNoaWxkcmVuIiwiaXRlbVhlIiwiaW5kZXgiLCJnZXRDb21wb25lbnQiLCJpbml0Iiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJuZXdBcnJheSIsInB1c2giLCJldmVudENsb3NlIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQVVDLE9BQU8sQ0FBQyxZQUFELENBQXpCOztBQUVBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLEVBRE47QUFFSEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRk4sS0FEQztBQUtSQyxJQUFBQSxTQUFTLEVBQUtQLEVBQUUsQ0FBQ1EsS0FMVDtBQU1SQyxJQUFBQSxVQUFVLEVBQUlULEVBQUUsQ0FBQ1EsS0FOVDtBQU9SRSxJQUFBQSxZQUFZLEVBQUksRUFQUjtBQVFSQyxJQUFBQSxXQUFXLEVBQVc7QUFSZCxHQUhQO0FBYUxDLEVBQUFBLFFBYkssc0JBYU87QUFDUixTQUFLRixZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsU0FBS0gsU0FBTCxDQUFlTSxNQUFmLEdBQXdCLE1BQUksS0FBS0MsS0FBTCxDQUFXQyxPQUF2QztBQUNBLFNBQUtOLFVBQUwsQ0FBZ0JJLE1BQWhCLEdBQXlCRyxLQUFLLENBQUNDLGNBQU4sQ0FBcUIsS0FBS0gsS0FBTCxDQUFXSSxHQUFoQyxDQUF6QjtBQUNBLFFBQUlDLE1BQU0sR0FBRyxLQUFLTCxLQUFMLENBQVdNLEdBQXhCLENBSlEsQ0FLUjs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRUYsTUFBTSxDQUFDRyxNQUF4QixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFvQztBQUNoQyxVQUFJRSxLQUFLLEdBQUdGLENBQUMsR0FBQyxDQUFkOztBQUNBLFVBQUlFLEtBQUssR0FBRyxDQUFaLEVBQWM7QUFDVkosUUFBQUEsTUFBTSxDQUFDRSxDQUFELENBQU4sR0FBWUYsTUFBTSxDQUFDRSxDQUFELENBQU4sR0FBWSxDQUF4QjtBQUNIO0FBQ0o7O0FBQ0RGLElBQUFBLE1BQU0sR0FBRyxLQUFLSyxhQUFMLENBQW1CTCxNQUFuQixDQUFUO0FBQ0FNLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUt0QixLQUFMLENBQVdnQixHQUFYLENBQWUsVUFBU08sUUFBVCxFQUFtQkMsR0FBbkIsRUFBd0I7QUFDL0NILE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFRLENBQUNFLFFBQVQsQ0FBa0JULEdBQWxCLENBQXNCLFVBQVNVLE1BQVQsRUFBaUJDLEtBQWpCLEVBQXdCO0FBQ3RERCxRQUFBQSxNQUFNLENBQUNFLFlBQVAsQ0FBb0IsWUFBcEIsRUFBa0NDLElBQWxDLENBQXVDLElBQXZDLEVBQTZDZCxNQUFNLENBQUNTLEdBQUQsQ0FBTixDQUFZRyxLQUFaLENBQTdDO0FBQ0gsT0FGVyxDQUFaO0FBR0gsS0FKVyxDQUFaOztBQUtBLFFBQUksS0FBS0csSUFBTCxDQUFVQyxNQUFWLElBQW9CbkMsRUFBRSxDQUFDb0MsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CbkMsRUFBRSxDQUFDb0MsVUFBdEI7QUFDSDtBQUNKLEdBbENJO0FBbUNMWixFQUFBQSxhQUFhLEVBQUUsdUJBQVNMLE1BQVQsRUFBaUI7QUFDNUIsUUFBSWtCLFFBQVEsR0FBRyxFQUFmOztBQUNBLFNBQUssSUFBSWhCLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBRSxLQUFLVixXQUF0QixFQUFtQ1UsQ0FBQyxFQUFwQyxFQUF1QztBQUNuQ2dCLE1BQUFBLFFBQVEsQ0FBQ2hCLENBQUQsQ0FBUixHQUFjLEVBQWQ7QUFDSDs7QUFDRCxTQUFLLElBQUlBLEVBQUMsR0FBQyxDQUFYLEVBQWNBLEVBQUMsR0FBRUYsTUFBTSxDQUFDRyxNQUF4QixFQUFnQ0QsRUFBQyxFQUFqQyxFQUFxQztBQUNqQ2dCLE1BQUFBLFFBQVEsQ0FBQ2hCLEVBQUMsR0FBQyxLQUFLVixXQUFSLENBQVIsQ0FBNkIyQixJQUE3QixDQUFrQ25CLE1BQU0sQ0FBQ0UsRUFBRCxDQUF4QztBQUNIOztBQUNELFdBQU9nQixRQUFQO0FBQ0gsR0E1Q0k7QUE2Q0xFLEVBQUFBLFVBN0NLLHdCQTZDUTtBQUNULFNBQUtDLElBQUw7QUFDSCxHQS9DSSxDQWdETDs7QUFoREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IHJlZWwgICAgICAgID0gcmVxdWlyZShcIlNpZXVYZVJlZWxcIik7XHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZWVsczoge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcclxuICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxiU2Vzc2lvbiAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJUb3RhbFdpbiAgOiBjYy5MYWJlbCxcclxuICAgICAgICBUb3RhbEl0ZW1SdW4gIDogMjAsXHJcbiAgICAgICAgVG90YWxDb2x1bW4gICAgICAgICA6IDUsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUgKCkge1xyXG4gICAgICAgIHRoaXMuVG90YWxJdGVtUnVuID0gMjA7XHJcbiAgICAgICAgdGhpcy5sYlNlc3Npb24uc3RyaW5nID0gXCIjXCIrdGhpcy5fZGF0YS5zZXNzaW9uO1xyXG4gICAgICAgIHRoaXMubGJUb3RhbFdpbi5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcih0aGlzLl9kYXRhLndpbik7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX2RhdGEubWFwO1xyXG4gICAgICAgIC8vIHJlZm9ybWF0XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPCByZXN1bHQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY291bnQgPSBpJTU7XHJcbiAgICAgICAgICAgIGlmIChjb3VudCA+IDIpe1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W2ldID0gcmVzdWx0W2ldICsgMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXN1bHQgPSB0aGlzLmdldERhdGFSZXN1bHQocmVzdWx0KTtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnJlZWxzLm1hcChmdW5jdGlvbihpdGVtUmVlbCwgcG9zKSB7XHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGl0ZW1SZWVsLmNoaWxkcmVuLm1hcChmdW5jdGlvbihpdGVtWGUsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtWGUuZ2V0Q29tcG9uZW50KFwiU2lldVhlSXRlbVwiKS5pbml0KHRoaXMsIHJlc3VsdFtwb3NdW2luZGV4XSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBjYy5sYXN0WkluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBnZXREYXRhUmVzdWx0OiBmdW5jdGlvbihyZXN1bHQpIHtcclxuICAgICAgICBsZXQgbmV3QXJyYXkgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8IHRoaXMuVG90YWxDb2x1bW47IGkrKyl7XHJcbiAgICAgICAgICAgIG5ld0FycmF5W2ldID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTwgcmVzdWx0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIG5ld0FycmF5W2kldGhpcy5Ub3RhbENvbHVtbl0ucHVzaChyZXN1bHRbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3QXJyYXk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpIHtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
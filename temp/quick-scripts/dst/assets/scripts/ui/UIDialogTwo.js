
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/UIDialogTwo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '33288DCobhC34Lhvm6P2Ery', 'UIDialogTwo');
// scripts/ui/UIDialogTwo.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    lb_content: cc.Label
  },
  onEnable: function onEnable() {
    if (this._data.content) {
      this.lb_content.string = this._data.content;
    }

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  eventConfirm: function eventConfirm() {
    mm.audio.playButton();

    if (this._data.cbYes) {
      this._data.cbYes.call(this);
    }

    this.node.setSiblingIndex(0);
  },
  eventCancel: function eventCancel() {
    mm.audio.playButton();
    this.back();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1VJRGlhbG9nVHdvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxiX2NvbnRlbnQiLCJMYWJlbCIsIm9uRW5hYmxlIiwiX2RhdGEiLCJjb250ZW50Iiwic3RyaW5nIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJldmVudENvbmZpcm0iLCJtbSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsImNiWWVzIiwiY2FsbCIsInNldFNpYmxpbmdJbmRleCIsImV2ZW50Q2FuY2VsIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0s7QUFEUCxHQUhQO0FBTUxDLEVBQUFBLFFBTkssc0JBTUs7QUFDTixRQUFHLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZCxFQUFzQjtBQUNsQixXQUFLSixVQUFMLENBQWdCSyxNQUFoQixHQUF5QixLQUFLRixLQUFMLENBQVdDLE9BQXBDO0FBQ0g7O0FBQ0QsUUFBSSxLQUFLRSxJQUFMLENBQVVDLE1BQVYsSUFBb0JYLEVBQUUsQ0FBQ1ksVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CWCxFQUFFLENBQUNZLFVBQUgsR0FBYyxDQUFqQztBQUNIO0FBQ0osR0FiSTtBQWNMQyxFQUFBQSxZQWRLLDBCQWNTO0FBQ1ZDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUOztBQUNBLFFBQUksS0FBS1QsS0FBTCxDQUFXVSxLQUFmLEVBQXNCO0FBQ2xCLFdBQUtWLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEI7QUFDSDs7QUFDRCxTQUFLUixJQUFMLENBQVVTLGVBQVYsQ0FBMEIsQ0FBMUI7QUFDSCxHQXBCSTtBQXFCTEMsRUFBQUEsV0FyQksseUJBcUJRO0FBQ1ROLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS0ssSUFBTDtBQUNIO0FBeEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBsYl9jb250ZW50OiBjYy5MYWJlbFxuICAgIH0sXG4gICAgb25FbmFibGUoKXtcbiAgICAgICAgaWYodGhpcy5fZGF0YS5jb250ZW50KXtcbiAgICAgICAgICAgIHRoaXMubGJfY29udGVudC5zdHJpbmcgPSB0aGlzLl9kYXRhLmNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleCsxO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBldmVudENvbmZpcm0oKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBpZiAodGhpcy5fZGF0YS5jYlllcykge1xuICAgICAgICAgICAgdGhpcy5fZGF0YS5jYlllcy5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoMCk7XG4gICAgfSxcbiAgICBldmVudENhbmNlbCgpe1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuYmFjaygpO1xuICAgIH1cbn0pO1xuIl19
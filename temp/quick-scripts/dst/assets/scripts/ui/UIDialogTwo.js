
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXFVJRGlhbG9nVHdvLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxiX2NvbnRlbnQiLCJMYWJlbCIsIm9uRW5hYmxlIiwiX2RhdGEiLCJjb250ZW50Iiwic3RyaW5nIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJldmVudENvbmZpcm0iLCJtbSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsImNiWWVzIiwiY2FsbCIsInNldFNpYmxpbmdJbmRleCIsImV2ZW50Q2FuY2VsIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0s7QUFEUCxHQUhQO0FBTUxDLEVBQUFBLFFBTkssc0JBTUs7QUFDTixRQUFHLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZCxFQUFzQjtBQUNsQixXQUFLSixVQUFMLENBQWdCSyxNQUFoQixHQUF5QixLQUFLRixLQUFMLENBQVdDLE9BQXBDO0FBQ0g7O0FBQ0QsUUFBSSxLQUFLRSxJQUFMLENBQVVDLE1BQVYsSUFBb0JYLEVBQUUsQ0FBQ1ksVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CWCxFQUFFLENBQUNZLFVBQUgsR0FBYyxDQUFqQztBQUNIO0FBQ0osR0FiSTtBQWNMQyxFQUFBQSxZQWRLLDBCQWNTO0FBQ1ZDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUOztBQUNBLFFBQUksS0FBS1QsS0FBTCxDQUFXVSxLQUFmLEVBQXNCO0FBQ2xCLFdBQUtWLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEI7QUFDSDs7QUFDRCxTQUFLUixJQUFMLENBQVVTLGVBQVYsQ0FBMEIsQ0FBMUI7QUFDSCxHQXBCSTtBQXFCTEMsRUFBQUEsV0FyQksseUJBcUJRO0FBQ1ROLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS0ssSUFBTDtBQUNIO0FBeEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGxiX2NvbnRlbnQ6IGNjLkxhYmVsXHJcbiAgICB9LFxyXG4gICAgb25FbmFibGUoKXtcclxuICAgICAgICBpZih0aGlzLl9kYXRhLmNvbnRlbnQpe1xyXG4gICAgICAgICAgICB0aGlzLmxiX2NvbnRlbnQuc3RyaW5nID0gdGhpcy5fZGF0YS5jb250ZW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ub2RlLnpJbmRleCA8PSBjYy5sYXN0WkluZGV4KXtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IGNjLmxhc3RaSW5kZXgrMTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDb25maXJtKCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9kYXRhLmNiWWVzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RhdGEuY2JZZXMuY2FsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub2RlLnNldFNpYmxpbmdJbmRleCgwKTtcclxuICAgIH0sXHJcbiAgICBldmVudENhbmNlbCgpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/UIDialogOne.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bc69fyCGktKKJgDpKJdig1b', 'UIDialogOne');
// scripts/ui/UIDialogOne.js

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
    this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXFVJRGlhbG9nT25lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImxiX2NvbnRlbnQiLCJMYWJlbCIsIm9uRW5hYmxlIiwiX2RhdGEiLCJjb250ZW50Iiwic3RyaW5nIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJldmVudENvbmZpcm0iLCJtbSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsImNiWWVzIiwiY2FsbCIsInNldFNpYmxpbmdJbmRleCIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVKLEVBQUUsQ0FBQ0s7QUFEUCxHQUhQO0FBTUxDLEVBQUFBLFFBTkssc0JBTUs7QUFDTixRQUFHLEtBQUtDLEtBQUwsQ0FBV0MsT0FBZCxFQUFzQjtBQUNsQixXQUFLSixVQUFMLENBQWdCSyxNQUFoQixHQUF5QixLQUFLRixLQUFMLENBQVdDLE9BQXBDO0FBQ0g7O0FBQ0QsUUFBSSxLQUFLRSxJQUFMLENBQVVDLE1BQVYsSUFBb0JYLEVBQUUsQ0FBQ1ksVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CWCxFQUFFLENBQUNZLFVBQUgsR0FBYyxDQUFqQztBQUNIO0FBQ0osR0FiSTtBQWNMQyxFQUFBQSxZQWRLLDBCQWNTO0FBQ1ZDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUOztBQUNBLFFBQUksS0FBS1QsS0FBTCxDQUFXVSxLQUFmLEVBQXNCO0FBQ2xCLFdBQUtWLEtBQUwsQ0FBV1UsS0FBWCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEI7QUFDSDs7QUFDRCxTQUFLUixJQUFMLENBQVVTLGVBQVYsQ0FBMEIsQ0FBMUI7QUFDQSxTQUFLVCxJQUFMLENBQVVVLE1BQVYsR0FBbUIsS0FBbkI7QUFDSDtBQXJCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYl9jb250ZW50OiBjYy5MYWJlbFxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCl7XHJcbiAgICAgICAgaWYodGhpcy5fZGF0YS5jb250ZW50KXtcclxuICAgICAgICAgICAgdGhpcy5sYl9jb250ZW50LnN0cmluZyA9IHRoaXMuX2RhdGEuY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBjYy5sYXN0WkluZGV4KzE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50Q29uZmlybSgpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBpZiAodGhpcy5fZGF0YS5jYlllcykge1xyXG4gICAgICAgICAgICB0aGlzLl9kYXRhLmNiWWVzLmNhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubm9kZS5zZXRTaWJsaW5nSW5kZXgoMCk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuIl19
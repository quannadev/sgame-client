
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Move.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '972c5O/HVZKw7Sap+T3eCiU', 'Move');
// scripts/Move.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    _isMove: false
  },
  onLoad: function onLoad() {
    var self = this;
    this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      var target = event.currentTarget;
      var location = event.getLocation();
      var delta = event.getDelta();
      self.node.x += delta.x;
      self.node.y += delta.y;

      if (delta.x != 0 || delta.y != 0) {
        self._isMove = true;
      }
    }, this);
    this.node.on(cc.Node.EventType.TOUCH_START, function (event) {
      self._isMove = false;

      if (self.node.parent.zIndex <= cc.lastZIndex) {
        cc.lastZIndex += 1;
        self.node.parent.zIndex = cc.lastZIndex;
      }
    });
  },
  isMove: function isMove() {
    return this._isMove;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL01vdmUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJfaXNNb3ZlIiwib25Mb2FkIiwic2VsZiIsIm5vZGUiLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9NT1ZFIiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibG9jYXRpb24iLCJnZXRMb2NhdGlvbiIsImRlbHRhIiwiZ2V0RGVsdGEiLCJ4IiwieSIsIlRPVUNIX1NUQVJUIiwicGFyZW50IiwiekluZGV4IiwibGFzdFpJbmRleCIsImlzTW92ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRTtBQURELEdBSFA7QUFNTEMsRUFBQUEsTUFOSyxvQkFNRztBQUNKLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBQ0EsU0FBS0MsSUFBTCxDQUFVQyxFQUFWLENBQWFSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxVQUEvQixFQUEyQyxVQUFVQyxLQUFWLEVBQWlCO0FBQ3hELFVBQUlDLE1BQU0sR0FBR0QsS0FBSyxDQUFDRSxhQUFuQjtBQUNBLFVBQUlDLFFBQVEsR0FBR0gsS0FBSyxDQUFDSSxXQUFOLEVBQWY7QUFDQSxVQUFJQyxLQUFLLEdBQUdMLEtBQUssQ0FBQ00sUUFBTixFQUFaO0FBQ0FaLE1BQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVWSxDQUFWLElBQWVGLEtBQUssQ0FBQ0UsQ0FBckI7QUFDQWIsTUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVVhLENBQVYsSUFBZUgsS0FBSyxDQUFDRyxDQUFyQjs7QUFDQSxVQUFHSCxLQUFLLENBQUNFLENBQU4sSUFBVyxDQUFYLElBQWdCRixLQUFLLENBQUNHLENBQU4sSUFBVyxDQUE5QixFQUFnQztBQUM1QmQsUUFBQUEsSUFBSSxDQUFDRixPQUFMLEdBQWUsSUFBZjtBQUNIO0FBQ0osS0FURCxFQVNHLElBVEg7QUFVQSxTQUFLRyxJQUFMLENBQVVDLEVBQVYsQ0FBYVIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JXLFdBQS9CLEVBQTRDLFVBQVVULEtBQVYsRUFBaUI7QUFDekROLE1BQUFBLElBQUksQ0FBQ0YsT0FBTCxHQUFlLEtBQWY7O0FBQ0EsVUFBSUUsSUFBSSxDQUFDQyxJQUFMLENBQVVlLE1BQVYsQ0FBaUJDLE1BQWpCLElBQTJCdkIsRUFBRSxDQUFDd0IsVUFBbEMsRUFBNkM7QUFDekN4QixRQUFBQSxFQUFFLENBQUN3QixVQUFILElBQW1CLENBQW5CO0FBQ0FsQixRQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVWUsTUFBVixDQUFpQkMsTUFBakIsR0FBMEJ2QixFQUFFLENBQUN3QixVQUE3QjtBQUNIO0FBQ0osS0FORDtBQU9ILEdBekJJO0FBMEJMQyxFQUFBQSxNQTFCSyxvQkEwQkc7QUFDSixXQUFPLEtBQUtyQixPQUFaO0FBQ0g7QUE1QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgX2lzTW92ZTogZmFsc2VcbiAgICB9LFxuICAgIG9uTG9hZCgpe1xuICAgICAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgICAgICAgICAgbGV0IGxvY2F0aW9uID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XG4gICAgICAgICAgICBzZWxmLm5vZGUueCArPSBkZWx0YS54O1xuICAgICAgICAgICAgc2VsZi5ub2RlLnkgKz0gZGVsdGEueTtcbiAgICAgICAgICAgIGlmKGRlbHRhLnggIT0gMCB8fCBkZWx0YS55ICE9IDApe1xuICAgICAgICAgICAgICAgIHNlbGYuX2lzTW92ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgc2VsZi5faXNNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoc2VsZi5ub2RlLnBhcmVudC56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XG4gICAgICAgICAgICAgICAgY2MubGFzdFpJbmRleCAgICs9IDE7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLnBhcmVudC56SW5kZXggPSBjYy5sYXN0WkluZGV4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgaXNNb3ZlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc01vdmU7XG4gICAgfVxufSk7XG4iXX0=
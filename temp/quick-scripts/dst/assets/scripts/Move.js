
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcTW92ZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIl9pc01vdmUiLCJvbkxvYWQiLCJzZWxmIiwibm9kZSIsIm9uIiwiTm9kZSIsIkV2ZW50VHlwZSIsIlRPVUNIX01PVkUiLCJldmVudCIsInRhcmdldCIsImN1cnJlbnRUYXJnZXQiLCJsb2NhdGlvbiIsImdldExvY2F0aW9uIiwiZGVsdGEiLCJnZXREZWx0YSIsIngiLCJ5IiwiVE9VQ0hfU1RBUlQiLCJwYXJlbnQiLCJ6SW5kZXgiLCJsYXN0WkluZGV4IiwiaXNNb3ZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsT0FBTyxFQUFFO0FBREQsR0FIUDtBQU1MQyxFQUFBQSxNQU5LLG9CQU1HO0FBQ0osUUFBSUMsSUFBSSxHQUFHLElBQVg7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVIsRUFBRSxDQUFDUyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFVBQS9CLEVBQTJDLFVBQVVDLEtBQVYsRUFBaUI7QUFDeEQsVUFBSUMsTUFBTSxHQUFHRCxLQUFLLENBQUNFLGFBQW5CO0FBQ0EsVUFBSUMsUUFBUSxHQUFHSCxLQUFLLENBQUNJLFdBQU4sRUFBZjtBQUNBLFVBQUlDLEtBQUssR0FBR0wsS0FBSyxDQUFDTSxRQUFOLEVBQVo7QUFDQVosTUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVVZLENBQVYsSUFBZUYsS0FBSyxDQUFDRSxDQUFyQjtBQUNBYixNQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVWEsQ0FBVixJQUFlSCxLQUFLLENBQUNHLENBQXJCOztBQUNBLFVBQUdILEtBQUssQ0FBQ0UsQ0FBTixJQUFXLENBQVgsSUFBZ0JGLEtBQUssQ0FBQ0csQ0FBTixJQUFXLENBQTlCLEVBQWdDO0FBQzVCZCxRQUFBQSxJQUFJLENBQUNGLE9BQUwsR0FBZSxJQUFmO0FBQ0g7QUFDSixLQVRELEVBU0csSUFUSDtBQVVBLFNBQUtHLElBQUwsQ0FBVUMsRUFBVixDQUFhUixFQUFFLENBQUNTLElBQUgsQ0FBUUMsU0FBUixDQUFrQlcsV0FBL0IsRUFBNEMsVUFBVVQsS0FBVixFQUFpQjtBQUN6RE4sTUFBQUEsSUFBSSxDQUFDRixPQUFMLEdBQWUsS0FBZjs7QUFDQSxVQUFJRSxJQUFJLENBQUNDLElBQUwsQ0FBVWUsTUFBVixDQUFpQkMsTUFBakIsSUFBMkJ2QixFQUFFLENBQUN3QixVQUFsQyxFQUE2QztBQUN6Q3hCLFFBQUFBLEVBQUUsQ0FBQ3dCLFVBQUgsSUFBbUIsQ0FBbkI7QUFDQWxCLFFBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVZSxNQUFWLENBQWlCQyxNQUFqQixHQUEwQnZCLEVBQUUsQ0FBQ3dCLFVBQTdCO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0F6Qkk7QUEwQkxDLEVBQUFBLE1BMUJLLG9CQTBCRztBQUNKLFdBQU8sS0FBS3JCLE9BQVo7QUFDSDtBQTVCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIF9pc01vdmU6IGZhbHNlXHJcbiAgICB9LFxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgbGV0IHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICAgICAgICAgIGxldCBsb2NhdGlvbiA9IGV2ZW50LmdldExvY2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS54ICs9IGRlbHRhLng7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS55ICs9IGRlbHRhLnk7XHJcbiAgICAgICAgICAgIGlmKGRlbHRhLnggIT0gMCB8fCBkZWx0YS55ICE9IDApe1xyXG4gICAgICAgICAgICAgICAgc2VsZi5faXNNb3ZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgIHNlbGYuX2lzTW92ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5ub2RlLnBhcmVudC56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgICAgICBjYy5sYXN0WkluZGV4ICAgKz0gMTtcclxuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5wYXJlbnQuekluZGV4ID0gY2MubGFzdFpJbmRleDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgaXNNb3ZlKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTW92ZTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/DaiLyCKItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b9ce9coy1Ig6hUA/v95xVb', 'DaiLyCKItem');
// scripts/portal/DaiLyCKItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbName: cc.Label,
    lbUserName: cc.Label,
    lbSTT: cc.Label,
    _isSelect: false
  },
  onEnable: function onEnable() {
    this._isSelect = false;
    var menuChon = this.node.getChildByName("menuchon");
    menuChon.active = false;
    this.node.on(cc.Node.EventType.MOUSE_ENTER, function (event) {
      menuChon.active = true;
    }, this);
    this.node.on(cc.Node.EventType.MOUSE_LEAVE, function (event) {
      menuChon.active = this._isSelect;
    }, this);
  },
  showMenuChon: function showMenuChon(isShow) {
    this._isSelect = isShow;
    this.node.getChildByName("menuchon").active = isShow;
  },
  init: function init(data) {
    this.lbName.string = data.agName;
    this.lbUserName.string = data.name;
    this.lbSTT.string = data.stt;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxEYWlMeUNLSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJOYW1lIiwiTGFiZWwiLCJsYlVzZXJOYW1lIiwibGJTVFQiLCJfaXNTZWxlY3QiLCJvbkVuYWJsZSIsIm1lbnVDaG9uIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRU5URVIiLCJldmVudCIsIk1PVVNFX0xFQVZFIiwic2hvd01lbnVDaG9uIiwiaXNTaG93IiwiaW5pdCIsImRhdGEiLCJzdHJpbmciLCJhZ05hbWUiLCJuYW1lIiwic3R0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFLSixFQUFFLENBQUNLLEtBRE47QUFFUkMsSUFBQUEsVUFBVSxFQUFRTixFQUFFLENBQUNLLEtBRmI7QUFHUkUsSUFBQUEsS0FBSyxFQUFFUCxFQUFFLENBQUNLLEtBSEY7QUFJUkcsSUFBQUEsU0FBUyxFQUFHO0FBSkosR0FIUDtBQVNMQyxFQUFBQSxRQVRLLHNCQVNNO0FBQ1AsU0FBS0QsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFFBQUlFLFFBQVEsR0FBRyxLQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsVUFBekIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsS0FBbEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLEVBQVYsQ0FBYWQsRUFBRSxDQUFDZSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLFVBQVVDLEtBQVYsRUFBaUI7QUFDekRSLE1BQUFBLFFBQVEsQ0FBQ0csTUFBVCxHQUFrQixJQUFsQjtBQUNILEtBRkQsRUFFRyxJQUZIO0FBR0EsU0FBS0YsSUFBTCxDQUFVRyxFQUFWLENBQWFkLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxXQUEvQixFQUE0QyxVQUFVRCxLQUFWLEVBQWlCO0FBQ3pEUixNQUFBQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsS0FBS0wsU0FBdkI7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUdILEdBbkJJO0FBb0JMWSxFQUFBQSxZQXBCSyx3QkFvQlFDLE1BcEJSLEVBb0JnQjtBQUNqQixTQUFLYixTQUFMLEdBQWlCYSxNQUFqQjtBQUNBLFNBQUtWLElBQUwsQ0FBVUMsY0FBVixDQUF5QixVQUF6QixFQUFxQ0MsTUFBckMsR0FBOENRLE1BQTlDO0FBQ0gsR0F2Qkk7QUF3QkxDLEVBQUFBLElBeEJLLGdCQXdCQUMsSUF4QkEsRUF3Qk07QUFDUCxTQUFLbkIsTUFBTCxDQUFZb0IsTUFBWixHQUFxQkQsSUFBSSxDQUFDRSxNQUExQjtBQUNBLFNBQUtuQixVQUFMLENBQWdCa0IsTUFBaEIsR0FBeUJELElBQUksQ0FBQ0csSUFBOUI7QUFDQSxTQUFLbkIsS0FBTCxDQUFXaUIsTUFBWCxHQUFvQkQsSUFBSSxDQUFDSSxHQUF6QjtBQUNIO0FBNUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkJhc2VJdGVtQ3VzdG9tLFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBsYk5hbWUgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiVXNlck5hbWUgICAgICA6IGNjLkxhYmVsLFxyXG4gICAgICAgIGxiU1RUOiBjYy5MYWJlbCxcclxuICAgICAgICBfaXNTZWxlY3QgOiBmYWxzZVxyXG4gICAgfSxcclxuICAgIG9uRW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuX2lzU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG1lbnVDaG9uID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWVudWNob25cIik7XHJcbiAgICAgICAgbWVudUNob24uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0VOVEVSLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgbWVudUNob24uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuTU9VU0VfTEVBVkUsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICBtZW51Q2hvbi5hY3RpdmUgPSB0aGlzLl9pc1NlbGVjdDtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBzaG93TWVudUNob24oaXNTaG93KSB7XHJcbiAgICAgICAgdGhpcy5faXNTZWxlY3QgPSBpc1Nob3c7XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibWVudWNob25cIikuYWN0aXZlID0gaXNTaG93O1xyXG4gICAgfSxcclxuICAgIGluaXQoZGF0YSkge1xyXG4gICAgICAgIHRoaXMubGJOYW1lLnN0cmluZyA9IGRhdGEuYWdOYW1lO1xyXG4gICAgICAgIHRoaXMubGJVc2VyTmFtZS5zdHJpbmcgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5sYlNUVC5zdHJpbmcgPSBkYXRhLnN0dDtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
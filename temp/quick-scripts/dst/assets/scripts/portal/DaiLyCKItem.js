
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BvcnRhbC9EYWlMeUNLSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQmFzZUl0ZW1DdXN0b20iLCJwcm9wZXJ0aWVzIiwibGJOYW1lIiwiTGFiZWwiLCJsYlVzZXJOYW1lIiwibGJTVFQiLCJfaXNTZWxlY3QiLCJvbkVuYWJsZSIsIm1lbnVDaG9uIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiTU9VU0VfRU5URVIiLCJldmVudCIsIk1PVVNFX0xFQVZFIiwic2hvd01lbnVDaG9uIiwiaXNTaG93IiwiaW5pdCIsImRhdGEiLCJzdHJpbmciLCJhZ05hbWUiLCJuYW1lIiwic3R0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsTUFBTSxFQUFLSixFQUFFLENBQUNLLEtBRE47QUFFUkMsSUFBQUEsVUFBVSxFQUFRTixFQUFFLENBQUNLLEtBRmI7QUFHUkUsSUFBQUEsS0FBSyxFQUFFUCxFQUFFLENBQUNLLEtBSEY7QUFJUkcsSUFBQUEsU0FBUyxFQUFHO0FBSkosR0FIUDtBQVNMQyxFQUFBQSxRQVRLLHNCQVNNO0FBQ1AsU0FBS0QsU0FBTCxHQUFpQixLQUFqQjtBQUNBLFFBQUlFLFFBQVEsR0FBRyxLQUFLQyxJQUFMLENBQVVDLGNBQVYsQ0FBeUIsVUFBekIsQ0FBZjtBQUNBRixJQUFBQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsS0FBbEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLEVBQVYsQ0FBYWQsRUFBRSxDQUFDZSxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLFVBQVVDLEtBQVYsRUFBaUI7QUFDekRSLE1BQUFBLFFBQVEsQ0FBQ0csTUFBVCxHQUFrQixJQUFsQjtBQUNILEtBRkQsRUFFRyxJQUZIO0FBR0EsU0FBS0YsSUFBTCxDQUFVRyxFQUFWLENBQWFkLEVBQUUsQ0FBQ2UsSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxXQUEvQixFQUE0QyxVQUFVRCxLQUFWLEVBQWlCO0FBQ3pEUixNQUFBQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsS0FBS0wsU0FBdkI7QUFDSCxLQUZELEVBRUcsSUFGSDtBQUdILEdBbkJJO0FBb0JMWSxFQUFBQSxZQXBCSyx3QkFvQlFDLE1BcEJSLEVBb0JnQjtBQUNqQixTQUFLYixTQUFMLEdBQWlCYSxNQUFqQjtBQUNBLFNBQUtWLElBQUwsQ0FBVUMsY0FBVixDQUF5QixVQUF6QixFQUFxQ0MsTUFBckMsR0FBOENRLE1BQTlDO0FBQ0gsR0F2Qkk7QUF3QkxDLEVBQUFBLElBeEJLLGdCQXdCQUMsSUF4QkEsRUF3Qk07QUFDUCxTQUFLbkIsTUFBTCxDQUFZb0IsTUFBWixHQUFxQkQsSUFBSSxDQUFDRSxNQUExQjtBQUNBLFNBQUtuQixVQUFMLENBQWdCa0IsTUFBaEIsR0FBeUJELElBQUksQ0FBQ0csSUFBOUI7QUFDQSxTQUFLbkIsS0FBTCxDQUFXaUIsTUFBWCxHQUFvQkQsSUFBSSxDQUFDSSxHQUF6QjtBQUNIO0FBNUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgbGJOYW1lICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJVc2VyTmFtZSAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiU1RUOiBjYy5MYWJlbCxcbiAgICAgICAgX2lzU2VsZWN0IDogZmFsc2VcbiAgICB9LFxuICAgIG9uRW5hYmxlKCkge1xuICAgICAgICB0aGlzLl9pc1NlbGVjdCA9IGZhbHNlO1xuICAgICAgICBsZXQgbWVudUNob24gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJtZW51Y2hvblwiKTtcbiAgICAgICAgbWVudUNob24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5NT1VTRV9FTlRFUiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBtZW51Q2hvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLk1PVVNFX0xFQVZFLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIG1lbnVDaG9uLmFjdGl2ZSA9IHRoaXMuX2lzU2VsZWN0O1xuICAgICAgICB9LCB0aGlzKTtcbiAgICB9LFxuICAgIHNob3dNZW51Q2hvbihpc1Nob3cpIHtcbiAgICAgICAgdGhpcy5faXNTZWxlY3QgPSBpc1Nob3c7XG4gICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIm1lbnVjaG9uXCIpLmFjdGl2ZSA9IGlzU2hvdztcbiAgICB9LFxuICAgIGluaXQoZGF0YSkge1xuICAgICAgICB0aGlzLmxiTmFtZS5zdHJpbmcgPSBkYXRhLmFnTmFtZTtcbiAgICAgICAgdGhpcy5sYlVzZXJOYW1lLnN0cmluZyA9IGRhdGEubmFtZTtcbiAgICAgICAgdGhpcy5sYlNUVC5zdHJpbmcgPSBkYXRhLnN0dDtcbiAgICB9XG59KTtcbiJdfQ==
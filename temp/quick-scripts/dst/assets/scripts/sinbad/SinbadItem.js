
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a74cbWN+epB3KbhVQyzTY32', 'SinbadItem');
// scripts/sinbad/SinbadItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, icon) {
    var _this = this;

    this.RedT = obj;
    Promise.all(this.node.children.map(function (node) {
      node.active = false;
    })).then(function (result) {
      _this.node.children[icon].active = true;
    });
  },
  stop: function stop() {},
  random: function random() {
    var icon = ~~(Math.random() * 7);
    this.setIcon(icon);
    return icon;
  },
  setIcon: function setIcon(icon, data) {
    var _this2 = this;

    if (data === void 0) {
      data = false;
    }

    Promise.all(this.node.children.map(function (node) {
      node.active = false;
    })).then(function (result) {
      _this2.node.children[icon].active = true;

      if (data) {
        _this2.data = icon;
      }
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdCIsIm9iaiIsImljb24iLCJSZWRUIiwiUHJvbWlzZSIsImFsbCIsIm5vZGUiLCJjaGlsZHJlbiIsIm1hcCIsImFjdGl2ZSIsInRoZW4iLCJyZXN1bHQiLCJzdG9wIiwicmFuZG9tIiwiTWF0aCIsInNldEljb24iLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQUtMQyxFQUFBQSxJQUxLLGdCQUtBQyxHQUxBLEVBS0tDLElBTEwsRUFLVTtBQUFBOztBQUNYLFNBQUtDLElBQUwsR0FBWUYsR0FBWjtBQUNBRyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJDLEdBQW5CLENBQXVCLFVBQVNGLElBQVQsRUFBYztBQUM3Q0EsTUFBQUEsSUFBSSxDQUFDRyxNQUFMLEdBQWMsS0FBZDtBQUNILEtBRlcsQ0FBWixFQUVJQyxJQUZKLENBRVMsVUFBQUMsTUFBTSxFQUFFO0FBQ2IsTUFBQSxLQUFJLENBQUNMLElBQUwsQ0FBVUMsUUFBVixDQUFtQkwsSUFBbkIsRUFBeUJPLE1BQXpCLEdBQWtDLElBQWxDO0FBQ0gsS0FKRDtBQUtILEdBWkk7QUFhTEcsRUFBQUEsSUFBSSxFQUFFLGdCQUFXLENBRWhCLENBZkk7QUFnQkxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBVTtBQUNkLFFBQUlYLElBQUksR0FBRyxDQUFDLEVBQUVZLElBQUksQ0FBQ0QsTUFBTCxLQUFjLENBQWhCLENBQVo7QUFDQSxTQUFLRSxPQUFMLENBQWFiLElBQWI7QUFDQSxXQUFPQSxJQUFQO0FBQ0gsR0FwQkk7QUFxQkxhLEVBQUFBLE9BQU8sRUFBRSxpQkFBU2IsSUFBVCxFQUFlYyxJQUFmLEVBQTRCO0FBQUE7O0FBQUEsUUFBYkEsSUFBYTtBQUFiQSxNQUFBQSxJQUFhLEdBQU4sS0FBTTtBQUFBOztBQUNqQ1osSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxHQUFuQixDQUF1QixVQUFTRixJQUFULEVBQWM7QUFDN0NBLE1BQUFBLElBQUksQ0FBQ0csTUFBTCxHQUFjLEtBQWQ7QUFDSCxLQUZXLENBQVosRUFFSUMsSUFGSixDQUVTLFVBQUFDLE1BQU0sRUFBRTtBQUNiLE1BQUEsTUFBSSxDQUFDTCxJQUFMLENBQVVDLFFBQVYsQ0FBbUJMLElBQW5CLEVBQXlCTyxNQUF6QixHQUFrQyxJQUFsQzs7QUFDQSxVQUFJTyxJQUFKLEVBQVU7QUFDTixRQUFBLE1BQUksQ0FBQ0EsSUFBTCxHQUFZZCxJQUFaO0FBQ0g7QUFDSixLQVBEO0FBUUg7QUE5QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuICAgIGluaXQob2JqLCBpY29uKXtcbiAgICAgICAgdGhpcy5SZWRUID0gb2JqO1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baWNvbl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcblxuICAgIH0sXG4gICAgcmFuZG9tOiBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgaWNvbiA9IH5+KE1hdGgucmFuZG9tKCkqNyk7XG4gICAgICAgIHRoaXMuc2V0SWNvbihpY29uKTtcbiAgICAgICAgcmV0dXJuIGljb247XG4gICAgfSxcbiAgICBzZXRJY29uOiBmdW5jdGlvbihpY29uLCBkYXRhID0gZmFsc2Upe1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baWNvbl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gaWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn0pO1xuIl19
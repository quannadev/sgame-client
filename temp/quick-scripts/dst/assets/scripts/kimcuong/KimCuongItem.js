
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/KimCuongItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f6329kwd5Csolzwm16hVvf', 'KimCuongItem');
// scripts/kimcuong/KimCuongItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, icon) {
    this.node.children[icon].active = true;
  },
  stop: function stop() {},
  random: function random() {
    var icon = ~~(Math.random() * 7);
    this.setIcon(icon);
    return icon;
  },
  setIcon: function setIcon(icon, data) {
    if (data === void 0) {
      data = false;
    }

    Promise.all(this.node.children.map(function (node) {
      node.active = false;
    }));
    this.node.children[icon].active = true;

    if (data) {
      this.data = icon;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL0tpbUN1b25nSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXQiLCJvYmoiLCJpY29uIiwibm9kZSIsImNoaWxkcmVuIiwiYWN0aXZlIiwic3RvcCIsInJhbmRvbSIsIk1hdGgiLCJzZXRJY29uIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBS0xDLEVBQUFBLElBTEssZ0JBS0FDLEdBTEEsRUFLS0MsSUFMTCxFQUtVO0FBQ1gsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CRixJQUFuQixFQUF5QkcsTUFBekIsR0FBa0MsSUFBbEM7QUFDSCxHQVBJO0FBUUxDLEVBQUFBLElBQUksRUFBRSxnQkFBVyxDQUVoQixDQVZJO0FBV0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBVTtBQUNkLFFBQUlMLElBQUksR0FBRyxDQUFDLEVBQUVNLElBQUksQ0FBQ0QsTUFBTCxLQUFjLENBQWhCLENBQVo7QUFDQSxTQUFLRSxPQUFMLENBQWFQLElBQWI7QUFDQSxXQUFPQSxJQUFQO0FBQ0gsR0FmSTtBQWdCTE8sRUFBQUEsT0FBTyxFQUFFLGlCQUFTUCxJQUFULEVBQWVRLElBQWYsRUFBNEI7QUFBQSxRQUFiQSxJQUFhO0FBQWJBLE1BQUFBLElBQWEsR0FBTixLQUFNO0FBQUE7O0FBQ2pDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLVCxJQUFMLENBQVVDLFFBQVYsQ0FBbUJTLEdBQW5CLENBQXVCLFVBQVNWLElBQVQsRUFBYztBQUM3Q0EsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLEdBQWMsS0FBZDtBQUNILEtBRlcsQ0FBWjtBQUdBLFNBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQkYsSUFBbkIsRUFBeUJHLE1BQXpCLEdBQWtDLElBQWxDOztBQUNBLFFBQUlLLElBQUosRUFBVTtBQUNOLFdBQUtBLElBQUwsR0FBWVIsSUFBWjtBQUNIO0FBQ0o7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICB9LFxuICAgIGluaXQob2JqLCBpY29uKXtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ljb25dLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcblxuICAgIH0sXG4gICAgcmFuZG9tOiBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgaWNvbiA9IH5+KE1hdGgucmFuZG9tKCkqNyk7XG4gICAgICAgIHRoaXMuc2V0SWNvbihpY29uKTtcbiAgICAgICAgcmV0dXJuIGljb247XG4gICAgfSxcbiAgICBzZXRJY29uOiBmdW5jdGlvbihpY29uLCBkYXRhID0gZmFsc2Upe1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baWNvbl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGljb247XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
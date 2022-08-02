
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXEtpbUN1b25nSXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXQiLCJvYmoiLCJpY29uIiwibm9kZSIsImNoaWxkcmVuIiwiYWN0aXZlIiwic3RvcCIsInJhbmRvbSIsIk1hdGgiLCJzZXRJY29uIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBS0xDLEVBQUFBLElBTEssZ0JBS0FDLEdBTEEsRUFLS0MsSUFMTCxFQUtVO0FBQ1gsU0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CRixJQUFuQixFQUF5QkcsTUFBekIsR0FBa0MsSUFBbEM7QUFDSCxHQVBJO0FBUUxDLEVBQUFBLElBQUksRUFBRSxnQkFBVyxDQUVoQixDQVZJO0FBV0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBVTtBQUNkLFFBQUlMLElBQUksR0FBRyxDQUFDLEVBQUVNLElBQUksQ0FBQ0QsTUFBTCxLQUFjLENBQWhCLENBQVo7QUFDQSxTQUFLRSxPQUFMLENBQWFQLElBQWI7QUFDQSxXQUFPQSxJQUFQO0FBQ0gsR0FmSTtBQWdCTE8sRUFBQUEsT0FBTyxFQUFFLGlCQUFTUCxJQUFULEVBQWVRLElBQWYsRUFBNEI7QUFBQSxRQUFiQSxJQUFhO0FBQWJBLE1BQUFBLElBQWEsR0FBTixLQUFNO0FBQUE7O0FBQ2pDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLVCxJQUFMLENBQVVDLFFBQVYsQ0FBbUJTLEdBQW5CLENBQXVCLFVBQVNWLElBQVQsRUFBYztBQUM3Q0EsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLEdBQWMsS0FBZDtBQUNILEtBRlcsQ0FBWjtBQUdBLFNBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQkYsSUFBbkIsRUFBeUJHLE1BQXpCLEdBQWtDLElBQWxDOztBQUNBLFFBQUlLLElBQUosRUFBVTtBQUNOLFdBQUtBLElBQUwsR0FBWVIsSUFBWjtBQUNIO0FBQ0o7QUF4QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcbiAgICBpbml0KG9iaiwgaWNvbil7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ljb25dLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfSxcclxuICAgIHJhbmRvbTogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgaWNvbiA9IH5+KE1hdGgucmFuZG9tKCkqNyk7XHJcbiAgICAgICAgdGhpcy5zZXRJY29uKGljb24pO1xyXG4gICAgICAgIHJldHVybiBpY29uO1xyXG4gICAgfSxcclxuICAgIHNldEljb246IGZ1bmN0aW9uKGljb24sIGRhdGEgPSBmYWxzZSl7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5ub2RlLmNoaWxkcmVuLm1hcChmdW5jdGlvbihub2RlKXtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ljb25dLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhID0gaWNvbjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
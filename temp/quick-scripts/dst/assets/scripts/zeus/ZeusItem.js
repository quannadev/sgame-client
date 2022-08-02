
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/ZeusItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f72a0nXxyhMEJ+UQ0MG/OuN', 'ZeusItem');
// scripts/zeus/ZeusItem.js

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
    var icon = ~~(Math.random() * 11);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcemV1c1xcWmV1c0l0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbml0Iiwib2JqIiwiaWNvbiIsIlJlZFQiLCJQcm9taXNlIiwiYWxsIiwibm9kZSIsImNoaWxkcmVuIiwibWFwIiwiYWN0aXZlIiwidGhlbiIsInJlc3VsdCIsInN0b3AiLCJyYW5kb20iLCJNYXRoIiwic2V0SWNvbiIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBS0xDLEVBQUFBLElBTEssZ0JBS0FDLEdBTEEsRUFLS0MsSUFMTCxFQUtVO0FBQUE7O0FBQ1gsU0FBS0MsSUFBTCxHQUFZRixHQUFaO0FBQ0FHLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUIsVUFBU0YsSUFBVCxFQUFjO0FBQzdDQSxNQUFBQSxJQUFJLENBQUNHLE1BQUwsR0FBYyxLQUFkO0FBQ0gsS0FGVyxDQUFaLEVBRUlDLElBRkosQ0FFUyxVQUFBQyxNQUFNLEVBQUU7QUFDYixNQUFBLEtBQUksQ0FBQ0wsSUFBTCxDQUFVQyxRQUFWLENBQW1CTCxJQUFuQixFQUF5Qk8sTUFBekIsR0FBa0MsSUFBbEM7QUFDSCxLQUpEO0FBTUgsR0FiSTtBQWNMRyxFQUFBQSxJQUFJLEVBQUUsZ0JBQVcsQ0FFaEIsQ0FoQkk7QUFpQkxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBVTtBQUNkLFFBQUlYLElBQUksR0FBRyxDQUFDLEVBQUVZLElBQUksQ0FBQ0QsTUFBTCxLQUFjLEVBQWhCLENBQVo7QUFDQSxTQUFLRSxPQUFMLENBQWFiLElBQWI7QUFDQSxXQUFPQSxJQUFQO0FBQ0gsR0FyQkk7QUFzQkxhLEVBQUFBLE9BQU8sRUFBRSxpQkFBU2IsSUFBVCxFQUFlYyxJQUFmLEVBQTRCO0FBQUEsUUFBYkEsSUFBYTtBQUFiQSxNQUFBQSxJQUFhLEdBQU4sS0FBTTtBQUFBOztBQUNqQ1osSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CQyxHQUFuQixDQUF1QixVQUFTRixJQUFULEVBQWM7QUFDN0NBLE1BQUFBLElBQUksQ0FBQ0csTUFBTCxHQUFjLEtBQWQ7QUFDSCxLQUZXLENBQVo7QUFHQSxTQUFLSCxJQUFMLENBQVVDLFFBQVYsQ0FBbUJMLElBQW5CLEVBQXlCTyxNQUF6QixHQUFrQyxJQUFsQzs7QUFDQSxRQUFJTyxJQUFKLEVBQVU7QUFDTixXQUFLQSxJQUFMLEdBQVlkLElBQVo7QUFDSDtBQUNKO0FBOUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG4gICAgaW5pdChvYmosIGljb24pe1xyXG4gICAgICAgIHRoaXMuUmVkVCA9IG9iajtcclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG5vZGUpe1xyXG4gICAgICAgICAgICBub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pKS50aGVuKHJlc3VsdD0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baWNvbl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfSxcclxuICAgIHJhbmRvbTogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgaWNvbiA9IH5+KE1hdGgucmFuZG9tKCkqMTEpO1xyXG4gICAgICAgIHRoaXMuc2V0SWNvbihpY29uKTtcclxuICAgICAgICByZXR1cm4gaWNvbjtcclxuICAgIH0sXHJcbiAgICBzZXRJY29uOiBmdW5jdGlvbihpY29uLCBkYXRhID0gZmFsc2Upe1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubm9kZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obm9kZSl7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpY29uXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGljb247XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
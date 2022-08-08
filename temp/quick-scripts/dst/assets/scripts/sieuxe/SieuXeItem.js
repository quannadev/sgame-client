
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sieuxe/SieuXeItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '79e5c9FwVZML4ak+PNWlLSJ', 'SieuXeItem');
// scripts/sieuxe/SieuXeItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, icon) {
    this.node.children[icon].active = true;
    this.node.height = this.node.children[icon].height;
  },
  random: function random() {
    var icon = ~~(Math.random() * 6);
    this.setIcon(icon);
    return icon;
  },
  setIcon: function setIcon(icon, data) {
    var _this = this;

    if (data === void 0) {
      data = false;
    }

    Promise.all(this.node.children.map(function (node) {
      node.active = false;
    })).then(function (result) {
      _this.node.children[icon].active = true;

      if (data) {
        _this.data = icon;
      }
    }, this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpZXV4ZS9TaWV1WGVJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdCIsIm9iaiIsImljb24iLCJub2RlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJoZWlnaHQiLCJyYW5kb20iLCJNYXRoIiwic2V0SWNvbiIsImRhdGEiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwidGhlbiIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFNTEMsRUFBQUEsSUFOSyxnQkFNQUMsR0FOQSxFQU1LQyxJQU5MLEVBTVU7QUFDWCxTQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJGLElBQW5CLEVBQXlCRyxNQUF6QixHQUFrQyxJQUFsQztBQUNBLFNBQUtGLElBQUwsQ0FBVUcsTUFBVixHQUFrQyxLQUFLSCxJQUFMLENBQVVDLFFBQVYsQ0FBbUJGLElBQW5CLEVBQXlCSSxNQUEzRDtBQUNILEdBVEk7QUFVTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFVO0FBQ2QsUUFBSUwsSUFBSSxHQUFHLENBQUMsRUFBRU0sSUFBSSxDQUFDRCxNQUFMLEtBQWMsQ0FBaEIsQ0FBWjtBQUNBLFNBQUtFLE9BQUwsQ0FBYVAsSUFBYjtBQUNBLFdBQU9BLElBQVA7QUFDSCxHQWRJO0FBZUxPLEVBQUFBLE9BQU8sRUFBRSxpQkFBU1AsSUFBVCxFQUFlUSxJQUFmLEVBQTRCO0FBQUE7O0FBQUEsUUFBYkEsSUFBYTtBQUFiQSxNQUFBQSxJQUFhLEdBQU4sS0FBTTtBQUFBOztBQUNqQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1QsSUFBTCxDQUFVQyxRQUFWLENBQW1CUyxHQUFuQixDQUF1QixVQUFTVixJQUFULEVBQWM7QUFDN0NBLE1BQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjLEtBQWQ7QUFDSCxLQUZXLENBQVosRUFFSVMsSUFGSixDQUVTLFVBQUFDLE1BQU0sRUFBRTtBQUNiLE1BQUEsS0FBSSxDQUFDWixJQUFMLENBQVVDLFFBQVYsQ0FBbUJGLElBQW5CLEVBQXlCRyxNQUF6QixHQUFrQyxJQUFsQzs7QUFDQSxVQUFJSyxJQUFKLEVBQVU7QUFDTixRQUFBLEtBQUksQ0FBQ0EsSUFBTCxHQUFZUixJQUFaO0FBQ0g7QUFDSixLQVBELEVBT0csSUFQSDtBQVNIO0FBekJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuICAgIGluaXQob2JqLCBpY29uKXtcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ljb25dLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMubm9kZS5oZWlnaHQgICAgICAgICAgICAgICAgPSB0aGlzLm5vZGUuY2hpbGRyZW5baWNvbl0uaGVpZ2h0O1xuICAgIH0sXG4gICAgcmFuZG9tOiBmdW5jdGlvbigpe1xuICAgICAgICBsZXQgaWNvbiA9IH5+KE1hdGgucmFuZG9tKCkqNik7XG4gICAgICAgIHRoaXMuc2V0SWNvbihpY29uKTtcbiAgICAgICAgcmV0dXJuIGljb247XG4gICAgfSxcbiAgICBzZXRJY29uOiBmdW5jdGlvbihpY29uLCBkYXRhID0gZmFsc2Upe1xuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLm5vZGUuY2hpbGRyZW4ubWFwKGZ1bmN0aW9uKG5vZGUpe1xuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0PT57XG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baWNvbl0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gaWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICB9LFxufSk7XG4iXX0=
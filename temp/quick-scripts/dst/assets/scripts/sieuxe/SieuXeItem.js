
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2lldXhlXFxTaWV1WGVJdGVtLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdCIsIm9iaiIsImljb24iLCJub2RlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJoZWlnaHQiLCJyYW5kb20iLCJNYXRoIiwic2V0SWNvbiIsImRhdGEiLCJQcm9taXNlIiwiYWxsIiwibWFwIiwidGhlbiIsInJlc3VsdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFNTEMsRUFBQUEsSUFOSyxnQkFNQUMsR0FOQSxFQU1LQyxJQU5MLEVBTVU7QUFDWCxTQUFLQyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJGLElBQW5CLEVBQXlCRyxNQUF6QixHQUFrQyxJQUFsQztBQUNBLFNBQUtGLElBQUwsQ0FBVUcsTUFBVixHQUFrQyxLQUFLSCxJQUFMLENBQVVDLFFBQVYsQ0FBbUJGLElBQW5CLEVBQXlCSSxNQUEzRDtBQUNILEdBVEk7QUFVTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFVO0FBQ2QsUUFBSUwsSUFBSSxHQUFHLENBQUMsRUFBRU0sSUFBSSxDQUFDRCxNQUFMLEtBQWMsQ0FBaEIsQ0FBWjtBQUNBLFNBQUtFLE9BQUwsQ0FBYVAsSUFBYjtBQUNBLFdBQU9BLElBQVA7QUFDSCxHQWRJO0FBZUxPLEVBQUFBLE9BQU8sRUFBRSxpQkFBU1AsSUFBVCxFQUFlUSxJQUFmLEVBQTRCO0FBQUE7O0FBQUEsUUFBYkEsSUFBYTtBQUFiQSxNQUFBQSxJQUFhLEdBQU4sS0FBTTtBQUFBOztBQUNqQ0MsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksS0FBS1QsSUFBTCxDQUFVQyxRQUFWLENBQW1CUyxHQUFuQixDQUF1QixVQUFTVixJQUFULEVBQWM7QUFDN0NBLE1BQUFBLElBQUksQ0FBQ0UsTUFBTCxHQUFjLEtBQWQ7QUFDSCxLQUZXLENBQVosRUFFSVMsSUFGSixDQUVTLFVBQUFDLE1BQU0sRUFBRTtBQUNiLE1BQUEsS0FBSSxDQUFDWixJQUFMLENBQVVDLFFBQVYsQ0FBbUJGLElBQW5CLEVBQXlCRyxNQUF6QixHQUFrQyxJQUFsQzs7QUFDQSxVQUFJSyxJQUFKLEVBQVU7QUFDTixRQUFBLEtBQUksQ0FBQ0EsSUFBTCxHQUFZUixJQUFaO0FBQ0g7QUFDSixLQVBELEVBT0csSUFQSDtBQVNIO0FBekJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuICAgIGluaXQob2JqLCBpY29uKXtcclxuICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW5baWNvbl0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm5vZGUuaGVpZ2h0ICAgICAgICAgICAgICAgID0gdGhpcy5ub2RlLmNoaWxkcmVuW2ljb25dLmhlaWdodDtcclxuICAgIH0sXHJcbiAgICByYW5kb206IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGljb24gPSB+fihNYXRoLnJhbmRvbSgpKjYpO1xyXG4gICAgICAgIHRoaXMuc2V0SWNvbihpY29uKTtcclxuICAgICAgICByZXR1cm4gaWNvbjtcclxuICAgIH0sXHJcbiAgICBzZXRJY29uOiBmdW5jdGlvbihpY29uLCBkYXRhID0gZmFsc2Upe1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubm9kZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obm9kZSl7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkpLnRoZW4ocmVzdWx0PT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpY29uXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gaWNvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRoaXMpO1xyXG5cclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
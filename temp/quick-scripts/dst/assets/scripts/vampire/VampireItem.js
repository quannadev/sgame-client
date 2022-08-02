
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/VampireItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '565b6mXw05EG7JF3cEWRyAE', 'VampireItem');
// scripts/vampire/VampireItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, icon) {
    this.RedT = obj;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVmFtcGlyZUl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJpbml0Iiwib2JqIiwiaWNvbiIsIlJlZFQiLCJub2RlIiwiY2hpbGRyZW4iLCJhY3RpdmUiLCJzdG9wIiwicmFuZG9tIiwiTWF0aCIsInNldEljb24iLCJkYXRhIiwiUHJvbWlzZSIsImFsbCIsIm1hcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFLTEMsRUFBQUEsSUFMSyxnQkFLQUMsR0FMQSxFQUtLQyxJQUxMLEVBS1U7QUFDWCxTQUFLQyxJQUFMLEdBQVlGLEdBQVo7QUFDQSxTQUFLRyxJQUFMLENBQVVDLFFBQVYsQ0FBbUJILElBQW5CLEVBQXlCSSxNQUF6QixHQUFrQyxJQUFsQztBQUNILEdBUkk7QUFTTEMsRUFBQUEsSUFBSSxFQUFFLGdCQUFXLENBRWhCLENBWEk7QUFZTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFVO0FBQ2QsUUFBSU4sSUFBSSxHQUFHLENBQUMsRUFBRU8sSUFBSSxDQUFDRCxNQUFMLEtBQWMsQ0FBaEIsQ0FBWjtBQUNBLFNBQUtFLE9BQUwsQ0FBYVIsSUFBYjtBQUNBLFdBQU9BLElBQVA7QUFDSCxHQWhCSTtBQWlCTFEsRUFBQUEsT0FBTyxFQUFFLGlCQUFTUixJQUFULEVBQWVTLElBQWYsRUFBNEI7QUFBQSxRQUFiQSxJQUFhO0FBQWJBLE1BQUFBLElBQWEsR0FBTixLQUFNO0FBQUE7O0FBQ2pDQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxLQUFLVCxJQUFMLENBQVVDLFFBQVYsQ0FBbUJTLEdBQW5CLENBQXVCLFVBQVNWLElBQVQsRUFBYztBQUM3Q0EsTUFBQUEsSUFBSSxDQUFDRSxNQUFMLEdBQWMsS0FBZDtBQUNILEtBRlcsQ0FBWjtBQUdBLFNBQUtGLElBQUwsQ0FBVUMsUUFBVixDQUFtQkgsSUFBbkIsRUFBeUJJLE1BQXpCLEdBQWtDLElBQWxDOztBQUNBLFFBQUlLLElBQUosRUFBVTtBQUNOLFdBQUtBLElBQUwsR0FBWVQsSUFBWjtBQUNIO0FBQ0o7QUF6QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcbiAgICBpbml0KG9iaiwgaWNvbil7XHJcbiAgICAgICAgdGhpcy5SZWRUID0gb2JqO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpY29uXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSxcclxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICByYW5kb206IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGljb24gPSB+fihNYXRoLnJhbmRvbSgpKjcpO1xyXG4gICAgICAgIHRoaXMuc2V0SWNvbihpY29uKTtcclxuICAgICAgICByZXR1cm4gaWNvbjtcclxuICAgIH0sXHJcbiAgICBzZXRJY29uOiBmdW5jdGlvbihpY29uLCBkYXRhID0gZmFsc2Upe1xyXG4gICAgICAgIFByb21pc2UuYWxsKHRoaXMubm9kZS5jaGlsZHJlbi5tYXAoZnVuY3Rpb24obm9kZSl7XHJcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpY29uXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IGljb247XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
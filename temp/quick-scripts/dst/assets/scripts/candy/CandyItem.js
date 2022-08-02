
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/CandyItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2c2b9R9uDxPBJNa9FDo103e', 'CandyItem');
// scripts/candy/CandyItem.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  init: function init(obj, icon) {
    this.node.children[icon].active = true;
  },
  stop: function stop() {},
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FuZHlcXENhbmR5SXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXQiLCJvYmoiLCJpY29uIiwibm9kZSIsImNoaWxkcmVuIiwiYWN0aXZlIiwic3RvcCIsInJhbmRvbSIsIk1hdGgiLCJzZXRJY29uIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJ0aGVuIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MQyxFQUFBQSxJQU5LLGdCQU1BQyxHQU5BLEVBTUtDLElBTkwsRUFNVTtBQUNYLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkYsSUFBbkIsRUFBeUJHLE1BQXpCLEdBQWtDLElBQWxDO0FBQ0gsR0FSSTtBQVNMQyxFQUFBQSxJQUFJLEVBQUUsZ0JBQVcsQ0FFaEIsQ0FYSTtBQVlMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVU7QUFDZCxRQUFJTCxJQUFJLEdBQUcsQ0FBQyxFQUFFTSxJQUFJLENBQUNELE1BQUwsS0FBYyxDQUFoQixDQUFaO0FBQ0EsU0FBS0UsT0FBTCxDQUFhUCxJQUFiO0FBQ0EsV0FBT0EsSUFBUDtBQUNILEdBaEJJO0FBaUJMTyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNQLElBQVQsRUFBZVEsSUFBZixFQUE0QjtBQUFBOztBQUFBLFFBQWJBLElBQWE7QUFBYkEsTUFBQUEsSUFBYSxHQUFOLEtBQU07QUFBQTs7QUFDakNDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtULElBQUwsQ0FBVUMsUUFBVixDQUFtQlMsR0FBbkIsQ0FBdUIsVUFBU1YsSUFBVCxFQUFjO0FBQzdDQSxNQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBYyxLQUFkO0FBQ0gsS0FGVyxDQUFaLEVBRUlTLElBRkosQ0FFUyxVQUFBQyxNQUFNLEVBQUU7QUFDYixNQUFBLEtBQUksQ0FBQ1osSUFBTCxDQUFVQyxRQUFWLENBQW1CRixJQUFuQixFQUF5QkcsTUFBekIsR0FBa0MsSUFBbEM7O0FBQ0EsVUFBSUssSUFBSixFQUFVO0FBQ04sUUFBQSxLQUFJLENBQUNBLElBQUwsR0FBWVIsSUFBWjtBQUNIO0FBQ0osS0FQRCxFQU9HLElBUEg7QUFTSDtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgIH0sXHJcbiAgICBpbml0KG9iaiwgaWNvbil7XHJcbiAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ljb25dLmFjdGl2ZSA9IHRydWU7XHJcbiAgICB9LFxyXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgfSxcclxuICAgIHJhbmRvbTogZnVuY3Rpb24oKXtcclxuICAgICAgICBsZXQgaWNvbiA9IH5+KE1hdGgucmFuZG9tKCkqNik7XHJcbiAgICAgICAgdGhpcy5zZXRJY29uKGljb24pO1xyXG4gICAgICAgIHJldHVybiBpY29uO1xyXG4gICAgfSxcclxuICAgIHNldEljb246IGZ1bmN0aW9uKGljb24sIGRhdGEgPSBmYWxzZSl7XHJcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5ub2RlLmNoaWxkcmVuLm1hcChmdW5jdGlvbihub2RlKXtcclxuICAgICAgICAgICAgbm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KSkudGhlbihyZXN1bHQ9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ljb25dLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSBpY29uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcblxyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==
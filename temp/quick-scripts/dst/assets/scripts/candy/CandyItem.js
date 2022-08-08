
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NhbmR5L0NhbmR5SXRlbS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsImluaXQiLCJvYmoiLCJpY29uIiwibm9kZSIsImNoaWxkcmVuIiwiYWN0aXZlIiwic3RvcCIsInJhbmRvbSIsIk1hdGgiLCJzZXRJY29uIiwiZGF0YSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJ0aGVuIiwicmVzdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MQyxFQUFBQSxJQU5LLGdCQU1BQyxHQU5BLEVBTUtDLElBTkwsRUFNVTtBQUNYLFNBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkYsSUFBbkIsRUFBeUJHLE1BQXpCLEdBQWtDLElBQWxDO0FBQ0gsR0FSSTtBQVNMQyxFQUFBQSxJQUFJLEVBQUUsZ0JBQVcsQ0FFaEIsQ0FYSTtBQVlMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVU7QUFDZCxRQUFJTCxJQUFJLEdBQUcsQ0FBQyxFQUFFTSxJQUFJLENBQUNELE1BQUwsS0FBYyxDQUFoQixDQUFaO0FBQ0EsU0FBS0UsT0FBTCxDQUFhUCxJQUFiO0FBQ0EsV0FBT0EsSUFBUDtBQUNILEdBaEJJO0FBaUJMTyxFQUFBQSxPQUFPLEVBQUUsaUJBQVNQLElBQVQsRUFBZVEsSUFBZixFQUE0QjtBQUFBOztBQUFBLFFBQWJBLElBQWE7QUFBYkEsTUFBQUEsSUFBYSxHQUFOLEtBQU07QUFBQTs7QUFDakNDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLEtBQUtULElBQUwsQ0FBVUMsUUFBVixDQUFtQlMsR0FBbkIsQ0FBdUIsVUFBU1YsSUFBVCxFQUFjO0FBQzdDQSxNQUFBQSxJQUFJLENBQUNFLE1BQUwsR0FBYyxLQUFkO0FBQ0gsS0FGVyxDQUFaLEVBRUlTLElBRkosQ0FFUyxVQUFBQyxNQUFNLEVBQUU7QUFDYixNQUFBLEtBQUksQ0FBQ1osSUFBTCxDQUFVQyxRQUFWLENBQW1CRixJQUFuQixFQUF5QkcsTUFBekIsR0FBa0MsSUFBbEM7O0FBQ0EsVUFBSUssSUFBSixFQUFVO0FBQ04sUUFBQSxLQUFJLENBQUNBLElBQUwsR0FBWVIsSUFBWjtBQUNIO0FBQ0osS0FQRCxFQU9HLElBUEg7QUFTSDtBQTNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcbiAgICBpbml0KG9iaiwgaWNvbil7XG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbltpY29uXS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG5cbiAgICB9LFxuICAgIHJhbmRvbTogZnVuY3Rpb24oKXtcbiAgICAgICAgbGV0IGljb24gPSB+fihNYXRoLnJhbmRvbSgpKjYpO1xuICAgICAgICB0aGlzLnNldEljb24oaWNvbik7XG4gICAgICAgIHJldHVybiBpY29uO1xuICAgIH0sXG4gICAgc2V0SWNvbjogZnVuY3Rpb24oaWNvbiwgZGF0YSA9IGZhbHNlKXtcbiAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5ub2RlLmNoaWxkcmVuLm1hcChmdW5jdGlvbihub2RlKXtcbiAgICAgICAgICAgIG5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pKS50aGVuKHJlc3VsdD0+e1xuICAgICAgICAgICAgdGhpcy5ub2RlLmNoaWxkcmVuW2ljb25dLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IGljb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuXG4gICAgfSxcbn0pO1xuIl19
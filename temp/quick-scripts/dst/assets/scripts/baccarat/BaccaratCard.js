
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/baccarat/BaccaratCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cbae1yBtxOD5vgQIVnWzz4', 'BaccaratCard');
// scripts/baccarat/BaccaratCard.js

"use strict";

var Suit = {};
Suit.Heart = 0;
Suit.Diamond = 1;
Suit.Spade = 2;
Suit.Club = 3;
var ConvertCard = [2, 3, 0, 1]; //spade, club , heart, diamond

var SuitName = 'heart,diamond,spade,club'.split(',');
var A2_10JQK = '2,3,4,5,6,7,8,9,10,11,12,13,1'.split(',');
var NUMBER_POINT = '2,3,4,5,6,7,8,9,0,0,0,0,1'.split(',');

function Card(id) {
  Object.defineProperties(this, {
    point: {
      value: id % 13,
      writable: false
    },
    suit: {
      value: ConvertCard[Math.floor(id / 13)],
      writable: false
    },
    id: {
      value: id,
      writable: false
    },
    pointNumber: {
      get: function get() {
        return parseInt(NUMBER_POINT[this.point]);
      }
    },
    pointName: {
      get: function get() {
        return A2_10JQK[this.point];
      }
    },
    suitName: {
      get: function get() {
        return SuitName[this.suit];
      }
    },
    nameFile: {
      get: function get() {
        return parseInt(this.pointName) + 13 * this.suit;
      }
    },
    color: {
      get: function get() {
        if (this.suit == Suit.Diamond || this.suit == Suit.Heart) {
          return cc.Color.RED;
        } else {
          return cc.Color.BLACK;
        }
      }
    }
  });
}

;

Card.prototype.toString = function () {
  return this.pointName + ' ' + this.suitName;
};

module.exports = {
  Card: Card,
  Suit: Suit
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcYmFjY2FyYXRcXEJhY2NhcmF0Q2FyZC5qcyJdLCJuYW1lcyI6WyJTdWl0IiwiSGVhcnQiLCJEaWFtb25kIiwiU3BhZGUiLCJDbHViIiwiQ29udmVydENhcmQiLCJTdWl0TmFtZSIsInNwbGl0IiwiQTJfMTBKUUsiLCJOVU1CRVJfUE9JTlQiLCJDYXJkIiwiaWQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicG9pbnQiLCJ2YWx1ZSIsIndyaXRhYmxlIiwic3VpdCIsIk1hdGgiLCJmbG9vciIsInBvaW50TnVtYmVyIiwiZ2V0IiwicGFyc2VJbnQiLCJwb2ludE5hbWUiLCJzdWl0TmFtZSIsIm5hbWVGaWxlIiwiY29sb3IiLCJjYyIsIkNvbG9yIiwiUkVEIiwiQkxBQ0siLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxHQUFHLEVBQVg7QUFDQUEsSUFBSSxDQUFDQyxLQUFMLEdBQWEsQ0FBYjtBQUNBRCxJQUFJLENBQUNFLE9BQUwsR0FBZSxDQUFmO0FBQ0FGLElBQUksQ0FBQ0csS0FBTCxHQUFhLENBQWI7QUFDQUgsSUFBSSxDQUFDSSxJQUFMLEdBQVksQ0FBWjtBQUNBLElBQUlDLFdBQVcsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBbEIsRUFDQTs7QUFDQSxJQUFJQyxRQUFRLEdBQUcsMkJBQTJCQyxLQUEzQixDQUFpQyxHQUFqQyxDQUFmO0FBQ0EsSUFBSUMsUUFBUSxHQUFPLGdDQUFnQ0QsS0FBaEMsQ0FBc0MsR0FBdEMsQ0FBbkI7QUFDQSxJQUFJRSxZQUFZLEdBQUcsNEJBQTRCRixLQUE1QixDQUFrQyxHQUFsQyxDQUFuQjs7QUFDQSxTQUFTRyxJQUFULENBQWNDLEVBQWQsRUFBa0I7QUFDZEMsRUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hDLE1BQUFBLEtBQUssRUFBRUosRUFBRSxHQUFHLEVBRFQ7QUFFSEssTUFBQUEsUUFBUSxFQUFFO0FBRlAsS0FEbUI7QUFLMUJDLElBQUFBLElBQUksRUFBRTtBQUNGRixNQUFBQSxLQUFLLEVBQUVWLFdBQVcsQ0FBQ2EsSUFBSSxDQUFDQyxLQUFMLENBQVdSLEVBQUUsR0FBRyxFQUFoQixDQUFELENBRGhCO0FBRUZLLE1BQUFBLFFBQVEsRUFBRTtBQUZSLEtBTG9CO0FBUzFCTCxJQUFBQSxFQUFFLEVBQUU7QUFDQUksTUFBQUEsS0FBSyxFQUFFSixFQURQO0FBRUFLLE1BQUFBLFFBQVEsRUFBRTtBQUZWLEtBVHNCO0FBYTFCSSxJQUFBQSxXQUFXLEVBQUU7QUFDVEMsTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixlQUFPQyxRQUFRLENBQUNiLFlBQVksQ0FBQyxLQUFLSyxLQUFOLENBQWIsQ0FBZjtBQUNIO0FBSFEsS0FiYTtBQWtCMUJTLElBQUFBLFNBQVMsRUFBRTtBQUNQRixNQUFBQSxHQUFHLEVBQUUsZUFBWTtBQUNiLGVBQU9iLFFBQVEsQ0FBQyxLQUFLTSxLQUFOLENBQWY7QUFDSDtBQUhNLEtBbEJlO0FBdUIxQlUsSUFBQUEsUUFBUSxFQUFFO0FBQ05ILE1BQUFBLEdBQUcsRUFBRSxlQUFZO0FBQ2IsZUFBT2YsUUFBUSxDQUFDLEtBQUtXLElBQU4sQ0FBZjtBQUNIO0FBSEssS0F2QmdCO0FBNEIxQlEsSUFBQUEsUUFBUSxFQUFFO0FBQ05KLE1BQUFBLEdBQUcsRUFBRSxlQUFZO0FBQ2IsZUFBT0MsUUFBUSxDQUFDLEtBQUtDLFNBQU4sQ0FBUixHQUEyQixLQUFLLEtBQUtOLElBQTVDO0FBQ0g7QUFISyxLQTVCZ0I7QUFpQzFCUyxJQUFBQSxLQUFLLEVBQUU7QUFDSEwsTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixZQUFHLEtBQUtKLElBQUwsSUFBYWpCLElBQUksQ0FBQ0UsT0FBbEIsSUFBNkIsS0FBS2UsSUFBTCxJQUFhakIsSUFBSSxDQUFDQyxLQUFsRCxFQUF3RDtBQUNwRCxpQkFBTzBCLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxHQUFoQjtBQUNILFNBRkQsTUFFSztBQUNELGlCQUFPRixFQUFFLENBQUNDLEtBQUgsQ0FBU0UsS0FBaEI7QUFDSDtBQUNKO0FBUEU7QUFqQ21CLEdBQTlCO0FBMkNIOztBQUFBOztBQUNEcEIsSUFBSSxDQUFDcUIsU0FBTCxDQUFlQyxRQUFmLEdBQTBCLFlBQVk7QUFDbEMsU0FBTyxLQUFLVCxTQUFMLEdBQWlCLEdBQWpCLEdBQXNCLEtBQUtDLFFBQWxDO0FBQ0gsQ0FGRDs7QUFHQVMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2J4QixFQUFBQSxJQUFJLEVBQUVBLElBRE87QUFFYlYsRUFBQUEsSUFBSSxFQUFFQTtBQUZPLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgU3VpdCA9IHt9O1xyXG5TdWl0LkhlYXJ0ID0gMDtcclxuU3VpdC5EaWFtb25kID0gMTtcclxuU3VpdC5TcGFkZSA9IDI7XHJcblN1aXQuQ2x1YiA9IDM7XHJcbmxldCBDb252ZXJ0Q2FyZCA9IFsyLCAzLCAwLCAxXTtcclxuLy9zcGFkZSwgY2x1YiAsIGhlYXJ0LCBkaWFtb25kXHJcbmxldCBTdWl0TmFtZSA9ICdoZWFydCxkaWFtb25kLHNwYWRlLGNsdWInLnNwbGl0KCcsJyk7XHJcbmxldCBBMl8xMEpRSyAgICAgPSAnMiwzLDQsNSw2LDcsOCw5LDEwLDExLDEyLDEzLDEnLnNwbGl0KCcsJyk7XHJcbmxldCBOVU1CRVJfUE9JTlQgPSAnMiwzLDQsNSw2LDcsOCw5LDAsMCwwLDAsMScuc3BsaXQoJywnKTtcclxuZnVuY3Rpb24gQ2FyZChpZCkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xyXG4gICAgICAgIHBvaW50OiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpZCAlIDEzLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1aXQ6IHtcclxuICAgICAgICAgICAgdmFsdWU6IENvbnZlcnRDYXJkW01hdGguZmxvb3IoaWQgLyAxMyldLFxyXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBpZCxcclxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb2ludE51bWJlcjoge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZUludChOVU1CRVJfUE9JTlRbdGhpcy5wb2ludF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwb2ludE5hbWU6IHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gQTJfMTBKUUtbdGhpcy5wb2ludF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1aXROYW1lOiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFN1aXROYW1lW3RoaXMuc3VpdF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5hbWVGaWxlOiB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMucG9pbnROYW1lKSArIDEzICogdGhpcy5zdWl0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuc3VpdCA9PSBTdWl0LkRpYW1vbmQgfHwgdGhpcy5zdWl0ID09IFN1aXQuSGVhcnQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYy5Db2xvci5SRUQ7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2MuQ29sb3IuQkxBQ0s7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59O1xyXG5DYXJkLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiB0aGlzLnBvaW50TmFtZSArICcgJysgdGhpcy5zdWl0TmFtZTtcclxufTtcclxubW9kdWxlLmV4cG9ydHMgPSB7XHJcbiAgICBDYXJkOiBDYXJkLFxyXG4gICAgU3VpdDogU3VpdFxyXG59XHJcbiJdfQ==
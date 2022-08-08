
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhY2NhcmF0L0JhY2NhcmF0Q2FyZC5qcyJdLCJuYW1lcyI6WyJTdWl0IiwiSGVhcnQiLCJEaWFtb25kIiwiU3BhZGUiLCJDbHViIiwiQ29udmVydENhcmQiLCJTdWl0TmFtZSIsInNwbGl0IiwiQTJfMTBKUUsiLCJOVU1CRVJfUE9JTlQiLCJDYXJkIiwiaWQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0aWVzIiwicG9pbnQiLCJ2YWx1ZSIsIndyaXRhYmxlIiwic3VpdCIsIk1hdGgiLCJmbG9vciIsInBvaW50TnVtYmVyIiwiZ2V0IiwicGFyc2VJbnQiLCJwb2ludE5hbWUiLCJzdWl0TmFtZSIsIm5hbWVGaWxlIiwiY29sb3IiLCJjYyIsIkNvbG9yIiwiUkVEIiwiQkxBQ0siLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxHQUFHLEVBQVg7QUFDQUEsSUFBSSxDQUFDQyxLQUFMLEdBQWEsQ0FBYjtBQUNBRCxJQUFJLENBQUNFLE9BQUwsR0FBZSxDQUFmO0FBQ0FGLElBQUksQ0FBQ0csS0FBTCxHQUFhLENBQWI7QUFDQUgsSUFBSSxDQUFDSSxJQUFMLEdBQVksQ0FBWjtBQUNBLElBQUlDLFdBQVcsR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsQ0FBbEIsRUFDQTs7QUFDQSxJQUFJQyxRQUFRLEdBQUcsMkJBQTJCQyxLQUEzQixDQUFpQyxHQUFqQyxDQUFmO0FBQ0EsSUFBSUMsUUFBUSxHQUFPLGdDQUFnQ0QsS0FBaEMsQ0FBc0MsR0FBdEMsQ0FBbkI7QUFDQSxJQUFJRSxZQUFZLEdBQUcsNEJBQTRCRixLQUE1QixDQUFrQyxHQUFsQyxDQUFuQjs7QUFDQSxTQUFTRyxJQUFULENBQWNDLEVBQWQsRUFBa0I7QUFDZEMsRUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixJQUF4QixFQUE4QjtBQUMxQkMsSUFBQUEsS0FBSyxFQUFFO0FBQ0hDLE1BQUFBLEtBQUssRUFBRUosRUFBRSxHQUFHLEVBRFQ7QUFFSEssTUFBQUEsUUFBUSxFQUFFO0FBRlAsS0FEbUI7QUFLMUJDLElBQUFBLElBQUksRUFBRTtBQUNGRixNQUFBQSxLQUFLLEVBQUVWLFdBQVcsQ0FBQ2EsSUFBSSxDQUFDQyxLQUFMLENBQVdSLEVBQUUsR0FBRyxFQUFoQixDQUFELENBRGhCO0FBRUZLLE1BQUFBLFFBQVEsRUFBRTtBQUZSLEtBTG9CO0FBUzFCTCxJQUFBQSxFQUFFLEVBQUU7QUFDQUksTUFBQUEsS0FBSyxFQUFFSixFQURQO0FBRUFLLE1BQUFBLFFBQVEsRUFBRTtBQUZWLEtBVHNCO0FBYTFCSSxJQUFBQSxXQUFXLEVBQUU7QUFDVEMsTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixlQUFPQyxRQUFRLENBQUNiLFlBQVksQ0FBQyxLQUFLSyxLQUFOLENBQWIsQ0FBZjtBQUNIO0FBSFEsS0FiYTtBQWtCMUJTLElBQUFBLFNBQVMsRUFBRTtBQUNQRixNQUFBQSxHQUFHLEVBQUUsZUFBWTtBQUNiLGVBQU9iLFFBQVEsQ0FBQyxLQUFLTSxLQUFOLENBQWY7QUFDSDtBQUhNLEtBbEJlO0FBdUIxQlUsSUFBQUEsUUFBUSxFQUFFO0FBQ05ILE1BQUFBLEdBQUcsRUFBRSxlQUFZO0FBQ2IsZUFBT2YsUUFBUSxDQUFDLEtBQUtXLElBQU4sQ0FBZjtBQUNIO0FBSEssS0F2QmdCO0FBNEIxQlEsSUFBQUEsUUFBUSxFQUFFO0FBQ05KLE1BQUFBLEdBQUcsRUFBRSxlQUFZO0FBQ2IsZUFBT0MsUUFBUSxDQUFDLEtBQUtDLFNBQU4sQ0FBUixHQUEyQixLQUFLLEtBQUtOLElBQTVDO0FBQ0g7QUFISyxLQTVCZ0I7QUFpQzFCUyxJQUFBQSxLQUFLLEVBQUU7QUFDSEwsTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixZQUFHLEtBQUtKLElBQUwsSUFBYWpCLElBQUksQ0FBQ0UsT0FBbEIsSUFBNkIsS0FBS2UsSUFBTCxJQUFhakIsSUFBSSxDQUFDQyxLQUFsRCxFQUF3RDtBQUNwRCxpQkFBTzBCLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxHQUFoQjtBQUNILFNBRkQsTUFFSztBQUNELGlCQUFPRixFQUFFLENBQUNDLEtBQUgsQ0FBU0UsS0FBaEI7QUFDSDtBQUNKO0FBUEU7QUFqQ21CLEdBQTlCO0FBMkNIOztBQUFBOztBQUNEcEIsSUFBSSxDQUFDcUIsU0FBTCxDQUFlQyxRQUFmLEdBQTBCLFlBQVk7QUFDbEMsU0FBTyxLQUFLVCxTQUFMLEdBQWlCLEdBQWpCLEdBQXNCLEtBQUtDLFFBQWxDO0FBQ0gsQ0FGRDs7QUFHQVMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2J4QixFQUFBQSxJQUFJLEVBQUVBLElBRE87QUFFYlYsRUFBQUEsSUFBSSxFQUFFQTtBQUZPLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgU3VpdCA9IHt9O1xuU3VpdC5IZWFydCA9IDA7XG5TdWl0LkRpYW1vbmQgPSAxO1xuU3VpdC5TcGFkZSA9IDI7XG5TdWl0LkNsdWIgPSAzO1xubGV0IENvbnZlcnRDYXJkID0gWzIsIDMsIDAsIDFdO1xuLy9zcGFkZSwgY2x1YiAsIGhlYXJ0LCBkaWFtb25kXG5sZXQgU3VpdE5hbWUgPSAnaGVhcnQsZGlhbW9uZCxzcGFkZSxjbHViJy5zcGxpdCgnLCcpO1xubGV0IEEyXzEwSlFLICAgICA9ICcyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMScuc3BsaXQoJywnKTtcbmxldCBOVU1CRVJfUE9JTlQgPSAnMiwzLDQsNSw2LDcsOCw5LDAsMCwwLDAsMScuc3BsaXQoJywnKTtcbmZ1bmN0aW9uIENhcmQoaWQpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICB2YWx1ZTogaWQgJSAxMyxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzdWl0OiB7XG4gICAgICAgICAgICB2YWx1ZTogQ29udmVydENhcmRbTWF0aC5mbG9vcihpZCAvIDEzKV0sXG4gICAgICAgICAgICB3cml0YWJsZTogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIHZhbHVlOiBpZCxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBwb2ludE51bWJlcjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KE5VTUJFUl9QT0lOVFt0aGlzLnBvaW50XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBvaW50TmFtZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEEyXzEwSlFLW3RoaXMucG9pbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdWl0TmFtZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN1aXROYW1lW3RoaXMuc3VpdF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5hbWVGaWxlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wb2ludE5hbWUpICsgMTMgKiB0aGlzLnN1aXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN1aXQgPT0gU3VpdC5EaWFtb25kIHx8IHRoaXMuc3VpdCA9PSBTdWl0LkhlYXJ0KXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLkNvbG9yLlJFRDtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59O1xuQ2FyZC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnROYW1lICsgJyAnKyB0aGlzLnN1aXROYW1lO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENhcmQ6IENhcmQsXG4gICAgU3VpdDogU3VpdFxufVxuIl19
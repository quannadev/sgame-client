
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/poker/PokerCard.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4755dZzhK9Puplv67j3dyWP', 'PokerCard');
// scripts/poker/PokerCard.js

"use strict";

var Suit = {};
Suit.Heart = 0;
Suit.Diamond = 1;
Suit.Spade = 2;
Suit.Club = 3;
var SuitName = 'heart,diamond,spade,club'.split(',');
var A2_10JQK = '2,3,4,5,6,7,8,9,10,11,12,13,1'.split(',');

function Card(id) {
  Object.defineProperties(this, {
    point: {
      value: id % 13,
      writable: false
    },
    suit: {
      value: Math.floor(id / 13),
      writable: false
    },
    id: {
      value: id,
      writable: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Bva2VyL1Bva2VyQ2FyZC5qcyJdLCJuYW1lcyI6WyJTdWl0IiwiSGVhcnQiLCJEaWFtb25kIiwiU3BhZGUiLCJDbHViIiwiU3VpdE5hbWUiLCJzcGxpdCIsIkEyXzEwSlFLIiwiQ2FyZCIsImlkIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsInBvaW50IiwidmFsdWUiLCJ3cml0YWJsZSIsInN1aXQiLCJNYXRoIiwiZmxvb3IiLCJwb2ludE5hbWUiLCJnZXQiLCJzdWl0TmFtZSIsIm5hbWVGaWxlIiwicGFyc2VJbnQiLCJjb2xvciIsImNjIiwiQ29sb3IiLCJSRUQiLCJCTEFDSyIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxJQUFJLEdBQUcsRUFBWDtBQUNBQSxJQUFJLENBQUNDLEtBQUwsR0FBYSxDQUFiO0FBQ0FELElBQUksQ0FBQ0UsT0FBTCxHQUFlLENBQWY7QUFDQUYsSUFBSSxDQUFDRyxLQUFMLEdBQWEsQ0FBYjtBQUNBSCxJQUFJLENBQUNJLElBQUwsR0FBWSxDQUFaO0FBQ0EsSUFBSUMsUUFBUSxHQUFHLDJCQUEyQkMsS0FBM0IsQ0FBaUMsR0FBakMsQ0FBZjtBQUNBLElBQUlDLFFBQVEsR0FBRyxnQ0FBZ0NELEtBQWhDLENBQXNDLEdBQXRDLENBQWY7O0FBQ0EsU0FBU0UsSUFBVCxDQUFjQyxFQUFkLEVBQWtCO0FBQ2RDLEVBQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsSUFBeEIsRUFBOEI7QUFDMUJDLElBQUFBLEtBQUssRUFBRTtBQUNIQyxNQUFBQSxLQUFLLEVBQUVKLEVBQUUsR0FBRyxFQURUO0FBRUhLLE1BQUFBLFFBQVEsRUFBRTtBQUZQLEtBRG1CO0FBSzFCQyxJQUFBQSxJQUFJLEVBQUU7QUFDRkYsTUFBQUEsS0FBSyxFQUFFRyxJQUFJLENBQUNDLEtBQUwsQ0FBV1IsRUFBRSxHQUFHLEVBQWhCLENBREw7QUFFRkssTUFBQUEsUUFBUSxFQUFFO0FBRlIsS0FMb0I7QUFTMUJMLElBQUFBLEVBQUUsRUFBRTtBQUNBSSxNQUFBQSxLQUFLLEVBQUVKLEVBRFA7QUFFQUssTUFBQUEsUUFBUSxFQUFFO0FBRlYsS0FUc0I7QUFhMUJJLElBQUFBLFNBQVMsRUFBRTtBQUNQQyxNQUFBQSxHQUFHLEVBQUUsZUFBWTtBQUNiLGVBQU9aLFFBQVEsQ0FBQyxLQUFLSyxLQUFOLENBQWY7QUFDSDtBQUhNLEtBYmU7QUFrQjFCUSxJQUFBQSxRQUFRLEVBQUU7QUFDTkQsTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixlQUFPZCxRQUFRLENBQUMsS0FBS1UsSUFBTixDQUFmO0FBQ0g7QUFISyxLQWxCZ0I7QUF1QjFCTSxJQUFBQSxRQUFRLEVBQUU7QUFDTkYsTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixlQUFPRyxRQUFRLENBQUMsS0FBS0osU0FBTixDQUFSLEdBQTJCLEtBQUssS0FBS0gsSUFBNUM7QUFDSDtBQUhLLEtBdkJnQjtBQTRCMUJRLElBQUFBLEtBQUssRUFBRTtBQUNISixNQUFBQSxHQUFHLEVBQUUsZUFBWTtBQUNiLFlBQUcsS0FBS0osSUFBTCxJQUFhZixJQUFJLENBQUNFLE9BQWxCLElBQTZCLEtBQUthLElBQUwsSUFBYWYsSUFBSSxDQUFDQyxLQUFsRCxFQUF3RDtBQUNwRCxpQkFBT3VCLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxHQUFoQjtBQUNILFNBRkQsTUFFSztBQUNELGlCQUFPRixFQUFFLENBQUNDLEtBQUgsQ0FBU0UsS0FBaEI7QUFDSDtBQUNKO0FBUEU7QUE1Qm1CLEdBQTlCO0FBc0NIOztBQUFBOztBQUNEbkIsSUFBSSxDQUFDb0IsU0FBTCxDQUFlQyxRQUFmLEdBQTBCLFlBQVk7QUFDbEMsU0FBTyxLQUFLWCxTQUFMLEdBQWlCLEdBQWpCLEdBQXNCLEtBQUtFLFFBQWxDO0FBQ0gsQ0FGRDs7QUFHQVUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2J2QixFQUFBQSxJQUFJLEVBQUVBLElBRE87QUFFYlIsRUFBQUEsSUFBSSxFQUFFQTtBQUZPLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU3VpdCA9IHt9O1xuU3VpdC5IZWFydCA9IDA7XG5TdWl0LkRpYW1vbmQgPSAxO1xuU3VpdC5TcGFkZSA9IDI7XG5TdWl0LkNsdWIgPSAzO1xubGV0IFN1aXROYW1lID0gJ2hlYXJ0LGRpYW1vbmQsc3BhZGUsY2x1Yicuc3BsaXQoJywnKTtcbnZhciBBMl8xMEpRSyA9ICcyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMScuc3BsaXQoJywnKTtcbmZ1bmN0aW9uIENhcmQoaWQpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICB2YWx1ZTogaWQgJSAxMyxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBzdWl0OiB7XG4gICAgICAgICAgICB2YWx1ZTogTWF0aC5mbG9vcihpZCAvIDEzKSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgICAgICAgd3JpdGFibGU6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHBvaW50TmFtZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEEyXzEwSlFLW3RoaXMucG9pbnRdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzdWl0TmFtZToge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFN1aXROYW1lW3RoaXMuc3VpdF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG5hbWVGaWxlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5wb2ludE5hbWUpICsgMTMgKiB0aGlzLnN1aXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN1aXQgPT0gU3VpdC5EaWFtb25kIHx8IHRoaXMuc3VpdCA9PSBTdWl0LkhlYXJ0KXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLkNvbG9yLlJFRDtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59O1xuQ2FyZC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMucG9pbnROYW1lICsgJyAnKyB0aGlzLnN1aXROYW1lO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIENhcmQ6IENhcmQsXG4gICAgU3VpdDogU3VpdFxufSJdfQ==
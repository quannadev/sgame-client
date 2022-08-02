
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/minipoker/MiniPokerEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df44cUccU1CI5M73jN/ic5N', 'MiniPokerEvent');
// scripts/minipoker/MiniPokerEvent.js

"use strict";

var MiniPokerEvent = {};
MiniPokerEvent.RESPONSE_NAME = {
  BET_RES: "mp1"
};
MiniPokerEvent.BetEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(MiniPokerEvent.RESPONSE_NAME.BET_RES);
  },
  fromEvent: function fromEvent(event) {
    this.noHu = false;
    this.winMoney = event.getDouble("w");
    this.handWinType = event.getByte("hw");
    this.result = event.getByteArray("c");

    if (event.containsKey("n")) {
      this.noHu = event.getBool("n");
    }

    return this;
  }
});
window.MiniPokerEvent = module.exports = MiniPokerEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaXBva2VyXFxNaW5pUG9rZXJFdmVudC5qcyJdLCJuYW1lcyI6WyJNaW5pUG9rZXJFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJCRVRfUkVTIiwiQmV0RXZlbnQiLCJDYXNpbm9FdmVudCIsIl9CYXNlRXZlbnQiLCJleHRlbmQiLCJjdG9yIiwiX3N1cGVyIiwiZnJvbUV2ZW50IiwiZXZlbnQiLCJub0h1Iiwid2luTW9uZXkiLCJnZXREb3VibGUiLCJoYW5kV2luVHlwZSIsImdldEJ5dGUiLCJyZXN1bHQiLCJnZXRCeXRlQXJyYXkiLCJjb250YWluc0tleSIsImdldEJvb2wiLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGNBQWMsR0FBRyxFQUFyQjtBQUNBQSxjQUFjLENBQUNDLGFBQWYsR0FBK0I7QUFDM0JDLEVBQUFBLE9BQU8sRUFBRztBQURpQixDQUEvQjtBQUdBRixjQUFjLENBQUNHLFFBQWYsR0FBMEJDLFdBQVcsQ0FBQ0MsVUFBWixDQUF1QkMsTUFBdkIsQ0FBOEI7QUFDcERDLEVBQUFBLElBRG9ELGtCQUM5QztBQUNGLFNBQUtDLE1BQUwsQ0FBWVIsY0FBYyxDQUFDQyxhQUFmLENBQTZCQyxPQUF6QztBQUNILEdBSG1EO0FBSXBETyxFQUFBQSxTQUpvRCxxQkFJMUNDLEtBSjBDLEVBSXBDO0FBQ1osU0FBS0MsSUFBTCxHQUFrQixLQUFsQjtBQUNBLFNBQUtDLFFBQUwsR0FBa0JGLEtBQUssQ0FBQ0csU0FBTixDQUFnQixHQUFoQixDQUFsQjtBQUNBLFNBQUtDLFdBQUwsR0FBa0JKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLElBQWQsQ0FBbEI7QUFDQSxTQUFLQyxNQUFMLEdBQWtCTixLQUFLLENBQUNPLFlBQU4sQ0FBbUIsR0FBbkIsQ0FBbEI7O0FBQ0EsUUFBR1AsS0FBSyxDQUFDUSxXQUFOLENBQWtCLEdBQWxCLENBQUgsRUFBMEI7QUFDdEIsV0FBS1AsSUFBTCxHQUFZRCxLQUFLLENBQUNTLE9BQU4sQ0FBYyxHQUFkLENBQVo7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSDtBQWJtRCxDQUE5QixDQUExQjtBQWVBQyxNQUFNLENBQUNwQixjQUFQLEdBQXdCcUIsTUFBTSxDQUFDQyxPQUFQLEdBQWlCdEIsY0FBekMiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBNaW5pUG9rZXJFdmVudCA9IHt9O1xyXG5NaW5pUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FID0ge1xyXG4gICAgQkVUX1JFUyA6IFwibXAxXCJcclxufTtcclxuTWluaVBva2VyRXZlbnQuQmV0RXZlbnQgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoTWluaVBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5CRVRfUkVTKTtcclxuICAgIH0sXHJcbiAgICBmcm9tRXZlbnQoZXZlbnQpe1xyXG4gICAgICAgIHRoaXMubm9IdSAgICAgICA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMud2luTW9uZXkgICA9IGV2ZW50LmdldERvdWJsZShcIndcIik7XHJcbiAgICAgICAgdGhpcy5oYW5kV2luVHlwZT0gZXZlbnQuZ2V0Qnl0ZShcImh3XCIpO1xyXG4gICAgICAgIHRoaXMucmVzdWx0ICAgICA9IGV2ZW50LmdldEJ5dGVBcnJheShcImNcIik7XHJcbiAgICAgICAgaWYoZXZlbnQuY29udGFpbnNLZXkoXCJuXCIpKXtcclxuICAgICAgICAgICAgdGhpcy5ub0h1ID0gZXZlbnQuZ2V0Qm9vbChcIm5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxufSk7XHJcbndpbmRvdy5NaW5pUG9rZXJFdmVudCA9IG1vZHVsZS5leHBvcnRzID0gTWluaVBva2VyRXZlbnQ7Il19

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/RouletteEvent.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a5b7f3fBq5PMLBDDylBJ3KZ', 'RouletteEvent');
// scripts/roulette/RouletteEvent.js

"use strict";

var RouletteEvent = {};
RouletteEvent.RESPONSE_NAME = {
  LOAD_GAME_RES: "rl1",
  BET_RES: "rl2",
  END_BETTING: "rl3",
  HISTORY_RESULT: "rl4"
};
RouletteEvent.LoadGameEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(RouletteEvent.RESPONSE_NAME.LOAD_GAME_RES);
  },
  fromEvent: function fromEvent(event) {
    this.isBetting = event.getBool("b");
    this.time = event.getInt("t");
    this.totalUserBet = event.getDouble("tc");
    this.listTypePotBet = event.getIntArray("lmtcp");
    this.listMyChipPot = event.getDoubleArray("lmcp");
    this.usersOnboard = event.getUtfStringArray("lu");
    this.chipUserOnBoard = event.getDoubleArray("lc");

    if (!this.isBetting) {
      this.result = event.getByte("rs");
      this.winpot = event.getByteArray("wp");
      this.winChip = 1000;
    }

    return this;
  }
});
RouletteEvent.BetEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(RouletteEvent.RESPONSE_NAME.BET_RES);
  },
  fromEvent: function fromEvent(event) {
    this.userName = event.getUtfString("un");
    this.betChip = event.getDouble("c");
    this.typePot = event.getByte("t");
    this.totalBet = event.getDouble("tc");
    return this;
  }
});
RouletteEvent.EndBetting = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(RouletteEvent.RESPONSE_NAME.END_BETTING);
  },
  fromEvent: function fromEvent(event) {
    this.result = event.getByte("rs");
    this.winChip = event.getDouble("wc");
    this.winpot = event.getByteArray("wp");
    this.chipUserOnBoard = event.getDoubleArray("lc");
    this.usersOnboard = event.getUtfStringArray("lu");
    return this;
  }
});
RouletteEvent.HistoryResponse = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RESULT);
  },
  fromEvent: function fromEvent(event) {
    this.result = event.getByteArray("lr");
    return this;
  }
});
RouletteEvent.HistoryEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.HISTORY_RES);

    this.items = [];
  },
  fromEvent: function fromEvent(event) {
    var data = event.getSArray("d");

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var session = sItem.getDouble("id").toFixed(0);
      var time = sItem.getUtfString("t");
      var result = sItem.getInt("rs");
      var betValues = sItem.getUtfString("bi");
      var itemBet = betValues.split(",");

      for (var j = 0; j < itemBet.length; j++) {
        if (itemBet[j].length > 0) {
          var betObj = itemBet[j].split("|");
          var item = {};
          item.session = session;
          item.time = time;
          item.result = result;
          item.typePot = betObj[0];
          item.betPot = betObj[1];
          item.prizePot = betObj[2];
          this.items.push(item);
        }
      }
    }

    return this;
  }
});
RouletteEvent.LeaderBoardEvent = CasinoEvent._BaseEvent.extend({
  ctor: function ctor() {
    this._super(CasinoEvent.RESPONSE_NAME.LEADERBOARD_RES);

    this.items = [];
  },
  fromEvent: function fromEvent(event) {
    var data = event.getSArray("d");

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = i;
      item.account = sItem.getUtfString("dn");
      item.win = sItem.getDouble("m");
      item.time = sItem.getUtfString("t");
      this.items.push(item);
    }

    return this;
  }
});
window.RouletteEvent = module.exports = RouletteEvent;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3JvdWxldHRlL1JvdWxldHRlRXZlbnQuanMiXSwibmFtZXMiOlsiUm91bGV0dGVFdmVudCIsIlJFU1BPTlNFX05BTUUiLCJMT0FEX0dBTUVfUkVTIiwiQkVUX1JFUyIsIkVORF9CRVRUSU5HIiwiSElTVE9SWV9SRVNVTFQiLCJMb2FkR2FtZUV2ZW50IiwiQ2FzaW5vRXZlbnQiLCJfQmFzZUV2ZW50IiwiZXh0ZW5kIiwiY3RvciIsIl9zdXBlciIsImZyb21FdmVudCIsImV2ZW50IiwiaXNCZXR0aW5nIiwiZ2V0Qm9vbCIsInRpbWUiLCJnZXRJbnQiLCJ0b3RhbFVzZXJCZXQiLCJnZXREb3VibGUiLCJsaXN0VHlwZVBvdEJldCIsImdldEludEFycmF5IiwibGlzdE15Q2hpcFBvdCIsImdldERvdWJsZUFycmF5IiwidXNlcnNPbmJvYXJkIiwiZ2V0VXRmU3RyaW5nQXJyYXkiLCJjaGlwVXNlck9uQm9hcmQiLCJyZXN1bHQiLCJnZXRCeXRlIiwid2lucG90IiwiZ2V0Qnl0ZUFycmF5Iiwid2luQ2hpcCIsIkJldEV2ZW50IiwidXNlck5hbWUiLCJnZXRVdGZTdHJpbmciLCJiZXRDaGlwIiwidHlwZVBvdCIsInRvdGFsQmV0IiwiRW5kQmV0dGluZyIsIkhpc3RvcnlSZXNwb25zZSIsIkhpc3RvcnlFdmVudCIsIkhJU1RPUllfUkVTIiwiaXRlbXMiLCJkYXRhIiwiZ2V0U0FycmF5IiwiaSIsInNpemUiLCJzSXRlbSIsImdldCIsImdldE9iamVjdCIsInNlc3Npb24iLCJ0b0ZpeGVkIiwiYmV0VmFsdWVzIiwiaXRlbUJldCIsInNwbGl0IiwiaiIsImxlbmd0aCIsImJldE9iaiIsIml0ZW0iLCJiZXRQb3QiLCJwcml6ZVBvdCIsInB1c2giLCJMZWFkZXJCb2FyZEV2ZW50IiwiTEVBREVSQk9BUkRfUkVTIiwiYWNjb3VudCIsIndpbiIsIndpbmRvdyIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGFBQWEsQ0FBQ0MsYUFBZCxHQUE4QjtBQUMxQkMsRUFBQUEsYUFBYSxFQUFFLEtBRFc7QUFFMUJDLEVBQUFBLE9BQU8sRUFBRSxLQUZpQjtBQUcxQkMsRUFBQUEsV0FBVyxFQUFFLEtBSGE7QUFJMUJDLEVBQUFBLGNBQWMsRUFBRTtBQUpVLENBQTlCO0FBTUFMLGFBQWEsQ0FBQ00sYUFBZCxHQUE4QkMsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUN4REMsRUFBQUEsSUFEd0Qsa0JBQ2xEO0FBQ0YsU0FBS0MsTUFBTCxDQUFZWCxhQUFhLENBQUNDLGFBQWQsQ0FBNEJDLGFBQXhDO0FBQ0gsR0FIdUQ7QUFJeERVLEVBQUFBLFNBSndELHFCQUk5Q0MsS0FKOEMsRUFJeEM7QUFDWixTQUFLQyxTQUFMLEdBQXdCRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxHQUFkLENBQXhCO0FBQ0EsU0FBS0MsSUFBTCxHQUF3QkgsS0FBSyxDQUFDSSxNQUFOLENBQWEsR0FBYixDQUF4QjtBQUNBLFNBQUtDLFlBQUwsR0FBd0JMLEtBQUssQ0FBQ00sU0FBTixDQUFnQixJQUFoQixDQUF4QjtBQUNBLFNBQUtDLGNBQUwsR0FBd0JQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQixPQUFsQixDQUF4QjtBQUNBLFNBQUtDLGFBQUwsR0FBd0JULEtBQUssQ0FBQ1UsY0FBTixDQUFxQixNQUFyQixDQUF4QjtBQUNBLFNBQUtDLFlBQUwsR0FBd0JYLEtBQUssQ0FBQ1ksaUJBQU4sQ0FBd0IsSUFBeEIsQ0FBeEI7QUFDQSxTQUFLQyxlQUFMLEdBQXdCYixLQUFLLENBQUNVLGNBQU4sQ0FBcUIsSUFBckIsQ0FBeEI7O0FBQ0EsUUFBRyxDQUFDLEtBQUtULFNBQVQsRUFBbUI7QUFDZixXQUFLYSxNQUFMLEdBQXNCZCxLQUFLLENBQUNlLE9BQU4sQ0FBYyxJQUFkLENBQXRCO0FBQ0EsV0FBS0MsTUFBTCxHQUFzQmhCLEtBQUssQ0FBQ2lCLFlBQU4sQ0FBbUIsSUFBbkIsQ0FBdEI7QUFDQSxXQUFLQyxPQUFMLEdBQXVCLElBQXZCO0FBQ0g7O0FBQ0QsV0FBTyxJQUFQO0FBQ0g7QUFsQnVELENBQTlCLENBQTlCO0FBb0JBL0IsYUFBYSxDQUFDZ0MsUUFBZCxHQUF5QnpCLFdBQVcsQ0FBQ0MsVUFBWixDQUF1QkMsTUFBdkIsQ0FBOEI7QUFDbkRDLEVBQUFBLElBRG1ELGtCQUM3QztBQUNGLFNBQUtDLE1BQUwsQ0FBWVgsYUFBYSxDQUFDQyxhQUFkLENBQTRCRSxPQUF4QztBQUNILEdBSGtEO0FBSW5EUyxFQUFBQSxTQUptRCxxQkFJekNDLEtBSnlDLEVBSW5DO0FBQ1osU0FBS29CLFFBQUwsR0FBZ0JwQixLQUFLLENBQUNxQixZQUFOLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsU0FBS0MsT0FBTCxHQUFldEIsS0FBSyxDQUFDTSxTQUFOLENBQWdCLEdBQWhCLENBQWY7QUFDQSxTQUFLaUIsT0FBTCxHQUFldkIsS0FBSyxDQUFDZSxPQUFOLENBQWMsR0FBZCxDQUFmO0FBQ0EsU0FBS1MsUUFBTCxHQUFnQnhCLEtBQUssQ0FBQ00sU0FBTixDQUFnQixJQUFoQixDQUFoQjtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBVmtELENBQTlCLENBQXpCO0FBWUFuQixhQUFhLENBQUNzQyxVQUFkLEdBQTJCL0IsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUNyREMsRUFBQUEsSUFEcUQsa0JBQy9DO0FBQ0YsU0FBS0MsTUFBTCxDQUFZWCxhQUFhLENBQUNDLGFBQWQsQ0FBNEJHLFdBQXhDO0FBQ0gsR0FIb0Q7QUFJckRRLEVBQUFBLFNBSnFELHFCQUkzQ0MsS0FKMkMsRUFJckM7QUFDWixTQUFLYyxNQUFMLEdBQXdCZCxLQUFLLENBQUNlLE9BQU4sQ0FBYyxJQUFkLENBQXhCO0FBQ0EsU0FBS0csT0FBTCxHQUF3QmxCLEtBQUssQ0FBQ00sU0FBTixDQUFnQixJQUFoQixDQUF4QjtBQUNBLFNBQUtVLE1BQUwsR0FBd0JoQixLQUFLLENBQUNpQixZQUFOLENBQW1CLElBQW5CLENBQXhCO0FBQ0EsU0FBS0osZUFBTCxHQUF3QmIsS0FBSyxDQUFDVSxjQUFOLENBQXFCLElBQXJCLENBQXhCO0FBQ0EsU0FBS0MsWUFBTCxHQUF3QlgsS0FBSyxDQUFDWSxpQkFBTixDQUF3QixJQUF4QixDQUF4QjtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBWG9ELENBQTlCLENBQTNCO0FBYUF6QixhQUFhLENBQUN1QyxlQUFkLEdBQWdDaEMsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUMxREMsRUFBQUEsSUFEMEQsa0JBQ3BEO0FBQ0YsU0FBS0MsTUFBTCxDQUFZSixXQUFXLENBQUNOLGFBQVosQ0FBMEJJLGNBQXRDO0FBQ0gsR0FIeUQ7QUFJMURPLEVBQUFBLFNBSjBELHFCQUloREMsS0FKZ0QsRUFJMUM7QUFDWixTQUFLYyxNQUFMLEdBQWNkLEtBQUssQ0FBQ2lCLFlBQU4sQ0FBbUIsSUFBbkIsQ0FBZDtBQUNBLFdBQU8sSUFBUDtBQUNIO0FBUHlELENBQTlCLENBQWhDO0FBU0E5QixhQUFhLENBQUN3QyxZQUFkLEdBQTZCakMsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUN2REMsRUFBQUEsSUFEdUQsa0JBQ2hEO0FBQ0gsU0FBS0MsTUFBTCxDQUFZSixXQUFXLENBQUNOLGFBQVosQ0FBMEJ3QyxXQUF0Qzs7QUFDQSxTQUFLQyxLQUFMLEdBQWEsRUFBYjtBQUNILEdBSnNEO0FBS3ZEOUIsRUFBQUEsU0FMdUQscUJBSzdDQyxLQUw2QyxFQUt2QztBQUNaLFFBQUk4QixJQUFJLEdBQUc5QixLQUFLLENBQUMrQixTQUFOLENBQWdCLEdBQWhCLENBQVg7O0FBQ0EsU0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0csSUFBTCxFQUFuQixFQUFnQ0QsQ0FBQyxFQUFqQyxFQUFvQztBQUNoQyxVQUFJRSxLQUFLLEdBQUdKLElBQUksQ0FBQ0ssR0FBTCxDQUFTSCxDQUFULEVBQVlJLFNBQVosRUFBWjtBQUNBLFVBQUlDLE9BQU8sR0FBR0gsS0FBSyxDQUFDNUIsU0FBTixDQUFnQixJQUFoQixFQUFzQmdDLE9BQXRCLENBQThCLENBQTlCLENBQWQ7QUFDQSxVQUFJbkMsSUFBSSxHQUFHK0IsS0FBSyxDQUFDYixZQUFOLENBQW1CLEdBQW5CLENBQVg7QUFDQSxVQUFJUCxNQUFNLEdBQUdvQixLQUFLLENBQUM5QixNQUFOLENBQWEsSUFBYixDQUFiO0FBQ0EsVUFBSW1DLFNBQVMsR0FBR0wsS0FBSyxDQUFDYixZQUFOLENBQW1CLElBQW5CLENBQWhCO0FBQ0EsVUFBSW1CLE9BQU8sR0FBR0QsU0FBUyxDQUFDRSxLQUFWLENBQWdCLEdBQWhCLENBQWQ7O0FBQ0EsV0FBSSxJQUFJQyxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdGLE9BQU8sQ0FBQ0csTUFBM0IsRUFBa0NELENBQUMsRUFBbkMsRUFBc0M7QUFDbEMsWUFBR0YsT0FBTyxDQUFDRSxDQUFELENBQVAsQ0FBV0MsTUFBWCxHQUFvQixDQUF2QixFQUF5QjtBQUNyQixjQUFJQyxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFQLENBQVdELEtBQVgsQ0FBaUIsR0FBakIsQ0FBYjtBQUNBLGNBQUlJLElBQUksR0FBRyxFQUFYO0FBQ0FBLFVBQUFBLElBQUksQ0FBQ1IsT0FBTCxHQUFlQSxPQUFmO0FBQ0FRLFVBQUFBLElBQUksQ0FBQzFDLElBQUwsR0FBWUEsSUFBWjtBQUNBMEMsVUFBQUEsSUFBSSxDQUFDL0IsTUFBTCxHQUFjQSxNQUFkO0FBQ0ErQixVQUFBQSxJQUFJLENBQUN0QixPQUFMLEdBQWVxQixNQUFNLENBQUMsQ0FBRCxDQUFyQjtBQUNBQyxVQUFBQSxJQUFJLENBQUNDLE1BQUwsR0FBY0YsTUFBTSxDQUFDLENBQUQsQ0FBcEI7QUFDQUMsVUFBQUEsSUFBSSxDQUFDRSxRQUFMLEdBQWlCSCxNQUFNLENBQUMsQ0FBRCxDQUF2QjtBQUNBLGVBQUtmLEtBQUwsQ0FBV21CLElBQVgsQ0FBZ0JILElBQWhCO0FBQ0g7QUFFSjtBQUNKOztBQUNELFdBQU8sSUFBUDtBQUNIO0FBOUJzRCxDQUE5QixDQUE3QjtBQWdDQTFELGFBQWEsQ0FBQzhELGdCQUFkLEdBQWlDdkQsV0FBVyxDQUFDQyxVQUFaLENBQXVCQyxNQUF2QixDQUE4QjtBQUMzREMsRUFBQUEsSUFEMkQsa0JBQ3BEO0FBQ0gsU0FBS0MsTUFBTCxDQUFZSixXQUFXLENBQUNOLGFBQVosQ0FBMEI4RCxlQUF0Qzs7QUFDQSxTQUFLckIsS0FBTCxHQUFhLEVBQWI7QUFDSCxHQUowRDtBQUszRDlCLEVBQUFBLFNBTDJELHFCQUtqREMsS0FMaUQsRUFLM0M7QUFDWixRQUFJOEIsSUFBSSxHQUFHOUIsS0FBSyxDQUFDK0IsU0FBTixDQUFnQixHQUFoQixDQUFYOztBQUNBLFNBQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBY0EsQ0FBQyxHQUFHRixJQUFJLENBQUNHLElBQUwsRUFBbEIsRUFBOEJELENBQUMsRUFBL0IsRUFBa0M7QUFDOUIsVUFBSUUsS0FBSyxHQUFHSixJQUFJLENBQUNLLEdBQUwsQ0FBU0gsQ0FBVCxFQUFZSSxTQUFaLEVBQVo7QUFDQSxVQUFJUyxJQUFJLEdBQUcsRUFBWDtBQUNBQSxNQUFBQSxJQUFJLENBQUNSLE9BQUwsR0FBZUwsQ0FBZjtBQUNBYSxNQUFBQSxJQUFJLENBQUNNLE9BQUwsR0FBZWpCLEtBQUssQ0FBQ2IsWUFBTixDQUFtQixJQUFuQixDQUFmO0FBQ0F3QixNQUFBQSxJQUFJLENBQUNPLEdBQUwsR0FBV2xCLEtBQUssQ0FBQzVCLFNBQU4sQ0FBZ0IsR0FBaEIsQ0FBWDtBQUNBdUMsTUFBQUEsSUFBSSxDQUFDMUMsSUFBTCxHQUFZK0IsS0FBSyxDQUFDYixZQUFOLENBQW1CLEdBQW5CLENBQVo7QUFDQSxXQUFLUSxLQUFMLENBQVdtQixJQUFYLENBQWdCSCxJQUFoQjtBQUNIOztBQUNELFdBQU8sSUFBUDtBQUNIO0FBakIwRCxDQUE5QixDQUFqQztBQW1CQVEsTUFBTSxDQUFDbEUsYUFBUCxHQUF1Qm1FLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnBFLGFBQXhDIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUm91bGV0dGVFdmVudCA9IHt9O1xuUm91bGV0dGVFdmVudC5SRVNQT05TRV9OQU1FID0ge1xuICAgIExPQURfR0FNRV9SRVM6IFwicmwxXCIsXG4gICAgQkVUX1JFUzogXCJybDJcIixcbiAgICBFTkRfQkVUVElORzogXCJybDNcIixcbiAgICBISVNUT1JZX1JFU1VMVDogXCJybDRcIlxufTtcblJvdWxldHRlRXZlbnQuTG9hZEdhbWVFdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKFJvdWxldHRlRXZlbnQuUkVTUE9OU0VfTkFNRS5MT0FEX0dBTUVfUkVTKTtcbiAgICB9LFxuICAgIGZyb21FdmVudChldmVudCl7XG4gICAgICAgIHRoaXMuaXNCZXR0aW5nICAgICAgICA9IGV2ZW50LmdldEJvb2woXCJiXCIpO1xuICAgICAgICB0aGlzLnRpbWUgICAgICAgICAgICAgPSBldmVudC5nZXRJbnQoXCJ0XCIpO1xuICAgICAgICB0aGlzLnRvdGFsVXNlckJldCAgICAgPSBldmVudC5nZXREb3VibGUoXCJ0Y1wiKTtcbiAgICAgICAgdGhpcy5saXN0VHlwZVBvdEJldCAgID0gZXZlbnQuZ2V0SW50QXJyYXkoXCJsbXRjcFwiKTtcbiAgICAgICAgdGhpcy5saXN0TXlDaGlwUG90ICAgID0gZXZlbnQuZ2V0RG91YmxlQXJyYXkoXCJsbWNwXCIpO1xuICAgICAgICB0aGlzLnVzZXJzT25ib2FyZCAgICAgPSBldmVudC5nZXRVdGZTdHJpbmdBcnJheShcImx1XCIpO1xuICAgICAgICB0aGlzLmNoaXBVc2VyT25Cb2FyZCAgPSBldmVudC5nZXREb3VibGVBcnJheShcImxjXCIpO1xuICAgICAgICBpZighdGhpcy5pc0JldHRpbmcpe1xuICAgICAgICAgICAgdGhpcy5yZXN1bHQgICAgICAgICA9IGV2ZW50LmdldEJ5dGUoXCJyc1wiKTtcbiAgICAgICAgICAgIHRoaXMud2lucG90ICAgICAgICAgPSBldmVudC5nZXRCeXRlQXJyYXkoXCJ3cFwiKTtcbiAgICAgICAgICAgIHRoaXMud2luQ2hpcCAgICAgICAgID0gMTAwMDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KVxuUm91bGV0dGVFdmVudC5CZXRFdmVudCA9IENhc2lub0V2ZW50Ll9CYXNlRXZlbnQuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKFJvdWxldHRlRXZlbnQuUkVTUE9OU0VfTkFNRS5CRVRfUkVTKTtcbiAgICB9LFxuICAgIGZyb21FdmVudChldmVudCl7XG4gICAgICAgIHRoaXMudXNlck5hbWUgPSBldmVudC5nZXRVdGZTdHJpbmcoXCJ1blwiKTtcbiAgICAgICAgdGhpcy5iZXRDaGlwID0gZXZlbnQuZ2V0RG91YmxlKFwiY1wiKTtcbiAgICAgICAgdGhpcy50eXBlUG90ID0gZXZlbnQuZ2V0Qnl0ZShcInRcIik7XG4gICAgICAgIHRoaXMudG90YWxCZXQgPSBldmVudC5nZXREb3VibGUoXCJ0Y1wiKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5Sb3VsZXR0ZUV2ZW50LkVuZEJldHRpbmcgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihSb3VsZXR0ZUV2ZW50LlJFU1BPTlNFX05BTUUuRU5EX0JFVFRJTkcpO1xuICAgIH0sXG4gICAgZnJvbUV2ZW50KGV2ZW50KXtcbiAgICAgICAgdGhpcy5yZXN1bHQgICAgICAgICAgID0gZXZlbnQuZ2V0Qnl0ZShcInJzXCIpO1xuICAgICAgICB0aGlzLndpbkNoaXAgICAgICAgICAgPSBldmVudC5nZXREb3VibGUoXCJ3Y1wiKTtcbiAgICAgICAgdGhpcy53aW5wb3QgICAgICAgICAgID0gZXZlbnQuZ2V0Qnl0ZUFycmF5KFwid3BcIik7XG4gICAgICAgIHRoaXMuY2hpcFVzZXJPbkJvYXJkICA9IGV2ZW50LmdldERvdWJsZUFycmF5KFwibGNcIik7XG4gICAgICAgIHRoaXMudXNlcnNPbmJvYXJkICAgICA9IGV2ZW50LmdldFV0ZlN0cmluZ0FycmF5KFwibHVcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuUm91bGV0dGVFdmVudC5IaXN0b3J5UmVzcG9uc2UgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihDYXNpbm9FdmVudC5SRVNQT05TRV9OQU1FLkhJU1RPUllfUkVTVUxUKTtcbiAgICB9LFxuICAgIGZyb21FdmVudChldmVudCl7XG4gICAgICAgIHRoaXMucmVzdWx0ID0gZXZlbnQuZ2V0Qnl0ZUFycmF5KFwibHJcIik7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuUm91bGV0dGVFdmVudC5IaXN0b3J5RXZlbnQgPSBDYXNpbm9FdmVudC5fQmFzZUV2ZW50LmV4dGVuZCh7XG4gICAgY3RvcigpIHtcbiAgICAgICAgdGhpcy5fc3VwZXIoQ2FzaW5vRXZlbnQuUkVTUE9OU0VfTkFNRS5ISVNUT1JZX1JFUyk7XG4gICAgICAgIHRoaXMuaXRlbXMgPSBbXTtcbiAgICB9LFxuICAgIGZyb21FdmVudChldmVudCl7XG4gICAgICAgIGxldCBkYXRhID0gZXZlbnQuZ2V0U0FycmF5KFwiZFwiKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGRhdGEuc2l6ZSgpOyBpKyspe1xuICAgICAgICAgICAgbGV0IHNJdGVtID0gZGF0YS5nZXQoaSkuZ2V0T2JqZWN0KCk7XG4gICAgICAgICAgICBsZXQgc2Vzc2lvbiA9IHNJdGVtLmdldERvdWJsZShcImlkXCIpLnRvRml4ZWQoMCk7XG4gICAgICAgICAgICBsZXQgdGltZSA9IHNJdGVtLmdldFV0ZlN0cmluZyhcInRcIik7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gc0l0ZW0uZ2V0SW50KFwicnNcIik7XG4gICAgICAgICAgICBsZXQgYmV0VmFsdWVzID0gc0l0ZW0uZ2V0VXRmU3RyaW5nKFwiYmlcIik7XG4gICAgICAgICAgICBsZXQgaXRlbUJldCA9IGJldFZhbHVlcy5zcGxpdChcIixcIik7XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgaXRlbUJldC5sZW5ndGg7aisrKXtcbiAgICAgICAgICAgICAgICBpZihpdGVtQmV0W2pdLmxlbmd0aCA+IDApe1xuICAgICAgICAgICAgICAgICAgICBsZXQgYmV0T2JqID0gaXRlbUJldFtqXS5zcGxpdChcInxcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0ge307XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2Vzc2lvbiA9IHNlc3Npb247XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udGltZSA9IHRpbWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGVQb3QgPSBiZXRPYmpbMF07XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYmV0UG90ID0gYmV0T2JqWzFdO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnByaXplUG90ICA9IGJldE9ialsyXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuUm91bGV0dGVFdmVudC5MZWFkZXJCb2FyZEV2ZW50ID0gQ2FzaW5vRXZlbnQuX0Jhc2VFdmVudC5leHRlbmQoe1xuICAgIGN0b3IoKSB7XG4gICAgICAgIHRoaXMuX3N1cGVyKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuTEVBREVSQk9BUkRfUkVTKTtcbiAgICAgICAgdGhpcy5pdGVtcyA9IFtdO1xuICAgIH0sXG4gICAgZnJvbUV2ZW50KGV2ZW50KXtcbiAgICAgICAgbGV0IGRhdGEgPSBldmVudC5nZXRTQXJyYXkoXCJkXCIpO1xuICAgICAgICBmb3IobGV0IGkgPSAwO2kgPCBkYXRhLnNpemUoKTtpKyspe1xuICAgICAgICAgICAgbGV0IHNJdGVtID0gZGF0YS5nZXQoaSkuZ2V0T2JqZWN0KCk7XG4gICAgICAgICAgICBsZXQgaXRlbSA9IHt9O1xuICAgICAgICAgICAgaXRlbS5zZXNzaW9uID0gaTtcbiAgICAgICAgICAgIGl0ZW0uYWNjb3VudCA9IHNJdGVtLmdldFV0ZlN0cmluZyhcImRuXCIpO1xuICAgICAgICAgICAgaXRlbS53aW4gPSBzSXRlbS5nZXREb3VibGUoXCJtXCIpO1xuICAgICAgICAgICAgaXRlbS50aW1lID0gc0l0ZW0uZ2V0VXRmU3RyaW5nKFwidFwiKTtcbiAgICAgICAgICAgIHRoaXMuaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbndpbmRvdy5Sb3VsZXR0ZUV2ZW50ID0gbW9kdWxlLmV4cG9ydHMgPSBSb3VsZXR0ZUV2ZW50O1xuIl19
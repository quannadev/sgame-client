
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/enum/CasinoEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f26a6v22n9Mzo/7W6j2DN/G', 'CasinoEnum');
// scripts/enum/CasinoEnum.js

"use strict";

var DeskState = {
  PLAYING: "PLAYING",
  STOP_PLAYING: "STOP_PLAYING",
  WAITING: "WAITING",
  READY: "READY",
  EMPTY: "EMPTYP",
  SIT_ON: "SIT_ON"
};
var PokerActionType = {
  BET: "BET",
  CALL: "CALL",
  RAISE: "RAISE",
  CHECK: "CHECK",
  FOLD: "FOLD",
  ALL_IN: "GOING_ALL_IN"
};
var PokerGameTurn = {
  BETTING: "BETTING",
  FLOP: "FLOP",
  TURN: "TURN",
  RIVER: "RIVER",
  END: "END"
};
var RoomVariableDetail = {
  DISPLAY_NAME: "display_name",
  USER_CREATE: "user_create",
  BET_CHIP: "bet_chip",
  PASSWORD: "password",
  MIN_CHIP: "min_chip",
  MAX_CHIP: "max_chip",
  NO_LIMIT: "no_limit",
  STATUS: "status",
  NUMB_OF_DESK: "numb_of_desk"
};
module.exports = {
  DeskState: DeskState,
  PokerActionType: PokerActionType,
  PokerGameTurn: PokerGameTurn,
  RoomVariableDetail: RoomVariableDetail
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcZW51bVxcQ2FzaW5vRW51bS5qcyJdLCJuYW1lcyI6WyJEZXNrU3RhdGUiLCJQTEFZSU5HIiwiU1RPUF9QTEFZSU5HIiwiV0FJVElORyIsIlJFQURZIiwiRU1QVFkiLCJTSVRfT04iLCJQb2tlckFjdGlvblR5cGUiLCJCRVQiLCJDQUxMIiwiUkFJU0UiLCJDSEVDSyIsIkZPTEQiLCJBTExfSU4iLCJQb2tlckdhbWVUdXJuIiwiQkVUVElORyIsIkZMT1AiLCJUVVJOIiwiUklWRVIiLCJFTkQiLCJSb29tVmFyaWFibGVEZXRhaWwiLCJESVNQTEFZX05BTUUiLCJVU0VSX0NSRUFURSIsIkJFVF9DSElQIiwiUEFTU1dPUkQiLCJNSU5fQ0hJUCIsIk1BWF9DSElQIiwiTk9fTElNSVQiLCJTVEFUVVMiLCJOVU1CX09GX0RFU0siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBRztBQUNaQyxFQUFBQSxPQUFPLEVBQUUsU0FERztBQUVaQyxFQUFBQSxZQUFZLEVBQUUsY0FGRjtBQUdaQyxFQUFBQSxPQUFPLEVBQUUsU0FIRztBQUlaQyxFQUFBQSxLQUFLLEVBQUUsT0FKSztBQUtaQyxFQUFBQSxLQUFLLEVBQUUsUUFMSztBQU1aQyxFQUFBQSxNQUFNLEVBQUU7QUFOSSxDQUFoQjtBQVFBLElBQUlDLGVBQWUsR0FBRztBQUNsQkMsRUFBQUEsR0FBRyxFQUFFLEtBRGE7QUFFbEJDLEVBQUFBLElBQUksRUFBRSxNQUZZO0FBR2xCQyxFQUFBQSxLQUFLLEVBQUUsT0FIVztBQUlsQkMsRUFBQUEsS0FBSyxFQUFFLE9BSlc7QUFLbEJDLEVBQUFBLElBQUksRUFBRSxNQUxZO0FBTWxCQyxFQUFBQSxNQUFNLEVBQUU7QUFOVSxDQUF0QjtBQVFBLElBQUlDLGFBQWEsR0FBRztBQUNoQkMsRUFBQUEsT0FBTyxFQUFFLFNBRE87QUFFaEJDLEVBQUFBLElBQUksRUFBRSxNQUZVO0FBR2hCQyxFQUFBQSxJQUFJLEVBQUUsTUFIVTtBQUloQkMsRUFBQUEsS0FBSyxFQUFFLE9BSlM7QUFLaEJDLEVBQUFBLEdBQUcsRUFBRTtBQUxXLENBQXBCO0FBT0EsSUFBSUMsa0JBQWtCLEdBQUc7QUFDckJDLEVBQUFBLFlBQVksRUFBRSxjQURPO0FBRXJCQyxFQUFBQSxXQUFXLEVBQUUsYUFGUTtBQUdyQkMsRUFBQUEsUUFBUSxFQUFFLFVBSFc7QUFJckJDLEVBQUFBLFFBQVEsRUFBRSxVQUpXO0FBS3JCQyxFQUFBQSxRQUFRLEVBQUUsVUFMVztBQU1yQkMsRUFBQUEsUUFBUSxFQUFFLFVBTlc7QUFPckJDLEVBQUFBLFFBQVEsRUFBRSxVQVBXO0FBUXJCQyxFQUFBQSxNQUFNLEVBQUUsUUFSYTtBQVNyQkMsRUFBQUEsWUFBWSxFQUFFO0FBVE8sQ0FBekI7QUFXQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2IvQixFQUFBQSxTQUFTLEVBQUdBLFNBREM7QUFFYk8sRUFBQUEsZUFBZSxFQUFFQSxlQUZKO0FBR2JPLEVBQUFBLGFBQWEsRUFBRUEsYUFIRjtBQUliTSxFQUFBQSxrQkFBa0IsRUFBRUE7QUFKUCxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IERlc2tTdGF0ZSA9IHtcclxuICAgIFBMQVlJTkc6IFwiUExBWUlOR1wiLFxyXG4gICAgU1RPUF9QTEFZSU5HOiBcIlNUT1BfUExBWUlOR1wiLFxyXG4gICAgV0FJVElORzogXCJXQUlUSU5HXCIsXHJcbiAgICBSRUFEWTogXCJSRUFEWVwiLFxyXG4gICAgRU1QVFk6IFwiRU1QVFlQXCIsXHJcbiAgICBTSVRfT046IFwiU0lUX09OXCJcclxufTtcclxubGV0IFBva2VyQWN0aW9uVHlwZSA9IHtcclxuICAgIEJFVDogXCJCRVRcIixcclxuICAgIENBTEw6IFwiQ0FMTFwiLFxyXG4gICAgUkFJU0U6IFwiUkFJU0VcIixcclxuICAgIENIRUNLOiBcIkNIRUNLXCIsXHJcbiAgICBGT0xEOiBcIkZPTERcIixcclxuICAgIEFMTF9JTjogXCJHT0lOR19BTExfSU5cIlxyXG59XHJcbmxldCBQb2tlckdhbWVUdXJuID0ge1xyXG4gICAgQkVUVElORzogXCJCRVRUSU5HXCIsXHJcbiAgICBGTE9QOiBcIkZMT1BcIixcclxuICAgIFRVUk46IFwiVFVSTlwiLFxyXG4gICAgUklWRVI6IFwiUklWRVJcIixcclxuICAgIEVORDogXCJFTkRcIlxyXG59XHJcbmxldCBSb29tVmFyaWFibGVEZXRhaWwgPSB7XHJcbiAgICBESVNQTEFZX05BTUU6IFwiZGlzcGxheV9uYW1lXCIsXHJcbiAgICBVU0VSX0NSRUFURTogXCJ1c2VyX2NyZWF0ZVwiLFxyXG4gICAgQkVUX0NISVA6IFwiYmV0X2NoaXBcIixcclxuICAgIFBBU1NXT1JEOiBcInBhc3N3b3JkXCIsXHJcbiAgICBNSU5fQ0hJUDogXCJtaW5fY2hpcFwiLFxyXG4gICAgTUFYX0NISVA6IFwibWF4X2NoaXBcIixcclxuICAgIE5PX0xJTUlUOiBcIm5vX2xpbWl0XCIsXHJcbiAgICBTVEFUVVM6IFwic3RhdHVzXCIsXHJcbiAgICBOVU1CX09GX0RFU0s6IFwibnVtYl9vZl9kZXNrXCJcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIERlc2tTdGF0ZSA6IERlc2tTdGF0ZSxcclxuICAgIFBva2VyQWN0aW9uVHlwZTogUG9rZXJBY3Rpb25UeXBlLFxyXG4gICAgUG9rZXJHYW1lVHVybjogUG9rZXJHYW1lVHVybixcclxuICAgIFJvb21WYXJpYWJsZURldGFpbDogUm9vbVZhcmlhYmxlRGV0YWlsXHJcbn0iXX0=
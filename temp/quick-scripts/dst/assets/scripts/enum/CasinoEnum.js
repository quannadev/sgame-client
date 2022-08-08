
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2VudW0vQ2FzaW5vRW51bS5qcyJdLCJuYW1lcyI6WyJEZXNrU3RhdGUiLCJQTEFZSU5HIiwiU1RPUF9QTEFZSU5HIiwiV0FJVElORyIsIlJFQURZIiwiRU1QVFkiLCJTSVRfT04iLCJQb2tlckFjdGlvblR5cGUiLCJCRVQiLCJDQUxMIiwiUkFJU0UiLCJDSEVDSyIsIkZPTEQiLCJBTExfSU4iLCJQb2tlckdhbWVUdXJuIiwiQkVUVElORyIsIkZMT1AiLCJUVVJOIiwiUklWRVIiLCJFTkQiLCJSb29tVmFyaWFibGVEZXRhaWwiLCJESVNQTEFZX05BTUUiLCJVU0VSX0NSRUFURSIsIkJFVF9DSElQIiwiUEFTU1dPUkQiLCJNSU5fQ0hJUCIsIk1BWF9DSElQIiwiTk9fTElNSVQiLCJTVEFUVVMiLCJOVU1CX09GX0RFU0siLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsR0FBRztBQUNaQyxFQUFBQSxPQUFPLEVBQUUsU0FERztBQUVaQyxFQUFBQSxZQUFZLEVBQUUsY0FGRjtBQUdaQyxFQUFBQSxPQUFPLEVBQUUsU0FIRztBQUlaQyxFQUFBQSxLQUFLLEVBQUUsT0FKSztBQUtaQyxFQUFBQSxLQUFLLEVBQUUsUUFMSztBQU1aQyxFQUFBQSxNQUFNLEVBQUU7QUFOSSxDQUFoQjtBQVFBLElBQUlDLGVBQWUsR0FBRztBQUNsQkMsRUFBQUEsR0FBRyxFQUFFLEtBRGE7QUFFbEJDLEVBQUFBLElBQUksRUFBRSxNQUZZO0FBR2xCQyxFQUFBQSxLQUFLLEVBQUUsT0FIVztBQUlsQkMsRUFBQUEsS0FBSyxFQUFFLE9BSlc7QUFLbEJDLEVBQUFBLElBQUksRUFBRSxNQUxZO0FBTWxCQyxFQUFBQSxNQUFNLEVBQUU7QUFOVSxDQUF0QjtBQVFBLElBQUlDLGFBQWEsR0FBRztBQUNoQkMsRUFBQUEsT0FBTyxFQUFFLFNBRE87QUFFaEJDLEVBQUFBLElBQUksRUFBRSxNQUZVO0FBR2hCQyxFQUFBQSxJQUFJLEVBQUUsTUFIVTtBQUloQkMsRUFBQUEsS0FBSyxFQUFFLE9BSlM7QUFLaEJDLEVBQUFBLEdBQUcsRUFBRTtBQUxXLENBQXBCO0FBT0EsSUFBSUMsa0JBQWtCLEdBQUc7QUFDckJDLEVBQUFBLFlBQVksRUFBRSxjQURPO0FBRXJCQyxFQUFBQSxXQUFXLEVBQUUsYUFGUTtBQUdyQkMsRUFBQUEsUUFBUSxFQUFFLFVBSFc7QUFJckJDLEVBQUFBLFFBQVEsRUFBRSxVQUpXO0FBS3JCQyxFQUFBQSxRQUFRLEVBQUUsVUFMVztBQU1yQkMsRUFBQUEsUUFBUSxFQUFFLFVBTlc7QUFPckJDLEVBQUFBLFFBQVEsRUFBRSxVQVBXO0FBUXJCQyxFQUFBQSxNQUFNLEVBQUUsUUFSYTtBQVNyQkMsRUFBQUEsWUFBWSxFQUFFO0FBVE8sQ0FBekI7QUFXQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2IvQixFQUFBQSxTQUFTLEVBQUdBLFNBREM7QUFFYk8sRUFBQUEsZUFBZSxFQUFFQSxlQUZKO0FBR2JPLEVBQUFBLGFBQWEsRUFBRUEsYUFIRjtBQUliTSxFQUFBQSxrQkFBa0IsRUFBRUE7QUFKUCxDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IERlc2tTdGF0ZSA9IHtcbiAgICBQTEFZSU5HOiBcIlBMQVlJTkdcIixcbiAgICBTVE9QX1BMQVlJTkc6IFwiU1RPUF9QTEFZSU5HXCIsXG4gICAgV0FJVElORzogXCJXQUlUSU5HXCIsXG4gICAgUkVBRFk6IFwiUkVBRFlcIixcbiAgICBFTVBUWTogXCJFTVBUWVBcIixcbiAgICBTSVRfT046IFwiU0lUX09OXCJcbn07XG5sZXQgUG9rZXJBY3Rpb25UeXBlID0ge1xuICAgIEJFVDogXCJCRVRcIixcbiAgICBDQUxMOiBcIkNBTExcIixcbiAgICBSQUlTRTogXCJSQUlTRVwiLFxuICAgIENIRUNLOiBcIkNIRUNLXCIsXG4gICAgRk9MRDogXCJGT0xEXCIsXG4gICAgQUxMX0lOOiBcIkdPSU5HX0FMTF9JTlwiXG59XG5sZXQgUG9rZXJHYW1lVHVybiA9IHtcbiAgICBCRVRUSU5HOiBcIkJFVFRJTkdcIixcbiAgICBGTE9QOiBcIkZMT1BcIixcbiAgICBUVVJOOiBcIlRVUk5cIixcbiAgICBSSVZFUjogXCJSSVZFUlwiLFxuICAgIEVORDogXCJFTkRcIlxufVxubGV0IFJvb21WYXJpYWJsZURldGFpbCA9IHtcbiAgICBESVNQTEFZX05BTUU6IFwiZGlzcGxheV9uYW1lXCIsXG4gICAgVVNFUl9DUkVBVEU6IFwidXNlcl9jcmVhdGVcIixcbiAgICBCRVRfQ0hJUDogXCJiZXRfY2hpcFwiLFxuICAgIFBBU1NXT1JEOiBcInBhc3N3b3JkXCIsXG4gICAgTUlOX0NISVA6IFwibWluX2NoaXBcIixcbiAgICBNQVhfQ0hJUDogXCJtYXhfY2hpcFwiLFxuICAgIE5PX0xJTUlUOiBcIm5vX2xpbWl0XCIsXG4gICAgU1RBVFVTOiBcInN0YXR1c1wiLFxuICAgIE5VTUJfT0ZfREVTSzogXCJudW1iX29mX2Rlc2tcIlxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgRGVza1N0YXRlIDogRGVza1N0YXRlLFxuICAgIFBva2VyQWN0aW9uVHlwZTogUG9rZXJBY3Rpb25UeXBlLFxuICAgIFBva2VyR2FtZVR1cm46IFBva2VyR2FtZVR1cm4sXG4gICAgUm9vbVZhcmlhYmxlRGV0YWlsOiBSb29tVmFyaWFibGVEZXRhaWxcbn0iXX0=
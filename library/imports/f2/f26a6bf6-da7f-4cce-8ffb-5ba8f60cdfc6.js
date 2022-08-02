"use strict";
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
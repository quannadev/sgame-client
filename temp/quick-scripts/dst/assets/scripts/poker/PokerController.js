
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/poker/PokerController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b3b55n9AFBKJe6Zd+TQepU', 'PokerController');
// scripts/poker/PokerController.js

"use strict";

var PokerEvent = require('PokerEvent');

var PokerController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  QuickJoinRoomConfig: {},
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.GROUP_GAME_RES, this.onGroupRoomEvent, this);
    this.ZoneInstance.addEventListenerExtension(CasinoEvent.RESPONSE_NAME.QUICK_JOIN_GAME_RES, this.onQuickJoinRoom, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.LOAD_TABLE_INFO_RES, this.onLoadTableEvent, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_SIT_ON_RES, this.onUserSitOn, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.PRE_START, this.onPreStart, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.START, this.onStartEvent, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_TURN_RES, this.onUserTurn, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_SIT_OUT_RES, this.onUserSitOut, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.STAND_UP_RES, this.onUserStandUp, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_FOLD_RES, this.onUserFold, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_CALL_RES, this.onUserCall, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_CHECK_RES, this.onUserCheck, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_RAISE_RES, this.onUserRaise, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_GOING_ALL_RES, this.onUserAllIn, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.GAME_TURN_RES, this.onGameTurn, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.SHOW_DOWN_RES, this.onShowDown, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.FINISH_GAME_RES, this.onFinishGame, this);
    this.ZoneInstance.addEventListenerExtension(PokerEvent.RESPONSE_NAME.KICK_USER_RES, this.onKickUser, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.GROUP_GAME_RES, this.onGroupRoomEvent, this);
    this.ZoneInstance.removeEventListenerExtension(CasinoEvent.RESPONSE_NAME.QUICK_JOIN_GAME_RES, this.onQuickJoinRoom, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.LOAD_TABLE_INFO_RES, this.onLoadTableEvent, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_SIT_ON_RES, this.onUserSitOn, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.PRE_START, this.onPreStart, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.START, this.onStartEvent, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_TURN_RES, this.onUserTurn, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_SIT_OUT_RES, this.onUserSitOut, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.STAND_UP_RES, this.onUserStandUp, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_FOLD_RES, this.onUserFold, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_CALL_RES, this.onUserCall, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_CHECK_RES, this.onUserCheck, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_RAISE_RES, this.onUserRaise, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.USER_GOING_ALL_RES, this.onUserAllIn, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.GAME_TURN_RES, this.onGameTurn, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.SHOW_DOWN_RES, this.onShowDown, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.FINISH_GAME_RES, this.onFinishGame, this);
    this.ZoneInstance.removeEventListenerExtension(PokerEvent.RESPONSE_NAME.KICK_USER_RES, this.onKickUser, this);
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    var groupRequest = new CasinoRequest.GroupGameRequest();
    groupRequest.setGame(this.zoneName);
    this.ZoneInstance.send(groupRequest.toSRequest());
  },
  getUILobby: function getUILobby() {
    var scene = cc.director.getScene();
    var uiLobby = cc.find("UILobby", scene);
    return uiLobby.getComponent(uiLobby.name);
  },
  onLeaderBoardEvent: function onLeaderBoardEvent(event) {
    var arr = [];
    var data = event.getSArray("d");

    for (var i = 0; i < data.size(); i++) {
      var sItem = data.get(i).getObject();
      var item = {};
      item.session = i + 1;
      item.account = sItem.getUtfString("dn");
      item.win = sItem.getDouble("m");
      arr.push(item);
    }

    if (this.getUILobby()) {
      this.getUILobby().updateRank(arr);
    }
  },
  onGroupRoomEvent: function onGroupRoomEvent(event) {
    var groupRoom = new CasinoEvent.GroupGameEvent().fromEvent(event);
    if (mm.game == undefined) mm.game = {};
    mm.game[this.zoneName] = {};
    mm.game[this.zoneName].groups = groupRoom.groups;
    mm.game[this.zoneName].displayname = GameVariables.getDisplayName(this.ZoneInstance.mySelf);
    mm.game[this.zoneName].chip = GameVariables.getChip(this.ZoneInstance.mySelf);
    UIManger.show("UILobby", {
      pop: true,
      data: {
        game: this.zoneName,
        ZoneInstance: this.ZoneInstance
      }
    }, function () {
      var request = new CasinoRequest.LeaderBoardRequest();
      this.ZoneInstance.send(request.toSRequest());
    }.bind(this));
  },
  onQuickJoinRoom: function onQuickJoinRoom(event) {
    var quickJoin = new CasinoEvent.QuickJoinGameEvent().fromEvent(event);

    if (quickJoin.roomId >= 0) {
      this.ZoneInstance.send(new CasinoRequest.JoinRoomRequest(quickJoin.roomId, "1", true).toSRequest());
    } else {
      mm.Toast.showToast(1, "Phòng đã đầy vui vòng chọn phòng khác");
    }
  },
  onLoadTableEvent: function onLoadTableEvent(event) {
    var _data = {
      pop: true,
      data: {
        room: this.room,
        buy_in: this.QuickJoinRoomConfig.buy_in,
        number_desk: this.QuickJoinRoomConfig.number_desk
      }
    };
    this.preLoadUI(_data, function () {
      mm.Loading.hide();
      this.getUI().controller = this;
      this.QuickJoinRoomConfig.betChip = GameVariables.Poker.getBetChip(this.room);
      this.QuickJoinRoomConfig.roomId = this.room.id;
      this.getUI().setInfoTable("Poker / #" + this.room.id, Utils.formatCurrency(this.QuickJoinRoomConfig.betChip));
      this.m_tableInfo = new PokerEvent.LoadTableInfoEvent().fromEvent(event);
      this.m_tableInfo.room = this.room;

      if (!this.m_tableInfo.m_isGameStart || this.m_tableInfo.m_listActiveUserName.indexOf(this.ZoneInstance.mySelf.name) < 0) {
        this.getUI().requestSitOn();
      }

      this.getUI()._updateNodePlayers(this.m_tableInfo.m_listDesk);

      if (this.m_tableInfo.m_isPrestart && !this.m_tableInfo.m_isGameStart) {
        this.getUI().setWaitingTimer(true, 5, this.m_tableInfo.m_isPrestart / 100);
      }

      if (this.m_tableInfo.m_isGameStart) {
        this.getUI().turnOffAllTimerPlayers(); // update community card

        this.getUI().getCommunityCard().showCommunityCard(mm.m_tableInfo.m_listCommunityCard); // update state for each user

        for (var i = 0; i < this.m_tableInfo.m_listActiveUserName.length; i++) {
          var player = this.getUI()._getJSPlayerByName(this.m_tableInfo.m_listActiveUserName[i]);

          if (player) {
            player.addCardHand(this.m_tableInfo.m_listHandCard[i]);
            player.showBetChip(this.m_tableInfo.m_listBetChip[i]);
          }
        }

        this.getUI().setMoneyPot(this.m_tableInfo.m_potChip);
      }

      this.getUI().hideDeskEmpty();
    }.bind(this));
  },
  onUserSitOn: function onUserSitOn(event) {
    var userSitOnEvent = new PokerEvent.UserSitOnEvent().fromEvent(event); // add to list desk

    var desk = {};
    desk.DeskId = userSitOnEvent.m_deskId;
    desk.UserName = userSitOnEvent.m_userName;
    desk.DeskState = userSitOnEvent.m_deskState;
    desk.UserChip = userSitOnEvent.m_buyIn;
    this.m_tableInfo.m_listDesk.push(desk); // add to list user

    this.m_tableInfo.m_listUser.push(userSitOnEvent.m_userName);

    this.getUI()._updateNodePlayers(this.m_tableInfo.m_listDesk);
  },
  onPreStart: function onPreStart(event) {
    var preStart = new PokerEvent.PreStartEvent().fromEvent(event);
    this.m_tableInfo.m_isPrestart = preStart.m_isPrestart;
    this.m_tableInfo.m_prestartTime = preStart.m_prestartTime;
    this.m_tableInfo.m_isGameStart = false; // reset card comminity

    this.getUI().getCommunityCard().reset();
    this.getUI().setMoneyPot(-1);
    this.m_tableInfo.m_total_bet = 0; // reset poker text win

    this.getUI().hidePokerTextWinner(); // hide all hold em of players

    for (var i = 0; i < this.m_tableInfo.m_listDesk.length; i++) {
      var desk = this.m_tableInfo.m_listDesk[i];

      var player = this.getUI()._getJSPlayerById(desk.DeskId);

      player.onPreStartEvent(preStart);
    }

    if (preStart.m_isPrestart) {
      this.getUI().setWaitingTimer(true, preStart.m_prestartTime / 1000, preStart.m_prestartTime / 1000);
    }

    this.getUI().showDeskEmpty();

    if (this.m_tableInfo.m_listUserSitOut.indexOf(this.ZoneInstance.mySelf.name) >= 0) {
      this.getUI().requestLeaveRoom();
    } // check count out


    if (this.getUI().countOut >= 1) {
      this.getUI().requestLeaveRoom();
    }
  },
  onStartEvent: function onStartEvent(event) {
    this.getUI().countOut++;
    this.getUI().setWaitingTimer(false);
    var start = new PokerEvent.StartEvent().fromEvent(event);
    this.m_tableInfo.m_dealer = start.m_dealer;
    this.m_tableInfo.m_smallBlind = start.m_smallBlind;
    this.m_tableInfo.m_bigBlind = start.m_bigBlind;
    this.m_tableInfo.m_betChipGame = start.m_betChipGame;
    this.m_tableInfo.m_currentUser = start.m_currentUser;
    this.m_tableInfo.m_userTime = start.m_userTime;
    this.m_tableInfo.m_isGameStart = true;

    if (this.m_tableInfo.m_listActiveUserName) {
      var userOut = [];

      for (var i = 0; i < this.m_tableInfo.m_listActiveUserName.length; i++) {
        if (start.m_listActiveUserName.indexOf(this.m_tableInfo.m_listActiveUserName[i]) < 0) {
          userOut.push(this.m_tableInfo.m_listActiveUserName[i]);
        }
      }

      this.getUI().removePlayer(userOut);
    }

    this.m_tableInfo.m_listActiveUserName = start.m_listActiveUserName;

    this.getUI()._updateNodePlayers(this.m_tableInfo.m_listDesk); // set Actions Controller For mySelf


    if (this.getUI()._isPlayer(this.ZoneInstance.mySelf.name)) {
      var deskId = this.getUI()._getPlayerId(this.ZoneInstance.mySelf.name);

      var player = this.getUI()._getJSPlayerById(deskId);

      player.setActionController(this.getUI().getAction());
    }

    for (var _i = 0; _i < this.m_tableInfo.m_listDesk.length; _i++) {
      var desk = this.m_tableInfo.m_listDesk[_i];

      var jsPlayer = this.getUI()._getJSPlayerById(desk.DeskId);

      jsPlayer.onStartEvent(start);
    }

    this.getUI().hideDeskEmpty();
  },
  onUserTurn: function onUserTurn(event) {
    this.getUI().turnOffAllTimerPlayers(); // next user turn

    var userTurnRes = new PokerEvent.UserTurnEvent().fromEvent(event);
    this.m_tableInfo.m_currentUser = userTurnRes.m_username;
    this.m_tableInfo.m_userTime = userTurnRes.m_time;

    var deskId = this.getUI()._getPlayerId(userTurnRes.m_username);

    var player = this.getUI()._getJSPlayerById(deskId);

    if (player) player.onTurnEvent(userTurnRes);
  },
  onGameTurn: function onGameTurn(event) {
    this.getUI().turnOffAllTimerPlayers();
    var gameTurnRes = new PokerEvent.GameTurnEvent().fromEvent(event);
    var userFirstBetting = gameTurnRes.m_currentUser;
    var communityCard = this.getUI().getCommunityCard();
    var currentGameTurn = gameTurnRes.m_currentGameTurn;
    var process = false;
    this.getUI().processBetChipToPot(function () {
      if (!process) {
        process = true;

        if (currentGameTurn == "BETTING") {} else if (currentGameTurn == "FLOP") {
          communityCard.dealFlop(gameTurnRes.m_listCommunityCard);
        } else if (currentGameTurn == "TURN") {
          communityCard.dealTurn(gameTurnRes.m_listCommunityCard);
        } else if (currentGameTurn == "RIVER") {
          communityCard.dealRiver(gameTurnRes.m_listCommunityCard);
        } else if (currentGameTurn == "END") {} else {
          console.log("UNKOWN TURN " + currentGameTurn);
        }
      }
    });

    var playerBet = this.getUI()._getJSPlayerByName(userFirstBetting);

    if (playerBet) playerBet.showBetting();
  },
  onUserFold: function onUserFold(event) {
    var userFoldRes = new PokerEvent.UserFoldEvent().fromEvent(event);

    var player = this.getUI()._getJSPlayerByName(userFoldRes.m_username);

    if (player) player.onFoldEvent(userFoldRes);

    if (userFoldRes.m_username == this.ZoneInstance.mySelf.name) {
      this.getUI().countOut = 0;
    }
  },
  onUserCall: function onUserCall(event) {
    var userCallRes = new PokerEvent.UserCallEvent().fromEvent(event);

    var player = this.getUI()._getJSPlayerByName(userCallRes.m_username);

    if (player) player.onCallEvent(userCallRes);

    if (userCallRes.m_username == this.ZoneInstance.mySelf.name) {
      this.getUI().countOut = 0;
    }
  },
  onUserCheck: function onUserCheck(event) {
    var userCheckRes = new PokerEvent.UserCheckEvent().fromEvent(event);

    var player = this.getUI()._getJSPlayerByName(userCheckRes.m_username);

    if (player) player.onCheckEvent(userCheckRes);

    if (userCheckRes.m_username == this.ZoneInstance.mySelf.name) {
      this.getUI().countOut = 0;
    }
  },
  onUserRaise: function onUserRaise(event) {
    var userRaiseRes = new PokerEvent.UserRaiseEvent().fromEvent(event);

    var player = this.getUI()._getJSPlayerByName(userRaiseRes.m_username);

    if (player) player.onRaiseEvent(userRaiseRes);

    if (userRaiseRes.m_username == this.ZoneInstance.mySelf.name) {
      this.getUI().countOut = 0;
    }
  },
  onUserAllIn: function onUserAllIn(event) {
    var userAllInRes = new PokerEvent.UserAllInEvent().fromEvent(event);

    var player = this.getUI()._getJSPlayerByName(userAllInRes.m_username);

    if (player) player.onAllInEvent(userAllInRes);

    if (userAllInRes.m_username == this.ZoneInstance.mySelf.name) {
      this.getUI().countOut = 0;
    }
  },
  onShowDown: function onShowDown(event) {
    this.getUI().processBetChipToPot();
    var showDownRes = new PokerEvent.ShowDownEvent().fromEvent(event);
    var communityCard = this.getUI().getCommunityCard();
    communityCard.showDown(showDownRes.m_listComCard); // stop all timer of player

    for (var i = 0; i < showDownRes.m_listUser.length; i++) {
      var name = showDownRes.m_listUser[i];

      var player = this.getUI()._getJSPlayerByName(name);

      if (player) player.onShowDownEvent(showDownRes.m_listCard[i]);
    }
  },
  onFinishGame: function onFinishGame(event) {
    this.getUI().turnOffAllTimerPlayers();
    var finishGameRes = new PokerEvent.FinishGameEvent().fromEvent(event);
    var communityCard = this.getUI().getCommunityCard();
    communityCard.showCommunityCardWin(finishGameRes.m_listPokerHandCard);

    for (var i = 0; i < finishGameRes.m_listUser.length; i++) {
      var name = finishGameRes.m_listUser[i];

      var player = this.getUI()._getJSPlayerByName(name);

      if (player) {
        if (finishGameRes.m_listWinner.indexOf(name) >= 0) {
          var typeBestWin = finishGameRes.m_listPokerHand[i];
          this.getUI().showPokerTextWinner(typeBestWin);
          this.getUI().runActionPotChipToWinner(finishGameRes.m_listChip[i], name, function (chip, target) {
            target.onWinnerEvent();
          }, player);
        }

        player.onGameFinishEvent(finishGameRes.m_listPokerHandCard, finishGameRes.m_listPokerHand[i], finishGameRes.m_listChip[i]);
      }
    }

    this.m_tableInfo.m_potChip = 0;
    this.m_tableInfo.m_isGameStart = false;
    this.getUI().setMoneyPot(this.m_tableInfo.m_potChip);
  },
  onUserSitOut: function onUserSitOut(event) {
    mm.Loading.hide();
    var sitOutRes = new PokerEvent.UserSitOutEvent().fromEvent(event);
    var indexUser = this.m_tableInfo.m_listUserSitOut.indexOf(sitOutRes.m_username);

    if (indexUser < 0) {
      this.m_tableInfo.m_listUserSitOut.push(sitOutRes.m_username);
    } else if (!sitOutRes.m_isSitOut) {
      this.m_tableInfo.m_listUserSitOut.splice(indexUser, 1);
    }

    var player = this.getUI()._getJSPlayerByName(sitOutRes.m_username);

    if (player) player.setSitOut(sitOutRes.m_isSitOut);

    if (this.ZoneInstance.mySelf.name == sitOutRes.m_username) {
      if (sitOutRes.m_isSitOut) mm.Toast.showToast(1, "Đăng ký rời bàn!");else mm.Toast.showToast(1, "Hủy rời bàn!");
    }
  },
  onKickUser: function onKickUser(event) {
    var kickRes = new PokerEvent.KickUserEvent().fromEvent(event);

    if (kickRes.m_resType == 2) {
      if (this.getUI()._getJSPlayerByName(kickRes.m_username) != null) {
        this.getUI().removePlayer([kickRes.m_username]);

        if (this.ZoneInstance.mySelf.name == kickRes.m_username) {
          this.getUI().requestLeaveRoom();
        }
      }
    }
  },
  onUserStandUp: function onUserStandUp(event) {},
  onPublicMessage: function onPublicMessage(event) {
    var sender = event.sender;
    var msg = event.message;
    var data = event.data;
    var dataSender = data != null ? {
      dn: data.get("dn"),
      fb: data.get("fb")
    } : {
      dn: "...",
      fb: ""
    };
    var msgItem = {};
    msgItem.sender = sender;
    msgItem.msg = msg;
    msgItem.dataSender = dataSender;
    this.getUI().onPublicMessage(msgItem);
  }
});
var instance = null;

var getInstance = function getInstance() {
  if (instance == null) instance = new PokerController("UIPoker", "poker");
  return instance;
};

SmartFoxSDK.PokerController = module.exports = getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3Bva2VyL1Bva2VyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJQb2tlckV2ZW50IiwicmVxdWlyZSIsIlBva2VyQ29udHJvbGxlciIsIlNtYXJ0Rm94U0RLIiwiQmFzZUNvbnRyb2xsZXIiLCJleHRlbmQiLCJtX3RhYmxlSW5mbyIsIlF1aWNrSm9pblJvb21Db25maWciLCJyZWdpc3RlckV2ZW50cyIsIl9zdXBlciIsIlpvbmVJbnN0YW5jZSIsImFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24iLCJDYXNpbm9FdmVudCIsIlJFU1BPTlNFX05BTUUiLCJHUk9VUF9HQU1FX1JFUyIsIm9uR3JvdXBSb29tRXZlbnQiLCJRVUlDS19KT0lOX0dBTUVfUkVTIiwib25RdWlja0pvaW5Sb29tIiwiTE9BRF9UQUJMRV9JTkZPX1JFUyIsIm9uTG9hZFRhYmxlRXZlbnQiLCJVU0VSX1NJVF9PTl9SRVMiLCJvblVzZXJTaXRPbiIsIlBSRV9TVEFSVCIsIm9uUHJlU3RhcnQiLCJTVEFSVCIsIm9uU3RhcnRFdmVudCIsIlVTRVJfVFVSTl9SRVMiLCJvblVzZXJUdXJuIiwiVVNFUl9TSVRfT1VUX1JFUyIsIm9uVXNlclNpdE91dCIsIlNUQU5EX1VQX1JFUyIsIm9uVXNlclN0YW5kVXAiLCJVU0VSX0ZPTERfUkVTIiwib25Vc2VyRm9sZCIsIlVTRVJfQ0FMTF9SRVMiLCJvblVzZXJDYWxsIiwiVVNFUl9DSEVDS19SRVMiLCJvblVzZXJDaGVjayIsIlVTRVJfUkFJU0VfUkVTIiwib25Vc2VyUmFpc2UiLCJVU0VSX0dPSU5HX0FMTF9SRVMiLCJvblVzZXJBbGxJbiIsIkdBTUVfVFVSTl9SRVMiLCJvbkdhbWVUdXJuIiwiU0hPV19ET1dOX1JFUyIsIm9uU2hvd0Rvd24iLCJGSU5JU0hfR0FNRV9SRVMiLCJvbkZpbmlzaEdhbWUiLCJLSUNLX1VTRVJfUkVTIiwib25LaWNrVXNlciIsInJlbW92ZUV2ZW50cyIsInJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24iLCJvbkV2ZW50TG9naW4iLCJldmVudCIsImdyb3VwUmVxdWVzdCIsIkNhc2lub1JlcXVlc3QiLCJHcm91cEdhbWVSZXF1ZXN0Iiwic2V0R2FtZSIsInpvbmVOYW1lIiwic2VuZCIsInRvU1JlcXVlc3QiLCJnZXRVSUxvYmJ5Iiwic2NlbmUiLCJjYyIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJ1aUxvYmJ5IiwiZmluZCIsImdldENvbXBvbmVudCIsIm5hbWUiLCJvbkxlYWRlckJvYXJkRXZlbnQiLCJhcnIiLCJkYXRhIiwiZ2V0U0FycmF5IiwiaSIsInNpemUiLCJzSXRlbSIsImdldCIsImdldE9iamVjdCIsIml0ZW0iLCJzZXNzaW9uIiwiYWNjb3VudCIsImdldFV0ZlN0cmluZyIsIndpbiIsImdldERvdWJsZSIsInB1c2giLCJ1cGRhdGVSYW5rIiwiZ3JvdXBSb29tIiwiR3JvdXBHYW1lRXZlbnQiLCJmcm9tRXZlbnQiLCJtbSIsImdhbWUiLCJ1bmRlZmluZWQiLCJncm91cHMiLCJkaXNwbGF5bmFtZSIsIkdhbWVWYXJpYWJsZXMiLCJnZXREaXNwbGF5TmFtZSIsIm15U2VsZiIsImNoaXAiLCJnZXRDaGlwIiwiVUlNYW5nZXIiLCJzaG93IiwicG9wIiwicmVxdWVzdCIsIkxlYWRlckJvYXJkUmVxdWVzdCIsImJpbmQiLCJxdWlja0pvaW4iLCJRdWlja0pvaW5HYW1lRXZlbnQiLCJyb29tSWQiLCJKb2luUm9vbVJlcXVlc3QiLCJUb2FzdCIsInNob3dUb2FzdCIsIl9kYXRhIiwicm9vbSIsImJ1eV9pbiIsIm51bWJlcl9kZXNrIiwicHJlTG9hZFVJIiwiTG9hZGluZyIsImhpZGUiLCJnZXRVSSIsImNvbnRyb2xsZXIiLCJiZXRDaGlwIiwiUG9rZXIiLCJnZXRCZXRDaGlwIiwiaWQiLCJzZXRJbmZvVGFibGUiLCJVdGlscyIsImZvcm1hdEN1cnJlbmN5IiwiTG9hZFRhYmxlSW5mb0V2ZW50IiwibV9pc0dhbWVTdGFydCIsIm1fbGlzdEFjdGl2ZVVzZXJOYW1lIiwiaW5kZXhPZiIsInJlcXVlc3RTaXRPbiIsIl91cGRhdGVOb2RlUGxheWVycyIsIm1fbGlzdERlc2siLCJtX2lzUHJlc3RhcnQiLCJzZXRXYWl0aW5nVGltZXIiLCJ0dXJuT2ZmQWxsVGltZXJQbGF5ZXJzIiwiZ2V0Q29tbXVuaXR5Q2FyZCIsInNob3dDb21tdW5pdHlDYXJkIiwibV9saXN0Q29tbXVuaXR5Q2FyZCIsImxlbmd0aCIsInBsYXllciIsIl9nZXRKU1BsYXllckJ5TmFtZSIsImFkZENhcmRIYW5kIiwibV9saXN0SGFuZENhcmQiLCJzaG93QmV0Q2hpcCIsIm1fbGlzdEJldENoaXAiLCJzZXRNb25leVBvdCIsIm1fcG90Q2hpcCIsImhpZGVEZXNrRW1wdHkiLCJ1c2VyU2l0T25FdmVudCIsIlVzZXJTaXRPbkV2ZW50IiwiZGVzayIsIkRlc2tJZCIsIm1fZGVza0lkIiwiVXNlck5hbWUiLCJtX3VzZXJOYW1lIiwiRGVza1N0YXRlIiwibV9kZXNrU3RhdGUiLCJVc2VyQ2hpcCIsIm1fYnV5SW4iLCJtX2xpc3RVc2VyIiwicHJlU3RhcnQiLCJQcmVTdGFydEV2ZW50IiwibV9wcmVzdGFydFRpbWUiLCJyZXNldCIsIm1fdG90YWxfYmV0IiwiaGlkZVBva2VyVGV4dFdpbm5lciIsIl9nZXRKU1BsYXllckJ5SWQiLCJvblByZVN0YXJ0RXZlbnQiLCJzaG93RGVza0VtcHR5IiwibV9saXN0VXNlclNpdE91dCIsInJlcXVlc3RMZWF2ZVJvb20iLCJjb3VudE91dCIsInN0YXJ0IiwiU3RhcnRFdmVudCIsIm1fZGVhbGVyIiwibV9zbWFsbEJsaW5kIiwibV9iaWdCbGluZCIsIm1fYmV0Q2hpcEdhbWUiLCJtX2N1cnJlbnRVc2VyIiwibV91c2VyVGltZSIsInVzZXJPdXQiLCJyZW1vdmVQbGF5ZXIiLCJfaXNQbGF5ZXIiLCJkZXNrSWQiLCJfZ2V0UGxheWVySWQiLCJzZXRBY3Rpb25Db250cm9sbGVyIiwiZ2V0QWN0aW9uIiwianNQbGF5ZXIiLCJ1c2VyVHVyblJlcyIsIlVzZXJUdXJuRXZlbnQiLCJtX3VzZXJuYW1lIiwibV90aW1lIiwib25UdXJuRXZlbnQiLCJnYW1lVHVyblJlcyIsIkdhbWVUdXJuRXZlbnQiLCJ1c2VyRmlyc3RCZXR0aW5nIiwiY29tbXVuaXR5Q2FyZCIsImN1cnJlbnRHYW1lVHVybiIsIm1fY3VycmVudEdhbWVUdXJuIiwicHJvY2VzcyIsInByb2Nlc3NCZXRDaGlwVG9Qb3QiLCJkZWFsRmxvcCIsImRlYWxUdXJuIiwiZGVhbFJpdmVyIiwiY29uc29sZSIsImxvZyIsInBsYXllckJldCIsInNob3dCZXR0aW5nIiwidXNlckZvbGRSZXMiLCJVc2VyRm9sZEV2ZW50Iiwib25Gb2xkRXZlbnQiLCJ1c2VyQ2FsbFJlcyIsIlVzZXJDYWxsRXZlbnQiLCJvbkNhbGxFdmVudCIsInVzZXJDaGVja1JlcyIsIlVzZXJDaGVja0V2ZW50Iiwib25DaGVja0V2ZW50IiwidXNlclJhaXNlUmVzIiwiVXNlclJhaXNlRXZlbnQiLCJvblJhaXNlRXZlbnQiLCJ1c2VyQWxsSW5SZXMiLCJVc2VyQWxsSW5FdmVudCIsIm9uQWxsSW5FdmVudCIsInNob3dEb3duUmVzIiwiU2hvd0Rvd25FdmVudCIsInNob3dEb3duIiwibV9saXN0Q29tQ2FyZCIsIm9uU2hvd0Rvd25FdmVudCIsIm1fbGlzdENhcmQiLCJmaW5pc2hHYW1lUmVzIiwiRmluaXNoR2FtZUV2ZW50Iiwic2hvd0NvbW11bml0eUNhcmRXaW4iLCJtX2xpc3RQb2tlckhhbmRDYXJkIiwibV9saXN0V2lubmVyIiwidHlwZUJlc3RXaW4iLCJtX2xpc3RQb2tlckhhbmQiLCJzaG93UG9rZXJUZXh0V2lubmVyIiwicnVuQWN0aW9uUG90Q2hpcFRvV2lubmVyIiwibV9saXN0Q2hpcCIsInRhcmdldCIsIm9uV2lubmVyRXZlbnQiLCJvbkdhbWVGaW5pc2hFdmVudCIsInNpdE91dFJlcyIsIlVzZXJTaXRPdXRFdmVudCIsImluZGV4VXNlciIsIm1faXNTaXRPdXQiLCJzcGxpY2UiLCJzZXRTaXRPdXQiLCJraWNrUmVzIiwiS2lja1VzZXJFdmVudCIsIm1fcmVzVHlwZSIsIm9uUHVibGljTWVzc2FnZSIsInNlbmRlciIsIm1zZyIsIm1lc3NhZ2UiLCJkYXRhU2VuZGVyIiwiZG4iLCJmYiIsIm1zZ0l0ZW0iLCJpbnN0YW5jZSIsImdldEluc3RhbmNlIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxZQUFELENBQXhCOztBQUNBLElBQUlDLGVBQWUsR0FBR0MsV0FBVyxDQUFDQyxjQUFaLENBQTJCQyxNQUEzQixDQUFrQztBQUNwREMsRUFBQUEsV0FBVyxFQUFFLElBRHVDO0FBRXBEQyxFQUFBQSxtQkFBbUIsRUFBRSxFQUYrQjtBQUdwREMsRUFBQUEsY0FIb0QsNEJBR3BDO0FBQ1osU0FBS0MsTUFBTDs7QUFDQSxTQUFLQyxZQUFMLENBQWtCQyx5QkFBbEIsQ0FBNENDLFdBQVcsQ0FBQ0MsYUFBWixDQUEwQkMsY0FBdEUsRUFBc0YsS0FBS0MsZ0JBQTNGLEVBQTZHLElBQTdHO0FBQ0EsU0FBS0wsWUFBTCxDQUFrQkMseUJBQWxCLENBQTRDQyxXQUFXLENBQUNDLGFBQVosQ0FBMEJHLG1CQUF0RSxFQUEyRixLQUFLQyxlQUFoRyxFQUFpSCxJQUFqSDtBQUVBLFNBQUtQLFlBQUwsQ0FBa0JDLHlCQUFsQixDQUE0Q1gsVUFBVSxDQUFDYSxhQUFYLENBQXlCSyxtQkFBckUsRUFBMEYsS0FBS0MsZ0JBQS9GLEVBQWlILElBQWpIO0FBQ0EsU0FBS1QsWUFBTCxDQUFrQkMseUJBQWxCLENBQTRDWCxVQUFVLENBQUNhLGFBQVgsQ0FBeUJPLGVBQXJFLEVBQXNGLEtBQUtDLFdBQTNGLEVBQXdHLElBQXhHO0FBQ0EsU0FBS1gsWUFBTCxDQUFrQkMseUJBQWxCLENBQTRDWCxVQUFVLENBQUNhLGFBQVgsQ0FBeUJTLFNBQXJFLEVBQWdGLEtBQUtDLFVBQXJGLEVBQWlHLElBQWpHO0FBQ0EsU0FBS2IsWUFBTCxDQUFrQkMseUJBQWxCLENBQTRDWCxVQUFVLENBQUNhLGFBQVgsQ0FBeUJXLEtBQXJFLEVBQTRFLEtB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ZTtBQUFDMkwsTUFBQUEsRUFBRSxFQUFFM0wsSUFBSSxDQUFDSyxHQUFMLENBQVMsSUFBVCxDQUFMO0FBQXFCdUwsTUFBQUEsRUFBRSxFQUFHNUwsSUFBSSxDQUFDSyxHQUFMLENBQVMsSUFBVDtBQUExQixLQUFmLEdBQTJEO0FBQUNzTCxNQUFBQSxFQUFFLEVBQUUsS0FBTDtBQUFZQyxNQUFBQSxFQUFFLEVBQUc7QUFBakIsS0FBNUU7QUFDQSxRQUFJQyxPQUFPLEdBQUcsRUFBZDtBQUNBQSxJQUFBQSxPQUFPLENBQUNOLE1BQVIsR0FBaUJBLE1BQWpCO0FBQ0FNLElBQUFBLE9BQU8sQ0FBQ0wsR0FBUixHQUFjQSxHQUFkO0FBQ0FLLElBQUFBLE9BQU8sQ0FBQ0gsVUFBUixHQUFxQkEsVUFBckI7QUFDQSxTQUFLM0ksS0FBTCxHQUFhdUksZUFBYixDQUE2Qk8sT0FBN0I7QUFDSDtBQTNYbUQsQ0FBbEMsQ0FBdEI7QUE2WEEsSUFBSUMsUUFBUSxHQUFHLElBQWY7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBWTtBQUMxQixNQUFHRCxRQUFRLElBQUksSUFBZixFQUNJQSxRQUFRLEdBQUcsSUFBSXBRLGVBQUosQ0FBb0IsU0FBcEIsRUFBK0IsT0FBL0IsQ0FBWDtBQUNKLFNBQU9vUSxRQUFQO0FBQ0gsQ0FKRDs7QUFLQW5RLFdBQVcsQ0FBQ0QsZUFBWixHQUE4QnNRLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsV0FBVyxFQUExRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFBva2VyRXZlbnQgPSByZXF1aXJlKCdQb2tlckV2ZW50JylcbmxldCBQb2tlckNvbnRyb2xsZXIgPSBTbWFydEZveFNESy5CYXNlQ29udHJvbGxlci5leHRlbmQoe1xuICAgIG1fdGFibGVJbmZvOiBudWxsLFxuICAgIFF1aWNrSm9pblJvb21Db25maWc6IHt9LFxuICAgIHJlZ2lzdGVyRXZlbnRzKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oQ2FzaW5vRXZlbnQuUkVTUE9OU0VfTkFNRS5HUk9VUF9HQU1FX1JFUywgdGhpcy5vbkdyb3VwUm9vbUV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihDYXNpbm9FdmVudC5SRVNQT05TRV9OQU1FLlFVSUNLX0pPSU5fR0FNRV9SRVMsIHRoaXMub25RdWlja0pvaW5Sb29tLCB0aGlzKTtcblxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5MT0FEX1RBQkxFX0lORk9fUkVTLCB0aGlzLm9uTG9hZFRhYmxlRXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5VU0VSX1NJVF9PTl9SRVMsIHRoaXMub25Vc2VyU2l0T24sIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5QUkVfU1RBUlQsIHRoaXMub25QcmVTdGFydCwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLlNUQVJULCB0aGlzLm9uU3RhcnRFdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLlVTRVJfVFVSTl9SRVMsIHRoaXMub25Vc2VyVHVybiwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLlVTRVJfU0lUX09VVF9SRVMsIHRoaXMub25Vc2VyU2l0T3V0LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihQb2tlckV2ZW50LlJFU1BPTlNFX05BTUUuU1RBTkRfVVBfUkVTLCB0aGlzLm9uVXNlclN0YW5kVXAsIHRoaXMpO1xuXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLlVTRVJfRk9MRF9SRVMsIHRoaXMub25Vc2VyRm9sZCwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLlVTRVJfQ0FMTF9SRVMsIHRoaXMub25Vc2VyQ2FsbCwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLlVTRVJfQ0hFQ0tfUkVTLCB0aGlzLm9uVXNlckNoZWNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihQb2tlckV2ZW50LlJFU1BPTlNFX05BTUUuVVNFUl9SQUlTRV9SRVMsIHRoaXMub25Vc2VyUmFpc2UsIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5VU0VSX0dPSU5HX0FMTF9SRVMsIHRoaXMub25Vc2VyQWxsSW4sIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5HQU1FX1RVUk5fUkVTLCB0aGlzLm9uR2FtZVR1cm4sIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5TSE9XX0RPV05fUkVTLCB0aGlzLm9uU2hvd0Rvd24sIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5GSU5JU0hfR0FNRV9SRVMsIHRoaXMub25GaW5pc2hHYW1lLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihQb2tlckV2ZW50LlJFU1BPTlNFX05BTUUuS0lDS19VU0VSX1JFUywgdGhpcy5vbktpY2tVc2VyLCB0aGlzKTtcbiAgICB9LFxuICAgIHJlbW92ZUV2ZW50cygpe1xuICAgICAgICB0aGlzLl9zdXBlcigpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uKENhc2lub0V2ZW50LlJFU1BPTlNFX05BTUUuR1JPVVBfR0FNRV9SRVMsIHRoaXMub25Hcm91cFJvb21FdmVudCwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24oQ2FzaW5vRXZlbnQuUkVTUE9OU0VfTkFNRS5RVUlDS19KT0lOX0dBTUVfUkVTLCB0aGlzLm9uUXVpY2tKb2luUm9vbSwgdGhpcyk7XG5cbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihQb2tlckV2ZW50LlJFU1BPTlNFX05BTUUuTE9BRF9UQUJMRV9JTkZPX1JFUywgdGhpcy5vbkxvYWRUYWJsZUV2ZW50LCB0aGlzKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihQb2tlckV2ZW50LlJFU1BPTlNFX05BTUUuVVNFUl9TSVRfT05fUkVTLCB0aGlzLm9uVXNlclNpdE9uLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihQb2tlckV2ZW50LlJFU1BPTlNFX05BTUUuUFJFX1NUQVJULCB0aGlzLm9uUHJlU3RhcnQsIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5TVEFSVCwgdGhpcy5vblN0YXJ0RXZlbnQsIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5VU0VSX1RVUk5fUkVTLCB0aGlzLm9uVXNlclR1cm4sIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5VU0VSX1NJVF9PVVRfUkVTLCB0aGlzLm9uVXNlclNpdE91dCwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLlNUQU5EX1VQX1JFUywgdGhpcy5vblVzZXJTdGFuZFVwLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihQb2tlckV2ZW50LlJFU1BPTlNFX05BTUUuVVNFUl9GT0xEX1JFUywgdGhpcy5vblVzZXJGb2xkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihQb2tlckV2ZW50LlJFU1BPTlNFX05BTUUuVVNFUl9DQUxMX1JFUywgdGhpcy5vblVzZXJDYWxsLCB0aGlzKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihQb2tlckV2ZW50LlJFU1BPTlNFX05BTUUuVVNFUl9DSEVDS19SRVMsIHRoaXMub25Vc2VyQ2hlY2ssIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5VU0VSX1JBSVNFX1JFUywgdGhpcy5vblVzZXJSYWlzZSwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLlVTRVJfR09JTkdfQUxMX1JFUywgdGhpcy5vblVzZXJBbGxJbiwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLkdBTUVfVFVSTl9SRVMsIHRoaXMub25HYW1lVHVybiwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLlNIT1dfRE9XTl9SRVMsIHRoaXMub25TaG93RG93biwgdGhpcyk7XG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUG9rZXJFdmVudC5SRVNQT05TRV9OQU1FLkZJTklTSF9HQU1FX1JFUywgdGhpcy5vbkZpbmlzaEdhbWUsIHRoaXMpO1xuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFBva2VyRXZlbnQuUkVTUE9OU0VfTkFNRS5LSUNLX1VTRVJfUkVTLCB0aGlzLm9uS2lja1VzZXIsIHRoaXMpO1xuICAgIH0sXG4gICAgb25FdmVudExvZ2luKGV2ZW50KXtcbiAgICAgICAgdGhpcy5fc3VwZXIoZXZlbnQpO1xuICAgICAgICBsZXQgZ3JvdXBSZXF1ZXN0ID0gbmV3IENhc2lub1JlcXVlc3QuR3JvdXBHYW1lUmVxdWVzdCgpO1xuICAgICAgICBncm91cFJlcXVlc3Quc2V0R2FtZSh0aGlzLnpvbmVOYW1lKTtcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2Uuc2VuZChncm91cFJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICB9LFxuICAgIGdldFVJTG9iYnkoKXtcbiAgICAgICAgY29uc3Qgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgICBsZXQgdWlMb2JieSA9ICBjYy5maW5kKFwiVUlMb2JieVwiLCBzY2VuZSk7XG4gICAgICAgIHJldHVybiB1aUxvYmJ5LmdldENvbXBvbmVudCh1aUxvYmJ5Lm5hbWUpO1xuICAgIH0sXG4gICAgb25MZWFkZXJCb2FyZEV2ZW50KGV2ZW50KXtcbiAgICAgICAgbGV0IGFyciA9W107XG4gICAgICAgIGxldCBkYXRhID0gZXZlbnQuZ2V0U0FycmF5KFwiZFwiKTtcbiAgICAgICAgZm9yKGxldCBpID0gMDtpIDwgZGF0YS5zaXplKCk7aSsrKXtcbiAgICAgICAgICAgIGxldCBzSXRlbSA9IGRhdGEuZ2V0KGkpLmdldE9iamVjdCgpO1xuICAgICAgICAgICAgbGV0IGl0ZW0gPSB7fTtcbiAgICAgICAgICAgIGl0ZW0uc2Vzc2lvbiA9IGkgKzE7XG4gICAgICAgICAgICBpdGVtLmFjY291bnQgPSBzSXRlbS5nZXRVdGZTdHJpbmcoXCJkblwiKTtcbiAgICAgICAgICAgIGl0ZW0ud2luID0gc0l0ZW0uZ2V0RG91YmxlKFwibVwiKTtcbiAgICAgICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZ2V0VUlMb2JieSgpKXtcbiAgICAgICAgICAgIHRoaXMuZ2V0VUlMb2JieSgpLnVwZGF0ZVJhbmsoYXJyKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25Hcm91cFJvb21FdmVudChldmVudCl7XG4gICAgICAgIGxldCBncm91cFJvb20gPSBuZXcgQ2FzaW5vRXZlbnQuR3JvdXBHYW1lRXZlbnQoKS5mcm9tRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZihtbS5nYW1lID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIG1tLmdhbWUgPSB7fTtcbiAgICAgICAgbW0uZ2FtZVt0aGlzLnpvbmVOYW1lXSA9IHt9O1xuICAgICAgICBtbS5nYW1lW3RoaXMuem9uZU5hbWVdLmdyb3VwcyA9IGdyb3VwUm9vbS5ncm91cHM7XG4gICAgICAgIG1tLmdhbWVbdGhpcy56b25lTmFtZV0uZGlzcGxheW5hbWUgPSBHYW1lVmFyaWFibGVzLmdldERpc3BsYXlOYW1lKHRoaXMuWm9uZUluc3RhbmNlLm15U2VsZik7XG4gICAgICAgIG1tLmdhbWVbdGhpcy56b25lTmFtZV0uY2hpcCA9IEdhbWVWYXJpYWJsZXMuZ2V0Q2hpcCh0aGlzLlpvbmVJbnN0YW5jZS5teVNlbGYpO1xuICAgICAgICBVSU1hbmdlci5zaG93KFwiVUlMb2JieVwiLCB7cG9wOiB0cnVlLCBkYXRhOiB7Z2FtZTogdGhpcy56b25lTmFtZSwgWm9uZUluc3RhbmNlOiB0aGlzLlpvbmVJbnN0YW5jZX19LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0LkxlYWRlckJvYXJkUmVxdWVzdCgpO1xuICAgICAgICAgICAgdGhpcy5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XG4gICAgICAgIH0uYmluZCh0aGlzKSk7XG4gICAgfSxcbiAgICBvblF1aWNrSm9pblJvb20oZXZlbnQpe1xuICAgICAgICBsZXQgcXVpY2tKb2luID0gbmV3IENhc2lub0V2ZW50LlF1aWNrSm9pbkdhbWVFdmVudCgpLmZyb21FdmVudChldmVudCk7XG4gICAgICAgIGlmKHF1aWNrSm9pbi5yb29tSWQgPj0gMCl7XG4gICAgICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5zZW5kKG5ldyBDYXNpbm9SZXF1ZXN0LkpvaW5Sb29tUmVxdWVzdChxdWlja0pvaW4ucm9vbUlkLCBcIjFcIiwgdHJ1ZSkudG9TUmVxdWVzdCgpKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJQaMOybmcgxJHDoyDEkeG6p3kgdnVpIHbDsm5nIGNo4buNbiBwaMOybmcga2jDoWNcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uTG9hZFRhYmxlRXZlbnQoZXZlbnQpe1xuICAgICAgICBsZXQgX2RhdGEgPSB7cG9wOiB0cnVlLCBkYXRhOiB7cm9vbTogdGhpcy5yb29tLCBidXlfaW4gOiB0aGlzLlF1aWNrSm9pblJvb21Db25maWcuYnV5X2luLCBudW1iZXJfZGVzazogdGhpcy5RdWlja0pvaW5Sb29tQ29uZmlnLm51bWJlcl9kZXNrfX07XG4gICAgICAgIHRoaXMucHJlTG9hZFVJKF9kYXRhLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5jb250cm9sbGVyID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuUXVpY2tKb2luUm9vbUNvbmZpZy5iZXRDaGlwID0gR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRCZXRDaGlwKHRoaXMucm9vbSk7XG4gICAgICAgICAgICB0aGlzLlF1aWNrSm9pblJvb21Db25maWcucm9vbUlkID0gdGhpcy5yb29tLmlkO1xuICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnNldEluZm9UYWJsZShcIlBva2VyIC8gI1wiK3RoaXMucm9vbS5pZCwgVXRpbHMuZm9ybWF0Q3VycmVuY3kodGhpcy5RdWlja0pvaW5Sb29tQ29uZmlnLmJldENoaXApKTtcbiAgICAgICAgICAgIHRoaXMubV90YWJsZUluZm8gPSBuZXcgUG9rZXJFdmVudC5Mb2FkVGFibGVJbmZvRXZlbnQoKS5mcm9tRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5yb29tID0gdGhpcy5yb29tO1xuICAgICAgICAgICAgaWYoIXRoaXMubV90YWJsZUluZm8ubV9pc0dhbWVTdGFydCB8fCB0aGlzLm1fdGFibGVJbmZvLm1fbGlzdEFjdGl2ZVVzZXJOYW1lLmluZGV4T2YodGhpcy5ab25lSW5zdGFuY2UubXlTZWxmLm5hbWUpIDwgMCl7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnJlcXVlc3RTaXRPbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXRVSSgpLl91cGRhdGVOb2RlUGxheWVycyh0aGlzLm1fdGFibGVJbmZvLm1fbGlzdERlc2spO1xuICAgICAgICAgICAgaWYodGhpcy5tX3RhYmxlSW5mby5tX2lzUHJlc3RhcnQgJiYgIXRoaXMubV90YWJsZUluZm8ubV9pc0dhbWVTdGFydCl7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnNldFdhaXRpbmdUaW1lcih0cnVlLCA1LCB0aGlzLm1fdGFibGVJbmZvLm1faXNQcmVzdGFydCAvIDEwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZih0aGlzLm1fdGFibGVJbmZvLm1faXNHYW1lU3RhcnQpe1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS50dXJuT2ZmQWxsVGltZXJQbGF5ZXJzKCk7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGNvbW11bml0eSBjYXJkXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSSgpLmdldENvbW11bml0eUNhcmQoKS5zaG93Q29tbXVuaXR5Q2FyZChtbS5tX3RhYmxlSW5mby5tX2xpc3RDb21tdW5pdHlDYXJkKTtcblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBzdGF0ZSBmb3IgZWFjaCB1c2VyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubV90YWJsZUluZm8ubV9saXN0QWN0aXZlVXNlck5hbWUubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFVJKCkuX2dldEpTUGxheWVyQnlOYW1lKHRoaXMubV90YWJsZUluZm8ubV9saXN0QWN0aXZlVXNlck5hbWVbaV0pO1xuICAgICAgICAgICAgICAgICAgICBpZihwbGF5ZXIpe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLmFkZENhcmRIYW5kKHRoaXMubV90YWJsZUluZm8ubV9saXN0SGFuZENhcmRbaV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyLnNob3dCZXRDaGlwKHRoaXMubV90YWJsZUluZm8ubV9saXN0QmV0Q2hpcFtpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnNldE1vbmV5UG90KHRoaXMubV90YWJsZUluZm8ubV9wb3RDaGlwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5oaWRlRGVza0VtcHR5KCk7XG4gICAgICAgIH0uYmluZCh0aGlzKSlcbiAgICB9LFxuICAgIG9uVXNlclNpdE9uKGV2ZW50KXtcbiAgICAgICAgbGV0IHVzZXJTaXRPbkV2ZW50ID0gbmV3IFBva2VyRXZlbnQuVXNlclNpdE9uRXZlbnQoKS5mcm9tRXZlbnQoZXZlbnQpO1xuICAgICAgICAvLyBhZGQgdG8gbGlzdCBkZXNrXG4gICAgICAgIGxldCBkZXNrID0ge307XG4gICAgICAgIGRlc2suRGVza0lkID0gdXNlclNpdE9uRXZlbnQubV9kZXNrSWQ7XG4gICAgICAgIGRlc2suVXNlck5hbWUgPSB1c2VyU2l0T25FdmVudC5tX3VzZXJOYW1lO1xuICAgICAgICBkZXNrLkRlc2tTdGF0ZSA9IHVzZXJTaXRPbkV2ZW50Lm1fZGVza1N0YXRlO1xuICAgICAgICBkZXNrLlVzZXJDaGlwID0gdXNlclNpdE9uRXZlbnQubV9idXlJbjtcbiAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5tX2xpc3REZXNrLnB1c2goZGVzayk7XG5cbiAgICAgICAgLy8gYWRkIHRvIGxpc3QgdXNlclxuICAgICAgICB0aGlzLm1fdGFibGVJbmZvLm1fbGlzdFVzZXIucHVzaCh1c2VyU2l0T25FdmVudC5tX3VzZXJOYW1lKTtcblxuICAgICAgICB0aGlzLmdldFVJKCkuX3VwZGF0ZU5vZGVQbGF5ZXJzKHRoaXMubV90YWJsZUluZm8ubV9saXN0RGVzayk7XG4gICAgfSxcbiAgICBvblByZVN0YXJ0KGV2ZW50KXtcbiAgICAgICAgbGV0IHByZVN0YXJ0ID0gbmV3IFBva2VyRXZlbnQuUHJlU3RhcnRFdmVudCgpLmZyb21FdmVudChldmVudCk7XG4gICAgICAgIHRoaXMubV90YWJsZUluZm8ubV9pc1ByZXN0YXJ0ID0gcHJlU3RhcnQubV9pc1ByZXN0YXJ0O1xuICAgICAgICB0aGlzLm1fdGFibGVJbmZvLm1fcHJlc3RhcnRUaW1lID0gcHJlU3RhcnQubV9wcmVzdGFydFRpbWU7XG4gICAgICAgIHRoaXMubV90YWJsZUluZm8ubV9pc0dhbWVTdGFydCA9IGZhbHNlO1xuICAgICAgICAvLyByZXNldCBjYXJkIGNvbW1pbml0eVxuICAgICAgICB0aGlzLmdldFVJKCkuZ2V0Q29tbXVuaXR5Q2FyZCgpLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuZ2V0VUkoKS5zZXRNb25leVBvdCgtMSk7XG4gICAgICAgIHRoaXMubV90YWJsZUluZm8ubV90b3RhbF9iZXQgPSAwO1xuICAgICAgICAvLyByZXNldCBwb2tlciB0ZXh0IHdpblxuICAgICAgICB0aGlzLmdldFVJKCkuaGlkZVBva2VyVGV4dFdpbm5lcigpO1xuICAgICAgICAvLyBoaWRlIGFsbCBob2xkIGVtIG9mIHBsYXllcnNcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubV90YWJsZUluZm8ubV9saXN0RGVzay5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBkZXNrID0gdGhpcy5tX3RhYmxlSW5mby5tX2xpc3REZXNrW2ldO1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0VUkoKS5fZ2V0SlNQbGF5ZXJCeUlkKGRlc2suRGVza0lkKTtcbiAgICAgICAgICAgIHBsYXllci5vblByZVN0YXJ0RXZlbnQocHJlU3RhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHByZVN0YXJ0Lm1faXNQcmVzdGFydCl7XG4gICAgICAgICAgICB0aGlzLmdldFVJKCkuc2V0V2FpdGluZ1RpbWVyKHRydWUscHJlU3RhcnQubV9wcmVzdGFydFRpbWUgLyAxMDAwLCBwcmVTdGFydC5tX3ByZXN0YXJ0VGltZSAvIDEwMDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0VUkoKS5zaG93RGVza0VtcHR5KCk7XG5cbiAgICAgICAgaWYodGhpcy5tX3RhYmxlSW5mby5tX2xpc3RVc2VyU2l0T3V0LmluZGV4T2YodGhpcy5ab25lSW5zdGFuY2UubXlTZWxmLm5hbWUpID49IDApe1xuICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnJlcXVlc3RMZWF2ZVJvb20oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGNvdW50IG91dFxuICAgICAgICBpZih0aGlzLmdldFVJKCkuY291bnRPdXQgPj0gMSl7XG4gICAgICAgICAgICB0aGlzLmdldFVJKCkucmVxdWVzdExlYXZlUm9vbSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvblN0YXJ0RXZlbnQoZXZlbnQpe1xuICAgICAgICB0aGlzLmdldFVJKCkuY291bnRPdXQrKztcbiAgICAgICAgdGhpcy5nZXRVSSgpLnNldFdhaXRpbmdUaW1lcihmYWxzZSk7XG4gICAgICAgIGxldCBzdGFydCA9IG5ldyBQb2tlckV2ZW50LlN0YXJ0RXZlbnQoKS5mcm9tRXZlbnQoZXZlbnQpO1xuICAgICAgICB0aGlzLm1fdGFibGVJbmZvLm1fZGVhbGVyID0gc3RhcnQubV9kZWFsZXI7XG4gICAgICAgIHRoaXMubV90YWJsZUluZm8ubV9zbWFsbEJsaW5kID0gc3RhcnQubV9zbWFsbEJsaW5kO1xuICAgICAgICB0aGlzLm1fdGFibGVJbmZvLm1fYmlnQmxpbmQgPSBzdGFydC5tX2JpZ0JsaW5kO1xuICAgICAgICB0aGlzLm1fdGFibGVJbmZvLm1fYmV0Q2hpcEdhbWUgPSBzdGFydC5tX2JldENoaXBHYW1lO1xuICAgICAgICB0aGlzLm1fdGFibGVJbmZvLm1fY3VycmVudFVzZXIgPSAgc3RhcnQubV9jdXJyZW50VXNlcjtcbiAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5tX3VzZXJUaW1lID0gc3RhcnQubV91c2VyVGltZTtcbiAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5tX2lzR2FtZVN0YXJ0ID0gdHJ1ZTtcbiAgICAgICAgaWYodGhpcy5tX3RhYmxlSW5mby5tX2xpc3RBY3RpdmVVc2VyTmFtZSl7XG4gICAgICAgICAgICBsZXQgdXNlck91dCA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMubV90YWJsZUluZm8ubV9saXN0QWN0aXZlVXNlck5hbWUubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICAgICAgaWYoc3RhcnQubV9saXN0QWN0aXZlVXNlck5hbWUuaW5kZXhPZih0aGlzLm1fdGFibGVJbmZvLm1fbGlzdEFjdGl2ZVVzZXJOYW1lW2ldKSA8IDApe1xuICAgICAgICAgICAgICAgICAgICB1c2VyT3V0LnB1c2godGhpcy5tX3RhYmxlSW5mby5tX2xpc3RBY3RpdmVVc2VyTmFtZVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnJlbW92ZVBsYXllcih1c2VyT3V0KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm1fdGFibGVJbmZvLm1fbGlzdEFjdGl2ZVVzZXJOYW1lID0gc3RhcnQubV9saXN0QWN0aXZlVXNlck5hbWU7XG4gICAgICAgIHRoaXMuZ2V0VUkoKS5fdXBkYXRlTm9kZVBsYXllcnModGhpcy5tX3RhYmxlSW5mby5tX2xpc3REZXNrKTtcbiAgICAgICAgLy8gc2V0IEFjdGlvbnMgQ29udHJvbGxlciBGb3IgbXlTZWxmXG4gICAgICAgIGlmKHRoaXMuZ2V0VUkoKS5faXNQbGF5ZXIodGhpcy5ab25lSW5zdGFuY2UubXlTZWxmLm5hbWUpKXtcbiAgICAgICAgICAgIGxldCBkZXNrSWQgPSB0aGlzLmdldFVJKCkuX2dldFBsYXllcklkKHRoaXMuWm9uZUluc3RhbmNlLm15U2VsZi5uYW1lKTtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFVJKCkuX2dldEpTUGxheWVyQnlJZChkZXNrSWQpO1xuICAgICAgICAgICAgcGxheWVyLnNldEFjdGlvbkNvbnRyb2xsZXIodGhpcy5nZXRVSSgpLmdldEFjdGlvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLm1fdGFibGVJbmZvLm1fbGlzdERlc2subGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgZGVzayA9IHRoaXMubV90YWJsZUluZm8ubV9saXN0RGVza1tpXTtcbiAgICAgICAgICAgIGxldCBqc1BsYXllciA9IHRoaXMuZ2V0VUkoKS5fZ2V0SlNQbGF5ZXJCeUlkKGRlc2suRGVza0lkKTtcbiAgICAgICAgICAgIGpzUGxheWVyLm9uU3RhcnRFdmVudChzdGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRVSSgpLmhpZGVEZXNrRW1wdHkoKTtcbiAgICB9LFxuICAgIG9uVXNlclR1cm4oZXZlbnQpe1xuICAgICAgICB0aGlzLmdldFVJKCkudHVybk9mZkFsbFRpbWVyUGxheWVycygpO1xuICAgICAgICAvLyBuZXh0IHVzZXIgdHVyblxuICAgICAgICBsZXQgdXNlclR1cm5SZXMgPSBuZXcgUG9rZXJFdmVudC5Vc2VyVHVybkV2ZW50KCkuZnJvbUV2ZW50KGV2ZW50KTtcbiAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5tX2N1cnJlbnRVc2VyID0gdXNlclR1cm5SZXMubV91c2VybmFtZTtcbiAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5tX3VzZXJUaW1lID0gdXNlclR1cm5SZXMubV90aW1lO1xuICAgICAgICBsZXQgZGVza0lkID0gdGhpcy5nZXRVSSgpLl9nZXRQbGF5ZXJJZCh1c2VyVHVyblJlcy5tX3VzZXJuYW1lKTtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0VUkoKS5fZ2V0SlNQbGF5ZXJCeUlkKGRlc2tJZCk7XG4gICAgICAgIGlmKHBsYXllcilcbiAgICAgICAgICAgIHBsYXllci5vblR1cm5FdmVudCh1c2VyVHVyblJlcyk7XG4gICAgfSxcbiAgICBvbkdhbWVUdXJuKGV2ZW50KXtcbiAgICAgICAgdGhpcy5nZXRVSSgpLnR1cm5PZmZBbGxUaW1lclBsYXllcnMoKTtcbiAgICAgICAgbGV0IGdhbWVUdXJuUmVzID0gbmV3IFBva2VyRXZlbnQuR2FtZVR1cm5FdmVudCgpLmZyb21FdmVudChldmVudCk7XG4gICAgICAgIGxldCB1c2VyRmlyc3RCZXR0aW5nID0gZ2FtZVR1cm5SZXMubV9jdXJyZW50VXNlcjtcbiAgICAgICAgbGV0IGNvbW11bml0eUNhcmQgPSB0aGlzLmdldFVJKCkuZ2V0Q29tbXVuaXR5Q2FyZCgpO1xuICAgICAgICBsZXQgY3VycmVudEdhbWVUdXJuID0gZ2FtZVR1cm5SZXMubV9jdXJyZW50R2FtZVR1cm47XG4gICAgICAgIGxldCBwcm9jZXNzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2V0VUkoKS5wcm9jZXNzQmV0Q2hpcFRvUG90KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmKCFwcm9jZXNzKXtcbiAgICAgICAgICAgICAgICBwcm9jZXNzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBpZihjdXJyZW50R2FtZVR1cm4gPT0gXCJCRVRUSU5HXCIpe1xuXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoY3VycmVudEdhbWVUdXJuID09IFwiRkxPUFwiKXtcbiAgICAgICAgICAgICAgICAgICAgY29tbXVuaXR5Q2FyZC5kZWFsRmxvcChnYW1lVHVyblJlcy5tX2xpc3RDb21tdW5pdHlDYXJkKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihjdXJyZW50R2FtZVR1cm4gPT0gXCJUVVJOXCIpe1xuICAgICAgICAgICAgICAgICAgICBjb21tdW5pdHlDYXJkLmRlYWxUdXJuKGdhbWVUdXJuUmVzLm1fbGlzdENvbW11bml0eUNhcmQpO1xuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGN1cnJlbnRHYW1lVHVybiA9PSBcIlJJVkVSXCIpe1xuICAgICAgICAgICAgICAgICAgICBjb21tdW5pdHlDYXJkLmRlYWxSaXZlcihnYW1lVHVyblJlcy5tX2xpc3RDb21tdW5pdHlDYXJkKTtcbiAgICAgICAgICAgICAgICB9ZWxzZSBpZihjdXJyZW50R2FtZVR1cm4gPT0gXCJFTkRcIil7XG5cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVTktPV04gVFVSTiBcIitjdXJyZW50R2FtZVR1cm4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBwbGF5ZXJCZXQgPSB0aGlzLmdldFVJKCkuX2dldEpTUGxheWVyQnlOYW1lKHVzZXJGaXJzdEJldHRpbmcpO1xuICAgICAgICBpZihwbGF5ZXJCZXQpXG4gICAgICAgICAgICBwbGF5ZXJCZXQuc2hvd0JldHRpbmcoKTtcbiAgICB9LFxuICAgIG9uVXNlckZvbGQoZXZlbnQpe1xuICAgICAgICBsZXQgdXNlckZvbGRSZXMgPSBuZXcgUG9rZXJFdmVudC5Vc2VyRm9sZEV2ZW50KCkuZnJvbUV2ZW50KGV2ZW50KTtcbiAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0VUkoKS5fZ2V0SlNQbGF5ZXJCeU5hbWUodXNlckZvbGRSZXMubV91c2VybmFtZSk7XG4gICAgICAgIGlmKHBsYXllcilcbiAgICAgICAgICAgIHBsYXllci5vbkZvbGRFdmVudCh1c2VyRm9sZFJlcyk7XG4gICAgICAgIGlmKHVzZXJGb2xkUmVzLm1fdXNlcm5hbWUgPT0gdGhpcy5ab25lSW5zdGFuY2UubXlTZWxmLm5hbWUpe1xuICAgICAgICAgICAgdGhpcy5nZXRVSSgpLmNvdW50T3V0ID0gMDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25Vc2VyQ2FsbChldmVudCl7XG4gICAgICAgIGxldCB1c2VyQ2FsbFJlcyA9IG5ldyBQb2tlckV2ZW50LlVzZXJDYWxsRXZlbnQoKS5mcm9tRXZlbnQoZXZlbnQpO1xuICAgICAgICBsZXQgcGxheWVyID0gdGhpcy5nZXRVSSgpLl9nZXRKU1BsYXllckJ5TmFtZSh1c2VyQ2FsbFJlcy5tX3VzZXJuYW1lKTtcbiAgICAgICAgaWYocGxheWVyKVxuICAgICAgICAgICAgcGxheWVyLm9uQ2FsbEV2ZW50KHVzZXJDYWxsUmVzKTtcbiAgICAgICAgaWYodXNlckNhbGxSZXMubV91c2VybmFtZSA9PSB0aGlzLlpvbmVJbnN0YW5jZS5teVNlbGYubmFtZSl7XG4gICAgICAgICAgICB0aGlzLmdldFVJKCkuY291bnRPdXQgPSAwO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvblVzZXJDaGVjayhldmVudCl7XG4gICAgICAgIGxldCB1c2VyQ2hlY2tSZXMgPSBuZXcgUG9rZXJFdmVudC5Vc2VyQ2hlY2tFdmVudCgpLmZyb21FdmVudChldmVudCk7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFVJKCkuX2dldEpTUGxheWVyQnlOYW1lKHVzZXJDaGVja1Jlcy5tX3VzZXJuYW1lKTtcbiAgICAgICAgaWYocGxheWVyKVxuICAgICAgICAgICAgcGxheWVyLm9uQ2hlY2tFdmVudCh1c2VyQ2hlY2tSZXMpO1xuICAgICAgICBpZih1c2VyQ2hlY2tSZXMubV91c2VybmFtZSA9PSB0aGlzLlpvbmVJbnN0YW5jZS5teVNlbGYubmFtZSl7XG4gICAgICAgICAgICB0aGlzLmdldFVJKCkuY291bnRPdXQgPSAwO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvblVzZXJSYWlzZShldmVudCl7XG4gICAgICAgIGxldCB1c2VyUmFpc2VSZXMgPSBuZXcgUG9rZXJFdmVudC5Vc2VyUmFpc2VFdmVudCgpLmZyb21FdmVudChldmVudCk7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFVJKCkuX2dldEpTUGxheWVyQnlOYW1lKHVzZXJSYWlzZVJlcy5tX3VzZXJuYW1lKTtcbiAgICAgICAgaWYocGxheWVyKVxuICAgICAgICAgICAgcGxheWVyLm9uUmFpc2VFdmVudCh1c2VyUmFpc2VSZXMpO1xuICAgICAgICBpZih1c2VyUmFpc2VSZXMubV91c2VybmFtZSA9PSB0aGlzLlpvbmVJbnN0YW5jZS5teVNlbGYubmFtZSl7XG4gICAgICAgICAgICB0aGlzLmdldFVJKCkuY291bnRPdXQgPSAwO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvblVzZXJBbGxJbihldmVudCl7XG4gICAgICAgIGxldCB1c2VyQWxsSW5SZXMgPSBuZXcgUG9rZXJFdmVudC5Vc2VyQWxsSW5FdmVudCgpLmZyb21FdmVudChldmVudCk7XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFVJKCkuX2dldEpTUGxheWVyQnlOYW1lKHVzZXJBbGxJblJlcy5tX3VzZXJuYW1lKTtcbiAgICAgICAgaWYocGxheWVyKVxuICAgICAgICAgICAgcGxheWVyLm9uQWxsSW5FdmVudCh1c2VyQWxsSW5SZXMpO1xuICAgICAgICBpZih1c2VyQWxsSW5SZXMubV91c2VybmFtZSA9PSB0aGlzLlpvbmVJbnN0YW5jZS5teVNlbGYubmFtZSl7XG4gICAgICAgICAgICB0aGlzLmdldFVJKCkuY291bnRPdXQgPSAwO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBvblNob3dEb3duKGV2ZW50KXtcbiAgICAgICAgdGhpcy5nZXRVSSgpLnByb2Nlc3NCZXRDaGlwVG9Qb3QoKTtcbiAgICAgICAgbGV0IHNob3dEb3duUmVzID0gbmV3IFBva2VyRXZlbnQuU2hvd0Rvd25FdmVudCgpLmZyb21FdmVudChldmVudCk7XG4gICAgICAgIGxldCBjb21tdW5pdHlDYXJkID0gdGhpcy5nZXRVSSgpLmdldENvbW11bml0eUNhcmQoKTtcbiAgICAgICAgY29tbXVuaXR5Q2FyZC5zaG93RG93bihzaG93RG93blJlcy5tX2xpc3RDb21DYXJkKTtcbiAgICAgICAgLy8gc3RvcCBhbGwgdGltZXIgb2YgcGxheWVyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaG93RG93blJlcy5tX2xpc3RVc2VyLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IG5hbWUgPSBzaG93RG93blJlcy5tX2xpc3RVc2VyW2ldO1xuICAgICAgICAgICAgbGV0IHBsYXllciA9IHRoaXMuZ2V0VUkoKS5fZ2V0SlNQbGF5ZXJCeU5hbWUobmFtZSk7XG4gICAgICAgICAgICBpZihwbGF5ZXIpXG4gICAgICAgICAgICAgICAgcGxheWVyLm9uU2hvd0Rvd25FdmVudChzaG93RG93blJlcy5tX2xpc3RDYXJkW2ldKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25GaW5pc2hHYW1lKGV2ZW50KXtcbiAgICAgICAgdGhpcy5nZXRVSSgpLnR1cm5PZmZBbGxUaW1lclBsYXllcnMoKTtcbiAgICAgICAgbGV0IGZpbmlzaEdhbWVSZXMgPSBuZXcgUG9rZXJFdmVudC5GaW5pc2hHYW1lRXZlbnQoKS5mcm9tRXZlbnQoZXZlbnQpO1xuICAgICAgICBsZXQgY29tbXVuaXR5Q2FyZCA9IHRoaXMuZ2V0VUkoKS5nZXRDb21tdW5pdHlDYXJkKCk7XG5cbiAgICAgICAgY29tbXVuaXR5Q2FyZC5zaG93Q29tbXVuaXR5Q2FyZFdpbihmaW5pc2hHYW1lUmVzLm1fbGlzdFBva2VySGFuZENhcmQpO1xuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBmaW5pc2hHYW1lUmVzLm1fbGlzdFVzZXIubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgbmFtZSA9IGZpbmlzaEdhbWVSZXMubV9saXN0VXNlcltpXTtcbiAgICAgICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFVJKCkuX2dldEpTUGxheWVyQnlOYW1lKG5hbWUpO1xuICAgICAgICAgICAgaWYocGxheWVyKXtcbiAgICAgICAgICAgICAgICBpZihmaW5pc2hHYW1lUmVzLm1fbGlzdFdpbm5lci5pbmRleE9mKG5hbWUpID49IDApe1xuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZUJlc3RXaW4gPSBmaW5pc2hHYW1lUmVzLm1fbGlzdFBva2VySGFuZFtpXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnNob3dQb2tlclRleHRXaW5uZXIodHlwZUJlc3RXaW4pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVJKCkucnVuQWN0aW9uUG90Q2hpcFRvV2lubmVyKGZpbmlzaEdhbWVSZXMubV9saXN0Q2hpcFtpXSwgbmFtZSwgZnVuY3Rpb24gKGNoaXAsIHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0Lm9uV2lubmVyRXZlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgcGxheWVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGxheWVyLm9uR2FtZUZpbmlzaEV2ZW50KGZpbmlzaEdhbWVSZXMubV9saXN0UG9rZXJIYW5kQ2FyZCwgZmluaXNoR2FtZVJlcy5tX2xpc3RQb2tlckhhbmRbaV0sZmluaXNoR2FtZVJlcy5tX2xpc3RDaGlwW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubV90YWJsZUluZm8ubV9wb3RDaGlwID0gMDtcbiAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5tX2lzR2FtZVN0YXJ0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZ2V0VUkoKS5zZXRNb25leVBvdCh0aGlzLm1fdGFibGVJbmZvLm1fcG90Q2hpcCk7XG4gICAgfSxcbiAgICBvblVzZXJTaXRPdXQoZXZlbnQpe1xuICAgICAgICBtbS5Mb2FkaW5nLmhpZGUoKTtcbiAgICAgICAgbGV0IHNpdE91dFJlcyA9IG5ldyBQb2tlckV2ZW50LlVzZXJTaXRPdXRFdmVudCgpLmZyb21FdmVudChldmVudCk7XG4gICAgICAgIGxldCBpbmRleFVzZXIgPSB0aGlzLm1fdGFibGVJbmZvLm1fbGlzdFVzZXJTaXRPdXQuaW5kZXhPZihzaXRPdXRSZXMubV91c2VybmFtZSk7XG4gICAgICAgIGlmKGluZGV4VXNlciA8IDApe1xuICAgICAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5tX2xpc3RVc2VyU2l0T3V0LnB1c2goc2l0T3V0UmVzLm1fdXNlcm5hbWUpO1xuICAgICAgICB9ZWxzZSBpZighc2l0T3V0UmVzLm1faXNTaXRPdXQpe1xuICAgICAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5tX2xpc3RVc2VyU2l0T3V0LnNwbGljZShpbmRleFVzZXIsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwbGF5ZXIgPSB0aGlzLmdldFVJKCkuX2dldEpTUGxheWVyQnlOYW1lKHNpdE91dFJlcy5tX3VzZXJuYW1lKTtcbiAgICAgICAgaWYocGxheWVyKVxuICAgICAgICAgICAgcGxheWVyLnNldFNpdE91dChzaXRPdXRSZXMubV9pc1NpdE91dCk7XG4gICAgICAgIGlmKHRoaXMuWm9uZUluc3RhbmNlLm15U2VsZi5uYW1lID09IHNpdE91dFJlcy5tX3VzZXJuYW1lKXtcbiAgICAgICAgICAgIGlmKHNpdE91dFJlcy5tX2lzU2l0T3V0KVxuICAgICAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIsSQxINuZyBrw70gcuG7nWkgYsOgbiFcIik7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiSOG7p3kgcuG7nWkgYsOgbiFcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uS2lja1VzZXIoZXZlbnQpe1xuICAgICAgICBsZXQga2lja1JlcyA9IG5ldyBQb2tlckV2ZW50LktpY2tVc2VyRXZlbnQoKS5mcm9tRXZlbnQoZXZlbnQpO1xuICAgICAgICBpZihraWNrUmVzLm1fcmVzVHlwZSA9PSAyKXtcbiAgICAgICAgICAgIGlmKHRoaXMuZ2V0VUkoKS5fZ2V0SlNQbGF5ZXJCeU5hbWUoa2lja1Jlcy5tX3VzZXJuYW1lKSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVJKCkucmVtb3ZlUGxheWVyKFtraWNrUmVzLm1fdXNlcm5hbWVdKTtcbiAgICAgICAgICAgICAgICBpZih0aGlzLlpvbmVJbnN0YW5jZS5teVNlbGYubmFtZSA9PSBraWNrUmVzLm1fdXNlcm5hbWUpe1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVJKCkucmVxdWVzdExlYXZlUm9vbSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgb25Vc2VyU3RhbmRVcChldmVudCl7XG5cbiAgICB9LFxuICAgIG9uUHVibGljTWVzc2FnZShldmVudCl7XG4gICAgICAgIGxldCBzZW5kZXIgPSBldmVudC5zZW5kZXI7XG4gICAgICAgIGxldCBtc2cgPSBldmVudC5tZXNzYWdlO1xuICAgICAgICBsZXQgZGF0YSA9IGV2ZW50LmRhdGE7XG4gICAgICAgIGxldCBkYXRhU2VuZGVyID0gZGF0YSAhPSBudWxsID8ge2RuOiBkYXRhLmdldChcImRuXCIpLCBmYiA6IGRhdGEuZ2V0KFwiZmJcIil9IDoge2RuOiBcIi4uLlwiLCBmYiA6IFwiXCJ9O1xuICAgICAgICBsZXQgbXNnSXRlbSA9IHt9O1xuICAgICAgICBtc2dJdGVtLnNlbmRlciA9IHNlbmRlcjtcbiAgICAgICAgbXNnSXRlbS5tc2cgPSBtc2c7XG4gICAgICAgIG1zZ0l0ZW0uZGF0YVNlbmRlciA9IGRhdGFTZW5kZXI7XG4gICAgICAgIHRoaXMuZ2V0VUkoKS5vblB1YmxpY01lc3NhZ2UobXNnSXRlbSk7XG4gICAgfSxcbn0pO1xubGV0IGluc3RhbmNlID0gbnVsbDtcbmxldCBnZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZihpbnN0YW5jZSA9PSBudWxsKVxuICAgICAgICBpbnN0YW5jZSA9IG5ldyBQb2tlckNvbnRyb2xsZXIoXCJVSVBva2VyXCIsIFwicG9rZXJcIik7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuU21hcnRGb3hTREsuUG9rZXJDb250cm9sbGVyID0gbW9kdWxlLmV4cG9ydHMgPSBnZXRJbnN0YW5jZSgpO1xuIl19
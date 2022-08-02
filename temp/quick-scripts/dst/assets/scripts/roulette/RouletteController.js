
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/RouletteController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6becu6MepCoaEfVitqr71V', 'RouletteController');
// scripts/roulette/RouletteController.js

"use strict";

var RouletteEvent = require('RouletteEvent');

var RouletteController = SmartFoxSDK.BaseController.extend({
  m_tableInfo: null,
  registerEvents: function registerEvents() {
    this._super();

    this.ZoneInstance.addEventListenerExtension(RouletteEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
    this.ZoneInstance.addEventListenerExtension(RouletteEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    this.ZoneInstance.addEventListenerExtension(RouletteEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
    this.ZoneInstance.addEventListenerExtension(RouletteEvent.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
  },
  removeEvents: function removeEvents() {
    this._super();

    this.ZoneInstance.removeEventListenerExtension(RouletteEvent.RESPONSE_NAME.LOAD_GAME_RES, this.onLoadGameEvent, this);
    this.ZoneInstance.removeEventListenerExtension(RouletteEvent.RESPONSE_NAME.BET_RES, this.onUserBetEvent, this);
    this.ZoneInstance.removeEventListenerExtension(RouletteEvent.RESPONSE_NAME.END_BETTING, this.onEndBettingEvent, this);
    this.ZoneInstance.removeEventListenerExtension(RouletteEvent.RESPONSE_NAME.HISTORY_RESULT, this.onHistoryResultEvent, this);
  },
  onEventLogin: function onEventLogin(event) {
    this._super(event);

    this._requestJoinRoom(this.zoneName);
  },
  onEventUserExitRoom: function onEventUserExitRoom(event) {
    var user = event.user;

    if (user.isItMe) {
      if (this.getUI() != null) this.getUI().node.active = false;
      UIManger.show("UIHome");
    }
  },
  onLoadGameEvent: function onLoadGameEvent(event) {
    this.preLoadUI({
      pop: true
    }, function () {
      this.m_tableInfo = new RouletteEvent.LoadGameEvent().fromEvent(event);
      this.getUI().hideAll();
      var users = [];
      users.push(this.ZoneInstance.mySelf);

      for (var i = 0; i < this.getRoom().getUserList().length; i++) {
        var u = this.getRoom().getUserList()[i];

        if (u.name != this.ZoneInstance.mySelf.name && users.length < 6) {
          users.push(u);
        }
      }

      this.getUI().showListUsers(users);

      if (this.m_tableInfo.isBetting) {
        this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);

        this.getUI().showNoti("Bắt đầu cược");
      } else {
        this.getUI()._turnOffTime();

        this.getUI()._turnOnTime(this.m_tableInfo.time, this.m_tableInfo.time, this.m_tableInfo.isBetting);

        this.getUI().resumeGame(this.m_tableInfo.winpot, this.m_tableInfo.time, this.m_tableInfo.usersOnboard, this.m_tableInfo.chipUserOnBoard, this.m_tableInfo.result, this.m_tableInfo.winChip);
      }

      this.getUI().updateTotalBet(this.m_tableInfo.totalUserBet);
      this.getUI().addChipToPot(this.m_tableInfo.listTypePotBet, this.m_tableInfo.listMyChipPot);
    }.bind(this));
  },
  onUserBetEvent: function onUserBetEvent(event) {
    var userBet = new RouletteEvent.BetEvent().fromEvent(event);
    var userName = userBet.userName;
    var betChip = userBet.betChip;
    var typePot = userBet.typePot;
    var totalBet = userBet.totalBet;

    if (this.ZoneInstance.mySelf.name == userName) {
      this.getUI().updateListChipBet(userBet.typePot, userBet.betChip);
    }

    this.getUI().updateTotalBet(totalBet);
    this.getUI().runActionChangeMoney(userName, -betChip, 1);
    this.getUI().actionFlyChipToPot(userName, typePot, betChip);
    var user = this.getRoom().getUserByName(userName);
    if (user) this.getUI().updateChip(user);
  },
  onEndBettingEvent: function onEndBettingEvent(event) {
    var endBetting = new RouletteEvent.EndBetting().fromEvent(event);
    this.m_tableInfo.isBetting = false;
    this.m_tableInfo.chipUserOnBoard = endBetting.chipUserOnBoard;
    this.m_tableInfo.usersOnboard = endBetting.usersOnboard;
    this.m_tableInfo.winpot = endBetting.winpot;
    this.m_tableInfo.winChip = endBetting.winChip;
    this.m_tableInfo.result = endBetting.result;

    this.getUI()._turnOffTime();

    this.getUI()._turnOnTime(20, 20, this.m_tableInfo.isBetting);

    this.getUI().showNoti("Kết thúc cược!");
    this.getUI().showResult(this.m_tableInfo.result);
  },
  onHistoryResultEvent: function onHistoryResultEvent(event) {
    var history = new RouletteEvent.HistoryResponse().fromEvent(event);
    this.getUI().showSoiCau(history.result);
  },
  onHistoryEvent: function onHistoryEvent(event) {
    var historyEvent = new RouletteEvent.HistoryEvent().fromEvent(event);
    this.getUI().show("UIRouletteTransaction", {
      pop: true,
      src: 'roulette',
      data: {
        items: historyEvent.items
      }
    });
  },
  onLeaderBoardEvent: function onLeaderBoardEvent(event) {
    var leaderBoardEvent = new RouletteEvent.LeaderBoardEvent().fromEvent(event);
    this.getUI().show("UIRouletteRank", {
      pop: true,
      src: 'roulette',
      data: {
        items: leaderBoardEvent.items
      }
    });
  },
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
  if (instance == null) instance = new RouletteController('UIRoulette', 'roulette');
  return instance;
};

SmartFoxSDK.RouletteController = module.exports = getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm91bGV0dGVcXFJvdWxldHRlQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJSb3VsZXR0ZUV2ZW50IiwicmVxdWlyZSIsIlJvdWxldHRlQ29udHJvbGxlciIsIlNtYXJ0Rm94U0RLIiwiQmFzZUNvbnRyb2xsZXIiLCJleHRlbmQiLCJtX3RhYmxlSW5mbyIsInJlZ2lzdGVyRXZlbnRzIiwiX3N1cGVyIiwiWm9uZUluc3RhbmNlIiwiYWRkRXZlbnRMaXN0ZW5lckV4dGVuc2lvbiIsIlJFU1BPTlNFX05BTUUiLCJMT0FEX0dBTUVfUkVTIiwib25Mb2FkR2FtZUV2ZW50IiwiQkVUX1JFUyIsIm9uVXNlckJldEV2ZW50IiwiRU5EX0JFVFRJTkciLCJvbkVuZEJldHRpbmdFdmVudCIsIkhJU1RPUllfUkVTVUxUIiwib25IaXN0b3J5UmVzdWx0RXZlbnQiLCJyZW1vdmVFdmVudHMiLCJyZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uIiwib25FdmVudExvZ2luIiwiZXZlbnQiLCJfcmVxdWVzdEpvaW5Sb29tIiwiem9uZU5hbWUiLCJvbkV2ZW50VXNlckV4aXRSb29tIiwidXNlciIsImlzSXRNZSIsImdldFVJIiwibm9kZSIsImFjdGl2ZSIsIlVJTWFuZ2VyIiwic2hvdyIsInByZUxvYWRVSSIsInBvcCIsIkxvYWRHYW1lRXZlbnQiLCJmcm9tRXZlbnQiLCJoaWRlQWxsIiwidXNlcnMiLCJwdXNoIiwibXlTZWxmIiwiaSIsImdldFJvb20iLCJnZXRVc2VyTGlzdCIsImxlbmd0aCIsInUiLCJuYW1lIiwic2hvd0xpc3RVc2VycyIsImlzQmV0dGluZyIsIl90dXJuT25UaW1lIiwidGltZSIsInNob3dOb3RpIiwiX3R1cm5PZmZUaW1lIiwicmVzdW1lR2FtZSIsIndpbnBvdCIsInVzZXJzT25ib2FyZCIsImNoaXBVc2VyT25Cb2FyZCIsInJlc3VsdCIsIndpbkNoaXAiLCJ1cGRhdGVUb3RhbEJldCIsInRvdGFsVXNlckJldCIsImFkZENoaXBUb1BvdCIsImxpc3RUeXBlUG90QmV0IiwibGlzdE15Q2hpcFBvdCIsImJpbmQiLCJ1c2VyQmV0IiwiQmV0RXZlbnQiLCJ1c2VyTmFtZSIsImJldENoaXAiLCJ0eXBlUG90IiwidG90YWxCZXQiLCJ1cGRhdGVMaXN0Q2hpcEJldCIsInJ1bkFjdGlvbkNoYW5nZU1vbmV5IiwiYWN0aW9uRmx5Q2hpcFRvUG90IiwiZ2V0VXNlckJ5TmFtZSIsInVwZGF0ZUNoaXAiLCJlbmRCZXR0aW5nIiwiRW5kQmV0dGluZyIsInNob3dSZXN1bHQiLCJoaXN0b3J5IiwiSGlzdG9yeVJlc3BvbnNlIiwic2hvd1NvaUNhdSIsIm9uSGlzdG9yeUV2ZW50IiwiaGlzdG9yeUV2ZW50IiwiSGlzdG9yeUV2ZW50Iiwic3JjIiwiZGF0YSIsIml0ZW1zIiwib25MZWFkZXJCb2FyZEV2ZW50IiwibGVhZGVyQm9hcmRFdmVudCIsIkxlYWRlckJvYXJkRXZlbnQiLCJvblB1YmxpY01lc3NhZ2UiLCJzZW5kZXIiLCJtc2ciLCJtZXNzYWdlIiwiZGF0YVNlbmRlciIsImRuIiwiZ2V0IiwiZmIiLCJtc2dJdGVtIiwiaW5zdGFuY2UiLCJnZXRJbnN0YW5jZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHQyxPQUFPLENBQUMsZUFBRCxDQUEzQjs7QUFDQSxJQUFJQyxrQkFBa0IsR0FBR0MsV0FBVyxDQUFDQyxjQUFaLENBQTJCQyxNQUEzQixDQUFrQztBQUN2REMsRUFBQUEsV0FBVyxFQUFHLElBRHlDO0FBRXZEQyxFQUFBQSxjQUZ1RCw0QkFFdkM7QUFDWixTQUFLQyxNQUFMOztBQUNBLFNBQUtDLFlBQUwsQ0FBa0JDLHlCQUFsQixDQUE0Q1YsYUFBYSxDQUFDVyxhQUFkLENBQTRCQyxhQUF4RSxFQUF1RixLQUFLQyxlQUE1RixFQUE2RyxJQUE3RztBQUNBLFNBQUtKLFlBQUwsQ0FBa0JDLHlCQUFsQixDQUE0Q1YsYUFBYSxDQUFDVyxhQUFkLENBQTRCRyxP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Q0FBNkJRLE9BQTdCO0FBQ0g7QUF4R3NELENBQWxDLENBQXpCO0FBMEdBLElBQUlDLFFBQVEsR0FBRyxJQUFmOztBQUNBLElBQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDMUIsTUFBR0QsUUFBUSxJQUFJLElBQWYsRUFDSUEsUUFBUSxHQUFHLElBQUluRyxrQkFBSixDQUF1QixZQUF2QixFQUFxQyxVQUFyQyxDQUFYO0FBQ0osU0FBT21HLFFBQVA7QUFDSCxDQUpEOztBQUtBbEcsV0FBVyxDQUFDRCxrQkFBWixHQUFpQ3FHLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkYsV0FBVyxFQUE3RCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFJvdWxldHRlRXZlbnQgPSByZXF1aXJlKCdSb3VsZXR0ZUV2ZW50JylcclxubGV0IFJvdWxldHRlQ29udHJvbGxlciA9IFNtYXJ0Rm94U0RLLkJhc2VDb250cm9sbGVyLmV4dGVuZCh7XHJcbiAgICBtX3RhYmxlSW5mbyA6IG51bGwsXHJcbiAgICByZWdpc3RlckV2ZW50cygpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UuYWRkRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihSb3VsZXR0ZUV2ZW50LlJFU1BPTlNFX05BTUUuTE9BRF9HQU1FX1JFUywgdGhpcy5vbkxvYWRHYW1lRXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUm91bGV0dGVFdmVudC5SRVNQT05TRV9OQU1FLkJFVF9SRVMsIHRoaXMub25Vc2VyQmV0RXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLmFkZEV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUm91bGV0dGVFdmVudC5SRVNQT05TRV9OQU1FLkVORF9CRVRUSU5HLCB0aGlzLm9uRW5kQmV0dGluZ0V2ZW50LCB0aGlzKTtcclxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5hZGRFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFJvdWxldHRlRXZlbnQuUkVTUE9OU0VfTkFNRS5ISVNUT1JZX1JFU1VMVCwgdGhpcy5vbkhpc3RvcnlSZXN1bHRFdmVudCwgdGhpcyk7XHJcbiAgICB9LFxyXG4gICAgcmVtb3ZlRXZlbnRzKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoKTtcclxuICAgICAgICB0aGlzLlpvbmVJbnN0YW5jZS5yZW1vdmVFdmVudExpc3RlbmVyRXh0ZW5zaW9uKFJvdWxldHRlRXZlbnQuUkVTUE9OU0VfTkFNRS5MT0FEX0dBTUVfUkVTLCB0aGlzLm9uTG9hZEdhbWVFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihSb3VsZXR0ZUV2ZW50LlJFU1BPTlNFX05BTUUuQkVUX1JFUywgdGhpcy5vblVzZXJCZXRFdmVudCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ab25lSW5zdGFuY2UucmVtb3ZlRXZlbnRMaXN0ZW5lckV4dGVuc2lvbihSb3VsZXR0ZUV2ZW50LlJFU1BPTlNFX05BTUUuRU5EX0JFVFRJTkcsIHRoaXMub25FbmRCZXR0aW5nRXZlbnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuWm9uZUluc3RhbmNlLnJlbW92ZUV2ZW50TGlzdGVuZXJFeHRlbnNpb24oUm91bGV0dGVFdmVudC5SRVNQT05TRV9OQU1FLkhJU1RPUllfUkVTVUxULCB0aGlzLm9uSGlzdG9yeVJlc3VsdEV2ZW50LCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBvbkV2ZW50TG9naW4oZXZlbnQpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKGV2ZW50KTtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0Sm9pblJvb20odGhpcy56b25lTmFtZSk7XHJcbiAgICB9LFxyXG4gICAgb25FdmVudFVzZXJFeGl0Um9vbShldmVudCl7XHJcbiAgICAgICAgbGV0IHVzZXIgPSBldmVudC51c2VyO1xyXG4gICAgICAgIGlmKHVzZXIuaXNJdE1lKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VUkoKSAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSSgpLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFVJTWFuZ2VyLnNob3coXCJVSUhvbWVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uTG9hZEdhbWVFdmVudChldmVudCl7XHJcbiAgICAgICAgdGhpcy5wcmVMb2FkVUkoe3BvcDogdHJ1ZX0sZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLm1fdGFibGVJbmZvID0gbmV3IFJvdWxldHRlRXZlbnQuTG9hZEdhbWVFdmVudCgpLmZyb21FdmVudChldmVudCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5oaWRlQWxsKCk7XHJcbiAgICAgICAgICAgIGxldCB1c2VycyA9IFtdO1xyXG4gICAgICAgICAgICB1c2Vycy5wdXNoKHRoaXMuWm9uZUluc3RhbmNlLm15U2VsZik7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdldFJvb20oKS5nZXRVc2VyTGlzdCgpLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgbGV0IHUgPSB0aGlzLmdldFJvb20oKS5nZXRVc2VyTGlzdCgpW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYodS5uYW1lICE9IHRoaXMuWm9uZUluc3RhbmNlLm15U2VsZi5uYW1lICYmIHVzZXJzLmxlbmd0aCA8IDYpe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJzLnB1c2godSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnNob3dMaXN0VXNlcnModXNlcnMpO1xyXG4gICAgICAgICAgICBpZih0aGlzLm1fdGFibGVJbmZvLmlzQmV0dGluZyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVJKCkuX3R1cm5PblRpbWUodGhpcy5tX3RhYmxlSW5mby50aW1lLCB0aGlzLm1fdGFibGVJbmZvLnRpbWUsIHRoaXMubV90YWJsZUluZm8uaXNCZXR0aW5nKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5zaG93Tm90aShcIkLhuq90IMSR4bqndSBjxrDhu6NjXCIpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5fdHVybk9mZlRpbWUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5fdHVybk9uVGltZSh0aGlzLm1fdGFibGVJbmZvLnRpbWUsIHRoaXMubV90YWJsZUluZm8udGltZSwgdGhpcy5tX3RhYmxlSW5mby5pc0JldHRpbmcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnJlc3VtZUdhbWUoIHRoaXMubV90YWJsZUluZm8ud2lucG90LCB0aGlzLm1fdGFibGVJbmZvLnRpbWUsIHRoaXMubV90YWJsZUluZm8udXNlcnNPbmJvYXJkLCB0aGlzLm1fdGFibGVJbmZvLmNoaXBVc2VyT25Cb2FyZCwgdGhpcy5tX3RhYmxlSW5mby5yZXN1bHQsICB0aGlzLm1fdGFibGVJbmZvLndpbkNoaXApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS51cGRhdGVUb3RhbEJldCh0aGlzLm1fdGFibGVJbmZvLnRvdGFsVXNlckJldCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS5hZGRDaGlwVG9Qb3QodGhpcy5tX3RhYmxlSW5mby5saXN0VHlwZVBvdEJldCwgdGhpcy5tX3RhYmxlSW5mby5saXN0TXlDaGlwUG90KTtcclxuICAgICAgICB9LmJpbmQodGhpcykpXHJcbiAgICB9LFxyXG4gICAgb25Vc2VyQmV0RXZlbnQoZXZlbnQpe1xyXG4gICAgICAgIGxldCB1c2VyQmV0ID0gbmV3IFJvdWxldHRlRXZlbnQuQmV0RXZlbnQoKS5mcm9tRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIGxldCB1c2VyTmFtZSA9IHVzZXJCZXQudXNlck5hbWU7XHJcbiAgICAgICAgbGV0IGJldENoaXAgPSB1c2VyQmV0LmJldENoaXA7XHJcbiAgICAgICAgbGV0IHR5cGVQb3QgPSB1c2VyQmV0LnR5cGVQb3Q7XHJcbiAgICAgICAgbGV0IHRvdGFsQmV0PSB1c2VyQmV0LnRvdGFsQmV0O1xyXG4gICAgICAgIGlmKHRoaXMuWm9uZUluc3RhbmNlLm15U2VsZi5uYW1lID09IHVzZXJOYW1lKXtcclxuICAgICAgICAgICAgdGhpcy5nZXRVSSgpLnVwZGF0ZUxpc3RDaGlwQmV0KHVzZXJCZXQudHlwZVBvdCwgdXNlckJldC5iZXRDaGlwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRVSSgpLnVwZGF0ZVRvdGFsQmV0KHRvdGFsQmV0KTtcclxuICAgICAgICB0aGlzLmdldFVJKCkucnVuQWN0aW9uQ2hhbmdlTW9uZXkodXNlck5hbWUsIC1iZXRDaGlwLCAxKTtcclxuICAgICAgICB0aGlzLmdldFVJKCkuYWN0aW9uRmx5Q2hpcFRvUG90KHVzZXJOYW1lLCB0eXBlUG90LCBiZXRDaGlwKTtcclxuICAgICAgICBsZXQgdXNlciA9IHRoaXMuZ2V0Um9vbSgpLmdldFVzZXJCeU5hbWUodXNlck5hbWUpO1xyXG4gICAgICAgIGlmKHVzZXIpXHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VUkoKS51cGRhdGVDaGlwKHVzZXIpO1xyXG4gICAgfSxcclxuICAgIG9uRW5kQmV0dGluZ0V2ZW50KGV2ZW50KXtcclxuICAgICAgICBsZXQgZW5kQmV0dGluZyA9IG5ldyBSb3VsZXR0ZUV2ZW50LkVuZEJldHRpbmcoKS5mcm9tRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMubV90YWJsZUluZm8uaXNCZXR0aW5nICAgICAgID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5jaGlwVXNlck9uQm9hcmQgPSBlbmRCZXR0aW5nLmNoaXBVc2VyT25Cb2FyZDtcclxuICAgICAgICB0aGlzLm1fdGFibGVJbmZvLnVzZXJzT25ib2FyZCAgICA9IGVuZEJldHRpbmcudXNlcnNPbmJvYXJkO1xyXG4gICAgICAgIHRoaXMubV90YWJsZUluZm8ud2lucG90ICAgICAgICAgID0gZW5kQmV0dGluZy53aW5wb3Q7XHJcbiAgICAgICAgdGhpcy5tX3RhYmxlSW5mby53aW5DaGlwICAgICAgICAgPSBlbmRCZXR0aW5nLndpbkNoaXA7XHJcbiAgICAgICAgdGhpcy5tX3RhYmxlSW5mby5yZXN1bHQgICAgICAgICAgPSBlbmRCZXR0aW5nLnJlc3VsdDtcclxuICAgICAgICB0aGlzLmdldFVJKCkuX3R1cm5PZmZUaW1lKCk7XHJcbiAgICAgICAgdGhpcy5nZXRVSSgpLl90dXJuT25UaW1lKDIwLCAyMCwgdGhpcy5tX3RhYmxlSW5mby5pc0JldHRpbmcpO1xyXG4gICAgICAgIHRoaXMuZ2V0VUkoKS5zaG93Tm90aShcIkvhur90IHRow7pjIGPGsOG7o2MhXCIpO1xyXG4gICAgICAgIHRoaXMuZ2V0VUkoKS5zaG93UmVzdWx0KHRoaXMubV90YWJsZUluZm8ucmVzdWx0KTtcclxuICAgIH0sXHJcbiAgICBvbkhpc3RvcnlSZXN1bHRFdmVudChldmVudCl7XHJcbiAgICAgICAgbGV0IGhpc3RvcnkgPSBuZXcgUm91bGV0dGVFdmVudC5IaXN0b3J5UmVzcG9uc2UoKS5mcm9tRXZlbnQoZXZlbnQpO1xyXG4gICAgICAgIHRoaXMuZ2V0VUkoKS5zaG93U29pQ2F1KGhpc3RvcnkucmVzdWx0KTtcclxuICAgIH0sXHJcbiAgICBvbkhpc3RvcnlFdmVudChldmVudCl7XHJcbiAgICAgICAgbGV0IGhpc3RvcnlFdmVudCA9IG5ldyBSb3VsZXR0ZUV2ZW50Lkhpc3RvcnlFdmVudCgpLmZyb21FdmVudChldmVudCk7XHJcbiAgICAgICAgdGhpcy5nZXRVSSgpLnNob3coXCJVSVJvdWxldHRlVHJhbnNhY3Rpb25cIiwge3BvcDogdHJ1ZSwgc3JjOiAncm91bGV0dGUnLCBkYXRhOiB7aXRlbXM6IGhpc3RvcnlFdmVudC5pdGVtc319KTtcclxuICAgIH0sXHJcbiAgICBvbkxlYWRlckJvYXJkRXZlbnQoZXZlbnQpe1xyXG4gICAgICAgIGxldCBsZWFkZXJCb2FyZEV2ZW50ID0gbmV3IFJvdWxldHRlRXZlbnQuTGVhZGVyQm9hcmRFdmVudCgpLmZyb21FdmVudChldmVudCk7XHJcbiAgICAgICAgdGhpcy5nZXRVSSgpLnNob3coXCJVSVJvdWxldHRlUmFua1wiLCB7cG9wOiB0cnVlLCBzcmM6ICdyb3VsZXR0ZScsIGRhdGE6IHtpdGVtczogbGVhZGVyQm9hcmRFdmVudC5pdGVtc319KTtcclxuICAgIH0sXHJcbiAgICBvblB1YmxpY01lc3NhZ2UoZXZlbnQpe1xyXG4gICAgICAgIGxldCBzZW5kZXIgPSBldmVudC5zZW5kZXI7XHJcbiAgICAgICAgbGV0IG1zZyA9IGV2ZW50Lm1lc3NhZ2U7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBldmVudC5kYXRhO1xyXG4gICAgICAgIGxldCBkYXRhU2VuZGVyID0gZGF0YSAhPSBudWxsID8ge2RuOiBkYXRhLmdldChcImRuXCIpLCBmYiA6IGRhdGEuZ2V0KFwiZmJcIil9IDoge2RuOiBcIi4uLlwiLCBmYiA6IFwiXCJ9O1xyXG4gICAgICAgIGxldCBtc2dJdGVtID0ge307XHJcbiAgICAgICAgbXNnSXRlbS5zZW5kZXIgPSBzZW5kZXI7XHJcbiAgICAgICAgbXNnSXRlbS5tc2cgPSBtc2c7XHJcbiAgICAgICAgbXNnSXRlbS5kYXRhU2VuZGVyID0gZGF0YVNlbmRlcjtcclxuICAgICAgICB0aGlzLmdldFVJKCkub25QdWJsaWNNZXNzYWdlKG1zZ0l0ZW0pO1xyXG4gICAgfSxcclxufSk7XHJcbmxldCBpbnN0YW5jZSA9IG51bGw7XHJcbmxldCBnZXRJbnN0YW5jZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmKGluc3RhbmNlID09IG51bGwpXHJcbiAgICAgICAgaW5zdGFuY2UgPSBuZXcgUm91bGV0dGVDb250cm9sbGVyKCdVSVJvdWxldHRlJywgJ3JvdWxldHRlJyk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuU21hcnRGb3hTREsuUm91bGV0dGVDb250cm9sbGVyID0gbW9kdWxlLmV4cG9ydHMgPSBnZXRJbnN0YW5jZSgpO1xyXG4iXX0=
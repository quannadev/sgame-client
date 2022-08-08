
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/GameVariables.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dab1dtwfGhKk75h/GdyA21b', 'GameVariables');
// scripts/GameVariables.js

"use strict";

var GameVariables = {};
GameVariables.Poker = {};

GameVariables.Poker.getChip = function (user) {
  if (!(user instanceof SmartFoxSDK.SmartFox.Entities.User)) return 0;
  if (user && user.getVariable("chip")) return user.getVariable("chip").value;
  return 0;
};

GameVariables.Poker.getDisplayName = function (user) {
  if (!(user instanceof SmartFoxSDK.SmartFox.Entities.User)) return "";
  if (user && user.getVariable("dn")) return user.getVariable("dn").value;
  return "";
};

GameVariables.Poker.getBetChip = function (room) {
  return room.getVariable("bet_chip").value;
};

GameVariables.Poker.getMinBuyIn = function (room) {
  return room.getVariable("min_chip").value;
};

GameVariables.Poker.getMaxBuyIn = function (room) {
  return room.getVariable("max_chip").value;
};

GameVariables.Poker.getNumberDesk = function (room) {
  return room.getVariable("number_desk").value;
};

GameVariables.getBetChip = function (room) {
  return room.getVariable("bet_chip").value;
};

GameVariables.getChip = function (user) {
  if (!(user instanceof SmartFoxSDK.SmartFox.Entities.User)) return 0;
  if (user && user.getVariable("chip")) return user.getVariable("chip").value;
  return 0;
};

GameVariables.getDisplayName = function (user) {
  if (!(user instanceof SmartFoxSDK.SmartFox.Entities.User)) return "";
  if (user && user.getVariable("dn")) return user.getVariable("dn").value;
  return "";
};

GameVariables.getAccount = function (user) {
  if (!(user instanceof SmartFoxSDK.SmartFox.Entities.User)) return "....";
  if (user && user.getVariable("ac")) return user.getVariable("ac").value;
  return "....";
};

GameVariables.setChip = function (chip, user) {
  if (chip && user instanceof SmartFoxSDK.SmartFox.Entities.User) {
    var uv = new SmartFoxSDK.SmartFox.Entities.Variables.UserVariable("chip", chip, SmartFoxSDK.SmartFox.Entities.Variables.VariableType.DOUBLE);

    user._setVariable(uv);
  }
};

window.GameVariables = GameVariables;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVWYXJpYWJsZXMuanMiXSwibmFtZXMiOlsiR2FtZVZhcmlhYmxlcyIsIlBva2VyIiwiZ2V0Q2hpcCIsInVzZXIiLCJTbWFydEZveFNESyIsIlNtYXJ0Rm94IiwiRW50aXRpZXMiLCJVc2VyIiwiZ2V0VmFyaWFibGUiLCJ2YWx1ZSIsImdldERpc3BsYXlOYW1lIiwiZ2V0QmV0Q2hpcCIsInJvb20iLCJnZXRNaW5CdXlJbiIsImdldE1heEJ1eUluIiwiZ2V0TnVtYmVyRGVzayIsImdldEFjY291bnQiLCJzZXRDaGlwIiwiY2hpcCIsInV2IiwiVmFyaWFibGVzIiwiVXNlclZhcmlhYmxlIiwiVmFyaWFibGVUeXBlIiwiRE9VQkxFIiwiX3NldFZhcmlhYmxlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBRyxFQUFwQjtBQUNBQSxhQUFhLENBQUNDLEtBQWQsR0FBc0IsRUFBdEI7O0FBQ0FELGFBQWEsQ0FBQ0MsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsVUFBU0MsSUFBVCxFQUFjO0FBQ3hDLE1BQUcsRUFBRUEsSUFBSSxZQUFZQyxXQUFXLENBQUNDLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxJQUFoRCxDQUFILEVBQ0ksT0FBTyxDQUFQO0FBQ0osTUFBR0osSUFBSSxJQUFJQSxJQUFJLENBQUNLLFdBQUwsQ0FBaUIsTUFBakIsQ0FBWCxFQUNJLE9BQU9MLElBQUksQ0FBQ0ssV0FBTCxDQUFpQixNQUFqQixFQUF5QkMsS0FBaEM7QUFDSixTQUFPLENBQVA7QUFDSCxDQU5EOztBQU9BVCxhQUFhLENBQUNDLEtBQWQsQ0FBb0JTLGNBQXBCLEdBQXFDLFVBQVNQLElBQVQsRUFBYztBQUMvQyxNQUFHLEVBQUVBLElBQUksWUFBWUMsV0FBVyxDQUFDQyxRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsSUFBaEQsQ0FBSCxFQUNJLE9BQU8sRUFBUDtBQUNKLE1BQUdKLElBQUks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QThCYyxTQUE5QixDQUF3Q0UsWUFBeEMsQ0FBcURDLE1BQTVILENBQVQ7O0FBQ0FwQixJQUFBQSxJQUFJLENBQUNxQixZQUFMLENBQWtCTCxFQUFsQjtBQUNIO0FBQ0osQ0FMRDs7QUFNQU0sTUFBTSxDQUFDekIsYUFBUCxHQUF1QkEsYUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBHYW1lVmFyaWFibGVzID0ge307XG5HYW1lVmFyaWFibGVzLlBva2VyID0ge307XG5HYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAgPSBmdW5jdGlvbih1c2VyKXtcbiAgICBpZighKHVzZXIgaW5zdGFuY2VvZiBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5Vc2VyKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYodXNlciAmJiB1c2VyLmdldFZhcmlhYmxlKFwiY2hpcFwiKSlcbiAgICAgICAgcmV0dXJuIHVzZXIuZ2V0VmFyaWFibGUoXCJjaGlwXCIpLnZhbHVlO1xuICAgIHJldHVybiAwO1xufVxuR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uKHVzZXIpe1xuICAgIGlmKCEodXNlciBpbnN0YW5jZW9mIFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkVudGl0aWVzLlVzZXIpKVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICBpZih1c2VyICYmIHVzZXIuZ2V0VmFyaWFibGUoXCJkblwiKSlcbiAgICAgICAgcmV0dXJuIHVzZXIuZ2V0VmFyaWFibGUoXCJkblwiKS52YWx1ZTtcbiAgICByZXR1cm4gXCJcIjtcbn1cbkdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0QmV0Q2hpcCA9IGZ1bmN0aW9uKHJvb20pe1xuICAgIHJldHVybiByb29tLmdldFZhcmlhYmxlKFwiYmV0X2NoaXBcIikudmFsdWU7XG59XG5HYW1lVmFyaWFibGVzLlBva2VyLmdldE1pbkJ1eUluID0gZnVuY3Rpb24ocm9vbSl7XG4gICAgcmV0dXJuIHJvb20uZ2V0VmFyaWFibGUoXCJtaW5fY2hpcFwiKS52YWx1ZTtcbn1cbkdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0TWF4QnV5SW4gPSBmdW5jdGlvbihyb29tKXtcbiAgICByZXR1cm4gcm9vbS5nZXRWYXJpYWJsZShcIm1heF9jaGlwXCIpLnZhbHVlO1xufVxuR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXROdW1iZXJEZXNrID0gZnVuY3Rpb24ocm9vbSl7XG4gICAgcmV0dXJuIHJvb20uZ2V0VmFyaWFibGUoXCJudW1iZXJfZGVza1wiKS52YWx1ZTtcbn1cbkdhbWVWYXJpYWJsZXMuZ2V0QmV0Q2hpcCA9IGZ1bmN0aW9uKHJvb20pe1xuICAgIHJldHVybiByb29tLmdldFZhcmlhYmxlKFwiYmV0X2NoaXBcIikudmFsdWU7XG59XG5HYW1lVmFyaWFibGVzLmdldENoaXAgPSBmdW5jdGlvbih1c2VyKXtcbiAgICBpZighKHVzZXIgaW5zdGFuY2VvZiBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5Vc2VyKSkgcmV0dXJuIDA7XG4gICAgaWYodXNlciAmJiB1c2VyLmdldFZhcmlhYmxlKFwiY2hpcFwiKSlcbiAgICAgICAgcmV0dXJuIHVzZXIuZ2V0VmFyaWFibGUoXCJjaGlwXCIpLnZhbHVlO1xuICAgIHJldHVybiAwO1xufVxuR2FtZVZhcmlhYmxlcy5nZXREaXNwbGF5TmFtZSA9IGZ1bmN0aW9uKHVzZXIpe1xuICAgIGlmKCEodXNlciBpbnN0YW5jZW9mIFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkVudGl0aWVzLlVzZXIpKVxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICBpZih1c2VyICYmIHVzZXIuZ2V0VmFyaWFibGUoXCJkblwiKSlcbiAgICAgICAgcmV0dXJuIHVzZXIuZ2V0VmFyaWFibGUoXCJkblwiKS52YWx1ZTtcbiAgICByZXR1cm4gXCJcIjtcbn1cbkdhbWVWYXJpYWJsZXMuZ2V0QWNjb3VudCA9IGZ1bmN0aW9uKHVzZXIpe1xuICAgIGlmKCEodXNlciBpbnN0YW5jZW9mIFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkVudGl0aWVzLlVzZXIpKSByZXR1cm4gXCIuLi4uXCI7XG4gICAgaWYodXNlciAmJiB1c2VyLmdldFZhcmlhYmxlKFwiYWNcIikpXG4gICAgICAgIHJldHVybiB1c2VyLmdldFZhcmlhYmxlKFwiYWNcIikudmFsdWU7XG4gICAgcmV0dXJuIFwiLi4uLlwiO1xufVxuR2FtZVZhcmlhYmxlcy5zZXRDaGlwID0gZnVuY3Rpb24oY2hpcCwgdXNlcil7XG4gICAgaWYoY2hpcCAmJiB1c2VyIGluc3RhbmNlb2YgU21hcnRGb3hTREsuU21hcnRGb3guRW50aXRpZXMuVXNlcil7XG4gICAgICAgIGxldCB1diA9IG5ldyBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5WYXJpYWJsZXMuVXNlclZhcmlhYmxlKFwiY2hpcFwiLCBjaGlwLCBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5WYXJpYWJsZXMuVmFyaWFibGVUeXBlLkRPVUJMRSk7XG4gICAgICAgIHVzZXIuX3NldFZhcmlhYmxlKHV2KTtcbiAgICB9XG59XG53aW5kb3cuR2FtZVZhcmlhYmxlcyA9IEdhbWVWYXJpYWJsZXM7XG4iXX0=
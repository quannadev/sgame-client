
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

GameVariables.Poker.getUserJson = function (user) {
  if (!(user instanceof SmartFoxSDK.SmartFox.Entities.User)) return {};
  return {
    "amount": this.getChip(user),
    "id": user.id,
    "username": user.username
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL0dhbWVWYXJpYWJsZXMuanMiXSwibmFtZXMiOlsiR2FtZVZhcmlhYmxlcyIsIlBva2VyIiwiZ2V0Q2hpcCIsInVzZXIiLCJTbWFydEZveFNESyIsIlNtYXJ0Rm94IiwiRW50aXRpZXMiLCJVc2VyIiwiZ2V0VmFyaWFibGUiLCJ2YWx1ZSIsImdldFVzZXJKc29uIiwiaWQiLCJ1c2VybmFtZSIsImdldERpc3BsYXlOYW1lIiwiZ2V0QmV0Q2hpcCIsInJvb20iLCJnZXRNaW5CdXlJbiIsImdldE1heEJ1eUluIiwiZ2V0TnVtYmVyRGVzayIsImdldEFjY291bnQiLCJzZXRDaGlwIiwiY2hpcCIsInV2IiwiVmFyaWFibGVzIiwiVXNlclZhcmlhYmxlIiwiVmFyaWFibGVUeXBlIiwiRE9VQkxFIiwiX3NldFZhcmlhYmxlIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBRyxFQUFwQjtBQUNBQSxhQUFhLENBQUNDLEtBQWQsR0FBc0IsRUFBdEI7O0FBQ0FELGFBQWEsQ0FBQ0MsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsVUFBU0MsSUFBVCxFQUFjO0FBQ3hDLE1BQUcsRUFBRUEsSUFBSSxZQUFZQyxXQUFXLENBQUNDLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxJQUFoRCxDQUFILEVBQ0ksT0FBTyxDQUFQO0FBQ0osTUFBR0osSUFBSSxJQUFJQSxJQUFJLENBQUNLLFdBQUwsQ0FBaUIsTUFBakIsQ0FBWCxFQUNJLE9BQU9MLElBQUksQ0FBQ0ssV0FBTCxDQUFpQixNQUFqQixFQUF5QkMsS0FBaEM7QUFDSixTQUFPLENBQVA7QUFDSCxDQU5EOztBQU9BVCxhQUFhLENBQUNDLEtBQWQsQ0FBb0JTLFdBQXBCLEdBQWtDLFVBQVNQLElBQVQsRUFBZTtBQUM3QyxNQUFHLEVBQUVBLElBQUksWUFBWUMsV0FBVyxDQUFDQyxRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsSUFBaEQsQ0FBSCxF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LE1BQVA7QUFDSCxDQUxEOztBQU1BVCxhQUFhLENBQUNvQixPQUFkLEdBQXdCLFVBQVNDLElBQVQsRUFBZWxCLElBQWYsRUFBb0I7QUFDeEMsTUFBR2tCLElBQUksSUFBSWxCLElBQUksWUFBWUMsV0FBVyxDQUFDQyxRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsSUFBekQsRUFBOEQ7QUFDMUQsUUFBSWUsRUFBRSxHQUFHLElBQUlsQixXQUFXLENBQUNDLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCaUIsU0FBOUIsQ0FBd0NDLFlBQTVDLENBQXlELE1BQXpELEVBQWlFSCxJQUFqRSxFQUF1RWpCLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQkMsUUFBckIsQ0FBOEJpQixTQUE5QixDQUF3Q0UsWUFBeEMsQ0FBcURDLE1BQTVILENBQVQ7O0FBQ0F2QixJQUFBQSxJQUFJLENBQUN3QixZQUFMLENBQWtCTCxFQUFsQjtBQUNIO0FBQ0osQ0FMRDs7QUFNQU0sTUFBTSxDQUFDNUIsYUFBUCxHQUF1QkEsYUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBHYW1lVmFyaWFibGVzID0ge307XG5HYW1lVmFyaWFibGVzLlBva2VyID0ge307XG5HYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAgPSBmdW5jdGlvbih1c2VyKXtcbiAgICBpZighKHVzZXIgaW5zdGFuY2VvZiBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5Vc2VyKSlcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgaWYodXNlciAmJiB1c2VyLmdldFZhcmlhYmxlKFwiY2hpcFwiKSlcbiAgICAgICAgcmV0dXJuIHVzZXIuZ2V0VmFyaWFibGUoXCJjaGlwXCIpLnZhbHVlO1xuICAgIHJldHVybiAwO1xufVxuR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRVc2VySnNvbiA9IGZ1bmN0aW9uKHVzZXIpIHtcbiAgICBpZighKHVzZXIgaW5zdGFuY2VvZiBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5Vc2VyKSlcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIHJldHVybiB7XCJhbW91bnRcIjogdGhpcy5nZXRDaGlwKHVzZXIpLCBcImlkXCI6IHVzZXIuaWQsIFwidXNlcm5hbWVcIjogdXNlci51c2VybmFtZX07XG59XG5HYW1lVmFyaWFibGVzLlBva2VyLmdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24odXNlcil7XG4gICAgaWYoISh1c2VyIGluc3RhbmNlb2YgU21hcnRGb3hTREsuU21hcnRGb3guRW50aXRpZXMuVXNlcikpXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIGlmKHVzZXIgJiYgdXNlci5nZXRWYXJpYWJsZShcImRuXCIpKVxuICAgICAgICByZXR1cm4gdXNlci5nZXRWYXJpYWJsZShcImRuXCIpLnZhbHVlO1xuICAgIHJldHVybiBcIlwiO1xufVxuR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRCZXRDaGlwID0gZnVuY3Rpb24ocm9vbSl7XG4gICAgcmV0dXJuIHJvb20uZ2V0VmFyaWFibGUoXCJiZXRfY2hpcFwiKS52YWx1ZTtcbn1cbkdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0TWluQnV5SW4gPSBmdW5jdGlvbihyb29tKXtcbiAgICByZXR1cm4gcm9vbS5nZXRWYXJpYWJsZShcIm1pbl9jaGlwXCIpLnZhbHVlO1xufVxuR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRNYXhCdXlJbiA9IGZ1bmN0aW9uKHJvb20pe1xuICAgIHJldHVybiByb29tLmdldFZhcmlhYmxlKFwibWF4X2NoaXBcIikudmFsdWU7XG59XG5HYW1lVmFyaWFibGVzLlBva2VyLmdldE51bWJlckRlc2sgPSBmdW5jdGlvbihyb29tKXtcbiAgICByZXR1cm4gcm9vbS5nZXRWYXJpYWJsZShcIm51bWJlcl9kZXNrXCIpLnZhbHVlO1xufVxuR2FtZVZhcmlhYmxlcy5nZXRCZXRDaGlwID0gZnVuY3Rpb24ocm9vbSl7XG4gICAgcmV0dXJuIHJvb20uZ2V0VmFyaWFibGUoXCJiZXRfY2hpcFwiKS52YWx1ZTtcbn1cbkdhbWVWYXJpYWJsZXMuZ2V0Q2hpcCA9IGZ1bmN0aW9uKHVzZXIpe1xuICAgIGlmKCEodXNlciBpbnN0YW5jZW9mIFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkVudGl0aWVzLlVzZXIpKSByZXR1cm4gMDtcbiAgICBpZih1c2VyICYmIHVzZXIuZ2V0VmFyaWFibGUoXCJjaGlwXCIpKVxuICAgICAgICByZXR1cm4gdXNlci5nZXRWYXJpYWJsZShcImNoaXBcIikudmFsdWU7XG4gICAgcmV0dXJuIDA7XG59XG5HYW1lVmFyaWFibGVzLmdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24odXNlcil7XG4gICAgaWYoISh1c2VyIGluc3RhbmNlb2YgU21hcnRGb3hTREsuU21hcnRGb3guRW50aXRpZXMuVXNlcikpXG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIGlmKHVzZXIgJiYgdXNlci5nZXRWYXJpYWJsZShcImRuXCIpKVxuICAgICAgICByZXR1cm4gdXNlci5nZXRWYXJpYWJsZShcImRuXCIpLnZhbHVlO1xuICAgIHJldHVybiBcIlwiO1xufVxuR2FtZVZhcmlhYmxlcy5nZXRBY2NvdW50ID0gZnVuY3Rpb24odXNlcil7XG4gICAgaWYoISh1c2VyIGluc3RhbmNlb2YgU21hcnRGb3hTREsuU21hcnRGb3guRW50aXRpZXMuVXNlcikpIHJldHVybiBcIi4uLi5cIjtcbiAgICBpZih1c2VyICYmIHVzZXIuZ2V0VmFyaWFibGUoXCJhY1wiKSlcbiAgICAgICAgcmV0dXJuIHVzZXIuZ2V0VmFyaWFibGUoXCJhY1wiKS52YWx1ZTtcbiAgICByZXR1cm4gXCIuLi4uXCI7XG59XG5HYW1lVmFyaWFibGVzLnNldENoaXAgPSBmdW5jdGlvbihjaGlwLCB1c2VyKXtcbiAgICBpZihjaGlwICYmIHVzZXIgaW5zdGFuY2VvZiBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5Vc2VyKXtcbiAgICAgICAgbGV0IHV2ID0gbmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkVudGl0aWVzLlZhcmlhYmxlcy5Vc2VyVmFyaWFibGUoXCJjaGlwXCIsIGNoaXAsIFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkVudGl0aWVzLlZhcmlhYmxlcy5WYXJpYWJsZVR5cGUuRE9VQkxFKTtcbiAgICAgICAgdXNlci5fc2V0VmFyaWFibGUodXYpO1xuICAgIH1cbn1cbndpbmRvdy5HYW1lVmFyaWFibGVzID0gR2FtZVZhcmlhYmxlcztcbiJdfQ==
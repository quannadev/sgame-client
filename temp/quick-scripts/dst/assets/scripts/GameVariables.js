
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZVZhcmlhYmxlcy5qcyJdLCJuYW1lcyI6WyJHYW1lVmFyaWFibGVzIiwiUG9rZXIiLCJnZXRDaGlwIiwidXNlciIsIlNtYXJ0Rm94U0RLIiwiU21hcnRGb3giLCJFbnRpdGllcyIsIlVzZXIiLCJnZXRWYXJpYWJsZSIsInZhbHVlIiwiZ2V0RGlzcGxheU5hbWUiLCJnZXRCZXRDaGlwIiwicm9vbSIsImdldE1pbkJ1eUluIiwiZ2V0TWF4QnV5SW4iLCJnZXROdW1iZXJEZXNrIiwiZ2V0QWNjb3VudCIsInNldENoaXAiLCJjaGlwIiwidXYiLCJWYXJpYWJsZXMiLCJVc2VyVmFyaWFibGUiLCJWYXJpYWJsZVR5cGUiLCJET1VCTEUiLCJfc2V0VmFyaWFibGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGFBQWEsQ0FBQ0MsS0FBZCxHQUFzQixFQUF0Qjs7QUFDQUQsYUFBYSxDQUFDQyxLQUFkLENBQW9CQyxPQUFwQixHQUE4QixVQUFTQyxJQUFULEVBQWM7QUFDeEMsTUFBRyxFQUFFQSxJQUFJLFlBQVlDLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQkMsUUFBckIsQ0FBOEJDLElBQWhELENBQUgsRUFDSSxPQUFPLENBQVA7QUFDSixNQUFHSixJQUFJLElBQUlBLElBQUksQ0FBQ0ssV0FBTCxDQUFpQixNQUFqQixDQUFYLEVBQ0ksT0FBT0wsSUFBSSxDQUFDSyxXQUFMLENBQWlCLE1BQWpCLEVBQXlCQyxLQUFoQztBQUNKLFNBQU8sQ0FBUDtBQUNILENBTkQ7O0FBT0FULGFBQWEsQ0FBQ0MsS0FBZCxDQUFvQlMsY0FBcEIsR0FBcUMsVUFBU1AsSUFBVCxFQUFjO0FBQy9DLE1BQUcsRUFBRUEsSUFBSSxZQUFZQyxXQUFXLENBQUNDLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxJQUFoRCxDQUFILEVBQ0ksT0FBTyxFQUFQO0FBQ0osTUFBR0osSUFB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Q0FBOEJjLFNBQTlCLENBQXdDRSxZQUF4QyxDQUFxREMsTUFBNUgsQ0FBVDs7QUFDQXBCLElBQUFBLElBQUksQ0FBQ3FCLFlBQUwsQ0FBa0JMLEVBQWxCO0FBQ0g7QUFDSixDQUxEOztBQU1BTSxNQUFNLENBQUN6QixhQUFQLEdBQXVCQSxhQUF2QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IEdhbWVWYXJpYWJsZXMgPSB7fTtcclxuR2FtZVZhcmlhYmxlcy5Qb2tlciA9IHt9O1xyXG5HYW1lVmFyaWFibGVzLlBva2VyLmdldENoaXAgPSBmdW5jdGlvbih1c2VyKXtcclxuICAgIGlmKCEodXNlciBpbnN0YW5jZW9mIFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkVudGl0aWVzLlVzZXIpKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgaWYodXNlciAmJiB1c2VyLmdldFZhcmlhYmxlKFwiY2hpcFwiKSlcclxuICAgICAgICByZXR1cm4gdXNlci5nZXRWYXJpYWJsZShcImNoaXBcIikudmFsdWU7XHJcbiAgICByZXR1cm4gMDtcclxufVxyXG5HYW1lVmFyaWFibGVzLlBva2VyLmdldERpc3BsYXlOYW1lID0gZnVuY3Rpb24odXNlcil7XHJcbiAgICBpZighKHVzZXIgaW5zdGFuY2VvZiBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5Vc2VyKSlcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIGlmKHVzZXIgJiYgdXNlci5nZXRWYXJpYWJsZShcImRuXCIpKVxyXG4gICAgICAgIHJldHVybiB1c2VyLmdldFZhcmlhYmxlKFwiZG5cIikudmFsdWU7XHJcbiAgICByZXR1cm4gXCJcIjtcclxufVxyXG5HYW1lVmFyaWFibGVzLlBva2VyLmdldEJldENoaXAgPSBmdW5jdGlvbihyb29tKXtcclxuICAgIHJldHVybiByb29tLmdldFZhcmlhYmxlKFwiYmV0X2NoaXBcIikudmFsdWU7XHJcbn1cclxuR2FtZVZhcmlhYmxlcy5Qb2tlci5nZXRNaW5CdXlJbiA9IGZ1bmN0aW9uKHJvb20pe1xyXG4gICAgcmV0dXJuIHJvb20uZ2V0VmFyaWFibGUoXCJtaW5fY2hpcFwiKS52YWx1ZTtcclxufVxyXG5HYW1lVmFyaWFibGVzLlBva2VyLmdldE1heEJ1eUluID0gZnVuY3Rpb24ocm9vbSl7XHJcbiAgICByZXR1cm4gcm9vbS5nZXRWYXJpYWJsZShcIm1heF9jaGlwXCIpLnZhbHVlO1xyXG59XHJcbkdhbWVWYXJpYWJsZXMuUG9rZXIuZ2V0TnVtYmVyRGVzayA9IGZ1bmN0aW9uKHJvb20pe1xyXG4gICAgcmV0dXJuIHJvb20uZ2V0VmFyaWFibGUoXCJudW1iZXJfZGVza1wiKS52YWx1ZTtcclxufVxyXG5HYW1lVmFyaWFibGVzLmdldEJldENoaXAgPSBmdW5jdGlvbihyb29tKXtcclxuICAgIHJldHVybiByb29tLmdldFZhcmlhYmxlKFwiYmV0X2NoaXBcIikudmFsdWU7XHJcbn1cclxuR2FtZVZhcmlhYmxlcy5nZXRDaGlwID0gZnVuY3Rpb24odXNlcil7XHJcbiAgICBpZighKHVzZXIgaW5zdGFuY2VvZiBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5Vc2VyKSkgcmV0dXJuIDA7XHJcbiAgICBpZih1c2VyICYmIHVzZXIuZ2V0VmFyaWFibGUoXCJjaGlwXCIpKVxyXG4gICAgICAgIHJldHVybiB1c2VyLmdldFZhcmlhYmxlKFwiY2hpcFwiKS52YWx1ZTtcclxuICAgIHJldHVybiAwO1xyXG59XHJcbkdhbWVWYXJpYWJsZXMuZ2V0RGlzcGxheU5hbWUgPSBmdW5jdGlvbih1c2VyKXtcclxuICAgIGlmKCEodXNlciBpbnN0YW5jZW9mIFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LkVudGl0aWVzLlVzZXIpKVxyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgaWYodXNlciAmJiB1c2VyLmdldFZhcmlhYmxlKFwiZG5cIikpXHJcbiAgICAgICAgcmV0dXJuIHVzZXIuZ2V0VmFyaWFibGUoXCJkblwiKS52YWx1ZTtcclxuICAgIHJldHVybiBcIlwiO1xyXG59XHJcbkdhbWVWYXJpYWJsZXMuZ2V0QWNjb3VudCA9IGZ1bmN0aW9uKHVzZXIpe1xyXG4gICAgaWYoISh1c2VyIGluc3RhbmNlb2YgU21hcnRGb3hTREsuU21hcnRGb3guRW50aXRpZXMuVXNlcikpIHJldHVybiBcIi4uLi5cIjtcclxuICAgIGlmKHVzZXIgJiYgdXNlci5nZXRWYXJpYWJsZShcImFjXCIpKVxyXG4gICAgICAgIHJldHVybiB1c2VyLmdldFZhcmlhYmxlKFwiYWNcIikudmFsdWU7XHJcbiAgICByZXR1cm4gXCIuLi4uXCI7XHJcbn1cclxuR2FtZVZhcmlhYmxlcy5zZXRDaGlwID0gZnVuY3Rpb24oY2hpcCwgdXNlcil7XHJcbiAgICBpZihjaGlwICYmIHVzZXIgaW5zdGFuY2VvZiBTbWFydEZveFNESy5TbWFydEZveC5FbnRpdGllcy5Vc2VyKXtcclxuICAgICAgICBsZXQgdXYgPSBuZXcgU21hcnRGb3hTREsuU21hcnRGb3guRW50aXRpZXMuVmFyaWFibGVzLlVzZXJWYXJpYWJsZShcImNoaXBcIiwgY2hpcCwgU21hcnRGb3hTREsuU21hcnRGb3guRW50aXRpZXMuVmFyaWFibGVzLlZhcmlhYmxlVHlwZS5ET1VCTEUpO1xyXG4gICAgICAgIHVzZXIuX3NldFZhcmlhYmxlKHV2KTtcclxuICAgIH1cclxufVxyXG53aW5kb3cuR2FtZVZhcmlhYmxlcyA9IEdhbWVWYXJpYWJsZXM7XHJcbiJdfQ==
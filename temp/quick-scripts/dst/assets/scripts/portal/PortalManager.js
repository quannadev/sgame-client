
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/PortalManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa39e/ZFQ5OvqWAEZkxOiaz', 'PortalManager');
// scripts/portal/PortalManager.js

"use strict";

var PortalManager = {};

PortalManager.getGameController = function (game) {
  if (game == "portal") {
    return SmartFoxSDK.PortalController;
  } else if (game == "poker") {
    return SmartFoxSDK.PokerController;
  } else if (game == "tlmn") {
    return SmartFoxSDK.TLMNController;
  } else if (game == "bacay") {
    return SmartFoxSDK.BaCayController;
  } else if (game == "maubinh") {
    return SmartFoxSDK.MauBinhController;
  } else if (game == "kimcuong") {
    return SmartFoxSDK.KimCuongController;
  } else if (game == "zeus") {
    return SmartFoxSDK.ZeusController;
  } else if (game == "minipoker") {
    return SmartFoxSDK.MiniPokerController;
  } else if (game == "taixiu") {
    return SmartFoxSDK.TaiXiuController;
  } else if (game == "xocdia") {
    return SmartFoxSDK.XocDiaController;
  } else if (game == "rongho") {
    return SmartFoxSDK.RongHoController;
  } else if (game == "candy") {
    return SmartFoxSDK.CandyController;
  } else if (game == "minipoker") {
    return SmartFoxSDK.MiniPokerController;
  } else if (game == "baccarat") {
    return SmartFoxSDK.BaccaratController;
  } else if (game == "roulette") {
    return SmartFoxSDK.RouletteController;
  } else if (game == "sieuxe") {
    return SmartFoxSDK.SieuXeController;
  } else if (game == "sinbad") {
    return SmartFoxSDK.SinbadController;
  } else if (game == "vampire") {
    return SmartFoxSDK.VampireController;
  }

  console.error("Dont exist game controler " + game);
  return null;
};

PortalManager.disconnectAll = function () {
  for (var game in Config.zoneConfig) {
    var controller = PortalManager.getGameController(game);

    if (controller) {
      controller._reset();
    }
  }
};

window.PortalManager = PortalManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxQb3J0YWxNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlBvcnRhbE1hbmFnZXIiLCJnZXRHYW1lQ29udHJvbGxlciIsImdhbWUiLCJTbWFydEZveFNESyIsIlBvcnRhbENvbnRyb2xsZXIiLCJQb2tlckNvbnRyb2xsZXIiLCJUTE1OQ29udHJvbGxlciIsIkJhQ2F5Q29udHJvbGxlciIsIk1hdUJpbmhDb250cm9sbGVyIiwiS2ltQ3VvbmdDb250cm9sbGVyIiwiWmV1c0NvbnRyb2xsZXIiLCJNaW5pUG9rZXJDb250cm9sbGVyIiwiVGFpWGl1Q29udHJvbGxlciIsIlhvY0RpYUNvbnRyb2xsZXIiLCJSb25nSG9Db250cm9sbGVyIiwiQ2FuZHlDb250cm9sbGVyIiwiQmFjY2FyYXRDb250cm9sbGVyIiwiUm91bGV0dGVDb250cm9sbGVyIiwiU2lldVhlQ29udHJvbGxlciIsIlNpbmJhZENvbnRyb2xsZXIiLCJWYW1waXJlQ29udHJvbGxlciIsImNvbnNvbGUiLCJlcnJvciIsImRpc2Nvbm5lY3RBbGwiLCJDb25maWciLCJ6b25lQ29uZmlnIiwiY29udHJvbGxlciIsIl9yZXNldCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUcsRUFBcEI7O0FBQ0FBLGFBQWEsQ0FBQ0MsaUJBQWQsR0FBa0MsVUFBU0MsSUFBVCxFQUFjO0FBQzVDLE1BQUdBLElBQUksSUFBSSxRQUFYLEVBQW9CO0FBQ2hCLFdBQU9DLFdBQVcsQ0FBQ0MsZ0JBQW5CO0FBQ0gsR0FGRCxNQUVNLElBQUdGLElBQUksSUFBSSxPQUFYLEVBQW1CO0FBQ3JCLFdBQU9DLFdBQVcsQ0FBQ0UsZUFBbkI7QUFDSCxHQUZLLE1BRUEsSUFBR0gsSUFBSSxJQUFJLE1BQVgsRUFBa0I7QUFDcEIsV0FBT0MsV0FBVyxDQUFDRyxjQUFuQjtBQUNILEdBRkssTUFFQSxJQUFHSixJQUFJLElBQUksT0FBWCxFQUFtQjtBQUNyQixXQUFPQyxXQUFXLENBQUNJLGVBQW5CO0FBQ0gsR0FGSyxNQUVBLElBQUdMLElBQUksSUFBSSxTQUFYLEVBQXFCO0FBQ3ZCLFdBQU9DLFdBQVcsQ0FBQ0ssaUJBQW5CO0FBQ0gsR0FGSyxNQUVBLElBQUdOLElBQUksSUFBSSxVQUFYLEVBQXNCO0FBQ3hCLFdBQU9DLFdBQVcsQ0FBQ00sa0JBQW5CO0FBQ0gsR0FGSyxNQUVBLElBQUdQLElBQUksSUFBSSxNQUFYLEVBQWtCO0FBQ3BCLFdBQU9DLFdBQVcsQ0FBQ08sY0FBbkI7QUFDSCxHQUZLLE1BRUEsSUFBR1IsSUFBSSxJQUFJLFdBQVgsRUFBdUI7QUFDekIsV0FBT0MsV0FBVyxDQUFDUSxtQkFBbkI7QUFDSCxHQUZLLE1BRUEsSUFBR1QsSUFBSSxJQUFJLFFBQVgsRUFBb0I7QUFDdEIsV0FBT0MsV0FBVyxDQUFDUyxnQkFBbkI7QUFDSCxHQUZLLE1BRUEsSUFBR1YsSUFBSSxJQUFJLFFBQVgsRUFBb0I7QUFDdEIsV0FBT0MsV0FBVyxDQUFDVSxnQkFBbkI7QUFDSCxHQUZLLE1BRUEsSUFBR1gsSUFBSSxJQUFJLFFBQVgsRUFBb0I7QUFDdEIsV0FBT0MsV0FBVyxDQUFDVyxnQkFBbkI7QUFDSCxHQUZLLE1BRUEsSUFBR1osSUFBSSxJQUFJLE9BQVgsRUFBbUI7QUFDckIsV0FBT0MsV0FBVyxDQUFDWSxlQUFuQjtBQUNILEdBRkssTUFFQSxJQUFHYixJQUFJLElBQUksV0FBWCxFQUF1QjtBQUN6QixXQUFPQyxXQUFXLENBQUNRLG1CQUFuQjtBQUNILEdBRkssTUFFQSxJQUFHVCxJQUFJLElBQUksVUFBWCxFQUFzQjtBQUN4QixXQUFPQyxXQUFXLENBQUNhLGtCQUFuQjtBQUNILEdBRkssTUFFQSxJQUFHZCxJQUFJLElBQUksVUFBWCxFQUFzQjtBQUN4QixXQUFPQyxXQUFXLENBQUNjLGtCQUFuQjtBQUNILEdBRkssTUFFQSxJQUFHZixJQUFJLElBQUksUUFBWCxFQUFvQjtBQUN0QixXQUFPQyxXQUFXLENBQUNlLGdCQUFuQjtBQUNILEdBRkssTUFFQSxJQUFHaEIsSUFBSSxJQUFJLFFBQVgsRUFBb0I7QUFDdEIsV0FBT0MsV0FBVyxDQUFDZ0IsZ0JBQW5CO0FBQ0gsR0FGSyxNQUVBLElBQUdqQixJQUFJLElBQUksU0FBWCxFQUFxQjtBQUN2QixXQUFPQyxXQUFXLENBQUNpQixpQkFBbkI7QUFDSDs7QUFDREMsRUFBQUEsT0FBTyxDQUFDQyxLQUFSLENBQWMsK0JBQTZCcEIsSUFBM0M7QUFDQSxTQUFPLElBQVA7QUFDSCxDQXhDRDs7QUF5Q0FGLGFBQWEsQ0FBQ3VCLGFBQWQsR0FBOEIsWUFBVTtBQUNwQyxPQUFLLElBQUlyQixJQUFULElBQWlCc0IsTUFBTSxDQUFDQyxVQUF4QixFQUFvQztBQUNoQyxRQUFJQyxVQUFVLEdBQUcxQixhQUFhLENBQUNDLGlCQUFkLENBQWdDQyxJQUFoQyxDQUFqQjs7QUFDQSxRQUFHd0IsVUFBSCxFQUFjO0FBQ1ZBLE1BQUFBLFVBQVUsQ0FBQ0MsTUFBWDtBQUNIO0FBRUo7QUFDSixDQVJEOztBQVNBQyxNQUFNLENBQUM1QixhQUFQLEdBQXVCQSxhQUF2QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFBvcnRhbE1hbmFnZXIgPSB7fTtcclxuUG9ydGFsTWFuYWdlci5nZXRHYW1lQ29udHJvbGxlciA9IGZ1bmN0aW9uKGdhbWUpe1xyXG4gICAgaWYoZ2FtZSA9PSBcInBvcnRhbFwiKXtcclxuICAgICAgICByZXR1cm4gU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlcjtcclxuICAgIH1lbHNlIGlmKGdhbWUgPT0gXCJwb2tlclwiKXtcclxuICAgICAgICByZXR1cm4gU21hcnRGb3hTREsuUG9rZXJDb250cm9sbGVyO1xyXG4gICAgfWVsc2UgaWYoZ2FtZSA9PSBcInRsbW5cIil7XHJcbiAgICAgICAgcmV0dXJuIFNtYXJ0Rm94U0RLLlRMTU5Db250cm9sbGVyO1xyXG4gICAgfWVsc2UgaWYoZ2FtZSA9PSBcImJhY2F5XCIpe1xyXG4gICAgICAgIHJldHVybiBTbWFydEZveFNESy5CYUNheUNvbnRyb2xsZXI7XHJcbiAgICB9ZWxzZSBpZihnYW1lID09IFwibWF1YmluaFwiKXtcclxuICAgICAgICByZXR1cm4gU21hcnRGb3hTREsuTWF1QmluaENvbnRyb2xsZXI7XHJcbiAgICB9ZWxzZSBpZihnYW1lID09IFwia2ltY3VvbmdcIil7XHJcbiAgICAgICAgcmV0dXJuIFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlcjtcclxuICAgIH1lbHNlIGlmKGdhbWUgPT0gXCJ6ZXVzXCIpe1xyXG4gICAgICAgIHJldHVybiBTbWFydEZveFNESy5aZXVzQ29udHJvbGxlcjtcclxuICAgIH1lbHNlIGlmKGdhbWUgPT0gXCJtaW5pcG9rZXJcIil7XHJcbiAgICAgICAgcmV0dXJuIFNtYXJ0Rm94U0RLLk1pbmlQb2tlckNvbnRyb2xsZXI7XHJcbiAgICB9ZWxzZSBpZihnYW1lID09IFwidGFpeGl1XCIpe1xyXG4gICAgICAgIHJldHVybiBTbWFydEZveFNESy5UYWlYaXVDb250cm9sbGVyO1xyXG4gICAgfWVsc2UgaWYoZ2FtZSA9PSBcInhvY2RpYVwiKXtcclxuICAgICAgICByZXR1cm4gU21hcnRGb3hTREsuWG9jRGlhQ29udHJvbGxlcjtcclxuICAgIH1lbHNlIGlmKGdhbWUgPT0gXCJyb25naG9cIil7XHJcbiAgICAgICAgcmV0dXJuIFNtYXJ0Rm94U0RLLlJvbmdIb0NvbnRyb2xsZXI7XHJcbiAgICB9ZWxzZSBpZihnYW1lID09IFwiY2FuZHlcIil7XHJcbiAgICAgICAgcmV0dXJuIFNtYXJ0Rm94U0RLLkNhbmR5Q29udHJvbGxlcjtcclxuICAgIH1lbHNlIGlmKGdhbWUgPT0gXCJtaW5pcG9rZXJcIil7XHJcbiAgICAgICAgcmV0dXJuIFNtYXJ0Rm94U0RLLk1pbmlQb2tlckNvbnRyb2xsZXI7XHJcbiAgICB9ZWxzZSBpZihnYW1lID09IFwiYmFjY2FyYXRcIil7XHJcbiAgICAgICAgcmV0dXJuIFNtYXJ0Rm94U0RLLkJhY2NhcmF0Q29udHJvbGxlcjtcclxuICAgIH1lbHNlIGlmKGdhbWUgPT0gXCJyb3VsZXR0ZVwiKXtcclxuICAgICAgICByZXR1cm4gU21hcnRGb3hTREsuUm91bGV0dGVDb250cm9sbGVyO1xyXG4gICAgfWVsc2UgaWYoZ2FtZSA9PSBcInNpZXV4ZVwiKXtcclxuICAgICAgICByZXR1cm4gU21hcnRGb3hTREsuU2lldVhlQ29udHJvbGxlcjtcclxuICAgIH1lbHNlIGlmKGdhbWUgPT0gXCJzaW5iYWRcIil7XHJcbiAgICAgICAgcmV0dXJuIFNtYXJ0Rm94U0RLLlNpbmJhZENvbnRyb2xsZXI7XHJcbiAgICB9ZWxzZSBpZihnYW1lID09IFwidmFtcGlyZVwiKXtcclxuICAgICAgICByZXR1cm4gU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXI7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRG9udCBleGlzdCBnYW1lIGNvbnRyb2xlciBcIitnYW1lKTtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblBvcnRhbE1hbmFnZXIuZGlzY29ubmVjdEFsbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICBmb3IgKGxldCBnYW1lIGluIENvbmZpZy56b25lQ29uZmlnKSB7XHJcbiAgICAgICAgbGV0IGNvbnRyb2xsZXIgPSBQb3J0YWxNYW5hZ2VyLmdldEdhbWVDb250cm9sbGVyKGdhbWUpO1xyXG4gICAgICAgIGlmKGNvbnRyb2xsZXIpe1xyXG4gICAgICAgICAgICBjb250cm9sbGVyLl9yZXNldCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxud2luZG93LlBvcnRhbE1hbmFnZXIgPSBQb3J0YWxNYW5hZ2VyO1xyXG4iXX0=

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/UIProfile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '840b07WWMtDgKSV7eaNVymK', 'UIProfile');
// scripts/portal/UIProfile.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    username: cc.Label,
    displayName: cc.Label,
    money: cc.Label
  },
  onEnable: function onEnable() {
    this.username.string = SmartFoxSDK.PortalController.ZoneInstance.mySelf.name;
    this.displayName.string = GameVariables.getDisplayName(SmartFoxSDK.PortalController.ZoneInstance.mySelf);
    this.money.string = Utils.addDotToNumber(GameVariables.getChip(SmartFoxSDK.PortalController.ZoneInstance.mySelf));

    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  eventChangePassword: function eventChangePassword(event) {
    mm.audio.playButton();
    this.show("UIChangePassword", {
      pop: true,
      src: 'portal'
    });
  },
  eventClose: function eventClose() {
    this.back();
    mm.audio.playButton();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxVSVByb2ZpbGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXNlcm5hbWUiLCJMYWJlbCIsImRpc3BsYXlOYW1lIiwibW9uZXkiLCJvbkVuYWJsZSIsInN0cmluZyIsIlNtYXJ0Rm94U0RLIiwiUG9ydGFsQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsIm15U2VsZiIsIm5hbWUiLCJHYW1lVmFyaWFibGVzIiwiZ2V0RGlzcGxheU5hbWUiLCJVdGlscyIsImFkZERvdFRvTnVtYmVyIiwiZ2V0Q2hpcCIsIm5vZGUiLCJ6SW5kZXgiLCJsYXN0WkluZGV4IiwiZXZlbnRDaGFuZ2VQYXNzd29yZCIsImV2ZW50IiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJzaG93IiwicG9wIiwic3JjIiwiZXZlbnRDbG9zZSIsImJhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxnQkFEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsUUFBUSxFQUFFSixFQUFFLENBQUNLLEtBREw7QUFFUkMsSUFBQUEsV0FBVyxFQUFFTixFQUFFLENBQUNLLEtBRlI7QUFHUkUsSUFBQUEsS0FBSyxFQUFFUCxFQUFFLENBQUNLO0FBSEYsR0FIUDtBQVFMRyxFQUFBQSxRQVJLLHNCQVFLO0FBQ04sU0FBS0osUUFBTCxDQUFjSyxNQUFkLEdBQXVCQyxXQUFXLENBQUNDLGdCQUFaLENBQTZCQyxZQUE3QixDQUEwQ0MsTUFBMUMsQ0FBaURDLElBQXhFO0FBQ0EsU0FBS1IsV0FBTCxDQUFpQkcsTUFBakIsR0FBMEJNLGFBQWEsQ0FBQ0MsY0FBZCxDQUE2Qk4sV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLE1BQXZFLENBQTFCO0FBQ0EsU0FBS04sS0FBTCxDQUFXRSxNQUFYLEdBQW9CUSxLQUFLLENBQUNDLGNBQU4sQ0FBcUJILGFBQWEsQ0FBQ0ksT0FBZCxDQUFzQlQsV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLE1BQWhFLENBQXJCLENBQXBCOztBQUNBLFFBQUksS0FBS08sSUFBTCxDQUFVQyxNQUFWLElBQW9CckIsRUFBRSxDQUFDc0IsVUFBM0IsRUFBc0M7QUFDbEMsV0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQW1CckIsRUFBRSxDQUFDc0IsVUFBSCxHQUFjLENBQWpDO0FBQ0g7QUFDSixHQWZJO0FBZ0JMQyxFQUFBQSxtQkFoQkssK0JBZ0JlQyxLQWhCZixFQWdCcUI7QUFDdEJDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS0MsSUFBTCxDQUFVLGtCQUFWLEVBQThCO0FBQUNDLE1BQUFBLEdBQUcsRUFBRSxJQUFOO0FBQVlDLE1BQUFBLEdBQUcsRUFBRTtBQUFqQixLQUE5QjtBQUNILEdBbkJJO0FBb0JMQyxFQUFBQSxVQXBCSyx3QkFvQk87QUFDUixTQUFLQyxJQUFMO0FBQ0FQLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0g7QUF2QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdXNlcm5hbWU6IGNjLkxhYmVsLFxyXG4gICAgICAgIGRpc3BsYXlOYW1lOiBjYy5MYWJlbCxcclxuICAgICAgICBtb25leTogY2MuTGFiZWxcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUuc3RyaW5nID0gU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmLm5hbWU7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5TmFtZS5zdHJpbmcgPSBHYW1lVmFyaWFibGVzLmdldERpc3BsYXlOYW1lKFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLm15U2VsZik7XHJcbiAgICAgICAgdGhpcy5tb25leS5zdHJpbmcgPSBVdGlscy5hZGREb3RUb051bWJlcihHYW1lVmFyaWFibGVzLmdldENoaXAoU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2UubXlTZWxmKSk7XHJcbiAgICAgICAgaWYgKHRoaXMubm9kZS56SW5kZXggPD0gY2MubGFzdFpJbmRleCl7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBjYy5sYXN0WkluZGV4KzE7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGV2ZW50Q2hhbmdlUGFzc3dvcmQoZXZlbnQpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICB0aGlzLnNob3coXCJVSUNoYW5nZVBhc3N3b3JkXCIsIHtwb3A6IHRydWUsIHNyYzogJ3BvcnRhbCd9KTtcclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlKCl7XHJcbiAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgfVxyXG59KTtcclxuIl19
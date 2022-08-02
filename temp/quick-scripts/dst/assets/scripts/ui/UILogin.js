
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/UILogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f426dsdhJNEq7agCY6Er4Ax', 'UILogin');
// scripts/ui/UILogin.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    Login: cc.Node,
    login_username: cc.EditBox,
    login_pass: cc.EditBox
  },
  onEnable: function onEnable() {
    this.login_username.string = Config.getUsername();
    this.login_pass.string = Config.getPass();
  },
  clickLogin: function clickLogin() {
    mm.audio.playButton();

    if (this.login_username.string == "") {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Tên đăng nhập không được trống");
      return;
    }

    if (this.login_pass.string == "") {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Mật khẩu không được trống");
      return;
    }

    mm.Loading.show();
    var un = this.login_username.string;
    var pass = this.login_pass.string;
    SmartFoxSDK.PortalController.loginZone(un, pass);
    Config.saveUsername(un);
    Config.savePass(pass);
  },
  eventClose: function eventClose() {
    mm.audio.playButton();
    this.back();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXFVJTG9naW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTG9naW4iLCJOb2RlIiwibG9naW5fdXNlcm5hbWUiLCJFZGl0Qm94IiwibG9naW5fcGFzcyIsIm9uRW5hYmxlIiwic3RyaW5nIiwiQ29uZmlnIiwiZ2V0VXNlcm5hbWUiLCJnZXRQYXNzIiwiY2xpY2tMb2dpbiIsIm1tIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwiY2xlYXJVc2VyUGFzcyIsIlRvYXN0Iiwic2hvd1RvYXN0IiwiTG9hZGluZyIsInNob3ciLCJ1biIsInBhc3MiLCJTbWFydEZveFNESyIsIlBvcnRhbENvbnRyb2xsZXIiLCJsb2dpblpvbmUiLCJzYXZlVXNlcm5hbWUiLCJzYXZlUGFzcyIsImV2ZW50Q2xvc2UiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxJQURGO0FBRVJDLElBQUFBLGNBQWMsRUFBRU4sRUFBRSxDQUFDTyxPQUZYO0FBR1JDLElBQUFBLFVBQVUsRUFBRVIsRUFBRSxDQUFDTztBQUhQLEdBSFA7QUFRTEUsRUFBQUEsUUFSSyxzQkFRSztBQUNOLFNBQUtILGNBQUwsQ0FBb0JJLE1BQXBCLEdBQTZCQyxNQUFNLENBQUNDLFdBQVAsRUFBN0I7QUFDQSxTQUFLSixVQUFMLENBQWdCRSxNQUFoQixHQUF5QkMsTUFBTSxDQUFDRSxPQUFQLEVBQXpCO0FBQ0gsR0FYSTtBQVlMQyxFQUFBQSxVQVpLLHdCQVlPO0FBQ1JDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUOztBQUNBLFFBQUcsS0FBS1gsY0FBTCxDQUFvQkksTUFBcEIsSUFBOEIsRUFBakMsRUFBb0M7QUFDaENDLE1BQUFBLE1BQU0sQ0FBQ08sYUFBUDtBQUNBSCxNQUFBQSxFQUFFLENBQUNJLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQixnQ0FBdEI7QUFDQTtBQUNIOztBQUNELFFBQUcsS0FBS1osVUFBTCxDQUFnQkUsTUFBaEIsSUFBMEIsRUFBN0IsRUFBZ0M7QUFDNUJDLE1BQUFBLE1BQU0sQ0FBQ08sYUFBUDtBQUNBSCxNQUFBQSxFQUFFLENBQUNJLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQiwyQkFBdEI7QUFDQTtBQUNIOztBQUNETCxJQUFBQSxFQUFFLENBQUNNLE9BQUgsQ0FBV0MsSUFBWDtBQUNBLFFBQUlDLEVBQUUsR0FBRyxLQUFLakIsY0FBTCxDQUFvQkksTUFBN0I7QUFDQSxRQUFJYyxJQUFJLEdBQUcsS0FBS2hCLFVBQUwsQ0FBZ0JFLE1BQTNCO0FBQ0FlLElBQUFBLFdBQVcsQ0FBQ0MsZ0JBQVosQ0FBNkJDLFNBQTdCLENBQXVDSixFQUF2QyxFQUEyQ0MsSUFBM0M7QUFDQWIsSUFBQUEsTUFBTSxDQUFDaUIsWUFBUCxDQUFvQkwsRUFBcEI7QUFDQVosSUFBQUEsTUFBTSxDQUFDa0IsUUFBUCxDQUFnQkwsSUFBaEI7QUFDSCxHQTlCSTtBQStCTE0sRUFBQUEsVUEvQkssd0JBK0JPO0FBQ1JmLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS2MsSUFBTDtBQUNIO0FBbENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIExvZ2luOiBjYy5Ob2RlLFxyXG4gICAgICAgIGxvZ2luX3VzZXJuYW1lOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIGxvZ2luX3Bhc3M6IGNjLkVkaXRCb3hcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIHRoaXMubG9naW5fdXNlcm5hbWUuc3RyaW5nID0gQ29uZmlnLmdldFVzZXJuYW1lKCk7XHJcbiAgICAgICAgdGhpcy5sb2dpbl9wYXNzLnN0cmluZyA9IENvbmZpZy5nZXRQYXNzKCk7XHJcbiAgICB9LFxyXG4gICAgY2xpY2tMb2dpbigpe1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBpZih0aGlzLmxvZ2luX3VzZXJuYW1lLnN0cmluZyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiVMOqbiDEkcSDbmcgbmjhuq1wIGtow7RuZyDEkcaw4bujYyB0cuG7kW5nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMubG9naW5fcGFzcy5zdHJpbmcgPT0gXCJcIil7XHJcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIk3huq10IGto4bqpdSBraMO0bmcgxJHGsOG7o2MgdHLhu5FuZ1wiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcclxuICAgICAgICBsZXQgdW4gPSB0aGlzLmxvZ2luX3VzZXJuYW1lLnN0cmluZztcclxuICAgICAgICBsZXQgcGFzcyA9IHRoaXMubG9naW5fcGFzcy5zdHJpbmc7XHJcbiAgICAgICAgU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5sb2dpblpvbmUodW4sIHBhc3MpO1xyXG4gICAgICAgIENvbmZpZy5zYXZlVXNlcm5hbWUodW4pO1xyXG4gICAgICAgIENvbmZpZy5zYXZlUGFzcyhwYXNzKTtcclxuICAgIH0sXHJcbiAgICBldmVudENsb3NlKCl7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgfVxyXG59KTtcclxuIl19
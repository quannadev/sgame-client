
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1VJTG9naW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiTG9naW4iLCJOb2RlIiwibG9naW5fdXNlcm5hbWUiLCJFZGl0Qm94IiwibG9naW5fcGFzcyIsIm9uRW5hYmxlIiwic3RyaW5nIiwiQ29uZmlnIiwiZ2V0VXNlcm5hbWUiLCJnZXRQYXNzIiwiY2xpY2tMb2dpbiIsIm1tIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwiY2xlYXJVc2VyUGFzcyIsIlRvYXN0Iiwic2hvd1RvYXN0IiwiTG9hZGluZyIsInNob3ciLCJ1biIsInBhc3MiLCJTbWFydEZveFNESyIsIlBvcnRhbENvbnRyb2xsZXIiLCJsb2dpblpvbmUiLCJzYXZlVXNlcm5hbWUiLCJzYXZlUGFzcyIsImV2ZW50Q2xvc2UiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEtBQUssRUFBRUosRUFBRSxDQUFDSyxJQURGO0FBRVJDLElBQUFBLGNBQWMsRUFBRU4sRUFBRSxDQUFDTyxPQUZYO0FBR1JDLElBQUFBLFVBQVUsRUFBRVIsRUFBRSxDQUFDTztBQUhQLEdBSFA7QUFRTEUsRUFBQUEsUUFSSyxzQkFRSztBQUNOLFNBQUtILGNBQUwsQ0FBb0JJLE1BQXBCLEdBQTZCQyxNQUFNLENBQUNDLFdBQVAsRUFBN0I7QUFDQSxTQUFLSixVQUFMLENBQWdCRSxNQUFoQixHQUF5QkMsTUFBTSxDQUFDRSxPQUFQLEVBQXpCO0FBQ0gsR0FYSTtBQVlMQyxFQUFBQSxVQVpLLHdCQVlPO0FBQ1JDLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUOztBQUNBLFFBQUcsS0FBS1gsY0FBTCxDQUFvQkksTUFBcEIsSUFBOEIsRUFBakMsRUFBb0M7QUFDaENDLE1BQUFBLE1BQU0sQ0FBQ08sYUFBUDtBQUNBSCxNQUFBQSxFQUFFLENBQUNJLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQixnQ0FBdEI7QUFDQTtBQUNIOztBQUNELFFBQUcsS0FBS1osVUFBTCxDQUFnQkUsTUFBaEIsSUFBMEIsRUFBN0IsRUFBZ0M7QUFDNUJDLE1BQUFBLE1BQU0sQ0FBQ08sYUFBUDtBQUNBSCxNQUFBQSxFQUFFLENBQUNJLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQiwyQkFBdEI7QUFDQTtBQUNIOztBQUNETCxJQUFBQSxFQUFFLENBQUNNLE9BQUgsQ0FBV0MsSUFBWDtBQUNBLFFBQUlDLEVBQUUsR0FBRyxLQUFLakIsY0FBTCxDQUFvQkksTUFBN0I7QUFDQSxRQUFJYyxJQUFJLEdBQUcsS0FBS2hCLFVBQUwsQ0FBZ0JFLE1BQTNCO0FBQ0FlLElBQUFBLFdBQVcsQ0FBQ0MsZ0JBQVosQ0FBNkJDLFNBQTdCLENBQXVDSixFQUF2QyxFQUEyQ0MsSUFBM0M7QUFDQWIsSUFBQUEsTUFBTSxDQUFDaUIsWUFBUCxDQUFvQkwsRUFBcEI7QUFDQVosSUFBQUEsTUFBTSxDQUFDa0IsUUFBUCxDQUFnQkwsSUFBaEI7QUFDSCxHQTlCSTtBQStCTE0sRUFBQUEsVUEvQkssd0JBK0JPO0FBQ1JmLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsU0FBS2MsSUFBTDtBQUNIO0FBbENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBMb2dpbjogY2MuTm9kZSxcbiAgICAgICAgbG9naW5fdXNlcm5hbWU6IGNjLkVkaXRCb3gsXG4gICAgICAgIGxvZ2luX3Bhc3M6IGNjLkVkaXRCb3hcbiAgICB9LFxuICAgIG9uRW5hYmxlKCl7XG4gICAgICAgIHRoaXMubG9naW5fdXNlcm5hbWUuc3RyaW5nID0gQ29uZmlnLmdldFVzZXJuYW1lKCk7XG4gICAgICAgIHRoaXMubG9naW5fcGFzcy5zdHJpbmcgPSBDb25maWcuZ2V0UGFzcygpO1xuICAgIH0sXG4gICAgY2xpY2tMb2dpbigpe1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIGlmKHRoaXMubG9naW5fdXNlcm5hbWUuc3RyaW5nID09IFwiXCIpe1xuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIlTDqm4gxJHEg25nIG5o4bqtcCBraMO0bmcgxJHGsOG7o2MgdHLhu5FuZ1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLmxvZ2luX3Bhc3Muc3RyaW5nID09IFwiXCIpe1xuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIk3huq10IGto4bqpdSBraMO0bmcgxJHGsOG7o2MgdHLhu5FuZ1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBtbS5Mb2FkaW5nLnNob3coKTtcbiAgICAgICAgbGV0IHVuID0gdGhpcy5sb2dpbl91c2VybmFtZS5zdHJpbmc7XG4gICAgICAgIGxldCBwYXNzID0gdGhpcy5sb2dpbl9wYXNzLnN0cmluZztcbiAgICAgICAgU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5sb2dpblpvbmUodW4sIHBhc3MpO1xuICAgICAgICBDb25maWcuc2F2ZVVzZXJuYW1lKHVuKTtcbiAgICAgICAgQ29uZmlnLnNhdmVQYXNzKHBhc3MpO1xuICAgIH0sXG4gICAgZXZlbnRDbG9zZSgpe1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIHRoaXMuYmFjaygpO1xuICAgIH1cbn0pO1xuIl19
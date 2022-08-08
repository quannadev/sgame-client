
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/UIRegister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '50934MAymxEzreAVGDclpXU', 'UIRegister');
// scripts/ui/UIRegister.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    register_username: cc.EditBox,
    register_diplayname: cc.EditBox,
    register_pass: cc.EditBox,
    register_pass_again: cc.EditBox
  },
  eventClickRegister: function eventClickRegister() {
    mm.audio.playButton();

    if (!SmartFoxSDK.PortalController.ZoneInstance.isConnected()) {
      SmartFoxSDK.PortalController.register = true;
      SmartFoxSDK.PortalController.ZoneInstance.connect();
      return;
    }

    if (this.register_username.string == "") {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Tên đăng nhập không được trống");
      return;
    }

    if (!Utils.validateString(this.register_username.string)) {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Tên đăng nhập chỉ chứa các ký tự A-Z, a-z, 0-9");
      return;
    }

    if (!Utils.validateString(this.register_diplayname.string)) {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Tên hiển thị chỉ chứa các ký tự A-Z, a-z, 0-9");
      return;
    }

    if (this.register_diplayname.string == "") {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Tên hiển thị không được trống");
      return;
    }

    if (this.register_username.string.includes(" ")) {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Tài khoản bao gồm khoảng trắng");
      return;
    }

    if (this.register_diplayname.string.includes(" ")) {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Tên hiển thị bao gồm khoảng trắng");
      return;
    }

    if (this.register_username.string == this.register_diplayname.string) {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Tài khoản và tên hiển thị trùng nhau");
      return;
    }

    if (this.register_pass.string == "") {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Mật khẩu không được trống");
      return;
    }

    if (this.register_pass.string != this.register_pass_again.string) {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Mật khẩu không khớp");
      return;
    }

    if (this.register_pass.string.length < 6) {
      Config.clearUserPass();
      mm.Toast.showToast(1, "Mật khẩu nhỏ hơn 6 kí tự");
      return;
    }

    var un = this.register_username.string;
    var pass = this.register_pass.string;
    var zone = "portal";
    var params = new SmartFoxSDK.SObject();
    params.putByte("rt", 4);
    params.putUtfString("role", "user");
    params.putUtfString("dn", this.register_diplayname.string);
    var loginRequest = new CasinoRequest.LoginRequest(un, pass, zone, params);
    SmartFoxSDK.PortalController.un = un;
    SmartFoxSDK.PortalController.pass = pass;
    SmartFoxSDK.PortalController.ZoneInstance.send(loginRequest.toSRequest());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3VpL1VJUmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVnaXN0ZXJfdXNlcm5hbWUiLCJFZGl0Qm94IiwicmVnaXN0ZXJfZGlwbGF5bmFtZSIsInJlZ2lzdGVyX3Bhc3MiLCJyZWdpc3Rlcl9wYXNzX2FnYWluIiwiZXZlbnRDbGlja1JlZ2lzdGVyIiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJTbWFydEZveFNESyIsIlBvcnRhbENvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJpc0Nvbm5lY3RlZCIsInJlZ2lzdGVyIiwiY29ubmVjdCIsInN0cmluZyIsIkNvbmZpZyIsImNsZWFyVXNlclBhc3MiLCJUb2FzdCIsInNob3dUb2FzdCIsIlV0aWxzIiwidmFsaWRhdGVTdHJpbmciLCJpbmNsdWRlcyIsImxlbmd0aCIsInVuIiwicGFzcyIsInpvbmUiLCJwYXJhbXMiLCJTT2JqZWN0IiwicHV0Qnl0ZSIsInB1dFV0ZlN0cmluZyIsImxvZ2luUmVxdWVzdCIsIkNhc2lub1JlcXVlc3QiLCJMb2dpblJlcXVlc3QiLCJzZW5kIiwidG9TUmVxdWVzdCIsImV2ZW50Q2xvc2UiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGlCQUFpQixFQUFFSixFQUFFLENBQUNLLE9BRGQ7QUFFUkMsSUFBQUEsbUJBQW1CLEVBQUVOLEVBQUUsQ0FBQ0ssT0FGaEI7QUFHUkUsSUFBQUEsYUFBYSxFQUFFUCxFQUFFLENBQUNLLE9BSFY7QUFJUkcsSUFBQUEsbUJBQW1CLEVBQUVSLEVBQUUsQ0FBQ0s7QUFKaEIsR0FIUDtBQVNMSSxFQUFBQSxrQkFUSyxnQ0FTZTtBQUNoQkMsSUFBQUEsRUFBRSxD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bnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHJlZ2lzdGVyX3VzZXJuYW1lOiBjYy5FZGl0Qm94LFxuICAgICAgICByZWdpc3Rlcl9kaXBsYXluYW1lOiBjYy5FZGl0Qm94LFxuICAgICAgICByZWdpc3Rlcl9wYXNzOiBjYy5FZGl0Qm94LFxuICAgICAgICByZWdpc3Rlcl9wYXNzX2FnYWluOiBjYy5FZGl0Qm94XG4gICAgfSxcbiAgICBldmVudENsaWNrUmVnaXN0ZXIoKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBpZighU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2UuaXNDb25uZWN0ZWQoKSl7XG4gICAgICAgICAgICBTbWFydEZveFNESy5Qb3J0YWxDb250cm9sbGVyLnJlZ2lzdGVyID0gdHJ1ZTtcbiAgICAgICAgICAgIFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmNvbm5lY3QoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnJlZ2lzdGVyX3VzZXJuYW1lLnN0cmluZyA9PSBcIlwiKXtcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJUw6puIMSRxINuZyBuaOG6rXAga2jDtG5nIMSRxrDhu6NjIHRy4buRbmdcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoIVV0aWxzLnZhbGlkYXRlU3RyaW5nKHRoaXMucmVnaXN0ZXJfdXNlcm5hbWUuc3RyaW5nKSl7XG4gICAgICAgICAgICBDb25maWcuY2xlYXJVc2VyUGFzcygpO1xuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiVMOqbiDEkcSDbmcgbmjhuq1wIGNo4buJIGNo4bupYSBjw6FjIGvDvSB04buxIEEtWiwgYS16LCAwLTlcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYoIVV0aWxzLnZhbGlkYXRlU3RyaW5nKHRoaXMucmVnaXN0ZXJfZGlwbGF5bmFtZS5zdHJpbmcpKXtcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJUw6puIGhp4buDbiB0aOG7iyBjaOG7iSBjaOG7qWEgY8OhYyBrw70gdOG7sSBBLVosIGEteiwgMC05XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXJfZGlwbGF5bmFtZS5zdHJpbmcgPT0gXCJcIil7XG4gICAgICAgICAgICBDb25maWcuY2xlYXJVc2VyUGFzcygpO1xuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiVMOqbiBoaeG7g24gdGjhu4sga2jDtG5nIMSRxrDhu6NjIHRy4buRbmdcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlcl91c2VybmFtZS5zdHJpbmcuaW5jbHVkZXMoXCIgXCIpKXtcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJUw6BpIGtob+G6o24gYmFvIGfhu5NtIGtob+G6o25nIHRy4bqvbmdcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlcl9kaXBsYXluYW1lLnN0cmluZy5pbmNsdWRlcyhcIiBcIikpe1xuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIlTDqm4gaGnhu4NuIHRo4buLIGJhbyBn4buTbSBraG/huqNuZyB0cuG6r25nXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXJfdXNlcm5hbWUuc3RyaW5nID09IHRoaXMucmVnaXN0ZXJfZGlwbGF5bmFtZS5zdHJpbmcpe1xuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIlTDoGkga2hv4bqjbiB2w6AgdMOqbiBoaeG7g24gdGjhu4sgdHLDuW5nIG5oYXVcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlcl9wYXNzLnN0cmluZyA9PSBcIlwiKXtcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJN4bqtdCBraOG6qXUga2jDtG5nIMSRxrDhu6NjIHRy4buRbmdcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlcl9wYXNzLnN0cmluZyAhPSB0aGlzLnJlZ2lzdGVyX3Bhc3NfYWdhaW4uc3RyaW5nKXtcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJN4bqtdCBraOG6qXUga2jDtG5nIGto4bubcFwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnJlZ2lzdGVyX3Bhc3Muc3RyaW5nLmxlbmd0aCA8IDYpe1xuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIk3huq10IGto4bqpdSBuaOG7jyBoxqFuIDYga8OtIHThu7FcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVuID0gdGhpcy5yZWdpc3Rlcl91c2VybmFtZS5zdHJpbmc7XG4gICAgICAgIGxldCBwYXNzID0gdGhpcy5yZWdpc3Rlcl9wYXNzLnN0cmluZztcbiAgICAgICAgbGV0IHpvbmUgPSBcInBvcnRhbFwiO1xuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcbiAgICAgICAgcGFyYW1zLnB1dEJ5dGUoXCJydFwiLCA0KTtcbiAgICAgICAgcGFyYW1zLnB1dFV0ZlN0cmluZyhcInJvbGVcIiwgXCJ1c2VyXCIpO1xuICAgICAgICBwYXJhbXMucHV0VXRmU3RyaW5nKFwiZG5cIiwgdGhpcy5yZWdpc3Rlcl9kaXBsYXluYW1lLnN0cmluZyk7XG4gICAgICAgIGxldCBsb2dpblJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5Mb2dpblJlcXVlc3QodW4sIHBhc3MsIHpvbmUsIHBhcmFtcyk7XG4gICAgICAgIFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIudW4gPSB1bjtcbiAgICAgICAgU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5wYXNzID0gcGFzcztcbiAgICAgICAgU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChsb2dpblJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICB9LFxuICAgIGV2ZW50Q2xvc2UoKXtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICB0aGlzLmJhY2soKTtcbiAgICB9XG59KTtcbiJdfQ==
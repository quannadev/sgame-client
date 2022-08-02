
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXFVJUmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIlZvekJhc2VDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVnaXN0ZXJfdXNlcm5hbWUiLCJFZGl0Qm94IiwicmVnaXN0ZXJfZGlwbGF5bmFtZSIsInJlZ2lzdGVyX3Bhc3MiLCJyZWdpc3Rlcl9wYXNzX2FnYWluIiwiZXZlbnRDbGlja1JlZ2lzdGVyIiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJTbWFydEZveFNESyIsIlBvcnRhbENvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJpc0Nvbm5lY3RlZCIsInJlZ2lzdGVyIiwiY29ubmVjdCIsInN0cmluZyIsIkNvbmZpZyIsImNsZWFyVXNlclBhc3MiLCJUb2FzdCIsInNob3dUb2FzdCIsIlV0aWxzIiwidmFsaWRhdGVTdHJpbmciLCJpbmNsdWRlcyIsImxlbmd0aCIsInVuIiwicGFzcyIsInpvbmUiLCJwYXJhbXMiLCJTT2JqZWN0IiwicHV0Qnl0ZSIsInB1dFV0ZlN0cmluZyIsImxvZ2luUmVxdWVzdCIsIkNhc2lub1JlcXVlc3QiLCJMb2dpblJlcXVlc3QiLCJzZW5kIiwidG9TUmVxdWVzdCIsImV2ZW50Q2xvc2UiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGlCQUFpQixFQUFFSixFQUFFLENBQUNLLE9BRGQ7QUFFUkMsSUFBQUEsbUJBQW1CLEVBQUVOLEVBQUUsQ0FBQ0ssT0FGaEI7QUFHUkUsSUFBQUEsYUFBYSxFQUFFUCxFQUFFLENBQUNLLE9BSFY7QUFJUkcsSUFBQUEsbUJBQW1CLEVBQUVSLEVBQUUsQ0FBQ0s7QUFKaEIsR0FIUDtBQVNMSSxFQUFBQSxrQkFUSyxnQ0FTZTtBQUNoQkMsSUFBQUEsRUFB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c0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuVm96QmFzZUNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVnaXN0ZXJfdXNlcm5hbWU6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgcmVnaXN0ZXJfZGlwbGF5bmFtZTogY2MuRWRpdEJveCxcclxuICAgICAgICByZWdpc3Rlcl9wYXNzOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIHJlZ2lzdGVyX3Bhc3NfYWdhaW46IGNjLkVkaXRCb3hcclxuICAgIH0sXHJcbiAgICBldmVudENsaWNrUmVnaXN0ZXIoKXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgaWYoIVNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmlzQ29ubmVjdGVkKCkpe1xyXG4gICAgICAgICAgICBTbWFydEZveFNESy5Qb3J0YWxDb250cm9sbGVyLnJlZ2lzdGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2UuY29ubmVjdCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXJfdXNlcm5hbWUuc3RyaW5nID09IFwiXCIpe1xyXG4gICAgICAgICAgICBDb25maWcuY2xlYXJVc2VyUGFzcygpO1xyXG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJUw6puIMSRxINuZyBuaOG6rXAga2jDtG5nIMSRxrDhu6NjIHRy4buRbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIVV0aWxzLnZhbGlkYXRlU3RyaW5nKHRoaXMucmVnaXN0ZXJfdXNlcm5hbWUuc3RyaW5nKSl7XHJcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIlTDqm4gxJHEg25nIG5o4bqtcCBjaOG7iSBjaOG7qWEgY8OhYyBrw70gdOG7sSBBLVosIGEteiwgMC05XCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCFVdGlscy52YWxpZGF0ZVN0cmluZyh0aGlzLnJlZ2lzdGVyX2RpcGxheW5hbWUuc3RyaW5nKSl7XHJcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIlTDqm4gaGnhu4NuIHRo4buLIGNo4buJIGNo4bupYSBjw6FjIGvDvSB04buxIEEtWiwgYS16LCAwLTlcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlcl9kaXBsYXluYW1lLnN0cmluZyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiVMOqbiBoaeG7g24gdGjhu4sga2jDtG5nIMSRxrDhu6NjIHRy4buRbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlcl91c2VybmFtZS5zdHJpbmcuaW5jbHVkZXMoXCIgXCIpKXtcclxuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiVMOgaSBraG/huqNuIGJhbyBn4buTbSBraG/huqNuZyB0cuG6r25nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXJfZGlwbGF5bmFtZS5zdHJpbmcuaW5jbHVkZXMoXCIgXCIpKXtcclxuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiVMOqbiBoaeG7g24gdGjhu4sgYmFvIGfhu5NtIGtob+G6o25nIHRy4bqvbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlcl91c2VybmFtZS5zdHJpbmcgPT0gdGhpcy5yZWdpc3Rlcl9kaXBsYXluYW1lLnN0cmluZyl7XHJcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIlTDoGkga2hv4bqjbiB2w6AgdMOqbiBoaeG7g24gdGjhu4sgdHLDuW5nIG5oYXVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlcl9wYXNzLnN0cmluZyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgQ29uZmlnLmNsZWFyVXNlclBhc3MoKTtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiTeG6rXQga2jhuql1IGtow7RuZyDEkcaw4bujYyB0cuG7kW5nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXJfcGFzcy5zdHJpbmcgIT0gdGhpcy5yZWdpc3Rlcl9wYXNzX2FnYWluLnN0cmluZyl7XHJcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIk3huq10IGto4bqpdSBraMO0bmcga2jhu5twXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXJfcGFzcy5zdHJpbmcubGVuZ3RoIDwgNil7XHJcbiAgICAgICAgICAgIENvbmZpZy5jbGVhclVzZXJQYXNzKCk7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIk3huq10IGto4bqpdSBuaOG7jyBoxqFuIDYga8OtIHThu7FcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHVuID0gdGhpcy5yZWdpc3Rlcl91c2VybmFtZS5zdHJpbmc7XHJcbiAgICAgICAgbGV0IHBhc3MgPSB0aGlzLnJlZ2lzdGVyX3Bhc3Muc3RyaW5nO1xyXG4gICAgICAgIGxldCB6b25lID0gXCJwb3J0YWxcIjtcclxuICAgICAgICBsZXQgcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcclxuICAgICAgICBwYXJhbXMucHV0Qnl0ZShcInJ0XCIsIDQpO1xyXG4gICAgICAgIHBhcmFtcy5wdXRVdGZTdHJpbmcoXCJyb2xlXCIsIFwidXNlclwiKTtcclxuICAgICAgICBwYXJhbXMucHV0VXRmU3RyaW5nKFwiZG5cIiwgdGhpcy5yZWdpc3Rlcl9kaXBsYXluYW1lLnN0cmluZyk7XHJcbiAgICAgICAgbGV0IGxvZ2luUmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0LkxvZ2luUmVxdWVzdCh1biwgcGFzcywgem9uZSwgcGFyYW1zKTtcclxuICAgICAgICBTbWFydEZveFNESy5Qb3J0YWxDb250cm9sbGVyLnVuID0gdW47XHJcbiAgICAgICAgU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5wYXNzID0gcGFzcztcclxuICAgICAgICBTbWFydEZveFNESy5Qb3J0YWxDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKGxvZ2luUmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgdGhpcy5iYWNrKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
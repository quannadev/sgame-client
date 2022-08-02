
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/UIChangePassword.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f86449gLZBIUrjN+7ifYFkd', 'UIChangePassword');
// scripts/portal/UIChangePassword.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    register_pass: cc.EditBox,
    register_pass_again: cc.EditBox
  },
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  clickChangePassword: function clickChangePassword(event) {
    mm.audio.playButton();

    if (this.register_pass.string == "") {
      mm.Toast.showToast(1, "Mật khẩu không được trống");
      return;
    }

    if (this.register_pass.string != this.register_pass_again.string) {
      mm.Toast.showToast(1, "Mật khẩu không khớp");
      return;
    }

    if (this.register_pass.string.length < 6) {
      mm.Toast.showToast(1, "Mật khẩu nhỏ hơn 6 kí tự");
      return;
    }

    var request = new CasinoRequest.ChangePassRequest();
    request.setNewPassword(this.register_pass.string);
    SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxVSUNoYW5nZVBhc3N3b3JkLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsInJlZ2lzdGVyX3Bhc3MiLCJFZGl0Qm94IiwicmVnaXN0ZXJfcGFzc19hZ2FpbiIsIm9uRW5hYmxlIiwibm9kZSIsInpJbmRleCIsImxhc3RaSW5kZXgiLCJjbGlja0NoYW5nZVBhc3N3b3JkIiwiZXZlbnQiLCJtbSIsImF1ZGlvIiwicGxheUJ1dHRvbiIsInN0cmluZyIsIlRvYXN0Iiwic2hvd1RvYXN0IiwibGVuZ3RoIiwicmVxdWVzdCIsIkNhc2lub1JlcXVlc3QiLCJDaGFuZ2VQYXNzUmVxdWVzdCIsInNldE5ld1Bhc3N3b3JkIiwiU21hcnRGb3hTREsiLCJQb3J0YWxDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwic2VuZCIsInRvU1JlcXVlc3QiLCJldmVudENsb3NlIiwiYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLGdCQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxhQUFhLEVBQUVKLEVBQUUsQ0FBQ0ssT0FEVjtBQUVSQyxJQUFBQSxtQkFBbUIsRUFBRU4sRUFBRSxDQUFDSztBQUZoQixHQUhQO0FBT0xFLEVBQUFBLFFBUEssc0JBT0s7QUFDTixRQUFJLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixJQUFvQlQsRUFBRSxDQUFDVSxVQUEzQixFQUFzQztBQUNsQyxXQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBbUJULEVBQUUsQ0FBQ1UsVUFBSCxHQUFjLENBQWpDO0FBQ0g7QUFDSixHQVhJO0FBWUxDLEVBQUFBLG1CQVpLLCtCQVllQyxLQVpmLEVBWXFCO0FBQ3RCQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDs7QUFDQSxRQUFHLEtBQUtYLGFBQUwsQ0FBbUJZLE1BQW5CLElBQTZCLEVBQWhDLEVBQW1DO0FBQy9CSCxNQUFBQSxFQUFFLENBQUNJLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQiwyQkFBdEI7QUFDQTtBQUNIOztBQUNELFFBQUcsS0FBS2QsYUFBTCxDQUFtQlksTUFBbkIsSUFBNkIsS0FBS1YsbUJBQUwsQ0FBeUJVLE1BQXpELEVBQWdFO0FBQzVESCxNQUFBQSxFQUFFLENBQUNJLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQixxQkFBdEI7QUFDQTtBQUNIOztBQUNELFFBQUcsS0FBS2QsYUFBTCxDQUFtQlksTUFBbkIsQ0FBMEJHLE1BQTFCLEdBQW1DLENBQXRDLEVBQXdDO0FBQ3BDTixNQUFBQSxFQUFFLENBQUNJLEtBQUgsQ0FBU0MsU0FBVCxDQUFtQixDQUFuQixFQUFzQiwwQkFBdEI7QUFDQTtBQUNIOztBQUNELFFBQUlFLE9BQU8sR0FBRyxJQUFJQyxhQUFhLENBQUNDLGlCQUFsQixFQUFkO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csY0FBUixDQUF1QixLQUFLbkIsYUFBTCxDQUFtQlksTUFBMUM7QUFDQVEsSUFBQUEsV0FBVyxDQUFDQyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLElBQTFDLENBQStDUCxPQUFPLENBQUNRLFVBQVIsRUFBL0M7QUFDSCxHQTdCSTtBQThCTEMsRUFBQUEsVUE5Qkssd0JBOEJPO0FBQ1IsU0FBS0MsSUFBTDtBQUNBakIsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLFVBQVQ7QUFDSDtBQWpDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZWdpc3Rlcl9wYXNzOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIHJlZ2lzdGVyX3Bhc3NfYWdhaW46IGNjLkVkaXRCb3hcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleCsxO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjbGlja0NoYW5nZVBhc3N3b3JkKGV2ZW50KXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgaWYodGhpcy5yZWdpc3Rlcl9wYXNzLnN0cmluZyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiTeG6rXQga2jhuql1IGtow7RuZyDEkcaw4bujYyB0cuG7kW5nXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXJfcGFzcy5zdHJpbmcgIT0gdGhpcy5yZWdpc3Rlcl9wYXNzX2FnYWluLnN0cmluZyl7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIk3huq10IGto4bqpdSBraMO0bmcga2jhu5twXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMucmVnaXN0ZXJfcGFzcy5zdHJpbmcubGVuZ3RoIDwgNil7XHJcbiAgICAgICAgICAgIG1tLlRvYXN0LnNob3dUb2FzdCgxLCBcIk3huq10IGto4bqpdSBuaOG7jyBoxqFuIDYga8OtIHThu7FcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5DaGFuZ2VQYXNzUmVxdWVzdCgpO1xyXG4gICAgICAgIHJlcXVlc3Quc2V0TmV3UGFzc3dvcmQodGhpcy5yZWdpc3Rlcl9wYXNzLnN0cmluZyk7XHJcbiAgICAgICAgU21hcnRGb3hTREsuUG9ydGFsQ29udHJvbGxlci5ab25lSW5zdGFuY2Uuc2VuZChyZXF1ZXN0LnRvU1JlcXVlc3QoKSk7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRDbG9zZSgpe1xyXG4gICAgICAgIHRoaXMuYmFjaygpO1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
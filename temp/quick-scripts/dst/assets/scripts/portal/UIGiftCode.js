
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/UIGiftCode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a8cf0sM+3ND6apFBWLLFcpM', 'UIGiftCode');
// scripts/portal/UIGiftCode.js

"use strict";

cc.Class({
  "extends": cc.VozBaseComponent,
  properties: {
    edit_gc: cc.EditBox
  },
  onEnable: function onEnable() {
    if (this.node.zIndex <= cc.lastZIndex) {
      this.node.zIndex = cc.lastZIndex + 1;
    }
  },
  eventSend: function eventSend() {
    mm.audio.playButton();

    if (this.edit_gc.string == "") {
      mm.Toast.showToast(1, "GiftCode không được trống");
      return;
    }

    var request = new CasinoRequest.GiftCodeRequest();
    request.setGiftCode(this.edit_gc.string);
    SmartFoxSDK.PortalController.ZoneInstance.send(request.toSRequest());
    mm.Loading.show();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxVSUdpZnRDb2RlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImVkaXRfZ2MiLCJFZGl0Qm94Iiwib25FbmFibGUiLCJub2RlIiwiekluZGV4IiwibGFzdFpJbmRleCIsImV2ZW50U2VuZCIsIm1tIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwic3RyaW5nIiwiVG9hc3QiLCJzaG93VG9hc3QiLCJyZXF1ZXN0IiwiQ2FzaW5vUmVxdWVzdCIsIkdpZnRDb2RlUmVxdWVzdCIsInNldEdpZnRDb2RlIiwiU21hcnRGb3hTREsiLCJQb3J0YWxDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwic2VuZCIsInRvU1JlcXVlc3QiLCJMb2FkaW5nIiwic2hvdyIsImV2ZW50Q2xvc2UiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSztBQURKLEdBSFA7QUFNTEMsRUFBQUEsUUFOSyxzQkFNSztBQUNOLFFBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFWLElBQW9CUixFQUFFLENBQUNTLFVBQTNCLEVBQXNDO0FBQ2xDLFdBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFtQlIsRUFBRSxDQUFDUyxVQUFILEdBQWMsQ0FBakM7QUFDSDtBQUNKLEdBVkk7QUFXTEMsRUFBQUEsU0FYSyx1QkFXTTtBQUNQQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDs7QUFDQSxRQUFHLEtBQUtULE9BQUwsQ0FBYVUsTUFBYixJQUF1QixFQUExQixFQUE2QjtBQUN6QkgsTUFBQUEsRUFBRSxDQUFDSSxLQUFILENBQVNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsMkJBQXRCO0FBQ0E7QUFDSDs7QUFDRCxRQUFJQyxPQUFPLEdBQUcsSUFBSUMsYUFBYSxDQUFDQyxlQUFsQixFQUFkO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csV0FBUixDQUFvQixLQUFLaEIsT0FBTCxDQUFhVSxNQUFqQztBQUNBTyxJQUFBQSxXQUFXLENBQUNDLGdCQUFaLENBQTZCQyxZQUE3QixDQUEwQ0MsSUFBMUMsQ0FBK0NQLE9BQU8sQ0FBQ1EsVUFBUixFQUEvQztBQUNBZCxJQUFBQSxFQUFFLENBQUNlLE9BQUgsQ0FBV0MsSUFBWDtBQUNILEdBckJJO0FBc0JMQyxFQUFBQSxVQXRCSyx3QkFzQk87QUFDUixTQUFLQyxJQUFMO0FBQ0FsQixJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNIO0FBekJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLlZvekJhc2VDb21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGVkaXRfZ2M6IGNjLkVkaXRCb3hcclxuICAgIH0sXHJcbiAgICBvbkVuYWJsZSgpe1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuekluZGV4IDw9IGNjLmxhc3RaSW5kZXgpe1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuekluZGV4ID0gY2MubGFzdFpJbmRleCsxO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBldmVudFNlbmQoKXtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICAgICAgaWYodGhpcy5lZGl0X2djLnN0cmluZyA9PSBcIlwiKXtcclxuICAgICAgICAgICAgbW0uVG9hc3Quc2hvd1RvYXN0KDEsIFwiR2lmdENvZGUga2jDtG5nIMSRxrDhu6NjIHRy4buRbmdcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgQ2FzaW5vUmVxdWVzdC5HaWZ0Q29kZVJlcXVlc3QoKTtcclxuICAgICAgICByZXF1ZXN0LnNldEdpZnRDb2RlKHRoaXMuZWRpdF9nYy5zdHJpbmcpO1xyXG4gICAgICAgIFNtYXJ0Rm94U0RLLlBvcnRhbENvbnRyb2xsZXIuWm9uZUluc3RhbmNlLnNlbmQocmVxdWVzdC50b1NSZXF1ZXN0KCkpO1xyXG4gICAgICAgIG1tLkxvYWRpbmcuc2hvdygpO1xyXG4gICAgfSxcclxuICAgIGV2ZW50Q2xvc2UoKXtcclxuICAgICAgICB0aGlzLmJhY2soKTtcclxuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=
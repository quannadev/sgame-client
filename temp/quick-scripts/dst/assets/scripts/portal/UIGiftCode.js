
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BvcnRhbC9VSUdpZnRDb2RlLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJWb3pCYXNlQ29tcG9uZW50IiwicHJvcGVydGllcyIsImVkaXRfZ2MiLCJFZGl0Qm94Iiwib25FbmFibGUiLCJub2RlIiwiekluZGV4IiwibGFzdFpJbmRleCIsImV2ZW50U2VuZCIsIm1tIiwiYXVkaW8iLCJwbGF5QnV0dG9uIiwic3RyaW5nIiwiVG9hc3QiLCJzaG93VG9hc3QiLCJyZXF1ZXN0IiwiQ2FzaW5vUmVxdWVzdCIsIkdpZnRDb2RlUmVxdWVzdCIsInNldEdpZnRDb2RlIiwiU21hcnRGb3hTREsiLCJQb3J0YWxDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwic2VuZCIsInRvU1JlcXVlc3QiLCJMb2FkaW5nIiwic2hvdyIsImV2ZW50Q2xvc2UiLCJiYWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsZ0JBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSztBQURKLEdBSFA7QUFNTEMsRUFBQUEsUUFOSyxzQkFNSztBQUNOLFFBQUksS0FBS0MsSUFBTCxDQUFVQyxNQUFWLElBQW9CUixFQUFFLENBQUNTLFVBQTNCLEVBQXNDO0FBQ2xDLFdBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFtQlIsRUFBRSxDQUFDUyxVQUFILEdBQWMsQ0FBakM7QUFDSDtBQUNKLEdBVkk7QUFXTEMsRUFBQUEsU0FYSyx1QkFXTTtBQUNQQyxJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDs7QUFDQSxRQUFHLEtBQUtULE9BQUwsQ0FBYVUsTUFBYixJQUF1QixFQUExQixFQUE2QjtBQUN6QkgsTUFBQUEsRUFBRSxDQUFDSSxLQUFILENBQVNDLFNBQVQsQ0FBbUIsQ0FBbkIsRUFBc0IsMkJBQXRCO0FBQ0E7QUFDSDs7QUFDRCxRQUFJQyxPQUFPLEdBQUcsSUFBSUMsYUFBYSxDQUFDQyxlQUFsQixFQUFkO0FBQ0FGLElBQUFBLE9BQU8sQ0FBQ0csV0FBUixDQUFvQixLQUFLaEIsT0FBTCxDQUFhVSxNQUFqQztBQUNBTyxJQUFBQSxXQUFXLENBQUNDLGdCQUFaLENBQTZCQyxZQUE3QixDQUEwQ0MsSUFBMUMsQ0FBK0NQLE9BQU8sQ0FBQ1EsVUFBUixFQUEvQztBQUNBZCxJQUFBQSxFQUFFLENBQUNlLE9BQUgsQ0FBV0MsSUFBWDtBQUNILEdBckJJO0FBc0JMQyxFQUFBQSxVQXRCSyx3QkFzQk87QUFDUixTQUFLQyxJQUFMO0FBQ0FsQixJQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBU0MsVUFBVDtBQUNIO0FBekJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Wb3pCYXNlQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBlZGl0X2djOiBjYy5FZGl0Qm94XG4gICAgfSxcbiAgICBvbkVuYWJsZSgpe1xuICAgICAgICBpZiAodGhpcy5ub2RlLnpJbmRleCA8PSBjYy5sYXN0WkluZGV4KXtcbiAgICAgICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBjYy5sYXN0WkluZGV4KzE7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGV2ZW50U2VuZCgpe1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIGlmKHRoaXMuZWRpdF9nYy5zdHJpbmcgPT0gXCJcIil7XG4gICAgICAgICAgICBtbS5Ub2FzdC5zaG93VG9hc3QoMSwgXCJHaWZ0Q29kZSBraMO0bmcgxJHGsOG7o2MgdHLhu5FuZ1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcmVxdWVzdCA9IG5ldyBDYXNpbm9SZXF1ZXN0LkdpZnRDb2RlUmVxdWVzdCgpO1xuICAgICAgICByZXF1ZXN0LnNldEdpZnRDb2RlKHRoaXMuZWRpdF9nYy5zdHJpbmcpO1xuICAgICAgICBTbWFydEZveFNESy5Qb3J0YWxDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5zZW5kKHJlcXVlc3QudG9TUmVxdWVzdCgpKTtcbiAgICAgICAgbW0uTG9hZGluZy5zaG93KCk7XG4gICAgfSxcbiAgICBldmVudENsb3NlKCl7XG4gICAgICAgIHRoaXMuYmFjaygpO1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgfVxufSk7XG4iXX0=
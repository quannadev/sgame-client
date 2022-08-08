
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/minipoker/MiniPokerRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a794fsr0whFK4jbUHv5rRrj', 'MiniPokerRequest');
// scripts/minipoker/MiniPokerRequest.js

"use strict";

var MiniPokerRequest = {};
MiniPokerRequest.REQUEST_NAME = {
  BET_REQUEST: "mp1"
};
MiniPokerRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.MiniPokerController.ZoneInstance.getRoomByName("minipoker").id;
  },
  setRoomId: function setRoomId(id) {
    this._roomId = id;
    return this;
  },
  getRequestName: function getRequestName() {
    return this._requestName;
  },
  toSRequest: function toSRequest() {
    return new SmartFoxSDK.SmartFox.Requests.System.ExtensionRequest(this._requestName, this._params, this._roomId);
  }
});
MiniPokerRequest.BetRequest = MiniPokerRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(MiniPokerRequest.REQUEST_NAME.BET_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.MiniPokerRequest = MiniPokerRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL21pbmlwb2tlci9NaW5pUG9rZXJSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIk1pbmlQb2tlclJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIk1pbmlQb2tlckNvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJnZXRSb29tQnlOYW1lIiwiaWQiLCJzZXRSb29tSWQiLCJnZXRSZXF1ZXN0TmFtZSIsInRvU1JlcXVlc3QiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiRXh0ZW5zaW9uUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJfc3VwZXIiLCJzZXRCZXQiLCJiZXQiLCJwdXREb3VibGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsZ0JBQWdCLEdBQUcsRUFBdkI7QUFDQUEsZ0JBQWdCLENBQUNDLFlBQWpCLEdBQWdDO0FBQzVCQyxFQUFBQSxXQUFXLEVBQUc7QUFEYyxDQUFoQztBQUdBRixnQkFBZ0IsQ0FBQ0csWUFBakIsR0FBZ0NDLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsTUFBbEIsQ0FBeUI7QUFDckRDLEVBQUFBLElBRHFELGdCQUNoREMsSUFEZ0QsRUFDM0M7QUFDTixTQUFLQyxZQUFMLEdBQW9CRCxJQUFwQjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxJQUFJTixXQUFXLENBQUNPLE9BQWhCLEVBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVSLFdBQVcsQ0FBQ1MsbUJBQVosQ0FBZ0NDLFlBQWhDLENBQTZDQyxhQUE3QyxDQUEyRCxXQUEzRCxFQUF3RUMsRUFBdkY7QUFDSCxHQUxvRDtBQU1yREMsRUFBQUEsU0FOcUQscUJBTTNDRCxFQU4yQyxFQU14QztBQUNULFNBQUtKLE9BQUwsR0FBZUksRUFBZjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBVG9EO0FBVXJERSxFQUFBQSxjQVZxRCw0QkFVckM7QUFDWixXQUFPLEtBQUtULFlBQVo7QUFDSCxHQVpvRDtBQWFyRFUsRUFBQUEsVUFicUQsd0JBYXpDO0FBQ1IsV0FBTyxJQUFJZixXQUFXLENBQUNnQixRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsTUFBOUIsQ0FBcUNDLGdCQUF6QyxDQUEwRCxLQUFLZCxZQUEvRCxFQUE2RSxLQUFLQyxPQUFsRixFQUEyRixLQUFLRSxPQUFoRyxDQUFQO0FBQ0g7QUFmb0QsQ0FBekIsQ0FBaEM7QUFpQkFaLGdCQUFnQixDQUFDd0IsVUFBakIsR0FBOEJ4QixnQkFBZ0IsQ0FBQ0csWUFBakIsQ0FBOEJHLE1BQTlCLENBQXFDO0FBQy9EQyxFQUFBQSxJQUQrRCxrQkFDekQ7QUFDRixTQUFLa0IsTUFBTCxDQUFZekIsZ0JBQWdCLENBQUNDLFlBQWpCLENBQThCQyxXQUExQztBQUNILEdBSDhEO0FBSS9Ed0IsRUFBQUEsTUFKK0Qsa0JBSXhEQyxHQUp3RCxFQUlwRDtBQUNQLFNBQUtqQixPQUFMLENBQWFrQixTQUFiLENBQXVCLEdBQXZCLEVBQTRCRCxHQUE1Qjs7QUFDQSxXQUFPLElBQVA7QUFDSDtBQVA4RCxDQUFyQyxDQUE5QjtBQVNBRSxNQUFNLENBQUM3QixnQkFBUCxHQUEwQkEsZ0JBQTFCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTWluaVBva2VyUmVxdWVzdCA9IHt9O1xuTWluaVBva2VyUmVxdWVzdC5SRVFVRVNUX05BTUUgPSB7XG4gICAgQkVUX1JFUVVFU1QgOiBcIm1wMVwiXG59O1xuTWluaVBva2VyUmVxdWVzdC5fQmFzZVJlcXVlc3QgPSBTbWFydEZveFNESy5DbGFzcy5leHRlbmQoe1xuICAgIGN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMuX3JlcXVlc3ROYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gU21hcnRGb3hTREsuTWluaVBva2VyQ29udHJvbGxlci5ab25lSW5zdGFuY2UuZ2V0Um9vbUJ5TmFtZShcIm1pbmlwb2tlclwiKS5pZDtcbiAgICB9LFxuICAgIHNldFJvb21JZChpZCl7XG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFJlcXVlc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0TmFtZTtcbiAgICB9LFxuICAgIHRvU1JlcXVlc3QoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uRXh0ZW5zaW9uUmVxdWVzdCh0aGlzLl9yZXF1ZXN0TmFtZSwgdGhpcy5fcGFyYW1zLCB0aGlzLl9yb29tSWQpO1xuICAgIH1cbn0pO1xuTWluaVBva2VyUmVxdWVzdC5CZXRSZXF1ZXN0ID0gTWluaVBva2VyUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKE1pbmlQb2tlclJlcXVlc3QuUkVRVUVTVF9OQU1FLkJFVF9SRVFVRVNUKTtcbiAgICB9LFxuICAgIHNldEJldChiZXQpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KVxud2luZG93Lk1pbmlQb2tlclJlcXVlc3QgPSBNaW5pUG9rZXJSZXF1ZXN0OyJdfQ==
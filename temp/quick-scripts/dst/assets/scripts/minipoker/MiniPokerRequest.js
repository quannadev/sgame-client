
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaXBva2VyXFxNaW5pUG9rZXJSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIk1pbmlQb2tlclJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIk1pbmlQb2tlckNvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJnZXRSb29tQnlOYW1lIiwiaWQiLCJzZXRSb29tSWQiLCJnZXRSZXF1ZXN0TmFtZSIsInRvU1JlcXVlc3QiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiRXh0ZW5zaW9uUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJfc3VwZXIiLCJzZXRCZXQiLCJiZXQiLCJwdXREb3VibGUiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsZ0JBQWdCLEdBQUcsRUFBdkI7QUFDQUEsZ0JBQWdCLENBQUNDLFlBQWpCLEdBQWdDO0FBQzVCQyxFQUFBQSxXQUFXLEVBQUc7QUFEYyxDQUFoQztBQUdBRixnQkFBZ0IsQ0FBQ0csWUFBakIsR0FBZ0NDLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsTUFBbEIsQ0FBeUI7QUFDckRDLEVBQUFBLElBRHFELGdCQUNoREMsSUFEZ0QsRUFDM0M7QUFDTixTQUFLQyxZQUFMLEdBQW9CRCxJQUFwQjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxJQUFJTixXQUFXLENBQUNPLE9BQWhCLEVBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVSLFdBQVcsQ0FBQ1MsbUJBQVosQ0FBZ0NDLFlBQWhDLENBQTZDQyxhQUE3QyxDQUEyRCxXQUEzRCxFQUF3RUMsRUFBdkY7QUFDSCxHQUxvRDtBQU1yREMsRUFBQUEsU0FOcUQscUJBTTNDRCxFQU4yQyxFQU14QztBQUNULFNBQUtKLE9BQUwsR0FBZUksRUFBZjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBVG9EO0FBVXJERSxFQUFBQSxjQVZxRCw0QkFVckM7QUFDWixXQUFPLEtBQUtULFlBQVo7QUFDSCxHQVpvRDtBQWFyRFUsRUFBQUEsVUFicUQsd0JBYXpDO0FBQ1IsV0FBTyxJQUFJZixXQUFXLENBQUNnQixRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsTUFBOUIsQ0FBcUNDLGdCQUF6QyxDQUEwRCxLQUFLZCxZQUEvRCxFQUE2RSxLQUFLQyxPQUFsRixFQUEyRixLQUFLRSxPQUFoRyxDQUFQO0FBQ0g7QUFmb0QsQ0FBekIsQ0FBaEM7QUFpQkFaLGdCQUFnQixDQUFDd0IsVUFBakIsR0FBOEJ4QixnQkFBZ0IsQ0FBQ0csWUFBakIsQ0FBOEJHLE1BQTlCLENBQXFDO0FBQy9EQyxFQUFBQSxJQUQrRCxrQkFDekQ7QUFDRixTQUFLa0IsTUFBTCxDQUFZekIsZ0JBQWdCLENBQUNDLFlBQWpCLENBQThCQyxXQUExQztBQUNILEdBSDhEO0FBSS9Ed0IsRUFBQUEsTUFKK0Qsa0JBSXhEQyxHQUp3RCxFQUlwRDtBQUNQLFNBQUtqQixPQUFMLENBQWFrQixTQUFiLENBQXVCLEdBQXZCLEVBQTRCRCxHQUE1Qjs7QUFDQSxXQUFPLElBQVA7QUFDSDtBQVA4RCxDQUFyQyxDQUE5QjtBQVNBRSxNQUFNLENBQUM3QixnQkFBUCxHQUEwQkEsZ0JBQTFCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgTWluaVBva2VyUmVxdWVzdCA9IHt9O1xyXG5NaW5pUG9rZXJSZXF1ZXN0LlJFUVVFU1RfTkFNRSA9IHtcclxuICAgIEJFVF9SRVFVRVNUIDogXCJtcDFcIlxyXG59O1xyXG5NaW5pUG9rZXJSZXF1ZXN0Ll9CYXNlUmVxdWVzdCA9IFNtYXJ0Rm94U0RLLkNsYXNzLmV4dGVuZCh7XHJcbiAgICBjdG9yKG5hbWUpe1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3ROYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU21hcnRGb3hTREsuU09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IFNtYXJ0Rm94U0RLLk1pbmlQb2tlckNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJtaW5pcG9rZXJcIikuaWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0Um9vbUlkKGlkKXtcclxuICAgICAgICB0aGlzLl9yb29tSWQgPSBpZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBnZXRSZXF1ZXN0TmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0TmFtZTtcclxuICAgIH0sXHJcbiAgICB0b1NSZXF1ZXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uRXh0ZW5zaW9uUmVxdWVzdCh0aGlzLl9yZXF1ZXN0TmFtZSwgdGhpcy5fcGFyYW1zLCB0aGlzLl9yb29tSWQpO1xyXG4gICAgfVxyXG59KTtcclxuTWluaVBva2VyUmVxdWVzdC5CZXRSZXF1ZXN0ID0gTWluaVBva2VyUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcclxuICAgIGN0b3IoKXtcclxuICAgICAgICB0aGlzLl9zdXBlcihNaW5pUG9rZXJSZXF1ZXN0LlJFUVVFU1RfTkFNRS5CRVRfUkVRVUVTVCk7XHJcbiAgICB9LFxyXG4gICAgc2V0QmV0KGJldCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSlcclxud2luZG93Lk1pbmlQb2tlclJlcXVlc3QgPSBNaW5pUG9rZXJSZXF1ZXN0OyJdfQ==
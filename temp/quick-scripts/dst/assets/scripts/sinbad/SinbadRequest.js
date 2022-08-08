
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sinbad/SinbadRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b2c0BeZ6VKYKtDGIffPpIh', 'SinbadRequest');
// scripts/sinbad/SinbadRequest.js

"use strict";

var SinbadRequest = {};
SinbadRequest.REQUEST_NAME = {
  BET_REQUEST: "sb1",
  AUTO_PLAY_REQUEST: "sb5",
  STOP_AUTO_PLAY_REQUEST: "sb6"
};
SinbadRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.SinbadController.ZoneInstance.getRoomByName("sinbad").id;
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
SinbadRequest.BetRequest = SinbadRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(SinbadRequest.REQUEST_NAME.BET_REQUEST);
  },
  setLineChan: function setLineChan() {
    this._params.putBool("lc", true);

    return this;
  },
  setLineLe: function setLineLe() {
    this._params.putBool("ll", true);

    return this;
  },
  setLine: function setLine(lines) {
    this._params.putIntArray("la", lines);

    return this;
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
SinbadRequest.AutoPlayRequest = SinbadRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(SinbadRequest.REQUEST_NAME.AUTO_PLAY_REQUEST);
  },
  setLineChan: function setLineChan() {
    this._params.putBool("lc", true);

    return this;
  },
  setLineLe: function setLineLe() {
    this._params.putBool("ll", true);

    return this;
  },
  setLine: function setLine(lines) {
    this._params.putIntArray("la", lines);

    return this;
  },
  setBet: function setBet(bet, cheat) {
    this._params.putDouble("b", bet);

    if (cheat !== undefined) this._params.putUtfString("cheat", cheat);
    return this;
  }
});
SinbadRequest.StopAutoPlayRequest = SinbadRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(SinbadRequest.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.SinbadRequest = SinbadRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpbmJhZC9TaW5iYWRSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlNpbmJhZFJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkFVVE9fUExBWV9SRVFVRVNUIiwiU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIlNpbmJhZENvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJnZXRSb29tQnlOYW1lIiwiaWQiLCJzZXRSb29tSWQiLCJnZXRSZXF1ZXN0TmFtZSIsInRvU1JlcXVlc3QiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiRXh0ZW5zaW9uUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJfc3VwZXIiLCJzZXRMaW5lQ2hhbiIsInB1dEJvb2wiLCJzZXRMaW5lTGUiLCJzZXRMaW5lIiwibGluZXMiLCJwdXRJbnRBcnJheSIsInNldEJldCIsImJldCIsInB1dERvdWJsZSIsIkF1dG9QbGF5UmVxdWVzdCIsImNoZWF0IiwidW5kZWZpbmVkIiwicHV0VXRmU3RyaW5nIiwiU3RvcEF1dG9QbGF5UmVxdWVzdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUcsRUFBcEI7QUFDQUEsYUFBYSxDQUFDQyxZQUFkLEdBQTZCO0FBQ3pCQyxFQUFBQSxXQUFXLEVBQUcsS0FEVztBQUV6QkMsRUFBQUEsaUJBQWlCLEVBQUUsS0FGTTtBQUd6QkMsRUFBQUEsc0JBQXNCLEVBQUU7QUFIQyxDQUE3QjtBQUtBSixhQUFhLENBQUNLLFlBQWQsR0FBNkJDLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsTUFBbEIsQ0FBeUI7QUFDbERDLEVBQUFBLElBRGtELGdCQUM3Q0MsSUFENkMsRUFDeEM7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Q0FBMEIsT0FBMUIsRUFBbUNGLEtBQW5DO0FBQ0osV0FBTyxJQUFQO0FBQ0g7QUFyQjZELENBQWxDLENBQWhDO0FBdUJBdEMsYUFBYSxDQUFDeUMsbUJBQWQsR0FBb0N6QyxhQUFhLENBQUNLLFlBQWQsQ0FBMkJHLE1BQTNCLENBQWtDO0FBQ2xFQyxFQUFBQSxJQURrRSxrQkFDNUQ7QUFDRixTQUFLa0IsTUFBTCxDQUFZM0IsYUFBYSxDQUFDQyxZQUFkLENBQTJCRyxzQkFBdkM7QUFDSCxHQUhpRTtBQUlsRThCLEVBQUFBLE1BSmtFLGtCQUkzREMsR0FKMkQsRUFJdkQ7QUFDUCxTQUFLdkIsT0FBTCxDQUFhd0IsU0FBYixDQUF1QixHQUF2QixFQUE0QkQsR0FBNUI7O0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFQaUUsQ0FBbEMsQ0FBcEM7QUFVQU8sTUFBTSxDQUFDMUMsYUFBUCxHQUF1QkEsYUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBTaW5iYWRSZXF1ZXN0ID0ge307XG5TaW5iYWRSZXF1ZXN0LlJFUVVFU1RfTkFNRSA9IHtcbiAgICBCRVRfUkVRVUVTVCA6IFwic2IxXCIsXG4gICAgQVVUT19QTEFZX1JFUVVFU1Q6IFwic2I1XCIsXG4gICAgU1RPUF9BVVRPX1BMQVlfUkVRVUVTVDogXCJzYjZcIlxufVxuU2luYmFkUmVxdWVzdC5fQmFzZVJlcXVlc3QgPSBTbWFydEZveFNESy5DbGFzcy5leHRlbmQoe1xuICAgIGN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMuX3JlcXVlc3ROYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gU21hcnRGb3hTREsuU2luYmFkQ29udHJvbGxlci5ab25lSW5zdGFuY2UuZ2V0Um9vbUJ5TmFtZShcInNpbmJhZFwiKS5pZDtcbiAgICB9LFxuICAgIHNldFJvb21JZChpZCl7XG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFJlcXVlc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0TmFtZTtcbiAgICB9LFxuICAgIHRvU1JlcXVlc3QoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uRXh0ZW5zaW9uUmVxdWVzdCh0aGlzLl9yZXF1ZXN0TmFtZSwgdGhpcy5fcGFyYW1zLCB0aGlzLl9yb29tSWQpO1xuICAgIH1cbn0pO1xuU2luYmFkUmVxdWVzdC5CZXRSZXF1ZXN0ID0gU2luYmFkUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKFNpbmJhZFJlcXVlc3QuUkVRVUVTVF9OQU1FLkJFVF9SRVFVRVNUKTtcbiAgICB9LFxuICAgIHNldExpbmVDaGFuKCl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGNcIiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc2V0TGluZUxlKCl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGxcIiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc2V0TGluZShsaW5lcyl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRJbnRBcnJheShcImxhXCIsIGxpbmVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRCZXQoYmV0KXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5TaW5iYWRSZXF1ZXN0LkF1dG9QbGF5UmVxdWVzdCA9IFNpbmJhZFJlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihTaW5iYWRSZXF1ZXN0LlJFUVVFU1RfTkFNRS5BVVRPX1BMQVlfUkVRVUVTVCk7XG4gICAgfSxcbiAgICBzZXRMaW5lQ2hhbigpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0Qm9vbChcImxjXCIsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHNldExpbmVMZSgpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0Qm9vbChcImxsXCIsIHRydWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHNldExpbmUobGluZXMpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0SW50QXJyYXkoXCJsYVwiLCBsaW5lcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc2V0QmV0KGJldCwgY2hlYXQpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xuICAgICAgICBpZihjaGVhdCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLnB1dFV0ZlN0cmluZyhcImNoZWF0XCIsIGNoZWF0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5TaW5iYWRSZXF1ZXN0LlN0b3BBdXRvUGxheVJlcXVlc3QgPSBTaW5iYWRSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xuICAgIGN0b3IoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoU2luYmFkUmVxdWVzdC5SRVFVRVNUX05BTUUuU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCk7XG4gICAgfSxcbiAgICBzZXRCZXQoYmV0KXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5cbndpbmRvdy5TaW5iYWRSZXF1ZXN0ID0gU2luYmFkUmVxdWVzdDtcbiJdfQ==
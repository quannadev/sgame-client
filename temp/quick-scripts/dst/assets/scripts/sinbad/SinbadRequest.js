
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcc2luYmFkXFxTaW5iYWRSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlNpbmJhZFJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkFVVE9fUExBWV9SRVFVRVNUIiwiU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIlNpbmJhZENvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJnZXRSb29tQnlOYW1lIiwiaWQiLCJzZXRSb29tSWQiLCJnZXRSZXF1ZXN0TmFtZSIsInRvU1JlcXVlc3QiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiRXh0ZW5zaW9uUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJfc3VwZXIiLCJzZXRMaW5lQ2hhbiIsInB1dEJvb2wiLCJzZXRMaW5lTGUiLCJzZXRMaW5lIiwibGluZXMiLCJwdXRJbnRBcnJheSIsInNldEJldCIsImJldCIsInB1dERvdWJsZSIsIkF1dG9QbGF5UmVxdWVzdCIsImNoZWF0IiwidW5kZWZpbmVkIiwicHV0VXRmU3RyaW5nIiwiU3RvcEF1dG9QbGF5UmVxdWVzdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUcsRUFBcEI7QUFDQUEsYUFBYSxDQUFDQyxZQUFkLEdBQTZCO0FBQ3pCQyxFQUFBQSxXQUFXLEVBQUcsS0FEVztBQUV6QkMsRUFBQUEsaUJBQWlCLEVBQUUsS0FGTTtBQUd6QkMsRUFBQUEsc0JBQXNCLEVBQUU7QUFIQyxDQUE3QjtBQUtBSixhQUFhLENBQUNLLFlBQWQsR0FBNkJDLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsTUFBbEIsQ0FBeUI7QUFDbERDLEVBQUFBLElBRGtELGdCQUM3Q0MsSUFENkMsRUFD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QWIsQ0FBMEIsT0FBMUIsRUFBbUNGLEtBQW5DO0FBQ0osV0FBTyxJQUFQO0FBQ0g7QUFyQjZELENBQWxDLENBQWhDO0FBdUJBdEMsYUFBYSxDQUFDeUMsbUJBQWQsR0FBb0N6QyxhQUFhLENBQUNLLFlBQWQsQ0FBMkJHLE1BQTNCLENBQWtDO0FBQ2xFQyxFQUFBQSxJQURrRSxrQkFDNUQ7QUFDRixTQUFLa0IsTUFBTCxDQUFZM0IsYUFBYSxDQUFDQyxZQUFkLENBQTJCRyxzQkFBdkM7QUFDSCxHQUhpRTtBQUlsRThCLEVBQUFBLE1BSmtFLGtCQUkzREMsR0FKMkQsRUFJdkQ7QUFDUCxTQUFLdkIsT0FBTCxDQUFhd0IsU0FBYixDQUF1QixHQUF2QixFQUE0QkQsR0FBNUI7O0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFQaUUsQ0FBbEMsQ0FBcEM7QUFVQU8sTUFBTSxDQUFDMUMsYUFBUCxHQUF1QkEsYUFBdkIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBTaW5iYWRSZXF1ZXN0ID0ge307XHJcblNpbmJhZFJlcXVlc3QuUkVRVUVTVF9OQU1FID0ge1xyXG4gICAgQkVUX1JFUVVFU1QgOiBcInNiMVwiLFxyXG4gICAgQVVUT19QTEFZX1JFUVVFU1Q6IFwic2I1XCIsXHJcbiAgICBTVE9QX0FVVE9fUExBWV9SRVFVRVNUOiBcInNiNlwiXHJcbn1cclxuU2luYmFkUmVxdWVzdC5fQmFzZVJlcXVlc3QgPSBTbWFydEZveFNESy5DbGFzcy5leHRlbmQoe1xyXG4gICAgY3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0TmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9yb29tSWQgPSBTbWFydEZveFNESy5TaW5iYWRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwic2luYmFkXCIpLmlkO1xyXG4gICAgfSxcclxuICAgIHNldFJvb21JZChpZCl7XHJcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gaWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVxdWVzdE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdE5hbWU7XHJcbiAgICB9LFxyXG4gICAgdG9TUmVxdWVzdCgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgU21hcnRGb3hTREsuU21hcnRGb3guUmVxdWVzdHMuU3lzdGVtLkV4dGVuc2lvblJlcXVlc3QodGhpcy5fcmVxdWVzdE5hbWUsIHRoaXMuX3BhcmFtcywgdGhpcy5fcm9vbUlkKTtcclxuICAgIH1cclxufSk7XHJcblNpbmJhZFJlcXVlc3QuQmV0UmVxdWVzdCA9IFNpbmJhZFJlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoU2luYmFkUmVxdWVzdC5SRVFVRVNUX05BTUUuQkVUX1JFUVVFU1QpO1xyXG4gICAgfSxcclxuICAgIHNldExpbmVDaGFuKCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsY1wiLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lTGUoKXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0Qm9vbChcImxsXCIsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldExpbmUobGluZXMpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRJbnRBcnJheShcImxhXCIsIGxpbmVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRCZXQoYmV0KXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59KTtcclxuU2luYmFkUmVxdWVzdC5BdXRvUGxheVJlcXVlc3QgPSBTaW5iYWRSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xyXG4gICAgY3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKFNpbmJhZFJlcXVlc3QuUkVRVUVTVF9OQU1FLkFVVE9fUExBWV9SRVFVRVNUKTtcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lQ2hhbigpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGNcIiwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0TGluZUxlKCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsbFwiLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lKGxpbmVzKXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0SW50QXJyYXkoXCJsYVwiLCBsaW5lcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0QmV0KGJldCwgY2hlYXQpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXREb3VibGUoXCJiXCIsIGJldCk7XHJcbiAgICAgICAgaWYoY2hlYXQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLnB1dFV0ZlN0cmluZyhcImNoZWF0XCIsIGNoZWF0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSk7XHJcblNpbmJhZFJlcXVlc3QuU3RvcEF1dG9QbGF5UmVxdWVzdCA9IFNpbmJhZFJlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoU2luYmFkUmVxdWVzdC5SRVFVRVNUX05BTUUuU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCk7XHJcbiAgICB9LFxyXG4gICAgc2V0QmV0KGJldCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSk7XHJcblxyXG53aW5kb3cuU2luYmFkUmVxdWVzdCA9IFNpbmJhZFJlcXVlc3Q7XHJcbiJdfQ==
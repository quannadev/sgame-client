
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/kimcuong/KimCuongRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f821cNl+lMt4Aq8lDzMbmk', 'KimCuongRequest');
// scripts/kimcuong/KimCuongRequest.js

"use strict";

var KimCuongRequest = {};
KimCuongRequest.REQUEST_NAME = {
  BET_REQUEST: "vqv1",
  AUTO_PLAY_REQUEST: "vqv5",
  STOP_AUTO_PLAY_REQUEST: "vqv6"
};
KimCuongRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.KimCuongController.ZoneInstance.getRoomByName("kimcuong").id;
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
KimCuongRequest.BetRequest = KimCuongRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(KimCuongRequest.REQUEST_NAME.BET_REQUEST);
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
KimCuongRequest.AutoPlayRequest = KimCuongRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(KimCuongRequest.REQUEST_NAME.AUTO_PLAY_REQUEST);
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
KimCuongRequest.StopAutoPlayRequest = KimCuongRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(KimCuongRequest.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.KimCuongRequest = KimCuongRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xca2ltY3VvbmdcXEtpbUN1b25nUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJLaW1DdW9uZ1JlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkFVVE9fUExBWV9SRVFVRVNUIiwiU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIktpbUN1b25nQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsImdldFJvb21CeU5hbWUiLCJpZCIsInNldFJvb21JZCIsImdldFJlcXVlc3ROYW1lIiwidG9TUmVxdWVzdCIsIlNtYXJ0Rm94IiwiUmVxdWVzdHMiLCJTeXN0ZW0iLCJFeHRlbnNpb25SZXF1ZXN0IiwiQmV0UmVxdWVzdCIsIl9zdXBlciIsInNldExpbmVDaGFuIiwicHV0Qm9vbCIsInNldExpbmVMZSIsInNldExpbmUiLCJsaW5lcyIsInB1dEludEFycmF5Iiwic2V0QmV0IiwiYmV0IiwiY2hlYXQiLCJwdXREb3VibGUiLCJ1bmRlZmluZWQiLCJwdXRVdGZTdHJpbmciLCJBdXRvUGxheVJlcXVlc3QiLCJTdG9wQXV0b1BsYXlSZXF1ZXN0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGVBQWUsR0FBRyxFQUF0QjtBQUNBQSxlQUFlLENBQUNDLFlBQWhCLEdBQStCO0FBQzNCQyxFQUFBQSxXQUFXLEVBQUcsTUFEYTtBQUUzQkMsRUFBQUEsaUJBQWlCLEVBQUUsTUFGUTtBQUczQkMsRUFBQUEsc0JBQXNCLEVBQUU7QUFIRyxDQUEvQjtBQUtBSixlQUFlLENBQUNLLFlBQWhCLEdBQStCQyxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE1BQWxCLENBQXlCO0FBQ3BEQyxFQUFBQSxJQURvRCxnQkFDL0ND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LE9BQUwsQ0FBYXlCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJGLEdBQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBbkJpRSxDQUFwQyxDQUFsQztBQXFCQW5DLGVBQWUsQ0FBQ3lDLG1CQUFoQixHQUFzQ3pDLGVBQWUsQ0FBQ0ssWUFBaEIsQ0FBNkJHLE1BQTdCLENBQW9DO0FBQ3RFQyxFQUFBQSxJQURzRSxrQkFDaEU7QUFDRixTQUFLa0IsTUFBTCxDQUFZM0IsZUFBZSxDQUFDQyxZQUFoQixDQUE2Qkcsc0JBQXpDO0FBQ0gsR0FIcUU7QUFJdEU4QixFQUFBQSxNQUpzRSxrQkFJL0RDLEdBSitELEVBSTNEO0FBQ1AsU0FBS3ZCLE9BQUwsQ0FBYXlCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJGLEdBQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBUHFFLENBQXBDLENBQXRDO0FBU0FPLE1BQU0sQ0FBQzFDLGVBQVAsR0FBeUJBLGVBQXpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgS2ltQ3VvbmdSZXF1ZXN0ID0ge307XHJcbktpbUN1b25nUmVxdWVzdC5SRVFVRVNUX05BTUUgPSB7XHJcbiAgICBCRVRfUkVRVUVTVCA6IFwidnF2MVwiLFxyXG4gICAgQVVUT19QTEFZX1JFUVVFU1Q6IFwidnF2NVwiLFxyXG4gICAgU1RPUF9BVVRPX1BMQVlfUkVRVUVTVDogXCJ2cXY2XCJcclxufVxyXG5LaW1DdW9uZ1JlcXVlc3QuX0Jhc2VSZXF1ZXN0ID0gU21hcnRGb3hTREsuQ2xhc3MuZXh0ZW5kKHtcclxuICAgIGN0b3IobmFtZSl7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdE5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTbWFydEZveFNESy5TT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gU21hcnRGb3hTREsuS2ltQ3VvbmdDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwia2ltY3VvbmdcIikuaWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0Um9vbUlkKGlkKXtcclxuICAgICAgICB0aGlzLl9yb29tSWQgPSBpZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBnZXRSZXF1ZXN0TmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0TmFtZTtcclxuICAgIH0sXHJcbiAgICB0b1NSZXF1ZXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uRXh0ZW5zaW9uUmVxdWVzdCh0aGlzLl9yZXF1ZXN0TmFtZSwgdGhpcy5fcGFyYW1zLCB0aGlzLl9yb29tSWQpO1xyXG4gICAgfVxyXG59KTtcclxuS2ltQ3VvbmdSZXF1ZXN0LkJldFJlcXVlc3QgPSBLaW1DdW9uZ1JlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoS2ltQ3VvbmdSZXF1ZXN0LlJFUVVFU1RfTkFNRS5CRVRfUkVRVUVTVCk7XHJcbiAgICB9LFxyXG4gICAgc2V0TGluZUNoYW4oKXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0Qm9vbChcImxjXCIsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldExpbmVMZSgpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGxcIiwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0TGluZShsaW5lcyl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEludEFycmF5KFwibGFcIiwgbGluZXMpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldEJldChiZXQsIGNoZWF0KXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xyXG4gICAgICAgIGlmKGNoZWF0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtcy5wdXRVdGZTdHJpbmcoXCJjaGVhdFwiLCBjaGVhdCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0pO1xyXG5LaW1DdW9uZ1JlcXVlc3QuQXV0b1BsYXlSZXF1ZXN0ID0gS2ltQ3VvbmdSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xyXG4gICAgY3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKEtpbUN1b25nUmVxdWVzdC5SRVFVRVNUX05BTUUuQVVUT19QTEFZX1JFUVVFU1QpO1xyXG4gICAgfSxcclxuICAgIHNldExpbmVDaGFuKCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsY1wiLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lTGUoKXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0Qm9vbChcImxsXCIsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldExpbmUobGluZXMpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRJbnRBcnJheShcImxhXCIsIGxpbmVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRCZXQoYmV0KXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59KTtcclxuS2ltQ3VvbmdSZXF1ZXN0LlN0b3BBdXRvUGxheVJlcXVlc3QgPSBLaW1DdW9uZ1JlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoS2ltQ3VvbmdSZXF1ZXN0LlJFUVVFU1RfTkFNRS5TVE9QX0FVVE9fUExBWV9SRVFVRVNUKTtcclxuICAgIH0sXHJcbiAgICBzZXRCZXQoYmV0KXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59KTtcclxud2luZG93LktpbUN1b25nUmVxdWVzdCA9IEtpbUN1b25nUmVxdWVzdDtcclxuIl19
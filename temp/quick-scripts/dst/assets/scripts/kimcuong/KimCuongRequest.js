
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2tpbWN1b25nL0tpbUN1b25nUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJLaW1DdW9uZ1JlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkFVVE9fUExBWV9SRVFVRVNUIiwiU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIktpbUN1b25nQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsImdldFJvb21CeU5hbWUiLCJpZCIsInNldFJvb21JZCIsImdldFJlcXVlc3ROYW1lIiwidG9TUmVxdWVzdCIsIlNtYXJ0Rm94IiwiUmVxdWVzdHMiLCJTeXN0ZW0iLCJFeHRlbnNpb25SZXF1ZXN0IiwiQmV0UmVxdWVzdCIsIl9zdXBlciIsInNldExpbmVDaGFuIiwicHV0Qm9vbCIsInNldExpbmVMZSIsInNldExpbmUiLCJsaW5lcyIsInB1dEludEFycmF5Iiwic2V0QmV0IiwiYmV0IiwiY2hlYXQiLCJwdXREb3VibGUiLCJ1bmRlZmluZWQiLCJwdXRVdGZTdHJpbmciLCJBdXRvUGxheVJlcXVlc3QiLCJTdG9wQXV0b1BsYXlSZXF1ZXN0Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGVBQWUsR0FBRyxFQUF0QjtBQUNBQSxlQUFlLENBQUNDLFlBQWhCLEdBQStCO0FBQzNCQyxFQUFBQSxXQUFXLEVBQUcsTUFEYTtBQUUzQkMsRUFBQUEsaUJBQWlCLEVBQUUsTUFGUTtBQUczQkMsRUFBQUEsc0JBQXNCLEVBQUU7QUFIRyxDQUEvQjtBQUtBSixlQUFlLENBQUNLLFlBQWhCLEdBQStCQyxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE1BQWxCLENBQXlCO0FBQ3BEQyxFQUFBQSxJQURvRCxnQkFDL0NDLElB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QUwsQ0FBYXlCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJGLEdBQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBbkJpRSxDQUFwQyxDQUFsQztBQXFCQW5DLGVBQWUsQ0FBQ3lDLG1CQUFoQixHQUFzQ3pDLGVBQWUsQ0FBQ0ssWUFBaEIsQ0FBNkJHLE1BQTdCLENBQW9DO0FBQ3RFQyxFQUFBQSxJQURzRSxrQkFDaEU7QUFDRixTQUFLa0IsTUFBTCxDQUFZM0IsZUFBZSxDQUFDQyxZQUFoQixDQUE2Qkcsc0JBQXpDO0FBQ0gsR0FIcUU7QUFJdEU4QixFQUFBQSxNQUpzRSxrQkFJL0RDLEdBSitELEVBSTNEO0FBQ1AsU0FBS3ZCLE9BQUwsQ0FBYXlCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJGLEdBQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBUHFFLENBQXBDLENBQXRDO0FBU0FPLE1BQU0sQ0FBQzFDLGVBQVAsR0FBeUJBLGVBQXpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgS2ltQ3VvbmdSZXF1ZXN0ID0ge307XG5LaW1DdW9uZ1JlcXVlc3QuUkVRVUVTVF9OQU1FID0ge1xuICAgIEJFVF9SRVFVRVNUIDogXCJ2cXYxXCIsXG4gICAgQVVUT19QTEFZX1JFUVVFU1Q6IFwidnF2NVwiLFxuICAgIFNUT1BfQVVUT19QTEFZX1JFUVVFU1Q6IFwidnF2NlwiXG59XG5LaW1DdW9uZ1JlcXVlc3QuX0Jhc2VSZXF1ZXN0ID0gU21hcnRGb3hTREsuQ2xhc3MuZXh0ZW5kKHtcbiAgICBjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLl9yZXF1ZXN0TmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTbWFydEZveFNESy5TT2JqZWN0KCk7XG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IFNtYXJ0Rm94U0RLLktpbUN1b25nQ29udHJvbGxlci5ab25lSW5zdGFuY2UuZ2V0Um9vbUJ5TmFtZShcImtpbWN1b25nXCIpLmlkO1xuICAgIH0sXG4gICAgc2V0Um9vbUlkKGlkKXtcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0UmVxdWVzdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3ROYW1lO1xuICAgIH0sXG4gICAgdG9TUmVxdWVzdCgpe1xuICAgICAgICByZXR1cm4gbmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5FeHRlbnNpb25SZXF1ZXN0KHRoaXMuX3JlcXVlc3ROYW1lLCB0aGlzLl9wYXJhbXMsIHRoaXMuX3Jvb21JZCk7XG4gICAgfVxufSk7XG5LaW1DdW9uZ1JlcXVlc3QuQmV0UmVxdWVzdCA9IEtpbUN1b25nUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKEtpbUN1b25nUmVxdWVzdC5SRVFVRVNUX05BTUUuQkVUX1JFUVVFU1QpO1xuICAgIH0sXG4gICAgc2V0TGluZUNoYW4oKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsY1wiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lTGUoKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsbFwiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lKGxpbmVzKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEludEFycmF5KFwibGFcIiwgbGluZXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHNldEJldChiZXQsIGNoZWF0KXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcbiAgICAgICAgaWYoY2hlYXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtcy5wdXRVdGZTdHJpbmcoXCJjaGVhdFwiLCBjaGVhdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuS2ltQ3VvbmdSZXF1ZXN0LkF1dG9QbGF5UmVxdWVzdCA9IEtpbUN1b25nUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKEtpbUN1b25nUmVxdWVzdC5SRVFVRVNUX05BTUUuQVVUT19QTEFZX1JFUVVFU1QpO1xuICAgIH0sXG4gICAgc2V0TGluZUNoYW4oKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsY1wiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lTGUoKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsbFwiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lKGxpbmVzKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEludEFycmF5KFwibGFcIiwgbGluZXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHNldEJldChiZXQpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbktpbUN1b25nUmVxdWVzdC5TdG9wQXV0b1BsYXlSZXF1ZXN0ID0gS2ltQ3VvbmdSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xuICAgIGN0b3IoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoS2ltQ3VvbmdSZXF1ZXN0LlJFUVVFU1RfTkFNRS5TVE9QX0FVVE9fUExBWV9SRVFVRVNUKTtcbiAgICB9LFxuICAgIHNldEJldChiZXQpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbndpbmRvdy5LaW1DdW9uZ1JlcXVlc3QgPSBLaW1DdW9uZ1JlcXVlc3Q7XG4iXX0=
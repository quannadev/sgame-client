
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/vampire/VampireRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ed9dtqAk1OI6Jc5XxWuMER', 'VampireRequest');
// scripts/vampire/VampireRequest.js

"use strict";

var VampireRequest = {};
VampireRequest.REQUEST_NAME = {
  BET_REQUEST: "vp1",
  AUTO_PLAY_REQUEST: "vp5",
  STOP_AUTO_PLAY_REQUEST: "vp6"
};
VampireRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.VampireController.ZoneInstance.getRoomByName("vampire").id;
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
VampireRequest.BetRequest = VampireRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(VampireRequest.REQUEST_NAME.BET_REQUEST);
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
VampireRequest.AutoPlayRequest = VampireRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(VampireRequest.REQUEST_NAME.AUTO_PLAY_REQUEST);
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
VampireRequest.StopAutoPlayRequest = VampireRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(VampireRequest.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.VampireRequest = VampireRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3ZhbXBpcmUvVmFtcGlyZVJlcXVlc3QuanMiXSwibmFtZXMiOlsiVmFtcGlyZVJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkFVVE9fUExBWV9SRVFVRVNUIiwiU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIlZhbXBpcmVDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwiZ2V0Um9vbUJ5TmFtZSIsImlkIiwic2V0Um9vbUlkIiwiZ2V0UmVxdWVzdE5hbWUiLCJ0b1NSZXF1ZXN0IiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkV4dGVuc2lvblJlcXVlc3QiLCJCZXRSZXF1ZXN0IiwiX3N1cGVyIiwic2V0TGluZUNoYW4iLCJwdXRCb29sIiwic2V0TGluZUxlIiwic2V0TGluZSIsImxpbmVzIiwicHV0SW50QXJyYXkiLCJzZXRCZXQiLCJiZXQiLCJjaGVhdCIsInB1dERvdWJsZSIsInVuZGVmaW5lZCIsInB1dFV0ZlN0cmluZyIsIkF1dG9QbGF5UmVxdWVzdCIsIlN0b3BBdXRvUGxheVJlcXVlc3QiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsY0FBYyxHQUFHLEVBQXJCO0FBQ0FBLGNBQWMsQ0FBQ0MsWUFBZixHQUE4QjtBQUMxQkMsRUFBQUEsV0FBVyxFQUFHLEtBRFk7QUFFMUJDLEVBQUFBLGlCQUFpQixFQUFFLEtBRk87QUFHMUJDLEVBQUFBLHNCQUFzQixFQUFFO0FBSEUsQ0FBOUI7QUFLQUosY0FBYyxDQUFDSyxZQUFmLEdBQThCQyxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE1BQWxCLENBQXlCO0FBQ25EQyxFQUFBQSxJQURtRCxnQkFDOUNDLElBRDhDLEVB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QWIsQ0FBdUIsR0FBdkIsRUFBNEJGLEdBQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBbkIrRCxDQUFuQyxDQUFqQztBQXFCQW5DLGNBQWMsQ0FBQ3lDLG1CQUFmLEdBQXFDekMsY0FBYyxDQUFDSyxZQUFmLENBQTRCRyxNQUE1QixDQUFtQztBQUNwRUMsRUFBQUEsSUFEb0Usa0JBQzlEO0FBQ0YsU0FBS2tCLE1BQUwsQ0FBWTNCLGNBQWMsQ0FBQ0MsWUFBZixDQUE0Qkcsc0JBQXhDO0FBQ0gsR0FIbUU7QUFJcEU4QixFQUFBQSxNQUpvRSxrQkFJN0RDLEdBSjZELEVBSXpEO0FBQ1AsU0FBS3ZCLE9BQUwsQ0FBYXlCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJGLEdBQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBUG1FLENBQW5DLENBQXJDO0FBU0FPLE1BQU0sQ0FBQzFDLGNBQVAsR0FBd0JBLGNBQXhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgVmFtcGlyZVJlcXVlc3QgPSB7fTtcblZhbXBpcmVSZXF1ZXN0LlJFUVVFU1RfTkFNRSA9IHtcbiAgICBCRVRfUkVRVUVTVCA6IFwidnAxXCIsXG4gICAgQVVUT19QTEFZX1JFUVVFU1Q6IFwidnA1XCIsXG4gICAgU1RPUF9BVVRPX1BMQVlfUkVRVUVTVDogXCJ2cDZcIlxufVxuVmFtcGlyZVJlcXVlc3QuX0Jhc2VSZXF1ZXN0ID0gU21hcnRGb3hTREsuQ2xhc3MuZXh0ZW5kKHtcbiAgICBjdG9yKG5hbWUpe1xuICAgICAgICB0aGlzLl9yZXF1ZXN0TmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTbWFydEZveFNESy5TT2JqZWN0KCk7XG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IFNtYXJ0Rm94U0RLLlZhbXBpcmVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwidmFtcGlyZVwiKS5pZDtcbiAgICB9LFxuICAgIHNldFJvb21JZChpZCl7XG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFJlcXVlc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0TmFtZTtcbiAgICB9LFxuICAgIHRvU1JlcXVlc3QoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uRXh0ZW5zaW9uUmVxdWVzdCh0aGlzLl9yZXF1ZXN0TmFtZSwgdGhpcy5fcGFyYW1zLCB0aGlzLl9yb29tSWQpO1xuICAgIH1cbn0pO1xuVmFtcGlyZVJlcXVlc3QuQmV0UmVxdWVzdCA9IFZhbXBpcmVSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xuICAgIGN0b3IoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoVmFtcGlyZVJlcXVlc3QuUkVRVUVTVF9OQU1FLkJFVF9SRVFVRVNUKTtcbiAgICB9LFxuICAgIHNldExpbmVDaGFuKCl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGNcIiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc2V0TGluZUxlKCl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGxcIiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc2V0TGluZShsaW5lcyl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRJbnRBcnJheShcImxhXCIsIGxpbmVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRCZXQoYmV0LCBjaGVhdCl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXREb3VibGUoXCJiXCIsIGJldCk7XG4gICAgICAgIGlmKGNoZWF0ICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMucHV0VXRmU3RyaW5nKFwiY2hlYXRcIiwgY2hlYXQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblZhbXBpcmVSZXF1ZXN0LkF1dG9QbGF5UmVxdWVzdCA9IFZhbXBpcmVSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xuICAgIGN0b3IoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoVmFtcGlyZVJlcXVlc3QuUkVRVUVTVF9OQU1FLkFVVE9fUExBWV9SRVFVRVNUKTtcbiAgICB9LFxuICAgIHNldExpbmVDaGFuKCl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGNcIiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc2V0TGluZUxlKCl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGxcIiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc2V0TGluZShsaW5lcyl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRJbnRBcnJheShcImxhXCIsIGxpbmVzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRCZXQoYmV0KXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG5WYW1waXJlUmVxdWVzdC5TdG9wQXV0b1BsYXlSZXF1ZXN0ID0gVmFtcGlyZVJlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihWYW1waXJlUmVxdWVzdC5SRVFVRVNUX05BTUUuU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCk7XG4gICAgfSxcbiAgICBzZXRCZXQoYmV0KXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSk7XG53aW5kb3cuVmFtcGlyZVJlcXVlc3QgPSBWYW1waXJlUmVxdWVzdDtcbiJdfQ==
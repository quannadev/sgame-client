
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmFtcGlyZVxcVmFtcGlyZVJlcXVlc3QuanMiXSwibmFtZXMiOlsiVmFtcGlyZVJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkFVVE9fUExBWV9SRVFVRVNUIiwiU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIlZhbXBpcmVDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwiZ2V0Um9vbUJ5TmFtZSIsImlkIiwic2V0Um9vbUlkIiwiZ2V0UmVxdWVzdE5hbWUiLCJ0b1NSZXF1ZXN0IiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkV4dGVuc2lvblJlcXVlc3QiLCJCZXRSZXF1ZXN0IiwiX3N1cGVyIiwic2V0TGluZUNoYW4iLCJwdXRCb29sIiwic2V0TGluZUxlIiwic2V0TGluZSIsImxpbmVzIiwicHV0SW50QXJyYXkiLCJzZXRCZXQiLCJiZXQiLCJjaGVhdCIsInB1dERvdWJsZSIsInVuZGVmaW5lZCIsInB1dFV0ZlN0cmluZyIsIkF1dG9QbGF5UmVxdWVzdCIsIlN0b3BBdXRvUGxheVJlcXVlc3QiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsY0FBYyxHQUFHLEVBQXJCO0FBQ0FBLGNBQWMsQ0FBQ0MsWUFBZixHQUE4QjtBQUMxQkMsRUFBQUEsV0FBVyxFQUFHLEtBRFk7QUFFMUJDLEVBQUFBLGlCQUFpQixFQUFFLEtBRk87QUFHMUJDLEVBQUFBLHNCQUFzQixFQUFFO0FBSEUsQ0FBOUI7QUFLQUosY0FBYyxDQUFDSyxZQUFmLEdBQThCQyxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE1BQWxCLENBQXlCO0FBQ25EQyxFQUFBQSxJQURtRCxnQkFDOUNDLElBRDhD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LFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJGLEdBQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBbkIrRCxDQUFuQyxDQUFqQztBQXFCQW5DLGNBQWMsQ0FBQ3lDLG1CQUFmLEdBQXFDekMsY0FBYyxDQUFDSyxZQUFmLENBQTRCRyxNQUE1QixDQUFtQztBQUNwRUMsRUFBQUEsSUFEb0Usa0JBQzlEO0FBQ0YsU0FBS2tCLE1BQUwsQ0FBWTNCLGNBQWMsQ0FBQ0MsWUFBZixDQUE0Qkcsc0JBQXhDO0FBQ0gsR0FIbUU7QUFJcEU4QixFQUFBQSxNQUpvRSxrQkFJN0RDLEdBSjZELEVBSXpEO0FBQ1AsU0FBS3ZCLE9BQUwsQ0FBYXlCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJGLEdBQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBUG1FLENBQW5DLENBQXJDO0FBU0FPLE1BQU0sQ0FBQzFDLGNBQVAsR0FBd0JBLGNBQXhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgVmFtcGlyZVJlcXVlc3QgPSB7fTtcclxuVmFtcGlyZVJlcXVlc3QuUkVRVUVTVF9OQU1FID0ge1xyXG4gICAgQkVUX1JFUVVFU1QgOiBcInZwMVwiLFxyXG4gICAgQVVUT19QTEFZX1JFUVVFU1Q6IFwidnA1XCIsXHJcbiAgICBTVE9QX0FVVE9fUExBWV9SRVFVRVNUOiBcInZwNlwiXHJcbn1cclxuVmFtcGlyZVJlcXVlc3QuX0Jhc2VSZXF1ZXN0ID0gU21hcnRGb3hTREsuQ2xhc3MuZXh0ZW5kKHtcclxuICAgIGN0b3IobmFtZSl7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdE5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcyA9IG5ldyBTbWFydEZveFNESy5TT2JqZWN0KCk7XHJcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gU21hcnRGb3hTREsuVmFtcGlyZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJ2YW1waXJlXCIpLmlkO1xyXG4gICAgfSxcclxuICAgIHNldFJvb21JZChpZCl7XHJcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gaWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVxdWVzdE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdE5hbWU7XHJcbiAgICB9LFxyXG4gICAgdG9TUmVxdWVzdCgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgU21hcnRGb3hTREsuU21hcnRGb3guUmVxdWVzdHMuU3lzdGVtLkV4dGVuc2lvblJlcXVlc3QodGhpcy5fcmVxdWVzdE5hbWUsIHRoaXMuX3BhcmFtcywgdGhpcy5fcm9vbUlkKTtcclxuICAgIH1cclxufSk7XHJcblZhbXBpcmVSZXF1ZXN0LkJldFJlcXVlc3QgPSBWYW1waXJlUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcclxuICAgIGN0b3IoKXtcclxuICAgICAgICB0aGlzLl9zdXBlcihWYW1waXJlUmVxdWVzdC5SRVFVRVNUX05BTUUuQkVUX1JFUVVFU1QpO1xyXG4gICAgfSxcclxuICAgIHNldExpbmVDaGFuKCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsY1wiLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lTGUoKXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0Qm9vbChcImxsXCIsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldExpbmUobGluZXMpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRJbnRBcnJheShcImxhXCIsIGxpbmVzKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRCZXQoYmV0LCBjaGVhdCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcclxuICAgICAgICBpZihjaGVhdCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0aGlzLl9wYXJhbXMucHV0VXRmU3RyaW5nKFwiY2hlYXRcIiwgY2hlYXQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59KTtcclxuVmFtcGlyZVJlcXVlc3QuQXV0b1BsYXlSZXF1ZXN0ID0gVmFtcGlyZVJlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoVmFtcGlyZVJlcXVlc3QuUkVRVUVTVF9OQU1FLkFVVE9fUExBWV9SRVFVRVNUKTtcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lQ2hhbigpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGNcIiwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0TGluZUxlKCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsbFwiLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lKGxpbmVzKXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0SW50QXJyYXkoXCJsYVwiLCBsaW5lcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0QmV0KGJldCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSk7XHJcblZhbXBpcmVSZXF1ZXN0LlN0b3BBdXRvUGxheVJlcXVlc3QgPSBWYW1waXJlUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcclxuICAgIGN0b3IoKXtcclxuICAgICAgICB0aGlzLl9zdXBlcihWYW1waXJlUmVxdWVzdC5SRVFVRVNUX05BTUUuU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCk7XHJcbiAgICB9LFxyXG4gICAgc2V0QmV0KGJldCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSk7XHJcbndpbmRvdy5WYW1waXJlUmVxdWVzdCA9IFZhbXBpcmVSZXF1ZXN0O1xyXG4iXX0=
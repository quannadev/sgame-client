
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/zeus/ZeusRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a2bdjwJVpHPrTQ9okwYufo', 'ZeusRequest');
// scripts/zeus/ZeusRequest.js

"use strict";

var ZeusRequest = {};
ZeusRequest.REQUEST_NAME = {
  BET_REQUEST: "zu1",
  AUTO_PLAY_REQUEST: "zu5",
  STOP_AUTO_PLAY_REQUEST: "zu6"
};
ZeusRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.ZeusController.ZoneInstance.getRoomByName("zeus").id;
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
ZeusRequest.BetRequest = ZeusRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(ZeusRequest.REQUEST_NAME.BET_REQUEST);
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
ZeusRequest.AutoPlayRequest = ZeusRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(ZeusRequest.REQUEST_NAME.AUTO_PLAY_REQUEST);
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
ZeusRequest.StopAutoPlayRequest = ZeusRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(ZeusRequest.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.ZeusRequest = ZeusRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3pldXMvWmV1c1JlcXVlc3QuanMiXSwibmFtZXMiOlsiWmV1c1JlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkFVVE9fUExBWV9SRVFVRVNUIiwiU1RPUF9BVVRPX1BMQVlfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIlpldXNDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwiZ2V0Um9vbUJ5TmFtZSIsImlkIiwic2V0Um9vbUlkIiwiZ2V0UmVxdWVzdE5hbWUiLCJ0b1NSZXF1ZXN0IiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkV4dGVuc2lvblJlcXVlc3QiLCJCZXRSZXF1ZXN0IiwiX3N1cGVyIiwic2V0TGluZUNoYW4iLCJwdXRCb29sIiwic2V0TGluZUxlIiwic2V0TGluZSIsImxpbmVzIiwicHV0SW50QXJyYXkiLCJzZXRCZXQiLCJiZXQiLCJjaGVhdCIsInB1dERvdWJsZSIsInVuZGVmaW5lZCIsInB1dFV0ZlN0cmluZyIsIkF1dG9QbGF5UmVxdWVzdCIsIlN0b3BBdXRvUGxheVJlcXVlc3QiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsV0FBVyxHQUFHLEVBQWxCO0FBQ0FBLFdBQVcsQ0FBQ0MsWUFBWixHQUEyQjtBQUN2QkMsRUFBQUEsV0FBVyxFQUFHLEtBRFM7QUFFdkJDLEVBQUFBLGlCQUFpQixFQUFFLEtBRkk7QUFHdkJDLEVBQUFBLHNCQUFzQixFQUFFO0FBSEQsQ0FBM0I7QUFLQUosV0FBVyxDQUFDSyxZQUFaLEdBQTJCQyxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE1BQWxCLENBQXlCO0FBQ2hEQyxFQUFBQSxJQURnRCxnQkFDM0NDLElBRDJDLEVBQ3RDO0FBQ04sU0FB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QixFQUE0QkYsR0FBNUI7O0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFuQnlELENBQWhDLENBQTlCO0FBcUJBbkMsV0FBVyxDQUFDeUMsbUJBQVosR0FBa0N6QyxXQUFXLENBQUNLLFlBQVosQ0FBeUJHLE1BQXpCLENBQWdDO0FBQzlEQyxFQUFBQSxJQUQ4RCxrQkFDeEQ7QUFDRixTQUFLa0IsTUFBTCxDQUFZM0IsV0FBVyxDQUFDQyxZQUFaLENBQXlCRyxzQkFBckM7QUFDSCxHQUg2RDtBQUk5RDhCLEVBQUFBLE1BSjhELGtCQUl2REMsR0FKdUQsRUFJbkQ7QUFDUCxTQUFLdkIsT0FBTCxDQUFheUIsU0FBYixDQUF1QixHQUF2QixFQUE0QkYsR0FBNUI7O0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFQNkQsQ0FBaEMsQ0FBbEM7QUFTQU8sTUFBTSxDQUFDMUMsV0FBUCxHQUFxQkEsV0FBckIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBaZXVzUmVxdWVzdCA9IHt9O1xuWmV1c1JlcXVlc3QuUkVRVUVTVF9OQU1FID0ge1xuICAgIEJFVF9SRVFVRVNUIDogXCJ6dTFcIixcbiAgICBBVVRPX1BMQVlfUkVRVUVTVDogXCJ6dTVcIixcbiAgICBTVE9QX0FVVE9fUExBWV9SRVFVRVNUOiBcInp1NlwiXG59XG5aZXVzUmVxdWVzdC5fQmFzZVJlcXVlc3QgPSBTbWFydEZveFNESy5DbGFzcy5leHRlbmQoe1xuICAgIGN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMuX3JlcXVlc3ROYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gU21hcnRGb3hTREsuWmV1c0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJ6ZXVzXCIpLmlkO1xuICAgIH0sXG4gICAgc2V0Um9vbUlkKGlkKXtcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0UmVxdWVzdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3ROYW1lO1xuICAgIH0sXG4gICAgdG9TUmVxdWVzdCgpe1xuICAgICAgICByZXR1cm4gbmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5FeHRlbnNpb25SZXF1ZXN0KHRoaXMuX3JlcXVlc3ROYW1lLCB0aGlzLl9wYXJhbXMsIHRoaXMuX3Jvb21JZCk7XG4gICAgfVxufSk7XG5aZXVzUmVxdWVzdC5CZXRSZXF1ZXN0ID0gWmV1c1JlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihaZXVzUmVxdWVzdC5SRVFVRVNUX05BTUUuQkVUX1JFUVVFU1QpO1xuICAgIH0sXG4gICAgc2V0TGluZUNoYW4oKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsY1wiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lTGUoKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsbFwiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lKGxpbmVzKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEludEFycmF5KFwibGFcIiwgbGluZXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHNldEJldChiZXQsIGNoZWF0KXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcbiAgICAgICAgaWYoY2hlYXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtcy5wdXRVdGZTdHJpbmcoXCJjaGVhdFwiLCBjaGVhdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pO1xuWmV1c1JlcXVlc3QuQXV0b1BsYXlSZXF1ZXN0ID0gWmV1c1JlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihaZXVzUmVxdWVzdC5SRVFVRVNUX05BTUUuQVVUT19QTEFZX1JFUVVFU1QpO1xuICAgIH0sXG4gICAgc2V0TGluZUNoYW4oKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsY1wiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lTGUoKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsbFwiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lKGxpbmVzKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEludEFycmF5KFwibGFcIiwgbGluZXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHNldEJldChiZXQpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcblpldXNSZXF1ZXN0LlN0b3BBdXRvUGxheVJlcXVlc3QgPSBaZXVzUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKFpldXNSZXF1ZXN0LlJFUVVFU1RfTkFNRS5TVE9QX0FVVE9fUExBWV9SRVFVRVNUKTtcbiAgICB9LFxuICAgIHNldEJldChiZXQpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXQpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KTtcbndpbmRvdy5aZXVzUmVxdWVzdCA9IFpldXNSZXF1ZXN0O1xuIl19
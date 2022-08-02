
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/candy/CandyRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '60c61865f5BUY3khL1u9Au4', 'CandyRequest');
// scripts/candy/CandyRequest.js

"use strict";

var CandyRequest = {};
CandyRequest.REQUEST_NAME = {
  BET_REQUEST: "cd1"
};
CandyRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.CandyController.ZoneInstance.getRoomByName("candy").id;
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
CandyRequest.BetRequest = CandyRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(CandyRequest.REQUEST_NAME.BET_REQUEST);
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
window.CandyRequest = CandyRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2FuZHlcXENhbmR5UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJDYW5keVJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIkNhbmR5Q29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsImdldFJvb21CeU5hbWUiLCJpZCIsInNldFJvb21JZCIsImdldFJlcXVlc3ROYW1lIiwidG9TUmVxdWVzdCIsIlNtYXJ0Rm94IiwiUmVxdWVzdHMiLCJTeXN0ZW0iLCJFeHRlbnNpb25SZXF1ZXN0IiwiQmV0UmVxdWVzdCIsIl9zdXBlciIsInNldExpbmVDaGFuIiwicHV0Qm9vbCIsInNldExpbmVMZSIsInNldExpbmUiLCJsaW5lcyIsInB1dEludEFycmF5Iiwic2V0QmV0IiwiYmV0IiwiY2hlYXQiLCJwdXREb3VibGUiLCJ1bmRlZmluZWQiLCJwdXRVdGZTdHJpbmciLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHLEVBQW5CO0FBQ0FBLFlBQVksQ0FBQ0MsWUFBYixHQUE0QjtBQUN4QkMsRUFBQUEsV0FBVyxFQUFHO0FBRFUsQ0FBNUI7QUFHQUYsWUFBWSxDQUFDRyxZQUFiLEdBQTRCQyxXQUFXLENBQUNDLEtBQVosQ0FBa0JDLE1BQWxCLENBQXlCO0FBQ2pEQyxFQUFBQSxJQURpRCxnQkFDNUNDLElBRDRDLEVBQ3ZDO0FBQ04sU0FBS0MsWUFBTCxHQUFvQkQsSUFBcEI7QUFDQSxTQUFLRSxPQUFMLEdBQWUsSUFBSU4sV0FBVyxDQUFDTyxPQUFoQixFQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlUixXQUFXLENBQUNTLGVBQVosQ0FBNEJDLFlBQTVCLENBQXlDQyxhQUF6QyxDQUF1RCxPQUF2RCxFQUFnRUMsRUFBL0U7QUFDSCxHQUxnRDtBQU1qREMsRUFBQUEsU0FOaUQscUJBTXZDRCxFQU51QyxFQU1wQztBQUNULFNBQUtKLE9BQUwsR0FBZUksRUFBZjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBVGdEO0FBVWpERSxFQUFBQSxjQVZpRCw0QkFVakM7QUFDWixXQUFPLEtBQUtULFlBQVo7QUFDSCxHQVpnRDtBQWFqRFUsRUFBQUEsVUFiaUQsd0JBYXJDO0FBQ1IsV0FBTyxJQUFJZixXQUFXLENBQUNnQixRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsTUFBOUIsQ0FBcUNDLGdCQUF6QyxDQUEwRCxLQUFLZCxZQUEvRCxFQUE2RSxLQUFLQyxPQUFsRixFQUEyRixLQUFLRSxPQUFoRyxDQUFQO0FBQ0g7QUFmZ0QsQ0FBekIsQ0FBNUI7QUFpQkFaLFlBQVksQ0FBQ3dCLFVBQWIsR0FBMEJ4QixZQUFZLENBQUNHLFlBQWIsQ0FBMEJHLE1BQTFCLENBQWlDO0FBQ3ZEQyxFQUFBQSxJQUR1RCxrQkFDakQ7QUFDRixTQUFLa0IsTUFBTCxDQUFZekIsWUFBWSxDQUFDQyxZQUFiLENBQTBCQyxXQUF0QztBQUNILEdBSHNEO0FBSXZEd0IsRUFBQUEsV0FKdUQseUJBSTFDO0FBQ1QsU0FBS2hCLE9BQUwsQ0FBYWlCLE9BQWIsQ0FBcUIsSUFBckIsRUFBMkIsSUFBM0I7O0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FQc0Q7QUFRdkRDLEVBQUFBLFNBUnVELHVCQVE1QztBQUNQLFNBQUtsQixPQUFMLENBQWFpQixPQUFiLENBQXFCLElBQXJCLEVBQTJCLElBQTNCOztBQUNBLFdBQU8sSUFBUDtBQUNILEdBWHNEO0FBWXZERSxFQUFBQSxPQVp1RCxtQkFZL0NDLEtBWitDLEVBWXpDO0FBQ1YsU0FBS3BCLE9BQUwsQ0FBYXFCLFdBQWIsQ0FBeUIsSUFBekIsRUFBK0JELEtBQS9COztBQUNBLFdBQU8sSUFBUDtBQUNILEdBZnNEO0FBZ0J2REUsRUFBQUEsTUFoQnVELGtCQWdCaERDLEdBaEJnRCxFQWdCM0NDLEtBaEIyQyxFQWdCckM7QUFDZCxTQUFLeEIsT0FBTCxDQUFheUIsU0FBYixDQUF1QixHQUF2QixFQUE0QkYsR0FBNUI7O0FBQ0EsUUFBR0MsS0FBSyxLQUFLRSxTQUFiLEVBQ0ksS0FBSzFCLE9BQUwsQ0FBYTJCLFlBQWIsQ0FBMEIsT0FBMUIsRUFBbUNILEtBQW5DO0FBQ0osV0FBTyxJQUFQO0FBQ0g7QUFyQnNELENBQWpDLENBQTFCO0FBdUJBSSxNQUFNLENBQUN0QyxZQUFQLEdBQXNCQSxZQUF0QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IENhbmR5UmVxdWVzdCA9IHt9O1xyXG5DYW5keVJlcXVlc3QuUkVRVUVTVF9OQU1FID0ge1xyXG4gICAgQkVUX1JFUVVFU1QgOiBcImNkMVwiXHJcbn07XHJcbkNhbmR5UmVxdWVzdC5fQmFzZVJlcXVlc3QgPSBTbWFydEZveFNESy5DbGFzcy5leHRlbmQoe1xyXG4gICAgY3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0TmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9yb29tSWQgPSBTbWFydEZveFNESy5DYW5keUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJjYW5keVwiKS5pZDtcclxuICAgIH0sXHJcbiAgICBzZXRSb29tSWQoaWQpe1xyXG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IGlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGdldFJlcXVlc3ROYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3ROYW1lO1xyXG4gICAgfSxcclxuICAgIHRvU1JlcXVlc3QoKXtcclxuICAgICAgICByZXR1cm4gbmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5FeHRlbnNpb25SZXF1ZXN0KHRoaXMuX3JlcXVlc3ROYW1lLCB0aGlzLl9wYXJhbXMsIHRoaXMuX3Jvb21JZCk7XHJcbiAgICB9XHJcbn0pO1xyXG5DYW5keVJlcXVlc3QuQmV0UmVxdWVzdCA9IENhbmR5UmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcclxuICAgIGN0b3IoKXtcclxuICAgICAgICB0aGlzLl9zdXBlcihDYW5keVJlcXVlc3QuUkVRVUVTVF9OQU1FLkJFVF9SRVFVRVNUKTtcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lQ2hhbigpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCb29sKFwibGNcIiwgdHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0TGluZUxlKCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsbFwiLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRMaW5lKGxpbmVzKXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0SW50QXJyYXkoXCJsYVwiLCBsaW5lcyk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0QmV0KGJldCwgY2hlYXQpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXREb3VibGUoXCJiXCIsIGJldCk7XHJcbiAgICAgICAgaWYoY2hlYXQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgdGhpcy5fcGFyYW1zLnB1dFV0ZlN0cmluZyhcImNoZWF0XCIsIGNoZWF0KTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSlcclxud2luZG93LkNhbmR5UmVxdWVzdCA9IENhbmR5UmVxdWVzdDtcclxuIl19
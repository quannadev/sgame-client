
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/sieuxe/SieuXeRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c530eLlpBFBFaKDQLFz3Zod', 'SieuXeRequest');
// scripts/sieuxe/SieuXeRequest.js

"use strict";

var SieuXeRequest = {};
SieuXeRequest.REQUEST_NAME = {
  BET_REQUEST: "sx1"
};
SieuXeRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.SieuXeController.ZoneInstance.getRoomByName("sieuxe").id;
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
SieuXeRequest.BetRequest = SieuXeRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(SieuXeRequest.REQUEST_NAME.BET_REQUEST);
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
window.SieuXeRequest = SieuXeRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3NpZXV4ZS9TaWV1WGVSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlNpZXVYZVJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIlNpZXVYZUNvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJnZXRSb29tQnlOYW1lIiwiaWQiLCJzZXRSb29tSWQiLCJnZXRSZXF1ZXN0TmFtZSIsInRvU1JlcXVlc3QiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiRXh0ZW5zaW9uUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJfc3VwZXIiLCJzZXRMaW5lQ2hhbiIsInB1dEJvb2wiLCJzZXRMaW5lTGUiLCJzZXRMaW5lIiwibGluZXMiLCJwdXRJbnRBcnJheSIsInNldEJldCIsImJldCIsImNoZWF0IiwicHV0RG91YmxlIiwidW5kZWZpbmVkIiwicHV0VXRmU3RyaW5nIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLGFBQWEsR0FBRyxFQUFwQjtBQUNBQSxhQUFhLENBQUNDLFlBQWQsR0FBNkI7QUFDekJDLEVBQUFBLFdBQVcsRUFBRztBQURXLENBQTdCO0FBR0FGLGFBQWEsQ0FBQ0csWUFBZCxHQUE2QkMsV0FBVyxDQUFDQyxLQUFaLENBQWtCQyxNQUFsQixDQUF5QjtBQUNsREMsRUFBQUEsSUFEa0QsZ0JBQzdDQyxJQUQ2QyxFQUN4QztBQUNOLFNBQUtDLFlBQUwsR0FBb0JELElBQXBCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlLElBQUlOLFdBQVcsQ0FBQ08sT0FBaEIsRUFBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZVIsV0FBVyxDQUFDUyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLGFBQTFDLENBQXdELFFBQXhELEVBQWtFQyxFQUFqRjtBQUNILEdBTGlEO0FBTWxEQyxFQUFBQSxTQU5rRCxxQkFNeENELEVBTndDLEVBTXJDO0FBQ1QsU0FBS0osT0FBTCxHQUFlSSxFQUFmO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FUaUQ7QUFVbERFLEVBQUFBLGNBVmtELDRCQVVsQztBQUNaLFdBQU8sS0FBS1QsWUFBWjtBQUNILEdBWmlEO0FBYWxEVSxFQUFBQSxVQWJrRCx3QkFhdEM7QUFDUixXQUFPLElBQUlmLFdBQVcsQ0FBQ2dCLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxNQUE5QixDQUFxQ0MsZ0JBQXpDLENBQTBELEtBQUtkLFlBQS9ELEVBQTZFLEtBQUtDLE9BQWxGLEVBQTJGLEtBQUtFLE9BQWhHLENBQVA7QUFDSDtBQWZpRCxDQUF6QixDQUE3QjtBQWlCQVosYUFBYSxDQUFDd0IsVUFBZCxHQUEyQnhCLGFBQWEsQ0FBQ0csWUFBZCxDQUEyQkcsTUFBM0IsQ0FBa0M7QUFDekRDLEVBQUFBLElBRHlELGtCQUNuRDtBQUNGLFNBQUtrQixNQUFMLENBQVl6QixhQUFhLENBQUNDLFlBQWQsQ0FBMkJDLFdBQXZDO0FBQ0gsR0FId0Q7QUFJekR3QixFQUFBQSxXQUp5RCx5QkFJNUM7QUFDVCxTQUFLaEIsT0FBTCxDQUFhaUIsT0FBYixDQUFxQixJQUFyQixFQUEyQixJQUEzQjs7QUFDQSxXQUFPLElBQVA7QUFDSCxHQVB3RDtBQVF6REMsRUFBQUEsU0FSeUQsdUJBUTlDO0FBQ1AsU0FBS2xCLE9BQUwsQ0FBYWlCLE9BQWIsQ0FBcUIsSUFBckIsRUFBMkIsSUFBM0I7O0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FYd0Q7QUFZekRFLEVBQUFBLE9BWnlELG1CQVlqREMsS0FaaUQsRUFZM0M7QUFDVixTQUFLcEIsT0FBTCxDQUFhcUIsV0FBYixDQUF5QixJQUF6QixFQUErQkQsS0FBL0I7O0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0Fmd0Q7QUFnQnpERSxFQUFBQSxNQWhCeUQsa0JBZ0JsREMsR0FoQmtELEVBZ0I3Q0MsS0FoQjZDLEVBZ0J2QztBQUNkLFNBQUt4QixPQUFMLENBQWF5QixTQUFiLENBQXVCLEdBQXZCLEVBQTRCRixHQUE1Qjs7QUFDQSxRQUFHQyxLQUFLLEtBQUtFLFNBQWIsRUFDSSxLQUFLMUIsT0FBTCxDQUFhMkIsWUFBYixDQUEwQixPQUExQixFQUFtQ0gsS0FBbkM7QUFDSixXQUFPLElBQVA7QUFDSDtBQXJCd0QsQ0FBbEMsQ0FBM0I7QUF1QkFJLE1BQU0sQ0FBQ3RDLGFBQVAsR0FBdUJBLGFBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgU2lldVhlUmVxdWVzdCA9IHt9O1xuU2lldVhlUmVxdWVzdC5SRVFVRVNUX05BTUUgPSB7XG4gICAgQkVUX1JFUVVFU1QgOiBcInN4MVwiXG59XG5TaWV1WGVSZXF1ZXN0Ll9CYXNlUmVxdWVzdCA9IFNtYXJ0Rm94U0RLLkNsYXNzLmV4dGVuZCh7XG4gICAgY3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5fcmVxdWVzdE5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU21hcnRGb3hTREsuU09iamVjdCgpO1xuICAgICAgICB0aGlzLl9yb29tSWQgPSBTbWFydEZveFNESy5TaWV1WGVDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwic2lldXhlXCIpLmlkO1xuICAgIH0sXG4gICAgc2V0Um9vbUlkKGlkKXtcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0UmVxdWVzdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3ROYW1lO1xuICAgIH0sXG4gICAgdG9TUmVxdWVzdCgpe1xuICAgICAgICByZXR1cm4gbmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5FeHRlbnNpb25SZXF1ZXN0KHRoaXMuX3JlcXVlc3ROYW1lLCB0aGlzLl9wYXJhbXMsIHRoaXMuX3Jvb21JZCk7XG4gICAgfVxufSk7XG5TaWV1WGVSZXF1ZXN0LkJldFJlcXVlc3QgPSBTaWV1WGVSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xuICAgIGN0b3IoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoU2lldVhlUmVxdWVzdC5SRVFVRVNUX05BTUUuQkVUX1JFUVVFU1QpO1xuICAgIH0sXG4gICAgc2V0TGluZUNoYW4oKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsY1wiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lTGUoKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJvb2woXCJsbFwiLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRMaW5lKGxpbmVzKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEludEFycmF5KFwibGFcIiwgbGluZXMpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHNldEJldChiZXQsIGNoZWF0KXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0KTtcbiAgICAgICAgaWYoY2hlYXQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuX3BhcmFtcy5wdXRVdGZTdHJpbmcoXCJjaGVhdFwiLCBjaGVhdCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pXG53aW5kb3cuU2lldVhlUmVxdWVzdCA9IFNpZXVYZVJlcXVlc3Q7XG4iXX0=
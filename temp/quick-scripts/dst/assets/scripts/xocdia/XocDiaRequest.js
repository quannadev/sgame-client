
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/xocdia/XocDiaRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77ff6mK23pEzanbeKctxfRt', 'XocDiaRequest');
// scripts/xocdia/XocDiaRequest.js

"use strict";

var XocDiaRequest = {};
XocDiaRequest.REQUEST_NAME = {
  BET_REQUEST: "xd2",
  HISTORY_RESULT: "xd4"
};
XocDiaRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia").id;
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
XocDiaRequest.BetRequest = XocDiaRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(XocDiaRequest.REQUEST_NAME.BET_REQUEST);
  },
  setTypePot: function setTypePot(type) {
    this._params.putByte("t", type);

    return this;
  },
  setBetChip: function setBetChip(betChip) {
    this._params.putDouble("b", betChip);

    return this;
  }
});
XocDiaRequest.HistoryResultRequest = XocDiaRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(XocDiaRequest.REQUEST_NAME.HISTORY_RESULT);
  }
});
window.XocDiaRequest = XocDiaRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3hvY2RpYS9Yb2NEaWFSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlhvY0RpYVJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkhJU1RPUllfUkVTVUxUIiwiX0Jhc2VSZXF1ZXN0IiwiU21hcnRGb3hTREsiLCJDbGFzcyIsImV4dGVuZCIsImN0b3IiLCJuYW1lIiwiX3JlcXVlc3ROYW1lIiwiX3BhcmFtcyIsIlNPYmplY3QiLCJfcm9vbUlkIiwiWG9jRGlhQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsImdldFJvb21CeU5hbWUiLCJpZCIsInNldFJvb21JZCIsImdldFJlcXVlc3ROYW1lIiwidG9TUmVxdWVzdCIsIlNtYXJ0Rm94IiwiUmVxdWVzdHMiLCJTeXN0ZW0iLCJFeHRlbnNpb25SZXF1ZXN0IiwiQmV0UmVxdWVzdCIsIl9zdXBlciIsInNldFR5cGVQb3QiLCJ0eXBlIiwicHV0Qnl0ZSIsInNldEJldENoaXAiLCJiZXRDaGlwIiwicHV0RG91YmxlIiwiSGlzdG9yeVJlc3VsdFJlcXVlc3QiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGFBQWEsQ0FBQ0MsWUFBZCxHQUE2QjtBQUN6QkMsRUFBQUEsV0FBVyxFQUFHLEtBRFc7QUFFekJDLEVBQUFBLGNBQWMsRUFBRTtBQUZTLENBQTdCO0FBSUFILGFBQWEsQ0FBQ0ksWUFBZCxHQUE2QkMsV0FBVyxDQUFDQyxLQUFaLENBQWtCQyxNQUFsQixDQUF5QjtBQUNsREMsRUFBQUEsSUFEa0QsZ0JBQzdDQyxJQUQ2QyxFQUN4QztBQUNOLFNBQUtDLFlBQUwsR0FBb0JELElBQXBCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlLElBQUlOLFdBQVcsQ0FBQ08sT0FBaEIsRUFBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZVIsV0FBVyxDQUFDUyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLGFBQTFDLENBQXdELFFBQXhELEVBQWtFQyxFQUFqRjtBQUNILEdBTGlEO0FBTWxEQyxFQUFBQSxTQU5rRCxxQkFNeENELEVBTndDLEVBTXJDO0FBQ1QsU0FBS0osT0FBTCxHQUFlSSxFQUFmO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FUaUQ7QUFVbERFLEVBQUFBLGNBVmtELDRCQVVsQztBQUNaLFdBQU8sS0FBS1QsWUFBWjtBQUNILEdBWmlEO0FBYWxEVSxFQUFBQSxVQWJrRCx3QkFhdEM7QUFDUixXQUFPLElBQUlmLFdBQVcsQ0FBQ2dCLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxNQUE5QixDQUFxQ0MsZ0JBQXpDLENBQTBELEtBQUtkLFlBQS9ELEVBQTZFLEtBQUtDLE9BQWxGLEVBQTJGLEtBQUtFLE9BQWhHLENBQVA7QUFDSDtBQWZpRCxDQUF6QixDQUE3QjtBQWtCQWIsYUFBYSxDQUFDeUIsVUFBZCxHQUEyQnpCLGFBQWEsQ0FBQ0ksWUFBZCxDQUEyQkcsTUFBM0IsQ0FBa0M7QUFDekRDLEVBQUFBLElBRHlELGtCQUNuRDtBQUNGLFNBQUtrQixNQUFMLENBQVkxQixhQUFhLENBQUNDLFlBQWQsQ0FBMkJDLFdBQXZDO0FBQ0gsR0FId0Q7QUFJekR5QixFQUFBQSxVQUp5RCxzQkFJOUNDLElBSjhDLEVBSXpDO0FBQ1osU0FBS2pCLE9BQUwsQ0FBYWtCLE9BQWIsQ0FBcUIsR0FBckIsRUFBMEJELElBQTFCOztBQUNBLFdBQU8sSUFBUDtBQUNILEdBUHdEO0FBUXpERSxFQUFBQSxVQVJ5RCxzQkFROUNDLE9BUjhDLEVBUXRDO0FBQ2YsU0FBS3BCLE9BQUwsQ0FBYXFCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJELE9BQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBWHdELENBQWxDLENBQTNCO0FBYUEvQixhQUFhLENBQUNpQyxvQkFBZCxHQUFxQ2pDLGFBQWEsQ0FBQ0ksWUFBZCxDQUEyQkcsTUFBM0IsQ0FBa0M7QUFDbkVDLEVBQUFBLElBRG1FLGtCQUM3RDtBQUNGLFNBQUtrQixNQUFMLENBQVkxQixhQUFhLENBQUNDLFlBQWQsQ0FBMkJFLGNBQXZDO0FBQ0g7QUFIa0UsQ0FBbEMsQ0FBckM7QUFLQStCLE1BQU0sQ0FBQ2xDLGFBQVAsR0FBdUJBLGFBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgWG9jRGlhUmVxdWVzdCA9IHt9O1xuWG9jRGlhUmVxdWVzdC5SRVFVRVNUX05BTUUgPSB7XG4gICAgQkVUX1JFUVVFU1QgOiBcInhkMlwiLFxuICAgIEhJU1RPUllfUkVTVUxUOiBcInhkNFwiXG59XG5Yb2NEaWFSZXF1ZXN0Ll9CYXNlUmVxdWVzdCA9IFNtYXJ0Rm94U0RLLkNsYXNzLmV4dGVuZCh7XG4gICAgY3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5fcmVxdWVzdE5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU21hcnRGb3hTREsuU09iamVjdCgpO1xuICAgICAgICB0aGlzLl9yb29tSWQgPSBTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwieG9jZGlhXCIpLmlkO1xuICAgIH0sXG4gICAgc2V0Um9vbUlkKGlkKXtcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gaWQ7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgZ2V0UmVxdWVzdE5hbWUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3ROYW1lO1xuICAgIH0sXG4gICAgdG9TUmVxdWVzdCgpe1xuICAgICAgICByZXR1cm4gbmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5FeHRlbnNpb25SZXF1ZXN0KHRoaXMuX3JlcXVlc3ROYW1lLCB0aGlzLl9wYXJhbXMsIHRoaXMuX3Jvb21JZCk7XG4gICAgfVxufSk7XG5cblhvY0RpYVJlcXVlc3QuQmV0UmVxdWVzdCA9IFhvY0RpYVJlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihYb2NEaWFSZXF1ZXN0LlJFUVVFU1RfTkFNRS5CRVRfUkVRVUVTVCk7XG4gICAgfSxcbiAgICBzZXRUeXBlUG90KHR5cGUpe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0Qnl0ZShcInRcIiwgdHlwZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG4gICAgc2V0QmV0Q2hpcChiZXRDaGlwKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0Q2hpcCk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn0pXG5Yb2NEaWFSZXF1ZXN0Lkhpc3RvcnlSZXN1bHRSZXF1ZXN0ID0gWG9jRGlhUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKFhvY0RpYVJlcXVlc3QuUkVRVUVTVF9OQU1FLkhJU1RPUllfUkVTVUxUKTtcbiAgICB9XG59KVxud2luZG93LlhvY0RpYVJlcXVlc3QgPSBYb2NEaWFSZXF1ZXN0O1xuIl19
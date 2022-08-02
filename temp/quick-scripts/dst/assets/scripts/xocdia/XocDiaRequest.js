
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xceG9jZGlhXFxYb2NEaWFSZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlhvY0RpYVJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkhJU1RPUllfUkVTVUxUIiwiX0Jhc2VSZXF1ZXN0IiwiU21hcnRGb3hTREsiLCJDbGFzcyIsImV4dGVuZCIsImN0b3IiLCJuYW1lIiwiX3JlcXVlc3ROYW1lIiwiX3BhcmFtcyIsIlNPYmplY3QiLCJfcm9vbUlkIiwiWG9jRGlhQ29udHJvbGxlciIsIlpvbmVJbnN0YW5jZSIsImdldFJvb21CeU5hbWUiLCJpZCIsInNldFJvb21JZCIsImdldFJlcXVlc3ROYW1lIiwidG9TUmVxdWVzdCIsIlNtYXJ0Rm94IiwiUmVxdWVzdHMiLCJTeXN0ZW0iLCJFeHRlbnNpb25SZXF1ZXN0IiwiQmV0UmVxdWVzdCIsIl9zdXBlciIsInNldFR5cGVQb3QiLCJ0eXBlIiwicHV0Qnl0ZSIsInNldEJldENoaXAiLCJiZXRDaGlwIiwicHV0RG91YmxlIiwiSGlzdG9yeVJlc3VsdFJlcXVlc3QiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsYUFBYSxHQUFHLEVBQXBCO0FBQ0FBLGFBQWEsQ0FBQ0MsWUFBZCxHQUE2QjtBQUN6QkMsRUFBQUEsV0FBVyxFQUFHLEtBRFc7QUFFekJDLEVBQUFBLGNBQWMsRUFBRTtBQUZTLENBQTdCO0FBSUFILGFBQWEsQ0FBQ0ksWUFBZCxHQUE2QkMsV0FBVyxDQUFDQyxLQUFaLENBQWtCQyxNQUFsQixDQUF5QjtBQUNsREMsRUFBQUEsSUFEa0QsZ0JBQzdDQyxJQUQ2QyxFQUN4QztBQUNOLFNBQUtDLFlBQUwsR0FBb0JELElBQXBCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlLElBQUlOLFdBQVcsQ0FBQ08sT0FBaEIsRUFBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZVIsV0FBVyxDQUFDUyxnQkFBWixDQUE2QkMsWUFBN0IsQ0FBMENDLGFBQTFDLENBQXdELFFBQXhELEVBQWtFQyxFQUFqRjtBQUNILEdBTGlEO0FBTWxEQyxFQUFBQSxTQU5rRCxxQkFNeENELEVBTndDLEVBTXJDO0FBQ1QsU0FBS0osT0FBTCxHQUFlSSxFQUFmO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FUaUQ7QUFVbERFLEVBQUFBLGNBVmtELDRCQVVsQztBQUNaLFdBQU8sS0FBS1QsWUFBWjtBQUNILEdBWmlEO0FBYWxEVSxFQUFBQSxVQWJrRCx3QkFhdEM7QUFDUixXQUFPLElBQUlmLFdBQVcsQ0FBQ2dCLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxNQUE5QixDQUFxQ0MsZ0JBQXpDLENBQTBELEtBQUtkLFlBQS9ELEVBQTZFLEtBQUtDLE9BQWxGLEVBQTJGLEtBQUtFLE9BQWhHLENBQVA7QUFDSDtBQWZpRCxDQUF6QixDQUE3QjtBQWtCQWIsYUFBYSxDQUFDeUIsVUFBZCxHQUEyQnpCLGFBQWEsQ0FBQ0ksWUFBZCxDQUEyQkcsTUFBM0IsQ0FBa0M7QUFDekRDLEVBQUFBLElBRHlELGtCQUNuRDtBQUNGLFNBQUtrQixNQUFMLENBQVkxQixhQUFhLENBQUNDLFlBQWQsQ0FBMkJDLFdBQXZDO0FBQ0gsR0FId0Q7QUFJekR5QixFQUFBQSxVQUp5RCxzQkFJOUNDLElBSjhDLEVBSXpDO0FBQ1osU0FBS2pCLE9BQUwsQ0FBYWtCLE9BQWIsQ0FBcUIsR0FBckIsRUFBMEJELElBQTFCOztBQUNBLFdBQU8sSUFBUDtBQUNILEdBUHdEO0FBUXpERSxFQUFBQSxVQVJ5RCxzQkFROUNDLE9BUjhDLEVBUXRDO0FBQ2YsU0FBS3BCLE9BQUwsQ0FBYXFCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJELE9BQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBWHdELENBQWxDLENBQTNCO0FBYUEvQixhQUFhLENBQUNpQyxvQkFBZCxHQUFxQ2pDLGFBQWEsQ0FBQ0ksWUFBZCxDQUEyQkcsTUFBM0IsQ0FBa0M7QUFDbkVDLEVBQUFBLElBRG1FLGtCQUM3RDtBQUNGLFNBQUtrQixNQUFMLENBQVkxQixhQUFhLENBQUNDLFlBQWQsQ0FBMkJFLGNBQXZDO0FBQ0g7QUFIa0UsQ0FBbEMsQ0FBckM7QUFLQStCLE1BQU0sQ0FBQ2xDLGFBQVAsR0FBdUJBLGFBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgWG9jRGlhUmVxdWVzdCA9IHt9O1xyXG5Yb2NEaWFSZXF1ZXN0LlJFUVVFU1RfTkFNRSA9IHtcclxuICAgIEJFVF9SRVFVRVNUIDogXCJ4ZDJcIixcclxuICAgIEhJU1RPUllfUkVTVUxUOiBcInhkNFwiXHJcbn1cclxuWG9jRGlhUmVxdWVzdC5fQmFzZVJlcXVlc3QgPSBTbWFydEZveFNESy5DbGFzcy5leHRlbmQoe1xyXG4gICAgY3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0TmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9yb29tSWQgPSBTbWFydEZveFNESy5Yb2NEaWFDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwieG9jZGlhXCIpLmlkO1xyXG4gICAgfSxcclxuICAgIHNldFJvb21JZChpZCl7XHJcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gaWQ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgZ2V0UmVxdWVzdE5hbWUoKXtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdE5hbWU7XHJcbiAgICB9LFxyXG4gICAgdG9TUmVxdWVzdCgpe1xyXG4gICAgICAgIHJldHVybiBuZXcgU21hcnRGb3hTREsuU21hcnRGb3guUmVxdWVzdHMuU3lzdGVtLkV4dGVuc2lvblJlcXVlc3QodGhpcy5fcmVxdWVzdE5hbWUsIHRoaXMuX3BhcmFtcywgdGhpcy5fcm9vbUlkKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5Yb2NEaWFSZXF1ZXN0LkJldFJlcXVlc3QgPSBYb2NEaWFSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xyXG4gICAgY3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKFhvY0RpYVJlcXVlc3QuUkVRVUVTVF9OQU1FLkJFVF9SRVFVRVNUKTtcclxuICAgIH0sXHJcbiAgICBzZXRUeXBlUG90KHR5cGUpe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCeXRlKFwidFwiLCB0eXBlKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBzZXRCZXRDaGlwKGJldENoaXApe1xyXG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXREb3VibGUoXCJiXCIsIGJldENoaXApO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59KVxyXG5Yb2NEaWFSZXF1ZXN0Lkhpc3RvcnlSZXN1bHRSZXF1ZXN0ID0gWG9jRGlhUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcclxuICAgIGN0b3IoKXtcclxuICAgICAgICB0aGlzLl9zdXBlcihYb2NEaWFSZXF1ZXN0LlJFUVVFU1RfTkFNRS5ISVNUT1JZX1JFU1VMVCk7XHJcbiAgICB9XHJcbn0pXHJcbndpbmRvdy5Yb2NEaWFSZXF1ZXN0ID0gWG9jRGlhUmVxdWVzdDtcclxuIl19
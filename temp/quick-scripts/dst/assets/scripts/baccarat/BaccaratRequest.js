
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/baccarat/BaccaratRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '58b6bO0mbZC6IfUJVYZ3QMf', 'BaccaratRequest');
// scripts/baccarat/BaccaratRequest.js

"use strict";

var BaccaratRequest = {};
BaccaratRequest.REQUEST_NAME = {
  BET_REQUEST: "b2",
  HISTORY_RESULT: "b4",
  HISTORY_DETAIL: "b5"
};
BaccaratRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.BaccaratController.ZoneInstance.getRoomByName("baccarat").id;
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
BaccaratRequest.BetRequest = BaccaratRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(BaccaratRequest.REQUEST_NAME.BET_REQUEST);
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
BaccaratRequest.HistoryRequest = BaccaratRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(BaccaratRequest.REQUEST_NAME.HISTORY_RESULT);
  }
});
BaccaratRequest.HistoryDetailRequest = BaccaratRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(BaccaratRequest.REQUEST_NAME.HISTORY_DETAIL);
  }
});
window.BaccaratRequest = BaccaratRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2JhY2NhcmF0L0JhY2NhcmF0UmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJCYWNjYXJhdFJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkhJU1RPUllfUkVTVUxUIiwiSElTVE9SWV9ERVRBSUwiLCJfQmFzZVJlcXVlc3QiLCJTbWFydEZveFNESyIsIkNsYXNzIiwiZXh0ZW5kIiwiY3RvciIsIm5hbWUiLCJfcmVxdWVzdE5hbWUiLCJfcGFyYW1zIiwiU09iamVjdCIsIl9yb29tSWQiLCJCYWNjYXJhdENvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJnZXRSb29tQnlOYW1lIiwiaWQiLCJzZXRSb29tSWQiLCJnZXRSZXF1ZXN0TmFtZSIsInRvU1JlcXVlc3QiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiRXh0ZW5zaW9uUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJfc3VwZXIiLCJzZXRUeXBlUG90IiwidHlwZSIsInB1dEJ5dGUiLCJzZXRCZXRDaGlwIiwiYmV0Q2hpcCIsInB1dERvdWJsZSIsIkhpc3RvcnlSZXF1ZXN0IiwiSGlzdG9yeURldGFpbFJlcXVlc3QiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsZUFBZSxHQUFHLEVBQXRCO0FBQ0FBLGVBQWUsQ0FBQ0MsWUFBaEIsR0FBK0I7QUFDM0JDLEVBQUFBLFdBQVcsRUFBRyxJQURhO0FBRTNCQyxFQUFBQSxjQUFjLEVBQUUsSUFGVztBQUczQkMsRUFBQUEsY0FBYyxFQUFFO0FBSFcsQ0FBL0I7QUFLQUosZUFBZSxDQUFDSyxZQUFoQixHQUErQkMsV0FBVyxDQUFDQyxLQUFaLENBQWtCQyxNQUFsQixDQUF5QjtBQUNwREMsRUFBQUEsSUFEb0QsZ0JBQy9DQyxJQUQrQyxFQUMxQztBQUNOLFNBQUtDLFlBQUwsR0FBb0JELElBQXBCO0FBQ0EsU0FBS0UsT0FBTCxHQUFlLElBQUlOLFdBQVcsQ0FBQ08sT0FBaEIsRUFBZjtBQUNBLFNBQUtDLE9BQUwsR0FBZVIsV0FBVyxDQUFDUyxrQkFBWixDQUErQkMsWUFBL0IsQ0FBNENDLGFBQTVDLENBQTBELFVBQTFELEVBQXNFQyxFQUFyRjtBQUNILEdBTG1EO0FBTXBEQyxFQUFBQSxTQU5vRCxxQkFNMUNELEVBTjBDLEVBTXZDO0FBQ1QsU0FBS0osT0FBTCxHQUFlSSxFQUFmO0FBQ0EsV0FBTyxJQUFQO0FBQ0gsR0FUbUQ7QUFVcERFLEVBQUFBLGNBVm9ELDRCQVVwQztBQUNaLFdBQU8sS0FBS1QsWUFBWjtBQUNILEdBWm1EO0FBYXBEVSxFQUFBQSxVQWJvRCx3QkFheEM7QUFDUixXQUFPLElBQUlmLFdBQVcsQ0FBQ2dCLFFBQVosQ0FBcUJDLFFBQXJCLENBQThCQyxNQUE5QixDQUFxQ0MsZ0JBQXpDLENBQTBELEtBQUtkLFlBQS9ELEVBQTZFLEtBQUtDLE9BQWxGLEVBQTJGLEtBQUtFLE9BQWhHLENBQVA7QUFDSDtBQWZtRCxDQUF6QixDQUEvQjtBQWtCQWQsZUFBZSxDQUFDMEIsVUFBaEIsR0FBNkIxQixlQUFlLENBQUNLLFlBQWhCLENBQTZCRyxNQUE3QixDQUFvQztBQUM3REMsRUFBQUEsSUFENkQsa0JBQ3ZEO0FBQ0YsU0FBS2tCLE1BQUwsQ0FBWTNCLGVBQWUsQ0FBQ0MsWUFBaEIsQ0FBNkJDLFdBQXpDO0FBQ0gsR0FINEQ7QUFJN0QwQixFQUFBQSxVQUo2RCxzQkFJbERDLElBSmtELEVBSTdDO0FBQ1osU0FBS2pCLE9BQUwsQ0FBYWtCLE9BQWIsQ0FBcUIsR0FBckIsRUFBMEJELElBQTFCOztBQUNBLFdBQU8sSUFBUDtBQUNILEdBUDREO0FBUTdERSxFQUFBQSxVQVI2RCxzQkFRbERDLE9BUmtELEVBUTFDO0FBQ2YsU0FBS3BCLE9BQUwsQ0FBYXFCLFNBQWIsQ0FBdUIsR0FBdkIsRUFBNEJELE9BQTVCOztBQUNBLFdBQU8sSUFBUDtBQUNIO0FBWDRELENBQXBDLENBQTdCO0FBYUFoQyxlQUFlLENBQUNrQyxjQUFoQixHQUFpQ2xDLGVBQWUsQ0FBQ0ssWUFBaEIsQ0FBNkJHLE1BQTdCLENBQW9DO0FBQ2pFQyxFQUFBQSxJQURpRSxrQkFDM0Q7QUFDRixTQUFLa0IsTUFBTCxDQUFZM0IsZUFBZSxDQUFDQyxZQUFoQixDQUE2QkUsY0FBekM7QUFDSDtBQUhnRSxDQUFwQyxDQUFqQztBQUtBSCxlQUFlLENBQUNtQyxvQkFBaEIsR0FBdUNuQyxlQUFlLENBQUNLLFlBQWhCLENBQTZCRyxNQUE3QixDQUFvQztBQUN2RUMsRUFBQUEsSUFEdUUsa0JBQ2pFO0FBQ0YsU0FBS2tCLE1BQUwsQ0FBWTNCLGVBQWUsQ0FBQ0MsWUFBaEIsQ0FBNkJHLGNBQXpDO0FBQ0g7QUFIc0UsQ0FBcEMsQ0FBdkM7QUFLQWdDLE1BQU0sQ0FBQ3BDLGVBQVAsR0FBeUJBLGVBQXpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgQmFjY2FyYXRSZXF1ZXN0ID0ge307XG5CYWNjYXJhdFJlcXVlc3QuUkVRVUVTVF9OQU1FID0ge1xuICAgIEJFVF9SRVFVRVNUIDogXCJiMlwiLFxuICAgIEhJU1RPUllfUkVTVUxUOiBcImI0XCIsXG4gICAgSElTVE9SWV9ERVRBSUw6IFwiYjVcIixcbn1cbkJhY2NhcmF0UmVxdWVzdC5fQmFzZVJlcXVlc3QgPSBTbWFydEZveFNESy5DbGFzcy5leHRlbmQoe1xuICAgIGN0b3IobmFtZSl7XG4gICAgICAgIHRoaXMuX3JlcXVlc3ROYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcbiAgICAgICAgdGhpcy5fcm9vbUlkID0gU21hcnRGb3hTREsuQmFjY2FyYXRDb250cm9sbGVyLlpvbmVJbnN0YW5jZS5nZXRSb29tQnlOYW1lKFwiYmFjY2FyYXRcIikuaWQ7XG4gICAgfSxcbiAgICBzZXRSb29tSWQoaWQpe1xuICAgICAgICB0aGlzLl9yb29tSWQgPSBpZDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBnZXRSZXF1ZXN0TmFtZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVxdWVzdE5hbWU7XG4gICAgfSxcbiAgICB0b1NSZXF1ZXN0KCl7XG4gICAgICAgIHJldHVybiBuZXcgU21hcnRGb3hTREsuU21hcnRGb3guUmVxdWVzdHMuU3lzdGVtLkV4dGVuc2lvblJlcXVlc3QodGhpcy5fcmVxdWVzdE5hbWUsIHRoaXMuX3BhcmFtcywgdGhpcy5fcm9vbUlkKTtcbiAgICB9XG59KTtcblxuQmFjY2FyYXRSZXF1ZXN0LkJldFJlcXVlc3QgPSBCYWNjYXJhdFJlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihCYWNjYXJhdFJlcXVlc3QuUkVRVUVTVF9OQU1FLkJFVF9SRVFVRVNUKTtcbiAgICB9LFxuICAgIHNldFR5cGVQb3QodHlwZSl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXRCeXRlKFwidFwiLCB0eXBlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcbiAgICBzZXRCZXRDaGlwKGJldENoaXApe1xuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXRDaGlwKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufSlcbkJhY2NhcmF0UmVxdWVzdC5IaXN0b3J5UmVxdWVzdCA9IEJhY2NhcmF0UmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKEJhY2NhcmF0UmVxdWVzdC5SRVFVRVNUX05BTUUuSElTVE9SWV9SRVNVTFQpO1xuICAgIH1cbn0pXG5CYWNjYXJhdFJlcXVlc3QuSGlzdG9yeURldGFpbFJlcXVlc3QgPSBCYWNjYXJhdFJlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XG4gICAgY3Rvcigpe1xuICAgICAgICB0aGlzLl9zdXBlcihCYWNjYXJhdFJlcXVlc3QuUkVRVUVTVF9OQU1FLkhJU1RPUllfREVUQUlMKTtcbiAgICB9XG59KVxud2luZG93LkJhY2NhcmF0UmVxdWVzdCA9IEJhY2NhcmF0UmVxdWVzdDtcbiJdfQ==
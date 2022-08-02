
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/roulette/RouletteRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '442d2wPJFxKk7f1ASved6fo', 'RouletteRequest');
// scripts/roulette/RouletteRequest.js

"use strict";

var RouletteRequest = {};
RouletteRequest.REQUEST_NAME = {
  BET_REQUEST: "rl2",
  HISTORY_RESULT: "rl4"
};
RouletteRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.RouletteController.ZoneInstance.getRoomByName("roulette").id;
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
RouletteRequest.BetRequest = RouletteRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(RouletteRequest.REQUEST_NAME.BET_REQUEST);
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
RouletteRequest.HistoryRequest = RouletteRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(RouletteRequest.REQUEST_NAME.HISTORY_RESULT);
  }
});
window.RouletteRequest = RouletteRequest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm91bGV0dGVcXFJvdWxldHRlUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJSb3VsZXR0ZVJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkhJU1RPUllfUkVTVUxUIiwiX0Jhc2VSZXF1ZXN0IiwiU21hcnRGb3hTREsiLCJDbGFzcyIsImV4dGVuZCIsImN0b3IiLCJuYW1lIiwiX3JlcXVlc3ROYW1lIiwiX3BhcmFtcyIsIlNPYmplY3QiLCJfcm9vbUlkIiwiUm91bGV0dGVDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwiZ2V0Um9vbUJ5TmFtZSIsImlkIiwic2V0Um9vbUlkIiwiZ2V0UmVxdWVzdE5hbWUiLCJ0b1NSZXF1ZXN0IiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkV4dGVuc2lvblJlcXVlc3QiLCJCZXRSZXF1ZXN0IiwiX3N1cGVyIiwic2V0VHlwZVBvdCIsInR5cGUiLCJwdXRCeXRlIiwic2V0QmV0Q2hpcCIsImJldENoaXAiLCJwdXREb3VibGUiLCJIaXN0b3J5UmVxdWVzdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxlQUFlLEdBQUcsRUFBdEI7QUFDQUEsZUFBZSxDQUFDQyxZQUFoQixHQUErQjtBQUMzQkMsRUFBQUEsV0FBVyxFQUFHLEtBRGE7QUFFM0JDLEVBQUFBLGNBQWMsRUFBRTtBQUZXLENBQS9CO0FBSUFILGVBQWUsQ0FBQ0ksWUFBaEIsR0FBK0JDLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsTUFBbEIsQ0FBeUI7QUFDcERDLEVBQUFBLElBRG9ELGdCQUMvQ0MsSUFEK0MsRUFDMUM7QUFDTixTQUFLQyxZQUFMLEdBQW9CRCxJQUFwQjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxJQUFJTixXQUFXLENBQUNPLE9BQWhCLEVBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVSLFdBQVcsQ0FBQ1Msa0JBQVosQ0FBK0JDLFlBQS9CLENBQTRDQyxhQUE1QyxDQUEwRCxVQUExRCxFQUFzRUMsRUFBckY7QUFDSCxHQUxtRDtBQU1wREMsRUFBQUEsU0FOb0QscUJBTTFDRCxFQU4wQyxFQU12QztBQUNULFNBQUtKLE9BQUwsR0FBZUksRUFBZjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBVG1EO0FBVXBERSxFQUFBQSxjQVZvRCw0QkFVcEM7QUFDWixXQUFPLEtBQUtULFlBQVo7QUFDSCxHQVptRDtBQWFwRFUsRUFBQUEsVUFib0Qsd0JBYXhDO0FBQ1IsV0FBTyxJQUFJZixXQUFXLENBQUNnQixRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsTUFBOUIsQ0FBcUNDLGdCQUF6QyxDQUEwRCxLQUFLZCxZQUEvRCxFQUE2RSxLQUFLQyxPQUFsRixFQUEyRixLQUFLRSxPQUFoRyxDQUFQO0FBQ0g7QUFmbUQsQ0FBekIsQ0FBL0I7QUFrQkFiLGVBQWUsQ0FBQ3lCLFVBQWhCLEdBQTZCekIsZUFBZSxDQUFDSSxZQUFoQixDQUE2QkcsTUFBN0IsQ0FBb0M7QUFDN0RDLEVBQUFBLElBRDZELGtCQUN2RDtBQUNGLFNBQUtrQixNQUFMLENBQVkxQixlQUFlLENBQUNDLFlBQWhCLENBQTZCQyxXQUF6QztBQUNILEdBSDREO0FBSTdEeUIsRUFBQUEsVUFKNkQsc0JBSWxEQyxJQUprRCxFQUk3QztBQUNaLFNBQUtqQixPQUFMLENBQWFrQixPQUFiLENBQXFCLEdBQXJCLEVBQTBCRCxJQUExQjs7QUFDQSxXQUFPLElBQVA7QUFDSCxHQVA0RDtBQVE3REUsRUFBQUEsVUFSNkQsc0JBUWxEQyxPQVJrRCxFQVExQztBQUNmLFNBQUtwQixPQUFMLENBQWFxQixTQUFiLENBQXVCLEdBQXZCLEVBQTRCRCxPQUE1Qjs7QUFDQSxXQUFPLElBQVA7QUFDSDtBQVg0RCxDQUFwQyxDQUE3QjtBQWFBL0IsZUFBZSxDQUFDaUMsY0FBaEIsR0FBaUNqQyxlQUFlLENBQUNJLFlBQWhCLENBQTZCRyxNQUE3QixDQUFvQztBQUNqRUMsRUFBQUEsSUFEaUUsa0JBQzNEO0FBQ0YsU0FBS2tCLE1BQUwsQ0FBWTFCLGVBQWUsQ0FBQ0MsWUFBaEIsQ0FBNkJFLGNBQXpDO0FBQ0g7QUFIZ0UsQ0FBcEMsQ0FBakM7QUFLQStCLE1BQU0sQ0FBQ2xDLGVBQVAsR0FBeUJBLGVBQXpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUm91bGV0dGVSZXF1ZXN0ID0ge307XHJcblJvdWxldHRlUmVxdWVzdC5SRVFVRVNUX05BTUUgPSB7XHJcbiAgICBCRVRfUkVRVUVTVCA6IFwicmwyXCIsXHJcbiAgICBISVNUT1JZX1JFU1VMVDogXCJybDRcIlxyXG59XHJcblJvdWxldHRlUmVxdWVzdC5fQmFzZVJlcXVlc3QgPSBTbWFydEZveFNESy5DbGFzcy5leHRlbmQoe1xyXG4gICAgY3RvcihuYW1lKXtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0TmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zID0gbmV3IFNtYXJ0Rm94U0RLLlNPYmplY3QoKTtcclxuICAgICAgICB0aGlzLl9yb29tSWQgPSBTbWFydEZveFNESy5Sb3VsZXR0ZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJyb3VsZXR0ZVwiKS5pZDtcclxuICAgIH0sXHJcbiAgICBzZXRSb29tSWQoaWQpe1xyXG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IGlkO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIGdldFJlcXVlc3ROYW1lKCl7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcXVlc3ROYW1lO1xyXG4gICAgfSxcclxuICAgIHRvU1JlcXVlc3QoKXtcclxuICAgICAgICByZXR1cm4gbmV3IFNtYXJ0Rm94U0RLLlNtYXJ0Rm94LlJlcXVlc3RzLlN5c3RlbS5FeHRlbnNpb25SZXF1ZXN0KHRoaXMuX3JlcXVlc3ROYW1lLCB0aGlzLl9wYXJhbXMsIHRoaXMuX3Jvb21JZCk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuUm91bGV0dGVSZXF1ZXN0LkJldFJlcXVlc3QgPSBSb3VsZXR0ZVJlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoUm91bGV0dGVSZXF1ZXN0LlJFUVVFU1RfTkFNRS5CRVRfUkVRVUVTVCk7XHJcbiAgICB9LFxyXG4gICAgc2V0VHlwZVBvdCh0eXBlKXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0Qnl0ZShcInRcIiwgdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9LFxyXG4gICAgc2V0QmV0Q2hpcChiZXRDaGlwKXtcclxuICAgICAgICB0aGlzLl9wYXJhbXMucHV0RG91YmxlKFwiYlwiLCBiZXRDaGlwKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufSlcclxuUm91bGV0dGVSZXF1ZXN0Lkhpc3RvcnlSZXF1ZXN0ID0gUm91bGV0dGVSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xyXG4gICAgY3Rvcigpe1xyXG4gICAgICAgIHRoaXMuX3N1cGVyKFJvdWxldHRlUmVxdWVzdC5SRVFVRVNUX05BTUUuSElTVE9SWV9SRVNVTFQpO1xyXG4gICAgfVxyXG59KVxyXG53aW5kb3cuUm91bGV0dGVSZXF1ZXN0ID0gUm91bGV0dGVSZXF1ZXN0O1xyXG4iXX0=
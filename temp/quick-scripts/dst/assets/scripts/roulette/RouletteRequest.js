
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3JvdWxldHRlL1JvdWxldHRlUmVxdWVzdC5qcyJdLCJuYW1lcyI6WyJSb3VsZXR0ZVJlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIkhJU1RPUllfUkVTVUxUIiwiX0Jhc2VSZXF1ZXN0IiwiU21hcnRGb3hTREsiLCJDbGFzcyIsImV4dGVuZCIsImN0b3IiLCJuYW1lIiwiX3JlcXVlc3ROYW1lIiwiX3BhcmFtcyIsIlNPYmplY3QiLCJfcm9vbUlkIiwiUm91bGV0dGVDb250cm9sbGVyIiwiWm9uZUluc3RhbmNlIiwiZ2V0Um9vbUJ5TmFtZSIsImlkIiwic2V0Um9vbUlkIiwiZ2V0UmVxdWVzdE5hbWUiLCJ0b1NSZXF1ZXN0IiwiU21hcnRGb3giLCJSZXF1ZXN0cyIsIlN5c3RlbSIsIkV4dGVuc2lvblJlcXVlc3QiLCJCZXRSZXF1ZXN0IiwiX3N1cGVyIiwic2V0VHlwZVBvdCIsInR5cGUiLCJwdXRCeXRlIiwic2V0QmV0Q2hpcCIsImJldENoaXAiLCJwdXREb3VibGUiLCJIaXN0b3J5UmVxdWVzdCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxlQUFlLEdBQUcsRUFBdEI7QUFDQUEsZUFBZSxDQUFDQyxZQUFoQixHQUErQjtBQUMzQkMsRUFBQUEsV0FBVyxFQUFHLEtBRGE7QUFFM0JDLEVBQUFBLGNBQWMsRUFBRTtBQUZXLENBQS9CO0FBSUFILGVBQWUsQ0FBQ0ksWUFBaEIsR0FBK0JDLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsTUFBbEIsQ0FBeUI7QUFDcERDLEVBQUFBLElBRG9ELGdCQUMvQ0MsSUFEK0MsRUFDMUM7QUFDTixTQUFLQyxZQUFMLEdBQW9CRCxJQUFwQjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxJQUFJTixXQUFXLENBQUNPLE9BQWhCLEVBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVSLFdBQVcsQ0FBQ1Msa0JBQVosQ0FBK0JDLFlBQS9CLENBQTRDQyxhQUE1QyxDQUEwRCxVQUExRCxFQUFzRUMsRUFBckY7QUFDSCxHQUxtRDtBQU1wREMsRUFBQUEsU0FOb0QscUJBTTFDRCxFQU4wQyxFQU12QztBQUNULFNBQUtKLE9BQUwsR0FBZUksRUFBZjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBVG1EO0FBVXBERSxFQUFBQSxjQVZvRCw0QkFVcEM7QUFDWixXQUFPLEtBQUtULFlBQVo7QUFDSCxHQVptRDtBQWFwRFUsRUFBQUEsVUFib0Qsd0JBYXhDO0FBQ1IsV0FBTyxJQUFJZixXQUFXLENBQUNnQixRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsTUFBOUIsQ0FBcUNDLGdCQUF6QyxDQUEwRCxLQUFLZCxZQUEvRCxFQUE2RSxLQUFLQyxPQUFsRixFQUEyRixLQUFLRSxPQUFoRyxDQUFQO0FBQ0g7QUFmbUQsQ0FBekIsQ0FBL0I7QUFrQkFiLGVBQWUsQ0FBQ3lCLFVBQWhCLEdBQTZCekIsZUFBZSxDQUFDSSxZQUFoQixDQUE2QkcsTUFBN0IsQ0FBb0M7QUFDN0RDLEVBQUFBLElBRDZELGtCQUN2RDtBQUNGLFNBQUtrQixNQUFMLENBQVkxQixlQUFlLENBQUNDLFlBQWhCLENBQTZCQyxXQUF6QztBQUNILEdBSDREO0FBSTdEeUIsRUFBQUEsVUFKNkQsc0JBSWxEQyxJQUprRCxFQUk3QztBQUNaLFNBQUtqQixPQUFMLENBQWFrQixPQUFiLENBQXFCLEdBQXJCLEVBQTBCRCxJQUExQjs7QUFDQSxXQUFPLElBQVA7QUFDSCxHQVA0RDtBQVE3REUsRUFBQUEsVUFSNkQsc0JBUWxEQyxPQVJrRCxFQVExQztBQUNmLFNBQUtwQixPQUFMLENBQWFxQixTQUFiLENBQXVCLEdBQXZCLEVBQTRCRCxPQUE1Qjs7QUFDQSxXQUFPLElBQVA7QUFDSDtBQVg0RCxDQUFwQyxDQUE3QjtBQWFBL0IsZUFBZSxDQUFDaUMsY0FBaEIsR0FBaUNqQyxlQUFlLENBQUNJLFlBQWhCLENBQTZCRyxNQUE3QixDQUFvQztBQUNqRUMsRUFBQUEsSUFEaUUsa0JBQzNEO0FBQ0YsU0FBS2tCLE1BQUwsQ0FBWTFCLGVBQWUsQ0FBQ0MsWUFBaEIsQ0FBNkJFLGNBQXpDO0FBQ0g7QUFIZ0UsQ0FBcEMsQ0FBakM7QUFLQStCLE1BQU0sQ0FBQ2xDLGVBQVAsR0FBeUJBLGVBQXpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgUm91bGV0dGVSZXF1ZXN0ID0ge307XG5Sb3VsZXR0ZVJlcXVlc3QuUkVRVUVTVF9OQU1FID0ge1xuICAgIEJFVF9SRVFVRVNUIDogXCJybDJcIixcbiAgICBISVNUT1JZX1JFU1VMVDogXCJybDRcIlxufVxuUm91bGV0dGVSZXF1ZXN0Ll9CYXNlUmVxdWVzdCA9IFNtYXJ0Rm94U0RLLkNsYXNzLmV4dGVuZCh7XG4gICAgY3RvcihuYW1lKXtcbiAgICAgICAgdGhpcy5fcmVxdWVzdE5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU21hcnRGb3hTREsuU09iamVjdCgpO1xuICAgICAgICB0aGlzLl9yb29tSWQgPSBTbWFydEZveFNESy5Sb3VsZXR0ZUNvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJyb3VsZXR0ZVwiKS5pZDtcbiAgICB9LFxuICAgIHNldFJvb21JZChpZCl7XG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IGlkO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFJlcXVlc3ROYW1lKCl7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0TmFtZTtcbiAgICB9LFxuICAgIHRvU1JlcXVlc3QoKXtcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uRXh0ZW5zaW9uUmVxdWVzdCh0aGlzLl9yZXF1ZXN0TmFtZSwgdGhpcy5fcGFyYW1zLCB0aGlzLl9yb29tSWQpO1xuICAgIH1cbn0pO1xuXG5Sb3VsZXR0ZVJlcXVlc3QuQmV0UmVxdWVzdCA9IFJvdWxldHRlUmVxdWVzdC5fQmFzZVJlcXVlc3QuZXh0ZW5kKHtcbiAgICBjdG9yKCl7XG4gICAgICAgIHRoaXMuX3N1cGVyKFJvdWxldHRlUmVxdWVzdC5SRVFVRVNUX05BTUUuQkVUX1JFUVVFU1QpO1xuICAgIH0sXG4gICAgc2V0VHlwZVBvdCh0eXBlKXtcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJ5dGUoXCJ0XCIsIHR5cGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIHNldEJldENoaXAoYmV0Q2hpcCl7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5wdXREb3VibGUoXCJiXCIsIGJldENoaXApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59KVxuUm91bGV0dGVSZXF1ZXN0Lkhpc3RvcnlSZXF1ZXN0ID0gUm91bGV0dGVSZXF1ZXN0Ll9CYXNlUmVxdWVzdC5leHRlbmQoe1xuICAgIGN0b3IoKXtcbiAgICAgICAgdGhpcy5fc3VwZXIoUm91bGV0dGVSZXF1ZXN0LlJFUVVFU1RfTkFNRS5ISVNUT1JZX1JFU1VMVCk7XG4gICAgfVxufSlcbndpbmRvdy5Sb3VsZXR0ZVJlcXVlc3QgPSBSb3VsZXR0ZVJlcXVlc3Q7XG4iXX0=
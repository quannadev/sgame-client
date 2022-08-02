"use strict";
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
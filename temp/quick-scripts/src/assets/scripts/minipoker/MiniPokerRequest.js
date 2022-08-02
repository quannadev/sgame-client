"use strict";
cc._RF.push(module, 'a794fsr0whFK4jbUHv5rRrj', 'MiniPokerRequest');
// scripts/minipoker/MiniPokerRequest.js

"use strict";

var MiniPokerRequest = {};
MiniPokerRequest.REQUEST_NAME = {
  BET_REQUEST: "mp1"
};
MiniPokerRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.MiniPokerController.ZoneInstance.getRoomByName("minipoker").id;
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
MiniPokerRequest.BetRequest = MiniPokerRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(MiniPokerRequest.REQUEST_NAME.BET_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.MiniPokerRequest = MiniPokerRequest;

cc._RF.pop();
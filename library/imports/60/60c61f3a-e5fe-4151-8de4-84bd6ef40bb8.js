"use strict";
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
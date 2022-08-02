"use strict";
cc._RF.push(module, '8ed9dtqAk1OI6Jc5XxWuMER', 'VampireRequest');
// scripts/vampire/VampireRequest.js

"use strict";

var VampireRequest = {};
VampireRequest.REQUEST_NAME = {
  BET_REQUEST: "vp1",
  AUTO_PLAY_REQUEST: "vp5",
  STOP_AUTO_PLAY_REQUEST: "vp6"
};
VampireRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.VampireController.ZoneInstance.getRoomByName("vampire").id;
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
VampireRequest.BetRequest = VampireRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(VampireRequest.REQUEST_NAME.BET_REQUEST);
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
VampireRequest.AutoPlayRequest = VampireRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(VampireRequest.REQUEST_NAME.AUTO_PLAY_REQUEST);
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
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
VampireRequest.StopAutoPlayRequest = VampireRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(VampireRequest.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.VampireRequest = VampireRequest;

cc._RF.pop();
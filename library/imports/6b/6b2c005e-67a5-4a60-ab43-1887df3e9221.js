"use strict";
cc._RF.push(module, '6b2c0BeZ6VKYKtDGIffPpIh', 'SinbadRequest');
// scripts/sinbad/SinbadRequest.js

"use strict";

var SinbadRequest = {};
SinbadRequest.REQUEST_NAME = {
  BET_REQUEST: "sb1",
  AUTO_PLAY_REQUEST: "sb5",
  STOP_AUTO_PLAY_REQUEST: "sb6"
};
SinbadRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.SinbadController.ZoneInstance.getRoomByName("sinbad").id;
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
SinbadRequest.BetRequest = SinbadRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(SinbadRequest.REQUEST_NAME.BET_REQUEST);
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
SinbadRequest.AutoPlayRequest = SinbadRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(SinbadRequest.REQUEST_NAME.AUTO_PLAY_REQUEST);
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
SinbadRequest.StopAutoPlayRequest = SinbadRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(SinbadRequest.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.SinbadRequest = SinbadRequest;

cc._RF.pop();
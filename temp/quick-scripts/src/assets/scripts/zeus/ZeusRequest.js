"use strict";
cc._RF.push(module, '7a2bdjwJVpHPrTQ9okwYufo', 'ZeusRequest');
// scripts/zeus/ZeusRequest.js

"use strict";

var ZeusRequest = {};
ZeusRequest.REQUEST_NAME = {
  BET_REQUEST: "zu1",
  AUTO_PLAY_REQUEST: "zu5",
  STOP_AUTO_PLAY_REQUEST: "zu6"
};
ZeusRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.ZeusController.ZoneInstance.getRoomByName("zeus").id;
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
ZeusRequest.BetRequest = ZeusRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(ZeusRequest.REQUEST_NAME.BET_REQUEST);
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
ZeusRequest.AutoPlayRequest = ZeusRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(ZeusRequest.REQUEST_NAME.AUTO_PLAY_REQUEST);
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
ZeusRequest.StopAutoPlayRequest = ZeusRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(ZeusRequest.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.ZeusRequest = ZeusRequest;

cc._RF.pop();
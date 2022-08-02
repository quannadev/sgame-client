"use strict";
cc._RF.push(module, '5f821cNl+lMt4Aq8lDzMbmk', 'KimCuongRequest');
// scripts/kimcuong/KimCuongRequest.js

"use strict";

var KimCuongRequest = {};
KimCuongRequest.REQUEST_NAME = {
  BET_REQUEST: "vqv1",
  AUTO_PLAY_REQUEST: "vqv5",
  STOP_AUTO_PLAY_REQUEST: "vqv6"
};
KimCuongRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.KimCuongController.ZoneInstance.getRoomByName("kimcuong").id;
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
KimCuongRequest.BetRequest = KimCuongRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(KimCuongRequest.REQUEST_NAME.BET_REQUEST);
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
KimCuongRequest.AutoPlayRequest = KimCuongRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(KimCuongRequest.REQUEST_NAME.AUTO_PLAY_REQUEST);
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
KimCuongRequest.StopAutoPlayRequest = KimCuongRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(KimCuongRequest.REQUEST_NAME.STOP_AUTO_PLAY_REQUEST);
  },
  setBet: function setBet(bet) {
    this._params.putDouble("b", bet);

    return this;
  }
});
window.KimCuongRequest = KimCuongRequest;

cc._RF.pop();
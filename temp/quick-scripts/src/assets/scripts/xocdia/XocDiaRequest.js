"use strict";
cc._RF.push(module, '77ff6mK23pEzanbeKctxfRt', 'XocDiaRequest');
// scripts/xocdia/XocDiaRequest.js

"use strict";

var XocDiaRequest = {};
XocDiaRequest.REQUEST_NAME = {
  BET_REQUEST: "xd2",
  HISTORY_RESULT: "xd4"
};
XocDiaRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.XocDiaController.ZoneInstance.getRoomByName("xocdia").id;
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
XocDiaRequest.BetRequest = XocDiaRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(XocDiaRequest.REQUEST_NAME.BET_REQUEST);
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
XocDiaRequest.HistoryResultRequest = XocDiaRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(XocDiaRequest.REQUEST_NAME.HISTORY_RESULT);
  }
});
window.XocDiaRequest = XocDiaRequest;

cc._RF.pop();
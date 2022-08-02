"use strict";
cc._RF.push(module, 'accafw1O0VLhaWVz7Xl5REJ', 'RongHoRequest');
// scripts/rongho/RongHoRequest.js

"use strict";

var RongHoRequest = {};
RongHoRequest.REQUEST_NAME = {
  BET_REQUEST: "rh2"
};
RongHoRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.RongHoController.ZoneInstance.getRoomByName("rongho").id;
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
RongHoRequest.BetRequest = RongHoRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(RongHoRequest.REQUEST_NAME.BET_REQUEST);
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
window.RongHoRequest = RongHoRequest;

cc._RF.pop();
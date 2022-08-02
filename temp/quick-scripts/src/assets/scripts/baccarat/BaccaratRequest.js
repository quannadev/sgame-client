"use strict";
cc._RF.push(module, '58b6bO0mbZC6IfUJVYZ3QMf', 'BaccaratRequest');
// scripts/baccarat/BaccaratRequest.js

"use strict";

var BaccaratRequest = {};
BaccaratRequest.REQUEST_NAME = {
  BET_REQUEST: "b2",
  HISTORY_RESULT: "b4",
  HISTORY_DETAIL: "b5"
};
BaccaratRequest._BaseRequest = SmartFoxSDK.Class.extend({
  ctor: function ctor(name) {
    this._requestName = name;
    this._params = new SmartFoxSDK.SObject();
    this._roomId = SmartFoxSDK.BaccaratController.ZoneInstance.getRoomByName("baccarat").id;
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
BaccaratRequest.BetRequest = BaccaratRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(BaccaratRequest.REQUEST_NAME.BET_REQUEST);
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
BaccaratRequest.HistoryRequest = BaccaratRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(BaccaratRequest.REQUEST_NAME.HISTORY_RESULT);
  }
});
BaccaratRequest.HistoryDetailRequest = BaccaratRequest._BaseRequest.extend({
  ctor: function ctor() {
    this._super(BaccaratRequest.REQUEST_NAME.HISTORY_DETAIL);
  }
});
window.BaccaratRequest = BaccaratRequest;

cc._RF.pop();
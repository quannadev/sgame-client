
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/rongho/RongHoRequest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccm9uZ2hvXFxSb25nSG9SZXF1ZXN0LmpzIl0sIm5hbWVzIjpbIlJvbmdIb1JlcXVlc3QiLCJSRVFVRVNUX05BTUUiLCJCRVRfUkVRVUVTVCIsIl9CYXNlUmVxdWVzdCIsIlNtYXJ0Rm94U0RLIiwiQ2xhc3MiLCJleHRlbmQiLCJjdG9yIiwibmFtZSIsIl9yZXF1ZXN0TmFtZSIsIl9wYXJhbXMiLCJTT2JqZWN0IiwiX3Jvb21JZCIsIlJvbmdIb0NvbnRyb2xsZXIiLCJab25lSW5zdGFuY2UiLCJnZXRSb29tQnlOYW1lIiwiaWQiLCJzZXRSb29tSWQiLCJnZXRSZXF1ZXN0TmFtZSIsInRvU1JlcXVlc3QiLCJTbWFydEZveCIsIlJlcXVlc3RzIiwiU3lzdGVtIiwiRXh0ZW5zaW9uUmVxdWVzdCIsIkJldFJlcXVlc3QiLCJfc3VwZXIiLCJzZXRUeXBlUG90IiwidHlwZSIsInB1dEJ5dGUiLCJzZXRCZXRDaGlwIiwiYmV0Q2hpcCIsInB1dERvdWJsZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFhLEdBQUcsRUFBcEI7QUFDQUEsYUFBYSxDQUFDQyxZQUFkLEdBQTZCO0FBQ3pCQyxFQUFBQSxXQUFXLEVBQUc7QUFEVyxDQUE3QjtBQUdBRixhQUFhLENBQUNHLFlBQWQsR0FBNkJDLFdBQVcsQ0FBQ0MsS0FBWixDQUFrQkMsTUFBbEIsQ0FBeUI7QUFDbERDLEVBQUFBLElBRGtELGdCQUM3Q0MsSUFENkMsRUFDeEM7QUFDTixTQUFLQyxZQUFMLEdBQW9CRCxJQUFwQjtBQUNBLFNBQUtFLE9BQUwsR0FBZSxJQUFJTixXQUFXLENBQUNPLE9BQWhCLEVBQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVSLFdBQVcsQ0FBQ1MsZ0JBQVosQ0FBNkJDLFlBQTdCLENBQTBDQyxhQUExQyxDQUF3RCxRQUF4RCxFQUFrRUMsRUFBakY7QUFDSCxHQUxpRDtBQU1sREMsRUFBQUEsU0FOa0QscUJBTXhDRCxFQU53QyxFQU1yQztBQUNULFNBQUtKLE9BQUwsR0FBZUksRUFBZjtBQUNBLFdBQU8sSUFBUDtBQUNILEdBVGlEO0FBVWxERSxFQUFBQSxjQVZrRCw0QkFVbEM7QUFDWixXQUFPLEtBQUtULFlBQVo7QUFDSCxHQVppRDtBQWFsRFUsRUFBQUEsVUFia0Qsd0JBYXRDO0FBQ1IsV0FBTyxJQUFJZixXQUFXLENBQUNnQixRQUFaLENBQXFCQyxRQUFyQixDQUE4QkMsTUFBOUIsQ0FBcUNDLGdCQUF6QyxDQUEwRCxLQUFLZCxZQUEvRCxFQUE2RSxLQUFLQyxPQUFsRixFQUEyRixLQUFLRSxPQUFoRyxDQUFQO0FBQ0g7QUFmaUQsQ0FBekIsQ0FBN0I7QUFrQkFaLGFBQWEsQ0FBQ3dCLFVBQWQsR0FBMkJ4QixhQUFhLENBQUNHLFlBQWQsQ0FBMkJHLE1BQTNCLENBQWtDO0FBQ3pEQyxFQUFBQSxJQUR5RCxrQkFDbkQ7QUFDRixTQUFLa0IsTUFBTCxDQUFZekIsYUFBYSxDQUFDQyxZQUFkLENBQTJCQyxXQUF2QztBQUNILEdBSHdEO0FBSXpEd0IsRUFBQUEsVUFKeUQsc0JBSTlDQyxJQUo4QyxFQUl6QztBQUNaLFNBQUtqQixPQUFMLENBQWFrQixPQUFiLENBQXFCLEdBQXJCLEVBQTBCRCxJQUExQjs7QUFDQSxXQUFPLElBQVA7QUFDSCxHQVB3RDtBQVF6REUsRUFBQUEsVUFSeUQsc0JBUTlDQyxPQVI4QyxFQVF0QztBQUNmLFNBQUtwQixPQUFMLENBQWFxQixTQUFiLENBQXVCLEdBQXZCLEVBQTRCRCxPQUE1Qjs7QUFDQSxXQUFPLElBQVA7QUFDSDtBQVh3RCxDQUFsQyxDQUEzQjtBQWFBRSxNQUFNLENBQUNoQyxhQUFQLEdBQXVCQSxhQUF2QiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsibGV0IFJvbmdIb1JlcXVlc3QgPSB7fTtcclxuUm9uZ0hvUmVxdWVzdC5SRVFVRVNUX05BTUUgPSB7XHJcbiAgICBCRVRfUkVRVUVTVCA6IFwicmgyXCJcclxufVxyXG5Sb25nSG9SZXF1ZXN0Ll9CYXNlUmVxdWVzdCA9IFNtYXJ0Rm94U0RLLkNsYXNzLmV4dGVuZCh7XHJcbiAgICBjdG9yKG5hbWUpe1xyXG4gICAgICAgIHRoaXMuX3JlcXVlc3ROYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9wYXJhbXMgPSBuZXcgU21hcnRGb3hTREsuU09iamVjdCgpO1xyXG4gICAgICAgIHRoaXMuX3Jvb21JZCA9IFNtYXJ0Rm94U0RLLlJvbmdIb0NvbnRyb2xsZXIuWm9uZUluc3RhbmNlLmdldFJvb21CeU5hbWUoXCJyb25naG9cIikuaWQ7XHJcbiAgICB9LFxyXG4gICAgc2V0Um9vbUlkKGlkKXtcclxuICAgICAgICB0aGlzLl9yb29tSWQgPSBpZDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH0sXHJcbiAgICBnZXRSZXF1ZXN0TmFtZSgpe1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9yZXF1ZXN0TmFtZTtcclxuICAgIH0sXHJcbiAgICB0b1NSZXF1ZXN0KCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBTbWFydEZveFNESy5TbWFydEZveC5SZXF1ZXN0cy5TeXN0ZW0uRXh0ZW5zaW9uUmVxdWVzdCh0aGlzLl9yZXF1ZXN0TmFtZSwgdGhpcy5fcGFyYW1zLCB0aGlzLl9yb29tSWQpO1xyXG4gICAgfVxyXG59KTtcclxuXHJcblJvbmdIb1JlcXVlc3QuQmV0UmVxdWVzdCA9IFJvbmdIb1JlcXVlc3QuX0Jhc2VSZXF1ZXN0LmV4dGVuZCh7XHJcbiAgICBjdG9yKCl7XHJcbiAgICAgICAgdGhpcy5fc3VwZXIoUm9uZ0hvUmVxdWVzdC5SRVFVRVNUX05BTUUuQkVUX1JFUVVFU1QpO1xyXG4gICAgfSxcclxuICAgIHNldFR5cGVQb3QodHlwZSl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dEJ5dGUoXCJ0XCIsIHR5cGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfSxcclxuICAgIHNldEJldENoaXAoYmV0Q2hpcCl7XHJcbiAgICAgICAgdGhpcy5fcGFyYW1zLnB1dERvdWJsZShcImJcIiwgYmV0Q2hpcCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn0pXHJcbndpbmRvdy5Sb25nSG9SZXF1ZXN0ID0gUm9uZ0hvUmVxdWVzdDsiXX0=
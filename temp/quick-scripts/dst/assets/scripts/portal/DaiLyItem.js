
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/portal/DaiLyItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f00195uiJhB/rndjDOxABTo', 'DaiLyItem');
// scripts/portal/DaiLyItem.js

"use strict";

cc.Class({
  "extends": cc.BaseItemCustom,
  properties: {
    lbStt: cc.Label,
    lbName: cc.Label,
    lbUserName: cc.Label,
    lbAddress: cc.Label,
    lbPhone: cc.Label,
    _dataTransfer: null,
    _cb: null
  },
  init: function init(data, stt) {
    this._dataTransfer = data;
    this.lbStt.string = stt + 1;
    this.lbName.string = data.agName;
    this.lbUserName.string = data.name;
    this.lbPhone.string = data.phone == null ? "" : data.phone;
    this.lbAddress.string = data.address;
  },
  eventTransfer: function eventTransfer() {
    mm.audio.playButton();
    if (this._cb) this._cb(this._dataTransfer);
  },
  addEventSelect: function addEventSelect(callBack) {
    this._cb = callBack;
  },
  eventZalo: function eventZalo() {
    mm.audio.playButton();
    if (this._dataTransfer.phone != null) cc.sys.openURL("https://zalo.me/" + this._dataTransfer.phone);
  },
  eventFacebook: function eventFacebook() {
    mm.audio.playButton();
    if (this._dataTransfer.face != null) cc.sys.openURL(this._dataTransfer.face);
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL3BvcnRhbC9EYWlMeUl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU3R0IiwiTGFiZWwiLCJsYk5hbWUiLCJsYlVzZXJOYW1lIiwibGJBZGRyZXNzIiwibGJQaG9uZSIsIl9kYXRhVHJhbnNmZXIiLCJfY2IiLCJpbml0IiwiZGF0YSIsInN0dCIsInN0cmluZyIsImFnTmFtZSIsIm5hbWUiLCJwaG9uZSIsImFkZHJlc3MiLCJldmVudFRyYW5zZmVyIiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJhZGRFdmVudFNlbGVjdCIsImNhbGxCYWNrIiwiZXZlbnRaYWxvIiwic3lzIiwib3BlblVSTCIsImV2ZW50RmFjZWJvb2siLCJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFhSixFQUFFLENBQUNLLEtBRGI7QUFFUkMsSUFBQUEsTUFBTSxFQUFZTixFQUFFLENBQUNLLEtBRmI7QUFHUkUsSUFBQUEsVUFBVSxFQUFRUCxFQUFFLENBQUNLLEtBSGI7QUFJUkcsSUFBQUEsU0FBUyxFQUFTUixFQUFFLENBQUNLLEtBSmI7QUFLUkksSUFBQUEsT0FBTyxFQUFXVCxFQUFFLENBQUNLLEtBTGI7QUFNUkssSUFBQUEsYUFBYSxFQUFLLElBTlY7QUFPUkMsSUFBQUEsR0FBRyxFQUFFO0FBUEcsR0FIUDtBQVlMQyxFQUFBQSxJQVpLLGdCQVlBQyxJQVpBLEVBWU1DLEdBWk4sRUFZVztBQUNaLFNBQUtKLGFBQUwsR0FBMEJHLElBQTFCO0FBQ0EsU0FBS1QsS0FBTCxDQUFXVyxNQUFYLEdBQTBCRCxHQUFHLEdBQUMsQ0FBOUI7QUFDQSxTQUFLUixNQUFMLENBQVlTLE1BQVosR0FBMEJGLElBQUksQ0FBQ0csTUFBL0I7QUFDQSxTQUFLVCxVQUFMLENBQWdCUSxNQUFoQixHQUEwQkYsSUFBSSxDQUFDSSxJQUEvQjtBQUNBLFNBQUtSLE9BQUwsQ0FBYU0sTUFBYixHQUEwQkYsSUFBSSxDQUFDSyxLQUFMLElBQWMsSUFBZCxHQUFvQixFQUFwQixHQUF5QkwsSUFBSSxDQUFDSyxLQUF4RDtBQUNBLFNBQUtWLFNBQUwsQ0FBZU8sTUFBZixHQUEwQkYsSUFBSSxDQUFDTSxPQUEvQjtBQUNILEdBbkJJO0FBb0JMQyxFQUFBQSxhQXBCSywyQkFvQlc7QUFDWkMsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLFVBQVQ7QUFDQSxRQUFJLEtBQUtaLEdBQVQsRUFDSSxLQUFLQSxHQUFMLENBQVMsS0FBS0QsYUFBZDtBQUNQLEdBeEJJO0FBeUJMYyxFQUFBQSxjQXpCSywwQkF5QlVDLFFBekJWLEVBeUJvQjtBQUNyQixTQUFLZCxHQUFMLEdBQVdjLFFBQVg7QUFDSCxHQTNCSTtBQTRCTEMsRUFBQUEsU0E1QkssdUJBNEJPO0FBQ1JMLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsUUFBSSxLQUFLYixhQUFMLENBQW1CUSxLQUFuQixJQUE0QixJQUFoQyxFQUNBbEIsRUFBRSxDQUFDMkIsR0FBSCxDQUFPQyxPQUFQLENBQWUscUJBQW1CLEtBQUtsQixhQUFMLENBQW1CUSxLQUFyRDtBQUNILEdBaENJO0FBaUNMVyxFQUFBQSxhQWpDSywyQkFpQ1c7QUFDWlIsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLFVBQVQ7QUFDQSxRQUFJLEtBQUtiLGFBQUwsQ0FBbUJvQixJQUFuQixJQUEyQixJQUEvQixFQUNJOUIsRUFBRSxDQUFDMkIsR0FBSCxDQUFPQyxPQUFQLENBQWdCLEtBQUtsQixhQUFMLENBQW1Cb0IsSUFBbkM7QUFDUDtBQXJDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQmFzZUl0ZW1DdXN0b20sXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIGxiU3R0ICAgICAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYk5hbWUgICAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgbGJVc2VyTmFtZSAgICAgIDogY2MuTGFiZWwsXG4gICAgICAgIGxiQWRkcmVzcyAgICAgICA6IGNjLkxhYmVsLFxuICAgICAgICBsYlBob25lICAgICAgICAgOiBjYy5MYWJlbCxcbiAgICAgICAgX2RhdGFUcmFuc2ZlciAgIDogbnVsbCxcbiAgICAgICAgX2NiOiBudWxsXG4gICAgfSxcbiAgICBpbml0KGRhdGEsIHN0dCkge1xuICAgICAgICB0aGlzLl9kYXRhVHJhbnNmZXIgICAgICA9IGRhdGE7XG4gICAgICAgIHRoaXMubGJTdHQuc3RyaW5nICAgICAgID0gc3R0KzE7XG4gICAgICAgIHRoaXMubGJOYW1lLnN0cmluZyAgICAgID0gZGF0YS5hZ05hbWU7XG4gICAgICAgIHRoaXMubGJVc2VyTmFtZS5zdHJpbmcgID0gZGF0YS5uYW1lO1xuICAgICAgICB0aGlzLmxiUGhvbmUuc3RyaW5nICAgICA9IGRhdGEucGhvbmUgPT0gbnVsbD8gXCJcIiA6IGRhdGEucGhvbmU7XG4gICAgICAgIHRoaXMubGJBZGRyZXNzLnN0cmluZyAgID0gZGF0YS5hZGRyZXNzO1xuICAgIH0sXG4gICAgZXZlbnRUcmFuc2ZlcigpIHtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBpZiAodGhpcy5fY2IpXG4gICAgICAgICAgICB0aGlzLl9jYih0aGlzLl9kYXRhVHJhbnNmZXIpO1xuICAgIH0sXG4gICAgYWRkRXZlbnRTZWxlY3QoY2FsbEJhY2spIHtcbiAgICAgICAgdGhpcy5fY2IgPSBjYWxsQmFjaztcbiAgICB9LFxuICAgIGV2ZW50WmFsbygpIHtcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xuICAgICAgICBpZiAodGhpcy5fZGF0YVRyYW5zZmVyLnBob25lICE9IG51bGwpXG4gICAgICAgIGNjLnN5cy5vcGVuVVJMKFwiaHR0cHM6Ly96YWxvLm1lL1wiK3RoaXMuX2RhdGFUcmFuc2Zlci5waG9uZSk7XG4gICAgfSxcbiAgICBldmVudEZhY2Vib29rKCkge1xuICAgICAgICBtbS5hdWRpby5wbGF5QnV0dG9uKCk7XG4gICAgICAgIGlmICh0aGlzLl9kYXRhVHJhbnNmZXIuZmFjZSAhPSBudWxsKVxuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoIHRoaXMuX2RhdGFUcmFuc2Zlci5mYWNlKTtcbiAgICB9XG5cbn0pO1xuIl19

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccG9ydGFsXFxEYWlMeUl0ZW0uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkJhc2VJdGVtQ3VzdG9tIiwicHJvcGVydGllcyIsImxiU3R0IiwiTGFiZWwiLCJsYk5hbWUiLCJsYlVzZXJOYW1lIiwibGJBZGRyZXNzIiwibGJQaG9uZSIsIl9kYXRhVHJhbnNmZXIiLCJfY2IiLCJpbml0IiwiZGF0YSIsInN0dCIsInN0cmluZyIsImFnTmFtZSIsIm5hbWUiLCJwaG9uZSIsImFkZHJlc3MiLCJldmVudFRyYW5zZmVyIiwibW0iLCJhdWRpbyIsInBsYXlCdXR0b24iLCJhZGRFdmVudFNlbGVjdCIsImNhbGxCYWNrIiwiZXZlbnRaYWxvIiwic3lzIiwib3BlblVSTCIsImV2ZW50RmFjZWJvb2siLCJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsY0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsS0FBSyxFQUFhSixFQUFFLENBQUNLLEtBRGI7QUFFUkMsSUFBQUEsTUFBTSxFQUFZTixFQUFFLENBQUNLLEtBRmI7QUFHUkUsSUFBQUEsVUFBVSxFQUFRUCxFQUFFLENBQUNLLEtBSGI7QUFJUkcsSUFBQUEsU0FBUyxFQUFTUixFQUFFLENBQUNLLEtBSmI7QUFLUkksSUFBQUEsT0FBTyxFQUFXVCxFQUFFLENBQUNLLEtBTGI7QUFNUkssSUFBQUEsYUFBYSxFQUFLLElBTlY7QUFPUkMsSUFBQUEsR0FBRyxFQUFFO0FBUEcsR0FIUDtBQVlMQyxFQUFBQSxJQVpLLGdCQVlBQyxJQVpBLEVBWU1DLEdBWk4sRUFZVztBQUNaLFNBQUtKLGFBQUwsR0FBMEJHLElBQTFCO0FBQ0EsU0FBS1QsS0FBTCxDQUFXVyxNQUFYLEdBQTBCRCxHQUFHLEdBQUMsQ0FBOUI7QUFDQSxTQUFLUixNQUFMLENBQVlTLE1BQVosR0FBMEJGLElBQUksQ0FBQ0csTUFBL0I7QUFDQSxTQUFLVCxVQUFMLENBQWdCUSxNQUFoQixHQUEwQkYsSUFBSSxDQUFDSSxJQUEvQjtBQUNBLFNBQUtSLE9BQUwsQ0FBYU0sTUFBYixHQUEwQkYsSUFBSSxDQUFDSyxLQUFMLElBQWMsSUFBZCxHQUFvQixFQUFwQixHQUF5QkwsSUFBSSxDQUFDSyxLQUF4RDtBQUNBLFNBQUtWLFNBQUwsQ0FBZU8sTUFBZixHQUEwQkYsSUFBSSxDQUFDTSxPQUEvQjtBQUNILEdBbkJJO0FBb0JMQyxFQUFBQSxhQXBCSywyQkFvQlc7QUFDWkMsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLFVBQVQ7QUFDQSxRQUFJLEtBQUtaLEdBQVQsRUFDSSxLQUFLQSxHQUFMLENBQVMsS0FBS0QsYUFBZDtBQUNQLEdBeEJJO0FBeUJMYyxFQUFBQSxjQXpCSywwQkF5QlVDLFFBekJWLEVBeUJvQjtBQUNyQixTQUFLZCxHQUFMLEdBQVdjLFFBQVg7QUFDSCxHQTNCSTtBQTRCTEMsRUFBQUEsU0E1QkssdUJBNEJPO0FBQ1JMLElBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTQyxVQUFUO0FBQ0EsUUFBSSxLQUFLYixhQUFMLENBQW1CUSxLQUFuQixJQUE0QixJQUFoQyxFQUNBbEIsRUFBRSxDQUFDMkIsR0FBSCxDQUFPQyxPQUFQLENBQWUscUJBQW1CLEtBQUtsQixhQUFMLENBQW1CUSxLQUFyRDtBQUNILEdBaENJO0FBaUNMVyxFQUFBQSxhQWpDSywyQkFpQ1c7QUFDWlIsSUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVNDLFVBQVQ7QUFDQSxRQUFJLEtBQUtiLGFBQUwsQ0FBbUJvQixJQUFuQixJQUEyQixJQUEvQixFQUNJOUIsRUFBRSxDQUFDMkIsR0FBSCxDQUFPQyxPQUFQLENBQWdCLEtBQUtsQixhQUFMLENBQW1Cb0IsSUFBbkM7QUFDUDtBQXJDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5CYXNlSXRlbUN1c3RvbSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgbGJTdHQgICAgICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJOYW1lICAgICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJVc2VyTmFtZSAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJBZGRyZXNzICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgbGJQaG9uZSAgICAgICAgIDogY2MuTGFiZWwsXHJcbiAgICAgICAgX2RhdGFUcmFuc2ZlciAgIDogbnVsbCxcclxuICAgICAgICBfY2I6IG51bGxcclxuICAgIH0sXHJcbiAgICBpbml0KGRhdGEsIHN0dCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGFUcmFuc2ZlciAgICAgID0gZGF0YTtcclxuICAgICAgICB0aGlzLmxiU3R0LnN0cmluZyAgICAgICA9IHN0dCsxO1xyXG4gICAgICAgIHRoaXMubGJOYW1lLnN0cmluZyAgICAgID0gZGF0YS5hZ05hbWU7XHJcbiAgICAgICAgdGhpcy5sYlVzZXJOYW1lLnN0cmluZyAgPSBkYXRhLm5hbWU7XHJcbiAgICAgICAgdGhpcy5sYlBob25lLnN0cmluZyAgICAgPSBkYXRhLnBob25lID09IG51bGw/IFwiXCIgOiBkYXRhLnBob25lO1xyXG4gICAgICAgIHRoaXMubGJBZGRyZXNzLnN0cmluZyAgID0gZGF0YS5hZGRyZXNzO1xyXG4gICAgfSxcclxuICAgIGV2ZW50VHJhbnNmZXIoKSB7XHJcbiAgICAgICAgbW0uYXVkaW8ucGxheUJ1dHRvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jYilcclxuICAgICAgICAgICAgdGhpcy5fY2IodGhpcy5fZGF0YVRyYW5zZmVyKTtcclxuICAgIH0sXHJcbiAgICBhZGRFdmVudFNlbGVjdChjYWxsQmFjaykge1xyXG4gICAgICAgIHRoaXMuX2NiID0gY2FsbEJhY2s7XHJcbiAgICB9LFxyXG4gICAgZXZlbnRaYWxvKCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBpZiAodGhpcy5fZGF0YVRyYW5zZmVyLnBob25lICE9IG51bGwpXHJcbiAgICAgICAgY2Muc3lzLm9wZW5VUkwoXCJodHRwczovL3phbG8ubWUvXCIrdGhpcy5fZGF0YVRyYW5zZmVyLnBob25lKTtcclxuICAgIH0sXHJcbiAgICBldmVudEZhY2Vib29rKCkge1xyXG4gICAgICAgIG1tLmF1ZGlvLnBsYXlCdXR0b24oKTtcclxuICAgICAgICBpZiAodGhpcy5fZGF0YVRyYW5zZmVyLmZhY2UgIT0gbnVsbClcclxuICAgICAgICAgICAgY2Muc3lzLm9wZW5VUkwoIHRoaXMuX2RhdGFUcmFuc2Zlci5mYWNlKTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=